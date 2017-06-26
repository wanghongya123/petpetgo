"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["index.html","dc2ec72fa9c4309086b1bb46e73385eb"],["static/css/main.7169f60c.css","e92012d618fe68c03e3802cf950312f4"],["static/js/main.183d1aba.js","70709760db2aaf955e6529e5cd53ac9f"],["static/media/bgi0.862d649e.jpg","862d649e224ace8fd333c70227e2ef58"],["static/media/bgi1.e0dee797.jpg","e0dee7976067ee7c074b387ee084731b"],["static/media/cat-logo.b4d809a1.png","b4d809a12f35d1c35799fc6c7e27495c"],["static/media/fandian.50d23836.jpg","50d2383680e12b2c789abcdd07e71488"],["static/media/iconfont.29ec57d6.woff","29ec57d6aee391160d3b7d045e966576"],["static/media/iconfont.3a8468ec.svg","3a8468ec899980a18f859fe3cbf63187"],["static/media/iconfont.912443b4.ttf","912443b40d1b2ef6f97a3a462fcc93ff"],["static/media/iconfont.cb27c265.eot","cb27c265718e7c73089880202437f767"],["static/media/time2.15ddd8ac.jpg","15ddd8acf42333e14be367261dc6696d"],["static/media/time3.da3df29b.jpg","da3df29b83668df94b60bfa37510151c"],["static/media/time4.33839cfe.jpg","33839cfe8972b9227a13b8b26fe7411c"],["static/media/time5.57f47cdc.jpg","57f47cdcfbd308d6271c8d7280912ac3"],["static/media/time6.88565ba6.jpg","88565ba66624c822aa850fa8e24f6ca1"],["static/media/timg.f5ee5445.jpg","f5ee5445ccb16b7016820d52154255c0"],["static/media/timg1.d7050ecc.jpg","d7050eccdae4373a9a6ce09f5f88a421"],["static/media/zhu.ac43c6e8.jpg","ac43c6e810ab8f43cf3a5a02178ae20f"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);t=urlsToCacheKeys.has(a);t||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/petpetgo/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});