(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function rE(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Gx={exports:{}},vd={},Wx={exports:{}},st={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bu=Symbol.for("react.element"),sE=Symbol.for("react.portal"),oE=Symbol.for("react.fragment"),aE=Symbol.for("react.strict_mode"),lE=Symbol.for("react.profiler"),uE=Symbol.for("react.provider"),cE=Symbol.for("react.context"),fE=Symbol.for("react.forward_ref"),dE=Symbol.for("react.suspense"),hE=Symbol.for("react.memo"),pE=Symbol.for("react.lazy"),Qg=Symbol.iterator;function mE(n){return n===null||typeof n!="object"?null:(n=Qg&&n[Qg]||n["@@iterator"],typeof n=="function"?n:null)}var Xx={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},jx=Object.assign,Yx={};function ll(n,e,t){this.props=n,this.context=e,this.refs=Yx,this.updater=t||Xx}ll.prototype.isReactComponent={};ll.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};ll.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function qx(){}qx.prototype=ll.prototype;function v_(n,e,t){this.props=n,this.context=e,this.refs=Yx,this.updater=t||Xx}var x_=v_.prototype=new qx;x_.constructor=v_;jx(x_,ll.prototype);x_.isPureReactComponent=!0;var Jg=Array.isArray,$x=Object.prototype.hasOwnProperty,y_={current:null},Kx={key:!0,ref:!0,__self:!0,__source:!0};function Zx(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)$x.call(e,i)&&!Kx.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Bu,type:n,key:s,ref:o,props:r,_owner:y_.current}}function _E(n,e){return{$$typeof:Bu,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function S_(n){return typeof n=="object"&&n!==null&&n.$$typeof===Bu}function gE(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var e0=/\/+/g;function jd(n,e){return typeof n=="object"&&n!==null&&n.key!=null?gE(""+n.key):e.toString(36)}function ef(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case Bu:case sE:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+jd(o,0):i,Jg(r)?(t="",n!=null&&(t=n.replace(e0,"$&/")+"/"),ef(r,e,t,"",function(u){return u})):r!=null&&(S_(r)&&(r=_E(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(e0,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Jg(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+jd(s,a);o+=ef(s,e,t,l,r)}else if(l=mE(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+jd(s,a++),o+=ef(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Qu(n,e,t){if(n==null)return n;var i=[],r=0;return ef(n,i,"","",function(s){return e.call(t,s,r++)}),i}function vE(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var Gn={current:null},tf={transition:null},xE={ReactCurrentDispatcher:Gn,ReactCurrentBatchConfig:tf,ReactCurrentOwner:y_};function Qx(){throw Error("act(...) is not supported in production builds of React.")}st.Children={map:Qu,forEach:function(n,e,t){Qu(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Qu(n,function(){e++}),e},toArray:function(n){return Qu(n,function(e){return e})||[]},only:function(n){if(!S_(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};st.Component=ll;st.Fragment=oE;st.Profiler=lE;st.PureComponent=v_;st.StrictMode=aE;st.Suspense=dE;st.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xE;st.act=Qx;st.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=jx({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=y_.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)$x.call(e,l)&&!Kx.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Bu,type:n.type,key:r,ref:s,props:i,_owner:o}};st.createContext=function(n){return n={$$typeof:cE,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:uE,_context:n},n.Consumer=n};st.createElement=Zx;st.createFactory=function(n){var e=Zx.bind(null,n);return e.type=n,e};st.createRef=function(){return{current:null}};st.forwardRef=function(n){return{$$typeof:fE,render:n}};st.isValidElement=S_;st.lazy=function(n){return{$$typeof:pE,_payload:{_status:-1,_result:n},_init:vE}};st.memo=function(n,e){return{$$typeof:hE,type:n,compare:e===void 0?null:e}};st.startTransition=function(n){var e=tf.transition;tf.transition={};try{n()}finally{tf.transition=e}};st.unstable_act=Qx;st.useCallback=function(n,e){return Gn.current.useCallback(n,e)};st.useContext=function(n){return Gn.current.useContext(n)};st.useDebugValue=function(){};st.useDeferredValue=function(n){return Gn.current.useDeferredValue(n)};st.useEffect=function(n,e){return Gn.current.useEffect(n,e)};st.useId=function(){return Gn.current.useId()};st.useImperativeHandle=function(n,e,t){return Gn.current.useImperativeHandle(n,e,t)};st.useInsertionEffect=function(n,e){return Gn.current.useInsertionEffect(n,e)};st.useLayoutEffect=function(n,e){return Gn.current.useLayoutEffect(n,e)};st.useMemo=function(n,e){return Gn.current.useMemo(n,e)};st.useReducer=function(n,e,t){return Gn.current.useReducer(n,e,t)};st.useRef=function(n){return Gn.current.useRef(n)};st.useState=function(n){return Gn.current.useState(n)};st.useSyncExternalStore=function(n,e,t){return Gn.current.useSyncExternalStore(n,e,t)};st.useTransition=function(){return Gn.current.useTransition()};st.version="18.3.1";Wx.exports=st;var Ti=Wx.exports;const yE=rE(Ti);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var SE=Ti,ME=Symbol.for("react.element"),EE=Symbol.for("react.fragment"),TE=Object.prototype.hasOwnProperty,wE=SE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,AE={key:!0,ref:!0,__self:!0,__source:!0};function Jx(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)TE.call(e,i)&&!AE.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:ME,type:n,key:s,ref:o,props:r,_owner:wE.current}}vd.Fragment=EE;vd.jsx=Jx;vd.jsxs=Jx;Gx.exports=vd;var I=Gx.exports,ey={exports:{}},bi={},ty={exports:{}},ny={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(N,K){var P=N.length;N.push(K);e:for(;0<P;){var ne=P-1>>>1,Se=N[ne];if(0<r(Se,K))N[ne]=K,N[P]=Se,P=ne;else break e}}function t(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var K=N[0],P=N.pop();if(P!==K){N[0]=P;e:for(var ne=0,Se=N.length,He=Se>>>1;ne<He;){var q=2*(ne+1)-1,te=N[q],ce=q+1,ue=N[ce];if(0>r(te,P))ce<Se&&0>r(ue,te)?(N[ne]=ue,N[ce]=P,ne=ce):(N[ne]=te,N[q]=P,ne=q);else if(ce<Se&&0>r(ue,P))N[ne]=ue,N[ce]=P,ne=ce;else break e}}return K}function r(N,K){var P=N.sortIndex-K.sortIndex;return P!==0?P:N.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,f=3,p=!1,g=!1,_=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(N){for(var K=t(u);K!==null;){if(K.callback===null)i(u);else if(K.startTime<=N)i(u),K.sortIndex=K.expirationTime,e(l,K);else break;K=t(u)}}function S(N){if(_=!1,x(N),!g)if(t(l)!==null)g=!0,G(A);else{var K=t(u);K!==null&&Y(S,K.startTime-N)}}function A(N,K){g=!1,_&&(_=!1,h(R),R=-1),p=!0;var P=f;try{for(x(K),d=t(l);d!==null&&(!(d.expirationTime>K)||N&&!T());){var ne=d.callback;if(typeof ne=="function"){d.callback=null,f=d.priorityLevel;var Se=ne(d.expirationTime<=K);K=n.unstable_now(),typeof Se=="function"?d.callback=Se:d===t(l)&&i(l),x(K)}else i(l);d=t(l)}if(d!==null)var He=!0;else{var q=t(u);q!==null&&Y(S,q.startTime-K),He=!1}return He}finally{d=null,f=P,p=!1}}var w=!1,M=null,R=-1,L=5,y=-1;function T(){return!(n.unstable_now()-y<L)}function U(){if(M!==null){var N=n.unstable_now();y=N;var K=!0;try{K=M(!0,N)}finally{K?B():(w=!1,M=null)}}else w=!1}var B;if(typeof v=="function")B=function(){v(U)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,Z=j.port2;j.port1.onmessage=U,B=function(){Z.postMessage(null)}}else B=function(){m(U,0)};function G(N){M=N,w||(w=!0,B())}function Y(N,K){R=m(function(){N(n.unstable_now())},K)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(N){N.callback=null},n.unstable_continueExecution=function(){g||p||(g=!0,G(A))},n.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<N?Math.floor(1e3/N):5},n.unstable_getCurrentPriorityLevel=function(){return f},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(N){switch(f){case 1:case 2:case 3:var K=3;break;default:K=f}var P=f;f=K;try{return N()}finally{f=P}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(N,K){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var P=f;f=N;try{return K()}finally{f=P}},n.unstable_scheduleCallback=function(N,K,P){var ne=n.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?ne+P:ne):P=ne,N){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=P+Se,N={id:c++,callback:K,priorityLevel:N,startTime:P,expirationTime:Se,sortIndex:-1},P>ne?(N.sortIndex=P,e(u,N),t(l)===null&&N===t(u)&&(_?(h(R),R=-1):_=!0,Y(S,P-ne))):(N.sortIndex=Se,e(l,N),g||p||(g=!0,G(A))),N},n.unstable_shouldYield=T,n.unstable_wrapCallback=function(N){var K=f;return function(){var P=f;f=K;try{return N.apply(this,arguments)}finally{f=P}}}})(ny);ty.exports=ny;var CE=ty.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var RE=Ti,Ci=CE;function ae(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var iy=new Set,fu={};function ko(n,e){Ga(n,e),Ga(n+"Capture",e)}function Ga(n,e){for(fu[n]=e,n=0;n<e.length;n++)iy.add(e[n])}var Xr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),mp=Object.prototype.hasOwnProperty,PE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,t0={},n0={};function bE(n){return mp.call(n0,n)?!0:mp.call(t0,n)?!1:PE.test(n)?n0[n]=!0:(t0[n]=!0,!1)}function LE(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function DE(n,e,t,i){if(e===null||typeof e>"u"||LE(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Wn(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Sn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Sn[n]=new Wn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];Sn[e]=new Wn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){Sn[n]=new Wn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Sn[n]=new Wn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Sn[n]=new Wn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){Sn[n]=new Wn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){Sn[n]=new Wn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){Sn[n]=new Wn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){Sn[n]=new Wn(n,5,!1,n.toLowerCase(),null,!1,!1)});var M_=/[\-:]([a-z])/g;function E_(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(M_,E_);Sn[e]=new Wn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(M_,E_);Sn[e]=new Wn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(M_,E_);Sn[e]=new Wn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){Sn[n]=new Wn(n,1,!1,n.toLowerCase(),null,!1,!1)});Sn.xlinkHref=new Wn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){Sn[n]=new Wn(n,1,!1,n.toLowerCase(),null,!0,!0)});function T_(n,e,t,i){var r=Sn.hasOwnProperty(e)?Sn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(DE(e,t,r,i)&&(t=null),i||r===null?bE(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var Jr=RE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ju=Symbol.for("react.element"),fa=Symbol.for("react.portal"),da=Symbol.for("react.fragment"),w_=Symbol.for("react.strict_mode"),_p=Symbol.for("react.profiler"),ry=Symbol.for("react.provider"),sy=Symbol.for("react.context"),A_=Symbol.for("react.forward_ref"),gp=Symbol.for("react.suspense"),vp=Symbol.for("react.suspense_list"),C_=Symbol.for("react.memo"),us=Symbol.for("react.lazy"),oy=Symbol.for("react.offscreen"),i0=Symbol.iterator;function hl(n){return n===null||typeof n!="object"?null:(n=i0&&n[i0]||n["@@iterator"],typeof n=="function"?n:null)}var Ht=Object.assign,Yd;function Ll(n){if(Yd===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Yd=e&&e[1]||""}return`
`+Yd+n}var qd=!1;function $d(n,e){if(!n||qd)return"";qd=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{qd=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Ll(n):""}function NE(n){switch(n.tag){case 5:return Ll(n.type);case 16:return Ll("Lazy");case 13:return Ll("Suspense");case 19:return Ll("SuspenseList");case 0:case 2:case 15:return n=$d(n.type,!1),n;case 11:return n=$d(n.type.render,!1),n;case 1:return n=$d(n.type,!0),n;default:return""}}function xp(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case da:return"Fragment";case fa:return"Portal";case _p:return"Profiler";case w_:return"StrictMode";case gp:return"Suspense";case vp:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case sy:return(n.displayName||"Context")+".Consumer";case ry:return(n._context.displayName||"Context")+".Provider";case A_:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case C_:return e=n.displayName||null,e!==null?e:xp(n.type)||"Memo";case us:e=n._payload,n=n._init;try{return xp(n(e))}catch{}}return null}function IE(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xp(e);case 8:return e===w_?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Is(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function ay(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function UE(n){var e=ay(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function ec(n){n._valueTracker||(n._valueTracker=UE(n))}function ly(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=ay(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function Pf(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function yp(n,e){var t=e.checked;return Ht({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function r0(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Is(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function uy(n,e){e=e.checked,e!=null&&T_(n,"checked",e,!1)}function Sp(n,e){uy(n,e);var t=Is(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?Mp(n,e.type,t):e.hasOwnProperty("defaultValue")&&Mp(n,e.type,Is(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function s0(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function Mp(n,e,t){(e!=="number"||Pf(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Dl=Array.isArray;function Ca(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Is(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function Ep(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ae(91));return Ht({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function o0(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(ae(92));if(Dl(t)){if(1<t.length)throw Error(ae(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Is(t)}}function cy(n,e){var t=Is(e.value),i=Is(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function a0(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function fy(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Tp(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?fy(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var tc,dy=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(tc=tc||document.createElement("div"),tc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=tc.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function du(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Wl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},OE=["Webkit","ms","Moz","O"];Object.keys(Wl).forEach(function(n){OE.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Wl[e]=Wl[n]})});function hy(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Wl.hasOwnProperty(n)&&Wl[n]?(""+e).trim():e+"px"}function py(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=hy(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var FE=Ht({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function wp(n,e){if(e){if(FE[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ae(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ae(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ae(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ae(62))}}function Ap(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Cp=null;function R_(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Rp=null,Ra=null,Pa=null;function l0(n){if(n=Gu(n)){if(typeof Rp!="function")throw Error(ae(280));var e=n.stateNode;e&&(e=Ed(e),Rp(n.stateNode,n.type,e))}}function my(n){Ra?Pa?Pa.push(n):Pa=[n]:Ra=n}function _y(){if(Ra){var n=Ra,e=Pa;if(Pa=Ra=null,l0(n),e)for(n=0;n<e.length;n++)l0(e[n])}}function gy(n,e){return n(e)}function vy(){}var Kd=!1;function xy(n,e,t){if(Kd)return n(e,t);Kd=!0;try{return gy(n,e,t)}finally{Kd=!1,(Ra!==null||Pa!==null)&&(vy(),_y())}}function hu(n,e){var t=n.stateNode;if(t===null)return null;var i=Ed(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(ae(231,e,typeof t));return t}var Pp=!1;if(Xr)try{var pl={};Object.defineProperty(pl,"passive",{get:function(){Pp=!0}}),window.addEventListener("test",pl,pl),window.removeEventListener("test",pl,pl)}catch{Pp=!1}function kE(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var Xl=!1,bf=null,Lf=!1,bp=null,zE={onError:function(n){Xl=!0,bf=n}};function BE(n,e,t,i,r,s,o,a,l){Xl=!1,bf=null,kE.apply(zE,arguments)}function HE(n,e,t,i,r,s,o,a,l){if(BE.apply(this,arguments),Xl){if(Xl){var u=bf;Xl=!1,bf=null}else throw Error(ae(198));Lf||(Lf=!0,bp=u)}}function zo(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function yy(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function u0(n){if(zo(n)!==n)throw Error(ae(188))}function VE(n){var e=n.alternate;if(!e){if(e=zo(n),e===null)throw Error(ae(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return u0(r),n;if(s===i)return u0(r),e;s=s.sibling}throw Error(ae(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(ae(189))}}if(t.alternate!==i)throw Error(ae(190))}if(t.tag!==3)throw Error(ae(188));return t.stateNode.current===t?n:e}function Sy(n){return n=VE(n),n!==null?My(n):null}function My(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=My(n);if(e!==null)return e;n=n.sibling}return null}var Ey=Ci.unstable_scheduleCallback,c0=Ci.unstable_cancelCallback,GE=Ci.unstable_shouldYield,WE=Ci.unstable_requestPaint,$t=Ci.unstable_now,XE=Ci.unstable_getCurrentPriorityLevel,P_=Ci.unstable_ImmediatePriority,Ty=Ci.unstable_UserBlockingPriority,Df=Ci.unstable_NormalPriority,jE=Ci.unstable_LowPriority,wy=Ci.unstable_IdlePriority,xd=null,Sr=null;function YE(n){if(Sr&&typeof Sr.onCommitFiberRoot=="function")try{Sr.onCommitFiberRoot(xd,n,void 0,(n.current.flags&128)===128)}catch{}}var ar=Math.clz32?Math.clz32:KE,qE=Math.log,$E=Math.LN2;function KE(n){return n>>>=0,n===0?32:31-(qE(n)/$E|0)|0}var nc=64,ic=4194304;function Nl(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Nf(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=Nl(a):(s&=o,s!==0&&(i=Nl(s)))}else o=t&~r,o!==0?i=Nl(o):s!==0&&(i=Nl(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-ar(e),r=1<<t,i|=n[t],e&=~r;return i}function ZE(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function QE(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-ar(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=ZE(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function Lp(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Ay(){var n=nc;return nc<<=1,!(nc&4194240)&&(nc=64),n}function Zd(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Hu(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-ar(e),n[e]=t}function JE(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-ar(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function b_(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-ar(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var yt=0;function Cy(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Ry,L_,Py,by,Ly,Dp=!1,rc=[],Ss=null,Ms=null,Es=null,pu=new Map,mu=new Map,fs=[],eT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function f0(n,e){switch(n){case"focusin":case"focusout":Ss=null;break;case"dragenter":case"dragleave":Ms=null;break;case"mouseover":case"mouseout":Es=null;break;case"pointerover":case"pointerout":pu.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":mu.delete(e.pointerId)}}function ml(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Gu(e),e!==null&&L_(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function tT(n,e,t,i,r){switch(e){case"focusin":return Ss=ml(Ss,n,e,t,i,r),!0;case"dragenter":return Ms=ml(Ms,n,e,t,i,r),!0;case"mouseover":return Es=ml(Es,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return pu.set(s,ml(pu.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,mu.set(s,ml(mu.get(s)||null,n,e,t,i,r)),!0}return!1}function Dy(n){var e=fo(n.target);if(e!==null){var t=zo(e);if(t!==null){if(e=t.tag,e===13){if(e=yy(t),e!==null){n.blockedOn=e,Ly(n.priority,function(){Py(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function nf(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Np(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);Cp=i,t.target.dispatchEvent(i),Cp=null}else return e=Gu(t),e!==null&&L_(e),n.blockedOn=t,!1;e.shift()}return!0}function d0(n,e,t){nf(n)&&t.delete(e)}function nT(){Dp=!1,Ss!==null&&nf(Ss)&&(Ss=null),Ms!==null&&nf(Ms)&&(Ms=null),Es!==null&&nf(Es)&&(Es=null),pu.forEach(d0),mu.forEach(d0)}function _l(n,e){n.blockedOn===e&&(n.blockedOn=null,Dp||(Dp=!0,Ci.unstable_scheduleCallback(Ci.unstable_NormalPriority,nT)))}function _u(n){function e(r){return _l(r,n)}if(0<rc.length){_l(rc[0],n);for(var t=1;t<rc.length;t++){var i=rc[t];i.blockedOn===n&&(i.blockedOn=null)}}for(Ss!==null&&_l(Ss,n),Ms!==null&&_l(Ms,n),Es!==null&&_l(Es,n),pu.forEach(e),mu.forEach(e),t=0;t<fs.length;t++)i=fs[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<fs.length&&(t=fs[0],t.blockedOn===null);)Dy(t),t.blockedOn===null&&fs.shift()}var ba=Jr.ReactCurrentBatchConfig,If=!0;function iT(n,e,t,i){var r=yt,s=ba.transition;ba.transition=null;try{yt=1,D_(n,e,t,i)}finally{yt=r,ba.transition=s}}function rT(n,e,t,i){var r=yt,s=ba.transition;ba.transition=null;try{yt=4,D_(n,e,t,i)}finally{yt=r,ba.transition=s}}function D_(n,e,t,i){if(If){var r=Np(n,e,t,i);if(r===null)ah(n,e,i,Uf,t),f0(n,i);else if(tT(r,n,e,t,i))i.stopPropagation();else if(f0(n,i),e&4&&-1<eT.indexOf(n)){for(;r!==null;){var s=Gu(r);if(s!==null&&Ry(s),s=Np(n,e,t,i),s===null&&ah(n,e,i,Uf,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else ah(n,e,i,null,t)}}var Uf=null;function Np(n,e,t,i){if(Uf=null,n=R_(i),n=fo(n),n!==null)if(e=zo(n),e===null)n=null;else if(t=e.tag,t===13){if(n=yy(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Uf=n,null}function Ny(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(XE()){case P_:return 1;case Ty:return 4;case Df:case jE:return 16;case wy:return 536870912;default:return 16}default:return 16}}var ps=null,N_=null,rf=null;function Iy(){if(rf)return rf;var n,e=N_,t=e.length,i,r="value"in ps?ps.value:ps.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return rf=r.slice(n,1<i?1-i:void 0)}function sf(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function sc(){return!0}function h0(){return!1}function Li(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?sc:h0,this.isPropagationStopped=h0,this}return Ht(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=sc)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=sc)},persist:function(){},isPersistent:sc}),e}var ul={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},I_=Li(ul),Vu=Ht({},ul,{view:0,detail:0}),sT=Li(Vu),Qd,Jd,gl,yd=Ht({},Vu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:U_,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==gl&&(gl&&n.type==="mousemove"?(Qd=n.screenX-gl.screenX,Jd=n.screenY-gl.screenY):Jd=Qd=0,gl=n),Qd)},movementY:function(n){return"movementY"in n?n.movementY:Jd}}),p0=Li(yd),oT=Ht({},yd,{dataTransfer:0}),aT=Li(oT),lT=Ht({},Vu,{relatedTarget:0}),eh=Li(lT),uT=Ht({},ul,{animationName:0,elapsedTime:0,pseudoElement:0}),cT=Li(uT),fT=Ht({},ul,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),dT=Li(fT),hT=Ht({},ul,{data:0}),m0=Li(hT),pT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_T={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gT(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=_T[n])?!!e[n]:!1}function U_(){return gT}var vT=Ht({},Vu,{key:function(n){if(n.key){var e=pT[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=sf(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?mT[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:U_,charCode:function(n){return n.type==="keypress"?sf(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?sf(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),xT=Li(vT),yT=Ht({},yd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_0=Li(yT),ST=Ht({},Vu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:U_}),MT=Li(ST),ET=Ht({},ul,{propertyName:0,elapsedTime:0,pseudoElement:0}),TT=Li(ET),wT=Ht({},yd,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),AT=Li(wT),CT=[9,13,27,32],O_=Xr&&"CompositionEvent"in window,jl=null;Xr&&"documentMode"in document&&(jl=document.documentMode);var RT=Xr&&"TextEvent"in window&&!jl,Uy=Xr&&(!O_||jl&&8<jl&&11>=jl),g0=" ",v0=!1;function Oy(n,e){switch(n){case"keyup":return CT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fy(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ha=!1;function PT(n,e){switch(n){case"compositionend":return Fy(e);case"keypress":return e.which!==32?null:(v0=!0,g0);case"textInput":return n=e.data,n===g0&&v0?null:n;default:return null}}function bT(n,e){if(ha)return n==="compositionend"||!O_&&Oy(n,e)?(n=Iy(),rf=N_=ps=null,ha=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Uy&&e.locale!=="ko"?null:e.data;default:return null}}var LT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function x0(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!LT[n.type]:e==="textarea"}function ky(n,e,t,i){my(i),e=Of(e,"onChange"),0<e.length&&(t=new I_("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var Yl=null,gu=null;function DT(n){$y(n,0)}function Sd(n){var e=_a(n);if(ly(e))return n}function NT(n,e){if(n==="change")return e}var zy=!1;if(Xr){var th;if(Xr){var nh="oninput"in document;if(!nh){var y0=document.createElement("div");y0.setAttribute("oninput","return;"),nh=typeof y0.oninput=="function"}th=nh}else th=!1;zy=th&&(!document.documentMode||9<document.documentMode)}function S0(){Yl&&(Yl.detachEvent("onpropertychange",By),gu=Yl=null)}function By(n){if(n.propertyName==="value"&&Sd(gu)){var e=[];ky(e,gu,n,R_(n)),xy(DT,e)}}function IT(n,e,t){n==="focusin"?(S0(),Yl=e,gu=t,Yl.attachEvent("onpropertychange",By)):n==="focusout"&&S0()}function UT(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Sd(gu)}function OT(n,e){if(n==="click")return Sd(e)}function FT(n,e){if(n==="input"||n==="change")return Sd(e)}function kT(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var ur=typeof Object.is=="function"?Object.is:kT;function vu(n,e){if(ur(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!mp.call(e,r)||!ur(n[r],e[r]))return!1}return!0}function M0(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function E0(n,e){var t=M0(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=M0(t)}}function Hy(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?Hy(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Vy(){for(var n=window,e=Pf();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Pf(n.document)}return e}function F_(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function zT(n){var e=Vy(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&Hy(t.ownerDocument.documentElement,t)){if(i!==null&&F_(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=E0(t,s);var o=E0(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var BT=Xr&&"documentMode"in document&&11>=document.documentMode,pa=null,Ip=null,ql=null,Up=!1;function T0(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Up||pa==null||pa!==Pf(i)||(i=pa,"selectionStart"in i&&F_(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ql&&vu(ql,i)||(ql=i,i=Of(Ip,"onSelect"),0<i.length&&(e=new I_("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=pa)))}function oc(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var ma={animationend:oc("Animation","AnimationEnd"),animationiteration:oc("Animation","AnimationIteration"),animationstart:oc("Animation","AnimationStart"),transitionend:oc("Transition","TransitionEnd")},ih={},Gy={};Xr&&(Gy=document.createElement("div").style,"AnimationEvent"in window||(delete ma.animationend.animation,delete ma.animationiteration.animation,delete ma.animationstart.animation),"TransitionEvent"in window||delete ma.transitionend.transition);function Md(n){if(ih[n])return ih[n];if(!ma[n])return n;var e=ma[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in Gy)return ih[n]=e[t];return n}var Wy=Md("animationend"),Xy=Md("animationiteration"),jy=Md("animationstart"),Yy=Md("transitionend"),qy=new Map,w0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vs(n,e){qy.set(n,e),ko(e,[n])}for(var rh=0;rh<w0.length;rh++){var sh=w0[rh],HT=sh.toLowerCase(),VT=sh[0].toUpperCase()+sh.slice(1);Vs(HT,"on"+VT)}Vs(Wy,"onAnimationEnd");Vs(Xy,"onAnimationIteration");Vs(jy,"onAnimationStart");Vs("dblclick","onDoubleClick");Vs("focusin","onFocus");Vs("focusout","onBlur");Vs(Yy,"onTransitionEnd");Ga("onMouseEnter",["mouseout","mouseover"]);Ga("onMouseLeave",["mouseout","mouseover"]);Ga("onPointerEnter",["pointerout","pointerover"]);Ga("onPointerLeave",["pointerout","pointerover"]);ko("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ko("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ko("onBeforeInput",["compositionend","keypress","textInput","paste"]);ko("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ko("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ko("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Il="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),GT=new Set("cancel close invalid load scroll toggle".split(" ").concat(Il));function A0(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,HE(i,e,void 0,n),n.currentTarget=null}function $y(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;A0(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;A0(r,a,u),s=l}}}if(Lf)throw n=bp,Lf=!1,bp=null,n}function Pt(n,e){var t=e[Bp];t===void 0&&(t=e[Bp]=new Set);var i=n+"__bubble";t.has(i)||(Ky(e,n,2,!1),t.add(i))}function oh(n,e,t){var i=0;e&&(i|=4),Ky(t,n,i,e)}var ac="_reactListening"+Math.random().toString(36).slice(2);function xu(n){if(!n[ac]){n[ac]=!0,iy.forEach(function(t){t!=="selectionchange"&&(GT.has(t)||oh(t,!1,n),oh(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[ac]||(e[ac]=!0,oh("selectionchange",!1,e))}}function Ky(n,e,t,i){switch(Ny(e)){case 1:var r=iT;break;case 4:r=rT;break;default:r=D_}t=r.bind(null,e,t,n),r=void 0,!Pp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function ah(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=fo(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}xy(function(){var u=s,c=R_(t),d=[];e:{var f=qy.get(n);if(f!==void 0){var p=I_,g=n;switch(n){case"keypress":if(sf(t)===0)break e;case"keydown":case"keyup":p=xT;break;case"focusin":g="focus",p=eh;break;case"focusout":g="blur",p=eh;break;case"beforeblur":case"afterblur":p=eh;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=p0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=aT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=MT;break;case Wy:case Xy:case jy:p=cT;break;case Yy:p=TT;break;case"scroll":p=sT;break;case"wheel":p=AT;break;case"copy":case"cut":case"paste":p=dT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=_0}var _=(e&4)!==0,m=!_&&n==="scroll",h=_?f!==null?f+"Capture":null:f;_=[];for(var v=u,x;v!==null;){x=v;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,h!==null&&(S=hu(v,h),S!=null&&_.push(yu(v,S,x)))),m)break;v=v.return}0<_.length&&(f=new p(f,g,null,t,c),d.push({event:f,listeners:_}))}}if(!(e&7)){e:{if(f=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",f&&t!==Cp&&(g=t.relatedTarget||t.fromElement)&&(fo(g)||g[jr]))break e;if((p||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,p?(g=t.relatedTarget||t.toElement,p=u,g=g?fo(g):null,g!==null&&(m=zo(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=u),p!==g)){if(_=p0,S="onMouseLeave",h="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(_=_0,S="onPointerLeave",h="onPointerEnter",v="pointer"),m=p==null?f:_a(p),x=g==null?f:_a(g),f=new _(S,v+"leave",p,t,c),f.target=m,f.relatedTarget=x,S=null,fo(c)===u&&(_=new _(h,v+"enter",g,t,c),_.target=x,_.relatedTarget=m,S=_),m=S,p&&g)t:{for(_=p,h=g,v=0,x=_;x;x=Vo(x))v++;for(x=0,S=h;S;S=Vo(S))x++;for(;0<v-x;)_=Vo(_),v--;for(;0<x-v;)h=Vo(h),x--;for(;v--;){if(_===h||h!==null&&_===h.alternate)break t;_=Vo(_),h=Vo(h)}_=null}else _=null;p!==null&&C0(d,f,p,_,!1),g!==null&&m!==null&&C0(d,m,g,_,!0)}}e:{if(f=u?_a(u):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var A=NT;else if(x0(f))if(zy)A=FT;else{A=UT;var w=IT}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(A=OT);if(A&&(A=A(n,u))){ky(d,A,t,c);break e}w&&w(n,f,u),n==="focusout"&&(w=f._wrapperState)&&w.controlled&&f.type==="number"&&Mp(f,"number",f.value)}switch(w=u?_a(u):window,n){case"focusin":(x0(w)||w.contentEditable==="true")&&(pa=w,Ip=u,ql=null);break;case"focusout":ql=Ip=pa=null;break;case"mousedown":Up=!0;break;case"contextmenu":case"mouseup":case"dragend":Up=!1,T0(d,t,c);break;case"selectionchange":if(BT)break;case"keydown":case"keyup":T0(d,t,c)}var M;if(O_)e:{switch(n){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else ha?Oy(n,t)&&(R="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(R="onCompositionStart");R&&(Uy&&t.locale!=="ko"&&(ha||R!=="onCompositionStart"?R==="onCompositionEnd"&&ha&&(M=Iy()):(ps=c,N_="value"in ps?ps.value:ps.textContent,ha=!0)),w=Of(u,R),0<w.length&&(R=new m0(R,n,null,t,c),d.push({event:R,listeners:w}),M?R.data=M:(M=Fy(t),M!==null&&(R.data=M)))),(M=RT?PT(n,t):bT(n,t))&&(u=Of(u,"onBeforeInput"),0<u.length&&(c=new m0("onBeforeInput","beforeinput",null,t,c),d.push({event:c,listeners:u}),c.data=M))}$y(d,e)})}function yu(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Of(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=hu(n,t),s!=null&&i.unshift(yu(n,s,r)),s=hu(n,e),s!=null&&i.push(yu(n,s,r))),n=n.return}return i}function Vo(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function C0(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=hu(t,s),l!=null&&o.unshift(yu(t,l,a))):r||(l=hu(t,s),l!=null&&o.push(yu(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var WT=/\r\n?/g,XT=/\u0000|\uFFFD/g;function R0(n){return(typeof n=="string"?n:""+n).replace(WT,`
`).replace(XT,"")}function lc(n,e,t){if(e=R0(e),R0(n)!==e&&t)throw Error(ae(425))}function Ff(){}var Op=null,Fp=null;function kp(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var zp=typeof setTimeout=="function"?setTimeout:void 0,jT=typeof clearTimeout=="function"?clearTimeout:void 0,P0=typeof Promise=="function"?Promise:void 0,YT=typeof queueMicrotask=="function"?queueMicrotask:typeof P0<"u"?function(n){return P0.resolve(null).then(n).catch(qT)}:zp;function qT(n){setTimeout(function(){throw n})}function lh(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),_u(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);_u(e)}function Ts(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function b0(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var cl=Math.random().toString(36).slice(2),gr="__reactFiber$"+cl,Su="__reactProps$"+cl,jr="__reactContainer$"+cl,Bp="__reactEvents$"+cl,$T="__reactListeners$"+cl,KT="__reactHandles$"+cl;function fo(n){var e=n[gr];if(e)return e;for(var t=n.parentNode;t;){if(e=t[jr]||t[gr]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=b0(n);n!==null;){if(t=n[gr])return t;n=b0(n)}return e}n=t,t=n.parentNode}return null}function Gu(n){return n=n[gr]||n[jr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function _a(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(ae(33))}function Ed(n){return n[Su]||null}var Hp=[],ga=-1;function Gs(n){return{current:n}}function Lt(n){0>ga||(n.current=Hp[ga],Hp[ga]=null,ga--)}function At(n,e){ga++,Hp[ga]=n.current,n.current=e}var Us={},Nn=Gs(Us),Zn=Gs(!1),Ro=Us;function Wa(n,e){var t=n.type.contextTypes;if(!t)return Us;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function Qn(n){return n=n.childContextTypes,n!=null}function kf(){Lt(Zn),Lt(Nn)}function L0(n,e,t){if(Nn.current!==Us)throw Error(ae(168));At(Nn,e),At(Zn,t)}function Zy(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ae(108,IE(n)||"Unknown",r));return Ht({},t,i)}function zf(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Us,Ro=Nn.current,At(Nn,n),At(Zn,Zn.current),!0}function D0(n,e,t){var i=n.stateNode;if(!i)throw Error(ae(169));t?(n=Zy(n,e,Ro),i.__reactInternalMemoizedMergedChildContext=n,Lt(Zn),Lt(Nn),At(Nn,n)):Lt(Zn),At(Zn,t)}var Ir=null,Td=!1,uh=!1;function Qy(n){Ir===null?Ir=[n]:Ir.push(n)}function ZT(n){Td=!0,Qy(n)}function Ws(){if(!uh&&Ir!==null){uh=!0;var n=0,e=yt;try{var t=Ir;for(yt=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Ir=null,Td=!1}catch(r){throw Ir!==null&&(Ir=Ir.slice(n+1)),Ey(P_,Ws),r}finally{yt=e,uh=!1}}return null}var va=[],xa=0,Bf=null,Hf=0,Ui=[],Oi=0,Po=null,kr=1,zr="";function to(n,e){va[xa++]=Hf,va[xa++]=Bf,Bf=n,Hf=e}function Jy(n,e,t){Ui[Oi++]=kr,Ui[Oi++]=zr,Ui[Oi++]=Po,Po=n;var i=kr;n=zr;var r=32-ar(i)-1;i&=~(1<<r),t+=1;var s=32-ar(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,kr=1<<32-ar(e)+r|t<<r|i,zr=s+n}else kr=1<<s|t<<r|i,zr=n}function k_(n){n.return!==null&&(to(n,1),Jy(n,1,0))}function z_(n){for(;n===Bf;)Bf=va[--xa],va[xa]=null,Hf=va[--xa],va[xa]=null;for(;n===Po;)Po=Ui[--Oi],Ui[Oi]=null,zr=Ui[--Oi],Ui[Oi]=null,kr=Ui[--Oi],Ui[Oi]=null}var wi=null,Si=null,It=!1,ir=null;function eS(n,e){var t=Bi(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function N0(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,wi=n,Si=Ts(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,wi=n,Si=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Po!==null?{id:kr,overflow:zr}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Bi(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,wi=n,Si=null,!0):!1;default:return!1}}function Vp(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Gp(n){if(It){var e=Si;if(e){var t=e;if(!N0(n,e)){if(Vp(n))throw Error(ae(418));e=Ts(t.nextSibling);var i=wi;e&&N0(n,e)?eS(i,t):(n.flags=n.flags&-4097|2,It=!1,wi=n)}}else{if(Vp(n))throw Error(ae(418));n.flags=n.flags&-4097|2,It=!1,wi=n}}}function I0(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;wi=n}function uc(n){if(n!==wi)return!1;if(!It)return I0(n),It=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!kp(n.type,n.memoizedProps)),e&&(e=Si)){if(Vp(n))throw tS(),Error(ae(418));for(;e;)eS(n,e),e=Ts(e.nextSibling)}if(I0(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(ae(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Si=Ts(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Si=null}}else Si=wi?Ts(n.stateNode.nextSibling):null;return!0}function tS(){for(var n=Si;n;)n=Ts(n.nextSibling)}function Xa(){Si=wi=null,It=!1}function B_(n){ir===null?ir=[n]:ir.push(n)}var QT=Jr.ReactCurrentBatchConfig;function vl(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(ae(309));var i=t.stateNode}if(!i)throw Error(ae(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(ae(284));if(!t._owner)throw Error(ae(290,n))}return n}function cc(n,e){throw n=Object.prototype.toString.call(e),Error(ae(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function U0(n){var e=n._init;return e(n._payload)}function nS(n){function e(h,v){if(n){var x=h.deletions;x===null?(h.deletions=[v],h.flags|=16):x.push(v)}}function t(h,v){if(!n)return null;for(;v!==null;)e(h,v),v=v.sibling;return null}function i(h,v){for(h=new Map;v!==null;)v.key!==null?h.set(v.key,v):h.set(v.index,v),v=v.sibling;return h}function r(h,v){return h=Rs(h,v),h.index=0,h.sibling=null,h}function s(h,v,x){return h.index=x,n?(x=h.alternate,x!==null?(x=x.index,x<v?(h.flags|=2,v):x):(h.flags|=2,v)):(h.flags|=1048576,v)}function o(h){return n&&h.alternate===null&&(h.flags|=2),h}function a(h,v,x,S){return v===null||v.tag!==6?(v=_h(x,h.mode,S),v.return=h,v):(v=r(v,x),v.return=h,v)}function l(h,v,x,S){var A=x.type;return A===da?c(h,v,x.props.children,S,x.key):v!==null&&(v.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===us&&U0(A)===v.type)?(S=r(v,x.props),S.ref=vl(h,v,x),S.return=h,S):(S=df(x.type,x.key,x.props,null,h.mode,S),S.ref=vl(h,v,x),S.return=h,S)}function u(h,v,x,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=gh(x,h.mode,S),v.return=h,v):(v=r(v,x.children||[]),v.return=h,v)}function c(h,v,x,S,A){return v===null||v.tag!==7?(v=yo(x,h.mode,S,A),v.return=h,v):(v=r(v,x),v.return=h,v)}function d(h,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=_h(""+v,h.mode,x),v.return=h,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ju:return x=df(v.type,v.key,v.props,null,h.mode,x),x.ref=vl(h,null,v),x.return=h,x;case fa:return v=gh(v,h.mode,x),v.return=h,v;case us:var S=v._init;return d(h,S(v._payload),x)}if(Dl(v)||hl(v))return v=yo(v,h.mode,x,null),v.return=h,v;cc(h,v)}return null}function f(h,v,x,S){var A=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return A!==null?null:a(h,v,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ju:return x.key===A?l(h,v,x,S):null;case fa:return x.key===A?u(h,v,x,S):null;case us:return A=x._init,f(h,v,A(x._payload),S)}if(Dl(x)||hl(x))return A!==null?null:c(h,v,x,S,null);cc(h,x)}return null}function p(h,v,x,S,A){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(x)||null,a(v,h,""+S,A);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ju:return h=h.get(S.key===null?x:S.key)||null,l(v,h,S,A);case fa:return h=h.get(S.key===null?x:S.key)||null,u(v,h,S,A);case us:var w=S._init;return p(h,v,x,w(S._payload),A)}if(Dl(S)||hl(S))return h=h.get(x)||null,c(v,h,S,A,null);cc(v,S)}return null}function g(h,v,x,S){for(var A=null,w=null,M=v,R=v=0,L=null;M!==null&&R<x.length;R++){M.index>R?(L=M,M=null):L=M.sibling;var y=f(h,M,x[R],S);if(y===null){M===null&&(M=L);break}n&&M&&y.alternate===null&&e(h,M),v=s(y,v,R),w===null?A=y:w.sibling=y,w=y,M=L}if(R===x.length)return t(h,M),It&&to(h,R),A;if(M===null){for(;R<x.length;R++)M=d(h,x[R],S),M!==null&&(v=s(M,v,R),w===null?A=M:w.sibling=M,w=M);return It&&to(h,R),A}for(M=i(h,M);R<x.length;R++)L=p(M,h,R,x[R],S),L!==null&&(n&&L.alternate!==null&&M.delete(L.key===null?R:L.key),v=s(L,v,R),w===null?A=L:w.sibling=L,w=L);return n&&M.forEach(function(T){return e(h,T)}),It&&to(h,R),A}function _(h,v,x,S){var A=hl(x);if(typeof A!="function")throw Error(ae(150));if(x=A.call(x),x==null)throw Error(ae(151));for(var w=A=null,M=v,R=v=0,L=null,y=x.next();M!==null&&!y.done;R++,y=x.next()){M.index>R?(L=M,M=null):L=M.sibling;var T=f(h,M,y.value,S);if(T===null){M===null&&(M=L);break}n&&M&&T.alternate===null&&e(h,M),v=s(T,v,R),w===null?A=T:w.sibling=T,w=T,M=L}if(y.done)return t(h,M),It&&to(h,R),A;if(M===null){for(;!y.done;R++,y=x.next())y=d(h,y.value,S),y!==null&&(v=s(y,v,R),w===null?A=y:w.sibling=y,w=y);return It&&to(h,R),A}for(M=i(h,M);!y.done;R++,y=x.next())y=p(M,h,R,y.value,S),y!==null&&(n&&y.alternate!==null&&M.delete(y.key===null?R:y.key),v=s(y,v,R),w===null?A=y:w.sibling=y,w=y);return n&&M.forEach(function(U){return e(h,U)}),It&&to(h,R),A}function m(h,v,x,S){if(typeof x=="object"&&x!==null&&x.type===da&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Ju:e:{for(var A=x.key,w=v;w!==null;){if(w.key===A){if(A=x.type,A===da){if(w.tag===7){t(h,w.sibling),v=r(w,x.props.children),v.return=h,h=v;break e}}else if(w.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===us&&U0(A)===w.type){t(h,w.sibling),v=r(w,x.props),v.ref=vl(h,w,x),v.return=h,h=v;break e}t(h,w);break}else e(h,w);w=w.sibling}x.type===da?(v=yo(x.props.children,h.mode,S,x.key),v.return=h,h=v):(S=df(x.type,x.key,x.props,null,h.mode,S),S.ref=vl(h,v,x),S.return=h,h=S)}return o(h);case fa:e:{for(w=x.key;v!==null;){if(v.key===w)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){t(h,v.sibling),v=r(v,x.children||[]),v.return=h,h=v;break e}else{t(h,v);break}else e(h,v);v=v.sibling}v=gh(x,h.mode,S),v.return=h,h=v}return o(h);case us:return w=x._init,m(h,v,w(x._payload),S)}if(Dl(x))return g(h,v,x,S);if(hl(x))return _(h,v,x,S);cc(h,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(t(h,v.sibling),v=r(v,x),v.return=h,h=v):(t(h,v),v=_h(x,h.mode,S),v.return=h,h=v),o(h)):t(h,v)}return m}var ja=nS(!0),iS=nS(!1),Vf=Gs(null),Gf=null,ya=null,H_=null;function V_(){H_=ya=Gf=null}function G_(n){var e=Vf.current;Lt(Vf),n._currentValue=e}function Wp(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function La(n,e){Gf=n,H_=ya=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(Kn=!0),n.firstContext=null)}function Yi(n){var e=n._currentValue;if(H_!==n)if(n={context:n,memoizedValue:e,next:null},ya===null){if(Gf===null)throw Error(ae(308));ya=n,Gf.dependencies={lanes:0,firstContext:n}}else ya=ya.next=n;return e}var ho=null;function W_(n){ho===null?ho=[n]:ho.push(n)}function rS(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,W_(e)):(t.next=r.next,r.next=t),e.interleaved=t,Yr(n,i)}function Yr(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var cs=!1;function X_(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sS(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Gr(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function ws(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,dt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Yr(n,t)}return r=i.interleaved,r===null?(e.next=e,W_(i)):(e.next=r.next,r.next=e),i.interleaved=e,Yr(n,t)}function of(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,b_(n,t)}}function O0(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Wf(n,e,t,i){var r=n.updateQueue;cs=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=n.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((i&f)===f){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=n,_=a;switch(f=e,p=t,_.tag){case 1:if(g=_.payload,typeof g=="function"){d=g.call(p,d,f);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=_.payload,f=typeof g=="function"?g.call(p,d,f):g,f==null)break e;d=Ht({},d,f);break e;case 2:cs=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=d):c=c.next=p,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(c===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Lo|=o,n.lanes=o,n.memoizedState=d}}function F0(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(ae(191,r));r.call(i)}}}var Wu={},Mr=Gs(Wu),Mu=Gs(Wu),Eu=Gs(Wu);function po(n){if(n===Wu)throw Error(ae(174));return n}function j_(n,e){switch(At(Eu,e),At(Mu,n),At(Mr,Wu),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Tp(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Tp(e,n)}Lt(Mr),At(Mr,e)}function Ya(){Lt(Mr),Lt(Mu),Lt(Eu)}function oS(n){po(Eu.current);var e=po(Mr.current),t=Tp(e,n.type);e!==t&&(At(Mu,n),At(Mr,t))}function Y_(n){Mu.current===n&&(Lt(Mr),Lt(Mu))}var Ft=Gs(0);function Xf(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ch=[];function q_(){for(var n=0;n<ch.length;n++)ch[n]._workInProgressVersionPrimary=null;ch.length=0}var af=Jr.ReactCurrentDispatcher,fh=Jr.ReactCurrentBatchConfig,bo=0,Bt=null,rn=null,hn=null,jf=!1,$l=!1,Tu=0,JT=0;function Mn(){throw Error(ae(321))}function $_(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!ur(n[t],e[t]))return!1;return!0}function K_(n,e,t,i,r,s){if(bo=s,Bt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,af.current=n===null||n.memoizedState===null?iw:rw,n=t(i,r),$l){s=0;do{if($l=!1,Tu=0,25<=s)throw Error(ae(301));s+=1,hn=rn=null,e.updateQueue=null,af.current=sw,n=t(i,r)}while($l)}if(af.current=Yf,e=rn!==null&&rn.next!==null,bo=0,hn=rn=Bt=null,jf=!1,e)throw Error(ae(300));return n}function Z_(){var n=Tu!==0;return Tu=0,n}function dr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return hn===null?Bt.memoizedState=hn=n:hn=hn.next=n,hn}function qi(){if(rn===null){var n=Bt.alternate;n=n!==null?n.memoizedState:null}else n=rn.next;var e=hn===null?Bt.memoizedState:hn.next;if(e!==null)hn=e,rn=n;else{if(n===null)throw Error(ae(310));rn=n,n={memoizedState:rn.memoizedState,baseState:rn.baseState,baseQueue:rn.baseQueue,queue:rn.queue,next:null},hn===null?Bt.memoizedState=hn=n:hn=hn.next=n}return hn}function wu(n,e){return typeof e=="function"?e(n):e}function dh(n){var e=qi(),t=e.queue;if(t===null)throw Error(ae(311));t.lastRenderedReducer=n;var i=rn,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((bo&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,Bt.lanes|=c,Lo|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,ur(i,e.memoizedState)||(Kn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,Bt.lanes|=s,Lo|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function hh(n){var e=qi(),t=e.queue;if(t===null)throw Error(ae(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);ur(s,e.memoizedState)||(Kn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function aS(){}function lS(n,e){var t=Bt,i=qi(),r=e(),s=!ur(i.memoizedState,r);if(s&&(i.memoizedState=r,Kn=!0),i=i.queue,Q_(fS.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||hn!==null&&hn.memoizedState.tag&1){if(t.flags|=2048,Au(9,cS.bind(null,t,i,r,e),void 0,null),pn===null)throw Error(ae(349));bo&30||uS(t,e,r)}return r}function uS(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=Bt.updateQueue,e===null?(e={lastEffect:null,stores:null},Bt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function cS(n,e,t,i){e.value=t,e.getSnapshot=i,dS(e)&&hS(n)}function fS(n,e,t){return t(function(){dS(e)&&hS(n)})}function dS(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!ur(n,t)}catch{return!0}}function hS(n){var e=Yr(n,1);e!==null&&lr(e,n,1,-1)}function k0(n){var e=dr();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wu,lastRenderedState:n},e.queue=n,n=n.dispatch=nw.bind(null,Bt,n),[e.memoizedState,n]}function Au(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=Bt.updateQueue,e===null?(e={lastEffect:null,stores:null},Bt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function pS(){return qi().memoizedState}function lf(n,e,t,i){var r=dr();Bt.flags|=n,r.memoizedState=Au(1|e,t,void 0,i===void 0?null:i)}function wd(n,e,t,i){var r=qi();i=i===void 0?null:i;var s=void 0;if(rn!==null){var o=rn.memoizedState;if(s=o.destroy,i!==null&&$_(i,o.deps)){r.memoizedState=Au(e,t,s,i);return}}Bt.flags|=n,r.memoizedState=Au(1|e,t,s,i)}function z0(n,e){return lf(8390656,8,n,e)}function Q_(n,e){return wd(2048,8,n,e)}function mS(n,e){return wd(4,2,n,e)}function _S(n,e){return wd(4,4,n,e)}function gS(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function vS(n,e,t){return t=t!=null?t.concat([n]):null,wd(4,4,gS.bind(null,e,n),t)}function J_(){}function xS(n,e){var t=qi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&$_(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function yS(n,e){var t=qi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&$_(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function SS(n,e,t){return bo&21?(ur(t,e)||(t=Ay(),Bt.lanes|=t,Lo|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,Kn=!0),n.memoizedState=t)}function ew(n,e){var t=yt;yt=t!==0&&4>t?t:4,n(!0);var i=fh.transition;fh.transition={};try{n(!1),e()}finally{yt=t,fh.transition=i}}function MS(){return qi().memoizedState}function tw(n,e,t){var i=Cs(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},ES(n))TS(e,t);else if(t=rS(n,e,t,i),t!==null){var r=Vn();lr(t,n,i,r),wS(t,e,i)}}function nw(n,e,t){var i=Cs(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(ES(n))TS(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,ur(a,o)){var l=e.interleaved;l===null?(r.next=r,W_(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=rS(n,e,r,i),t!==null&&(r=Vn(),lr(t,n,i,r),wS(t,e,i))}}function ES(n){var e=n.alternate;return n===Bt||e!==null&&e===Bt}function TS(n,e){$l=jf=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function wS(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,b_(n,t)}}var Yf={readContext:Yi,useCallback:Mn,useContext:Mn,useEffect:Mn,useImperativeHandle:Mn,useInsertionEffect:Mn,useLayoutEffect:Mn,useMemo:Mn,useReducer:Mn,useRef:Mn,useState:Mn,useDebugValue:Mn,useDeferredValue:Mn,useTransition:Mn,useMutableSource:Mn,useSyncExternalStore:Mn,useId:Mn,unstable_isNewReconciler:!1},iw={readContext:Yi,useCallback:function(n,e){return dr().memoizedState=[n,e===void 0?null:e],n},useContext:Yi,useEffect:z0,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,lf(4194308,4,gS.bind(null,e,n),t)},useLayoutEffect:function(n,e){return lf(4194308,4,n,e)},useInsertionEffect:function(n,e){return lf(4,2,n,e)},useMemo:function(n,e){var t=dr();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=dr();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=tw.bind(null,Bt,n),[i.memoizedState,n]},useRef:function(n){var e=dr();return n={current:n},e.memoizedState=n},useState:k0,useDebugValue:J_,useDeferredValue:function(n){return dr().memoizedState=n},useTransition:function(){var n=k0(!1),e=n[0];return n=ew.bind(null,n[1]),dr().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=Bt,r=dr();if(It){if(t===void 0)throw Error(ae(407));t=t()}else{if(t=e(),pn===null)throw Error(ae(349));bo&30||uS(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,z0(fS.bind(null,i,s,n),[n]),i.flags|=2048,Au(9,cS.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=dr(),e=pn.identifierPrefix;if(It){var t=zr,i=kr;t=(i&~(1<<32-ar(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Tu++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=JT++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},rw={readContext:Yi,useCallback:xS,useContext:Yi,useEffect:Q_,useImperativeHandle:vS,useInsertionEffect:mS,useLayoutEffect:_S,useMemo:yS,useReducer:dh,useRef:pS,useState:function(){return dh(wu)},useDebugValue:J_,useDeferredValue:function(n){var e=qi();return SS(e,rn.memoizedState,n)},useTransition:function(){var n=dh(wu)[0],e=qi().memoizedState;return[n,e]},useMutableSource:aS,useSyncExternalStore:lS,useId:MS,unstable_isNewReconciler:!1},sw={readContext:Yi,useCallback:xS,useContext:Yi,useEffect:Q_,useImperativeHandle:vS,useInsertionEffect:mS,useLayoutEffect:_S,useMemo:yS,useReducer:hh,useRef:pS,useState:function(){return hh(wu)},useDebugValue:J_,useDeferredValue:function(n){var e=qi();return rn===null?e.memoizedState=n:SS(e,rn.memoizedState,n)},useTransition:function(){var n=hh(wu)[0],e=qi().memoizedState;return[n,e]},useMutableSource:aS,useSyncExternalStore:lS,useId:MS,unstable_isNewReconciler:!1};function tr(n,e){if(n&&n.defaultProps){e=Ht({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Xp(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:Ht({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Ad={isMounted:function(n){return(n=n._reactInternals)?zo(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=Vn(),r=Cs(n),s=Gr(i,r);s.payload=e,t!=null&&(s.callback=t),e=ws(n,s,r),e!==null&&(lr(e,n,r,i),of(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=Vn(),r=Cs(n),s=Gr(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=ws(n,s,r),e!==null&&(lr(e,n,r,i),of(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Vn(),i=Cs(n),r=Gr(t,i);r.tag=2,e!=null&&(r.callback=e),e=ws(n,r,i),e!==null&&(lr(e,n,i,t),of(e,n,i))}};function B0(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!vu(t,i)||!vu(r,s):!0}function AS(n,e,t){var i=!1,r=Us,s=e.contextType;return typeof s=="object"&&s!==null?s=Yi(s):(r=Qn(e)?Ro:Nn.current,i=e.contextTypes,s=(i=i!=null)?Wa(n,r):Us),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ad,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function H0(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&Ad.enqueueReplaceState(e,e.state,null)}function jp(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},X_(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Yi(s):(s=Qn(e)?Ro:Nn.current,r.context=Wa(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Xp(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Ad.enqueueReplaceState(r,r.state,null),Wf(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function qa(n,e){try{var t="",i=e;do t+=NE(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function ph(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Yp(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var ow=typeof WeakMap=="function"?WeakMap:Map;function CS(n,e,t){t=Gr(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){$f||($f=!0,im=i),Yp(n,e)},t}function RS(n,e,t){t=Gr(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Yp(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Yp(n,e),typeof i!="function"&&(As===null?As=new Set([this]):As.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function V0(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new ow;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=yw.bind(null,n,e,t),e.then(n,n))}function G0(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function W0(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Gr(-1,1),e.tag=2,ws(t,e,1))),t.lanes|=1),n)}var aw=Jr.ReactCurrentOwner,Kn=!1;function kn(n,e,t,i){e.child=n===null?iS(e,null,t,i):ja(e,n.child,t,i)}function X0(n,e,t,i,r){t=t.render;var s=e.ref;return La(e,r),i=K_(n,e,t,i,s,r),t=Z_(),n!==null&&!Kn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,qr(n,e,r)):(It&&t&&k_(e),e.flags|=1,kn(n,e,i,r),e.child)}function j0(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!ag(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,PS(n,e,s,i,r)):(n=df(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:vu,t(o,i)&&n.ref===e.ref)return qr(n,e,r)}return e.flags|=1,n=Rs(s,i),n.ref=e.ref,n.return=e,e.child=n}function PS(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(vu(s,i)&&n.ref===e.ref)if(Kn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(Kn=!0);else return e.lanes=n.lanes,qr(n,e,r)}return qp(n,e,t,i,r)}function bS(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},At(Ma,mi),mi|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,At(Ma,mi),mi|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,At(Ma,mi),mi|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,At(Ma,mi),mi|=i;return kn(n,e,r,t),e.child}function LS(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function qp(n,e,t,i,r){var s=Qn(t)?Ro:Nn.current;return s=Wa(e,s),La(e,r),t=K_(n,e,t,i,s,r),i=Z_(),n!==null&&!Kn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,qr(n,e,r)):(It&&i&&k_(e),e.flags|=1,kn(n,e,t,r),e.child)}function Y0(n,e,t,i,r){if(Qn(t)){var s=!0;zf(e)}else s=!1;if(La(e,r),e.stateNode===null)uf(n,e),AS(e,t,i),jp(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=Yi(u):(u=Qn(t)?Ro:Nn.current,u=Wa(e,u));var c=t.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&H0(e,o,i,u),cs=!1;var f=e.memoizedState;o.state=f,Wf(e,i,o,r),l=e.memoizedState,a!==i||f!==l||Zn.current||cs?(typeof c=="function"&&(Xp(e,t,c,i),l=e.memoizedState),(a=cs||B0(e,t,a,i,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,sS(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:tr(e.type,a),o.props=u,d=e.pendingProps,f=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=Yi(l):(l=Qn(t)?Ro:Nn.current,l=Wa(e,l));var p=t.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&H0(e,o,i,l),cs=!1,f=e.memoizedState,o.state=f,Wf(e,i,o,r);var g=e.memoizedState;a!==d||f!==g||Zn.current||cs?(typeof p=="function"&&(Xp(e,t,p,i),g=e.memoizedState),(u=cs||B0(e,t,u,i,f,g,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),i=!1)}return $p(n,e,t,i,s,r)}function $p(n,e,t,i,r,s){LS(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&D0(e,t,!1),qr(n,e,s);i=e.stateNode,aw.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=ja(e,n.child,null,s),e.child=ja(e,null,a,s)):kn(n,e,a,s),e.memoizedState=i.state,r&&D0(e,t,!0),e.child}function DS(n){var e=n.stateNode;e.pendingContext?L0(n,e.pendingContext,e.pendingContext!==e.context):e.context&&L0(n,e.context,!1),j_(n,e.containerInfo)}function q0(n,e,t,i,r){return Xa(),B_(r),e.flags|=256,kn(n,e,t,i),e.child}var Kp={dehydrated:null,treeContext:null,retryLane:0};function Zp(n){return{baseLanes:n,cachePool:null,transitions:null}}function NS(n,e,t){var i=e.pendingProps,r=Ft.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),At(Ft,r&1),n===null)return Gp(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Pd(o,i,0,null),n=yo(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Zp(t),e.memoizedState=Kp,n):eg(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return lw(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Rs(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Rs(a,s):(s=yo(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?Zp(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=Kp,i}return s=n.child,n=s.sibling,i=Rs(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function eg(n,e){return e=Pd({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function fc(n,e,t,i){return i!==null&&B_(i),ja(e,n.child,null,t),n=eg(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function lw(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=ph(Error(ae(422))),fc(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Pd({mode:"visible",children:i.children},r,0,null),s=yo(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ja(e,n.child,null,o),e.child.memoizedState=Zp(o),e.memoizedState=Kp,s);if(!(e.mode&1))return fc(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ae(419)),i=ph(s,i,void 0),fc(n,e,o,i)}if(a=(o&n.childLanes)!==0,Kn||a){if(i=pn,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Yr(n,r),lr(i,n,r,-1))}return og(),i=ph(Error(ae(421))),fc(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=Sw.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,Si=Ts(r.nextSibling),wi=e,It=!0,ir=null,n!==null&&(Ui[Oi++]=kr,Ui[Oi++]=zr,Ui[Oi++]=Po,kr=n.id,zr=n.overflow,Po=e),e=eg(e,i.children),e.flags|=4096,e)}function $0(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Wp(n.return,e,t)}function mh(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function IS(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(kn(n,e,i.children,t),i=Ft.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&$0(n,t,e);else if(n.tag===19)$0(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(At(Ft,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Xf(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),mh(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Xf(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}mh(e,!0,t,null,s);break;case"together":mh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function uf(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function qr(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Lo|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(ae(153));if(e.child!==null){for(n=e.child,t=Rs(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Rs(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function uw(n,e,t){switch(e.tag){case 3:DS(e),Xa();break;case 5:oS(e);break;case 1:Qn(e.type)&&zf(e);break;case 4:j_(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;At(Vf,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(At(Ft,Ft.current&1),e.flags|=128,null):t&e.child.childLanes?NS(n,e,t):(At(Ft,Ft.current&1),n=qr(n,e,t),n!==null?n.sibling:null);At(Ft,Ft.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return IS(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),At(Ft,Ft.current),i)break;return null;case 22:case 23:return e.lanes=0,bS(n,e,t)}return qr(n,e,t)}var US,Qp,OS,FS;US=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Qp=function(){};OS=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,po(Mr.current);var s=null;switch(t){case"input":r=yp(n,r),i=yp(n,i),s=[];break;case"select":r=Ht({},r,{value:void 0}),i=Ht({},i,{value:void 0}),s=[];break;case"textarea":r=Ep(n,r),i=Ep(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Ff)}wp(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(fu.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(fu.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Pt("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};FS=function(n,e,t,i){t!==i&&(e.flags|=4)};function xl(n,e){if(!It)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function En(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function cw(n,e,t){var i=e.pendingProps;switch(z_(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return En(e),null;case 1:return Qn(e.type)&&kf(),En(e),null;case 3:return i=e.stateNode,Ya(),Lt(Zn),Lt(Nn),q_(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(uc(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ir!==null&&(om(ir),ir=null))),Qp(n,e),En(e),null;case 5:Y_(e);var r=po(Eu.current);if(t=e.type,n!==null&&e.stateNode!=null)OS(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ae(166));return En(e),null}if(n=po(Mr.current),uc(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[gr]=e,i[Su]=s,n=(e.mode&1)!==0,t){case"dialog":Pt("cancel",i),Pt("close",i);break;case"iframe":case"object":case"embed":Pt("load",i);break;case"video":case"audio":for(r=0;r<Il.length;r++)Pt(Il[r],i);break;case"source":Pt("error",i);break;case"img":case"image":case"link":Pt("error",i),Pt("load",i);break;case"details":Pt("toggle",i);break;case"input":r0(i,s),Pt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Pt("invalid",i);break;case"textarea":o0(i,s),Pt("invalid",i)}wp(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&lc(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&lc(i.textContent,a,n),r=["children",""+a]):fu.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Pt("scroll",i)}switch(t){case"input":ec(i),s0(i,s,!0);break;case"textarea":ec(i),a0(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Ff)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=fy(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[gr]=e,n[Su]=i,US(n,e,!1,!1),e.stateNode=n;e:{switch(o=Ap(t,i),t){case"dialog":Pt("cancel",n),Pt("close",n),r=i;break;case"iframe":case"object":case"embed":Pt("load",n),r=i;break;case"video":case"audio":for(r=0;r<Il.length;r++)Pt(Il[r],n);r=i;break;case"source":Pt("error",n),r=i;break;case"img":case"image":case"link":Pt("error",n),Pt("load",n),r=i;break;case"details":Pt("toggle",n),r=i;break;case"input":r0(n,i),r=yp(n,i),Pt("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=Ht({},i,{value:void 0}),Pt("invalid",n);break;case"textarea":o0(n,i),r=Ep(n,i),Pt("invalid",n);break;default:r=i}wp(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?py(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&dy(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&du(n,l):typeof l=="number"&&du(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(fu.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Pt("scroll",n):l!=null&&T_(n,s,l,o))}switch(t){case"input":ec(n),s0(n,i,!1);break;case"textarea":ec(n),a0(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Is(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?Ca(n,!!i.multiple,s,!1):i.defaultValue!=null&&Ca(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Ff)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return En(e),null;case 6:if(n&&e.stateNode!=null)FS(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ae(166));if(t=po(Eu.current),po(Mr.current),uc(e)){if(i=e.stateNode,t=e.memoizedProps,i[gr]=e,(s=i.nodeValue!==t)&&(n=wi,n!==null))switch(n.tag){case 3:lc(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&lc(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[gr]=e,e.stateNode=i}return En(e),null;case 13:if(Lt(Ft),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(It&&Si!==null&&e.mode&1&&!(e.flags&128))tS(),Xa(),e.flags|=98560,s=!1;else if(s=uc(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(ae(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ae(317));s[gr]=e}else Xa(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;En(e),s=!1}else ir!==null&&(om(ir),ir=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||Ft.current&1?on===0&&(on=3):og())),e.updateQueue!==null&&(e.flags|=4),En(e),null);case 4:return Ya(),Qp(n,e),n===null&&xu(e.stateNode.containerInfo),En(e),null;case 10:return G_(e.type._context),En(e),null;case 17:return Qn(e.type)&&kf(),En(e),null;case 19:if(Lt(Ft),s=e.memoizedState,s===null)return En(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)xl(s,!1);else{if(on!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=Xf(n),o!==null){for(e.flags|=128,xl(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return At(Ft,Ft.current&1|2),e.child}n=n.sibling}s.tail!==null&&$t()>$a&&(e.flags|=128,i=!0,xl(s,!1),e.lanes=4194304)}else{if(!i)if(n=Xf(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),xl(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!It)return En(e),null}else 2*$t()-s.renderingStartTime>$a&&t!==1073741824&&(e.flags|=128,i=!0,xl(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=$t(),e.sibling=null,t=Ft.current,At(Ft,i?t&1|2:t&1),e):(En(e),null);case 22:case 23:return sg(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?mi&1073741824&&(En(e),e.subtreeFlags&6&&(e.flags|=8192)):En(e),null;case 24:return null;case 25:return null}throw Error(ae(156,e.tag))}function fw(n,e){switch(z_(e),e.tag){case 1:return Qn(e.type)&&kf(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Ya(),Lt(Zn),Lt(Nn),q_(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return Y_(e),null;case 13:if(Lt(Ft),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(ae(340));Xa()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return Lt(Ft),null;case 4:return Ya(),null;case 10:return G_(e.type._context),null;case 22:case 23:return sg(),null;case 24:return null;default:return null}}var dc=!1,Rn=!1,dw=typeof WeakSet=="function"?WeakSet:Set,Ee=null;function Sa(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Vt(n,e,i)}else t.current=null}function Jp(n,e,t){try{t()}catch(i){Vt(n,e,i)}}var K0=!1;function hw(n,e){if(Op=If,n=Vy(),F_(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=n,f=null;t:for(;;){for(var p;d!==t||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===n)break t;if(f===t&&++u===r&&(a=o),f===s&&++c===i&&(l=o),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Fp={focusedElem:n,selectionRange:t},If=!1,Ee=e;Ee!==null;)if(e=Ee,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,Ee=n;else for(;Ee!==null;){e=Ee;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var _=g.memoizedProps,m=g.memoizedState,h=e.stateNode,v=h.getSnapshotBeforeUpdate(e.elementType===e.type?_:tr(e.type,_),m);h.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ae(163))}}catch(S){Vt(e,e.return,S)}if(n=e.sibling,n!==null){n.return=e.return,Ee=n;break}Ee=e.return}return g=K0,K0=!1,g}function Kl(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&Jp(e,t,s)}r=r.next}while(r!==i)}}function Cd(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function em(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function kS(n){var e=n.alternate;e!==null&&(n.alternate=null,kS(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[gr],delete e[Su],delete e[Bp],delete e[$T],delete e[KT])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function zS(n){return n.tag===5||n.tag===3||n.tag===4}function Z0(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||zS(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function tm(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Ff));else if(i!==4&&(n=n.child,n!==null))for(tm(n,e,t),n=n.sibling;n!==null;)tm(n,e,t),n=n.sibling}function nm(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(nm(n,e,t),n=n.sibling;n!==null;)nm(n,e,t),n=n.sibling}var gn=null,nr=!1;function ts(n,e,t){for(t=t.child;t!==null;)BS(n,e,t),t=t.sibling}function BS(n,e,t){if(Sr&&typeof Sr.onCommitFiberUnmount=="function")try{Sr.onCommitFiberUnmount(xd,t)}catch{}switch(t.tag){case 5:Rn||Sa(t,e);case 6:var i=gn,r=nr;gn=null,ts(n,e,t),gn=i,nr=r,gn!==null&&(nr?(n=gn,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):gn.removeChild(t.stateNode));break;case 18:gn!==null&&(nr?(n=gn,t=t.stateNode,n.nodeType===8?lh(n.parentNode,t):n.nodeType===1&&lh(n,t),_u(n)):lh(gn,t.stateNode));break;case 4:i=gn,r=nr,gn=t.stateNode.containerInfo,nr=!0,ts(n,e,t),gn=i,nr=r;break;case 0:case 11:case 14:case 15:if(!Rn&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Jp(t,e,o),r=r.next}while(r!==i)}ts(n,e,t);break;case 1:if(!Rn&&(Sa(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){Vt(t,e,a)}ts(n,e,t);break;case 21:ts(n,e,t);break;case 22:t.mode&1?(Rn=(i=Rn)||t.memoizedState!==null,ts(n,e,t),Rn=i):ts(n,e,t);break;default:ts(n,e,t)}}function Q0(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new dw),e.forEach(function(i){var r=Mw.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function Ki(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:gn=a.stateNode,nr=!1;break e;case 3:gn=a.stateNode.containerInfo,nr=!0;break e;case 4:gn=a.stateNode.containerInfo,nr=!0;break e}a=a.return}if(gn===null)throw Error(ae(160));BS(s,o,r),gn=null,nr=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Vt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)HS(e,n),e=e.sibling}function HS(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Ki(e,n),fr(n),i&4){try{Kl(3,n,n.return),Cd(3,n)}catch(_){Vt(n,n.return,_)}try{Kl(5,n,n.return)}catch(_){Vt(n,n.return,_)}}break;case 1:Ki(e,n),fr(n),i&512&&t!==null&&Sa(t,t.return);break;case 5:if(Ki(e,n),fr(n),i&512&&t!==null&&Sa(t,t.return),n.flags&32){var r=n.stateNode;try{du(r,"")}catch(_){Vt(n,n.return,_)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&uy(r,s),Ap(a,o);var u=Ap(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?py(r,d):c==="dangerouslySetInnerHTML"?dy(r,d):c==="children"?du(r,d):T_(r,c,d,u)}switch(a){case"input":Sp(r,s);break;case"textarea":cy(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Ca(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?Ca(r,!!s.multiple,s.defaultValue,!0):Ca(r,!!s.multiple,s.multiple?[]:"",!1))}r[Su]=s}catch(_){Vt(n,n.return,_)}}break;case 6:if(Ki(e,n),fr(n),i&4){if(n.stateNode===null)throw Error(ae(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(_){Vt(n,n.return,_)}}break;case 3:if(Ki(e,n),fr(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{_u(e.containerInfo)}catch(_){Vt(n,n.return,_)}break;case 4:Ki(e,n),fr(n);break;case 13:Ki(e,n),fr(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(ig=$t())),i&4&&Q0(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(Rn=(u=Rn)||c,Ki(e,n),Rn=u):Ki(e,n),fr(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&n.mode&1)for(Ee=n,c=n.child;c!==null;){for(d=Ee=c;Ee!==null;){switch(f=Ee,p=f.child,f.tag){case 0:case 11:case 14:case 15:Kl(4,f,f.return);break;case 1:Sa(f,f.return);var g=f.stateNode;if(typeof g.componentWillUnmount=="function"){i=f,t=f.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(_){Vt(i,t,_)}}break;case 5:Sa(f,f.return);break;case 22:if(f.memoizedState!==null){ev(d);continue}}p!==null?(p.return=f,Ee=p):ev(d)}c=c.sibling}e:for(c=null,d=n;;){if(d.tag===5){if(c===null){c=d;try{r=d.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=hy("display",o))}catch(_){Vt(n,n.return,_)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(_){Vt(n,n.return,_)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===n)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===n)break e;for(;d.sibling===null;){if(d.return===null||d.return===n)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Ki(e,n),fr(n),i&4&&Q0(n);break;case 21:break;default:Ki(e,n),fr(n)}}function fr(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(zS(t)){var i=t;break e}t=t.return}throw Error(ae(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(du(r,""),i.flags&=-33);var s=Z0(n);nm(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Z0(n);tm(n,a,o);break;default:throw Error(ae(161))}}catch(l){Vt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function pw(n,e,t){Ee=n,VS(n)}function VS(n,e,t){for(var i=(n.mode&1)!==0;Ee!==null;){var r=Ee,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||dc;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Rn;a=dc;var u=Rn;if(dc=o,(Rn=l)&&!u)for(Ee=r;Ee!==null;)o=Ee,l=o.child,o.tag===22&&o.memoizedState!==null?tv(r):l!==null?(l.return=o,Ee=l):tv(r);for(;s!==null;)Ee=s,VS(s),s=s.sibling;Ee=r,dc=a,Rn=u}J0(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ee=s):J0(n)}}function J0(n){for(;Ee!==null;){var e=Ee;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Rn||Cd(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Rn)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:tr(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&F0(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}F0(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&_u(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ae(163))}Rn||e.flags&512&&em(e)}catch(f){Vt(e,e.return,f)}}if(e===n){Ee=null;break}if(t=e.sibling,t!==null){t.return=e.return,Ee=t;break}Ee=e.return}}function ev(n){for(;Ee!==null;){var e=Ee;if(e===n){Ee=null;break}var t=e.sibling;if(t!==null){t.return=e.return,Ee=t;break}Ee=e.return}}function tv(n){for(;Ee!==null;){var e=Ee;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Cd(4,e)}catch(l){Vt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Vt(e,r,l)}}var s=e.return;try{em(e)}catch(l){Vt(e,s,l)}break;case 5:var o=e.return;try{em(e)}catch(l){Vt(e,o,l)}}}catch(l){Vt(e,e.return,l)}if(e===n){Ee=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Ee=a;break}Ee=e.return}}var mw=Math.ceil,qf=Jr.ReactCurrentDispatcher,tg=Jr.ReactCurrentOwner,Xi=Jr.ReactCurrentBatchConfig,dt=0,pn=null,tn=null,xn=0,mi=0,Ma=Gs(0),on=0,Cu=null,Lo=0,Rd=0,ng=0,Zl=null,qn=null,ig=0,$a=1/0,Dr=null,$f=!1,im=null,As=null,hc=!1,ms=null,Kf=0,Ql=0,rm=null,cf=-1,ff=0;function Vn(){return dt&6?$t():cf!==-1?cf:cf=$t()}function Cs(n){return n.mode&1?dt&2&&xn!==0?xn&-xn:QT.transition!==null?(ff===0&&(ff=Ay()),ff):(n=yt,n!==0||(n=window.event,n=n===void 0?16:Ny(n.type)),n):1}function lr(n,e,t,i){if(50<Ql)throw Ql=0,rm=null,Error(ae(185));Hu(n,t,i),(!(dt&2)||n!==pn)&&(n===pn&&(!(dt&2)&&(Rd|=t),on===4&&ds(n,xn)),Jn(n,i),t===1&&dt===0&&!(e.mode&1)&&($a=$t()+500,Td&&Ws()))}function Jn(n,e){var t=n.callbackNode;QE(n,e);var i=Nf(n,n===pn?xn:0);if(i===0)t!==null&&c0(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&c0(t),e===1)n.tag===0?ZT(nv.bind(null,n)):Qy(nv.bind(null,n)),YT(function(){!(dt&6)&&Ws()}),t=null;else{switch(Cy(i)){case 1:t=P_;break;case 4:t=Ty;break;case 16:t=Df;break;case 536870912:t=wy;break;default:t=Df}t=KS(t,GS.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function GS(n,e){if(cf=-1,ff=0,dt&6)throw Error(ae(327));var t=n.callbackNode;if(Da()&&n.callbackNode!==t)return null;var i=Nf(n,n===pn?xn:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=Zf(n,i);else{e=i;var r=dt;dt|=2;var s=XS();(pn!==n||xn!==e)&&(Dr=null,$a=$t()+500,xo(n,e));do try{vw();break}catch(a){WS(n,a)}while(!0);V_(),qf.current=s,dt=r,tn!==null?e=0:(pn=null,xn=0,e=on)}if(e!==0){if(e===2&&(r=Lp(n),r!==0&&(i=r,e=sm(n,r))),e===1)throw t=Cu,xo(n,0),ds(n,i),Jn(n,$t()),t;if(e===6)ds(n,i);else{if(r=n.current.alternate,!(i&30)&&!_w(r)&&(e=Zf(n,i),e===2&&(s=Lp(n),s!==0&&(i=s,e=sm(n,s))),e===1))throw t=Cu,xo(n,0),ds(n,i),Jn(n,$t()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(ae(345));case 2:no(n,qn,Dr);break;case 3:if(ds(n,i),(i&130023424)===i&&(e=ig+500-$t(),10<e)){if(Nf(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){Vn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=zp(no.bind(null,n,qn,Dr),e);break}no(n,qn,Dr);break;case 4:if(ds(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-ar(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=$t()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*mw(i/1960))-i,10<i){n.timeoutHandle=zp(no.bind(null,n,qn,Dr),i);break}no(n,qn,Dr);break;case 5:no(n,qn,Dr);break;default:throw Error(ae(329))}}}return Jn(n,$t()),n.callbackNode===t?GS.bind(null,n):null}function sm(n,e){var t=Zl;return n.current.memoizedState.isDehydrated&&(xo(n,e).flags|=256),n=Zf(n,e),n!==2&&(e=qn,qn=t,e!==null&&om(e)),n}function om(n){qn===null?qn=n:qn.push.apply(qn,n)}function _w(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!ur(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ds(n,e){for(e&=~ng,e&=~Rd,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-ar(e),i=1<<t;n[t]=-1,e&=~i}}function nv(n){if(dt&6)throw Error(ae(327));Da();var e=Nf(n,0);if(!(e&1))return Jn(n,$t()),null;var t=Zf(n,e);if(n.tag!==0&&t===2){var i=Lp(n);i!==0&&(e=i,t=sm(n,i))}if(t===1)throw t=Cu,xo(n,0),ds(n,e),Jn(n,$t()),t;if(t===6)throw Error(ae(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,no(n,qn,Dr),Jn(n,$t()),null}function rg(n,e){var t=dt;dt|=1;try{return n(e)}finally{dt=t,dt===0&&($a=$t()+500,Td&&Ws())}}function Do(n){ms!==null&&ms.tag===0&&!(dt&6)&&Da();var e=dt;dt|=1;var t=Xi.transition,i=yt;try{if(Xi.transition=null,yt=1,n)return n()}finally{yt=i,Xi.transition=t,dt=e,!(dt&6)&&Ws()}}function sg(){mi=Ma.current,Lt(Ma)}function xo(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,jT(t)),tn!==null)for(t=tn.return;t!==null;){var i=t;switch(z_(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&kf();break;case 3:Ya(),Lt(Zn),Lt(Nn),q_();break;case 5:Y_(i);break;case 4:Ya();break;case 13:Lt(Ft);break;case 19:Lt(Ft);break;case 10:G_(i.type._context);break;case 22:case 23:sg()}t=t.return}if(pn=n,tn=n=Rs(n.current,null),xn=mi=e,on=0,Cu=null,ng=Rd=Lo=0,qn=Zl=null,ho!==null){for(e=0;e<ho.length;e++)if(t=ho[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}ho=null}return n}function WS(n,e){do{var t=tn;try{if(V_(),af.current=Yf,jf){for(var i=Bt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}jf=!1}if(bo=0,hn=rn=Bt=null,$l=!1,Tu=0,tg.current=null,t===null||t.return===null){on=1,Cu=e,tn=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=xn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=G0(o);if(p!==null){p.flags&=-257,W0(p,o,a,s,e),p.mode&1&&V0(s,u,e),e=p,l=u;var g=e.updateQueue;if(g===null){var _=new Set;_.add(l),e.updateQueue=_}else g.add(l);break e}else{if(!(e&1)){V0(s,u,e),og();break e}l=Error(ae(426))}}else if(It&&a.mode&1){var m=G0(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),W0(m,o,a,s,e),B_(qa(l,a));break e}}s=l=qa(l,a),on!==4&&(on=2),Zl===null?Zl=[s]:Zl.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=CS(s,l,e);O0(s,h);break e;case 1:a=l;var v=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(As===null||!As.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=RS(s,a,e);O0(s,S);break e}}s=s.return}while(s!==null)}YS(t)}catch(A){e=A,tn===t&&t!==null&&(tn=t=t.return);continue}break}while(!0)}function XS(){var n=qf.current;return qf.current=Yf,n===null?Yf:n}function og(){(on===0||on===3||on===2)&&(on=4),pn===null||!(Lo&268435455)&&!(Rd&268435455)||ds(pn,xn)}function Zf(n,e){var t=dt;dt|=2;var i=XS();(pn!==n||xn!==e)&&(Dr=null,xo(n,e));do try{gw();break}catch(r){WS(n,r)}while(!0);if(V_(),dt=t,qf.current=i,tn!==null)throw Error(ae(261));return pn=null,xn=0,on}function gw(){for(;tn!==null;)jS(tn)}function vw(){for(;tn!==null&&!GE();)jS(tn)}function jS(n){var e=$S(n.alternate,n,mi);n.memoizedProps=n.pendingProps,e===null?YS(n):tn=e,tg.current=null}function YS(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=fw(t,e),t!==null){t.flags&=32767,tn=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{on=6,tn=null;return}}else if(t=cw(t,e,mi),t!==null){tn=t;return}if(e=e.sibling,e!==null){tn=e;return}tn=e=n}while(e!==null);on===0&&(on=5)}function no(n,e,t){var i=yt,r=Xi.transition;try{Xi.transition=null,yt=1,xw(n,e,t,i)}finally{Xi.transition=r,yt=i}return null}function xw(n,e,t,i){do Da();while(ms!==null);if(dt&6)throw Error(ae(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(ae(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(JE(n,s),n===pn&&(tn=pn=null,xn=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||hc||(hc=!0,KS(Df,function(){return Da(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=Xi.transition,Xi.transition=null;var o=yt;yt=1;var a=dt;dt|=4,tg.current=null,hw(n,t),HS(t,n),zT(Fp),If=!!Op,Fp=Op=null,n.current=t,pw(t),WE(),dt=a,yt=o,Xi.transition=s}else n.current=t;if(hc&&(hc=!1,ms=n,Kf=r),s=n.pendingLanes,s===0&&(As=null),YE(t.stateNode),Jn(n,$t()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if($f)throw $f=!1,n=im,im=null,n;return Kf&1&&n.tag!==0&&Da(),s=n.pendingLanes,s&1?n===rm?Ql++:(Ql=0,rm=n):Ql=0,Ws(),null}function Da(){if(ms!==null){var n=Cy(Kf),e=Xi.transition,t=yt;try{if(Xi.transition=null,yt=16>n?16:n,ms===null)var i=!1;else{if(n=ms,ms=null,Kf=0,dt&6)throw Error(ae(331));var r=dt;for(dt|=4,Ee=n.current;Ee!==null;){var s=Ee,o=s.child;if(Ee.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(Ee=u;Ee!==null;){var c=Ee;switch(c.tag){case 0:case 11:case 15:Kl(8,c,s)}var d=c.child;if(d!==null)d.return=c,Ee=d;else for(;Ee!==null;){c=Ee;var f=c.sibling,p=c.return;if(kS(c),c===u){Ee=null;break}if(f!==null){f.return=p,Ee=f;break}Ee=p}}}var g=s.alternate;if(g!==null){var _=g.child;if(_!==null){g.child=null;do{var m=_.sibling;_.sibling=null,_=m}while(_!==null)}}Ee=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Ee=o;else e:for(;Ee!==null;){if(s=Ee,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Kl(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,Ee=h;break e}Ee=s.return}}var v=n.current;for(Ee=v;Ee!==null;){o=Ee;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,Ee=x;else e:for(o=v;Ee!==null;){if(a=Ee,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Cd(9,a)}}catch(A){Vt(a,a.return,A)}if(a===o){Ee=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,Ee=S;break e}Ee=a.return}}if(dt=r,Ws(),Sr&&typeof Sr.onPostCommitFiberRoot=="function")try{Sr.onPostCommitFiberRoot(xd,n)}catch{}i=!0}return i}finally{yt=t,Xi.transition=e}}return!1}function iv(n,e,t){e=qa(t,e),e=CS(n,e,1),n=ws(n,e,1),e=Vn(),n!==null&&(Hu(n,1,e),Jn(n,e))}function Vt(n,e,t){if(n.tag===3)iv(n,n,t);else for(;e!==null;){if(e.tag===3){iv(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(As===null||!As.has(i))){n=qa(t,n),n=RS(e,n,1),e=ws(e,n,1),n=Vn(),e!==null&&(Hu(e,1,n),Jn(e,n));break}}e=e.return}}function yw(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=Vn(),n.pingedLanes|=n.suspendedLanes&t,pn===n&&(xn&t)===t&&(on===4||on===3&&(xn&130023424)===xn&&500>$t()-ig?xo(n,0):ng|=t),Jn(n,e)}function qS(n,e){e===0&&(n.mode&1?(e=ic,ic<<=1,!(ic&130023424)&&(ic=4194304)):e=1);var t=Vn();n=Yr(n,e),n!==null&&(Hu(n,e,t),Jn(n,t))}function Sw(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),qS(n,t)}function Mw(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(ae(314))}i!==null&&i.delete(e),qS(n,t)}var $S;$S=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||Zn.current)Kn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return Kn=!1,uw(n,e,t);Kn=!!(n.flags&131072)}else Kn=!1,It&&e.flags&1048576&&Jy(e,Hf,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;uf(n,e),n=e.pendingProps;var r=Wa(e,Nn.current);La(e,t),r=K_(null,e,i,n,r,t);var s=Z_();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Qn(i)?(s=!0,zf(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,X_(e),r.updater=Ad,e.stateNode=r,r._reactInternals=e,jp(e,i,n,t),e=$p(null,e,i,!0,s,t)):(e.tag=0,It&&s&&k_(e),kn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(uf(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Tw(i),n=tr(i,n),r){case 0:e=qp(null,e,i,n,t);break e;case 1:e=Y0(null,e,i,n,t);break e;case 11:e=X0(null,e,i,n,t);break e;case 14:e=j0(null,e,i,tr(i.type,n),t);break e}throw Error(ae(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:tr(i,r),qp(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:tr(i,r),Y0(n,e,i,r,t);case 3:e:{if(DS(e),n===null)throw Error(ae(387));i=e.pendingProps,s=e.memoizedState,r=s.element,sS(n,e),Wf(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=qa(Error(ae(423)),e),e=q0(n,e,i,t,r);break e}else if(i!==r){r=qa(Error(ae(424)),e),e=q0(n,e,i,t,r);break e}else for(Si=Ts(e.stateNode.containerInfo.firstChild),wi=e,It=!0,ir=null,t=iS(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Xa(),i===r){e=qr(n,e,t);break e}kn(n,e,i,t)}e=e.child}return e;case 5:return oS(e),n===null&&Gp(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,kp(i,r)?o=null:s!==null&&kp(i,s)&&(e.flags|=32),LS(n,e),kn(n,e,o,t),e.child;case 6:return n===null&&Gp(e),null;case 13:return NS(n,e,t);case 4:return j_(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=ja(e,null,i,t):kn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:tr(i,r),X0(n,e,i,r,t);case 7:return kn(n,e,e.pendingProps,t),e.child;case 8:return kn(n,e,e.pendingProps.children,t),e.child;case 12:return kn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,At(Vf,i._currentValue),i._currentValue=o,s!==null)if(ur(s.value,o)){if(s.children===r.children&&!Zn.current){e=qr(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Gr(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Wp(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ae(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Wp(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}kn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,La(e,t),r=Yi(r),i=i(r),e.flags|=1,kn(n,e,i,t),e.child;case 14:return i=e.type,r=tr(i,e.pendingProps),r=tr(i.type,r),j0(n,e,i,r,t);case 15:return PS(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:tr(i,r),uf(n,e),e.tag=1,Qn(i)?(n=!0,zf(e)):n=!1,La(e,t),AS(e,i,r),jp(e,i,r,t),$p(null,e,i,!0,n,t);case 19:return IS(n,e,t);case 22:return bS(n,e,t)}throw Error(ae(156,e.tag))};function KS(n,e){return Ey(n,e)}function Ew(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bi(n,e,t,i){return new Ew(n,e,t,i)}function ag(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Tw(n){if(typeof n=="function")return ag(n)?1:0;if(n!=null){if(n=n.$$typeof,n===A_)return 11;if(n===C_)return 14}return 2}function Rs(n,e){var t=n.alternate;return t===null?(t=Bi(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function df(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")ag(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case da:return yo(t.children,r,s,e);case w_:o=8,r|=8;break;case _p:return n=Bi(12,t,e,r|2),n.elementType=_p,n.lanes=s,n;case gp:return n=Bi(13,t,e,r),n.elementType=gp,n.lanes=s,n;case vp:return n=Bi(19,t,e,r),n.elementType=vp,n.lanes=s,n;case oy:return Pd(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case ry:o=10;break e;case sy:o=9;break e;case A_:o=11;break e;case C_:o=14;break e;case us:o=16,i=null;break e}throw Error(ae(130,n==null?n:typeof n,""))}return e=Bi(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function yo(n,e,t,i){return n=Bi(7,n,i,e),n.lanes=t,n}function Pd(n,e,t,i){return n=Bi(22,n,i,e),n.elementType=oy,n.lanes=t,n.stateNode={isHidden:!1},n}function _h(n,e,t){return n=Bi(6,n,null,e),n.lanes=t,n}function gh(n,e,t){return e=Bi(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function ww(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zd(0),this.expirationTimes=Zd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zd(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function lg(n,e,t,i,r,s,o,a,l){return n=new ww(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Bi(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},X_(s),n}function Aw(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:fa,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function ZS(n){if(!n)return Us;n=n._reactInternals;e:{if(zo(n)!==n||n.tag!==1)throw Error(ae(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Qn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ae(171))}if(n.tag===1){var t=n.type;if(Qn(t))return Zy(n,t,e)}return e}function QS(n,e,t,i,r,s,o,a,l){return n=lg(t,i,!0,n,r,s,o,a,l),n.context=ZS(null),t=n.current,i=Vn(),r=Cs(t),s=Gr(i,r),s.callback=e??null,ws(t,s,r),n.current.lanes=r,Hu(n,r,i),Jn(n,i),n}function bd(n,e,t,i){var r=e.current,s=Vn(),o=Cs(r);return t=ZS(t),e.context===null?e.context=t:e.pendingContext=t,e=Gr(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=ws(r,e,o),n!==null&&(lr(n,r,o,s),of(n,r,o)),o}function Qf(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function rv(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function ug(n,e){rv(n,e),(n=n.alternate)&&rv(n,e)}function Cw(){return null}var JS=typeof reportError=="function"?reportError:function(n){console.error(n)};function cg(n){this._internalRoot=n}Ld.prototype.render=cg.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(ae(409));bd(n,e,null,null)};Ld.prototype.unmount=cg.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Do(function(){bd(null,n,null,null)}),e[jr]=null}};function Ld(n){this._internalRoot=n}Ld.prototype.unstable_scheduleHydration=function(n){if(n){var e=by();n={blockedOn:null,target:n,priority:e};for(var t=0;t<fs.length&&e!==0&&e<fs[t].priority;t++);fs.splice(t,0,n),t===0&&Dy(n)}};function fg(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Dd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function sv(){}function Rw(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Qf(o);s.call(u)}}var o=QS(e,i,n,0,null,!1,!1,"",sv);return n._reactRootContainer=o,n[jr]=o.current,xu(n.nodeType===8?n.parentNode:n),Do(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Qf(l);a.call(u)}}var l=lg(n,0,!1,null,null,!1,!1,"",sv);return n._reactRootContainer=l,n[jr]=l.current,xu(n.nodeType===8?n.parentNode:n),Do(function(){bd(e,l,t,i)}),l}function Nd(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Qf(o);a.call(l)}}bd(e,o,n,r)}else o=Rw(t,e,n,r,i);return Qf(o)}Ry=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Nl(e.pendingLanes);t!==0&&(b_(e,t|1),Jn(e,$t()),!(dt&6)&&($a=$t()+500,Ws()))}break;case 13:Do(function(){var i=Yr(n,1);if(i!==null){var r=Vn();lr(i,n,1,r)}}),ug(n,1)}};L_=function(n){if(n.tag===13){var e=Yr(n,134217728);if(e!==null){var t=Vn();lr(e,n,134217728,t)}ug(n,134217728)}};Py=function(n){if(n.tag===13){var e=Cs(n),t=Yr(n,e);if(t!==null){var i=Vn();lr(t,n,e,i)}ug(n,e)}};by=function(){return yt};Ly=function(n,e){var t=yt;try{return yt=n,e()}finally{yt=t}};Rp=function(n,e,t){switch(e){case"input":if(Sp(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=Ed(i);if(!r)throw Error(ae(90));ly(i),Sp(i,r)}}}break;case"textarea":cy(n,t);break;case"select":e=t.value,e!=null&&Ca(n,!!t.multiple,e,!1)}};gy=rg;vy=Do;var Pw={usingClientEntryPoint:!1,Events:[Gu,_a,Ed,my,_y,rg]},yl={findFiberByHostInstance:fo,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},bw={bundleType:yl.bundleType,version:yl.version,rendererPackageName:yl.rendererPackageName,rendererConfig:yl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Jr.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Sy(n),n===null?null:n.stateNode},findFiberByHostInstance:yl.findFiberByHostInstance||Cw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pc.isDisabled&&pc.supportsFiber)try{xd=pc.inject(bw),Sr=pc}catch{}}bi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pw;bi.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!fg(e))throw Error(ae(200));return Aw(n,e,null,t)};bi.createRoot=function(n,e){if(!fg(n))throw Error(ae(299));var t=!1,i="",r=JS;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=lg(n,1,!1,null,null,t,!1,i,r),n[jr]=e.current,xu(n.nodeType===8?n.parentNode:n),new cg(e)};bi.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(ae(188)):(n=Object.keys(n).join(","),Error(ae(268,n)));return n=Sy(e),n=n===null?null:n.stateNode,n};bi.flushSync=function(n){return Do(n)};bi.hydrate=function(n,e,t){if(!Dd(e))throw Error(ae(200));return Nd(null,n,e,!0,t)};bi.hydrateRoot=function(n,e,t){if(!fg(n))throw Error(ae(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=JS;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=QS(e,null,n,1,t??null,r,!1,s,o),n[jr]=e.current,xu(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Ld(e)};bi.render=function(n,e,t){if(!Dd(e))throw Error(ae(200));return Nd(null,n,e,!1,t)};bi.unmountComponentAtNode=function(n){if(!Dd(n))throw Error(ae(40));return n._reactRootContainer?(Do(function(){Nd(null,null,n,!1,function(){n._reactRootContainer=null,n[jr]=null})}),!0):!1};bi.unstable_batchedUpdates=rg;bi.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Dd(t))throw Error(ae(200));if(n==null||n._reactInternals===void 0)throw Error(ae(38));return Nd(n,e,t,!1,i)};bi.version="18.3.1-next-f1338f8080-20240426";function eM(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(eM)}catch(n){console.error(n)}}eM(),ey.exports=bi;var Lw=ey.exports,tM,ov=Lw;tM=ov.createRoot,ov.hydrateRoot;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const dg="169",Dw=0,av=1,Nw=2,nM=1,Iw=2,Lr=3,Os=0,ei=1,Or=2,Ps=0,Na=1,lv=2,uv=3,cv=4,Uw=5,lo=100,Ow=101,Fw=102,kw=103,zw=104,Bw=200,Hw=201,Vw=202,Gw=203,am=204,lm=205,Ww=206,Xw=207,jw=208,Yw=209,qw=210,$w=211,Kw=212,Zw=213,Qw=214,um=0,cm=1,fm=2,Ka=3,dm=4,hm=5,pm=6,mm=7,iM=0,Jw=1,eA=2,bs=0,tA=1,nA=2,iA=3,rA=4,sA=5,oA=6,aA=7,rM=300,Za=301,Qa=302,_m=303,gm=304,Id=306,vm=1e3,mo=1001,xm=1002,Hi=1003,lA=1004,mc=1005,rr=1006,vh=1007,_o=1008,$r=1009,sM=1010,oM=1011,Ru=1012,hg=1013,No=1014,Br=1015,Xu=1016,pg=1017,mg=1018,Ja=1020,aM=35902,lM=1021,uM=1022,or=1023,cM=1024,fM=1025,Ia=1026,el=1027,dM=1028,_g=1029,hM=1030,gg=1031,vg=1033,hf=33776,pf=33777,mf=33778,_f=33779,ym=35840,Sm=35841,Mm=35842,Em=35843,Tm=36196,wm=37492,Am=37496,Cm=37808,Rm=37809,Pm=37810,bm=37811,Lm=37812,Dm=37813,Nm=37814,Im=37815,Um=37816,Om=37817,Fm=37818,km=37819,zm=37820,Bm=37821,gf=36492,Hm=36494,Vm=36495,pM=36283,Gm=36284,Wm=36285,Xm=36286,uA=3200,cA=3201,fA=0,dA=1,hs="",hr="srgb",Xs="srgb-linear",xg="display-p3",Ud="display-p3-linear",Jf="linear",bt="srgb",ed="rec709",td="p3",Go=7680,fv=519,hA=512,pA=513,mA=514,mM=515,_A=516,gA=517,vA=518,xA=519,dv=35044,hv="300 es",Hr=2e3,nd=2001;class fl{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xh=Math.PI/180,jm=180/Math.PI;function ju(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Tn[n&255]+Tn[n>>8&255]+Tn[n>>16&255]+Tn[n>>24&255]+"-"+Tn[e&255]+Tn[e>>8&255]+"-"+Tn[e>>16&15|64]+Tn[e>>24&255]+"-"+Tn[t&63|128]+Tn[t>>8&255]+"-"+Tn[t>>16&255]+Tn[t>>24&255]+Tn[i&255]+Tn[i>>8&255]+Tn[i>>16&255]+Tn[i>>24&255]).toLowerCase()}function Pn(n,e,t){return Math.max(e,Math.min(t,n))}function yA(n,e){return(n%e+e)%e}function yh(n,e,t){return(1-t)*n+t*e}function Sl(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Xn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class ht{constructor(e=0,t=0){ht.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Pn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ze{constructor(e,t,i,r,s,o,a,l,u){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u)}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],d=i[7],f=i[2],p=i[5],g=i[8],_=r[0],m=r[3],h=r[6],v=r[1],x=r[4],S=r[7],A=r[2],w=r[5],M=r[8];return s[0]=o*_+a*v+l*A,s[3]=o*m+a*x+l*w,s[6]=o*h+a*S+l*M,s[1]=u*_+c*v+d*A,s[4]=u*m+c*x+d*w,s[7]=u*h+c*S+d*M,s[2]=f*_+p*v+g*A,s[5]=f*m+p*x+g*w,s[8]=f*h+p*S+g*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=c*o-a*u,f=a*l-c*s,p=u*s-o*l,g=t*d+i*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(r*u-c*i)*_,e[2]=(a*i-r*o)*_,e[3]=f*_,e[4]=(c*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=p*_,e[7]=(i*l-u*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Sh.makeScale(e,t)),this}rotate(e){return this.premultiply(Sh.makeRotation(-e)),this}translate(e,t){return this.premultiply(Sh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Sh=new Ze;function _M(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function id(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function SA(){const n=id("canvas");return n.style.display="block",n}const pv={};function vf(n){n in pv||(pv[n]=!0,console.warn(n))}function MA(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function EA(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function TA(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const mv=new Ze().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),_v=new Ze().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ml={[Xs]:{transfer:Jf,primaries:ed,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[hr]:{transfer:bt,primaries:ed,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Ud]:{transfer:Jf,primaries:td,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(_v),fromReference:n=>n.applyMatrix3(mv)},[xg]:{transfer:bt,primaries:td,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(_v),fromReference:n=>n.applyMatrix3(mv).convertLinearToSRGB()}},wA=new Set([Xs,Ud]),_t={enabled:!0,_workingColorSpace:Xs,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!wA.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Ml[e].toReference,r=Ml[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Ml[n].primaries},getTransfer:function(n){return n===hs?Jf:Ml[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(Ml[e].luminanceCoefficients)}};function Ua(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Mh(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Wo;class AA{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Wo===void 0&&(Wo=id("canvas")),Wo.width=e.width,Wo.height=e.height;const i=Wo.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Wo}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=id("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ua(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ua(t[i]/255)*255):t[i]=Ua(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let CA=0;class gM{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:CA++}),this.uuid=ju(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Eh(r[o].image)):s.push(Eh(r[o]))}else s=Eh(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Eh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?AA.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let RA=0;class ti extends fl{constructor(e=ti.DEFAULT_IMAGE,t=ti.DEFAULT_MAPPING,i=mo,r=mo,s=rr,o=_o,a=or,l=$r,u=ti.DEFAULT_ANISOTROPY,c=hs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:RA++}),this.uuid=ju(),this.name="",this.source=new gM(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rM)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vm:e.x=e.x-Math.floor(e.x);break;case mo:e.x=e.x<0?0:1;break;case xm:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vm:e.y=e.y-Math.floor(e.y);break;case mo:e.y=e.y<0?0:1;break;case xm:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ti.DEFAULT_IMAGE=null;ti.DEFAULT_MAPPING=rM;ti.DEFAULT_ANISOTROPY=1;class Kt{constructor(e=0,t=0,i=0,r=1){Kt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],d=l[8],f=l[1],p=l[5],g=l[9],_=l[2],m=l[6],h=l[10];if(Math.abs(c-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(u+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(u+1)/2,S=(p+1)/2,A=(h+1)/2,w=(c+f)/4,M=(d+_)/4,R=(g+m)/4;return x>S&&x>A?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=w/i,s=M/i):S>A?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=w/r,s=R/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=M/s,r=R/s),this.set(i,r,s,t),this}let v=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(f-c)*(f-c));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(d-_)/v,this.z=(f-c)/v,this.w=Math.acos((u+p+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class PA extends fl{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Kt(0,0,e,t),this.scissorTest=!1,this.viewport=new Kt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rr,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new ti(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new gM(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Io extends PA{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class vM extends ti{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Hi,this.minFilter=Hi,this.wrapR=mo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class bA extends ti{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Hi,this.minFilter=Hi,this.wrapR=mo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yu{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],d=i[r+3];const f=s[o+0],p=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(d!==_||l!==f||u!==p||c!==g){let m=1-a;const h=l*f+u*p+c*g+d*_,v=h>=0?1:-1,x=1-h*h;if(x>Number.EPSILON){const A=Math.sqrt(x),w=Math.atan2(A,h*v);m=Math.sin(m*w)/A,a=Math.sin(a*w)/A}const S=a*v;if(l=l*m+f*S,u=u*m+p*S,c=c*m+g*S,d=d*m+_*S,m===1-a){const A=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=A,u*=A,c*=A,d*=A}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],d=s[o],f=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+c*d+l*p-u*f,e[t+1]=l*g+c*f+u*d-a*p,e[t+2]=u*g+c*p+a*f-l*d,e[t+3]=c*g-a*d-l*f-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),d=a(s/2),f=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*c*d+u*p*g,this._y=u*p*d-f*c*g,this._z=u*c*g+f*p*d,this._w=u*c*d-f*p*g;break;case"YXZ":this._x=f*c*d+u*p*g,this._y=u*p*d-f*c*g,this._z=u*c*g-f*p*d,this._w=u*c*d+f*p*g;break;case"ZXY":this._x=f*c*d-u*p*g,this._y=u*p*d+f*c*g,this._z=u*c*g+f*p*d,this._w=u*c*d-f*p*g;break;case"ZYX":this._x=f*c*d-u*p*g,this._y=u*p*d+f*c*g,this._z=u*c*g-f*p*d,this._w=u*c*d+f*p*g;break;case"YZX":this._x=f*c*d+u*p*g,this._y=u*p*d+f*c*g,this._z=u*c*g-f*p*d,this._w=u*c*d-f*p*g;break;case"XZY":this._x=f*c*d-u*p*g,this._y=u*p*d-f*c*g,this._z=u*c*g+f*p*d,this._w=u*c*d+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],d=t[10],f=i+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),d=Math.sin((1-t)*c)/u,f=Math.sin(t*c)/u;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,i=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(gv.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(gv.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+l*u+o*d-a*c,this.y=i+l*c+a*u-s*d,this.z=r+l*d+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Th.copy(this).projectOnVector(e),this.sub(Th)}reflect(e){return this.sub(Th.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Pn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Th=new H,gv=new Yu;class qu{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Zi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Zi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Zi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Zi):Zi.fromBufferAttribute(s,o),Zi.applyMatrix4(e.matrixWorld),this.expandByPoint(Zi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_c.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),_c.copy(i.boundingBox)),_c.applyMatrix4(e.matrixWorld),this.union(_c)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zi),Zi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(El),gc.subVectors(this.max,El),Xo.subVectors(e.a,El),jo.subVectors(e.b,El),Yo.subVectors(e.c,El),ns.subVectors(jo,Xo),is.subVectors(Yo,jo),Ys.subVectors(Xo,Yo);let t=[0,-ns.z,ns.y,0,-is.z,is.y,0,-Ys.z,Ys.y,ns.z,0,-ns.x,is.z,0,-is.x,Ys.z,0,-Ys.x,-ns.y,ns.x,0,-is.y,is.x,0,-Ys.y,Ys.x,0];return!wh(t,Xo,jo,Yo,gc)||(t=[1,0,0,0,1,0,0,0,1],!wh(t,Xo,jo,Yo,gc))?!1:(vc.crossVectors(ns,is),t=[vc.x,vc.y,vc.z],wh(t,Xo,jo,Yo,gc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ar[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ar[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ar[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ar[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ar[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ar[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ar[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ar[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ar),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ar=[new H,new H,new H,new H,new H,new H,new H,new H],Zi=new H,_c=new qu,Xo=new H,jo=new H,Yo=new H,ns=new H,is=new H,Ys=new H,El=new H,gc=new H,vc=new H,qs=new H;function wh(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){qs.fromArray(n,s);const a=r.x*Math.abs(qs.x)+r.y*Math.abs(qs.y)+r.z*Math.abs(qs.z),l=e.dot(qs),u=t.dot(qs),c=i.dot(qs);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const LA=new qu,Tl=new H,Ah=new H;class Od{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):LA.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Tl.subVectors(e,this.center);const t=Tl.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Tl,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ah.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Tl.copy(e.center).add(Ah)),this.expandByPoint(Tl.copy(e.center).sub(Ah))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Cr=new H,Ch=new H,xc=new H,rs=new H,Rh=new H,yc=new H,Ph=new H;class xM{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Cr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Cr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Cr.copy(this.origin).addScaledVector(this.direction,t),Cr.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Ch.copy(e).add(t).multiplyScalar(.5),xc.copy(t).sub(e).normalize(),rs.copy(this.origin).sub(Ch);const s=e.distanceTo(t)*.5,o=-this.direction.dot(xc),a=rs.dot(this.direction),l=-rs.dot(xc),u=rs.lengthSq(),c=Math.abs(1-o*o);let d,f,p,g;if(c>0)if(d=o*l-a,f=o*a-l,g=s*c,d>=0)if(f>=-g)if(f<=g){const _=1/c;d*=_,f*=_,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+u}else f=s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+u;else f=-s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+u;else f<=-g?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+u):f<=g?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+u):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+u);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Ch).addScaledVector(xc,f),p}intersectSphere(e,t){Cr.subVectors(e.center,this.origin);const i=Cr.dot(this.direction),r=Cr.dot(Cr)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),c>=0?(s=(e.min.y-f.y)*c,o=(e.max.y-f.y)*c):(s=(e.max.y-f.y)*c,o=(e.min.y-f.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Cr)!==null}intersectTriangle(e,t,i,r,s){Rh.subVectors(t,e),yc.subVectors(i,e),Ph.crossVectors(Rh,yc);let o=this.direction.dot(Ph),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;rs.subVectors(this.origin,e);const l=a*this.direction.dot(yc.crossVectors(rs,yc));if(l<0)return null;const u=a*this.direction.dot(Rh.cross(rs));if(u<0||l+u>o)return null;const c=-a*rs.dot(Ph);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Wt{constructor(e,t,i,r,s,o,a,l,u,c,d,f,p,g,_,m){Wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u,c,d,f,p,g,_,m)}set(e,t,i,r,s,o,a,l,u,c,d,f,p,g,_,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=u,h[6]=c,h[10]=d,h[14]=f,h[3]=p,h[7]=g,h[11]=_,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Wt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/qo.setFromMatrixColumn(e,0).length(),s=1/qo.setFromMatrixColumn(e,1).length(),o=1/qo.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*c,p=o*d,g=a*c,_=a*d;t[0]=l*c,t[4]=-l*d,t[8]=u,t[1]=p+g*u,t[5]=f-_*u,t[9]=-a*l,t[2]=_-f*u,t[6]=g+p*u,t[10]=o*l}else if(e.order==="YXZ"){const f=l*c,p=l*d,g=u*c,_=u*d;t[0]=f+_*a,t[4]=g*a-p,t[8]=o*u,t[1]=o*d,t[5]=o*c,t[9]=-a,t[2]=p*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*c,p=l*d,g=u*c,_=u*d;t[0]=f-_*a,t[4]=-o*d,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*c,t[9]=_-f*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*c,p=o*d,g=a*c,_=a*d;t[0]=l*c,t[4]=g*u-p,t[8]=f*u+_,t[1]=l*d,t[5]=_*u+f,t[9]=p*u-g,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*u,g=a*l,_=a*u;t[0]=l*c,t[4]=_-f*d,t[8]=g*d+p,t[1]=d,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=p*d+g,t[10]=f-_*d}else if(e.order==="XZY"){const f=o*l,p=o*u,g=a*l,_=a*u;t[0]=l*c,t[4]=-d,t[8]=u*c,t[1]=f*d+_,t[5]=o*c,t[9]=p*d-g,t[2]=g*d-p,t[6]=a*c,t[10]=_*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(DA,e,NA)}lookAt(e,t,i){const r=this.elements;return di.subVectors(e,t),di.lengthSq()===0&&(di.z=1),di.normalize(),ss.crossVectors(i,di),ss.lengthSq()===0&&(Math.abs(i.z)===1?di.x+=1e-4:di.z+=1e-4,di.normalize(),ss.crossVectors(i,di)),ss.normalize(),Sc.crossVectors(di,ss),r[0]=ss.x,r[4]=Sc.x,r[8]=di.x,r[1]=ss.y,r[5]=Sc.y,r[9]=di.y,r[2]=ss.z,r[6]=Sc.z,r[10]=di.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],d=i[5],f=i[9],p=i[13],g=i[2],_=i[6],m=i[10],h=i[14],v=i[3],x=i[7],S=i[11],A=i[15],w=r[0],M=r[4],R=r[8],L=r[12],y=r[1],T=r[5],U=r[9],B=r[13],j=r[2],Z=r[6],G=r[10],Y=r[14],N=r[3],K=r[7],P=r[11],ne=r[15];return s[0]=o*w+a*y+l*j+u*N,s[4]=o*M+a*T+l*Z+u*K,s[8]=o*R+a*U+l*G+u*P,s[12]=o*L+a*B+l*Y+u*ne,s[1]=c*w+d*y+f*j+p*N,s[5]=c*M+d*T+f*Z+p*K,s[9]=c*R+d*U+f*G+p*P,s[13]=c*L+d*B+f*Y+p*ne,s[2]=g*w+_*y+m*j+h*N,s[6]=g*M+_*T+m*Z+h*K,s[10]=g*R+_*U+m*G+h*P,s[14]=g*L+_*B+m*Y+h*ne,s[3]=v*w+x*y+S*j+A*N,s[7]=v*M+x*T+S*Z+A*K,s[11]=v*R+x*U+S*G+A*P,s[15]=v*L+x*B+S*Y+A*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],d=e[6],f=e[10],p=e[14],g=e[3],_=e[7],m=e[11],h=e[15];return g*(+s*l*d-r*u*d-s*a*f+i*u*f+r*a*p-i*l*p)+_*(+t*l*p-t*u*f+s*o*f-r*o*p+r*u*c-s*l*c)+m*(+t*u*d-t*a*p-s*o*d+i*o*p+s*a*c-i*u*c)+h*(-r*a*c-t*l*d+t*a*f+r*o*d-i*o*f+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=e[9],f=e[10],p=e[11],g=e[12],_=e[13],m=e[14],h=e[15],v=d*m*u-_*f*u+_*l*p-a*m*p-d*l*h+a*f*h,x=g*f*u-c*m*u-g*l*p+o*m*p+c*l*h-o*f*h,S=c*_*u-g*d*u+g*a*p-o*_*p-c*a*h+o*d*h,A=g*d*l-c*_*l-g*a*f+o*_*f+c*a*m-o*d*m,w=t*v+i*x+r*S+s*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/w;return e[0]=v*M,e[1]=(_*f*s-d*m*s-_*r*p+i*m*p+d*r*h-i*f*h)*M,e[2]=(a*m*s-_*l*s+_*r*u-i*m*u-a*r*h+i*l*h)*M,e[3]=(d*l*s-a*f*s-d*r*u+i*f*u+a*r*p-i*l*p)*M,e[4]=x*M,e[5]=(c*m*s-g*f*s+g*r*p-t*m*p-c*r*h+t*f*h)*M,e[6]=(g*l*s-o*m*s-g*r*u+t*m*u+o*r*h-t*l*h)*M,e[7]=(o*f*s-c*l*s+c*r*u-t*f*u-o*r*p+t*l*p)*M,e[8]=S*M,e[9]=(g*d*s-c*_*s-g*i*p+t*_*p+c*i*h-t*d*h)*M,e[10]=(o*_*s-g*a*s+g*i*u-t*_*u-o*i*h+t*a*h)*M,e[11]=(c*a*s-o*d*s-c*i*u+t*d*u+o*i*p-t*a*p)*M,e[12]=A*M,e[13]=(c*_*r-g*d*r+g*i*f-t*_*f-c*i*m+t*d*m)*M,e[14]=(g*a*r-o*_*r-g*i*l+t*_*l+o*i*m-t*a*m)*M,e[15]=(o*d*r-c*a*r+c*i*l-t*d*l-o*i*f+t*a*f)*M,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,d=a+a,f=s*u,p=s*c,g=s*d,_=o*c,m=o*d,h=a*d,v=l*u,x=l*c,S=l*d,A=i.x,w=i.y,M=i.z;return r[0]=(1-(_+h))*A,r[1]=(p+S)*A,r[2]=(g-x)*A,r[3]=0,r[4]=(p-S)*w,r[5]=(1-(f+h))*w,r[6]=(m+v)*w,r[7]=0,r[8]=(g+x)*M,r[9]=(m-v)*M,r[10]=(1-(f+_))*M,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=qo.set(r[0],r[1],r[2]).length();const o=qo.set(r[4],r[5],r[6]).length(),a=qo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Qi.copy(this);const u=1/s,c=1/o,d=1/a;return Qi.elements[0]*=u,Qi.elements[1]*=u,Qi.elements[2]*=u,Qi.elements[4]*=c,Qi.elements[5]*=c,Qi.elements[6]*=c,Qi.elements[8]*=d,Qi.elements[9]*=d,Qi.elements[10]*=d,t.setFromRotationMatrix(Qi),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Hr){const l=this.elements,u=2*s/(t-e),c=2*s/(i-r),d=(t+e)/(t-e),f=(i+r)/(i-r);let p,g;if(a===Hr)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===nd)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=c,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Hr){const l=this.elements,u=1/(t-e),c=1/(i-r),d=1/(o-s),f=(t+e)*u,p=(i+r)*c;let g,_;if(a===Hr)g=(o+s)*d,_=-2*d;else if(a===nd)g=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const qo=new H,Qi=new Wt,DA=new H(0,0,0),NA=new H(1,1,1),ss=new H,Sc=new H,di=new H,vv=new Wt,xv=new Yu;class Kr{constructor(e=0,t=0,i=0,r=Kr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],d=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Pn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Pn(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Pn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Pn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Pn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Pn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return vv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vv,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xv.setFromEuler(this),this.setFromQuaternion(xv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Kr.DEFAULT_ORDER="XYZ";class yM{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let IA=0;const yv=new H,$o=new Yu,Rr=new Wt,Mc=new H,wl=new H,UA=new H,OA=new Yu,Sv=new H(1,0,0),Mv=new H(0,1,0),Ev=new H(0,0,1),Tv={type:"added"},FA={type:"removed"},Ko={type:"childadded",child:null},bh={type:"childremoved",child:null};class ni extends fl{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:IA++}),this.uuid=ju(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ni.DEFAULT_UP.clone();const e=new H,t=new Kr,i=new Yu,r=new H(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Wt},normalMatrix:{value:new Ze}}),this.matrix=new Wt,this.matrixWorld=new Wt,this.matrixAutoUpdate=ni.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ni.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yM,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $o.setFromAxisAngle(e,t),this.quaternion.multiply($o),this}rotateOnWorldAxis(e,t){return $o.setFromAxisAngle(e,t),this.quaternion.premultiply($o),this}rotateX(e){return this.rotateOnAxis(Sv,e)}rotateY(e){return this.rotateOnAxis(Mv,e)}rotateZ(e){return this.rotateOnAxis(Ev,e)}translateOnAxis(e,t){return yv.copy(e).applyQuaternion(this.quaternion),this.position.add(yv.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Sv,e)}translateY(e){return this.translateOnAxis(Mv,e)}translateZ(e){return this.translateOnAxis(Ev,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Rr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Mc.copy(e):Mc.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),wl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Rr.lookAt(wl,Mc,this.up):Rr.lookAt(Mc,wl,this.up),this.quaternion.setFromRotationMatrix(Rr),r&&(Rr.extractRotation(r.matrixWorld),$o.setFromRotationMatrix(Rr),this.quaternion.premultiply($o.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Tv),Ko.child=e,this.dispatchEvent(Ko),Ko.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(FA),bh.child=e,this.dispatchEvent(bh),bh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Rr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Rr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Rr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Tv),Ko.child=e,this.dispatchEvent(Ko),Ko.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wl,e,UA),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wl,OA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}ni.DEFAULT_UP=new H(0,1,0);ni.DEFAULT_MATRIX_AUTO_UPDATE=!0;ni.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ji=new H,Pr=new H,Lh=new H,br=new H,Zo=new H,Qo=new H,wv=new H,Dh=new H,Nh=new H,Ih=new H,Uh=new Kt,Oh=new Kt,Fh=new Kt;class sr{constructor(e=new H,t=new H,i=new H){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Ji.subVectors(e,t),r.cross(Ji);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Ji.subVectors(r,t),Pr.subVectors(i,t),Lh.subVectors(e,t);const o=Ji.dot(Ji),a=Ji.dot(Pr),l=Ji.dot(Lh),u=Pr.dot(Pr),c=Pr.dot(Lh),d=o*u-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(u*l-a*c)*f,g=(o*c-a*l)*f;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,br)===null?!1:br.x>=0&&br.y>=0&&br.x+br.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,br)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,br.x),l.addScaledVector(o,br.y),l.addScaledVector(a,br.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return Uh.setScalar(0),Oh.setScalar(0),Fh.setScalar(0),Uh.fromBufferAttribute(e,t),Oh.fromBufferAttribute(e,i),Fh.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Uh,s.x),o.addScaledVector(Oh,s.y),o.addScaledVector(Fh,s.z),o}static isFrontFacing(e,t,i,r){return Ji.subVectors(i,t),Pr.subVectors(e,t),Ji.cross(Pr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ji.subVectors(this.c,this.b),Pr.subVectors(this.a,this.b),Ji.cross(Pr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return sr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return sr.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return sr.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return sr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return sr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Zo.subVectors(r,i),Qo.subVectors(s,i),Dh.subVectors(e,i);const l=Zo.dot(Dh),u=Qo.dot(Dh);if(l<=0&&u<=0)return t.copy(i);Nh.subVectors(e,r);const c=Zo.dot(Nh),d=Qo.dot(Nh);if(c>=0&&d<=c)return t.copy(r);const f=l*d-c*u;if(f<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(Zo,o);Ih.subVectors(e,s);const p=Zo.dot(Ih),g=Qo.dot(Ih);if(g>=0&&p<=g)return t.copy(s);const _=p*u-l*g;if(_<=0&&u>=0&&g<=0)return a=u/(u-g),t.copy(i).addScaledVector(Qo,a);const m=c*g-p*d;if(m<=0&&d-c>=0&&p-g>=0)return wv.subVectors(s,r),a=(d-c)/(d-c+(p-g)),t.copy(r).addScaledVector(wv,a);const h=1/(m+_+f);return o=_*h,a=f*h,t.copy(i).addScaledVector(Zo,o).addScaledVector(Qo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const SM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},os={h:0,s:0,l:0},Ec={h:0,s:0,l:0};function kh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class gt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=hr){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_t.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=_t.workingColorSpace){return this.r=e,this.g=t,this.b=i,_t.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=_t.workingColorSpace){if(e=yA(e,1),t=Pn(t,0,1),i=Pn(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=kh(o,s,e+1/3),this.g=kh(o,s,e),this.b=kh(o,s,e-1/3)}return _t.toWorkingColorSpace(this,r),this}setStyle(e,t=hr){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=hr){const i=SM[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ua(e.r),this.g=Ua(e.g),this.b=Ua(e.b),this}copyLinearToSRGB(e){return this.r=Mh(e.r),this.g=Mh(e.g),this.b=Mh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hr){return _t.fromWorkingColorSpace(wn.copy(this),e),Math.round(Pn(wn.r*255,0,255))*65536+Math.round(Pn(wn.g*255,0,255))*256+Math.round(Pn(wn.b*255,0,255))}getHexString(e=hr){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_t.workingColorSpace){_t.fromWorkingColorSpace(wn.copy(this),t);const i=wn.r,r=wn.g,s=wn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const d=o-a;switch(u=c<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=_t.workingColorSpace){return _t.fromWorkingColorSpace(wn.copy(this),t),e.r=wn.r,e.g=wn.g,e.b=wn.b,e}getStyle(e=hr){_t.fromWorkingColorSpace(wn.copy(this),e);const t=wn.r,i=wn.g,r=wn.b;return e!==hr?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(os),this.setHSL(os.h+e,os.s+t,os.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(os),e.getHSL(Ec);const i=yh(os.h,Ec.h,t),r=yh(os.s,Ec.s,t),s=yh(os.l,Ec.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wn=new gt;gt.NAMES=SM;let kA=0;class $u extends fl{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kA++}),this.uuid=ju(),this.name="",this.type="Material",this.blending=Na,this.side=Os,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=am,this.blendDst=lm,this.blendEquation=lo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new gt(0,0,0),this.blendAlpha=0,this.depthFunc=Ka,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Go,this.stencilZFail=Go,this.stencilZPass=Go,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Na&&(i.blending=this.blending),this.side!==Os&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==am&&(i.blendSrc=this.blendSrc),this.blendDst!==lm&&(i.blendDst=this.blendDst),this.blendEquation!==lo&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ka&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fv&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Go&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Go&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Go&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class uo extends $u{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kr,this.combine=iM,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Qt=new H,Tc=new ht;class Er{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=dv,this.updateRanges=[],this.gpuType=Br,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Tc.fromBufferAttribute(this,t),Tc.applyMatrix3(e),this.setXY(t,Tc.x,Tc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix3(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Sl(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Xn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Sl(t,this.array)),t}setX(e,t){return this.normalized&&(t=Xn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Sl(t,this.array)),t}setY(e,t){return this.normalized&&(t=Xn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Sl(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Xn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Sl(t,this.array)),t}setW(e,t){return this.normalized&&(t=Xn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Xn(t,this.array),i=Xn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Xn(t,this.array),i=Xn(i,this.array),r=Xn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Xn(t,this.array),i=Xn(i,this.array),r=Xn(r,this.array),s=Xn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==dv&&(e.usage=this.usage),e}}class MM extends Er{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class EM extends Er{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ii extends Er{constructor(e,t,i){super(new Float32Array(e),t,i)}}let zA=0;const Ni=new Wt,zh=new ni,Jo=new H,hi=new qu,Al=new qu,cn=new H;class cr extends fl{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zA++}),this.uuid=ju(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_M(e)?EM:MM)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ni.makeRotationFromQuaternion(e),this.applyMatrix4(Ni),this}rotateX(e){return Ni.makeRotationX(e),this.applyMatrix4(Ni),this}rotateY(e){return Ni.makeRotationY(e),this.applyMatrix4(Ni),this}rotateZ(e){return Ni.makeRotationZ(e),this.applyMatrix4(Ni),this}translate(e,t,i){return Ni.makeTranslation(e,t,i),this.applyMatrix4(Ni),this}scale(e,t,i){return Ni.makeScale(e,t,i),this.applyMatrix4(Ni),this}lookAt(e){return zh.lookAt(e),zh.updateMatrix(),this.applyMatrix4(zh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Jo).negate(),this.translate(Jo.x,Jo.y,Jo.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ii(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];hi.setFromBufferAttribute(s),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,hi.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,hi.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(hi.min),this.boundingBox.expandByPoint(hi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Od);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(hi.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Al.setFromBufferAttribute(a),this.morphTargetsRelative?(cn.addVectors(hi.min,Al.min),hi.expandByPoint(cn),cn.addVectors(hi.max,Al.max),hi.expandByPoint(cn)):(hi.expandByPoint(Al.min),hi.expandByPoint(Al.max))}hi.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)cn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(cn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)cn.fromBufferAttribute(a,u),l&&(Jo.fromBufferAttribute(e,u),cn.add(Jo)),r=Math.max(r,i.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Er(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<i.count;R++)a[R]=new H,l[R]=new H;const u=new H,c=new H,d=new H,f=new ht,p=new ht,g=new ht,_=new H,m=new H;function h(R,L,y){u.fromBufferAttribute(i,R),c.fromBufferAttribute(i,L),d.fromBufferAttribute(i,y),f.fromBufferAttribute(s,R),p.fromBufferAttribute(s,L),g.fromBufferAttribute(s,y),c.sub(u),d.sub(u),p.sub(f),g.sub(f);const T=1/(p.x*g.y-g.x*p.y);isFinite(T)&&(_.copy(c).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(T),m.copy(d).multiplyScalar(p.x).addScaledVector(c,-g.x).multiplyScalar(T),a[R].add(_),a[L].add(_),a[y].add(_),l[R].add(m),l[L].add(m),l[y].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let R=0,L=v.length;R<L;++R){const y=v[R],T=y.start,U=y.count;for(let B=T,j=T+U;B<j;B+=3)h(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const x=new H,S=new H,A=new H,w=new H;function M(R){A.fromBufferAttribute(r,R),w.copy(A);const L=a[R];x.copy(L),x.sub(A.multiplyScalar(A.dot(L))).normalize(),S.crossVectors(w,L);const T=S.dot(l[R])<0?-1:1;o.setXYZW(R,x.x,x.y,x.z,T)}for(let R=0,L=v.length;R<L;++R){const y=v[R],T=y.start,U=y.count;for(let B=T,j=T+U;B<j;B+=3)M(e.getX(B+0)),M(e.getX(B+1)),M(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Er(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new H,s=new H,o=new H,a=new H,l=new H,u=new H,c=new H,d=new H;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)cn.fromBufferAttribute(e,t),cn.normalize(),e.setXYZ(t,cn.x,cn.y,cn.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,d=a.normalized,f=new u.constructor(l.length*c);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*c;for(let h=0;h<c;h++)f[g++]=u[p++]}return new Er(f,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new cr,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,d=u.length;c<d;c++){const f=u[c],p=e(f,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,f=u.length;d<f;d++){const p=u[d];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],d=s[u];for(let f=0,p=d.length;f<p;f++)c.push(d[f].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Av=new Wt,$s=new xM,wc=new Od,Cv=new H,Ac=new H,Cc=new H,Rc=new H,Bh=new H,Pc=new H,Rv=new H,bc=new H;class Vi extends ni{constructor(e=new cr,t=new uo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Pc.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],d=s[l];c!==0&&(Bh.fromBufferAttribute(d,e),o?Pc.addScaledVector(Bh,c):Pc.addScaledVector(Bh.sub(t),c))}t.add(Pc)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),wc.copy(i.boundingSphere),wc.applyMatrix4(s),$s.copy(e.ray).recast(e.near),!(wc.containsPoint($s.origin)===!1&&($s.intersectSphere(wc,Cv)===null||$s.origin.distanceToSquared(Cv)>(e.far-e.near)**2))&&(Av.copy(s).invert(),$s.copy(e.ray).applyMatrix4(Av),!(i.boundingBox!==null&&$s.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,$s)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],h=o[m.materialIndex],v=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,A=x;S<A;S+=3){const w=a.getX(S),M=a.getX(S+1),R=a.getX(S+2);r=Lc(this,h,e,i,u,c,d,w,M,R),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,h=_;m<h;m+=3){const v=a.getX(m),x=a.getX(m+1),S=a.getX(m+2);r=Lc(this,o,e,i,u,c,d,v,x,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],h=o[m.materialIndex],v=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,A=x;S<A;S+=3){const w=S,M=S+1,R=S+2;r=Lc(this,h,e,i,u,c,d,w,M,R),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,h=_;m<h;m+=3){const v=m,x=m+1,S=m+2;r=Lc(this,o,e,i,u,c,d,v,x,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function BA(n,e,t,i,r,s,o,a){let l;if(e.side===ei?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Os,a),l===null)return null;bc.copy(a),bc.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(bc);return u<t.near||u>t.far?null:{distance:u,point:bc.clone(),object:n}}function Lc(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,Ac),n.getVertexPosition(l,Cc),n.getVertexPosition(u,Rc);const c=BA(n,e,t,i,Ac,Cc,Rc,Rv);if(c){const d=new H;sr.getBarycoord(Rv,Ac,Cc,Rc,d),r&&(c.uv=sr.getInterpolatedAttribute(r,a,l,u,d,new ht)),s&&(c.uv1=sr.getInterpolatedAttribute(s,a,l,u,d,new ht)),o&&(c.normal=sr.getInterpolatedAttribute(o,a,l,u,d,new H),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const f={a,b:l,c:u,normal:new H,materialIndex:0};sr.getNormal(Ac,Cc,Rc,f.normal),c.face=f,c.barycoord=d}return c}class Ku extends cr{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],d=[];let f=0,p=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ii(u,3)),this.setAttribute("normal",new ii(c,3)),this.setAttribute("uv",new ii(d,2));function g(_,m,h,v,x,S,A,w,M,R,L){const y=S/M,T=A/R,U=S/2,B=A/2,j=w/2,Z=M+1,G=R+1;let Y=0,N=0;const K=new H;for(let P=0;P<G;P++){const ne=P*T-B;for(let Se=0;Se<Z;Se++){const He=Se*y-U;K[_]=He*v,K[m]=ne*x,K[h]=j,u.push(K.x,K.y,K.z),K[_]=0,K[m]=0,K[h]=w>0?1:-1,c.push(K.x,K.y,K.z),d.push(Se/M),d.push(1-P/R),Y+=1}}for(let P=0;P<R;P++)for(let ne=0;ne<M;ne++){const Se=f+ne+Z*P,He=f+ne+Z*(P+1),q=f+(ne+1)+Z*(P+1),te=f+(ne+1)+Z*P;l.push(Se,He,te),l.push(He,q,te),N+=6}a.addGroup(p,N,L),p+=N,f+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ku(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function tl(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function On(n){const e={};for(let t=0;t<n.length;t++){const i=tl(n[t]);for(const r in i)e[r]=i[r]}return e}function HA(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function TM(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:_t.workingColorSpace}const VA={clone:tl,merge:On};var GA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,WA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fs extends $u{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=GA,this.fragmentShader=WA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=tl(e.uniforms),this.uniformsGroups=HA(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class wM extends ni{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Wt,this.projectionMatrix=new Wt,this.projectionMatrixInverse=new Wt,this.coordinateSystem=Hr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const as=new H,Pv=new ht,bv=new ht;class Fi extends wM{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=jm*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(xh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return jm*2*Math.atan(Math.tan(xh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){as.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(as.x,as.y).multiplyScalar(-e/as.z),as.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(as.x,as.y).multiplyScalar(-e/as.z)}getViewSize(e,t){return this.getViewBounds(e,Pv,bv),t.subVectors(bv,Pv)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(xh*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ea=-90,ta=1;class XA extends ni{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Fi(ea,ta,e,t);r.layers=this.layers,this.add(r);const s=new Fi(ea,ta,e,t);s.layers=this.layers,this.add(s);const o=new Fi(ea,ta,e,t);o.layers=this.layers,this.add(o);const a=new Fi(ea,ta,e,t);a.layers=this.layers,this.add(a);const l=new Fi(ea,ta,e,t);l.layers=this.layers,this.add(l);const u=new Fi(ea,ta,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===Hr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===nd)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,c),e.setRenderTarget(d,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class AM extends ti{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:Za,super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class jA extends Io{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new AM(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:rr}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ku(5,5,5),s=new Fs({name:"CubemapFromEquirect",uniforms:tl(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ei,blending:Ps});s.uniforms.tEquirect.value=t;const o=new Vi(r,s),a=t.minFilter;return t.minFilter===_o&&(t.minFilter=rr),new XA(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Hh=new H,YA=new H,qA=new Ze;class io{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Hh.subVectors(i,t).cross(YA.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Hh),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||qA.getNormalMatrix(e),r=this.coplanarPoint(Hh).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ks=new Od,Dc=new H;class CM{constructor(e=new io,t=new io,i=new io,r=new io,s=new io,o=new io){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Hr){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],d=r[6],f=r[7],p=r[8],g=r[9],_=r[10],m=r[11],h=r[12],v=r[13],x=r[14],S=r[15];if(i[0].setComponents(l-s,f-u,m-p,S-h).normalize(),i[1].setComponents(l+s,f+u,m+p,S+h).normalize(),i[2].setComponents(l+o,f+c,m+g,S+v).normalize(),i[3].setComponents(l-o,f-c,m-g,S-v).normalize(),i[4].setComponents(l-a,f-d,m-_,S-x).normalize(),t===Hr)i[5].setComponents(l+a,f+d,m+_,S+x).normalize();else if(t===nd)i[5].setComponents(a,d,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ks.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ks.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ks)}intersectsSprite(e){return Ks.center.set(0,0,0),Ks.radius=.7071067811865476,Ks.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ks)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Dc.x=r.normal.x>0?e.max.x:e.min.x,Dc.y=r.normal.y>0?e.max.y:e.min.y,Dc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Dc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function RM(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function $A(n){const e=new WeakMap;function t(a,l){const u=a.array,c=a.usage,d=u.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,u,c),a.onUploadCallback();let p;if(u instanceof Float32Array)p=n.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=n.SHORT;else if(u instanceof Uint32Array)p=n.UNSIGNED_INT;else if(u instanceof Int32Array)p=n.INT;else if(u instanceof Int8Array)p=n.BYTE;else if(u instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,u){const c=l.array,d=l.updateRanges;if(n.bindBuffer(u,a),d.length===0)n.bufferSubData(u,0,c);else{d.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<d.length;p++){const g=d[f],_=d[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,d[f]=_)}d.length=f+1;for(let p=0,g=d.length;p<g;p++){const _=d[p];n.bufferSubData(u,_.start*c.BYTES_PER_ELEMENT,c,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,t(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}class Fd extends cr{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,d=e/a,f=t/l,p=[],g=[],_=[],m=[];for(let h=0;h<c;h++){const v=h*f-o;for(let x=0;x<u;x++){const S=x*d-s;g.push(S,-v,0),_.push(0,0,1),m.push(x/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let v=0;v<a;v++){const x=v+u*h,S=v+u*(h+1),A=v+1+u*(h+1),w=v+1+u*h;p.push(x,S,w),p.push(S,A,w)}this.setIndex(p),this.setAttribute("position",new ii(g,3)),this.setAttribute("normal",new ii(_,3)),this.setAttribute("uv",new ii(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fd(e.width,e.height,e.widthSegments,e.heightSegments)}}var KA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ZA=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,QA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,JA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eC=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tC=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nC=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,iC=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rC=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,sC=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,oC=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,aC=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lC=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,uC=`#ifdef USE_IRIDESCENCE
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
#endif`,cC=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,fC=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,dC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pC=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mC=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_C=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,vC=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,xC=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
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
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,yC=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,SC=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,MC=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,EC=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,TC=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wC=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,AC="gl_FragColor = linearToOutputTexel( gl_FragColor );",CC=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,RC=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,PC=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bC=`#ifdef USE_ENVMAP
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
#endif`,LC=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,DC=`#ifdef USE_ENVMAP
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
#endif`,NC=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,IC=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,UC=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,OC=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,FC=`#ifdef USE_GRADIENTMAP
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
}`,kC=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zC=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,BC=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,HC=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,VC=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,GC=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,WC=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,XC=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jC=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,YC=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
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
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,qC=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
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
#endif
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,$C=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,KC=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ZC=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,QC=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,JC=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eR=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tR=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,iR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,sR=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,aR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,uR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fR=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,dR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,pR=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,mR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_R=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vR=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,xR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,SR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,MR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ER=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,TR=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,wR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,AR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,CR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,RR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,PR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,LR=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,DR=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,NR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,IR=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,UR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,OR=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,FR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kR=`#ifdef USE_SKINNING
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
#endif`,zR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,BR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,HR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,VR=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,GR=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,WR=`#ifdef USE_TRANSMISSION
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
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
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
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
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
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,XR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,YR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,qR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $R=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,KR=`uniform sampler2D t2D;
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
	#include <colorspace_fragment>
}`,ZR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,QR=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,e2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,n2=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,i2=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,r2=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,s2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,o2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,a2=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,l2=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,u2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,c2=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f2=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,d2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,h2=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,p2=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m2=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,_2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,g2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,v2=`#define PHONG
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
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,y2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,M2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
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
}`,T2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,w2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,A2=`uniform vec3 color;
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
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,C2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,R2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ke={alphahash_fragment:KA,alphahash_pars_fragment:ZA,alphamap_fragment:QA,alphamap_pars_fragment:JA,alphatest_fragment:eC,alphatest_pars_fragment:tC,aomap_fragment:nC,aomap_pars_fragment:iC,batching_pars_vertex:rC,batching_vertex:sC,begin_vertex:oC,beginnormal_vertex:aC,bsdfs:lC,iridescence_fragment:uC,bumpmap_pars_fragment:cC,clipping_planes_fragment:fC,clipping_planes_pars_fragment:dC,clipping_planes_pars_vertex:hC,clipping_planes_vertex:pC,color_fragment:mC,color_pars_fragment:_C,color_pars_vertex:gC,color_vertex:vC,common:xC,cube_uv_reflection_fragment:yC,defaultnormal_vertex:SC,displacementmap_pars_vertex:MC,displacementmap_vertex:EC,emissivemap_fragment:TC,emissivemap_pars_fragment:wC,colorspace_fragment:AC,colorspace_pars_fragment:CC,envmap_fragment:RC,envmap_common_pars_fragment:PC,envmap_pars_fragment:bC,envmap_pars_vertex:LC,envmap_physical_pars_fragment:VC,envmap_vertex:DC,fog_vertex:NC,fog_pars_vertex:IC,fog_fragment:UC,fog_pars_fragment:OC,gradientmap_pars_fragment:FC,lightmap_pars_fragment:kC,lights_lambert_fragment:zC,lights_lambert_pars_fragment:BC,lights_pars_begin:HC,lights_toon_fragment:GC,lights_toon_pars_fragment:WC,lights_phong_fragment:XC,lights_phong_pars_fragment:jC,lights_physical_fragment:YC,lights_physical_pars_fragment:qC,lights_fragment_begin:$C,lights_fragment_maps:KC,lights_fragment_end:ZC,logdepthbuf_fragment:QC,logdepthbuf_pars_fragment:JC,logdepthbuf_pars_vertex:eR,logdepthbuf_vertex:tR,map_fragment:nR,map_pars_fragment:iR,map_particle_fragment:rR,map_particle_pars_fragment:sR,metalnessmap_fragment:oR,metalnessmap_pars_fragment:aR,morphinstance_vertex:lR,morphcolor_vertex:uR,morphnormal_vertex:cR,morphtarget_pars_vertex:fR,morphtarget_vertex:dR,normal_fragment_begin:hR,normal_fragment_maps:pR,normal_pars_fragment:mR,normal_pars_vertex:_R,normal_vertex:gR,normalmap_pars_fragment:vR,clearcoat_normal_fragment_begin:xR,clearcoat_normal_fragment_maps:yR,clearcoat_pars_fragment:SR,iridescence_pars_fragment:MR,opaque_fragment:ER,packing:TR,premultiplied_alpha_fragment:wR,project_vertex:AR,dithering_fragment:CR,dithering_pars_fragment:RR,roughnessmap_fragment:PR,roughnessmap_pars_fragment:bR,shadowmap_pars_fragment:LR,shadowmap_pars_vertex:DR,shadowmap_vertex:NR,shadowmask_pars_fragment:IR,skinbase_vertex:UR,skinning_pars_vertex:OR,skinning_vertex:FR,skinnormal_vertex:kR,specularmap_fragment:zR,specularmap_pars_fragment:BR,tonemapping_fragment:HR,tonemapping_pars_fragment:VR,transmission_fragment:GR,transmission_pars_fragment:WR,uv_pars_fragment:XR,uv_pars_vertex:jR,uv_vertex:YR,worldpos_vertex:qR,background_vert:$R,background_frag:KR,backgroundCube_vert:ZR,backgroundCube_frag:QR,cube_vert:JR,cube_frag:e2,depth_vert:t2,depth_frag:n2,distanceRGBA_vert:i2,distanceRGBA_frag:r2,equirect_vert:s2,equirect_frag:o2,linedashed_vert:a2,linedashed_frag:l2,meshbasic_vert:u2,meshbasic_frag:c2,meshlambert_vert:f2,meshlambert_frag:d2,meshmatcap_vert:h2,meshmatcap_frag:p2,meshnormal_vert:m2,meshnormal_frag:_2,meshphong_vert:g2,meshphong_frag:v2,meshphysical_vert:x2,meshphysical_frag:y2,meshtoon_vert:S2,meshtoon_frag:M2,points_vert:E2,points_frag:T2,shadow_vert:w2,shadow_frag:A2,sprite_vert:C2,sprite_frag:R2},ge={common:{diffuse:{value:new gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new gt(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},_r={basic:{uniforms:On([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:On([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new gt(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:On([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new gt(0)},specular:{value:new gt(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:On([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:On([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new gt(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:On([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:On([ge.points,ge.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:On([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:On([ge.common,ge.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:On([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:On([ge.sprite,ge.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:On([ge.common,ge.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:On([ge.lights,ge.fog,{color:{value:new gt(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};_r.physical={uniforms:On([_r.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new gt(0)},specularColor:{value:new gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const Nc={r:0,b:0,g:0},Zs=new Kr,P2=new Wt;function b2(n,e,t,i,r,s,o){const a=new gt(0);let l=s===!0?0:1,u,c,d=null,f=0,p=null;function g(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?t:e).get(x)),x}function _(v){let x=!1;const S=g(v);S===null?h(a,l):S&&S.isColor&&(h(S,1),x=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(v,x){const S=g(x);S&&(S.isCubeTexture||S.mapping===Id)?(c===void 0&&(c=new Vi(new Ku(1,1,1),new Fs({name:"BackgroundCubeMaterial",uniforms:tl(_r.backgroundCube.uniforms),vertexShader:_r.backgroundCube.vertexShader,fragmentShader:_r.backgroundCube.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,w,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),Zs.copy(x.backgroundRotation),Zs.x*=-1,Zs.y*=-1,Zs.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Zs.y*=-1,Zs.z*=-1),c.material.uniforms.envMap.value=S,c.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(P2.makeRotationFromEuler(Zs)),c.material.toneMapped=_t.getTransfer(S.colorSpace)!==bt,(d!==S||f!==S.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=S,f=S.version,p=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(u===void 0&&(u=new Vi(new Fd(2,2),new Fs({name:"BackgroundMaterial",uniforms:tl(_r.background.uniforms),vertexShader:_r.background.vertexShader,fragmentShader:_r.background.fragmentShader,side:Os,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=S,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.toneMapped=_t.getTransfer(S.colorSpace)!==bt,S.matrixAutoUpdate===!0&&S.updateMatrix(),u.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||f!==S.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,d=S,f=S.version,p=n.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null))}function h(v,x){v.getRGB(Nc,TM(n)),i.buffers.color.setClear(Nc.r,Nc.g,Nc.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(v,x=1){a.set(v),l=x,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,h(a,l)},render:_,addToRenderList:m}}function L2(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(y,T,U,B,j){let Z=!1;const G=d(B,U,T);s!==G&&(s=G,u(s.object)),Z=p(y,B,U,j),Z&&g(y,B,U,j),j!==null&&e.update(j,n.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,S(y,T,U,B),j!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function l(){return n.createVertexArray()}function u(y){return n.bindVertexArray(y)}function c(y){return n.deleteVertexArray(y)}function d(y,T,U){const B=U.wireframe===!0;let j=i[y.id];j===void 0&&(j={},i[y.id]=j);let Z=j[T.id];Z===void 0&&(Z={},j[T.id]=Z);let G=Z[B];return G===void 0&&(G=f(l()),Z[B]=G),G}function f(y){const T=[],U=[],B=[];for(let j=0;j<t;j++)T[j]=0,U[j]=0,B[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:U,attributeDivisors:B,object:y,attributes:{},index:null}}function p(y,T,U,B){const j=s.attributes,Z=T.attributes;let G=0;const Y=U.getAttributes();for(const N in Y)if(Y[N].location>=0){const P=j[N];let ne=Z[N];if(ne===void 0&&(N==="instanceMatrix"&&y.instanceMatrix&&(ne=y.instanceMatrix),N==="instanceColor"&&y.instanceColor&&(ne=y.instanceColor)),P===void 0||P.attribute!==ne||ne&&P.data!==ne.data)return!0;G++}return s.attributesNum!==G||s.index!==B}function g(y,T,U,B){const j={},Z=T.attributes;let G=0;const Y=U.getAttributes();for(const N in Y)if(Y[N].location>=0){let P=Z[N];P===void 0&&(N==="instanceMatrix"&&y.instanceMatrix&&(P=y.instanceMatrix),N==="instanceColor"&&y.instanceColor&&(P=y.instanceColor));const ne={};ne.attribute=P,P&&P.data&&(ne.data=P.data),j[N]=ne,G++}s.attributes=j,s.attributesNum=G,s.index=B}function _(){const y=s.newAttributes;for(let T=0,U=y.length;T<U;T++)y[T]=0}function m(y){h(y,0)}function h(y,T){const U=s.newAttributes,B=s.enabledAttributes,j=s.attributeDivisors;U[y]=1,B[y]===0&&(n.enableVertexAttribArray(y),B[y]=1),j[y]!==T&&(n.vertexAttribDivisor(y,T),j[y]=T)}function v(){const y=s.newAttributes,T=s.enabledAttributes;for(let U=0,B=T.length;U<B;U++)T[U]!==y[U]&&(n.disableVertexAttribArray(U),T[U]=0)}function x(y,T,U,B,j,Z,G){G===!0?n.vertexAttribIPointer(y,T,U,j,Z):n.vertexAttribPointer(y,T,U,B,j,Z)}function S(y,T,U,B){_();const j=B.attributes,Z=U.getAttributes(),G=T.defaultAttributeValues;for(const Y in Z){const N=Z[Y];if(N.location>=0){let K=j[Y];if(K===void 0&&(Y==="instanceMatrix"&&y.instanceMatrix&&(K=y.instanceMatrix),Y==="instanceColor"&&y.instanceColor&&(K=y.instanceColor)),K!==void 0){const P=K.normalized,ne=K.itemSize,Se=e.get(K);if(Se===void 0)continue;const He=Se.buffer,q=Se.type,te=Se.bytesPerElement,ce=q===n.INT||q===n.UNSIGNED_INT||K.gpuType===hg;if(K.isInterleavedBufferAttribute){const ue=K.data,Pe=ue.stride,Ae=K.offset;if(ue.isInstancedInterleavedBuffer){for(let je=0;je<N.locationSize;je++)h(N.location+je,ue.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let je=0;je<N.locationSize;je++)m(N.location+je);n.bindBuffer(n.ARRAY_BUFFER,He);for(let je=0;je<N.locationSize;je++)x(N.location+je,ne/N.locationSize,q,P,Pe*te,(Ae+ne/N.locationSize*je)*te,ce)}else{if(K.isInstancedBufferAttribute){for(let ue=0;ue<N.locationSize;ue++)h(N.location+ue,K.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ue=0;ue<N.locationSize;ue++)m(N.location+ue);n.bindBuffer(n.ARRAY_BUFFER,He);for(let ue=0;ue<N.locationSize;ue++)x(N.location+ue,ne/N.locationSize,q,P,ne*te,ne/N.locationSize*ue*te,ce)}}else if(G!==void 0){const P=G[Y];if(P!==void 0)switch(P.length){case 2:n.vertexAttrib2fv(N.location,P);break;case 3:n.vertexAttrib3fv(N.location,P);break;case 4:n.vertexAttrib4fv(N.location,P);break;default:n.vertexAttrib1fv(N.location,P)}}}}v()}function A(){R();for(const y in i){const T=i[y];for(const U in T){const B=T[U];for(const j in B)c(B[j].object),delete B[j];delete T[U]}delete i[y]}}function w(y){if(i[y.id]===void 0)return;const T=i[y.id];for(const U in T){const B=T[U];for(const j in B)c(B[j].object),delete B[j];delete T[U]}delete i[y.id]}function M(y){for(const T in i){const U=i[T];if(U[y.id]===void 0)continue;const B=U[y.id];for(const j in B)c(B[j].object),delete B[j];delete U[y.id]}}function R(){L(),o=!0,s!==r&&(s=r,u(s.object))}function L(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:L,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfProgram:M,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function D2(n,e,t){let i;function r(u){i=u}function s(u,c){n.drawArrays(i,u,c),t.update(c,i,1)}function o(u,c,d){d!==0&&(n.drawArraysInstanced(i,u,c,d),t.update(c,i,d))}function a(u,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,d);let p=0;for(let g=0;g<d;g++)p+=c[g];t.update(p,i,1)}function l(u,c,d,f){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<u.length;g++)o(u[g],c[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,c,0,f,0,d);let g=0;for(let _=0;_<d;_++)g+=c[_];for(let _=0;_<f.length;_++)t.update(g,i,f[_])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function N2(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(M){return!(M!==or&&i.convert(M)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(M){const R=M===Xu&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(M!==$r&&i.convert(M)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&M!==Br&&!R)}function l(M){if(M==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const d=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(f===!0){const M=e.get("EXT_clip_control");M.clipControlEXT(M.LOWER_LEFT_EXT,M.ZERO_TO_ONE_EXT)}const p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,w=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:v,maxVaryings:x,maxFragmentUniforms:S,vertexTextures:A,maxSamples:w}}function I2(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new io,a=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=c(d,f,0)},this.setState=function(d,f,p){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,h=n.get(d);if(!r||g===null||g.length===0||s&&!m)s?c(null):u();else{const v=s?0:i,x=v*4;let S=h.clippingState||null;l.value=S,S=c(g,f,x,p);for(let A=0;A!==x;++A)S[A]=t[A];h.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,f,p,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const h=p+_*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<h)&&(m=new Float32Array(h));for(let x=0,S=p;x!==_;++x,S+=4)o.copy(d[x]).applyMatrix4(v,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function U2(n){let e=new WeakMap;function t(o,a){return a===_m?o.mapping=Za:a===gm&&(o.mapping=Qa),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===_m||a===gm)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new jA(l.height);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class O2 extends wM{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ea=4,Lv=[.125,.215,.35,.446,.526,.582],co=20,Vh=new O2,Dv=new gt;let Gh=null,Wh=0,Xh=0,jh=!1;const ro=(1+Math.sqrt(5))/2,na=1/ro,Nv=[new H(-ro,na,0),new H(ro,na,0),new H(-na,0,ro),new H(na,0,ro),new H(0,ro,-na),new H(0,ro,na),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)];class Iv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Gh=this._renderer.getRenderTarget(),Wh=this._renderer.getActiveCubeFace(),Xh=this._renderer.getActiveMipmapLevel(),jh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ov(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Gh,Wh,Xh),this._renderer.xr.enabled=jh,e.scissorTest=!1,Ic(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Za||e.mapping===Qa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Gh=this._renderer.getRenderTarget(),Wh=this._renderer.getActiveCubeFace(),Xh=this._renderer.getActiveMipmapLevel(),jh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:rr,minFilter:rr,generateMipmaps:!1,type:Xu,format:or,colorSpace:Xs,depthBuffer:!1},r=Uv(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Uv(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=F2(s)),this._blurMaterial=k2(s,e,t)}return r}_compileMaterial(e){const t=new Vi(this._lodPlanes[0],e);this._renderer.compile(t,Vh)}_sceneToCubeUV(e,t,i,r){const a=new Fi(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,f=c.toneMapping;c.getClearColor(Dv),c.toneMapping=bs,c.autoClear=!1;const p=new uo({name:"PMREM.Background",side:ei,depthWrite:!1,depthTest:!1}),g=new Vi(new Ku,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(Dv),_=!0);for(let h=0;h<6;h++){const v=h%3;v===0?(a.up.set(0,l[h],0),a.lookAt(u[h],0,0)):v===1?(a.up.set(0,0,l[h]),a.lookAt(0,u[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,u[h]));const x=this._cubeSize;Ic(r,v*x,h>2?x:0,x,x),c.setRenderTarget(r),_&&c.render(g,a),c.render(e,a)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=f,c.autoClear=d,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Za||e.mapping===Qa;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ov());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Vi(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ic(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Vh)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Nv[(r-s-1)%Nv.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new Vi(this._lodPlanes[r],u),f=u.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*co-1),_=s/g,m=isFinite(s)?1+Math.floor(c*_):co;m>co&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${co}`);const h=[];let v=0;for(let M=0;M<co;++M){const R=M/_,L=Math.exp(-R*R/2);h.push(L),M===0?v+=L:M<m&&(v+=2*L)}for(let M=0;M<h.length;M++)h[M]=h[M]/v;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-i;const S=this._sizeLods[r],A=3*S*(r>x-Ea?r-x+Ea:0),w=4*(this._cubeSize-S);Ic(t,A,w,3*S,2*S),l.setRenderTarget(t),l.render(d,Vh)}}function F2(n){const e=[],t=[],i=[];let r=n;const s=n-Ea+1+Lv.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Ea?l=Lv[o-n+Ea-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,d=1+u,f=[c,c,d,c,d,d,c,c,d,d,c,d],p=6,g=6,_=3,m=2,h=1,v=new Float32Array(_*g*p),x=new Float32Array(m*g*p),S=new Float32Array(h*g*p);for(let w=0;w<p;w++){const M=w%3*2/3-1,R=w>2?0:-1,L=[M,R,0,M+2/3,R,0,M+2/3,R+1,0,M,R,0,M+2/3,R+1,0,M,R+1,0];v.set(L,_*g*w),x.set(f,m*g*w);const y=[w,w,w,w,w,w];S.set(y,h*g*w)}const A=new cr;A.setAttribute("position",new Er(v,_)),A.setAttribute("uv",new Er(x,m)),A.setAttribute("faceIndex",new Er(S,h)),e.push(A),r>Ea&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Uv(n,e,t){const i=new Io(n,e,t);return i.texture.mapping=Id,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ic(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function k2(n,e,t){const i=new Float32Array(co),r=new H(0,1,0);return new Fs({name:"SphericalGaussianBlur",defines:{n:co,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:yg(),fragmentShader:`

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
		`,blending:Ps,depthTest:!1,depthWrite:!1})}function Ov(){return new Fs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yg(),fragmentShader:`

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
		`,blending:Ps,depthTest:!1,depthWrite:!1})}function Fv(){return new Fs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ps,depthTest:!1,depthWrite:!1})}function yg(){return`

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
	`}function z2(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===_m||l===gm,c=l===Za||l===Qa;if(u||c){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Iv(n)),d=u?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return u&&p&&p.height>0||c&&p&&r(p)?(t===null&&(t=new Iv(n)),d=u?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function B2(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&vf("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function H2(n,e,t,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,h=_.length;m<h;m++)e.remove(_[m])}f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const g in f)e.update(f[g],n.ARRAY_BUFFER);const p=d.morphAttributes;for(const g in p){const _=p[g];for(let m=0,h=_.length;m<h;m++)e.update(_[m],n.ARRAY_BUFFER)}}function u(d){const f=[],p=d.index,g=d.attributes.position;let _=0;if(p!==null){const v=p.array;_=p.version;for(let x=0,S=v.length;x<S;x+=3){const A=v[x+0],w=v[x+1],M=v[x+2];f.push(A,w,w,M,M,A)}}else if(g!==void 0){const v=g.array;_=g.version;for(let x=0,S=v.length/3-1;x<S;x+=3){const A=x+0,w=x+1,M=x+2;f.push(A,w,w,M,M,A)}}else return;const m=new(_M(f)?EM:MM)(f,1);m.version=_;const h=s.get(d);h&&e.remove(h),s.set(d,m)}function c(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&u(d)}else u(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:c}}function V2(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){n.drawElements(i,p,s,f*o),t.update(p,i,1)}function u(f,p,g){g!==0&&(n.drawElementsInstanced(i,p,s,f*o,g),t.update(p,i,g))}function c(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,g);let m=0;for(let h=0;h<g;h++)m+=p[h];t.update(m,i,1)}function d(f,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<f.length;h++)u(f[h]/o,p[h],_[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,_,0,g);let h=0;for(let v=0;v<g;v++)h+=p[v];for(let v=0;v<_.length;v++)t.update(h,i,_[v])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=d}function G2(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function W2(n,e,t){const i=new WeakMap,r=new Kt;function s(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=c!==void 0?c.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let y=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var p=y;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let S=0;g===!0&&(S=1),_===!0&&(S=2),m===!0&&(S=3);let A=a.attributes.position.count*S,w=1;A>e.maxTextureSize&&(w=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const M=new Float32Array(A*w*4*d),R=new vM(M,A,w,d);R.type=Br,R.needsUpdate=!0;const L=S*4;for(let T=0;T<d;T++){const U=h[T],B=v[T],j=x[T],Z=A*w*4*T;for(let G=0;G<U.count;G++){const Y=G*L;g===!0&&(r.fromBufferAttribute(U,G),M[Z+Y+0]=r.x,M[Z+Y+1]=r.y,M[Z+Y+2]=r.z,M[Z+Y+3]=0),_===!0&&(r.fromBufferAttribute(B,G),M[Z+Y+4]=r.x,M[Z+Y+5]=r.y,M[Z+Y+6]=r.z,M[Z+Y+7]=0),m===!0&&(r.fromBufferAttribute(j,G),M[Z+Y+8]=r.x,M[Z+Y+9]=r.y,M[Z+Y+10]=r.z,M[Z+Y+11]=j.itemSize===4?r.w:1)}}f={count:d,texture:R,size:new ht(A,w)},i.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<u.length;m++)g+=u[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function X2(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,d=e.get(l,c);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return d}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}class PM extends ti{constructor(e,t,i,r,s,o,a,l,u,c=Ia){if(c!==Ia&&c!==el)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Ia&&(i=No),i===void 0&&c===el&&(i=Ja),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Hi,this.minFilter=l!==void 0?l:Hi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const bM=new ti,kv=new PM(1,1),LM=new vM,DM=new bA,NM=new AM,zv=[],Bv=[],Hv=new Float32Array(16),Vv=new Float32Array(9),Gv=new Float32Array(4);function dl(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=zv[r];if(s===void 0&&(s=new Float32Array(r),zv[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function an(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function ln(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function kd(n,e){let t=Bv[e];t===void 0&&(t=new Int32Array(e),Bv[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function j2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Y2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;n.uniform2fv(this.addr,e),ln(t,e)}}function q2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(an(t,e))return;n.uniform3fv(this.addr,e),ln(t,e)}}function $2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;n.uniform4fv(this.addr,e),ln(t,e)}}function K2(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(an(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),ln(t,e)}else{if(an(t,i))return;Gv.set(i),n.uniformMatrix2fv(this.addr,!1,Gv),ln(t,i)}}function Z2(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(an(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),ln(t,e)}else{if(an(t,i))return;Vv.set(i),n.uniformMatrix3fv(this.addr,!1,Vv),ln(t,i)}}function Q2(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(an(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),ln(t,e)}else{if(an(t,i))return;Hv.set(i),n.uniformMatrix4fv(this.addr,!1,Hv),ln(t,i)}}function J2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function eP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;n.uniform2iv(this.addr,e),ln(t,e)}}function tP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;n.uniform3iv(this.addr,e),ln(t,e)}}function nP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;n.uniform4iv(this.addr,e),ln(t,e)}}function iP(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function rP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;n.uniform2uiv(this.addr,e),ln(t,e)}}function sP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;n.uniform3uiv(this.addr,e),ln(t,e)}}function oP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;n.uniform4uiv(this.addr,e),ln(t,e)}}function aP(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(kv.compareFunction=mM,s=kv):s=bM,t.setTexture2D(e||s,r)}function lP(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||DM,r)}function uP(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||NM,r)}function cP(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||LM,r)}function fP(n){switch(n){case 5126:return j2;case 35664:return Y2;case 35665:return q2;case 35666:return $2;case 35674:return K2;case 35675:return Z2;case 35676:return Q2;case 5124:case 35670:return J2;case 35667:case 35671:return eP;case 35668:case 35672:return tP;case 35669:case 35673:return nP;case 5125:return iP;case 36294:return rP;case 36295:return sP;case 36296:return oP;case 35678:case 36198:case 36298:case 36306:case 35682:return aP;case 35679:case 36299:case 36307:return lP;case 35680:case 36300:case 36308:case 36293:return uP;case 36289:case 36303:case 36311:case 36292:return cP}}function dP(n,e){n.uniform1fv(this.addr,e)}function hP(n,e){const t=dl(e,this.size,2);n.uniform2fv(this.addr,t)}function pP(n,e){const t=dl(e,this.size,3);n.uniform3fv(this.addr,t)}function mP(n,e){const t=dl(e,this.size,4);n.uniform4fv(this.addr,t)}function _P(n,e){const t=dl(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function gP(n,e){const t=dl(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function vP(n,e){const t=dl(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function xP(n,e){n.uniform1iv(this.addr,e)}function yP(n,e){n.uniform2iv(this.addr,e)}function SP(n,e){n.uniform3iv(this.addr,e)}function MP(n,e){n.uniform4iv(this.addr,e)}function EP(n,e){n.uniform1uiv(this.addr,e)}function TP(n,e){n.uniform2uiv(this.addr,e)}function wP(n,e){n.uniform3uiv(this.addr,e)}function AP(n,e){n.uniform4uiv(this.addr,e)}function CP(n,e,t){const i=this.cache,r=e.length,s=kd(t,r);an(i,s)||(n.uniform1iv(this.addr,s),ln(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||bM,s[o])}function RP(n,e,t){const i=this.cache,r=e.length,s=kd(t,r);an(i,s)||(n.uniform1iv(this.addr,s),ln(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||DM,s[o])}function PP(n,e,t){const i=this.cache,r=e.length,s=kd(t,r);an(i,s)||(n.uniform1iv(this.addr,s),ln(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||NM,s[o])}function bP(n,e,t){const i=this.cache,r=e.length,s=kd(t,r);an(i,s)||(n.uniform1iv(this.addr,s),ln(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||LM,s[o])}function LP(n){switch(n){case 5126:return dP;case 35664:return hP;case 35665:return pP;case 35666:return mP;case 35674:return _P;case 35675:return gP;case 35676:return vP;case 5124:case 35670:return xP;case 35667:case 35671:return yP;case 35668:case 35672:return SP;case 35669:case 35673:return MP;case 5125:return EP;case 36294:return TP;case 36295:return wP;case 36296:return AP;case 35678:case 36198:case 36298:case 36306:case 35682:return CP;case 35679:case 36299:case 36307:return RP;case 35680:case 36300:case 36308:case 36293:return PP;case 36289:case 36303:case 36311:case 36292:return bP}}class DP{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=fP(t.type)}}class NP{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=LP(t.type)}}class IP{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Yh=/(\w+)(\])?(\[|\.)?/g;function Wv(n,e){n.seq.push(e),n.map[e.id]=e}function UP(n,e,t){const i=n.name,r=i.length;for(Yh.lastIndex=0;;){const s=Yh.exec(i),o=Yh.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Wv(t,u===void 0?new DP(a,n,e):new NP(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new IP(a),Wv(t,d)),t=d}}}class xf{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);UP(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Xv(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const OP=37297;let FP=0;function kP(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function zP(n){const e=_t.getPrimaries(_t.workingColorSpace),t=_t.getPrimaries(n);let i;switch(e===t?i="":e===td&&t===ed?i="LinearDisplayP3ToLinearSRGB":e===ed&&t===td&&(i="LinearSRGBToLinearDisplayP3"),n){case Xs:case Ud:return[i,"LinearTransferOETF"];case hr:case xg:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function jv(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+kP(n.getShaderSource(e),o)}else return r}function BP(n,e){const t=zP(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function HP(n,e){let t;switch(e){case tA:t="Linear";break;case nA:t="Reinhard";break;case iA:t="Cineon";break;case rA:t="ACESFilmic";break;case oA:t="AgX";break;case aA:t="Neutral";break;case sA:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Uc=new H;function VP(){_t.getLuminanceCoefficients(Uc);const n=Uc.x.toFixed(4),e=Uc.y.toFixed(4),t=Uc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function GP(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ul).join(`
`)}function WP(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function XP(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ul(n){return n!==""}function Yv(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qv(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jP=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ym(n){return n.replace(jP,qP)}const YP=new Map;function qP(n,e){let t=Ke[e];if(t===void 0){const i=YP.get(e);if(i!==void 0)t=Ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ym(t)}const $P=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $v(n){return n.replace($P,KP)}function KP(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Kv(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ZP(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===nM?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Iw?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Lr&&(e="SHADOWMAP_TYPE_VSM"),e}function QP(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Za:case Qa:e="ENVMAP_TYPE_CUBE";break;case Id:e="ENVMAP_TYPE_CUBE_UV";break}return e}function JP(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Qa:e="ENVMAP_MODE_REFRACTION";break}return e}function eb(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case iM:e="ENVMAP_BLENDING_MULTIPLY";break;case Jw:e="ENVMAP_BLENDING_MIX";break;case eA:e="ENVMAP_BLENDING_ADD";break}return e}function tb(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function nb(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=ZP(t),u=QP(t),c=JP(t),d=eb(t),f=tb(t),p=GP(t),g=WP(s),_=r.createProgram();let m,h,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ul).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ul).join(`
`),h.length>0&&(h+=`
`)):(m=[Kv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ul).join(`
`),h=[Kv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bs?"#define TONE_MAPPING":"",t.toneMapping!==bs?Ke.tonemapping_pars_fragment:"",t.toneMapping!==bs?HP("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,BP("linearToOutputTexel",t.outputColorSpace),VP(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ul).join(`
`)),o=Ym(o),o=Yv(o,t),o=qv(o,t),a=Ym(a),a=Yv(a,t),a=qv(a,t),o=$v(o),a=$v(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===hv?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===hv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const x=v+m+o,S=v+h+a,A=Xv(r,r.VERTEX_SHADER,x),w=Xv(r,r.FRAGMENT_SHADER,S);r.attachShader(_,A),r.attachShader(_,w),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function M(T){if(n.debug.checkShaderErrors){const U=r.getProgramInfoLog(_).trim(),B=r.getShaderInfoLog(A).trim(),j=r.getShaderInfoLog(w).trim();let Z=!0,G=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(Z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,A,w);else{const Y=jv(r,A,"vertex"),N=jv(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+U+`
`+Y+`
`+N)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(B===""||j==="")&&(G=!1);G&&(T.diagnostics={runnable:Z,programLog:U,vertexShader:{log:B,prefix:m},fragmentShader:{log:j,prefix:h}})}r.deleteShader(A),r.deleteShader(w),R=new xf(r,_),L=XP(r,_)}let R;this.getUniforms=function(){return R===void 0&&M(this),R};let L;this.getAttributes=function(){return L===void 0&&M(this),L};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(_,OP)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=FP++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=w,this}let ib=0;class rb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new sb(e),t.set(e,i)),i}}class sb{constructor(e){this.id=ib++,this.code=e,this.usedTimes=0}}function ob(n,e,t,i,r,s,o){const a=new yM,l=new rb,u=new Set,c=[],d=r.logarithmicDepthBuffer,f=r.reverseDepthBuffer,p=r.vertexTextures;let g=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return u.add(y),y===0?"uv":`uv${y}`}function h(y,T,U,B,j){const Z=B.fog,G=j.geometry,Y=y.isMeshStandardMaterial?B.environment:null,N=(y.isMeshStandardMaterial?t:e).get(y.envMap||Y),K=N&&N.mapping===Id?N.image.height:null,P=_[y.type];y.precision!==null&&(g=r.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));const ne=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Se=ne!==void 0?ne.length:0;let He=0;G.morphAttributes.position!==void 0&&(He=1),G.morphAttributes.normal!==void 0&&(He=2),G.morphAttributes.color!==void 0&&(He=3);let q,te,ce,ue;if(P){const Le=_r[P];q=Le.vertexShader,te=Le.fragmentShader}else q=y.vertexShader,te=y.fragmentShader,l.update(y),ce=l.getVertexShaderID(y),ue=l.getFragmentShaderID(y);const Pe=n.getRenderTarget(),Ae=j.isInstancedMesh===!0,je=j.isBatchedMesh===!0,Xe=!!y.map,ke=!!y.matcap,D=!!N,at=!!y.aoMap,ze=!!y.lightMap,Ve=!!y.bumpMap,z=!!y.normalMap,Qe=!!y.displacementMap,Ie=!!y.emissiveMap,b=!!y.metalnessMap,E=!!y.roughnessMap,X=y.anisotropy>0,J=y.clearcoat>0,re=y.dispersion>0,Q=y.iridescence>0,Te=y.sheen>0,oe=y.transmission>0,me=X&&!!y.anisotropyMap,We=J&&!!y.clearcoatMap,se=J&&!!y.clearcoatNormalMap,ye=J&&!!y.clearcoatRoughnessMap,Me=Q&&!!y.iridescenceMap,Oe=Q&&!!y.iridescenceThicknessMap,xe=Te&&!!y.sheenColorMap,Ye=Te&&!!y.sheenRoughnessMap,Be=!!y.specularMap,lt=!!y.specularColorMap,O=!!y.specularIntensityMap,ie=oe&&!!y.transmissionMap,$=oe&&!!y.thicknessMap,ee=!!y.gradientMap,fe=!!y.alphaMap,de=y.alphaTest>0,qe=!!y.alphaHash,Mt=!!y.extensions;let Dt=bs;y.toneMapped&&(Pe===null||Pe.isXRRenderTarget===!0)&&(Dt=n.toneMapping);const it={shaderID:P,shaderType:y.type,shaderName:y.name,vertexShader:q,fragmentShader:te,defines:y.defines,customVertexShaderID:ce,customFragmentShaderID:ue,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,batching:je,batchingColor:je&&j._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&j.instanceColor!==null,instancingMorph:Ae&&j.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Pe===null?n.outputColorSpace:Pe.isXRRenderTarget===!0?Pe.texture.colorSpace:Xs,alphaToCoverage:!!y.alphaToCoverage,map:Xe,matcap:ke,envMap:D,envMapMode:D&&N.mapping,envMapCubeUVHeight:K,aoMap:at,lightMap:ze,bumpMap:Ve,normalMap:z,displacementMap:p&&Qe,emissiveMap:Ie,normalMapObjectSpace:z&&y.normalMapType===dA,normalMapTangentSpace:z&&y.normalMapType===fA,metalnessMap:b,roughnessMap:E,anisotropy:X,anisotropyMap:me,clearcoat:J,clearcoatMap:We,clearcoatNormalMap:se,clearcoatRoughnessMap:ye,dispersion:re,iridescence:Q,iridescenceMap:Me,iridescenceThicknessMap:Oe,sheen:Te,sheenColorMap:xe,sheenRoughnessMap:Ye,specularMap:Be,specularColorMap:lt,specularIntensityMap:O,transmission:oe,transmissionMap:ie,thicknessMap:$,gradientMap:ee,opaque:y.transparent===!1&&y.blending===Na&&y.alphaToCoverage===!1,alphaMap:fe,alphaTest:de,alphaHash:qe,combine:y.combine,mapUv:Xe&&m(y.map.channel),aoMapUv:at&&m(y.aoMap.channel),lightMapUv:ze&&m(y.lightMap.channel),bumpMapUv:Ve&&m(y.bumpMap.channel),normalMapUv:z&&m(y.normalMap.channel),displacementMapUv:Qe&&m(y.displacementMap.channel),emissiveMapUv:Ie&&m(y.emissiveMap.channel),metalnessMapUv:b&&m(y.metalnessMap.channel),roughnessMapUv:E&&m(y.roughnessMap.channel),anisotropyMapUv:me&&m(y.anisotropyMap.channel),clearcoatMapUv:We&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:se&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:Oe&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&m(y.sheenRoughnessMap.channel),specularMapUv:Be&&m(y.specularMap.channel),specularColorMapUv:lt&&m(y.specularColorMap.channel),specularIntensityMapUv:O&&m(y.specularIntensityMap.channel),transmissionMapUv:ie&&m(y.transmissionMap.channel),thicknessMapUv:$&&m(y.thicknessMap.channel),alphaMapUv:fe&&m(y.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(z||X),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!G.attributes.uv&&(Xe||fe),fog:!!Z,useFog:y.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:f,skinning:j.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:He,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:Dt,decodeVideoTexture:Xe&&y.map.isVideoTexture===!0&&_t.getTransfer(y.map.colorSpace)===bt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Or,flipSided:y.side===ei,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Mt&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Mt&&y.extensions.multiDraw===!0||je)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return it.vertexUv1s=u.has(1),it.vertexUv2s=u.has(2),it.vertexUv3s=u.has(3),u.clear(),it}function v(y){const T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(const U in y.defines)T.push(U),T.push(y.defines[U]);return y.isRawShaderMaterial===!1&&(x(T,y),S(T,y),T.push(n.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function x(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function S(y,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reverseDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.alphaToCoverage&&a.enable(20),y.push(a.mask)}function A(y){const T=_[y.type];let U;if(T){const B=_r[T];U=VA.clone(B.uniforms)}else U=y.uniforms;return U}function w(y,T){let U;for(let B=0,j=c.length;B<j;B++){const Z=c[B];if(Z.cacheKey===T){U=Z,++U.usedTimes;break}}return U===void 0&&(U=new nb(n,T,y,s),c.push(U)),U}function M(y){if(--y.usedTimes===0){const T=c.indexOf(y);c[T]=c[c.length-1],c.pop(),y.destroy()}}function R(y){l.remove(y)}function L(){l.dispose()}return{getParameters:h,getProgramCacheKey:v,getUniforms:A,acquireProgram:w,releaseProgram:M,releaseShaderCache:R,programs:c,dispose:L}}function ab(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function lb(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Zv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Qv(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,f,p,g,_,m){let h=n[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:p,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},n[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=p,h.groupOrder=g,h.renderOrder=d.renderOrder,h.z=_,h.group=m),e++,h}function a(d,f,p,g,_,m){const h=o(d,f,p,g,_,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):t.push(h)}function l(d,f,p,g,_,m){const h=o(d,f,p,g,_,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):t.unshift(h)}function u(d,f){t.length>1&&t.sort(d||lb),i.length>1&&i.sort(f||Zv),r.length>1&&r.sort(f||Zv)}function c(){for(let d=e,f=n.length;d<f;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function ub(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Qv,n.set(i,[o])):r>=s.length?(o=new Qv,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function cb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new gt};break;case"SpotLight":t={position:new H,direction:new H,color:new gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new gt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new gt,groundColor:new gt};break;case"RectAreaLight":t={color:new gt,position:new H,halfWidth:new H,halfHeight:new H};break}return n[e.id]=t,t}}}function fb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let db=0;function hb(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function pb(n){const e=new cb,t=fb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new H);const r=new H,s=new Wt,o=new Wt;function a(u){let c=0,d=0,f=0;for(let L=0;L<9;L++)i.probe[L].set(0,0,0);let p=0,g=0,_=0,m=0,h=0,v=0,x=0,S=0,A=0,w=0,M=0;u.sort(hb);for(let L=0,y=u.length;L<y;L++){const T=u[L],U=T.color,B=T.intensity,j=T.distance,Z=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)c+=U.r*B,d+=U.g*B,f+=U.b*B;else if(T.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(T.sh.coefficients[G],B);M++}else if(T.isDirectionalLight){const G=e.get(T);if(G.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const Y=T.shadow,N=t.get(T);N.shadowIntensity=Y.intensity,N.shadowBias=Y.bias,N.shadowNormalBias=Y.normalBias,N.shadowRadius=Y.radius,N.shadowMapSize=Y.mapSize,i.directionalShadow[p]=N,i.directionalShadowMap[p]=Z,i.directionalShadowMatrix[p]=T.shadow.matrix,v++}i.directional[p]=G,p++}else if(T.isSpotLight){const G=e.get(T);G.position.setFromMatrixPosition(T.matrixWorld),G.color.copy(U).multiplyScalar(B),G.distance=j,G.coneCos=Math.cos(T.angle),G.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),G.decay=T.decay,i.spot[_]=G;const Y=T.shadow;if(T.map&&(i.spotLightMap[A]=T.map,A++,Y.updateMatrices(T),T.castShadow&&w++),i.spotLightMatrix[_]=Y.matrix,T.castShadow){const N=t.get(T);N.shadowIntensity=Y.intensity,N.shadowBias=Y.bias,N.shadowNormalBias=Y.normalBias,N.shadowRadius=Y.radius,N.shadowMapSize=Y.mapSize,i.spotShadow[_]=N,i.spotShadowMap[_]=Z,S++}_++}else if(T.isRectAreaLight){const G=e.get(T);G.color.copy(U).multiplyScalar(B),G.halfWidth.set(T.width*.5,0,0),G.halfHeight.set(0,T.height*.5,0),i.rectArea[m]=G,m++}else if(T.isPointLight){const G=e.get(T);if(G.color.copy(T.color).multiplyScalar(T.intensity),G.distance=T.distance,G.decay=T.decay,T.castShadow){const Y=T.shadow,N=t.get(T);N.shadowIntensity=Y.intensity,N.shadowBias=Y.bias,N.shadowNormalBias=Y.normalBias,N.shadowRadius=Y.radius,N.shadowMapSize=Y.mapSize,N.shadowCameraNear=Y.camera.near,N.shadowCameraFar=Y.camera.far,i.pointShadow[g]=N,i.pointShadowMap[g]=Z,i.pointShadowMatrix[g]=T.shadow.matrix,x++}i.point[g]=G,g++}else if(T.isHemisphereLight){const G=e.get(T);G.skyColor.copy(T.color).multiplyScalar(B),G.groundColor.copy(T.groundColor).multiplyScalar(B),i.hemi[h]=G,h++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=d,i.ambient[2]=f;const R=i.hash;(R.directionalLength!==p||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==m||R.hemiLength!==h||R.numDirectionalShadows!==v||R.numPointShadows!==x||R.numSpotShadows!==S||R.numSpotMaps!==A||R.numLightProbes!==M)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=S+A-w,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=M,R.directionalLength=p,R.pointLength=g,R.spotLength=_,R.rectAreaLength=m,R.hemiLength=h,R.numDirectionalShadows=v,R.numPointShadows=x,R.numSpotShadows=S,R.numSpotMaps=A,R.numLightProbes=M,i.version=db++)}function l(u,c){let d=0,f=0,p=0,g=0,_=0;const m=c.matrixWorldInverse;for(let h=0,v=u.length;h<v;h++){const x=u[h];if(x.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),d++}else if(x.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(x.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const S=i.hemi[_];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function Jv(n){const e=new pb(n),t=[],i=[];function r(c){u.camera=c,t.length=0,i.length=0}function s(c){t.push(c)}function o(c){i.push(c)}function a(){e.setup(t)}function l(c){e.setupView(t,c)}const u={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function mb(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Jv(n),e.set(r,[a])):s>=o.length?(a=new Jv(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class _b extends $u{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=uA,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class gb extends $u{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const vb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xb=`uniform sampler2D shadow_pass;
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
}`;function yb(n,e,t){let i=new CM;const r=new ht,s=new ht,o=new Kt,a=new _b({depthPacking:cA}),l=new gb,u={},c=t.maxTextureSize,d={[Os]:ei,[ei]:Os,[Or]:Or},f=new Fs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:vb,fragmentShader:xb}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new cr;g.setAttribute("position",new Er(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Vi(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nM;let h=this.type;this.render=function(w,M,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const L=n.getRenderTarget(),y=n.getActiveCubeFace(),T=n.getActiveMipmapLevel(),U=n.state;U.setBlending(Ps),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const B=h!==Lr&&this.type===Lr,j=h===Lr&&this.type!==Lr;for(let Z=0,G=w.length;Z<G;Z++){const Y=w[Z],N=Y.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const K=N.getFrameExtents();if(r.multiply(K),s.copy(N.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/K.x),r.x=s.x*K.x,N.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/K.y),r.y=s.y*K.y,N.mapSize.y=s.y)),N.map===null||B===!0||j===!0){const ne=this.type!==Lr?{minFilter:Hi,magFilter:Hi}:{};N.map!==null&&N.map.dispose(),N.map=new Io(r.x,r.y,ne),N.map.texture.name=Y.name+".shadowMap",N.camera.updateProjectionMatrix()}n.setRenderTarget(N.map),n.clear();const P=N.getViewportCount();for(let ne=0;ne<P;ne++){const Se=N.getViewport(ne);o.set(s.x*Se.x,s.y*Se.y,s.x*Se.z,s.y*Se.w),U.viewport(o),N.updateMatrices(Y,ne),i=N.getFrustum(),S(M,R,N.camera,Y,this.type)}N.isPointLightShadow!==!0&&this.type===Lr&&v(N,R),N.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(L,y,T)};function v(w,M){const R=e.update(_);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Io(r.x,r.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(M,null,R,f,_,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(M,null,R,p,_,null)}function x(w,M,R,L){let y=null;const T=R.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(T!==void 0)y=T;else if(y=R.isPointLight===!0?l:a,n.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const U=y.uuid,B=M.uuid;let j=u[U];j===void 0&&(j={},u[U]=j);let Z=j[B];Z===void 0&&(Z=y.clone(),j[B]=Z,M.addEventListener("dispose",A)),y=Z}if(y.visible=M.visible,y.wireframe=M.wireframe,L===Lr?y.side=M.shadowSide!==null?M.shadowSide:M.side:y.side=M.shadowSide!==null?M.shadowSide:d[M.side],y.alphaMap=M.alphaMap,y.alphaTest=M.alphaTest,y.map=M.map,y.clipShadows=M.clipShadows,y.clippingPlanes=M.clippingPlanes,y.clipIntersection=M.clipIntersection,y.displacementMap=M.displacementMap,y.displacementScale=M.displacementScale,y.displacementBias=M.displacementBias,y.wireframeLinewidth=M.wireframeLinewidth,y.linewidth=M.linewidth,R.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const U=n.properties.get(y);U.light=R}return y}function S(w,M,R,L,y){if(w.visible===!1)return;if(w.layers.test(M.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&y===Lr)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,w.matrixWorld);const B=e.update(w),j=w.material;if(Array.isArray(j)){const Z=B.groups;for(let G=0,Y=Z.length;G<Y;G++){const N=Z[G],K=j[N.materialIndex];if(K&&K.visible){const P=x(w,K,L,y);w.onBeforeShadow(n,w,M,R,B,P,N),n.renderBufferDirect(R,null,B,P,w,N),w.onAfterShadow(n,w,M,R,B,P,N)}}}else if(j.visible){const Z=x(w,j,L,y);w.onBeforeShadow(n,w,M,R,B,Z,null),n.renderBufferDirect(R,null,B,Z,w,null),w.onAfterShadow(n,w,M,R,B,Z,null)}}const U=w.children;for(let B=0,j=U.length;B<j;B++)S(U[B],M,R,L,y)}function A(w){w.target.removeEventListener("dispose",A);for(const R in u){const L=u[R],y=w.target.uuid;y in L&&(L[y].dispose(),delete L[y])}}}const Sb={[um]:cm,[fm]:pm,[dm]:mm,[Ka]:hm,[cm]:um,[pm]:fm,[mm]:dm,[hm]:Ka};function Mb(n){function e(){let O=!1;const ie=new Kt;let $=null;const ee=new Kt(0,0,0,0);return{setMask:function(fe){$!==fe&&!O&&(n.colorMask(fe,fe,fe,fe),$=fe)},setLocked:function(fe){O=fe},setClear:function(fe,de,qe,Mt,Dt){Dt===!0&&(fe*=Mt,de*=Mt,qe*=Mt),ie.set(fe,de,qe,Mt),ee.equals(ie)===!1&&(n.clearColor(fe,de,qe,Mt),ee.copy(ie))},reset:function(){O=!1,$=null,ee.set(-1,0,0,0)}}}function t(){let O=!1,ie=!1,$=null,ee=null,fe=null;return{setReversed:function(de){ie=de},setTest:function(de){de?ce(n.DEPTH_TEST):ue(n.DEPTH_TEST)},setMask:function(de){$!==de&&!O&&(n.depthMask(de),$=de)},setFunc:function(de){if(ie&&(de=Sb[de]),ee!==de){switch(de){case um:n.depthFunc(n.NEVER);break;case cm:n.depthFunc(n.ALWAYS);break;case fm:n.depthFunc(n.LESS);break;case Ka:n.depthFunc(n.LEQUAL);break;case dm:n.depthFunc(n.EQUAL);break;case hm:n.depthFunc(n.GEQUAL);break;case pm:n.depthFunc(n.GREATER);break;case mm:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ee=de}},setLocked:function(de){O=de},setClear:function(de){fe!==de&&(n.clearDepth(de),fe=de)},reset:function(){O=!1,$=null,ee=null,fe=null}}}function i(){let O=!1,ie=null,$=null,ee=null,fe=null,de=null,qe=null,Mt=null,Dt=null;return{setTest:function(it){O||(it?ce(n.STENCIL_TEST):ue(n.STENCIL_TEST))},setMask:function(it){ie!==it&&!O&&(n.stencilMask(it),ie=it)},setFunc:function(it,Le,Ce){($!==it||ee!==Le||fe!==Ce)&&(n.stencilFunc(it,Le,Ce),$=it,ee=Le,fe=Ce)},setOp:function(it,Le,Ce){(de!==it||qe!==Le||Mt!==Ce)&&(n.stencilOp(it,Le,Ce),de=it,qe=Le,Mt=Ce)},setLocked:function(it){O=it},setClear:function(it){Dt!==it&&(n.clearStencil(it),Dt=it)},reset:function(){O=!1,ie=null,$=null,ee=null,fe=null,de=null,qe=null,Mt=null,Dt=null}}}const r=new e,s=new t,o=new i,a=new WeakMap,l=new WeakMap;let u={},c={},d=new WeakMap,f=[],p=null,g=!1,_=null,m=null,h=null,v=null,x=null,S=null,A=null,w=new gt(0,0,0),M=0,R=!1,L=null,y=null,T=null,U=null,B=null;const j=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,G=0;const Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(Y)[1]),Z=G>=1):Y.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),Z=G>=2);let N=null,K={};const P=n.getParameter(n.SCISSOR_BOX),ne=n.getParameter(n.VIEWPORT),Se=new Kt().fromArray(P),He=new Kt().fromArray(ne);function q(O,ie,$,ee){const fe=new Uint8Array(4),de=n.createTexture();n.bindTexture(O,de),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let qe=0;qe<$;qe++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(ie,0,n.RGBA,1,1,ee,0,n.RGBA,n.UNSIGNED_BYTE,fe):n.texImage2D(ie+qe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,fe);return de}const te={};te[n.TEXTURE_2D]=q(n.TEXTURE_2D,n.TEXTURE_2D,1),te[n.TEXTURE_CUBE_MAP]=q(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[n.TEXTURE_2D_ARRAY]=q(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),te[n.TEXTURE_3D]=q(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ce(n.DEPTH_TEST),s.setFunc(Ka),ze(!1),Ve(av),ce(n.CULL_FACE),D(Ps);function ce(O){u[O]!==!0&&(n.enable(O),u[O]=!0)}function ue(O){u[O]!==!1&&(n.disable(O),u[O]=!1)}function Pe(O,ie){return c[O]!==ie?(n.bindFramebuffer(O,ie),c[O]=ie,O===n.DRAW_FRAMEBUFFER&&(c[n.FRAMEBUFFER]=ie),O===n.FRAMEBUFFER&&(c[n.DRAW_FRAMEBUFFER]=ie),!0):!1}function Ae(O,ie){let $=f,ee=!1;if(O){$=d.get(ie),$===void 0&&($=[],d.set(ie,$));const fe=O.textures;if($.length!==fe.length||$[0]!==n.COLOR_ATTACHMENT0){for(let de=0,qe=fe.length;de<qe;de++)$[de]=n.COLOR_ATTACHMENT0+de;$.length=fe.length,ee=!0}}else $[0]!==n.BACK&&($[0]=n.BACK,ee=!0);ee&&n.drawBuffers($)}function je(O){return p!==O?(n.useProgram(O),p=O,!0):!1}const Xe={[lo]:n.FUNC_ADD,[Ow]:n.FUNC_SUBTRACT,[Fw]:n.FUNC_REVERSE_SUBTRACT};Xe[kw]=n.MIN,Xe[zw]=n.MAX;const ke={[Bw]:n.ZERO,[Hw]:n.ONE,[Vw]:n.SRC_COLOR,[am]:n.SRC_ALPHA,[qw]:n.SRC_ALPHA_SATURATE,[jw]:n.DST_COLOR,[Ww]:n.DST_ALPHA,[Gw]:n.ONE_MINUS_SRC_COLOR,[lm]:n.ONE_MINUS_SRC_ALPHA,[Yw]:n.ONE_MINUS_DST_COLOR,[Xw]:n.ONE_MINUS_DST_ALPHA,[$w]:n.CONSTANT_COLOR,[Kw]:n.ONE_MINUS_CONSTANT_COLOR,[Zw]:n.CONSTANT_ALPHA,[Qw]:n.ONE_MINUS_CONSTANT_ALPHA};function D(O,ie,$,ee,fe,de,qe,Mt,Dt,it){if(O===Ps){g===!0&&(ue(n.BLEND),g=!1);return}if(g===!1&&(ce(n.BLEND),g=!0),O!==Uw){if(O!==_||it!==R){if((m!==lo||x!==lo)&&(n.blendEquation(n.FUNC_ADD),m=lo,x=lo),it)switch(O){case Na:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case lv:n.blendFunc(n.ONE,n.ONE);break;case uv:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case cv:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Na:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case lv:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case uv:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case cv:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}h=null,v=null,S=null,A=null,w.set(0,0,0),M=0,_=O,R=it}return}fe=fe||ie,de=de||$,qe=qe||ee,(ie!==m||fe!==x)&&(n.blendEquationSeparate(Xe[ie],Xe[fe]),m=ie,x=fe),($!==h||ee!==v||de!==S||qe!==A)&&(n.blendFuncSeparate(ke[$],ke[ee],ke[de],ke[qe]),h=$,v=ee,S=de,A=qe),(Mt.equals(w)===!1||Dt!==M)&&(n.blendColor(Mt.r,Mt.g,Mt.b,Dt),w.copy(Mt),M=Dt),_=O,R=!1}function at(O,ie){O.side===Or?ue(n.CULL_FACE):ce(n.CULL_FACE);let $=O.side===ei;ie&&($=!$),ze($),O.blending===Na&&O.transparent===!1?D(Ps):D(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),s.setFunc(O.depthFunc),s.setTest(O.depthTest),s.setMask(O.depthWrite),r.setMask(O.colorWrite);const ee=O.stencilWrite;o.setTest(ee),ee&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Qe(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ce(n.SAMPLE_ALPHA_TO_COVERAGE):ue(n.SAMPLE_ALPHA_TO_COVERAGE)}function ze(O){L!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),L=O)}function Ve(O){O!==Dw?(ce(n.CULL_FACE),O!==y&&(O===av?n.cullFace(n.BACK):O===Nw?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ue(n.CULL_FACE),y=O}function z(O){O!==T&&(Z&&n.lineWidth(O),T=O)}function Qe(O,ie,$){O?(ce(n.POLYGON_OFFSET_FILL),(U!==ie||B!==$)&&(n.polygonOffset(ie,$),U=ie,B=$)):ue(n.POLYGON_OFFSET_FILL)}function Ie(O){O?ce(n.SCISSOR_TEST):ue(n.SCISSOR_TEST)}function b(O){O===void 0&&(O=n.TEXTURE0+j-1),N!==O&&(n.activeTexture(O),N=O)}function E(O,ie,$){$===void 0&&(N===null?$=n.TEXTURE0+j-1:$=N);let ee=K[$];ee===void 0&&(ee={type:void 0,texture:void 0},K[$]=ee),(ee.type!==O||ee.texture!==ie)&&(N!==$&&(n.activeTexture($),N=$),n.bindTexture(O,ie||te[O]),ee.type=O,ee.texture=ie)}function X(){const O=K[N];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function J(){try{n.compressedTexImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function re(){try{n.compressedTexImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Q(){try{n.texSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Te(){try{n.texSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function oe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function me(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function We(){try{n.texStorage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function se(){try{n.texStorage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ye(){try{n.texImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Me(){try{n.texImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Oe(O){Se.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),Se.copy(O))}function xe(O){He.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),He.copy(O))}function Ye(O,ie){let $=l.get(ie);$===void 0&&($=new WeakMap,l.set(ie,$));let ee=$.get(O);ee===void 0&&(ee=n.getUniformBlockIndex(ie,O.name),$.set(O,ee))}function Be(O,ie){const ee=l.get(ie).get(O);a.get(ie)!==ee&&(n.uniformBlockBinding(ie,ee,O.__bindingPointIndex),a.set(ie,ee))}function lt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},N=null,K={},c={},d=new WeakMap,f=[],p=null,g=!1,_=null,m=null,h=null,v=null,x=null,S=null,A=null,w=new gt(0,0,0),M=0,R=!1,L=null,y=null,T=null,U=null,B=null,Se.set(0,0,n.canvas.width,n.canvas.height),He.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ce,disable:ue,bindFramebuffer:Pe,drawBuffers:Ae,useProgram:je,setBlending:D,setMaterial:at,setFlipSided:ze,setCullFace:Ve,setLineWidth:z,setPolygonOffset:Qe,setScissorTest:Ie,activeTexture:b,bindTexture:E,unbindTexture:X,compressedTexImage2D:J,compressedTexImage3D:re,texImage2D:ye,texImage3D:Me,updateUBOMapping:Ye,uniformBlockBinding:Be,texStorage2D:We,texStorage3D:se,texSubImage2D:Q,texSubImage3D:Te,compressedTexSubImage2D:oe,compressedTexSubImage3D:me,scissor:Oe,viewport:xe,reset:lt}}function ex(n,e,t,i){const r=Eb(i);switch(t){case lM:return n*e;case cM:return n*e;case fM:return n*e*2;case dM:return n*e/r.components*r.byteLength;case _g:return n*e/r.components*r.byteLength;case hM:return n*e*2/r.components*r.byteLength;case gg:return n*e*2/r.components*r.byteLength;case uM:return n*e*3/r.components*r.byteLength;case or:return n*e*4/r.components*r.byteLength;case vg:return n*e*4/r.components*r.byteLength;case hf:case pf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case mf:case _f:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Sm:case Em:return Math.max(n,16)*Math.max(e,8)/4;case ym:case Mm:return Math.max(n,8)*Math.max(e,8)/2;case Tm:case wm:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Am:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Cm:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Rm:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Pm:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case bm:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Lm:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Dm:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Nm:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Im:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Um:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Om:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Fm:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case km:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case zm:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Bm:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case gf:case Hm:case Vm:return Math.ceil(n/4)*Math.ceil(e/4)*16;case pM:case Gm:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Wm:case Xm:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Eb(n){switch(n){case $r:case sM:return{byteLength:1,components:1};case Ru:case oM:case Xu:return{byteLength:2,components:1};case pg:case mg:return{byteLength:2,components:4};case No:case hg:case Br:return{byteLength:4,components:1};case aM:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Tb(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new ht,c=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,E){return p?new OffscreenCanvas(b,E):id("canvas")}function _(b,E,X){let J=1;const re=Ie(b);if((re.width>X||re.height>X)&&(J=X/Math.max(re.width,re.height)),J<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const Q=Math.floor(J*re.width),Te=Math.floor(J*re.height);d===void 0&&(d=g(Q,Te));const oe=E?g(Q,Te):d;return oe.width=Q,oe.height=Te,oe.getContext("2d").drawImage(b,0,0,Q,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+Q+"x"+Te+")."),oe}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),b;return b}function m(b){return b.generateMipmaps&&b.minFilter!==Hi&&b.minFilter!==rr}function h(b){n.generateMipmap(b)}function v(b,E,X,J,re=!1){if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let Q=E;if(E===n.RED&&(X===n.FLOAT&&(Q=n.R32F),X===n.HALF_FLOAT&&(Q=n.R16F),X===n.UNSIGNED_BYTE&&(Q=n.R8)),E===n.RED_INTEGER&&(X===n.UNSIGNED_BYTE&&(Q=n.R8UI),X===n.UNSIGNED_SHORT&&(Q=n.R16UI),X===n.UNSIGNED_INT&&(Q=n.R32UI),X===n.BYTE&&(Q=n.R8I),X===n.SHORT&&(Q=n.R16I),X===n.INT&&(Q=n.R32I)),E===n.RG&&(X===n.FLOAT&&(Q=n.RG32F),X===n.HALF_FLOAT&&(Q=n.RG16F),X===n.UNSIGNED_BYTE&&(Q=n.RG8)),E===n.RG_INTEGER&&(X===n.UNSIGNED_BYTE&&(Q=n.RG8UI),X===n.UNSIGNED_SHORT&&(Q=n.RG16UI),X===n.UNSIGNED_INT&&(Q=n.RG32UI),X===n.BYTE&&(Q=n.RG8I),X===n.SHORT&&(Q=n.RG16I),X===n.INT&&(Q=n.RG32I)),E===n.RGB_INTEGER&&(X===n.UNSIGNED_BYTE&&(Q=n.RGB8UI),X===n.UNSIGNED_SHORT&&(Q=n.RGB16UI),X===n.UNSIGNED_INT&&(Q=n.RGB32UI),X===n.BYTE&&(Q=n.RGB8I),X===n.SHORT&&(Q=n.RGB16I),X===n.INT&&(Q=n.RGB32I)),E===n.RGBA_INTEGER&&(X===n.UNSIGNED_BYTE&&(Q=n.RGBA8UI),X===n.UNSIGNED_SHORT&&(Q=n.RGBA16UI),X===n.UNSIGNED_INT&&(Q=n.RGBA32UI),X===n.BYTE&&(Q=n.RGBA8I),X===n.SHORT&&(Q=n.RGBA16I),X===n.INT&&(Q=n.RGBA32I)),E===n.RGB&&X===n.UNSIGNED_INT_5_9_9_9_REV&&(Q=n.RGB9_E5),E===n.RGBA){const Te=re?Jf:_t.getTransfer(J);X===n.FLOAT&&(Q=n.RGBA32F),X===n.HALF_FLOAT&&(Q=n.RGBA16F),X===n.UNSIGNED_BYTE&&(Q=Te===bt?n.SRGB8_ALPHA8:n.RGBA8),X===n.UNSIGNED_SHORT_4_4_4_4&&(Q=n.RGBA4),X===n.UNSIGNED_SHORT_5_5_5_1&&(Q=n.RGB5_A1)}return(Q===n.R16F||Q===n.R32F||Q===n.RG16F||Q===n.RG32F||Q===n.RGBA16F||Q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function x(b,E){let X;return b?E===null||E===No||E===Ja?X=n.DEPTH24_STENCIL8:E===Br?X=n.DEPTH32F_STENCIL8:E===Ru&&(X=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===No||E===Ja?X=n.DEPTH_COMPONENT24:E===Br?X=n.DEPTH_COMPONENT32F:E===Ru&&(X=n.DEPTH_COMPONENT16),X}function S(b,E){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==Hi&&b.minFilter!==rr?Math.log2(Math.max(E.width,E.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?E.mipmaps.length:1}function A(b){const E=b.target;E.removeEventListener("dispose",A),M(E),E.isVideoTexture&&c.delete(E)}function w(b){const E=b.target;E.removeEventListener("dispose",w),L(E)}function M(b){const E=i.get(b);if(E.__webglInit===void 0)return;const X=b.source,J=f.get(X);if(J){const re=J[E.__cacheKey];re.usedTimes--,re.usedTimes===0&&R(b),Object.keys(J).length===0&&f.delete(X)}i.remove(b)}function R(b){const E=i.get(b);n.deleteTexture(E.__webglTexture);const X=b.source,J=f.get(X);delete J[E.__cacheKey],o.memory.textures--}function L(b){const E=i.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(E.__webglFramebuffer[J]))for(let re=0;re<E.__webglFramebuffer[J].length;re++)n.deleteFramebuffer(E.__webglFramebuffer[J][re]);else n.deleteFramebuffer(E.__webglFramebuffer[J]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[J])}else{if(Array.isArray(E.__webglFramebuffer))for(let J=0;J<E.__webglFramebuffer.length;J++)n.deleteFramebuffer(E.__webglFramebuffer[J]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let J=0;J<E.__webglColorRenderbuffer.length;J++)E.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[J]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const X=b.textures;for(let J=0,re=X.length;J<re;J++){const Q=i.get(X[J]);Q.__webglTexture&&(n.deleteTexture(Q.__webglTexture),o.memory.textures--),i.remove(X[J])}i.remove(b)}let y=0;function T(){y=0}function U(){const b=y;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),y+=1,b}function B(b){const E=[];return E.push(b.wrapS),E.push(b.wrapT),E.push(b.wrapR||0),E.push(b.magFilter),E.push(b.minFilter),E.push(b.anisotropy),E.push(b.internalFormat),E.push(b.format),E.push(b.type),E.push(b.generateMipmaps),E.push(b.premultiplyAlpha),E.push(b.flipY),E.push(b.unpackAlignment),E.push(b.colorSpace),E.join()}function j(b,E){const X=i.get(b);if(b.isVideoTexture&&z(b),b.isRenderTargetTexture===!1&&b.version>0&&X.__version!==b.version){const J=b.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{He(X,b,E);return}}t.bindTexture(n.TEXTURE_2D,X.__webglTexture,n.TEXTURE0+E)}function Z(b,E){const X=i.get(b);if(b.version>0&&X.__version!==b.version){He(X,b,E);return}t.bindTexture(n.TEXTURE_2D_ARRAY,X.__webglTexture,n.TEXTURE0+E)}function G(b,E){const X=i.get(b);if(b.version>0&&X.__version!==b.version){He(X,b,E);return}t.bindTexture(n.TEXTURE_3D,X.__webglTexture,n.TEXTURE0+E)}function Y(b,E){const X=i.get(b);if(b.version>0&&X.__version!==b.version){q(X,b,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture,n.TEXTURE0+E)}const N={[vm]:n.REPEAT,[mo]:n.CLAMP_TO_EDGE,[xm]:n.MIRRORED_REPEAT},K={[Hi]:n.NEAREST,[lA]:n.NEAREST_MIPMAP_NEAREST,[mc]:n.NEAREST_MIPMAP_LINEAR,[rr]:n.LINEAR,[vh]:n.LINEAR_MIPMAP_NEAREST,[_o]:n.LINEAR_MIPMAP_LINEAR},P={[hA]:n.NEVER,[xA]:n.ALWAYS,[pA]:n.LESS,[mM]:n.LEQUAL,[mA]:n.EQUAL,[vA]:n.GEQUAL,[_A]:n.GREATER,[gA]:n.NOTEQUAL};function ne(b,E){if(E.type===Br&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===rr||E.magFilter===vh||E.magFilter===mc||E.magFilter===_o||E.minFilter===rr||E.minFilter===vh||E.minFilter===mc||E.minFilter===_o)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,N[E.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,N[E.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,N[E.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,K[E.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,K[E.minFilter]),E.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,P[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Hi||E.minFilter!==mc&&E.minFilter!==_o||E.type===Br&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");n.texParameterf(b,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function Se(b,E){let X=!1;b.__webglInit===void 0&&(b.__webglInit=!0,E.addEventListener("dispose",A));const J=E.source;let re=f.get(J);re===void 0&&(re={},f.set(J,re));const Q=B(E);if(Q!==b.__cacheKey){re[Q]===void 0&&(re[Q]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,X=!0),re[Q].usedTimes++;const Te=re[b.__cacheKey];Te!==void 0&&(re[b.__cacheKey].usedTimes--,Te.usedTimes===0&&R(E)),b.__cacheKey=Q,b.__webglTexture=re[Q].texture}return X}function He(b,E,X){let J=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(J=n.TEXTURE_3D);const re=Se(b,E),Q=E.source;t.bindTexture(J,b.__webglTexture,n.TEXTURE0+X);const Te=i.get(Q);if(Q.version!==Te.__version||re===!0){t.activeTexture(n.TEXTURE0+X);const oe=_t.getPrimaries(_t.workingColorSpace),me=E.colorSpace===hs?null:_t.getPrimaries(E.colorSpace),We=E.colorSpace===hs||oe===me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);let se=_(E.image,!1,r.maxTextureSize);se=Qe(E,se);const ye=s.convert(E.format,E.colorSpace),Me=s.convert(E.type);let Oe=v(E.internalFormat,ye,Me,E.colorSpace,E.isVideoTexture);ne(J,E);let xe;const Ye=E.mipmaps,Be=E.isVideoTexture!==!0,lt=Te.__version===void 0||re===!0,O=Q.dataReady,ie=S(E,se);if(E.isDepthTexture)Oe=x(E.format===el,E.type),lt&&(Be?t.texStorage2D(n.TEXTURE_2D,1,Oe,se.width,se.height):t.texImage2D(n.TEXTURE_2D,0,Oe,se.width,se.height,0,ye,Me,null));else if(E.isDataTexture)if(Ye.length>0){Be&&lt&&t.texStorage2D(n.TEXTURE_2D,ie,Oe,Ye[0].width,Ye[0].height);for(let $=0,ee=Ye.length;$<ee;$++)xe=Ye[$],Be?O&&t.texSubImage2D(n.TEXTURE_2D,$,0,0,xe.width,xe.height,ye,Me,xe.data):t.texImage2D(n.TEXTURE_2D,$,Oe,xe.width,xe.height,0,ye,Me,xe.data);E.generateMipmaps=!1}else Be?(lt&&t.texStorage2D(n.TEXTURE_2D,ie,Oe,se.width,se.height),O&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,se.width,se.height,ye,Me,se.data)):t.texImage2D(n.TEXTURE_2D,0,Oe,se.width,se.height,0,ye,Me,se.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Be&&lt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ie,Oe,Ye[0].width,Ye[0].height,se.depth);for(let $=0,ee=Ye.length;$<ee;$++)if(xe=Ye[$],E.format!==or)if(ye!==null)if(Be){if(O)if(E.layerUpdates.size>0){const fe=ex(xe.width,xe.height,E.format,E.type);for(const de of E.layerUpdates){const qe=xe.data.subarray(de*fe/xe.data.BYTES_PER_ELEMENT,(de+1)*fe/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,de,xe.width,xe.height,1,ye,qe,0,0)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,xe.width,xe.height,se.depth,ye,xe.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,$,Oe,xe.width,xe.height,se.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?O&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,xe.width,xe.height,se.depth,ye,Me,xe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,$,Oe,xe.width,xe.height,se.depth,0,ye,Me,xe.data)}else{Be&&lt&&t.texStorage2D(n.TEXTURE_2D,ie,Oe,Ye[0].width,Ye[0].height);for(let $=0,ee=Ye.length;$<ee;$++)xe=Ye[$],E.format!==or?ye!==null?Be?O&&t.compressedTexSubImage2D(n.TEXTURE_2D,$,0,0,xe.width,xe.height,ye,xe.data):t.compressedTexImage2D(n.TEXTURE_2D,$,Oe,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?O&&t.texSubImage2D(n.TEXTURE_2D,$,0,0,xe.width,xe.height,ye,Me,xe.data):t.texImage2D(n.TEXTURE_2D,$,Oe,xe.width,xe.height,0,ye,Me,xe.data)}else if(E.isDataArrayTexture)if(Be){if(lt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ie,Oe,se.width,se.height,se.depth),O)if(E.layerUpdates.size>0){const $=ex(se.width,se.height,E.format,E.type);for(const ee of E.layerUpdates){const fe=se.data.subarray(ee*$/se.data.BYTES_PER_ELEMENT,(ee+1)*$/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ee,se.width,se.height,1,ye,Me,fe)}E.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,ye,Me,se.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Oe,se.width,se.height,se.depth,0,ye,Me,se.data);else if(E.isData3DTexture)Be?(lt&&t.texStorage3D(n.TEXTURE_3D,ie,Oe,se.width,se.height,se.depth),O&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,ye,Me,se.data)):t.texImage3D(n.TEXTURE_3D,0,Oe,se.width,se.height,se.depth,0,ye,Me,se.data);else if(E.isFramebufferTexture){if(lt)if(Be)t.texStorage2D(n.TEXTURE_2D,ie,Oe,se.width,se.height);else{let $=se.width,ee=se.height;for(let fe=0;fe<ie;fe++)t.texImage2D(n.TEXTURE_2D,fe,Oe,$,ee,0,ye,Me,null),$>>=1,ee>>=1}}else if(Ye.length>0){if(Be&&lt){const $=Ie(Ye[0]);t.texStorage2D(n.TEXTURE_2D,ie,Oe,$.width,$.height)}for(let $=0,ee=Ye.length;$<ee;$++)xe=Ye[$],Be?O&&t.texSubImage2D(n.TEXTURE_2D,$,0,0,ye,Me,xe):t.texImage2D(n.TEXTURE_2D,$,Oe,ye,Me,xe);E.generateMipmaps=!1}else if(Be){if(lt){const $=Ie(se);t.texStorage2D(n.TEXTURE_2D,ie,Oe,$.width,$.height)}O&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ye,Me,se)}else t.texImage2D(n.TEXTURE_2D,0,Oe,ye,Me,se);m(E)&&h(J),Te.__version=Q.version,E.onUpdate&&E.onUpdate(E)}b.__version=E.version}function q(b,E,X){if(E.image.length!==6)return;const J=Se(b,E),re=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+X);const Q=i.get(re);if(re.version!==Q.__version||J===!0){t.activeTexture(n.TEXTURE0+X);const Te=_t.getPrimaries(_t.workingColorSpace),oe=E.colorSpace===hs?null:_t.getPrimaries(E.colorSpace),me=E.colorSpace===hs||Te===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const We=E.isCompressedTexture||E.image[0].isCompressedTexture,se=E.image[0]&&E.image[0].isDataTexture,ye=[];for(let ee=0;ee<6;ee++)!We&&!se?ye[ee]=_(E.image[ee],!0,r.maxCubemapSize):ye[ee]=se?E.image[ee].image:E.image[ee],ye[ee]=Qe(E,ye[ee]);const Me=ye[0],Oe=s.convert(E.format,E.colorSpace),xe=s.convert(E.type),Ye=v(E.internalFormat,Oe,xe,E.colorSpace),Be=E.isVideoTexture!==!0,lt=Q.__version===void 0||J===!0,O=re.dataReady;let ie=S(E,Me);ne(n.TEXTURE_CUBE_MAP,E);let $;if(We){Be&&lt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ie,Ye,Me.width,Me.height);for(let ee=0;ee<6;ee++){$=ye[ee].mipmaps;for(let fe=0;fe<$.length;fe++){const de=$[fe];E.format!==or?Oe!==null?Be?O&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe,0,0,de.width,de.height,Oe,de.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe,Ye,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe,0,0,de.width,de.height,Oe,xe,de.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe,Ye,de.width,de.height,0,Oe,xe,de.data)}}}else{if($=E.mipmaps,Be&&lt){$.length>0&&ie++;const ee=Ie(ye[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ie,Ye,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(se){Be?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,ye[ee].width,ye[ee].height,Oe,xe,ye[ee].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ye,ye[ee].width,ye[ee].height,0,Oe,xe,ye[ee].data);for(let fe=0;fe<$.length;fe++){const qe=$[fe].image[ee].image;Be?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe+1,0,0,qe.width,qe.height,Oe,xe,qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe+1,Ye,qe.width,qe.height,0,Oe,xe,qe.data)}}else{Be?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Oe,xe,ye[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ye,Oe,xe,ye[ee]);for(let fe=0;fe<$.length;fe++){const de=$[fe];Be?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe+1,0,0,Oe,xe,de.image[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe+1,Ye,Oe,xe,de.image[ee])}}}m(E)&&h(n.TEXTURE_CUBE_MAP),Q.__version=re.version,E.onUpdate&&E.onUpdate(E)}b.__version=E.version}function te(b,E,X,J,re,Q){const Te=s.convert(X.format,X.colorSpace),oe=s.convert(X.type),me=v(X.internalFormat,Te,oe,X.colorSpace);if(!i.get(E).__hasExternalTextures){const se=Math.max(1,E.width>>Q),ye=Math.max(1,E.height>>Q);re===n.TEXTURE_3D||re===n.TEXTURE_2D_ARRAY?t.texImage3D(re,Q,me,se,ye,E.depth,0,Te,oe,null):t.texImage2D(re,Q,me,se,ye,0,Te,oe,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),Ve(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,re,i.get(X).__webglTexture,0,ze(E)):(re===n.TEXTURE_2D||re>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,re,i.get(X).__webglTexture,Q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ce(b,E,X){if(n.bindRenderbuffer(n.RENDERBUFFER,b),E.depthBuffer){const J=E.depthTexture,re=J&&J.isDepthTexture?J.type:null,Q=x(E.stencilBuffer,re),Te=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=ze(E);Ve(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe,Q,E.width,E.height):X?n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,Q,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,Q,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Te,n.RENDERBUFFER,b)}else{const J=E.textures;for(let re=0;re<J.length;re++){const Q=J[re],Te=s.convert(Q.format,Q.colorSpace),oe=s.convert(Q.type),me=v(Q.internalFormat,Te,oe,Q.colorSpace),We=ze(E);X&&Ve(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,We,me,E.width,E.height):Ve(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,We,me,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,me,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ue(b,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),j(E.depthTexture,0);const J=i.get(E.depthTexture).__webglTexture,re=ze(E);if(E.depthTexture.format===Ia)Ve(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0,re):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0);else if(E.depthTexture.format===el)Ve(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0,re):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Pe(b){const E=i.get(b),X=b.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==b.depthTexture){const J=b.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),J){const re=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,J.removeEventListener("dispose",re)};J.addEventListener("dispose",re),E.__depthDisposeCallback=re}E.__boundDepthTexture=J}if(b.depthTexture&&!E.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");ue(E.__webglFramebuffer,b)}else if(X){E.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[J]),E.__webglDepthbuffer[J]===void 0)E.__webglDepthbuffer[J]=n.createRenderbuffer(),ce(E.__webglDepthbuffer[J],b,!1);else{const re=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=E.__webglDepthbuffer[J];n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,re,n.RENDERBUFFER,Q)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),ce(E.__webglDepthbuffer,b,!1);else{const J=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,re),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,re)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ae(b,E,X){const J=i.get(b);E!==void 0&&te(J.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),X!==void 0&&Pe(b)}function je(b){const E=b.texture,X=i.get(b),J=i.get(E);b.addEventListener("dispose",w);const re=b.textures,Q=b.isWebGLCubeRenderTarget===!0,Te=re.length>1;if(Te||(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=E.version,o.memory.textures++),Q){X.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(E.mipmaps&&E.mipmaps.length>0){X.__webglFramebuffer[oe]=[];for(let me=0;me<E.mipmaps.length;me++)X.__webglFramebuffer[oe][me]=n.createFramebuffer()}else X.__webglFramebuffer[oe]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){X.__webglFramebuffer=[];for(let oe=0;oe<E.mipmaps.length;oe++)X.__webglFramebuffer[oe]=n.createFramebuffer()}else X.__webglFramebuffer=n.createFramebuffer();if(Te)for(let oe=0,me=re.length;oe<me;oe++){const We=i.get(re[oe]);We.__webglTexture===void 0&&(We.__webglTexture=n.createTexture(),o.memory.textures++)}if(b.samples>0&&Ve(b)===!1){X.__webglMultisampledFramebuffer=n.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let oe=0;oe<re.length;oe++){const me=re[oe];X.__webglColorRenderbuffer[oe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,X.__webglColorRenderbuffer[oe]);const We=s.convert(me.format,me.colorSpace),se=s.convert(me.type),ye=v(me.internalFormat,We,se,me.colorSpace,b.isXRRenderTarget===!0),Me=ze(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,Me,ye,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,X.__webglColorRenderbuffer[oe])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(X.__webglDepthRenderbuffer=n.createRenderbuffer(),ce(X.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Q){t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),ne(n.TEXTURE_CUBE_MAP,E);for(let oe=0;oe<6;oe++)if(E.mipmaps&&E.mipmaps.length>0)for(let me=0;me<E.mipmaps.length;me++)te(X.__webglFramebuffer[oe][me],b,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,me);else te(X.__webglFramebuffer[oe],b,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(E)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let oe=0,me=re.length;oe<me;oe++){const We=re[oe],se=i.get(We);t.bindTexture(n.TEXTURE_2D,se.__webglTexture),ne(n.TEXTURE_2D,We),te(X.__webglFramebuffer,b,We,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,0),m(We)&&h(n.TEXTURE_2D)}t.unbindTexture()}else{let oe=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(oe=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(oe,J.__webglTexture),ne(oe,E),E.mipmaps&&E.mipmaps.length>0)for(let me=0;me<E.mipmaps.length;me++)te(X.__webglFramebuffer[me],b,E,n.COLOR_ATTACHMENT0,oe,me);else te(X.__webglFramebuffer,b,E,n.COLOR_ATTACHMENT0,oe,0);m(E)&&h(oe),t.unbindTexture()}b.depthBuffer&&Pe(b)}function Xe(b){const E=b.textures;for(let X=0,J=E.length;X<J;X++){const re=E[X];if(m(re)){const Q=b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Te=i.get(re).__webglTexture;t.bindTexture(Q,Te),h(Q),t.unbindTexture()}}}const ke=[],D=[];function at(b){if(b.samples>0){if(Ve(b)===!1){const E=b.textures,X=b.width,J=b.height;let re=n.COLOR_BUFFER_BIT;const Q=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Te=i.get(b),oe=E.length>1;if(oe)for(let me=0;me<E.length;me++)t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let me=0;me<E.length;me++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(re|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(re|=n.STENCIL_BUFFER_BIT)),oe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Te.__webglColorRenderbuffer[me]);const We=i.get(E[me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,We,0)}n.blitFramebuffer(0,0,X,J,0,0,X,J,re,n.NEAREST),l===!0&&(ke.length=0,D.length=0,ke.push(n.COLOR_ATTACHMENT0+me),b.depthBuffer&&b.resolveDepthBuffer===!1&&(ke.push(Q),D.push(Q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,D)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ke))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),oe)for(let me=0;me<E.length;me++){t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,Te.__webglColorRenderbuffer[me]);const We=i.get(E[me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,We,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const E=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function ze(b){return Math.min(r.maxSamples,b.samples)}function Ve(b){const E=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function z(b){const E=o.render.frame;c.get(b)!==E&&(c.set(b,E),b.update())}function Qe(b,E){const X=b.colorSpace,J=b.format,re=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||X!==Xs&&X!==hs&&(_t.getTransfer(X)===bt?(J!==or||re!==$r)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),E}function Ie(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(u.width=b.naturalWidth||b.width,u.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(u.width=b.displayWidth,u.height=b.displayHeight):(u.width=b.width,u.height=b.height),u}this.allocateTextureUnit=U,this.resetTextureUnits=T,this.setTexture2D=j,this.setTexture2DArray=Z,this.setTexture3D=G,this.setTextureCube=Y,this.rebindTextures=Ae,this.setupRenderTarget=je,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=at,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=te,this.useMultisampledRTT=Ve}function wb(n,e){function t(i,r=hs){let s;const o=_t.getTransfer(r);if(i===$r)return n.UNSIGNED_BYTE;if(i===pg)return n.UNSIGNED_SHORT_4_4_4_4;if(i===mg)return n.UNSIGNED_SHORT_5_5_5_1;if(i===aM)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===sM)return n.BYTE;if(i===oM)return n.SHORT;if(i===Ru)return n.UNSIGNED_SHORT;if(i===hg)return n.INT;if(i===No)return n.UNSIGNED_INT;if(i===Br)return n.FLOAT;if(i===Xu)return n.HALF_FLOAT;if(i===lM)return n.ALPHA;if(i===uM)return n.RGB;if(i===or)return n.RGBA;if(i===cM)return n.LUMINANCE;if(i===fM)return n.LUMINANCE_ALPHA;if(i===Ia)return n.DEPTH_COMPONENT;if(i===el)return n.DEPTH_STENCIL;if(i===dM)return n.RED;if(i===_g)return n.RED_INTEGER;if(i===hM)return n.RG;if(i===gg)return n.RG_INTEGER;if(i===vg)return n.RGBA_INTEGER;if(i===hf||i===pf||i===mf||i===_f)if(o===bt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===hf)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===pf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===mf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===_f)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===hf)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===pf)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===mf)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===_f)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ym||i===Sm||i===Mm||i===Em)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ym)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Sm)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Mm)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Em)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Tm||i===wm||i===Am)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Tm||i===wm)return o===bt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Am)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Cm||i===Rm||i===Pm||i===bm||i===Lm||i===Dm||i===Nm||i===Im||i===Um||i===Om||i===Fm||i===km||i===zm||i===Bm)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Cm)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Rm)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Pm)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===bm)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Lm)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Dm)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Nm)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Im)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Um)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Om)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Fm)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===km)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===zm)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Bm)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===gf||i===Hm||i===Vm)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===gf)return o===bt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Hm)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Vm)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===pM||i===Gm||i===Wm||i===Xm)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===gf)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Gm)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Wm)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Xm)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ja?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class Ab extends Fi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ol extends ni{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Cb={type:"move"};class qh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ol,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ol,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ol,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),h=this._getHandJoint(u,_);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],f=c.position.distanceTo(d.position),p=.02,g=.005;u.inputState.pinching&&f>p+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=p-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Cb)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ol;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Rb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Pb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class bb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new ti,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Fs({vertexShader:Rb,fragmentShader:Pb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Vi(new Fd(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Lb extends fl{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,d=null,f=null,p=null,g=null;const _=new bb,m=t.getContextAttributes();let h=null,v=null;const x=[],S=[],A=new ht;let w=null;const M=new Fi;M.layers.enable(1),M.viewport=new Kt;const R=new Fi;R.layers.enable(2),R.viewport=new Kt;const L=[M,R],y=new Ab;y.layers.enable(1),y.layers.enable(2);let T=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let te=x[q];return te===void 0&&(te=new qh,x[q]=te),te.getTargetRaySpace()},this.getControllerGrip=function(q){let te=x[q];return te===void 0&&(te=new qh,x[q]=te),te.getGripSpace()},this.getHand=function(q){let te=x[q];return te===void 0&&(te=new qh,x[q]=te),te.getHandSpace()};function B(q){const te=S.indexOf(q.inputSource);if(te===-1)return;const ce=x[te];ce!==void 0&&(ce.update(q.inputSource,q.frame,u||o),ce.dispatchEvent({type:q.type,data:q.inputSource}))}function j(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",Z);for(let q=0;q<x.length;q++){const te=S[q];te!==null&&(S[q]=null,x[q].disconnect(te))}T=null,U=null,_.reset(),e.setRenderTarget(h),p=null,f=null,d=null,r=null,v=null,He.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(q){u=q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",j),r.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(A),r.renderState.layers===void 0){const te={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,te),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Io(p.framebufferWidth,p.framebufferHeight,{format:or,type:$r,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let te=null,ce=null,ue=null;m.depth&&(ue=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=m.stencil?el:Ia,ce=m.stencil?Ja:No);const Pe={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:s};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(Pe),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new Io(f.textureWidth,f.textureHeight,{format:or,type:$r,depthTexture:new PM(f.textureWidth,f.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),He.setContext(r),He.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Z(q){for(let te=0;te<q.removed.length;te++){const ce=q.removed[te],ue=S.indexOf(ce);ue>=0&&(S[ue]=null,x[ue].disconnect(ce))}for(let te=0;te<q.added.length;te++){const ce=q.added[te];let ue=S.indexOf(ce);if(ue===-1){for(let Ae=0;Ae<x.length;Ae++)if(Ae>=S.length){S.push(ce),ue=Ae;break}else if(S[Ae]===null){S[Ae]=ce,ue=Ae;break}if(ue===-1)break}const Pe=x[ue];Pe&&Pe.connect(ce)}}const G=new H,Y=new H;function N(q,te,ce){G.setFromMatrixPosition(te.matrixWorld),Y.setFromMatrixPosition(ce.matrixWorld);const ue=G.distanceTo(Y),Pe=te.projectionMatrix.elements,Ae=ce.projectionMatrix.elements,je=Pe[14]/(Pe[10]-1),Xe=Pe[14]/(Pe[10]+1),ke=(Pe[9]+1)/Pe[5],D=(Pe[9]-1)/Pe[5],at=(Pe[8]-1)/Pe[0],ze=(Ae[8]+1)/Ae[0],Ve=je*at,z=je*ze,Qe=ue/(-at+ze),Ie=Qe*-at;if(te.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ie),q.translateZ(Qe),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Pe[10]===-1)q.projectionMatrix.copy(te.projectionMatrix),q.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const b=je+Qe,E=Xe+Qe,X=Ve-Ie,J=z+(ue-Ie),re=ke*Xe/E*b,Q=D*Xe/E*b;q.projectionMatrix.makePerspective(X,J,re,Q,b,E),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function K(q,te){te===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(te.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let te=q.near,ce=q.far;_.texture!==null&&(_.depthNear>0&&(te=_.depthNear),_.depthFar>0&&(ce=_.depthFar)),y.near=R.near=M.near=te,y.far=R.far=M.far=ce,(T!==y.near||U!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),T=y.near,U=y.far);const ue=q.parent,Pe=y.cameras;K(y,ue);for(let Ae=0;Ae<Pe.length;Ae++)K(Pe[Ae],ue);Pe.length===2?N(y,M,R):y.projectionMatrix.copy(M.projectionMatrix),P(q,y,ue)};function P(q,te,ce){ce===null?q.matrix.copy(te.matrixWorld):(q.matrix.copy(ce.matrixWorld),q.matrix.invert(),q.matrix.multiply(te.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(te.projectionMatrix),q.projectionMatrixInverse.copy(te.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=jm*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let ne=null;function Se(q,te){if(c=te.getViewerPose(u||o),g=te,c!==null){const ce=c.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let ue=!1;ce.length!==y.cameras.length&&(y.cameras.length=0,ue=!0);for(let Ae=0;Ae<ce.length;Ae++){const je=ce[Ae];let Xe=null;if(p!==null)Xe=p.getViewport(je);else{const D=d.getViewSubImage(f,je);Xe=D.viewport,Ae===0&&(e.setRenderTargetTextures(v,D.colorTexture,f.ignoreDepthValues?void 0:D.depthStencilTexture),e.setRenderTarget(v))}let ke=L[Ae];ke===void 0&&(ke=new Fi,ke.layers.enable(Ae),ke.viewport=new Kt,L[Ae]=ke),ke.matrix.fromArray(je.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(je.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(Xe.x,Xe.y,Xe.width,Xe.height),Ae===0&&(y.matrix.copy(ke.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ue===!0&&y.cameras.push(ke)}const Pe=r.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")){const Ae=d.getDepthInformation(ce[0]);Ae&&Ae.isValid&&Ae.texture&&_.init(e,Ae,r.renderState)}}for(let ce=0;ce<x.length;ce++){const ue=S[ce],Pe=x[ce];ue!==null&&Pe!==void 0&&Pe.update(ue,te,u||o)}ne&&ne(q,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),g=null}const He=new RM;He.setAnimationLoop(Se),this.setAnimationLoop=function(q){ne=q},this.dispose=function(){}}}const Qs=new Kr,Db=new Wt;function Nb(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,TM(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,v,x,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),d(m,h)):h.isMeshPhongMaterial?(s(m,h),c(m,h)):h.isMeshStandardMaterial?(s(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,S)):h.isMeshMatcapMaterial?(s(m,h),g(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),_(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,v,x):h.isSpriteMaterial?u(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===ei&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===ei&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const v=e.get(h),x=v.envMap,S=v.envMapRotation;x&&(m.envMap.value=x,Qs.copy(S),Qs.x*=-1,Qs.y*=-1,Qs.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Qs.y*=-1,Qs.z*=-1),m.envMapRotation.value.setFromMatrix4(Db.makeRotationFromEuler(Qs)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,v,x){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*v,m.scale.value=x*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,v){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===ei&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function _(m,h){const v=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Ib(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,x){const S=x.program;i.uniformBlockBinding(v,S)}function u(v,x){let S=r[v.id];S===void 0&&(g(v),S=c(v),r[v.id]=S,v.addEventListener("dispose",m));const A=x.program;i.updateUBOMapping(v,A);const w=e.render.frame;s[v.id]!==w&&(f(v),s[v.id]=w)}function c(v){const x=d();v.__bindingPointIndex=x;const S=n.createBuffer(),A=v.__size,w=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,A,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,S),S}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const x=r[v.id],S=v.uniforms,A=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let w=0,M=S.length;w<M;w++){const R=Array.isArray(S[w])?S[w]:[S[w]];for(let L=0,y=R.length;L<y;L++){const T=R[L];if(p(T,w,L,A)===!0){const U=T.__offset,B=Array.isArray(T.value)?T.value:[T.value];let j=0;for(let Z=0;Z<B.length;Z++){const G=B[Z],Y=_(G);typeof G=="number"||typeof G=="boolean"?(T.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,U+j,T.__data)):G.isMatrix3?(T.__data[0]=G.elements[0],T.__data[1]=G.elements[1],T.__data[2]=G.elements[2],T.__data[3]=0,T.__data[4]=G.elements[3],T.__data[5]=G.elements[4],T.__data[6]=G.elements[5],T.__data[7]=0,T.__data[8]=G.elements[6],T.__data[9]=G.elements[7],T.__data[10]=G.elements[8],T.__data[11]=0):(G.toArray(T.__data,j),j+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,T.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(v,x,S,A){const w=v.value,M=x+"_"+S;if(A[M]===void 0)return typeof w=="number"||typeof w=="boolean"?A[M]=w:A[M]=w.clone(),!0;{const R=A[M];if(typeof w=="number"||typeof w=="boolean"){if(R!==w)return A[M]=w,!0}else if(R.equals(w)===!1)return R.copy(w),!0}return!1}function g(v){const x=v.uniforms;let S=0;const A=16;for(let M=0,R=x.length;M<R;M++){const L=Array.isArray(x[M])?x[M]:[x[M]];for(let y=0,T=L.length;y<T;y++){const U=L[y],B=Array.isArray(U.value)?U.value:[U.value];for(let j=0,Z=B.length;j<Z;j++){const G=B[j],Y=_(G),N=S%A,K=N%Y.boundary,P=N+K;S+=K,P!==0&&A-P<Y.storage&&(S+=A-P),U.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=S,S+=Y.storage}}}const w=S%A;return w>0&&(S+=A-w),v.__size=S,v.__cache={},this}function _(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){const x=v.target;x.removeEventListener("dispose",m);const S=o.indexOf(x.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function h(){for(const v in r)n.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:u,dispose:h}}class Ub{constructor(e={}){const{canvas:t=SA(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const h=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=hr,this.toneMapping=bs,this.toneMappingExposure=1;const x=this;let S=!1,A=0,w=0,M=null,R=-1,L=null;const y=new Kt,T=new Kt;let U=null;const B=new gt(0);let j=0,Z=t.width,G=t.height,Y=1,N=null,K=null;const P=new Kt(0,0,Z,G),ne=new Kt(0,0,Z,G);let Se=!1;const He=new CM;let q=!1,te=!1;const ce=new Wt,ue=new Wt,Pe=new H,Ae=new Kt,je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xe=!1;function ke(){return M===null?Y:1}let D=i;function at(C,k){return t.getContext(C,k)}try{const C={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${dg}`),t.addEventListener("webglcontextlost",ee,!1),t.addEventListener("webglcontextrestored",fe,!1),t.addEventListener("webglcontextcreationerror",de,!1),D===null){const k="webgl2";if(D=at(k,C),D===null)throw at(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ze,Ve,z,Qe,Ie,b,E,X,J,re,Q,Te,oe,me,We,se,ye,Me,Oe,xe,Ye,Be,lt,O;function ie(){ze=new B2(D),ze.init(),Be=new wb(D,ze),Ve=new N2(D,ze,e,Be),z=new Mb(D),Ve.reverseDepthBuffer&&z.buffers.depth.setReversed(!0),Qe=new G2(D),Ie=new ab,b=new Tb(D,ze,z,Ie,Ve,Be,Qe),E=new U2(x),X=new z2(x),J=new $A(D),lt=new L2(D,J),re=new H2(D,J,Qe,lt),Q=new X2(D,re,J,Qe),Oe=new W2(D,Ve,b),se=new I2(Ie),Te=new ob(x,E,X,ze,Ve,lt,se),oe=new Nb(x,Ie),me=new ub,We=new mb(ze),Me=new b2(x,E,X,z,Q,f,l),ye=new yb(x,Q,Ve),O=new Ib(D,Qe,Ve,z),xe=new D2(D,ze,Qe),Ye=new V2(D,ze,Qe),Qe.programs=Te.programs,x.capabilities=Ve,x.extensions=ze,x.properties=Ie,x.renderLists=me,x.shadowMap=ye,x.state=z,x.info=Qe}ie();const $=new Lb(x,D);this.xr=$,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const C=ze.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ze.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(C){C!==void 0&&(Y=C,this.setSize(Z,G,!1))},this.getSize=function(C){return C.set(Z,G)},this.setSize=function(C,k,V=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=C,G=k,t.width=Math.floor(C*Y),t.height=Math.floor(k*Y),V===!0&&(t.style.width=C+"px",t.style.height=k+"px"),this.setViewport(0,0,C,k)},this.getDrawingBufferSize=function(C){return C.set(Z*Y,G*Y).floor()},this.setDrawingBufferSize=function(C,k,V){Z=C,G=k,Y=V,t.width=Math.floor(C*V),t.height=Math.floor(k*V),this.setViewport(0,0,C,k)},this.getCurrentViewport=function(C){return C.copy(y)},this.getViewport=function(C){return C.copy(P)},this.setViewport=function(C,k,V,W){C.isVector4?P.set(C.x,C.y,C.z,C.w):P.set(C,k,V,W),z.viewport(y.copy(P).multiplyScalar(Y).round())},this.getScissor=function(C){return C.copy(ne)},this.setScissor=function(C,k,V,W){C.isVector4?ne.set(C.x,C.y,C.z,C.w):ne.set(C,k,V,W),z.scissor(T.copy(ne).multiplyScalar(Y).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(C){z.setScissorTest(Se=C)},this.setOpaqueSort=function(C){N=C},this.setTransparentSort=function(C){K=C},this.getClearColor=function(C){return C.copy(Me.getClearColor())},this.setClearColor=function(){Me.setClearColor.apply(Me,arguments)},this.getClearAlpha=function(){return Me.getClearAlpha()},this.setClearAlpha=function(){Me.setClearAlpha.apply(Me,arguments)},this.clear=function(C=!0,k=!0,V=!0){let W=0;if(C){let F=!1;if(M!==null){const le=M.texture.format;F=le===vg||le===gg||le===_g}if(F){const le=M.texture.type,ve=le===$r||le===No||le===Ru||le===Ja||le===pg||le===mg,pe=Me.getClearColor(),he=Me.getClearAlpha(),be=pe.r,Fe=pe.g,Re=pe.b;ve?(p[0]=be,p[1]=Fe,p[2]=Re,p[3]=he,D.clearBufferuiv(D.COLOR,0,p)):(g[0]=be,g[1]=Fe,g[2]=Re,g[3]=he,D.clearBufferiv(D.COLOR,0,g))}else W|=D.COLOR_BUFFER_BIT}k&&(W|=D.DEPTH_BUFFER_BIT,D.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),V&&(W|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ee,!1),t.removeEventListener("webglcontextrestored",fe,!1),t.removeEventListener("webglcontextcreationerror",de,!1),me.dispose(),We.dispose(),Ie.dispose(),E.dispose(),X.dispose(),Q.dispose(),lt.dispose(),O.dispose(),Te.dispose(),$.dispose(),$.removeEventListener("sessionstart",ft),$.removeEventListener("sessionend",_e),Ue.stop()};function ee(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function fe(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const C=Qe.autoReset,k=ye.enabled,V=ye.autoUpdate,W=ye.needsUpdate,F=ye.type;ie(),Qe.autoReset=C,ye.enabled=k,ye.autoUpdate=V,ye.needsUpdate=W,ye.type=F}function de(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function qe(C){const k=C.target;k.removeEventListener("dispose",qe),Mt(k)}function Mt(C){Dt(C),Ie.remove(C)}function Dt(C){const k=Ie.get(C).programs;k!==void 0&&(k.forEach(function(V){Te.releaseProgram(V)}),C.isShaderMaterial&&Te.releaseShaderCache(C))}this.renderBufferDirect=function(C,k,V,W,F,le){k===null&&(k=je);const ve=F.isMesh&&F.matrixWorld.determinant()<0,pe=vt(C,k,V,W,F);z.setMaterial(W,ve);let he=V.index,be=1;if(W.wireframe===!0){if(he=re.getWireframeAttribute(V),he===void 0)return;be=2}const Fe=V.drawRange,Re=V.attributes.position;let ut=Fe.start*be,ot=(Fe.start+Fe.count)*be;le!==null&&(ut=Math.max(ut,le.start*be),ot=Math.min(ot,(le.start+le.count)*be)),he!==null?(ut=Math.max(ut,0),ot=Math.min(ot,he.count)):Re!=null&&(ut=Math.max(ut,0),ot=Math.min(ot,Re.count));const St=ot-ut;if(St<0||St===1/0)return;lt.setup(F,W,pe,V,he);let un,Je=xe;if(he!==null&&(un=J.get(he),Je=Ye,Je.setIndex(un)),F.isMesh)W.wireframe===!0?(z.setLineWidth(W.wireframeLinewidth*ke()),Je.setMode(D.LINES)):Je.setMode(D.TRIANGLES);else if(F.isLine){let Ne=W.linewidth;Ne===void 0&&(Ne=1),z.setLineWidth(Ne*ke()),F.isLineSegments?Je.setMode(D.LINES):F.isLineLoop?Je.setMode(D.LINE_LOOP):Je.setMode(D.LINE_STRIP)}else F.isPoints?Je.setMode(D.POINTS):F.isSprite&&Je.setMode(D.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Je.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(ze.get("WEBGL_multi_draw"))Je.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Ne=F._multiDrawStarts,_n=F._multiDrawCounts,pt=F._multiDrawCount,$i=he?J.get(he).bytesPerElement:1,Ho=Ie.get(W).currentProgram.getUniforms();for(let fi=0;fi<pt;fi++)Ho.setValue(D,"_gl_DrawID",fi),Je.render(Ne[fi]/$i,_n[fi])}else if(F.isInstancedMesh)Je.renderInstances(ut,St,F.count);else if(V.isInstancedBufferGeometry){const Ne=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,_n=Math.min(V.instanceCount,Ne);Je.renderInstances(ut,St,_n)}else Je.render(ut,St)};function it(C,k,V){C.transparent===!0&&C.side===Or&&C.forceSinglePass===!1?(C.side=ei,C.needsUpdate=!0,jt(C,k,V),C.side=Os,C.needsUpdate=!0,jt(C,k,V),C.side=Or):jt(C,k,V)}this.compile=function(C,k,V=null){V===null&&(V=C),m=We.get(V),m.init(k),v.push(m),V.traverseVisible(function(F){F.isLight&&F.layers.test(k.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),C!==V&&C.traverseVisible(function(F){F.isLight&&F.layers.test(k.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),m.setupLights();const W=new Set;return C.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const le=F.material;if(le)if(Array.isArray(le))for(let ve=0;ve<le.length;ve++){const pe=le[ve];it(pe,V,F),W.add(pe)}else it(le,V,F),W.add(le)}),v.pop(),m=null,W},this.compileAsync=function(C,k,V=null){const W=this.compile(C,k,V);return new Promise(F=>{function le(){if(W.forEach(function(ve){Ie.get(ve).currentProgram.isReady()&&W.delete(ve)}),W.size===0){F(C);return}setTimeout(le,10)}ze.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let Le=null;function Ce(C){Le&&Le(C)}function ft(){Ue.stop()}function _e(){Ue.start()}const Ue=new RM;Ue.setAnimationLoop(Ce),typeof self<"u"&&Ue.setContext(self),this.setAnimationLoop=function(C){Le=C,$.setAnimationLoop(C),C===null?Ue.stop():Ue.start()},$.addEventListener("sessionstart",ft),$.addEventListener("sessionend",_e),this.render=function(C,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(k),k=$.getCamera()),C.isScene===!0&&C.onBeforeRender(x,C,k,M),m=We.get(C,v.length),m.init(k),v.push(m),ue.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),He.setFromProjectionMatrix(ue),te=this.localClippingEnabled,q=se.init(this.clippingPlanes,te),_=me.get(C,h.length),_.init(),h.push(_),$.enabled===!0&&$.isPresenting===!0){const le=x.xr.getDepthSensingMesh();le!==null&&De(le,k,-1/0,x.sortObjects)}De(C,k,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(N,K),Xe=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,Xe&&Me.addToRenderList(_,C),this.info.render.frame++,q===!0&&se.beginShadows();const V=m.state.shadowsArray;ye.render(V,C,k),q===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=_.opaque,F=_.transmissive;if(m.setupLights(),k.isArrayCamera){const le=k.cameras;if(F.length>0)for(let ve=0,pe=le.length;ve<pe;ve++){const he=le[ve];Xt(W,F,C,he)}Xe&&Me.render(C);for(let ve=0,pe=le.length;ve<pe;ve++){const he=le[ve];Ge(_,C,he,he.viewport)}}else F.length>0&&Xt(W,F,C,k),Xe&&Me.render(C),Ge(_,C,k);M!==null&&(b.updateMultisampleRenderTarget(M),b.updateRenderTargetMipmap(M)),C.isScene===!0&&C.onAfterRender(x,C,k),lt.resetDefaultState(),R=-1,L=null,v.pop(),v.length>0?(m=v[v.length-1],q===!0&&se.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,h.pop(),h.length>0?_=h[h.length-1]:_=null};function De(C,k,V,W){if(C.visible===!1)return;if(C.layers.test(k.layers)){if(C.isGroup)V=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(k);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||He.intersectsSprite(C)){W&&Ae.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ue);const ve=Q.update(C),pe=C.material;pe.visible&&_.push(C,ve,pe,V,Ae.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||He.intersectsObject(C))){const ve=Q.update(C),pe=C.material;if(W&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ae.copy(C.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),Ae.copy(ve.boundingSphere.center)),Ae.applyMatrix4(C.matrixWorld).applyMatrix4(ue)),Array.isArray(pe)){const he=ve.groups;for(let be=0,Fe=he.length;be<Fe;be++){const Re=he[be],ut=pe[Re.materialIndex];ut&&ut.visible&&_.push(C,ve,ut,V,Ae.z,Re)}}else pe.visible&&_.push(C,ve,pe,V,Ae.z,null)}}const le=C.children;for(let ve=0,pe=le.length;ve<pe;ve++)De(le[ve],k,V,W)}function Ge(C,k,V,W){const F=C.opaque,le=C.transmissive,ve=C.transparent;m.setupLightsView(V),q===!0&&se.setGlobalState(x.clippingPlanes,V),W&&z.viewport(y.copy(W)),F.length>0&&$e(F,k,V),le.length>0&&$e(le,k,V),ve.length>0&&$e(ve,k,V),z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function Xt(C,k,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[W.id]===void 0&&(m.state.transmissionRenderTarget[W.id]=new Io(1,1,{generateMipmaps:!0,type:ze.has("EXT_color_buffer_half_float")||ze.has("EXT_color_buffer_float")?Xu:$r,minFilter:_o,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:_t.workingColorSpace}));const le=m.state.transmissionRenderTarget[W.id],ve=W.viewport||y;le.setSize(ve.z,ve.w);const pe=x.getRenderTarget();x.setRenderTarget(le),x.getClearColor(B),j=x.getClearAlpha(),j<1&&x.setClearColor(16777215,.5),x.clear(),Xe&&Me.render(V);const he=x.toneMapping;x.toneMapping=bs;const be=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),m.setupLightsView(W),q===!0&&se.setGlobalState(x.clippingPlanes,W),$e(C,V,W),b.updateMultisampleRenderTarget(le),b.updateRenderTargetMipmap(le),ze.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let Re=0,ut=k.length;Re<ut;Re++){const ot=k[Re],St=ot.object,un=ot.geometry,Je=ot.material,Ne=ot.group;if(Je.side===Or&&St.layers.test(W.layers)){const _n=Je.side;Je.side=ei,Je.needsUpdate=!0,Nt(St,V,W,un,Je,Ne),Je.side=_n,Je.needsUpdate=!0,Fe=!0}}Fe===!0&&(b.updateMultisampleRenderTarget(le),b.updateRenderTargetMipmap(le))}x.setRenderTarget(pe),x.setClearColor(B,j),be!==void 0&&(W.viewport=be),x.toneMapping=he}function $e(C,k,V){const W=k.isScene===!0?k.overrideMaterial:null;for(let F=0,le=C.length;F<le;F++){const ve=C[F],pe=ve.object,he=ve.geometry,be=W===null?ve.material:W,Fe=ve.group;pe.layers.test(V.layers)&&Nt(pe,k,V,he,be,Fe)}}function Nt(C,k,V,W,F,le){C.onBeforeRender(x,k,V,W,F,le),C.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),F.onBeforeRender(x,k,V,W,C,le),F.transparent===!0&&F.side===Or&&F.forceSinglePass===!1?(F.side=ei,F.needsUpdate=!0,x.renderBufferDirect(V,k,W,F,C,le),F.side=Os,F.needsUpdate=!0,x.renderBufferDirect(V,k,W,F,C,le),F.side=Or):x.renderBufferDirect(V,k,W,F,C,le),C.onAfterRender(x,k,V,W,F,le)}function jt(C,k,V){k.isScene!==!0&&(k=je);const W=Ie.get(C),F=m.state.lights,le=m.state.shadowsArray,ve=F.state.version,pe=Te.getParameters(C,F.state,le,k,V),he=Te.getProgramCacheKey(pe);let be=W.programs;W.environment=C.isMeshStandardMaterial?k.environment:null,W.fog=k.fog,W.envMap=(C.isMeshStandardMaterial?X:E).get(C.envMap||W.environment),W.envMapRotation=W.environment!==null&&C.envMap===null?k.environmentRotation:C.envMapRotation,be===void 0&&(C.addEventListener("dispose",qe),be=new Map,W.programs=be);let Fe=be.get(he);if(Fe!==void 0){if(W.currentProgram===Fe&&W.lightsStateVersion===ve)return Et(C,pe),Fe}else pe.uniforms=Te.getUniforms(C),C.onBeforeCompile(pe,x),Fe=Te.acquireProgram(pe,he),be.set(he,Fe),W.uniforms=pe.uniforms;const Re=W.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Re.clippingPlanes=se.uniform),Et(C,pe),W.needsLights=Rt(C),W.lightsStateVersion=ve,W.needsLights&&(Re.ambientLightColor.value=F.state.ambient,Re.lightProbe.value=F.state.probe,Re.directionalLights.value=F.state.directional,Re.directionalLightShadows.value=F.state.directionalShadow,Re.spotLights.value=F.state.spot,Re.spotLightShadows.value=F.state.spotShadow,Re.rectAreaLights.value=F.state.rectArea,Re.ltc_1.value=F.state.rectAreaLTC1,Re.ltc_2.value=F.state.rectAreaLTC2,Re.pointLights.value=F.state.point,Re.pointLightShadows.value=F.state.pointShadow,Re.hemisphereLights.value=F.state.hemi,Re.directionalShadowMap.value=F.state.directionalShadowMap,Re.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Re.spotShadowMap.value=F.state.spotShadowMap,Re.spotLightMatrix.value=F.state.spotLightMatrix,Re.spotLightMap.value=F.state.spotLightMap,Re.pointShadowMap.value=F.state.pointShadowMap,Re.pointShadowMatrix.value=F.state.pointShadowMatrix),W.currentProgram=Fe,W.uniformsList=null,Fe}function Ct(C){if(C.uniformsList===null){const k=C.currentProgram.getUniforms();C.uniformsList=xf.seqWithValue(k.seq,C.uniforms)}return C.uniformsList}function Et(C,k){const V=Ie.get(C);V.outputColorSpace=k.outputColorSpace,V.batching=k.batching,V.batchingColor=k.batchingColor,V.instancing=k.instancing,V.instancingColor=k.instancingColor,V.instancingMorph=k.instancingMorph,V.skinning=k.skinning,V.morphTargets=k.morphTargets,V.morphNormals=k.morphNormals,V.morphColors=k.morphColors,V.morphTargetsCount=k.morphTargetsCount,V.numClippingPlanes=k.numClippingPlanes,V.numIntersection=k.numClipIntersection,V.vertexAlphas=k.vertexAlphas,V.vertexTangents=k.vertexTangents,V.toneMapping=k.toneMapping}function vt(C,k,V,W,F){k.isScene!==!0&&(k=je),b.resetTextureUnits();const le=k.fog,ve=W.isMeshStandardMaterial?k.environment:null,pe=M===null?x.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:Xs,he=(W.isMeshStandardMaterial?X:E).get(W.envMap||ve),be=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Fe=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Re=!!V.morphAttributes.position,ut=!!V.morphAttributes.normal,ot=!!V.morphAttributes.color;let St=bs;W.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(St=x.toneMapping);const un=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Je=un!==void 0?un.length:0,Ne=Ie.get(W),_n=m.state.lights;if(q===!0&&(te===!0||C!==L)){const Di=C===L&&W.id===R;se.setState(W,C,Di)}let pt=!1;W.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==_n.state.version||Ne.outputColorSpace!==pe||F.isBatchedMesh&&Ne.batching===!1||!F.isBatchedMesh&&Ne.batching===!0||F.isBatchedMesh&&Ne.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Ne.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Ne.instancing===!1||!F.isInstancedMesh&&Ne.instancing===!0||F.isSkinnedMesh&&Ne.skinning===!1||!F.isSkinnedMesh&&Ne.skinning===!0||F.isInstancedMesh&&Ne.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ne.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ne.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ne.instancingMorph===!1&&F.morphTexture!==null||Ne.envMap!==he||W.fog===!0&&Ne.fog!==le||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==se.numPlanes||Ne.numIntersection!==se.numIntersection)||Ne.vertexAlphas!==be||Ne.vertexTangents!==Fe||Ne.morphTargets!==Re||Ne.morphNormals!==ut||Ne.morphColors!==ot||Ne.toneMapping!==St||Ne.morphTargetsCount!==Je)&&(pt=!0):(pt=!0,Ne.__version=W.version);let $i=Ne.currentProgram;pt===!0&&($i=jt(W,k,F));let Ho=!1,fi=!1,Gd=!1;const Yt=$i.getUniforms(),es=Ne.uniforms;if(z.useProgram($i.program)&&(Ho=!0,fi=!0,Gd=!0),W.id!==R&&(R=W.id,fi=!0),Ho||L!==C){Ve.reverseDepthBuffer?(ce.copy(C.projectionMatrix),EA(ce),TA(ce),Yt.setValue(D,"projectionMatrix",ce)):Yt.setValue(D,"projectionMatrix",C.projectionMatrix),Yt.setValue(D,"viewMatrix",C.matrixWorldInverse);const Di=Yt.map.cameraPosition;Di!==void 0&&Di.setValue(D,Pe.setFromMatrixPosition(C.matrixWorld)),Ve.logarithmicDepthBuffer&&Yt.setValue(D,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Yt.setValue(D,"isOrthographic",C.isOrthographicCamera===!0),L!==C&&(L=C,fi=!0,Gd=!0)}if(F.isSkinnedMesh){Yt.setOptional(D,F,"bindMatrix"),Yt.setOptional(D,F,"bindMatrixInverse");const Di=F.skeleton;Di&&(Di.boneTexture===null&&Di.computeBoneTexture(),Yt.setValue(D,"boneTexture",Di.boneTexture,b))}F.isBatchedMesh&&(Yt.setOptional(D,F,"batchingTexture"),Yt.setValue(D,"batchingTexture",F._matricesTexture,b),Yt.setOptional(D,F,"batchingIdTexture"),Yt.setValue(D,"batchingIdTexture",F._indirectTexture,b),Yt.setOptional(D,F,"batchingColorTexture"),F._colorsTexture!==null&&Yt.setValue(D,"batchingColorTexture",F._colorsTexture,b));const Wd=V.morphAttributes;if((Wd.position!==void 0||Wd.normal!==void 0||Wd.color!==void 0)&&Oe.update(F,V,$i),(fi||Ne.receiveShadow!==F.receiveShadow)&&(Ne.receiveShadow=F.receiveShadow,Yt.setValue(D,"receiveShadow",F.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(es.envMap.value=he,es.flipEnvMap.value=he.isCubeTexture&&he.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&k.environment!==null&&(es.envMapIntensity.value=k.environmentIntensity),fi&&(Yt.setValue(D,"toneMappingExposure",x.toneMappingExposure),Ne.needsLights&&ci(es,Gd),le&&W.fog===!0&&oe.refreshFogUniforms(es,le),oe.refreshMaterialUniforms(es,W,Y,G,m.state.transmissionRenderTarget[C.id]),xf.upload(D,Ct(Ne),es,b)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(xf.upload(D,Ct(Ne),es,b),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Yt.setValue(D,"center",F.center),Yt.setValue(D,"modelViewMatrix",F.modelViewMatrix),Yt.setValue(D,"normalMatrix",F.normalMatrix),Yt.setValue(D,"modelMatrix",F.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Di=W.uniformsGroups;for(let Xd=0,iE=Di.length;Xd<iE;Xd++){const Zg=Di[Xd];O.update(Zg,$i),O.bind(Zg,$i)}}return $i}function ci(C,k){C.ambientLightColor.needsUpdate=k,C.lightProbe.needsUpdate=k,C.directionalLights.needsUpdate=k,C.directionalLightShadows.needsUpdate=k,C.pointLights.needsUpdate=k,C.pointLightShadows.needsUpdate=k,C.spotLights.needsUpdate=k,C.spotLightShadows.needsUpdate=k,C.rectAreaLights.needsUpdate=k,C.hemisphereLights.needsUpdate=k}function Rt(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(C,k,V){Ie.get(C.texture).__webglTexture=k,Ie.get(C.depthTexture).__webglTexture=V;const W=Ie.get(C);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=V===void 0,W.__autoAllocateDepthBuffer||ze.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,k){const V=Ie.get(C);V.__webglFramebuffer=k,V.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(C,k=0,V=0){M=C,A=k,w=V;let W=!0,F=null,le=!1,ve=!1;if(C){const he=Ie.get(C);if(he.__useDefaultFramebuffer!==void 0)z.bindFramebuffer(D.FRAMEBUFFER,null),W=!1;else if(he.__webglFramebuffer===void 0)b.setupRenderTarget(C);else if(he.__hasExternalTextures)b.rebindTextures(C,Ie.get(C.texture).__webglTexture,Ie.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Re=C.depthTexture;if(he.__boundDepthTexture!==Re){if(Re!==null&&Ie.has(Re)&&(C.width!==Re.image.width||C.height!==Re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(C)}}const be=C.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(ve=!0);const Fe=Ie.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Fe[k])?F=Fe[k][V]:F=Fe[k],le=!0):C.samples>0&&b.useMultisampledRTT(C)===!1?F=Ie.get(C).__webglMultisampledFramebuffer:Array.isArray(Fe)?F=Fe[V]:F=Fe,y.copy(C.viewport),T.copy(C.scissor),U=C.scissorTest}else y.copy(P).multiplyScalar(Y).floor(),T.copy(ne).multiplyScalar(Y).floor(),U=Se;if(z.bindFramebuffer(D.FRAMEBUFFER,F)&&W&&z.drawBuffers(C,F),z.viewport(y),z.scissor(T),z.setScissorTest(U),le){const he=Ie.get(C.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+k,he.__webglTexture,V)}else if(ve){const he=Ie.get(C.texture),be=k||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,he.__webglTexture,V||0,be)}R=-1},this.readRenderTargetPixels=function(C,k,V,W,F,le,ve){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pe=Ie.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ve!==void 0&&(pe=pe[ve]),pe){z.bindFramebuffer(D.FRAMEBUFFER,pe);try{const he=C.texture,be=he.format,Fe=he.type;if(!Ve.textureFormatReadable(be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ve.textureTypeReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=C.width-W&&V>=0&&V<=C.height-F&&D.readPixels(k,V,W,F,Be.convert(be),Be.convert(Fe),le)}finally{const he=M!==null?Ie.get(M).__webglFramebuffer:null;z.bindFramebuffer(D.FRAMEBUFFER,he)}}},this.readRenderTargetPixelsAsync=async function(C,k,V,W,F,le,ve){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pe=Ie.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ve!==void 0&&(pe=pe[ve]),pe){const he=C.texture,be=he.format,Fe=he.type;if(!Ve.textureFormatReadable(be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ve.textureTypeReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=C.width-W&&V>=0&&V<=C.height-F){z.bindFramebuffer(D.FRAMEBUFFER,pe);const Re=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Re),D.bufferData(D.PIXEL_PACK_BUFFER,le.byteLength,D.STREAM_READ),D.readPixels(k,V,W,F,Be.convert(be),Be.convert(Fe),0);const ut=M!==null?Ie.get(M).__webglFramebuffer:null;z.bindFramebuffer(D.FRAMEBUFFER,ut);const ot=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await MA(D,ot,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Re),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,le),D.deleteBuffer(Re),D.deleteSync(ot),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,k=null,V=0){C.isTexture!==!0&&(vf("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,C=arguments[1]);const W=Math.pow(2,-V),F=Math.floor(C.image.width*W),le=Math.floor(C.image.height*W),ve=k!==null?k.x:0,pe=k!==null?k.y:0;b.setTexture2D(C,0),D.copyTexSubImage2D(D.TEXTURE_2D,V,0,0,ve,pe,F,le),z.unbindTexture()},this.copyTextureToTexture=function(C,k,V=null,W=null,F=0){C.isTexture!==!0&&(vf("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,C=arguments[1],k=arguments[2],F=arguments[3]||0,V=null);let le,ve,pe,he,be,Fe;V!==null?(le=V.max.x-V.min.x,ve=V.max.y-V.min.y,pe=V.min.x,he=V.min.y):(le=C.image.width,ve=C.image.height,pe=0,he=0),W!==null?(be=W.x,Fe=W.y):(be=0,Fe=0);const Re=Be.convert(k.format),ut=Be.convert(k.type);b.setTexture2D(k,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,k.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,k.unpackAlignment);const ot=D.getParameter(D.UNPACK_ROW_LENGTH),St=D.getParameter(D.UNPACK_IMAGE_HEIGHT),un=D.getParameter(D.UNPACK_SKIP_PIXELS),Je=D.getParameter(D.UNPACK_SKIP_ROWS),Ne=D.getParameter(D.UNPACK_SKIP_IMAGES),_n=C.isCompressedTexture?C.mipmaps[F]:C.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,_n.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,_n.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,pe),D.pixelStorei(D.UNPACK_SKIP_ROWS,he),C.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,F,be,Fe,le,ve,Re,ut,_n.data):C.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,F,be,Fe,_n.width,_n.height,Re,_n.data):D.texSubImage2D(D.TEXTURE_2D,F,be,Fe,le,ve,Re,ut,_n),D.pixelStorei(D.UNPACK_ROW_LENGTH,ot),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,St),D.pixelStorei(D.UNPACK_SKIP_PIXELS,un),D.pixelStorei(D.UNPACK_SKIP_ROWS,Je),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ne),F===0&&k.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),z.unbindTexture()},this.copyTextureToTexture3D=function(C,k,V=null,W=null,F=0){C.isTexture!==!0&&(vf("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,W=arguments[1]||null,C=arguments[2],k=arguments[3],F=arguments[4]||0);let le,ve,pe,he,be,Fe,Re,ut,ot;const St=C.isCompressedTexture?C.mipmaps[F]:C.image;V!==null?(le=V.max.x-V.min.x,ve=V.max.y-V.min.y,pe=V.max.z-V.min.z,he=V.min.x,be=V.min.y,Fe=V.min.z):(le=St.width,ve=St.height,pe=St.depth,he=0,be=0,Fe=0),W!==null?(Re=W.x,ut=W.y,ot=W.z):(Re=0,ut=0,ot=0);const un=Be.convert(k.format),Je=Be.convert(k.type);let Ne;if(k.isData3DTexture)b.setTexture3D(k,0),Ne=D.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)b.setTexture2DArray(k,0),Ne=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,k.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,k.unpackAlignment);const _n=D.getParameter(D.UNPACK_ROW_LENGTH),pt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),$i=D.getParameter(D.UNPACK_SKIP_PIXELS),Ho=D.getParameter(D.UNPACK_SKIP_ROWS),fi=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,St.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,St.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,he),D.pixelStorei(D.UNPACK_SKIP_ROWS,be),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Fe),C.isDataTexture||C.isData3DTexture?D.texSubImage3D(Ne,F,Re,ut,ot,le,ve,pe,un,Je,St.data):k.isCompressedArrayTexture?D.compressedTexSubImage3D(Ne,F,Re,ut,ot,le,ve,pe,un,St.data):D.texSubImage3D(Ne,F,Re,ut,ot,le,ve,pe,un,Je,St),D.pixelStorei(D.UNPACK_ROW_LENGTH,_n),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,pt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,$i),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ho),D.pixelStorei(D.UNPACK_SKIP_IMAGES,fi),F===0&&k.generateMipmaps&&D.generateMipmap(Ne),z.unbindTexture()},this.initRenderTarget=function(C){Ie.get(C).__webglFramebuffer===void 0&&b.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?b.setTextureCube(C,0):C.isData3DTexture?b.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?b.setTexture2DArray(C,0):b.setTexture2D(C,0),z.unbindTexture()},this.resetState=function(){A=0,w=0,M=null,z.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===xg?"display-p3":"srgb",t.unpackColorSpace=_t.workingColorSpace===Ud?"display-p3":"srgb"}}class Sg{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new gt(e),this.density=t}clone(){return new Sg(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ob extends ni{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kr,this.environmentIntensity=1,this.environmentRotation=new Kr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class IM extends $u{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new gt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const rd=new H,sd=new H,tx=new Wt,Cl=new xM,Oc=new Od,$h=new H,nx=new H;class Fb extends ni{constructor(e=new cr,t=new IM){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)rd.fromBufferAttribute(t,r-1),sd.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=rd.distanceTo(sd);e.setAttribute("lineDistance",new ii(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Oc.copy(i.boundingSphere),Oc.applyMatrix4(r),Oc.radius+=s,e.ray.intersectsSphere(Oc)===!1)return;tx.copy(r).invert(),Cl.copy(e.ray).applyMatrix4(tx);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=this.isLineSegments?2:1,c=i.index,f=i.attributes.position;if(c!==null){const p=Math.max(0,o.start),g=Math.min(c.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=u){const h=c.getX(_),v=c.getX(_+1),x=Fc(this,e,Cl,l,h,v);x&&t.push(x)}if(this.isLineLoop){const _=c.getX(g-1),m=c.getX(p),h=Fc(this,e,Cl,l,_,m);h&&t.push(h)}}else{const p=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=u){const h=Fc(this,e,Cl,l,_,_+1);h&&t.push(h)}if(this.isLineLoop){const _=Fc(this,e,Cl,l,g-1,p);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Fc(n,e,t,i,r,s){const o=n.geometry.attributes.position;if(rd.fromBufferAttribute(o,r),sd.fromBufferAttribute(o,s),t.distanceSqToSegment(rd,sd,$h,nx)>i)return;$h.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo($h);if(!(l<e.near||l>e.far))return{distance:l,point:nx.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:n}}class kb{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,l=s-1,u;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),u=i[r]-o,u<0)a=r+1;else if(u>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const c=i[r],f=i[r+1]-c,p=(o-c)/f;return(r+p)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new ht:new H);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new H,r=[],s=[],o=[],a=new H,l=new Wt;for(let p=0;p<=e;p++){const g=p/e;r[p]=this.getTangentAt(g,new H)}s[0]=new H,o[0]=new H;let u=Number.MAX_VALUE;const c=Math.abs(r[0].x),d=Math.abs(r[0].y),f=Math.abs(r[0].z);c<=u&&(u=c,i.set(1,0,0)),d<=u&&(u=d,i.set(0,1,0)),f<=u&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Pn(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(Pn(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],p*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function Mg(){let n=0,e=0,t=0,i=0;function r(s,o,a,l){n=s,e=a,t=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,u){r(o,a,u*(a-s),u*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,u,c,d){let f=(o-s)/u-(a-s)/(u+c)+(a-o)/c,p=(a-o)/c-(l-o)/(c+d)+(l-a)/d;f*=c,p*=c,r(o,a,f,p)},calc:function(s){const o=s*s,a=o*s;return n+e*s+t*o+i*a}}}const kc=new H,Kh=new Mg,Zh=new Mg,Qh=new Mg;class zb extends kb{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new H){const i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let u,c;this.closed||a>0?u=r[(a-1)%s]:(kc.subVectors(r[0],r[1]).add(r[0]),u=kc);const d=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?c=r[(a+2)%s]:(kc.subVectors(r[s-1],r[s-2]).add(r[s-1]),c=kc),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(u.distanceToSquared(d),p),_=Math.pow(d.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(c),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Kh.initNonuniformCatmullRom(u.x,d.x,f.x,c.x,g,_,m),Zh.initNonuniformCatmullRom(u.y,d.y,f.y,c.y,g,_,m),Qh.initNonuniformCatmullRom(u.z,d.z,f.z,c.z,g,_,m)}else this.curveType==="catmullrom"&&(Kh.initCatmullRom(u.x,d.x,f.x,c.x,this.tension),Zh.initCatmullRom(u.y,d.y,f.y,c.y,this.tension),Qh.initCatmullRom(u.z,d.z,f.z,c.z,this.tension));return i.set(Kh.calc(l),Zh.calc(l),Qh.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new H().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class Eg extends cr{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],o=[];a(r),u(i),c(),this.setAttribute("position",new ii(s,3)),this.setAttribute("normal",new ii(s.slice(),3)),this.setAttribute("uv",new ii(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const x=new H,S=new H,A=new H;for(let w=0;w<t.length;w+=3)p(t[w+0],x),p(t[w+1],S),p(t[w+2],A),l(x,S,A,v)}function l(v,x,S,A){const w=A+1,M=[];for(let R=0;R<=w;R++){M[R]=[];const L=v.clone().lerp(S,R/w),y=x.clone().lerp(S,R/w),T=w-R;for(let U=0;U<=T;U++)U===0&&R===w?M[R][U]=L:M[R][U]=L.clone().lerp(y,U/T)}for(let R=0;R<w;R++)for(let L=0;L<2*(w-R)-1;L++){const y=Math.floor(L/2);L%2===0?(f(M[R][y+1]),f(M[R+1][y]),f(M[R][y])):(f(M[R][y+1]),f(M[R+1][y+1]),f(M[R+1][y]))}}function u(v){const x=new H;for(let S=0;S<s.length;S+=3)x.x=s[S+0],x.y=s[S+1],x.z=s[S+2],x.normalize().multiplyScalar(v),s[S+0]=x.x,s[S+1]=x.y,s[S+2]=x.z}function c(){const v=new H;for(let x=0;x<s.length;x+=3){v.x=s[x+0],v.y=s[x+1],v.z=s[x+2];const S=m(v)/2/Math.PI+.5,A=h(v)/Math.PI+.5;o.push(S,1-A)}g(),d()}function d(){for(let v=0;v<o.length;v+=6){const x=o[v+0],S=o[v+2],A=o[v+4],w=Math.max(x,S,A),M=Math.min(x,S,A);w>.9&&M<.1&&(x<.2&&(o[v+0]+=1),S<.2&&(o[v+2]+=1),A<.2&&(o[v+4]+=1))}}function f(v){s.push(v.x,v.y,v.z)}function p(v,x){const S=v*3;x.x=e[S+0],x.y=e[S+1],x.z=e[S+2]}function g(){const v=new H,x=new H,S=new H,A=new H,w=new ht,M=new ht,R=new ht;for(let L=0,y=0;L<s.length;L+=9,y+=6){v.set(s[L+0],s[L+1],s[L+2]),x.set(s[L+3],s[L+4],s[L+5]),S.set(s[L+6],s[L+7],s[L+8]),w.set(o[y+0],o[y+1]),M.set(o[y+2],o[y+3]),R.set(o[y+4],o[y+5]),A.copy(v).add(x).add(S).divideScalar(3);const T=m(A);_(w,y+0,v,T),_(M,y+2,x,T),_(R,y+4,S,T)}}function _(v,x,S,A){A<0&&v.x===1&&(o[x]=v.x-1),S.x===0&&S.z===0&&(o[x]=A/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function h(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Eg(e.vertices,e.indices,e.radius,e.details)}}class Tg extends Eg{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Tg(e.radius,e.detail)}}class od extends cr{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const c=[],d=new H,f=new H,p=[],g=[],_=[],m=[];for(let h=0;h<=i;h++){const v=[],x=h/i;let S=0;h===0&&o===0?S=.5/t:h===i&&l===Math.PI&&(S=-.5/t);for(let A=0;A<=t;A++){const w=A/t;d.x=-e*Math.cos(r+w*s)*Math.sin(o+x*a),d.y=e*Math.cos(o+x*a),d.z=e*Math.sin(r+w*s)*Math.sin(o+x*a),g.push(d.x,d.y,d.z),f.copy(d).normalize(),_.push(f.x,f.y,f.z),m.push(w+S,1-x),v.push(u++)}c.push(v)}for(let h=0;h<i;h++)for(let v=0;v<t;v++){const x=c[h][v+1],S=c[h][v],A=c[h+1][v],w=c[h+1][v+1];(h!==0||o>0)&&p.push(x,S,w),(h!==i-1||l<Math.PI)&&p.push(S,A,w)}this.setIndex(p),this.setAttribute("position",new ii(g,3)),this.setAttribute("normal",new ii(_,3)),this.setAttribute("uv",new ii(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new od(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Bb{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ix(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=ix();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function ix(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:dg}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=dg);function Nr(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function UM(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ai={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Pu={duration:.5,overwrite:!1,delay:0},wg,yn,Ut,Gi=1e8,wt=1/Gi,qm=Math.PI*2,Hb=qm/4,Vb=0,OM=Math.sqrt,Gb=Math.cos,Wb=Math.sin,mn=function(e){return typeof e=="string"},Gt=function(e){return typeof e=="function"},Zr=function(e){return typeof e=="number"},Ag=function(e){return typeof e>"u"},wr=function(e){return typeof e=="object"},ri=function(e){return e!==!1},Cg=function(){return typeof window<"u"},zc=function(e){return Gt(e)||mn(e)},FM=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Dn=Array.isArray,Xb=/random\([^)]+\)/g,jb=/,\s*/g,rx=/(?:-?\.?\d|\.)+/gi,kM=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ta=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Jh=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,zM=/[+-]=-?[.\d]+/,Yb=/[^,'"\[\]\s]+/gi,qb=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,kt,pr,$m,Rg,Ri={},ad={},BM,HM=function(e){return(ad=nl(e,Ri))&&li},Pg=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},bu=function(e,t){return!t&&console.warn(e)},VM=function(e,t){return e&&(Ri[e]=t)&&ad&&(ad[e]=t)||Ri},Lu=function(){return 0},$b={suppressEvents:!0,isStart:!0,kill:!1},yf={suppressEvents:!0,kill:!1},Kb={suppressEvents:!0},bg={},Ls=[],Km={},GM,gi={},ep={},sx=30,Sf=[],Lg="",Dg=function(e){var t=e[0],i,r;if(wr(t)||Gt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=Sf.length;r--&&!Sf[r].targetTest(t););i=Sf[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new f1(e[r],i)))||e.splice(r,1);return e},So=function(e){return e._gsap||Dg(Wi(e))[0]._gsap},WM=function(e,t,i){return(i=e[t])&&Gt(i)?e[t]():Ag(i)&&e.getAttribute&&e.getAttribute(t)||i},si=function(e,t){return(e=e.split(",")).forEach(t)||e},qt=function(e){return Math.round(e*1e5)/1e5||0},Ot=function(e){return Math.round(e*1e7)/1e7||0},Oa=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},Zb=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},ld=function(){var e=Ls.length,t=Ls.slice(0),i,r;for(Km={},Ls.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Ng=function(e){return!!(e._initted||e._startAt||e.add)},XM=function(e,t,i,r){Ls.length&&!yn&&ld(),e.render(t,i,!!(yn&&t<0&&Ng(e))),Ls.length&&!yn&&ld()},jM=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Yb).length<2?t:mn(e)?e.trim():e},YM=function(e){return e},Pi=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},Qb=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},nl=function(e,t){for(var i in t)e[i]=t[i];return e},ox=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=wr(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},ud=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},Jl=function(e){var t=e.parent||kt,i=e.keyframes?Qb(Dn(e.keyframes)):Pi;if(ri(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},Jb=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},qM=function(e,t,i,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},zd=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},ks=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Mo=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},eL=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Zm=function(e,t,i,r){return e._startAt&&(yn?e._startAt.revert(yf):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},tL=function n(e){return!e||e._ts&&n(e.parent)},ax=function(e){return e._repeat?il(e._tTime,e=e.duration()+e._rDelay)*e:0},il=function(e,t){var i=Math.floor(e=Ot(e/t));return e&&i===e?i-1:i},cd=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Bd=function(e){return e._end=Ot(e._start+(e._tDur/Math.abs(e._ts||e._rts||wt)||0))},Hd=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Ot(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Bd(e),i._dirty||Mo(i,e)),e},$M=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=cd(e.rawTime(),t),(!t._dur||Zu(0,t.totalDuration(),i)-t._tTime>wt)&&t.render(i,!0)),Mo(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-wt}},vr=function(e,t,i,r){return t.parent&&ks(t),t._start=Ot((Zr(i)?i:i||e!==kt?Ii(e,i,t):e._time)+t._delay),t._end=Ot(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),qM(e,t,"_first","_last",e._sort?"_start":0),Qm(t)||(e._recent=t),r||$M(e,t),e._ts<0&&Hd(e,e._tTime),e},KM=function(e,t){return(Ri.ScrollTrigger||Pg("scrollTrigger",t))&&Ri.ScrollTrigger.create(t,e)},ZM=function(e,t,i,r,s){if(Ug(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!yn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&GM!==xi.frame)return Ls.push(e),e._lazy=[s,r],1},nL=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},Qm=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},iL=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&nL(e)&&!(!e._initted&&Qm(e))||(e._ts<0||e._dp._ts<0)&&!Qm(e))?0:1,a=e._rDelay,l=0,u,c,d;if(a&&e._repeat&&(l=Zu(0,e._tDur,t),c=il(l,a),e._yoyo&&c&1&&(o=1-o),c!==il(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||yn||r||e._zTime===wt||!t&&e._zTime){if(!e._initted&&ZM(e,t,r,i,l))return;for(d=e._zTime,e._zTime=t||(i?wt:0),i||(i=t&&!d),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;t<0&&Zm(e,t,i,!0),e._onUpdate&&!i&&Mi(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Mi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&ks(e,1),!i&&!yn&&(Mi(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},rL=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},rl=function(e,t,i,r){var s=e._repeat,o=Ot(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Ot(o*(s+1)+e._rDelay*s):o,a>0&&!r&&Hd(e,e._tTime=e._tDur*a),e.parent&&Bd(e),i||Mo(e.parent,e),e},lx=function(e){return e instanceof $n?Mo(e):rl(e,e._dur)},sL={_start:0,endTime:Lu,totalDuration:Lu},Ii=function n(e,t,i){var r=e.labels,s=e._recent||sL,o=e.duration()>=Gi?s.endTime(!1):e._dur,a,l,u;return mn(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),u=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),u&&i&&(l=l/100*(Dn(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},eu=function(e,t,i){var r=Zr(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=ri(l.vars.inherit)&&l.parent;o.immediateRender=ri(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new en(t[0],o,t[s+1])},js=function(e,t){return e||e===0?t(e):t},Zu=function(e,t,i){return i<e?e:i>t?t:i},bn=function(e,t){return!mn(e)||!(t=qb.exec(e))?"":t[1]},oL=function(e,t,i){return js(i,function(r){return Zu(e,t,r)})},Jm=[].slice,QM=function(e,t){return e&&wr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&wr(e[0]))&&!e.nodeType&&e!==pr},aL=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return mn(r)&&!t||QM(r,1)?(s=i).push.apply(s,Wi(r)):i.push(r)})||i},Wi=function(e,t,i){return Ut&&!t&&Ut.selector?Ut.selector(e):mn(e)&&!i&&($m||!sl())?Jm.call((t||Rg).querySelectorAll(e),0):Dn(e)?aL(e,i):QM(e)?Jm.call(e,0):e?[e]:[]},e_=function(e){return e=Wi(e)[0]||bu("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Wi(t,i.querySelectorAll?i:i===e?bu("Invalid scope")||Rg.createElement("div"):e)}},JM=function(e){return e.sort(function(){return .5-Math.random()})},e1=function(e){if(Gt(e))return e;var t=wr(e)?e:{each:e},i=Eo(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,u=t.axis,c=r,d=r;return mn(r)?c=d={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(c=r[0],d=r[1]),function(f,p,g){var _=(g||t).length,m=o[_],h,v,x,S,A,w,M,R,L;if(!m){if(L=t.grid==="auto"?0:(t.grid||[1,Gi])[1],!L){for(M=-Gi;M<(M=g[L++].getBoundingClientRect().left)&&L<_;);L<_&&L--}for(m=o[_]=[],h=l?Math.min(L,_)*c-.5:r%L,v=L===Gi?0:l?_*d/L-.5:r/L|0,M=0,R=Gi,w=0;w<_;w++)x=w%L-h,S=v-(w/L|0),m[w]=A=u?Math.abs(u==="y"?S:x):OM(x*x+S*S),A>M&&(M=A),A<R&&(R=A);r==="random"&&JM(m),m.max=M-R,m.min=R,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(L>_?_-1:u?u==="y"?_/L:L:Math.max(L,_/L))||0)*(r==="edges"?-1:1),m.b=_<0?s-_:s,m.u=bn(t.amount||t.each)||0,i=i&&_<0?yL(i):i}return _=(m[f]-m.min)/m.max||0,Ot(m.b+(i?i(_):_)*m.v)+m.u}},t_=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=Ot(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(Zr(i)?0:bn(i))}},t1=function(e,t){var i=Dn(e),r,s;return!i&&wr(e)&&(r=i=e.radius||Gi,e.values?(e=Wi(e.values),(s=!Zr(e[0]))&&(r*=r)):e=t_(e.increment)),js(t,i?Gt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),u=Gi,c=0,d=e.length,f,p;d--;)s?(f=e[d].x-a,p=e[d].y-l,f=f*f+p*p):f=Math.abs(e[d]-a),f<u&&(u=f,c=d);return c=!r||u<=r?e[c]:o,s||c===o||Zr(o)?c:c+bn(o)}:t_(e))},n1=function(e,t,i,r){return js(Dn(e)?!t:i===!0?!!(i=0):!r,function(){return Dn(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},lL=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},uL=function(e,t){return function(i){return e(parseFloat(i))+(t||bn(i))}},cL=function(e,t,i){return r1(e,t,0,1,i)},i1=function(e,t,i){return js(i,function(r){return e[~~t(r)]})},fL=function n(e,t,i){var r=t-e;return Dn(e)?i1(e,n(0,e.length),t):js(i,function(s){return(r+(s-e)%r)%r+e})},dL=function n(e,t,i){var r=t-e,s=r*2;return Dn(e)?i1(e,n(0,e.length-1),t):js(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},Du=function(e){return e.replace(Xb,function(t){var i=t.indexOf("[")+1,r=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(jb);return n1(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},r1=function(e,t,i,r,s){var o=t-e,a=r-i;return js(s,function(l){return i+((l-e)/o*a||0)})},hL=function n(e,t,i,r){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var o=mn(e),a={},l,u,c,d,f;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(Dn(e)&&!Dn(t)){for(c=[],d=e.length,f=d-2,u=1;u<d;u++)c.push(n(e[u-1],e[u]));d--,s=function(g){g*=d;var _=Math.min(f,~~g);return c[_](g-_)},i=t}else r||(e=nl(Dn(e)?[]:{},e));if(!c){for(l in t)Ig.call(a,e,l,"get",t[l]);s=function(g){return kg(g,a)||(o?e.p:e)}}}return js(i,s)},ux=function(e,t,i){var r=e.labels,s=Gi,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Mi=function(e,t,i){var r=e.vars,s=r[t],o=Ut,a=e._ctx,l,u,c;if(s)return l=r[t+"Params"],u=r.callbackScope||e,i&&Ls.length&&ld(),a&&(Ut=a),c=l?s.apply(u,l):s.call(u),Ut=o,c},Fl=function(e){return ks(e),e.scrollTrigger&&e.scrollTrigger.kill(!!yn),e.progress()<1&&Mi(e,"onInterrupt"),e},wa,s1=[],o1=function(e){if(e)if(e=!e.name&&e.default||e,Cg()||e.headless){var t=e.name,i=Gt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:Lu,render:kg,add:Ig,kill:bL,modifier:PL,rawVars:0},o={targetTest:0,get:0,getSetter:Fg,aliases:{},register:0};if(sl(),e!==r){if(gi[t])return;Pi(r,Pi(ud(e,s),o)),nl(r.prototype,nl(s,ud(e,o))),gi[r.prop=t]=r,e.targetTest&&(Sf.push(r),bg[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}VM(t,r),e.register&&e.register(li,r,oi)}else s1.push(e)},Tt=255,kl={aqua:[0,Tt,Tt],lime:[0,Tt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Tt],navy:[0,0,128],white:[Tt,Tt,Tt],olive:[128,128,0],yellow:[Tt,Tt,0],orange:[Tt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Tt,0,0],pink:[Tt,192,203],cyan:[0,Tt,Tt],transparent:[Tt,Tt,Tt,0]},tp=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*Tt+.5|0},a1=function(e,t,i){var r=e?Zr(e)?[e>>16,e>>8&Tt,e&Tt]:0:kl.black,s,o,a,l,u,c,d,f,p,g;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),kl[e])r=kl[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Tt,r&Tt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Tt,e&Tt]}else if(e.substr(0,3)==="hsl"){if(r=g=e.match(rx),!t)l=+r[0]%360/360,u=+r[1]/100,c=+r[2]/100,o=c<=.5?c*(u+1):c+u-c*u,s=c*2-o,r.length>3&&(r[3]*=1),r[0]=tp(l+1/3,s,o),r[1]=tp(l,s,o),r[2]=tp(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(kM),i&&r.length<4&&(r[3]=1),r}else r=e.match(rx)||kl.transparent;r=r.map(Number)}return t&&!g&&(s=r[0]/Tt,o=r[1]/Tt,a=r[2]/Tt,d=Math.max(s,o,a),f=Math.min(s,o,a),c=(d+f)/2,d===f?l=u=0:(p=d-f,u=c>.5?p/(2-d-f):p/(d+f),l=d===s?(o-a)/p+(o<a?6:0):d===o?(a-s)/p+2:(s-o)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(c*100+.5)),i&&r.length<4&&(r[3]=1),r},l1=function(e){var t=[],i=[],r=-1;return e.split(Ds).forEach(function(s){var o=s.match(Ta)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},cx=function(e,t,i){var r="",s=(e+r).match(Ds),o=t?"hsla(":"rgba(",a=0,l,u,c,d;if(!s)return e;if(s=s.map(function(f){return(f=a1(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(c=l1(e),l=i.c,l.join(r)!==c.c.join(r)))for(u=e.replace(Ds,"1").split(Ta),d=u.length-1;a<d;a++)r+=u[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(c.length?c:s.length?s:i).shift());if(!u)for(u=e.split(Ds),d=u.length-1;a<d;a++)r+=u[a]+s[a];return r+u[d]},Ds=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in kl)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),pL=/hsl[a]?\(/,u1=function(e){var t=e.join(" "),i;if(Ds.lastIndex=0,Ds.test(t))return i=pL.test(t),e[1]=cx(e[1],i),e[0]=cx(e[0],i,l1(e[1])),!0},Nu,xi=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,u,c,d,f,p,g=function _(m){var h=n()-r,v=m===!0,x,S,A,w;if((h>e||h<0)&&(i+=h-t),r+=h,A=r-i,x=A-o,(x>0||v)&&(w=++d.frame,f=A-d.time*1e3,d.time=A=A/1e3,o+=x+(x>=s?4:s-x),S=1),v||(l=u(_)),S)for(p=0;p<a.length;p++)a[p](A,f,w,m)};return d={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){BM&&(!$m&&Cg()&&(pr=$m=window,Rg=pr.document||{},Ri.gsap=li,(pr.gsapVersions||(pr.gsapVersions=[])).push(li.version),HM(ad||pr.GreenSockGlobals||!pr.gsap&&pr||{}),s1.forEach(o1)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),u=c||function(m){return setTimeout(m,o-d.time*1e3+1|0)},Nu=1,g(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),Nu=0,u=Lu},lagSmoothing:function(m,h){e=m||1/0,t=Math.min(h||33,e)},fps:function(m){s=1e3/(m||240),o=d.time*1e3+s},add:function(m,h,v){var x=h?function(S,A,w,M){m(S,A,w,M),d.remove(x)}:m;return d.remove(m),a[v?"unshift":"push"](x),sl(),x},remove:function(m,h){~(h=a.indexOf(m))&&a.splice(h,1)&&p>=h&&p--},_listeners:a},d}(),sl=function(){return!Nu&&xi.wake()},ct={},mL=/^[\d.\-M][\d.\-,\s]/,_L=/["']/g,gL=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,u;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),t[r]=isNaN(u)?u.replace(_L,"").trim():+u,r=l.substr(a+1).trim();return t},vL=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},xL=function(e){var t=(e+"").split("("),i=ct[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[gL(t[1])]:vL(e).split(",").map(jM)):ct._CE&&mL.test(e)?ct._CE("",e):i},yL=function(e){return function(t){return 1-e(1-t)}},Eo=function(e,t){return e&&(Gt(e)?e:ct[e]||xL(e))||t},Bo=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return si(e,function(a){ct[a]=Ri[a]=s,ct[o=a.toLowerCase()]=i;for(var l in s)ct[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ct[a+"."+l]=s[l]}),s},c1=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},np=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/qm*(Math.asin(1/r)||0),a=function(c){return c===1?1:r*Math.pow(2,-10*c)*Wb((c-o)*s)+1},l=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:c1(a);return s=qm/s,l.config=function(u,c){return n(e,u,c)},l},ip=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:c1(i);return r.config=function(s){return n(e,s)},r};si("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;Bo(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});ct.Linear.easeNone=ct.none=ct.Linear.easeIn;Bo("Elastic",np("in"),np("out"),np());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};Bo("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Bo("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});Bo("Circ",function(n){return-(OM(1-n*n)-1)});Bo("Sine",function(n){return n===1?1:-Gb(n*Hb)+1});Bo("Back",ip("in"),ip("out"),ip());ct.SteppedEase=ct.steps=Ri.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-wt;return function(a){return((r*Zu(0,o,a)|0)+s)*i}}};Pu.ease=ct["quad.out"];si("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return Lg+=n+","+n+"Params,"});var f1=function(e,t){this.id=Vb++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:WM,this.set=t?t.getSetter:Fg},Iu=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,rl(this,+t.duration,1,1),this.data=t.data,Ut&&(this._ctx=Ut,Ut.data.push(this)),Nu||xi.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,rl(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(sl(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Hd(this,i),!s._dp||s.parent||$M(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&vr(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===wt||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),XM(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+ax(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+ax(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?il(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-wt?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?cd(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-wt?0:this._rts,this.totalTime(Zu(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),Bd(this),eL(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(sl(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==wt&&(this._tTime-=wt)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=Ot(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&vr(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(ri(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?cd(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=Kb);var r=yn;return yn=i,Ng(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),yn=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,lx(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,lx(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Ii(this,i),ri(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,ri(r)),this._dur||(this._zTime=-wt),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-wt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-wt,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-wt)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this,s=r._prom;return new Promise(function(o){var a=Gt(i)?i:YM,l=function(){var c=r.then;r.then=null,s&&s(),Gt(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=c),o(a),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){Fl(this)},n}();Pi(Iu.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-wt,_prom:0,_ps:!1,_rts:1});var $n=function(n){UM(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=ri(i.sortChildren),kt&&vr(i.parent||kt,Nr(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&KM(Nr(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return eu(0,arguments,this),this},t.from=function(r,s,o){return eu(1,arguments,this),this},t.fromTo=function(r,s,o,a){return eu(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,Jl(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new en(r,s,Ii(this,o),1),this},t.call=function(r,s,o){return vr(this,en.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,u,c){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new en(r,o,Ii(this,l)),this},t.staggerFrom=function(r,s,o,a,l,u,c){return o.runBackwards=1,Jl(o).immediateRender=ri(o.immediateRender),this.staggerTo(r,s,o,a,l,u,c)},t.staggerFromTo=function(r,s,o,a,l,u,c,d){return a.startAt=o,Jl(a).immediateRender=ri(a.immediateRender),this.staggerTo(r,s,a,l,u,c,d)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=r<=0?0:Ot(r),d=this._zTime<0!=r<0&&(this._initted||!u),f,p,g,_,m,h,v,x,S,A,w,M;if(this!==kt&&c>l&&r>=0&&(c=l),c!==this._tTime||o||d){if(a!==this._time&&u&&(c+=this._time-a,r+=this._time-a),f=c,S=this._start,x=this._ts,h=!x,d&&(u||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(w=this._yoyo,m=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(f=Ot(c%m),c===l?(_=this._repeat,f=u):(A=Ot(c/m),_=~~A,_&&_===A&&(f=u,_--),f>u&&(f=u)),A=il(this._tTime,m),!a&&this._tTime&&A!==_&&this._tTime-A*m-this._dur<=0&&(A=_),w&&_&1&&(f=u-f,M=1),_!==A&&!this._lock){var R=w&&A&1,L=R===(w&&_&1);if(_<A&&(R=!R),a=R?0:c%u?u:c,this._lock=1,this.render(a||(M?0:Ot(_*m)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&Mi(this,"onRepeat"),this.vars.repeatRefresh&&!M&&(this.invalidate()._lock=1,A=_),a&&a!==this._time||h!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,L&&(this._lock=2,a=R?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!M&&this.invalidate()),this._lock=0,!this._ts&&!h)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=rL(this,Ot(a),Ot(f)),v&&(c-=f-(f=v._start))),this._tTime=c,this._time=f,this._act=!!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&c&&u&&!s&&!A&&(Mi(this,"onStart"),this._tTime!==c))return this;if(f>=a&&r>=0)for(p=this._first;p;){if(g=p._next,(p._act||f>=p._start)&&p._ts&&v!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(f-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(f-p._start)*p._ts,s,o),f!==this._time||!this._ts&&!h){v=0,g&&(c+=this._zTime=-wt);break}}p=g}else{p=this._last;for(var y=r<0?r:f;p;){if(g=p._prev,(p._act||y<=p._end)&&p._ts&&v!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(y-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(y-p._start)*p._ts,s,o||yn&&Ng(p)),f!==this._time||!this._ts&&!h){v=0,g&&(c+=this._zTime=y?-wt:wt);break}}p=g}}if(v&&!s&&(this.pause(),v.render(f>=a?0:-wt)._zTime=f>=a?1:-1,this._ts))return this._start=S,Bd(this),this.render(r,s,o);this._onUpdate&&!s&&Mi(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&a)&&(S===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&ks(this,1),!s&&!(r<0&&!a)&&(c||a||!l)&&(Mi(this,c===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(Zr(s)||(s=Ii(this,s,r)),!(r instanceof Iu)){if(Dn(r))return r.forEach(function(a){return o.add(a,s)}),this;if(mn(r))return this.addLabel(r,s);if(Gt(r))r=en.delayedCall(0,r);else return this}return this!==r?vr(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Gi);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof en?s&&l.push(u):(o&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,s,o)))),u=u._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return mn(r)?this.removeLabel(r):Gt(r)?this.killTweensOf(r):(r.parent===this&&zd(this,r),r===this._recent&&(this._recent=this._last),Mo(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ot(xi.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Ii(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=en.delayedCall(0,s||Lu,o);return a.data="isPause",this._hasPause=1,vr(this,a,Ii(this,r))},t.removePause=function(r){var s=this._first;for(r=Ii(this,r);s;)s._start===r&&s.data==="isPause"&&ks(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)_s!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=Wi(r),l=this._first,u=Zr(s),c;l;)l instanceof en?Zb(l._targets,a)&&(u?(!_s||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(c=l.getTweensOf(a,s)).length&&o.push.apply(o,c),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Ii(o,r),l=s,u=l.startAt,c=l.onStart,d=l.onStartParams,f=l.immediateRender,p,g=en.to(o,Pi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||wt,onStart:function(){if(o.pause(),!p){var m=s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());g._dur!==m&&rl(g,m,0,1).render(g._time,!0,!0),p=1}c&&c.apply(g,d||[])}},s));return f?g.render(0):g},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,Pi({startAt:{time:Ii(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),ux(this,Ii(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),ux(this,Ii(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+wt)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,u;for(r=Ot(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(u in l)l[u]>=o&&(l[u]+=r);return Mo(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Mo(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=Gi,u,c,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(d=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,vr(o,a,c-a._delay,1)._lock=0):l=c,c<0&&a._ts&&(s-=c,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=Ot(c/o._ts),o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=u;rl(o,o===kt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(kt._ts&&(XM(kt,cd(r,kt)),GM=xi.frame),xi.frame>=sx){sx+=Ai.autoSleep||120;var s=kt._first;if((!s||!s._ts)&&Ai.autoSleep&&xi._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||xi.sleep()}}},e}(Iu);Pi($n.prototype,{_lock:0,_hasPause:0,_forcing:0});var SL=function(e,t,i,r,s,o,a){var l=new oi(this._pt,e,t,0,1,g1,null,s),u=0,c=0,d,f,p,g,_,m,h,v;for(l.b=i,l.e=r,i+="",r+="",(h=~r.indexOf("random("))&&(r=Du(r)),o&&(v=[i,r],o(v,e,t),i=v[0],r=v[1]),f=i.match(Jh)||[];d=Jh.exec(r);)g=d[0],_=r.substring(u,d.index),p?p=(p+1)%5:_.substr(-5)==="rgba("&&(p=1),g!==f[c++]&&(m=parseFloat(f[c-1])||0,l._pt={_next:l._pt,p:_||c===1?_:",",s:m,c:g.charAt(1)==="="?Oa(m,g)-m:parseFloat(g)-m,m:p&&p<4?Math.round:0},u=Jh.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=a,(zM.test(r)||h)&&(l.e=0),this._pt=l,l},Ig=function(e,t,i,r,s,o,a,l,u,c){Gt(r)&&(r=r(s||0,e,o));var d=e[t],f=i!=="get"?i:Gt(d)?u?e[t.indexOf("set")||!Gt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():d,p=Gt(d)?u?AL:m1:Og,g;if(mn(r)&&(~r.indexOf("random(")&&(r=Du(r)),r.charAt(1)==="="&&(g=Oa(f,r)+(bn(f)||0),(g||g===0)&&(r=g))),!c||f!==r||n_)return!isNaN(f*r)&&r!==""?(g=new oi(this._pt,e,t,+f||0,r-(f||0),typeof d=="boolean"?RL:_1,0,p),u&&(g.fp=u),a&&g.modifier(a,this,e),this._pt=g):(!d&&!(t in e)&&Pg(t,r),SL.call(this,e,t,f,r,p,l||Ai.stringFilter,u))},ML=function(e,t,i,r,s){if(Gt(e)&&(e=tu(e,s,t,i,r)),!wr(e)||e.style&&e.nodeType||Dn(e)||FM(e))return mn(e)?tu(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=tu(e[a],s,t,i,r);return o},d1=function(e,t,i,r,s,o){var a,l,u,c;if(gi[e]&&(a=new gi[e]).init(s,a.rawVars?t[e]:ML(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new oi(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==wa))for(u=i._ptLookup[i._targets.indexOf(s)],c=a._props.length;c--;)u[a._props[c]]=l;return a},_s,n_,Ug=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,u=r.onUpdate,c=r.runBackwards,d=r.yoyoEase,f=r.keyframes,p=r.autoRevert,g=e._dur,_=e._startAt,m=e._targets,h=e.parent,v=h&&h.data==="nested"?h.vars.targets:m,x=e._overwrite==="auto"&&!wg,S=e.timeline,A=r.easeReverse||d,w,M,R,L,y,T,U,B,j,Z,G,Y,N;if(S&&(!f||!s)&&(s="none"),e._ease=Eo(s,Pu.ease),e._rEase=A&&(Eo(A)||e._ease),e._from=!S&&!!r.runBackwards,e._from&&(e.ratio=1),!S||f&&!r.stagger){if(B=m[0]?So(m[0]).harness:0,Y=B&&r[B.prop],w=ud(r,bg),_&&(_._zTime<0&&_.progress(1),t<0&&c&&a&&!p?_.render(-1,!0):_.revert(c&&g?yf:$b),_._lazy=0),o){if(ks(e._startAt=en.set(m,Pi({data:"isStart",overwrite:!1,parent:h,immediateRender:!0,lazy:!_&&ri(l),startAt:null,delay:0,onUpdate:u&&function(){return Mi(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(yn||!a&&!p)&&e._startAt.revert(yf),a&&g&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(c&&g&&!_){if(t&&(a=!1),R=Pi({overwrite:!1,data:"isFromStart",lazy:a&&!_&&ri(l),immediateRender:a,stagger:0,parent:h},w),Y&&(R[B.prop]=Y),ks(e._startAt=en.set(m,R)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(yn?e._startAt.revert(yf):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,wt,wt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&ri(l)||l&&!g,M=0;M<m.length;M++){if(y=m[M],U=y._gsap||Dg(m)[M]._gsap,e._ptLookup[M]=Z={},Km[U.id]&&Ls.length&&ld(),G=v===m?M:v.indexOf(y),B&&(j=new B).init(y,Y||w,e,G,v)!==!1&&(e._pt=L=new oi(e._pt,y,j.name,0,1,j.render,j,0,j.priority),j._props.forEach(function(K){Z[K]=L}),j.priority&&(T=1)),!B||Y)for(R in w)gi[R]&&(j=d1(R,w,e,G,y,v))?j.priority&&(T=1):Z[R]=L=Ig.call(e,y,R,"get",w[R],G,v,0,r.stringFilter);e._op&&e._op[M]&&e.kill(y,e._op[M]),x&&e._pt&&(_s=e,kt.killTweensOf(y,Z,e.globalTime(t)),N=!e.parent,_s=0),e._pt&&l&&(Km[U.id]=1)}T&&v1(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!N,f&&t<=0&&S.render(Gi,!0,!0)},EL=function(e,t,i,r,s,o,a,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,d,f,p;if(!u)for(u=e._ptCache[t]=[],f=e._ptLookup,p=e._targets.length;p--;){if(c=f[p][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return n_=1,e.vars[t]="+=0",Ug(e,a),n_=0,l?bu(t+" not eligible for reset. Try splitting into individual properties"):1;u.push(c)}for(p=u.length;p--;)d=u[p],c=d._pt||d,c.s=(r||r===0)&&!s?r:c.s+(r||0)+o*c.c,c.c=i-c.s,d.e&&(d.e=qt(i)+bn(d.e)),d.b&&(d.b=c.s+bn(d.b))},TL=function(e,t){var i=e[0]?So(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=nl({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},wL=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(Dn(t))a=i[e]||(i[e]=[]),t.forEach(function(l,u){return a.push({t:u/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},tu=function(e,t,i,r,s){return Gt(e)?e.call(t,i,r,s):mn(e)&&~e.indexOf("random(")?Du(e):e},h1=Lg+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",p1={};si(h1+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return p1[n]=1});var en=function(n){UM(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:Jl(r))||this;var l=a.vars,u=l.duration,c=l.delay,d=l.immediateRender,f=l.stagger,p=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,h=r.parent||kt,v=(Dn(i)||FM(i)?Zr(i[0]):"length"in r)?[i]:Wi(i),x,S,A,w,M,R,L,y;if(a._targets=v.length?Dg(v):bu("GSAP target "+i+" not found. https://gsap.com",!Ai.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,g||f||zc(u)||zc(c)){r=a.vars;var T=r.easeReverse||r.yoyoEase;if(x=a.timeline=new $n({data:"nested",defaults:_||{},targets:h&&h.data==="nested"?h.vars.targets:v}),x.kill(),x.parent=x._dp=Nr(a),x._start=0,f||zc(u)||zc(c)){if(w=v.length,L=f&&e1(f),wr(f))for(M in f)~h1.indexOf(M)&&(y||(y={}),y[M]=f[M]);for(S=0;S<w;S++)A=ud(r,p1),A.stagger=0,T&&(A.easeReverse=T),y&&nl(A,y),R=v[S],A.duration=+tu(u,Nr(a),S,R,v),A.delay=(+tu(c,Nr(a),S,R,v)||0)-a._delay,!f&&w===1&&A.delay&&(a._delay=c=A.delay,a._start+=c,A.delay=0),x.to(R,A,L?L(S,R,v):0),x._ease=ct.none;x.duration()?u=c=0:a.timeline=0}else if(g){Jl(Pi(x.vars.defaults,{ease:"none"})),x._ease=Eo(g.ease||r.ease||"none");var U=0,B,j,Z;if(Dn(g))g.forEach(function(G){return x.to(v,G,">")}),x.duration();else{A={};for(M in g)M==="ease"||M==="easeEach"||wL(M,g[M],A,g.easeEach);for(M in A)for(B=A[M].sort(function(G,Y){return G.t-Y.t}),U=0,S=0;S<B.length;S++)j=B[S],Z={ease:j.e,duration:(j.t-(S?B[S-1].t:0))/100*u},Z[M]=j.v,x.to(v,Z,U),U+=Z.duration;x.duration()<u&&x.to({},{duration:u-x.duration()})}}u||a.duration(u=x.duration())}else a.timeline=0;return p===!0&&!wg&&(_s=Nr(a),kt.killTweensOf(v),_s=0),vr(h,Nr(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(d||!u&&!g&&a._start===Ot(h._time)&&ri(d)&&tL(Nr(a))&&h.data!=="nested")&&(a._tTime=-wt,a.render(Math.max(0,-c)||0)),m&&KM(Nr(a),m),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,u=this._dur,c=r<0,d=r>l-wt&&!c?l:r<wt?0:r,f,p,g,_,m,h,v,x;if(!u)iL(this,r,s,o);else if(d!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(f=d,x=this.timeline,this._repeat){if(_=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(_*100+r,s,o);if(f=Ot(d%_),d===l?(g=this._repeat,f=u):(m=Ot(d/_),g=~~m,g&&g===m?(f=u,g--):f>u&&(f=u)),h=this._yoyo&&g&1,h&&(f=u-f),m=il(this._tTime,_),f===a&&!o&&this._initted&&g===m)return this._tTime=d,this;g!==m&&this.vars.repeatRefresh&&!h&&!this._lock&&f!==_&&this._initted&&(this._lock=o=1,this.render(Ot(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(ZM(this,c?r:f,o,s,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(u!==this._dur)return this.render(r,s,o)}if(this._rEase){var S=f<a;if(S!==this._inv){var A=S?a:u-a;this._inv=S,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=A?(S?-1:1)/A:0,this._invScale=S?-this.ratio:1-this.ratio,this._invEase=S?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(f/u);if(this._from&&(this.ratio=v=1-v),this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&d&&!s&&!m&&(Mi(this,"onStart"),this._tTime!==d))return this;for(p=this._pt;p;)p.r(v,p.d),p=p._next;x&&x.render(r<0?r:x._dur*x._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(c&&Zm(this,r,s,o),Mi(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&Mi(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(c&&!this._onUpdate&&Zm(this,r,!0,!0),(r||!u)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&ks(this,1),!s&&!(c&&!a)&&(d||a||h)&&(Mi(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){Nu||xi.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Ug(this,u),c=this._ease(u/this._dur),EL(this,r,s,o,a,c,u,l)?this.resetTo(r,s,o,a,1):(Hd(this,0),this.parent||qM(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Fl(this):this.scrollTrigger&&this.scrollTrigger.kill(!!yn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,_s&&_s.vars.overwrite!==!0)._first||Fl(this),this.parent&&o!==this.timeline.totalDuration()&&rl(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Wi(r):a,u=this._ptLookup,c=this._pt,d,f,p,g,_,m,h;if((!s||s==="all")&&Jb(a,l))return s==="all"&&(this._pt=0),Fl(this);for(d=this._op=this._op||[],s!=="all"&&(mn(s)&&(_={},si(s,function(v){return _[v]=1}),s=_),s=TL(a,s)),h=a.length;h--;)if(~l.indexOf(a[h])){f=u[h],s==="all"?(d[h]=s,g=f,p={}):(p=d[h]=d[h]||{},g=s);for(_ in g)m=f&&f[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&zd(this,m,"_pt"),delete f[_]),p!=="all"&&(p[_]=1)}return this._initted&&!this._pt&&c&&Fl(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return eu(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return eu(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return kt.killTweensOf(r,s,o)},e}(Iu);Pi(en.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});si("staggerTo,staggerFrom,staggerFromTo",function(n){en[n]=function(){var e=new $n,t=Jm.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var Og=function(e,t,i){return e[t]=i},m1=function(e,t,i){return e[t](i)},AL=function(e,t,i,r){return e[t](r.fp,i)},CL=function(e,t,i){return e.setAttribute(t,i)},Fg=function(e,t){return Gt(e[t])?m1:Ag(e[t])&&e.setAttribute?CL:Og},_1=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},RL=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},g1=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},kg=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},PL=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},bL=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?zd(this,t,"_pt"):t.dep||(i=1),t=r;return!i},LL=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},v1=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},oi=function(){function n(t,i,r,s,o,a,l,u,c){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||_1,this.d=l||this,this.set=u||Og,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=LL,this.m=i,this.mt=s,this.tween=r},n}();si(Lg+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(n){return bg[n]=1});Ri.TweenMax=Ri.TweenLite=en;Ri.TimelineLite=Ri.TimelineMax=$n;kt=new $n({sortChildren:!1,defaults:Pu,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ai.stringFilter=u1;var To=[],Mf={},DL=[],fx=0,NL=0,rp=function(e){return(Mf[e]||DL).map(function(t){return t()})},i_=function(){var e=Date.now(),t=[];e-fx>2&&(rp("matchMediaInit"),To.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,u;for(a in r)o=pr.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,u=1);u&&(i.revert(),l&&t.push(i))}),rp("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),fx=e,rp("matchMedia"))},x1=function(){function n(t,i){this.selector=i&&e_(i),this.data=[],this._r=[],this.isReverted=!1,this.id=NL++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){Gt(i)&&(s=r,r=i,i=Gt);var o=this,a=function(){var u=Ut,c=o.selector,d;return u&&u!==o&&u.data.push(o),s&&(o.selector=e_(s)),Ut=o,d=r.apply(o,arguments),Gt(d)&&o._r.push(d),Ut=u,o.selector=c,o.isReverted=!1,d};return o.last=a,i===Gt?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=Ut;Ut=null,i(this),Ut=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof en&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,u;l--;)u=s.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}));for(a.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,d){return d.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),l=s.data.length;l--;)u=s.data[l],u instanceof $n?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof en)&&u.revert&&u.revert(i);s._r.forEach(function(c){return c(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=To.length;o--;)To[o].id===this.id&&To.splice(o,1)},e.revert=function(i){this.kill(i||{})},n}(),IL=function(){function n(t){this.contexts=[],this.scope=t,Ut&&Ut.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){wr(i)||(i={matches:i});var o=new x1(0,s||this.scope),a=o.conditions={},l,u,c;Ut&&!o.selector&&(o.selector=Ut.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(u in i)u==="all"?c=1:(l=pr.matchMedia(i[u]),l&&(To.indexOf(o)<0&&To.push(o),(a[u]=l.matches)&&(c=1),l.addListener?l.addListener(i_):l.addEventListener("change",i_)));return c&&r(o,function(d){return o.add(null,d)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),fd={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return o1(r)})},timeline:function(e){return new $n(e)},getTweensOf:function(e,t){return kt.getTweensOf(e,t)},getProperty:function(e,t,i,r){mn(e)&&(e=Wi(e)[0]);var s=So(e||{}).get,o=i?YM:jM;return i==="native"&&(i=""),e&&(t?o((gi[t]&&gi[t].get||s)(e,t,i,r)):function(a,l,u){return o((gi[a]&&gi[a].get||s)(e,a,l,u))})},quickSetter:function(e,t,i){if(e=Wi(e),e.length>1){var r=e.map(function(c){return li.quickSetter(c,t,i)}),s=r.length;return function(c){for(var d=s;d--;)r[d](c)}}e=e[0]||{};var o=gi[t],a=So(e),l=a.harness&&(a.harness.aliases||{})[t]||t,u=o?function(c){var d=new o;wa._pt=0,d.init(e,i?c+i:c,wa,0,[e]),d.render(1,d),wa._pt&&kg(1,wa)}:a.set(e,l);return o?u:function(c){return u(e,l,i?c+i:c,a,1)}},quickTo:function(e,t,i){var r,s=li.to(e,Pi((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),o=function(l,u,c){return s.resetTo(t,l,u,c)};return o.tween=s,o},isTweening:function(e){return kt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Eo(e.ease,Pu.ease)),ox(Pu,e||{})},config:function(e){return ox(Ai,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!gi[a]&&!Ri[a]&&bu(t+" effect requires "+a+" plugin.")}),ep[t]=function(a,l,u){return i(Wi(a),Pi(l||{},s),u)},o&&($n.prototype[t]=function(a,l,u){return this.add(ep[t](a,wr(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){ct[e]=Eo(t)},parseEase:function(e,t){return arguments.length?Eo(e,t):ct},getById:function(e){return kt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new $n(e),r,s;for(i.smoothChildTiming=ri(e.smoothChildTiming),kt.remove(i),i._dp=0,i._time=i._tTime=kt._time,r=kt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof en&&r.vars.onComplete===r._targets[0]))&&vr(i,r,r._start-r._delay),r=s;return vr(kt,i,0),i},context:function(e,t){return e?new x1(e,t):Ut},matchMedia:function(e){return new IL(e)},matchMediaRefresh:function(){return To.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||i_()},addEventListener:function(e,t){var i=Mf[e]||(Mf[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=Mf[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:fL,wrapYoyo:dL,distribute:e1,random:n1,snap:t1,normalize:cL,getUnit:bn,clamp:oL,splitColor:a1,toArray:Wi,selector:e_,mapRange:r1,pipe:lL,unitize:uL,interpolate:hL,shuffle:JM},install:HM,effects:ep,ticker:xi,updateRoot:$n.updateRoot,plugins:gi,globalTimeline:kt,core:{PropTween:oi,globals:VM,Tween:en,Timeline:$n,Animation:Iu,getCache:So,_removeLinkedListItem:zd,reverting:function(){return yn},context:function(e){return e&&Ut&&(Ut.data.push(e),e._ctx=Ut),Ut},suppressOverwrites:function(e){return wg=e}}};si("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return fd[n]=en[n]});xi.add($n.updateRoot);wa=fd.to({},{duration:0});var UL=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},OL=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=UL(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},sp=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,u;if(mn(s)&&(l={},si(s,function(c){return l[c]=1}),s=l),t){l={};for(u in s)l[u]=t(s[u]);s=l}OL(a,s)}}}},li=fd.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)yn?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},sp("roundProps",t_),sp("modifiers"),sp("snap",t1))||fd;en.version=$n.version=li.version="3.15.0";BM=1;Cg()&&sl();ct.Power0;ct.Power1;ct.Power2;ct.Power3;ct.Power4;ct.Linear;ct.Quad;ct.Cubic;ct.Quart;ct.Quint;ct.Strong;ct.Elastic;ct.Back;ct.SteppedEase;ct.Bounce;ct.Sine;ct.Expo;ct.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var dx,gs,Fa,zg,go,hx,Bg,FL=function(){return typeof window<"u"},Qr={},so=180/Math.PI,ka=Math.PI/180,ia=Math.atan2,px=1e8,Hg=/([A-Z])/g,kL=/(left|right|width|margin|padding|x)/i,zL=/[\s,\(]\S/,xr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},r_=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},BL=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},HL=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},VL=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},GL=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},y1=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},S1=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},WL=function(e,t,i){return e.style[t]=i},XL=function(e,t,i){return e.style.setProperty(t,i)},jL=function(e,t,i){return e._gsap[t]=i},YL=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},qL=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},$L=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},zt="transform",ai=zt+"Origin",KL=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in Qr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=xr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=Ur(r,a)}):this.tfm[e]=o.x?o[e]:Ur(r,e),e===ai&&(this.tfm.zOrigin=o.zOrigin);else return xr.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf(zt)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(ai,t,"")),e=zt}(s||t)&&this.props.push(e,t,s[e])},M1=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},ZL=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Hg,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Bg(),(!s||!s.isStart)&&!i[zt]&&(M1(i),r.zOrigin&&i[ai]&&(i[ai]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},E1=function(e,t){var i={target:e,props:[],revert:ZL,save:KL};return e._gsap||li.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},T1,s_=function(e,t){var i=gs.createElementNS?gs.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):gs.createElement(e);return i&&i.style?i:gs.createElement(e)},Ei=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Hg,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,ol(t)||t,1)||""},mx="O,Moz,ms,Ms,Webkit".split(","),ol=function(e,t,i){var r=t||go,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(mx[o]+e in s););return o<0?null:(o===3?"ms":o>=0?mx[o]:"")+e},o_=function(){FL()&&window.document&&(dx=window,gs=dx.document,Fa=gs.documentElement,go=s_("div")||{style:{}},s_("div"),zt=ol(zt),ai=zt+"Origin",go.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",T1=!!ol("perspective"),Bg=li.core.reverting,zg=1)},_x=function(e){var t=e.ownerSVGElement,i=s_("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),Fa.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),Fa.removeChild(i),s},gx=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},w1=function(e){var t,i;try{t=e.getBBox()}catch{t=_x(e),i=1}return t&&(t.width||t.height)||i||(t=_x(e)),t&&!t.width&&!t.x&&!t.y?{x:+gx(e,["x","cx","x1"])||0,y:+gx(e,["y","cy","y1"])||0,width:0,height:0}:t},A1=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&w1(e))},zs=function(e,t){if(t){var i=e.style,r;t in Qr&&t!==ai&&(t=zt),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(Hg,"-$1").toLowerCase())):i.removeAttribute(t)}},vs=function(e,t,i,r,s,o){var a=new oi(e._pt,t,i,0,1,o?S1:y1);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},vx={deg:1,rad:1,turn:1},QL={grid:1,flex:1},Bs=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=go.style,l=kL.test(t),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),d=100,f=r==="px",p=r==="%",g,_,m,h;if(r===o||!s||vx[r]||vx[o])return s;if(o!=="px"&&!f&&(s=n(e,t,i,"px")),h=e.getCTM&&A1(e),(p||o==="%")&&(Qr[t]||~t.indexOf("adius")))return g=h?e.getBBox()[l?"width":"height"]:e[c],qt(p?s/g*d:s/100*g);if(a[l?"width":"height"]=d+(f?o:r),_=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!u?e:e.parentNode,h&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===gs||!_.appendChild)&&(_=gs.body),m=_._gsap,m&&p&&m.width&&l&&m.time===xi.time&&!m.uncache)return qt(s/m.width*d);if(p&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=d+r,g=e[c],v?e.style[t]=v:zs(e,t)}else(p||o==="%")&&!QL[Ei(_,"display")]&&(a.position=Ei(e,"position")),_===e&&(a.position="static"),_.appendChild(go),g=go[c],_.removeChild(go),a.position="absolute";return l&&p&&(m=So(_),m.time=xi.time,m.width=_[c]),qt(f?g*s/d:g&&s?d/g*s:0)},Ur=function(e,t,i,r){var s;return zg||o_(),t in xr&&t!=="transform"&&(t=xr[t],~t.indexOf(",")&&(t=t.split(",")[0])),Qr[t]&&t!=="transform"?(s=Ou(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:hd(Ei(e,ai))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=dd[t]&&dd[t](e,t,i)||Ei(e,t)||WM(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Bs(e,t,s,i)+i:s},JL=function(e,t,i,r){if(!i||i==="none"){var s=ol(t,e,1),o=s&&Ei(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=Ei(e,"borderTopColor"))}var a=new oi(this._pt,e.style,t,0,1,g1),l=0,u=0,c,d,f,p,g,_,m,h,v,x,S,A;if(a.b=i,a.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=Ei(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(_=e.style[t],e.style[t]=r,r=Ei(e,t)||r,_?e.style[t]=_:zs(e,t)),c=[i,r],u1(c),i=c[0],r=c[1],f=i.match(Ta)||[],A=r.match(Ta)||[],A.length){for(;d=Ta.exec(r);)m=d[0],v=r.substring(l,d.index),g?g=(g+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(g=1),m!==(_=f[u++]||"")&&(p=parseFloat(_)||0,S=_.substr((p+"").length),m.charAt(1)==="="&&(m=Oa(p,m)+S),h=parseFloat(m),x=m.substr((h+"").length),l=Ta.lastIndex-x.length,x||(x=x||Ai.units[t]||S,l===r.length&&(r+=x,a.e+=x)),S!==x&&(p=Bs(e,t,_,x)||0),a._pt={_next:a._pt,p:v||u===1?v:",",s:p,c:h-p,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?S1:y1;return zM.test(r)&&(a.e=0),this._pt=a,a},xx={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},eD=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=xx[i]||i,t[1]=xx[r]||r,t.join(" ")},tD=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,u;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)a=s[u],Qr[a]&&(l=1,a=a==="transformOrigin"?ai:zt),zs(i,a);l&&(zs(i,zt),o&&(o.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Ou(i,1),o.uncache=1,M1(r)))}},dd={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new oi(e._pt,t,i,0,0,tD);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},Uu=[1,0,0,1,0,0],C1={},R1=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},yx=function(e){var t=Ei(e,zt);return R1(t)?Uu:t.substr(7).match(kM).map(qt)},Vg=function(e,t){var i=e._gsap||So(e),r=e.style,s=yx(e),o,a,l,u;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Uu:s):(s===Uu&&!e.offsetParent&&e!==Fa&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(u=1,a=e.nextElementSibling,Fa.appendChild(e)),s=yx(e),l?r.display=l:zs(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):Fa.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},a_=function(e,t,i,r,s,o){var a=e._gsap,l=s||Vg(e,!0),u=a.xOrigin||0,c=a.yOrigin||0,d=a.xOffset||0,f=a.yOffset||0,p=l[0],g=l[1],_=l[2],m=l[3],h=l[4],v=l[5],x=t.split(" "),S=parseFloat(x[0])||0,A=parseFloat(x[1])||0,w,M,R,L;i?l!==Uu&&(M=p*m-g*_)&&(R=S*(m/M)+A*(-_/M)+(_*v-m*h)/M,L=S*(-g/M)+A*(p/M)-(p*v-g*h)/M,S=R,A=L):(w=w1(e),S=w.x+(~x[0].indexOf("%")?S/100*w.width:S),A=w.y+(~(x[1]||x[0]).indexOf("%")?A/100*w.height:A)),r||r!==!1&&a.smooth?(h=S-u,v=A-c,a.xOffset=d+(h*p+v*_)-h,a.yOffset=f+(h*g+v*m)-v):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=A,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[ai]="0px 0px",o&&(vs(o,a,"xOrigin",u,S),vs(o,a,"yOrigin",c,A),vs(o,a,"xOffset",d,a.xOffset),vs(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",S+" "+A)},Ou=function(e,t){var i=e._gsap||new f1(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),u=Ei(e,ai)||"0",c,d,f,p,g,_,m,h,v,x,S,A,w,M,R,L,y,T,U,B,j,Z,G,Y,N,K,P,ne,Se,He,q,te;return c=d=f=_=m=h=v=x=S=0,p=g=1,i.svg=!!(e.getCTM&&A1(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[zt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[zt]!=="none"?l[zt]:"")),r.scale=r.rotate=r.translate="none"),M=Vg(e,i.svg),i.svg&&(i.uncache?(N=e.getBBox(),u=i.xOrigin-N.x+"px "+(i.yOrigin-N.y)+"px",Y=""):Y=!t&&e.getAttribute("data-svg-origin"),a_(e,Y||u,!!Y||i.originIsAbsolute,i.smooth!==!1,M)),A=i.xOrigin||0,w=i.yOrigin||0,M!==Uu&&(T=M[0],U=M[1],B=M[2],j=M[3],c=Z=M[4],d=G=M[5],M.length===6?(p=Math.sqrt(T*T+U*U),g=Math.sqrt(j*j+B*B),_=T||U?ia(U,T)*so:0,v=B||j?ia(B,j)*so+_:0,v&&(g*=Math.abs(Math.cos(v*ka))),i.svg&&(c-=A-(A*T+w*B),d-=w-(A*U+w*j))):(te=M[6],He=M[7],P=M[8],ne=M[9],Se=M[10],q=M[11],c=M[12],d=M[13],f=M[14],R=ia(te,Se),m=R*so,R&&(L=Math.cos(-R),y=Math.sin(-R),Y=Z*L+P*y,N=G*L+ne*y,K=te*L+Se*y,P=Z*-y+P*L,ne=G*-y+ne*L,Se=te*-y+Se*L,q=He*-y+q*L,Z=Y,G=N,te=K),R=ia(-B,Se),h=R*so,R&&(L=Math.cos(-R),y=Math.sin(-R),Y=T*L-P*y,N=U*L-ne*y,K=B*L-Se*y,q=j*y+q*L,T=Y,U=N,B=K),R=ia(U,T),_=R*so,R&&(L=Math.cos(R),y=Math.sin(R),Y=T*L+U*y,N=Z*L+G*y,U=U*L-T*y,G=G*L-Z*y,T=Y,Z=N),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,h=180-h),p=qt(Math.sqrt(T*T+U*U+B*B)),g=qt(Math.sqrt(G*G+te*te)),R=ia(Z,G),v=Math.abs(R)>2e-4?R*so:0,S=q?1/(q<0?-q:q):0),i.svg&&(Y=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!R1(Ei(e,zt)),Y&&e.setAttribute("transform",Y))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(p*=-1,v+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,v+=v<=0?180:-180)),t=t||i.uncache,i.x=c-((i.xPercent=c&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=d-((i.yPercent=d&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=f+o,i.scaleX=qt(p),i.scaleY=qt(g),i.rotation=qt(_)+a,i.rotationX=qt(m)+a,i.rotationY=qt(h)+a,i.skewX=v+a,i.skewY=x+a,i.transformPerspective=S+o,(i.zOrigin=parseFloat(u.split(" ")[2])||!t&&i.zOrigin||0)&&(r[ai]=hd(u)),i.xOffset=i.yOffset=0,i.force3D=Ai.force3D,i.renderTransform=i.svg?iD:T1?P1:nD,i.uncache=0,i},hd=function(e){return(e=e.split(" "))[0]+" "+e[1]},op=function(e,t,i){var r=bn(t);return qt(parseFloat(t)+parseFloat(Bs(e,"x",i+"px",r)))+r},nD=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,P1(e,t)},Js="0deg",Rl="0px",eo=") ",P1=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,u=i.rotation,c=i.rotationY,d=i.rotationX,f=i.skewX,p=i.skewY,g=i.scaleX,_=i.scaleY,m=i.transformPerspective,h=i.force3D,v=i.target,x=i.zOrigin,S="",A=h==="auto"&&e&&e!==1||h===!0;if(x&&(d!==Js||c!==Js)){var w=parseFloat(c)*ka,M=Math.sin(w),R=Math.cos(w),L;w=parseFloat(d)*ka,L=Math.cos(w),o=op(v,o,M*L*-x),a=op(v,a,-Math.sin(w)*-x),l=op(v,l,R*L*-x+x)}m!==Rl&&(S+="perspective("+m+eo),(r||s)&&(S+="translate("+r+"%, "+s+"%) "),(A||o!==Rl||a!==Rl||l!==Rl)&&(S+=l!==Rl||A?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+eo),u!==Js&&(S+="rotate("+u+eo),c!==Js&&(S+="rotateY("+c+eo),d!==Js&&(S+="rotateX("+d+eo),(f!==Js||p!==Js)&&(S+="skew("+f+", "+p+eo),(g!==1||_!==1)&&(S+="scale("+g+", "+_+eo),v.style[zt]=S||"translate(0, 0)"},iD=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,u=i.skewX,c=i.skewY,d=i.scaleX,f=i.scaleY,p=i.target,g=i.xOrigin,_=i.yOrigin,m=i.xOffset,h=i.yOffset,v=i.forceCSS,x=parseFloat(o),S=parseFloat(a),A,w,M,R,L;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=ka,u*=ka,A=Math.cos(l)*d,w=Math.sin(l)*d,M=Math.sin(l-u)*-f,R=Math.cos(l-u)*f,u&&(c*=ka,L=Math.tan(u-c),L=Math.sqrt(1+L*L),M*=L,R*=L,c&&(L=Math.tan(c),L=Math.sqrt(1+L*L),A*=L,w*=L)),A=qt(A),w=qt(w),M=qt(M),R=qt(R)):(A=d,R=f,w=M=0),(x&&!~(o+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(x=Bs(p,"x",o,"px"),S=Bs(p,"y",a,"px")),(g||_||m||h)&&(x=qt(x+g-(g*A+_*M)+m),S=qt(S+_-(g*w+_*R)+h)),(r||s)&&(L=p.getBBox(),x=qt(x+r/100*L.width),S=qt(S+s/100*L.height)),L="matrix("+A+","+w+","+M+","+R+","+x+","+S+")",p.setAttribute("transform",L),v&&(p.style[zt]=L)},rD=function(e,t,i,r,s){var o=360,a=mn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?so:1),u=l-r,c=r+u+"deg",d,f;return a&&(d=s.split("_")[1],d==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),d==="cw"&&u<0?u=(u+o*px)%o-~~(u/o)*o:d==="ccw"&&u>0&&(u=(u-o*px)%o-~~(u/o)*o)),e._pt=f=new oi(e._pt,t,i,r,u,BL),f.e=c,f.u="deg",e._props.push(i),f},Sx=function(e,t){for(var i in t)e[i]=t[i];return e},sD=function(e,t,i){var r=Sx({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,u,c,d,f,p,g;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),o[zt]=t,a=Ou(i,1),zs(i,zt),i.setAttribute("transform",u)):(u=getComputedStyle(i)[zt],o[zt]=t,a=Ou(i,1),o[zt]=u);for(l in Qr)u=r[l],c=a[l],u!==c&&s.indexOf(l)<0&&(p=bn(u),g=bn(c),d=p!==g?Bs(i,l,u,g):parseFloat(u),f=parseFloat(c),e._pt=new oi(e._pt,a,l,d,f-d,r_),e._pt.u=g||0,e._props.push(l));Sx(a,r)};si("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});dd[e>1?"border"+n:n]=function(a,l,u,c,d){var f,p;if(arguments.length<4)return f=o.map(function(g){return Ur(a,g,u)}),p=f.join(" "),p.split(f[0]).length===5?f[0]:p;f=(c+"").split(" "),p={},o.forEach(function(g,_){return p[g]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,p,d)}});var b1={name:"css",register:o_,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,u,c,d,f,p,g,_,m,h,v,x,S,A,w,M,R,L;zg||o_(),this.styles=this.styles||E1(e),R=this.styles.props,this.tween=i;for(_ in t)if(_!=="autoRound"&&(c=t[_],!(gi[_]&&d1(_,t,i,r,e,s)))){if(p=typeof c,g=dd[_],p==="function"&&(c=c.call(i,r,e,s),p=typeof c),p==="string"&&~c.indexOf("random(")&&(c=Du(c)),g)g(this,e,_,c,i)&&(M=1);else if(_.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(_)+"").trim(),c+="",Ds.lastIndex=0,Ds.test(u)||(m=bn(u),h=bn(c),h?m!==h&&(u=Bs(e,_,u,h)+h):m&&(c+=m)),this.add(a,"setProperty",u,c,r,s,0,0,_),o.push(_),R.push(_,0,a[_]);else if(p!=="undefined"){if(l&&_ in l?(u=typeof l[_]=="function"?l[_].call(i,r,e,s):l[_],mn(u)&&~u.indexOf("random(")&&(u=Du(u)),bn(u+"")||u==="auto"||(u+=Ai.units[_]||bn(Ur(e,_))||""),(u+"").charAt(1)==="="&&(u=Ur(e,_))):u=Ur(e,_),f=parseFloat(u),v=p==="string"&&c.charAt(1)==="="&&c.substr(0,2),v&&(c=c.substr(2)),d=parseFloat(c),_ in xr&&(_==="autoAlpha"&&(f===1&&Ur(e,"visibility")==="hidden"&&d&&(f=0),R.push("visibility",0,a.visibility),vs(this,a,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=xr[_],~_.indexOf(",")&&(_=_.split(",")[0]))),x=_ in Qr,x){if(this.styles.save(_),L=c,p==="string"&&c.substring(0,6)==="var(--"){if(c=Ei(e,c.substring(4,c.indexOf(")"))),c.substring(0,5)==="calc("){var y=e.style.perspective;e.style.perspective=c,c=Ei(e,"perspective"),y?e.style.perspective=y:zs(e,"perspective")}d=parseFloat(c)}if(S||(A=e._gsap,A.renderTransform&&!t.parseTransform||Ou(e,t.parseTransform),w=t.smoothOrigin!==!1&&A.smooth,S=this._pt=new oi(this._pt,a,zt,0,1,A.renderTransform,A,0,-1),S.dep=1),_==="scale")this._pt=new oi(this._pt,A,"scaleY",A.scaleY,(v?Oa(A.scaleY,v+d):d)-A.scaleY||0,r_),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){R.push(ai,0,a[ai]),c=eD(c),A.svg?a_(e,c,0,w,0,this):(h=parseFloat(c.split(" ")[2])||0,h!==A.zOrigin&&vs(this,A,"zOrigin",A.zOrigin,h),vs(this,a,_,hd(u),hd(c)));continue}else if(_==="svgOrigin"){a_(e,c,1,w,0,this);continue}else if(_ in C1){rD(this,A,_,f,v?Oa(f,v+c):c);continue}else if(_==="smoothOrigin"){vs(this,A,"smooth",A.smooth,c);continue}else if(_==="force3D"){A[_]=c;continue}else if(_==="transform"){sD(this,c,e);continue}}else _ in a||(_=ol(_)||_);if(x||(d||d===0)&&(f||f===0)&&!zL.test(c)&&_ in a)m=(u+"").substr((f+"").length),d||(d=0),h=bn(c)||(_ in Ai.units?Ai.units[_]:m),m!==h&&(f=Bs(e,_,u,h)),this._pt=new oi(this._pt,x?A:a,_,f,(v?Oa(f,v+d):d)-f,!x&&(h==="px"||_==="zIndex")&&t.autoRound!==!1?GL:r_),this._pt.u=h||0,x&&L!==c?(this._pt.b=u,this._pt.e=L,this._pt.r=VL):m!==h&&h!=="%"&&(this._pt.b=u,this._pt.r=HL);else if(_ in a)JL.call(this,e,_,u,v?v+c:c);else if(_ in e)this.add(e,_,u||e[_],v?v+c:c,r,s);else if(_!=="parseTransform"){Pg(_,c);continue}x||(_ in a?R.push(_,0,a[_]):typeof e[_]=="function"?R.push(_,2,e[_]()):R.push(_,1,u||e[_])),o.push(_)}}M&&v1(this)},render:function(e,t){if(t.tween._time||!Bg())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Ur,aliases:xr,getSetter:function(e,t,i){var r=xr[t];return r&&r.indexOf(",")<0&&(t=r),t in Qr&&t!==ai&&(e._gsap.x||Ur(e,"x"))?i&&hx===i?t==="scale"?YL:jL:(hx=i||{})&&(t==="scale"?qL:$L):e.style&&!Ag(e.style[t])?WL:~t.indexOf("-")?XL:Fg(e,t)},core:{_removeProperty:zs,_getMatrix:Vg}};li.utils.checkPrefix=ol;li.core.getStyleSaver=E1;(function(n,e,t,i){var r=si(n+","+e+","+t,function(s){Qr[s]=1});si(e,function(s){Ai.units[s]="deg",C1[s]=1}),xr[r[13]]=n+","+e,si(i,function(s){var o=s.split(":");xr[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");si("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Ai.units[n]="px"});li.registerPlugin(b1);var Fu=li.registerPlugin(b1)||li;Fu.core.Tween;function oD(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function aD(n,e,t){return e&&oD(n.prototype,e),n}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var vn,Ef,yi,xs,ys,za,L1,oo,Ba,D1,Vr,er,N1,I1=function(){return vn||typeof window<"u"&&(vn=window.gsap)&&vn.registerPlugin&&vn},U1=1,Aa=[],nt=[],Tr=[],nu=Date.now,l_=function(e,t){return t},lD=function(){var e=Ba.core,t=e.bridge||{},i=e._scrollers,r=e._proxies;i.push.apply(i,nt),r.push.apply(r,Tr),nt=i,Tr=r,l_=function(o,a){return t[o](a)}},Ns=function(e,t){return~Tr.indexOf(e)&&Tr[Tr.indexOf(e)+1][t]},iu=function(e){return!!~D1.indexOf(e)},Un=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:r!==!1,capture:!!s})},In=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},Bc="scrollLeft",Hc="scrollTop",u_=function(){return Vr&&Vr.isPressed||nt.cache++},pd=function(e,t){var i=function r(s){if(s||s===0){U1&&(yi.history.scrollRestoration="manual");var o=Vr&&Vr.isPressed;s=r.v=Math.round(s)||(Vr&&Vr.iOS?1:0),e(s),r.cacheID=nt.cache,o&&l_("ss",s)}else(t||nt.cache!==r.cacheID||l_("ref"))&&(r.cacheID=nt.cache,r.v=e());return r.v+r.offset};return i.offset=0,e&&i},Hn={s:Bc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:pd(function(n){return arguments.length?yi.scrollTo(n,sn.sc()):yi.pageXOffset||xs[Bc]||ys[Bc]||za[Bc]||0})},sn={s:Hc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Hn,sc:pd(function(n){return arguments.length?yi.scrollTo(Hn.sc(),n):yi.pageYOffset||xs[Hc]||ys[Hc]||za[Hc]||0})},Yn=function(e,t){return(t&&t._ctx&&t._ctx.selector||vn.utils.toArray)(e)[0]||(typeof e=="string"&&vn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},uD=function(e,t){for(var i=t.length;i--;)if(t[i]===e||t[i].contains(e))return!0;return!1},Hs=function(e,t){var i=t.s,r=t.sc;iu(e)&&(e=xs.scrollingElement||ys);var s=nt.indexOf(e),o=r===sn.sc?1:2;!~s&&(s=nt.push(e)-1),nt[s+o]||Un(e,"scroll",u_);var a=nt[s+o],l=a||(nt[s+o]=pd(Ns(e,i),!0)||(iu(e)?r:pd(function(u){return arguments.length?e[i]=u:e[i]})));return l.target=e,a||(l.smooth=vn.getProperty(e,"scrollBehavior")==="smooth"),l},c_=function(e,t,i){var r=e,s=e,o=nu(),a=o,l=t||50,u=Math.max(500,l*3),c=function(g,_){var m=nu();_||m-o>l?(s=r,r=g,a=o,o=m):i?r+=g:r=s+(g-s)/(m-a)*(o-a)},d=function(){s=r=i?0:r,a=o=0},f=function(g){var _=a,m=s,h=nu();return(g||g===0)&&g!==r&&c(g),o===a||h-a>u?0:(r+(i?m:-m))/((i?h:o)-_)*1e3};return{update:c,reset:d,getVelocity:f}},Pl=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Mx=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},O1=function(){Ba=vn.core.globals().ScrollTrigger,Ba&&Ba.core&&lD()},F1=function(e){return vn=e||I1(),!Ef&&vn&&typeof document<"u"&&document.body&&(yi=window,xs=document,ys=xs.documentElement,za=xs.body,D1=[yi,xs,ys,za],vn.utils.clamp,N1=vn.core.context||function(){},oo="onpointerenter"in za?"pointer":"mouse",L1=Zt.isTouch=yi.matchMedia&&yi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in yi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,er=Zt.eventTypes=("ontouchstart"in ys?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in ys?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return U1=0},500),Ef=1),Ba||O1(),Ef};Hn.op=sn;nt.cache=0;var Zt=function(){function n(t){this.init(t)}var e=n.prototype;return e.init=function(i){Ef||F1(vn)||console.warn("Please gsap.registerPlugin(Observer)"),Ba||O1();var r=i.tolerance,s=i.dragMinimum,o=i.type,a=i.target,l=i.lineHeight,u=i.debounce,c=i.preventDefault,d=i.onStop,f=i.onStopDelay,p=i.ignore,g=i.wheelSpeed,_=i.event,m=i.onDragStart,h=i.onDragEnd,v=i.onDrag,x=i.onPress,S=i.onRelease,A=i.onRight,w=i.onLeft,M=i.onUp,R=i.onDown,L=i.onChangeX,y=i.onChangeY,T=i.onChange,U=i.onToggleX,B=i.onToggleY,j=i.onHover,Z=i.onHoverEnd,G=i.onMove,Y=i.ignoreCheck,N=i.isNormalizer,K=i.onGestureStart,P=i.onGestureEnd,ne=i.onWheel,Se=i.onEnable,He=i.onDisable,q=i.onClick,te=i.scrollSpeed,ce=i.capture,ue=i.allowClicks,Pe=i.lockAxis,Ae=i.onLockAxis;this.target=a=Yn(a)||ys,this.vars=i,p&&(p=vn.utils.toArray(p)),r=r||1e-9,s=s||0,g=g||1,te=te||1,o=o||"wheel,touch,pointer",u=u!==!1,l||(l=parseFloat(yi.getComputedStyle(za).lineHeight)||22);var je,Xe,ke,D,at,ze,Ve,z=this,Qe=0,Ie=0,b=i.passive||!c&&i.passive!==!1,E=Hs(a,Hn),X=Hs(a,sn),J=E(),re=X(),Q=~o.indexOf("touch")&&!~o.indexOf("pointer")&&er[0]==="pointerdown",Te=iu(a),oe=a.ownerDocument||xs,me=[0,0,0],We=[0,0,0],se=0,ye=function(){return se=nu()},Me=function(Ce,ft){return(z.event=Ce)&&p&&uD(Ce.target,p)||ft&&Q&&Ce.pointerType!=="touch"||Y&&Y(Ce,ft)},Oe=function(){z._vx.reset(),z._vy.reset(),Xe.pause(),d&&d(z)},xe=function(){var Ce=z.deltaX=Mx(me),ft=z.deltaY=Mx(We),_e=Math.abs(Ce)>=r,Ue=Math.abs(ft)>=r;T&&(_e||Ue)&&T(z,Ce,ft,me,We),_e&&(A&&z.deltaX>0&&A(z),w&&z.deltaX<0&&w(z),L&&L(z),U&&z.deltaX<0!=Qe<0&&U(z),Qe=z.deltaX,me[0]=me[1]=me[2]=0),Ue&&(R&&z.deltaY>0&&R(z),M&&z.deltaY<0&&M(z),y&&y(z),B&&z.deltaY<0!=Ie<0&&B(z),Ie=z.deltaY,We[0]=We[1]=We[2]=0),(D||ke)&&(G&&G(z),ke&&(m&&ke===1&&m(z),v&&v(z),ke=0),D=!1),ze&&!(ze=!1)&&Ae&&Ae(z),at&&(ne(z),at=!1),je=0},Ye=function(Ce,ft,_e){me[_e]+=Ce,We[_e]+=ft,z._vx.update(Ce),z._vy.update(ft),u?je||(je=requestAnimationFrame(xe)):xe()},Be=function(Ce,ft){Pe&&!Ve&&(z.axis=Ve=Math.abs(Ce)>Math.abs(ft)?"x":"y",ze=!0),Ve!=="y"&&(me[2]+=Ce,z._vx.update(Ce,!0)),Ve!=="x"&&(We[2]+=ft,z._vy.update(ft,!0)),u?je||(je=requestAnimationFrame(xe)):xe()},lt=function(Ce){if(!Me(Ce,1)){Ce=Pl(Ce,c);var ft=Ce.clientX,_e=Ce.clientY,Ue=ft-z.x,De=_e-z.y,Ge=z.isDragging;z.x=ft,z.y=_e,(Ge||(Ue||De)&&(Math.abs(z.startX-ft)>=s||Math.abs(z.startY-_e)>=s))&&(ke||(ke=Ge?2:1),Ge||(z.isDragging=!0),Be(Ue,De))}},O=z.onPress=function(Le){Me(Le,1)||Le&&Le.button||(z.axis=Ve=null,Xe.pause(),z.isPressed=!0,Le=Pl(Le),Qe=Ie=0,z.startX=z.x=Le.clientX,z.startY=z.y=Le.clientY,z._vx.reset(),z._vy.reset(),Un(N?a:oe,er[1],lt,b,!0),z.deltaX=z.deltaY=0,x&&x(z))},ie=z.onRelease=function(Le){if(!Me(Le,1)){In(N?a:oe,er[1],lt,!0);var Ce=!isNaN(z.y-z.startY),ft=z.isDragging,_e=ft&&(Math.abs(z.x-z.startX)>3||Math.abs(z.y-z.startY)>3),Ue=Pl(Le);!_e&&Ce&&(z._vx.reset(),z._vy.reset(),c&&ue&&vn.delayedCall(.08,function(){if(nu()-se>300&&!Le.defaultPrevented){if(Le.target.click)Le.target.click();else if(oe.createEvent){var De=oe.createEvent("MouseEvents");De.initMouseEvent("click",!0,!0,yi,1,Ue.screenX,Ue.screenY,Ue.clientX,Ue.clientY,!1,!1,!1,!1,0,null),Le.target.dispatchEvent(De)}}})),z.isDragging=z.isGesturing=z.isPressed=!1,d&&ft&&!N&&Xe.restart(!0),ke&&xe(),h&&ft&&h(z),S&&S(z,_e)}},$=function(Ce){return Ce.touches&&Ce.touches.length>1&&(z.isGesturing=!0)&&K(Ce,z.isDragging)},ee=function(){return(z.isGesturing=!1)||P(z)},fe=function(Ce){if(!Me(Ce)){var ft=E(),_e=X();Ye((ft-J)*te,(_e-re)*te,1),J=ft,re=_e,d&&Xe.restart(!0)}},de=function(Ce){if(!Me(Ce)){Ce=Pl(Ce,c),ne&&(at=!0);var ft=(Ce.deltaMode===1?l:Ce.deltaMode===2?yi.innerHeight:1)*g;Ye(Ce.deltaX*ft,Ce.deltaY*ft,0),d&&!N&&Xe.restart(!0)}},qe=function(Ce){if(!Me(Ce)){var ft=Ce.clientX,_e=Ce.clientY,Ue=ft-z.x,De=_e-z.y;z.x=ft,z.y=_e,D=!0,d&&Xe.restart(!0),(Ue||De)&&Be(Ue,De)}},Mt=function(Ce){z.event=Ce,j(z)},Dt=function(Ce){z.event=Ce,Z(z)},it=function(Ce){return Me(Ce)||Pl(Ce,c)&&q(z)};Xe=z._dc=vn.delayedCall(f||.25,Oe).pause(),z.deltaX=z.deltaY=0,z._vx=c_(0,50,!0),z._vy=c_(0,50,!0),z.scrollX=E,z.scrollY=X,z.isDragging=z.isGesturing=z.isPressed=!1,N1(this),z.enable=function(Le){return z.isEnabled||(Un(Te?oe:a,"scroll",u_),o.indexOf("scroll")>=0&&Un(Te?oe:a,"scroll",fe,b,ce),o.indexOf("wheel")>=0&&Un(a,"wheel",de,b,ce),(o.indexOf("touch")>=0&&L1||o.indexOf("pointer")>=0)&&(Un(a,er[0],O,b,ce),Un(oe,er[2],ie),Un(oe,er[3],ie),ue&&Un(a,"click",ye,!0,!0),q&&Un(a,"click",it),K&&Un(oe,"gesturestart",$),P&&Un(oe,"gestureend",ee),j&&Un(a,oo+"enter",Mt),Z&&Un(a,oo+"leave",Dt),G&&Un(a,oo+"move",qe)),z.isEnabled=!0,z.isDragging=z.isGesturing=z.isPressed=D=ke=!1,z._vx.reset(),z._vy.reset(),J=E(),re=X(),Le&&Le.type&&O(Le),Se&&Se(z)),z},z.disable=function(){z.isEnabled&&(Aa.filter(function(Le){return Le!==z&&iu(Le.target)}).length||In(Te?oe:a,"scroll",u_),z.isPressed&&(z._vx.reset(),z._vy.reset(),In(N?a:oe,er[1],lt,!0)),In(Te?oe:a,"scroll",fe,ce),In(a,"wheel",de,ce),In(a,er[0],O,ce),In(oe,er[2],ie),In(oe,er[3],ie),In(a,"click",ye,!0),In(a,"click",it),In(oe,"gesturestart",$),In(oe,"gestureend",ee),In(a,oo+"enter",Mt),In(a,oo+"leave",Dt),In(a,oo+"move",qe),z.isEnabled=z.isPressed=z.isDragging=!1,He&&He(z))},z.kill=z.revert=function(){z.disable();var Le=Aa.indexOf(z);Le>=0&&Aa.splice(Le,1),Vr===z&&(Vr=0)},Aa.push(z),N&&iu(a)&&(Vr=z),z.enable(_)},aD(n,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),n}();Zt.version="3.15.0";Zt.create=function(n){return new Zt(n)};Zt.register=F1;Zt.getAll=function(){return Aa.slice()};Zt.getById=function(n){return Aa.filter(function(e){return e.vars.id===n})[0]};I1()&&vn.registerPlugin(Zt);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var we,ua,tt,xt,vi,mt,Gg,md,ku,ru,zl,Vc,An,Vd,f_,zn,Ex,Tx,ca,k1,ap,z1,Fn,d_,B1,H1,ls,h_,Wg,Ha,Xg,su,p_,lp,Gc=1,Cn=Date.now,up=Cn(),ji=0,Bl=0,wx=function(e,t,i){var r=_i(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},Ax=function(e,t){return t&&(!_i(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},cD=function n(){return Bl&&requestAnimationFrame(n)},Cx=function(){return Vd=1},Rx=function(){return Vd=0},mr=function(e){return e},Hl=function(e){return Math.round(e*1e5)/1e5||0},V1=function(){return typeof window<"u"},G1=function(){return we||V1()&&(we=window.gsap)&&we.registerPlugin&&we},Uo=function(e){return!!~Gg.indexOf(e)},W1=function(e){return(e==="Height"?Xg:tt["inner"+e])||vi["client"+e]||mt["client"+e]},X1=function(e){return Ns(e,"getBoundingClientRect")||(Uo(e)?function(){return Rf.width=tt.innerWidth,Rf.height=Xg,Rf}:function(){return Fr(e)})},fD=function(e,t,i){var r=i.d,s=i.d2,o=i.a;return(o=Ns(e,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(t?W1(s):e["client"+s])||0}},dD=function(e,t){return!t||~Tr.indexOf(e)?X1(e):function(){return Rf}},yr=function(e,t){var i=t.s,r=t.d2,s=t.d,o=t.a;return Math.max(0,(i="scroll"+r)&&(o=Ns(e,i))?o()-X1(e)()[s]:Uo(e)?(vi[i]||mt[i])-W1(r):e[i]-e["offset"+r])},Wc=function(e,t){for(var i=0;i<ca.length;i+=3)(!t||~t.indexOf(ca[i+1]))&&e(ca[i],ca[i+1],ca[i+2])},_i=function(e){return typeof e=="string"},Ln=function(e){return typeof e=="function"},Vl=function(e){return typeof e=="number"},ao=function(e){return typeof e=="object"},bl=function(e,t,i){return e&&e.progress(t?0:1)&&i&&e.pause()},ra=function(e,t,i){if(e.enabled){var r=e._ctx?e._ctx.add(function(){return t(e,i)}):t(e,i);r&&r.totalTime&&(e.callbackAnimation=r)}},sa=Math.abs,j1="left",Y1="top",jg="right",Yg="bottom",wo="width",Ao="height",ou="Right",au="Left",lu="Top",uu="Bottom",Jt="padding",ki="margin",al="Width",qg="Height",nn="px",zi=function(e){return tt.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},hD=function(e){var t=zi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Px=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},Fr=function(e,t){var i=t&&zi(e)[f_]!=="matrix(1, 0, 0, 1, 0, 0)"&&we.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return i&&i.progress(0).kill(),r},_d=function(e,t){var i=t.d2;return e["offset"+i]||e["client"+i]||0},q1=function(e){var t=[],i=e.labels,r=e.duration(),s;for(s in i)t.push(i[s]/r);return t},pD=function(e){return function(t){return we.utils.snap(q1(e),t)}},$g=function(e){var t=we.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return i?function(r,s,o){o===void 0&&(o=.001);var a;if(!s)return t(r);if(s>0){for(r-=o,a=0;a<i.length;a++)if(i[a]>=r)return i[a];return i[a-1]}else for(a=i.length,r+=o;a--;)if(i[a]<=r)return i[a];return i[0]}:function(r,s,o){o===void 0&&(o=.001);var a=t(r);return!s||Math.abs(a-r)<o||a-r<0==s<0?a:t(s<0?r-e:r+e)}},mD=function(e){return function(t,i){return $g(q1(e))(t,i.direction)}},Xc=function(e,t,i,r){return i.split(",").forEach(function(s){return e(t,s,r)})},dn=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:!r,capture:!!s})},fn=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},jc=function(e,t,i){i=i&&i.wheelHandler,i&&(e(t,"wheel",i),e(t,"touchmove",i))},bx={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Yc={toggleActions:"play",anticipatePin:0},gd={top:0,left:0,center:.5,bottom:1,right:1},Tf=function(e,t){if(_i(e)){var i=e.indexOf("="),r=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(r*=t/100),e=e.substr(0,i-1)),e=r+(e in gd?gd[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},qc=function(e,t,i,r,s,o,a,l){var u=s.startColor,c=s.endColor,d=s.fontSize,f=s.indent,p=s.fontWeight,g=xt.createElement("div"),_=Uo(i)||Ns(i,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,h=_?mt:i.tagName==="IFRAME"?i.contentDocument.body:i,v=e.indexOf("start")!==-1,x=v?u:c,S="border-color:"+x+";font-size:"+d+";color:"+x+";font-weight:"+p+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return S+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(S+=(r===sn?jg:Yg)+":"+(o+parseFloat(f))+"px;"),a&&(S+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=v,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=S,g.innerText=t||t===0?e+"-"+t:e,h.children[0]?h.insertBefore(g,h.children[0]):h.appendChild(g),g._offset=g["offset"+r.op.d2],wf(g,0,r,v),g},wf=function(e,t,i,r){var s={display:"block"},o=i[r?"os2":"p2"],a=i[r?"p2":"os2"];e._isFlipped=r,s[i.a+"Percent"]=r?-100:0,s[i.a]=r?"1px":0,s["border"+o+al]=1,s["border"+a+al]=0,s[i.p]=t+"px",we.set(e,s)},et=[],m_={},zu,Lx=function(){return Cn()-ji>34&&(zu||(zu=requestAnimationFrame(Wr)))},oa=function(){(!Fn||!Fn.isPressed||Fn.startX>mt.clientWidth)&&(nt.cache++,Fn?zu||(zu=requestAnimationFrame(Wr)):Wr(),ji||Fo("scrollStart"),ji=Cn())},cp=function(){H1=tt.innerWidth,B1=tt.innerHeight},Gl=function(e){nt.cache++,(e===!0||!An&&!z1&&!xt.fullscreenElement&&!xt.webkitFullscreenElement&&(!d_||H1!==tt.innerWidth||Math.abs(tt.innerHeight-B1)>tt.innerHeight*.25))&&md.restart(!0)},Oo={},_D=[],$1=function n(){return fn(rt,"scrollEnd",n)||vo(!0)},Fo=function(e){return Oo[e]&&Oo[e].map(function(t){return t()})||_D},pi=[],K1=function(e){for(var t=0;t<pi.length;t+=5)(!e||pi[t+4]&&pi[t+4].query===e)&&(pi[t].style.cssText=pi[t+1],pi[t].getBBox&&pi[t].setAttribute("transform",pi[t+2]||""),pi[t+3].uncache=1)},Z1=function(){return nt.forEach(function(e){return Ln(e)&&++e.cacheID&&(e.rec=e())})},Kg=function(e,t){var i;for(zn=0;zn<et.length;zn++)i=et[zn],i&&(!t||i._ctx===t)&&(e?i.kill(1):i.revert(!0,!0));su=!0,t&&K1(t),t||Fo("revert")},Q1=function(e,t){nt.cache++,(t||!Bn)&&nt.forEach(function(i){return Ln(i)&&i.cacheID++&&(i.rec=0)}),_i(e)&&(tt.history.scrollRestoration=Wg=e)},Bn,Co=0,Dx,gD=function(){if(Dx!==Co){var e=Dx=Co;requestAnimationFrame(function(){return e===Co&&vo(!0)})}},J1=function(){mt.appendChild(Ha),Xg=!Fn&&Ha.offsetHeight||tt.innerHeight,mt.removeChild(Ha)},Nx=function(e){return ku(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},vo=function(e,t){if(vi=xt.documentElement,mt=xt.body,Gg=[tt,xt,vi,mt],ji&&!e&&!su){dn(rt,"scrollEnd",$1);return}J1(),Bn=rt.isRefreshing=!0,su||Z1();var i=Fo("refreshInit");k1&&rt.sort(),t||Kg(),nt.forEach(function(r){Ln(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),et.slice(0).forEach(function(r){return r.refresh()}),su=!1,et.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",o=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-o),r.refresh()}}),p_=1,Nx(!0),et.forEach(function(r){var s=yr(r.scroller,r._dir),o=r.vars.end==="max"||r._endClamp&&r.end>s,a=r._startClamp&&r.start>=s;(o||a)&&r.setPositions(a?s-1:r.start,o?Math.max(a?s:r.start+1,s):r.end,!0)}),Nx(!1),p_=0,i.forEach(function(r){return r&&r.render&&r.render(-1)}),nt.forEach(function(r){Ln(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),Q1(Wg,1),md.pause(),Co++,Bn=2,Wr(2),et.forEach(function(r){return Ln(r.vars.onRefresh)&&r.vars.onRefresh(r)}),Bn=rt.isRefreshing=!1,Fo("refresh")},__=0,Af=1,cu,Wr=function(e){if(e===2||!Bn&&!su){rt.isUpdating=!0,cu&&cu.update(0);var t=et.length,i=Cn(),r=i-up>=50,s=t&&et[0].scroll();if(Af=__>s?-1:1,Bn||(__=s),r&&(ji&&!Vd&&i-ji>200&&(ji=0,Fo("scrollEnd")),zl=up,up=i),Af<0){for(zn=t;zn-- >0;)et[zn]&&et[zn].update(0,r);Af=1}else for(zn=0;zn<t;zn++)et[zn]&&et[zn].update(0,r);rt.isUpdating=!1}zu=0},g_=[j1,Y1,Yg,jg,ki+uu,ki+ou,ki+lu,ki+au,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Cf=g_.concat([wo,Ao,"boxSizing","max"+al,"max"+qg,"position",ki,Jt,Jt+lu,Jt+ou,Jt+uu,Jt+au]),vD=function(e,t,i){Va(i);var r=e._gsap;if(r.spacerIsNative)Va(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},fp=function(e,t,i,r){if(!e._gsap.swappedIn){for(var s=g_.length,o=t.style,a=e.style,l;s--;)l=g_[s],o[l]=i[l];o.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(o.display="inline-block"),a[Yg]=a[jg]="auto",o.flexBasis=i.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[wo]=_d(e,Hn)+nn,o[Ao]=_d(e,sn)+nn,o[Jt]=a[ki]=a[Y1]=a[j1]="0",Va(r),a[wo]=a["max"+al]=i[wo],a[Ao]=a["max"+qg]=i[Ao],a[Jt]=i[Jt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},xD=/([A-Z])/g,Va=function(e){if(e){var t=e.t.style,i=e.length,r=0,s,o;for((e.t._gsap||we.core.getCache(e.t)).uncache=1;r<i;r+=2)o=e[r+1],s=e[r],o?t[s]=o:t[s]&&t.removeProperty(s.replace(xD,"-$1").toLowerCase())}},$c=function(e){for(var t=Cf.length,i=e.style,r=[],s=0;s<t;s++)r.push(Cf[s],i[Cf[s]]);return r.t=e,r},yD=function(e,t,i){for(var r=[],s=e.length,o=i?8:0,a;o<s;o+=2)a=e[o],r.push(a,a in t?t[a]:e[o+1]);return r.t=e.t,r},Rf={left:0,top:0},Ix=function(e,t,i,r,s,o,a,l,u,c,d,f,p,g){Ln(e)&&(e=e(l)),_i(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?Tf("0"+e.substr(3),i):0));var _=p?p.time():0,m,h,v;if(p&&p.seek(0),isNaN(e)||(e=+e),Vl(e))p&&(e=we.utils.mapRange(p.scrollTrigger.start,p.scrollTrigger.end,0,f,e)),a&&wf(a,i,r,!0);else{Ln(t)&&(t=t(l));var x=(e||"0").split(" "),S,A,w,M;v=Yn(t,l)||mt,S=Fr(v)||{},(!S||!S.left&&!S.top)&&zi(v).display==="none"&&(M=v.style.display,v.style.display="block",S=Fr(v),M?v.style.display=M:v.style.removeProperty("display")),A=Tf(x[0],S[r.d]),w=Tf(x[1]||"0",i),e=S[r.p]-u[r.p]-c+A+s-w,a&&wf(a,w,r,i-w<20||a._isStart&&w>20),i-=i-w}if(g&&(l[g]=e||-.001,e<0&&(e=0)),o){var R=e+i,L=o._isStart;m="scroll"+r.d2,wf(o,R,r,L&&R>20||!L&&(d?Math.max(mt[m],vi[m]):o.parentNode[m])<=R+1),d&&(u=Fr(a),d&&(o.style[r.op.p]=u[r.op.p]-r.op.m-o._offset+nn))}return p&&v&&(m=Fr(v),p.seek(f),h=Fr(v),p._caScrollDist=m[r.p]-h[r.p],e=e/p._caScrollDist*f),p&&p.seek(_),p?e:Math.round(e)},SD=/(webkit|moz|length|cssText|inset)/i,Ux=function(e,t,i,r){if(e.parentNode!==t){var s=e.style,o,a;if(t===mt){e._stOrig=s.cssText,a=zi(e);for(o in a)!+o&&!SD.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=i,s.left=r}else s.cssText=e._stOrig;we.core.getCache(e).uncache=1,t.appendChild(e)}},eE=function(e,t,i){var r=t,s=r;return function(o){var a=Math.round(e());return a!==r&&a!==s&&Math.abs(a-r)>3&&Math.abs(a-s)>3&&(o=a,i&&i()),s=r,r=Math.round(o),r}},Kc=function(e,t,i){var r={};r[t.p]="+="+i,we.set(e,r)},Ox=function(e,t){var i=Hs(e,t),r="_scroll"+t.p2,s=function o(a,l,u,c,d){var f=o.tween,p=l.onComplete,g={};u=u||i();var _=eE(i,u,function(){f.kill(),o.tween=0});return d=c&&d||0,c=c||a-u,f&&f.kill(),l[r]=a,l.inherit=!1,l.modifiers=g,g[r]=function(){return _(u+c*f.ratio+d*f.ratio*f.ratio)},l.onUpdate=function(){nt.cache++,o.tween&&Wr()},l.onComplete=function(){o.tween=0,p&&p.call(f)},f=o.tween=we.to(e,l),f};return e[r]=i,i.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},dn(e,"wheel",i.wheelHandler),rt.isTouch&&dn(e,"touchmove",i.wheelHandler),s},rt=function(){function n(t,i){ua||n.register(we)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),h_(this),this.init(t,i)}var e=n.prototype;return e.init=function(i,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Bl){this.update=this.refresh=this.kill=mr;return}i=Px(_i(i)||Vl(i)||i.nodeType?{trigger:i}:i,Yc);var s=i,o=s.onUpdate,a=s.toggleClass,l=s.id,u=s.onToggle,c=s.onRefresh,d=s.scrub,f=s.trigger,p=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,h=s.onScrubComplete,v=s.onSnapComplete,x=s.once,S=s.snap,A=s.pinReparent,w=s.pinSpacer,M=s.containerAnimation,R=s.fastScrollEnd,L=s.preventOverlaps,y=i.horizontal||i.containerAnimation&&i.horizontal!==!1?Hn:sn,T=!d&&d!==0,U=Yn(i.scroller||tt),B=we.core.getCache(U),j=Uo(U),Z=("pinType"in i?i.pinType:Ns(U,"pinType")||j&&"fixed")==="fixed",G=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],Y=T&&i.toggleActions.split(" "),N="markers"in i?i.markers:Yc.markers,K=j?0:parseFloat(zi(U)["border"+y.p2+al])||0,P=this,ne=i.onRefreshInit&&function(){return i.onRefreshInit(P)},Se=fD(U,j,y),He=dD(U,j),q=0,te=0,ce=0,ue=Hs(U,y),Pe,Ae,je,Xe,ke,D,at,ze,Ve,z,Qe,Ie,b,E,X,J,re,Q,Te,oe,me,We,se,ye,Me,Oe,xe,Ye,Be,lt,O,ie,$,ee,fe,de,qe,Mt,Dt;if(P._startClamp=P._endClamp=!1,P._dir=y,m*=45,P.scroller=U,P.scroll=M?M.time.bind(M):ue,Xe=ue(),P.vars=i,r=r||i.animation,"refreshPriority"in i&&(k1=1,i.refreshPriority===-9999&&(cu=P)),B.tweenScroll=B.tweenScroll||{top:Ox(U,sn),left:Ox(U,Hn)},P.tweenTo=Pe=B.tweenScroll[y.p],P.scrubDuration=function(_e){$=Vl(_e)&&_e,$?ie?ie.duration(_e):ie=we.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:$,paused:!0,onComplete:function(){return h&&h(P)}}):(ie&&ie.progress(1).kill(),ie=0)},r&&(r.vars.lazy=!1,r._initted&&!P.isReverted||r.vars.immediateRender!==!1&&i.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),P.animation=r.pause(),r.scrollTrigger=P,P.scrubDuration(d),lt=0,l||(l=r.vars.id)),S&&((!ao(S)||S.push)&&(S={snapTo:S}),"scrollBehavior"in mt.style&&we.set(j?[mt,vi]:U,{scrollBehavior:"auto"}),nt.forEach(function(_e){return Ln(_e)&&_e.target===(j?xt.scrollingElement||vi:U)&&(_e.smooth=!1)}),je=Ln(S.snapTo)?S.snapTo:S.snapTo==="labels"?pD(r):S.snapTo==="labelsDirectional"?mD(r):S.directional!==!1?function(_e,Ue){return $g(S.snapTo)(_e,Cn()-te<500?0:Ue.direction)}:we.utils.snap(S.snapTo),ee=S.duration||{min:.1,max:2},ee=ao(ee)?ru(ee.min,ee.max):ru(ee,ee),fe=we.delayedCall(S.delay||$/2||.1,function(){var _e=ue(),Ue=Cn()-te<500,De=Pe.tween;if((Ue||Math.abs(P.getVelocity())<10)&&!De&&!Vd&&q!==_e){var Ge=(_e-D)/E,Xt=r&&!T?r.totalProgress():Ge,$e=Ue?0:(Xt-O)/(Cn()-zl)*1e3||0,Nt=we.utils.clamp(-Ge,1-Ge,sa($e/2)*$e/.185),jt=Ge+(S.inertia===!1?0:Nt),Ct,Et,vt=S,ci=vt.onStart,Rt=vt.onInterrupt,C=vt.onComplete;if(Ct=je(jt,P),Vl(Ct)||(Ct=jt),Et=Math.max(0,Math.round(D+Ct*E)),_e<=at&&_e>=D&&Et!==_e){if(De&&!De._initted&&De.data<=sa(Et-_e))return;S.inertia===!1&&(Nt=Ct-Ge),Pe(Et,{duration:ee(sa(Math.max(sa(jt-Xt),sa(Ct-Xt))*.185/$e/.05||0)),ease:S.ease||"power3",data:sa(Et-_e),onInterrupt:function(){return fe.restart(!0)&&Rt&&ra(P,Rt)},onComplete:function(){P.update(),q=ue(),r&&!T&&(ie?ie.resetTo("totalProgress",Ct,r._tTime/r._tDur):r.progress(Ct)),lt=O=r&&!T?r.totalProgress():P.progress,v&&v(P),C&&ra(P,C)}},_e,Nt*E,Et-_e-Nt*E),ci&&ra(P,ci,Pe.tween)}}else P.isActive&&q!==_e&&fe.restart(!0)}).pause()),l&&(m_[l]=P),f=P.trigger=Yn(f||p!==!0&&p),Dt=f&&f._gsap&&f._gsap.stRevert,Dt&&(Dt=Dt(P)),p=p===!0?f:Yn(p),_i(a)&&(a={targets:f,className:a}),p&&(g===!1||g===ki||(g=!g&&p.parentNode&&p.parentNode.style&&zi(p.parentNode).display==="flex"?!1:Jt),P.pin=p,Ae=we.core.getCache(p),Ae.spacer?X=Ae.pinState:(w&&(w=Yn(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),Ae.spacerIsNative=!!w,w&&(Ae.spacerState=$c(w))),Ae.spacer=Q=w||xt.createElement("div"),Q.classList.add("pin-spacer"),l&&Q.classList.add("pin-spacer-"+l),Ae.pinState=X=$c(p)),i.force3D!==!1&&we.set(p,{force3D:!0}),P.spacer=Q=Ae.spacer,Be=zi(p),ye=Be[g+y.os2],oe=we.getProperty(p),me=we.quickSetter(p,y.a,nn),fp(p,Q,Be),re=$c(p)),N){Ie=ao(N)?Px(N,bx):bx,z=qc("scroller-start",l,U,y,Ie,0),Qe=qc("scroller-end",l,U,y,Ie,0,z),Te=z["offset"+y.op.d2];var it=Yn(Ns(U,"content")||U);ze=this.markerStart=qc("start",l,it,y,Ie,Te,0,M),Ve=this.markerEnd=qc("end",l,it,y,Ie,Te,0,M),M&&(Mt=we.quickSetter([ze,Ve],y.a,nn)),!Z&&!(Tr.length&&Ns(U,"fixedMarkers")===!0)&&(hD(j?mt:U),we.set([z,Qe],{force3D:!0}),Oe=we.quickSetter(z,y.a,nn),Ye=we.quickSetter(Qe,y.a,nn))}if(M){var Le=M.vars.onUpdate,Ce=M.vars.onUpdateParams;M.eventCallback("onUpdate",function(){P.update(0,0,1),Le&&Le.apply(M,Ce||[])})}if(P.previous=function(){return et[et.indexOf(P)-1]},P.next=function(){return et[et.indexOf(P)+1]},P.revert=function(_e,Ue){if(!Ue)return P.kill(!0);var De=_e!==!1||!P.enabled,Ge=An;De!==P.isReverted&&(De&&(de=Math.max(ue(),P.scroll.rec||0),ce=P.progress,qe=r&&r.progress()),ze&&[ze,Ve,z,Qe].forEach(function(Xt){return Xt.style.display=De?"none":"block"}),De&&(An=P,P.update(De)),p&&(!A||!P.isActive)&&(De?vD(p,Q,X):fp(p,Q,zi(p),Me)),De||P.update(De),An=Ge,P.isReverted=De)},P.refresh=function(_e,Ue,De,Ge){if(!((An||!P.enabled)&&!Ue)){if(p&&_e&&ji){dn(n,"scrollEnd",$1);return}!Bn&&ne&&ne(P),An=P,Pe.tween&&!De&&(Pe.tween.kill(),Pe.tween=0),ie&&ie.pause(),_&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(Je){return Je.vars.immediateRender&&Je.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var Xt=Se(),$e=He(),Nt=M?M.duration():yr(U,y),jt=E<=.01||!E,Ct=0,Et=Ge||0,vt=ao(De)?De.end:i.end,ci=i.endTrigger||f,Rt=ao(De)?De.start:i.start||(i.start===0||!f?0:p?"0 0":"0 100%"),C=P.pinnedContainer=i.pinnedContainer&&Yn(i.pinnedContainer,P),k=f&&Math.max(0,et.indexOf(P))||0,V=k,W,F,le,ve,pe,he,be,Fe,Re,ut,ot,St,un;for(N&&ao(De)&&(St=we.getProperty(z,y.p),un=we.getProperty(Qe,y.p));V-- >0;)he=et[V],he.end||he.refresh(0,1)||(An=P),be=he.pin,be&&(be===f||be===p||be===C)&&!he.isReverted&&(ut||(ut=[]),ut.unshift(he),he.revert(!0,!0)),he!==et[V]&&(k--,V--);for(Ln(Rt)&&(Rt=Rt(P)),Rt=wx(Rt,"start",P),D=Ix(Rt,f,Xt,y,ue(),ze,z,P,$e,K,Z,Nt,M,P._startClamp&&"_startClamp")||(p?-.001:0),Ln(vt)&&(vt=vt(P)),_i(vt)&&!vt.indexOf("+=")&&(~vt.indexOf(" ")?vt=(_i(Rt)?Rt.split(" ")[0]:"")+vt:(Ct=Tf(vt.substr(2),Xt),vt=_i(Rt)?Rt:(M?we.utils.mapRange(0,M.duration(),M.scrollTrigger.start,M.scrollTrigger.end,D):D)+Ct,ci=f)),vt=wx(vt,"end",P),at=Math.max(D,Ix(vt||(ci?"100% 0":Nt),ci,Xt,y,ue()+Ct,Ve,Qe,P,$e,K,Z,Nt,M,P._endClamp&&"_endClamp"))||-.001,Ct=0,V=k;V--;)he=et[V]||{},be=he.pin,be&&he.start-he._pinPush<=D&&!M&&he.end>0&&(W=he.end-(P._startClamp?Math.max(0,he.start):he.start),(be===f&&he.start-he._pinPush<D||be===C)&&isNaN(Rt)&&(Ct+=W*(1-he.progress)),be===p&&(Et+=W));if(D+=Ct,at+=Ct,P._startClamp&&(P._startClamp+=Ct),P._endClamp&&!Bn&&(P._endClamp=at||-.001,at=Math.min(at,yr(U,y))),E=at-D||(D-=.01)&&.001,jt&&(ce=we.utils.clamp(0,1,we.utils.normalize(D,at,de))),P._pinPush=Et,ze&&Ct&&(W={},W[y.a]="+="+Ct,C&&(W[y.p]="-="+ue()),we.set([ze,Ve],W)),p&&!(p_&&P.end>=yr(U,y)))W=zi(p),ve=y===sn,le=ue(),We=parseFloat(oe(y.a))+Et,!Nt&&at>1&&(ot=(j?xt.scrollingElement||vi:U).style,ot={style:ot,value:ot["overflow"+y.a.toUpperCase()]},j&&zi(mt)["overflow"+y.a.toUpperCase()]!=="scroll"&&(ot.style["overflow"+y.a.toUpperCase()]="scroll")),fp(p,Q,W),re=$c(p),F=Fr(p,!0),Fe=Z&&Hs(U,ve?Hn:sn)(),g?(Me=[g+y.os2,E+Et+nn],Me.t=Q,V=g===Jt?_d(p,y)+E+Et:0,V&&(Me.push(y.d,V+nn),Q.style.flexBasis!=="auto"&&(Q.style.flexBasis=V+nn)),Va(Me),C&&et.forEach(function(Je){Je.pin===C&&Je.vars.pinSpacing!==!1&&(Je._subPinOffset=!0)}),Z&&ue(de)):(V=_d(p,y),V&&Q.style.flexBasis!=="auto"&&(Q.style.flexBasis=V+nn)),Z&&(pe={top:F.top+(ve?le-D:Fe)+nn,left:F.left+(ve?Fe:le-D)+nn,boxSizing:"border-box",position:"fixed"},pe[wo]=pe["max"+al]=Math.ceil(F.width)+nn,pe[Ao]=pe["max"+qg]=Math.ceil(F.height)+nn,pe[ki]=pe[ki+lu]=pe[ki+ou]=pe[ki+uu]=pe[ki+au]="0",pe[Jt]=W[Jt],pe[Jt+lu]=W[Jt+lu],pe[Jt+ou]=W[Jt+ou],pe[Jt+uu]=W[Jt+uu],pe[Jt+au]=W[Jt+au],J=yD(X,pe,A),Bn&&ue(0)),r?(Re=r._initted,ap(1),r.render(r.duration(),!0,!0),se=oe(y.a)-We+E+Et,xe=Math.abs(E-se)>1,Z&&xe&&J.splice(J.length-2,2),r.render(0,!0,!0),Re||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),ap(0)):se=E,ot&&(ot.value?ot.style["overflow"+y.a.toUpperCase()]=ot.value:ot.style.removeProperty("overflow-"+y.a));else if(f&&ue()&&!M)for(F=f.parentNode;F&&F!==mt;)F._pinOffset&&(D-=F._pinOffset,at-=F._pinOffset),F=F.parentNode;ut&&ut.forEach(function(Je){return Je.revert(!1,!0)}),P.start=D,P.end=at,Xe=ke=Bn?de:ue(),!M&&!Bn&&(Xe<de&&ue(de),P.scroll.rec=0),P.revert(!1,!0),te=Cn(),fe&&(q=-1,fe.restart(!0)),An=0,r&&T&&(r._initted||qe)&&r.progress()!==qe&&r.progress(qe||0,!0).render(r.time(),!0,!0),(jt||ce!==P.progress||M||_||r&&!r._initted)&&(r&&!T&&(r._initted||ce||r.vars.immediateRender!==!1)&&r.totalProgress(M&&D<-.001&&!ce?we.utils.normalize(D,at,0):ce,!0),P.progress=jt||(Xe-D)/E===ce?0:ce),p&&g&&(Q._pinOffset=Math.round(P.progress*se)),ie&&ie.invalidate(),isNaN(St)||(St-=we.getProperty(z,y.p),un-=we.getProperty(Qe,y.p),Kc(z,y,St),Kc(ze,y,St-(Ge||0)),Kc(Qe,y,un),Kc(Ve,y,un-(Ge||0))),jt&&!Bn&&P.update(),c&&!Bn&&!b&&(b=!0,c(P),b=!1)}},P.getVelocity=function(){return(ue()-ke)/(Cn()-zl)*1e3||0},P.endAnimation=function(){bl(P.callbackAnimation),r&&(ie?ie.progress(1):r.paused()?T||bl(r,P.direction<0,1):bl(r,r.reversed()))},P.labelToScroll=function(_e){return r&&r.labels&&(D||P.refresh()||D)+r.labels[_e]/r.duration()*E||0},P.getTrailing=function(_e){var Ue=et.indexOf(P),De=P.direction>0?et.slice(0,Ue).reverse():et.slice(Ue+1);return(_i(_e)?De.filter(function(Ge){return Ge.vars.preventOverlaps===_e}):De).filter(function(Ge){return P.direction>0?Ge.end<=D:Ge.start>=at})},P.update=function(_e,Ue,De){if(!(M&&!De&&!_e)){var Ge=Bn===!0?de:P.scroll(),Xt=_e?0:(Ge-D)/E,$e=Xt<0?0:Xt>1?1:Xt||0,Nt=P.progress,jt,Ct,Et,vt,ci,Rt,C,k;if(Ue&&(ke=Xe,Xe=M?ue():Ge,S&&(O=lt,lt=r&&!T?r.totalProgress():$e)),m&&p&&!An&&!Gc&&ji&&(!$e&&D<Ge+(Ge-ke)/(Cn()-zl)*m?$e=1e-4:$e===1&&at>Ge+(Ge-ke)/(Cn()-zl)*m&&($e=.9999)),$e!==Nt&&P.enabled){if(jt=P.isActive=!!$e&&$e<1,Ct=!!Nt&&Nt<1,Rt=jt!==Ct,ci=Rt||!!$e!=!!Nt,P.direction=$e>Nt?1:-1,P.progress=$e,ci&&!An&&(Et=$e&&!Nt?0:$e===1?1:Nt===1?2:3,T&&(vt=!Rt&&Y[Et+1]!=="none"&&Y[Et+1]||Y[Et],k=r&&(vt==="complete"||vt==="reset"||vt in r))),L&&(Rt||k)&&(k||d||!r)&&(Ln(L)?L(P):P.getTrailing(L).forEach(function(le){return le.endAnimation()})),T||(ie&&!An&&!Gc?(ie._dp._time-ie._start!==ie._time&&ie.render(ie._dp._time-ie._start),ie.resetTo?ie.resetTo("totalProgress",$e,r._tTime/r._tDur):(ie.vars.totalProgress=$e,ie.invalidate().restart())):r&&r.totalProgress($e,!!(An&&(te||_e)))),p){if(_e&&g&&(Q.style[g+y.os2]=ye),!Z)me(Hl(We+se*$e));else if(ci){if(C=!_e&&$e>Nt&&at+1>Ge&&Ge+1>=yr(U,y),A)if(!_e&&(jt||C)){var V=Fr(p,!0),W=Ge-D;Ux(p,mt,V.top+(y===sn?W:0)+nn,V.left+(y===sn?0:W)+nn)}else Ux(p,Q);Va(jt||C?J:re),xe&&$e<1&&jt||me(We+($e===1&&!C?se:0))}}S&&!Pe.tween&&!An&&!Gc&&fe.restart(!0),a&&(Rt||x&&$e&&($e<1||!lp))&&ku(a.targets).forEach(function(le){return le.classList[jt||x?"add":"remove"](a.className)}),o&&!T&&!_e&&o(P),ci&&!An?(T&&(k&&(vt==="complete"?r.pause().totalProgress(1):vt==="reset"?r.restart(!0).pause():vt==="restart"?r.restart(!0):r[vt]()),o&&o(P)),(Rt||!lp)&&(u&&Rt&&ra(P,u),G[Et]&&ra(P,G[Et]),x&&($e===1?P.kill(!1,1):G[Et]=0),Rt||(Et=$e===1?1:3,G[Et]&&ra(P,G[Et]))),R&&!jt&&Math.abs(P.getVelocity())>(Vl(R)?R:2500)&&(bl(P.callbackAnimation),ie?ie.progress(1):bl(r,vt==="reverse"?1:!$e,1))):T&&o&&!An&&o(P)}if(Ye){var F=M?Ge/M.duration()*(M._caScrollDist||0):Ge;Oe(F+(z._isFlipped?1:0)),Ye(F)}Mt&&Mt(-Ge/M.duration()*(M._caScrollDist||0))}},P.enable=function(_e,Ue){P.enabled||(P.enabled=!0,dn(U,"resize",Gl),j||dn(U,"scroll",oa),ne&&dn(n,"refreshInit",ne),_e!==!1&&(P.progress=ce=0,Xe=ke=q=ue()),Ue!==!1&&P.refresh())},P.getTween=function(_e){return _e&&Pe?Pe.tween:ie},P.setPositions=function(_e,Ue,De,Ge){if(M){var Xt=M.scrollTrigger,$e=M.duration(),Nt=Xt.end-Xt.start;_e=Xt.start+Nt*_e/$e,Ue=Xt.start+Nt*Ue/$e}P.refresh(!1,!1,{start:Ax(_e,De&&!!P._startClamp),end:Ax(Ue,De&&!!P._endClamp)},Ge),P.update()},P.adjustPinSpacing=function(_e){if(Me&&_e){var Ue=Me.indexOf(y.d)+1;Me[Ue]=parseFloat(Me[Ue])+_e+nn,Me[1]=parseFloat(Me[1])+_e+nn,Va(Me)}},P.disable=function(_e,Ue){if(_e!==!1&&P.revert(!0,!0),P.enabled&&(P.enabled=P.isActive=!1,Ue||ie&&ie.pause(),de=0,Ae&&(Ae.uncache=1),ne&&fn(n,"refreshInit",ne),fe&&(fe.pause(),Pe.tween&&Pe.tween.kill()&&(Pe.tween=0)),!j)){for(var De=et.length;De--;)if(et[De].scroller===U&&et[De]!==P)return;fn(U,"resize",Gl),j||fn(U,"scroll",oa)}},P.kill=function(_e,Ue){P.disable(_e,Ue),ie&&!Ue&&ie.kill(),l&&delete m_[l];var De=et.indexOf(P);De>=0&&et.splice(De,1),De===zn&&Af>0&&zn--,De=0,et.forEach(function(Ge){return Ge.scroller===P.scroller&&(De=1)}),De||Bn||(P.scroll.rec=0),r&&(r.scrollTrigger=null,_e&&r.revert({kill:!1}),Ue||r.kill()),ze&&[ze,Ve,z,Qe].forEach(function(Ge){return Ge.parentNode&&Ge.parentNode.removeChild(Ge)}),cu===P&&(cu=0),p&&(Ae&&(Ae.uncache=1),De=0,et.forEach(function(Ge){return Ge.pin===p&&De++}),De||(Ae.spacer=0)),i.onKill&&i.onKill(P)},et.push(P),P.enable(!1,!1),Dt&&Dt(P),r&&r.add&&!E){var ft=P.update;P.update=function(){P.update=ft,nt.cache++,D||at||P.refresh()},we.delayedCall(.01,P.update),E=.01,D=at=0}else P.refresh();p&&gD()},n.register=function(i){return ua||(we=i||G1(),V1()&&window.document&&n.enable(),ua=Bl),ua},n.defaults=function(i){if(i)for(var r in i)Yc[r]=i[r];return Yc},n.disable=function(i,r){Bl=0,et.forEach(function(o){return o[r?"kill":"disable"](i)}),fn(tt,"wheel",oa),fn(xt,"scroll",oa),clearInterval(Vc),fn(xt,"touchcancel",mr),fn(mt,"touchstart",mr),Xc(fn,xt,"pointerdown,touchstart,mousedown",Cx),Xc(fn,xt,"pointerup,touchend,mouseup",Rx),md.kill(),Wc(fn);for(var s=0;s<nt.length;s+=3)jc(fn,nt[s],nt[s+1]),jc(fn,nt[s],nt[s+2])},n.enable=function(){if(tt=window,xt=document,vi=xt.documentElement,mt=xt.body,we){if(ku=we.utils.toArray,ru=we.utils.clamp,h_=we.core.context||mr,ap=we.core.suppressOverwrites||mr,Wg=tt.history.scrollRestoration||"auto",__=tt.pageYOffset||0,we.core.globals("ScrollTrigger",n),mt){Bl=1,Ha=document.createElement("div"),Ha.style.height="100vh",Ha.style.position="absolute",J1(),cD(),Zt.register(we),n.isTouch=Zt.isTouch,ls=Zt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),d_=Zt.isTouch===1,dn(tt,"wheel",oa),Gg=[tt,xt,vi,mt],we.matchMedia?(n.matchMedia=function(c){var d=we.matchMedia(),f;for(f in c)d.add(f,c[f]);return d},we.addEventListener("matchMediaInit",function(){Z1(),Kg()}),we.addEventListener("matchMediaRevert",function(){return K1()}),we.addEventListener("matchMedia",function(){vo(0,1),Fo("matchMedia")}),we.matchMedia().add("(orientation: portrait)",function(){return cp(),cp})):console.warn("Requires GSAP 3.11.0 or later"),cp(),dn(xt,"scroll",oa);var i=mt.hasAttribute("style"),r=mt.style,s=r.borderTopStyle,o=we.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",a=Fr(mt),sn.m=Math.round(a.top+sn.sc())||0,Hn.m=Math.round(a.left+Hn.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),i||(mt.setAttribute("style",""),mt.removeAttribute("style")),Vc=setInterval(Lx,250),we.delayedCall(.5,function(){return Gc=0}),dn(xt,"touchcancel",mr),dn(mt,"touchstart",mr),Xc(dn,xt,"pointerdown,touchstart,mousedown",Cx),Xc(dn,xt,"pointerup,touchend,mouseup",Rx),f_=we.utils.checkPrefix("transform"),Cf.push(f_),ua=Cn(),md=we.delayedCall(.2,vo).pause(),ca=[xt,"visibilitychange",function(){var c=tt.innerWidth,d=tt.innerHeight;xt.hidden?(Ex=c,Tx=d):(Ex!==c||Tx!==d)&&Gl()},xt,"DOMContentLoaded",vo,tt,"load",vo,tt,"resize",Gl],Wc(dn),et.forEach(function(c){return c.enable(0,1)}),l=0;l<nt.length;l+=3)jc(fn,nt[l],nt[l+1]),jc(fn,nt[l],nt[l+2])}else if(xt){var u=function c(){n.enable(),xt.removeEventListener("DOMContentLoaded",c)};xt.addEventListener("DOMContentLoaded",u)}}},n.config=function(i){"limitCallbacks"in i&&(lp=!!i.limitCallbacks);var r=i.syncInterval;r&&clearInterval(Vc)||(Vc=r)&&setInterval(Lx,r),"ignoreMobileResize"in i&&(d_=n.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(Wc(fn)||Wc(dn,i.autoRefreshEvents||"none"),z1=(i.autoRefreshEvents+"").indexOf("resize")===-1)},n.scrollerProxy=function(i,r){var s=Yn(i),o=nt.indexOf(s),a=Uo(s);~o&&nt.splice(o,a?6:2),r&&(a?Tr.unshift(tt,r,mt,r,vi,r):Tr.unshift(s,r))},n.clearMatchMedia=function(i){et.forEach(function(r){return r._ctx&&r._ctx.query===i&&r._ctx.kill(!0,!0)})},n.isInViewport=function(i,r,s){var o=(_i(i)?Yn(i):i).getBoundingClientRect(),a=o[s?wo:Ao]*r||0;return s?o.right-a>0&&o.left+a<tt.innerWidth:o.bottom-a>0&&o.top+a<tt.innerHeight},n.positionInViewport=function(i,r,s){_i(i)&&(i=Yn(i));var o=i.getBoundingClientRect(),a=o[s?wo:Ao],l=r==null?a/2:r in gd?gd[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(o.left+l)/tt.innerWidth:(o.top+l)/tt.innerHeight},n.killAll=function(i){if(et.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),i!==!0){var r=Oo.killAll||[];Oo={},r.forEach(function(s){return s()})}},n}();rt.version="3.15.0";rt.saveStyles=function(n){return n?ku(n).forEach(function(e){if(e&&e.style){var t=pi.indexOf(e);t>=0&&pi.splice(t,5),pi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),we.core.getCache(e),h_())}}):pi};rt.revert=function(n,e){return Kg(!n,e)};rt.create=function(n,e){return new rt(n,e)};rt.refresh=function(n){return n?Gl(!0):(ua||rt.register())&&vo(!0)};rt.update=function(n){return++nt.cache&&Wr(n===!0?2:0)};rt.clearScrollMemory=Q1;rt.maxScroll=function(n,e){return yr(n,e?Hn:sn)};rt.getScrollFunc=function(n,e){return Hs(Yn(n),e?Hn:sn)};rt.getById=function(n){return m_[n]};rt.getAll=function(){return et.filter(function(n){return n.vars.id!=="ScrollSmoother"})};rt.isScrolling=function(){return!!ji};rt.snapDirectional=$g;rt.addEventListener=function(n,e){var t=Oo[n]||(Oo[n]=[]);~t.indexOf(e)||t.push(e)};rt.removeEventListener=function(n,e){var t=Oo[n],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)};rt.batch=function(n,e){var t=[],i={},r=e.interval||.016,s=e.batchMax||1e9,o=function(u,c){var d=[],f=[],p=we.delayedCall(r,function(){c(d,f),d=[],f=[]}).pause();return function(g){d.length||p.restart(!0),d.push(g.trigger),f.push(g),s<=d.length&&p.progress(1)}},a;for(a in e)i[a]=a.substr(0,2)==="on"&&Ln(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Ln(s)&&(s=s(),dn(rt,"refresh",function(){return s=e.batchMax()})),ku(n).forEach(function(l){var u={};for(a in i)u[a]=i[a];u.trigger=l,t.push(rt.create(u))}),t};var Fx=function(e,t,i,r){return t>r?e(r):t<0&&e(0),i>r?(r-t)/(i-t):i<0?t/(t-i):1},dp=function n(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Zt.isTouch?" pinch-zoom":""):"none",e===vi&&n(mt,t)},Zc={auto:1,scroll:1},MD=function(e){var t=e.event,i=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||we.core.getCache(s),a=Cn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==mt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Zc[(l=zi(s)).overflowY]||Zc[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==i&&!Uo(s)&&(Zc[(l=zi(s)).overflowY]||Zc[l.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},tE=function(e,t,i,r){return Zt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&MD,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return i&&dn(xt,Zt.eventTypes[0],zx,!1,!0)},onDisable:function(){return fn(xt,Zt.eventTypes[0],zx,!0)}})},ED=/(input|label|select|textarea)/i,kx,zx=function(e){var t=ED.test(e.target.tagName);(t||kx)&&(e._gsapAllow=!0,kx=t)},TD=function(e){ao(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,i=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,u=Yn(e.target)||vi,c=we.core.globals().ScrollSmoother,d=c&&c.get(),f=ls&&(e.content&&Yn(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),p=Hs(u,sn),g=Hs(u,Hn),_=1,m=(Zt.isTouch&&tt.visualViewport?tt.visualViewport.scale*tt.visualViewport.width:tt.outerWidth)/tt.innerWidth,h=0,v=Ln(r)?function(){return r(a)}:function(){return r||2.8},x,S,A=tE(u,e.type,!0,s),w=function(){return S=!1},M=mr,R=mr,L=function(){l=yr(u,sn),R=ru(ls?1:0,l),i&&(M=ru(0,yr(u,Hn))),x=Co},y=function(){f._gsap.y=Hl(parseFloat(f._gsap.y)+p.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",p.offset=p.cacheID=0},T=function(){if(S){requestAnimationFrame(w);var N=Hl(a.deltaY/2),K=R(p.v-N);if(f&&K!==p.v+p.offset){p.offset=K-p.v;var P=Hl((parseFloat(f&&f._gsap.y)||0)-p.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",f._gsap.y=P+"px",p.cacheID=nt.cache,Wr()}return!0}p.offset&&y(),S=!0},U,B,j,Z,G=function(){L(),U.isActive()&&U.vars.scrollY>l&&(p()>l?U.progress(1)&&p(l):U.resetTo("scrollY",l))};return f&&we.set(f,{y:"+=0"}),e.ignoreCheck=function(Y){return ls&&Y.type==="touchmove"&&T()||_>1.05&&Y.type!=="touchstart"||a.isGesturing||Y.touches&&Y.touches.length>1},e.onPress=function(){S=!1;var Y=_;_=Hl((tt.visualViewport&&tt.visualViewport.scale||1)/m),U.pause(),Y!==_&&dp(u,_>1.01?!0:i?!1:"x"),B=g(),j=p(),L(),x=Co},e.onRelease=e.onGestureStart=function(Y,N){if(p.offset&&y(),!N)Z.restart(!0);else{nt.cache++;var K=v(),P,ne;i&&(P=g(),ne=P+K*.05*-Y.velocityX/.227,K*=Fx(g,P,ne,yr(u,Hn)),U.vars.scrollX=M(ne)),P=p(),ne=P+K*.05*-Y.velocityY/.227,K*=Fx(p,P,ne,yr(u,sn)),U.vars.scrollY=R(ne),U.invalidate().duration(K).play(.01),(ls&&U.vars.scrollY>=l||P>=l-1)&&we.to({},{onUpdate:G,duration:K})}o&&o(Y)},e.onWheel=function(){U._ts&&U.pause(),Cn()-h>1e3&&(x=0,h=Cn())},e.onChange=function(Y,N,K,P,ne){if(Co!==x&&L(),N&&i&&g(M(P[2]===N?B+(Y.startX-Y.x):g()+N-P[1])),K){p.offset&&y();var Se=ne[2]===K,He=Se?j+Y.startY-Y.y:p()+K-ne[1],q=R(He);Se&&He!==q&&(j+=q-He),p(q)}(K||N)&&Wr()},e.onEnable=function(){dp(u,i?!1:"x"),rt.addEventListener("refresh",G),dn(tt,"resize",G),p.smooth&&(p.target.style.scrollBehavior="auto",p.smooth=g.smooth=!1),A.enable()},e.onDisable=function(){dp(u,!0),fn(tt,"resize",G),rt.removeEventListener("refresh",G),A.kill()},e.lockAxis=e.lockAxis!==!1,a=new Zt(e),a.iOS=ls,ls&&!p()&&p(1),ls&&we.ticker.add(mr),Z=a._dc,U=we.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:eE(p,p(),function(){return U.pause()})},onUpdate:Wr,onComplete:Z.vars.onComplete}),a};rt.sort=function(n){if(Ln(n))return et.sort(n);var e=tt.pageYOffset||0;return rt.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+tt.innerHeight}),et.sort(n||function(t,i){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};rt.observe=function(n){return new Zt(n)};rt.normalizeScroll=function(n){if(typeof n>"u")return Fn;if(n===!0&&Fn)return Fn.enable();if(n===!1){Fn&&Fn.kill(),Fn=n;return}var e=n instanceof Zt?n:TD(n);return Fn&&Fn.target===e.target&&Fn.kill(),Uo(e.target)&&(Fn=e),e};rt.core={_getVelocityProp:c_,_inputObserver:tE,_scrollers:nt,_proxies:Tr,bridge:{ss:function(){ji||Fo("scrollStart"),ji=Cn()},ref:function(){return An}}};G1()&&we.registerPlugin(rt);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wD=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),nE=(...n)=>n.filter((e,t,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var AD={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CD=Ti.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:o,...a},l)=>Ti.createElement("svg",{ref:l,...AD,width:e,height:e,stroke:n,strokeWidth:i?Number(t)*24/Number(e):t,className:nE("lucide",r),...a},[...o.map(([u,c])=>Ti.createElement(u,c)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ui=(n,e)=>{const t=Ti.forwardRef(({className:i,...r},s)=>Ti.createElement(CD,{ref:s,iconNode:e,className:nE(`lucide-${wD(n)}`,i),...r}));return t.displayName=`${n}`,t};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aa=ui("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hp=ui("Bike",[["circle",{cx:"18.5",cy:"17.5",r:"3.5",key:"15x4ox"}],["circle",{cx:"5.5",cy:"17.5",r:"3.5",key:"1noe27"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["path",{d:"M12 17.5V14l-3-3 4-3 2 3h2",key:"1npguv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qc=ui("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RD=ui("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PD=ui("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bD=ui("Handshake",[["path",{d:"m11 17 2 2a1 1 0 1 0 3-3",key:"efffak"}],["path",{d:"m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4",key:"9pr0kb"}],["path",{d:"m21 3 1 11h-2",key:"1tisrp"}],["path",{d:"M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3",key:"1uvwmv"}],["path",{d:"M3 4h8",key:"1ep09j"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pp=ui("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bx=ui("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LD=ui("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jc=ui("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DD=ui("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ND=ui("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hx=ui("Store",[["path",{d:"m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7",key:"ztvudi"}],["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}],["path",{d:"M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4",key:"2ebpfo"}],["path",{d:"M2 7h20",key:"1fcdvo"}],["path",{d:"M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7",key:"6c3vgh"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ID=ui("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);Fu.registerPlugin(rt);const UD="#071c18",OD="919266895814",la=n=>`https://wa.me/${OD}?text=${encodeURIComponent(n)}`;function Vx(){const n=Ti.useRef(null);return Ti.useEffect(()=>{const e=n.current,t=new Ob;t.fog=new Sg(UD,.035);const i=new Fi(42,1,.1,100);i.position.set(0,0,11);const r=new Ub({canvas:e,antialias:!0,alpha:!0});r.setPixelRatio(Math.min(window.devicePixelRatio,1.7)),r.setClearColor(0,0);const s=new Ol;t.add(s);const o=[],a=new od(.065,12,12),l=new uo({color:3594616}),u=new uo({color:8844208}),c=new uo({color:16754734});for(let L=0;L<34;L++){const y=Math.random()*Math.PI*2,T=2+Math.random()*3.3,U=new Vi(a,L%7===0?l:L%9===0?c:u);U.position.set(Math.cos(y)*T*1.2,Math.sin(y)*T*.63,(Math.random()-.5)*1.3),s.add(U),o.push(U)}const d=new IM({color:1754209,transparent:!0,opacity:.16}),f=[];for(let L=0;L<o.length;L++){let y=null,T=1/0;for(let U=0;U<o.length;U++){if(L===U)continue;const B=o[L].position.distanceTo(o[U].position);B<T&&B<2&&(T=B,y=o[U])}if(y){const U=new cr().setFromPoints([o[L].position,y.position]),B=new Fb(U,d);s.add(B),f.push(B)}}const p=new Vi(new Tg(.55,2),new uo({color:1489239,wireframe:!0,transparent:!0,opacity:.55}));s.add(p);const g=new Vi(new od(.11,16,16),new uo({color:16777215}));s.add(g);const _=[new H(-3.7,-1.2,.2),new H(-2,-.55,.4),new H(-.7,-.15,.5),new H(.8,.25,.4),new H(2,.55,.2),new H(3.6,1.15,0)],m=new zb(_),h={x:0,y:0},v={x:0,y:0},x=()=>{const L=e.clientWidth||e.parentElement.clientWidth,y=e.clientHeight||e.parentElement.clientHeight;r.setSize(L,y,!1),i.aspect=L/y,i.updateProjectionMatrix()};x(),window.addEventListener("resize",x);const S=L=>{v.x=(L.clientX/window.innerWidth-.5)*.8,v.y=(L.clientY/window.innerHeight-.5)*.5};window.addEventListener("pointermove",S);let A;const w=new Bb,M=()=>{A=requestAnimationFrame(M);const L=w.getElapsedTime();h.x+=(v.x-h.x)*.035,h.y+=(v.y-h.y)*.035,s.rotation.y=h.x*.18+Math.sin(L*.08)*.05,s.rotation.x=-h.y*.1,p.rotation.x=L*.22,p.rotation.y=L*.3,p.scale.setScalar(1+Math.sin(L*2.4)*.06);const y=L*.07%1;g.position.copy(m.getPoint(y)),g.scale.setScalar(1+Math.sin(L*8)*.22),f.forEach((T,U)=>{T.material.opacity=.1+(Math.sin(L*1.2+U)+1)*.045}),r.render(t,i)};return M(),window.matchMedia("(prefers-reduced-motion: reduce)").matches&&(s.rotation.y=0),()=>{cancelAnimationFrame(A),window.removeEventListener("resize",x),window.removeEventListener("pointermove",S),r.dispose(),a.dispose(),l.dispose(),u.dispose(),c.dispose(),d.dispose(),p.geometry.dispose(),p.material.dispose(),g.geometry.dispose(),g.material.dispose()}},[]),I.jsx("canvas",{ref:n,className:"network-canvas","aria-hidden":"true"})}function jn({children:n,className:e=""}){const t=Ti.useRef(null);return Ti.useEffect(()=>{const i=t.current;Fu.fromTo(i,{y:34,opacity:0},{y:0,opacity:1,duration:.8,ease:"power3.out",scrollTrigger:{trigger:i,start:"top 84%",once:!0}})},[]),I.jsx("div",{ref:t,className:e,children:n})}const FD=[["Kirana","Daily essentials from the shop around you.","01"],["Food Stalls","Your favourite local bites, ordered nearby.","02"],["Stationery","The small things you need, close to home.","03"],["Electronics","Accessories and essentials from local stores.","04"]];function kD(){const[n,e]=yE.useState(!1);return Ti.useEffect(()=>{document.documentElement.style.scrollBehavior="smooth",Fu.utils.toArray(".story-card").forEach((i,r)=>{Fu.fromTo(i,{y:45,opacity:0},{y:0,opacity:1,duration:.75,delay:r*.04,ease:"power3.out",scrollTrigger:{trigger:i,start:"top 88%",once:!0}})})},[]),I.jsxs("main",{children:[I.jsxs("header",{className:"nav",children:[I.jsxs("a",{className:"brand",href:"#top","aria-label":"AasPass home",children:[I.jsx("img",{src:"/assets/aaspass-icon.png",alt:""}),I.jsxs("span",{children:["Aas",I.jsx("span",{children:"Pass"})]})]}),I.jsxs("nav",{className:n?"nav-links open":"nav-links",children:[I.jsx("a",{href:"#how",onClick:()=>e(!1),children:"How it works"}),I.jsx("a",{href:"#shops",onClick:()=>e(!1),children:"For shops"}),I.jsx("a",{href:"#delivery",onClick:()=>e(!1),children:"Delivery partners"}),I.jsx("a",{href:"#network",onClick:()=>e(!1),children:"Our network"}),I.jsxs("a",{className:"nav-cta",href:"#join",onClick:()=>e(!1),children:["Join AasPass ",I.jsx(aa,{size:16})]})]}),I.jsxs("div",{className:"nav-actions",children:[I.jsxs("a",{className:"nav-whatsapp",href:la("Hi AasPass! I want to know more about the platform."),target:"_blank",rel:"noreferrer","aria-label":"Chat with AasPass on WhatsApp",children:[I.jsx(Jc,{size:17})," WhatsApp"]}),I.jsx("a",{className:"nav-partner",href:"#join",onClick:()=>e(!1),children:"Become a partner"})]}),I.jsx("button",{className:"menu-btn",onClick:()=>e(!n),"aria-label":"Toggle menu",children:n?I.jsx(ID,{}):I.jsx(LD,{})})]}),I.jsxs("section",{className:"hero",id:"top",children:[I.jsx(Vx,{}),I.jsx("div",{className:"hero-glow"}),I.jsxs("div",{className:"hero-content",children:[I.jsxs("div",{className:"eyebrow",children:[I.jsx("span",{className:"live-dot"})," THE LOCAL NETWORK"]}),I.jsxs("h1",{children:["What you need.",I.jsx("br",{}),I.jsx("em",{children:"Right around you."})]}),I.jsx("p",{children:"AasPass brings neighbourhood shops, customers and local delivery partners together — making everyday commerce feel close again."}),I.jsxs("div",{className:"hero-actions",children:[I.jsxs("a",{className:"btn primary",href:"#how",children:["Discover AasPass ",I.jsx(aa,{size:18})]}),I.jsxs("a",{className:"btn ghost",href:"#shops",children:["I'm a local business ",I.jsx(RD,{size:18})]})]}),I.jsxs("div",{className:"hero-note",children:[I.jsx(Bx,{size:15})," Built around the neighbourhood"]})]}),I.jsxs("div",{className:"hero-scroll",children:["SCROLL TO EXPLORE ",I.jsx("span",{children:"↓"})]})]}),I.jsxs("section",{className:"statement",children:[I.jsxs(jn,{children:[I.jsx("p",{className:"kicker",children:"THE IDEA"}),I.jsxs("h2",{children:["Why go far when your neighbourhood already has ",I.jsx("span",{children:"what you need?"})]})]}),I.jsxs(jn,{className:"statement-grid",children:[I.jsx("p",{children:"From the kirana shop you have known for years to the food stall around the corner, AasPass puts local businesses within easy digital reach."}),I.jsx("p",{children:"Order nearby. Support nearby. Let someone from the neighbourhood bring it to your door."})]})]}),I.jsxs("section",{className:"how",id:"how",children:[I.jsx("div",{className:"section-head",children:I.jsxs(jn,{children:[I.jsx("p",{className:"kicker",children:"HOW IT WORKS"}),I.jsxs("h2",{children:["Three simple moves.",I.jsx("br",{}),I.jsx("span",{children:"One local loop."})]})]})}),I.jsxs("div",{className:"steps",children:[I.jsxs(jn,{className:"step",children:[I.jsx("div",{className:"step-num",children:"01"}),I.jsx(Hx,{size:25}),I.jsx("h3",{children:"Find a local shop"}),I.jsx("p",{children:"See businesses around your neighbourhood and discover what is available nearby."})]}),I.jsx("div",{className:"connector",children:"→"}),I.jsxs(jn,{className:"step",children:[I.jsx("div",{className:"step-num",children:"02"}),I.jsx(DD,{size:25}),I.jsx("h3",{children:"Place your order"}),I.jsx("p",{children:"Choose what you need, confirm your order and let the shop prepare it."})]}),I.jsx("div",{className:"connector",children:"→"}),I.jsxs(jn,{className:"step",children:[I.jsx("div",{className:"step-num",children:"03"}),I.jsx(hp,{size:25}),I.jsx("h3",{children:"Get it locally"}),I.jsx("p",{children:"A nearby delivery partner picks it up and brings it to your home."})]})]})]}),I.jsxs("section",{className:"showcase",id:"shops",children:[I.jsx("div",{className:"showcase-copy",children:I.jsxs(jn,{children:[I.jsx("p",{className:"kicker",children:"FOR LOCAL SHOPS"}),I.jsxs("h2",{children:["Your shop deserves ",I.jsx("span",{children:"your neighbourhood."})]}),I.jsx("p",{className:"lead",children:"AasPass helps local businesses get discovered, receive digital orders and keep serving the people closest to them."}),I.jsxs("ul",{children:[I.jsxs("li",{children:[I.jsx(Qc,{size:17})," Reach nearby customers"]}),I.jsxs("li",{children:[I.jsx(Qc,{size:17})," Manage orders digitally"]}),I.jsxs("li",{children:[I.jsx(Qc,{size:17})," Build your local presence"]}),I.jsxs("li",{children:[I.jsx(Qc,{size:17})," Keep commerce close"]})]}),I.jsxs("div",{className:"partner-actions",children:[I.jsxs("a",{className:"text-link",href:la("Hi AasPass! I am a local vendor and want to become an AasPass partner."),target:"_blank",rel:"noreferrer",children:[I.jsx(Jc,{size:17})," Become a vendor ",I.jsx(aa,{size:17})]}),I.jsxs("a",{className:"text-link secondary",href:"mailto:hello.aaspass@gmail.com?subject=Become%20an%20AasPass%20Partner",children:[I.jsx(pp,{size:17})," Email us ",I.jsx(aa,{size:17})]})]})]})}),I.jsxs(jn,{className:"vendor-card",children:[I.jsxs("div",{className:"mock-top",children:[I.jsx("span",{className:"mock-dot"}),I.jsx("span",{className:"mock-title",children:"AasPass Partner"}),I.jsx("span",{className:"mock-more",children:"•••"})]}),I.jsxs("div",{className:"mock-welcome",children:["Good evening, ",I.jsx("b",{children:"Lala Ji"})]}),I.jsxs("div",{className:"mock-order",children:[I.jsxs("div",{children:[I.jsx("small",{children:"NEW ORDER"}),I.jsx("strong",{children:"2 items · ₹68"})]}),I.jsx("span",{className:"accept",children:"View"})]}),I.jsxs("div",{className:"mock-order",children:[I.jsxs("div",{children:[I.jsx("small",{children:"PREPARING"}),I.jsx("strong",{children:"4 items · ₹124"})]}),I.jsx("span",{className:"preparing",children:"Preparing"})]}),I.jsxs("div",{className:"mock-stat",children:[I.jsxs("div",{children:[I.jsx("span",{children:"Today's orders"}),I.jsx("b",{children:"28"})]}),I.jsxs("div",{children:[I.jsx("span",{children:"Local customers"}),I.jsx("b",{children:"114"})]})]})]})]}),I.jsxs("section",{className:"delivery",id:"delivery",children:[I.jsxs("div",{className:"delivery-art",children:[I.jsx("div",{className:"route-line"}),I.jsx("div",{className:"route-node shop-node",children:I.jsx(Hx,{})}),I.jsx("div",{className:"route-node home-node",children:I.jsx(Bx,{})}),I.jsx("div",{className:"rider",children:I.jsx(hp,{})}),I.jsx("div",{className:"delivery-label shop-label",children:"LOCAL SHOP"}),I.jsx("div",{className:"delivery-label home-label",children:"YOUR HOME"})]}),I.jsx("div",{className:"delivery-copy",children:I.jsxs(jn,{children:[I.jsx("p",{className:"kicker",children:"FOR DELIVERY PARTNERS"}),I.jsxs("h2",{children:["Earn locally.",I.jsx("br",{}),I.jsx("span",{children:"Move locally."})]}),I.jsx("p",{className:"lead",children:"Short-distance neighbourhood deliveries can create a simple local earning opportunity for people already moving around their area."}),I.jsx("div",{className:"quote",children:"“Local deliveries. Local distances. Local opportunity.”"}),I.jsxs("div",{className:"partner-actions",children:[I.jsxs("a",{className:"btn primary",href:la("Hi AasPass! I want to become a local delivery partner."),target:"_blank",rel:"noreferrer",children:[I.jsx(Jc,{size:18})," Join as delivery partner ",I.jsx(aa,{size:18})]}),I.jsxs("a",{className:"btn outline-light",href:"mailto:hello.aaspass@gmail.com?subject=Become%20an%20AasPass%20Delivery%20Partner",children:[I.jsx(pp,{size:18})," Email us"]})]})]})})]}),I.jsxs("section",{className:"categories",children:[I.jsxs(jn,{children:[I.jsx("p",{className:"kicker",children:"WHAT'S AROUND YOU"}),I.jsxs("h2",{children:["Local has",I.jsx("br",{}),I.jsx("span",{children:"more to offer."})]})]}),I.jsx("div",{className:"category-grid",children:FD.map(([t,i,r])=>I.jsxs("article",{className:"story-card",children:[I.jsx("span",{children:r}),I.jsx("div",{className:"category-icon",children:I.jsx(ND,{size:20})}),I.jsx("h3",{children:t}),I.jsx("p",{children:i}),I.jsx(aa,{className:"corner-arrow",size:19})]},t))})]}),I.jsx("section",{className:"network-section",id:"network",children:I.jsxs("div",{className:"network-inner",children:[I.jsx(Vx,{}),I.jsxs(jn,{className:"network-copy",children:[I.jsx("p",{className:"kicker",children:"THE AASPASS NETWORK"}),I.jsxs("h2",{children:["Every shop.",I.jsx("br",{}),"Every home.",I.jsx("br",{}),I.jsx("span",{children:"Connected locally."})]}),I.jsx("p",{children:"One neighbourhood can become a living network — with local businesses at the centre and local people helping things move."})]})]})}),I.jsx("section",{className:"manifesto",children:I.jsxs(jn,{children:[I.jsx("p",{className:"kicker",children:"THE BIG IDEA"}),I.jsxs("h2",{children:["Local isn't old-fashioned.",I.jsx("br",{}),I.jsx("span",{children:"It's the future."})]}),I.jsx("img",{src:"/assets/aaspass-logo.png",alt:"AasPass — Jo chahiye, aas-paas se."})]})}),I.jsxs("section",{className:"brand-film",children:[I.jsx("div",{className:"film-wrap",children:I.jsx("video",{src:"/assets/aaspass-brand-animation.mp4",controls:!0,playsInline:!0,muted:!0,poster:"/assets/aaspass-logo.png"})}),I.jsx(jn,{children:I.jsxs("p",{className:"film-caption",children:["A small order. A nearby shop. A local delivery. ",I.jsx("span",{children:"That's the AasPass loop."})]})})]}),I.jsx("section",{className:"join",id:"join",children:I.jsxs(jn,{children:[I.jsx("p",{className:"kicker",children:"START LOCAL"}),I.jsxs("h2",{children:["Let's make",I.jsx("br",{}),I.jsx("span",{children:"local stronger."})]}),I.jsx("p",{children:"For customers, shops and delivery partners — AasPass is being built around the people already making neighbourhoods work."}),I.jsxs("div",{className:"join-actions",children:[I.jsxs("a",{className:"btn light",href:la("Hi AasPass! I want to partner with you."),target:"_blank",rel:"noreferrer",children:[I.jsx(Jc,{size:18})," WhatsApp us"]}),I.jsxs("a",{className:"btn light secondary-light",href:"mailto:hello.aaspass@gmail.com",children:[I.jsx(pp,{size:18})," hello.aaspass@gmail.com"]})]}),I.jsxs("div",{className:"quick-contact",children:[I.jsxs("a",{href:"#shops",children:[I.jsx(bD,{size:17})," Vendor / Shop"]}),I.jsxs("a",{href:"#delivery",children:[I.jsx(hp,{size:17})," Delivery Partner"]}),I.jsxs("a",{href:la("Hi AasPass Support! I need help."),target:"_blank",rel:"noreferrer",children:[I.jsx(PD,{size:17})," Help on WhatsApp"]})]})]})}),I.jsxs("footer",{children:[I.jsxs("div",{className:"footer-brand",children:[I.jsx("img",{src:"/assets/aaspass-icon.png",alt:""}),I.jsxs("div",{children:[I.jsxs("strong",{children:["Aas",I.jsx("span",{children:"Pass"})]}),I.jsx("small",{children:"Jo chahiye, aas-paas se."})]})]}),I.jsxs("div",{className:"footer-links",children:[I.jsx("a",{href:"#how",children:"How it works"}),I.jsx("a",{href:"#shops",children:"For vendors"}),I.jsx("a",{href:"#delivery",children:"Delivery partners"}),I.jsx("a",{href:la("Hi AasPass! I need help."),target:"_blank",rel:"noreferrer",children:"Help / WhatsApp"}),I.jsx("a",{href:"mailto:hello.aaspass@gmail.com",children:"Email"})]}),I.jsx("p",{className:"copyright",children:"© 2026 AasPass. Local shops. Local people. Local delivery."})]})]})}tM(document.getElementById("root")).render(I.jsx(kD,{}));
