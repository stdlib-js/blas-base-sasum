"use strict";var v=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var n=v(function(A,q){
var y=require('@stdlib/math-base-special-absf/dist'),j=require('@stdlib/number-float64-base-to-float32/dist');function l(e,r,a,s){var i,u,t;if(i=0,e<=0)return i;for(u=s,t=0;t<e;t++)i=j(i+y(r[u])),u+=a;return i}q.exports=l
});var m=v(function(B,f){
var R=require('@stdlib/strided-base-stride2offset/dist'),_=n();function b(e,r,a){var s=R(e,a);return _(e,r,a,s)}f.exports=b
});var d=v(function(C,x){
var E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=m(),O=n();E(c,"ndarray",O);x.exports=c
});var g=require("path").join,h=require('@stdlib/utils-try-require/dist'),k=require('@stdlib/assert-is-error/dist'),w=d(),o,p=h(g(__dirname,"./native.js"));k(p)?o=w:o=p;module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
