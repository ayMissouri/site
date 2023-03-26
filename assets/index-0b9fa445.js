(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Rv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var qa={},Dv={get exports(){return qa},set exports(t){qa=t}},yl={},Ct={},Iv={get exports(){return Ct},set exports(t){Ct=t}},ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ro=Symbol.for("react.element"),kv=Symbol.for("react.portal"),Nv=Symbol.for("react.fragment"),zv=Symbol.for("react.strict_mode"),Fv=Symbol.for("react.profiler"),Ov=Symbol.for("react.provider"),Uv=Symbol.for("react.context"),Bv=Symbol.for("react.forward_ref"),Gv=Symbol.for("react.suspense"),Vv=Symbol.for("react.memo"),Hv=Symbol.for("react.lazy"),Rf=Symbol.iterator;function Wv(t){return t===null||typeof t!="object"?null:(t=Rf&&t[Rf]||t["@@iterator"],typeof t=="function"?t:null)}var Em={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},bm=Object.assign,Tm={};function Ms(t,e,n){this.props=t,this.context=e,this.refs=Tm,this.updater=n||Em}Ms.prototype.isReactComponent={};Ms.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ms.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Cm(){}Cm.prototype=Ms.prototype;function wd(t,e,n){this.props=t,this.context=e,this.refs=Tm,this.updater=n||Em}var Md=wd.prototype=new Cm;Md.constructor=wd;bm(Md,Ms.prototype);Md.isPureReactComponent=!0;var Df=Array.isArray,Am=Object.prototype.hasOwnProperty,Ed={current:null},Lm={key:!0,ref:!0,__self:!0,__source:!0};function Pm(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Am.call(e,i)&&!Lm.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Ro,type:t,key:s,ref:o,props:r,_owner:Ed.current}}function jv(t,e){return{$$typeof:Ro,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function bd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ro}function $v(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var If=/\/+/g;function eu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?$v(""+t.key):e.toString(36)}function Da(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ro:case kv:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+eu(o,0):i,Df(r)?(n="",t!=null&&(n=t.replace(If,"$&/")+"/"),Da(r,e,n,"",function(u){return u})):r!=null&&(bd(r)&&(r=jv(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(If,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Df(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+eu(s,a);o+=Da(s,e,n,l,r)}else if(l=Wv(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+eu(s,a++),o+=Da(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Vo(t,e,n){if(t==null)return t;var i=[],r=0;return Da(t,i,"","",function(s){return e.call(n,s,r++)}),i}function qv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var $t={current:null},Ia={transition:null},Xv={ReactCurrentDispatcher:$t,ReactCurrentBatchConfig:Ia,ReactCurrentOwner:Ed};ke.Children={map:Vo,forEach:function(t,e,n){Vo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Vo(t,function(){e++}),e},toArray:function(t){return Vo(t,function(e){return e})||[]},only:function(t){if(!bd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ke.Component=Ms;ke.Fragment=Nv;ke.Profiler=Fv;ke.PureComponent=wd;ke.StrictMode=zv;ke.Suspense=Gv;ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Xv;ke.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=bm({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Ed.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Am.call(e,l)&&!Lm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Ro,type:t.type,key:r,ref:s,props:i,_owner:o}};ke.createContext=function(t){return t={$$typeof:Uv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Ov,_context:t},t.Consumer=t};ke.createElement=Pm;ke.createFactory=function(t){var e=Pm.bind(null,t);return e.type=t,e};ke.createRef=function(){return{current:null}};ke.forwardRef=function(t){return{$$typeof:Bv,render:t}};ke.isValidElement=bd;ke.lazy=function(t){return{$$typeof:Hv,_payload:{_status:-1,_result:t},_init:qv}};ke.memo=function(t,e){return{$$typeof:Vv,type:t,compare:e===void 0?null:e}};ke.startTransition=function(t){var e=Ia.transition;Ia.transition={};try{t()}finally{Ia.transition=e}};ke.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ke.useCallback=function(t,e){return $t.current.useCallback(t,e)};ke.useContext=function(t){return $t.current.useContext(t)};ke.useDebugValue=function(){};ke.useDeferredValue=function(t){return $t.current.useDeferredValue(t)};ke.useEffect=function(t,e){return $t.current.useEffect(t,e)};ke.useId=function(){return $t.current.useId()};ke.useImperativeHandle=function(t,e,n){return $t.current.useImperativeHandle(t,e,n)};ke.useInsertionEffect=function(t,e){return $t.current.useInsertionEffect(t,e)};ke.useLayoutEffect=function(t,e){return $t.current.useLayoutEffect(t,e)};ke.useMemo=function(t,e){return $t.current.useMemo(t,e)};ke.useReducer=function(t,e,n){return $t.current.useReducer(t,e,n)};ke.useRef=function(t){return $t.current.useRef(t)};ke.useState=function(t){return $t.current.useState(t)};ke.useSyncExternalStore=function(t,e,n){return $t.current.useSyncExternalStore(t,e,n)};ke.useTransition=function(){return $t.current.useTransition()};ke.version="18.2.0";(function(t){t.exports=ke})(Iv);const dt=Rv(Ct);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yv=Ct,Zv=Symbol.for("react.element"),Kv=Symbol.for("react.fragment"),Qv=Object.prototype.hasOwnProperty,Jv=Yv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,e_={key:!0,ref:!0,__self:!0,__source:!0};function Rm(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Qv.call(e,i)&&!e_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Zv,type:t,key:s,ref:o,props:r,_owner:Jv.current}}yl.Fragment=Kv;yl.jsx=Rm;yl.jsxs=Rm;(function(t){t.exports=yl})(Dv);const ye=qa.jsx,Zt=qa.jsxs;var uc={},cc={},t_={get exports(){return cc},set exports(t){cc=t}},pn={},dc={},n_={get exports(){return dc},set exports(t){dc=t}},Dm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,j){var H=I.length;I.push(j);e:for(;0<H;){var ae=H-1>>>1,A=I[ae];if(0<r(A,j))I[ae]=j,I[H]=A,H=ae;else break e}}function n(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var j=I[0],H=I.pop();if(H!==j){I[0]=H;e:for(var ae=0,A=I.length,F=A>>>1;ae<F;){var G=2*(ae+1)-1,D=I[G],P=G+1,ne=I[P];if(0>r(D,H))P<A&&0>r(ne,D)?(I[ae]=ne,I[P]=H,ae=P):(I[ae]=D,I[G]=H,ae=G);else if(P<A&&0>r(ne,H))I[ae]=ne,I[P]=H,ae=P;else break e}}return j}function r(I,j){var H=I.sortIndex-j.sortIndex;return H!==0?H:I.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,f=3,v=!1,x=!1,h=!1,p=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(I){for(var j=n(u);j!==null;){if(j.callback===null)i(u);else if(j.startTime<=I)i(u),j.sortIndex=j.expirationTime,e(l,j);else break;j=n(u)}}function y(I){if(h=!1,_(I),!x)if(n(l)!==null)x=!0,ee(M);else{var j=n(u);j!==null&&te(y,j.startTime-I)}}function M(I,j){x=!1,h&&(h=!1,g(S),S=-1),v=!0;var H=f;try{for(_(j),d=n(l);d!==null&&(!(d.expirationTime>j)||I&&!Z());){var ae=d.callback;if(typeof ae=="function"){d.callback=null,f=d.priorityLevel;var A=ae(d.expirationTime<=j);j=t.unstable_now(),typeof A=="function"?d.callback=A:d===n(l)&&i(l),_(j)}else i(l);d=n(l)}if(d!==null)var F=!0;else{var G=n(u);G!==null&&te(y,G.startTime-j),F=!1}return F}finally{d=null,f=H,v=!1}}var C=!1,L=null,S=-1,T=5,R=-1;function Z(){return!(t.unstable_now()-R<T)}function K(){if(L!==null){var I=t.unstable_now();R=I;var j=!0;try{j=L(!0,I)}finally{j?U():(C=!1,L=null)}}else C=!1}var U;if(typeof m=="function")U=function(){m(K)};else if(typeof MessageChannel<"u"){var N=new MessageChannel,$=N.port2;N.port1.onmessage=K,U=function(){$.postMessage(null)}}else U=function(){p(K,0)};function ee(I){L=I,C||(C=!0,U())}function te(I,j){S=p(function(){I(t.unstable_now())},j)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){x||v||(x=!0,ee(M))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(I){switch(f){case 1:case 2:case 3:var j=3;break;default:j=f}var H=f;f=j;try{return I()}finally{f=H}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,j){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var H=f;f=I;try{return j()}finally{f=H}},t.unstable_scheduleCallback=function(I,j,H){var ae=t.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?ae+H:ae):H=ae,I){case 1:var A=-1;break;case 2:A=250;break;case 5:A=1073741823;break;case 4:A=1e4;break;default:A=5e3}return A=H+A,I={id:c++,callback:j,priorityLevel:I,startTime:H,expirationTime:A,sortIndex:-1},H>ae?(I.sortIndex=H,e(u,I),n(l)===null&&I===n(u)&&(h?(g(S),S=-1):h=!0,te(y,H-ae))):(I.sortIndex=A,e(l,I),x||v||(x=!0,ee(M))),I},t.unstable_shouldYield=Z,t.unstable_wrapCallback=function(I){var j=f;return function(){var H=f;f=j;try{return I.apply(this,arguments)}finally{f=H}}}})(Dm);(function(t){t.exports=Dm})(n_);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Im=Ct,hn=dc;function ie(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var km=new Set,oo={};function Er(t,e){cs(t,e),cs(t+"Capture",e)}function cs(t,e){for(oo[t]=e,t=0;t<e.length;t++)km.add(e[t])}var hi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fc=Object.prototype.hasOwnProperty,i_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,kf={},Nf={};function r_(t){return fc.call(Nf,t)?!0:fc.call(kf,t)?!1:i_.test(t)?Nf[t]=!0:(kf[t]=!0,!1)}function s_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function o_(t,e,n,i){if(e===null||typeof e>"u"||s_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function qt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Pt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Pt[t]=new qt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Pt[e]=new qt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Pt[t]=new qt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Pt[t]=new qt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Pt[t]=new qt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Pt[t]=new qt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Pt[t]=new qt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Pt[t]=new qt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Pt[t]=new qt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Td=/[\-:]([a-z])/g;function Cd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Td,Cd);Pt[e]=new qt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Td,Cd);Pt[e]=new qt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Td,Cd);Pt[e]=new qt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Pt[t]=new qt(t,1,!1,t.toLowerCase(),null,!1,!1)});Pt.xlinkHref=new qt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Pt[t]=new qt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ad(t,e,n,i){var r=Pt.hasOwnProperty(e)?Pt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(o_(e,n,r,i)&&(n=null),i||r===null?r_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var vi=Im.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ho=Symbol.for("react.element"),Gr=Symbol.for("react.portal"),Vr=Symbol.for("react.fragment"),Ld=Symbol.for("react.strict_mode"),hc=Symbol.for("react.profiler"),Nm=Symbol.for("react.provider"),zm=Symbol.for("react.context"),Pd=Symbol.for("react.forward_ref"),pc=Symbol.for("react.suspense"),mc=Symbol.for("react.suspense_list"),Rd=Symbol.for("react.memo"),Mi=Symbol.for("react.lazy"),Fm=Symbol.for("react.offscreen"),zf=Symbol.iterator;function Ls(t){return t===null||typeof t!="object"?null:(t=zf&&t[zf]||t["@@iterator"],typeof t=="function"?t:null)}var rt=Object.assign,tu;function Ws(t){if(tu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);tu=e&&e[1]||""}return`
`+tu+t}var nu=!1;function iu(t,e){if(!t||nu)return"";nu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{nu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ws(t):""}function a_(t){switch(t.tag){case 5:return Ws(t.type);case 16:return Ws("Lazy");case 13:return Ws("Suspense");case 19:return Ws("SuspenseList");case 0:case 2:case 15:return t=iu(t.type,!1),t;case 11:return t=iu(t.type.render,!1),t;case 1:return t=iu(t.type,!0),t;default:return""}}function gc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Vr:return"Fragment";case Gr:return"Portal";case hc:return"Profiler";case Ld:return"StrictMode";case pc:return"Suspense";case mc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case zm:return(t.displayName||"Context")+".Consumer";case Nm:return(t._context.displayName||"Context")+".Provider";case Pd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Rd:return e=t.displayName||null,e!==null?e:gc(t.type)||"Memo";case Mi:e=t._payload,t=t._init;try{return gc(t(e))}catch{}}return null}function l_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return gc(e);case 8:return e===Ld?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Hi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Om(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function u_(t){var e=Om(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Wo(t){t._valueTracker||(t._valueTracker=u_(t))}function Um(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Om(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Xa(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function vc(t,e){var n=e.checked;return rt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Ff(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Hi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Bm(t,e){e=e.checked,e!=null&&Ad(t,"checked",e,!1)}function _c(t,e){Bm(t,e);var n=Hi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?xc(t,e.type,n):e.hasOwnProperty("defaultValue")&&xc(t,e.type,Hi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Of(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function xc(t,e,n){(e!=="number"||Xa(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var js=Array.isArray;function ts(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Hi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function yc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ie(91));return rt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Uf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ie(92));if(js(n)){if(1<n.length)throw Error(ie(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Hi(n)}}function Gm(t,e){var n=Hi(e.value),i=Hi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Bf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Vm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Sc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Vm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var jo,Hm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(jo=jo||document.createElement("div"),jo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=jo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ao(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Zs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},c_=["Webkit","ms","Moz","O"];Object.keys(Zs).forEach(function(t){c_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Zs[e]=Zs[t]})});function Wm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Zs.hasOwnProperty(t)&&Zs[t]?(""+e).trim():e+"px"}function jm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Wm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var d_=rt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function wc(t,e){if(e){if(d_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ie(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ie(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ie(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ie(62))}}function Mc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ec=null;function Dd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var bc=null,ns=null,is=null;function Gf(t){if(t=ko(t)){if(typeof bc!="function")throw Error(ie(280));var e=t.stateNode;e&&(e=bl(e),bc(t.stateNode,t.type,e))}}function $m(t){ns?is?is.push(t):is=[t]:ns=t}function qm(){if(ns){var t=ns,e=is;if(is=ns=null,Gf(t),e)for(t=0;t<e.length;t++)Gf(e[t])}}function Xm(t,e){return t(e)}function Ym(){}var ru=!1;function Zm(t,e,n){if(ru)return t(e,n);ru=!0;try{return Xm(t,e,n)}finally{ru=!1,(ns!==null||is!==null)&&(Ym(),qm())}}function lo(t,e){var n=t.stateNode;if(n===null)return null;var i=bl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ie(231,e,typeof n));return n}var Tc=!1;if(hi)try{var Ps={};Object.defineProperty(Ps,"passive",{get:function(){Tc=!0}}),window.addEventListener("test",Ps,Ps),window.removeEventListener("test",Ps,Ps)}catch{Tc=!1}function f_(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Ks=!1,Ya=null,Za=!1,Cc=null,h_={onError:function(t){Ks=!0,Ya=t}};function p_(t,e,n,i,r,s,o,a,l){Ks=!1,Ya=null,f_.apply(h_,arguments)}function m_(t,e,n,i,r,s,o,a,l){if(p_.apply(this,arguments),Ks){if(Ks){var u=Ya;Ks=!1,Ya=null}else throw Error(ie(198));Za||(Za=!0,Cc=u)}}function br(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Km(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Vf(t){if(br(t)!==t)throw Error(ie(188))}function g_(t){var e=t.alternate;if(!e){if(e=br(t),e===null)throw Error(ie(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Vf(r),t;if(s===i)return Vf(r),e;s=s.sibling}throw Error(ie(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ie(189))}}if(n.alternate!==i)throw Error(ie(190))}if(n.tag!==3)throw Error(ie(188));return n.stateNode.current===n?t:e}function Qm(t){return t=g_(t),t!==null?Jm(t):null}function Jm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Jm(t);if(e!==null)return e;t=t.sibling}return null}var eg=hn.unstable_scheduleCallback,Hf=hn.unstable_cancelCallback,v_=hn.unstable_shouldYield,__=hn.unstable_requestPaint,at=hn.unstable_now,x_=hn.unstable_getCurrentPriorityLevel,Id=hn.unstable_ImmediatePriority,tg=hn.unstable_UserBlockingPriority,Ka=hn.unstable_NormalPriority,y_=hn.unstable_LowPriority,ng=hn.unstable_IdlePriority,Sl=null,Zn=null;function S_(t){if(Zn&&typeof Zn.onCommitFiberRoot=="function")try{Zn.onCommitFiberRoot(Sl,t,void 0,(t.current.flags&128)===128)}catch{}}var On=Math.clz32?Math.clz32:E_,w_=Math.log,M_=Math.LN2;function E_(t){return t>>>=0,t===0?32:31-(w_(t)/M_|0)|0}var $o=64,qo=4194304;function $s(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Qa(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=$s(a):(s&=o,s!==0&&(i=$s(s)))}else o=n&~r,o!==0?i=$s(o):s!==0&&(i=$s(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-On(e),r=1<<n,i|=t[n],e&=~r;return i}function b_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function T_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-On(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=b_(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Ac(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ig(){var t=$o;return $o<<=1,!($o&4194240)&&($o=64),t}function su(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Do(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-On(e),t[e]=n}function C_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-On(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function kd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-On(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var We=0;function rg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var sg,Nd,og,ag,lg,Lc=!1,Xo=[],Ii=null,ki=null,Ni=null,uo=new Map,co=new Map,Ti=[],A_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Wf(t,e){switch(t){case"focusin":case"focusout":Ii=null;break;case"dragenter":case"dragleave":ki=null;break;case"mouseover":case"mouseout":Ni=null;break;case"pointerover":case"pointerout":uo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":co.delete(e.pointerId)}}function Rs(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ko(e),e!==null&&Nd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function L_(t,e,n,i,r){switch(e){case"focusin":return Ii=Rs(Ii,t,e,n,i,r),!0;case"dragenter":return ki=Rs(ki,t,e,n,i,r),!0;case"mouseover":return Ni=Rs(Ni,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return uo.set(s,Rs(uo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,co.set(s,Rs(co.get(s)||null,t,e,n,i,r)),!0}return!1}function ug(t){var e=or(t.target);if(e!==null){var n=br(e);if(n!==null){if(e=n.tag,e===13){if(e=Km(n),e!==null){t.blockedOn=e,lg(t.priority,function(){og(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ka(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Pc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Ec=i,n.target.dispatchEvent(i),Ec=null}else return e=ko(n),e!==null&&Nd(e),t.blockedOn=n,!1;e.shift()}return!0}function jf(t,e,n){ka(t)&&n.delete(e)}function P_(){Lc=!1,Ii!==null&&ka(Ii)&&(Ii=null),ki!==null&&ka(ki)&&(ki=null),Ni!==null&&ka(Ni)&&(Ni=null),uo.forEach(jf),co.forEach(jf)}function Ds(t,e){t.blockedOn===e&&(t.blockedOn=null,Lc||(Lc=!0,hn.unstable_scheduleCallback(hn.unstable_NormalPriority,P_)))}function fo(t){function e(r){return Ds(r,t)}if(0<Xo.length){Ds(Xo[0],t);for(var n=1;n<Xo.length;n++){var i=Xo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ii!==null&&Ds(Ii,t),ki!==null&&Ds(ki,t),Ni!==null&&Ds(Ni,t),uo.forEach(e),co.forEach(e),n=0;n<Ti.length;n++)i=Ti[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ti.length&&(n=Ti[0],n.blockedOn===null);)ug(n),n.blockedOn===null&&Ti.shift()}var rs=vi.ReactCurrentBatchConfig,Ja=!0;function R_(t,e,n,i){var r=We,s=rs.transition;rs.transition=null;try{We=1,zd(t,e,n,i)}finally{We=r,rs.transition=s}}function D_(t,e,n,i){var r=We,s=rs.transition;rs.transition=null;try{We=4,zd(t,e,n,i)}finally{We=r,rs.transition=s}}function zd(t,e,n,i){if(Ja){var r=Pc(t,e,n,i);if(r===null)mu(t,e,i,el,n),Wf(t,i);else if(L_(r,t,e,n,i))i.stopPropagation();else if(Wf(t,i),e&4&&-1<A_.indexOf(t)){for(;r!==null;){var s=ko(r);if(s!==null&&sg(s),s=Pc(t,e,n,i),s===null&&mu(t,e,i,el,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else mu(t,e,i,null,n)}}var el=null;function Pc(t,e,n,i){if(el=null,t=Dd(i),t=or(t),t!==null)if(e=br(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Km(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return el=t,null}function cg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(x_()){case Id:return 1;case tg:return 4;case Ka:case y_:return 16;case ng:return 536870912;default:return 16}default:return 16}}var Ai=null,Fd=null,Na=null;function dg(){if(Na)return Na;var t,e=Fd,n=e.length,i,r="value"in Ai?Ai.value:Ai.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Na=r.slice(t,1<i?1-i:void 0)}function za(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Yo(){return!0}function $f(){return!1}function mn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Yo:$f,this.isPropagationStopped=$f,this}return rt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Yo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Yo)},persist:function(){},isPersistent:Yo}),e}var Es={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Od=mn(Es),Io=rt({},Es,{view:0,detail:0}),I_=mn(Io),ou,au,Is,wl=rt({},Io,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ud,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Is&&(Is&&t.type==="mousemove"?(ou=t.screenX-Is.screenX,au=t.screenY-Is.screenY):au=ou=0,Is=t),ou)},movementY:function(t){return"movementY"in t?t.movementY:au}}),qf=mn(wl),k_=rt({},wl,{dataTransfer:0}),N_=mn(k_),z_=rt({},Io,{relatedTarget:0}),lu=mn(z_),F_=rt({},Es,{animationName:0,elapsedTime:0,pseudoElement:0}),O_=mn(F_),U_=rt({},Es,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),B_=mn(U_),G_=rt({},Es,{data:0}),Xf=mn(G_),V_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},H_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},W_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function j_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=W_[t])?!!e[t]:!1}function Ud(){return j_}var $_=rt({},Io,{key:function(t){if(t.key){var e=V_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=za(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?H_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ud,charCode:function(t){return t.type==="keypress"?za(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?za(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),q_=mn($_),X_=rt({},wl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yf=mn(X_),Y_=rt({},Io,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ud}),Z_=mn(Y_),K_=rt({},Es,{propertyName:0,elapsedTime:0,pseudoElement:0}),Q_=mn(K_),J_=rt({},wl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ex=mn(J_),tx=[9,13,27,32],Bd=hi&&"CompositionEvent"in window,Qs=null;hi&&"documentMode"in document&&(Qs=document.documentMode);var nx=hi&&"TextEvent"in window&&!Qs,fg=hi&&(!Bd||Qs&&8<Qs&&11>=Qs),Zf=String.fromCharCode(32),Kf=!1;function hg(t,e){switch(t){case"keyup":return tx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Hr=!1;function ix(t,e){switch(t){case"compositionend":return pg(e);case"keypress":return e.which!==32?null:(Kf=!0,Zf);case"textInput":return t=e.data,t===Zf&&Kf?null:t;default:return null}}function rx(t,e){if(Hr)return t==="compositionend"||!Bd&&hg(t,e)?(t=dg(),Na=Fd=Ai=null,Hr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return fg&&e.locale!=="ko"?null:e.data;default:return null}}var sx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!sx[t.type]:e==="textarea"}function mg(t,e,n,i){$m(i),e=tl(e,"onChange"),0<e.length&&(n=new Od("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Js=null,ho=null;function ox(t){Tg(t,0)}function Ml(t){var e=$r(t);if(Um(e))return t}function ax(t,e){if(t==="change")return e}var gg=!1;if(hi){var uu;if(hi){var cu="oninput"in document;if(!cu){var Jf=document.createElement("div");Jf.setAttribute("oninput","return;"),cu=typeof Jf.oninput=="function"}uu=cu}else uu=!1;gg=uu&&(!document.documentMode||9<document.documentMode)}function eh(){Js&&(Js.detachEvent("onpropertychange",vg),ho=Js=null)}function vg(t){if(t.propertyName==="value"&&Ml(ho)){var e=[];mg(e,ho,t,Dd(t)),Zm(ox,e)}}function lx(t,e,n){t==="focusin"?(eh(),Js=e,ho=n,Js.attachEvent("onpropertychange",vg)):t==="focusout"&&eh()}function ux(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ml(ho)}function cx(t,e){if(t==="click")return Ml(e)}function dx(t,e){if(t==="input"||t==="change")return Ml(e)}function fx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Bn=typeof Object.is=="function"?Object.is:fx;function po(t,e){if(Bn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!fc.call(e,r)||!Bn(t[r],e[r]))return!1}return!0}function th(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function nh(t,e){var n=th(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=th(n)}}function _g(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?_g(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function xg(){for(var t=window,e=Xa();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Xa(t.document)}return e}function Gd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function hx(t){var e=xg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&_g(n.ownerDocument.documentElement,n)){if(i!==null&&Gd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=nh(n,s);var o=nh(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var px=hi&&"documentMode"in document&&11>=document.documentMode,Wr=null,Rc=null,eo=null,Dc=!1;function ih(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Dc||Wr==null||Wr!==Xa(i)||(i=Wr,"selectionStart"in i&&Gd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),eo&&po(eo,i)||(eo=i,i=tl(Rc,"onSelect"),0<i.length&&(e=new Od("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Wr)))}function Zo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var jr={animationend:Zo("Animation","AnimationEnd"),animationiteration:Zo("Animation","AnimationIteration"),animationstart:Zo("Animation","AnimationStart"),transitionend:Zo("Transition","TransitionEnd")},du={},yg={};hi&&(yg=document.createElement("div").style,"AnimationEvent"in window||(delete jr.animationend.animation,delete jr.animationiteration.animation,delete jr.animationstart.animation),"TransitionEvent"in window||delete jr.transitionend.transition);function El(t){if(du[t])return du[t];if(!jr[t])return t;var e=jr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in yg)return du[t]=e[n];return t}var Sg=El("animationend"),wg=El("animationiteration"),Mg=El("animationstart"),Eg=El("transitionend"),bg=new Map,rh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $i(t,e){bg.set(t,e),Er(e,[t])}for(var fu=0;fu<rh.length;fu++){var hu=rh[fu],mx=hu.toLowerCase(),gx=hu[0].toUpperCase()+hu.slice(1);$i(mx,"on"+gx)}$i(Sg,"onAnimationEnd");$i(wg,"onAnimationIteration");$i(Mg,"onAnimationStart");$i("dblclick","onDoubleClick");$i("focusin","onFocus");$i("focusout","onBlur");$i(Eg,"onTransitionEnd");cs("onMouseEnter",["mouseout","mouseover"]);cs("onMouseLeave",["mouseout","mouseover"]);cs("onPointerEnter",["pointerout","pointerover"]);cs("onPointerLeave",["pointerout","pointerover"]);Er("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Er("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Er("onBeforeInput",["compositionend","keypress","textInput","paste"]);Er("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Er("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Er("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vx=new Set("cancel close invalid load scroll toggle".split(" ").concat(qs));function sh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,m_(i,e,void 0,t),t.currentTarget=null}function Tg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;sh(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;sh(r,a,u),s=l}}}if(Za)throw t=Cc,Za=!1,Cc=null,t}function Ke(t,e){var n=e[Fc];n===void 0&&(n=e[Fc]=new Set);var i=t+"__bubble";n.has(i)||(Cg(e,t,2,!1),n.add(i))}function pu(t,e,n){var i=0;e&&(i|=4),Cg(n,t,i,e)}var Ko="_reactListening"+Math.random().toString(36).slice(2);function mo(t){if(!t[Ko]){t[Ko]=!0,km.forEach(function(n){n!=="selectionchange"&&(vx.has(n)||pu(n,!1,t),pu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ko]||(e[Ko]=!0,pu("selectionchange",!1,e))}}function Cg(t,e,n,i){switch(cg(e)){case 1:var r=R_;break;case 4:r=D_;break;default:r=zd}n=r.bind(null,e,n,t),r=void 0,!Tc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function mu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=or(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Zm(function(){var u=s,c=Dd(n),d=[];e:{var f=bg.get(t);if(f!==void 0){var v=Od,x=t;switch(t){case"keypress":if(za(n)===0)break e;case"keydown":case"keyup":v=q_;break;case"focusin":x="focus",v=lu;break;case"focusout":x="blur",v=lu;break;case"beforeblur":case"afterblur":v=lu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=qf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=N_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Z_;break;case Sg:case wg:case Mg:v=O_;break;case Eg:v=Q_;break;case"scroll":v=I_;break;case"wheel":v=ex;break;case"copy":case"cut":case"paste":v=B_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Yf}var h=(e&4)!==0,p=!h&&t==="scroll",g=h?f!==null?f+"Capture":null:f;h=[];for(var m=u,_;m!==null;){_=m;var y=_.stateNode;if(_.tag===5&&y!==null&&(_=y,g!==null&&(y=lo(m,g),y!=null&&h.push(go(m,y,_)))),p)break;m=m.return}0<h.length&&(f=new v(f,x,null,n,c),d.push({event:f,listeners:h}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",f&&n!==Ec&&(x=n.relatedTarget||n.fromElement)&&(or(x)||x[pi]))break e;if((v||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,v?(x=n.relatedTarget||n.toElement,v=u,x=x?or(x):null,x!==null&&(p=br(x),x!==p||x.tag!==5&&x.tag!==6)&&(x=null)):(v=null,x=u),v!==x)){if(h=qf,y="onMouseLeave",g="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(h=Yf,y="onPointerLeave",g="onPointerEnter",m="pointer"),p=v==null?f:$r(v),_=x==null?f:$r(x),f=new h(y,m+"leave",v,n,c),f.target=p,f.relatedTarget=_,y=null,or(c)===u&&(h=new h(g,m+"enter",x,n,c),h.target=_,h.relatedTarget=p,y=h),p=y,v&&x)t:{for(h=v,g=x,m=0,_=h;_;_=Tr(_))m++;for(_=0,y=g;y;y=Tr(y))_++;for(;0<m-_;)h=Tr(h),m--;for(;0<_-m;)g=Tr(g),_--;for(;m--;){if(h===g||g!==null&&h===g.alternate)break t;h=Tr(h),g=Tr(g)}h=null}else h=null;v!==null&&oh(d,f,v,h,!1),x!==null&&p!==null&&oh(d,p,x,h,!0)}}e:{if(f=u?$r(u):window,v=f.nodeName&&f.nodeName.toLowerCase(),v==="select"||v==="input"&&f.type==="file")var M=ax;else if(Qf(f))if(gg)M=dx;else{M=ux;var C=lx}else(v=f.nodeName)&&v.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(M=cx);if(M&&(M=M(t,u))){mg(d,M,n,c);break e}C&&C(t,f,u),t==="focusout"&&(C=f._wrapperState)&&C.controlled&&f.type==="number"&&xc(f,"number",f.value)}switch(C=u?$r(u):window,t){case"focusin":(Qf(C)||C.contentEditable==="true")&&(Wr=C,Rc=u,eo=null);break;case"focusout":eo=Rc=Wr=null;break;case"mousedown":Dc=!0;break;case"contextmenu":case"mouseup":case"dragend":Dc=!1,ih(d,n,c);break;case"selectionchange":if(px)break;case"keydown":case"keyup":ih(d,n,c)}var L;if(Bd)e:{switch(t){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else Hr?hg(t,n)&&(S="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(S="onCompositionStart");S&&(fg&&n.locale!=="ko"&&(Hr||S!=="onCompositionStart"?S==="onCompositionEnd"&&Hr&&(L=dg()):(Ai=c,Fd="value"in Ai?Ai.value:Ai.textContent,Hr=!0)),C=tl(u,S),0<C.length&&(S=new Xf(S,t,null,n,c),d.push({event:S,listeners:C}),L?S.data=L:(L=pg(n),L!==null&&(S.data=L)))),(L=nx?ix(t,n):rx(t,n))&&(u=tl(u,"onBeforeInput"),0<u.length&&(c=new Xf("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=L))}Tg(d,e)})}function go(t,e,n){return{instance:t,listener:e,currentTarget:n}}function tl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=lo(t,n),s!=null&&i.unshift(go(t,s,r)),s=lo(t,e),s!=null&&i.push(go(t,s,r))),t=t.return}return i}function Tr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function oh(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=lo(n,s),l!=null&&o.unshift(go(n,l,a))):r||(l=lo(n,s),l!=null&&o.push(go(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var _x=/\r\n?/g,xx=/\u0000|\uFFFD/g;function ah(t){return(typeof t=="string"?t:""+t).replace(_x,`
`).replace(xx,"")}function Qo(t,e,n){if(e=ah(e),ah(t)!==e&&n)throw Error(ie(425))}function nl(){}var Ic=null,kc=null;function Nc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var zc=typeof setTimeout=="function"?setTimeout:void 0,yx=typeof clearTimeout=="function"?clearTimeout:void 0,lh=typeof Promise=="function"?Promise:void 0,Sx=typeof queueMicrotask=="function"?queueMicrotask:typeof lh<"u"?function(t){return lh.resolve(null).then(t).catch(wx)}:zc;function wx(t){setTimeout(function(){throw t})}function gu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),fo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);fo(e)}function zi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function uh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var bs=Math.random().toString(36).slice(2),Yn="__reactFiber$"+bs,vo="__reactProps$"+bs,pi="__reactContainer$"+bs,Fc="__reactEvents$"+bs,Mx="__reactListeners$"+bs,Ex="__reactHandles$"+bs;function or(t){var e=t[Yn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[pi]||n[Yn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=uh(t);t!==null;){if(n=t[Yn])return n;t=uh(t)}return e}t=n,n=t.parentNode}return null}function ko(t){return t=t[Yn]||t[pi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function $r(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ie(33))}function bl(t){return t[vo]||null}var Oc=[],qr=-1;function qi(t){return{current:t}}function Je(t){0>qr||(t.current=Oc[qr],Oc[qr]=null,qr--)}function Ye(t,e){qr++,Oc[qr]=t.current,t.current=e}var Wi={},Ft=qi(Wi),Qt=qi(!1),mr=Wi;function ds(t,e){var n=t.type.contextTypes;if(!n)return Wi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Jt(t){return t=t.childContextTypes,t!=null}function il(){Je(Qt),Je(Ft)}function ch(t,e,n){if(Ft.current!==Wi)throw Error(ie(168));Ye(Ft,e),Ye(Qt,n)}function Ag(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ie(108,l_(t)||"Unknown",r));return rt({},n,i)}function rl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Wi,mr=Ft.current,Ye(Ft,t),Ye(Qt,Qt.current),!0}function dh(t,e,n){var i=t.stateNode;if(!i)throw Error(ie(169));n?(t=Ag(t,e,mr),i.__reactInternalMemoizedMergedChildContext=t,Je(Qt),Je(Ft),Ye(Ft,t)):Je(Qt),Ye(Qt,n)}var oi=null,Tl=!1,vu=!1;function Lg(t){oi===null?oi=[t]:oi.push(t)}function bx(t){Tl=!0,Lg(t)}function Xi(){if(!vu&&oi!==null){vu=!0;var t=0,e=We;try{var n=oi;for(We=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}oi=null,Tl=!1}catch(r){throw oi!==null&&(oi=oi.slice(t+1)),eg(Id,Xi),r}finally{We=e,vu=!1}}return null}var Xr=[],Yr=0,sl=null,ol=0,xn=[],yn=0,gr=null,li=1,ui="";function tr(t,e){Xr[Yr++]=ol,Xr[Yr++]=sl,sl=t,ol=e}function Pg(t,e,n){xn[yn++]=li,xn[yn++]=ui,xn[yn++]=gr,gr=t;var i=li;t=ui;var r=32-On(i)-1;i&=~(1<<r),n+=1;var s=32-On(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,li=1<<32-On(e)+r|n<<r|i,ui=s+t}else li=1<<s|n<<r|i,ui=t}function Vd(t){t.return!==null&&(tr(t,1),Pg(t,1,0))}function Hd(t){for(;t===sl;)sl=Xr[--Yr],Xr[Yr]=null,ol=Xr[--Yr],Xr[Yr]=null;for(;t===gr;)gr=xn[--yn],xn[yn]=null,ui=xn[--yn],xn[yn]=null,li=xn[--yn],xn[yn]=null}var dn=null,cn=null,et=!1,kn=null;function Rg(t,e){var n=Mn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function fh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,dn=t,cn=zi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,dn=t,cn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=gr!==null?{id:li,overflow:ui}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Mn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,dn=t,cn=null,!0):!1;default:return!1}}function Uc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Bc(t){if(et){var e=cn;if(e){var n=e;if(!fh(t,e)){if(Uc(t))throw Error(ie(418));e=zi(n.nextSibling);var i=dn;e&&fh(t,e)?Rg(i,n):(t.flags=t.flags&-4097|2,et=!1,dn=t)}}else{if(Uc(t))throw Error(ie(418));t.flags=t.flags&-4097|2,et=!1,dn=t}}}function hh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;dn=t}function Jo(t){if(t!==dn)return!1;if(!et)return hh(t),et=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Nc(t.type,t.memoizedProps)),e&&(e=cn)){if(Uc(t))throw Dg(),Error(ie(418));for(;e;)Rg(t,e),e=zi(e.nextSibling)}if(hh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ie(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){cn=zi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}cn=null}}else cn=dn?zi(t.stateNode.nextSibling):null;return!0}function Dg(){for(var t=cn;t;)t=zi(t.nextSibling)}function fs(){cn=dn=null,et=!1}function Wd(t){kn===null?kn=[t]:kn.push(t)}var Tx=vi.ReactCurrentBatchConfig;function Dn(t,e){if(t&&t.defaultProps){e=rt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var al=qi(null),ll=null,Zr=null,jd=null;function $d(){jd=Zr=ll=null}function qd(t){var e=al.current;Je(al),t._currentValue=e}function Gc(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ss(t,e){ll=t,jd=Zr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Kt=!0),t.firstContext=null)}function Tn(t){var e=t._currentValue;if(jd!==t)if(t={context:t,memoizedValue:e,next:null},Zr===null){if(ll===null)throw Error(ie(308));Zr=t,ll.dependencies={lanes:0,firstContext:t}}else Zr=Zr.next=t;return e}var ar=null;function Xd(t){ar===null?ar=[t]:ar.push(t)}function Ig(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Xd(e)):(n.next=r.next,r.next=n),e.interleaved=n,mi(t,i)}function mi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ei=!1;function Yd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function kg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function di(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Fi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Oe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,mi(t,n)}return r=i.interleaved,r===null?(e.next=e,Xd(i)):(e.next=r.next,r.next=e),i.interleaved=e,mi(t,n)}function Fa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,kd(t,n)}}function ph(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ul(t,e,n,i){var r=t.updateQueue;Ei=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,v=a.eventTime;if((i&f)===f){c!==null&&(c=c.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=t,h=a;switch(f=e,v=n,h.tag){case 1:if(x=h.payload,typeof x=="function"){d=x.call(v,d,f);break e}d=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=h.payload,f=typeof x=="function"?x.call(v,d,f):x,f==null)break e;d=rt({},d,f);break e;case 2:Ei=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else v={eventTime:v,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=v,l=d):c=c.next=v,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(1);if(c===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);_r|=o,t.lanes=o,t.memoizedState=d}}function mh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ie(191,r));r.call(i)}}}var Ng=new Im.Component().refs;function Vc(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:rt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Cl={isMounted:function(t){return(t=t._reactInternals)?br(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=jt(),r=Ui(t),s=di(i,r);s.payload=e,n!=null&&(s.callback=n),e=Fi(t,s,r),e!==null&&(Un(e,t,r,i),Fa(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=jt(),r=Ui(t),s=di(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Fi(t,s,r),e!==null&&(Un(e,t,r,i),Fa(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=jt(),i=Ui(t),r=di(n,i);r.tag=2,e!=null&&(r.callback=e),e=Fi(t,r,i),e!==null&&(Un(e,t,i,n),Fa(e,t,i))}};function gh(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!po(n,i)||!po(r,s):!0}function zg(t,e,n){var i=!1,r=Wi,s=e.contextType;return typeof s=="object"&&s!==null?s=Tn(s):(r=Jt(e)?mr:Ft.current,i=e.contextTypes,s=(i=i!=null)?ds(t,r):Wi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Cl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function vh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Cl.enqueueReplaceState(e,e.state,null)}function Hc(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs=Ng,Yd(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Tn(s):(s=Jt(e)?mr:Ft.current,r.context=ds(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Vc(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Cl.enqueueReplaceState(r,r.state,null),ul(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function ks(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ie(309));var i=n.stateNode}if(!i)throw Error(ie(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;a===Ng&&(a=r.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ie(284));if(!n._owner)throw Error(ie(290,t))}return t}function ea(t,e){throw t=Object.prototype.toString.call(e),Error(ie(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function _h(t){var e=t._init;return e(t._payload)}function Fg(t){function e(g,m){if(t){var _=g.deletions;_===null?(g.deletions=[m],g.flags|=16):_.push(m)}}function n(g,m){if(!t)return null;for(;m!==null;)e(g,m),m=m.sibling;return null}function i(g,m){for(g=new Map;m!==null;)m.key!==null?g.set(m.key,m):g.set(m.index,m),m=m.sibling;return g}function r(g,m){return g=Bi(g,m),g.index=0,g.sibling=null,g}function s(g,m,_){return g.index=_,t?(_=g.alternate,_!==null?(_=_.index,_<m?(g.flags|=2,m):_):(g.flags|=2,m)):(g.flags|=1048576,m)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function a(g,m,_,y){return m===null||m.tag!==6?(m=Eu(_,g.mode,y),m.return=g,m):(m=r(m,_),m.return=g,m)}function l(g,m,_,y){var M=_.type;return M===Vr?c(g,m,_.props.children,y,_.key):m!==null&&(m.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Mi&&_h(M)===m.type)?(y=r(m,_.props),y.ref=ks(g,m,_),y.return=g,y):(y=Ha(_.type,_.key,_.props,null,g.mode,y),y.ref=ks(g,m,_),y.return=g,y)}function u(g,m,_,y){return m===null||m.tag!==4||m.stateNode.containerInfo!==_.containerInfo||m.stateNode.implementation!==_.implementation?(m=bu(_,g.mode,y),m.return=g,m):(m=r(m,_.children||[]),m.return=g,m)}function c(g,m,_,y,M){return m===null||m.tag!==7?(m=fr(_,g.mode,y,M),m.return=g,m):(m=r(m,_),m.return=g,m)}function d(g,m,_){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Eu(""+m,g.mode,_),m.return=g,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ho:return _=Ha(m.type,m.key,m.props,null,g.mode,_),_.ref=ks(g,null,m),_.return=g,_;case Gr:return m=bu(m,g.mode,_),m.return=g,m;case Mi:var y=m._init;return d(g,y(m._payload),_)}if(js(m)||Ls(m))return m=fr(m,g.mode,_,null),m.return=g,m;ea(g,m)}return null}function f(g,m,_,y){var M=m!==null?m.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return M!==null?null:a(g,m,""+_,y);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ho:return _.key===M?l(g,m,_,y):null;case Gr:return _.key===M?u(g,m,_,y):null;case Mi:return M=_._init,f(g,m,M(_._payload),y)}if(js(_)||Ls(_))return M!==null?null:c(g,m,_,y,null);ea(g,_)}return null}function v(g,m,_,y,M){if(typeof y=="string"&&y!==""||typeof y=="number")return g=g.get(_)||null,a(m,g,""+y,M);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ho:return g=g.get(y.key===null?_:y.key)||null,l(m,g,y,M);case Gr:return g=g.get(y.key===null?_:y.key)||null,u(m,g,y,M);case Mi:var C=y._init;return v(g,m,_,C(y._payload),M)}if(js(y)||Ls(y))return g=g.get(_)||null,c(m,g,y,M,null);ea(m,y)}return null}function x(g,m,_,y){for(var M=null,C=null,L=m,S=m=0,T=null;L!==null&&S<_.length;S++){L.index>S?(T=L,L=null):T=L.sibling;var R=f(g,L,_[S],y);if(R===null){L===null&&(L=T);break}t&&L&&R.alternate===null&&e(g,L),m=s(R,m,S),C===null?M=R:C.sibling=R,C=R,L=T}if(S===_.length)return n(g,L),et&&tr(g,S),M;if(L===null){for(;S<_.length;S++)L=d(g,_[S],y),L!==null&&(m=s(L,m,S),C===null?M=L:C.sibling=L,C=L);return et&&tr(g,S),M}for(L=i(g,L);S<_.length;S++)T=v(L,g,S,_[S],y),T!==null&&(t&&T.alternate!==null&&L.delete(T.key===null?S:T.key),m=s(T,m,S),C===null?M=T:C.sibling=T,C=T);return t&&L.forEach(function(Z){return e(g,Z)}),et&&tr(g,S),M}function h(g,m,_,y){var M=Ls(_);if(typeof M!="function")throw Error(ie(150));if(_=M.call(_),_==null)throw Error(ie(151));for(var C=M=null,L=m,S=m=0,T=null,R=_.next();L!==null&&!R.done;S++,R=_.next()){L.index>S?(T=L,L=null):T=L.sibling;var Z=f(g,L,R.value,y);if(Z===null){L===null&&(L=T);break}t&&L&&Z.alternate===null&&e(g,L),m=s(Z,m,S),C===null?M=Z:C.sibling=Z,C=Z,L=T}if(R.done)return n(g,L),et&&tr(g,S),M;if(L===null){for(;!R.done;S++,R=_.next())R=d(g,R.value,y),R!==null&&(m=s(R,m,S),C===null?M=R:C.sibling=R,C=R);return et&&tr(g,S),M}for(L=i(g,L);!R.done;S++,R=_.next())R=v(L,g,S,R.value,y),R!==null&&(t&&R.alternate!==null&&L.delete(R.key===null?S:R.key),m=s(R,m,S),C===null?M=R:C.sibling=R,C=R);return t&&L.forEach(function(K){return e(g,K)}),et&&tr(g,S),M}function p(g,m,_,y){if(typeof _=="object"&&_!==null&&_.type===Vr&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Ho:e:{for(var M=_.key,C=m;C!==null;){if(C.key===M){if(M=_.type,M===Vr){if(C.tag===7){n(g,C.sibling),m=r(C,_.props.children),m.return=g,g=m;break e}}else if(C.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Mi&&_h(M)===C.type){n(g,C.sibling),m=r(C,_.props),m.ref=ks(g,C,_),m.return=g,g=m;break e}n(g,C);break}else e(g,C);C=C.sibling}_.type===Vr?(m=fr(_.props.children,g.mode,y,_.key),m.return=g,g=m):(y=Ha(_.type,_.key,_.props,null,g.mode,y),y.ref=ks(g,m,_),y.return=g,g=y)}return o(g);case Gr:e:{for(C=_.key;m!==null;){if(m.key===C)if(m.tag===4&&m.stateNode.containerInfo===_.containerInfo&&m.stateNode.implementation===_.implementation){n(g,m.sibling),m=r(m,_.children||[]),m.return=g,g=m;break e}else{n(g,m);break}else e(g,m);m=m.sibling}m=bu(_,g.mode,y),m.return=g,g=m}return o(g);case Mi:return C=_._init,p(g,m,C(_._payload),y)}if(js(_))return x(g,m,_,y);if(Ls(_))return h(g,m,_,y);ea(g,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,m!==null&&m.tag===6?(n(g,m.sibling),m=r(m,_),m.return=g,g=m):(n(g,m),m=Eu(_,g.mode,y),m.return=g,g=m),o(g)):n(g,m)}return p}var hs=Fg(!0),Og=Fg(!1),No={},Kn=qi(No),_o=qi(No),xo=qi(No);function lr(t){if(t===No)throw Error(ie(174));return t}function Zd(t,e){switch(Ye(xo,e),Ye(_o,t),Ye(Kn,No),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Sc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Sc(e,t)}Je(Kn),Ye(Kn,e)}function ps(){Je(Kn),Je(_o),Je(xo)}function Ug(t){lr(xo.current);var e=lr(Kn.current),n=Sc(e,t.type);e!==n&&(Ye(_o,t),Ye(Kn,n))}function Kd(t){_o.current===t&&(Je(Kn),Je(_o))}var nt=qi(0);function cl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var _u=[];function Qd(){for(var t=0;t<_u.length;t++)_u[t]._workInProgressVersionPrimary=null;_u.length=0}var Oa=vi.ReactCurrentDispatcher,xu=vi.ReactCurrentBatchConfig,vr=0,it=null,pt=null,wt=null,dl=!1,to=!1,yo=0,Cx=0;function Dt(){throw Error(ie(321))}function Jd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Bn(t[n],e[n]))return!1;return!0}function ef(t,e,n,i,r,s){if(vr=s,it=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Oa.current=t===null||t.memoizedState===null?Rx:Dx,t=n(i,r),to){s=0;do{if(to=!1,yo=0,25<=s)throw Error(ie(301));s+=1,wt=pt=null,e.updateQueue=null,Oa.current=Ix,t=n(i,r)}while(to)}if(Oa.current=fl,e=pt!==null&&pt.next!==null,vr=0,wt=pt=it=null,dl=!1,e)throw Error(ie(300));return t}function tf(){var t=yo!==0;return yo=0,t}function jn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wt===null?it.memoizedState=wt=t:wt=wt.next=t,wt}function Cn(){if(pt===null){var t=it.alternate;t=t!==null?t.memoizedState:null}else t=pt.next;var e=wt===null?it.memoizedState:wt.next;if(e!==null)wt=e,pt=t;else{if(t===null)throw Error(ie(310));pt=t,t={memoizedState:pt.memoizedState,baseState:pt.baseState,baseQueue:pt.baseQueue,queue:pt.queue,next:null},wt===null?it.memoizedState=wt=t:wt=wt.next=t}return wt}function So(t,e){return typeof e=="function"?e(t):e}function yu(t){var e=Cn(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=pt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((vr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,it.lanes|=c,_r|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,Bn(i,e.memoizedState)||(Kt=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,it.lanes|=s,_r|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Su(t){var e=Cn(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Bn(s,e.memoizedState)||(Kt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Bg(){}function Gg(t,e){var n=it,i=Cn(),r=e(),s=!Bn(i.memoizedState,r);if(s&&(i.memoizedState=r,Kt=!0),i=i.queue,nf(Wg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||wt!==null&&wt.memoizedState.tag&1){if(n.flags|=2048,wo(9,Hg.bind(null,n,i,r,e),void 0,null),Et===null)throw Error(ie(349));vr&30||Vg(n,e,r)}return r}function Vg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=it.updateQueue,e===null?(e={lastEffect:null,stores:null},it.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Hg(t,e,n,i){e.value=n,e.getSnapshot=i,jg(e)&&$g(t)}function Wg(t,e,n){return n(function(){jg(e)&&$g(t)})}function jg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Bn(t,n)}catch{return!0}}function $g(t){var e=mi(t,1);e!==null&&Un(e,t,1,-1)}function xh(t){var e=jn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:So,lastRenderedState:t},e.queue=t,t=t.dispatch=Px.bind(null,it,t),[e.memoizedState,t]}function wo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=it.updateQueue,e===null?(e={lastEffect:null,stores:null},it.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function qg(){return Cn().memoizedState}function Ua(t,e,n,i){var r=jn();it.flags|=t,r.memoizedState=wo(1|e,n,void 0,i===void 0?null:i)}function Al(t,e,n,i){var r=Cn();i=i===void 0?null:i;var s=void 0;if(pt!==null){var o=pt.memoizedState;if(s=o.destroy,i!==null&&Jd(i,o.deps)){r.memoizedState=wo(e,n,s,i);return}}it.flags|=t,r.memoizedState=wo(1|e,n,s,i)}function yh(t,e){return Ua(8390656,8,t,e)}function nf(t,e){return Al(2048,8,t,e)}function Xg(t,e){return Al(4,2,t,e)}function Yg(t,e){return Al(4,4,t,e)}function Zg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Kg(t,e,n){return n=n!=null?n.concat([t]):null,Al(4,4,Zg.bind(null,e,t),n)}function rf(){}function Qg(t,e){var n=Cn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Jd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Jg(t,e){var n=Cn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Jd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function e0(t,e,n){return vr&21?(Bn(n,e)||(n=ig(),it.lanes|=n,_r|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Kt=!0),t.memoizedState=n)}function Ax(t,e){var n=We;We=n!==0&&4>n?n:4,t(!0);var i=xu.transition;xu.transition={};try{t(!1),e()}finally{We=n,xu.transition=i}}function t0(){return Cn().memoizedState}function Lx(t,e,n){var i=Ui(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},n0(t))i0(e,n);else if(n=Ig(t,e,n,i),n!==null){var r=jt();Un(n,t,i,r),r0(n,e,i)}}function Px(t,e,n){var i=Ui(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(n0(t))i0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Bn(a,o)){var l=e.interleaved;l===null?(r.next=r,Xd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Ig(t,e,r,i),n!==null&&(r=jt(),Un(n,t,i,r),r0(n,e,i))}}function n0(t){var e=t.alternate;return t===it||e!==null&&e===it}function i0(t,e){to=dl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function r0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,kd(t,n)}}var fl={readContext:Tn,useCallback:Dt,useContext:Dt,useEffect:Dt,useImperativeHandle:Dt,useInsertionEffect:Dt,useLayoutEffect:Dt,useMemo:Dt,useReducer:Dt,useRef:Dt,useState:Dt,useDebugValue:Dt,useDeferredValue:Dt,useTransition:Dt,useMutableSource:Dt,useSyncExternalStore:Dt,useId:Dt,unstable_isNewReconciler:!1},Rx={readContext:Tn,useCallback:function(t,e){return jn().memoizedState=[t,e===void 0?null:e],t},useContext:Tn,useEffect:yh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ua(4194308,4,Zg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ua(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ua(4,2,t,e)},useMemo:function(t,e){var n=jn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=jn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Lx.bind(null,it,t),[i.memoizedState,t]},useRef:function(t){var e=jn();return t={current:t},e.memoizedState=t},useState:xh,useDebugValue:rf,useDeferredValue:function(t){return jn().memoizedState=t},useTransition:function(){var t=xh(!1),e=t[0];return t=Ax.bind(null,t[1]),jn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=it,r=jn();if(et){if(n===void 0)throw Error(ie(407));n=n()}else{if(n=e(),Et===null)throw Error(ie(349));vr&30||Vg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,yh(Wg.bind(null,i,s,t),[t]),i.flags|=2048,wo(9,Hg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=jn(),e=Et.identifierPrefix;if(et){var n=ui,i=li;n=(i&~(1<<32-On(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=yo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Cx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Dx={readContext:Tn,useCallback:Qg,useContext:Tn,useEffect:nf,useImperativeHandle:Kg,useInsertionEffect:Xg,useLayoutEffect:Yg,useMemo:Jg,useReducer:yu,useRef:qg,useState:function(){return yu(So)},useDebugValue:rf,useDeferredValue:function(t){var e=Cn();return e0(e,pt.memoizedState,t)},useTransition:function(){var t=yu(So)[0],e=Cn().memoizedState;return[t,e]},useMutableSource:Bg,useSyncExternalStore:Gg,useId:t0,unstable_isNewReconciler:!1},Ix={readContext:Tn,useCallback:Qg,useContext:Tn,useEffect:nf,useImperativeHandle:Kg,useInsertionEffect:Xg,useLayoutEffect:Yg,useMemo:Jg,useReducer:Su,useRef:qg,useState:function(){return Su(So)},useDebugValue:rf,useDeferredValue:function(t){var e=Cn();return pt===null?e.memoizedState=t:e0(e,pt.memoizedState,t)},useTransition:function(){var t=Su(So)[0],e=Cn().memoizedState;return[t,e]},useMutableSource:Bg,useSyncExternalStore:Gg,useId:t0,unstable_isNewReconciler:!1};function ms(t,e){try{var n="",i=e;do n+=a_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function wu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Wc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var kx=typeof WeakMap=="function"?WeakMap:Map;function s0(t,e,n){n=di(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){pl||(pl=!0,ed=i),Wc(t,e)},n}function o0(t,e,n){n=di(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Wc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Wc(t,e),typeof i!="function"&&(Oi===null?Oi=new Set([this]):Oi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Sh(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new kx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Xx.bind(null,t,e,n),e.then(t,t))}function wh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Mh(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=di(-1,1),e.tag=2,Fi(n,e,1))),n.lanes|=1),t)}var Nx=vi.ReactCurrentOwner,Kt=!1;function Vt(t,e,n,i){e.child=t===null?Og(e,null,n,i):hs(e,t.child,n,i)}function Eh(t,e,n,i,r){n=n.render;var s=e.ref;return ss(e,r),i=ef(t,e,n,i,s,r),n=tf(),t!==null&&!Kt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,gi(t,e,r)):(et&&n&&Vd(e),e.flags|=1,Vt(t,e,i,r),e.child)}function bh(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!ff(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,a0(t,e,s,i,r)):(t=Ha(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:po,n(o,i)&&t.ref===e.ref)return gi(t,e,r)}return e.flags|=1,t=Bi(s,i),t.ref=e.ref,t.return=e,e.child=t}function a0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(po(s,i)&&t.ref===e.ref)if(Kt=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Kt=!0);else return e.lanes=t.lanes,gi(t,e,r)}return jc(t,e,n,i,r)}function l0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ye(Qr,ln),ln|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ye(Qr,ln),ln|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,Ye(Qr,ln),ln|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,Ye(Qr,ln),ln|=i;return Vt(t,e,r,n),e.child}function u0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function jc(t,e,n,i,r){var s=Jt(n)?mr:Ft.current;return s=ds(e,s),ss(e,r),n=ef(t,e,n,i,s,r),i=tf(),t!==null&&!Kt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,gi(t,e,r)):(et&&i&&Vd(e),e.flags|=1,Vt(t,e,n,r),e.child)}function Th(t,e,n,i,r){if(Jt(n)){var s=!0;rl(e)}else s=!1;if(ss(e,r),e.stateNode===null)Ba(t,e),zg(e,n,i),Hc(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Tn(u):(u=Jt(n)?mr:Ft.current,u=ds(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&vh(e,o,i,u),Ei=!1;var f=e.memoizedState;o.state=f,ul(e,i,o,r),l=e.memoizedState,a!==i||f!==l||Qt.current||Ei?(typeof c=="function"&&(Vc(e,n,c,i),l=e.memoizedState),(a=Ei||gh(e,n,a,i,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,kg(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Dn(e.type,a),o.props=u,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Tn(l):(l=Jt(n)?mr:Ft.current,l=ds(e,l));var v=n.getDerivedStateFromProps;(c=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&vh(e,o,i,l),Ei=!1,f=e.memoizedState,o.state=f,ul(e,i,o,r);var x=e.memoizedState;a!==d||f!==x||Qt.current||Ei?(typeof v=="function"&&(Vc(e,n,v,i),x=e.memoizedState),(u=Ei||gh(e,n,u,i,f,x,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return $c(t,e,n,i,s,r)}function $c(t,e,n,i,r,s){u0(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&dh(e,n,!1),gi(t,e,s);i=e.stateNode,Nx.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=hs(e,t.child,null,s),e.child=hs(e,null,a,s)):Vt(t,e,a,s),e.memoizedState=i.state,r&&dh(e,n,!0),e.child}function c0(t){var e=t.stateNode;e.pendingContext?ch(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ch(t,e.context,!1),Zd(t,e.containerInfo)}function Ch(t,e,n,i,r){return fs(),Wd(r),e.flags|=256,Vt(t,e,n,i),e.child}var qc={dehydrated:null,treeContext:null,retryLane:0};function Xc(t){return{baseLanes:t,cachePool:null,transitions:null}}function d0(t,e,n){var i=e.pendingProps,r=nt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Ye(nt,r&1),t===null)return Bc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Rl(o,i,0,null),t=fr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Xc(n),e.memoizedState=qc,t):sf(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return zx(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Bi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Bi(a,s):(s=fr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Xc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=qc,i}return s=t.child,t=s.sibling,i=Bi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function sf(t,e){return e=Rl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ta(t,e,n,i){return i!==null&&Wd(i),hs(e,t.child,null,n),t=sf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function zx(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=wu(Error(ie(422))),ta(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Rl({mode:"visible",children:i.children},r,0,null),s=fr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&hs(e,t.child,null,o),e.child.memoizedState=Xc(o),e.memoizedState=qc,s);if(!(e.mode&1))return ta(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ie(419)),i=wu(s,i,void 0),ta(t,e,o,i)}if(a=(o&t.childLanes)!==0,Kt||a){if(i=Et,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,mi(t,r),Un(i,t,r,-1))}return df(),i=wu(Error(ie(421))),ta(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Yx.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,cn=zi(r.nextSibling),dn=e,et=!0,kn=null,t!==null&&(xn[yn++]=li,xn[yn++]=ui,xn[yn++]=gr,li=t.id,ui=t.overflow,gr=e),e=sf(e,i.children),e.flags|=4096,e)}function Ah(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Gc(t.return,e,n)}function Mu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function f0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Vt(t,e,i.children,n),i=nt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ah(t,n,e);else if(t.tag===19)Ah(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Ye(nt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&cl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Mu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&cl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Mu(e,!0,n,null,s);break;case"together":Mu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ba(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function gi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),_r|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ie(153));if(e.child!==null){for(t=e.child,n=Bi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Bi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Fx(t,e,n){switch(e.tag){case 3:c0(e),fs();break;case 5:Ug(e);break;case 1:Jt(e.type)&&rl(e);break;case 4:Zd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Ye(al,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Ye(nt,nt.current&1),e.flags|=128,null):n&e.child.childLanes?d0(t,e,n):(Ye(nt,nt.current&1),t=gi(t,e,n),t!==null?t.sibling:null);Ye(nt,nt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return f0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Ye(nt,nt.current),i)break;return null;case 22:case 23:return e.lanes=0,l0(t,e,n)}return gi(t,e,n)}var h0,Yc,p0,m0;h0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Yc=function(){};p0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,lr(Kn.current);var s=null;switch(n){case"input":r=vc(t,r),i=vc(t,i),s=[];break;case"select":r=rt({},r,{value:void 0}),i=rt({},i,{value:void 0}),s=[];break;case"textarea":r=yc(t,r),i=yc(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=nl)}wc(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(oo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(oo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Ke("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};m0=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ns(t,e){if(!et)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function It(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Ox(t,e,n){var i=e.pendingProps;switch(Hd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return It(e),null;case 1:return Jt(e.type)&&il(),It(e),null;case 3:return i=e.stateNode,ps(),Je(Qt),Je(Ft),Qd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Jo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,kn!==null&&(id(kn),kn=null))),Yc(t,e),It(e),null;case 5:Kd(e);var r=lr(xo.current);if(n=e.type,t!==null&&e.stateNode!=null)p0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ie(166));return It(e),null}if(t=lr(Kn.current),Jo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Yn]=e,i[vo]=s,t=(e.mode&1)!==0,n){case"dialog":Ke("cancel",i),Ke("close",i);break;case"iframe":case"object":case"embed":Ke("load",i);break;case"video":case"audio":for(r=0;r<qs.length;r++)Ke(qs[r],i);break;case"source":Ke("error",i);break;case"img":case"image":case"link":Ke("error",i),Ke("load",i);break;case"details":Ke("toggle",i);break;case"input":Ff(i,s),Ke("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Ke("invalid",i);break;case"textarea":Uf(i,s),Ke("invalid",i)}wc(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Qo(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Qo(i.textContent,a,t),r=["children",""+a]):oo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ke("scroll",i)}switch(n){case"input":Wo(i),Of(i,s,!0);break;case"textarea":Wo(i),Bf(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=nl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Vm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Yn]=e,t[vo]=i,h0(t,e,!1,!1),e.stateNode=t;e:{switch(o=Mc(n,i),n){case"dialog":Ke("cancel",t),Ke("close",t),r=i;break;case"iframe":case"object":case"embed":Ke("load",t),r=i;break;case"video":case"audio":for(r=0;r<qs.length;r++)Ke(qs[r],t);r=i;break;case"source":Ke("error",t),r=i;break;case"img":case"image":case"link":Ke("error",t),Ke("load",t),r=i;break;case"details":Ke("toggle",t),r=i;break;case"input":Ff(t,i),r=vc(t,i),Ke("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=rt({},i,{value:void 0}),Ke("invalid",t);break;case"textarea":Uf(t,i),r=yc(t,i),Ke("invalid",t);break;default:r=i}wc(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?jm(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Hm(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ao(t,l):typeof l=="number"&&ao(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(oo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ke("scroll",t):l!=null&&Ad(t,s,l,o))}switch(n){case"input":Wo(t),Of(t,i,!1);break;case"textarea":Wo(t),Bf(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Hi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ts(t,!!i.multiple,s,!1):i.defaultValue!=null&&ts(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=nl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return It(e),null;case 6:if(t&&e.stateNode!=null)m0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ie(166));if(n=lr(xo.current),lr(Kn.current),Jo(e)){if(i=e.stateNode,n=e.memoizedProps,i[Yn]=e,(s=i.nodeValue!==n)&&(t=dn,t!==null))switch(t.tag){case 3:Qo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Qo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Yn]=e,e.stateNode=i}return It(e),null;case 13:if(Je(nt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(et&&cn!==null&&e.mode&1&&!(e.flags&128))Dg(),fs(),e.flags|=98560,s=!1;else if(s=Jo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ie(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ie(317));s[Yn]=e}else fs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;It(e),s=!1}else kn!==null&&(id(kn),kn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||nt.current&1?mt===0&&(mt=3):df())),e.updateQueue!==null&&(e.flags|=4),It(e),null);case 4:return ps(),Yc(t,e),t===null&&mo(e.stateNode.containerInfo),It(e),null;case 10:return qd(e.type._context),It(e),null;case 17:return Jt(e.type)&&il(),It(e),null;case 19:if(Je(nt),s=e.memoizedState,s===null)return It(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Ns(s,!1);else{if(mt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=cl(t),o!==null){for(e.flags|=128,Ns(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ye(nt,nt.current&1|2),e.child}t=t.sibling}s.tail!==null&&at()>gs&&(e.flags|=128,i=!0,Ns(s,!1),e.lanes=4194304)}else{if(!i)if(t=cl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ns(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!et)return It(e),null}else 2*at()-s.renderingStartTime>gs&&n!==1073741824&&(e.flags|=128,i=!0,Ns(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=at(),e.sibling=null,n=nt.current,Ye(nt,i?n&1|2:n&1),e):(It(e),null);case 22:case 23:return cf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?ln&1073741824&&(It(e),e.subtreeFlags&6&&(e.flags|=8192)):It(e),null;case 24:return null;case 25:return null}throw Error(ie(156,e.tag))}function Ux(t,e){switch(Hd(e),e.tag){case 1:return Jt(e.type)&&il(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ps(),Je(Qt),Je(Ft),Qd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Kd(e),null;case 13:if(Je(nt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ie(340));fs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Je(nt),null;case 4:return ps(),null;case 10:return qd(e.type._context),null;case 22:case 23:return cf(),null;case 24:return null;default:return null}}var na=!1,zt=!1,Bx=typeof WeakSet=="function"?WeakSet:Set,pe=null;function Kr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){st(t,e,i)}else n.current=null}function Zc(t,e,n){try{n()}catch(i){st(t,e,i)}}var Lh=!1;function Gx(t,e){if(Ic=Ja,t=xg(),Gd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,f=null;t:for(;;){for(var v;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(v=d.firstChild)!==null;)f=d,d=v;for(;;){if(d===t)break t;if(f===n&&++u===r&&(a=o),f===s&&++c===i&&(l=o),(v=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=v}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(kc={focusedElem:t,selectionRange:n},Ja=!1,pe=e;pe!==null;)if(e=pe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,pe=t;else for(;pe!==null;){e=pe;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var h=x.memoizedProps,p=x.memoizedState,g=e.stateNode,m=g.getSnapshotBeforeUpdate(e.elementType===e.type?h:Dn(e.type,h),p);g.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ie(163))}}catch(y){st(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,pe=t;break}pe=e.return}return x=Lh,Lh=!1,x}function no(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Zc(e,n,s)}r=r.next}while(r!==i)}}function Ll(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Kc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function g0(t){var e=t.alternate;e!==null&&(t.alternate=null,g0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Yn],delete e[vo],delete e[Fc],delete e[Mx],delete e[Ex])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function v0(t){return t.tag===5||t.tag===3||t.tag===4}function Ph(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||v0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Qc(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=nl));else if(i!==4&&(t=t.child,t!==null))for(Qc(t,e,n),t=t.sibling;t!==null;)Qc(t,e,n),t=t.sibling}function Jc(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Jc(t,e,n),t=t.sibling;t!==null;)Jc(t,e,n),t=t.sibling}var Tt=null,In=!1;function _i(t,e,n){for(n=n.child;n!==null;)_0(t,e,n),n=n.sibling}function _0(t,e,n){if(Zn&&typeof Zn.onCommitFiberUnmount=="function")try{Zn.onCommitFiberUnmount(Sl,n)}catch{}switch(n.tag){case 5:zt||Kr(n,e);case 6:var i=Tt,r=In;Tt=null,_i(t,e,n),Tt=i,In=r,Tt!==null&&(In?(t=Tt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Tt.removeChild(n.stateNode));break;case 18:Tt!==null&&(In?(t=Tt,n=n.stateNode,t.nodeType===8?gu(t.parentNode,n):t.nodeType===1&&gu(t,n),fo(t)):gu(Tt,n.stateNode));break;case 4:i=Tt,r=In,Tt=n.stateNode.containerInfo,In=!0,_i(t,e,n),Tt=i,In=r;break;case 0:case 11:case 14:case 15:if(!zt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Zc(n,e,o),r=r.next}while(r!==i)}_i(t,e,n);break;case 1:if(!zt&&(Kr(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){st(n,e,a)}_i(t,e,n);break;case 21:_i(t,e,n);break;case 22:n.mode&1?(zt=(i=zt)||n.memoizedState!==null,_i(t,e,n),zt=i):_i(t,e,n);break;default:_i(t,e,n)}}function Rh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Bx),e.forEach(function(i){var r=Zx.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function An(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Tt=a.stateNode,In=!1;break e;case 3:Tt=a.stateNode.containerInfo,In=!0;break e;case 4:Tt=a.stateNode.containerInfo,In=!0;break e}a=a.return}if(Tt===null)throw Error(ie(160));_0(s,o,r),Tt=null,In=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){st(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)x0(e,t),e=e.sibling}function x0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(An(e,t),Hn(t),i&4){try{no(3,t,t.return),Ll(3,t)}catch(h){st(t,t.return,h)}try{no(5,t,t.return)}catch(h){st(t,t.return,h)}}break;case 1:An(e,t),Hn(t),i&512&&n!==null&&Kr(n,n.return);break;case 5:if(An(e,t),Hn(t),i&512&&n!==null&&Kr(n,n.return),t.flags&32){var r=t.stateNode;try{ao(r,"")}catch(h){st(t,t.return,h)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Bm(r,s),Mc(a,o);var u=Mc(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?jm(r,d):c==="dangerouslySetInnerHTML"?Hm(r,d):c==="children"?ao(r,d):Ad(r,c,d,u)}switch(a){case"input":_c(r,s);break;case"textarea":Gm(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?ts(r,!!s.multiple,v,!1):f!==!!s.multiple&&(s.defaultValue!=null?ts(r,!!s.multiple,s.defaultValue,!0):ts(r,!!s.multiple,s.multiple?[]:"",!1))}r[vo]=s}catch(h){st(t,t.return,h)}}break;case 6:if(An(e,t),Hn(t),i&4){if(t.stateNode===null)throw Error(ie(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(h){st(t,t.return,h)}}break;case 3:if(An(e,t),Hn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{fo(e.containerInfo)}catch(h){st(t,t.return,h)}break;case 4:An(e,t),Hn(t);break;case 13:An(e,t),Hn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(lf=at())),i&4&&Rh(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(zt=(u=zt)||c,An(e,t),zt=u):An(e,t),Hn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(pe=t,c=t.child;c!==null;){for(d=pe=c;pe!==null;){switch(f=pe,v=f.child,f.tag){case 0:case 11:case 14:case 15:no(4,f,f.return);break;case 1:Kr(f,f.return);var x=f.stateNode;if(typeof x.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(h){st(i,n,h)}}break;case 5:Kr(f,f.return);break;case 22:if(f.memoizedState!==null){Ih(d);continue}}v!==null?(v.return=f,pe=v):Ih(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{r=d.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Wm("display",o))}catch(h){st(t,t.return,h)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(h){st(t,t.return,h)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:An(e,t),Hn(t),i&4&&Rh(t);break;case 21:break;default:An(e,t),Hn(t)}}function Hn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(v0(n)){var i=n;break e}n=n.return}throw Error(ie(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ao(r,""),i.flags&=-33);var s=Ph(t);Jc(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Ph(t);Qc(t,a,o);break;default:throw Error(ie(161))}}catch(l){st(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Vx(t,e,n){pe=t,y0(t)}function y0(t,e,n){for(var i=(t.mode&1)!==0;pe!==null;){var r=pe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||na;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||zt;a=na;var u=zt;if(na=o,(zt=l)&&!u)for(pe=r;pe!==null;)o=pe,l=o.child,o.tag===22&&o.memoizedState!==null?kh(r):l!==null?(l.return=o,pe=l):kh(r);for(;s!==null;)pe=s,y0(s),s=s.sibling;pe=r,na=a,zt=u}Dh(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,pe=s):Dh(t)}}function Dh(t){for(;pe!==null;){var e=pe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:zt||Ll(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!zt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Dn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&mh(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}mh(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&fo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ie(163))}zt||e.flags&512&&Kc(e)}catch(f){st(e,e.return,f)}}if(e===t){pe=null;break}if(n=e.sibling,n!==null){n.return=e.return,pe=n;break}pe=e.return}}function Ih(t){for(;pe!==null;){var e=pe;if(e===t){pe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,pe=n;break}pe=e.return}}function kh(t){for(;pe!==null;){var e=pe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ll(4,e)}catch(l){st(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){st(e,r,l)}}var s=e.return;try{Kc(e)}catch(l){st(e,s,l)}break;case 5:var o=e.return;try{Kc(e)}catch(l){st(e,o,l)}}}catch(l){st(e,e.return,l)}if(e===t){pe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,pe=a;break}pe=e.return}}var Hx=Math.ceil,hl=vi.ReactCurrentDispatcher,of=vi.ReactCurrentOwner,En=vi.ReactCurrentBatchConfig,Oe=0,Et=null,ft=null,At=0,ln=0,Qr=qi(0),mt=0,Mo=null,_r=0,Pl=0,af=0,io=null,Yt=null,lf=0,gs=1/0,si=null,pl=!1,ed=null,Oi=null,ia=!1,Li=null,ml=0,ro=0,td=null,Ga=-1,Va=0;function jt(){return Oe&6?at():Ga!==-1?Ga:Ga=at()}function Ui(t){return t.mode&1?Oe&2&&At!==0?At&-At:Tx.transition!==null?(Va===0&&(Va=ig()),Va):(t=We,t!==0||(t=window.event,t=t===void 0?16:cg(t.type)),t):1}function Un(t,e,n,i){if(50<ro)throw ro=0,td=null,Error(ie(185));Do(t,n,i),(!(Oe&2)||t!==Et)&&(t===Et&&(!(Oe&2)&&(Pl|=n),mt===4&&Ci(t,At)),en(t,i),n===1&&Oe===0&&!(e.mode&1)&&(gs=at()+500,Tl&&Xi()))}function en(t,e){var n=t.callbackNode;T_(t,e);var i=Qa(t,t===Et?At:0);if(i===0)n!==null&&Hf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Hf(n),e===1)t.tag===0?bx(Nh.bind(null,t)):Lg(Nh.bind(null,t)),Sx(function(){!(Oe&6)&&Xi()}),n=null;else{switch(rg(i)){case 1:n=Id;break;case 4:n=tg;break;case 16:n=Ka;break;case 536870912:n=ng;break;default:n=Ka}n=A0(n,S0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function S0(t,e){if(Ga=-1,Va=0,Oe&6)throw Error(ie(327));var n=t.callbackNode;if(os()&&t.callbackNode!==n)return null;var i=Qa(t,t===Et?At:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=gl(t,i);else{e=i;var r=Oe;Oe|=2;var s=M0();(Et!==t||At!==e)&&(si=null,gs=at()+500,dr(t,e));do try{$x();break}catch(a){w0(t,a)}while(1);$d(),hl.current=s,Oe=r,ft!==null?e=0:(Et=null,At=0,e=mt)}if(e!==0){if(e===2&&(r=Ac(t),r!==0&&(i=r,e=nd(t,r))),e===1)throw n=Mo,dr(t,0),Ci(t,i),en(t,at()),n;if(e===6)Ci(t,i);else{if(r=t.current.alternate,!(i&30)&&!Wx(r)&&(e=gl(t,i),e===2&&(s=Ac(t),s!==0&&(i=s,e=nd(t,s))),e===1))throw n=Mo,dr(t,0),Ci(t,i),en(t,at()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ie(345));case 2:nr(t,Yt,si);break;case 3:if(Ci(t,i),(i&130023424)===i&&(e=lf+500-at(),10<e)){if(Qa(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){jt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=zc(nr.bind(null,t,Yt,si),e);break}nr(t,Yt,si);break;case 4:if(Ci(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-On(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=at()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Hx(i/1960))-i,10<i){t.timeoutHandle=zc(nr.bind(null,t,Yt,si),i);break}nr(t,Yt,si);break;case 5:nr(t,Yt,si);break;default:throw Error(ie(329))}}}return en(t,at()),t.callbackNode===n?S0.bind(null,t):null}function nd(t,e){var n=io;return t.current.memoizedState.isDehydrated&&(dr(t,e).flags|=256),t=gl(t,e),t!==2&&(e=Yt,Yt=n,e!==null&&id(e)),t}function id(t){Yt===null?Yt=t:Yt.push.apply(Yt,t)}function Wx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Bn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ci(t,e){for(e&=~af,e&=~Pl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-On(e),i=1<<n;t[n]=-1,e&=~i}}function Nh(t){if(Oe&6)throw Error(ie(327));os();var e=Qa(t,0);if(!(e&1))return en(t,at()),null;var n=gl(t,e);if(t.tag!==0&&n===2){var i=Ac(t);i!==0&&(e=i,n=nd(t,i))}if(n===1)throw n=Mo,dr(t,0),Ci(t,e),en(t,at()),n;if(n===6)throw Error(ie(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,nr(t,Yt,si),en(t,at()),null}function uf(t,e){var n=Oe;Oe|=1;try{return t(e)}finally{Oe=n,Oe===0&&(gs=at()+500,Tl&&Xi())}}function xr(t){Li!==null&&Li.tag===0&&!(Oe&6)&&os();var e=Oe;Oe|=1;var n=En.transition,i=We;try{if(En.transition=null,We=1,t)return t()}finally{We=i,En.transition=n,Oe=e,!(Oe&6)&&Xi()}}function cf(){ln=Qr.current,Je(Qr)}function dr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,yx(n)),ft!==null)for(n=ft.return;n!==null;){var i=n;switch(Hd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&il();break;case 3:ps(),Je(Qt),Je(Ft),Qd();break;case 5:Kd(i);break;case 4:ps();break;case 13:Je(nt);break;case 19:Je(nt);break;case 10:qd(i.type._context);break;case 22:case 23:cf()}n=n.return}if(Et=t,ft=t=Bi(t.current,null),At=ln=e,mt=0,Mo=null,af=Pl=_r=0,Yt=io=null,ar!==null){for(e=0;e<ar.length;e++)if(n=ar[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}ar=null}return t}function w0(t,e){do{var n=ft;try{if($d(),Oa.current=fl,dl){for(var i=it.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}dl=!1}if(vr=0,wt=pt=it=null,to=!1,yo=0,of.current=null,n===null||n.return===null){mt=1,Mo=e,ft=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=At,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var v=wh(o);if(v!==null){v.flags&=-257,Mh(v,o,a,s,e),v.mode&1&&Sh(s,u,e),e=v,l=u;var x=e.updateQueue;if(x===null){var h=new Set;h.add(l),e.updateQueue=h}else x.add(l);break e}else{if(!(e&1)){Sh(s,u,e),df();break e}l=Error(ie(426))}}else if(et&&a.mode&1){var p=wh(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),Mh(p,o,a,s,e),Wd(ms(l,a));break e}}s=l=ms(l,a),mt!==4&&(mt=2),io===null?io=[s]:io.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=s0(s,l,e);ph(s,g);break e;case 1:a=l;var m=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Oi===null||!Oi.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=o0(s,a,e);ph(s,y);break e}}s=s.return}while(s!==null)}b0(n)}catch(M){e=M,ft===n&&n!==null&&(ft=n=n.return);continue}break}while(1)}function M0(){var t=hl.current;return hl.current=fl,t===null?fl:t}function df(){(mt===0||mt===3||mt===2)&&(mt=4),Et===null||!(_r&268435455)&&!(Pl&268435455)||Ci(Et,At)}function gl(t,e){var n=Oe;Oe|=2;var i=M0();(Et!==t||At!==e)&&(si=null,dr(t,e));do try{jx();break}catch(r){w0(t,r)}while(1);if($d(),Oe=n,hl.current=i,ft!==null)throw Error(ie(261));return Et=null,At=0,mt}function jx(){for(;ft!==null;)E0(ft)}function $x(){for(;ft!==null&&!v_();)E0(ft)}function E0(t){var e=C0(t.alternate,t,ln);t.memoizedProps=t.pendingProps,e===null?b0(t):ft=e,of.current=null}function b0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Ux(n,e),n!==null){n.flags&=32767,ft=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{mt=6,ft=null;return}}else if(n=Ox(n,e,ln),n!==null){ft=n;return}if(e=e.sibling,e!==null){ft=e;return}ft=e=t}while(e!==null);mt===0&&(mt=5)}function nr(t,e,n){var i=We,r=En.transition;try{En.transition=null,We=1,qx(t,e,n,i)}finally{En.transition=r,We=i}return null}function qx(t,e,n,i){do os();while(Li!==null);if(Oe&6)throw Error(ie(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ie(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(C_(t,s),t===Et&&(ft=Et=null,At=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ia||(ia=!0,A0(Ka,function(){return os(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=En.transition,En.transition=null;var o=We;We=1;var a=Oe;Oe|=4,of.current=null,Gx(t,n),x0(n,t),hx(kc),Ja=!!Ic,kc=Ic=null,t.current=n,Vx(n),__(),Oe=a,We=o,En.transition=s}else t.current=n;if(ia&&(ia=!1,Li=t,ml=r),s=t.pendingLanes,s===0&&(Oi=null),S_(n.stateNode),en(t,at()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(pl)throw pl=!1,t=ed,ed=null,t;return ml&1&&t.tag!==0&&os(),s=t.pendingLanes,s&1?t===td?ro++:(ro=0,td=t):ro=0,Xi(),null}function os(){if(Li!==null){var t=rg(ml),e=En.transition,n=We;try{if(En.transition=null,We=16>t?16:t,Li===null)var i=!1;else{if(t=Li,Li=null,ml=0,Oe&6)throw Error(ie(331));var r=Oe;for(Oe|=4,pe=t.current;pe!==null;){var s=pe,o=s.child;if(pe.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(pe=u;pe!==null;){var c=pe;switch(c.tag){case 0:case 11:case 15:no(8,c,s)}var d=c.child;if(d!==null)d.return=c,pe=d;else for(;pe!==null;){c=pe;var f=c.sibling,v=c.return;if(g0(c),c===u){pe=null;break}if(f!==null){f.return=v,pe=f;break}pe=v}}}var x=s.alternate;if(x!==null){var h=x.child;if(h!==null){x.child=null;do{var p=h.sibling;h.sibling=null,h=p}while(h!==null)}}pe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,pe=o;else e:for(;pe!==null;){if(s=pe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:no(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,pe=g;break e}pe=s.return}}var m=t.current;for(pe=m;pe!==null;){o=pe;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,pe=_;else e:for(o=m;pe!==null;){if(a=pe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ll(9,a)}}catch(M){st(a,a.return,M)}if(a===o){pe=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,pe=y;break e}pe=a.return}}if(Oe=r,Xi(),Zn&&typeof Zn.onPostCommitFiberRoot=="function")try{Zn.onPostCommitFiberRoot(Sl,t)}catch{}i=!0}return i}finally{We=n,En.transition=e}}return!1}function zh(t,e,n){e=ms(n,e),e=s0(t,e,1),t=Fi(t,e,1),e=jt(),t!==null&&(Do(t,1,e),en(t,e))}function st(t,e,n){if(t.tag===3)zh(t,t,n);else for(;e!==null;){if(e.tag===3){zh(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Oi===null||!Oi.has(i))){t=ms(n,t),t=o0(e,t,1),e=Fi(e,t,1),t=jt(),e!==null&&(Do(e,1,t),en(e,t));break}}e=e.return}}function Xx(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=jt(),t.pingedLanes|=t.suspendedLanes&n,Et===t&&(At&n)===n&&(mt===4||mt===3&&(At&130023424)===At&&500>at()-lf?dr(t,0):af|=n),en(t,e)}function T0(t,e){e===0&&(t.mode&1?(e=qo,qo<<=1,!(qo&130023424)&&(qo=4194304)):e=1);var n=jt();t=mi(t,e),t!==null&&(Do(t,e,n),en(t,n))}function Yx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),T0(t,n)}function Zx(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ie(314))}i!==null&&i.delete(e),T0(t,n)}var C0;C0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Qt.current)Kt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Kt=!1,Fx(t,e,n);Kt=!!(t.flags&131072)}else Kt=!1,et&&e.flags&1048576&&Pg(e,ol,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ba(t,e),t=e.pendingProps;var r=ds(e,Ft.current);ss(e,n),r=ef(null,e,i,t,r,n);var s=tf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Jt(i)?(s=!0,rl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Yd(e),r.updater=Cl,e.stateNode=r,r._reactInternals=e,Hc(e,i,t,n),e=$c(null,e,i,!0,s,n)):(e.tag=0,et&&s&&Vd(e),Vt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ba(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Qx(i),t=Dn(i,t),r){case 0:e=jc(null,e,i,t,n);break e;case 1:e=Th(null,e,i,t,n);break e;case 11:e=Eh(null,e,i,t,n);break e;case 14:e=bh(null,e,i,Dn(i.type,t),n);break e}throw Error(ie(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Dn(i,r),jc(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Dn(i,r),Th(t,e,i,r,n);case 3:e:{if(c0(e),t===null)throw Error(ie(387));i=e.pendingProps,s=e.memoizedState,r=s.element,kg(t,e),ul(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=ms(Error(ie(423)),e),e=Ch(t,e,i,n,r);break e}else if(i!==r){r=ms(Error(ie(424)),e),e=Ch(t,e,i,n,r);break e}else for(cn=zi(e.stateNode.containerInfo.firstChild),dn=e,et=!0,kn=null,n=Og(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(fs(),i===r){e=gi(t,e,n);break e}Vt(t,e,i,n)}e=e.child}return e;case 5:return Ug(e),t===null&&Bc(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Nc(i,r)?o=null:s!==null&&Nc(i,s)&&(e.flags|=32),u0(t,e),Vt(t,e,o,n),e.child;case 6:return t===null&&Bc(e),null;case 13:return d0(t,e,n);case 4:return Zd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=hs(e,null,i,n):Vt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Dn(i,r),Eh(t,e,i,r,n);case 7:return Vt(t,e,e.pendingProps,n),e.child;case 8:return Vt(t,e,e.pendingProps.children,n),e.child;case 12:return Vt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Ye(al,i._currentValue),i._currentValue=o,s!==null)if(Bn(s.value,o)){if(s.children===r.children&&!Qt.current){e=gi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=di(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Gc(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ie(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Gc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Vt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ss(e,n),r=Tn(r),i=i(r),e.flags|=1,Vt(t,e,i,n),e.child;case 14:return i=e.type,r=Dn(i,e.pendingProps),r=Dn(i.type,r),bh(t,e,i,r,n);case 15:return a0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Dn(i,r),Ba(t,e),e.tag=1,Jt(i)?(t=!0,rl(e)):t=!1,ss(e,n),zg(e,i,r),Hc(e,i,r,n),$c(null,e,i,!0,t,n);case 19:return f0(t,e,n);case 22:return l0(t,e,n)}throw Error(ie(156,e.tag))};function A0(t,e){return eg(t,e)}function Kx(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mn(t,e,n,i){return new Kx(t,e,n,i)}function ff(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Qx(t){if(typeof t=="function")return ff(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Pd)return 11;if(t===Rd)return 14}return 2}function Bi(t,e){var n=t.alternate;return n===null?(n=Mn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ha(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")ff(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Vr:return fr(n.children,r,s,e);case Ld:o=8,r|=8;break;case hc:return t=Mn(12,n,e,r|2),t.elementType=hc,t.lanes=s,t;case pc:return t=Mn(13,n,e,r),t.elementType=pc,t.lanes=s,t;case mc:return t=Mn(19,n,e,r),t.elementType=mc,t.lanes=s,t;case Fm:return Rl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Nm:o=10;break e;case zm:o=9;break e;case Pd:o=11;break e;case Rd:o=14;break e;case Mi:o=16,i=null;break e}throw Error(ie(130,t==null?t:typeof t,""))}return e=Mn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function fr(t,e,n,i){return t=Mn(7,t,i,e),t.lanes=n,t}function Rl(t,e,n,i){return t=Mn(22,t,i,e),t.elementType=Fm,t.lanes=n,t.stateNode={isHidden:!1},t}function Eu(t,e,n){return t=Mn(6,t,null,e),t.lanes=n,t}function bu(t,e,n){return e=Mn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Jx(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=su(0),this.expirationTimes=su(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=su(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function hf(t,e,n,i,r,s,o,a,l){return t=new Jx(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Mn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Yd(s),t}function ey(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Gr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function L0(t){if(!t)return Wi;t=t._reactInternals;e:{if(br(t)!==t||t.tag!==1)throw Error(ie(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Jt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ie(171))}if(t.tag===1){var n=t.type;if(Jt(n))return Ag(t,n,e)}return e}function P0(t,e,n,i,r,s,o,a,l){return t=hf(n,i,!0,t,r,s,o,a,l),t.context=L0(null),n=t.current,i=jt(),r=Ui(n),s=di(i,r),s.callback=e??null,Fi(n,s,r),t.current.lanes=r,Do(t,r,i),en(t,i),t}function Dl(t,e,n,i){var r=e.current,s=jt(),o=Ui(r);return n=L0(n),e.context===null?e.context=n:e.pendingContext=n,e=di(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Fi(r,e,o),t!==null&&(Un(t,r,o,s),Fa(t,r,o)),o}function vl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Fh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function pf(t,e){Fh(t,e),(t=t.alternate)&&Fh(t,e)}function ty(){return null}var R0=typeof reportError=="function"?reportError:function(t){console.error(t)};function mf(t){this._internalRoot=t}Il.prototype.render=mf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ie(409));Dl(t,e,null,null)};Il.prototype.unmount=mf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;xr(function(){Dl(null,t,null,null)}),e[pi]=null}};function Il(t){this._internalRoot=t}Il.prototype.unstable_scheduleHydration=function(t){if(t){var e=ag();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ti.length&&e!==0&&e<Ti[n].priority;n++);Ti.splice(n,0,t),n===0&&ug(t)}};function gf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function kl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Oh(){}function ny(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=vl(o);s.call(u)}}var o=P0(e,i,t,0,null,!1,!1,"",Oh);return t._reactRootContainer=o,t[pi]=o.current,mo(t.nodeType===8?t.parentNode:t),xr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=vl(l);a.call(u)}}var l=hf(t,0,!1,null,null,!1,!1,"",Oh);return t._reactRootContainer=l,t[pi]=l.current,mo(t.nodeType===8?t.parentNode:t),xr(function(){Dl(e,l,n,i)}),l}function Nl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=vl(o);a.call(l)}}Dl(e,o,t,r)}else o=ny(n,e,t,r,i);return vl(o)}sg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=$s(e.pendingLanes);n!==0&&(kd(e,n|1),en(e,at()),!(Oe&6)&&(gs=at()+500,Xi()))}break;case 13:xr(function(){var i=mi(t,1);if(i!==null){var r=jt();Un(i,t,1,r)}}),pf(t,1)}};Nd=function(t){if(t.tag===13){var e=mi(t,134217728);if(e!==null){var n=jt();Un(e,t,134217728,n)}pf(t,134217728)}};og=function(t){if(t.tag===13){var e=Ui(t),n=mi(t,e);if(n!==null){var i=jt();Un(n,t,e,i)}pf(t,e)}};ag=function(){return We};lg=function(t,e){var n=We;try{return We=t,e()}finally{We=n}};bc=function(t,e,n){switch(e){case"input":if(_c(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=bl(i);if(!r)throw Error(ie(90));Um(i),_c(i,r)}}}break;case"textarea":Gm(t,n);break;case"select":e=n.value,e!=null&&ts(t,!!n.multiple,e,!1)}};Xm=uf;Ym=xr;var iy={usingClientEntryPoint:!1,Events:[ko,$r,bl,$m,qm,uf]},zs={findFiberByHostInstance:or,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},ry={bundleType:zs.bundleType,version:zs.version,rendererPackageName:zs.rendererPackageName,rendererConfig:zs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:vi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Qm(t),t===null?null:t.stateNode},findFiberByHostInstance:zs.findFiberByHostInstance||ty,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ra=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ra.isDisabled&&ra.supportsFiber)try{Sl=ra.inject(ry),Zn=ra}catch{}}pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=iy;pn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gf(e))throw Error(ie(200));return ey(t,e,null,n)};pn.createRoot=function(t,e){if(!gf(t))throw Error(ie(299));var n=!1,i="",r=R0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=hf(t,1,!1,null,null,n,!1,i,r),t[pi]=e.current,mo(t.nodeType===8?t.parentNode:t),new mf(e)};pn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ie(188)):(t=Object.keys(t).join(","),Error(ie(268,t)));return t=Qm(e),t=t===null?null:t.stateNode,t};pn.flushSync=function(t){return xr(t)};pn.hydrate=function(t,e,n){if(!kl(e))throw Error(ie(200));return Nl(null,t,e,!0,n)};pn.hydrateRoot=function(t,e,n){if(!gf(t))throw Error(ie(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=R0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=P0(e,null,t,1,n??null,r,!1,s,o),t[pi]=e.current,mo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Il(e)};pn.render=function(t,e,n){if(!kl(e))throw Error(ie(200));return Nl(null,t,e,!1,n)};pn.unmountComponentAtNode=function(t){if(!kl(t))throw Error(ie(40));return t._reactRootContainer?(xr(function(){Nl(null,null,t,!1,function(){t._reactRootContainer=null,t[pi]=null})}),!0):!1};pn.unstable_batchedUpdates=uf;pn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!kl(n))throw Error(ie(200));if(t==null||t._reactInternals===void 0)throw Error(ie(38));return Nl(t,e,n,!1,i)};pn.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=pn})(t_);var Uh=cc;uc.createRoot=Uh.createRoot,uc.hydrateRoot=Uh.hydrateRoot;var Eo={},sy={get exports(){return Eo},set exports(t){Eo=t}},je={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bt=typeof Symbol=="function"&&Symbol.for,vf=bt?Symbol.for("react.element"):60103,_f=bt?Symbol.for("react.portal"):60106,zl=bt?Symbol.for("react.fragment"):60107,Fl=bt?Symbol.for("react.strict_mode"):60108,Ol=bt?Symbol.for("react.profiler"):60114,Ul=bt?Symbol.for("react.provider"):60109,Bl=bt?Symbol.for("react.context"):60110,xf=bt?Symbol.for("react.async_mode"):60111,Gl=bt?Symbol.for("react.concurrent_mode"):60111,Vl=bt?Symbol.for("react.forward_ref"):60112,Hl=bt?Symbol.for("react.suspense"):60113,oy=bt?Symbol.for("react.suspense_list"):60120,Wl=bt?Symbol.for("react.memo"):60115,jl=bt?Symbol.for("react.lazy"):60116,ay=bt?Symbol.for("react.block"):60121,ly=bt?Symbol.for("react.fundamental"):60117,uy=bt?Symbol.for("react.responder"):60118,cy=bt?Symbol.for("react.scope"):60119;function gn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case vf:switch(t=t.type,t){case xf:case Gl:case zl:case Ol:case Fl:case Hl:return t;default:switch(t=t&&t.$$typeof,t){case Bl:case Vl:case jl:case Wl:case Ul:return t;default:return e}}case _f:return e}}}function D0(t){return gn(t)===Gl}je.AsyncMode=xf;je.ConcurrentMode=Gl;je.ContextConsumer=Bl;je.ContextProvider=Ul;je.Element=vf;je.ForwardRef=Vl;je.Fragment=zl;je.Lazy=jl;je.Memo=Wl;je.Portal=_f;je.Profiler=Ol;je.StrictMode=Fl;je.Suspense=Hl;je.isAsyncMode=function(t){return D0(t)||gn(t)===xf};je.isConcurrentMode=D0;je.isContextConsumer=function(t){return gn(t)===Bl};je.isContextProvider=function(t){return gn(t)===Ul};je.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===vf};je.isForwardRef=function(t){return gn(t)===Vl};je.isFragment=function(t){return gn(t)===zl};je.isLazy=function(t){return gn(t)===jl};je.isMemo=function(t){return gn(t)===Wl};je.isPortal=function(t){return gn(t)===_f};je.isProfiler=function(t){return gn(t)===Ol};je.isStrictMode=function(t){return gn(t)===Fl};je.isSuspense=function(t){return gn(t)===Hl};je.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===zl||t===Gl||t===Ol||t===Fl||t===Hl||t===oy||typeof t=="object"&&t!==null&&(t.$$typeof===jl||t.$$typeof===Wl||t.$$typeof===Ul||t.$$typeof===Bl||t.$$typeof===Vl||t.$$typeof===ly||t.$$typeof===uy||t.$$typeof===cy||t.$$typeof===ay)};je.typeOf=gn;(function(t){t.exports=je})(sy);function dy(t){function e(A,F,G,D,P){for(var ne=0,W=0,oe=0,le=0,fe,ue,we=0,Ve=0,Ae,Ge=Ae=fe=0,be=0,Pe=0,He=0,$e=0,Rt=G.length,b=Rt-1,w,z="",J="",se="",de="",ge;be<Rt;){if(ue=G.charCodeAt(be),be===b&&W+le+oe+ne!==0&&(W!==0&&(ue=W===47?10:47),le=oe=ne=0,Rt++,b++),W+le+oe+ne===0){if(be===b&&(0<Pe&&(z=z.replace(f,"")),0<z.trim().length)){switch(ue){case 32:case 9:case 59:case 13:case 10:break;default:z+=G.charAt(be)}ue=59}switch(ue){case 123:for(z=z.trim(),fe=z.charCodeAt(0),Ae=1,$e=++be;be<Rt;){switch(ue=G.charCodeAt(be)){case 123:Ae++;break;case 125:Ae--;break;case 47:switch(ue=G.charCodeAt(be+1)){case 42:case 47:e:{for(Ge=be+1;Ge<b;++Ge)switch(G.charCodeAt(Ge)){case 47:if(ue===42&&G.charCodeAt(Ge-1)===42&&be+2!==Ge){be=Ge+1;break e}break;case 10:if(ue===47){be=Ge+1;break e}}be=Ge}}break;case 91:ue++;case 40:ue++;case 34:case 39:for(;be++<b&&G.charCodeAt(be)!==ue;);}if(Ae===0)break;be++}switch(Ae=G.substring($e,be),fe===0&&(fe=(z=z.replace(d,"").trim()).charCodeAt(0)),fe){case 64:switch(0<Pe&&(z=z.replace(f,"")),ue=z.charCodeAt(1),ue){case 100:case 109:case 115:case 45:Pe=F;break;default:Pe=ee}if(Ae=e(F,Pe,Ae,ue,P+1),$e=Ae.length,0<I&&(Pe=n(ee,z,He),ge=a(3,Ae,Pe,F,U,K,$e,ue,P,D),z=Pe.join(""),ge!==void 0&&($e=(Ae=ge.trim()).length)===0&&(ue=0,Ae="")),0<$e)switch(ue){case 115:z=z.replace(C,o);case 100:case 109:case 45:Ae=z+"{"+Ae+"}";break;case 107:z=z.replace(m,"$1 $2"),Ae=z+"{"+Ae+"}",Ae=$===1||$===2&&s("@"+Ae,3)?"@-webkit-"+Ae+"@"+Ae:"@"+Ae;break;default:Ae=z+Ae,D===112&&(Ae=(J+=Ae,""))}else Ae="";break;default:Ae=e(F,n(F,z,He),Ae,D,P+1)}se+=Ae,Ae=He=Pe=Ge=fe=0,z="",ue=G.charCodeAt(++be);break;case 125:case 59:if(z=(0<Pe?z.replace(f,""):z).trim(),1<($e=z.length))switch(Ge===0&&(fe=z.charCodeAt(0),fe===45||96<fe&&123>fe)&&($e=(z=z.replace(" ",":")).length),0<I&&(ge=a(1,z,F,A,U,K,J.length,D,P,D))!==void 0&&($e=(z=ge.trim()).length)===0&&(z="\0\0"),fe=z.charCodeAt(0),ue=z.charCodeAt(1),fe){case 0:break;case 64:if(ue===105||ue===99){de+=z+G.charAt(be);break}default:z.charCodeAt($e-1)!==58&&(J+=r(z,fe,ue,z.charCodeAt(2)))}He=Pe=Ge=fe=0,z="",ue=G.charCodeAt(++be)}}switch(ue){case 13:case 10:W===47?W=0:1+fe===0&&D!==107&&0<z.length&&(Pe=1,z+="\0"),0<I*H&&a(0,z,F,A,U,K,J.length,D,P,D),K=1,U++;break;case 59:case 125:if(W+le+oe+ne===0){K++;break}default:switch(K++,w=G.charAt(be),ue){case 9:case 32:if(le+ne+W===0)switch(we){case 44:case 58:case 9:case 32:w="";break;default:ue!==32&&(w=" ")}break;case 0:w="\\0";break;case 12:w="\\f";break;case 11:w="\\v";break;case 38:le+W+ne===0&&(Pe=He=1,w="\f"+w);break;case 108:if(le+W+ne+N===0&&0<Ge)switch(be-Ge){case 2:we===112&&G.charCodeAt(be-3)===58&&(N=we);case 8:Ve===111&&(N=Ve)}break;case 58:le+W+ne===0&&(Ge=be);break;case 44:W+oe+le+ne===0&&(Pe=1,w+="\r");break;case 34:case 39:W===0&&(le=le===ue?0:le===0?ue:le);break;case 91:le+W+oe===0&&ne++;break;case 93:le+W+oe===0&&ne--;break;case 41:le+W+ne===0&&oe--;break;case 40:if(le+W+ne===0){if(fe===0)switch(2*we+3*Ve){case 533:break;default:fe=1}oe++}break;case 64:W+oe+le+ne+Ge+Ae===0&&(Ae=1);break;case 42:case 47:if(!(0<le+ne+oe))switch(W){case 0:switch(2*ue+3*G.charCodeAt(be+1)){case 235:W=47;break;case 220:$e=be,W=42}break;case 42:ue===47&&we===42&&$e+2!==be&&(G.charCodeAt($e+2)===33&&(J+=G.substring($e,be+1)),w="",W=0)}}W===0&&(z+=w)}Ve=we,we=ue,be++}if($e=J.length,0<$e){if(Pe=F,0<I&&(ge=a(2,J,Pe,A,U,K,$e,D,P,D),ge!==void 0&&(J=ge).length===0))return de+J+se;if(J=Pe.join(",")+"{"+J+"}",$*N!==0){switch($!==2||s(J,2)||(N=0),N){case 111:J=J.replace(y,":-moz-$1")+J;break;case 112:J=J.replace(_,"::-webkit-input-$1")+J.replace(_,"::-moz-$1")+J.replace(_,":-ms-input-$1")+J}N=0}}return de+J+se}function n(A,F,G){var D=F.trim().split(p);F=D;var P=D.length,ne=A.length;switch(ne){case 0:case 1:var W=0;for(A=ne===0?"":A[0]+" ";W<P;++W)F[W]=i(A,F[W],G).trim();break;default:var oe=W=0;for(F=[];W<P;++W)for(var le=0;le<ne;++le)F[oe++]=i(A[le]+" ",D[W],G).trim()}return F}function i(A,F,G){var D=F.charCodeAt(0);switch(33>D&&(D=(F=F.trim()).charCodeAt(0)),D){case 38:return F.replace(g,"$1"+A.trim());case 58:return A.trim()+F.replace(g,"$1"+A.trim());default:if(0<1*G&&0<F.indexOf("\f"))return F.replace(g,(A.charCodeAt(0)===58?"":"$1")+A.trim())}return A+F}function r(A,F,G,D){var P=A+";",ne=2*F+3*G+4*D;if(ne===944){A=P.indexOf(":",9)+1;var W=P.substring(A,P.length-1).trim();return W=P.substring(0,A).trim()+W+";",$===1||$===2&&s(W,1)?"-webkit-"+W+W:W}if($===0||$===2&&!s(P,1))return P;switch(ne){case 1015:return P.charCodeAt(10)===97?"-webkit-"+P+P:P;case 951:return P.charCodeAt(3)===116?"-webkit-"+P+P:P;case 963:return P.charCodeAt(5)===110?"-webkit-"+P+P:P;case 1009:if(P.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+P+P;case 978:return"-webkit-"+P+"-moz-"+P+P;case 1019:case 983:return"-webkit-"+P+"-moz-"+P+"-ms-"+P+P;case 883:if(P.charCodeAt(8)===45)return"-webkit-"+P+P;if(0<P.indexOf("image-set(",11))return P.replace(Z,"$1-webkit-$2")+P;break;case 932:if(P.charCodeAt(4)===45)switch(P.charCodeAt(5)){case 103:return"-webkit-box-"+P.replace("-grow","")+"-webkit-"+P+"-ms-"+P.replace("grow","positive")+P;case 115:return"-webkit-"+P+"-ms-"+P.replace("shrink","negative")+P;case 98:return"-webkit-"+P+"-ms-"+P.replace("basis","preferred-size")+P}return"-webkit-"+P+"-ms-"+P+P;case 964:return"-webkit-"+P+"-ms-flex-"+P+P;case 1023:if(P.charCodeAt(8)!==99)break;return W=P.substring(P.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+W+"-webkit-"+P+"-ms-flex-pack"+W+P;case 1005:return x.test(P)?P.replace(v,":-webkit-")+P.replace(v,":-moz-")+P:P;case 1e3:switch(W=P.substring(13).trim(),F=W.indexOf("-")+1,W.charCodeAt(0)+W.charCodeAt(F)){case 226:W=P.replace(M,"tb");break;case 232:W=P.replace(M,"tb-rl");break;case 220:W=P.replace(M,"lr");break;default:return P}return"-webkit-"+P+"-ms-"+W+P;case 1017:if(P.indexOf("sticky",9)===-1)break;case 975:switch(F=(P=A).length-10,W=(P.charCodeAt(F)===33?P.substring(0,F):P).substring(A.indexOf(":",7)+1).trim(),ne=W.charCodeAt(0)+(W.charCodeAt(7)|0)){case 203:if(111>W.charCodeAt(8))break;case 115:P=P.replace(W,"-webkit-"+W)+";"+P;break;case 207:case 102:P=P.replace(W,"-webkit-"+(102<ne?"inline-":"")+"box")+";"+P.replace(W,"-webkit-"+W)+";"+P.replace(W,"-ms-"+W+"box")+";"+P}return P+";";case 938:if(P.charCodeAt(5)===45)switch(P.charCodeAt(6)){case 105:return W=P.replace("-items",""),"-webkit-"+P+"-webkit-box-"+W+"-ms-flex-"+W+P;case 115:return"-webkit-"+P+"-ms-flex-item-"+P.replace(S,"")+P;default:return"-webkit-"+P+"-ms-flex-line-pack"+P.replace("align-content","").replace(S,"")+P}break;case 973:case 989:if(P.charCodeAt(3)!==45||P.charCodeAt(4)===122)break;case 931:case 953:if(R.test(A)===!0)return(W=A.substring(A.indexOf(":")+1)).charCodeAt(0)===115?r(A.replace("stretch","fill-available"),F,G,D).replace(":fill-available",":stretch"):P.replace(W,"-webkit-"+W)+P.replace(W,"-moz-"+W.replace("fill-",""))+P;break;case 962:if(P="-webkit-"+P+(P.charCodeAt(5)===102?"-ms-"+P:"")+P,G+D===211&&P.charCodeAt(13)===105&&0<P.indexOf("transform",10))return P.substring(0,P.indexOf(";",27)+1).replace(h,"$1-webkit-$2")+P}return P}function s(A,F){var G=A.indexOf(F===1?":":"{"),D=A.substring(0,F!==3?G:10);return G=A.substring(G+1,A.length-1),j(F!==2?D:D.replace(T,"$1"),G,F)}function o(A,F){var G=r(F,F.charCodeAt(0),F.charCodeAt(1),F.charCodeAt(2));return G!==F+";"?G.replace(L," or ($1)").substring(4):"("+F+")"}function a(A,F,G,D,P,ne,W,oe,le,fe){for(var ue=0,we=F,Ve;ue<I;++ue)switch(Ve=te[ue].call(c,A,we,G,D,P,ne,W,oe,le,fe)){case void 0:case!1:case!0:case null:break;default:we=Ve}if(we!==F)return we}function l(A){switch(A){case void 0:case null:I=te.length=0;break;default:if(typeof A=="function")te[I++]=A;else if(typeof A=="object")for(var F=0,G=A.length;F<G;++F)l(A[F]);else H=!!A|0}return l}function u(A){return A=A.prefix,A!==void 0&&(j=null,A?typeof A!="function"?$=1:($=2,j=A):$=0),u}function c(A,F){var G=A;if(33>G.charCodeAt(0)&&(G=G.trim()),ae=G,G=[ae],0<I){var D=a(-1,F,G,G,U,K,0,0,0,0);D!==void 0&&typeof D=="string"&&(F=D)}var P=e(ee,G,F,0,0);return 0<I&&(D=a(-2,P,G,G,U,K,P.length,0,0,0),D!==void 0&&(P=D)),ae="",N=0,K=U=1,P}var d=/^\0+/g,f=/[\0\r\f]/g,v=/: */g,x=/zoo|gra/,h=/([,: ])(transform)/g,p=/,\r+?/g,g=/([\t\r\n ])*\f?&/g,m=/@(k\w+)\s*(\S*)\s*/,_=/::(place)/g,y=/:(read-only)/g,M=/[svh]\w+-[tblr]{2}/,C=/\(\s*(.*)\s*\)/g,L=/([\s\S]*?);/g,S=/-self|flex-/g,T=/[^]*?(:[rp][el]a[\w-]+)[^]*/,R=/stretch|:\s*\w+\-(?:conte|avail)/,Z=/([^-])(image-set\()/,K=1,U=1,N=0,$=1,ee=[],te=[],I=0,j=null,H=0,ae="";return c.use=l,c.set=u,t!==void 0&&u(t),c}var fy={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function hy(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var py=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Bh=hy(function(t){return py.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91}),yf=Eo,my={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},gy={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},vy={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},I0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Sf={};Sf[yf.ForwardRef]=vy;Sf[yf.Memo]=I0;function Gh(t){return yf.isMemo(t)?I0:Sf[t.$$typeof]||my}var _y=Object.defineProperty,xy=Object.getOwnPropertyNames,Vh=Object.getOwnPropertySymbols,yy=Object.getOwnPropertyDescriptor,Sy=Object.getPrototypeOf,Hh=Object.prototype;function k0(t,e,n){if(typeof e!="string"){if(Hh){var i=Sy(e);i&&i!==Hh&&k0(t,i,n)}var r=xy(e);Vh&&(r=r.concat(Vh(e)));for(var s=Gh(t),o=Gh(e),a=0;a<r.length;++a){var l=r[a];if(!gy[l]&&!(n&&n[l])&&!(o&&o[l])&&!(s&&s[l])){var u=yy(e,l);try{_y(t,l,u)}catch{}}}}return t}var wy=k0;function ci(){return(ci=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}var Wh=function(t,e){for(var n=[t[0]],i=0,r=e.length;i<r;i+=1)n.push(e[i],t[i+1]);return n},rd=function(t){return t!==null&&typeof t=="object"&&(t.toString?t.toString():Object.prototype.toString.call(t))==="[object Object]"&&!Eo.typeOf(t)},_l=Object.freeze([]),Gi=Object.freeze({});function bo(t){return typeof t=="function"}function jh(t){return t.displayName||t.name||"Component"}function wf(t){return t&&typeof t.styledComponentId=="string"}var vs=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Mf=typeof window<"u"&&"HTMLElement"in window,My=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY));function zo(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];throw new Error("An error occurred. See https://git.io/JUIaE#"+t+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var Ey=function(){function t(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var e=t.prototype;return e.indexOfGroup=function(n){for(var i=0,r=0;r<n;r++)i+=this.groupSizes[r];return i},e.insertRules=function(n,i){if(n>=this.groupSizes.length){for(var r=this.groupSizes,s=r.length,o=s;n>=o;)(o<<=1)<0&&zo(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var a=s;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(n+1),u=0,c=i.length;u<c;u++)this.tag.insertRule(l,i[u])&&(this.groupSizes[n]++,l++)},e.clearGroup=function(n){if(n<this.length){var i=this.groupSizes[n],r=this.indexOfGroup(n),s=r+i;this.groupSizes[n]=0;for(var o=r;o<s;o++)this.tag.deleteRule(r)}},e.getGroup=function(n){var i="";if(n>=this.length||this.groupSizes[n]===0)return i;for(var r=this.groupSizes[n],s=this.indexOfGroup(n),o=s+r,a=s;a<o;a++)i+=this.tag.getRule(a)+`/*!sc*/
`;return i},t}(),Wa=new Map,xl=new Map,so=1,sa=function(t){if(Wa.has(t))return Wa.get(t);for(;xl.has(so);)so++;var e=so++;return Wa.set(t,e),xl.set(e,t),e},by=function(t){return xl.get(t)},Ty=function(t,e){e>=so&&(so=e+1),Wa.set(t,e),xl.set(e,t)},Cy="style["+vs+'][data-styled-version="5.3.9"]',Ay=new RegExp("^"+vs+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),Ly=function(t,e,n){for(var i,r=n.split(","),s=0,o=r.length;s<o;s++)(i=r[s])&&t.registerName(e,i)},Py=function(t,e){for(var n=(e.textContent||"").split(`/*!sc*/
`),i=[],r=0,s=n.length;r<s;r++){var o=n[r].trim();if(o){var a=o.match(Ay);if(a){var l=0|parseInt(a[1],10),u=a[2];l!==0&&(Ty(u,l),Ly(t,u,a[3]),t.getTag().insertRules(l,i)),i.length=0}else i.push(o)}}},Ry=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},N0=function(t){var e=document.head,n=t||e,i=document.createElement("style"),r=function(a){for(var l=a.childNodes,u=l.length;u>=0;u--){var c=l[u];if(c&&c.nodeType===1&&c.hasAttribute(vs))return c}}(n),s=r!==void 0?r.nextSibling:null;i.setAttribute(vs,"active"),i.setAttribute("data-styled-version","5.3.9");var o=Ry();return o&&i.setAttribute("nonce",o),n.insertBefore(i,s),i},Dy=function(){function t(n){var i=this.element=N0(n);i.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var s=document.styleSheets,o=0,a=s.length;o<a;o++){var l=s[o];if(l.ownerNode===r)return l}zo(17)}(i),this.length=0}var e=t.prototype;return e.insertRule=function(n,i){try{return this.sheet.insertRule(i,n),this.length++,!0}catch{return!1}},e.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},e.getRule=function(n){var i=this.sheet.cssRules[n];return i!==void 0&&typeof i.cssText=="string"?i.cssText:""},t}(),Iy=function(){function t(n){var i=this.element=N0(n);this.nodes=i.childNodes,this.length=0}var e=t.prototype;return e.insertRule=function(n,i){if(n<=this.length&&n>=0){var r=document.createTextNode(i),s=this.nodes[n];return this.element.insertBefore(r,s||null),this.length++,!0}return!1},e.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},e.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},t}(),ky=function(){function t(n){this.rules=[],this.length=0}var e=t.prototype;return e.insertRule=function(n,i){return n<=this.length&&(this.rules.splice(n,0,i),this.length++,!0)},e.deleteRule=function(n){this.rules.splice(n,1),this.length--},e.getRule=function(n){return n<this.length?this.rules[n]:""},t}(),$h=Mf,Ny={isServer:!Mf,useCSSOMInjection:!My},z0=function(){function t(n,i,r){n===void 0&&(n=Gi),i===void 0&&(i={}),this.options=ci({},Ny,{},n),this.gs=i,this.names=new Map(r),this.server=!!n.isServer,!this.server&&Mf&&$h&&($h=!1,function(s){for(var o=document.querySelectorAll(Cy),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(vs)!=="active"&&(Py(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}t.registerId=function(n){return sa(n)};var e=t.prototype;return e.reconstructWithOptions=function(n,i){return i===void 0&&(i=!0),new t(ci({},this.options,{},n),this.gs,i&&this.names||void 0)},e.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},e.getTag=function(){return this.tag||(this.tag=(r=(i=this.options).isServer,s=i.useCSSOMInjection,o=i.target,n=r?new ky(o):s?new Dy(o):new Iy(o),new Ey(n)));var n,i,r,s,o},e.hasNameForId=function(n,i){return this.names.has(n)&&this.names.get(n).has(i)},e.registerName=function(n,i){if(sa(n),this.names.has(n))this.names.get(n).add(i);else{var r=new Set;r.add(i),this.names.set(n,r)}},e.insertRules=function(n,i,r){this.registerName(n,i),this.getTag().insertRules(sa(n),r)},e.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},e.clearRules=function(n){this.getTag().clearGroup(sa(n)),this.clearNames(n)},e.clearTag=function(){this.tag=void 0},e.toString=function(){return function(n){for(var i=n.getTag(),r=i.length,s="",o=0;o<r;o++){var a=by(o);if(a!==void 0){var l=n.names.get(a),u=i.getGroup(o);if(l&&u&&l.size){var c=vs+".g"+o+'[id="'+a+'"]',d="";l!==void 0&&l.forEach(function(f){f.length>0&&(d+=f+",")}),s+=""+u+c+'{content:"'+d+`"}/*!sc*/
`}}}return s}(this)},t}(),zy=/(a)(d)/gi,qh=function(t){return String.fromCharCode(t+(t>25?39:97))};function sd(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=qh(e%52)+n;return(qh(e%52)+n).replace(zy,"$1-$2")}var Jr=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},F0=function(t){return Jr(5381,t)};function Fy(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(bo(n)&&!wf(n))return!1}return!0}var Oy=F0("5.3.9"),Uy=function(){function t(e,n,i){this.rules=e,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&Fy(e),this.componentId=n,this.baseHash=Jr(Oy,n),this.baseStyle=i,z0.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,i){var r=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(e,n,i)),this.isStatic&&!i.hash)if(this.staticRulesId&&n.hasNameForId(r,this.staticRulesId))s.push(this.staticRulesId);else{var o=_s(this.rules,e,n,i).join(""),a=sd(Jr(this.baseHash,o)>>>0);if(!n.hasNameForId(r,a)){var l=i(o,"."+a,void 0,r);n.insertRules(r,a,l)}s.push(a),this.staticRulesId=a}else{for(var u=this.rules.length,c=Jr(this.baseHash,i.hash),d="",f=0;f<u;f++){var v=this.rules[f];if(typeof v=="string")d+=v;else if(v){var x=_s(v,e,n,i),h=Array.isArray(x)?x.join(""):x;c=Jr(c,h+f),d+=h}}if(d){var p=sd(c>>>0);if(!n.hasNameForId(r,p)){var g=i(d,"."+p,void 0,r);n.insertRules(r,p,g)}s.push(p)}}return s.join(" ")},t}(),By=/^\s*\/\/.*$/gm,Gy=[":","[",".","#"];function Vy(t){var e,n,i,r,s=t===void 0?Gi:t,o=s.options,a=o===void 0?Gi:o,l=s.plugins,u=l===void 0?_l:l,c=new dy(a),d=[],f=function(h){function p(g){if(g)try{h(g+"}")}catch{}}return function(g,m,_,y,M,C,L,S,T,R){switch(g){case 1:if(T===0&&m.charCodeAt(0)===64)return h(m+";"),"";break;case 2:if(S===0)return m+"/*|*/";break;case 3:switch(S){case 102:case 112:return h(_[0]+m),"";default:return m+(R===0?"/*|*/":"")}case-2:m.split("/*|*/}").forEach(p)}}}(function(h){d.push(h)}),v=function(h,p,g){return p===0&&Gy.indexOf(g[n.length])!==-1||g.match(r)?h:"."+e};function x(h,p,g,m){m===void 0&&(m="&");var _=h.replace(By,""),y=p&&g?g+" "+p+" { "+_+" }":_;return e=m,n=p,i=new RegExp("\\"+n+"\\b","g"),r=new RegExp("(\\"+n+"\\b){2,}"),c(g||!p?"":p,y)}return c.use([].concat(u,[function(h,p,g){h===2&&g.length&&g[0].lastIndexOf(n)>0&&(g[0]=g[0].replace(i,v))},f,function(h){if(h===-2){var p=d;return d=[],p}}])),x.hash=u.length?u.reduce(function(h,p){return p.name||zo(15),Jr(h,p.name)},5381).toString():"",x}var O0=dt.createContext();O0.Consumer;var U0=dt.createContext(),Hy=(U0.Consumer,new z0),od=Vy();function Wy(){return Ct.useContext(O0)||Hy}function jy(){return Ct.useContext(U0)||od}var $y=function(){function t(e,n){var i=this;this.inject=function(r,s){s===void 0&&(s=od);var o=i.name+s.hash;r.hasNameForId(i.id,o)||r.insertRules(i.id,o,s(i.rules,o,"@keyframes"))},this.toString=function(){return zo(12,String(i.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=n}return t.prototype.getName=function(e){return e===void 0&&(e=od),this.name+e.hash},t}(),qy=/([A-Z])/,Xy=/([A-Z])/g,Yy=/^ms-/,Zy=function(t){return"-"+t.toLowerCase()};function Xh(t){return qy.test(t)?t.replace(Xy,Zy).replace(Yy,"-ms-"):t}var Yh=function(t){return t==null||t===!1||t===""};function _s(t,e,n,i){if(Array.isArray(t)){for(var r,s=[],o=0,a=t.length;o<a;o+=1)(r=_s(t[o],e,n,i))!==""&&(Array.isArray(r)?s.push.apply(s,r):s.push(r));return s}if(Yh(t))return"";if(wf(t))return"."+t.styledComponentId;if(bo(t)){if(typeof(u=t)!="function"||u.prototype&&u.prototype.isReactComponent||!e)return t;var l=t(e);return _s(l,e,n,i)}var u;return t instanceof $y?n?(t.inject(n,i),t.getName(i)):t:rd(t)?function c(d,f){var v,x,h=[];for(var p in d)d.hasOwnProperty(p)&&!Yh(d[p])&&(Array.isArray(d[p])&&d[p].isCss||bo(d[p])?h.push(Xh(p)+":",d[p],";"):rd(d[p])?h.push.apply(h,c(d[p],p)):h.push(Xh(p)+": "+(v=p,(x=d[p])==null||typeof x=="boolean"||x===""?"":typeof x!="number"||x===0||v in fy?String(x).trim():x+"px")+";"));return f?[f+" {"].concat(h,["}"]):h}(t):t.toString()}var Zh=function(t){return Array.isArray(t)&&(t.isCss=!0),t};function Ky(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];return bo(t)||rd(t)?Zh(_s(Wh(_l,[t].concat(n)))):n.length===0&&t.length===1&&typeof t[0]=="string"?t:Zh(_s(Wh(t,n)))}var Qy=function(t,e,n){return n===void 0&&(n=Gi),t.theme!==n.theme&&t.theme||e||n.theme},Jy=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,e1=/(^-|-$)/g;function Tu(t){return t.replace(Jy,"-").replace(e1,"")}var t1=function(t){return sd(F0(t)>>>0)};function oa(t){return typeof t=="string"&&!0}var ad=function(t){return typeof t=="function"||typeof t=="object"&&t!==null&&!Array.isArray(t)},n1=function(t){return t!=="__proto__"&&t!=="constructor"&&t!=="prototype"};function i1(t,e,n){var i=t[n];ad(e)&&ad(i)?B0(i,e):t[n]=e}function B0(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];for(var r=0,s=n;r<s.length;r++){var o=s[r];if(ad(o))for(var a in o)n1(a)&&i1(t,o[a],a)}return t}var G0=dt.createContext();G0.Consumer;var Cu={};function V0(t,e,n){var i=wf(t),r=!oa(t),s=e.attrs,o=s===void 0?_l:s,a=e.componentId,l=a===void 0?function(m,_){var y=typeof m!="string"?"sc":Tu(m);Cu[y]=(Cu[y]||0)+1;var M=y+"-"+t1("5.3.9"+y+Cu[y]);return _?_+"-"+M:M}(e.displayName,e.parentComponentId):a,u=e.displayName,c=u===void 0?function(m){return oa(m)?"styled."+m:"Styled("+jh(m)+")"}(t):u,d=e.displayName&&e.componentId?Tu(e.displayName)+"-"+e.componentId:e.componentId||l,f=i&&t.attrs?Array.prototype.concat(t.attrs,o).filter(Boolean):o,v=e.shouldForwardProp;i&&t.shouldForwardProp&&(v=e.shouldForwardProp?function(m,_,y){return t.shouldForwardProp(m,_,y)&&e.shouldForwardProp(m,_,y)}:t.shouldForwardProp);var x,h=new Uy(n,d,i?t.componentStyle:void 0),p=h.isStatic&&o.length===0,g=function(m,_){return function(y,M,C,L){var S=y.attrs,T=y.componentStyle,R=y.defaultProps,Z=y.foldedComponentIds,K=y.shouldForwardProp,U=y.styledComponentId,N=y.target,$=function(D,P,ne){D===void 0&&(D=Gi);var W=ci({},P,{theme:D}),oe={};return ne.forEach(function(le){var fe,ue,we,Ve=le;for(fe in bo(Ve)&&(Ve=Ve(W)),Ve)W[fe]=oe[fe]=fe==="className"?(ue=oe[fe],we=Ve[fe],ue&&we?ue+" "+we:ue||we):Ve[fe]}),[W,oe]}(Qy(M,Ct.useContext(G0),R)||Gi,M,S),ee=$[0],te=$[1],I=function(D,P,ne,W){var oe=Wy(),le=jy(),fe=P?D.generateAndInjectStyles(Gi,oe,le):D.generateAndInjectStyles(ne,oe,le);return fe}(T,L,ee),j=C,H=te.$as||M.$as||te.as||M.as||N,ae=oa(H),A=te!==M?ci({},M,{},te):M,F={};for(var G in A)G[0]!=="$"&&G!=="as"&&(G==="forwardedAs"?F.as=A[G]:(K?K(G,Bh,H):!ae||Bh(G))&&(F[G]=A[G]));return M.style&&te.style!==M.style&&(F.style=ci({},M.style,{},te.style)),F.className=Array.prototype.concat(Z,U,I!==U?I:null,M.className,te.className).filter(Boolean).join(" "),F.ref=j,Ct.createElement(H,F)}(x,m,_,p)};return g.displayName=c,(x=dt.forwardRef(g)).attrs=f,x.componentStyle=h,x.displayName=c,x.shouldForwardProp=v,x.foldedComponentIds=i?Array.prototype.concat(t.foldedComponentIds,t.styledComponentId):_l,x.styledComponentId=d,x.target=i?t.target:t,x.withComponent=function(m){var _=e.componentId,y=function(C,L){if(C==null)return{};var S,T,R={},Z=Object.keys(C);for(T=0;T<Z.length;T++)S=Z[T],L.indexOf(S)>=0||(R[S]=C[S]);return R}(e,["componentId"]),M=_&&_+"-"+(oa(m)?m:Tu(jh(m)));return V0(m,ci({},y,{attrs:f,componentId:M}),n)},Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(m){this._foldedDefaultProps=i?B0({},t.defaultProps,m):m}}),Object.defineProperty(x,"toString",{value:function(){return"."+x.styledComponentId}}),r&&wy(x,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),x}var ld=function(t){return function e(n,i,r){if(r===void 0&&(r=Gi),!Eo.isValidElementType(i))return zo(1,String(i));var s=function(){return n(i,r,Ky.apply(void 0,arguments))};return s.withConfig=function(o){return e(n,i,ci({},r,{},o))},s.attrs=function(o){return e(n,i,ci({},r,{attrs:Array.prototype.concat(r.attrs,o).filter(Boolean)}))},s}(V0,t)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(t){ld[t]=ld(t)});const Ce=ld;var Nn={},r1={get exports(){return Nn},set exports(t){Nn=t}},s1="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",o1=s1,a1=o1;function H0(){}function W0(){}W0.resetWarningCache=H0;var l1=function(){function t(i,r,s,o,a,l){if(l!==a1){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:W0,resetWarningCache:H0};return n.PropTypes=n,n};r1.exports=l1();function j0(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Kh(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function $0(t,e,n){return e&&Kh(t.prototype,e),n&&Kh(t,n),t}function $n(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ud(){return(ud=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}function Qh(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function q0(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&X0(t,e)}function cd(t){return(cd=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(t)}function X0(t,e){return(X0=Object.setPrototypeOf||function(n,i){return n.__proto__=i,n})(t,e)}function bi(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u1(t,e){return!e||typeof e!="object"&&typeof e!="function"?bi(t):e}function Y0(t){var e=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}();return function(){var n,i=cd(t);if(e){var r=cd(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return u1(this,n)}}var ja={return:13,arrowLeft:37,arrowUp:38,arrowRight:39,arrowDown:40,space:32};ja.keyCodes=Object.keys(ja).reduce(function(t,e){return t[ja[e]]=e,t},{});var Xt={"faq-row-wrapper":"styles_faq-row-wrapper__3vA1D","faq-row":"styles_faq-row__2YF3c","row-body":"styles_row-body__1NvUo","row-title":"styles_row-title__1YiiY","no-tabfocus":"styles_no-tabfocus__1HmyD","row-title-text":"styles_row-title-text__1MuhU","icon-wrapper":"styles_icon-wrapper__2cftw",closed:"styles_closed__39w54","row-content":"styles_row-content__QOGZd",animate:"styles_animate__3ecdr",static:"styles_static__3chYW",expanded:"styles_expanded__3elPy",expanding:"styles_expanding__2OAFB","row-content-text":"styles_row-content-text__2sgAB"};(function(t,e){e===void 0&&(e={});var n=e.insertAt;if(t&&typeof document<"u"){var i=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",n==="top"&&i.firstChild?i.insertBefore(r,i.firstChild):i.appendChild(r),r.styleSheet?r.styleSheet.cssText=t:r.appendChild(document.createTextNode(t))}})(`.styles_faq-row-wrapper__3vA1D {
  background-color: var(--faq-bg-color, white); }
  .styles_faq-row-wrapper__3vA1D h2 {
    margin: 0;
    color: var(--title-text-color, black);
    font-size: var(--title-text-size, 30px); }
  .styles_faq-row-wrapper__3vA1D .styles_faq-row__2YF3c {
    display: flex;
    justify-content: space-between;
    padding: 5px 0;
    border-bottom: 1px solid #ccc; }
  .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c {
    flex-direction: column;
    position: relative; }
    .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY {
      padding: 10px 0;
      display: flex;
      justify-content: space-between;
      color: var(--row-title-color, black);
      font-size: var(--row-title-text-size, large);
      cursor: pointer;
      align-items: center; }
      .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY.styles_no-tabfocus__1HmyD {
        outline: none; }
      .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY .styles_row-title-text__1MuhU {
        padding-right: 3em; }
      .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY .styles_icon-wrapper__2cftw {
        max-width: 25px;
        max-height: 25px;
        margin: 0;
        padding: 0;
        color: var(--arrow-color, black);
        transform: rotate(0deg);
        transition: transform var(--transition-duration, 0.3s);
        position: absolute;
        top: 13px;
        right: 12px; }
        .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY .styles_icon-wrapper__2cftw svg {
          width: 100%;
          height: 100%; }
        .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY .styles_icon-wrapper__2cftw svg {
          fill: var(--arrow-color, black); }
      .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY.styles_closed__39w54 + .styles_row-content__QOGZd {
        visibility: hidden; }
        .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY.styles_closed__39w54 + .styles_row-content__QOGZd.styles_animate__3ecdr {
          opacity: 0;
          transition: height var(--transition-duration, 0.3s); }
        .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY.styles_closed__39w54 + .styles_row-content__QOGZd.styles_static__3chYW {
          display: none; }
      .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY.styles_expanded__3elPy + .styles_row-content__QOGZd {
        visibility: visible; }
        .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY.styles_expanded__3elPy + .styles_row-content__QOGZd.styles_static__3chYW {
          display: block; }
      .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY.styles_expanded__3elPy .styles_icon-wrapper__2cftw {
        transform: rotate(180deg); }
      .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY.styles_expanding__2OAFB .styles_icon-wrapper__2cftw {
        transform: rotate(180deg); }
    .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-content__QOGZd {
      overflow: hidden;
      transition: height var(--transition-duration, 0.3s);
      transition-timing-function: var(--timing-function, ease); }
      .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-content__QOGZd .styles_row-content-text__2sgAB {
        color: var(--row-content-color, black);
        font-size: var(--row-content-text-size, medium);
        padding: var(--row-content-padding-top, 0) var(--row-content-padding-right, 0) var(--row-content-padding-bottom, 0) var(--row-content-padding-left, 0); }
`);var Z0=function(t){q0(n,Ct.PureComponent);var e=Y0(n);function n(){var i;j0(this,n);for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return $n(bi(i=e.call.apply(e,[this].concat(s))),"state",{isExpanded:!1,ref:dt.createRef(),rowRef:dt.createRef(),height:0,rowClassName:"closed"}),$n(bi(i),"finishTransition",function(){var a=i.state.isExpanded;i.setState({rowClassName:a?"expanded":"closed"})}),$n(bi(i),"toggle",function(a){i.setState(function(){return{isExpanded:a}})}),$n(bi(i),"expand",function(){i.setState(function(a){return{isExpanded:!a.isExpanded}})}),$n(bi(i),"keyPress",function(a){var l=a.keyCode?a.keyCode:a.which;switch(ja.keyCodes[l]){case"space":case"return":a.preventDefault(),a.stopPropagation(),i.expand()}}),$n(bi(i),"setHeight",function(){var a=i.state,l=a.ref,u=a.isExpanded,c=l.current.scrollHeight;i.setState({height:u?c:0})}),i}return $0(n,[{key:"getSnapshotBeforeUpdate",value:function(i,r){var s=r.isExpanded,o=this.state.isExpanded,a=this.props.config,l=(a=a===void 0?{}:a).animate,u=l===void 0||l;return o!==s?{rowClassName:o?u?"expanding":"expanded":u?"closing":"closed"}:null}},{key:"componentDidUpdate",value:function(i,r,s){var o=this.props.config,a=(o=o===void 0?{}:o).animate,l=a===void 0||a;s!==null&&this.setState(function(u){for(var c=1;c<arguments.length;c++){var d=arguments[c]!=null?arguments[c]:{};c%2?Qh(Object(d),!0).forEach(function(f){$n(u,f,d[f])}):Object.getOwnPropertyDescriptors?Object.defineProperties(u,Object.getOwnPropertyDescriptors(d)):Qh(Object(d)).forEach(function(f){Object.defineProperty(u,f,Object.getOwnPropertyDescriptor(d,f))})}return u}({},s),l?this.setHeight:void 0)}},{key:"componentDidMount",value:function(){var i=this,r=this.state.rowRef;if(this.props.openOnload&&this.expand(),this.props.getRowOptions){var s={expand:function(){i.toggle(!0)},close:function(){i.toggle(!1)},scrollIntoView:function(o){o?r.current.scrollIntoView(o):r.current.scrollIntoView()}};this.props.getRowOptions(s)}}},{key:"render",value:function(){var i=this.props,r=i.data,s=r.title,o=r.content,a=i.config,l=(a=a===void 0?{}:a).animate,u=l===void 0||l,c=a.arrowIcon,d=a.expandIcon,f=a.collapseIcon,v=a.tabFocus,x=v!==void 0&&v,h=this.state,p=h.isExpanded,g=h.ref,m=h.height,_=h.rowClassName,y=h.rowRef,M={onClick:this.expand,role:"button","aria-expanded":p,"aria-controls":"react-faq-rowcontent-".concat(this.props.rowid),onKeyPress:this.keyPress,onKeyDown:this.keyPress};x&&(M.tabIndex=0);var C={role:"region",id:"react-faq-rowcontent-".concat(this.props.rowid),"aria-expanded":p,"aria-hidden":!p,onTransitionEnd:this.finishTransition};u&&(C.style={height:m});var L=["row-title",_,Xt["row-title"],Xt[_],x?"":Xt["no-tabfocus"]].filter(Boolean).join(" "),S=null;S=d&&f?p?f:d:c||dt.createElement("div",{dangerouslySetInnerHTML:{__html:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="36px" height="36px"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/><path d="M0 0h24v24H0V0z" fill="none"/></svg>'},className:"arrow-image ".concat(Xt["arrow-image"]),alt:"Expand arrow"});var T=[Xt["row-content"],"row-content",u?Xt.animate:Xt.static].join(" "),R=[Xt["row-content-text"],"row-content-text"].join(" "),Z=o&&typeof o=="string"?dt.createElement("div",{className:R,dangerouslySetInnerHTML:{__html:o}}):dt.createElement("div",{className:R},o);return dt.createElement("section",{className:"faq-row ".concat(Xt["faq-row"]),role:"listitem",ref:y},dt.createElement("div",ud({className:L},M),dt.createElement("div",{className:"row-title-text ".concat(Xt["row-title-text"]),id:"react-faq-rowtitle-".concat(this.props.rowid)},s),dt.createElement("span",{className:"icon-wrapper ".concat(Xt["icon-wrapper"]),"aria-hidden":"true"},S)),dt.createElement("div",ud({className:T},C,{ref:g}),Z))}}]),n}();$n(Z0,"propTypes",{config:Nn.object,data:Nn.object,rowid:Nn.number,getRowOptions:Nn.func,openOnload:Nn.bool});var K0=function(t){q0(n,Ct.PureComponent);var e=Y0(n);function n(){var i;j0(this,n);for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return $n(bi(i=e.call.apply(e,[this].concat(s))),"state",{rowsOption:[]}),i}return $0(n,[{key:"componentDidMount",value:function(){this.props.getRowOptions&&this.props.getRowOptions(this.state.rowsOption)}},{key:"render",value:function(){var i=this,r=this.props.data||{},s=r.title,o=r.rows,a=o===void 0?[]:o,l=this.props,u=l.styles,c=u===void 0?{}:u,d=l.config,f=((d=d===void 0?{}:d).animate,d.openOnload),v={"--faq-bg-color":c.bgColor,"--title-text-color":c.titleTextColor,"--title-text-size":c.titleTextSize,"--row-title-color":c.rowTitleColor,"--row-title-text-size":c.rowTitleTextSize,"--row-content-color":c.rowContentColor,"--row-content-text-size":c.rowContentTextSize,"--row-content-padding-top":c.rowContentPaddingTop,"--row-content-padding-bottom":c.rowContentPaddingBottom,"--row-content-padding-right":c.rowContentPaddingRight,"--row-content-padding-left":c.rowContentPaddingLeft,"--arrow-color":c.arrowColor,"--transition-duration":c.transitionDuration,"--timing-function":c.timingFunc},x="faq-row-wrapper ".concat(Xt["faq-row-wrapper"]),h="faq-title ".concat(Xt["faq-row"]),p="faq-body ".concat(Xt["row-body"]);return dt.createElement("div",{className:x,style:v},s?dt.createElement("section",{className:h},dt.createElement("h2",null,s)):null,a.length?dt.createElement("section",{className:p,role:"list"},a.map(function(g,m){return dt.createElement(Z0,{openOnload:f===m,data:g,key:m,rowid:m+1,config:i.props.config,getRowOptions:function(_){return i.state.rowsOption[m]=_}})})):null)}}]),n}();$n(K0,"propTypes",{data:Nn.object,styles:Nn.object,config:Nn.object,getRowOptions:Nn.func});const c1=Ce.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`,d1=Ce.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`,f1=Ce.div`
  flex: 1;
  position: relative;

  @media only screen and (max-width: 1235px) {
    display: none;
  }
`,h1=Ce.img`
  width: 800px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: float 2s infinite ease alternate;

  @keyframes float {
    to {
      transform: translateY(20px);
    }
  }
`,p1=Ce.h1`
  font-size: 74px;
  text-decoration: underline dotted 5px #ffd800;

  @media only screen and (max-width: 1235px) {
    font-size: 45px;
  }
`,Jh=Ce.p`
  gap: 10px;
  color: lightgray;
  font-size: 20px;

  @media only screen and (max-width: 1235px) {
    font-size: 16px;
    padding: 0 20px;
  }
`,m1=Ce.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 1235px) {
    align-items: center;
    text-align: center;
  }
`,Au=Ce.span`
  color: #fb318a;
`,g1={title:"FAQ",rows:[{title:'"What are you currently learning?"',content:"As of right now I am learning C#/.NET and mastering databases."},{title:'"What are you currently working on?"',content:"I am currently working on creating more projects for my portfolio."},{title:'"What are your favourite games?"',content:"My top 3 favourite games of all time would have to be Minecraft, Red Dead Redemption 2 & Grand Theft Auto V."},{title:'"What are your favourite movies and TV shows?"',content:"My favourite movies are The Shawshank Redemption, Everything Everywhere All at Once & Spider-Man: Into the Spider-Verse. And my favourite TV shows are The Office (US), Stranger Things, Loki & Clarkson's Farm."}]},v1={bgColor:"#00000024",titleTextColor:"#fb318a",rowTitleColor:"#ffd800",rowContentColor:"#e4e4e4",rowTitleTextSize:"16px",rowContentTextSize:"14px"},_1={animate:!0,arrowIcon:"👇",tabFocus:!0},x1=Ce.div`
  padding: 0 10px;
`,y1=()=>ye(c1,{id:"about",children:Zt(d1,{children:[ye(f1,{children:ye(h1,{src:"./img/love.png"})}),Zt(m1,{children:[ye(p1,{children:"Get to know me!"}),Zt(Jh,{children:["I am a highly motivated junior software developer with experience in programming languages such as ",ye(Au,{children:"HTML"}),","," ",ye(Au,{children:"CSS"})," and ",ye(Au,{children:"JavaScript"}),". Skilled in problem-solving and troubleshooting, with a passion for learning new technologies."]}),ye(Jh,{children:"Whenever I'm not busy, I love hanging out with my friends and playing games together. I also love jamming out to my favourite music and find new music I can add to my collection whenever I get the chance. And last but not least, I love watching movies and TV shows! There's nothing like getting lost in a good story or exploring new worlds through entertainment."}),ye(x1,{children:ye(K0,{data:g1,styles:v1,config:_1})})]})]})}),To={_origin:"https://api.emailjs.com"},S1=(t,e="https://api.emailjs.com")=>{To._userID=t,To._origin=e},Q0=(t,e,n)=>{if(!t)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class ep{constructor(e){this.status=e?e.status:0,this.text=e?e.responseText:"Network Error"}}const J0=(t,e,n={})=>new Promise((i,r)=>{const s=new XMLHttpRequest;s.addEventListener("load",({target:o})=>{const a=new ep(o);a.status===200||a.text==="OK"?i(a):r(a)}),s.addEventListener("error",({target:o})=>{r(new ep(o))}),s.open("POST",To._origin+t,!0),Object.keys(n).forEach(o=>{s.setRequestHeader(o,n[o])}),s.send(e)}),w1=(t,e,n,i)=>{const r=i||To._userID;return Q0(r,t,e),J0("/api/v1.0/email/send",JSON.stringify({lib_version:"3.10.0",user_id:r,service_id:t,template_id:e,template_params:n}),{"Content-type":"application/json"})},M1=t=>{let e;if(typeof t=="string"?e=document.querySelector(t):e=t,!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return e},E1=(t,e,n,i)=>{const r=i||To._userID,s=M1(n);Q0(r,t,e);const o=new FormData(s);return o.append("lib_version","3.10.0"),o.append("service_id",t),o.append("template_id",e),o.append("user_id",r),J0("/api/v1.0/email/send-form",o)},b1={init:S1,send:w1,sendForm:E1},T1=Ce.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`,C1=Ce.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  gap: 50px;

  @media only screen and (max-width: 951px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`,A1=Ce.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media only screen and (max-width: 951px) {
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 15px;
  }
`,tp=Ce.h1`
  font-weight: 200;

  @media only screen and (max-width: 370px) {
    font-size: 24px;
  }
`,L1=Ce.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media only screen and (max-width: 951px) {
    padding: 15px;
  }

  @media only screen and (max-width: 1080px) {
    padding: 15px;
  }
`,np=Ce.input`
  padding: 20px;
  background-color: #f0f0f0;
  border: none;
  border-radius: 7px;
`,P1=Ce.textarea`
  padding: 20px;
  background-color: #f0f0f0;
  border: none;
  border-radius: 7px;
`,ip=Ce.button`
  background-color: #fb318a;
  color: #ffd800;
  font-weight: bold;
  cursor: pointer;
  border-radius: 7px;
  border-color: #ffd800;
  padding: 15px;
`,R1=Ce.div`
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 951px) {
    flex: 1;
    width: 100%;
    justify-content: center;
  }
`,D1=Ce.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  padding: 20px;
`,aa=Ce.li``,la=Ce.img`
  width: 32px;
  height: 32px;
  color: #fb318a;
  cursor: pointer;
`,I1=t=>new Promise(e=>setTimeout(e,t)),k1=()=>{const t=Ct.useRef(),[e,n]=Ct.useState(null),[i,r]=Ct.useState(""),[s,o]=Ct.useState(""),[a,l]=Ct.useState(""),[u,c]=Ct.useState(""),d=async()=>{await I1(3e3),c("")},f=m=>{m.preventDefault(),s.length<2?(n(!0),c("Please enter your name."),d()):v(i)?a.length<15?(n(!0),c("Please enter a longer message"),d()):(o(""),r(""),l(""),b1.sendForm("service_0wjys4q","template_l0au7qn",t.current,"IaIu0Wu-xsX_rLy4i").then(_=>{console.log(_.text),n(!0)},_=>{console.log(_.text),n(!1)}),n(!0),c("Successully sent!"),d()):(console.log("invalid email"),n(!0),c("Please enter a valid email."),d())},v=m=>{var _=/\S+@\S+\.\S+/;return _.test(m)},x=m=>{r(m.target.value)},h=m=>{o(m.target.value)},p=m=>{l(m.target.value)},g=()=>{window.location="mailto:ahmedmissouri@icloud.com"};return ye(T1,{id:"contact",children:Zt(C1,{children:[Zt(A1,{children:[ye(tp,{children:"Where you can find me..."}),Zt(D1,{children:[ye(aa,{children:ye(la,{onClick:()=>window.open("https://github.com/ayMissouri"),src:"./img/github.png"})}),ye(aa,{children:ye(la,{onClick:()=>window.open("https://www.linkedin.com/in/ahmed-missouri-420311268/"),src:"./img/linkedin.png"})}),ye(aa,{children:ye(la,{onClick:()=>window.open("https://discordapp.com/users/524906778324893697"),src:"./img/disc.png"})}),ye(aa,{children:ye(la,{onClick:()=>g(),src:"./img/mail.png"})})]}),ye(ip,{onClick:()=>window.open("https://amissouri.com/port.html"),children:"My Projects"})]}),ye(R1,{children:Zt(L1,{ref:t,onSubmit:f,children:[ye(tp,{children:"Don't be shy, say hello!"}),ye(np,{onChange:h,value:s,placeholder:"Name",name:"name"}),ye(np,{onChange:x,value:i,placeholder:"Email",name:"email"}),ye(P1,{onChange:p,value:a,placeholder:"Write your message...",name:"message",rows:10}),e&&u,ye(ip,{type:"submit",children:"Send"})]})})]})})},N1=Ce.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 1450px) {
    height: 100vh;
  }
`,z1=Ce.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 1450px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`,F1=Ce.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 1450px) {
    flex: 1;
    align-items: center;
    justify-items: auto;
  }
`,O1=Ce.h1`
  font-size: 74px;

  @media only screen and (max-width: 1450px) {
    text-align: center;
  }
`,U1=Ce.h2`
  gap: 10px;
  color: #fb318a;
`,B1=Ce.p`
  font-size: 24px;
  color: lightgray;

  @media only screen and (max-width: 1450px) {
    padding: 20px;
    text-align: center;
  }
`,G1=Ce.button`
  background-color: #fb318a;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`,V1=Ce.div`
  flex: 3;
  position: relative;

  @media only screen and (max-width: 1450px) {
    flex: 1;
    width: 100%;
  }
`,H1=Ce.img`
  width: 800px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: float 2s infinite ease alternate;

  @media only screen and (max-width: 1450px) {
    width: 300px;
    height: 300px;
    z-index: -1;
    position: absolute;
    padding-top: 10px;
  }

  @keyframes float {
    to {
      transform: translateY(20px);
    }
  }
`,W1=Ce.a`
  color: #ffd800;
  text-decoration: none;
  font-weight: bold;
`,j1=()=>ye(N1,{id:"home",children:Zt(z1,{children:[Zt(F1,{children:[ye(O1,{children:"Hello, I'm Ahmed!"}),ye(U1,{children:"Junior Full-stack Developer"}),ye(B1,{children:"I enjoy creating fun experiences using code and learning along the way."}),ye(G1,{children:ye(W1,{href:"#about",children:"Learn more"})})]}),ye(V1,{children:ye(H1,{src:"./img/hello.png"})})]})});Ce.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;Ce.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;Ce.div`
  flex: 1;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 768px) {
    padding: 20px;
    justify-content: center;
  }
`;Ce.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;Ce.li`
  font-size: 90px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 2px #fb318a;
  position: relative;

  ::after {
    content: "${t=>t.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: #ffd800;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover {
    ::after {
      animation: textFill 0.2s linear both;

      @keyframes textFill {
        to {
          width: 100%;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    font-size: 48px;
    color: white;
    -webkit-text-stroke: 0px;
  }
`;Ce.div`
  flex: 1;
`;const $1=Ce.div`
  display: flex;
  justify-content: center;
  position: absolute;
  width: 100%;
  z-index: 2;

  @media only screen and (max-width: 768px) {
    width: 100%;
    z-index: 2;
  }
`,q1=Ce.div`
  width: 1400px;
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 10px 0px;
  /* background-color: #252554; */

  @media only screen and (max-width: 1450px) {
    width: 100%;
    padding: 10px;
    justify-content: center;
  }
`,X1=Ce.div`
  display: flex;
  align-items: center;
  gap: 50px;

  @media only screen and (max-width: 585px) {
    display: none;
  }
`,Y1=Ce.img`
  height: 50px;

  &:hover {
    top: -5px;
    left: -10px;
    transform: rotate(-10deg);
  }
`,Z1=Ce.ul`
  display: flex;
  gap: 20px;
  list-style: none;
`,ua=Ce.li`
  cursor: pointer;
  color: white;

  &:hover {
    color: #fb318a;
  }
`,Lu=Ce.a`
  color: white;
  text-decoration: none;

  &:hover {
    color: #fb318a;
  }
`,K1=()=>ye($1,{children:ye(q1,{children:Zt(X1,{children:[ye(Y1,{src:"./img/logo.png"}),Zt(Z1,{children:[ye(ua,{children:ye(Lu,{href:"#home",children:"Home"})}),ye(ua,{children:ye(Lu,{href:"#about",children:"About"})}),ye(ua,{children:ye(Lu,{href:"#contact",children:"Contact"})}),Zt(ua,{onClick:()=>window.open("https://amissouri.com/port.html"),children:["Projects",Zt("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-box-arrow-up-right",viewBox:"0 0 16 16",children:[ye("path",{fillRule:"evenodd",d:"M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"}),ye("path",{fillRule:"evenodd",d:"M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"})]})]})]})]})})}),Q1=Ce.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  /* background: url("./img/gradient1.jpg"); */
  background-color: transparent;
  background-size: 100vw;
  &::-webkit-scrollbar {
    display: none;
  }
`;function J1(){return Zt(Q1,{children:[ye(K1,{}),ye(j1,{}),ye(y1,{}),ye(k1,{})]})}uc.createRoot(document.getElementById("root")).render(ye(dt.StrictMode,{children:ye(J1,{})}));/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ef="150",eS=0,rp=1,tS=2,ev=1,nS=2,Xs=3,ji=0,fn=1,Pi=2,Vi=0,as=1,sp=2,op=3,ap=4,iS=5,Br=100,rS=101,sS=102,lp=103,up=104,oS=200,aS=201,lS=202,uS=203,tv=204,nv=205,cS=206,dS=207,fS=208,hS=209,pS=210,mS=0,gS=1,vS=2,dd=3,_S=4,xS=5,yS=6,SS=7,iv=0,wS=1,MS=2,fi=0,ES=1,bS=2,TS=3,CS=4,AS=5,rv=300,xs=301,ys=302,fd=303,hd=304,$l=306,pd=1e3,zn=1001,md=1002,Ht=1003,cp=1004,Pu=1005,Sn=1006,LS=1007,Co=1008,yr=1009,PS=1010,RS=1011,sv=1012,DS=1013,ur=1014,cr=1015,Ao=1016,IS=1017,kS=1018,ls=1020,NS=1021,Fn=1023,zS=1024,FS=1025,hr=1026,Ss=1027,OS=1028,US=1029,BS=1030,GS=1031,VS=1033,Ru=33776,Du=33777,Iu=33778,ku=33779,dp=35840,fp=35841,hp=35842,pp=35843,HS=36196,mp=37492,gp=37496,vp=37808,_p=37809,xp=37810,yp=37811,Sp=37812,wp=37813,Mp=37814,Ep=37815,bp=37816,Tp=37817,Cp=37818,Ap=37819,Lp=37820,Pp=37821,Nu=36492,WS=36283,Rp=36284,Dp=36285,Ip=36286,Sr=3e3,Qe=3001,jS=3200,$S=3201,qS=0,XS=1,qn="srgb",Lo="srgb-linear",ov="display-p3",zu=7680,YS=519,kp=35044,Np="300 es",gd=1035;class Ts{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Fu=Math.PI/180,zp=180/Math.PI;function Fo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(kt[t&255]+kt[t>>8&255]+kt[t>>16&255]+kt[t>>24&255]+"-"+kt[e&255]+kt[e>>8&255]+"-"+kt[e>>16&15|64]+kt[e>>24&255]+"-"+kt[n&63|128]+kt[n>>8&255]+"-"+kt[n>>16&255]+kt[n>>24&255]+kt[i&255]+kt[i>>8&255]+kt[i>>16&255]+kt[i>>24&255]).toLowerCase()}function un(t,e,n){return Math.max(e,Math.min(n,t))}function ZS(t,e){return(t%e+e)%e}function Ou(t,e,n){return(1-n)*t+n*e}function Fp(t){return(t&t-1)===0&&t!==0}function KS(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function ca(t,e){switch(e.constructor){case Float32Array:return t;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function sn(t,e){switch(e.constructor){case Float32Array:return t;case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Xe{constructor(e=0,n=0){Xe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wt{constructor(){Wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,n,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=n,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],d=i[7],f=i[2],v=i[5],x=i[8],h=r[0],p=r[3],g=r[6],m=r[1],_=r[4],y=r[7],M=r[2],C=r[5],L=r[8];return s[0]=o*h+a*m+l*M,s[3]=o*p+a*_+l*C,s[6]=o*g+a*y+l*L,s[1]=u*h+c*m+d*M,s[4]=u*p+c*_+d*C,s[7]=u*g+c*y+d*L,s[2]=f*h+v*m+x*M,s[5]=f*p+v*_+x*C,s[8]=f*g+v*y+x*L,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return n*o*c-n*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=c*o-a*u,f=a*l-c*s,v=u*s-o*l,x=n*d+i*f+r*v;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const h=1/x;return e[0]=d*h,e[1]=(r*u-c*i)*h,e[2]=(a*i-r*o)*h,e[3]=f*h,e[4]=(c*n-r*l)*h,e[5]=(r*s-a*n)*h,e[6]=v*h,e[7]=(i*l-u*n)*h,e[8]=(o*n-i*s)*h,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Uu.makeScale(e,n)),this}rotate(e){return this.premultiply(Uu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Uu.makeTranslation(e,n)),this}makeTranslation(e,n){return this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Uu=new Wt;function av(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Po(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}class Oo{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],d=i[r+3];const f=s[o+0],v=s[o+1],x=s[o+2],h=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=c,e[n+3]=d;return}if(a===1){e[n+0]=f,e[n+1]=v,e[n+2]=x,e[n+3]=h;return}if(d!==h||l!==f||u!==v||c!==x){let p=1-a;const g=l*f+u*v+c*x+d*h,m=g>=0?1:-1,_=1-g*g;if(_>Number.EPSILON){const M=Math.sqrt(_),C=Math.atan2(M,g*m);p=Math.sin(p*C)/M,a=Math.sin(a*C)/M}const y=a*m;if(l=l*p+f*y,u=u*p+v*y,c=c*p+x*y,d=d*p+h*y,p===1-a){const M=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=M,u*=M,c*=M,d*=M}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],d=s[o],f=s[o+1],v=s[o+2],x=s[o+3];return e[n]=a*x+c*d+l*v-u*f,e[n+1]=l*x+c*f+u*d-a*v,e[n+2]=u*x+c*v+a*f-l*d,e[n+3]=c*x-a*d-l*f-u*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),d=a(s/2),f=l(i/2),v=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=f*c*d+u*v*x,this._y=u*v*d-f*c*x,this._z=u*c*x+f*v*d,this._w=u*c*d-f*v*x;break;case"YXZ":this._x=f*c*d+u*v*x,this._y=u*v*d-f*c*x,this._z=u*c*x-f*v*d,this._w=u*c*d+f*v*x;break;case"ZXY":this._x=f*c*d-u*v*x,this._y=u*v*d+f*c*x,this._z=u*c*x+f*v*d,this._w=u*c*d-f*v*x;break;case"ZYX":this._x=f*c*d-u*v*x,this._y=u*v*d+f*c*x,this._z=u*c*x-f*v*d,this._w=u*c*d+f*v*x;break;case"YZX":this._x=f*c*d+u*v*x,this._y=u*v*d+f*c*x,this._z=u*c*x-f*v*d,this._w=u*c*d-f*v*x;break;case"XZY":this._x=f*c*d-u*v*x,this._y=u*v*d-f*c*x,this._z=u*c*x+f*v*d,this._w=u*c*d+f*v*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],c=n[6],d=n[10],f=i+a+d;if(f>0){const v=.5/Math.sqrt(f+1);this._w=.25/v,this._x=(c-l)*v,this._y=(s-u)*v,this._z=(o-r)*v}else if(i>a&&i>d){const v=2*Math.sqrt(1+i-a-d);this._w=(c-l)/v,this._x=.25*v,this._y=(r+o)/v,this._z=(s+u)/v}else if(a>d){const v=2*Math.sqrt(1+a-i-d);this._w=(s-u)/v,this._x=(r+o)/v,this._y=.25*v,this._z=(l+c)/v}else{const v=2*Math.sqrt(1+d-i-a);this._w=(o-r)/v,this._x=(s+u)/v,this._y=(l+c)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(un(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const v=1-n;return this._w=v*o+n*this._w,this._x=v*i+n*this._x,this._y=v*r+n*this._y,this._z=v*s+n*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),d=Math.sin((1-n)*c)/u,f=Math.sin(n*c)/u;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,n=0,i=0){V.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Op.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Op.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=l*n+o*r-a*i,c=l*i+a*n-s*r,d=l*r+s*i-o*n,f=-s*n-o*i-a*r;return this.x=u*l+f*-s+c*-a-d*-o,this.y=c*l+f*-o+d*-s-u*-a,this.z=d*l+f*-a+u*-o-c*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Bu.copy(this).projectOnVector(e),this.sub(Bu)}reflect(e){return this.sub(Bu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(un(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bu=new V,Op=new Oo;function us(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Gu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const QS=new Wt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),JS=new Wt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]),Ri=new V;function ew(t){return t.convertSRGBToLinear(),Ri.set(t.r,t.g,t.b).applyMatrix3(JS),t.setRGB(Ri.x,Ri.y,Ri.z)}function tw(t){return Ri.set(t.r,t.g,t.b).applyMatrix3(QS),t.setRGB(Ri.x,Ri.y,Ri.z).convertLinearToSRGB()}const nw={[Lo]:t=>t,[qn]:t=>t.convertSRGBToLinear(),[ov]:ew},iw={[Lo]:t=>t,[qn]:t=>t.convertLinearToSRGB(),[ov]:tw},Bt={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return Lo},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=nw[e],r=iw[n];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${n}".`);return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}};let Cr;class lv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Cr===void 0&&(Cr=Po("canvas")),Cr.width=e.width,Cr.height=e.height;const i=Cr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Cr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Po("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=us(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(us(n[i]/255)*255):n[i]=us(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class uv{constructor(e=null){this.isSource=!0,this.uuid=Fo(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Vu(r[o].image)):s.push(Vu(r[o]))}else s=Vu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Vu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?lv.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let rw=0;class tn extends Ts{constructor(e=tn.DEFAULT_IMAGE,n=tn.DEFAULT_MAPPING,i=zn,r=zn,s=Sn,o=Co,a=Fn,l=yr,u=tn.DEFAULT_ANISOTROPY,c=Sr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rw++}),this.uuid=Fo(),this.name="",this.source=new uv(e),this.mipmaps=[],this.mapping=n,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case pd:e.x=e.x-Math.floor(e.x);break;case zn:e.x=e.x<0?0:1;break;case md:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case pd:e.y=e.y-Math.floor(e.y);break;case zn:e.y=e.y<0?0:1;break;case md:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=rv;tn.DEFAULT_ANISOTROPY=1;class Mt{constructor(e=0,n=0,i=0,r=1){Mt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],c=l[4],d=l[8],f=l[1],v=l[5],x=l[9],h=l[2],p=l[6],g=l[10];if(Math.abs(c-f)<.01&&Math.abs(d-h)<.01&&Math.abs(x-p)<.01){if(Math.abs(c+f)<.1&&Math.abs(d+h)<.1&&Math.abs(x+p)<.1&&Math.abs(u+v+g-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(u+1)/2,y=(v+1)/2,M=(g+1)/2,C=(c+f)/4,L=(d+h)/4,S=(x+p)/4;return _>y&&_>M?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=C/i,s=L/i):y>M?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=C/r,s=S/r):M<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),i=L/s,r=S/s),this.set(i,r,s,n),this}let m=Math.sqrt((p-x)*(p-x)+(d-h)*(d-h)+(f-c)*(f-c));return Math.abs(m)<.001&&(m=1),this.x=(p-x)/m,this.y=(d-h)/m,this.z=(f-c)/m,this.w=Math.acos((u+v+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wr extends Ts{constructor(e=1,n=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Mt(0,0,e,n),this.scissorTest=!1,this.viewport=new Mt(0,0,e,n);const r={width:e,height:n,depth:1};this.texture=new tn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Sn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new uv(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class cv extends tn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sw extends tn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Uo{constructor(e=new V(1/0,1/0,1/0),n=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){let n=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.length;l<u;l+=3){const c=e[l],d=e[l+1],f=e[l+2];c<n&&(n=c),d<i&&(i=d),f<r&&(r=f),c>s&&(s=c),d>o&&(o=d),f>a&&(a=f)}return this.min.set(n,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let n=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.count;l<u;l++){const c=e.getX(l),d=e.getY(l),f=e.getZ(l);c<n&&(n=c),d<i&&(i=d),f<r&&(r=f),c>s&&(s=c),d>o&&(o=d),f>a&&(a=f)}return this.min.set(n,i,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Qi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(n&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)Qi.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Qi)}else i.boundingBox===null&&i.computeBoundingBox(),Hu.copy(i.boundingBox),Hu.applyMatrix4(e.matrixWorld),this.union(Hu);const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Qi),Qi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fs),da.subVectors(this.max,Fs),Ar.subVectors(e.a,Fs),Lr.subVectors(e.b,Fs),Pr.subVectors(e.c,Fs),xi.subVectors(Lr,Ar),yi.subVectors(Pr,Lr),Ji.subVectors(Ar,Pr);let n=[0,-xi.z,xi.y,0,-yi.z,yi.y,0,-Ji.z,Ji.y,xi.z,0,-xi.x,yi.z,0,-yi.x,Ji.z,0,-Ji.x,-xi.y,xi.x,0,-yi.y,yi.x,0,-Ji.y,Ji.x,0];return!Wu(n,Ar,Lr,Pr,da)||(n=[1,0,0,0,1,0,0,0,1],!Wu(n,Ar,Lr,Pr,da))?!1:(fa.crossVectors(xi,yi),n=[fa.x,fa.y,fa.z],Wu(n,Ar,Lr,Pr,da))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ei=[new V,new V,new V,new V,new V,new V,new V,new V],Qi=new V,Hu=new Uo,Ar=new V,Lr=new V,Pr=new V,xi=new V,yi=new V,Ji=new V,Fs=new V,da=new V,fa=new V,er=new V;function Wu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){er.fromArray(t,s);const a=r.x*Math.abs(er.x)+r.y*Math.abs(er.y)+r.z*Math.abs(er.z),l=e.dot(er),u=n.dot(er),c=i.dot(er);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const ow=new Uo,Os=new V,ju=new V;class ql{constructor(e=new V,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):ow.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Os.subVectors(e,this.center);const n=Os.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Os,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ju.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Os.copy(e.center).add(ju)),this.expandByPoint(Os.copy(e.center).sub(ju))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ti=new V,$u=new V,ha=new V,Si=new V,qu=new V,pa=new V,Xu=new V;class dv{constructor(e=new V,n=new V(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ti)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ti.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ti.copy(this.origin).addScaledVector(this.direction,n),ti.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){$u.copy(e).add(n).multiplyScalar(.5),ha.copy(n).sub(e).normalize(),Si.copy(this.origin).sub($u);const s=e.distanceTo(n)*.5,o=-this.direction.dot(ha),a=Si.dot(this.direction),l=-Si.dot(ha),u=Si.lengthSq(),c=Math.abs(1-o*o);let d,f,v,x;if(c>0)if(d=o*l-a,f=o*a-l,x=s*c,d>=0)if(f>=-x)if(f<=x){const h=1/c;d*=h,f*=h,v=d*(d+o*f+2*a)+f*(o*d+f+2*l)+u}else f=s,d=Math.max(0,-(o*f+a)),v=-d*d+f*(f+2*l)+u;else f=-s,d=Math.max(0,-(o*f+a)),v=-d*d+f*(f+2*l)+u;else f<=-x?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),v=-d*d+f*(f+2*l)+u):f<=x?(d=0,f=Math.min(Math.max(-s,-l),s),v=f*(f+2*l)+u):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),v=-d*d+f*(f+2*l)+u);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),v=-d*d+f*(f+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy($u).addScaledVector(ha,f),v}intersectSphere(e,n){ti.subVectors(e.center,this.origin);const i=ti.dot(this.direction),r=ti.dot(ti)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),c>=0?(s=(e.min.y-f.y)*c,o=(e.max.y-f.y)*c):(s=(e.max.y-f.y)*c,o=(e.min.y-f.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ti)!==null}intersectTriangle(e,n,i,r,s){qu.subVectors(n,e),pa.subVectors(i,e),Xu.crossVectors(qu,pa);let o=this.direction.dot(Xu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Si.subVectors(this.origin,e);const l=a*this.direction.dot(pa.crossVectors(Si,pa));if(l<0)return null;const u=a*this.direction.dot(qu.cross(Si));if(u<0||l+u>o)return null;const c=-a*Si.dot(Xu);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,n,i,r,s,o,a,l,u,c,d,f,v,x,h,p){const g=this.elements;return g[0]=e,g[4]=n,g[8]=i,g[12]=r,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=u,g[6]=c,g[10]=d,g[14]=f,g[3]=v,g[7]=x,g[11]=h,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Rr.setFromMatrixColumn(e,0).length(),s=1/Rr.setFromMatrixColumn(e,1).length(),o=1/Rr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*c,v=o*d,x=a*c,h=a*d;n[0]=l*c,n[4]=-l*d,n[8]=u,n[1]=v+x*u,n[5]=f-h*u,n[9]=-a*l,n[2]=h-f*u,n[6]=x+v*u,n[10]=o*l}else if(e.order==="YXZ"){const f=l*c,v=l*d,x=u*c,h=u*d;n[0]=f+h*a,n[4]=x*a-v,n[8]=o*u,n[1]=o*d,n[5]=o*c,n[9]=-a,n[2]=v*a-x,n[6]=h+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*c,v=l*d,x=u*c,h=u*d;n[0]=f-h*a,n[4]=-o*d,n[8]=x+v*a,n[1]=v+x*a,n[5]=o*c,n[9]=h-f*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*c,v=o*d,x=a*c,h=a*d;n[0]=l*c,n[4]=x*u-v,n[8]=f*u+h,n[1]=l*d,n[5]=h*u+f,n[9]=v*u-x,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,v=o*u,x=a*l,h=a*u;n[0]=l*c,n[4]=h-f*d,n[8]=x*d+v,n[1]=d,n[5]=o*c,n[9]=-a*c,n[2]=-u*c,n[6]=v*d+x,n[10]=f-h*d}else if(e.order==="XZY"){const f=o*l,v=o*u,x=a*l,h=a*u;n[0]=l*c,n[4]=-d,n[8]=u*c,n[1]=f*d+h,n[5]=o*c,n[9]=v*d-x,n[2]=x*d-v,n[6]=a*c,n[10]=h*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(aw,e,lw)}lookAt(e,n,i){const r=this.elements;return on.subVectors(e,n),on.lengthSq()===0&&(on.z=1),on.normalize(),wi.crossVectors(i,on),wi.lengthSq()===0&&(Math.abs(i.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),wi.crossVectors(i,on)),wi.normalize(),ma.crossVectors(on,wi),r[0]=wi.x,r[4]=ma.x,r[8]=on.x,r[1]=wi.y,r[5]=ma.y,r[9]=on.y,r[2]=wi.z,r[6]=ma.z,r[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],d=i[5],f=i[9],v=i[13],x=i[2],h=i[6],p=i[10],g=i[14],m=i[3],_=i[7],y=i[11],M=i[15],C=r[0],L=r[4],S=r[8],T=r[12],R=r[1],Z=r[5],K=r[9],U=r[13],N=r[2],$=r[6],ee=r[10],te=r[14],I=r[3],j=r[7],H=r[11],ae=r[15];return s[0]=o*C+a*R+l*N+u*I,s[4]=o*L+a*Z+l*$+u*j,s[8]=o*S+a*K+l*ee+u*H,s[12]=o*T+a*U+l*te+u*ae,s[1]=c*C+d*R+f*N+v*I,s[5]=c*L+d*Z+f*$+v*j,s[9]=c*S+d*K+f*ee+v*H,s[13]=c*T+d*U+f*te+v*ae,s[2]=x*C+h*R+p*N+g*I,s[6]=x*L+h*Z+p*$+g*j,s[10]=x*S+h*K+p*ee+g*H,s[14]=x*T+h*U+p*te+g*ae,s[3]=m*C+_*R+y*N+M*I,s[7]=m*L+_*Z+y*$+M*j,s[11]=m*S+_*K+y*ee+M*H,s[15]=m*T+_*U+y*te+M*ae,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],d=e[6],f=e[10],v=e[14],x=e[3],h=e[7],p=e[11],g=e[15];return x*(+s*l*d-r*u*d-s*a*f+i*u*f+r*a*v-i*l*v)+h*(+n*l*v-n*u*f+s*o*f-r*o*v+r*u*c-s*l*c)+p*(+n*u*d-n*a*v-s*o*d+i*o*v+s*a*c-i*u*c)+g*(-r*a*c-n*l*d+n*a*f+r*o*d-i*o*f+i*l*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=e[9],f=e[10],v=e[11],x=e[12],h=e[13],p=e[14],g=e[15],m=d*p*u-h*f*u+h*l*v-a*p*v-d*l*g+a*f*g,_=x*f*u-c*p*u-x*l*v+o*p*v+c*l*g-o*f*g,y=c*h*u-x*d*u+x*a*v-o*h*v-c*a*g+o*d*g,M=x*d*l-c*h*l-x*a*f+o*h*f+c*a*p-o*d*p,C=n*m+i*_+r*y+s*M;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/C;return e[0]=m*L,e[1]=(h*f*s-d*p*s-h*r*v+i*p*v+d*r*g-i*f*g)*L,e[2]=(a*p*s-h*l*s+h*r*u-i*p*u-a*r*g+i*l*g)*L,e[3]=(d*l*s-a*f*s-d*r*u+i*f*u+a*r*v-i*l*v)*L,e[4]=_*L,e[5]=(c*p*s-x*f*s+x*r*v-n*p*v-c*r*g+n*f*g)*L,e[6]=(x*l*s-o*p*s-x*r*u+n*p*u+o*r*g-n*l*g)*L,e[7]=(o*f*s-c*l*s+c*r*u-n*f*u-o*r*v+n*l*v)*L,e[8]=y*L,e[9]=(x*d*s-c*h*s-x*i*v+n*h*v+c*i*g-n*d*g)*L,e[10]=(o*h*s-x*a*s+x*i*u-n*h*u-o*i*g+n*a*g)*L,e[11]=(c*a*s-o*d*s-c*i*u+n*d*u+o*i*v-n*a*v)*L,e[12]=M*L,e[13]=(c*h*r-x*d*r+x*i*f-n*h*f-c*i*p+n*d*p)*L,e[14]=(x*a*r-o*h*r-x*i*l+n*h*l+o*i*p-n*a*p)*L,e[15]=(o*d*r-c*a*r+c*i*l-n*d*l-o*i*f+n*a*f)*L,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,c=o+o,d=a+a,f=s*u,v=s*c,x=s*d,h=o*c,p=o*d,g=a*d,m=l*u,_=l*c,y=l*d,M=i.x,C=i.y,L=i.z;return r[0]=(1-(h+g))*M,r[1]=(v+y)*M,r[2]=(x-_)*M,r[3]=0,r[4]=(v-y)*C,r[5]=(1-(f+g))*C,r[6]=(p+m)*C,r[7]=0,r[8]=(x+_)*L,r[9]=(p-m)*L,r[10]=(1-(f+h))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Rr.set(r[0],r[1],r[2]).length();const o=Rr.set(r[4],r[5],r[6]).length(),a=Rr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ln.copy(this);const u=1/s,c=1/o,d=1/a;return Ln.elements[0]*=u,Ln.elements[1]*=u,Ln.elements[2]*=u,Ln.elements[4]*=c,Ln.elements[5]*=c,Ln.elements[6]*=c,Ln.elements[8]*=d,Ln.elements[9]*=d,Ln.elements[10]*=d,n.setFromRotationMatrix(Ln),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o){const a=this.elements,l=2*s/(n-e),u=2*s/(i-r),c=(n+e)/(n-e),d=(i+r)/(i-r),f=-(o+s)/(o-s),v=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=c,a[12]=0,a[1]=0,a[5]=u,a[9]=d,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=v,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,n,i,r,s,o){const a=this.elements,l=1/(n-e),u=1/(i-r),c=1/(o-s),d=(n+e)*l,f=(i+r)*u,v=(o+s)*c;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-d,a[1]=0,a[5]=2*u,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*c,a[14]=-v,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Rr=new V,Ln=new ht,aw=new V(0,0,0),lw=new V(1,1,1),wi=new V,ma=new V,on=new V,Up=new ht,Bp=new Oo;class Xl{constructor(e=0,n=0,i=0,r=Xl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],d=r[2],f=r[6],v=r[10];switch(n){case"XYZ":this._y=Math.asin(un(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,v),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-un(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,v),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(un(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,v),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-un(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,v),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(un(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,v));break;case"XZY":this._z=Math.asin(-un(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Up.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Up,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Bp.setFromEuler(this),this.setFromQuaternion(Bp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xl.DEFAULT_ORDER="XYZ";class fv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let uw=0;const Gp=new V,Dr=new Oo,ni=new ht,ga=new V,Us=new V,cw=new V,dw=new Oo,Vp=new V(1,0,0),Hp=new V(0,1,0),Wp=new V(0,0,1),fw={type:"added"},jp={type:"removed"};class Lt extends Ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uw++}),this.uuid=Fo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Lt.DEFAULT_UP.clone();const e=new V,n=new Xl,i=new Oo,r=new V(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ht},normalMatrix:{value:new Wt}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=Lt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new fv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Dr.setFromAxisAngle(e,n),this.quaternion.multiply(Dr),this}rotateOnWorldAxis(e,n){return Dr.setFromAxisAngle(e,n),this.quaternion.premultiply(Dr),this}rotateX(e){return this.rotateOnAxis(Vp,e)}rotateY(e){return this.rotateOnAxis(Hp,e)}rotateZ(e){return this.rotateOnAxis(Wp,e)}translateOnAxis(e,n){return Gp.copy(e).applyQuaternion(this.quaternion),this.position.add(Gp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Vp,e)}translateY(e){return this.translateOnAxis(Hp,e)}translateZ(e){return this.translateOnAxis(Wp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ga.copy(e):ga.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt(Us,ga,this.up):ni.lookAt(ga,Us,this.up),this.quaternion.setFromRotationMatrix(ni),r&&(ni.extractRotation(r.matrixWorld),Dr.setFromRotationMatrix(ni),this.quaternion.premultiply(Dr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(fw)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(jp)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const n=this.children[e];n.parent=null,n.dispatchEvent(jp)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(ni),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,n);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,e,cw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,dw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),d=o(e.shapes),f=o(e.skeletons),v=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),v.length>0&&(i.animations=v),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Lt.DEFAULT_UP=new V(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pn=new V,ii=new V,Yu=new V,ri=new V,Ir=new V,kr=new V,$p=new V,Zu=new V,Ku=new V,Qu=new V;class ai{constructor(e=new V,n=new V,i=new V){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Pn.subVectors(e,n),r.cross(Pn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Pn.subVectors(r,n),ii.subVectors(i,n),Yu.subVectors(e,n);const o=Pn.dot(Pn),a=Pn.dot(ii),l=Pn.dot(Yu),u=ii.dot(ii),c=ii.dot(Yu),d=o*u-a*a;if(d===0)return s.set(-2,-1,-1);const f=1/d,v=(u*l-a*c)*f,x=(o*c-a*l)*f;return s.set(1-v-x,x,v)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ri),ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getUV(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,ri),l.set(0,0),l.addScaledVector(s,ri.x),l.addScaledVector(o,ri.y),l.addScaledVector(a,ri.z),l}static isFrontFacing(e,n,i,r){return Pn.subVectors(i,n),ii.subVectors(e,n),Pn.cross(ii).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),Pn.cross(ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ai.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ai.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return ai.getUV(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ai.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ai.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Ir.subVectors(r,i),kr.subVectors(s,i),Zu.subVectors(e,i);const l=Ir.dot(Zu),u=kr.dot(Zu);if(l<=0&&u<=0)return n.copy(i);Ku.subVectors(e,r);const c=Ir.dot(Ku),d=kr.dot(Ku);if(c>=0&&d<=c)return n.copy(r);const f=l*d-c*u;if(f<=0&&l>=0&&c<=0)return o=l/(l-c),n.copy(i).addScaledVector(Ir,o);Qu.subVectors(e,s);const v=Ir.dot(Qu),x=kr.dot(Qu);if(x>=0&&v<=x)return n.copy(s);const h=v*u-l*x;if(h<=0&&u>=0&&x<=0)return a=u/(u-x),n.copy(i).addScaledVector(kr,a);const p=c*x-v*d;if(p<=0&&d-c>=0&&v-x>=0)return $p.subVectors(s,r),a=(d-c)/(d-c+(v-x)),n.copy(r).addScaledVector($p,a);const g=1/(p+h+f);return o=h*g,a=f*g,n.copy(i).addScaledVector(Ir,o).addScaledVector(kr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let hw=0;class Bo extends Ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hw++}),this.uuid=Fo(),this.name="",this.type="Material",this.blending=as,this.side=ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=tv,this.blendDst=nv,this.blendEquation=Br,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=dd,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=YS,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zu,this.stencilZFail=zu,this.stencilZPass=zu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn("THREE.Material: '"+n+"' parameter is undefined.");continue}const r=this[n];if(r===void 0){console.warn("THREE."+this.type+": '"+n+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==as&&(i.blending=this.blending),this.side!==ji&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const hv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rn={h:0,s:0,l:0},va={h:0,s:0,l:0};function Ju(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class qe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,n===void 0&&i===void 0?this.set(e):this.setRGB(e,n,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=qn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Bt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Bt.workingColorSpace){return this.r=e,this.g=n,this.b=i,Bt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Bt.workingColorSpace){if(e=ZS(e,1),n=un(n,0,1),i=un(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Ju(o,s,e+1/3),this.g=Ju(o,s,e),this.b=Ju(o,s,e-1/3)}return Bt.toWorkingColorSpace(this,r),this}setStyle(e,n=qn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Bt.toWorkingColorSpace(this,n),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Bt.toWorkingColorSpace(this,n),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,u=parseFloat(s[2])/100,c=parseFloat(s[3])/100;return i(s[4]),this.setHSL(l,u,c,n)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Bt.toWorkingColorSpace(this,n),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Bt.toWorkingColorSpace(this,n),this;console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=qn){const i=hv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=us(e.r),this.g=us(e.g),this.b=us(e.b),this}copyLinearToSRGB(e){return this.r=Gu(e.r),this.g=Gu(e.g),this.b=Gu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qn){return Bt.fromWorkingColorSpace(Nt.copy(this),e),un(Nt.r*255,0,255)<<16^un(Nt.g*255,0,255)<<8^un(Nt.b*255,0,255)<<0}getHexString(e=qn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Bt.workingColorSpace){Bt.fromWorkingColorSpace(Nt.copy(this),n);const i=Nt.r,r=Nt.g,s=Nt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const d=o-a;switch(u=c<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=Bt.workingColorSpace){return Bt.fromWorkingColorSpace(Nt.copy(this),n),e.r=Nt.r,e.g=Nt.g,e.b=Nt.b,e}getStyle(e=qn){Bt.fromWorkingColorSpace(Nt.copy(this),e);const n=Nt.r,i=Nt.g,r=Nt.b;return e!==qn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${n*255|0},${i*255|0},${r*255|0})`}offsetHSL(e,n,i){return this.getHSL(Rn),Rn.h+=e,Rn.s+=n,Rn.l+=i,this.setHSL(Rn.h,Rn.s,Rn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Rn),e.getHSL(va);const i=Ou(Rn.h,va.h,n),r=Ou(Rn.s,va.s,n),s=Ou(Rn.l,va.l,n);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nt=new qe;qe.NAMES=hv;class pv extends Bo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=iv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ct=new V,_a=new Xe;class bn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=kp,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)_a.fromBufferAttribute(this,n),_a.applyMatrix3(e),this.setXY(n,_a.x,_a.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)ct.fromBufferAttribute(this,n),ct.applyMatrix3(e),this.setXYZ(n,ct.x,ct.y,ct.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)ct.fromBufferAttribute(this,n),ct.applyMatrix4(e),this.setXYZ(n,ct.x,ct.y,ct.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)ct.fromBufferAttribute(this,n),ct.applyNormalMatrix(e),this.setXYZ(n,ct.x,ct.y,ct.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)ct.fromBufferAttribute(this,n),ct.transformDirection(e),this.setXYZ(n,ct.x,ct.y,ct.z);return this}set(e,n=0){return this.array.set(e,n),this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ca(n,this.array)),n}setX(e,n){return this.normalized&&(n=sn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ca(n,this.array)),n}setY(e,n){return this.normalized&&(n=sn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ca(n,this.array)),n}setZ(e,n){return this.normalized&&(n=sn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ca(n,this.array)),n}setW(e,n){return this.normalized&&(n=sn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=sn(n,this.array),i=sn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=sn(n,this.array),i=sn(i,this.array),r=sn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=sn(n,this.array),i=sn(i,this.array),r=sn(r,this.array),s=sn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==kp&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class mv extends bn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class gv extends bn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class pr extends bn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let pw=0;const _n=new ht,ec=new Lt,Nr=new V,an=new Uo,Bs=new Uo,St=new V;class Qn extends Ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pw++}),this.uuid=Fo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(av(e)?gv:mv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Wt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _n.makeRotationFromQuaternion(e),this.applyMatrix4(_n),this}rotateX(e){return _n.makeRotationX(e),this.applyMatrix4(_n),this}rotateY(e){return _n.makeRotationY(e),this.applyMatrix4(_n),this}rotateZ(e){return _n.makeRotationZ(e),this.applyMatrix4(_n),this}translate(e,n,i){return _n.makeTranslation(e,n,i),this.applyMatrix4(_n),this}scale(e,n,i){return _n.makeScale(e,n,i),this.applyMatrix4(_n),this}lookAt(e){return ec.lookAt(e),ec.updateMatrix(),this.applyMatrix4(ec.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Nr).negate(),this.translate(Nr.x,Nr.y,Nr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new pr(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Uo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];an.setFromBufferAttribute(s),this.morphTargetsRelative?(St.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(St),St.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(St)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ql);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new V,1/0);return}if(e){const i=this.boundingSphere.center;if(an.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Bs.setFromBufferAttribute(a),this.morphTargetsRelative?(St.addVectors(an.min,Bs.min),an.expandByPoint(St),St.addVectors(an.max,Bs.max),an.expandByPoint(St)):(an.expandByPoint(Bs.min),an.expandByPoint(Bs.max))}an.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)St.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(St));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)St.fromBufferAttribute(a,u),l&&(Nr.fromBufferAttribute(e,u),St.add(Nr)),r=Math.max(r,i.distanceToSquared(St))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let R=0;R<a;R++)u[R]=new V,c[R]=new V;const d=new V,f=new V,v=new V,x=new Xe,h=new Xe,p=new Xe,g=new V,m=new V;function _(R,Z,K){d.fromArray(r,R*3),f.fromArray(r,Z*3),v.fromArray(r,K*3),x.fromArray(o,R*2),h.fromArray(o,Z*2),p.fromArray(o,K*2),f.sub(d),v.sub(d),h.sub(x),p.sub(x);const U=1/(h.x*p.y-p.x*h.y);isFinite(U)&&(g.copy(f).multiplyScalar(p.y).addScaledVector(v,-h.y).multiplyScalar(U),m.copy(v).multiplyScalar(h.x).addScaledVector(f,-p.x).multiplyScalar(U),u[R].add(g),u[Z].add(g),u[K].add(g),c[R].add(m),c[Z].add(m),c[K].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let R=0,Z=y.length;R<Z;++R){const K=y[R],U=K.start,N=K.count;for(let $=U,ee=U+N;$<ee;$+=3)_(i[$+0],i[$+1],i[$+2])}const M=new V,C=new V,L=new V,S=new V;function T(R){L.fromArray(s,R*3),S.copy(L);const Z=u[R];M.copy(Z),M.sub(L.multiplyScalar(L.dot(Z))).normalize(),C.crossVectors(S,Z);const U=C.dot(c[R])<0?-1:1;l[R*4]=M.x,l[R*4+1]=M.y,l[R*4+2]=M.z,l[R*4+3]=U}for(let R=0,Z=y.length;R<Z;++R){const K=y[R],U=K.start,N=K.count;for(let $=U,ee=U+N;$<ee;$+=3)T(i[$+0]),T(i[$+1]),T(i[$+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new bn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,v=i.count;f<v;f++)i.setXYZ(f,0,0,0);const r=new V,s=new V,o=new V,a=new V,l=new V,u=new V,c=new V,d=new V;if(e)for(let f=0,v=e.count;f<v;f+=3){const x=e.getX(f+0),h=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,h),o.fromBufferAttribute(n,p),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,h),u.fromBufferAttribute(i,p),a.add(c),l.add(c),u.add(c),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(h,l.x,l.y,l.z),i.setXYZ(p,u.x,u.y,u.z)}else for(let f=0,v=n.count;f<v;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)St.fromBufferAttribute(e,n),St.normalize(),e.setXYZ(n,St.x,St.y,St.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,d=a.normalized,f=new u.constructor(l.length*c);let v=0,x=0;for(let h=0,p=l.length;h<p;h++){a.isInterleavedBufferAttribute?v=l[h]*a.data.stride+a.offset:v=l[h]*c;for(let g=0;g<c;g++)f[x++]=u[v++]}return new bn(f,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Qn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,d=u.length;c<d;c++){const f=u[c],v=e(f,i);l.push(v)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,f=u.length;d<f;d++){const v=u[d];c.push(v.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const s=e.morphAttributes;for(const u in s){const c=[],d=s[u];for(let f=0,v=d.length;f<v;f++)c.push(d[f].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const qp=new ht,Wn=new dv,xa=new ql,Xp=new V,Gs=new V,Vs=new V,Hs=new V,tc=new V,ya=new V,Sa=new Xe,wa=new Xe,Ma=new Xe,nc=new V,Ea=new V;class Di extends Lt{constructor(e=new Qn,n=new pv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ya.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],d=s[l];c!==0&&(tc.fromBufferAttribute(d,e),o?ya.addScaledVector(tc,c):ya.addScaledVector(tc.sub(n),c))}n.add(ya)}return this.isSkinnedMesh&&this.boneTransform(e,n),n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),xa.copy(i.boundingSphere),xa.applyMatrix4(s),Wn.copy(e.ray).recast(e.near),xa.containsPoint(Wn.origin)===!1&&(Wn.intersectSphere(xa,Xp)===null||Wn.origin.distanceToSquared(Xp)>(e.far-e.near)**2))||(qp.copy(s).invert(),Wn.copy(e.ray).applyMatrix4(qp),i.boundingBox!==null&&Wn.intersectsBox(i.boundingBox)===!1))return;let o;const a=i.index,l=i.attributes.position,u=i.attributes.uv,c=i.attributes.uv2,d=i.groups,f=i.drawRange;if(a!==null)if(Array.isArray(r))for(let v=0,x=d.length;v<x;v++){const h=d[v],p=r[h.materialIndex],g=Math.max(h.start,f.start),m=Math.min(a.count,Math.min(h.start+h.count,f.start+f.count));for(let _=g,y=m;_<y;_+=3){const M=a.getX(_),C=a.getX(_+1),L=a.getX(_+2);o=ba(this,p,e,Wn,u,c,M,C,L),o&&(o.faceIndex=Math.floor(_/3),o.face.materialIndex=h.materialIndex,n.push(o))}}else{const v=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let h=v,p=x;h<p;h+=3){const g=a.getX(h),m=a.getX(h+1),_=a.getX(h+2);o=ba(this,r,e,Wn,u,c,g,m,_),o&&(o.faceIndex=Math.floor(h/3),n.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let v=0,x=d.length;v<x;v++){const h=d[v],p=r[h.materialIndex],g=Math.max(h.start,f.start),m=Math.min(l.count,Math.min(h.start+h.count,f.start+f.count));for(let _=g,y=m;_<y;_+=3){const M=_,C=_+1,L=_+2;o=ba(this,p,e,Wn,u,c,M,C,L),o&&(o.faceIndex=Math.floor(_/3),o.face.materialIndex=h.materialIndex,n.push(o))}}else{const v=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let h=v,p=x;h<p;h+=3){const g=h,m=h+1,_=h+2;o=ba(this,r,e,Wn,u,c,g,m,_),o&&(o.faceIndex=Math.floor(h/3),n.push(o))}}}}function mw(t,e,n,i,r,s,o,a){let l;if(e.side===fn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===ji,a),l===null)return null;Ea.copy(a),Ea.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Ea);return u<n.near||u>n.far?null:{distance:u,point:Ea.clone(),object:t}}function ba(t,e,n,i,r,s,o,a,l){t.getVertexPosition(o,Gs),t.getVertexPosition(a,Vs),t.getVertexPosition(l,Hs);const u=mw(t,e,n,i,Gs,Vs,Hs,nc);if(u){r&&(Sa.fromBufferAttribute(r,o),wa.fromBufferAttribute(r,a),Ma.fromBufferAttribute(r,l),u.uv=ai.getUV(nc,Gs,Vs,Hs,Sa,wa,Ma,new Xe)),s&&(Sa.fromBufferAttribute(s,o),wa.fromBufferAttribute(s,a),Ma.fromBufferAttribute(s,l),u.uv2=ai.getUV(nc,Gs,Vs,Hs,Sa,wa,Ma,new Xe));const c={a:o,b:a,c:l,normal:new V,materialIndex:0};ai.getNormal(Gs,Vs,Hs,c.normal),u.face=c}return u}class Go extends Qn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],d=[];let f=0,v=0;x("z","y","x",-1,-1,i,n,e,o,s,0),x("z","y","x",1,-1,i,n,-e,o,s,1),x("x","z","y",1,1,e,i,n,r,o,2),x("x","z","y",1,-1,e,i,-n,r,o,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new pr(u,3)),this.setAttribute("normal",new pr(c,3)),this.setAttribute("uv",new pr(d,2));function x(h,p,g,m,_,y,M,C,L,S,T){const R=y/L,Z=M/S,K=y/2,U=M/2,N=C/2,$=L+1,ee=S+1;let te=0,I=0;const j=new V;for(let H=0;H<ee;H++){const ae=H*Z-U;for(let A=0;A<$;A++){const F=A*R-K;j[h]=F*m,j[p]=ae*_,j[g]=N,u.push(j.x,j.y,j.z),j[h]=0,j[p]=0,j[g]=C>0?1:-1,c.push(j.x,j.y,j.z),d.push(A/L),d.push(1-H/S),te+=1}}for(let H=0;H<S;H++)for(let ae=0;ae<L;ae++){const A=f+ae+$*H,F=f+ae+$*(H+1),G=f+(ae+1)+$*(H+1),D=f+(ae+1)+$*H;l.push(A,F,D),l.push(F,G,D),I+=6}a.addGroup(v,I,T),v+=I,f+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Go(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ws(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Gt(t){const e={};for(let n=0;n<t.length;n++){const i=ws(t[n]);for(const r in i)e[r]=i[r]}return e}function gw(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function vv(t){return t.getRenderTarget()===null&&t.outputEncoding===Qe?qn:Lo}const vw={clone:ws,merge:Gt};var _w=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mr extends Bo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_w,this.fragmentShader=xw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ws(e.uniforms),this.uniformsGroups=gw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class _v extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class wn extends _v{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=zp*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Fu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zp*2*Math.atan(Math.tan(Fu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Fu*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const zr=-90,Fr=1;class yw extends Lt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new wn(zr,Fr,e,n);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const s=new wn(zr,Fr,e,n);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new wn(zr,Fr,e,n);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new wn(zr,Fr,e,n);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new wn(zr,Fr,e,n);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const u=new wn(zr,Fr,e,n);u.layers=this.layers,u.up.set(0,1,0),u.lookAt(0,0,-1),this.add(u)}update(e,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,o,a,l,u]=this.children,c=e.getRenderTarget(),d=e.toneMapping,f=e.xr.enabled;e.toneMapping=fi,e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(n,r),e.setRenderTarget(i,1),e.render(n,s),e.setRenderTarget(i,2),e.render(n,o),e.setRenderTarget(i,3),e.render(n,a),e.setRenderTarget(i,4),e.render(n,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5),e.render(n,u),e.setRenderTarget(c),e.toneMapping=d,e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}}class xv extends tn{constructor(e,n,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],n=n!==void 0?n:xs,super(e,n,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Sw extends wr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new xv(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Sn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.encoding=n.encoding,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Go(5,5,5),s=new Mr({name:"CubemapFromEquirect",uniforms:ws(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:fn,blending:Vi});s.uniforms.tEquirect.value=n;const o=new Di(r,s),a=n.minFilter;return n.minFilter===Co&&(n.minFilter=Sn),new yw(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const ic=new V,ww=new V,Mw=new Wt;class ir{constructor(e=new V(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=ic.subVectors(i,n).cross(ww.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(ic),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Mw.getNormalMatrix(e),r=this.coplanarPoint(ic).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Or=new ql,Ta=new V;class bf{constructor(e=new ir,n=new ir,i=new ir,r=new ir,s=new ir,o=new ir){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const n=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],l=i[4],u=i[5],c=i[6],d=i[7],f=i[8],v=i[9],x=i[10],h=i[11],p=i[12],g=i[13],m=i[14],_=i[15];return n[0].setComponents(a-r,d-l,h-f,_-p).normalize(),n[1].setComponents(a+r,d+l,h+f,_+p).normalize(),n[2].setComponents(a+s,d+u,h+v,_+g).normalize(),n[3].setComponents(a-s,d-u,h-v,_-g).normalize(),n[4].setComponents(a-o,d-c,h-x,_-m).normalize(),n[5].setComponents(a+o,d+c,h+x,_+m).normalize(),this}intersectsObject(e){const n=e.geometry;return n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Or)}intersectsSprite(e){return Or.center.set(0,0,0),Or.radius=.7071067811865476,Or.applyMatrix4(e.matrixWorld),this.intersectsSphere(Or)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ta.x=r.normal.x>0?e.max.x:e.min.x,Ta.y=r.normal.y>0?e.max.y:e.min.y,Ta.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ta)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function yv(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Ew(t,e){const n=e.isWebGL2,i=new WeakMap;function r(u,c){const d=u.array,f=u.usage,v=t.createBuffer();t.bindBuffer(c,v),t.bufferData(c,d,f),u.onUploadCallback();let x;if(d instanceof Float32Array)x=5126;else if(d instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)x=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=5123;else if(d instanceof Int16Array)x=5122;else if(d instanceof Uint32Array)x=5125;else if(d instanceof Int32Array)x=5124;else if(d instanceof Int8Array)x=5120;else if(d instanceof Uint8Array)x=5121;else if(d instanceof Uint8ClampedArray)x=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:v,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version}}function s(u,c,d){const f=c.array,v=c.updateRange;t.bindBuffer(d,u),v.count===-1?t.bufferSubData(d,0,f):(n?t.bufferSubData(d,v.offset*f.BYTES_PER_ELEMENT,f,v.offset,v.count):t.bufferSubData(d,v.offset*f.BYTES_PER_ELEMENT,f.subarray(v.offset,v.offset+v.count)),v.count=-1),c.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(t.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const f=i.get(u);(!f||f.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const d=i.get(u);d===void 0?i.set(u,r(u,c)):d.version<u.version&&(s(d.buffer,u,c),d.version=u.version)}return{get:o,remove:a,update:l}}class Tf extends Qn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,d=e/a,f=n/l,v=[],x=[],h=[],p=[];for(let g=0;g<c;g++){const m=g*f-o;for(let _=0;_<u;_++){const y=_*d-s;x.push(y,-m,0),h.push(0,0,1),p.push(_/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let m=0;m<a;m++){const _=m+u*g,y=m+u*(g+1),M=m+1+u*(g+1),C=m+1+u*g;v.push(_,y,C),v.push(y,M,C)}this.setIndex(v),this.setAttribute("position",new pr(x,3)),this.setAttribute("normal",new pr(h,3)),this.setAttribute("uv",new pr(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tf(e.width,e.height,e.widthSegments,e.heightSegments)}}var bw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Tw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cw=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Aw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lw=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Pw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Rw="vec3 transformed = vec3( position );",Dw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Iw=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,kw=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Nw=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,zw=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Fw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ow=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Uw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Gw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Hw=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ww=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,jw=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,$w=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,qw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Yw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kw="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qw=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,eM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,tM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,nM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,iM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,rM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,oM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,aM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,uM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,cM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,pM=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,mM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_M=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,yM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,SM=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,wM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,MM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,EM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,TM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,CM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,AM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,LM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,PM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,RM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,DM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,IM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,NM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,zM=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,FM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,OM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,UM=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,BM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,GM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,VM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,HM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,WM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,jM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,$M=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,qM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,XM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,YM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,ZM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,KM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,QM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,JM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,eE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,iE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,rE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,sE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,oE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,aE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,lE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,cE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,pE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,mE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,gE=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,vE=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,_E=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,xE=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,yE=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,SE=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,wE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ME=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,EE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,bE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,CE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,LE=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,PE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,RE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,DE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,IE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,NE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,FE=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,OE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,VE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,WE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,jE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$E=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,XE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ZE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,QE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,JE=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e3=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,t3=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,n3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Re={alphamap_fragment:bw,alphamap_pars_fragment:Tw,alphatest_fragment:Cw,alphatest_pars_fragment:Aw,aomap_fragment:Lw,aomap_pars_fragment:Pw,begin_vertex:Rw,beginnormal_vertex:Dw,bsdfs:Iw,iridescence_fragment:kw,bumpmap_pars_fragment:Nw,clipping_planes_fragment:zw,clipping_planes_pars_fragment:Fw,clipping_planes_pars_vertex:Ow,clipping_planes_vertex:Uw,color_fragment:Bw,color_pars_fragment:Gw,color_pars_vertex:Vw,color_vertex:Hw,common:Ww,cube_uv_reflection_fragment:jw,defaultnormal_vertex:$w,displacementmap_pars_vertex:qw,displacementmap_vertex:Xw,emissivemap_fragment:Yw,emissivemap_pars_fragment:Zw,encodings_fragment:Kw,encodings_pars_fragment:Qw,envmap_fragment:Jw,envmap_common_pars_fragment:eM,envmap_pars_fragment:tM,envmap_pars_vertex:nM,envmap_physical_pars_fragment:pM,envmap_vertex:iM,fog_vertex:rM,fog_pars_vertex:sM,fog_fragment:oM,fog_pars_fragment:aM,gradientmap_pars_fragment:lM,lightmap_fragment:uM,lightmap_pars_fragment:cM,lights_lambert_fragment:dM,lights_lambert_pars_fragment:fM,lights_pars_begin:hM,lights_toon_fragment:mM,lights_toon_pars_fragment:gM,lights_phong_fragment:vM,lights_phong_pars_fragment:_M,lights_physical_fragment:xM,lights_physical_pars_fragment:yM,lights_fragment_begin:SM,lights_fragment_maps:wM,lights_fragment_end:MM,logdepthbuf_fragment:EM,logdepthbuf_pars_fragment:bM,logdepthbuf_pars_vertex:TM,logdepthbuf_vertex:CM,map_fragment:AM,map_pars_fragment:LM,map_particle_fragment:PM,map_particle_pars_fragment:RM,metalnessmap_fragment:DM,metalnessmap_pars_fragment:IM,morphcolor_vertex:kM,morphnormal_vertex:NM,morphtarget_pars_vertex:zM,morphtarget_vertex:FM,normal_fragment_begin:OM,normal_fragment_maps:UM,normal_pars_fragment:BM,normal_pars_vertex:GM,normal_vertex:VM,normalmap_pars_fragment:HM,clearcoat_normal_fragment_begin:WM,clearcoat_normal_fragment_maps:jM,clearcoat_pars_fragment:$M,iridescence_pars_fragment:qM,output_fragment:XM,packing:YM,premultiplied_alpha_fragment:ZM,project_vertex:KM,dithering_fragment:QM,dithering_pars_fragment:JM,roughnessmap_fragment:eE,roughnessmap_pars_fragment:tE,shadowmap_pars_fragment:nE,shadowmap_pars_vertex:iE,shadowmap_vertex:rE,shadowmask_pars_fragment:sE,skinbase_vertex:oE,skinning_pars_vertex:aE,skinning_vertex:lE,skinnormal_vertex:uE,specularmap_fragment:cE,specularmap_pars_fragment:dE,tonemapping_fragment:fE,tonemapping_pars_fragment:hE,transmission_fragment:pE,transmission_pars_fragment:mE,uv_pars_fragment:gE,uv_pars_vertex:vE,uv_vertex:_E,uv2_pars_fragment:xE,uv2_pars_vertex:yE,uv2_vertex:SE,worldpos_vertex:wE,background_vert:ME,background_frag:EE,backgroundCube_vert:bE,backgroundCube_frag:TE,cube_vert:CE,cube_frag:AE,depth_vert:LE,depth_frag:PE,distanceRGBA_vert:RE,distanceRGBA_frag:DE,equirect_vert:IE,equirect_frag:kE,linedashed_vert:NE,linedashed_frag:zE,meshbasic_vert:FE,meshbasic_frag:OE,meshlambert_vert:UE,meshlambert_frag:BE,meshmatcap_vert:GE,meshmatcap_frag:VE,meshnormal_vert:HE,meshnormal_frag:WE,meshphong_vert:jE,meshphong_frag:$E,meshphysical_vert:qE,meshphysical_frag:XE,meshtoon_vert:YE,meshtoon_frag:ZE,points_vert:KE,points_frag:QE,shadow_vert:JE,shadow_frag:e3,sprite_vert:t3,sprite_frag:n3},ce={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Wt},uv2Transform:{value:new Wt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Wt}}},Xn={basic:{uniforms:Gt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Re.meshbasic_vert,fragmentShader:Re.meshbasic_frag},lambert:{uniforms:Gt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new qe(0)}}]),vertexShader:Re.meshlambert_vert,fragmentShader:Re.meshlambert_frag},phong:{uniforms:Gt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:Re.meshphong_vert,fragmentShader:Re.meshphong_frag},standard:{uniforms:Gt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag},toon:{uniforms:Gt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new qe(0)}}]),vertexShader:Re.meshtoon_vert,fragmentShader:Re.meshtoon_frag},matcap:{uniforms:Gt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Re.meshmatcap_vert,fragmentShader:Re.meshmatcap_frag},points:{uniforms:Gt([ce.points,ce.fog]),vertexShader:Re.points_vert,fragmentShader:Re.points_frag},dashed:{uniforms:Gt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Re.linedashed_vert,fragmentShader:Re.linedashed_frag},depth:{uniforms:Gt([ce.common,ce.displacementmap]),vertexShader:Re.depth_vert,fragmentShader:Re.depth_frag},normal:{uniforms:Gt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Re.meshnormal_vert,fragmentShader:Re.meshnormal_frag},sprite:{uniforms:Gt([ce.sprite,ce.fog]),vertexShader:Re.sprite_vert,fragmentShader:Re.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Re.background_vert,fragmentShader:Re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Re.backgroundCube_vert,fragmentShader:Re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Re.cube_vert,fragmentShader:Re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Re.equirect_vert,fragmentShader:Re.equirect_frag},distanceRGBA:{uniforms:Gt([ce.common,ce.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Re.distanceRGBA_vert,fragmentShader:Re.distanceRGBA_frag},shadow:{uniforms:Gt([ce.lights,ce.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Re.shadow_vert,fragmentShader:Re.shadow_frag}};Xn.physical={uniforms:Gt([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag};const Ca={r:0,b:0,g:0};function i3(t,e,n,i,r,s,o){const a=new qe(0);let l=s===!0?0:1,u,c,d=null,f=0,v=null;function x(p,g){let m=!1,_=g.isScene===!0?g.background:null;_&&_.isTexture&&(_=(g.backgroundBlurriness>0?n:e).get(_));const y=t.xr,M=y.getSession&&y.getSession();M&&M.environmentBlendMode==="additive"&&(_=null),_===null?h(a,l):_&&_.isColor&&(h(_,1),m=!0),(t.autoClear||m)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),_&&(_.isCubeTexture||_.mapping===$l)?(c===void 0&&(c=new Di(new Go(1,1,1),new Mr({name:"BackgroundCubeMaterial",uniforms:ws(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,L,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=_.encoding!==Qe,(d!==_||f!==_.version||v!==t.toneMapping)&&(c.material.needsUpdate=!0,d=_,f=_.version,v=t.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(u===void 0&&(u=new Di(new Tf(2,2),new Mr({name:"BackgroundMaterial",uniforms:ws(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:ji,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=_,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.toneMapped=_.encoding!==Qe,_.matrixAutoUpdate===!0&&_.updateMatrix(),u.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||f!==_.version||v!==t.toneMapping)&&(u.material.needsUpdate=!0,d=_,f=_.version,v=t.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null))}function h(p,g){p.getRGB(Ca,vv(t)),i.buffers.color.setClear(Ca.r,Ca.g,Ca.b,g,o)}return{getClearColor:function(){return a},setClearColor:function(p,g=1){a.set(p),l=g,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,h(a,l)},render:x}}function r3(t,e,n,i){const r=t.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let u=l,c=!1;function d(N,$,ee,te,I){let j=!1;if(o){const H=h(te,ee,$);u!==H&&(u=H,v(u.object)),j=g(N,te,ee,I),j&&m(N,te,ee,I)}else{const H=$.wireframe===!0;(u.geometry!==te.id||u.program!==ee.id||u.wireframe!==H)&&(u.geometry=te.id,u.program=ee.id,u.wireframe=H,j=!0)}I!==null&&n.update(I,34963),(j||c)&&(c=!1,S(N,$,ee,te),I!==null&&t.bindBuffer(34963,n.get(I).buffer))}function f(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function v(N){return i.isWebGL2?t.bindVertexArray(N):s.bindVertexArrayOES(N)}function x(N){return i.isWebGL2?t.deleteVertexArray(N):s.deleteVertexArrayOES(N)}function h(N,$,ee){const te=ee.wireframe===!0;let I=a[N.id];I===void 0&&(I={},a[N.id]=I);let j=I[$.id];j===void 0&&(j={},I[$.id]=j);let H=j[te];return H===void 0&&(H=p(f()),j[te]=H),H}function p(N){const $=[],ee=[],te=[];for(let I=0;I<r;I++)$[I]=0,ee[I]=0,te[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:ee,attributeDivisors:te,object:N,attributes:{},index:null}}function g(N,$,ee,te){const I=u.attributes,j=$.attributes;let H=0;const ae=ee.getAttributes();for(const A in ae)if(ae[A].location>=0){const G=I[A];let D=j[A];if(D===void 0&&(A==="instanceMatrix"&&N.instanceMatrix&&(D=N.instanceMatrix),A==="instanceColor"&&N.instanceColor&&(D=N.instanceColor)),G===void 0||G.attribute!==D||D&&G.data!==D.data)return!0;H++}return u.attributesNum!==H||u.index!==te}function m(N,$,ee,te){const I={},j=$.attributes;let H=0;const ae=ee.getAttributes();for(const A in ae)if(ae[A].location>=0){let G=j[A];G===void 0&&(A==="instanceMatrix"&&N.instanceMatrix&&(G=N.instanceMatrix),A==="instanceColor"&&N.instanceColor&&(G=N.instanceColor));const D={};D.attribute=G,G&&G.data&&(D.data=G.data),I[A]=D,H++}u.attributes=I,u.attributesNum=H,u.index=te}function _(){const N=u.newAttributes;for(let $=0,ee=N.length;$<ee;$++)N[$]=0}function y(N){M(N,0)}function M(N,$){const ee=u.newAttributes,te=u.enabledAttributes,I=u.attributeDivisors;ee[N]=1,te[N]===0&&(t.enableVertexAttribArray(N),te[N]=1),I[N]!==$&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,$),I[N]=$)}function C(){const N=u.newAttributes,$=u.enabledAttributes;for(let ee=0,te=$.length;ee<te;ee++)$[ee]!==N[ee]&&(t.disableVertexAttribArray(ee),$[ee]=0)}function L(N,$,ee,te,I,j){i.isWebGL2===!0&&(ee===5124||ee===5125)?t.vertexAttribIPointer(N,$,ee,I,j):t.vertexAttribPointer(N,$,ee,te,I,j)}function S(N,$,ee,te){if(i.isWebGL2===!1&&(N.isInstancedMesh||te.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const I=te.attributes,j=ee.getAttributes(),H=$.defaultAttributeValues;for(const ae in j){const A=j[ae];if(A.location>=0){let F=I[ae];if(F===void 0&&(ae==="instanceMatrix"&&N.instanceMatrix&&(F=N.instanceMatrix),ae==="instanceColor"&&N.instanceColor&&(F=N.instanceColor)),F!==void 0){const G=F.normalized,D=F.itemSize,P=n.get(F);if(P===void 0)continue;const ne=P.buffer,W=P.type,oe=P.bytesPerElement;if(F.isInterleavedBufferAttribute){const le=F.data,fe=le.stride,ue=F.offset;if(le.isInstancedInterleavedBuffer){for(let we=0;we<A.locationSize;we++)M(A.location+we,le.meshPerAttribute);N.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let we=0;we<A.locationSize;we++)y(A.location+we);t.bindBuffer(34962,ne);for(let we=0;we<A.locationSize;we++)L(A.location+we,D/A.locationSize,W,G,fe*oe,(ue+D/A.locationSize*we)*oe)}else{if(F.isInstancedBufferAttribute){for(let le=0;le<A.locationSize;le++)M(A.location+le,F.meshPerAttribute);N.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let le=0;le<A.locationSize;le++)y(A.location+le);t.bindBuffer(34962,ne);for(let le=0;le<A.locationSize;le++)L(A.location+le,D/A.locationSize,W,G,D*oe,D/A.locationSize*le*oe)}}else if(H!==void 0){const G=H[ae];if(G!==void 0)switch(G.length){case 2:t.vertexAttrib2fv(A.location,G);break;case 3:t.vertexAttrib3fv(A.location,G);break;case 4:t.vertexAttrib4fv(A.location,G);break;default:t.vertexAttrib1fv(A.location,G)}}}}C()}function T(){K();for(const N in a){const $=a[N];for(const ee in $){const te=$[ee];for(const I in te)x(te[I].object),delete te[I];delete $[ee]}delete a[N]}}function R(N){if(a[N.id]===void 0)return;const $=a[N.id];for(const ee in $){const te=$[ee];for(const I in te)x(te[I].object),delete te[I];delete $[ee]}delete a[N.id]}function Z(N){for(const $ in a){const ee=a[$];if(ee[N.id]===void 0)continue;const te=ee[N.id];for(const I in te)x(te[I].object),delete te[I];delete ee[N.id]}}function K(){U(),c=!0,u!==l&&(u=l,v(u.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:K,resetDefaultState:U,dispose:T,releaseStatesOfGeometry:R,releaseStatesOfProgram:Z,initAttributes:_,enableAttribute:y,disableUnusedAttributes:C}}function s3(t,e,n,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,c){t.drawArrays(s,u,c),n.update(c,s,1)}function l(u,c,d){if(d===0)return;let f,v;if(r)f=t,v="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[v](s,u,c,d),n.update(c,s,d)}this.setMode=o,this.render=a,this.renderInstances=l}function o3(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(L){if(L==="highp"){if(t.getShaderPrecisionFormat(35633,36338).precision>0&&t.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";L="mediump"}return L==="mediump"&&t.getShaderPrecisionFormat(35633,36337).precision>0&&t.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t instanceof WebGL2RenderingContext;let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=n.logarithmicDepthBuffer===!0,d=t.getParameter(34930),f=t.getParameter(35660),v=t.getParameter(3379),x=t.getParameter(34076),h=t.getParameter(34921),p=t.getParameter(36347),g=t.getParameter(36348),m=t.getParameter(36349),_=f>0,y=o||e.has("OES_texture_float"),M=_&&y,C=o?t.getParameter(36183):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:d,maxVertexTextures:f,maxTextureSize:v,maxCubemapSize:x,maxAttributes:h,maxVertexUniforms:p,maxVaryings:g,maxFragmentUniforms:m,vertexTextures:_,floatFragmentTextures:y,floatVertexTextures:M,maxSamples:C}}function a3(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new ir,a=new Wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const v=d.length!==0||f||i!==0||r;return r=f,i=d.length,v},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){n=c(d,f,0)},this.setState=function(d,f,v){const x=d.clippingPlanes,h=d.clipIntersection,p=d.clipShadows,g=t.get(d);if(!r||x===null||x.length===0||s&&!p)s?c(null):u();else{const m=s?0:i,_=m*4;let y=g.clippingState||null;l.value=y,y=c(x,f,_,v);for(let M=0;M!==_;++M)y[M]=n[M];g.clippingState=y,this.numIntersection=h?this.numPlanes:0,this.numPlanes+=m}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,f,v,x){const h=d!==null?d.length:0;let p=null;if(h!==0){if(p=l.value,x!==!0||p===null){const g=v+h*4,m=f.matrixWorldInverse;a.getNormalMatrix(m),(p===null||p.length<g)&&(p=new Float32Array(g));for(let _=0,y=v;_!==h;++_,y+=4)o.copy(d[_]).applyMatrix4(m,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=h,e.numIntersection=0,p}}function l3(t){let e=new WeakMap;function n(o,a){return a===fd?o.mapping=xs:a===hd&&(o.mapping=ys),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===fd||a===hd)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new Sw(l.height/2);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Sv extends _v{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const es=4,Yp=[.125,.215,.35,.446,.526,.582],sr=20,rc=new Sv,Zp=new qe;let sc=null;const rr=(1+Math.sqrt(5))/2,Ur=1/rr,Kp=[new V(1,1,1),new V(-1,1,1),new V(1,1,-1),new V(-1,1,-1),new V(0,rr,Ur),new V(0,rr,-Ur),new V(Ur,0,rr),new V(-Ur,0,rr),new V(rr,Ur,0),new V(-rr,Ur,0)];class Qp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){sc=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=em(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(sc),e.scissorTest=!1,Aa(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===xs||e.mapping===ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sc=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:Ao,format:Fn,encoding:Sr,depthBuffer:!1},r=Jp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=u3(s)),this._blurMaterial=c3(s,e,n)}return r}_compileMaterial(e){const n=new Di(this._lodPlanes[0],e);this._renderer.compile(n,rc)}_sceneToCubeUV(e,n,i,r){const a=new wn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,f=c.toneMapping;c.getClearColor(Zp),c.toneMapping=fi,c.autoClear=!1;const v=new pv({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1}),x=new Di(new Go,v);let h=!1;const p=e.background;p?p.isColor&&(v.color.copy(p),e.background=null,h=!0):(v.color.copy(Zp),h=!0);for(let g=0;g<6;g++){const m=g%3;m===0?(a.up.set(0,l[g],0),a.lookAt(u[g],0,0)):m===1?(a.up.set(0,0,l[g]),a.lookAt(0,u[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,u[g]));const _=this._cubeSize;Aa(r,m*_,g>2?_:0,_,_),c.setRenderTarget(r),h&&c.render(x,a),c.render(e,a)}x.geometry.dispose(),x.material.dispose(),c.toneMapping=f,c.autoClear=d,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===xs||e.mapping===ys;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=tm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=em());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Di(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Aa(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,rc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Kp[(r-1)%Kp.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new Di(this._lodPlanes[r],u),f=u.uniforms,v=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*v):2*Math.PI/(2*sr-1),h=s/x,p=isFinite(s)?1+Math.floor(c*h):sr;p>sr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${sr}`);const g=[];let m=0;for(let L=0;L<sr;++L){const S=L/h,T=Math.exp(-S*S/2);g.push(T),L===0?m+=T:L<p&&(m+=2*T)}for(let L=0;L<g.length;L++)g[L]=g[L]/m;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=g,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:_}=this;f.dTheta.value=x,f.mipInt.value=_-i;const y=this._sizeLods[r],M=3*y*(r>_-es?r-_+es:0),C=4*(this._cubeSize-y);Aa(n,M,C,3*y,2*y),l.setRenderTarget(n),l.render(d,rc)}}function u3(t){const e=[],n=[],i=[];let r=t;const s=t-es+1+Yp.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-es?l=Yp[o-t+es-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,d=1+u,f=[c,c,d,c,d,d,c,c,d,d,c,d],v=6,x=6,h=3,p=2,g=1,m=new Float32Array(h*x*v),_=new Float32Array(p*x*v),y=new Float32Array(g*x*v);for(let C=0;C<v;C++){const L=C%3*2/3-1,S=C>2?0:-1,T=[L,S,0,L+2/3,S,0,L+2/3,S+1,0,L,S,0,L+2/3,S+1,0,L,S+1,0];m.set(T,h*x*C),_.set(f,p*x*C);const R=[C,C,C,C,C,C];y.set(R,g*x*C)}const M=new Qn;M.setAttribute("position",new bn(m,h)),M.setAttribute("uv",new bn(_,p)),M.setAttribute("faceIndex",new bn(y,g)),e.push(M),r>es&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Jp(t,e,n){const i=new wr(t,e,n);return i.texture.mapping=$l,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Aa(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function c3(t,e,n){const i=new Float32Array(sr),r=new V(0,1,0);return new Mr({name:"SphericalGaussianBlur",defines:{n:sr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Cf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function em(){return new Mr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function tm(){return new Mr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Cf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function d3(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===fd||l===hd,c=l===xs||l===ys;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return n===null&&(n=new Qp(t)),d=u?n.fromEquirectangular(a,d):n.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(u&&d&&d.height>0||c&&d&&r(d)){n===null&&(n=new Qp(t));const f=u?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function f3(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function h3(t,e,n,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const x in f.attributes)e.remove(f.attributes[x]);f.removeEventListener("dispose",o),delete r[f.id];const v=s.get(f);v&&(e.remove(v),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const x in f)e.update(f[x],34962);const v=d.morphAttributes;for(const x in v){const h=v[x];for(let p=0,g=h.length;p<g;p++)e.update(h[p],34962)}}function u(d){const f=[],v=d.index,x=d.attributes.position;let h=0;if(v!==null){const m=v.array;h=v.version;for(let _=0,y=m.length;_<y;_+=3){const M=m[_+0],C=m[_+1],L=m[_+2];f.push(M,C,C,L,L,M)}}else{const m=x.array;h=x.version;for(let _=0,y=m.length/3-1;_<y;_+=3){const M=_+0,C=_+1,L=_+2;f.push(M,C,C,L,L,M)}}const p=new(av(f)?gv:mv)(f,1);p.version=h;const g=s.get(d);g&&e.remove(g),s.set(d,p)}function c(d){const f=s.get(d);if(f){const v=d.index;v!==null&&f.version<v.version&&u(d)}else u(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:c}}function p3(t,e,n,i){const r=i.isWebGL2;let s;function o(f){s=f}let a,l;function u(f){a=f.type,l=f.bytesPerElement}function c(f,v){t.drawElements(s,v,a,f*l),n.update(v,s,1)}function d(f,v,x){if(x===0)return;let h,p;if(r)h=t,p="drawElementsInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",h===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](s,v,a,f*l,x),n.update(v,s,x)}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=d}function m3(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case 4:n.triangles+=a*(s/3);break;case 1:n.lines+=a*(s/2);break;case 3:n.lines+=a*(s-1);break;case 2:n.lines+=a*s;break;case 0:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.frame++,n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function g3(t,e){return t[0]-e[0]}function v3(t,e){return Math.abs(e[1])-Math.abs(t[1])}function _3(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new Mt,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,d){const f=u.morphTargetInfluences;if(e.isWebGL2===!0){const x=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,h=x!==void 0?x.length:0;let p=s.get(c);if(p===void 0||p.count!==h){let $=function(){U.dispose(),s.delete(c),c.removeEventListener("dispose",$)};var v=$;p!==void 0&&p.texture.dispose();const _=c.morphAttributes.position!==void 0,y=c.morphAttributes.normal!==void 0,M=c.morphAttributes.color!==void 0,C=c.morphAttributes.position||[],L=c.morphAttributes.normal||[],S=c.morphAttributes.color||[];let T=0;_===!0&&(T=1),y===!0&&(T=2),M===!0&&(T=3);let R=c.attributes.position.count*T,Z=1;R>e.maxTextureSize&&(Z=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const K=new Float32Array(R*Z*4*h),U=new cv(K,R,Z,h);U.type=cr,U.needsUpdate=!0;const N=T*4;for(let ee=0;ee<h;ee++){const te=C[ee],I=L[ee],j=S[ee],H=R*Z*4*ee;for(let ae=0;ae<te.count;ae++){const A=ae*N;_===!0&&(o.fromBufferAttribute(te,ae),K[H+A+0]=o.x,K[H+A+1]=o.y,K[H+A+2]=o.z,K[H+A+3]=0),y===!0&&(o.fromBufferAttribute(I,ae),K[H+A+4]=o.x,K[H+A+5]=o.y,K[H+A+6]=o.z,K[H+A+7]=0),M===!0&&(o.fromBufferAttribute(j,ae),K[H+A+8]=o.x,K[H+A+9]=o.y,K[H+A+10]=o.z,K[H+A+11]=j.itemSize===4?o.w:1)}}p={count:h,texture:U,size:new Xe(R,Z)},s.set(c,p),c.addEventListener("dispose",$)}let g=0;for(let _=0;_<f.length;_++)g+=f[_];const m=c.morphTargetsRelative?1:1-g;d.getUniforms().setValue(t,"morphTargetBaseInfluence",m),d.getUniforms().setValue(t,"morphTargetInfluences",f),d.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),d.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}else{const x=f===void 0?0:f.length;let h=i[c.id];if(h===void 0||h.length!==x){h=[];for(let y=0;y<x;y++)h[y]=[y,0];i[c.id]=h}for(let y=0;y<x;y++){const M=h[y];M[0]=y,M[1]=f[y]}h.sort(v3);for(let y=0;y<8;y++)y<x&&h[y][1]?(a[y][0]=h[y][0],a[y][1]=h[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(g3);const p=c.morphAttributes.position,g=c.morphAttributes.normal;let m=0;for(let y=0;y<8;y++){const M=a[y],C=M[0],L=M[1];C!==Number.MAX_SAFE_INTEGER&&L?(p&&c.getAttribute("morphTarget"+y)!==p[C]&&c.setAttribute("morphTarget"+y,p[C]),g&&c.getAttribute("morphNormal"+y)!==g[C]&&c.setAttribute("morphNormal"+y,g[C]),r[y]=L,m+=L):(p&&c.hasAttribute("morphTarget"+y)===!0&&c.deleteAttribute("morphTarget"+y),g&&c.hasAttribute("morphNormal"+y)===!0&&c.deleteAttribute("morphNormal"+y),r[y]=0)}const _=c.morphTargetsRelative?1:1-m;d.getUniforms().setValue(t,"morphTargetBaseInfluence",_),d.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function x3(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,d=e.get(l,c);return r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),n.update(l.instanceMatrix,34962),l.instanceColor!==null&&n.update(l.instanceColor,34962)),d}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}const wv=new tn,Mv=new cv,Ev=new sw,bv=new xv,nm=[],im=[],rm=new Float32Array(16),sm=new Float32Array(9),om=new Float32Array(4);function Cs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=nm[r];if(s===void 0&&(s=new Float32Array(r),nm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function gt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function vt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Yl(t,e){let n=im[e];n===void 0&&(n=new Int32Array(e),im[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function y3(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function S3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(gt(n,e))return;t.uniform2fv(this.addr,e),vt(n,e)}}function w3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(gt(n,e))return;t.uniform3fv(this.addr,e),vt(n,e)}}function M3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(gt(n,e))return;t.uniform4fv(this.addr,e),vt(n,e)}}function E3(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(gt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),vt(n,e)}else{if(gt(n,i))return;om.set(i),t.uniformMatrix2fv(this.addr,!1,om),vt(n,i)}}function b3(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(gt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),vt(n,e)}else{if(gt(n,i))return;sm.set(i),t.uniformMatrix3fv(this.addr,!1,sm),vt(n,i)}}function T3(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(gt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),vt(n,e)}else{if(gt(n,i))return;rm.set(i),t.uniformMatrix4fv(this.addr,!1,rm),vt(n,i)}}function C3(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function A3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(gt(n,e))return;t.uniform2iv(this.addr,e),vt(n,e)}}function L3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(gt(n,e))return;t.uniform3iv(this.addr,e),vt(n,e)}}function P3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(gt(n,e))return;t.uniform4iv(this.addr,e),vt(n,e)}}function R3(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function D3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(gt(n,e))return;t.uniform2uiv(this.addr,e),vt(n,e)}}function I3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(gt(n,e))return;t.uniform3uiv(this.addr,e),vt(n,e)}}function k3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(gt(n,e))return;t.uniform4uiv(this.addr,e),vt(n,e)}}function N3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||wv,r)}function z3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Ev,r)}function F3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||bv,r)}function O3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Mv,r)}function U3(t){switch(t){case 5126:return y3;case 35664:return S3;case 35665:return w3;case 35666:return M3;case 35674:return E3;case 35675:return b3;case 35676:return T3;case 5124:case 35670:return C3;case 35667:case 35671:return A3;case 35668:case 35672:return L3;case 35669:case 35673:return P3;case 5125:return R3;case 36294:return D3;case 36295:return I3;case 36296:return k3;case 35678:case 36198:case 36298:case 36306:case 35682:return N3;case 35679:case 36299:case 36307:return z3;case 35680:case 36300:case 36308:case 36293:return F3;case 36289:case 36303:case 36311:case 36292:return O3}}function B3(t,e){t.uniform1fv(this.addr,e)}function G3(t,e){const n=Cs(e,this.size,2);t.uniform2fv(this.addr,n)}function V3(t,e){const n=Cs(e,this.size,3);t.uniform3fv(this.addr,n)}function H3(t,e){const n=Cs(e,this.size,4);t.uniform4fv(this.addr,n)}function W3(t,e){const n=Cs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function j3(t,e){const n=Cs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function $3(t,e){const n=Cs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function q3(t,e){t.uniform1iv(this.addr,e)}function X3(t,e){t.uniform2iv(this.addr,e)}function Y3(t,e){t.uniform3iv(this.addr,e)}function Z3(t,e){t.uniform4iv(this.addr,e)}function K3(t,e){t.uniform1uiv(this.addr,e)}function Q3(t,e){t.uniform2uiv(this.addr,e)}function J3(t,e){t.uniform3uiv(this.addr,e)}function e2(t,e){t.uniform4uiv(this.addr,e)}function t2(t,e,n){const i=this.cache,r=e.length,s=Yl(n,r);gt(i,s)||(t.uniform1iv(this.addr,s),vt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||wv,s[o])}function n2(t,e,n){const i=this.cache,r=e.length,s=Yl(n,r);gt(i,s)||(t.uniform1iv(this.addr,s),vt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Ev,s[o])}function i2(t,e,n){const i=this.cache,r=e.length,s=Yl(n,r);gt(i,s)||(t.uniform1iv(this.addr,s),vt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||bv,s[o])}function r2(t,e,n){const i=this.cache,r=e.length,s=Yl(n,r);gt(i,s)||(t.uniform1iv(this.addr,s),vt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Mv,s[o])}function s2(t){switch(t){case 5126:return B3;case 35664:return G3;case 35665:return V3;case 35666:return H3;case 35674:return W3;case 35675:return j3;case 35676:return $3;case 5124:case 35670:return q3;case 35667:case 35671:return X3;case 35668:case 35672:return Y3;case 35669:case 35673:return Z3;case 5125:return K3;case 36294:return Q3;case 36295:return J3;case 36296:return e2;case 35678:case 36198:case 36298:case 36306:case 35682:return t2;case 35679:case 36299:case 36307:return n2;case 35680:case 36300:case 36308:case 36293:return i2;case 36289:case 36303:case 36311:case 36292:return r2}}class o2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=U3(n.type)}}class a2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=s2(n.type)}}class l2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const oc=/(\w+)(\])?(\[|\.)?/g;function am(t,e){t.seq.push(e),t.map[e.id]=e}function u2(t,e,n){const i=t.name,r=i.length;for(oc.lastIndex=0;;){const s=oc.exec(i),o=oc.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){am(n,u===void 0?new o2(a,t,e):new a2(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new l2(a),am(n,d)),n=d}}}class $a{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);u2(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function lm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let c2=0;function d2(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function f2(t){switch(t){case Sr:return["Linear","( value )"];case Qe:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",t),["Linear","( value )"]}}function um(t,e,n){const i=t.getShaderParameter(e,35713),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+d2(t.getShaderSource(e),o)}else return r}function h2(t,e){const n=f2(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function p2(t,e){let n;switch(e){case ES:n="Linear";break;case bS:n="Reinhard";break;case TS:n="OptimizedCineon";break;case CS:n="ACESFilmic";break;case AS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function m2(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.tangentSpaceNormalMap||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ys).join(`
`)}function g2(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function v2(t,e){const n={},i=t.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Ys(t){return t!==""}function cm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function dm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const _2=/^[ \t]*#include +<([\w\d./]+)>/gm;function vd(t){return t.replace(_2,x2)}function x2(t,e){const n=Re[e];if(n===void 0)throw new Error("Can not resolve #include <"+e+">");return vd(n)}const y2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fm(t){return t.replace(y2,S2)}function S2(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function hm(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function w2(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===ev?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===nS?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Xs&&(e="SHADOWMAP_TYPE_VSM"),e}function M2(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case xs:case ys:e="ENVMAP_TYPE_CUBE";break;case $l:e="ENVMAP_TYPE_CUBE_UV";break}return e}function E2(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case ys:e="ENVMAP_MODE_REFRACTION";break}return e}function b2(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case iv:e="ENVMAP_BLENDING_MULTIPLY";break;case wS:e="ENVMAP_BLENDING_MIX";break;case MS:e="ENVMAP_BLENDING_ADD";break}return e}function T2(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function C2(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=w2(n),u=M2(n),c=E2(n),d=b2(n),f=T2(n),v=n.isWebGL2?"":m2(n),x=g2(s),h=r.createProgram();let p,g,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=[x].filter(Ys).join(`
`),p.length>0&&(p+=`
`),g=[v,x].filter(Ys).join(`
`),g.length>0&&(g+=`
`)):(p=[hm(n),"#define SHADER_NAME "+n.shaderName,x,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.supportsVertexTextures?"#define VERTEX_TEXTURES":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.displacementMap&&n.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",n.specularColorMap?"#define USE_SPECULARCOLORMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEENCOLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ys).join(`
`),g=[v,hm(n),"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",n.specularColorMap?"#define USE_SPECULARCOLORMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEENCOLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==fi?"#define TONE_MAPPING":"",n.toneMapping!==fi?Re.tonemapping_pars_fragment:"",n.toneMapping!==fi?p2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Re.encodings_pars_fragment,h2("linearToOutputTexel",n.outputEncoding),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ys).join(`
`)),o=vd(o),o=cm(o,n),o=dm(o,n),a=vd(a),a=cm(a,n),a=dm(a,n),o=fm(o),a=fm(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",n.glslVersion===Np?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Np?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const _=m+p+o,y=m+g+a,M=lm(r,35633,_),C=lm(r,35632,y);if(r.attachShader(h,M),r.attachShader(h,C),n.index0AttributeName!==void 0?r.bindAttribLocation(h,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(h,0,"position"),r.linkProgram(h),t.debug.checkShaderErrors){const T=r.getProgramInfoLog(h).trim(),R=r.getShaderInfoLog(M).trim(),Z=r.getShaderInfoLog(C).trim();let K=!0,U=!0;if(r.getProgramParameter(h,35714)===!1){K=!1;const N=um(r,M,"vertex"),$=um(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(h,35715)+`

Program Info Log: `+T+`
`+N+`
`+$)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(R===""||Z==="")&&(U=!1);U&&(this.diagnostics={runnable:K,programLog:T,vertexShader:{log:R,prefix:p},fragmentShader:{log:Z,prefix:g}})}r.deleteShader(M),r.deleteShader(C);let L;this.getUniforms=function(){return L===void 0&&(L=new $a(r,h)),L};let S;return this.getAttributes=function(){return S===void 0&&(S=v2(r,h)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(h),this.program=void 0},this.name=n.shaderName,this.id=c2++,this.cacheKey=e,this.usedTimes=1,this.program=h,this.vertexShader=M,this.fragmentShader=C,this}let A2=0;class L2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new P2(e),n.set(e,i)),i}}class P2{constructor(e){this.id=A2++,this.code=e,this.usedTimes=0}}function R2(t,e,n,i,r,s,o){const a=new fv,l=new L2,u=[],c=r.isWebGL2,d=r.logarithmicDepthBuffer,f=r.vertexTextures;let v=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(S,T,R,Z,K){const U=Z.fog,N=K.geometry,$=S.isMeshStandardMaterial?Z.environment:null,ee=(S.isMeshStandardMaterial?n:e).get(S.envMap||$),te=ee&&ee.mapping===$l?ee.image.height:null,I=x[S.type];S.precision!==null&&(v=r.getMaxPrecision(S.precision),v!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",v,"instead."));const j=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,H=j!==void 0?j.length:0;let ae=0;N.morphAttributes.position!==void 0&&(ae=1),N.morphAttributes.normal!==void 0&&(ae=2),N.morphAttributes.color!==void 0&&(ae=3);let A,F,G,D;if(I){const fe=Xn[I];A=fe.vertexShader,F=fe.fragmentShader}else A=S.vertexShader,F=S.fragmentShader,l.update(S),G=l.getVertexShaderID(S),D=l.getFragmentShaderID(S);const P=t.getRenderTarget(),ne=S.alphaTest>0,W=S.clearcoat>0,oe=S.iridescence>0;return{isWebGL2:c,shaderID:I,shaderName:S.type,vertexShader:A,fragmentShader:F,defines:S.defines,customVertexShaderID:G,customFragmentShaderID:D,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:v,instancing:K.isInstancedMesh===!0,instancingColor:K.isInstancedMesh===!0&&K.instanceColor!==null,supportsVertexTextures:f,outputEncoding:P===null?t.outputEncoding:P.isXRRenderTarget===!0?P.texture.encoding:Sr,map:!!S.map,matcap:!!S.matcap,envMap:!!ee,envMapMode:ee&&ee.mapping,envMapCubeUVHeight:te,lightMap:!!S.lightMap,aoMap:!!S.aoMap,emissiveMap:!!S.emissiveMap,bumpMap:!!S.bumpMap,normalMap:!!S.normalMap,objectSpaceNormalMap:S.normalMapType===XS,tangentSpaceNormalMap:S.normalMapType===qS,decodeVideoTexture:!!S.map&&S.map.isVideoTexture===!0&&S.map.encoding===Qe,clearcoat:W,clearcoatMap:W&&!!S.clearcoatMap,clearcoatRoughnessMap:W&&!!S.clearcoatRoughnessMap,clearcoatNormalMap:W&&!!S.clearcoatNormalMap,iridescence:oe,iridescenceMap:oe&&!!S.iridescenceMap,iridescenceThicknessMap:oe&&!!S.iridescenceThicknessMap,displacementMap:!!S.displacementMap,roughnessMap:!!S.roughnessMap,metalnessMap:!!S.metalnessMap,specularMap:!!S.specularMap,specularIntensityMap:!!S.specularIntensityMap,specularColorMap:!!S.specularColorMap,opaque:S.transparent===!1&&S.blending===as,alphaMap:!!S.alphaMap,alphaTest:ne,gradientMap:!!S.gradientMap,sheen:S.sheen>0,sheenColorMap:!!S.sheenColorMap,sheenRoughnessMap:!!S.sheenRoughnessMap,transmission:S.transmission>0,transmissionMap:!!S.transmissionMap,thicknessMap:!!S.thicknessMap,combine:S.combine,vertexTangents:!!S.normalMap&&!!N.attributes.tangent,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUvs:!!S.map||!!S.bumpMap||!!S.normalMap||!!S.specularMap||!!S.alphaMap||!!S.emissiveMap||!!S.roughnessMap||!!S.metalnessMap||!!S.clearcoatMap||!!S.clearcoatRoughnessMap||!!S.clearcoatNormalMap||!!S.iridescenceMap||!!S.iridescenceThicknessMap||!!S.displacementMap||!!S.transmissionMap||!!S.thicknessMap||!!S.specularIntensityMap||!!S.specularColorMap||!!S.sheenColorMap||!!S.sheenRoughnessMap,uvsVertexOnly:!(S.map||S.bumpMap||S.normalMap||S.specularMap||S.alphaMap||S.emissiveMap||S.roughnessMap||S.metalnessMap||S.clearcoatNormalMap||S.iridescenceMap||S.iridescenceThicknessMap||S.transmission>0||S.transmissionMap||S.thicknessMap||S.specularIntensityMap||S.specularColorMap||S.sheen>0||S.sheenColorMap||S.sheenRoughnessMap)&&!!S.displacementMap,fog:!!U,useFog:S.fog===!0,fogExp2:U&&U.isFogExp2,flatShading:!!S.flatShading,sizeAttenuation:S.sizeAttenuation,logarithmicDepthBuffer:d,skinning:K.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:ae,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&R.length>0,shadowMapType:t.shadowMap.type,toneMapping:S.toneMapped?t.toneMapping:fi,useLegacyLights:t.useLegacyLights,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Pi,flipSided:S.side===fn,useDepthPacking:!!S.depthPacking,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:S.extensions&&S.extensions.derivatives,extensionFragDepth:S.extensions&&S.extensions.fragDepth,extensionDrawBuffers:S.extensions&&S.extensions.drawBuffers,extensionShaderTextureLOD:S.extensions&&S.extensions.shaderTextureLOD,rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function p(S){const T=[];if(S.shaderID?T.push(S.shaderID):(T.push(S.customVertexShaderID),T.push(S.customFragmentShaderID)),S.defines!==void 0)for(const R in S.defines)T.push(R),T.push(S.defines[R]);return S.isRawShaderMaterial===!1&&(g(T,S),m(T,S),T.push(t.outputEncoding)),T.push(S.customProgramCacheKey),T.join()}function g(S,T){S.push(T.precision),S.push(T.outputEncoding),S.push(T.envMapMode),S.push(T.envMapCubeUVHeight),S.push(T.combine),S.push(T.vertexUvs),S.push(T.fogExp2),S.push(T.sizeAttenuation),S.push(T.morphTargetsCount),S.push(T.morphAttributeCount),S.push(T.numDirLights),S.push(T.numPointLights),S.push(T.numSpotLights),S.push(T.numSpotLightMaps),S.push(T.numHemiLights),S.push(T.numRectAreaLights),S.push(T.numDirLightShadows),S.push(T.numPointLightShadows),S.push(T.numSpotLightShadows),S.push(T.numSpotLightShadowsWithMaps),S.push(T.shadowMapType),S.push(T.toneMapping),S.push(T.numClippingPlanes),S.push(T.numClipIntersection),S.push(T.depthPacking)}function m(S,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.map&&a.enable(4),T.matcap&&a.enable(5),T.envMap&&a.enable(6),T.lightMap&&a.enable(7),T.aoMap&&a.enable(8),T.emissiveMap&&a.enable(9),T.bumpMap&&a.enable(10),T.normalMap&&a.enable(11),T.objectSpaceNormalMap&&a.enable(12),T.tangentSpaceNormalMap&&a.enable(13),T.clearcoat&&a.enable(14),T.clearcoatMap&&a.enable(15),T.clearcoatRoughnessMap&&a.enable(16),T.clearcoatNormalMap&&a.enable(17),T.iridescence&&a.enable(18),T.iridescenceMap&&a.enable(19),T.iridescenceThicknessMap&&a.enable(20),T.displacementMap&&a.enable(21),T.specularMap&&a.enable(22),T.roughnessMap&&a.enable(23),T.metalnessMap&&a.enable(24),T.gradientMap&&a.enable(25),T.alphaMap&&a.enable(26),T.alphaTest&&a.enable(27),T.vertexColors&&a.enable(28),T.vertexAlphas&&a.enable(29),T.vertexUvs&&a.enable(30),T.vertexTangents&&a.enable(31),T.uvsVertexOnly&&a.enable(32),S.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.specularIntensityMap&&a.enable(15),T.specularColorMap&&a.enable(16),T.transmission&&a.enable(17),T.transmissionMap&&a.enable(18),T.thicknessMap&&a.enable(19),T.sheen&&a.enable(20),T.sheenColorMap&&a.enable(21),T.sheenRoughnessMap&&a.enable(22),T.decodeVideoTexture&&a.enable(23),T.opaque&&a.enable(24),S.push(a.mask)}function _(S){const T=x[S.type];let R;if(T){const Z=Xn[T];R=vw.clone(Z.uniforms)}else R=S.uniforms;return R}function y(S,T){let R;for(let Z=0,K=u.length;Z<K;Z++){const U=u[Z];if(U.cacheKey===T){R=U,++R.usedTimes;break}}return R===void 0&&(R=new C2(t,T,S,s),u.push(R)),R}function M(S){if(--S.usedTimes===0){const T=u.indexOf(S);u[T]=u[u.length-1],u.pop(),S.destroy()}}function C(S){l.remove(S)}function L(){l.dispose()}return{getParameters:h,getProgramCacheKey:p,getUniforms:_,acquireProgram:y,releaseProgram:M,releaseShaderCache:C,programs:u,dispose:L}}function D2(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function I2(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function pm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function mm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,f,v,x,h,p){let g=t[e];return g===void 0?(g={id:d.id,object:d,geometry:f,material:v,groupOrder:x,renderOrder:d.renderOrder,z:h,group:p},t[e]=g):(g.id=d.id,g.object=d,g.geometry=f,g.material=v,g.groupOrder=x,g.renderOrder=d.renderOrder,g.z=h,g.group=p),e++,g}function a(d,f,v,x,h,p){const g=o(d,f,v,x,h,p);v.transmission>0?i.push(g):v.transparent===!0?r.push(g):n.push(g)}function l(d,f,v,x,h,p){const g=o(d,f,v,x,h,p);v.transmission>0?i.unshift(g):v.transparent===!0?r.unshift(g):n.unshift(g)}function u(d,f){n.length>1&&n.sort(d||I2),i.length>1&&i.sort(f||pm),r.length>1&&r.sort(f||pm)}function c(){for(let d=e,f=t.length;d<f;d++){const v=t[d];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function k2(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new mm,t.set(i,[o])):r>=s.length?(o=new mm,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function N2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new V,color:new qe};break;case"SpotLight":n={position:new V,direction:new V,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new V,color:new qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new V,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":n={color:new qe,position:new V,halfWidth:new V,halfHeight:new V};break}return t[e.id]=n,n}}}function z2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let F2=0;function O2(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function U2(t,e){const n=new N2,i=z2(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let c=0;c<9;c++)r.probe.push(new V);const s=new V,o=new ht,a=new ht;function l(c,d){let f=0,v=0,x=0;for(let Z=0;Z<9;Z++)r.probe[Z].set(0,0,0);let h=0,p=0,g=0,m=0,_=0,y=0,M=0,C=0,L=0,S=0;c.sort(O2);const T=d===!0?Math.PI:1;for(let Z=0,K=c.length;Z<K;Z++){const U=c[Z],N=U.color,$=U.intensity,ee=U.distance,te=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)f+=N.r*$*T,v+=N.g*$*T,x+=N.b*$*T;else if(U.isLightProbe)for(let I=0;I<9;I++)r.probe[I].addScaledVector(U.sh.coefficients[I],$);else if(U.isDirectionalLight){const I=n.get(U);if(I.color.copy(U.color).multiplyScalar(U.intensity*T),U.castShadow){const j=U.shadow,H=i.get(U);H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,r.directionalShadow[h]=H,r.directionalShadowMap[h]=te,r.directionalShadowMatrix[h]=U.shadow.matrix,y++}r.directional[h]=I,h++}else if(U.isSpotLight){const I=n.get(U);I.position.setFromMatrixPosition(U.matrixWorld),I.color.copy(N).multiplyScalar($*T),I.distance=ee,I.coneCos=Math.cos(U.angle),I.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),I.decay=U.decay,r.spot[g]=I;const j=U.shadow;if(U.map&&(r.spotLightMap[L]=U.map,L++,j.updateMatrices(U),U.castShadow&&S++),r.spotLightMatrix[g]=j.matrix,U.castShadow){const H=i.get(U);H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,r.spotShadow[g]=H,r.spotShadowMap[g]=te,C++}g++}else if(U.isRectAreaLight){const I=n.get(U);I.color.copy(N).multiplyScalar($),I.halfWidth.set(U.width*.5,0,0),I.halfHeight.set(0,U.height*.5,0),r.rectArea[m]=I,m++}else if(U.isPointLight){const I=n.get(U);if(I.color.copy(U.color).multiplyScalar(U.intensity*T),I.distance=U.distance,I.decay=U.decay,U.castShadow){const j=U.shadow,H=i.get(U);H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,H.shadowCameraNear=j.camera.near,H.shadowCameraFar=j.camera.far,r.pointShadow[p]=H,r.pointShadowMap[p]=te,r.pointShadowMatrix[p]=U.shadow.matrix,M++}r.point[p]=I,p++}else if(U.isHemisphereLight){const I=n.get(U);I.skyColor.copy(U.color).multiplyScalar($*T),I.groundColor.copy(U.groundColor).multiplyScalar($*T),r.hemi[_]=I,_++}}m>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ce.LTC_FLOAT_1,r.rectAreaLTC2=ce.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ce.LTC_HALF_1,r.rectAreaLTC2=ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=v,r.ambient[2]=x;const R=r.hash;(R.directionalLength!==h||R.pointLength!==p||R.spotLength!==g||R.rectAreaLength!==m||R.hemiLength!==_||R.numDirectionalShadows!==y||R.numPointShadows!==M||R.numSpotShadows!==C||R.numSpotMaps!==L)&&(r.directional.length=h,r.spot.length=g,r.rectArea.length=m,r.point.length=p,r.hemi.length=_,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=M,r.pointShadowMap.length=M,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=M,r.spotLightMatrix.length=C+L-S,r.spotLightMap.length=L,r.numSpotLightShadowsWithMaps=S,R.directionalLength=h,R.pointLength=p,R.spotLength=g,R.rectAreaLength=m,R.hemiLength=_,R.numDirectionalShadows=y,R.numPointShadows=M,R.numSpotShadows=C,R.numSpotMaps=L,r.version=F2++)}function u(c,d){let f=0,v=0,x=0,h=0,p=0;const g=d.matrixWorldInverse;for(let m=0,_=c.length;m<_;m++){const y=c[m];if(y.isDirectionalLight){const M=r.directional[f];M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),f++}else if(y.isSpotLight){const M=r.spot[x];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),x++}else if(y.isRectAreaLight){const M=r.rectArea[h];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),a.identity(),o.copy(y.matrixWorld),o.premultiply(g),a.extractRotation(o),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),h++}else if(y.isPointLight){const M=r.point[v];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),v++}else if(y.isHemisphereLight){const M=r.hemi[p];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(g),p++}}}return{setup:l,setupView:u,state:r}}function gm(t,e){const n=new U2(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function l(d){n.setup(i,d)}function u(d){n.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function B2(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new gm(t,e),n.set(s,[l])):o>=a.length?(l=new gm(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class G2 extends Bo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class V2 extends Bo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new V,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const H2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,W2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function j2(t,e,n){let i=new bf;const r=new Xe,s=new Xe,o=new Mt,a=new G2({depthPacking:$S}),l=new V2,u={},c=n.maxTextureSize,d={[ji]:fn,[fn]:ji,[Pi]:Pi},f=new Mr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:H2,fragmentShader:W2}),v=f.clone();v.defines.HORIZONTAL_PASS=1;const x=new Qn;x.setAttribute("position",new bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const h=new Di(x,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ev,this.render=function(y,M,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||y.length===0)return;const L=t.getRenderTarget(),S=t.getActiveCubeFace(),T=t.getActiveMipmapLevel(),R=t.state;R.setBlending(Vi),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);for(let Z=0,K=y.length;Z<K;Z++){const U=y[Z],N=U.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",U,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const $=N.getFrameExtents();if(r.multiply($),s.copy(N.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/$.x),r.x=s.x*$.x,N.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/$.y),r.y=s.y*$.y,N.mapSize.y=s.y)),N.map===null){const te=this.type!==Xs?{minFilter:Ht,magFilter:Ht}:{};N.map=new wr(r.x,r.y,te),N.map.texture.name=U.name+".shadowMap",N.camera.updateProjectionMatrix()}t.setRenderTarget(N.map),t.clear();const ee=N.getViewportCount();for(let te=0;te<ee;te++){const I=N.getViewport(te);o.set(s.x*I.x,s.y*I.y,s.x*I.z,s.y*I.w),R.viewport(o),N.updateMatrices(U,te),i=N.getFrustum(),_(M,C,N.camera,U,this.type)}N.isPointLightShadow!==!0&&this.type===Xs&&g(N,C),N.needsUpdate=!1}p.needsUpdate=!1,t.setRenderTarget(L,S,T)};function g(y,M){const C=e.update(h);f.defines.VSM_SAMPLES!==y.blurSamples&&(f.defines.VSM_SAMPLES=y.blurSamples,v.defines.VSM_SAMPLES=y.blurSamples,f.needsUpdate=!0,v.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new wr(r.x,r.y)),f.uniforms.shadow_pass.value=y.map.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,t.setRenderTarget(y.mapPass),t.clear(),t.renderBufferDirect(M,null,C,f,h,null),v.uniforms.shadow_pass.value=y.mapPass.texture,v.uniforms.resolution.value=y.mapSize,v.uniforms.radius.value=y.radius,t.setRenderTarget(y.map),t.clear(),t.renderBufferDirect(M,null,C,v,h,null)}function m(y,M,C,L,S,T){let R=null;const Z=C.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(Z!==void 0)R=Z;else if(R=C.isPointLight===!0?l:a,t.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const K=R.uuid,U=M.uuid;let N=u[K];N===void 0&&(N={},u[K]=N);let $=N[U];$===void 0&&($=R.clone(),N[U]=$),R=$}return R.visible=M.visible,R.wireframe=M.wireframe,T===Xs?R.side=M.shadowSide!==null?M.shadowSide:M.side:R.side=M.shadowSide!==null?M.shadowSide:d[M.side],R.alphaMap=M.alphaMap,R.alphaTest=M.alphaTest,R.map=M.map,R.clipShadows=M.clipShadows,R.clippingPlanes=M.clippingPlanes,R.clipIntersection=M.clipIntersection,R.displacementMap=M.displacementMap,R.displacementScale=M.displacementScale,R.displacementBias=M.displacementBias,R.wireframeLinewidth=M.wireframeLinewidth,R.linewidth=M.linewidth,C.isPointLight===!0&&R.isMeshDistanceMaterial===!0&&(R.referencePosition.setFromMatrixPosition(C.matrixWorld),R.nearDistance=L,R.farDistance=S),R}function _(y,M,C,L,S){if(y.visible===!1)return;if(y.layers.test(M.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&S===Xs)&&(!y.frustumCulled||i.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,y.matrixWorld);const Z=e.update(y),K=y.material;if(Array.isArray(K)){const U=Z.groups;for(let N=0,$=U.length;N<$;N++){const ee=U[N],te=K[ee.materialIndex];if(te&&te.visible){const I=m(y,te,L,C.near,C.far,S);t.renderBufferDirect(C,null,Z,I,y,ee)}}}else if(K.visible){const U=m(y,K,L,C.near,C.far,S);t.renderBufferDirect(C,null,Z,U,y,null)}}const R=y.children;for(let Z=0,K=R.length;Z<K;Z++)_(R[Z],M,C,L,S)}}function $2(t,e,n){const i=n.isWebGL2;function r(){let k=!1;const X=new Mt;let re=null;const he=new Mt(0,0,0,0);return{setMask:function(ve){re!==ve&&!k&&(t.colorMask(ve,ve,ve,ve),re=ve)},setLocked:function(ve){k=ve},setClear:function(ve,Ze,xt,Ot,Gn){Gn===!0&&(ve*=Ot,Ze*=Ot,xt*=Ot),X.set(ve,Ze,xt,Ot),he.equals(X)===!1&&(t.clearColor(ve,Ze,xt,Ot),he.copy(X))},reset:function(){k=!1,re=null,he.set(-1,0,0,0)}}}function s(){let k=!1,X=null,re=null,he=null;return{setTest:function(ve){ve?ne(2929):W(2929)},setMask:function(ve){X!==ve&&!k&&(t.depthMask(ve),X=ve)},setFunc:function(ve){if(re!==ve){switch(ve){case mS:t.depthFunc(512);break;case gS:t.depthFunc(519);break;case vS:t.depthFunc(513);break;case dd:t.depthFunc(515);break;case _S:t.depthFunc(514);break;case xS:t.depthFunc(518);break;case yS:t.depthFunc(516);break;case SS:t.depthFunc(517);break;default:t.depthFunc(515)}re=ve}},setLocked:function(ve){k=ve},setClear:function(ve){he!==ve&&(t.clearDepth(ve),he=ve)},reset:function(){k=!1,X=null,re=null,he=null}}}function o(){let k=!1,X=null,re=null,he=null,ve=null,Ze=null,xt=null,Ot=null,Gn=null;return{setTest:function(ot){k||(ot?ne(2960):W(2960))},setMask:function(ot){X!==ot&&!k&&(t.stencilMask(ot),X=ot)},setFunc:function(ot,vn,Vn){(re!==ot||he!==vn||ve!==Vn)&&(t.stencilFunc(ot,vn,Vn),re=ot,he=vn,ve=Vn)},setOp:function(ot,vn,Vn){(Ze!==ot||xt!==vn||Ot!==Vn)&&(t.stencilOp(ot,vn,Vn),Ze=ot,xt=vn,Ot=Vn)},setLocked:function(ot){k=ot},setClear:function(ot){Gn!==ot&&(t.clearStencil(ot),Gn=ot)},reset:function(){k=!1,X=null,re=null,he=null,ve=null,Ze=null,xt=null,Ot=null,Gn=null}}}const a=new r,l=new s,u=new o,c=new WeakMap,d=new WeakMap;let f={},v={},x=new WeakMap,h=[],p=null,g=!1,m=null,_=null,y=null,M=null,C=null,L=null,S=null,T=!1,R=null,Z=null,K=null,U=null,N=null;const $=t.getParameter(35661);let ee=!1,te=0;const I=t.getParameter(7938);I.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(I)[1]),ee=te>=1):I.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),ee=te>=2);let j=null,H={};const ae=t.getParameter(3088),A=t.getParameter(2978),F=new Mt().fromArray(ae),G=new Mt().fromArray(A);function D(k,X,re){const he=new Uint8Array(4),ve=t.createTexture();t.bindTexture(k,ve),t.texParameteri(k,10241,9728),t.texParameteri(k,10240,9728);for(let Ze=0;Ze<re;Ze++)t.texImage2D(X+Ze,0,6408,1,1,0,6408,5121,he);return ve}const P={};P[3553]=D(3553,3553,1),P[34067]=D(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),ne(2929),l.setFunc(dd),Ge(!1),be(rp),ne(2884),Ve(Vi);function ne(k){f[k]!==!0&&(t.enable(k),f[k]=!0)}function W(k){f[k]!==!1&&(t.disable(k),f[k]=!1)}function oe(k,X){return v[k]!==X?(t.bindFramebuffer(k,X),v[k]=X,i&&(k===36009&&(v[36160]=X),k===36160&&(v[36009]=X)),!0):!1}function le(k,X){let re=h,he=!1;if(k)if(re=x.get(X),re===void 0&&(re=[],x.set(X,re)),k.isWebGLMultipleRenderTargets){const ve=k.texture;if(re.length!==ve.length||re[0]!==36064){for(let Ze=0,xt=ve.length;Ze<xt;Ze++)re[Ze]=36064+Ze;re.length=ve.length,he=!0}}else re[0]!==36064&&(re[0]=36064,he=!0);else re[0]!==1029&&(re[0]=1029,he=!0);he&&(n.isWebGL2?t.drawBuffers(re):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(re))}function fe(k){return p!==k?(t.useProgram(k),p=k,!0):!1}const ue={[Br]:32774,[rS]:32778,[sS]:32779};if(i)ue[lp]=32775,ue[up]=32776;else{const k=e.get("EXT_blend_minmax");k!==null&&(ue[lp]=k.MIN_EXT,ue[up]=k.MAX_EXT)}const we={[oS]:0,[aS]:1,[lS]:768,[tv]:770,[pS]:776,[fS]:774,[cS]:772,[uS]:769,[nv]:771,[hS]:775,[dS]:773};function Ve(k,X,re,he,ve,Ze,xt,Ot){if(k===Vi){g===!0&&(W(3042),g=!1);return}if(g===!1&&(ne(3042),g=!0),k!==iS){if(k!==m||Ot!==T){if((_!==Br||C!==Br)&&(t.blendEquation(32774),_=Br,C=Br),Ot)switch(k){case as:t.blendFuncSeparate(1,771,1,771);break;case sp:t.blendFunc(1,1);break;case op:t.blendFuncSeparate(0,769,0,1);break;case ap:t.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case as:t.blendFuncSeparate(770,771,1,771);break;case sp:t.blendFunc(770,1);break;case op:t.blendFuncSeparate(0,769,0,1);break;case ap:t.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}y=null,M=null,L=null,S=null,m=k,T=Ot}return}ve=ve||X,Ze=Ze||re,xt=xt||he,(X!==_||ve!==C)&&(t.blendEquationSeparate(ue[X],ue[ve]),_=X,C=ve),(re!==y||he!==M||Ze!==L||xt!==S)&&(t.blendFuncSeparate(we[re],we[he],we[Ze],we[xt]),y=re,M=he,L=Ze,S=xt),m=k,T=!1}function Ae(k,X){k.side===Pi?W(2884):ne(2884);let re=k.side===fn;X&&(re=!re),Ge(re),k.blending===as&&k.transparent===!1?Ve(Vi):Ve(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.premultipliedAlpha),l.setFunc(k.depthFunc),l.setTest(k.depthTest),l.setMask(k.depthWrite),a.setMask(k.colorWrite);const he=k.stencilWrite;u.setTest(he),he&&(u.setMask(k.stencilWriteMask),u.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),u.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),He(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ne(32926):W(32926)}function Ge(k){R!==k&&(k?t.frontFace(2304):t.frontFace(2305),R=k)}function be(k){k!==eS?(ne(2884),k!==Z&&(k===rp?t.cullFace(1029):k===tS?t.cullFace(1028):t.cullFace(1032))):W(2884),Z=k}function Pe(k){k!==K&&(ee&&t.lineWidth(k),K=k)}function He(k,X,re){k?(ne(32823),(U!==X||N!==re)&&(t.polygonOffset(X,re),U=X,N=re)):W(32823)}function $e(k){k?ne(3089):W(3089)}function Rt(k){k===void 0&&(k=33984+$-1),j!==k&&(t.activeTexture(k),j=k)}function b(k,X,re){re===void 0&&(j===null?re=33984+$-1:re=j);let he=H[re];he===void 0&&(he={type:void 0,texture:void 0},H[re]=he),(he.type!==k||he.texture!==X)&&(j!==re&&(t.activeTexture(re),j=re),t.bindTexture(k,X||P[k]),he.type=k,he.texture=X)}function w(){const k=H[j];k!==void 0&&k.type!==void 0&&(t.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function z(){try{t.compressedTexImage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function J(){try{t.compressedTexImage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function se(){try{t.texSubImage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function de(){try{t.texSubImage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ge(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function me(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Q(){try{t.texStorage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ee(){try{t.texStorage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function _e(){try{t.texImage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Te(){try{t.texImage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Me(k){F.equals(k)===!1&&(t.scissor(k.x,k.y,k.z,k.w),F.copy(k))}function xe(k){G.equals(k)===!1&&(t.viewport(k.x,k.y,k.z,k.w),G.copy(k))}function Ue(k,X){let re=d.get(X);re===void 0&&(re=new WeakMap,d.set(X,re));let he=re.get(k);he===void 0&&(he=t.getUniformBlockIndex(X,k.name),re.set(k,he))}function tt(k,X){const he=d.get(X).get(k);c.get(X)!==he&&(t.uniformBlockBinding(X,he,k.__bindingPointIndex),c.set(X,he))}function _t(){t.disable(3042),t.disable(2884),t.disable(2929),t.disable(32823),t.disable(3089),t.disable(2960),t.disable(32926),t.blendEquation(32774),t.blendFunc(1,0),t.blendFuncSeparate(1,0,1,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(513),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(519,0,4294967295),t.stencilOp(7680,7680,7680),t.clearStencil(0),t.cullFace(1029),t.frontFace(2305),t.polygonOffset(0,0),t.activeTexture(33984),t.bindFramebuffer(36160,null),i===!0&&(t.bindFramebuffer(36009,null),t.bindFramebuffer(36008,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),f={},j=null,H={},v={},x=new WeakMap,h=[],p=null,g=!1,m=null,_=null,y=null,M=null,C=null,L=null,S=null,T=!1,R=null,Z=null,K=null,U=null,N=null,F.set(0,0,t.canvas.width,t.canvas.height),G.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:ne,disable:W,bindFramebuffer:oe,drawBuffers:le,useProgram:fe,setBlending:Ve,setMaterial:Ae,setFlipSided:Ge,setCullFace:be,setLineWidth:Pe,setPolygonOffset:He,setScissorTest:$e,activeTexture:Rt,bindTexture:b,unbindTexture:w,compressedTexImage2D:z,compressedTexImage3D:J,texImage2D:_e,texImage3D:Te,updateUBOMapping:Ue,uniformBlockBinding:tt,texStorage2D:Q,texStorage3D:Ee,texSubImage2D:se,texSubImage3D:de,compressedTexSubImage2D:ge,compressedTexSubImage3D:me,scissor:Me,viewport:xe,reset:_t}}function q2(t,e,n,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,c=r.maxTextureSize,d=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,v=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap;let h;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(b,w){return g?new OffscreenCanvas(b,w):Po("canvas")}function _(b,w,z,J){let se=1;if((b.width>J||b.height>J)&&(se=J/Math.max(b.width,b.height)),se<1||w===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const de=w?KS:Math.floor,ge=de(se*b.width),me=de(se*b.height);h===void 0&&(h=m(ge,me));const Q=z?m(ge,me):h;return Q.width=ge,Q.height=me,Q.getContext("2d").drawImage(b,0,0,ge,me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+ge+"x"+me+")."),Q}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function y(b){return Fp(b.width)&&Fp(b.height)}function M(b){return a?!1:b.wrapS!==zn||b.wrapT!==zn||b.minFilter!==Ht&&b.minFilter!==Sn}function C(b,w){return b.generateMipmaps&&w&&b.minFilter!==Ht&&b.minFilter!==Sn}function L(b){t.generateMipmap(b)}function S(b,w,z,J,se=!1){if(a===!1)return w;if(b!==null){if(t[b]!==void 0)return t[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let de=w;return w===6403&&(z===5126&&(de=33326),z===5131&&(de=33325),z===5121&&(de=33321)),w===33319&&(z===5126&&(de=33328),z===5131&&(de=33327),z===5121&&(de=33323)),w===6408&&(z===5126&&(de=34836),z===5131&&(de=34842),z===5121&&(de=J===Qe&&se===!1?35907:32856),z===32819&&(de=32854),z===32820&&(de=32855)),(de===33325||de===33326||de===33327||de===33328||de===34842||de===34836)&&e.get("EXT_color_buffer_float"),de}function T(b,w,z){return C(b,z)===!0||b.isFramebufferTexture&&b.minFilter!==Ht&&b.minFilter!==Sn?Math.log2(Math.max(w.width,w.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?w.mipmaps.length:1}function R(b){return b===Ht||b===cp||b===Pu?9728:9729}function Z(b){const w=b.target;w.removeEventListener("dispose",Z),U(w),w.isVideoTexture&&x.delete(w)}function K(b){const w=b.target;w.removeEventListener("dispose",K),$(w)}function U(b){const w=i.get(b);if(w.__webglInit===void 0)return;const z=b.source,J=p.get(z);if(J){const se=J[w.__cacheKey];se.usedTimes--,se.usedTimes===0&&N(b),Object.keys(J).length===0&&p.delete(z)}i.remove(b)}function N(b){const w=i.get(b);t.deleteTexture(w.__webglTexture);const z=b.source,J=p.get(z);delete J[w.__cacheKey],o.memory.textures--}function $(b){const w=b.texture,z=i.get(b),J=i.get(w);if(J.__webglTexture!==void 0&&(t.deleteTexture(J.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let se=0;se<6;se++)t.deleteFramebuffer(z.__webglFramebuffer[se]),z.__webglDepthbuffer&&t.deleteRenderbuffer(z.__webglDepthbuffer[se]);else{if(t.deleteFramebuffer(z.__webglFramebuffer),z.__webglDepthbuffer&&t.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&t.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let se=0;se<z.__webglColorRenderbuffer.length;se++)z.__webglColorRenderbuffer[se]&&t.deleteRenderbuffer(z.__webglColorRenderbuffer[se]);z.__webglDepthRenderbuffer&&t.deleteRenderbuffer(z.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let se=0,de=w.length;se<de;se++){const ge=i.get(w[se]);ge.__webglTexture&&(t.deleteTexture(ge.__webglTexture),o.memory.textures--),i.remove(w[se])}i.remove(w),i.remove(b)}let ee=0;function te(){ee=0}function I(){const b=ee;return b>=l&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+l),ee+=1,b}function j(b){const w=[];return w.push(b.wrapS),w.push(b.wrapT),w.push(b.wrapR||0),w.push(b.magFilter),w.push(b.minFilter),w.push(b.anisotropy),w.push(b.internalFormat),w.push(b.format),w.push(b.type),w.push(b.generateMipmaps),w.push(b.premultiplyAlpha),w.push(b.flipY),w.push(b.unpackAlignment),w.push(b.encoding),w.join()}function H(b,w){const z=i.get(b);if(b.isVideoTexture&&$e(b),b.isRenderTargetTexture===!1&&b.version>0&&z.__version!==b.version){const J=b.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(z,b,w);return}}n.bindTexture(3553,z.__webglTexture,33984+w)}function ae(b,w){const z=i.get(b);if(b.version>0&&z.__version!==b.version){W(z,b,w);return}n.bindTexture(35866,z.__webglTexture,33984+w)}function A(b,w){const z=i.get(b);if(b.version>0&&z.__version!==b.version){W(z,b,w);return}n.bindTexture(32879,z.__webglTexture,33984+w)}function F(b,w){const z=i.get(b);if(b.version>0&&z.__version!==b.version){oe(z,b,w);return}n.bindTexture(34067,z.__webglTexture,33984+w)}const G={[pd]:10497,[zn]:33071,[md]:33648},D={[Ht]:9728,[cp]:9984,[Pu]:9986,[Sn]:9729,[LS]:9985,[Co]:9987};function P(b,w,z){if(z?(t.texParameteri(b,10242,G[w.wrapS]),t.texParameteri(b,10243,G[w.wrapT]),(b===32879||b===35866)&&t.texParameteri(b,32882,G[w.wrapR]),t.texParameteri(b,10240,D[w.magFilter]),t.texParameteri(b,10241,D[w.minFilter])):(t.texParameteri(b,10242,33071),t.texParameteri(b,10243,33071),(b===32879||b===35866)&&t.texParameteri(b,32882,33071),(w.wrapS!==zn||w.wrapT!==zn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(b,10240,R(w.magFilter)),t.texParameteri(b,10241,R(w.minFilter)),w.minFilter!==Ht&&w.minFilter!==Sn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const J=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===Ht||w.minFilter!==Pu&&w.minFilter!==Co||w.type===cr&&e.has("OES_texture_float_linear")===!1||a===!1&&w.type===Ao&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||i.get(w).__currentAnisotropy)&&(t.texParameterf(b,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy)}}function ne(b,w){let z=!1;b.__webglInit===void 0&&(b.__webglInit=!0,w.addEventListener("dispose",Z));const J=w.source;let se=p.get(J);se===void 0&&(se={},p.set(J,se));const de=j(w);if(de!==b.__cacheKey){se[de]===void 0&&(se[de]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,z=!0),se[de].usedTimes++;const ge=se[b.__cacheKey];ge!==void 0&&(se[b.__cacheKey].usedTimes--,ge.usedTimes===0&&N(w)),b.__cacheKey=de,b.__webglTexture=se[de].texture}return z}function W(b,w,z){let J=3553;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(J=35866),w.isData3DTexture&&(J=32879);const se=ne(b,w),de=w.source;n.bindTexture(J,b.__webglTexture,33984+z);const ge=i.get(de);if(de.version!==ge.__version||se===!0){n.activeTexture(33984+z),t.pixelStorei(37440,w.flipY),t.pixelStorei(37441,w.premultiplyAlpha),t.pixelStorei(3317,w.unpackAlignment),t.pixelStorei(37443,0);const me=M(w)&&y(w.image)===!1;let Q=_(w.image,me,!1,c);Q=Rt(w,Q);const Ee=y(Q)||a,_e=s.convert(w.format,w.encoding);let Te=s.convert(w.type),Me=S(w.internalFormat,_e,Te,w.encoding,w.isVideoTexture);P(J,w,Ee);let xe;const Ue=w.mipmaps,tt=a&&w.isVideoTexture!==!0,_t=ge.__version===void 0||se===!0,k=T(w,Q,Ee);if(w.isDepthTexture)Me=6402,a?w.type===cr?Me=36012:w.type===ur?Me=33190:w.type===ls?Me=35056:Me=33189:w.type===cr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===hr&&Me===6402&&w.type!==sv&&w.type!==ur&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=ur,Te=s.convert(w.type)),w.format===Ss&&Me===6402&&(Me=34041,w.type!==ls&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=ls,Te=s.convert(w.type))),_t&&(tt?n.texStorage2D(3553,1,Me,Q.width,Q.height):n.texImage2D(3553,0,Me,Q.width,Q.height,0,_e,Te,null));else if(w.isDataTexture)if(Ue.length>0&&Ee){tt&&_t&&n.texStorage2D(3553,k,Me,Ue[0].width,Ue[0].height);for(let X=0,re=Ue.length;X<re;X++)xe=Ue[X],tt?n.texSubImage2D(3553,X,0,0,xe.width,xe.height,_e,Te,xe.data):n.texImage2D(3553,X,Me,xe.width,xe.height,0,_e,Te,xe.data);w.generateMipmaps=!1}else tt?(_t&&n.texStorage2D(3553,k,Me,Q.width,Q.height),n.texSubImage2D(3553,0,0,0,Q.width,Q.height,_e,Te,Q.data)):n.texImage2D(3553,0,Me,Q.width,Q.height,0,_e,Te,Q.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){tt&&_t&&n.texStorage3D(35866,k,Me,Ue[0].width,Ue[0].height,Q.depth);for(let X=0,re=Ue.length;X<re;X++)xe=Ue[X],w.format!==Fn?_e!==null?tt?n.compressedTexSubImage3D(35866,X,0,0,0,xe.width,xe.height,Q.depth,_e,xe.data,0,0):n.compressedTexImage3D(35866,X,Me,xe.width,xe.height,Q.depth,0,xe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?n.texSubImage3D(35866,X,0,0,0,xe.width,xe.height,Q.depth,_e,Te,xe.data):n.texImage3D(35866,X,Me,xe.width,xe.height,Q.depth,0,_e,Te,xe.data)}else{tt&&_t&&n.texStorage2D(3553,k,Me,Ue[0].width,Ue[0].height);for(let X=0,re=Ue.length;X<re;X++)xe=Ue[X],w.format!==Fn?_e!==null?tt?n.compressedTexSubImage2D(3553,X,0,0,xe.width,xe.height,_e,xe.data):n.compressedTexImage2D(3553,X,Me,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?n.texSubImage2D(3553,X,0,0,xe.width,xe.height,_e,Te,xe.data):n.texImage2D(3553,X,Me,xe.width,xe.height,0,_e,Te,xe.data)}else if(w.isDataArrayTexture)tt?(_t&&n.texStorage3D(35866,k,Me,Q.width,Q.height,Q.depth),n.texSubImage3D(35866,0,0,0,0,Q.width,Q.height,Q.depth,_e,Te,Q.data)):n.texImage3D(35866,0,Me,Q.width,Q.height,Q.depth,0,_e,Te,Q.data);else if(w.isData3DTexture)tt?(_t&&n.texStorage3D(32879,k,Me,Q.width,Q.height,Q.depth),n.texSubImage3D(32879,0,0,0,0,Q.width,Q.height,Q.depth,_e,Te,Q.data)):n.texImage3D(32879,0,Me,Q.width,Q.height,Q.depth,0,_e,Te,Q.data);else if(w.isFramebufferTexture){if(_t)if(tt)n.texStorage2D(3553,k,Me,Q.width,Q.height);else{let X=Q.width,re=Q.height;for(let he=0;he<k;he++)n.texImage2D(3553,he,Me,X,re,0,_e,Te,null),X>>=1,re>>=1}}else if(Ue.length>0&&Ee){tt&&_t&&n.texStorage2D(3553,k,Me,Ue[0].width,Ue[0].height);for(let X=0,re=Ue.length;X<re;X++)xe=Ue[X],tt?n.texSubImage2D(3553,X,0,0,_e,Te,xe):n.texImage2D(3553,X,Me,_e,Te,xe);w.generateMipmaps=!1}else tt?(_t&&n.texStorage2D(3553,k,Me,Q.width,Q.height),n.texSubImage2D(3553,0,0,0,_e,Te,Q)):n.texImage2D(3553,0,Me,_e,Te,Q);C(w,Ee)&&L(J),ge.__version=de.version,w.onUpdate&&w.onUpdate(w)}b.__version=w.version}function oe(b,w,z){if(w.image.length!==6)return;const J=ne(b,w),se=w.source;n.bindTexture(34067,b.__webglTexture,33984+z);const de=i.get(se);if(se.version!==de.__version||J===!0){n.activeTexture(33984+z),t.pixelStorei(37440,w.flipY),t.pixelStorei(37441,w.premultiplyAlpha),t.pixelStorei(3317,w.unpackAlignment),t.pixelStorei(37443,0);const ge=w.isCompressedTexture||w.image[0].isCompressedTexture,me=w.image[0]&&w.image[0].isDataTexture,Q=[];for(let X=0;X<6;X++)!ge&&!me?Q[X]=_(w.image[X],!1,!0,u):Q[X]=me?w.image[X].image:w.image[X],Q[X]=Rt(w,Q[X]);const Ee=Q[0],_e=y(Ee)||a,Te=s.convert(w.format,w.encoding),Me=s.convert(w.type),xe=S(w.internalFormat,Te,Me,w.encoding),Ue=a&&w.isVideoTexture!==!0,tt=de.__version===void 0||J===!0;let _t=T(w,Ee,_e);P(34067,w,_e);let k;if(ge){Ue&&tt&&n.texStorage2D(34067,_t,xe,Ee.width,Ee.height);for(let X=0;X<6;X++){k=Q[X].mipmaps;for(let re=0;re<k.length;re++){const he=k[re];w.format!==Fn?Te!==null?Ue?n.compressedTexSubImage2D(34069+X,re,0,0,he.width,he.height,Te,he.data):n.compressedTexImage2D(34069+X,re,xe,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?n.texSubImage2D(34069+X,re,0,0,he.width,he.height,Te,Me,he.data):n.texImage2D(34069+X,re,xe,he.width,he.height,0,Te,Me,he.data)}}}else{k=w.mipmaps,Ue&&tt&&(k.length>0&&_t++,n.texStorage2D(34067,_t,xe,Q[0].width,Q[0].height));for(let X=0;X<6;X++)if(me){Ue?n.texSubImage2D(34069+X,0,0,0,Q[X].width,Q[X].height,Te,Me,Q[X].data):n.texImage2D(34069+X,0,xe,Q[X].width,Q[X].height,0,Te,Me,Q[X].data);for(let re=0;re<k.length;re++){const ve=k[re].image[X].image;Ue?n.texSubImage2D(34069+X,re+1,0,0,ve.width,ve.height,Te,Me,ve.data):n.texImage2D(34069+X,re+1,xe,ve.width,ve.height,0,Te,Me,ve.data)}}else{Ue?n.texSubImage2D(34069+X,0,0,0,Te,Me,Q[X]):n.texImage2D(34069+X,0,xe,Te,Me,Q[X]);for(let re=0;re<k.length;re++){const he=k[re];Ue?n.texSubImage2D(34069+X,re+1,0,0,Te,Me,he.image[X]):n.texImage2D(34069+X,re+1,xe,Te,Me,he.image[X])}}}C(w,_e)&&L(34067),de.__version=se.version,w.onUpdate&&w.onUpdate(w)}b.__version=w.version}function le(b,w,z,J,se){const de=s.convert(z.format,z.encoding),ge=s.convert(z.type),me=S(z.internalFormat,de,ge,z.encoding);i.get(w).__hasExternalTextures||(se===32879||se===35866?n.texImage3D(se,0,me,w.width,w.height,w.depth,0,de,ge,null):n.texImage2D(se,0,me,w.width,w.height,0,de,ge,null)),n.bindFramebuffer(36160,b),He(w)?f.framebufferTexture2DMultisampleEXT(36160,J,se,i.get(z).__webglTexture,0,Pe(w)):(se===3553||se>=34069&&se<=34074)&&t.framebufferTexture2D(36160,J,se,i.get(z).__webglTexture,0),n.bindFramebuffer(36160,null)}function fe(b,w,z){if(t.bindRenderbuffer(36161,b),w.depthBuffer&&!w.stencilBuffer){let J=33189;if(z||He(w)){const se=w.depthTexture;se&&se.isDepthTexture&&(se.type===cr?J=36012:se.type===ur&&(J=33190));const de=Pe(w);He(w)?f.renderbufferStorageMultisampleEXT(36161,de,J,w.width,w.height):t.renderbufferStorageMultisample(36161,de,J,w.width,w.height)}else t.renderbufferStorage(36161,J,w.width,w.height);t.framebufferRenderbuffer(36160,36096,36161,b)}else if(w.depthBuffer&&w.stencilBuffer){const J=Pe(w);z&&He(w)===!1?t.renderbufferStorageMultisample(36161,J,35056,w.width,w.height):He(w)?f.renderbufferStorageMultisampleEXT(36161,J,35056,w.width,w.height):t.renderbufferStorage(36161,34041,w.width,w.height),t.framebufferRenderbuffer(36160,33306,36161,b)}else{const J=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let se=0;se<J.length;se++){const de=J[se],ge=s.convert(de.format,de.encoding),me=s.convert(de.type),Q=S(de.internalFormat,ge,me,de.encoding),Ee=Pe(w);z&&He(w)===!1?t.renderbufferStorageMultisample(36161,Ee,Q,w.width,w.height):He(w)?f.renderbufferStorageMultisampleEXT(36161,Ee,Q,w.width,w.height):t.renderbufferStorage(36161,Q,w.width,w.height)}}t.bindRenderbuffer(36161,null)}function ue(b,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(36160,b),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),H(w.depthTexture,0);const J=i.get(w.depthTexture).__webglTexture,se=Pe(w);if(w.depthTexture.format===hr)He(w)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,J,0,se):t.framebufferTexture2D(36160,36096,3553,J,0);else if(w.depthTexture.format===Ss)He(w)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,J,0,se):t.framebufferTexture2D(36160,33306,3553,J,0);else throw new Error("Unknown depthTexture format")}function we(b){const w=i.get(b),z=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!w.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");ue(w.__webglFramebuffer,b)}else if(z){w.__webglDepthbuffer=[];for(let J=0;J<6;J++)n.bindFramebuffer(36160,w.__webglFramebuffer[J]),w.__webglDepthbuffer[J]=t.createRenderbuffer(),fe(w.__webglDepthbuffer[J],b,!1)}else n.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=t.createRenderbuffer(),fe(w.__webglDepthbuffer,b,!1);n.bindFramebuffer(36160,null)}function Ve(b,w,z){const J=i.get(b);w!==void 0&&le(J.__webglFramebuffer,b,b.texture,36064,3553),z!==void 0&&we(b)}function Ae(b){const w=b.texture,z=i.get(b),J=i.get(w);b.addEventListener("dispose",K),b.isWebGLMultipleRenderTargets!==!0&&(J.__webglTexture===void 0&&(J.__webglTexture=t.createTexture()),J.__version=w.version,o.memory.textures++);const se=b.isWebGLCubeRenderTarget===!0,de=b.isWebGLMultipleRenderTargets===!0,ge=y(b)||a;if(se){z.__webglFramebuffer=[];for(let me=0;me<6;me++)z.__webglFramebuffer[me]=t.createFramebuffer()}else{if(z.__webglFramebuffer=t.createFramebuffer(),de)if(r.drawBuffers){const me=b.texture;for(let Q=0,Ee=me.length;Q<Ee;Q++){const _e=i.get(me[Q]);_e.__webglTexture===void 0&&(_e.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&He(b)===!1){const me=de?w:[w];z.__webglMultisampledFramebuffer=t.createFramebuffer(),z.__webglColorRenderbuffer=[],n.bindFramebuffer(36160,z.__webglMultisampledFramebuffer);for(let Q=0;Q<me.length;Q++){const Ee=me[Q];z.__webglColorRenderbuffer[Q]=t.createRenderbuffer(),t.bindRenderbuffer(36161,z.__webglColorRenderbuffer[Q]);const _e=s.convert(Ee.format,Ee.encoding),Te=s.convert(Ee.type),Me=S(Ee.internalFormat,_e,Te,Ee.encoding,b.isXRRenderTarget===!0),xe=Pe(b);t.renderbufferStorageMultisample(36161,xe,Me,b.width,b.height),t.framebufferRenderbuffer(36160,36064+Q,36161,z.__webglColorRenderbuffer[Q])}t.bindRenderbuffer(36161,null),b.depthBuffer&&(z.__webglDepthRenderbuffer=t.createRenderbuffer(),fe(z.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(36160,null)}}if(se){n.bindTexture(34067,J.__webglTexture),P(34067,w,ge);for(let me=0;me<6;me++)le(z.__webglFramebuffer[me],b,w,36064,34069+me);C(w,ge)&&L(34067),n.unbindTexture()}else if(de){const me=b.texture;for(let Q=0,Ee=me.length;Q<Ee;Q++){const _e=me[Q],Te=i.get(_e);n.bindTexture(3553,Te.__webglTexture),P(3553,_e,ge),le(z.__webglFramebuffer,b,_e,36064+Q,3553),C(_e,ge)&&L(3553)}n.unbindTexture()}else{let me=3553;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?me=b.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(me,J.__webglTexture),P(me,w,ge),le(z.__webglFramebuffer,b,w,36064,me),C(w,ge)&&L(me),n.unbindTexture()}b.depthBuffer&&we(b)}function Ge(b){const w=y(b)||a,z=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let J=0,se=z.length;J<se;J++){const de=z[J];if(C(de,w)){const ge=b.isWebGLCubeRenderTarget?34067:3553,me=i.get(de).__webglTexture;n.bindTexture(ge,me),L(ge),n.unbindTexture()}}}function be(b){if(a&&b.samples>0&&He(b)===!1){const w=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],z=b.width,J=b.height;let se=16384;const de=[],ge=b.stencilBuffer?33306:36096,me=i.get(b),Q=b.isWebGLMultipleRenderTargets===!0;if(Q)for(let Ee=0;Ee<w.length;Ee++)n.bindFramebuffer(36160,me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(36160,36064+Ee,36161,null),n.bindFramebuffer(36160,me.__webglFramebuffer),t.framebufferTexture2D(36009,36064+Ee,3553,null,0);n.bindFramebuffer(36008,me.__webglMultisampledFramebuffer),n.bindFramebuffer(36009,me.__webglFramebuffer);for(let Ee=0;Ee<w.length;Ee++){de.push(36064+Ee),b.depthBuffer&&de.push(ge);const _e=me.__ignoreDepthValues!==void 0?me.__ignoreDepthValues:!1;if(_e===!1&&(b.depthBuffer&&(se|=256),b.stencilBuffer&&(se|=1024)),Q&&t.framebufferRenderbuffer(36008,36064,36161,me.__webglColorRenderbuffer[Ee]),_e===!0&&(t.invalidateFramebuffer(36008,[ge]),t.invalidateFramebuffer(36009,[ge])),Q){const Te=i.get(w[Ee]).__webglTexture;t.framebufferTexture2D(36009,36064,3553,Te,0)}t.blitFramebuffer(0,0,z,J,0,0,z,J,se,9728),v&&t.invalidateFramebuffer(36008,de)}if(n.bindFramebuffer(36008,null),n.bindFramebuffer(36009,null),Q)for(let Ee=0;Ee<w.length;Ee++){n.bindFramebuffer(36160,me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(36160,36064+Ee,36161,me.__webglColorRenderbuffer[Ee]);const _e=i.get(w[Ee]).__webglTexture;n.bindFramebuffer(36160,me.__webglFramebuffer),t.framebufferTexture2D(36009,36064+Ee,3553,_e,0)}n.bindFramebuffer(36009,me.__webglMultisampledFramebuffer)}}function Pe(b){return Math.min(d,b.samples)}function He(b){const w=i.get(b);return a&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function $e(b){const w=o.render.frame;x.get(b)!==w&&(x.set(b,w),b.update())}function Rt(b,w){const z=b.encoding,J=b.format,se=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===gd||z!==Sr&&(z===Qe?a===!1?e.has("EXT_sRGB")===!0&&J===Fn?(b.format=gd,b.minFilter=Sn,b.generateMipmaps=!1):w=lv.sRGBToLinear(w):(J!==Fn||se!==yr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",z)),w}this.allocateTextureUnit=I,this.resetTextureUnits=te,this.setTexture2D=H,this.setTexture2DArray=ae,this.setTexture3D=A,this.setTextureCube=F,this.rebindTextures=Ve,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=Ge,this.updateMultisampleRenderTarget=be,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=le,this.useMultisampledRTT=He}function X2(t,e,n){const i=n.isWebGL2;function r(s,o=null){let a;if(s===yr)return 5121;if(s===IS)return 32819;if(s===kS)return 32820;if(s===PS)return 5120;if(s===RS)return 5122;if(s===sv)return 5123;if(s===DS)return 5124;if(s===ur)return 5125;if(s===cr)return 5126;if(s===Ao)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===NS)return 6406;if(s===Fn)return 6408;if(s===zS)return 6409;if(s===FS)return 6410;if(s===hr)return 6402;if(s===Ss)return 34041;if(s===gd)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===OS)return 6403;if(s===US)return 36244;if(s===BS)return 33319;if(s===GS)return 33320;if(s===VS)return 36249;if(s===Ru||s===Du||s===Iu||s===ku)if(o===Qe)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Ru)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Du)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Iu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ku)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Ru)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Du)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Iu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ku)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===dp||s===fp||s===hp||s===pp)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===dp)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===fp)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===hp)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===pp)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===HS)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===mp||s===gp)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===mp)return o===Qe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===gp)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===vp||s===_p||s===xp||s===yp||s===Sp||s===wp||s===Mp||s===Ep||s===bp||s===Tp||s===Cp||s===Ap||s===Lp||s===Pp)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===vp)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===_p)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===xp)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===yp)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Sp)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===wp)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Mp)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ep)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===bp)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Tp)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Cp)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ap)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Lp)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Pp)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Nu)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Nu)return o===Qe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===WS||s===Rp||s===Dp||s===Ip)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Nu)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Rp)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Dp)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Ip)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ls?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class Y2 extends wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class La extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Z2={type:"move"};class ac{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new La,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new La,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new La,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const h of e.hand.values()){const p=n.getJointPose(h,i),g=this._getHandJoint(u,h);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.jointRadius=p.radius),g.visible=p!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],f=c.position.distanceTo(d.position),v=.02,x=.005;u.inputState.pinching&&f>v+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=v-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Z2)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new La;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class K2 extends tn{constructor(e,n,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:hr,c!==hr&&c!==Ss)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===hr&&(i=ur),i===void 0&&c===Ss&&(i=ls),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Ht,this.minFilter=l!==void 0?l:Ht,this.flipY=!1,this.generateMipmaps=!1}}class Q2 extends Ts{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,d=null,f=null,v=null,x=null;const h=n.getContextAttributes();let p=null,g=null;const m=[],_=[],y=new Set,M=new Map,C=new wn;C.layers.enable(1),C.viewport=new Mt;const L=new wn;L.layers.enable(2),L.viewport=new Mt;const S=[C,L],T=new Y2;T.layers.enable(1),T.layers.enable(2);let R=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(A){let F=m[A];return F===void 0&&(F=new ac,m[A]=F),F.getTargetRaySpace()},this.getControllerGrip=function(A){let F=m[A];return F===void 0&&(F=new ac,m[A]=F),F.getGripSpace()},this.getHand=function(A){let F=m[A];return F===void 0&&(F=new ac,m[A]=F),F.getHandSpace()};function K(A){const F=_.indexOf(A.inputSource);if(F===-1)return;const G=m[F];G!==void 0&&G.dispatchEvent({type:A.type,data:A.inputSource})}function U(){r.removeEventListener("select",K),r.removeEventListener("selectstart",K),r.removeEventListener("selectend",K),r.removeEventListener("squeeze",K),r.removeEventListener("squeezestart",K),r.removeEventListener("squeezeend",K),r.removeEventListener("end",U),r.removeEventListener("inputsourceschange",N);for(let A=0;A<m.length;A++){const F=_[A];F!==null&&(_[A]=null,m[A].disconnect(F))}R=null,Z=null,e.setRenderTarget(p),v=null,f=null,d=null,r=null,g=null,ae.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(A){s=A,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(A){a=A,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(A){u=A},this.getBaseLayer=function(){return f!==null?f:v},this.getBinding=function(){return d},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(A){if(r=A,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",K),r.addEventListener("selectstart",K),r.addEventListener("selectend",K),r.addEventListener("squeeze",K),r.addEventListener("squeezestart",K),r.addEventListener("squeezeend",K),r.addEventListener("end",U),r.addEventListener("inputsourceschange",N),h.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const F={antialias:r.renderState.layers===void 0?h.antialias:!0,alpha:h.alpha,depth:h.depth,stencil:h.stencil,framebufferScaleFactor:s};v=new XRWebGLLayer(r,n,F),r.updateRenderState({baseLayer:v}),g=new wr(v.framebufferWidth,v.framebufferHeight,{format:Fn,type:yr,encoding:e.outputEncoding,stencilBuffer:h.stencil})}else{let F=null,G=null,D=null;h.depth&&(D=h.stencil?35056:33190,F=h.stencil?Ss:hr,G=h.stencil?ls:ur);const P={colorFormat:32856,depthFormat:D,scaleFactor:s};d=new XRWebGLBinding(r,n),f=d.createProjectionLayer(P),r.updateRenderState({layers:[f]}),g=new wr(f.textureWidth,f.textureHeight,{format:Fn,type:yr,depthTexture:new K2(f.textureWidth,f.textureHeight,G,void 0,void 0,void 0,void 0,void 0,void 0,F),stencilBuffer:h.stencil,encoding:e.outputEncoding,samples:h.antialias?4:0});const ne=e.properties.get(g);ne.__ignoreDepthValues=f.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),ae.setContext(r),ae.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function N(A){for(let F=0;F<A.removed.length;F++){const G=A.removed[F],D=_.indexOf(G);D>=0&&(_[D]=null,m[D].disconnect(G))}for(let F=0;F<A.added.length;F++){const G=A.added[F];let D=_.indexOf(G);if(D===-1){for(let ne=0;ne<m.length;ne++)if(ne>=_.length){_.push(G),D=ne;break}else if(_[ne]===null){_[ne]=G,D=ne;break}if(D===-1)break}const P=m[D];P&&P.connect(G)}}const $=new V,ee=new V;function te(A,F,G){$.setFromMatrixPosition(F.matrixWorld),ee.setFromMatrixPosition(G.matrixWorld);const D=$.distanceTo(ee),P=F.projectionMatrix.elements,ne=G.projectionMatrix.elements,W=P[14]/(P[10]-1),oe=P[14]/(P[10]+1),le=(P[9]+1)/P[5],fe=(P[9]-1)/P[5],ue=(P[8]-1)/P[0],we=(ne[8]+1)/ne[0],Ve=W*ue,Ae=W*we,Ge=D/(-ue+we),be=Ge*-ue;F.matrixWorld.decompose(A.position,A.quaternion,A.scale),A.translateX(be),A.translateZ(Ge),A.matrixWorld.compose(A.position,A.quaternion,A.scale),A.matrixWorldInverse.copy(A.matrixWorld).invert();const Pe=W+Ge,He=oe+Ge,$e=Ve-be,Rt=Ae+(D-be),b=le*oe/He*Pe,w=fe*oe/He*Pe;A.projectionMatrix.makePerspective($e,Rt,b,w,Pe,He)}function I(A,F){F===null?A.matrixWorld.copy(A.matrix):A.matrixWorld.multiplyMatrices(F.matrixWorld,A.matrix),A.matrixWorldInverse.copy(A.matrixWorld).invert()}this.updateCamera=function(A){if(r===null)return;T.near=L.near=C.near=A.near,T.far=L.far=C.far=A.far,(R!==T.near||Z!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),R=T.near,Z=T.far);const F=A.parent,G=T.cameras;I(T,F);for(let P=0;P<G.length;P++)I(G[P],F);T.matrixWorld.decompose(T.position,T.quaternion,T.scale),A.matrix.copy(T.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale);const D=A.children;for(let P=0,ne=D.length;P<ne;P++)D[P].updateMatrixWorld(!0);G.length===2?te(T,C,L):T.projectionMatrix.copy(C.projectionMatrix)},this.getCamera=function(){return T},this.getFoveation=function(){if(!(f===null&&v===null))return l},this.setFoveation=function(A){l=A,f!==null&&(f.fixedFoveation=A),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=A)},this.getPlanes=function(){return y};let j=null;function H(A,F){if(c=F.getViewerPose(u||o),x=F,c!==null){const G=c.views;v!==null&&(e.setRenderTargetFramebuffer(g,v.framebuffer),e.setRenderTarget(g));let D=!1;G.length!==T.cameras.length&&(T.cameras.length=0,D=!0);for(let P=0;P<G.length;P++){const ne=G[P];let W=null;if(v!==null)W=v.getViewport(ne);else{const le=d.getViewSubImage(f,ne);W=le.viewport,P===0&&(e.setRenderTargetTextures(g,le.colorTexture,f.ignoreDepthValues?void 0:le.depthStencilTexture),e.setRenderTarget(g))}let oe=S[P];oe===void 0&&(oe=new wn,oe.layers.enable(P),oe.viewport=new Mt,S[P]=oe),oe.matrix.fromArray(ne.transform.matrix),oe.projectionMatrix.fromArray(ne.projectionMatrix),oe.viewport.set(W.x,W.y,W.width,W.height),P===0&&T.matrix.copy(oe.matrix),D===!0&&T.cameras.push(oe)}}for(let G=0;G<m.length;G++){const D=_[G],P=m[G];D!==null&&P!==void 0&&P.update(D,F,u||o)}if(j&&j(A,F),F.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:F.detectedPlanes});let G=null;for(const D of y)F.detectedPlanes.has(D)||(G===null&&(G=[]),G.push(D));if(G!==null)for(const D of G)y.delete(D),M.delete(D),i.dispatchEvent({type:"planeremoved",data:D});for(const D of F.detectedPlanes)if(!y.has(D))y.add(D),M.set(D,F.lastChangedTime),i.dispatchEvent({type:"planeadded",data:D});else{const P=M.get(D);D.lastChangedTime>P&&(M.set(D,D.lastChangedTime),i.dispatchEvent({type:"planechanged",data:D}))}}x=null}const ae=new yv;ae.setAnimationLoop(H),this.setAnimationLoop=function(A){j=A},this.dispose=function(){}}}function J2(t,e){function n(h,p){p.color.getRGB(h.fogColor.value,vv(t)),p.isFog?(h.fogNear.value=p.near,h.fogFar.value=p.far):p.isFogExp2&&(h.fogDensity.value=p.density)}function i(h,p,g,m,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(h,p):p.isMeshToonMaterial?(r(h,p),c(h,p)):p.isMeshPhongMaterial?(r(h,p),u(h,p)):p.isMeshStandardMaterial?(r(h,p),d(h,p),p.isMeshPhysicalMaterial&&f(h,p,_)):p.isMeshMatcapMaterial?(r(h,p),v(h,p)):p.isMeshDepthMaterial?r(h,p):p.isMeshDistanceMaterial?(r(h,p),x(h,p)):p.isMeshNormalMaterial?r(h,p):p.isLineBasicMaterial?(s(h,p),p.isLineDashedMaterial&&o(h,p)):p.isPointsMaterial?a(h,p,g,m):p.isSpriteMaterial?l(h,p):p.isShadowMaterial?(h.color.value.copy(p.color),h.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(h,p){h.opacity.value=p.opacity,p.color&&h.diffuse.value.copy(p.color),p.emissive&&h.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.bumpMap&&(h.bumpMap.value=p.bumpMap,h.bumpScale.value=p.bumpScale,p.side===fn&&(h.bumpScale.value*=-1)),p.displacementMap&&(h.displacementMap.value=p.displacementMap,h.displacementScale.value=p.displacementScale,h.displacementBias.value=p.displacementBias),p.emissiveMap&&(h.emissiveMap.value=p.emissiveMap),p.normalMap&&(h.normalMap.value=p.normalMap,h.normalScale.value.copy(p.normalScale),p.side===fn&&h.normalScale.value.negate()),p.specularMap&&(h.specularMap.value=p.specularMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);const g=e.get(p).envMap;if(g&&(h.envMap.value=g,h.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=p.reflectivity,h.ior.value=p.ior,h.refractionRatio.value=p.refractionRatio),p.lightMap){h.lightMap.value=p.lightMap;const y=t.useLegacyLights===!0?Math.PI:1;h.lightMapIntensity.value=p.lightMapIntensity*y}p.aoMap&&(h.aoMap.value=p.aoMap,h.aoMapIntensity.value=p.aoMapIntensity);let m;p.map?m=p.map:p.specularMap?m=p.specularMap:p.displacementMap?m=p.displacementMap:p.normalMap?m=p.normalMap:p.bumpMap?m=p.bumpMap:p.roughnessMap?m=p.roughnessMap:p.metalnessMap?m=p.metalnessMap:p.alphaMap?m=p.alphaMap:p.emissiveMap?m=p.emissiveMap:p.clearcoatMap?m=p.clearcoatMap:p.clearcoatNormalMap?m=p.clearcoatNormalMap:p.clearcoatRoughnessMap?m=p.clearcoatRoughnessMap:p.iridescenceMap?m=p.iridescenceMap:p.iridescenceThicknessMap?m=p.iridescenceThicknessMap:p.specularIntensityMap?m=p.specularIntensityMap:p.specularColorMap?m=p.specularColorMap:p.transmissionMap?m=p.transmissionMap:p.thicknessMap?m=p.thicknessMap:p.sheenColorMap?m=p.sheenColorMap:p.sheenRoughnessMap&&(m=p.sheenRoughnessMap),m!==void 0&&(m.isWebGLRenderTarget&&(m=m.texture),m.matrixAutoUpdate===!0&&m.updateMatrix(),h.uvTransform.value.copy(m.matrix));let _;p.aoMap?_=p.aoMap:p.lightMap&&(_=p.lightMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),h.uv2Transform.value.copy(_.matrix))}function s(h,p){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity}function o(h,p){h.dashSize.value=p.dashSize,h.totalSize.value=p.dashSize+p.gapSize,h.scale.value=p.scale}function a(h,p,g,m){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity,h.size.value=p.size*g,h.scale.value=m*.5,p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);let _;p.map?_=p.map:p.alphaMap&&(_=p.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),h.uvTransform.value.copy(_.matrix))}function l(h,p){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity,h.rotation.value=p.rotation,p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);let g;p.map?g=p.map:p.alphaMap&&(g=p.alphaMap),g!==void 0&&(g.matrixAutoUpdate===!0&&g.updateMatrix(),h.uvTransform.value.copy(g.matrix))}function u(h,p){h.specular.value.copy(p.specular),h.shininess.value=Math.max(p.shininess,1e-4)}function c(h,p){p.gradientMap&&(h.gradientMap.value=p.gradientMap)}function d(h,p){h.roughness.value=p.roughness,h.metalness.value=p.metalness,p.roughnessMap&&(h.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(h.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(h.envMapIntensity.value=p.envMapIntensity)}function f(h,p,g){h.ior.value=p.ior,p.sheen>0&&(h.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),h.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(h.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(h.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(h.clearcoat.value=p.clearcoat,h.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(h.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(h.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),h.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===fn&&h.clearcoatNormalScale.value.negate())),p.iridescence>0&&(h.iridescence.value=p.iridescence,h.iridescenceIOR.value=p.iridescenceIOR,h.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(h.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(h.transmission.value=p.transmission,h.transmissionSamplerMap.value=g.texture,h.transmissionSamplerSize.value.set(g.width,g.height),p.transmissionMap&&(h.transmissionMap.value=p.transmissionMap),h.thickness.value=p.thickness,p.thicknessMap&&(h.thicknessMap.value=p.thicknessMap),h.attenuationDistance.value=p.attenuationDistance,h.attenuationColor.value.copy(p.attenuationColor)),h.specularIntensity.value=p.specularIntensity,h.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(h.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(h.specularColorMap.value=p.specularColorMap)}function v(h,p){p.matcap&&(h.matcap.value=p.matcap)}function x(h,p){h.referencePosition.value.copy(p.referencePosition),h.nearDistance.value=p.nearDistance,h.farDistance.value=p.farDistance}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function eb(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(35375):0;function l(m,_){const y=_.program;i.uniformBlockBinding(m,y)}function u(m,_){let y=r[m.id];y===void 0&&(x(m),y=c(m),r[m.id]=y,m.addEventListener("dispose",p));const M=_.program;i.updateUBOMapping(m,M);const C=e.render.frame;s[m.id]!==C&&(f(m),s[m.id]=C)}function c(m){const _=d();m.__bindingPointIndex=_;const y=t.createBuffer(),M=m.__size,C=m.usage;return t.bindBuffer(35345,y),t.bufferData(35345,M,C),t.bindBuffer(35345,null),t.bindBufferBase(35345,_,y),y}function d(){for(let m=0;m<a;m++)if(o.indexOf(m)===-1)return o.push(m),m;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(m){const _=r[m.id],y=m.uniforms,M=m.__cache;t.bindBuffer(35345,_);for(let C=0,L=y.length;C<L;C++){const S=y[C];if(v(S,C,M)===!0){const T=S.__offset,R=Array.isArray(S.value)?S.value:[S.value];let Z=0;for(let K=0;K<R.length;K++){const U=R[K],N=h(U);typeof U=="number"?(S.__data[0]=U,t.bufferSubData(35345,T+Z,S.__data)):U.isMatrix3?(S.__data[0]=U.elements[0],S.__data[1]=U.elements[1],S.__data[2]=U.elements[2],S.__data[3]=U.elements[0],S.__data[4]=U.elements[3],S.__data[5]=U.elements[4],S.__data[6]=U.elements[5],S.__data[7]=U.elements[0],S.__data[8]=U.elements[6],S.__data[9]=U.elements[7],S.__data[10]=U.elements[8],S.__data[11]=U.elements[0]):(U.toArray(S.__data,Z),Z+=N.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(35345,T,S.__data)}}t.bindBuffer(35345,null)}function v(m,_,y){const M=m.value;if(y[_]===void 0){if(typeof M=="number")y[_]=M;else{const C=Array.isArray(M)?M:[M],L=[];for(let S=0;S<C.length;S++)L.push(C[S].clone());y[_]=L}return!0}else if(typeof M=="number"){if(y[_]!==M)return y[_]=M,!0}else{const C=Array.isArray(y[_])?y[_]:[y[_]],L=Array.isArray(M)?M:[M];for(let S=0;S<C.length;S++){const T=C[S];if(T.equals(L[S])===!1)return T.copy(L[S]),!0}}return!1}function x(m){const _=m.uniforms;let y=0;const M=16;let C=0;for(let L=0,S=_.length;L<S;L++){const T=_[L],R={boundary:0,storage:0},Z=Array.isArray(T.value)?T.value:[T.value];for(let K=0,U=Z.length;K<U;K++){const N=Z[K],$=h(N);R.boundary+=$.boundary,R.storage+=$.storage}if(T.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=y,L>0){C=y%M;const K=M-C;C!==0&&K-R.boundary<0&&(y+=M-C,T.__offset=y)}y+=R.storage}return C=y%M,C>0&&(y+=M-C),m.__size=y,m.__cache={},this}function h(m){const _={boundary:0,storage:0};return typeof m=="number"?(_.boundary=4,_.storage=4):m.isVector2?(_.boundary=8,_.storage=8):m.isVector3||m.isColor?(_.boundary=16,_.storage=12):m.isVector4?(_.boundary=16,_.storage=16):m.isMatrix3?(_.boundary=48,_.storage=48):m.isMatrix4?(_.boundary=64,_.storage=64):m.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",m),_}function p(m){const _=m.target;_.removeEventListener("dispose",p);const y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function g(){for(const m in r)t.deleteBuffer(r[m]);o=[],r={},s={}}return{bind:l,update:u,dispose:g}}function tb(){const t=Po("canvas");return t.style.display="block",t}function Af(t={}){this.isWebGLRenderer=!0;const e=t.canvas!==void 0?t.canvas:tb(),n=t.context!==void 0?t.context:null,i=t.depth!==void 0?t.depth:!0,r=t.stencil!==void 0?t.stencil:!0,s=t.antialias!==void 0?t.antialias:!1,o=t.premultipliedAlpha!==void 0?t.premultipliedAlpha:!0,a=t.preserveDrawingBuffer!==void 0?t.preserveDrawingBuffer:!1,l=t.powerPreference!==void 0?t.powerPreference:"default",u=t.failIfMajorPerformanceCaveat!==void 0?t.failIfMajorPerformanceCaveat:!1;let c;n!==null?c=n.getContextAttributes().alpha:c=t.alpha!==void 0?t.alpha:!1;let d=null,f=null;const v=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Sr,this.useLegacyLights=!0,this.toneMapping=fi,this.toneMappingExposure=1;const h=this;let p=!1,g=0,m=0,_=null,y=-1,M=null;const C=new Mt,L=new Mt;let S=null,T=e.width,R=e.height,Z=1,K=null,U=null;const N=new Mt(0,0,T,R),$=new Mt(0,0,T,R);let ee=!1;const te=new bf;let I=!1,j=!1,H=null;const ae=new ht,A=new V,F={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function G(){return _===null?Z:1}let D=n;function P(E,B){for(let q=0;q<E.length;q++){const O=E[q],Y=e.getContext(O,B);if(Y!==null)return Y}return null}try{const E={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ef}`),e.addEventListener("webglcontextlost",Te,!1),e.addEventListener("webglcontextrestored",Me,!1),e.addEventListener("webglcontextcreationerror",xe,!1),D===null){const B=["webgl2","webgl","experimental-webgl"];if(h.isWebGL1Renderer===!0&&B.shift(),D=P(B,E),D===null)throw P(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}D.getShaderPrecisionFormat===void 0&&(D.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let ne,W,oe,le,fe,ue,we,Ve,Ae,Ge,be,Pe,He,$e,Rt,b,w,z,J,se,de,ge,me,Q;function Ee(){ne=new f3(D),W=new o3(D,ne,t),ne.init(W),ge=new X2(D,ne,W),oe=new $2(D,ne,W),le=new m3,fe=new D2,ue=new q2(D,ne,oe,fe,W,ge,le),we=new l3(h),Ve=new d3(h),Ae=new Ew(D,W),me=new r3(D,ne,Ae,W),Ge=new h3(D,Ae,le,me),be=new x3(D,Ge,Ae,le),J=new _3(D,W,ue),b=new a3(fe),Pe=new R2(h,we,Ve,ne,W,me,b),He=new J2(h,fe),$e=new k2,Rt=new B2(ne,W),z=new i3(h,we,Ve,oe,be,c,o),w=new j2(h,be,W),Q=new eb(D,le,W,oe),se=new s3(D,ne,le,W),de=new p3(D,ne,le,W),le.programs=Pe.programs,h.capabilities=W,h.extensions=ne,h.properties=fe,h.renderLists=$e,h.shadowMap=w,h.state=oe,h.info=le}Ee();const _e=new Q2(h,D);this.xr=_e,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const E=ne.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=ne.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(E){E!==void 0&&(Z=E,this.setSize(T,R,!1))},this.getSize=function(E){return E.set(T,R)},this.setSize=function(E,B,q=!0){if(_e.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}T=E,R=B,e.width=Math.floor(E*Z),e.height=Math.floor(B*Z),q===!0&&(e.style.width=E+"px",e.style.height=B+"px"),this.setViewport(0,0,E,B)},this.getDrawingBufferSize=function(E){return E.set(T*Z,R*Z).floor()},this.setDrawingBufferSize=function(E,B,q){T=E,R=B,Z=q,e.width=Math.floor(E*q),e.height=Math.floor(B*q),this.setViewport(0,0,E,B)},this.getCurrentViewport=function(E){return E.copy(C)},this.getViewport=function(E){return E.copy(N)},this.setViewport=function(E,B,q,O){E.isVector4?N.set(E.x,E.y,E.z,E.w):N.set(E,B,q,O),oe.viewport(C.copy(N).multiplyScalar(Z).floor())},this.getScissor=function(E){return E.copy($)},this.setScissor=function(E,B,q,O){E.isVector4?$.set(E.x,E.y,E.z,E.w):$.set(E,B,q,O),oe.scissor(L.copy($).multiplyScalar(Z).floor())},this.getScissorTest=function(){return ee},this.setScissorTest=function(E){oe.setScissorTest(ee=E)},this.setOpaqueSort=function(E){K=E},this.setTransparentSort=function(E){U=E},this.getClearColor=function(E){return E.copy(z.getClearColor())},this.setClearColor=function(){z.setClearColor.apply(z,arguments)},this.getClearAlpha=function(){return z.getClearAlpha()},this.setClearAlpha=function(){z.setClearAlpha.apply(z,arguments)},this.clear=function(E=!0,B=!0,q=!0){let O=0;E&&(O|=16384),B&&(O|=256),q&&(O|=1024),D.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Te,!1),e.removeEventListener("webglcontextrestored",Me,!1),e.removeEventListener("webglcontextcreationerror",xe,!1),$e.dispose(),Rt.dispose(),fe.dispose(),we.dispose(),Ve.dispose(),be.dispose(),me.dispose(),Q.dispose(),Pe.dispose(),_e.dispose(),_e.removeEventListener("sessionstart",re),_e.removeEventListener("sessionend",he),H&&(H.dispose(),H=null),ve.stop()};function Te(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function Me(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const E=le.autoReset,B=w.enabled,q=w.autoUpdate,O=w.needsUpdate,Y=w.type;Ee(),le.autoReset=E,w.enabled=B,w.autoUpdate=q,w.needsUpdate=O,w.type=Y}function xe(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ue(E){const B=E.target;B.removeEventListener("dispose",Ue),tt(B)}function tt(E){_t(E),fe.remove(E)}function _t(E){const B=fe.get(E).programs;B!==void 0&&(B.forEach(function(q){Pe.releaseProgram(q)}),E.isShaderMaterial&&Pe.releaseShaderCache(E))}this.renderBufferDirect=function(E,B,q,O,Y,Se){B===null&&(B=F);const Le=Y.isMesh&&Y.matrixWorld.determinant()<0,De=Cv(E,B,q,O,Y);oe.setMaterial(O,Le);let Ie=q.index,Be=1;O.wireframe===!0&&(Ie=Ge.getWireframeAttribute(q),Be=2);const Ne=q.drawRange,ze=q.attributes.position;let lt=Ne.start*Be,nn=(Ne.start+Ne.count)*Be;Se!==null&&(lt=Math.max(lt,Se.start*Be),nn=Math.min(nn,(Se.start+Se.count)*Be)),Ie!==null?(lt=Math.max(lt,0),nn=Math.min(nn,Ie.count)):ze!=null&&(lt=Math.max(lt,0),nn=Math.min(nn,ze.count));const Jn=nn-lt;if(Jn<0||Jn===1/0)return;me.setup(Y,O,De,q,Ie);let Yi,ut=se;if(Ie!==null&&(Yi=Ae.get(Ie),ut=de,ut.setIndex(Yi)),Y.isMesh)O.wireframe===!0?(oe.setLineWidth(O.wireframeLinewidth*G()),ut.setMode(1)):ut.setMode(4);else if(Y.isLine){let Fe=O.linewidth;Fe===void 0&&(Fe=1),oe.setLineWidth(Fe*G()),Y.isLineSegments?ut.setMode(1):Y.isLineLoop?ut.setMode(2):ut.setMode(3)}else Y.isPoints?ut.setMode(0):Y.isSprite&&ut.setMode(4);if(Y.isInstancedMesh)ut.renderInstances(lt,Jn,Y.count);else if(q.isInstancedBufferGeometry){const Fe=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Zl=Math.min(q.instanceCount,Fe);ut.renderInstances(lt,Jn,Zl)}else ut.render(lt,Jn)},this.compile=function(E,B){function q(O,Y,Se){O.transparent===!0&&O.side===Pi&&O.forceSinglePass===!1?(O.side=fn,O.needsUpdate=!0,vn(O,Y,Se),O.side=ji,O.needsUpdate=!0,vn(O,Y,Se),O.side=Pi):vn(O,Y,Se)}f=Rt.get(E),f.init(),x.push(f),E.traverseVisible(function(O){O.isLight&&O.layers.test(B.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),f.setupLights(h.useLegacyLights),E.traverse(function(O){const Y=O.material;if(Y)if(Array.isArray(Y))for(let Se=0;Se<Y.length;Se++){const Le=Y[Se];q(Le,E,O)}else q(Y,E,O)}),x.pop(),f=null};let k=null;function X(E){k&&k(E)}function re(){ve.stop()}function he(){ve.start()}const ve=new yv;ve.setAnimationLoop(X),typeof self<"u"&&ve.setContext(self),this.setAnimationLoop=function(E){k=E,_e.setAnimationLoop(E),E===null?ve.stop():ve.start()},_e.addEventListener("sessionstart",re),_e.addEventListener("sessionend",he),this.render=function(E,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),_e.enabled===!0&&_e.isPresenting===!0&&(_e.cameraAutoUpdate===!0&&_e.updateCamera(B),B=_e.getCamera()),E.isScene===!0&&E.onBeforeRender(h,E,B,_),f=Rt.get(E,x.length),f.init(),x.push(f),ae.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),te.setFromProjectionMatrix(ae),j=this.localClippingEnabled,I=b.init(this.clippingPlanes,j),d=$e.get(E,v.length),d.init(),v.push(d),Ze(E,B,0,h.sortObjects),d.finish(),h.sortObjects===!0&&d.sort(K,U),I===!0&&b.beginShadows();const q=f.state.shadowsArray;if(w.render(q,E,B),I===!0&&b.endShadows(),this.info.autoReset===!0&&this.info.reset(),z.render(d,E),f.setupLights(h.useLegacyLights),B.isArrayCamera){const O=B.cameras;for(let Y=0,Se=O.length;Y<Se;Y++){const Le=O[Y];xt(d,E,Le,Le.viewport)}}else xt(d,E,B);_!==null&&(ue.updateMultisampleRenderTarget(_),ue.updateRenderTargetMipmap(_)),E.isScene===!0&&E.onAfterRender(h,E,B),me.resetDefaultState(),y=-1,M=null,x.pop(),x.length>0?f=x[x.length-1]:f=null,v.pop(),v.length>0?d=v[v.length-1]:d=null};function Ze(E,B,q,O){if(E.visible===!1)return;if(E.layers.test(B.layers)){if(E.isGroup)q=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(B);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||te.intersectsSprite(E)){O&&A.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ae);const Le=be.update(E),De=E.material;De.visible&&d.push(E,Le,De,q,A.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==le.render.frame&&(E.skeleton.update(),E.skeleton.frame=le.render.frame),!E.frustumCulled||te.intersectsObject(E))){O&&A.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ae);const Le=be.update(E),De=E.material;if(Array.isArray(De)){const Ie=Le.groups;for(let Be=0,Ne=Ie.length;Be<Ne;Be++){const ze=Ie[Be],lt=De[ze.materialIndex];lt&&lt.visible&&d.push(E,Le,lt,q,A.z,ze)}}else De.visible&&d.push(E,Le,De,q,A.z,null)}}const Se=E.children;for(let Le=0,De=Se.length;Le<De;Le++)Ze(Se[Le],B,q,O)}function xt(E,B,q,O){const Y=E.opaque,Se=E.transmissive,Le=E.transparent;f.setupLightsView(q),I===!0&&b.setGlobalState(h.clippingPlanes,q),Se.length>0&&Ot(Y,B,q),O&&oe.viewport(C.copy(O)),Y.length>0&&Gn(Y,B,q),Se.length>0&&Gn(Se,B,q),Le.length>0&&Gn(Le,B,q),oe.buffers.depth.setTest(!0),oe.buffers.depth.setMask(!0),oe.buffers.color.setMask(!0),oe.setPolygonOffset(!1)}function Ot(E,B,q){const O=W.isWebGL2;H===null&&(H=new wr(1024,1024,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")?Ao:yr,minFilter:Co,samples:O&&s===!0?4:0}));const Y=h.getRenderTarget();h.setRenderTarget(H),h.clear();const Se=h.toneMapping;h.toneMapping=fi,Gn(E,B,q),h.toneMapping=Se,ue.updateMultisampleRenderTarget(H),ue.updateRenderTargetMipmap(H),h.setRenderTarget(Y)}function Gn(E,B,q){const O=B.isScene===!0?B.overrideMaterial:null;for(let Y=0,Se=E.length;Y<Se;Y++){const Le=E[Y],De=Le.object,Ie=Le.geometry,Be=O===null?Le.material:O,Ne=Le.group;De.layers.test(q.layers)&&ot(De,B,q,Ie,Be,Ne)}}function ot(E,B,q,O,Y,Se){E.onBeforeRender(h,B,q,O,Y,Se),E.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),Y.onBeforeRender(h,B,q,O,E,Se),Y.transparent===!0&&Y.side===Pi&&Y.forceSinglePass===!1?(Y.side=fn,Y.needsUpdate=!0,h.renderBufferDirect(q,B,O,Y,E,Se),Y.side=ji,Y.needsUpdate=!0,h.renderBufferDirect(q,B,O,Y,E,Se),Y.side=Pi):h.renderBufferDirect(q,B,O,Y,E,Se),E.onAfterRender(h,B,q,O,Y,Se)}function vn(E,B,q){B.isScene!==!0&&(B=F);const O=fe.get(E),Y=f.state.lights,Se=f.state.shadowsArray,Le=Y.state.version,De=Pe.getParameters(E,Y.state,Se,B,q),Ie=Pe.getProgramCacheKey(De);let Be=O.programs;O.environment=E.isMeshStandardMaterial?B.environment:null,O.fog=B.fog,O.envMap=(E.isMeshStandardMaterial?Ve:we).get(E.envMap||O.environment),Be===void 0&&(E.addEventListener("dispose",Ue),Be=new Map,O.programs=Be);let Ne=Be.get(Ie);if(Ne!==void 0){if(O.currentProgram===Ne&&O.lightsStateVersion===Le)return Vn(E,De),Ne}else De.uniforms=Pe.getUniforms(E),E.onBuild(q,De,h),E.onBeforeCompile(De,h),Ne=Pe.acquireProgram(De,Ie),Be.set(Ie,Ne),O.uniforms=De.uniforms;const ze=O.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(ze.clippingPlanes=b.uniform),Vn(E,De),O.needsLights=Lv(E),O.lightsStateVersion=Le,O.needsLights&&(ze.ambientLightColor.value=Y.state.ambient,ze.lightProbe.value=Y.state.probe,ze.directionalLights.value=Y.state.directional,ze.directionalLightShadows.value=Y.state.directionalShadow,ze.spotLights.value=Y.state.spot,ze.spotLightShadows.value=Y.state.spotShadow,ze.rectAreaLights.value=Y.state.rectArea,ze.ltc_1.value=Y.state.rectAreaLTC1,ze.ltc_2.value=Y.state.rectAreaLTC2,ze.pointLights.value=Y.state.point,ze.pointLightShadows.value=Y.state.pointShadow,ze.hemisphereLights.value=Y.state.hemi,ze.directionalShadowMap.value=Y.state.directionalShadowMap,ze.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,ze.spotShadowMap.value=Y.state.spotShadowMap,ze.spotLightMatrix.value=Y.state.spotLightMatrix,ze.spotLightMap.value=Y.state.spotLightMap,ze.pointShadowMap.value=Y.state.pointShadowMap,ze.pointShadowMatrix.value=Y.state.pointShadowMatrix);const lt=Ne.getUniforms(),nn=$a.seqWithValue(lt.seq,ze);return O.currentProgram=Ne,O.uniformsList=nn,Ne}function Vn(E,B){const q=fe.get(E);q.outputEncoding=B.outputEncoding,q.instancing=B.instancing,q.skinning=B.skinning,q.morphTargets=B.morphTargets,q.morphNormals=B.morphNormals,q.morphColors=B.morphColors,q.morphTargetsCount=B.morphTargetsCount,q.numClippingPlanes=B.numClippingPlanes,q.numIntersection=B.numClipIntersection,q.vertexAlphas=B.vertexAlphas,q.vertexTangents=B.vertexTangents,q.toneMapping=B.toneMapping}function Cv(E,B,q,O,Y){B.isScene!==!0&&(B=F),ue.resetTextureUnits();const Se=B.fog,Le=O.isMeshStandardMaterial?B.environment:null,De=_===null?h.outputEncoding:_.isXRRenderTarget===!0?_.texture.encoding:Sr,Ie=(O.isMeshStandardMaterial?Ve:we).get(O.envMap||Le),Be=O.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ne=!!O.normalMap&&!!q.attributes.tangent,ze=!!q.morphAttributes.position,lt=!!q.morphAttributes.normal,nn=!!q.morphAttributes.color,Jn=O.toneMapped?h.toneMapping:fi,Yi=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ut=Yi!==void 0?Yi.length:0,Fe=fe.get(O),Zl=f.state.lights;if(I===!0&&(j===!0||E!==M)){const rn=E===M&&O.id===y;b.setState(O,E,rn)}let yt=!1;O.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==Zl.state.version||Fe.outputEncoding!==De||Y.isInstancedMesh&&Fe.instancing===!1||!Y.isInstancedMesh&&Fe.instancing===!0||Y.isSkinnedMesh&&Fe.skinning===!1||!Y.isSkinnedMesh&&Fe.skinning===!0||Fe.envMap!==Ie||O.fog===!0&&Fe.fog!==Se||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==b.numPlanes||Fe.numIntersection!==b.numIntersection)||Fe.vertexAlphas!==Be||Fe.vertexTangents!==Ne||Fe.morphTargets!==ze||Fe.morphNormals!==lt||Fe.morphColors!==nn||Fe.toneMapping!==Jn||W.isWebGL2===!0&&Fe.morphTargetsCount!==ut)&&(yt=!0):(yt=!0,Fe.__version=O.version);let Zi=Fe.currentProgram;yt===!0&&(Zi=vn(O,B,Y));let Lf=!1,As=!1,Kl=!1;const Ut=Zi.getUniforms(),Ki=Fe.uniforms;if(oe.useProgram(Zi.program)&&(Lf=!0,As=!0,Kl=!0),O.id!==y&&(y=O.id,As=!0),Lf||M!==E){if(Ut.setValue(D,"projectionMatrix",E.projectionMatrix),W.logarithmicDepthBuffer&&Ut.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),M!==E&&(M=E,As=!0,Kl=!0),O.isShaderMaterial||O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshStandardMaterial||O.envMap){const rn=Ut.map.cameraPosition;rn!==void 0&&rn.setValue(D,A.setFromMatrixPosition(E.matrixWorld))}(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&Ut.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial||O.isShadowMaterial||Y.isSkinnedMesh)&&Ut.setValue(D,"viewMatrix",E.matrixWorldInverse)}if(Y.isSkinnedMesh){Ut.setOptional(D,Y,"bindMatrix"),Ut.setOptional(D,Y,"bindMatrixInverse");const rn=Y.skeleton;rn&&(W.floatVertexTextures?(rn.boneTexture===null&&rn.computeBoneTexture(),Ut.setValue(D,"boneTexture",rn.boneTexture,ue),Ut.setValue(D,"boneTextureSize",rn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ql=q.morphAttributes;if((Ql.position!==void 0||Ql.normal!==void 0||Ql.color!==void 0&&W.isWebGL2===!0)&&J.update(Y,q,Zi),(As||Fe.receiveShadow!==Y.receiveShadow)&&(Fe.receiveShadow=Y.receiveShadow,Ut.setValue(D,"receiveShadow",Y.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(Ki.envMap.value=Ie,Ki.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),As&&(Ut.setValue(D,"toneMappingExposure",h.toneMappingExposure),Fe.needsLights&&Av(Ki,Kl),Se&&O.fog===!0&&He.refreshFogUniforms(Ki,Se),He.refreshMaterialUniforms(Ki,O,Z,R,H),$a.upload(D,Fe.uniformsList,Ki,ue)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&($a.upload(D,Fe.uniformsList,Ki,ue),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&Ut.setValue(D,"center",Y.center),Ut.setValue(D,"modelViewMatrix",Y.modelViewMatrix),Ut.setValue(D,"normalMatrix",Y.normalMatrix),Ut.setValue(D,"modelMatrix",Y.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const rn=O.uniformsGroups;for(let Jl=0,Pv=rn.length;Jl<Pv;Jl++)if(W.isWebGL2){const Pf=rn[Jl];Q.update(Pf,Zi),Q.bind(Pf,Zi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Zi}function Av(E,B){E.ambientLightColor.needsUpdate=B,E.lightProbe.needsUpdate=B,E.directionalLights.needsUpdate=B,E.directionalLightShadows.needsUpdate=B,E.pointLights.needsUpdate=B,E.pointLightShadows.needsUpdate=B,E.spotLights.needsUpdate=B,E.spotLightShadows.needsUpdate=B,E.rectAreaLights.needsUpdate=B,E.hemisphereLights.needsUpdate=B}function Lv(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return m},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(E,B,q){fe.get(E.texture).__webglTexture=B,fe.get(E.depthTexture).__webglTexture=q;const O=fe.get(E);O.__hasExternalTextures=!0,O.__hasExternalTextures&&(O.__autoAllocateDepthBuffer=q===void 0,O.__autoAllocateDepthBuffer||ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,B){const q=fe.get(E);q.__webglFramebuffer=B,q.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(E,B=0,q=0){_=E,g=B,m=q;let O=!0,Y=null,Se=!1,Le=!1;if(E){const Ie=fe.get(E);Ie.__useDefaultFramebuffer!==void 0?(oe.bindFramebuffer(36160,null),O=!1):Ie.__webglFramebuffer===void 0?ue.setupRenderTarget(E):Ie.__hasExternalTextures&&ue.rebindTextures(E,fe.get(E.texture).__webglTexture,fe.get(E.depthTexture).__webglTexture);const Be=E.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Le=!0);const Ne=fe.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Y=Ne[B],Se=!0):W.isWebGL2&&E.samples>0&&ue.useMultisampledRTT(E)===!1?Y=fe.get(E).__webglMultisampledFramebuffer:Y=Ne,C.copy(E.viewport),L.copy(E.scissor),S=E.scissorTest}else C.copy(N).multiplyScalar(Z).floor(),L.copy($).multiplyScalar(Z).floor(),S=ee;if(oe.bindFramebuffer(36160,Y)&&W.drawBuffers&&O&&oe.drawBuffers(E,Y),oe.viewport(C),oe.scissor(L),oe.setScissorTest(S),Se){const Ie=fe.get(E.texture);D.framebufferTexture2D(36160,36064,34069+B,Ie.__webglTexture,q)}else if(Le){const Ie=fe.get(E.texture),Be=B||0;D.framebufferTextureLayer(36160,36064,Ie.__webglTexture,q||0,Be)}y=-1},this.readRenderTargetPixels=function(E,B,q,O,Y,Se,Le){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=fe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Le!==void 0&&(De=De[Le]),De){oe.bindFramebuffer(36160,De);try{const Ie=E.texture,Be=Ie.format,Ne=Ie.type;if(Be!==Fn&&ge.convert(Be)!==D.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ze=Ne===Ao&&(ne.has("EXT_color_buffer_half_float")||W.isWebGL2&&ne.has("EXT_color_buffer_float"));if(Ne!==yr&&ge.convert(Ne)!==D.getParameter(35738)&&!(Ne===cr&&(W.isWebGL2||ne.has("OES_texture_float")||ne.has("WEBGL_color_buffer_float")))&&!ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=E.width-O&&q>=0&&q<=E.height-Y&&D.readPixels(B,q,O,Y,ge.convert(Be),ge.convert(Ne),Se)}finally{const Ie=_!==null?fe.get(_).__webglFramebuffer:null;oe.bindFramebuffer(36160,Ie)}}},this.copyFramebufferToTexture=function(E,B,q=0){const O=Math.pow(2,-q),Y=Math.floor(B.image.width*O),Se=Math.floor(B.image.height*O);ue.setTexture2D(B,0),D.copyTexSubImage2D(3553,q,0,0,E.x,E.y,Y,Se),oe.unbindTexture()},this.copyTextureToTexture=function(E,B,q,O=0){const Y=B.image.width,Se=B.image.height,Le=ge.convert(q.format),De=ge.convert(q.type);ue.setTexture2D(q,0),D.pixelStorei(37440,q.flipY),D.pixelStorei(37441,q.premultiplyAlpha),D.pixelStorei(3317,q.unpackAlignment),B.isDataTexture?D.texSubImage2D(3553,O,E.x,E.y,Y,Se,Le,De,B.image.data):B.isCompressedTexture?D.compressedTexSubImage2D(3553,O,E.x,E.y,B.mipmaps[0].width,B.mipmaps[0].height,Le,B.mipmaps[0].data):D.texSubImage2D(3553,O,E.x,E.y,Le,De,B.image),O===0&&q.generateMipmaps&&D.generateMipmap(3553),oe.unbindTexture()},this.copyTextureToTexture3D=function(E,B,q,O,Y=0){if(h.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Se=E.max.x-E.min.x+1,Le=E.max.y-E.min.y+1,De=E.max.z-E.min.z+1,Ie=ge.convert(O.format),Be=ge.convert(O.type);let Ne;if(O.isData3DTexture)ue.setTexture3D(O,0),Ne=32879;else if(O.isDataArrayTexture)ue.setTexture2DArray(O,0),Ne=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(37440,O.flipY),D.pixelStorei(37441,O.premultiplyAlpha),D.pixelStorei(3317,O.unpackAlignment);const ze=D.getParameter(3314),lt=D.getParameter(32878),nn=D.getParameter(3316),Jn=D.getParameter(3315),Yi=D.getParameter(32877),ut=q.isCompressedTexture?q.mipmaps[0]:q.image;D.pixelStorei(3314,ut.width),D.pixelStorei(32878,ut.height),D.pixelStorei(3316,E.min.x),D.pixelStorei(3315,E.min.y),D.pixelStorei(32877,E.min.z),q.isDataTexture||q.isData3DTexture?D.texSubImage3D(Ne,Y,B.x,B.y,B.z,Se,Le,De,Ie,Be,ut.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),D.compressedTexSubImage3D(Ne,Y,B.x,B.y,B.z,Se,Le,De,Ie,ut.data)):D.texSubImage3D(Ne,Y,B.x,B.y,B.z,Se,Le,De,Ie,Be,ut),D.pixelStorei(3314,ze),D.pixelStorei(32878,lt),D.pixelStorei(3316,nn),D.pixelStorei(3315,Jn),D.pixelStorei(32877,Yi),Y===0&&O.generateMipmaps&&D.generateMipmap(Ne),oe.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?ue.setTextureCube(E,0):E.isData3DTexture?ue.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?ue.setTexture2DArray(E,0):ue.setTexture2D(E,0),oe.unbindTexture()},this.resetState=function(){g=0,m=0,_=null,oe.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Object.defineProperties(Af.prototype,{physicallyCorrectLights:{get:function(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights},set:function(t){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!t}}});class nb extends Af{}nb.prototype.isWebGL1Renderer=!0;class ib extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class _d extends Bo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const vm=new ht,xd=new dv,Pa=new ql,Ra=new V;class _m extends Lt{constructor(e=new Qn,n=new _d){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Pa.copy(i.boundingSphere),Pa.applyMatrix4(r),Pa.radius+=s,e.ray.intersectsSphere(Pa)===!1)return;vm.copy(r).invert(),xd.copy(e.ray).applyMatrix4(vm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,d=i.attributes.position;if(u!==null){const f=Math.max(0,o.start),v=Math.min(u.count,o.start+o.count);for(let x=f,h=v;x<h;x++){const p=u.getX(x);Ra.fromBufferAttribute(d,p),xm(Ra,p,l,r,e,n,this)}}else{const f=Math.max(0,o.start),v=Math.min(d.count,o.start+o.count);for(let x=f,h=v;x<h;x++)Ra.fromBufferAttribute(d,x),xm(Ra,x,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function xm(t,e,n,i,r,s,o){const a=xd.distanceSqToPoint(t);if(a<n){const l=new V;xd.closestPointToPoint(t,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}const ym={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class rb{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(c){a++,s===!1&&r.onStart!==void 0&&r.onStart(c,o,a),s=!0},this.itemEnd=function(c){o++,r.onProgress!==void 0&&r.onProgress(c,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,d){return u.push(c,d),this},this.removeHandler=function(c){const d=u.indexOf(c);return d!==-1&&u.splice(d,2),this},this.getHandler=function(c){for(let d=0,f=u.length;d<f;d+=2){const v=u[d],x=u[d+1];if(v.global&&(v.lastIndex=0),v.test(c))return x}return null}}}const sb=new rb;class Tv{constructor(e){this.manager=e!==void 0?e:sb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class ob extends Tv{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=ym.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;const a=Po("img");function l(){c(),ym.add(e,this),n&&n(this),s.manager.itemEnd(e)}function u(d){c(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class ab extends Tv{constructor(e){super(e)}load(e,n,i,r){const s=new tn,o=new ob(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class lb extends Lt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const lc=new ht,Sm=new V,wm=new V;class ub{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bf,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Sm.setFromMatrixPosition(e.matrixWorld),n.position.copy(Sm),wm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(wm),n.updateMatrixWorld(),lc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(lc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class cb extends ub{constructor(){super(new Sv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class db extends lb{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new cb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ef}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ef);const Mm=t=>{const e=new Float32Array(t*3);for(let n=0;n<t;n++)e[n]=(Math.random()-.5)*10;return e},fb=t=>{const e=t.domElement,n=e.clientWidth,i=e.clientHeight,r=e.width!==n||e.height!==i;return r&&t.setSize(n,i,!1),r};let yd=0,Sd=0;document.addEventListener("mousemove",t=>{yd=t.clientX,Sd=t.clientY});const hb=()=>{const t=document.getElementById("c"),e=new Af({canvas:t});e.setClearColor(new qe("#1c1624"));const n=new ib,i=16777215,r=1,s=new db(i,r);s.position.set(-1,2,4),n.add(s);const o=75,a=2,l=1.5,u=5,c=new wn(o,a,l,u);c.position.z=2;const d=[new Qn,new Qn];d[0].setAttribute("position",new bn(Mm(350),3)),d[1].setAttribute("position",new bn(Mm(1500),3));const f=new ab,v=[new _d({size:.05,map:f.load("https://raw.githubusercontent.com/Kuntal-Das/textures/main/sp1.png"),transparent:!0}),new _d({size:.075,map:f.load("https://raw.githubusercontent.com/Kuntal-Das/textures/main/sp2.png"),transparent:!0})],x=new _m(d[0],v[0]),h=new _m(d[1],v[1]);n.add(x),n.add(h);const p=g=>{if(fb(e)){const m=e.domElement;c.aspect=m.clientWidth/m.clientHeight,c.updateProjectionMatrix()}x.position.x=yd*1e-4,x.position.y=Sd*-1e-4,h.position.x=yd*1e-4,h.position.y=Sd*-1e-4,e.render(n,c),requestAnimationFrame(p)};requestAnimationFrame(p)};hb();
