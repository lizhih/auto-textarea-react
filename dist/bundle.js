module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var u=t[n]={i:n,l:!1,exports:{}};return e[n].call(u.exports,u,u.exports,r),u.l=!0,u.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var u in e)r.d(n,u,function(t){return e[t]}.bind(null,u));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t){e.exports=require("react")},function(e,t,r){"use strict";r.r(t),r.d(t,"AutoTextArea",(function(){return o}));var n=r(0),u=r.n(n),o=function(e){var t=e.className,r=e.defaultValue,o=e.placeholder,a=e.onChange,c=Object(n.useRef)(),l=Object(n.useRef)();return Object(n.useEffect)((function(){var e=function(){var e=l.current;e.style.height="auto",e.style.height=e.scrollHeight+"px",c.current.style.height=e.scrollHeight+"px"};return l.current&&l.current.addEventListener("input",e),function(){l.current&&l.current.removeEventListener("input",e)}}),[]),u.a.createElement("div",{className:t,ref:c},u.a.createElement("textarea",{ref:l,placeholder:o,defaultValue:r,onChange:a}))};o.defaultProps={className:"",defaultValue:"",placeholder:"enter...",onChange:function(){}}}]);