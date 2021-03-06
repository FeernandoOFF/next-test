"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const stream_1 = __importDefault(require("stream"));
const zlib_1 = __importDefault(require("zlib"));
const http_1 = require("http");
const readOnlyCloudFrontHeaders = {
    'accept-encoding': true,
    'content-length': true,
    'if-modified-since': true,
    'if-none-match': true,
    'if-range': true,
    'if-unmodified-since': true,
    'transfer-encoding': true,
    via: true,
};
const HttpStatusCodes = {
    202: 'Accepted',
    502: 'Bad Gateway',
    400: 'Bad Request',
    409: 'Conflict',
    100: 'Continue',
    201: 'Created',
    417: 'Expectation Failed',
    424: 'Failed Dependency',
    403: 'Forbidden',
    504: 'Gateway Timeout',
    410: 'Gone',
    505: 'HTTP Version Not Supported',
    418: "I'm a teapot",
    419: 'Insufficient Space on Resource',
    507: 'Insufficient Storage',
    500: 'Server Error',
    411: 'Length Required',
    423: 'Locked',
    420: 'Method Failure',
    405: 'Method Not Allowed',
    301: 'Moved Permanently',
    302: 'Moved Temporarily',
    207: 'Multi-Status',
    300: 'Multiple Choices',
    511: 'Network Authentication Required',
    204: 'No Content',
    203: 'Non Authoritative Information',
    406: 'Not Acceptable',
    404: 'Not Found',
    501: 'Not Implemented',
    304: 'Not Modified',
    200: 'OK',
    206: 'Partial Content',
    402: 'Payment Required',
    308: 'Permanent Redirect',
    412: 'Precondition Failed',
    428: 'Precondition Required',
    102: 'Processing',
    407: 'Proxy Authentication Required',
    431: 'Request Header Fields Too Large',
    408: 'Request Timeout',
    413: 'Request Entity Too Large',
    414: 'Request-URI Too Long',
    416: 'Requested Range Not Satisfiable',
    205: 'Reset Content',
    303: 'See Other',
    503: 'Service Unavailable',
    101: 'Switching Protocols',
    307: 'Temporary Redirect',
    429: 'Too Many Requests',
    401: 'Unauthorized',
    422: 'Unprocessable Entity',
    415: 'Unsupported Media Type',
    305: 'Use Proxy',
};
const toCloudFrontHeaders = (headers) => {
    const result = {};
    Object.keys(headers).forEach((headerName) => {
        const lowerCaseHeaderName = headerName.toLowerCase();
        const headerValue = headers[headerName];
        if (readOnlyCloudFrontHeaders[lowerCaseHeaderName]) {
            return;
        }
        result[lowerCaseHeaderName] = [];
        if (headerValue instanceof Array) {
            headerValue.forEach((val) => {
                result[lowerCaseHeaderName].push({
                    key: headerName,
                    value: val.toString(),
                });
            });
        }
        else {
            result[lowerCaseHeaderName].push({
                key: headerName,
                value: headerValue.toString(),
            });
        }
    });
    return result;
};
const isGzipSupported = (headers) => {
    let gz = false;
    const ae = headers['accept-encoding'];
    if (ae) {
        for (let i = 0; i < ae.length; i++) {
            const { value } = ae[i];
            const bits = value.split(',').map((x) => x.split(';')[0].trim());
            if (bits.indexOf('gzip') !== -1) {
                gz = true;
            }
        }
    }
    return gz;
};
const handler = ({ request, }) => {
    const response = {
        headers: {},
    };
    const newStream = new stream_1.default.Readable();
    const req = Object.assign(newStream, http_1.IncomingMessage.prototype);
    req.url = request.uri;
    req.method = request.method;
    req.rawHeaders = [];
    req.headers = {};
    req.connection = {};
    if (request.querystring) {
        req.url = `${req.url}?${request.querystring}`;
    }
    const headers = request.headers || {};
    for (const lowercaseKey of Object.keys(headers)) {
        const headerKeyValPairs = headers[lowercaseKey];
        headerKeyValPairs.forEach((keyVal) => {
            req.rawHeaders.push(keyVal.key);
            req.rawHeaders.push(keyVal.value);
        });
        req.headers[lowercaseKey] = headerKeyValPairs[0].value;
    }
    req.getHeader = (name) => req.headers[name.toLowerCase()];
    req.getHeaders = () => req.headers;
    if (request.body && request.body.data) {
        req.push(request.body.data, request.body.encoding ? 'base64' : undefined);
    }
    req.push(null);
    const res = new stream_1.default();
    res.finished = false;
    Object.defineProperty(res, 'statusCode', {
        get() {
            return response.status;
        },
        set(statusCode) {
            response.status = statusCode;
            response.statusDescription = HttpStatusCodes[statusCode];
        },
    });
    res.headers = {};
    res.writeHead = (status, headers) => {
        response.status = status;
        if (headers) {
            res.headers = Object.assign(res.headers, headers);
        }
    };
    res.write = (chunk) => {
        if (!response.body) {
            response.body = Buffer.from('');
        }
        response.body = Buffer.concat([
            response.body,
            Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk),
        ]);
        return true;
    };
    const gz = isGzipSupported(headers);
    const responsePromise = new Promise((resolve) => {
        res.end = (text) => {
            if (res.finished === true) {
                return;
            }
            res.finished = true;
            if (text)
                res.write(text);
            if (!res.statusCode) {
                res.statusCode = 200;
            }
            if (response.body) {
                response.bodyEncoding = 'base64';
                response.body = gz
                    ? zlib_1.default.gzipSync(response.body).toString('base64')
                    : Buffer.from(response.body).toString('base64');
            }
            response.headers = toCloudFrontHeaders(res.headers);
            if (gz) {
                response.headers['content-encoding'] = [{ key: 'Content-Encoding', value: 'gzip' }];
            }
            resolve(response);
        };
    });
    res.setHeader = (name, value) => {
        res.headers[name.toLowerCase()] = value;
    };
    res.removeHeader = (name) => {
        delete res.headers[name.toLowerCase()];
    };
    res.getHeader = (name) => res.headers[name.toLowerCase()];
    res.getHeaders = () => res.headers;
    res.hasHeader = (name) => !!res.getHeader(name);
    return {
        req,
        res,
        responsePromise,
    };
};
exports.default = handler;
