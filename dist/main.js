!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);t(1)},function(e,n,t){var o=t(2),r=t(3);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1},a=(o(e.i,r,i),r.locals?r.locals:{});e.exports=a},function(e,n,t){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),a={};function c(e,n,t){for(var o=0;o<n.length;o++){var r={css:n[o][1],media:n[o][2],sourceMap:n[o][3]};a[e][o]?a[e][o](r):a[e].push(v(r,t))}}function l(e){var n=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=t.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){n.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(n);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var s,d=(s=[],function(e,n){return s[e]=n,s.filter(Boolean).join("\n")});function u(e,n,t,o){var r=t?"":o.css;if(e.styleSheet)e.styleSheet.cssText=d(n,r);else{var i=document.createTextNode(r),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}function p(e,n,t){var o=t.css,r=t.media,i=t.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var f=null,m=0;function v(e,n){var t,o,r;if(n.singleton){var i=m++;t=f||(f=l(n)),o=u.bind(null,t,i,!1),r=u.bind(null,t,i,!0)}else t=l(n),o=p.bind(null,t,n),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return o(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;o(e=n)}else r()}}e.exports=function(e,n,t){return(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r()),e=t.base?e+t.base:e,n=n||[],a[e]||(a[e]=[]),c(e,n,t),function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){a[e]||(a[e]=[]),c(e,n,t);for(var o=n.length;o<a[e].length;o++)a[e][o]();a[e].length=n.length,0===a[e].length&&delete a[e]}}}},function(e,n,t){(n=t(4)(!1)).push([e.i,'*{padding:0;margin:0;box-sizing:border-box}.l-body{display:grid;grid-template-columns:1fr 3fr;grid-template-rows:1fr auto;grid-template-areas:"head head" "nav main";grid-column-gap:2rem;grid-row-gap:3rem;font-family:Arial;color:#2C2C2C}.c-header{background-color:#E30914;grid-area:head;position:sticky;top:0;z-index:1}.c-header__heading{font-size:2.5rem;color:white;text-align:center;padding:1rem}.c-nav{grid-area:nav;margin-right:2rem;margin-left:4rem}.c-nav__stickywrap{position:sticky;top:10rem}.c-nav__heading{font-weight:bold;margin-bottom:2rem}.c-nav__list{list-style:none;margin-top:2rem;border-bottom:1px solid #2C2C2C}.c-nav__list:hover .c-nav__listitem{display:block}.c-nav__list:last-of-type{border-bottom:none}.c-nav__listitem{margin:1.5rem 0;display:none}.example-navbar{font-family:Helvetica;font-size:1.2rem;display:flex;justify-content:space-between}.example-img{padding:1rem}.example-navbar{background-color:#E30914}.example-navbar__list{display:flex;list-style-type:none}.example-navbar__listitem{padding:1rem;margin:0 1rem}example-a{text-decoration:none;color:#000000}.navhover1{transition:0.4s;color:#000000;font-size:20px;text-decoration:none;padding:0 10px;margin:0 10px}.navhover1:hover{background-color:#000000;color:#ffff;padding:35px 10px}.navhover2{color:#000000;font-size:20px;text-decoration:none;padding:20px 0;margin:0 20px;border-top:0px solid #000000;border-bottom:0px solid #000000;transition:0.2s ease}.navhover2:hover{transition:0.3s ease;border-top:4px solid #000000;border-bottom:4px solid #000000;padding:6px 0}.navhover3{color:#000000;font-size:20px;text-decoration:none;padding:20px 6px;margin:0 20px;border-bottom:0px solid #000000;transition:0.2s ease}.navhover3:hover{transition:0.3s ease;border-bottom:2px solid #000000;padding:6px 6px}\n',""]),e.exports=n},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",o=e[3];if(!o)return t;if(n&&"function"==typeof btoa){var r=(a=o,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(l," */")),i=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[t].concat(i).concat([r]).join("\n")}var a,c,l;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var o=0;o<e.length;o++){var r=[].concat(e[o]);t&&(r[2]?r[2]="".concat(t," and ").concat(r[2]):r[2]=t),n.push(r)}},n}}]);