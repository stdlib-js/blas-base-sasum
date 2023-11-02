"use strict";var v=function(e,a){return function(){return a||e((a={exports:{}}).exports,a),a.exports}};var q=v(function(w,n){
var y=require('@stdlib/math-base-special-abs/dist'),j=require('@stdlib/number-float64-base-to-float32/dist');function b(e,a,u){var i,r;if(i=0,e<=0||u<=0)return i;for(e*=u,r=0;r<e;r+=u)i=j(i+y(a[r]));return i}n.exports=b
});var m=v(function(z,f){
var d=require('@stdlib/math-base-special-abs/dist'),F=require('@stdlib/number-float64-base-to-float32/dist');function R(e,a,u,i){var r,s,t;if(r=0,e<=0)return r;for(s=i,t=0;t<e;t++)r=F(r+d(a[s])),s+=u;return r}f.exports=R
});var p=v(function(A,l){
var T=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=q(),_=m();T(c,"ndarray",_);l.exports=c
});var E=require("path").join,O=require('@stdlib/utils-try-require/dist'),g=require('@stdlib/assert-is-error/dist'),h=p(),o,x=O(E(__dirname,"./native.js"));g(x)?o=h:o=x;module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
