// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-stride2offset@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-absf@v0.2.2-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-float32@v0.2.2-esm/index.mjs";function n(e,t,n,d){var i,m,o;if(i=0,e<=0)return i;for(m=d,o=0;o<e;o++)i=r(i+s(t[m])),m+=n;return i}function d(e,s,r){return n(e,s,r,t(e,r))}e(d,"ndarray",n);export{d as default,n as ndarray};
//# sourceMappingURL=index.mjs.map
