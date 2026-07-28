"use strict";var f=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(u){throw (r=0, u)}};};var a=f(function(c,i){
var n=require('@stdlib/math-base-assert-is-nanf/dist'),t=require('@stdlib/math-base-special-floorf/dist'),o=require('@stdlib/number-float64-base-to-float32/dist');function s(e){var r;return n(e)?NaN:e>0?1:(r=t(e),e===r?0:(r=o(r/2),r===t(r)?1:-1))}i.exports=s
});var v=a();module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
