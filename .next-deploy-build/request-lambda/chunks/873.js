exports.id = 873;
exports.ids = [873];
exports.modules = {

/***/ 4680:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports=function(n,r){"use strict";var e={};function __nested_webpack_require_51__(r){if(e[r]){return e[r].exports}var t=e[r]={i:r,l:false,exports:{}};n[r].call(t.exports,t,t.exports,__nested_webpack_require_51__);t.l=true;return t.exports}__nested_webpack_require_51__.ab=__dirname+"/";function startup(){return __nested_webpack_require_51__(903)}r(__nested_webpack_require_51__);return startup()}({148:function(n){"use strict";var r=function(n){var r=n.ignoreProcessEnv?{}:process.env;var e=function(t){var o=t.match(/(.?\${?(?:[a-zA-Z0-9_]+)?}?)/g)||[];return o.reduce(function(t,o){var c=/(.?)\${?([a-zA-Z0-9_]+)?}?/g.exec(o);var s=c[1];var i,f;if(s==="\\"){f=c[0];i=f.replace("\\$","$")}else{var p=c[2];f=c[0].substring(s.length);i=r.hasOwnProperty(p)?r[p]:n.parsed[p]||"";i=e(i)}return t.replace(f,i)},t)};for(var t in n.parsed){var o=r.hasOwnProperty(t)?r[t]:n.parsed[t];n.parsed[t]=e(o)}for(var c in n.parsed){r[c]=n.parsed[c]}return n};n.exports=r},548:function(n,r,e){const t=e(747);const o=e(622);function log(n){console.log(`[dotenv][DEBUG] ${n}`)}const c="\n";const s=/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/;const i=/\\n/g;const f=/\n|\r|\r\n/;function parse(n,r){const e=Boolean(r&&r.debug);const t={};n.toString().split(f).forEach(function(n,r){const o=n.match(s);if(o!=null){const n=o[1];let r=o[2]||"";const e=r.length-1;const s=r[0]==='"'&&r[e]==='"';const f=r[0]==="'"&&r[e]==="'";if(f||s){r=r.substring(1,e);if(s){r=r.replace(i,c)}}else{r=r.trim()}t[n]=r}else if(e){log(`did not match key and value when parsing line ${r+1}: ${n}`)}});return t}function config(n){let r=o.resolve(process.cwd(),".env");let e="utf8";let c=false;if(n){if(n.path!=null){r=n.path}if(n.encoding!=null){e=n.encoding}if(n.debug!=null){c=true}}try{const n=parse(t.readFileSync(r,{encoding:e}),{debug:c});Object.keys(n).forEach(function(r){if(!Object.prototype.hasOwnProperty.call(process.env,r)){process.env[r]=n[r]}else if(c){log(`"${r}" is already defined in \`process.env\` and will not be overwritten`)}});return{parsed:n}}catch(n){return{error:n}}}n.exports.config=config;n.exports.parse=parse},622:function(n){n.exports=__webpack_require__(1017)},747:function(n){n.exports=__webpack_require__(7147)},903:function(n,r,e){"use strict";e.r(r);e.d(r,"processEnv",function(){return processEnv});e.d(r,"loadEnvConfig",function(){return loadEnvConfig});var t=e(747);var o=e.n(t);var c=e(622);var s=e.n(c);var i=e(548);var f=e.n(i);var p=e(148);var u=e.n(p);let a=undefined;let d=[];function processEnv(n,r,e=console){var t;if(process.env.__NEXT_PROCESSED_ENV||n.length===0){return process.env}process.env.__NEXT_PROCESSED_ENV="true";const o=Object.assign({},process.env);const s={};for(const f of n){try{let n={};n.parsed=i.parse(f.contents);n=u()(n);if(n.parsed){e.info(`Loaded env from ${c.join(r||"",f.path)}`)}for(const r of Object.keys(n.parsed||{})){if(typeof s[r]==="undefined"&&typeof o[r]==="undefined"){s[r]=(t=n.parsed)===null||t===void 0?void 0:t[r]}}}catch(n){e.error(`Failed to load env from ${c.join(r||"",f.path)}`,n)}}return Object.assign(process.env,s)}function loadEnvConfig(n,r,e=console){if(a)return{combinedEnv:a,loadedEnvFiles:d};const o="production"==="test";const s=o?"test":r?"development":"production";const i=[`.env.${s}.local`,s!=="test"&&`.env.local`,`.env.${s}`,".env"].filter(Boolean);for(const r of i){const o=c.join(n,r);try{const n=t.statSync(o);if(!n.isFile()){continue}const c=t.readFileSync(o,"utf8");d.push({path:r,contents:c})}catch(n){if(n.code!=="ENOENT"){e.error(`Failed to load env from ${r}`,n)}}}a=processEnv(d,n,e);return{combinedEnv:a,loadedEnvFiles:d}}}},function(n){"use strict";!function(){n.r=function(n){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(n,"__esModule",{value:true})}}();!function(){n.n=function(r){var e=r&&r.__esModule?function getDefault(){return r["default"]}:function getModuleExports(){return r};n.d(e,"a",e);return e}}();!function(){var r=Object.prototype.hasOwnProperty;n.d=function(n,e,t){if(!r.call(n,e)){Object.defineProperty(n,e,{enumerable:true,get:t})}}}()});

/***/ }),

/***/ 3378:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
exports.Y = getApiHandler;
var _url = __webpack_require__(7310);
var _http = __webpack_require__(3685);
var _node = __webpack_require__(730);
var _utils = __webpack_require__(1720);
var _utils1 = __webpack_require__(9232);
var _node1 = __webpack_require__(5947);
function getApiHandler(ctx) {
    const { pageModule , encodedPreviewProps , pageIsDynamic  } = ctx;
    const { handleRewrites , handleBasePath , dynamicRouteMatcher , normalizeDynamicRouteParams ,  } = (0, _utils).getUtils(ctx);
    return async (rawReq, rawRes)=>{
        const req = rawReq instanceof _http.IncomingMessage ? new _node1.NodeNextRequest(rawReq) : rawReq;
        const res = rawRes instanceof _http.ServerResponse ? new _node1.NodeNextResponse(rawRes) : rawRes;
        try {
            // We need to trust the dynamic route params from the proxy
            // to ensure we are using the correct values
            const trustQuery = req.headers[_utils.vercelHeader];
            const parsedUrl = (0, _url).parse(req.url, true);
            handleRewrites(req, parsedUrl);
            if (parsedUrl.query.nextInternalLocale) {
                delete parsedUrl.query.nextInternalLocale;
            }
            handleBasePath(req, parsedUrl);
            let params = {};
            if (pageIsDynamic) {
                const result = normalizeDynamicRouteParams(trustQuery ? parsedUrl.query : dynamicRouteMatcher(parsedUrl.pathname));
                params = result.params;
            }
            await (0, _node).apiResolver(req.originalRequest, res.originalResponse, Object.assign({}, parsedUrl.query, params), await pageModule, encodedPreviewProps, true);
        } catch (err) {
            console.error(err);
            if (err instanceof _utils1.DecodeError) {
                res.statusCode = 400;
                res.body("Bad Request").send();
            } else {
                // Throw the error to crash the serverless function
                throw err;
            }
        }
    };
}

//# sourceMappingURL=api-handler.js.map

/***/ }),

/***/ 1720:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.getUtils = getUtils;
exports.vercelHeader = void 0;
var _url = __webpack_require__(7310);
var _querystring = __webpack_require__(3477);
var _normalizeLocalePath = __webpack_require__(4014);
var _pathMatch = __webpack_require__(5753);
var _routeRegex = __webpack_require__(5052);
var _routeMatcher = __webpack_require__(4226);
var _prepareDestination = __webpack_require__(9521);
var _acceptHeader = __webpack_require__(600);
var _detectLocaleCookie = __webpack_require__(2374);
var _detectDomainLocale = __webpack_require__(3539);
var _denormalizePagePath = __webpack_require__(4406);
var _cookie = _interopRequireDefault(__webpack_require__(252));
var _constants = __webpack_require__(6724);
var _requestMeta = __webpack_require__(2779);
var _removeTrailingSlash = __webpack_require__(3297);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const vercelHeader = "x-vercel-id";
exports.vercelHeader = vercelHeader;
function getUtils({ page , i18n , basePath , rewrites , pageIsDynamic  }) {
    let defaultRouteRegex;
    let dynamicRouteMatcher;
    let defaultRouteMatches;
    if (pageIsDynamic) {
        defaultRouteRegex = (0, _routeRegex).getNamedRouteRegex(page);
        dynamicRouteMatcher = (0, _routeMatcher).getRouteMatcher(defaultRouteRegex);
        defaultRouteMatches = dynamicRouteMatcher(page);
    }
    function handleRewrites(req, parsedUrl) {
        const rewriteParams = {};
        let fsPathname = parsedUrl.pathname;
        const matchesPage = ()=>{
            const fsPathnameNoSlash = (0, _removeTrailingSlash).removeTrailingSlash(fsPathname || "");
            return fsPathnameNoSlash === (0, _removeTrailingSlash).removeTrailingSlash(page) || (dynamicRouteMatcher == null ? void 0 : dynamicRouteMatcher(fsPathnameNoSlash));
        };
        const checkRewrite = (rewrite)=>{
            const matcher = (0, _pathMatch).getPathMatch(rewrite.source, {
                removeUnnamedParams: true,
                strict: true
            });
            let params = matcher(parsedUrl.pathname);
            if (rewrite.has && params) {
                const hasParams = (0, _prepareDestination).matchHas(req, rewrite.has, parsedUrl.query);
                if (hasParams) {
                    Object.assign(params, hasParams);
                } else {
                    params = false;
                }
            }
            if (params) {
                const { parsedDestination , destQuery  } = (0, _prepareDestination).prepareDestination({
                    appendParamsToQuery: true,
                    destination: rewrite.destination,
                    params: params,
                    query: parsedUrl.query
                });
                // if the rewrite destination is external break rewrite chain
                if (parsedDestination.protocol) {
                    return true;
                }
                Object.assign(rewriteParams, destQuery, params);
                Object.assign(parsedUrl.query, parsedDestination.query);
                delete parsedDestination.query;
                Object.assign(parsedUrl, parsedDestination);
                fsPathname = parsedUrl.pathname;
                if (basePath) {
                    fsPathname = fsPathname.replace(new RegExp(`^${basePath}`), "") || "/";
                }
                if (i18n) {
                    const destLocalePathResult = (0, _normalizeLocalePath).normalizeLocalePath(fsPathname, i18n.locales);
                    fsPathname = destLocalePathResult.pathname;
                    parsedUrl.query.nextInternalLocale = destLocalePathResult.detectedLocale || params.nextInternalLocale;
                }
                if (fsPathname === page) {
                    return true;
                }
                if (pageIsDynamic && dynamicRouteMatcher) {
                    const dynamicParams = dynamicRouteMatcher(fsPathname);
                    if (dynamicParams) {
                        parsedUrl.query = {
                            ...parsedUrl.query,
                            ...dynamicParams
                        };
                        return true;
                    }
                }
            }
            return false;
        };
        for (const rewrite1 of rewrites.beforeFiles || []){
            checkRewrite(rewrite1);
        }
        if (fsPathname !== page) {
            let finished = false;
            for (const rewrite of rewrites.afterFiles || []){
                finished = checkRewrite(rewrite);
                if (finished) break;
            }
            if (!finished && !matchesPage()) {
                for (const rewrite of rewrites.fallback || []){
                    finished = checkRewrite(rewrite);
                    if (finished) break;
                }
            }
        }
        return rewriteParams;
    }
    function handleBasePath(req, parsedUrl) {
        // always strip the basePath if configured since it is required
        req.url = req.url.replace(new RegExp(`^${basePath}`), "") || "/";
        parsedUrl.pathname = parsedUrl.pathname.replace(new RegExp(`^${basePath}`), "") || "/";
    }
    function getParamsFromRouteMatches(req, renderOpts, detectedLocale) {
        return (0, _routeMatcher).getRouteMatcher(function() {
            const { groups , routeKeys  } = defaultRouteRegex;
            return {
                re: {
                    // Simulate a RegExp match from the \`req.url\` input
                    exec: (str)=>{
                        const obj = (0, _querystring).parse(str);
                        const matchesHasLocale = i18n && detectedLocale && obj["1"] === detectedLocale;
                        // favor named matches if available
                        const routeKeyNames = Object.keys(routeKeys || {});
                        const filterLocaleItem = (val)=>{
                            if (i18n) {
                                // locale items can be included in route-matches
                                // for fallback SSG pages so ensure they are
                                // filtered
                                const isCatchAll = Array.isArray(val);
                                const _val = isCatchAll ? val[0] : val;
                                if (typeof _val === "string" && i18n.locales.some((item)=>{
                                    if (item.toLowerCase() === _val.toLowerCase()) {
                                        detectedLocale = item;
                                        renderOpts.locale = detectedLocale;
                                        return true;
                                    }
                                    return false;
                                })) {
                                    // remove the locale item from the match
                                    if (isCatchAll) {
                                        val.splice(0, 1);
                                    }
                                    // the value is only a locale item and
                                    // shouldn't be added
                                    return isCatchAll ? val.length === 0 : true;
                                }
                            }
                            return false;
                        };
                        if (routeKeyNames.every((name)=>obj[name])) {
                            return routeKeyNames.reduce((prev, keyName)=>{
                                const paramName = routeKeys == null ? void 0 : routeKeys[keyName];
                                if (paramName && !filterLocaleItem(obj[keyName])) {
                                    prev[groups[paramName].pos] = obj[keyName];
                                }
                                return prev;
                            }, {});
                        }
                        return Object.keys(obj).reduce((prev, key)=>{
                            if (!filterLocaleItem(obj[key])) {
                                let normalizedKey = key;
                                if (matchesHasLocale) {
                                    normalizedKey = parseInt(key, 10) - 1 + "";
                                }
                                return Object.assign(prev, {
                                    [normalizedKey]: obj[key]
                                });
                            }
                            return prev;
                        }, {});
                    }
                },
                groups
            };
        }())(req.headers["x-now-route-matches"]);
    }
    function interpolateDynamicPath(pathname, params) {
        if (!defaultRouteRegex) return pathname;
        for (const param of Object.keys(defaultRouteRegex.groups)){
            const { optional , repeat  } = defaultRouteRegex.groups[param];
            let builtParam = `[${repeat ? "..." : ""}${param}]`;
            if (optional) {
                builtParam = `[${builtParam}]`;
            }
            const paramIdx = pathname.indexOf(builtParam);
            if (paramIdx > -1) {
                let paramValue;
                if (Array.isArray(params[param])) {
                    paramValue = params[param].map((v)=>v && encodeURIComponent(v)).join("/");
                } else {
                    paramValue = params[param] && encodeURIComponent(params[param]);
                }
                pathname = pathname.slice(0, paramIdx) + (paramValue || "") + pathname.slice(paramIdx + builtParam.length);
            }
        }
        return pathname;
    }
    function normalizeVercelUrl(req, trustQuery, paramKeys) {
        // make sure to normalize req.url on Vercel to strip dynamic params
        // from the query which are added during routing
        if (pageIsDynamic && trustQuery && defaultRouteRegex) {
            const _parsedUrl = (0, _url).parse(req.url, true);
            delete _parsedUrl.search;
            for (const param of paramKeys || Object.keys(defaultRouteRegex.groups)){
                delete _parsedUrl.query[param];
            }
            req.url = (0, _url).format(_parsedUrl);
        }
    }
    function normalizeDynamicRouteParams(params, ignoreOptional) {
        let hasValidParams = true;
        if (!defaultRouteRegex) return {
            params,
            hasValidParams: false
        };
        params = Object.keys(defaultRouteRegex.groups).reduce((prev, key)=>{
            let value = params[key];
            // if the value matches the default value we can't rely
            // on the parsed params, this is used to signal if we need
            // to parse x-now-route-matches or not
            const defaultValue = defaultRouteMatches[key];
            const isOptional = defaultRouteRegex.groups[key].optional;
            const isDefaultValue = Array.isArray(defaultValue) ? defaultValue.some((defaultVal)=>{
                return Array.isArray(value) ? value.some((val)=>val.includes(defaultVal)) : value == null ? void 0 : value.includes(defaultVal);
            }) : value == null ? void 0 : value.includes(defaultValue);
            if (isDefaultValue || typeof value === "undefined" && !(isOptional && ignoreOptional)) {
                hasValidParams = false;
            }
            // non-provided optional values should be undefined so normalize
            // them to undefined
            if (isOptional && (!value || Array.isArray(value) && value.length === 1 && // fallback optional catch-all SSG pages have
            // [[...paramName]] for the root path on Vercel
            (value[0] === "index" || value[0] === `[[...${key}]]`))) {
                value = undefined;
                delete params[key];
            }
            // query values from the proxy aren't already split into arrays
            // so make sure to normalize catch-all values
            if (value && typeof value === "string" && defaultRouteRegex.groups[key].repeat) {
                value = value.split("/");
            }
            if (value) {
                prev[key] = value;
            }
            return prev;
        }, {});
        return {
            params,
            hasValidParams
        };
    }
    function handleLocale(req, res, parsedUrl, routeNoAssetPath, shouldNotRedirect) {
        if (!i18n) return;
        const pathname = parsedUrl.pathname || "/";
        let defaultLocale = i18n.defaultLocale;
        let detectedLocale = (0, _detectLocaleCookie).detectLocaleCookie(req, i18n.locales);
        let acceptPreferredLocale;
        try {
            acceptPreferredLocale = i18n.localeDetection !== false ? (0, _acceptHeader).acceptLanguage(req.headers["accept-language"], i18n.locales) : detectedLocale;
        } catch (_) {
            acceptPreferredLocale = detectedLocale;
        }
        const { host  } = req.headers || {};
        // remove port from host and remove port if present
        const hostname = host && host.split(":")[0].toLowerCase();
        const detectedDomain = (0, _detectDomainLocale).detectDomainLocale(i18n.domains, hostname);
        if (detectedDomain) {
            defaultLocale = detectedDomain.defaultLocale;
            detectedLocale = defaultLocale;
            (0, _requestMeta).addRequestMeta(req, "__nextIsLocaleDomain", true);
        }
        // if not domain specific locale use accept-language preferred
        detectedLocale = detectedLocale || acceptPreferredLocale;
        let localeDomainRedirect;
        const localePathResult = (0, _normalizeLocalePath).normalizeLocalePath(pathname, i18n.locales);
        routeNoAssetPath = (0, _normalizeLocalePath).normalizeLocalePath(routeNoAssetPath, i18n.locales).pathname;
        if (localePathResult.detectedLocale) {
            detectedLocale = localePathResult.detectedLocale;
            req.url = (0, _url).format({
                ...parsedUrl,
                pathname: localePathResult.pathname
            });
            (0, _requestMeta).addRequestMeta(req, "__nextStrippedLocale", true);
            parsedUrl.pathname = localePathResult.pathname;
        }
        // If a detected locale is a domain specific locale and we aren't already
        // on that domain and path prefix redirect to it to prevent duplicate
        // content from multiple domains
        if (detectedDomain) {
            const localeToCheck = localePathResult.detectedLocale ? detectedLocale : acceptPreferredLocale;
            const matchedDomain = (0, _detectDomainLocale).detectDomainLocale(i18n.domains, undefined, localeToCheck);
            if (matchedDomain && matchedDomain.domain !== detectedDomain.domain) {
                localeDomainRedirect = `http${matchedDomain.http ? "" : "s"}://${matchedDomain.domain}/${localeToCheck === matchedDomain.defaultLocale ? "" : localeToCheck}`;
            }
        }
        const denormalizedPagePath = (0, _denormalizePagePath).denormalizePagePath(pathname);
        const detectedDefaultLocale = !detectedLocale || detectedLocale.toLowerCase() === defaultLocale.toLowerCase();
        const shouldStripDefaultLocale = false;
        // detectedDefaultLocale &&
        // denormalizedPagePath.toLowerCase() === \`/\${i18n.defaultLocale.toLowerCase()}\`
        const shouldAddLocalePrefix = !detectedDefaultLocale && denormalizedPagePath === "/";
        detectedLocale = detectedLocale || i18n.defaultLocale;
        if (!shouldNotRedirect && !req.headers[vercelHeader] && i18n.localeDetection !== false && (localeDomainRedirect || shouldAddLocalePrefix || shouldStripDefaultLocale)) {
            // set the NEXT_LOCALE cookie when a user visits the default locale
            // with the locale prefix so that they aren't redirected back to
            // their accept-language preferred locale
            if (shouldStripDefaultLocale && acceptPreferredLocale !== defaultLocale) {
                const previous = res.getHeader("set-cookie");
                res.setHeader("set-cookie", [
                    ...typeof previous === "string" ? [
                        previous
                    ] : Array.isArray(previous) ? previous : [],
                    _cookie.default.serialize("NEXT_LOCALE", defaultLocale, {
                        httpOnly: true,
                        path: "/"
                    }), 
                ]);
            }
            res.setHeader("Location", (0, _url).format({
                // make sure to include any query values when redirecting
                ...parsedUrl,
                pathname: localeDomainRedirect ? localeDomainRedirect : shouldStripDefaultLocale ? basePath || "/" : `${basePath}/${detectedLocale}`
            }));
            res.statusCode = _constants.TEMPORARY_REDIRECT_STATUS;
            res.end();
            return;
        }
        detectedLocale = localePathResult.detectedLocale || detectedDomain && detectedDomain.defaultLocale || defaultLocale;
        return {
            defaultLocale,
            detectedLocale,
            routeNoAssetPath
        };
    }
    return {
        handleLocale,
        handleRewrites,
        handleBasePath,
        defaultRouteRegex,
        normalizeVercelUrl,
        dynamicRouteMatcher,
        defaultRouteMatches,
        interpolateDynamicPath,
        getParamsFromRouteMatches,
        normalizeDynamicRouteParams
    };
}

//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 9164:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var _nodeFetch = _interopRequireWildcard(__webpack_require__(9371));
function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function") return null;
    var cache = new WeakMap();
    _getRequireWildcardCache = function() {
        return cache;
    };
    return cache;
}
function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache();
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
// Polyfill fetch() in the Node.js environment
if (!global.fetch) {
    const agent = ({ protocol  })=>protocol === "http:" ? global.__NEXT_HTTP_AGENT : global.__NEXT_HTTPS_AGENT;
    const fetchWithAgent = (url, opts, ...rest)=>{
        if (!opts) {
            opts = {
                agent
            };
        } else if (!opts.agent) {
            opts.agent = agent;
        }
        return (0, _nodeFetch).default(url, opts, ...rest);
    };
    global.fetch = fetchWithAgent;
    global.Headers = _nodeFetch.Headers;
    global.Request = _nodeFetch.Request;
    global.Response = _nodeFetch.Response;
}

//# sourceMappingURL=node-polyfill-fetch.js.map

/***/ })

};
;