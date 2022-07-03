exports.id = 72;
exports.ids = [72];
exports.modules = {

/***/ 858:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

(()=>{var e={41:e=>{"use strict";function _interpolate(e,r,n){const t=e.match(/(.?\${*[\w]*(?::-)?[\w]*}*)/g)||[];return t.reduce((function(e,o,s){const c=/(.?)\${*([\w]*(?::-)?[\w]*)?}*/g.exec(o);if(!c||c.length===0){return e}const i=c[1];let a,_;if(i==="\\"){_=c[0];a=_.replace("\\$","$")}else{const o=c[2].split(":-");const l=o[0];_=c[0].substring(i.length);a=Object.prototype.hasOwnProperty.call(r,l)?r[l]:n.parsed[l]||o[1]||"";if(o.length>1&&a){const r=t[s+1];t[s+1]="";e=e.replace(r,"")}a=_interpolate(a,r,n)}return e.replace(_,a)}),e)}function expand(e){const r=e.ignoreProcessEnv?{}:process.env;for(const n in e.parsed){const t=Object.prototype.hasOwnProperty.call(r,n)?r[n]:e.parsed[n];e.parsed[n]=_interpolate(t,r,e)}for(const n in e.parsed){r[n]=e.parsed[n]}return e}e.exports.j=expand},234:(e,r,n)=>{var t;const o=n(147);const s=n(17);const c=n(37);function log(e){console.log(`[dotenv][DEBUG] ${e}`)}const i="\n";const a=/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/;const _=/\\n/g;const l=/\r\n|\n|\r/;function parse(e,r){const n=Boolean(r&&r.debug);const t={};e.toString().split(l).forEach((function(e,r){const o=e.match(a);if(o!=null){const e=o[1];let r=o[2]||"";const n=r.length-1;const s=r[0]==='"'&&r[n]==='"';const c=r[0]==="'"&&r[n]==="'";if(c||s){r=r.substring(1,n);if(s){r=r.replace(_,i)}}else{r=r.trim()}t[e]=r}else if(n){log(`did not match key and value when parsing line ${r+1}: ${e}`)}}));return t}function resolveHome(e){return e[0]==="~"?s.join(c.homedir(),e.slice(1)):e}function config(e){let r=s.resolve(process.cwd(),".env");let n="utf8";let t=false;if(e){if(e.path!=null){r=resolveHome(e.path)}if(e.encoding!=null){n=e.encoding}if(e.debug!=null){t=true}}try{const e=parse(o.readFileSync(r,{encoding:n}),{debug:t});Object.keys(e).forEach((function(r){if(!Object.prototype.hasOwnProperty.call(process.env,r)){process.env[r]=e[r]}else if(t){log(`"${r}" is already defined in \`process.env\` and will not be overwritten`)}}));return{parsed:e}}catch(e){return{error:e}}}t=config;e.exports.Q=parse},147:e=>{"use strict";e.exports=__webpack_require__(7147)},37:e=>{"use strict";e.exports=__webpack_require__(2037)},17:e=>{"use strict";e.exports=__webpack_require__(1017)}};var r={};function __nccwpck_require__(n){var t=r[n];if(t!==undefined){return t.exports}var o=r[n]={exports:{}};var s=true;try{e[n](o,o.exports,__nccwpck_require__);s=false}finally{if(s)delete r[n]}return o.exports}(()=>{__nccwpck_require__.n=e=>{var r=e&&e.__esModule?()=>e["default"]:()=>e;__nccwpck_require__.d(r,{a:r});return r}})();(()=>{__nccwpck_require__.d=(e,r)=>{for(var n in r){if(__nccwpck_require__.o(r,n)&&!__nccwpck_require__.o(e,n)){Object.defineProperty(e,n,{enumerable:true,get:r[n]})}}}})();(()=>{__nccwpck_require__.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r)})();(()=>{__nccwpck_require__.r=e=>{if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(e,"__esModule",{value:true})}})();if(typeof __nccwpck_require__!=="undefined")__nccwpck_require__.ab=__dirname+"/";var n={};(()=>{"use strict";__nccwpck_require__.r(n);__nccwpck_require__.d(n,{processEnv:()=>processEnv,loadEnvConfig:()=>loadEnvConfig});var e=__nccwpck_require__(147);var r=__nccwpck_require__.n(e);var t=__nccwpck_require__(17);var o=__nccwpck_require__.n(t);var s=__nccwpck_require__(234);var c=__nccwpck_require__(41);let i=undefined;let a=[];function processEnv(e,r,n=console){var o;if(process.env.__NEXT_PROCESSED_ENV||e.length===0){return process.env}process.env.__NEXT_PROCESSED_ENV="true";const i=Object.assign({},process.env);const a={};for(const _ of e){try{let e={};e.parsed=s.Q(_.contents);e=(0,c.j)(e);if(e.parsed){n.info(`Loaded env from ${t.join(r||"",_.path)}`)}for(const r of Object.keys(e.parsed||{})){if(typeof a[r]==="undefined"&&typeof i[r]==="undefined"){a[r]=(o=e.parsed)===null||o===void 0?void 0:o[r]}}}catch(e){n.error(`Failed to load env from ${t.join(r||"",_.path)}`,e)}}return Object.assign(process.env,a)}function loadEnvConfig(r,n,o=console){if(i)return{combinedEnv:i,loadedEnvFiles:a};const s="production"==="test";const c=s?"test":n?"development":"production";const _=[`.env.${c}.local`,c!=="test"&&`.env.local`,`.env.${c}`,".env"].filter(Boolean);for(const n of _){const s=t.join(r,n);try{const r=e.statSync(s);if(!r.isFile()){continue}const t=e.readFileSync(s,"utf8");a.push({path:n,contents:t})}catch(e){if(e.code!=="ENOENT"){o.error(`Failed to load env from ${n}`,e)}}}i=processEnv(a,r,o);return{combinedEnv:i,loadedEnvFiles:a}}})();module.exports=n})();

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
var _requestMeta = __webpack_require__(4153);
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