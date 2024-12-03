(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[636],{6170:(e,t,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(5689)}])},5689:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>u});var n=r(4848);r(134);var o=r(1468),i=r(4596);let u=function(e){let{Component:t,pageProps:r}=e;return(0,n.jsx)(o.Kq,{store:i.M_,children:(0,n.jsx)(t,{...r})})}},4596:(e,t,r)=>{"use strict";r.d(t,{q0:()=>eI,TV:()=>ez,M_:()=>eF,As:()=>e$});var n,o=r(6540),i=r(1468);function u(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var a="function"==typeof Symbol&&Symbol.observable||"@@observable",c=()=>Math.random().toString(36).substring(7).split("").join("."),l={INIT:`@@redux/INIT${c()}`,REPLACE:`@@redux/REPLACE${c()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${c()}`};function f(e){if("object"!=typeof e||null===e)return!1;let t=e;for(;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||null===Object.getPrototypeOf(e)}function s(...e){return 0===e.length?e=>e:1===e.length?e[0]:e.reduce((e,t)=>(...r)=>e(t(...r)))}function p(e){return({dispatch:t,getState:r})=>n=>o=>"function"==typeof o?o(t,r,e):n(o)}var d=p(),y=Symbol.for("immer-nothing"),h=Symbol.for("immer-draftable"),_=Symbol.for("immer-state");function b(e,...t){throw Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var m=Object.getPrototypeOf;function v(e){return!!e&&!!e[_]}function w(e){return!!e&&(S(e)||Array.isArray(e)||!!e[h]||!!e.constructor?.[h]||x(e)||T(e))}var g=Object.prototype.constructor.toString();function S(e){if(!e||"object"!=typeof e)return!1;let t=m(e);if(null===t)return!0;let r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object||"function"==typeof r&&Function.toString.call(r)===g}function E(e,t){0===O(e)?Reflect.ownKeys(e).forEach(r=>{t(r,e[r],e)}):e.forEach((r,n)=>t(n,r,e))}function O(e){let t=e[_];return t?t.type_:Array.isArray(e)?1:x(e)?2:T(e)?3:0}function P(e,t){return 2===O(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function j(e,t,r){let n=O(e);2===n?e.set(t,r):3===n?e.add(r):e[t]=r}function x(e){return e instanceof Map}function T(e){return e instanceof Set}function N(e){return e.copy_||e.base_}function k(e,t){if(x(e))return new Map(e);if(T(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);let r=S(e);if(!0!==t&&("class_only"!==t||r)){let t=m(e);return null!==t&&r?{...e}:Object.assign(Object.create(t),e)}{let t=Object.getOwnPropertyDescriptors(e);delete t[_];let r=Reflect.ownKeys(t);for(let n=0;n<r.length;n++){let o=r[n],i=t[o];!1===i.writable&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(t[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:e[o]})}return Object.create(m(e),t)}}function C(e,t=!1){return D(e)||v(e)||!w(e)||(O(e)>1&&(e.set=e.add=e.clear=e.delete=A),Object.freeze(e),t&&Object.entries(e).forEach(([e,t])=>C(t,!0))),e}function A(){b(2)}function D(e){return Object.isFrozen(e)}var M={};function R(e){let t=M[e];return t||b(0,e),t}function z(e,t){t&&(R("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function I(e){F(e),e.drafts_.forEach(W),e.drafts_=null}function F(e){e===n&&(n=e.parent_)}function $(e){return n={drafts_:[],parent_:n,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function W(e){let t=e[_];0===t.type_||1===t.type_?t.revoke_():t.revoked_=!0}function L(e,t){t.unfinalizedDrafts_=t.drafts_.length;let r=t.drafts_[0];return void 0!==e&&e!==r?(r[_].modified_&&(I(t),b(4)),w(e)&&(e=U(t,e),t.parent_||X(t,e)),t.patches_&&R("Patches").generateReplacementPatches_(r[_].base_,e,t.patches_,t.inversePatches_)):e=U(t,r,[]),I(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==y?e:void 0}function U(e,t,r){if(D(t))return t;let n=t[_];if(!n)return E(t,(o,i)=>K(e,n,t,o,i,r)),t;if(n.scope_!==e)return t;if(!n.modified_)return X(e,n.base_,!0),n.base_;if(!n.finalized_){n.finalized_=!0,n.scope_.unfinalizedDrafts_--;let t=n.copy_,o=t,i=!1;3===n.type_&&(o=new Set(t),t.clear(),i=!0),E(o,(o,u)=>K(e,n,t,o,u,r,i)),X(e,t,!1),r&&e.patches_&&R("Patches").generatePatches_(n,r,e.patches_,e.inversePatches_)}return n.copy_}function K(e,t,r,n,o,i,u){if(v(o)){let u=U(e,o,i&&t&&3!==t.type_&&!P(t.assigned_,n)?i.concat(n):void 0);if(j(r,n,u),!v(u))return;e.canAutoFreeze_=!1}else u&&r.add(o);if(w(o)&&!D(o)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;U(e,o),(!t||!t.scope_.parent_)&&"symbol"!=typeof n&&Object.prototype.propertyIsEnumerable.call(r,n)&&X(e,o)}}function X(e,t,r=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&C(t,r)}var V={get(e,t){if(t===_)return e;let r=N(e);if(!P(r,t))return function(e,t,r){let n=G(t,r);return n?"value"in n?n.value:n.get?.call(e.draft_):void 0}(e,r,t);let n=r[t];return e.finalized_||!w(n)?n:n===B(e.base_,t)?(J(e),e.copy_[t]=Q(n,e)):n},has:(e,t)=>t in N(e),ownKeys:e=>Reflect.ownKeys(N(e)),set(e,t,r){let n=G(N(e),t);if(n?.set)return n.set.call(e.draft_,r),!0;if(!e.modified_){let n=B(N(e),t),o=n?.[_];if(o&&o.base_===r)return e.copy_[t]=r,e.assigned_[t]=!1,!0;if((r===n?0!==r||1/r==1/n:r!=r&&n!=n)&&(void 0!==r||P(e.base_,t)))return!0;J(e),H(e)}return!!(e.copy_[t]===r&&(void 0!==r||t in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[t]))||(e.copy_[t]=r,e.assigned_[t]=!0,!0)},deleteProperty:(e,t)=>(void 0!==B(e.base_,t)||t in e.base_?(e.assigned_[t]=!1,J(e),H(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0),getOwnPropertyDescriptor(e,t){let r=N(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n?{writable:!0,configurable:1!==e.type_||"length"!==t,enumerable:n.enumerable,value:r[t]}:n},defineProperty(){b(11)},getPrototypeOf:e=>m(e.base_),setPrototypeOf(){b(12)}},q={};function B(e,t){let r=e[_];return(r?N(r):e)[t]}function G(e,t){if(!(t in e))return;let r=m(e);for(;r;){let e=Object.getOwnPropertyDescriptor(r,t);if(e)return e;r=m(r)}}function H(e){!e.modified_&&(e.modified_=!0,e.parent_&&H(e.parent_))}function J(e){e.copy_||(e.copy_=k(e.base_,e.scope_.immer_.useStrictShallowCopy_))}function Q(e,t){let r=x(e)?R("MapSet").proxyMap_(e,t):T(e)?R("MapSet").proxySet_(e,t):function(e,t){let r=Array.isArray(e),o={type_:r?1:0,scope_:t?t.scope_:n,modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1},i=o,u=V;r&&(i=[o],u=q);let{revoke:a,proxy:c}=Proxy.revocable(i,u);return o.draft_=c,o.revoke_=a,c}(e,t);return(t?t.scope_:n).drafts_.push(r),r}E(V,(e,t)=>{q[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),q.deleteProperty=function(e,t){return q.set.call(this,e,t,void 0)},q.set=function(e,t,r){return V.set.call(this,e[0],t,r,e[0])};var Y=new class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,t,r)=>{let n;if("function"==typeof e&&"function"!=typeof t){let r=t;t=e;let n=this;return function(e=r,...o){return n.produce(e,e=>t.call(this,e,...o))}}if("function"!=typeof t&&b(6),void 0!==r&&"function"!=typeof r&&b(7),w(e)){let o=$(this),i=Q(e,void 0),u=!0;try{n=t(i),u=!1}finally{u?I(o):F(o)}return z(o,r),L(n,o)}if(e&&"object"==typeof e)b(1,e);else{if(void 0===(n=t(e))&&(n=e),n===y&&(n=void 0),this.autoFreeze_&&C(n,!0),r){let t=[],o=[];R("Patches").generateReplacementPatches_(e,n,t,o),r(t,o)}return n}},this.produceWithPatches=(e,t)=>{let r,n;return"function"==typeof e?(t,...r)=>this.produceWithPatches(t,t=>e(t,...r)):[this.produce(e,t,(e,t)=>{r=e,n=t}),r,n]},"boolean"==typeof e?.autoFreeze&&this.setAutoFreeze(e.autoFreeze),"boolean"==typeof e?.useStrictShallowCopy&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){var t;w(e)||b(8),v(e)&&(v(t=e)||b(10,t),e=function e(t){let r;if(!w(t)||D(t))return t;let n=t[_];if(n){if(!n.modified_)return n.base_;n.finalized_=!0,r=k(t,n.scope_.immer_.useStrictShallowCopy_)}else r=k(t,!0);return E(r,(t,n)=>{j(r,t,e(n))}),n&&(n.finalized_=!1),r}(t));let r=$(this),n=Q(e,void 0);return n[_].isManual_=!0,F(r),n}finishDraft(e,t){let r=e&&e[_];r&&r.isManual_||b(9);let{scope_:n}=r;return z(n,t),L(void 0,n)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let r;for(r=t.length-1;r>=0;r--){let n=t[r];if(0===n.path.length&&"replace"===n.op){e=n.value;break}}r>-1&&(t=t.slice(r+1));let n=R("Patches").applyPatches_;return v(e)?n(e,t):this.produce(e,e=>n(e,t))}},Z=Y.produce;Y.produceWithPatches.bind(Y),Y.setAutoFreeze.bind(Y),Y.setUseStrictShallowCopy.bind(Y),Y.applyPatches.bind(Y),Y.createDraft.bind(Y),Y.finishDraft.bind(Y),r(7836);var ee="undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!=arguments.length)return"object"==typeof arguments[0]?s:s.apply(null,arguments)};"undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__;var et=e=>e&&"function"==typeof e.match;function er(e,t){function r(...n){if(t){let r=t(...n);if(!r)throw Error(eM(0));return{type:e,payload:r.payload,..."meta"in r&&{meta:r.meta},..."error"in r&&{error:r.error}}}return{type:e,payload:n[0]}}return r.toString=()=>`${e}`,r.type=e,r.match=t=>f(t)&&"type"in t&&"string"==typeof t.type&&t.type===e,r}function en(e){return["type","payload","error","meta"].indexOf(e)>-1}var eo=class e extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,e.prototype)}static get[Symbol.species](){return e}concat(...e){return super.concat.apply(this,e)}prepend(...t){return 1===t.length&&Array.isArray(t[0])?new e(...t[0].concat(this)):new e(...t.concat(this))}};function ei(e){return w(e)?Z(e,()=>{}):e}function eu(e,t,r){return e.has(t)?e.get(t):e.set(t,r(t)).get(t)}var ea=()=>function(e){let{thunk:t=!0,immutableCheck:r=!0,serializableCheck:n=!0,actionCreatorCheck:o=!0}=e??{},i=new eo;return t&&("boolean"==typeof t?i.push(d):i.push(p(t.extraArgument))),i},ec=e=>t=>{setTimeout(t,e)},el=(e={type:"raf"})=>t=>(...r)=>{let n=t(...r),o=!0,i=!1,u=!1,a=new Set,c="tick"===e.type?queueMicrotask:"raf"===e.type?"undefined"!=typeof window&&window.requestAnimationFrame?window.requestAnimationFrame:ec(10):"callback"===e.type?e.queueNotification:ec(e.timeout),l=()=>{u=!1,i&&(i=!1,a.forEach(e=>e()))};return Object.assign({},n,{subscribe(e){let t=n.subscribe(()=>o&&e());return a.add(e),()=>{t(),a.delete(e)}},dispatch(e){try{return(i=!(o=!e?.meta?.RTK_autoBatch))&&!u&&(u=!0,c(l)),n.dispatch(e)}finally{o=!0}}})},ef=e=>function(t){let{autoBatch:r=!0}=t??{},n=new eo(e);return r&&n.push(el("object"==typeof r?r:void 0)),n};function es(e){let t;let r={},n=[],o={addCase(e,t){let n="string"==typeof e?e:e.type;if(!n)throw Error(eM(28));if(n in r)throw Error(eM(29));return r[n]=t,o},addMatcher:(e,t)=>(n.push({matcher:e,reducer:t}),o),addDefaultCase:e=>(t=e,o)};return e(o),[r,n,t]}var ep=(e,t)=>et(e)?e.match(t):e(t),ed=(e=21)=>{let t="",r=e;for(;r--;)t+="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW"[64*Math.random()|0];return t},ey=["name","message","stack","code"],eh=Symbol.for("rtk-slice-createasyncthunk"),e_=(e=>(e.reducer="reducer",e.reducerWithPrepare="reducerWithPrepare",e.asyncThunk="asyncThunk",e))(e_||{}),eb=function({creators:e}={}){let t=e?.asyncThunk?.[eh];return function(e){let r;let{name:n,reducerPath:o=n}=e;if(!n)throw Error(eM(11));let i=("function"==typeof e.reducers?e.reducers(function(){function e(e,t){return{_reducerDefinitionType:"asyncThunk",payloadCreator:e,...t}}return e.withTypes=()=>e,{reducer:e=>Object.assign({[e.name]:(...t)=>e(...t)}[e.name],{_reducerDefinitionType:"reducer"}),preparedReducer:(e,t)=>({_reducerDefinitionType:"reducerWithPrepare",prepare:e,reducer:t}),asyncThunk:e}}()):e.reducers)||{},u=Object.keys(i),a={},c={},l={},f=[],s={addCase(e,t){let r="string"==typeof e?e:e.type;if(!r)throw Error(eM(12));if(r in c)throw Error(eM(13));return c[r]=t,s},addMatcher:(e,t)=>(f.push({matcher:e,reducer:t}),s),exposeAction:(e,t)=>(l[e]=t,s),exposeCaseReducer:(e,t)=>(a[e]=t,s)};function p(){let[t={},r=[],n]="function"==typeof e.extraReducers?es(e.extraReducers):[e.extraReducers],o={...t,...c};return function(e,t){let r;let[n,o,i]=es(t);if("function"==typeof e)r=()=>ei(e());else{let t=ei(e);r=()=>t}function u(e=r(),t){let a=[n[t.type],...o.filter(({matcher:e})=>e(t)).map(({reducer:e})=>e)];return 0===a.filter(e=>!!e).length&&(a=[i]),a.reduce((e,r)=>{if(r){if(v(e)){let n=r(e,t);return void 0===n?e:n}if(w(e))return Z(e,e=>r(e,t));{let n=r(e,t);if(void 0===n){if(null===e)return e;throw Error("A case reducer on a non-draftable value must not return undefined")}return n}}return e},e)}return u.getInitialState=r,u}(e.initialState,e=>{for(let t in o)e.addCase(t,o[t]);for(let t of f)e.addMatcher(t.matcher,t.reducer);for(let t of r)e.addMatcher(t.matcher,t.reducer);n&&e.addDefaultCase(n)})}u.forEach(r=>{let o=i[r],u={reducerName:r,type:`${n}/${r}`,createNotation:"function"==typeof e.reducers};"asyncThunk"===o._reducerDefinitionType?function({type:e,reducerName:t},r,n,o){if(!o)throw Error(eM(18));let{payloadCreator:i,fulfilled:u,pending:a,rejected:c,settled:l,options:f}=r,s=o(e,i,f);n.exposeAction(t,s),u&&n.addCase(s.fulfilled,u),a&&n.addCase(s.pending,a),c&&n.addCase(s.rejected,c),l&&n.addMatcher(s.settled,l),n.exposeCaseReducer(t,{fulfilled:u||em,pending:a||em,rejected:c||em,settled:l||em})}(u,o,s,t):function({type:e,reducerName:t,createNotation:r},n,o){let i,u;if("reducer"in n){if(r&&"reducerWithPrepare"!==n._reducerDefinitionType)throw Error(eM(17));i=n.reducer,u=n.prepare}else i=n;o.addCase(e,i).exposeCaseReducer(t,i).exposeAction(t,u?er(e,u):er(e))}(u,o,s)});let d=e=>e,y=new Map;function h(e,t){return r||(r=p()),r(e,t)}function _(){return r||(r=p()),r.getInitialState()}function b(t,r=!1){function n(e){let n=e[t];return void 0===n&&r&&(n=_()),n}function o(t=d){let n=eu(y,r,()=>new WeakMap);return eu(n,t,()=>{let n={};for(let[o,i]of Object.entries(e.selectors??{}))n[o]=function(e,t,r,n){function o(i,...u){let a=t(i);return void 0===a&&n&&(a=r()),e(a,...u)}return o.unwrapped=e,o}(i,t,_,r);return n})}return{reducerPath:t,getSelectors:o,get selectors(){return o(n)},selectSlice:n}}let m={name:n,reducer:h,actions:l,caseReducers:a,getInitialState:_,...b(o),injectInto(e,{reducerPath:t,...r}={}){let n=t??o;return e.inject({reducerPath:n,reducer:h},r),{...m,...b(n,!0)}}};return m}}();function em(){}var ev=class{constructor(e){this.code=e,this.message=`task cancelled (reason: ${e})`}name="TaskAbortError";message},ew=(e,t)=>{if("function"!=typeof e)throw TypeError(eM(32))},eg=()=>{},eS=(e,t=eg)=>(e.catch(t),e),eE=(e,t)=>(e.addEventListener("abort",t,{once:!0}),()=>e.removeEventListener("abort",t)),eO=(e,t)=>{let r=e.signal;r.aborted||("reason"in r||Object.defineProperty(r,"reason",{enumerable:!0,value:t,configurable:!0,writable:!0}),e.abort(t))},eP=e=>{if(e.aborted){let{reason:t}=e;throw new ev(t)}},ej=e=>t=>eS((function(e,t){let r=eg;return new Promise((n,o)=>{let i=()=>o(new ev(e.reason));if(e.aborted){i();return}r=eE(e,i),t.finally(()=>r()).then(n,o)}).finally(()=>{r=eg})})(e,t).then(t=>(eP(e),t))),{assign:ex}=Object,eT="listenerMiddleware",eN=e=>{let{type:t,actionCreator:r,matcher:n,predicate:o,effect:i}=e;if(t)o=er(t).match;else if(r)t=r.type,o=r.match;else if(n)o=n;else if(o);else throw Error(eM(21));return ew(i,"options.listener"),{predicate:o,type:t,effect:i}},ek=ex(e=>{let{type:t,predicate:r,effect:n}=eN(e);return{id:ed(),effect:n,type:t,predicate:r,pending:new Set,unsubscribe:()=>{throw Error(eM(22))}}},{withTypes:()=>ek}),eC=ex(er(`${eT}/add`),{withTypes:()=>eC}),eA=ex(er(`${eT}/remove`),{withTypes:()=>eA}),eD=Symbol.for("rtk-state-proxy-original");function eM(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}let eR=eb({name:"auth",initialState:{token:null,user:null},reducers:{setAuth:(e,t)=>{e.token=t.payload.token,e.user=t.payload.user,t.payload.token?localStorage.setItem("token",t.payload.token):localStorage.removeItem("token")},clearAuth:e=>{e.token=null,e.user=null,localStorage.removeItem("token")}}}),{setAuth:ez,clearAuth:eI}=eR.actions,eF=function(e){let t,r;let n=ea(),{reducer:o,middleware:i,devTools:c=!0,preloadedState:p,enhancers:d}=e||{};if("function"==typeof o)t=o;else if(f(o))t=function(e){let t;let r=Object.keys(e),n={};for(let t=0;t<r.length;t++){let o=r[t];"function"==typeof e[o]&&(n[o]=e[o])}let o=Object.keys(n);try{!function(e){Object.keys(e).forEach(t=>{let r=e[t];if(void 0===r(void 0,{type:l.INIT}))throw Error(u(12));if(void 0===r(void 0,{type:l.PROBE_UNKNOWN_ACTION()}))throw Error(u(13))})}(n)}catch(e){t=e}return function(e={},r){if(t)throw t;let i=!1,a={};for(let t=0;t<o.length;t++){let c=o[t],l=n[c],f=e[c],s=l(f,r);if(void 0===s)throw r&&r.type,Error(u(14));a[c]=s,i=i||s!==f}return(i=i||o.length!==Object.keys(e).length)?a:e}}(o);else throw Error(eM(1));r="function"==typeof i?i(n):n();let y=s;c&&(y=ee({trace:!1,..."object"==typeof c&&c}));let h=ef(function(...e){return t=>(r,n)=>{let o=t(r,n),i=()=>{throw Error(u(15))},a={getState:o.getState,dispatch:(e,...t)=>i(e,...t)};return i=s(...e.map(e=>e(a)))(o.dispatch),{...o,dispatch:i}}}(...r));return function e(t,r,n){if("function"!=typeof t)throw Error(u(2));if("function"==typeof r&&"function"==typeof n||"function"==typeof n&&"function"==typeof arguments[3])throw Error(u(0));if("function"==typeof r&&void 0===n&&(n=r,r=void 0),void 0!==n){if("function"!=typeof n)throw Error(u(1));return n(e)(t,r)}let o=t,i=r,c=new Map,s=c,p=0,d=!1;function y(){s===c&&(s=new Map,c.forEach((e,t)=>{s.set(t,e)}))}function h(){if(d)throw Error(u(3));return i}function _(e){if("function"!=typeof e)throw Error(u(4));if(d)throw Error(u(5));let t=!0;y();let r=p++;return s.set(r,e),function(){if(t){if(d)throw Error(u(6));t=!1,y(),s.delete(r),c=null}}}function b(e){if(!f(e))throw Error(u(7));if(void 0===e.type)throw Error(u(8));if("string"!=typeof e.type)throw Error(u(17));if(d)throw Error(u(9));try{d=!0,i=o(i,e)}finally{d=!1}return(c=s).forEach(e=>{e()}),e}return b({type:l.INIT}),{dispatch:b,subscribe:_,getState:h,replaceReducer:function(e){if("function"!=typeof e)throw Error(u(10));o=e,b({type:l.REPLACE})},[a]:function(){return{subscribe(e){if("object"!=typeof e||null===e)throw Error(u(11));function t(){e.next&&e.next(h())}return t(),{unsubscribe:_(t)}},[a](){return this}}}}}(t,p,y(..."function"==typeof d?d(h):h()))}({reducer:{auth:eR.reducer}}),e$=()=>{let[e,t]=(0,o.useState)(!1),r=(0,i.d4)(e=>{var t;return null===(t=e.auth)||void 0===t?void 0:t.token}),n=(0,i.d4)(e=>{var t;return null===(t=e.auth)||void 0===t?void 0:t.user}),u=(0,i.wA)();return(0,o.useEffect)(()=>{t(!0)},[]),(0,o.useEffect)(()=>{if(e&&!r){let e=localStorage.getItem("token");e&&u(ez({token:e,user:"user_from_local_storage"}))}},[e,r,u]),{token:r,user:n,dispatch:u}}},134:()=>{},7154:(e,t,r)=>{"use strict";var n=r(6540),o="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},i=n.useSyncExternalStore,u=n.useRef,a=n.useEffect,c=n.useMemo,l=n.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,r,n,f){var s=u(null);if(null===s.current){var p={hasValue:!1,value:null};s.current=p}else p=s.current;var d=i(e,(s=c(function(){function e(e){if(!a){if(a=!0,i=e,e=n(e),void 0!==f&&p.hasValue){var t=p.value;if(f(t,e))return u=t}return u=e}if(t=u,o(i,e))return t;var r=n(e);return void 0!==f&&f(t,r)?t:(i=e,u=r)}var i,u,a=!1,c=void 0===r?null:r;return[function(){return e(t())},null===c?void 0:function(){return e(c())}]},[t,r,n,f]))[0],s[1]);return a(function(){p.hasValue=!0,p.value=d},[d]),l(d),d}},8418:(e,t,r)=>{"use strict";e.exports=r(7154)},1468:(e,t,r)=>{"use strict";r.d(t,{Kq:()=>D,d4:()=>p,wA:()=>z});var n=r(6540),o=r(8418),i=Symbol.for("react-redux-context"),u="undefined"!=typeof globalThis?globalThis:{},a=function(){if(!n.createContext)return{};let e=u[i]??(u[i]=new Map),t=e.get(n.createContext);return t||(t=n.createContext(null),e.set(n.createContext,t)),t}();function c(e=a){return function(){return n.useContext(e)}}var l=c(),f=()=>{throw Error("uSES not initialized!")},s=(e,t)=>e===t,p=function(e=a){let t=e===a?l:c(e),r=(e,r={})=>{let{equalityFn:o=s,devModeChecks:i={}}="function"==typeof r?{equalityFn:r}:r,{store:u,subscription:a,getServerState:c,stabilityCheck:l,identityFunctionCheck:p}=t();n.useRef(!0);let d=n.useCallback({[e.name]:t=>e(t)}[e.name],[e,l,i.stabilityCheck]),y=f(a.addNestedSub,u.getState,c||u.getState,d,o);return n.useDebugValue(y),y};return Object.assign(r,{withTypes:()=>r}),r}(),d=Symbol.for("react.element"),y=Symbol.for("react.portal"),h=Symbol.for("react.fragment"),_=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),m=Symbol.for("react.provider"),v=Symbol.for("react.context"),w=Symbol.for("react.server_context"),g=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),E=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),P=Symbol.for("react.lazy");Symbol.for("react.offscreen"),Symbol.for("react.client.reference");var j={notify(){},get:()=>[]},x=!!("undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement),T="undefined"!=typeof navigator&&"ReactNative"===navigator.product,N=x||T?n.useLayoutEffect:n.useEffect,k={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},C={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},A={[g]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[O]:C};Object.getOwnPropertyNames,Object.getOwnPropertySymbols,Object.getOwnPropertyDescriptor,Object.getPrototypeOf,Object.prototype;var D=function({store:e,context:t,children:r,serverState:o,stabilityCheck:i="once",identityFunctionCheck:u="once"}){let c=n.useMemo(()=>{let t=function(e,t){let r;let n=j,o=0,i=!1;function u(){l.onStateChange&&l.onStateChange()}function a(){if(o++,!r){let t,o;r=e.subscribe(u),t=null,o=null,n={clear(){t=null,o=null},notify(){(()=>{let e=t;for(;e;)e.callback(),e=e.next})()},get(){let e=[],r=t;for(;r;)e.push(r),r=r.next;return e},subscribe(e){let r=!0,n=o={callback:e,next:null,prev:o};return n.prev?n.prev.next=n:t=n,function(){r&&null!==t&&(r=!1,n.next?n.next.prev=n.prev:o=n.prev,n.prev?n.prev.next=n.next:t=n.next)}}}}}function c(){o--,r&&0===o&&(r(),r=void 0,n.clear(),n=j)}let l={addNestedSub:function(e){a();let t=n.subscribe(e),r=!1;return()=>{r||(r=!0,t(),c())}},notifyNestedSubs:function(){n.notify()},handleChangeWrapper:u,isSubscribed:function(){return i},trySubscribe:function(){i||(i=!0,a())},tryUnsubscribe:function(){i&&(i=!1,c())},getListeners:()=>n};return l}(e);return{store:e,subscription:t,getServerState:o?()=>o:void 0,stabilityCheck:i,identityFunctionCheck:u}},[e,o,i,u]),l=n.useMemo(()=>e.getState(),[e]);return N(()=>{let{subscription:t}=c;return t.onStateChange=t.notifyNestedSubs,t.trySubscribe(),l!==e.getState()&&t.notifyNestedSubs(),()=>{t.tryUnsubscribe(),t.onStateChange=void 0}},[c,l]),n.createElement((t||a).Provider,{value:c},r)};function M(e=a){let t=e===a?l:c(e),r=()=>{let{store:e}=t();return e};return Object.assign(r,{withTypes:()=>r}),r}var R=M(),z=function(e=a){let t=e===a?R:M(e),r=()=>t().dispatch;return Object.assign(r,{withTypes:()=>r}),r}();f=o.useSyncExternalStoreWithSelector,n.useSyncExternalStore}},e=>{var t=t=>e(e.s=t);e.O(0,[593,792],()=>(t(6170),t(4009))),_N_E=e.O()}]);