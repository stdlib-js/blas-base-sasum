// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-absf@v0.1.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-float32@v0.1.1-esm/index.mjs";function n(r,n,s){var i,a;if(i=0,r<=0||s<=0)return i;for(r*=s,a=0;a<r;a+=s)i=t(i+e(n[a]));return i}function s(r,n,s,i){var a,d,o;if(a=0,r<=0)return a;for(d=i,o=0;o<r;o++)a=t(a+e(n[d])),d+=s;return a}r(n,"ndarray",s);export{n as default,s as ndarray};
//# sourceMappingURL=index.mjs.map
