(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();var dd={exports:{}},Ma={},fd={exports:{}},ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var og;function ww(){if(og)return ke;og=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),R=Symbol.iterator;function C(O){return O===null||typeof O!="object"?null:(O=R&&O[R]||O["@@iterator"],typeof O=="function"?O:null)}var z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Q=Object.assign,J={};function W(O,$,ce){this.props=O,this.context=$,this.refs=J,this.updater=ce||z}W.prototype.isReactComponent={},W.prototype.setState=function(O,$){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,$,"setState")},W.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function fe(){}fe.prototype=W.prototype;function ge(O,$,ce){this.props=O,this.context=$,this.refs=J,this.updater=ce||z}var ye=ge.prototype=new fe;ye.constructor=ge,Q(ye,W.prototype),ye.isPureReactComponent=!0;var Pe=Array.isArray,Ke=Object.prototype.hasOwnProperty,Ce={current:null},x={key:!0,ref:!0,__self:!0,__source:!0};function T(O,$,ce){var Ae,Se={},Re=null,Fe=null;if($!=null)for(Ae in $.ref!==void 0&&(Fe=$.ref),$.key!==void 0&&(Re=""+$.key),$)Ke.call($,Ae)&&!x.hasOwnProperty(Ae)&&(Se[Ae]=$[Ae]);var Le=arguments.length-2;if(Le===1)Se.children=ce;else if(1<Le){for(var $e=Array(Le),mt=0;mt<Le;mt++)$e[mt]=arguments[mt+2];Se.children=$e}if(O&&O.defaultProps)for(Ae in Le=O.defaultProps,Le)Se[Ae]===void 0&&(Se[Ae]=Le[Ae]);return{$$typeof:i,type:O,key:Re,ref:Fe,props:Se,_owner:Ce.current}}function A(O,$){return{$$typeof:i,type:O.type,key:$,ref:O.ref,props:O.props,_owner:O._owner}}function N(O){return typeof O=="object"&&O!==null&&O.$$typeof===i}function V(O){var $={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ce){return $[ce]})}var D=/\/+/g;function S(O,$){return typeof O=="object"&&O!==null&&O.key!=null?V(""+O.key):$.toString(36)}function Je(O,$,ce,Ae,Se){var Re=typeof O;(Re==="undefined"||Re==="boolean")&&(O=null);var Fe=!1;if(O===null)Fe=!0;else switch(Re){case"string":case"number":Fe=!0;break;case"object":switch(O.$$typeof){case i:case e:Fe=!0}}if(Fe)return Fe=O,Se=Se(Fe),O=Ae===""?"."+S(Fe,0):Ae,Pe(Se)?(ce="",O!=null&&(ce=O.replace(D,"$&/")+"/"),Je(Se,$,ce,"",function(mt){return mt})):Se!=null&&(N(Se)&&(Se=A(Se,ce+(!Se.key||Fe&&Fe.key===Se.key?"":(""+Se.key).replace(D,"$&/")+"/")+O)),$.push(Se)),1;if(Fe=0,Ae=Ae===""?".":Ae+":",Pe(O))for(var Le=0;Le<O.length;Le++){Re=O[Le];var $e=Ae+S(Re,Le);Fe+=Je(Re,$,ce,$e,Se)}else if($e=C(O),typeof $e=="function")for(O=$e.call(O),Le=0;!(Re=O.next()).done;)Re=Re.value,$e=Ae+S(Re,Le++),Fe+=Je(Re,$,ce,$e,Se);else if(Re==="object")throw $=String(O),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.");return Fe}function pt(O,$,ce){if(O==null)return O;var Ae=[],Se=0;return Je(O,Ae,"","",function(Re){return $.call(ce,Re,Se++)}),Ae}function Tt(O){if(O._status===-1){var $=O._result;$=$(),$.then(function(ce){(O._status===0||O._status===-1)&&(O._status=1,O._result=ce)},function(ce){(O._status===0||O._status===-1)&&(O._status=2,O._result=ce)}),O._status===-1&&(O._status=0,O._result=$)}if(O._status===1)return O._result.default;throw O._result}var Oe={current:null},ee={transition:null},he={ReactCurrentDispatcher:Oe,ReactCurrentBatchConfig:ee,ReactCurrentOwner:Ce};function ne(){throw Error("act(...) is not supported in production builds of React.")}return ke.Children={map:pt,forEach:function(O,$,ce){pt(O,function(){$.apply(this,arguments)},ce)},count:function(O){var $=0;return pt(O,function(){$++}),$},toArray:function(O){return pt(O,function($){return $})||[]},only:function(O){if(!N(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},ke.Component=W,ke.Fragment=t,ke.Profiler=o,ke.PureComponent=ge,ke.StrictMode=s,ke.Suspense=y,ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=he,ke.act=ne,ke.cloneElement=function(O,$,ce){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var Ae=Q({},O.props),Se=O.key,Re=O.ref,Fe=O._owner;if($!=null){if($.ref!==void 0&&(Re=$.ref,Fe=Ce.current),$.key!==void 0&&(Se=""+$.key),O.type&&O.type.defaultProps)var Le=O.type.defaultProps;for($e in $)Ke.call($,$e)&&!x.hasOwnProperty($e)&&(Ae[$e]=$[$e]===void 0&&Le!==void 0?Le[$e]:$[$e])}var $e=arguments.length-2;if($e===1)Ae.children=ce;else if(1<$e){Le=Array($e);for(var mt=0;mt<$e;mt++)Le[mt]=arguments[mt+2];Ae.children=Le}return{$$typeof:i,type:O.type,key:Se,ref:Re,props:Ae,_owner:Fe}},ke.createContext=function(O){return O={$$typeof:h,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:u,_context:O},O.Consumer=O},ke.createElement=T,ke.createFactory=function(O){var $=T.bind(null,O);return $.type=O,$},ke.createRef=function(){return{current:null}},ke.forwardRef=function(O){return{$$typeof:m,render:O}},ke.isValidElement=N,ke.lazy=function(O){return{$$typeof:w,_payload:{_status:-1,_result:O},_init:Tt}},ke.memo=function(O,$){return{$$typeof:_,type:O,compare:$===void 0?null:$}},ke.startTransition=function(O){var $=ee.transition;ee.transition={};try{O()}finally{ee.transition=$}},ke.unstable_act=ne,ke.useCallback=function(O,$){return Oe.current.useCallback(O,$)},ke.useContext=function(O){return Oe.current.useContext(O)},ke.useDebugValue=function(){},ke.useDeferredValue=function(O){return Oe.current.useDeferredValue(O)},ke.useEffect=function(O,$){return Oe.current.useEffect(O,$)},ke.useId=function(){return Oe.current.useId()},ke.useImperativeHandle=function(O,$,ce){return Oe.current.useImperativeHandle(O,$,ce)},ke.useInsertionEffect=function(O,$){return Oe.current.useInsertionEffect(O,$)},ke.useLayoutEffect=function(O,$){return Oe.current.useLayoutEffect(O,$)},ke.useMemo=function(O,$){return Oe.current.useMemo(O,$)},ke.useReducer=function(O,$,ce){return Oe.current.useReducer(O,$,ce)},ke.useRef=function(O){return Oe.current.useRef(O)},ke.useState=function(O){return Oe.current.useState(O)},ke.useSyncExternalStore=function(O,$,ce){return Oe.current.useSyncExternalStore(O,$,ce)},ke.useTransition=function(){return Oe.current.useTransition()},ke.version="18.3.1",ke}var ag;function sf(){return ag||(ag=1,fd.exports=ww()),fd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lg;function Tw(){if(lg)return Ma;lg=1;var i=sf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function h(m,y,_){var w,R={},C=null,z=null;_!==void 0&&(C=""+_),y.key!==void 0&&(C=""+y.key),y.ref!==void 0&&(z=y.ref);for(w in y)s.call(y,w)&&!u.hasOwnProperty(w)&&(R[w]=y[w]);if(m&&m.defaultProps)for(w in y=m.defaultProps,y)R[w]===void 0&&(R[w]=y[w]);return{$$typeof:e,type:m,key:C,ref:z,props:R,_owner:o.current}}return Ma.Fragment=t,Ma.jsx=h,Ma.jsxs=h,Ma}var ug;function Iw(){return ug||(ug=1,dd.exports=Tw()),dd.exports}var F=Iw(),ze=sf(),Du={},pd={exports:{}},an={},md={exports:{}},gd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cg;function Sw(){return cg||(cg=1,function(i){function e(ee,he){var ne=ee.length;ee.push(he);e:for(;0<ne;){var O=ne-1>>>1,$=ee[O];if(0<o($,he))ee[O]=he,ee[ne]=$,ne=O;else break e}}function t(ee){return ee.length===0?null:ee[0]}function s(ee){if(ee.length===0)return null;var he=ee[0],ne=ee.pop();if(ne!==he){ee[0]=ne;e:for(var O=0,$=ee.length,ce=$>>>1;O<ce;){var Ae=2*(O+1)-1,Se=ee[Ae],Re=Ae+1,Fe=ee[Re];if(0>o(Se,ne))Re<$&&0>o(Fe,Se)?(ee[O]=Fe,ee[Re]=ne,O=Re):(ee[O]=Se,ee[Ae]=ne,O=Ae);else if(Re<$&&0>o(Fe,ne))ee[O]=Fe,ee[Re]=ne,O=Re;else break e}}return he}function o(ee,he){var ne=ee.sortIndex-he.sortIndex;return ne!==0?ne:ee.id-he.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var h=Date,m=h.now();i.unstable_now=function(){return h.now()-m}}var y=[],_=[],w=1,R=null,C=3,z=!1,Q=!1,J=!1,W=typeof setTimeout=="function"?setTimeout:null,fe=typeof clearTimeout=="function"?clearTimeout:null,ge=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ye(ee){for(var he=t(_);he!==null;){if(he.callback===null)s(_);else if(he.startTime<=ee)s(_),he.sortIndex=he.expirationTime,e(y,he);else break;he=t(_)}}function Pe(ee){if(J=!1,ye(ee),!Q)if(t(y)!==null)Q=!0,Tt(Ke);else{var he=t(_);he!==null&&Oe(Pe,he.startTime-ee)}}function Ke(ee,he){Q=!1,J&&(J=!1,fe(T),T=-1),z=!0;var ne=C;try{for(ye(he),R=t(y);R!==null&&(!(R.expirationTime>he)||ee&&!V());){var O=R.callback;if(typeof O=="function"){R.callback=null,C=R.priorityLevel;var $=O(R.expirationTime<=he);he=i.unstable_now(),typeof $=="function"?R.callback=$:R===t(y)&&s(y),ye(he)}else s(y);R=t(y)}if(R!==null)var ce=!0;else{var Ae=t(_);Ae!==null&&Oe(Pe,Ae.startTime-he),ce=!1}return ce}finally{R=null,C=ne,z=!1}}var Ce=!1,x=null,T=-1,A=5,N=-1;function V(){return!(i.unstable_now()-N<A)}function D(){if(x!==null){var ee=i.unstable_now();N=ee;var he=!0;try{he=x(!0,ee)}finally{he?S():(Ce=!1,x=null)}}else Ce=!1}var S;if(typeof ge=="function")S=function(){ge(D)};else if(typeof MessageChannel<"u"){var Je=new MessageChannel,pt=Je.port2;Je.port1.onmessage=D,S=function(){pt.postMessage(null)}}else S=function(){W(D,0)};function Tt(ee){x=ee,Ce||(Ce=!0,S())}function Oe(ee,he){T=W(function(){ee(i.unstable_now())},he)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(ee){ee.callback=null},i.unstable_continueExecution=function(){Q||z||(Q=!0,Tt(Ke))},i.unstable_forceFrameRate=function(ee){0>ee||125<ee?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<ee?Math.floor(1e3/ee):5},i.unstable_getCurrentPriorityLevel=function(){return C},i.unstable_getFirstCallbackNode=function(){return t(y)},i.unstable_next=function(ee){switch(C){case 1:case 2:case 3:var he=3;break;default:he=C}var ne=C;C=he;try{return ee()}finally{C=ne}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(ee,he){switch(ee){case 1:case 2:case 3:case 4:case 5:break;default:ee=3}var ne=C;C=ee;try{return he()}finally{C=ne}},i.unstable_scheduleCallback=function(ee,he,ne){var O=i.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?O+ne:O):ne=O,ee){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=ne+$,ee={id:w++,callback:he,priorityLevel:ee,startTime:ne,expirationTime:$,sortIndex:-1},ne>O?(ee.sortIndex=ne,e(_,ee),t(y)===null&&ee===t(_)&&(J?(fe(T),T=-1):J=!0,Oe(Pe,ne-O))):(ee.sortIndex=$,e(y,ee),Q||z||(Q=!0,Tt(Ke))),ee},i.unstable_shouldYield=V,i.unstable_wrapCallback=function(ee){var he=C;return function(){var ne=C;C=he;try{return ee.apply(this,arguments)}finally{C=ne}}}}(gd)),gd}var hg;function Aw(){return hg||(hg=1,md.exports=Sw()),md.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dg;function Cw(){if(dg)return an;dg=1;var i=sf(),e=Aw();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function u(n,r){h(n,r),h(n+"Capture",r)}function h(n,r){for(o[n]=r,n=0;n<r.length;n++)s.add(r[n])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),y=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},R={};function C(n){return y.call(R,n)?!0:y.call(w,n)?!1:_.test(n)?R[n]=!0:(w[n]=!0,!1)}function z(n,r,a,c){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function Q(n,r,a,c){if(r===null||typeof r>"u"||z(n,r,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function J(n,r,a,c,d,p,v){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=r,this.sanitizeURL=p,this.removeEmptyString=v}var W={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){W[n]=new J(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];W[r]=new J(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){W[n]=new J(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){W[n]=new J(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){W[n]=new J(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){W[n]=new J(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){W[n]=new J(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){W[n]=new J(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){W[n]=new J(n,5,!1,n.toLowerCase(),null,!1,!1)});var fe=/[\-:]([a-z])/g;function ge(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(fe,ge);W[r]=new J(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(fe,ge);W[r]=new J(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(fe,ge);W[r]=new J(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){W[n]=new J(n,1,!1,n.toLowerCase(),null,!1,!1)}),W.xlinkHref=new J("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){W[n]=new J(n,1,!1,n.toLowerCase(),null,!0,!0)});function ye(n,r,a,c){var d=W.hasOwnProperty(r)?W[r]:null;(d!==null?d.type!==0:c||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(Q(r,a,d,c)&&(a=null),c||d===null?C(r)&&(a===null?n.removeAttribute(r):n.setAttribute(r,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(r=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(r):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,r,a):n.setAttribute(r,a))))}var Pe=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ke=Symbol.for("react.element"),Ce=Symbol.for("react.portal"),x=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),N=Symbol.for("react.provider"),V=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),Je=Symbol.for("react.suspense_list"),pt=Symbol.for("react.memo"),Tt=Symbol.for("react.lazy"),Oe=Symbol.for("react.offscreen"),ee=Symbol.iterator;function he(n){return n===null||typeof n!="object"?null:(n=ee&&n[ee]||n["@@iterator"],typeof n=="function"?n:null)}var ne=Object.assign,O;function $(n){if(O===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);O=r&&r[1]||""}return`
`+O+n}var ce=!1;function Ae(n,r){if(!n||ce)return"";ce=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(U){var c=U}Reflect.construct(n,[],r)}else{try{r.call()}catch(U){c=U}n.call(r.prototype)}else{try{throw Error()}catch(U){c=U}n()}}catch(U){if(U&&c&&typeof U.stack=="string"){for(var d=U.stack.split(`
`),p=c.stack.split(`
`),v=d.length-1,I=p.length-1;1<=v&&0<=I&&d[v]!==p[I];)I--;for(;1<=v&&0<=I;v--,I--)if(d[v]!==p[I]){if(v!==1||I!==1)do if(v--,I--,0>I||d[v]!==p[I]){var P=`
`+d[v].replace(" at new "," at ");return n.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",n.displayName)),P}while(1<=v&&0<=I);break}}}finally{ce=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?$(n):""}function Se(n){switch(n.tag){case 5:return $(n.type);case 16:return $("Lazy");case 13:return $("Suspense");case 19:return $("SuspenseList");case 0:case 2:case 15:return n=Ae(n.type,!1),n;case 11:return n=Ae(n.type.render,!1),n;case 1:return n=Ae(n.type,!0),n;default:return""}}function Re(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case x:return"Fragment";case Ce:return"Portal";case A:return"Profiler";case T:return"StrictMode";case S:return"Suspense";case Je:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case V:return(n.displayName||"Context")+".Consumer";case N:return(n._context.displayName||"Context")+".Provider";case D:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case pt:return r=n.displayName||null,r!==null?r:Re(n.type)||"Memo";case Tt:r=n._payload,n=n._init;try{return Re(n(r))}catch{}}return null}function Fe(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Re(r);case 8:return r===T?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Le(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function $e(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function mt(n){var r=$e(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),c=""+n[r];if(!n.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,p=a.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return d.call(this)},set:function(v){c=""+v,p.call(this,v)}}),Object.defineProperty(n,r,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function xn(n){n._valueTracker||(n._valueTracker=mt(n))}function Wr(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var a=r.getValue(),c="";return n&&(c=$e(n)?n.checked?"true":"false":n.value),n=c,n!==a?(r.setValue(n),!0):!1}function Xn(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function yr(n,r){var a=r.checked;return ne({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Gr(n,r){var a=r.defaultValue==null?"":r.defaultValue,c=r.checked!=null?r.checked:r.defaultChecked;a=Le(r.value!=null?r.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Kr(n,r){r=r.checked,r!=null&&ye(n,"checked",r,!1)}function $i(n,r){Kr(n,r);var a=Le(r.value),c=r.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?Qr(n,r.type,a):r.hasOwnProperty("defaultValue")&&Qr(n,r.type,Le(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function Ns(n,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var c=r.type;if(!(c!=="submit"&&c!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,a||r===n.value||(n.value=r),n.defaultValue=r}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Qr(n,r,a){(r!=="number"||Xn(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var ct=Array.isArray;function H(n,r,a,c){if(n=n.options,r){r={};for(var d=0;d<a.length;d++)r["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=r.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Le(a),r=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}r!==null||n[d].disabled||(r=n[d])}r!==null&&(r.selected=!0)}}function ae(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return ne({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function we(n,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(t(92));if(ct(a)){if(1<a.length)throw Error(t(93));a=a[0]}r=a}r==null&&(r=""),a=r}n._wrapperState={initialValue:Le(a)}}function nt(n,r){var a=Le(r.value),c=Le(r.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),r.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function It(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function qe(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function He(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?qe(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var _r,Wo=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(r,a,c,d)})}:n}(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(_r=_r||document.createElement("div"),_r.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=_r.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function Yr(n,r){if(r){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=r;return}}n.textContent=r}var qi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Hi=["Webkit","ms","Moz","O"];Object.keys(qi).forEach(function(n){Hi.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),qi[r]=qi[n]})});function Go(n,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||qi.hasOwnProperty(n)&&qi[n]?(""+r).trim():r+"px"}function Ko(n,r){n=n.style;for(var a in r)if(r.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=Go(a,r[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Qo=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Yo(n,r){if(r){if(Qo[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function Xo(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wi=null;function xs(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Vs=null,vn=null,Jn=null;function Ds(n){if(n=wa(n)){if(typeof Vs!="function")throw Error(t(280));var r=n.stateNode;r&&(r=Kl(r),Vs(n.stateNode,n.type,r))}}function Zn(n){vn?Jn?Jn.push(n):Jn=[n]:vn=n}function Jo(){if(vn){var n=vn,r=Jn;if(Jn=vn=null,Ds(n),r)for(n=0;n<r.length;n++)Ds(r[n])}}function Gi(n,r){return n(r)}function Zo(){}var vr=!1;function ea(n,r,a){if(vr)return n(r,a);vr=!0;try{return Gi(n,r,a)}finally{vr=!1,(vn!==null||Jn!==null)&&(Zo(),Jo())}}function ht(n,r){var a=n.stateNode;if(a===null)return null;var c=Kl(a);if(c===null)return null;a=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,r,typeof a));return a}var Os=!1;if(m)try{var Vn={};Object.defineProperty(Vn,"passive",{get:function(){Os=!0}}),window.addEventListener("test",Vn,Vn),window.removeEventListener("test",Vn,Vn)}catch{Os=!1}function Ki(n,r,a,c,d,p,v,I,P){var U=Array.prototype.slice.call(arguments,3);try{r.apply(a,U)}catch(K){this.onError(K)}}var Qi=!1,Ls=null,Dn=!1,ta=null,jc={onError:function(n){Qi=!0,Ls=n}};function Ms(n,r,a,c,d,p,v,I,P){Qi=!1,Ls=null,Ki.apply(jc,arguments)}function vl(n,r,a,c,d,p,v,I,P){if(Ms.apply(this,arguments),Qi){if(Qi){var U=Ls;Qi=!1,Ls=null}else throw Error(t(198));Dn||(Dn=!0,ta=U)}}function On(n){var r=n,a=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(a=r.return),n=r.return;while(n)}return r.tag===3?a:null}function Yi(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function Ln(n){if(On(n)!==n)throw Error(t(188))}function El(n){var r=n.alternate;if(!r){if(r=On(n),r===null)throw Error(t(188));return r!==n?null:n}for(var a=n,c=r;;){var d=a.return;if(d===null)break;var p=d.alternate;if(p===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===a)return Ln(d),n;if(p===c)return Ln(d),r;p=p.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=p;else{for(var v=!1,I=d.child;I;){if(I===a){v=!0,a=d,c=p;break}if(I===c){v=!0,c=d,a=p;break}I=I.sibling}if(!v){for(I=p.child;I;){if(I===a){v=!0,a=p,c=d;break}if(I===c){v=!0,c=p,a=d;break}I=I.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:r}function na(n){return n=El(n),n!==null?bs(n):null}function bs(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=bs(n);if(r!==null)return r;n=n.sibling}return null}var Fs=e.unstable_scheduleCallback,ra=e.unstable_cancelCallback,wl=e.unstable_shouldYield,zc=e.unstable_requestPaint,Qe=e.unstable_now,Tl=e.unstable_getCurrentPriorityLevel,Xi=e.unstable_ImmediatePriority,Xr=e.unstable_UserBlockingPriority,En=e.unstable_NormalPriority,ia=e.unstable_LowPriority,Il=e.unstable_IdlePriority,Ji=null,cn=null;function Sl(n){if(cn&&typeof cn.onCommitFiberRoot=="function")try{cn.onCommitFiberRoot(Ji,n,void 0,(n.current.flags&128)===128)}catch{}}var Qt=Math.clz32?Math.clz32:Cl,sa=Math.log,Al=Math.LN2;function Cl(n){return n>>>=0,n===0?32:31-(sa(n)/Al|0)|0}var Us=64,js=4194304;function Jr(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Zi(n,r){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,p=n.pingedLanes,v=a&268435455;if(v!==0){var I=v&~d;I!==0?c=Jr(I):(p&=v,p!==0&&(c=Jr(p)))}else v=a&~d,v!==0?c=Jr(v):p!==0&&(c=Jr(p));if(c===0)return 0;if(r!==0&&r!==c&&(r&d)===0&&(d=c&-c,p=r&-r,d>=p||d===16&&(p&4194240)!==0))return r;if((c&4)!==0&&(c|=a&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=c;0<r;)a=31-Qt(r),d=1<<a,c|=n[a],r&=~d;return c}function Bc(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Er(n,r){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,p=n.pendingLanes;0<p;){var v=31-Qt(p),I=1<<v,P=d[v];P===-1?((I&a)===0||(I&c)!==0)&&(d[v]=Bc(I,r)):P<=r&&(n.expiredLanes|=I),p&=~I}}function hn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function es(){var n=Us;return Us<<=1,(Us&4194240)===0&&(Us=64),n}function Zr(n){for(var r=[],a=0;31>a;a++)r.push(n);return r}function ei(n,r,a){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-Qt(r),n[r]=a}function Ge(n,r){var a=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Qt(a),p=1<<d;r[d]=0,c[d]=-1,n[d]=-1,a&=~p}}function ti(n,r){var a=n.entangledLanes|=r;for(n=n.entanglements;a;){var c=31-Qt(a),d=1<<c;d&r|n[c]&r&&(n[c]|=r),a&=~d}}var De=0;function ni(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Rl,zs,Pl,kl,Nl,oa=!1,er=[],Dt=null,Mn=null,bn=null,ri=new Map,wn=new Map,tr=[],$c="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xl(n,r){switch(n){case"focusin":case"focusout":Dt=null;break;case"dragenter":case"dragleave":Mn=null;break;case"mouseover":case"mouseout":bn=null;break;case"pointerover":case"pointerout":ri.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":wn.delete(r.pointerId)}}function Zt(n,r,a,c,d,p){return n===null||n.nativeEvent!==p?(n={blockedOn:r,domEventName:a,eventSystemFlags:c,nativeEvent:p,targetContainers:[d]},r!==null&&(r=wa(r),r!==null&&zs(r)),n):(n.eventSystemFlags|=c,r=n.targetContainers,d!==null&&r.indexOf(d)===-1&&r.push(d),n)}function qc(n,r,a,c,d){switch(r){case"focusin":return Dt=Zt(Dt,n,r,a,c,d),!0;case"dragenter":return Mn=Zt(Mn,n,r,a,c,d),!0;case"mouseover":return bn=Zt(bn,n,r,a,c,d),!0;case"pointerover":var p=d.pointerId;return ri.set(p,Zt(ri.get(p)||null,n,r,a,c,d)),!0;case"gotpointercapture":return p=d.pointerId,wn.set(p,Zt(wn.get(p)||null,n,r,a,c,d)),!0}return!1}function Vl(n){var r=ss(n.target);if(r!==null){var a=On(r);if(a!==null){if(r=a.tag,r===13){if(r=Yi(a),r!==null){n.blockedOn=r,Nl(n.priority,function(){Pl(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function wr(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var a=Bs(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Wi=c,a.target.dispatchEvent(c),Wi=null}else return r=wa(a),r!==null&&zs(r),n.blockedOn=a,!1;r.shift()}return!0}function ts(n,r,a){wr(n)&&a.delete(r)}function Dl(){oa=!1,Dt!==null&&wr(Dt)&&(Dt=null),Mn!==null&&wr(Mn)&&(Mn=null),bn!==null&&wr(bn)&&(bn=null),ri.forEach(ts),wn.forEach(ts)}function Fn(n,r){n.blockedOn===r&&(n.blockedOn=null,oa||(oa=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Dl)))}function Un(n){function r(d){return Fn(d,n)}if(0<er.length){Fn(er[0],n);for(var a=1;a<er.length;a++){var c=er[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Dt!==null&&Fn(Dt,n),Mn!==null&&Fn(Mn,n),bn!==null&&Fn(bn,n),ri.forEach(r),wn.forEach(r),a=0;a<tr.length;a++)c=tr[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<tr.length&&(a=tr[0],a.blockedOn===null);)Vl(a),a.blockedOn===null&&tr.shift()}var Tr=Pe.ReactCurrentBatchConfig,ii=!0;function rt(n,r,a,c){var d=De,p=Tr.transition;Tr.transition=null;try{De=1,aa(n,r,a,c)}finally{De=d,Tr.transition=p}}function Hc(n,r,a,c){var d=De,p=Tr.transition;Tr.transition=null;try{De=4,aa(n,r,a,c)}finally{De=d,Tr.transition=p}}function aa(n,r,a,c){if(ii){var d=Bs(n,r,a,c);if(d===null)nh(n,r,c,ns,a),xl(n,c);else if(qc(d,n,r,a,c))c.stopPropagation();else if(xl(n,c),r&4&&-1<$c.indexOf(n)){for(;d!==null;){var p=wa(d);if(p!==null&&Rl(p),p=Bs(n,r,a,c),p===null&&nh(n,r,c,ns,a),p===d)break;d=p}d!==null&&c.stopPropagation()}else nh(n,r,c,null,a)}}var ns=null;function Bs(n,r,a,c){if(ns=null,n=xs(c),n=ss(n),n!==null)if(r=On(n),r===null)n=null;else if(a=r.tag,a===13){if(n=Yi(r),n!==null)return n;n=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return ns=n,null}function la(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Tl()){case Xi:return 1;case Xr:return 4;case En:case ia:return 16;case Il:return 536870912;default:return 16}default:return 16}}var dn=null,$s=null,en=null;function ua(){if(en)return en;var n,r=$s,a=r.length,c,d="value"in dn?dn.value:dn.textContent,p=d.length;for(n=0;n<a&&r[n]===d[n];n++);var v=a-n;for(c=1;c<=v&&r[a-c]===d[p-c];c++);return en=d.slice(n,1<c?1-c:void 0)}function qs(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function nr(){return!0}function ca(){return!1}function Ot(n){function r(a,c,d,p,v){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=p,this.target=v,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(a=n[I],this[I]=a?a(p):p[I]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?nr:ca,this.isPropagationStopped=ca,this}return ne(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=nr)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=nr)},persist:function(){},isPersistent:nr}),r}var jn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hs=Ot(jn),rr=ne({},jn,{view:0,detail:0}),Wc=Ot(rr),Ws,Ir,si,rs=ne({},rr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ir,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==si&&(si&&n.type==="mousemove"?(Ws=n.screenX-si.screenX,Ir=n.screenY-si.screenY):Ir=Ws=0,si=n),Ws)},movementY:function(n){return"movementY"in n?n.movementY:Ir}}),Gs=Ot(rs),ha=ne({},rs,{dataTransfer:0}),Ol=Ot(ha),Ks=ne({},rr,{relatedTarget:0}),Qs=Ot(Ks),Ll=ne({},jn,{animationName:0,elapsedTime:0,pseudoElement:0}),Sr=Ot(Ll),Ml=ne({},jn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),bl=Ot(Ml),Fl=ne({},jn,{data:0}),da=Ot(Fl),Ys={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Yt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ul={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jl(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=Ul[n])?!!r[n]:!1}function ir(){return jl}var l=ne({},rr,{key:function(n){if(n.key){var r=Ys[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=qs(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Yt[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ir,charCode:function(n){return n.type==="keypress"?qs(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?qs(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),f=Ot(l),g=ne({},rs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),E=Ot(g),L=ne({},rr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ir}),j=Ot(L),Z=ne({},jn,{propertyName:0,elapsedTime:0,pseudoElement:0}),We=Ot(Z),St=ne({},rs,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Me=Ot(St),Pt=[9,13,27,32],gt=m&&"CompositionEvent"in window,Tn=null;m&&"documentMode"in document&&(Tn=document.documentMode);var fn=m&&"TextEvent"in window&&!Tn,is=m&&(!gt||Tn&&8<Tn&&11>=Tn),Xs=" ",ep=!1;function tp(n,r){switch(n){case"keyup":return Pt.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function np(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Js=!1;function _E(n,r){switch(n){case"compositionend":return np(r);case"keypress":return r.which!==32?null:(ep=!0,Xs);case"textInput":return n=r.data,n===Xs&&ep?null:n;default:return null}}function vE(n,r){if(Js)return n==="compositionend"||!gt&&tp(n,r)?(n=ua(),en=$s=dn=null,Js=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return is&&r.locale!=="ko"?null:r.data;default:return null}}var EE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rp(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!EE[n.type]:r==="textarea"}function ip(n,r,a,c){Zn(c),r=Hl(r,"onChange"),0<r.length&&(a=new Hs("onChange","change",null,a,c),n.push({event:a,listeners:r}))}var fa=null,pa=null;function wE(n){Tp(n,0)}function zl(n){var r=ro(n);if(Wr(r))return n}function TE(n,r){if(n==="change")return r}var sp=!1;if(m){var Gc;if(m){var Kc="oninput"in document;if(!Kc){var op=document.createElement("div");op.setAttribute("oninput","return;"),Kc=typeof op.oninput=="function"}Gc=Kc}else Gc=!1;sp=Gc&&(!document.documentMode||9<document.documentMode)}function ap(){fa&&(fa.detachEvent("onpropertychange",lp),pa=fa=null)}function lp(n){if(n.propertyName==="value"&&zl(pa)){var r=[];ip(r,pa,n,xs(n)),ea(wE,r)}}function IE(n,r,a){n==="focusin"?(ap(),fa=r,pa=a,fa.attachEvent("onpropertychange",lp)):n==="focusout"&&ap()}function SE(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return zl(pa)}function AE(n,r){if(n==="click")return zl(r)}function CE(n,r){if(n==="input"||n==="change")return zl(r)}function RE(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var zn=typeof Object.is=="function"?Object.is:RE;function ma(n,r){if(zn(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var a=Object.keys(n),c=Object.keys(r);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!y.call(r,d)||!zn(n[d],r[d]))return!1}return!0}function up(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function cp(n,r){var a=up(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=r&&c>=r)return{node:a,offset:r-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=up(a)}}function hp(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?hp(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function dp(){for(var n=window,r=Xn();r instanceof n.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)n=r.contentWindow;else break;r=Xn(n.document)}return r}function Qc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function PE(n){var r=dp(),a=n.focusedElem,c=n.selectionRange;if(r!==a&&a&&a.ownerDocument&&hp(a.ownerDocument.documentElement,a)){if(c!==null&&Qc(a)){if(r=c.start,n=c.end,n===void 0&&(n=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(n,a.value.length);else if(n=(r=a.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,p=Math.min(c.start,d);c=c.end===void 0?p:Math.min(c.end,d),!n.extend&&p>c&&(d=c,c=p,p=d),d=cp(a,p);var v=cp(a,c);d&&v&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==v.node||n.focusOffset!==v.offset)&&(r=r.createRange(),r.setStart(d.node,d.offset),n.removeAllRanges(),p>c?(n.addRange(r),n.extend(v.node,v.offset)):(r.setEnd(v.node,v.offset),n.addRange(r)))}}for(r=[],n=a;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)n=r[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var kE=m&&"documentMode"in document&&11>=document.documentMode,Zs=null,Yc=null,ga=null,Xc=!1;function fp(n,r,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Xc||Zs==null||Zs!==Xn(c)||(c=Zs,"selectionStart"in c&&Qc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ga&&ma(ga,c)||(ga=c,c=Hl(Yc,"onSelect"),0<c.length&&(r=new Hs("onSelect","select",null,r,a),n.push({event:r,listeners:c}),r.target=Zs)))}function Bl(n,r){var a={};return a[n.toLowerCase()]=r.toLowerCase(),a["Webkit"+n]="webkit"+r,a["Moz"+n]="moz"+r,a}var eo={animationend:Bl("Animation","AnimationEnd"),animationiteration:Bl("Animation","AnimationIteration"),animationstart:Bl("Animation","AnimationStart"),transitionend:Bl("Transition","TransitionEnd")},Jc={},pp={};m&&(pp=document.createElement("div").style,"AnimationEvent"in window||(delete eo.animationend.animation,delete eo.animationiteration.animation,delete eo.animationstart.animation),"TransitionEvent"in window||delete eo.transitionend.transition);function $l(n){if(Jc[n])return Jc[n];if(!eo[n])return n;var r=eo[n],a;for(a in r)if(r.hasOwnProperty(a)&&a in pp)return Jc[n]=r[a];return n}var mp=$l("animationend"),gp=$l("animationiteration"),yp=$l("animationstart"),_p=$l("transitionend"),vp=new Map,Ep="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function oi(n,r){vp.set(n,r),u(r,[n])}for(var Zc=0;Zc<Ep.length;Zc++){var eh=Ep[Zc],NE=eh.toLowerCase(),xE=eh[0].toUpperCase()+eh.slice(1);oi(NE,"on"+xE)}oi(mp,"onAnimationEnd"),oi(gp,"onAnimationIteration"),oi(yp,"onAnimationStart"),oi("dblclick","onDoubleClick"),oi("focusin","onFocus"),oi("focusout","onBlur"),oi(_p,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ya="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),VE=new Set("cancel close invalid load scroll toggle".split(" ").concat(ya));function wp(n,r,a){var c=n.type||"unknown-event";n.currentTarget=a,vl(c,r,void 0,n),n.currentTarget=null}function Tp(n,r){r=(r&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var p=void 0;if(r)for(var v=c.length-1;0<=v;v--){var I=c[v],P=I.instance,U=I.currentTarget;if(I=I.listener,P!==p&&d.isPropagationStopped())break e;wp(d,I,U),p=P}else for(v=0;v<c.length;v++){if(I=c[v],P=I.instance,U=I.currentTarget,I=I.listener,P!==p&&d.isPropagationStopped())break e;wp(d,I,U),p=P}}}if(Dn)throw n=ta,Dn=!1,ta=null,n}function Ze(n,r){var a=r[lh];a===void 0&&(a=r[lh]=new Set);var c=n+"__bubble";a.has(c)||(Ip(r,n,2,!1),a.add(c))}function th(n,r,a){var c=0;r&&(c|=4),Ip(a,n,c,r)}var ql="_reactListening"+Math.random().toString(36).slice(2);function _a(n){if(!n[ql]){n[ql]=!0,s.forEach(function(a){a!=="selectionchange"&&(VE.has(a)||th(a,!1,n),th(a,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[ql]||(r[ql]=!0,th("selectionchange",!1,r))}}function Ip(n,r,a,c){switch(la(r)){case 1:var d=rt;break;case 4:d=Hc;break;default:d=aa}a=d.bind(null,r,a,n),d=void 0,!Os||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(r,a,{capture:!0,passive:d}):n.addEventListener(r,a,!0):d!==void 0?n.addEventListener(r,a,{passive:d}):n.addEventListener(r,a,!1)}function nh(n,r,a,c,d){var p=c;if((r&1)===0&&(r&2)===0&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var I=c.stateNode.containerInfo;if(I===d||I.nodeType===8&&I.parentNode===d)break;if(v===4)for(v=c.return;v!==null;){var P=v.tag;if((P===3||P===4)&&(P=v.stateNode.containerInfo,P===d||P.nodeType===8&&P.parentNode===d))return;v=v.return}for(;I!==null;){if(v=ss(I),v===null)return;if(P=v.tag,P===5||P===6){c=p=v;continue e}I=I.parentNode}}c=c.return}ea(function(){var U=p,K=xs(a),Y=[];e:{var G=vp.get(n);if(G!==void 0){var re=Hs,oe=n;switch(n){case"keypress":if(qs(a)===0)break e;case"keydown":case"keyup":re=f;break;case"focusin":oe="focus",re=Qs;break;case"focusout":oe="blur",re=Qs;break;case"beforeblur":case"afterblur":re=Qs;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":re=Gs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":re=Ol;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":re=j;break;case mp:case gp:case yp:re=Sr;break;case _p:re=We;break;case"scroll":re=Wc;break;case"wheel":re=Me;break;case"copy":case"cut":case"paste":re=bl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":re=E}var le=(r&4)!==0,dt=!le&&n==="scroll",M=le?G!==null?G+"Capture":null:G;le=[];for(var k=U,b;k!==null;){b=k;var X=b.stateNode;if(b.tag===5&&X!==null&&(b=X,M!==null&&(X=ht(k,M),X!=null&&le.push(va(k,X,b)))),dt)break;k=k.return}0<le.length&&(G=new re(G,oe,null,a,K),Y.push({event:G,listeners:le}))}}if((r&7)===0){e:{if(G=n==="mouseover"||n==="pointerover",re=n==="mouseout"||n==="pointerout",G&&a!==Wi&&(oe=a.relatedTarget||a.fromElement)&&(ss(oe)||oe[Ar]))break e;if((re||G)&&(G=K.window===K?K:(G=K.ownerDocument)?G.defaultView||G.parentWindow:window,re?(oe=a.relatedTarget||a.toElement,re=U,oe=oe?ss(oe):null,oe!==null&&(dt=On(oe),oe!==dt||oe.tag!==5&&oe.tag!==6)&&(oe=null)):(re=null,oe=U),re!==oe)){if(le=Gs,X="onMouseLeave",M="onMouseEnter",k="mouse",(n==="pointerout"||n==="pointerover")&&(le=E,X="onPointerLeave",M="onPointerEnter",k="pointer"),dt=re==null?G:ro(re),b=oe==null?G:ro(oe),G=new le(X,k+"leave",re,a,K),G.target=dt,G.relatedTarget=b,X=null,ss(K)===U&&(le=new le(M,k+"enter",oe,a,K),le.target=b,le.relatedTarget=dt,X=le),dt=X,re&&oe)t:{for(le=re,M=oe,k=0,b=le;b;b=to(b))k++;for(b=0,X=M;X;X=to(X))b++;for(;0<k-b;)le=to(le),k--;for(;0<b-k;)M=to(M),b--;for(;k--;){if(le===M||M!==null&&le===M.alternate)break t;le=to(le),M=to(M)}le=null}else le=null;re!==null&&Sp(Y,G,re,le,!1),oe!==null&&dt!==null&&Sp(Y,dt,oe,le,!0)}}e:{if(G=U?ro(U):window,re=G.nodeName&&G.nodeName.toLowerCase(),re==="select"||re==="input"&&G.type==="file")var ue=TE;else if(rp(G))if(sp)ue=CE;else{ue=SE;var pe=IE}else(re=G.nodeName)&&re.toLowerCase()==="input"&&(G.type==="checkbox"||G.type==="radio")&&(ue=AE);if(ue&&(ue=ue(n,U))){ip(Y,ue,a,K);break e}pe&&pe(n,G,U),n==="focusout"&&(pe=G._wrapperState)&&pe.controlled&&G.type==="number"&&Qr(G,"number",G.value)}switch(pe=U?ro(U):window,n){case"focusin":(rp(pe)||pe.contentEditable==="true")&&(Zs=pe,Yc=U,ga=null);break;case"focusout":ga=Yc=Zs=null;break;case"mousedown":Xc=!0;break;case"contextmenu":case"mouseup":case"dragend":Xc=!1,fp(Y,a,K);break;case"selectionchange":if(kE)break;case"keydown":case"keyup":fp(Y,a,K)}var me;if(gt)e:{switch(n){case"compositionstart":var Ee="onCompositionStart";break e;case"compositionend":Ee="onCompositionEnd";break e;case"compositionupdate":Ee="onCompositionUpdate";break e}Ee=void 0}else Js?tp(n,a)&&(Ee="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(Ee="onCompositionStart");Ee&&(is&&a.locale!=="ko"&&(Js||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&Js&&(me=ua()):(dn=K,$s="value"in dn?dn.value:dn.textContent,Js=!0)),pe=Hl(U,Ee),0<pe.length&&(Ee=new da(Ee,n,null,a,K),Y.push({event:Ee,listeners:pe}),me?Ee.data=me:(me=np(a),me!==null&&(Ee.data=me)))),(me=fn?_E(n,a):vE(n,a))&&(U=Hl(U,"onBeforeInput"),0<U.length&&(K=new da("onBeforeInput","beforeinput",null,a,K),Y.push({event:K,listeners:U}),K.data=me))}Tp(Y,r)})}function va(n,r,a){return{instance:n,listener:r,currentTarget:a}}function Hl(n,r){for(var a=r+"Capture",c=[];n!==null;){var d=n,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=ht(n,a),p!=null&&c.unshift(va(n,p,d)),p=ht(n,r),p!=null&&c.push(va(n,p,d))),n=n.return}return c}function to(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Sp(n,r,a,c,d){for(var p=r._reactName,v=[];a!==null&&a!==c;){var I=a,P=I.alternate,U=I.stateNode;if(P!==null&&P===c)break;I.tag===5&&U!==null&&(I=U,d?(P=ht(a,p),P!=null&&v.unshift(va(a,P,I))):d||(P=ht(a,p),P!=null&&v.push(va(a,P,I)))),a=a.return}v.length!==0&&n.push({event:r,listeners:v})}var DE=/\r\n?/g,OE=/\u0000|\uFFFD/g;function Ap(n){return(typeof n=="string"?n:""+n).replace(DE,`
`).replace(OE,"")}function Wl(n,r,a){if(r=Ap(r),Ap(n)!==r&&a)throw Error(t(425))}function Gl(){}var rh=null,ih=null;function sh(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var oh=typeof setTimeout=="function"?setTimeout:void 0,LE=typeof clearTimeout=="function"?clearTimeout:void 0,Cp=typeof Promise=="function"?Promise:void 0,ME=typeof queueMicrotask=="function"?queueMicrotask:typeof Cp<"u"?function(n){return Cp.resolve(null).then(n).catch(bE)}:oh;function bE(n){setTimeout(function(){throw n})}function ah(n,r){var a=r,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),Un(r);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Un(r)}function ai(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function Rp(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return n;r--}else a==="/$"&&r++}n=n.previousSibling}return null}var no=Math.random().toString(36).slice(2),sr="__reactFiber$"+no,Ea="__reactProps$"+no,Ar="__reactContainer$"+no,lh="__reactEvents$"+no,FE="__reactListeners$"+no,UE="__reactHandles$"+no;function ss(n){var r=n[sr];if(r)return r;for(var a=n.parentNode;a;){if(r=a[Ar]||a[sr]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(n=Rp(n);n!==null;){if(a=n[sr])return a;n=Rp(n)}return r}n=a,a=n.parentNode}return null}function wa(n){return n=n[sr]||n[Ar],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ro(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Kl(n){return n[Ea]||null}var uh=[],io=-1;function li(n){return{current:n}}function et(n){0>io||(n.current=uh[io],uh[io]=null,io--)}function Ye(n,r){io++,uh[io]=n.current,n.current=r}var ui={},zt=li(ui),tn=li(!1),os=ui;function so(n,r){var a=n.type.contextTypes;if(!a)return ui;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===r)return c.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in a)d[p]=r[p];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=d),d}function nn(n){return n=n.childContextTypes,n!=null}function Ql(){et(tn),et(zt)}function Pp(n,r,a){if(zt.current!==ui)throw Error(t(168));Ye(zt,r),Ye(tn,a)}function kp(n,r,a){var c=n.stateNode;if(r=r.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in r))throw Error(t(108,Fe(n)||"Unknown",d));return ne({},a,c)}function Yl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||ui,os=zt.current,Ye(zt,n),Ye(tn,tn.current),!0}function Np(n,r,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=kp(n,r,os),c.__reactInternalMemoizedMergedChildContext=n,et(tn),et(zt),Ye(zt,n)):et(tn),Ye(tn,a)}var Cr=null,Xl=!1,ch=!1;function xp(n){Cr===null?Cr=[n]:Cr.push(n)}function jE(n){Xl=!0,xp(n)}function ci(){if(!ch&&Cr!==null){ch=!0;var n=0,r=De;try{var a=Cr;for(De=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Cr=null,Xl=!1}catch(d){throw Cr!==null&&(Cr=Cr.slice(n+1)),Fs(Xi,ci),d}finally{De=r,ch=!1}}return null}var oo=[],ao=0,Jl=null,Zl=0,In=[],Sn=0,as=null,Rr=1,Pr="";function ls(n,r){oo[ao++]=Zl,oo[ao++]=Jl,Jl=n,Zl=r}function Vp(n,r,a){In[Sn++]=Rr,In[Sn++]=Pr,In[Sn++]=as,as=n;var c=Rr;n=Pr;var d=32-Qt(c)-1;c&=~(1<<d),a+=1;var p=32-Qt(r)+d;if(30<p){var v=d-d%5;p=(c&(1<<v)-1).toString(32),c>>=v,d-=v,Rr=1<<32-Qt(r)+d|a<<d|c,Pr=p+n}else Rr=1<<p|a<<d|c,Pr=n}function hh(n){n.return!==null&&(ls(n,1),Vp(n,1,0))}function dh(n){for(;n===Jl;)Jl=oo[--ao],oo[ao]=null,Zl=oo[--ao],oo[ao]=null;for(;n===as;)as=In[--Sn],In[Sn]=null,Pr=In[--Sn],In[Sn]=null,Rr=In[--Sn],In[Sn]=null}var pn=null,mn=null,it=!1,Bn=null;function Dp(n,r){var a=Pn(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=n,r=n.deletions,r===null?(n.deletions=[a],n.flags|=16):r.push(a)}function Op(n,r){switch(n.tag){case 5:var a=n.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,pn=n,mn=ai(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,pn=n,mn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=as!==null?{id:Rr,overflow:Pr}:null,n.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=Pn(18,null,null,0),a.stateNode=r,a.return=n,n.child=a,pn=n,mn=null,!0):!1;default:return!1}}function fh(n){return(n.mode&1)!==0&&(n.flags&128)===0}function ph(n){if(it){var r=mn;if(r){var a=r;if(!Op(n,r)){if(fh(n))throw Error(t(418));r=ai(a.nextSibling);var c=pn;r&&Op(n,r)?Dp(c,a):(n.flags=n.flags&-4097|2,it=!1,pn=n)}}else{if(fh(n))throw Error(t(418));n.flags=n.flags&-4097|2,it=!1,pn=n}}}function Lp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;pn=n}function eu(n){if(n!==pn)return!1;if(!it)return Lp(n),it=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!sh(n.type,n.memoizedProps)),r&&(r=mn)){if(fh(n))throw Mp(),Error(t(418));for(;r;)Dp(n,r),r=ai(r.nextSibling)}if(Lp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(r===0){mn=ai(n.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}n=n.nextSibling}mn=null}}else mn=pn?ai(n.stateNode.nextSibling):null;return!0}function Mp(){for(var n=mn;n;)n=ai(n.nextSibling)}function lo(){mn=pn=null,it=!1}function mh(n){Bn===null?Bn=[n]:Bn.push(n)}var zE=Pe.ReactCurrentBatchConfig;function Ta(n,r,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,p=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===p?r.ref:(r=function(v){var I=d.refs;v===null?delete I[p]:I[p]=v},r._stringRef=p,r)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function tu(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function bp(n){var r=n._init;return r(n._payload)}function Fp(n){function r(M,k){if(n){var b=M.deletions;b===null?(M.deletions=[k],M.flags|=16):b.push(k)}}function a(M,k){if(!n)return null;for(;k!==null;)r(M,k),k=k.sibling;return null}function c(M,k){for(M=new Map;k!==null;)k.key!==null?M.set(k.key,k):M.set(k.index,k),k=k.sibling;return M}function d(M,k){return M=_i(M,k),M.index=0,M.sibling=null,M}function p(M,k,b){return M.index=b,n?(b=M.alternate,b!==null?(b=b.index,b<k?(M.flags|=2,k):b):(M.flags|=2,k)):(M.flags|=1048576,k)}function v(M){return n&&M.alternate===null&&(M.flags|=2),M}function I(M,k,b,X){return k===null||k.tag!==6?(k=od(b,M.mode,X),k.return=M,k):(k=d(k,b),k.return=M,k)}function P(M,k,b,X){var ue=b.type;return ue===x?K(M,k,b.props.children,X,b.key):k!==null&&(k.elementType===ue||typeof ue=="object"&&ue!==null&&ue.$$typeof===Tt&&bp(ue)===k.type)?(X=d(k,b.props),X.ref=Ta(M,k,b),X.return=M,X):(X=Au(b.type,b.key,b.props,null,M.mode,X),X.ref=Ta(M,k,b),X.return=M,X)}function U(M,k,b,X){return k===null||k.tag!==4||k.stateNode.containerInfo!==b.containerInfo||k.stateNode.implementation!==b.implementation?(k=ad(b,M.mode,X),k.return=M,k):(k=d(k,b.children||[]),k.return=M,k)}function K(M,k,b,X,ue){return k===null||k.tag!==7?(k=gs(b,M.mode,X,ue),k.return=M,k):(k=d(k,b),k.return=M,k)}function Y(M,k,b){if(typeof k=="string"&&k!==""||typeof k=="number")return k=od(""+k,M.mode,b),k.return=M,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Ke:return b=Au(k.type,k.key,k.props,null,M.mode,b),b.ref=Ta(M,null,k),b.return=M,b;case Ce:return k=ad(k,M.mode,b),k.return=M,k;case Tt:var X=k._init;return Y(M,X(k._payload),b)}if(ct(k)||he(k))return k=gs(k,M.mode,b,null),k.return=M,k;tu(M,k)}return null}function G(M,k,b,X){var ue=k!==null?k.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return ue!==null?null:I(M,k,""+b,X);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Ke:return b.key===ue?P(M,k,b,X):null;case Ce:return b.key===ue?U(M,k,b,X):null;case Tt:return ue=b._init,G(M,k,ue(b._payload),X)}if(ct(b)||he(b))return ue!==null?null:K(M,k,b,X,null);tu(M,b)}return null}function re(M,k,b,X,ue){if(typeof X=="string"&&X!==""||typeof X=="number")return M=M.get(b)||null,I(k,M,""+X,ue);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case Ke:return M=M.get(X.key===null?b:X.key)||null,P(k,M,X,ue);case Ce:return M=M.get(X.key===null?b:X.key)||null,U(k,M,X,ue);case Tt:var pe=X._init;return re(M,k,b,pe(X._payload),ue)}if(ct(X)||he(X))return M=M.get(b)||null,K(k,M,X,ue,null);tu(k,X)}return null}function oe(M,k,b,X){for(var ue=null,pe=null,me=k,Ee=k=0,xt=null;me!==null&&Ee<b.length;Ee++){me.index>Ee?(xt=me,me=null):xt=me.sibling;var je=G(M,me,b[Ee],X);if(je===null){me===null&&(me=xt);break}n&&me&&je.alternate===null&&r(M,me),k=p(je,k,Ee),pe===null?ue=je:pe.sibling=je,pe=je,me=xt}if(Ee===b.length)return a(M,me),it&&ls(M,Ee),ue;if(me===null){for(;Ee<b.length;Ee++)me=Y(M,b[Ee],X),me!==null&&(k=p(me,k,Ee),pe===null?ue=me:pe.sibling=me,pe=me);return it&&ls(M,Ee),ue}for(me=c(M,me);Ee<b.length;Ee++)xt=re(me,M,Ee,b[Ee],X),xt!==null&&(n&&xt.alternate!==null&&me.delete(xt.key===null?Ee:xt.key),k=p(xt,k,Ee),pe===null?ue=xt:pe.sibling=xt,pe=xt);return n&&me.forEach(function(vi){return r(M,vi)}),it&&ls(M,Ee),ue}function le(M,k,b,X){var ue=he(b);if(typeof ue!="function")throw Error(t(150));if(b=ue.call(b),b==null)throw Error(t(151));for(var pe=ue=null,me=k,Ee=k=0,xt=null,je=b.next();me!==null&&!je.done;Ee++,je=b.next()){me.index>Ee?(xt=me,me=null):xt=me.sibling;var vi=G(M,me,je.value,X);if(vi===null){me===null&&(me=xt);break}n&&me&&vi.alternate===null&&r(M,me),k=p(vi,k,Ee),pe===null?ue=vi:pe.sibling=vi,pe=vi,me=xt}if(je.done)return a(M,me),it&&ls(M,Ee),ue;if(me===null){for(;!je.done;Ee++,je=b.next())je=Y(M,je.value,X),je!==null&&(k=p(je,k,Ee),pe===null?ue=je:pe.sibling=je,pe=je);return it&&ls(M,Ee),ue}for(me=c(M,me);!je.done;Ee++,je=b.next())je=re(me,M,Ee,je.value,X),je!==null&&(n&&je.alternate!==null&&me.delete(je.key===null?Ee:je.key),k=p(je,k,Ee),pe===null?ue=je:pe.sibling=je,pe=je);return n&&me.forEach(function(Ew){return r(M,Ew)}),it&&ls(M,Ee),ue}function dt(M,k,b,X){if(typeof b=="object"&&b!==null&&b.type===x&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case Ke:e:{for(var ue=b.key,pe=k;pe!==null;){if(pe.key===ue){if(ue=b.type,ue===x){if(pe.tag===7){a(M,pe.sibling),k=d(pe,b.props.children),k.return=M,M=k;break e}}else if(pe.elementType===ue||typeof ue=="object"&&ue!==null&&ue.$$typeof===Tt&&bp(ue)===pe.type){a(M,pe.sibling),k=d(pe,b.props),k.ref=Ta(M,pe,b),k.return=M,M=k;break e}a(M,pe);break}else r(M,pe);pe=pe.sibling}b.type===x?(k=gs(b.props.children,M.mode,X,b.key),k.return=M,M=k):(X=Au(b.type,b.key,b.props,null,M.mode,X),X.ref=Ta(M,k,b),X.return=M,M=X)}return v(M);case Ce:e:{for(pe=b.key;k!==null;){if(k.key===pe)if(k.tag===4&&k.stateNode.containerInfo===b.containerInfo&&k.stateNode.implementation===b.implementation){a(M,k.sibling),k=d(k,b.children||[]),k.return=M,M=k;break e}else{a(M,k);break}else r(M,k);k=k.sibling}k=ad(b,M.mode,X),k.return=M,M=k}return v(M);case Tt:return pe=b._init,dt(M,k,pe(b._payload),X)}if(ct(b))return oe(M,k,b,X);if(he(b))return le(M,k,b,X);tu(M,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,k!==null&&k.tag===6?(a(M,k.sibling),k=d(k,b),k.return=M,M=k):(a(M,k),k=od(b,M.mode,X),k.return=M,M=k),v(M)):a(M,k)}return dt}var uo=Fp(!0),Up=Fp(!1),nu=li(null),ru=null,co=null,gh=null;function yh(){gh=co=ru=null}function _h(n){var r=nu.current;et(nu),n._currentValue=r}function vh(n,r,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),n===a)break;n=n.return}}function ho(n,r){ru=n,gh=co=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(rn=!0),n.firstContext=null)}function An(n){var r=n._currentValue;if(gh!==n)if(n={context:n,memoizedValue:r,next:null},co===null){if(ru===null)throw Error(t(308));co=n,ru.dependencies={lanes:0,firstContext:n}}else co=co.next=n;return r}var us=null;function Eh(n){us===null?us=[n]:us.push(n)}function jp(n,r,a,c){var d=r.interleaved;return d===null?(a.next=a,Eh(r)):(a.next=d.next,d.next=a),r.interleaved=a,kr(n,c)}function kr(n,r){n.lanes|=r;var a=n.alternate;for(a!==null&&(a.lanes|=r),a=n,n=n.return;n!==null;)n.childLanes|=r,a=n.alternate,a!==null&&(a.childLanes|=r),a=n,n=n.return;return a.tag===3?a.stateNode:null}var hi=!1;function wh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function zp(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Nr(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function di(n,r,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Ue&2)!==0){var d=c.pending;return d===null?r.next=r:(r.next=d.next,d.next=r),c.pending=r,kr(n,a)}return d=c.interleaved,d===null?(r.next=r,Eh(c)):(r.next=d.next,d.next=r),c.interleaved=r,kr(n,a)}function iu(n,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,ti(n,a)}}function Bp(n,r){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?d=p=v:p=p.next=v,a=a.next}while(a!==null);p===null?d=p=r:p=p.next=r}else d=p=r;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=r:n.next=r,a.lastBaseUpdate=r}function su(n,r,a,c){var d=n.updateQueue;hi=!1;var p=d.firstBaseUpdate,v=d.lastBaseUpdate,I=d.shared.pending;if(I!==null){d.shared.pending=null;var P=I,U=P.next;P.next=null,v===null?p=U:v.next=U,v=P;var K=n.alternate;K!==null&&(K=K.updateQueue,I=K.lastBaseUpdate,I!==v&&(I===null?K.firstBaseUpdate=U:I.next=U,K.lastBaseUpdate=P))}if(p!==null){var Y=d.baseState;v=0,K=U=P=null,I=p;do{var G=I.lane,re=I.eventTime;if((c&G)===G){K!==null&&(K=K.next={eventTime:re,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var oe=n,le=I;switch(G=r,re=a,le.tag){case 1:if(oe=le.payload,typeof oe=="function"){Y=oe.call(re,Y,G);break e}Y=oe;break e;case 3:oe.flags=oe.flags&-65537|128;case 0:if(oe=le.payload,G=typeof oe=="function"?oe.call(re,Y,G):oe,G==null)break e;Y=ne({},Y,G);break e;case 2:hi=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,G=d.effects,G===null?d.effects=[I]:G.push(I))}else re={eventTime:re,lane:G,tag:I.tag,payload:I.payload,callback:I.callback,next:null},K===null?(U=K=re,P=Y):K=K.next=re,v|=G;if(I=I.next,I===null){if(I=d.shared.pending,I===null)break;G=I,I=G.next,G.next=null,d.lastBaseUpdate=G,d.shared.pending=null}}while(!0);if(K===null&&(P=Y),d.baseState=P,d.firstBaseUpdate=U,d.lastBaseUpdate=K,r=d.shared.interleaved,r!==null){d=r;do v|=d.lane,d=d.next;while(d!==r)}else p===null&&(d.shared.lanes=0);ds|=v,n.lanes=v,n.memoizedState=Y}}function $p(n,r,a){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var c=n[r],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var Ia={},or=li(Ia),Sa=li(Ia),Aa=li(Ia);function cs(n){if(n===Ia)throw Error(t(174));return n}function Th(n,r){switch(Ye(Aa,r),Ye(Sa,n),Ye(or,Ia),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:He(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=He(r,n)}et(or),Ye(or,r)}function fo(){et(or),et(Sa),et(Aa)}function qp(n){cs(Aa.current);var r=cs(or.current),a=He(r,n.type);r!==a&&(Ye(Sa,n),Ye(or,a))}function Ih(n){Sa.current===n&&(et(or),et(Sa))}var st=li(0);function ou(n){for(var r=n;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Sh=[];function Ah(){for(var n=0;n<Sh.length;n++)Sh[n]._workInProgressVersionPrimary=null;Sh.length=0}var au=Pe.ReactCurrentDispatcher,Ch=Pe.ReactCurrentBatchConfig,hs=0,ot=null,At=null,kt=null,lu=!1,Ca=!1,Ra=0,BE=0;function Bt(){throw Error(t(321))}function Rh(n,r){if(r===null)return!1;for(var a=0;a<r.length&&a<n.length;a++)if(!zn(n[a],r[a]))return!1;return!0}function Ph(n,r,a,c,d,p){if(hs=p,ot=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,au.current=n===null||n.memoizedState===null?WE:GE,n=a(c,d),Ca){p=0;do{if(Ca=!1,Ra=0,25<=p)throw Error(t(301));p+=1,kt=At=null,r.updateQueue=null,au.current=KE,n=a(c,d)}while(Ca)}if(au.current=hu,r=At!==null&&At.next!==null,hs=0,kt=At=ot=null,lu=!1,r)throw Error(t(300));return n}function kh(){var n=Ra!==0;return Ra=0,n}function ar(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return kt===null?ot.memoizedState=kt=n:kt=kt.next=n,kt}function Cn(){if(At===null){var n=ot.alternate;n=n!==null?n.memoizedState:null}else n=At.next;var r=kt===null?ot.memoizedState:kt.next;if(r!==null)kt=r,At=n;else{if(n===null)throw Error(t(310));At=n,n={memoizedState:At.memoizedState,baseState:At.baseState,baseQueue:At.baseQueue,queue:At.queue,next:null},kt===null?ot.memoizedState=kt=n:kt=kt.next=n}return kt}function Pa(n,r){return typeof r=="function"?r(n):r}function Nh(n){var r=Cn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=At,d=c.baseQueue,p=a.pending;if(p!==null){if(d!==null){var v=d.next;d.next=p.next,p.next=v}c.baseQueue=d=p,a.pending=null}if(d!==null){p=d.next,c=c.baseState;var I=v=null,P=null,U=p;do{var K=U.lane;if((hs&K)===K)P!==null&&(P=P.next={lane:0,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),c=U.hasEagerState?U.eagerState:n(c,U.action);else{var Y={lane:K,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null};P===null?(I=P=Y,v=c):P=P.next=Y,ot.lanes|=K,ds|=K}U=U.next}while(U!==null&&U!==p);P===null?v=c:P.next=I,zn(c,r.memoizedState)||(rn=!0),r.memoizedState=c,r.baseState=v,r.baseQueue=P,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do p=d.lane,ot.lanes|=p,ds|=p,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function xh(n){var r=Cn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,p=r.memoizedState;if(d!==null){a.pending=null;var v=d=d.next;do p=n(p,v.action),v=v.next;while(v!==d);zn(p,r.memoizedState)||(rn=!0),r.memoizedState=p,r.baseQueue===null&&(r.baseState=p),a.lastRenderedState=p}return[p,c]}function Hp(){}function Wp(n,r){var a=ot,c=Cn(),d=r(),p=!zn(c.memoizedState,d);if(p&&(c.memoizedState=d,rn=!0),c=c.queue,Vh(Qp.bind(null,a,c,n),[n]),c.getSnapshot!==r||p||kt!==null&&kt.memoizedState.tag&1){if(a.flags|=2048,ka(9,Kp.bind(null,a,c,d,r),void 0,null),Nt===null)throw Error(t(349));(hs&30)!==0||Gp(a,r,d)}return d}function Gp(n,r,a){n.flags|=16384,n={getSnapshot:r,value:a},r=ot.updateQueue,r===null?(r={lastEffect:null,stores:null},ot.updateQueue=r,r.stores=[n]):(a=r.stores,a===null?r.stores=[n]:a.push(n))}function Kp(n,r,a,c){r.value=a,r.getSnapshot=c,Yp(r)&&Xp(n)}function Qp(n,r,a){return a(function(){Yp(r)&&Xp(n)})}function Yp(n){var r=n.getSnapshot;n=n.value;try{var a=r();return!zn(n,a)}catch{return!0}}function Xp(n){var r=kr(n,1);r!==null&&Wn(r,n,1,-1)}function Jp(n){var r=ar();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Pa,lastRenderedState:n},r.queue=n,n=n.dispatch=HE.bind(null,ot,n),[r.memoizedState,n]}function ka(n,r,a,c){return n={tag:n,create:r,destroy:a,deps:c,next:null},r=ot.updateQueue,r===null?(r={lastEffect:null,stores:null},ot.updateQueue=r,r.lastEffect=n.next=n):(a=r.lastEffect,a===null?r.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,r.lastEffect=n)),n}function Zp(){return Cn().memoizedState}function uu(n,r,a,c){var d=ar();ot.flags|=n,d.memoizedState=ka(1|r,a,void 0,c===void 0?null:c)}function cu(n,r,a,c){var d=Cn();c=c===void 0?null:c;var p=void 0;if(At!==null){var v=At.memoizedState;if(p=v.destroy,c!==null&&Rh(c,v.deps)){d.memoizedState=ka(r,a,p,c);return}}ot.flags|=n,d.memoizedState=ka(1|r,a,p,c)}function em(n,r){return uu(8390656,8,n,r)}function Vh(n,r){return cu(2048,8,n,r)}function tm(n,r){return cu(4,2,n,r)}function nm(n,r){return cu(4,4,n,r)}function rm(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function im(n,r,a){return a=a!=null?a.concat([n]):null,cu(4,4,rm.bind(null,r,n),a)}function Dh(){}function sm(n,r){var a=Cn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&Rh(r,c[1])?c[0]:(a.memoizedState=[n,r],n)}function om(n,r){var a=Cn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&Rh(r,c[1])?c[0]:(n=n(),a.memoizedState=[n,r],n)}function am(n,r,a){return(hs&21)===0?(n.baseState&&(n.baseState=!1,rn=!0),n.memoizedState=a):(zn(a,r)||(a=es(),ot.lanes|=a,ds|=a,n.baseState=!0),r)}function $E(n,r){var a=De;De=a!==0&&4>a?a:4,n(!0);var c=Ch.transition;Ch.transition={};try{n(!1),r()}finally{De=a,Ch.transition=c}}function lm(){return Cn().memoizedState}function qE(n,r,a){var c=gi(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},um(n))cm(r,a);else if(a=jp(n,r,a,c),a!==null){var d=Jt();Wn(a,n,c,d),hm(a,r,c)}}function HE(n,r,a){var c=gi(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(um(n))cm(r,d);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=r.lastRenderedReducer,p!==null))try{var v=r.lastRenderedState,I=p(v,a);if(d.hasEagerState=!0,d.eagerState=I,zn(I,v)){var P=r.interleaved;P===null?(d.next=d,Eh(r)):(d.next=P.next,P.next=d),r.interleaved=d;return}}catch{}finally{}a=jp(n,r,d,c),a!==null&&(d=Jt(),Wn(a,n,c,d),hm(a,r,c))}}function um(n){var r=n.alternate;return n===ot||r!==null&&r===ot}function cm(n,r){Ca=lu=!0;var a=n.pending;a===null?r.next=r:(r.next=a.next,a.next=r),n.pending=r}function hm(n,r,a){if((a&4194240)!==0){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,ti(n,a)}}var hu={readContext:An,useCallback:Bt,useContext:Bt,useEffect:Bt,useImperativeHandle:Bt,useInsertionEffect:Bt,useLayoutEffect:Bt,useMemo:Bt,useReducer:Bt,useRef:Bt,useState:Bt,useDebugValue:Bt,useDeferredValue:Bt,useTransition:Bt,useMutableSource:Bt,useSyncExternalStore:Bt,useId:Bt,unstable_isNewReconciler:!1},WE={readContext:An,useCallback:function(n,r){return ar().memoizedState=[n,r===void 0?null:r],n},useContext:An,useEffect:em,useImperativeHandle:function(n,r,a){return a=a!=null?a.concat([n]):null,uu(4194308,4,rm.bind(null,r,n),a)},useLayoutEffect:function(n,r){return uu(4194308,4,n,r)},useInsertionEffect:function(n,r){return uu(4,2,n,r)},useMemo:function(n,r){var a=ar();return r=r===void 0?null:r,n=n(),a.memoizedState=[n,r],n},useReducer:function(n,r,a){var c=ar();return r=a!==void 0?a(r):r,c.memoizedState=c.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},c.queue=n,n=n.dispatch=qE.bind(null,ot,n),[c.memoizedState,n]},useRef:function(n){var r=ar();return n={current:n},r.memoizedState=n},useState:Jp,useDebugValue:Dh,useDeferredValue:function(n){return ar().memoizedState=n},useTransition:function(){var n=Jp(!1),r=n[0];return n=$E.bind(null,n[1]),ar().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,a){var c=ot,d=ar();if(it){if(a===void 0)throw Error(t(407));a=a()}else{if(a=r(),Nt===null)throw Error(t(349));(hs&30)!==0||Gp(c,r,a)}d.memoizedState=a;var p={value:a,getSnapshot:r};return d.queue=p,em(Qp.bind(null,c,p,n),[n]),c.flags|=2048,ka(9,Kp.bind(null,c,p,a,r),void 0,null),a},useId:function(){var n=ar(),r=Nt.identifierPrefix;if(it){var a=Pr,c=Rr;a=(c&~(1<<32-Qt(c)-1)).toString(32)+a,r=":"+r+"R"+a,a=Ra++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=BE++,r=":"+r+"r"+a.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},GE={readContext:An,useCallback:sm,useContext:An,useEffect:Vh,useImperativeHandle:im,useInsertionEffect:tm,useLayoutEffect:nm,useMemo:om,useReducer:Nh,useRef:Zp,useState:function(){return Nh(Pa)},useDebugValue:Dh,useDeferredValue:function(n){var r=Cn();return am(r,At.memoizedState,n)},useTransition:function(){var n=Nh(Pa)[0],r=Cn().memoizedState;return[n,r]},useMutableSource:Hp,useSyncExternalStore:Wp,useId:lm,unstable_isNewReconciler:!1},KE={readContext:An,useCallback:sm,useContext:An,useEffect:Vh,useImperativeHandle:im,useInsertionEffect:tm,useLayoutEffect:nm,useMemo:om,useReducer:xh,useRef:Zp,useState:function(){return xh(Pa)},useDebugValue:Dh,useDeferredValue:function(n){var r=Cn();return At===null?r.memoizedState=n:am(r,At.memoizedState,n)},useTransition:function(){var n=xh(Pa)[0],r=Cn().memoizedState;return[n,r]},useMutableSource:Hp,useSyncExternalStore:Wp,useId:lm,unstable_isNewReconciler:!1};function $n(n,r){if(n&&n.defaultProps){r=ne({},r),n=n.defaultProps;for(var a in n)r[a]===void 0&&(r[a]=n[a]);return r}return r}function Oh(n,r,a,c){r=n.memoizedState,a=a(c,r),a=a==null?r:ne({},r,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var du={isMounted:function(n){return(n=n._reactInternals)?On(n)===n:!1},enqueueSetState:function(n,r,a){n=n._reactInternals;var c=Jt(),d=gi(n),p=Nr(c,d);p.payload=r,a!=null&&(p.callback=a),r=di(n,p,d),r!==null&&(Wn(r,n,d,c),iu(r,n,d))},enqueueReplaceState:function(n,r,a){n=n._reactInternals;var c=Jt(),d=gi(n),p=Nr(c,d);p.tag=1,p.payload=r,a!=null&&(p.callback=a),r=di(n,p,d),r!==null&&(Wn(r,n,d,c),iu(r,n,d))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var a=Jt(),c=gi(n),d=Nr(a,c);d.tag=2,r!=null&&(d.callback=r),r=di(n,d,c),r!==null&&(Wn(r,n,c,a),iu(r,n,c))}};function dm(n,r,a,c,d,p,v){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,p,v):r.prototype&&r.prototype.isPureReactComponent?!ma(a,c)||!ma(d,p):!0}function fm(n,r,a){var c=!1,d=ui,p=r.contextType;return typeof p=="object"&&p!==null?p=An(p):(d=nn(r)?os:zt.current,c=r.contextTypes,p=(c=c!=null)?so(n,d):ui),r=new r(a,p),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=du,n.stateNode=r,r._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=p),r}function pm(n,r,a,c){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,c),r.state!==n&&du.enqueueReplaceState(r,r.state,null)}function Lh(n,r,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},wh(n);var p=r.contextType;typeof p=="object"&&p!==null?d.context=An(p):(p=nn(r)?os:zt.current,d.context=so(n,p)),d.state=n.memoizedState,p=r.getDerivedStateFromProps,typeof p=="function"&&(Oh(n,r,p,a),d.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(r=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),r!==d.state&&du.enqueueReplaceState(d,d.state,null),su(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function po(n,r){try{var a="",c=r;do a+=Se(c),c=c.return;while(c);var d=a}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:n,source:r,stack:d,digest:null}}function Mh(n,r,a){return{value:n,source:null,stack:a??null,digest:r??null}}function bh(n,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var QE=typeof WeakMap=="function"?WeakMap:Map;function mm(n,r,a){a=Nr(-1,a),a.tag=3,a.payload={element:null};var c=r.value;return a.callback=function(){vu||(vu=!0,Jh=c),bh(n,r)},a}function gm(n,r,a){a=Nr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=r.value;a.payload=function(){return c(d)},a.callback=function(){bh(n,r)}}var p=n.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){bh(n,r),typeof c!="function"&&(pi===null?pi=new Set([this]):pi.add(this));var v=r.stack;this.componentDidCatch(r.value,{componentStack:v!==null?v:""})}),a}function ym(n,r,a){var c=n.pingCache;if(c===null){c=n.pingCache=new QE;var d=new Set;c.set(r,d)}else d=c.get(r),d===void 0&&(d=new Set,c.set(r,d));d.has(a)||(d.add(a),n=uw.bind(null,n,r,a),r.then(n,n))}function _m(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function vm(n,r,a,c,d){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=Nr(-1,1),r.tag=2,di(a,r,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var YE=Pe.ReactCurrentOwner,rn=!1;function Xt(n,r,a,c){r.child=n===null?Up(r,null,a,c):uo(r,n.child,a,c)}function Em(n,r,a,c,d){a=a.render;var p=r.ref;return ho(r,d),c=Ph(n,r,a,c,p,d),a=kh(),n!==null&&!rn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,xr(n,r,d)):(it&&a&&hh(r),r.flags|=1,Xt(n,r,c,d),r.child)}function wm(n,r,a,c,d){if(n===null){var p=a.type;return typeof p=="function"&&!sd(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=p,Tm(n,r,p,c,d)):(n=Au(a.type,null,c,r,r.mode,d),n.ref=r.ref,n.return=r,r.child=n)}if(p=n.child,(n.lanes&d)===0){var v=p.memoizedProps;if(a=a.compare,a=a!==null?a:ma,a(v,c)&&n.ref===r.ref)return xr(n,r,d)}return r.flags|=1,n=_i(p,c),n.ref=r.ref,n.return=r,r.child=n}function Tm(n,r,a,c,d){if(n!==null){var p=n.memoizedProps;if(ma(p,c)&&n.ref===r.ref)if(rn=!1,r.pendingProps=c=p,(n.lanes&d)!==0)(n.flags&131072)!==0&&(rn=!0);else return r.lanes=n.lanes,xr(n,r,d)}return Fh(n,r,a,c,d)}function Im(n,r,a){var c=r.pendingProps,d=c.children,p=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ye(go,gn),gn|=a;else{if((a&1073741824)===0)return n=p!==null?p.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,Ye(go,gn),gn|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=p!==null?p.baseLanes:a,Ye(go,gn),gn|=c}else p!==null?(c=p.baseLanes|a,r.memoizedState=null):c=a,Ye(go,gn),gn|=c;return Xt(n,r,d,a),r.child}function Sm(n,r){var a=r.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function Fh(n,r,a,c,d){var p=nn(a)?os:zt.current;return p=so(r,p),ho(r,d),a=Ph(n,r,a,c,p,d),c=kh(),n!==null&&!rn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,xr(n,r,d)):(it&&c&&hh(r),r.flags|=1,Xt(n,r,a,d),r.child)}function Am(n,r,a,c,d){if(nn(a)){var p=!0;Yl(r)}else p=!1;if(ho(r,d),r.stateNode===null)pu(n,r),fm(r,a,c),Lh(r,a,c,d),c=!0;else if(n===null){var v=r.stateNode,I=r.memoizedProps;v.props=I;var P=v.context,U=a.contextType;typeof U=="object"&&U!==null?U=An(U):(U=nn(a)?os:zt.current,U=so(r,U));var K=a.getDerivedStateFromProps,Y=typeof K=="function"||typeof v.getSnapshotBeforeUpdate=="function";Y||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(I!==c||P!==U)&&pm(r,v,c,U),hi=!1;var G=r.memoizedState;v.state=G,su(r,c,v,d),P=r.memoizedState,I!==c||G!==P||tn.current||hi?(typeof K=="function"&&(Oh(r,a,K,c),P=r.memoizedState),(I=hi||dm(r,a,I,c,G,P,U))?(Y||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(r.flags|=4194308)):(typeof v.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=P),v.props=c,v.state=P,v.context=U,c=I):(typeof v.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{v=r.stateNode,zp(n,r),I=r.memoizedProps,U=r.type===r.elementType?I:$n(r.type,I),v.props=U,Y=r.pendingProps,G=v.context,P=a.contextType,typeof P=="object"&&P!==null?P=An(P):(P=nn(a)?os:zt.current,P=so(r,P));var re=a.getDerivedStateFromProps;(K=typeof re=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(I!==Y||G!==P)&&pm(r,v,c,P),hi=!1,G=r.memoizedState,v.state=G,su(r,c,v,d);var oe=r.memoizedState;I!==Y||G!==oe||tn.current||hi?(typeof re=="function"&&(Oh(r,a,re,c),oe=r.memoizedState),(U=hi||dm(r,a,U,c,G,oe,P)||!1)?(K||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,oe,P),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,oe,P)),typeof v.componentDidUpdate=="function"&&(r.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof v.componentDidUpdate!="function"||I===n.memoizedProps&&G===n.memoizedState||(r.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&G===n.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=oe),v.props=c,v.state=oe,v.context=P,c=U):(typeof v.componentDidUpdate!="function"||I===n.memoizedProps&&G===n.memoizedState||(r.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&G===n.memoizedState||(r.flags|=1024),c=!1)}return Uh(n,r,a,c,p,d)}function Uh(n,r,a,c,d,p){Sm(n,r);var v=(r.flags&128)!==0;if(!c&&!v)return d&&Np(r,a,!1),xr(n,r,p);c=r.stateNode,YE.current=r;var I=v&&typeof a.getDerivedStateFromError!="function"?null:c.render();return r.flags|=1,n!==null&&v?(r.child=uo(r,n.child,null,p),r.child=uo(r,null,I,p)):Xt(n,r,I,p),r.memoizedState=c.state,d&&Np(r,a,!0),r.child}function Cm(n){var r=n.stateNode;r.pendingContext?Pp(n,r.pendingContext,r.pendingContext!==r.context):r.context&&Pp(n,r.context,!1),Th(n,r.containerInfo)}function Rm(n,r,a,c,d){return lo(),mh(d),r.flags|=256,Xt(n,r,a,c),r.child}var jh={dehydrated:null,treeContext:null,retryLane:0};function zh(n){return{baseLanes:n,cachePool:null,transitions:null}}function Pm(n,r,a){var c=r.pendingProps,d=st.current,p=!1,v=(r.flags&128)!==0,I;if((I=v)||(I=n!==null&&n.memoizedState===null?!1:(d&2)!==0),I?(p=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),Ye(st,d&1),n===null)return ph(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(v=c.children,n=c.fallback,p?(c=r.mode,p=r.child,v={mode:"hidden",children:v},(c&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=v):p=Cu(v,c,0,null),n=gs(n,c,a,null),p.return=r,n.return=r,p.sibling=n,r.child=p,r.child.memoizedState=zh(a),r.memoizedState=jh,n):Bh(r,v));if(d=n.memoizedState,d!==null&&(I=d.dehydrated,I!==null))return XE(n,r,v,c,I,d,a);if(p){p=c.fallback,v=r.mode,d=n.child,I=d.sibling;var P={mode:"hidden",children:c.children};return(v&1)===0&&r.child!==d?(c=r.child,c.childLanes=0,c.pendingProps=P,r.deletions=null):(c=_i(d,P),c.subtreeFlags=d.subtreeFlags&14680064),I!==null?p=_i(I,p):(p=gs(p,v,a,null),p.flags|=2),p.return=r,c.return=r,c.sibling=p,r.child=c,c=p,p=r.child,v=n.child.memoizedState,v=v===null?zh(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},p.memoizedState=v,p.childLanes=n.childLanes&~a,r.memoizedState=jh,c}return p=n.child,n=p.sibling,c=_i(p,{mode:"visible",children:c.children}),(r.mode&1)===0&&(c.lanes=a),c.return=r,c.sibling=null,n!==null&&(a=r.deletions,a===null?(r.deletions=[n],r.flags|=16):a.push(n)),r.child=c,r.memoizedState=null,c}function Bh(n,r){return r=Cu({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function fu(n,r,a,c){return c!==null&&mh(c),uo(r,n.child,null,a),n=Bh(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function XE(n,r,a,c,d,p,v){if(a)return r.flags&256?(r.flags&=-257,c=Mh(Error(t(422))),fu(n,r,v,c)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(p=c.fallback,d=r.mode,c=Cu({mode:"visible",children:c.children},d,0,null),p=gs(p,d,v,null),p.flags|=2,c.return=r,p.return=r,c.sibling=p,r.child=c,(r.mode&1)!==0&&uo(r,n.child,null,v),r.child.memoizedState=zh(v),r.memoizedState=jh,p);if((r.mode&1)===0)return fu(n,r,v,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var I=c.dgst;return c=I,p=Error(t(419)),c=Mh(p,c,void 0),fu(n,r,v,c)}if(I=(v&n.childLanes)!==0,rn||I){if(c=Nt,c!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|v))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,kr(n,d),Wn(c,n,d,-1))}return id(),c=Mh(Error(t(421))),fu(n,r,v,c)}return d.data==="$?"?(r.flags|=128,r.child=n.child,r=cw.bind(null,n),d._reactRetry=r,null):(n=p.treeContext,mn=ai(d.nextSibling),pn=r,it=!0,Bn=null,n!==null&&(In[Sn++]=Rr,In[Sn++]=Pr,In[Sn++]=as,Rr=n.id,Pr=n.overflow,as=r),r=Bh(r,c.children),r.flags|=4096,r)}function km(n,r,a){n.lanes|=r;var c=n.alternate;c!==null&&(c.lanes|=r),vh(n.return,r,a)}function $h(n,r,a,c,d){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(p.isBackwards=r,p.rendering=null,p.renderingStartTime=0,p.last=c,p.tail=a,p.tailMode=d)}function Nm(n,r,a){var c=r.pendingProps,d=c.revealOrder,p=c.tail;if(Xt(n,r,c.children,a),c=st.current,(c&2)!==0)c=c&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&km(n,a,r);else if(n.tag===19)km(n,a,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Ye(st,c),(r.mode&1)===0)r.memoizedState=null;else switch(d){case"forwards":for(a=r.child,d=null;a!==null;)n=a.alternate,n!==null&&ou(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=r.child,r.child=null):(d=a.sibling,a.sibling=null),$h(r,!1,d,a,p);break;case"backwards":for(a=null,d=r.child,r.child=null;d!==null;){if(n=d.alternate,n!==null&&ou(n)===null){r.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}$h(r,!0,a,null,p);break;case"together":$h(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function pu(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function xr(n,r,a){if(n!==null&&(r.dependencies=n.dependencies),ds|=r.lanes,(a&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,a=_i(n,n.pendingProps),r.child=a,a.return=r;n.sibling!==null;)n=n.sibling,a=a.sibling=_i(n,n.pendingProps),a.return=r;a.sibling=null}return r.child}function JE(n,r,a){switch(r.tag){case 3:Cm(r),lo();break;case 5:qp(r);break;case 1:nn(r.type)&&Yl(r);break;case 4:Th(r,r.stateNode.containerInfo);break;case 10:var c=r.type._context,d=r.memoizedProps.value;Ye(nu,c._currentValue),c._currentValue=d;break;case 13:if(c=r.memoizedState,c!==null)return c.dehydrated!==null?(Ye(st,st.current&1),r.flags|=128,null):(a&r.child.childLanes)!==0?Pm(n,r,a):(Ye(st,st.current&1),n=xr(n,r,a),n!==null?n.sibling:null);Ye(st,st.current&1);break;case 19:if(c=(a&r.childLanes)!==0,(n.flags&128)!==0){if(c)return Nm(n,r,a);r.flags|=128}if(d=r.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Ye(st,st.current),c)break;return null;case 22:case 23:return r.lanes=0,Im(n,r,a)}return xr(n,r,a)}var xm,qh,Vm,Dm;xm=function(n,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},qh=function(){},Vm=function(n,r,a,c){var d=n.memoizedProps;if(d!==c){n=r.stateNode,cs(or.current);var p=null;switch(a){case"input":d=yr(n,d),c=yr(n,c),p=[];break;case"select":d=ne({},d,{value:void 0}),c=ne({},c,{value:void 0}),p=[];break;case"textarea":d=ae(n,d),c=ae(n,c),p=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Gl)}Yo(a,c);var v;a=null;for(U in d)if(!c.hasOwnProperty(U)&&d.hasOwnProperty(U)&&d[U]!=null)if(U==="style"){var I=d[U];for(v in I)I.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else U!=="dangerouslySetInnerHTML"&&U!=="children"&&U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&U!=="autoFocus"&&(o.hasOwnProperty(U)?p||(p=[]):(p=p||[]).push(U,null));for(U in c){var P=c[U];if(I=d?.[U],c.hasOwnProperty(U)&&P!==I&&(P!=null||I!=null))if(U==="style")if(I){for(v in I)!I.hasOwnProperty(v)||P&&P.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in P)P.hasOwnProperty(v)&&I[v]!==P[v]&&(a||(a={}),a[v]=P[v])}else a||(p||(p=[]),p.push(U,a)),a=P;else U==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,I=I?I.__html:void 0,P!=null&&I!==P&&(p=p||[]).push(U,P)):U==="children"?typeof P!="string"&&typeof P!="number"||(p=p||[]).push(U,""+P):U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&(o.hasOwnProperty(U)?(P!=null&&U==="onScroll"&&Ze("scroll",n),p||I===P||(p=[])):(p=p||[]).push(U,P))}a&&(p=p||[]).push("style",a);var U=p;(r.updateQueue=U)&&(r.flags|=4)}},Dm=function(n,r,a,c){a!==c&&(r.flags|=4)};function Na(n,r){if(!it)switch(n.tailMode){case"hidden":r=n.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function $t(n){var r=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(r)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,r}function ZE(n,r,a){var c=r.pendingProps;switch(dh(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $t(r),null;case 1:return nn(r.type)&&Ql(),$t(r),null;case 3:return c=r.stateNode,fo(),et(tn),et(zt),Ah(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(eu(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Bn!==null&&(td(Bn),Bn=null))),qh(n,r),$t(r),null;case 5:Ih(r);var d=cs(Aa.current);if(a=r.type,n!==null&&r.stateNode!=null)Vm(n,r,a,c,d),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!c){if(r.stateNode===null)throw Error(t(166));return $t(r),null}if(n=cs(or.current),eu(r)){c=r.stateNode,a=r.type;var p=r.memoizedProps;switch(c[sr]=r,c[Ea]=p,n=(r.mode&1)!==0,a){case"dialog":Ze("cancel",c),Ze("close",c);break;case"iframe":case"object":case"embed":Ze("load",c);break;case"video":case"audio":for(d=0;d<ya.length;d++)Ze(ya[d],c);break;case"source":Ze("error",c);break;case"img":case"image":case"link":Ze("error",c),Ze("load",c);break;case"details":Ze("toggle",c);break;case"input":Gr(c,p),Ze("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!p.multiple},Ze("invalid",c);break;case"textarea":we(c,p),Ze("invalid",c)}Yo(a,p),d=null;for(var v in p)if(p.hasOwnProperty(v)){var I=p[v];v==="children"?typeof I=="string"?c.textContent!==I&&(p.suppressHydrationWarning!==!0&&Wl(c.textContent,I,n),d=["children",I]):typeof I=="number"&&c.textContent!==""+I&&(p.suppressHydrationWarning!==!0&&Wl(c.textContent,I,n),d=["children",""+I]):o.hasOwnProperty(v)&&I!=null&&v==="onScroll"&&Ze("scroll",c)}switch(a){case"input":xn(c),Ns(c,p,!0);break;case"textarea":xn(c),It(c);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(c.onclick=Gl)}c=d,r.updateQueue=c,c!==null&&(r.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=qe(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=v.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=v.createElement(a,{is:c.is}):(n=v.createElement(a),a==="select"&&(v=n,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):n=v.createElementNS(n,a),n[sr]=r,n[Ea]=c,xm(n,r,!1,!1),r.stateNode=n;e:{switch(v=Xo(a,c),a){case"dialog":Ze("cancel",n),Ze("close",n),d=c;break;case"iframe":case"object":case"embed":Ze("load",n),d=c;break;case"video":case"audio":for(d=0;d<ya.length;d++)Ze(ya[d],n);d=c;break;case"source":Ze("error",n),d=c;break;case"img":case"image":case"link":Ze("error",n),Ze("load",n),d=c;break;case"details":Ze("toggle",n),d=c;break;case"input":Gr(n,c),d=yr(n,c),Ze("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=ne({},c,{value:void 0}),Ze("invalid",n);break;case"textarea":we(n,c),d=ae(n,c),Ze("invalid",n);break;default:d=c}Yo(a,d),I=d;for(p in I)if(I.hasOwnProperty(p)){var P=I[p];p==="style"?Ko(n,P):p==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,P!=null&&Wo(n,P)):p==="children"?typeof P=="string"?(a!=="textarea"||P!=="")&&Yr(n,P):typeof P=="number"&&Yr(n,""+P):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?P!=null&&p==="onScroll"&&Ze("scroll",n):P!=null&&ye(n,p,P,v))}switch(a){case"input":xn(n),Ns(n,c,!1);break;case"textarea":xn(n),It(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Le(c.value));break;case"select":n.multiple=!!c.multiple,p=c.value,p!=null?H(n,!!c.multiple,p,!1):c.defaultValue!=null&&H(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Gl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return $t(r),null;case 6:if(n&&r.stateNode!=null)Dm(n,r,n.memoizedProps,c);else{if(typeof c!="string"&&r.stateNode===null)throw Error(t(166));if(a=cs(Aa.current),cs(or.current),eu(r)){if(c=r.stateNode,a=r.memoizedProps,c[sr]=r,(p=c.nodeValue!==a)&&(n=pn,n!==null))switch(n.tag){case 3:Wl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Wl(c.nodeValue,a,(n.mode&1)!==0)}p&&(r.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[sr]=r,r.stateNode=c}return $t(r),null;case 13:if(et(st),c=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(it&&mn!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Mp(),lo(),r.flags|=98560,p=!1;else if(p=eu(r),c!==null&&c.dehydrated!==null){if(n===null){if(!p)throw Error(t(318));if(p=r.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(t(317));p[sr]=r}else lo(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;$t(r),p=!1}else Bn!==null&&(td(Bn),Bn=null),p=!0;if(!p)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=a,r):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(st.current&1)!==0?Ct===0&&(Ct=3):id())),r.updateQueue!==null&&(r.flags|=4),$t(r),null);case 4:return fo(),qh(n,r),n===null&&_a(r.stateNode.containerInfo),$t(r),null;case 10:return _h(r.type._context),$t(r),null;case 17:return nn(r.type)&&Ql(),$t(r),null;case 19:if(et(st),p=r.memoizedState,p===null)return $t(r),null;if(c=(r.flags&128)!==0,v=p.rendering,v===null)if(c)Na(p,!1);else{if(Ct!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(v=ou(n),v!==null){for(r.flags|=128,Na(p,!1),c=v.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),r.subtreeFlags=0,c=a,a=r.child;a!==null;)p=a,n=c,p.flags&=14680066,v=p.alternate,v===null?(p.childLanes=0,p.lanes=n,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=v.childLanes,p.lanes=v.lanes,p.child=v.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=v.memoizedProps,p.memoizedState=v.memoizedState,p.updateQueue=v.updateQueue,p.type=v.type,n=v.dependencies,p.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Ye(st,st.current&1|2),r.child}n=n.sibling}p.tail!==null&&Qe()>yo&&(r.flags|=128,c=!0,Na(p,!1),r.lanes=4194304)}else{if(!c)if(n=ou(v),n!==null){if(r.flags|=128,c=!0,a=n.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),Na(p,!0),p.tail===null&&p.tailMode==="hidden"&&!v.alternate&&!it)return $t(r),null}else 2*Qe()-p.renderingStartTime>yo&&a!==1073741824&&(r.flags|=128,c=!0,Na(p,!1),r.lanes=4194304);p.isBackwards?(v.sibling=r.child,r.child=v):(a=p.last,a!==null?a.sibling=v:r.child=v,p.last=v)}return p.tail!==null?(r=p.tail,p.rendering=r,p.tail=r.sibling,p.renderingStartTime=Qe(),r.sibling=null,a=st.current,Ye(st,c?a&1|2:a&1),r):($t(r),null);case 22:case 23:return rd(),c=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(r.flags|=8192),c&&(r.mode&1)!==0?(gn&1073741824)!==0&&($t(r),r.subtreeFlags&6&&(r.flags|=8192)):$t(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function ew(n,r){switch(dh(r),r.tag){case 1:return nn(r.type)&&Ql(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return fo(),et(tn),et(zt),Ah(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return Ih(r),null;case 13:if(et(st),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));lo()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return et(st),null;case 4:return fo(),null;case 10:return _h(r.type._context),null;case 22:case 23:return rd(),null;case 24:return null;default:return null}}var mu=!1,qt=!1,tw=typeof WeakSet=="function"?WeakSet:Set,se=null;function mo(n,r){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){lt(n,r,c)}else a.current=null}function Hh(n,r,a){try{a()}catch(c){lt(n,r,c)}}var Om=!1;function nw(n,r){if(rh=ii,n=dp(),Qc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,p=c.focusNode;c=c.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var v=0,I=-1,P=-1,U=0,K=0,Y=n,G=null;t:for(;;){for(var re;Y!==a||d!==0&&Y.nodeType!==3||(I=v+d),Y!==p||c!==0&&Y.nodeType!==3||(P=v+c),Y.nodeType===3&&(v+=Y.nodeValue.length),(re=Y.firstChild)!==null;)G=Y,Y=re;for(;;){if(Y===n)break t;if(G===a&&++U===d&&(I=v),G===p&&++K===c&&(P=v),(re=Y.nextSibling)!==null)break;Y=G,G=Y.parentNode}Y=re}a=I===-1||P===-1?null:{start:I,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(ih={focusedElem:n,selectionRange:a},ii=!1,se=r;se!==null;)if(r=se,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,se=n;else for(;se!==null;){r=se;try{var oe=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(oe!==null){var le=oe.memoizedProps,dt=oe.memoizedState,M=r.stateNode,k=M.getSnapshotBeforeUpdate(r.elementType===r.type?le:$n(r.type,le),dt);M.__reactInternalSnapshotBeforeUpdate=k}break;case 3:var b=r.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(X){lt(r,r.return,X)}if(n=r.sibling,n!==null){n.return=r.return,se=n;break}se=r.return}return oe=Om,Om=!1,oe}function xa(n,r,a){var c=r.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var p=d.destroy;d.destroy=void 0,p!==void 0&&Hh(r,a,p)}d=d.next}while(d!==c)}}function gu(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==r)}}function Wh(n){var r=n.ref;if(r!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof r=="function"?r(n):r.current=n}}function Lm(n){var r=n.alternate;r!==null&&(n.alternate=null,Lm(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[sr],delete r[Ea],delete r[lh],delete r[FE],delete r[UE])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Mm(n){return n.tag===5||n.tag===3||n.tag===4}function bm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Mm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Gh(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(n,r):a.insertBefore(n,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(n,a)):(r=a,r.appendChild(n)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=Gl));else if(c!==4&&(n=n.child,n!==null))for(Gh(n,r,a),n=n.sibling;n!==null;)Gh(n,r,a),n=n.sibling}function Kh(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.insertBefore(n,r):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Kh(n,r,a),n=n.sibling;n!==null;)Kh(n,r,a),n=n.sibling}var Lt=null,qn=!1;function fi(n,r,a){for(a=a.child;a!==null;)Fm(n,r,a),a=a.sibling}function Fm(n,r,a){if(cn&&typeof cn.onCommitFiberUnmount=="function")try{cn.onCommitFiberUnmount(Ji,a)}catch{}switch(a.tag){case 5:qt||mo(a,r);case 6:var c=Lt,d=qn;Lt=null,fi(n,r,a),Lt=c,qn=d,Lt!==null&&(qn?(n=Lt,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Lt.removeChild(a.stateNode));break;case 18:Lt!==null&&(qn?(n=Lt,a=a.stateNode,n.nodeType===8?ah(n.parentNode,a):n.nodeType===1&&ah(n,a),Un(n)):ah(Lt,a.stateNode));break;case 4:c=Lt,d=qn,Lt=a.stateNode.containerInfo,qn=!0,fi(n,r,a),Lt=c,qn=d;break;case 0:case 11:case 14:case 15:if(!qt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var p=d,v=p.destroy;p=p.tag,v!==void 0&&((p&2)!==0||(p&4)!==0)&&Hh(a,r,v),d=d.next}while(d!==c)}fi(n,r,a);break;case 1:if(!qt&&(mo(a,r),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(I){lt(a,r,I)}fi(n,r,a);break;case 21:fi(n,r,a);break;case 22:a.mode&1?(qt=(c=qt)||a.memoizedState!==null,fi(n,r,a),qt=c):fi(n,r,a);break;default:fi(n,r,a)}}function Um(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new tw),r.forEach(function(c){var d=hw.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Hn(n,r){var a=r.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var p=n,v=r,I=v;e:for(;I!==null;){switch(I.tag){case 5:Lt=I.stateNode,qn=!1;break e;case 3:Lt=I.stateNode.containerInfo,qn=!0;break e;case 4:Lt=I.stateNode.containerInfo,qn=!0;break e}I=I.return}if(Lt===null)throw Error(t(160));Fm(p,v,d),Lt=null,qn=!1;var P=d.alternate;P!==null&&(P.return=null),d.return=null}catch(U){lt(d,r,U)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)jm(r,n),r=r.sibling}function jm(n,r){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Hn(r,n),lr(n),c&4){try{xa(3,n,n.return),gu(3,n)}catch(le){lt(n,n.return,le)}try{xa(5,n,n.return)}catch(le){lt(n,n.return,le)}}break;case 1:Hn(r,n),lr(n),c&512&&a!==null&&mo(a,a.return);break;case 5:if(Hn(r,n),lr(n),c&512&&a!==null&&mo(a,a.return),n.flags&32){var d=n.stateNode;try{Yr(d,"")}catch(le){lt(n,n.return,le)}}if(c&4&&(d=n.stateNode,d!=null)){var p=n.memoizedProps,v=a!==null?a.memoizedProps:p,I=n.type,P=n.updateQueue;if(n.updateQueue=null,P!==null)try{I==="input"&&p.type==="radio"&&p.name!=null&&Kr(d,p),Xo(I,v);var U=Xo(I,p);for(v=0;v<P.length;v+=2){var K=P[v],Y=P[v+1];K==="style"?Ko(d,Y):K==="dangerouslySetInnerHTML"?Wo(d,Y):K==="children"?Yr(d,Y):ye(d,K,Y,U)}switch(I){case"input":$i(d,p);break;case"textarea":nt(d,p);break;case"select":var G=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var re=p.value;re!=null?H(d,!!p.multiple,re,!1):G!==!!p.multiple&&(p.defaultValue!=null?H(d,!!p.multiple,p.defaultValue,!0):H(d,!!p.multiple,p.multiple?[]:"",!1))}d[Ea]=p}catch(le){lt(n,n.return,le)}}break;case 6:if(Hn(r,n),lr(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,p=n.memoizedProps;try{d.nodeValue=p}catch(le){lt(n,n.return,le)}}break;case 3:if(Hn(r,n),lr(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Un(r.containerInfo)}catch(le){lt(n,n.return,le)}break;case 4:Hn(r,n),lr(n);break;case 13:Hn(r,n),lr(n),d=n.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(Xh=Qe())),c&4&&Um(n);break;case 22:if(K=a!==null&&a.memoizedState!==null,n.mode&1?(qt=(U=qt)||K,Hn(r,n),qt=U):Hn(r,n),lr(n),c&8192){if(U=n.memoizedState!==null,(n.stateNode.isHidden=U)&&!K&&(n.mode&1)!==0)for(se=n,K=n.child;K!==null;){for(Y=se=K;se!==null;){switch(G=se,re=G.child,G.tag){case 0:case 11:case 14:case 15:xa(4,G,G.return);break;case 1:mo(G,G.return);var oe=G.stateNode;if(typeof oe.componentWillUnmount=="function"){c=G,a=G.return;try{r=c,oe.props=r.memoizedProps,oe.state=r.memoizedState,oe.componentWillUnmount()}catch(le){lt(c,a,le)}}break;case 5:mo(G,G.return);break;case 22:if(G.memoizedState!==null){$m(Y);continue}}re!==null?(re.return=G,se=re):$m(Y)}K=K.sibling}e:for(K=null,Y=n;;){if(Y.tag===5){if(K===null){K=Y;try{d=Y.stateNode,U?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(I=Y.stateNode,P=Y.memoizedProps.style,v=P!=null&&P.hasOwnProperty("display")?P.display:null,I.style.display=Go("display",v))}catch(le){lt(n,n.return,le)}}}else if(Y.tag===6){if(K===null)try{Y.stateNode.nodeValue=U?"":Y.memoizedProps}catch(le){lt(n,n.return,le)}}else if((Y.tag!==22&&Y.tag!==23||Y.memoizedState===null||Y===n)&&Y.child!==null){Y.child.return=Y,Y=Y.child;continue}if(Y===n)break e;for(;Y.sibling===null;){if(Y.return===null||Y.return===n)break e;K===Y&&(K=null),Y=Y.return}K===Y&&(K=null),Y.sibling.return=Y.return,Y=Y.sibling}}break;case 19:Hn(r,n),lr(n),c&4&&Um(n);break;case 21:break;default:Hn(r,n),lr(n)}}function lr(n){var r=n.flags;if(r&2){try{e:{for(var a=n.return;a!==null;){if(Mm(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Yr(d,""),c.flags&=-33);var p=bm(n);Kh(n,p,d);break;case 3:case 4:var v=c.stateNode.containerInfo,I=bm(n);Gh(n,I,v);break;default:throw Error(t(161))}}catch(P){lt(n,n.return,P)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function rw(n,r,a){se=n,zm(n)}function zm(n,r,a){for(var c=(n.mode&1)!==0;se!==null;){var d=se,p=d.child;if(d.tag===22&&c){var v=d.memoizedState!==null||mu;if(!v){var I=d.alternate,P=I!==null&&I.memoizedState!==null||qt;I=mu;var U=qt;if(mu=v,(qt=P)&&!U)for(se=d;se!==null;)v=se,P=v.child,v.tag===22&&v.memoizedState!==null?qm(d):P!==null?(P.return=v,se=P):qm(d);for(;p!==null;)se=p,zm(p),p=p.sibling;se=d,mu=I,qt=U}Bm(n)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,se=p):Bm(n)}}function Bm(n){for(;se!==null;){var r=se;if((r.flags&8772)!==0){var a=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:qt||gu(5,r);break;case 1:var c=r.stateNode;if(r.flags&4&&!qt)if(a===null)c.componentDidMount();else{var d=r.elementType===r.type?a.memoizedProps:$n(r.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var p=r.updateQueue;p!==null&&$p(r,p,c);break;case 3:var v=r.updateQueue;if(v!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}$p(r,v,a)}break;case 5:var I=r.stateNode;if(a===null&&r.flags&4){a=I;var P=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":P.autoFocus&&a.focus();break;case"img":P.src&&(a.src=P.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var U=r.alternate;if(U!==null){var K=U.memoizedState;if(K!==null){var Y=K.dehydrated;Y!==null&&Un(Y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}qt||r.flags&512&&Wh(r)}catch(G){lt(r,r.return,G)}}if(r===n){se=null;break}if(a=r.sibling,a!==null){a.return=r.return,se=a;break}se=r.return}}function $m(n){for(;se!==null;){var r=se;if(r===n){se=null;break}var a=r.sibling;if(a!==null){a.return=r.return,se=a;break}se=r.return}}function qm(n){for(;se!==null;){var r=se;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{gu(4,r)}catch(P){lt(r,a,P)}break;case 1:var c=r.stateNode;if(typeof c.componentDidMount=="function"){var d=r.return;try{c.componentDidMount()}catch(P){lt(r,d,P)}}var p=r.return;try{Wh(r)}catch(P){lt(r,p,P)}break;case 5:var v=r.return;try{Wh(r)}catch(P){lt(r,v,P)}}}catch(P){lt(r,r.return,P)}if(r===n){se=null;break}var I=r.sibling;if(I!==null){I.return=r.return,se=I;break}se=r.return}}var iw=Math.ceil,yu=Pe.ReactCurrentDispatcher,Qh=Pe.ReactCurrentOwner,Rn=Pe.ReactCurrentBatchConfig,Ue=0,Nt=null,yt=null,Mt=0,gn=0,go=li(0),Ct=0,Va=null,ds=0,_u=0,Yh=0,Da=null,sn=null,Xh=0,yo=1/0,Vr=null,vu=!1,Jh=null,pi=null,Eu=!1,mi=null,wu=0,Oa=0,Zh=null,Tu=-1,Iu=0;function Jt(){return(Ue&6)!==0?Qe():Tu!==-1?Tu:Tu=Qe()}function gi(n){return(n.mode&1)===0?1:(Ue&2)!==0&&Mt!==0?Mt&-Mt:zE.transition!==null?(Iu===0&&(Iu=es()),Iu):(n=De,n!==0||(n=window.event,n=n===void 0?16:la(n.type)),n)}function Wn(n,r,a,c){if(50<Oa)throw Oa=0,Zh=null,Error(t(185));ei(n,a,c),((Ue&2)===0||n!==Nt)&&(n===Nt&&((Ue&2)===0&&(_u|=a),Ct===4&&yi(n,Mt)),on(n,c),a===1&&Ue===0&&(r.mode&1)===0&&(yo=Qe()+500,Xl&&ci()))}function on(n,r){var a=n.callbackNode;Er(n,r);var c=Zi(n,n===Nt?Mt:0);if(c===0)a!==null&&ra(a),n.callbackNode=null,n.callbackPriority=0;else if(r=c&-c,n.callbackPriority!==r){if(a!=null&&ra(a),r===1)n.tag===0?jE(Wm.bind(null,n)):xp(Wm.bind(null,n)),ME(function(){(Ue&6)===0&&ci()}),a=null;else{switch(ni(c)){case 1:a=Xi;break;case 4:a=Xr;break;case 16:a=En;break;case 536870912:a=Il;break;default:a=En}a=eg(a,Hm.bind(null,n))}n.callbackPriority=r,n.callbackNode=a}}function Hm(n,r){if(Tu=-1,Iu=0,(Ue&6)!==0)throw Error(t(327));var a=n.callbackNode;if(_o()&&n.callbackNode!==a)return null;var c=Zi(n,n===Nt?Mt:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||r)r=Su(n,c);else{r=c;var d=Ue;Ue|=2;var p=Km();(Nt!==n||Mt!==r)&&(Vr=null,yo=Qe()+500,ps(n,r));do try{aw();break}catch(I){Gm(n,I)}while(!0);yh(),yu.current=p,Ue=d,yt!==null?r=0:(Nt=null,Mt=0,r=Ct)}if(r!==0){if(r===2&&(d=hn(n),d!==0&&(c=d,r=ed(n,d))),r===1)throw a=Va,ps(n,0),yi(n,c),on(n,Qe()),a;if(r===6)yi(n,c);else{if(d=n.current.alternate,(c&30)===0&&!sw(d)&&(r=Su(n,c),r===2&&(p=hn(n),p!==0&&(c=p,r=ed(n,p))),r===1))throw a=Va,ps(n,0),yi(n,c),on(n,Qe()),a;switch(n.finishedWork=d,n.finishedLanes=c,r){case 0:case 1:throw Error(t(345));case 2:ms(n,sn,Vr);break;case 3:if(yi(n,c),(c&130023424)===c&&(r=Xh+500-Qe(),10<r)){if(Zi(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Jt(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=oh(ms.bind(null,n,sn,Vr),r);break}ms(n,sn,Vr);break;case 4:if(yi(n,c),(c&4194240)===c)break;for(r=n.eventTimes,d=-1;0<c;){var v=31-Qt(c);p=1<<v,v=r[v],v>d&&(d=v),c&=~p}if(c=d,c=Qe()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*iw(c/1960))-c,10<c){n.timeoutHandle=oh(ms.bind(null,n,sn,Vr),c);break}ms(n,sn,Vr);break;case 5:ms(n,sn,Vr);break;default:throw Error(t(329))}}}return on(n,Qe()),n.callbackNode===a?Hm.bind(null,n):null}function ed(n,r){var a=Da;return n.current.memoizedState.isDehydrated&&(ps(n,r).flags|=256),n=Su(n,r),n!==2&&(r=sn,sn=a,r!==null&&td(r)),n}function td(n){sn===null?sn=n:sn.push.apply(sn,n)}function sw(n){for(var r=n;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],p=d.getSnapshot;d=d.value;try{if(!zn(p(),d))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function yi(n,r){for(r&=~Yh,r&=~_u,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var a=31-Qt(r),c=1<<a;n[a]=-1,r&=~c}}function Wm(n){if((Ue&6)!==0)throw Error(t(327));_o();var r=Zi(n,0);if((r&1)===0)return on(n,Qe()),null;var a=Su(n,r);if(n.tag!==0&&a===2){var c=hn(n);c!==0&&(r=c,a=ed(n,c))}if(a===1)throw a=Va,ps(n,0),yi(n,r),on(n,Qe()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,ms(n,sn,Vr),on(n,Qe()),null}function nd(n,r){var a=Ue;Ue|=1;try{return n(r)}finally{Ue=a,Ue===0&&(yo=Qe()+500,Xl&&ci())}}function fs(n){mi!==null&&mi.tag===0&&(Ue&6)===0&&_o();var r=Ue;Ue|=1;var a=Rn.transition,c=De;try{if(Rn.transition=null,De=1,n)return n()}finally{De=c,Rn.transition=a,Ue=r,(Ue&6)===0&&ci()}}function rd(){gn=go.current,et(go)}function ps(n,r){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,LE(a)),yt!==null)for(a=yt.return;a!==null;){var c=a;switch(dh(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Ql();break;case 3:fo(),et(tn),et(zt),Ah();break;case 5:Ih(c);break;case 4:fo();break;case 13:et(st);break;case 19:et(st);break;case 10:_h(c.type._context);break;case 22:case 23:rd()}a=a.return}if(Nt=n,yt=n=_i(n.current,null),Mt=gn=r,Ct=0,Va=null,Yh=_u=ds=0,sn=Da=null,us!==null){for(r=0;r<us.length;r++)if(a=us[r],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,p=a.pending;if(p!==null){var v=p.next;p.next=d,c.next=v}a.pending=c}us=null}return n}function Gm(n,r){do{var a=yt;try{if(yh(),au.current=hu,lu){for(var c=ot.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}lu=!1}if(hs=0,kt=At=ot=null,Ca=!1,Ra=0,Qh.current=null,a===null||a.return===null){Ct=1,Va=r,yt=null;break}e:{var p=n,v=a.return,I=a,P=r;if(r=Mt,I.flags|=32768,P!==null&&typeof P=="object"&&typeof P.then=="function"){var U=P,K=I,Y=K.tag;if((K.mode&1)===0&&(Y===0||Y===11||Y===15)){var G=K.alternate;G?(K.updateQueue=G.updateQueue,K.memoizedState=G.memoizedState,K.lanes=G.lanes):(K.updateQueue=null,K.memoizedState=null)}var re=_m(v);if(re!==null){re.flags&=-257,vm(re,v,I,p,r),re.mode&1&&ym(p,U,r),r=re,P=U;var oe=r.updateQueue;if(oe===null){var le=new Set;le.add(P),r.updateQueue=le}else oe.add(P);break e}else{if((r&1)===0){ym(p,U,r),id();break e}P=Error(t(426))}}else if(it&&I.mode&1){var dt=_m(v);if(dt!==null){(dt.flags&65536)===0&&(dt.flags|=256),vm(dt,v,I,p,r),mh(po(P,I));break e}}p=P=po(P,I),Ct!==4&&(Ct=2),Da===null?Da=[p]:Da.push(p),p=v;do{switch(p.tag){case 3:p.flags|=65536,r&=-r,p.lanes|=r;var M=mm(p,P,r);Bp(p,M);break e;case 1:I=P;var k=p.type,b=p.stateNode;if((p.flags&128)===0&&(typeof k.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(pi===null||!pi.has(b)))){p.flags|=65536,r&=-r,p.lanes|=r;var X=gm(p,I,r);Bp(p,X);break e}}p=p.return}while(p!==null)}Ym(a)}catch(ue){r=ue,yt===a&&a!==null&&(yt=a=a.return);continue}break}while(!0)}function Km(){var n=yu.current;return yu.current=hu,n===null?hu:n}function id(){(Ct===0||Ct===3||Ct===2)&&(Ct=4),Nt===null||(ds&268435455)===0&&(_u&268435455)===0||yi(Nt,Mt)}function Su(n,r){var a=Ue;Ue|=2;var c=Km();(Nt!==n||Mt!==r)&&(Vr=null,ps(n,r));do try{ow();break}catch(d){Gm(n,d)}while(!0);if(yh(),Ue=a,yu.current=c,yt!==null)throw Error(t(261));return Nt=null,Mt=0,Ct}function ow(){for(;yt!==null;)Qm(yt)}function aw(){for(;yt!==null&&!wl();)Qm(yt)}function Qm(n){var r=Zm(n.alternate,n,gn);n.memoizedProps=n.pendingProps,r===null?Ym(n):yt=r,Qh.current=null}function Ym(n){var r=n;do{var a=r.alternate;if(n=r.return,(r.flags&32768)===0){if(a=ZE(a,r,gn),a!==null){yt=a;return}}else{if(a=ew(a,r),a!==null){a.flags&=32767,yt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Ct=6,yt=null;return}}if(r=r.sibling,r!==null){yt=r;return}yt=r=n}while(r!==null);Ct===0&&(Ct=5)}function ms(n,r,a){var c=De,d=Rn.transition;try{Rn.transition=null,De=1,lw(n,r,a,c)}finally{Rn.transition=d,De=c}return null}function lw(n,r,a,c){do _o();while(mi!==null);if((Ue&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var p=a.lanes|a.childLanes;if(Ge(n,p),n===Nt&&(yt=Nt=null,Mt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Eu||(Eu=!0,eg(En,function(){return _o(),null})),p=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||p){p=Rn.transition,Rn.transition=null;var v=De;De=1;var I=Ue;Ue|=4,Qh.current=null,nw(n,a),jm(a,n),PE(ih),ii=!!rh,ih=rh=null,n.current=a,rw(a),zc(),Ue=I,De=v,Rn.transition=p}else n.current=a;if(Eu&&(Eu=!1,mi=n,wu=d),p=n.pendingLanes,p===0&&(pi=null),Sl(a.stateNode),on(n,Qe()),r!==null)for(c=n.onRecoverableError,a=0;a<r.length;a++)d=r[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(vu)throw vu=!1,n=Jh,Jh=null,n;return(wu&1)!==0&&n.tag!==0&&_o(),p=n.pendingLanes,(p&1)!==0?n===Zh?Oa++:(Oa=0,Zh=n):Oa=0,ci(),null}function _o(){if(mi!==null){var n=ni(wu),r=Rn.transition,a=De;try{if(Rn.transition=null,De=16>n?16:n,mi===null)var c=!1;else{if(n=mi,mi=null,wu=0,(Ue&6)!==0)throw Error(t(331));var d=Ue;for(Ue|=4,se=n.current;se!==null;){var p=se,v=p.child;if((se.flags&16)!==0){var I=p.deletions;if(I!==null){for(var P=0;P<I.length;P++){var U=I[P];for(se=U;se!==null;){var K=se;switch(K.tag){case 0:case 11:case 15:xa(8,K,p)}var Y=K.child;if(Y!==null)Y.return=K,se=Y;else for(;se!==null;){K=se;var G=K.sibling,re=K.return;if(Lm(K),K===U){se=null;break}if(G!==null){G.return=re,se=G;break}se=re}}}var oe=p.alternate;if(oe!==null){var le=oe.child;if(le!==null){oe.child=null;do{var dt=le.sibling;le.sibling=null,le=dt}while(le!==null)}}se=p}}if((p.subtreeFlags&2064)!==0&&v!==null)v.return=p,se=v;else e:for(;se!==null;){if(p=se,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:xa(9,p,p.return)}var M=p.sibling;if(M!==null){M.return=p.return,se=M;break e}se=p.return}}var k=n.current;for(se=k;se!==null;){v=se;var b=v.child;if((v.subtreeFlags&2064)!==0&&b!==null)b.return=v,se=b;else e:for(v=k;se!==null;){if(I=se,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:gu(9,I)}}catch(ue){lt(I,I.return,ue)}if(I===v){se=null;break e}var X=I.sibling;if(X!==null){X.return=I.return,se=X;break e}se=I.return}}if(Ue=d,ci(),cn&&typeof cn.onPostCommitFiberRoot=="function")try{cn.onPostCommitFiberRoot(Ji,n)}catch{}c=!0}return c}finally{De=a,Rn.transition=r}}return!1}function Xm(n,r,a){r=po(a,r),r=mm(n,r,1),n=di(n,r,1),r=Jt(),n!==null&&(ei(n,1,r),on(n,r))}function lt(n,r,a){if(n.tag===3)Xm(n,n,a);else for(;r!==null;){if(r.tag===3){Xm(r,n,a);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(pi===null||!pi.has(c))){n=po(a,n),n=gm(r,n,1),r=di(r,n,1),n=Jt(),r!==null&&(ei(r,1,n),on(r,n));break}}r=r.return}}function uw(n,r,a){var c=n.pingCache;c!==null&&c.delete(r),r=Jt(),n.pingedLanes|=n.suspendedLanes&a,Nt===n&&(Mt&a)===a&&(Ct===4||Ct===3&&(Mt&130023424)===Mt&&500>Qe()-Xh?ps(n,0):Yh|=a),on(n,r)}function Jm(n,r){r===0&&((n.mode&1)===0?r=1:(r=js,js<<=1,(js&130023424)===0&&(js=4194304)));var a=Jt();n=kr(n,r),n!==null&&(ei(n,r,a),on(n,a))}function cw(n){var r=n.memoizedState,a=0;r!==null&&(a=r.retryLane),Jm(n,a)}function hw(n,r){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(r),Jm(n,a)}var Zm;Zm=function(n,r,a){if(n!==null)if(n.memoizedProps!==r.pendingProps||tn.current)rn=!0;else{if((n.lanes&a)===0&&(r.flags&128)===0)return rn=!1,JE(n,r,a);rn=(n.flags&131072)!==0}else rn=!1,it&&(r.flags&1048576)!==0&&Vp(r,Zl,r.index);switch(r.lanes=0,r.tag){case 2:var c=r.type;pu(n,r),n=r.pendingProps;var d=so(r,zt.current);ho(r,a),d=Ph(null,r,c,n,d,a);var p=kh();return r.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,nn(c)?(p=!0,Yl(r)):p=!1,r.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,wh(r),d.updater=du,r.stateNode=d,d._reactInternals=r,Lh(r,c,n,a),r=Uh(null,r,c,!0,p,a)):(r.tag=0,it&&p&&hh(r),Xt(null,r,d,a),r=r.child),r;case 16:c=r.elementType;e:{switch(pu(n,r),n=r.pendingProps,d=c._init,c=d(c._payload),r.type=c,d=r.tag=fw(c),n=$n(c,n),d){case 0:r=Fh(null,r,c,n,a);break e;case 1:r=Am(null,r,c,n,a);break e;case 11:r=Em(null,r,c,n,a);break e;case 14:r=wm(null,r,c,$n(c.type,n),a);break e}throw Error(t(306,c,""))}return r;case 0:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:$n(c,d),Fh(n,r,c,d,a);case 1:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:$n(c,d),Am(n,r,c,d,a);case 3:e:{if(Cm(r),n===null)throw Error(t(387));c=r.pendingProps,p=r.memoizedState,d=p.element,zp(n,r),su(r,c,null,a);var v=r.memoizedState;if(c=v.element,p.isDehydrated)if(p={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},r.updateQueue.baseState=p,r.memoizedState=p,r.flags&256){d=po(Error(t(423)),r),r=Rm(n,r,c,a,d);break e}else if(c!==d){d=po(Error(t(424)),r),r=Rm(n,r,c,a,d);break e}else for(mn=ai(r.stateNode.containerInfo.firstChild),pn=r,it=!0,Bn=null,a=Up(r,null,c,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(lo(),c===d){r=xr(n,r,a);break e}Xt(n,r,c,a)}r=r.child}return r;case 5:return qp(r),n===null&&ph(r),c=r.type,d=r.pendingProps,p=n!==null?n.memoizedProps:null,v=d.children,sh(c,d)?v=null:p!==null&&sh(c,p)&&(r.flags|=32),Sm(n,r),Xt(n,r,v,a),r.child;case 6:return n===null&&ph(r),null;case 13:return Pm(n,r,a);case 4:return Th(r,r.stateNode.containerInfo),c=r.pendingProps,n===null?r.child=uo(r,null,c,a):Xt(n,r,c,a),r.child;case 11:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:$n(c,d),Em(n,r,c,d,a);case 7:return Xt(n,r,r.pendingProps,a),r.child;case 8:return Xt(n,r,r.pendingProps.children,a),r.child;case 12:return Xt(n,r,r.pendingProps.children,a),r.child;case 10:e:{if(c=r.type._context,d=r.pendingProps,p=r.memoizedProps,v=d.value,Ye(nu,c._currentValue),c._currentValue=v,p!==null)if(zn(p.value,v)){if(p.children===d.children&&!tn.current){r=xr(n,r,a);break e}}else for(p=r.child,p!==null&&(p.return=r);p!==null;){var I=p.dependencies;if(I!==null){v=p.child;for(var P=I.firstContext;P!==null;){if(P.context===c){if(p.tag===1){P=Nr(-1,a&-a),P.tag=2;var U=p.updateQueue;if(U!==null){U=U.shared;var K=U.pending;K===null?P.next=P:(P.next=K.next,K.next=P),U.pending=P}}p.lanes|=a,P=p.alternate,P!==null&&(P.lanes|=a),vh(p.return,a,r),I.lanes|=a;break}P=P.next}}else if(p.tag===10)v=p.type===r.type?null:p.child;else if(p.tag===18){if(v=p.return,v===null)throw Error(t(341));v.lanes|=a,I=v.alternate,I!==null&&(I.lanes|=a),vh(v,a,r),v=p.sibling}else v=p.child;if(v!==null)v.return=p;else for(v=p;v!==null;){if(v===r){v=null;break}if(p=v.sibling,p!==null){p.return=v.return,v=p;break}v=v.return}p=v}Xt(n,r,d.children,a),r=r.child}return r;case 9:return d=r.type,c=r.pendingProps.children,ho(r,a),d=An(d),c=c(d),r.flags|=1,Xt(n,r,c,a),r.child;case 14:return c=r.type,d=$n(c,r.pendingProps),d=$n(c.type,d),wm(n,r,c,d,a);case 15:return Tm(n,r,r.type,r.pendingProps,a);case 17:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:$n(c,d),pu(n,r),r.tag=1,nn(c)?(n=!0,Yl(r)):n=!1,ho(r,a),fm(r,c,d),Lh(r,c,d,a),Uh(null,r,c,!0,n,a);case 19:return Nm(n,r,a);case 22:return Im(n,r,a)}throw Error(t(156,r.tag))};function eg(n,r){return Fs(n,r)}function dw(n,r,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pn(n,r,a,c){return new dw(n,r,a,c)}function sd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function fw(n){if(typeof n=="function")return sd(n)?1:0;if(n!=null){if(n=n.$$typeof,n===D)return 11;if(n===pt)return 14}return 2}function _i(n,r){var a=n.alternate;return a===null?(a=Pn(n.tag,r,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=r,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,r=n.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Au(n,r,a,c,d,p){var v=2;if(c=n,typeof n=="function")sd(n)&&(v=1);else if(typeof n=="string")v=5;else e:switch(n){case x:return gs(a.children,d,p,r);case T:v=8,d|=8;break;case A:return n=Pn(12,a,r,d|2),n.elementType=A,n.lanes=p,n;case S:return n=Pn(13,a,r,d),n.elementType=S,n.lanes=p,n;case Je:return n=Pn(19,a,r,d),n.elementType=Je,n.lanes=p,n;case Oe:return Cu(a,d,p,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case N:v=10;break e;case V:v=9;break e;case D:v=11;break e;case pt:v=14;break e;case Tt:v=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=Pn(v,a,r,d),r.elementType=n,r.type=c,r.lanes=p,r}function gs(n,r,a,c){return n=Pn(7,n,c,r),n.lanes=a,n}function Cu(n,r,a,c){return n=Pn(22,n,c,r),n.elementType=Oe,n.lanes=a,n.stateNode={isHidden:!1},n}function od(n,r,a){return n=Pn(6,n,null,r),n.lanes=a,n}function ad(n,r,a){return r=Pn(4,n.children!==null?n.children:[],n.key,r),r.lanes=a,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function pw(n,r,a,c,d){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zr(0),this.expirationTimes=Zr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zr(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function ld(n,r,a,c,d,p,v,I,P){return n=new pw(n,r,a,I,P),r===1?(r=1,p===!0&&(r|=8)):r=0,p=Pn(3,null,null,r),n.current=p,p.stateNode=n,p.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},wh(p),n}function mw(n,r,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ce,key:c==null?null:""+c,children:n,containerInfo:r,implementation:a}}function tg(n){if(!n)return ui;n=n._reactInternals;e:{if(On(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(nn(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(nn(a))return kp(n,a,r)}return r}function ng(n,r,a,c,d,p,v,I,P){return n=ld(a,c,!0,n,d,p,v,I,P),n.context=tg(null),a=n.current,c=Jt(),d=gi(a),p=Nr(c,d),p.callback=r??null,di(a,p,d),n.current.lanes=d,ei(n,d,c),on(n,c),n}function Ru(n,r,a,c){var d=r.current,p=Jt(),v=gi(d);return a=tg(a),r.context===null?r.context=a:r.pendingContext=a,r=Nr(p,v),r.payload={element:n},c=c===void 0?null:c,c!==null&&(r.callback=c),n=di(d,r,v),n!==null&&(Wn(n,d,v,p),iu(n,d,v)),v}function Pu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function rg(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<r?a:r}}function ud(n,r){rg(n,r),(n=n.alternate)&&rg(n,r)}function gw(){return null}var ig=typeof reportError=="function"?reportError:function(n){console.error(n)};function cd(n){this._internalRoot=n}ku.prototype.render=cd.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));Ru(n,r,null,null)},ku.prototype.unmount=cd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;fs(function(){Ru(null,n,null,null)}),r[Ar]=null}};function ku(n){this._internalRoot=n}ku.prototype.unstable_scheduleHydration=function(n){if(n){var r=kl();n={blockedOn:null,target:n,priority:r};for(var a=0;a<tr.length&&r!==0&&r<tr[a].priority;a++);tr.splice(a,0,n),a===0&&Vl(n)}};function hd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Nu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function sg(){}function yw(n,r,a,c,d){if(d){if(typeof c=="function"){var p=c;c=function(){var U=Pu(v);p.call(U)}}var v=ng(r,c,n,0,null,!1,!1,"",sg);return n._reactRootContainer=v,n[Ar]=v.current,_a(n.nodeType===8?n.parentNode:n),fs(),v}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var I=c;c=function(){var U=Pu(P);I.call(U)}}var P=ld(n,0,!1,null,null,!1,!1,"",sg);return n._reactRootContainer=P,n[Ar]=P.current,_a(n.nodeType===8?n.parentNode:n),fs(function(){Ru(r,P,a,c)}),P}function xu(n,r,a,c,d){var p=a._reactRootContainer;if(p){var v=p;if(typeof d=="function"){var I=d;d=function(){var P=Pu(v);I.call(P)}}Ru(r,v,n,d)}else v=yw(a,r,n,d,c);return Pu(v)}Rl=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var a=Jr(r.pendingLanes);a!==0&&(ti(r,a|1),on(r,Qe()),(Ue&6)===0&&(yo=Qe()+500,ci()))}break;case 13:fs(function(){var c=kr(n,1);if(c!==null){var d=Jt();Wn(c,n,1,d)}}),ud(n,1)}},zs=function(n){if(n.tag===13){var r=kr(n,134217728);if(r!==null){var a=Jt();Wn(r,n,134217728,a)}ud(n,134217728)}},Pl=function(n){if(n.tag===13){var r=gi(n),a=kr(n,r);if(a!==null){var c=Jt();Wn(a,n,r,c)}ud(n,r)}},kl=function(){return De},Nl=function(n,r){var a=De;try{return De=n,r()}finally{De=a}},Vs=function(n,r,a){switch(r){case"input":if($i(n,a),r=a.name,a.type==="radio"&&r!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var c=a[r];if(c!==n&&c.form===n.form){var d=Kl(c);if(!d)throw Error(t(90));Wr(c),$i(c,d)}}}break;case"textarea":nt(n,a);break;case"select":r=a.value,r!=null&&H(n,!!a.multiple,r,!1)}},Gi=nd,Zo=fs;var _w={usingClientEntryPoint:!1,Events:[wa,ro,Kl,Zn,Jo,nd]},La={findFiberByHostInstance:ss,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},vw={bundleType:La.bundleType,version:La.version,rendererPackageName:La.rendererPackageName,rendererConfig:La.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Pe.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=na(n),n===null?null:n.stateNode},findFiberByHostInstance:La.findFiberByHostInstance||gw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vu.isDisabled&&Vu.supportsFiber)try{Ji=Vu.inject(vw),cn=Vu}catch{}}return an.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_w,an.createPortal=function(n,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hd(r))throw Error(t(200));return mw(n,r,null,a)},an.createRoot=function(n,r){if(!hd(n))throw Error(t(299));var a=!1,c="",d=ig;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(d=r.onRecoverableError)),r=ld(n,1,!1,null,null,a,!1,c,d),n[Ar]=r.current,_a(n.nodeType===8?n.parentNode:n),new cd(r)},an.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=na(r),n=n===null?null:n.stateNode,n},an.flushSync=function(n){return fs(n)},an.hydrate=function(n,r,a){if(!Nu(r))throw Error(t(200));return xu(null,n,r,!0,a)},an.hydrateRoot=function(n,r,a){if(!hd(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,p="",v=ig;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),r=ng(r,null,n,1,a??null,d,!1,p,v),n[Ar]=r.current,_a(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,d]:r.mutableSourceEagerHydrationData.push(a,d);return new ku(r)},an.render=function(n,r,a){if(!Nu(r))throw Error(t(200));return xu(null,n,r,!1,a)},an.unmountComponentAtNode=function(n){if(!Nu(n))throw Error(t(40));return n._reactRootContainer?(fs(function(){xu(null,null,n,!1,function(){n._reactRootContainer=null,n[Ar]=null})}),!0):!1},an.unstable_batchedUpdates=nd,an.unstable_renderSubtreeIntoContainer=function(n,r,a,c){if(!Nu(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return xu(n,r,a,!1,c)},an.version="18.3.1-next-f1338f8080-20240426",an}var fg;function Rw(){if(fg)return pd.exports;fg=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),pd.exports=Cw(),pd.exports}var pg;function Pw(){if(pg)return Du;pg=1;var i=Rw();return Du.createRoot=i.createRoot,Du.hydrateRoot=i.hydrateRoot,Du}var kw=Pw();const Nw=()=>{};var mg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wy=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let o=i.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},xw=function(i){const e=[];let t=0,s=0;for(;t<i.length;){const o=i[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=i[t++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=i[t++],h=i[t++],m=i[t++],y=((o&7)<<18|(u&63)<<12|(h&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(y>>10)),e[s++]=String.fromCharCode(56320+(y&1023))}else{const u=i[t++],h=i[t++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},Gy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<i.length;o+=3){const u=i[o],h=o+1<i.length,m=h?i[o+1]:0,y=o+2<i.length,_=y?i[o+2]:0,w=u>>2,R=(u&3)<<4|m>>4;let C=(m&15)<<2|_>>6,z=_&63;y||(z=64,h||(C=64)),s.push(t[w],t[R],t[C],t[z])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(Wy(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):xw(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<i.length;){const u=t[i.charAt(o++)],m=o<i.length?t[i.charAt(o)]:0;++o;const _=o<i.length?t[i.charAt(o)]:64;++o;const R=o<i.length?t[i.charAt(o)]:64;if(++o,u==null||m==null||_==null||R==null)throw new Vw;const C=u<<2|m>>4;if(s.push(C),_!==64){const z=m<<4&240|_>>2;if(s.push(z),R!==64){const Q=_<<6&192|R;s.push(Q)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class Vw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Dw=function(i){const e=Wy(i);return Gy.encodeByteArray(e,!0)},Yu=function(i){return Dw(i).replace(/\./g,"")},Ky=function(i){try{return Gy.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ow(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lw=()=>Ow().__FIREBASE_DEFAULTS__,Mw=()=>{if(typeof process>"u"||typeof mg>"u")return;const i=mg.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},bw=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&Ky(i[1]);return e&&JSON.parse(e)},mc=()=>{try{return Nw()||Lw()||Mw()||bw()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},Qy=i=>mc()?.emulatorHosts?.[i],Fw=i=>{const e=Qy(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Yy=()=>mc()?.config,Xy=i=>mc()?.[`_${i}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fo(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Jy(i){return(await fetch(i,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jw(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=i.iat||0,u=i.sub||i.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h={iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}},...i};return[Yu(JSON.stringify(t)),Yu(JSON.stringify(h)),""].join(".")}const qa={};function zw(){const i={prod:[],emulator:[]};for(const e of Object.keys(qa))qa[e]?i.emulator.push(e):i.prod.push(e);return i}function Bw(i){let e=document.getElementById(i),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",i),t=!0),{created:t,element:e}}let gg=!1;function Zy(i,e){if(typeof window>"u"||typeof document>"u"||!Fo(window.location.host)||qa[i]===e||qa[i]||gg)return;qa[i]=e;function t(C){return`__firebase__banner__${C}`}const s="__firebase__banner",u=zw().prod.length>0;function h(){const C=document.getElementById(s);C&&C.remove()}function m(C){C.style.display="flex",C.style.background="#7faaf0",C.style.position="fixed",C.style.bottom="5px",C.style.left="5px",C.style.padding=".5em",C.style.borderRadius="5px",C.style.alignItems="center"}function y(C,z){C.setAttribute("width","24"),C.setAttribute("id",z),C.setAttribute("height","24"),C.setAttribute("viewBox","0 0 24 24"),C.setAttribute("fill","none"),C.style.marginLeft="-6px"}function _(){const C=document.createElement("span");return C.style.cursor="pointer",C.style.marginLeft="16px",C.style.fontSize="24px",C.innerHTML=" &times;",C.onclick=()=>{gg=!0,h()},C}function w(C,z){C.setAttribute("id",z),C.innerText="Learn more",C.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",C.setAttribute("target","__blank"),C.style.paddingLeft="5px",C.style.textDecoration="underline"}function R(){const C=Bw(s),z=t("text"),Q=document.getElementById(z)||document.createElement("span"),J=t("learnmore"),W=document.getElementById(J)||document.createElement("a"),fe=t("preprendIcon"),ge=document.getElementById(fe)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(C.created){const ye=C.element;m(ye),w(W,J);const Pe=_();y(ge,fe),ye.append(ge,Q,W,Pe),document.body.appendChild(ye)}u?(Q.innerText="Preview backend disconnected.",ge.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(ge.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,Q.innerText="Preview backend running in this workspace."),Q.setAttribute("id",z)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",R):R()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $w(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Kt())}function qw(){const i=mc()?.forceEnvironment;if(i==="node")return!0;if(i==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Hw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ww(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function Gw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Kw(){const i=Kt();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function Qw(){return!qw()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Yw(){try{return typeof indexedDB=="object"}catch{return!1}}function Xw(){return new Promise((i,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),i(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{e(o.error?.message||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jw="FirebaseError";class $r extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=Jw,Object.setPrototypeOf(this,$r.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,al.prototype.create)}}class al{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?Zw(u,s):"Error",m=`${this.serviceName}: ${h} (${o}).`;return new $r(o,m,s)}}function Zw(i,e){return i.replace(e0,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const e0=/\{\$([^}]+)}/g;function t0(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function ws(i,e){if(i===e)return!0;const t=Object.keys(i),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const u=i[o],h=e[o];if(yg(u)&&yg(h)){if(!ws(u,h))return!1}else if(u!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function yg(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ll(i){const e=[];for(const[t,s]of Object.entries(i))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Fa(i){const e={};return i.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,u]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(u)}}),e}function Ua(i){const e=i.indexOf("?");if(!e)return"";const t=i.indexOf("#",e);return i.substring(e,t>0?t:void 0)}function n0(i,e){const t=new r0(i,e);return t.subscribe.bind(t)}class r0{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");i0(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=yd),o.error===void 0&&(o.error=yd),o.complete===void 0&&(o.complete=yd);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function i0(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function yd(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(i){return i&&i._delegate?i._delegate:i}class Ts{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ys="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Uw;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),s=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(a0(e))try{this.getOrInitializeService({instanceIdentifier:ys})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=ys){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ys){return this.instances.has(e)}getOptions(e=ys){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&h.resolve(o)}return o}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),o=this.onInitCallbacks.get(s)??new Set;o.add(e),this.onInitCallbacks.set(s,o);const u=this.instances.get(s);return u&&e(u,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:o0(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ys){return this.component?this.component.multipleInstances?e:ys:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function o0(i){return i===ys?void 0:i}function a0(i){return i.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new s0(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ne;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(Ne||(Ne={}));const u0={debug:Ne.DEBUG,verbose:Ne.VERBOSE,info:Ne.INFO,warn:Ne.WARN,error:Ne.ERROR,silent:Ne.SILENT},c0=Ne.INFO,h0={[Ne.DEBUG]:"log",[Ne.VERBOSE]:"log",[Ne.INFO]:"info",[Ne.WARN]:"warn",[Ne.ERROR]:"error"},d0=(i,e,...t)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),o=h0[e];if(o)console[o](`[${s}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class of{constructor(e){this.name=e,this._logLevel=c0,this._logHandler=d0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?u0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ne.DEBUG,...e),this._logHandler(this,Ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ne.VERBOSE,...e),this._logHandler(this,Ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ne.INFO,...e),this._logHandler(this,Ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ne.WARN,...e),this._logHandler(this,Ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ne.ERROR,...e),this._logHandler(this,Ne.ERROR,...e)}}const f0=(i,e)=>e.some(t=>i instanceof t);let _g,vg;function p0(){return _g||(_g=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function m0(){return vg||(vg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const e_=new WeakMap,xd=new WeakMap,t_=new WeakMap,_d=new WeakMap,af=new WeakMap;function g0(i){const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("success",u),i.removeEventListener("error",h)},u=()=>{t(Pi(i.result)),o()},h=()=>{s(i.error),o()};i.addEventListener("success",u),i.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&e_.set(t,i)}).catch(()=>{}),af.set(e,i),e}function y0(i){if(xd.has(i))return;const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",h),i.removeEventListener("abort",h)},u=()=>{t(),o()},h=()=>{s(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",u),i.addEventListener("error",h),i.addEventListener("abort",h)});xd.set(i,e)}let Vd={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return xd.get(i);if(e==="objectStoreNames")return i.objectStoreNames||t_.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Pi(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function _0(i){Vd=i(Vd)}function v0(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=i.call(vd(this),e,...t);return t_.set(s,e.sort?e.sort():[e]),Pi(s)}:m0().includes(i)?function(...e){return i.apply(vd(this),e),Pi(e_.get(this))}:function(...e){return Pi(i.apply(vd(this),e))}}function E0(i){return typeof i=="function"?v0(i):(i instanceof IDBTransaction&&y0(i),f0(i,p0())?new Proxy(i,Vd):i)}function Pi(i){if(i instanceof IDBRequest)return g0(i);if(_d.has(i))return _d.get(i);const e=E0(i);return e!==i&&(_d.set(i,e),af.set(e,i)),e}const vd=i=>af.get(i);function w0(i,e,{blocked:t,upgrade:s,blocking:o,terminated:u}={}){const h=indexedDB.open(i,e),m=Pi(h);return s&&h.addEventListener("upgradeneeded",y=>{s(Pi(h.result),y.oldVersion,y.newVersion,Pi(h.transaction),y)}),t&&h.addEventListener("blocked",y=>t(y.oldVersion,y.newVersion,y)),m.then(y=>{u&&y.addEventListener("close",()=>u()),o&&y.addEventListener("versionchange",_=>o(_.oldVersion,_.newVersion,_))}).catch(()=>{}),m}const T0=["get","getKey","getAll","getAllKeys","count"],I0=["put","add","delete","clear"],Ed=new Map;function Eg(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(Ed.get(e))return Ed.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=I0.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||T0.includes(t)))return;const u=async function(h,...m){const y=this.transaction(h,o?"readwrite":"readonly");let _=y.store;return s&&(_=_.index(m.shift())),(await Promise.all([_[t](...m),o&&y.done]))[0]};return Ed.set(e,u),u}_0(i=>({...i,get:(e,t,s)=>Eg(e,t)||i.get(e,t,s),has:(e,t)=>!!Eg(e,t)||i.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(A0(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function A0(i){return i.getComponent()?.type==="VERSION"}const Dd="@firebase/app",wg="0.14.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ur=new of("@firebase/app"),C0="@firebase/app-compat",R0="@firebase/analytics-compat",P0="@firebase/analytics",k0="@firebase/app-check-compat",N0="@firebase/app-check",x0="@firebase/auth",V0="@firebase/auth-compat",D0="@firebase/database",O0="@firebase/data-connect",L0="@firebase/database-compat",M0="@firebase/functions",b0="@firebase/functions-compat",F0="@firebase/installations",U0="@firebase/installations-compat",j0="@firebase/messaging",z0="@firebase/messaging-compat",B0="@firebase/performance",$0="@firebase/performance-compat",q0="@firebase/remote-config",H0="@firebase/remote-config-compat",W0="@firebase/storage",G0="@firebase/storage-compat",K0="@firebase/firestore",Q0="@firebase/ai",Y0="@firebase/firestore-compat",X0="firebase",J0="12.0.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Od="[DEFAULT]",Z0={[Dd]:"fire-core",[C0]:"fire-core-compat",[P0]:"fire-analytics",[R0]:"fire-analytics-compat",[N0]:"fire-app-check",[k0]:"fire-app-check-compat",[x0]:"fire-auth",[V0]:"fire-auth-compat",[D0]:"fire-rtdb",[O0]:"fire-data-connect",[L0]:"fire-rtdb-compat",[M0]:"fire-fn",[b0]:"fire-fn-compat",[F0]:"fire-iid",[U0]:"fire-iid-compat",[j0]:"fire-fcm",[z0]:"fire-fcm-compat",[B0]:"fire-perf",[$0]:"fire-perf-compat",[q0]:"fire-rc",[H0]:"fire-rc-compat",[W0]:"fire-gcs",[G0]:"fire-gcs-compat",[K0]:"fire-fst",[Y0]:"fire-fst-compat",[Q0]:"fire-vertex","fire-js":"fire-js",[X0]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xu=new Map,eT=new Map,Ld=new Map;function Tg(i,e){try{i.container.addComponent(e)}catch(t){Ur.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function xo(i){const e=i.name;if(Ld.has(e))return Ur.debug(`There were multiple attempts to register component ${e}.`),!1;Ld.set(e,i);for(const t of Xu.values())Tg(t,i);for(const t of eT.values())Tg(t,i);return!0}function lf(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function kn(i){return i==null?!1:i.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ki=new al("app","Firebase",tT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nT{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ts("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ki.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uo=J0;function n_(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const s={name:Od,automaticDataCollectionEnabled:!0,...e},o=s.name;if(typeof o!="string"||!o)throw ki.create("bad-app-name",{appName:String(o)});if(t||(t=Yy()),!t)throw ki.create("no-options");const u=Xu.get(o);if(u){if(ws(t,u.options)&&ws(s,u.config))return u;throw ki.create("duplicate-app",{appName:o})}const h=new l0(o);for(const y of Ld.values())h.addComponent(y);const m=new nT(t,s,h);return Xu.set(o,m),m}function r_(i=Od){const e=Xu.get(i);if(!e&&i===Od&&Yy())return n_();if(!e)throw ki.create("no-app",{appName:i});return e}function Ni(i,e,t){let s=Z0[i]??i;t&&(s+=`-${t}`);const o=s.match(/\s|\//),u=e.match(/\s|\//);if(o||u){const h=[`Unable to register library "${s}" with version "${e}":`];o&&h.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&u&&h.push("and"),u&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ur.warn(h.join(" "));return}xo(new Ts(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rT="firebase-heartbeat-database",iT=1,Ya="firebase-heartbeat-store";let wd=null;function i_(){return wd||(wd=w0(rT,iT,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(Ya)}catch(t){console.warn(t)}}}}).catch(i=>{throw ki.create("idb-open",{originalErrorMessage:i.message})})),wd}async function sT(i){try{const t=(await i_()).transaction(Ya),s=await t.objectStore(Ya).get(s_(i));return await t.done,s}catch(e){if(e instanceof $r)Ur.warn(e.message);else{const t=ki.create("idb-get",{originalErrorMessage:e?.message});Ur.warn(t.message)}}}async function Ig(i,e){try{const s=(await i_()).transaction(Ya,"readwrite");await s.objectStore(Ya).put(e,s_(i)),await s.done}catch(t){if(t instanceof $r)Ur.warn(t.message);else{const s=ki.create("idb-set",{originalErrorMessage:t?.message});Ur.warn(s.message)}}}function s_(i){return`${i.name}!${i.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oT=1024,aT=30;class lT{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new cT(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Sg();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:t}),this._heartbeatsCache.heartbeats.length>aT){const o=hT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Ur.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Sg(),{heartbeatsToSend:t,unsentEntries:s}=uT(this._heartbeatsCache.heartbeats),o=Yu(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Ur.warn(e),""}}}function Sg(){return new Date().toISOString().substring(0,10)}function uT(i,e=oT){const t=[];let s=i.slice();for(const o of i){const u=t.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),Ag(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Ag(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class cT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Yw()?Xw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await sT(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Ig(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Ig(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ag(i){return Yu(JSON.stringify({version:2,heartbeats:i})).length}function hT(i){if(i.length===0)return-1;let e=0,t=i[0].date;for(let s=1;s<i.length;s++)i[s].date<t&&(t=i[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dT(i){xo(new Ts("platform-logger",e=>new S0(e),"PRIVATE")),xo(new Ts("heartbeat",e=>new lT(e),"PRIVATE")),Ni(Dd,wg,i),Ni(Dd,wg,"esm2020"),Ni("fire-js","")}dT("");var fT="firebase",pT="12.0.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ni(fT,pT,"app");function o_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const mT=o_,a_=new al("auth","Firebase",o_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ju=new of("@firebase/auth");function gT(i,...e){Ju.logLevel<=Ne.WARN&&Ju.warn(`Auth (${Uo}): ${i}`,...e)}function ju(i,...e){Ju.logLevel<=Ne.ERROR&&Ju.error(`Auth (${Uo}): ${i}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qn(i,...e){throw uf(i,...e)}function cr(i,...e){return uf(i,...e)}function l_(i,e,t){const s={...mT(),[e]:t};return new al("auth","Firebase",s).create(e,{appName:i.name})}function br(i){return l_(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function uf(i,...e){if(typeof i!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(t,...s)}return a_.create(i,...e)}function _e(i,e,...t){if(!i)throw uf(e,...t)}function Lr(i){const e="INTERNAL ASSERTION FAILED: "+i;throw ju(e),new Error(e)}function jr(i,e){i||Lr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Md(){return typeof self<"u"&&self.location?.href||""}function yT(){return Cg()==="http:"||Cg()==="https:"}function Cg(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _T(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(yT()||Ww()||"connection"in navigator)?navigator.onLine:!0}function vT(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(e,t){this.shortDelay=e,this.longDelay=t,jr(t>e,"Short delay should be less than long delay!"),this.isMobile=$w()||Gw()}get(){return _T()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cf(i,e){jr(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Lr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Lr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Lr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ET={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wT=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],TT=new ul(3e4,6e4);function qr(i,e){return i.tenantId&&!e.tenantId?{...e,tenantId:i.tenantId}:e}async function Hr(i,e,t,s,o={}){return c_(i,o,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const m=ll({key:i.config.apiKey,...h}).slice(1),y=await i._getAdditionalHeaders();y["Content-Type"]="application/json",i.languageCode&&(y["X-Firebase-Locale"]=i.languageCode);const _={method:e,headers:y,...u};return Hw()||(_.referrerPolicy="no-referrer"),i.emulatorConfig&&Fo(i.emulatorConfig.host)&&(_.credentials="include"),u_.fetch()(await h_(i,i.config.apiHost,t,m),_)})}async function c_(i,e,t){i._canInitEmulator=!1;const s={...ET,...e};try{const o=new ST(i),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw Ou(i,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const m=u.ok?h.errorMessage:h.error.message,[y,_]=m.split(" : ");if(y==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ou(i,"credential-already-in-use",h);if(y==="EMAIL_EXISTS")throw Ou(i,"email-already-in-use",h);if(y==="USER_DISABLED")throw Ou(i,"user-disabled",h);const w=s[y]||y.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw l_(i,w,_);Qn(i,w)}}catch(o){if(o instanceof $r)throw o;Qn(i,"network-request-failed",{message:String(o)})}}async function cl(i,e,t,s,o={}){const u=await Hr(i,e,t,s,o);return"mfaPendingCredential"in u&&Qn(i,"multi-factor-auth-required",{_serverResponse:u}),u}async function h_(i,e,t,s){const o=`${e}${t}?${s}`,u=i,h=u.config.emulator?cf(i.config,o):`${i.config.apiScheme}://${o}`;return wT.includes(t)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(h).toString():h}function IT(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class ST{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(cr(this.auth,"network-request-failed")),TT.get())})}}function Ou(i,e,t){const s={appName:i.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=cr(i,e,s);return o.customData._tokenResponse=t,o}function Rg(i){return i!==void 0&&i.enterprise!==void 0}class AT{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return IT(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function CT(i,e){return Hr(i,"GET","/v2/recaptchaConfig",qr(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RT(i,e){return Hr(i,"POST","/v1/accounts:delete",e)}async function Zu(i,e){return Hr(i,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ha(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function PT(i,e=!1){const t=wt(i),s=await t.getIdToken(e),o=hf(s);_e(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u?.sign_in_provider;return{claims:o,token:s,authTime:Ha(Td(o.auth_time)),issuedAtTime:Ha(Td(o.iat)),expirationTime:Ha(Td(o.exp)),signInProvider:h||null,signInSecondFactor:u?.sign_in_second_factor||null}}function Td(i){return Number(i)*1e3}function hf(i){const[e,t,s]=i.split(".");if(e===void 0||t===void 0||s===void 0)return ju("JWT malformed, contained fewer than 3 sections"),null;try{const o=Ky(t);return o?JSON.parse(o):(ju("Failed to decode base64 JWT payload"),null)}catch(o){return ju("Caught error parsing JWT payload as JSON",o?.toString()),null}}function Pg(i){const e=hf(i);return _e(e,"internal-error"),_e(typeof e.exp<"u","internal-error"),_e(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xa(i,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof $r&&kT(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function kT({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ha(this.lastLoginAt),this.creationTime=Ha(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ec(i){const e=i.auth,t=await i.getIdToken(),s=await Xa(i,Zu(e,{idToken:t}));_e(s?.users.length,e,"internal-error");const o=s.users[0];i._notifyReloadListener(o);const u=o.providerUserInfo?.length?d_(o.providerUserInfo):[],h=VT(i.providerData,u),m=i.isAnonymous,y=!(i.email&&o.passwordHash)&&!h?.length,_=m?y:!1,w={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:h,metadata:new bd(o.createdAt,o.lastLoginAt),isAnonymous:_};Object.assign(i,w)}async function xT(i){const e=wt(i);await ec(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function VT(i,e){return[...i.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function d_(i){return i.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DT(i,e){const t=await c_(i,{},async()=>{const s=ll({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=i.config,h=await h_(i,o,"/v1/token",`key=${u}`),m=await i._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const y={method:"POST",headers:m,body:s};return i.emulatorConfig&&Fo(i.emulatorConfig.host)&&(y.credentials="include"),u_.fetch()(h,y)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function OT(i,e){return Hr(i,"POST","/v2/accounts:revokeToken",qr(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_e(e.idToken,"internal-error"),_e(typeof e.idToken<"u","internal-error"),_e(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Pg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){_e(e.length!==0,"internal-error");const t=Pg(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(_e(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:u}=await DT(e,t);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:u}=t,h=new Ro;return s&&(_e(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(_e(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(_e(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ro,this.toJSON())}_performRefresh(){return Lr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ei(i,e){_e(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class Gn{constructor({uid:e,auth:t,stsTokenManager:s,...o}){this.providerId="firebase",this.proactiveRefresh=new NT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new bd(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await Xa(this,this.stsTokenManager.getToken(this.auth,e));return _e(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return PT(this,e)}reload(){return xT(this)}_assign(e){this!==e&&(_e(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Gn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){_e(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await ec(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(kn(this.auth.app))return Promise.reject(br(this.auth));const e=await this.getIdToken();return await Xa(this,RT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,o=t.email??void 0,u=t.phoneNumber??void 0,h=t.photoURL??void 0,m=t.tenantId??void 0,y=t._redirectEventId??void 0,_=t.createdAt??void 0,w=t.lastLoginAt??void 0,{uid:R,emailVerified:C,isAnonymous:z,providerData:Q,stsTokenManager:J}=t;_e(R&&J,e,"internal-error");const W=Ro.fromJSON(this.name,J);_e(typeof R=="string",e,"internal-error"),Ei(s,e.name),Ei(o,e.name),_e(typeof C=="boolean",e,"internal-error"),_e(typeof z=="boolean",e,"internal-error"),Ei(u,e.name),Ei(h,e.name),Ei(m,e.name),Ei(y,e.name),Ei(_,e.name),Ei(w,e.name);const fe=new Gn({uid:R,auth:e,email:o,emailVerified:C,displayName:s,isAnonymous:z,photoURL:h,phoneNumber:u,tenantId:m,stsTokenManager:W,createdAt:_,lastLoginAt:w});return Q&&Array.isArray(Q)&&(fe.providerData=Q.map(ge=>({...ge}))),y&&(fe._redirectEventId=y),fe}static async _fromIdTokenResponse(e,t,s=!1){const o=new Ro;o.updateFromServerResponse(t);const u=new Gn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await ec(u),u}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];_e(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?d_(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!u?.length,m=new Ro;m.updateFromIdToken(s);const y=new Gn({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:h}),_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new bd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!u?.length};return Object.assign(y,_),y}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kg=new Map;function Mr(i){jr(i instanceof Function,"Expected a class definition");let e=kg.get(i);return e?(jr(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,kg.set(i,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}f_.type="NONE";const Ng=f_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zu(i,e,t){return`firebase:${i}:${e}:${t}`}class Po{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=zu(this.userKey,o.apiKey,u),this.fullPersistenceKey=zu("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Zu(this.auth,{idToken:e}).catch(()=>{});return t?Gn._fromGetAccountInfoResponse(this.auth,t,e):null}return Gn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Po(Mr(Ng),e,s);const o=(await Promise.all(t.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let u=o[0]||Mr(Ng);const h=zu(s,e.config.apiKey,e.name);let m=null;for(const _ of t)try{const w=await _._get(h);if(w){let R;if(typeof w=="string"){const C=await Zu(e,{idToken:w}).catch(()=>{});if(!C)break;R=await Gn._fromGetAccountInfoResponse(e,C,w)}else R=Gn._fromJSON(e,w);_!==u&&(m=R),u=_;break}}catch{}const y=o.filter(_=>_._shouldAllowMigration);return!u._shouldAllowMigration||!y.length?new Po(u,e,s):(u=y[0],m&&await u._set(h,m.toJSON()),await Promise.all(t.map(async _=>{if(_!==u)try{await _._remove(h)}catch{}})),new Po(u,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xg(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(y_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(p_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(v_(e))return"Blackberry";if(E_(e))return"Webos";if(m_(e))return"Safari";if((e.includes("chrome/")||g_(e))&&!e.includes("edge/"))return"Chrome";if(__(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(t);if(s?.length===2)return s[1]}return"Other"}function p_(i=Kt()){return/firefox\//i.test(i)}function m_(i=Kt()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function g_(i=Kt()){return/crios\//i.test(i)}function y_(i=Kt()){return/iemobile/i.test(i)}function __(i=Kt()){return/android/i.test(i)}function v_(i=Kt()){return/blackberry/i.test(i)}function E_(i=Kt()){return/webos/i.test(i)}function df(i=Kt()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function LT(i=Kt()){return df(i)&&!!window.navigator?.standalone}function MT(){return Kw()&&document.documentMode===10}function w_(i=Kt()){return df(i)||__(i)||E_(i)||v_(i)||/windows phone/i.test(i)||y_(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T_(i,e=[]){let t;switch(i){case"Browser":t=xg(Kt());break;case"Worker":t=`${xg(Kt())}-${i}`;break;default:t=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Uo}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((h,m)=>{try{const y=e(u);h(y)}catch(y){m(y)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FT(i,e={}){return Hr(i,"GET","/v2/passwordPolicy",qr(i,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UT=6;class jT{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??UT,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zT{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Vg(this),this.idTokenSubscription=new Vg(this),this.beforeStateQueue=new bT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=a_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Mr(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Po.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Zu(this,{idToken:e}),s=await Gn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(kn(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(h=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(h,h))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=this.redirectUser?._redirectEventId,h=s?._redirectEventId,m=await this.tryRedirectSignIn(e);(!u||u===h)&&m?.user&&(s=m.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(u){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return _e(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ec(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=vT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(kn(this.app))return Promise.reject(br(this));const t=e?wt(e):null;return t&&_e(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&_e(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return kn(this.app)?Promise.reject(br(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return kn(this.app)?Promise.reject(br(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Mr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await FT(this),t=new jT(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new al("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await OT(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Mr(e)||this._popupRedirectResolver;_e(t,this,"argument-error"),this.redirectPersistenceManager=await Po.create(this,[Mr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(_e(m,this,"internal-error"),m.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const y=e.addObserver(t,s,o);return()=>{h=!0,y()}}else{const y=e.addObserver(t);return()=>{h=!0,y()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _e(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=T_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){if(kn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&gT(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Rs(i){return wt(i)}class Vg{constructor(e){this.auth=e,this.observer=null,this.addObserver=n0(t=>this.observer=t)}get next(){return _e(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function BT(i){gc=i}function I_(i){return gc.loadJS(i)}function $T(){return gc.recaptchaEnterpriseScript}function qT(){return gc.gapiScript}function HT(i){return`__${i}${Math.floor(Math.random()*1e6)}`}class WT{constructor(){this.enterprise=new GT}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class GT{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const KT="recaptcha-enterprise",S_="NO_RECAPTCHA";class QT{constructor(e){this.type=KT,this.auth=Rs(e)}async verify(e="verify",t=!1){async function s(u){if(!t){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(h,m)=>{CT(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(y=>{if(y.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const _=new AT(y);return u.tenantId==null?u._agentRecaptchaConfig=_:u._tenantRecaptchaConfigs[u.tenantId]=_,h(_.siteKey)}}).catch(y=>{m(y)})})}function o(u,h,m){const y=window.grecaptcha;Rg(y)?y.enterprise.ready(()=>{y.enterprise.execute(u,{action:e}).then(_=>{h(_)}).catch(()=>{h(S_)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new WT().execute("siteKey",{action:"verify"}):new Promise((u,h)=>{s(this.auth).then(m=>{if(!t&&Rg(window.grecaptcha))o(m,u,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let y=$T();y.length!==0&&(y+=m),I_(y).then(()=>{o(m,u,h)}).catch(_=>{h(_)})}}).catch(m=>{h(m)})})}}async function Dg(i,e,t,s=!1,o=!1){const u=new QT(i);let h;if(o)h=S_;else try{h=await u.verify(t)}catch{h=await u.verify(t,!0)}const m={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in m){const y=m.phoneEnrollmentInfo.phoneNumber,_=m.phoneEnrollmentInfo.recaptchaToken;Object.assign(m,{phoneEnrollmentInfo:{phoneNumber:y,recaptchaToken:_,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in m){const y=m.phoneSignInInfo.recaptchaToken;Object.assign(m,{phoneSignInInfo:{recaptchaToken:y,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return m}return s?Object.assign(m,{captchaResp:h}):Object.assign(m,{captchaResponse:h}),Object.assign(m,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(m,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),m}async function Fd(i,e,t,s,o){if(i._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const u=await Dg(i,e,t,t==="getOobCode");return s(i,u)}else return s(i,e).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const h=await Dg(i,e,t,t==="getOobCode");return s(i,h)}else return Promise.reject(u)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YT(i,e){const t=lf(i,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if(ws(u,e??{}))return o;Qn(o,"already-initialized")}return t.initialize({options:e})}function XT(i,e){const t=e?.persistence||[],s=(Array.isArray(t)?t:[t]).map(Mr);e?.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e?.popupRedirectResolver)}function JT(i,e,t){const s=Rs(i);_e(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=A_(e),{host:h,port:m}=ZT(e),y=m===null?"":`:${m}`,_={url:`${u}//${h}${y}/`},w=Object.freeze({host:h,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){_e(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),_e(ws(_,s.config.emulator)&&ws(w,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=_,s.emulatorConfig=w,s.settings.appVerificationDisabledForTesting=!0,Fo(h)?(Jy(`${u}//${h}${y}`),Zy("Auth",!0)):eI()}function A_(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function ZT(i){const e=A_(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:Og(s.substr(u.length+1))}}else{const[u,h]=s.split(":");return{host:u,port:Og(h)}}}function Og(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function eI(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Lr("not implemented")}_getIdTokenResponse(e){return Lr("not implemented")}_linkToIdToken(e,t){return Lr("not implemented")}_getReauthenticationResolver(e){return Lr("not implemented")}}async function tI(i,e){return Hr(i,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nI(i,e){return cl(i,"POST","/v1/accounts:signInWithPassword",qr(i,e))}async function rI(i,e){return Hr(i,"POST","/v1/accounts:sendOobCode",qr(i,e))}async function iI(i,e){return rI(i,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sI(i,e){return cl(i,"POST","/v1/accounts:signInWithEmailLink",qr(i,e))}async function oI(i,e){return cl(i,"POST","/v1/accounts:signInWithEmailLink",qr(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja extends ff{constructor(e,t,s,o=null){super("password",s),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new Ja(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Ja(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Fd(e,t,"signInWithPassword",nI);case"emailLink":return sI(e,{email:this._email,oobCode:this._password});default:Qn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Fd(e,s,"signUpPassword",tI);case"emailLink":return oI(e,{idToken:t,email:this._email,oobCode:this._password});default:Qn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ko(i,e){return cl(i,"POST","/v1/accounts:signInWithIdp",qr(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aI="http://localhost";class Is extends ff{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Is(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Qn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o,...u}=t;if(!s||!o)return null;const h=new Is(s,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return ko(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,ko(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ko(e,t)}buildRequest(){const e={requestUri:aI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ll(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lI(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function uI(i){const e=Fa(Ua(i)).link,t=e?Fa(Ua(e)).deep_link_id:null,s=Fa(Ua(i)).deep_link_id;return(s?Fa(Ua(s)).link:null)||s||t||e||i}class pf{constructor(e){const t=Fa(Ua(e)),s=t.apiKey??null,o=t.oobCode??null,u=lI(t.mode??null);_e(s&&o&&u,"argument-error"),this.apiKey=s,this.operation=u,this.code=o,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=uI(e);try{return new pf(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(){this.providerId=jo.PROVIDER_ID}static credential(e,t){return Ja._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=pf.parseLink(t);return _e(s,"argument-error"),Ja._fromEmailAndCode(e,s.code,s.tenantId)}}jo.PROVIDER_ID="password";jo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";jo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl extends C_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii extends hl{constructor(){super("facebook.com")}static credential(e){return Is._fromParams({providerId:Ii.PROVIDER_ID,signInMethod:Ii.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ii.credentialFromTaggedObject(e)}static credentialFromError(e){return Ii.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ii.credential(e.oauthAccessToken)}catch{return null}}}Ii.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ii.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si extends hl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Is._fromParams({providerId:Si.PROVIDER_ID,signInMethod:Si.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Si.credentialFromTaggedObject(e)}static credentialFromError(e){return Si.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Si.credential(t,s)}catch{return null}}}Si.GOOGLE_SIGN_IN_METHOD="google.com";Si.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai extends hl{constructor(){super("github.com")}static credential(e){return Is._fromParams({providerId:Ai.PROVIDER_ID,signInMethod:Ai.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ai.credentialFromTaggedObject(e)}static credentialFromError(e){return Ai.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ai.credential(e.oauthAccessToken)}catch{return null}}}Ai.GITHUB_SIGN_IN_METHOD="github.com";Ai.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci extends hl{constructor(){super("twitter.com")}static credential(e,t){return Is._fromParams({providerId:Ci.PROVIDER_ID,signInMethod:Ci.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ci.credentialFromTaggedObject(e)}static credentialFromError(e){return Ci.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return Ci.credential(t,s)}catch{return null}}}Ci.TWITTER_SIGN_IN_METHOD="twitter.com";Ci.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cI(i,e){return cl(i,"POST","/v1/accounts:signUp",qr(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const u=await Gn._fromIdTokenResponse(e,s,o),h=Lg(s);return new Ss({user:u,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=Lg(s);return new Ss({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function Lg(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc extends $r{constructor(e,t,s,o){super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,tc.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new tc(e,t,s,o)}}function R_(i,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?tc._fromErrorAndOperation(i,u,e,s):u})}async function hI(i,e,t=!1){const s=await Xa(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return Ss._forOperation(i,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dI(i,e,t=!1){const{auth:s}=i;if(kn(s.app))return Promise.reject(br(s));const o="reauthenticate";try{const u=await Xa(i,R_(s,o,e,i),t);_e(u.idToken,s,"internal-error");const h=hf(u.idToken);_e(h,s,"internal-error");const{sub:m}=h;return _e(i.uid===m,s,"user-mismatch"),Ss._forOperation(i,o,u)}catch(u){throw u?.code==="auth/user-not-found"&&Qn(s,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function P_(i,e,t=!1){if(kn(i.app))return Promise.reject(br(i));const s="signIn",o=await R_(i,s,e),u=await Ss._fromIdTokenResponse(i,s,o);return t||await i._updateCurrentUser(u.user),u}async function fI(i,e){return P_(Rs(i),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function k_(i){const e=Rs(i);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function pI(i,e,t){if(kn(i.app))return Promise.reject(br(i));const s=Rs(i),h=await Fd(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",cI).catch(y=>{throw y.code==="auth/password-does-not-meet-requirements"&&k_(i),y}),m=await Ss._fromIdTokenResponse(s,"signIn",h);return await s._updateCurrentUser(m.user),m}function mI(i,e,t){return kn(i.app)?Promise.reject(br(i)):fI(wt(i),jo.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&k_(i),s})}async function Mg(i,e){const t=wt(i),o={requestType:"VERIFY_EMAIL",idToken:await i.getIdToken()},{email:u}=await iI(t.auth,o);u!==i.email&&await i.reload()}function gI(i,e,t,s){return wt(i).onIdTokenChanged(e,t,s)}function yI(i,e,t){return wt(i).beforeAuthStateChanged(e,t)}function _I(i,e,t,s){return wt(i).onAuthStateChanged(e,t,s)}function Id(i){return wt(i).signOut()}const nc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(nc,"1"),this.storage.removeItem(nc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vI=1e3,EI=10;class x_ extends N_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=w_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,m,y)=>{this.notifyListeners(h,y)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},u=this.storage.getItem(s);MT()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,EI):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},vI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}x_.type="LOCAL";const wI=x_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_ extends N_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}V_.type="SESSION";const D_=V_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TI(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new yc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:u}=t.data,h=this.handlersMap[o];if(!h?.size)return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(h).map(async _=>_(t.origin,u)),y=await TI(m);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:y})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}yc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mf(i="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return i+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class II{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((m,y)=>{const _=mf("",20);o.port1.start();const w=setTimeout(()=>{y(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(R){const C=R;if(C.data.eventId===_)switch(C.data.status){case"ack":clearTimeout(w),u=setTimeout(()=>{y(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(C.data.response);break;default:clearTimeout(w),clearTimeout(u),y(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:_,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(){return window}function SI(i){hr().location.href=i}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O_(){return typeof hr().WorkerGlobalScope<"u"&&typeof hr().importScripts=="function"}async function AI(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function CI(){return navigator?.serviceWorker?.controller||null}function RI(){return O_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L_="firebaseLocalStorageDb",PI=1,rc="firebaseLocalStorage",M_="fbase_key";class dl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function _c(i,e){return i.transaction([rc],e?"readwrite":"readonly").objectStore(rc)}function kI(){const i=indexedDB.deleteDatabase(L_);return new dl(i).toPromise()}function Ud(){const i=indexedDB.open(L_,PI);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(rc,{keyPath:M_})}catch(o){t(o)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(rc)?e(s):(s.close(),await kI(),e(await Ud()))})})}async function bg(i,e,t){const s=_c(i,!0).put({[M_]:e,value:t});return new dl(s).toPromise()}async function NI(i,e){const t=_c(i,!1).get(e),s=await new dl(t).toPromise();return s===void 0?null:s.value}function Fg(i,e){const t=_c(i,!0).delete(e);return new dl(t).toPromise()}const xI=800,VI=3;class b_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ud(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>VI)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return O_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=yc._getInstance(RI()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await AI(),!this.activeServiceWorker)return;this.sender=new II(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||CI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ud();return await bg(e,nc,"1"),await Fg(e,nc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>bg(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>NI(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Fg(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=_c(o,!1).getAll();return new dl(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),xI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}b_.type="LOCAL";const DI=b_;new ul(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OI(i,e){return e?Mr(e):(_e(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf extends ff{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ko(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ko(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ko(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function LI(i){return P_(i.auth,new gf(i),i.bypassAuthState)}function MI(i){const{auth:e,user:t}=i;return _e(t,e,"internal-error"),dI(t,new gf(i),i.bypassAuthState)}async function bI(i){const{auth:e,user:t}=i;return _e(t,e,"internal-error"),hI(t,new gf(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{constructor(e,t,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:u,error:h,type:m}=e;if(h){this.reject(h);return}const y={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(y))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return LI;case"linkViaPopup":case"linkViaRedirect":return bI;case"reauthViaPopup":case"reauthViaRedirect":return MI;default:Qn(this.auth,"internal-error")}}resolve(e){jr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){jr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FI=new ul(2e3,1e4);class Co extends F_{constructor(e,t,s,o,u){super(e,t,o,u),this.provider=s,this.authWindow=null,this.pollId=null,Co.currentPopupAction&&Co.currentPopupAction.cancel(),Co.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _e(e,this.auth,"internal-error"),e}async onExecution(){jr(this.filter.length===1,"Popup operations only handle one event");const e=mf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(cr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(cr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Co.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(cr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,FI.get())};e()}}Co.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UI="pendingRedirect",Bu=new Map;class jI extends F_{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Bu.get(this.auth._key());if(!e){try{const s=await zI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Bu.set(this.auth._key(),e)}return this.bypassAuthState||Bu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function zI(i,e){const t=qI(e),s=$I(i);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function BI(i,e){Bu.set(i._key(),e)}function $I(i){return Mr(i._redirectPersistence)}function qI(i){return zu(UI,i.config.apiKey,i.name)}async function HI(i,e,t=!1){if(kn(i.app))return Promise.reject(br(i));const s=Rs(i),o=OI(s,e),h=await new jI(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WI=600*1e3;class GI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!KI(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!U_(e)){const s=e.error.code?.split("auth/")[1]||"internal-error";t.onError(cr(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=WI&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ug(e))}saveEventToCache(e){this.cachedEventUids.add(Ug(e)),this.lastProcessedEventTime=Date.now()}}function Ug(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function U_({type:i,error:e}){return i==="unknown"&&e?.code==="auth/no-auth-event"}function KI(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return U_(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QI(i,e={}){return Hr(i,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,XI=/^https?/;async function JI(i){if(i.config.emulator)return;const{authorizedDomains:e}=await QI(i);for(const t of e)try{if(ZI(t))return}catch{}Qn(i,"unauthorized-domain")}function ZI(i){const e=Md(),{protocol:t,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const h=new URL(i);return h.hostname===""&&s===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!XI.test(t))return!1;if(YI.test(i))return s===i;const o=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eS=new ul(3e4,6e4);function jg(){const i=hr().___jsl;if(i?.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function tS(i){return new Promise((e,t)=>{function s(){jg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{jg(),t(cr(i,"network-request-failed"))},timeout:eS.get()})}if(hr().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(hr().gapi?.load)s();else{const o=HT("iframefcb");return hr()[o]=()=>{gapi.load?s():t(cr(i,"network-request-failed"))},I_(`${qT()}?onload=${o}`).catch(u=>t(u))}}).catch(e=>{throw $u=null,e})}let $u=null;function nS(i){return $u=$u||tS(i),$u}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rS=new ul(5e3,15e3),iS="__/auth/iframe",sS="emulator/auth/iframe",oS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},aS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function lS(i){const e=i.config;_e(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?cf(e,sS):`https://${i.config.authDomain}/${iS}`,s={apiKey:e.apiKey,appName:i.name,v:Uo},o=aS.get(i.config.apiHost);o&&(s.eid=o);const u=i._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${ll(s).slice(1)}`}async function uS(i){const e=await nS(i),t=hr().gapi;return _e(t,i,"internal-error"),e.open({where:document.body,url:lS(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:oS,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const h=cr(i,"network-request-failed"),m=hr().setTimeout(()=>{u(h)},rS.get());function y(){hr().clearTimeout(m),o(s)}s.ping(y).then(y,()=>{u(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},hS=500,dS=600,fS="_blank",pS="http://localhost";class zg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function mS(i,e,t,s=hS,o=dS){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const y={...cS,width:s.toString(),height:o.toString(),top:u,left:h},_=Kt().toLowerCase();t&&(m=g_(_)?fS:t),p_(_)&&(e=e||pS,y.scrollbars="yes");const w=Object.entries(y).reduce((C,[z,Q])=>`${C}${z}=${Q},`,"");if(LT(_)&&m!=="_self")return gS(e||"",m),new zg(null);const R=window.open(e||"",m,w);_e(R,i,"popup-blocked");try{R.focus()}catch{}return new zg(R)}function gS(i,e){const t=document.createElement("a");t.href=i,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yS="__/auth/handler",_S="emulator/auth/handler",vS=encodeURIComponent("fac");async function Bg(i,e,t,s,o,u){_e(i.config.authDomain,i,"auth-domain-config-required"),_e(i.config.apiKey,i,"invalid-api-key");const h={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:s,v:Uo,eventId:o};if(e instanceof C_){e.setDefaultLanguage(i.languageCode),h.providerId=e.providerId||"",t0(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,R]of Object.entries({}))h[w]=R}if(e instanceof hl){const w=e.getScopes().filter(R=>R!=="");w.length>0&&(h.scopes=w.join(","))}i.tenantId&&(h.tid=i.tenantId);const m=h;for(const w of Object.keys(m))m[w]===void 0&&delete m[w];const y=await i._getAppCheckToken(),_=y?`#${vS}=${encodeURIComponent(y)}`:"";return`${ES(i)}?${ll(m).slice(1)}${_}`}function ES({config:i}){return i.emulator?cf(i,_S):`https://${i.authDomain}/${yS}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sd="webStorageSupport";class wS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=D_,this._completeRedirectFn=HI,this._overrideRedirectResult=BI}async _openPopup(e,t,s,o){jr(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const u=await Bg(e,t,s,Md(),o);return mS(e,u,mf())}async _openRedirect(e,t,s,o){await this._originValidation(e);const u=await Bg(e,t,s,Md(),o);return SI(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(jr(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await uS(e),s=new GI(e);return t.register("authEvent",o=>(_e(o?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Sd,{type:Sd},o=>{const u=o?.[0]?.[Sd];u!==void 0&&t(!!u),Qn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=JI(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return w_()||m_()||df()}}const TS=wS;var $g="@firebase/auth",qg="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){_e(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SS(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function AS(i){xo(new Ts("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=s.options;_e(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const y={apiKey:h,authDomain:m,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:T_(i)},_=new zT(s,o,u,y);return XT(_,t),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),xo(new Ts("auth-internal",e=>{const t=Rs(e.getProvider("auth").getImmediate());return(s=>new IS(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ni($g,qg,SS(i)),Ni($g,qg,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CS=300,RS=Xy("authIdTokenMaxAge")||CS;let Hg=null;const PS=i=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>RS)return;const o=t?.token;Hg!==o&&(Hg=o,await fetch(i,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function kS(i=r_()){const e=lf(i,"auth");if(e.isInitialized())return e.getImmediate();const t=YT(i,{popupRedirectResolver:TS,persistence:[DI,wI,D_]}),s=Xy("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const h=PS(u.toString());yI(t,h,()=>h(t.currentUser)),gI(t,m=>h(m))}}const o=Qy("auth");return o&&JT(t,`http://${o}`),t}function NS(){return document.getElementsByTagName("head")?.[0]??document}BT({loadJS(i){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=o=>{const u=cr("internal-error");u.customData=o,t(u)},s.type="text/javascript",s.charset="UTF-8",NS().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});AS("Browser");var Wg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var xi,j_;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(x,T){function A(){}A.prototype=T.prototype,x.D=T.prototype,x.prototype=new A,x.prototype.constructor=x,x.C=function(N,V,D){for(var S=Array(arguments.length-2),Je=2;Je<arguments.length;Je++)S[Je-2]=arguments[Je];return T.prototype[V].apply(N,S)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(x,T,A){A||(A=0);var N=Array(16);if(typeof T=="string")for(var V=0;16>V;++V)N[V]=T.charCodeAt(A++)|T.charCodeAt(A++)<<8|T.charCodeAt(A++)<<16|T.charCodeAt(A++)<<24;else for(V=0;16>V;++V)N[V]=T[A++]|T[A++]<<8|T[A++]<<16|T[A++]<<24;T=x.g[0],A=x.g[1],V=x.g[2];var D=x.g[3],S=T+(D^A&(V^D))+N[0]+3614090360&4294967295;T=A+(S<<7&4294967295|S>>>25),S=D+(V^T&(A^V))+N[1]+3905402710&4294967295,D=T+(S<<12&4294967295|S>>>20),S=V+(A^D&(T^A))+N[2]+606105819&4294967295,V=D+(S<<17&4294967295|S>>>15),S=A+(T^V&(D^T))+N[3]+3250441966&4294967295,A=V+(S<<22&4294967295|S>>>10),S=T+(D^A&(V^D))+N[4]+4118548399&4294967295,T=A+(S<<7&4294967295|S>>>25),S=D+(V^T&(A^V))+N[5]+1200080426&4294967295,D=T+(S<<12&4294967295|S>>>20),S=V+(A^D&(T^A))+N[6]+2821735955&4294967295,V=D+(S<<17&4294967295|S>>>15),S=A+(T^V&(D^T))+N[7]+4249261313&4294967295,A=V+(S<<22&4294967295|S>>>10),S=T+(D^A&(V^D))+N[8]+1770035416&4294967295,T=A+(S<<7&4294967295|S>>>25),S=D+(V^T&(A^V))+N[9]+2336552879&4294967295,D=T+(S<<12&4294967295|S>>>20),S=V+(A^D&(T^A))+N[10]+4294925233&4294967295,V=D+(S<<17&4294967295|S>>>15),S=A+(T^V&(D^T))+N[11]+2304563134&4294967295,A=V+(S<<22&4294967295|S>>>10),S=T+(D^A&(V^D))+N[12]+1804603682&4294967295,T=A+(S<<7&4294967295|S>>>25),S=D+(V^T&(A^V))+N[13]+4254626195&4294967295,D=T+(S<<12&4294967295|S>>>20),S=V+(A^D&(T^A))+N[14]+2792965006&4294967295,V=D+(S<<17&4294967295|S>>>15),S=A+(T^V&(D^T))+N[15]+1236535329&4294967295,A=V+(S<<22&4294967295|S>>>10),S=T+(V^D&(A^V))+N[1]+4129170786&4294967295,T=A+(S<<5&4294967295|S>>>27),S=D+(A^V&(T^A))+N[6]+3225465664&4294967295,D=T+(S<<9&4294967295|S>>>23),S=V+(T^A&(D^T))+N[11]+643717713&4294967295,V=D+(S<<14&4294967295|S>>>18),S=A+(D^T&(V^D))+N[0]+3921069994&4294967295,A=V+(S<<20&4294967295|S>>>12),S=T+(V^D&(A^V))+N[5]+3593408605&4294967295,T=A+(S<<5&4294967295|S>>>27),S=D+(A^V&(T^A))+N[10]+38016083&4294967295,D=T+(S<<9&4294967295|S>>>23),S=V+(T^A&(D^T))+N[15]+3634488961&4294967295,V=D+(S<<14&4294967295|S>>>18),S=A+(D^T&(V^D))+N[4]+3889429448&4294967295,A=V+(S<<20&4294967295|S>>>12),S=T+(V^D&(A^V))+N[9]+568446438&4294967295,T=A+(S<<5&4294967295|S>>>27),S=D+(A^V&(T^A))+N[14]+3275163606&4294967295,D=T+(S<<9&4294967295|S>>>23),S=V+(T^A&(D^T))+N[3]+4107603335&4294967295,V=D+(S<<14&4294967295|S>>>18),S=A+(D^T&(V^D))+N[8]+1163531501&4294967295,A=V+(S<<20&4294967295|S>>>12),S=T+(V^D&(A^V))+N[13]+2850285829&4294967295,T=A+(S<<5&4294967295|S>>>27),S=D+(A^V&(T^A))+N[2]+4243563512&4294967295,D=T+(S<<9&4294967295|S>>>23),S=V+(T^A&(D^T))+N[7]+1735328473&4294967295,V=D+(S<<14&4294967295|S>>>18),S=A+(D^T&(V^D))+N[12]+2368359562&4294967295,A=V+(S<<20&4294967295|S>>>12),S=T+(A^V^D)+N[5]+4294588738&4294967295,T=A+(S<<4&4294967295|S>>>28),S=D+(T^A^V)+N[8]+2272392833&4294967295,D=T+(S<<11&4294967295|S>>>21),S=V+(D^T^A)+N[11]+1839030562&4294967295,V=D+(S<<16&4294967295|S>>>16),S=A+(V^D^T)+N[14]+4259657740&4294967295,A=V+(S<<23&4294967295|S>>>9),S=T+(A^V^D)+N[1]+2763975236&4294967295,T=A+(S<<4&4294967295|S>>>28),S=D+(T^A^V)+N[4]+1272893353&4294967295,D=T+(S<<11&4294967295|S>>>21),S=V+(D^T^A)+N[7]+4139469664&4294967295,V=D+(S<<16&4294967295|S>>>16),S=A+(V^D^T)+N[10]+3200236656&4294967295,A=V+(S<<23&4294967295|S>>>9),S=T+(A^V^D)+N[13]+681279174&4294967295,T=A+(S<<4&4294967295|S>>>28),S=D+(T^A^V)+N[0]+3936430074&4294967295,D=T+(S<<11&4294967295|S>>>21),S=V+(D^T^A)+N[3]+3572445317&4294967295,V=D+(S<<16&4294967295|S>>>16),S=A+(V^D^T)+N[6]+76029189&4294967295,A=V+(S<<23&4294967295|S>>>9),S=T+(A^V^D)+N[9]+3654602809&4294967295,T=A+(S<<4&4294967295|S>>>28),S=D+(T^A^V)+N[12]+3873151461&4294967295,D=T+(S<<11&4294967295|S>>>21),S=V+(D^T^A)+N[15]+530742520&4294967295,V=D+(S<<16&4294967295|S>>>16),S=A+(V^D^T)+N[2]+3299628645&4294967295,A=V+(S<<23&4294967295|S>>>9),S=T+(V^(A|~D))+N[0]+4096336452&4294967295,T=A+(S<<6&4294967295|S>>>26),S=D+(A^(T|~V))+N[7]+1126891415&4294967295,D=T+(S<<10&4294967295|S>>>22),S=V+(T^(D|~A))+N[14]+2878612391&4294967295,V=D+(S<<15&4294967295|S>>>17),S=A+(D^(V|~T))+N[5]+4237533241&4294967295,A=V+(S<<21&4294967295|S>>>11),S=T+(V^(A|~D))+N[12]+1700485571&4294967295,T=A+(S<<6&4294967295|S>>>26),S=D+(A^(T|~V))+N[3]+2399980690&4294967295,D=T+(S<<10&4294967295|S>>>22),S=V+(T^(D|~A))+N[10]+4293915773&4294967295,V=D+(S<<15&4294967295|S>>>17),S=A+(D^(V|~T))+N[1]+2240044497&4294967295,A=V+(S<<21&4294967295|S>>>11),S=T+(V^(A|~D))+N[8]+1873313359&4294967295,T=A+(S<<6&4294967295|S>>>26),S=D+(A^(T|~V))+N[15]+4264355552&4294967295,D=T+(S<<10&4294967295|S>>>22),S=V+(T^(D|~A))+N[6]+2734768916&4294967295,V=D+(S<<15&4294967295|S>>>17),S=A+(D^(V|~T))+N[13]+1309151649&4294967295,A=V+(S<<21&4294967295|S>>>11),S=T+(V^(A|~D))+N[4]+4149444226&4294967295,T=A+(S<<6&4294967295|S>>>26),S=D+(A^(T|~V))+N[11]+3174756917&4294967295,D=T+(S<<10&4294967295|S>>>22),S=V+(T^(D|~A))+N[2]+718787259&4294967295,V=D+(S<<15&4294967295|S>>>17),S=A+(D^(V|~T))+N[9]+3951481745&4294967295,x.g[0]=x.g[0]+T&4294967295,x.g[1]=x.g[1]+(V+(S<<21&4294967295|S>>>11))&4294967295,x.g[2]=x.g[2]+V&4294967295,x.g[3]=x.g[3]+D&4294967295}s.prototype.u=function(x,T){T===void 0&&(T=x.length);for(var A=T-this.blockSize,N=this.B,V=this.h,D=0;D<T;){if(V==0)for(;D<=A;)o(this,x,D),D+=this.blockSize;if(typeof x=="string"){for(;D<T;)if(N[V++]=x.charCodeAt(D++),V==this.blockSize){o(this,N),V=0;break}}else for(;D<T;)if(N[V++]=x[D++],V==this.blockSize){o(this,N),V=0;break}}this.h=V,this.o+=T},s.prototype.v=function(){var x=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);x[0]=128;for(var T=1;T<x.length-8;++T)x[T]=0;var A=8*this.o;for(T=x.length-8;T<x.length;++T)x[T]=A&255,A/=256;for(this.u(x),x=Array(16),T=A=0;4>T;++T)for(var N=0;32>N;N+=8)x[A++]=this.g[T]>>>N&255;return x};function u(x,T){var A=m;return Object.prototype.hasOwnProperty.call(A,x)?A[x]:A[x]=T(x)}function h(x,T){this.h=T;for(var A=[],N=!0,V=x.length-1;0<=V;V--){var D=x[V]|0;N&&D==T||(A[V]=D,N=!1)}this.g=A}var m={};function y(x){return-128<=x&&128>x?u(x,function(T){return new h([T|0],0>T?-1:0)}):new h([x|0],0>x?-1:0)}function _(x){if(isNaN(x)||!isFinite(x))return R;if(0>x)return W(_(-x));for(var T=[],A=1,N=0;x>=A;N++)T[N]=x/A|0,A*=4294967296;return new h(T,0)}function w(x,T){if(x.length==0)throw Error("number format error: empty string");if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(x.charAt(0)=="-")return W(w(x.substring(1),T));if(0<=x.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=_(Math.pow(T,8)),N=R,V=0;V<x.length;V+=8){var D=Math.min(8,x.length-V),S=parseInt(x.substring(V,V+D),T);8>D?(D=_(Math.pow(T,D)),N=N.j(D).add(_(S))):(N=N.j(A),N=N.add(_(S)))}return N}var R=y(0),C=y(1),z=y(16777216);i=h.prototype,i.m=function(){if(J(this))return-W(this).m();for(var x=0,T=1,A=0;A<this.g.length;A++){var N=this.i(A);x+=(0<=N?N:4294967296+N)*T,T*=4294967296}return x},i.toString=function(x){if(x=x||10,2>x||36<x)throw Error("radix out of range: "+x);if(Q(this))return"0";if(J(this))return"-"+W(this).toString(x);for(var T=_(Math.pow(x,6)),A=this,N="";;){var V=Pe(A,T).g;A=fe(A,V.j(T));var D=((0<A.g.length?A.g[0]:A.h)>>>0).toString(x);if(A=V,Q(A))return D+N;for(;6>D.length;)D="0"+D;N=D+N}},i.i=function(x){return 0>x?0:x<this.g.length?this.g[x]:this.h};function Q(x){if(x.h!=0)return!1;for(var T=0;T<x.g.length;T++)if(x.g[T]!=0)return!1;return!0}function J(x){return x.h==-1}i.l=function(x){return x=fe(this,x),J(x)?-1:Q(x)?0:1};function W(x){for(var T=x.g.length,A=[],N=0;N<T;N++)A[N]=~x.g[N];return new h(A,~x.h).add(C)}i.abs=function(){return J(this)?W(this):this},i.add=function(x){for(var T=Math.max(this.g.length,x.g.length),A=[],N=0,V=0;V<=T;V++){var D=N+(this.i(V)&65535)+(x.i(V)&65535),S=(D>>>16)+(this.i(V)>>>16)+(x.i(V)>>>16);N=S>>>16,D&=65535,S&=65535,A[V]=S<<16|D}return new h(A,A[A.length-1]&-2147483648?-1:0)};function fe(x,T){return x.add(W(T))}i.j=function(x){if(Q(this)||Q(x))return R;if(J(this))return J(x)?W(this).j(W(x)):W(W(this).j(x));if(J(x))return W(this.j(W(x)));if(0>this.l(z)&&0>x.l(z))return _(this.m()*x.m());for(var T=this.g.length+x.g.length,A=[],N=0;N<2*T;N++)A[N]=0;for(N=0;N<this.g.length;N++)for(var V=0;V<x.g.length;V++){var D=this.i(N)>>>16,S=this.i(N)&65535,Je=x.i(V)>>>16,pt=x.i(V)&65535;A[2*N+2*V]+=S*pt,ge(A,2*N+2*V),A[2*N+2*V+1]+=D*pt,ge(A,2*N+2*V+1),A[2*N+2*V+1]+=S*Je,ge(A,2*N+2*V+1),A[2*N+2*V+2]+=D*Je,ge(A,2*N+2*V+2)}for(N=0;N<T;N++)A[N]=A[2*N+1]<<16|A[2*N];for(N=T;N<2*T;N++)A[N]=0;return new h(A,0)};function ge(x,T){for(;(x[T]&65535)!=x[T];)x[T+1]+=x[T]>>>16,x[T]&=65535,T++}function ye(x,T){this.g=x,this.h=T}function Pe(x,T){if(Q(T))throw Error("division by zero");if(Q(x))return new ye(R,R);if(J(x))return T=Pe(W(x),T),new ye(W(T.g),W(T.h));if(J(T))return T=Pe(x,W(T)),new ye(W(T.g),T.h);if(30<x.g.length){if(J(x)||J(T))throw Error("slowDivide_ only works with positive integers.");for(var A=C,N=T;0>=N.l(x);)A=Ke(A),N=Ke(N);var V=Ce(A,1),D=Ce(N,1);for(N=Ce(N,2),A=Ce(A,2);!Q(N);){var S=D.add(N);0>=S.l(x)&&(V=V.add(A),D=S),N=Ce(N,1),A=Ce(A,1)}return T=fe(x,V.j(T)),new ye(V,T)}for(V=R;0<=x.l(T);){for(A=Math.max(1,Math.floor(x.m()/T.m())),N=Math.ceil(Math.log(A)/Math.LN2),N=48>=N?1:Math.pow(2,N-48),D=_(A),S=D.j(T);J(S)||0<S.l(x);)A-=N,D=_(A),S=D.j(T);Q(D)&&(D=C),V=V.add(D),x=fe(x,S)}return new ye(V,x)}i.A=function(x){return Pe(this,x).h},i.and=function(x){for(var T=Math.max(this.g.length,x.g.length),A=[],N=0;N<T;N++)A[N]=this.i(N)&x.i(N);return new h(A,this.h&x.h)},i.or=function(x){for(var T=Math.max(this.g.length,x.g.length),A=[],N=0;N<T;N++)A[N]=this.i(N)|x.i(N);return new h(A,this.h|x.h)},i.xor=function(x){for(var T=Math.max(this.g.length,x.g.length),A=[],N=0;N<T;N++)A[N]=this.i(N)^x.i(N);return new h(A,this.h^x.h)};function Ke(x){for(var T=x.g.length+1,A=[],N=0;N<T;N++)A[N]=x.i(N)<<1|x.i(N-1)>>>31;return new h(A,x.h)}function Ce(x,T){var A=T>>5;T%=32;for(var N=x.g.length-A,V=[],D=0;D<N;D++)V[D]=0<T?x.i(D+A)>>>T|x.i(D+A+1)<<32-T:x.i(D+A);return new h(V,x.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,j_=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=_,h.fromString=w,xi=h}).apply(typeof Wg<"u"?Wg:typeof self<"u"?self:typeof window<"u"?window:{});var Lu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var z_,ja,B_,qu,jd,$_,q_,H_;(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,f,g){return l==Array.prototype||l==Object.prototype||(l[f]=g.value),l};function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Lu=="object"&&Lu];for(var f=0;f<l.length;++f){var g=l[f];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var s=t(this);function o(l,f){if(f)e:{var g=s;l=l.split(".");for(var E=0;E<l.length-1;E++){var L=l[E];if(!(L in g))break e;g=g[L]}l=l[l.length-1],E=g[l],f=f(E),f!=E&&f!=null&&e(g,l,{configurable:!0,writable:!0,value:f})}}function u(l,f){l instanceof String&&(l+="");var g=0,E=!1,L={next:function(){if(!E&&g<l.length){var j=g++;return{value:f(j,l[j]),done:!1}}return E=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}o("Array.prototype.values",function(l){return l||function(){return u(this,function(f,g){return g})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},m=this||self;function y(l){var f=typeof l;return f=f!="object"?f:l?Array.isArray(l)?"array":f:"null",f=="array"||f=="object"&&typeof l.length=="number"}function _(l){var f=typeof l;return f=="object"&&l!=null||f=="function"}function w(l,f,g){return l.call.apply(l.bind,arguments)}function R(l,f,g){if(!l)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,E),l.apply(f,L)}}return function(){return l.apply(f,arguments)}}function C(l,f,g){return C=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?w:R,C.apply(null,arguments)}function z(l,f){var g=Array.prototype.slice.call(arguments,1);return function(){var E=g.slice();return E.push.apply(E,arguments),l.apply(this,E)}}function Q(l,f){function g(){}g.prototype=f.prototype,l.aa=f.prototype,l.prototype=new g,l.prototype.constructor=l,l.Qb=function(E,L,j){for(var Z=Array(arguments.length-2),We=2;We<arguments.length;We++)Z[We-2]=arguments[We];return f.prototype[L].apply(E,Z)}}function J(l){const f=l.length;if(0<f){const g=Array(f);for(let E=0;E<f;E++)g[E]=l[E];return g}return[]}function W(l,f){for(let g=1;g<arguments.length;g++){const E=arguments[g];if(y(E)){const L=l.length||0,j=E.length||0;l.length=L+j;for(let Z=0;Z<j;Z++)l[L+Z]=E[Z]}else l.push(E)}}class fe{constructor(f,g){this.i=f,this.j=g,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function ge(l){return/^[\s\xa0]*$/.test(l)}function ye(){var l=m.navigator;return l&&(l=l.userAgent)?l:""}function Pe(l){return Pe[" "](l),l}Pe[" "]=function(){};var Ke=ye().indexOf("Gecko")!=-1&&!(ye().toLowerCase().indexOf("webkit")!=-1&&ye().indexOf("Edge")==-1)&&!(ye().indexOf("Trident")!=-1||ye().indexOf("MSIE")!=-1)&&ye().indexOf("Edge")==-1;function Ce(l,f,g){for(const E in l)f.call(g,l[E],E,l)}function x(l,f){for(const g in l)f.call(void 0,l[g],g,l)}function T(l){const f={};for(const g in l)f[g]=l[g];return f}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(l,f){let g,E;for(let L=1;L<arguments.length;L++){E=arguments[L];for(g in E)l[g]=E[g];for(let j=0;j<A.length;j++)g=A[j],Object.prototype.hasOwnProperty.call(E,g)&&(l[g]=E[g])}}function V(l){var f=1;l=l.split(":");const g=[];for(;0<f&&l.length;)g.push(l.shift()),f--;return l.length&&g.push(l.join(":")),g}function D(l){m.setTimeout(()=>{throw l},0)}function S(){var l=he;let f=null;return l.g&&(f=l.g,l.g=l.g.next,l.g||(l.h=null),f.next=null),f}class Je{constructor(){this.h=this.g=null}add(f,g){const E=pt.get();E.set(f,g),this.h?this.h.next=E:this.g=E,this.h=E}}var pt=new fe(()=>new Tt,l=>l.reset());class Tt{constructor(){this.next=this.g=this.h=null}set(f,g){this.h=f,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let Oe,ee=!1,he=new Je,ne=()=>{const l=m.Promise.resolve(void 0);Oe=()=>{l.then(O)}};var O=()=>{for(var l;l=S();){try{l.h.call(l.g)}catch(g){D(g)}var f=pt;f.j(l),100>f.h&&(f.h++,l.next=f.g,f.g=l)}ee=!1};function $(){this.s=this.s,this.C=this.C}$.prototype.s=!1,$.prototype.ma=function(){this.s||(this.s=!0,this.N())},$.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ce(l,f){this.type=l,this.g=this.target=f,this.defaultPrevented=!1}ce.prototype.h=function(){this.defaultPrevented=!0};var Ae=function(){if(!m.addEventListener||!Object.defineProperty)return!1;var l=!1,f=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const g=()=>{};m.addEventListener("test",g,f),m.removeEventListener("test",g,f)}catch{}return l}();function Se(l,f){if(ce.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var g=this.type=l.type,E=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=f,f=l.relatedTarget){if(Ke){e:{try{Pe(f.nodeName);var L=!0;break e}catch{}L=!1}L||(f=null)}}else g=="mouseover"?f=l.fromElement:g=="mouseout"&&(f=l.toElement);this.relatedTarget=f,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Re[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Se.aa.h.call(this)}}Q(Se,ce);var Re={2:"touch",3:"pen",4:"mouse"};Se.prototype.h=function(){Se.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var Fe="closure_listenable_"+(1e6*Math.random()|0),Le=0;function $e(l,f,g,E,L){this.listener=l,this.proxy=null,this.src=f,this.type=g,this.capture=!!E,this.ha=L,this.key=++Le,this.da=this.fa=!1}function mt(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function xn(l){this.src=l,this.g={},this.h=0}xn.prototype.add=function(l,f,g,E,L){var j=l.toString();l=this.g[j],l||(l=this.g[j]=[],this.h++);var Z=Xn(l,f,E,L);return-1<Z?(f=l[Z],g||(f.fa=!1)):(f=new $e(f,this.src,j,!!E,L),f.fa=g,l.push(f)),f};function Wr(l,f){var g=f.type;if(g in l.g){var E=l.g[g],L=Array.prototype.indexOf.call(E,f,void 0),j;(j=0<=L)&&Array.prototype.splice.call(E,L,1),j&&(mt(f),l.g[g].length==0&&(delete l.g[g],l.h--))}}function Xn(l,f,g,E){for(var L=0;L<l.length;++L){var j=l[L];if(!j.da&&j.listener==f&&j.capture==!!g&&j.ha==E)return L}return-1}var yr="closure_lm_"+(1e6*Math.random()|0),Gr={};function Kr(l,f,g,E,L){if(Array.isArray(f)){for(var j=0;j<f.length;j++)Kr(l,f[j],g,E,L);return null}return g=It(g),l&&l[Fe]?l.K(f,g,_(E)?!!E.capture:!1,L):$i(l,f,g,!1,E,L)}function $i(l,f,g,E,L,j){if(!f)throw Error("Invalid event type");var Z=_(L)?!!L.capture:!!L,We=we(l);if(We||(l[yr]=We=new xn(l)),g=We.add(f,g,E,Z,j),g.proxy)return g;if(E=Ns(),g.proxy=E,E.src=l,E.listener=g,l.addEventListener)Ae||(L=Z),L===void 0&&(L=!1),l.addEventListener(f.toString(),E,L);else if(l.attachEvent)l.attachEvent(H(f.toString()),E);else if(l.addListener&&l.removeListener)l.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return g}function Ns(){function l(g){return f.call(l.src,l.listener,g)}const f=ae;return l}function Qr(l,f,g,E,L){if(Array.isArray(f))for(var j=0;j<f.length;j++)Qr(l,f[j],g,E,L);else E=_(E)?!!E.capture:!!E,g=It(g),l&&l[Fe]?(l=l.i,f=String(f).toString(),f in l.g&&(j=l.g[f],g=Xn(j,g,E,L),-1<g&&(mt(j[g]),Array.prototype.splice.call(j,g,1),j.length==0&&(delete l.g[f],l.h--)))):l&&(l=we(l))&&(f=l.g[f.toString()],l=-1,f&&(l=Xn(f,g,E,L)),(g=-1<l?f[l]:null)&&ct(g))}function ct(l){if(typeof l!="number"&&l&&!l.da){var f=l.src;if(f&&f[Fe])Wr(f.i,l);else{var g=l.type,E=l.proxy;f.removeEventListener?f.removeEventListener(g,E,l.capture):f.detachEvent?f.detachEvent(H(g),E):f.addListener&&f.removeListener&&f.removeListener(E),(g=we(f))?(Wr(g,l),g.h==0&&(g.src=null,f[yr]=null)):mt(l)}}}function H(l){return l in Gr?Gr[l]:Gr[l]="on"+l}function ae(l,f){if(l.da)l=!0;else{f=new Se(f,this);var g=l.listener,E=l.ha||l.src;l.fa&&ct(l),l=g.call(E,f)}return l}function we(l){return l=l[yr],l instanceof xn?l:null}var nt="__closure_events_fn_"+(1e9*Math.random()>>>0);function It(l){return typeof l=="function"?l:(l[nt]||(l[nt]=function(f){return l.handleEvent(f)}),l[nt])}function qe(){$.call(this),this.i=new xn(this),this.M=this,this.F=null}Q(qe,$),qe.prototype[Fe]=!0,qe.prototype.removeEventListener=function(l,f,g,E){Qr(this,l,f,g,E)};function He(l,f){var g,E=l.F;if(E)for(g=[];E;E=E.F)g.push(E);if(l=l.M,E=f.type||f,typeof f=="string")f=new ce(f,l);else if(f instanceof ce)f.target=f.target||l;else{var L=f;f=new ce(E,l),N(f,L)}if(L=!0,g)for(var j=g.length-1;0<=j;j--){var Z=f.g=g[j];L=_r(Z,E,!0,f)&&L}if(Z=f.g=l,L=_r(Z,E,!0,f)&&L,L=_r(Z,E,!1,f)&&L,g)for(j=0;j<g.length;j++)Z=f.g=g[j],L=_r(Z,E,!1,f)&&L}qe.prototype.N=function(){if(qe.aa.N.call(this),this.i){var l=this.i,f;for(f in l.g){for(var g=l.g[f],E=0;E<g.length;E++)mt(g[E]);delete l.g[f],l.h--}}this.F=null},qe.prototype.K=function(l,f,g,E){return this.i.add(String(l),f,!1,g,E)},qe.prototype.L=function(l,f,g,E){return this.i.add(String(l),f,!0,g,E)};function _r(l,f,g,E){if(f=l.i.g[String(f)],!f)return!0;f=f.concat();for(var L=!0,j=0;j<f.length;++j){var Z=f[j];if(Z&&!Z.da&&Z.capture==g){var We=Z.listener,St=Z.ha||Z.src;Z.fa&&Wr(l.i,Z),L=We.call(St,E)!==!1&&L}}return L&&!E.defaultPrevented}function Wo(l,f,g){if(typeof l=="function")g&&(l=C(l,g));else if(l&&typeof l.handleEvent=="function")l=C(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:m.setTimeout(l,f||0)}function Yr(l){l.g=Wo(()=>{l.g=null,l.i&&(l.i=!1,Yr(l))},l.l);const f=l.h;l.h=null,l.m.apply(null,f)}class qi extends ${constructor(f,g){super(),this.m=f,this.l=g,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:Yr(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Hi(l){$.call(this),this.h=l,this.g={}}Q(Hi,$);var Go=[];function Ko(l){Ce(l.g,function(f,g){this.g.hasOwnProperty(g)&&ct(f)},l),l.g={}}Hi.prototype.N=function(){Hi.aa.N.call(this),Ko(this)},Hi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Qo=m.JSON.stringify,Yo=m.JSON.parse,Xo=class{stringify(l){return m.JSON.stringify(l,void 0)}parse(l){return m.JSON.parse(l,void 0)}};function Wi(){}Wi.prototype.h=null;function xs(l){return l.h||(l.h=l.i())}function Vs(){}var vn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Jn(){ce.call(this,"d")}Q(Jn,ce);function Ds(){ce.call(this,"c")}Q(Ds,ce);var Zn={},Jo=null;function Gi(){return Jo=Jo||new qe}Zn.La="serverreachability";function Zo(l){ce.call(this,Zn.La,l)}Q(Zo,ce);function vr(l){const f=Gi();He(f,new Zo(f))}Zn.STAT_EVENT="statevent";function ea(l,f){ce.call(this,Zn.STAT_EVENT,l),this.stat=f}Q(ea,ce);function ht(l){const f=Gi();He(f,new ea(f,l))}Zn.Ma="timingevent";function Os(l,f){ce.call(this,Zn.Ma,l),this.size=f}Q(Os,ce);function Vn(l,f){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){l()},f)}function Ki(){this.g=!0}Ki.prototype.xa=function(){this.g=!1};function Qi(l,f,g,E,L,j){l.info(function(){if(l.g)if(j)for(var Z="",We=j.split("&"),St=0;St<We.length;St++){var Me=We[St].split("=");if(1<Me.length){var Pt=Me[0];Me=Me[1];var gt=Pt.split("_");Z=2<=gt.length&&gt[1]=="type"?Z+(Pt+"="+Me+"&"):Z+(Pt+"=redacted&")}}else Z=null;else Z=j;return"XMLHTTP REQ ("+E+") [attempt "+L+"]: "+f+`
`+g+`
`+Z})}function Ls(l,f,g,E,L,j,Z){l.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+L+"]: "+f+`
`+g+`
`+j+" "+Z})}function Dn(l,f,g,E){l.info(function(){return"XMLHTTP TEXT ("+f+"): "+jc(l,g)+(E?" "+E:"")})}function ta(l,f){l.info(function(){return"TIMEOUT: "+f})}Ki.prototype.info=function(){};function jc(l,f){if(!l.g)return f;if(!f)return null;try{var g=JSON.parse(f);if(g){for(l=0;l<g.length;l++)if(Array.isArray(g[l])){var E=g[l];if(!(2>E.length)){var L=E[1];if(Array.isArray(L)&&!(1>L.length)){var j=L[0];if(j!="noop"&&j!="stop"&&j!="close")for(var Z=1;Z<L.length;Z++)L[Z]=""}}}}return Qo(g)}catch{return f}}var Ms={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},vl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},On;function Yi(){}Q(Yi,Wi),Yi.prototype.g=function(){return new XMLHttpRequest},Yi.prototype.i=function(){return{}},On=new Yi;function Ln(l,f,g,E){this.j=l,this.i=f,this.l=g,this.R=E||1,this.U=new Hi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new El}function El(){this.i=null,this.g="",this.h=!1}var na={},bs={};function Fs(l,f,g){l.L=1,l.v=ti(hn(f)),l.m=g,l.P=!0,ra(l,null)}function ra(l,f){l.F=Date.now(),Qe(l),l.A=hn(l.v);var g=l.A,E=l.R;Array.isArray(E)||(E=[String(E)]),ri(g.i,"t",E),l.C=0,g=l.j.J,l.h=new El,l.g=Fl(l.j,g?f:null,!l.m),0<l.O&&(l.M=new qi(C(l.Y,l,l.g),l.O)),f=l.U,g=l.g,E=l.ca;var L="readystatechange";Array.isArray(L)||(L&&(Go[0]=L.toString()),L=Go);for(var j=0;j<L.length;j++){var Z=Kr(g,L[j],E||f.handleEvent,!1,f.h||f);if(!Z)break;f.g[Z.key]=Z}f=l.H?T(l.H):{},l.m?(l.u||(l.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,f)):(l.u="GET",l.g.ea(l.A,l.u,null,f)),vr(),Qi(l.i,l.u,l.A,l.l,l.R,l.m)}Ln.prototype.ca=function(l){l=l.target;const f=this.M;f&&en(l)==3?f.j():this.Y(l)},Ln.prototype.Y=function(l){try{if(l==this.g)e:{const gt=en(this.g);var f=this.g.Ba();const Tn=this.g.Z();if(!(3>gt)&&(gt!=3||this.g&&(this.h.h||this.g.oa()||ua(this.g)))){this.J||gt!=4||f==7||(f==8||0>=Tn?vr(3):vr(2)),Xi(this);var g=this.g.Z();this.X=g;t:if(wl(this)){var E=ua(this.g);l="";var L=E.length,j=en(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){En(this),Xr(this);var Z="";break t}this.h.i=new m.TextDecoder}for(f=0;f<L;f++)this.h.h=!0,l+=this.h.i.decode(E[f],{stream:!(j&&f==L-1)});E.length=0,this.h.g+=l,this.C=0,Z=this.h.g}else Z=this.g.oa();if(this.o=g==200,Ls(this.i,this.u,this.A,this.l,this.R,gt,g),this.o){if(this.T&&!this.K){t:{if(this.g){var We,St=this.g;if((We=St.g?St.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ge(We)){var Me=We;break t}}Me=null}if(g=Me)Dn(this.i,this.l,g,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ia(this,g);else{this.o=!1,this.s=3,ht(12),En(this),Xr(this);break e}}if(this.P){g=!0;let fn;for(;!this.J&&this.C<Z.length;)if(fn=zc(this,Z),fn==bs){gt==4&&(this.s=4,ht(14),g=!1),Dn(this.i,this.l,null,"[Incomplete Response]");break}else if(fn==na){this.s=4,ht(15),Dn(this.i,this.l,Z,"[Invalid Chunk]"),g=!1;break}else Dn(this.i,this.l,fn,null),ia(this,fn);if(wl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),gt!=4||Z.length!=0||this.h.h||(this.s=1,ht(16),g=!1),this.o=this.o&&g,!g)Dn(this.i,this.l,Z,"[Invalid Chunked Response]"),En(this),Xr(this);else if(0<Z.length&&!this.W){this.W=!0;var Pt=this.j;Pt.g==this&&Pt.ba&&!Pt.M&&(Pt.j.info("Great, no buffering proxy detected. Bytes received: "+Z.length),ha(Pt),Pt.M=!0,ht(11))}}else Dn(this.i,this.l,Z,null),ia(this,Z);gt==4&&En(this),this.o&&!this.J&&(gt==4?Qs(this.j,this):(this.o=!1,Qe(this)))}else qs(this.g),g==400&&0<Z.indexOf("Unknown SID")?(this.s=3,ht(12)):(this.s=0,ht(13)),En(this),Xr(this)}}}catch{}finally{}};function wl(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function zc(l,f){var g=l.C,E=f.indexOf(`
`,g);return E==-1?bs:(g=Number(f.substring(g,E)),isNaN(g)?na:(E+=1,E+g>f.length?bs:(f=f.slice(E,E+g),l.C=E+g,f)))}Ln.prototype.cancel=function(){this.J=!0,En(this)};function Qe(l){l.S=Date.now()+l.I,Tl(l,l.I)}function Tl(l,f){if(l.B!=null)throw Error("WatchDog timer not null");l.B=Vn(C(l.ba,l),f)}function Xi(l){l.B&&(m.clearTimeout(l.B),l.B=null)}Ln.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(ta(this.i,this.A),this.L!=2&&(vr(),ht(17)),En(this),this.s=2,Xr(this)):Tl(this,this.S-l)};function Xr(l){l.j.G==0||l.J||Qs(l.j,l)}function En(l){Xi(l);var f=l.M;f&&typeof f.ma=="function"&&f.ma(),l.M=null,Ko(l.U),l.g&&(f=l.g,l.g=null,f.abort(),f.ma())}function ia(l,f){try{var g=l.j;if(g.G!=0&&(g.g==l||Qt(g.h,l))){if(!l.K&&Qt(g.h,l)&&g.G==3){try{var E=g.Da.g.parse(f)}catch{E=null}if(Array.isArray(E)&&E.length==3){var L=E;if(L[0]==0){e:if(!g.u){if(g.g)if(g.g.F+3e3<l.F)Ks(g),jn(g);else break e;Gs(g),ht(18)}}else g.za=L[1],0<g.za-g.T&&37500>L[2]&&g.F&&g.v==0&&!g.C&&(g.C=Vn(C(g.Za,g),6e3));if(1>=Sl(g.h)&&g.ca){try{g.ca()}catch{}g.ca=void 0}}else Sr(g,11)}else if((l.K||g.g==l)&&Ks(g),!ge(f))for(L=g.Da.g.parse(f),f=0;f<L.length;f++){let Me=L[f];if(g.T=Me[0],Me=Me[1],g.G==2)if(Me[0]=="c"){g.K=Me[1],g.ia=Me[2];const Pt=Me[3];Pt!=null&&(g.la=Pt,g.j.info("VER="+g.la));const gt=Me[4];gt!=null&&(g.Aa=gt,g.j.info("SVER="+g.Aa));const Tn=Me[5];Tn!=null&&typeof Tn=="number"&&0<Tn&&(E=1.5*Tn,g.L=E,g.j.info("backChannelRequestTimeoutMs_="+E)),E=g;const fn=l.g;if(fn){const is=fn.g?fn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(is){var j=E.h;j.g||is.indexOf("spdy")==-1&&is.indexOf("quic")==-1&&is.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(sa(j,j.h),j.h=null))}if(E.D){const Xs=fn.g?fn.g.getResponseHeader("X-HTTP-Session-Id"):null;Xs&&(E.ya=Xs,Ge(E.I,E.D,Xs))}}g.G=3,g.l&&g.l.ua(),g.ba&&(g.R=Date.now()-l.F,g.j.info("Handshake RTT: "+g.R+"ms")),E=g;var Z=l;if(E.qa=bl(E,E.J?E.ia:null,E.W),Z.K){Al(E.h,Z);var We=Z,St=E.L;St&&(We.I=St),We.B&&(Xi(We),Qe(We)),E.g=Z}else rs(E);0<g.i.length&&rr(g)}else Me[0]!="stop"&&Me[0]!="close"||Sr(g,7);else g.G==3&&(Me[0]=="stop"||Me[0]=="close"?Me[0]=="stop"?Sr(g,7):Ot(g):Me[0]!="noop"&&g.l&&g.l.ta(Me),g.v=0)}}vr(4)}catch{}}var Il=class{constructor(l,f){this.g=l,this.map=f}};function Ji(l){this.l=l||10,m.PerformanceNavigationTiming?(l=m.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function cn(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Sl(l){return l.h?1:l.g?l.g.size:0}function Qt(l,f){return l.h?l.h==f:l.g?l.g.has(f):!1}function sa(l,f){l.g?l.g.add(f):l.h=f}function Al(l,f){l.h&&l.h==f?l.h=null:l.g&&l.g.has(f)&&l.g.delete(f)}Ji.prototype.cancel=function(){if(this.i=Cl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Cl(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let f=l.i;for(const g of l.g.values())f=f.concat(g.D);return f}return J(l.i)}function Us(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(y(l)){for(var f=[],g=l.length,E=0;E<g;E++)f.push(l[E]);return f}f=[],g=0;for(E in l)f[g++]=l[E];return f}function js(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(y(l)||typeof l=="string"){var f=[];l=l.length;for(var g=0;g<l;g++)f.push(g);return f}f=[],g=0;for(const E in l)f[g++]=E;return f}}}function Jr(l,f){if(l.forEach&&typeof l.forEach=="function")l.forEach(f,void 0);else if(y(l)||typeof l=="string")Array.prototype.forEach.call(l,f,void 0);else for(var g=js(l),E=Us(l),L=E.length,j=0;j<L;j++)f.call(void 0,E[j],g&&g[j],l)}var Zi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Bc(l,f){if(l){l=l.split("&");for(var g=0;g<l.length;g++){var E=l[g].indexOf("="),L=null;if(0<=E){var j=l[g].substring(0,E);L=l[g].substring(E+1)}else j=l[g];f(j,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function Er(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof Er){this.h=l.h,es(this,l.j),this.o=l.o,this.g=l.g,Zr(this,l.s),this.l=l.l;var f=l.i,g=new er;g.i=f.i,f.g&&(g.g=new Map(f.g),g.h=f.h),ei(this,g),this.m=l.m}else l&&(f=String(l).match(Zi))?(this.h=!1,es(this,f[1]||"",!0),this.o=De(f[2]||""),this.g=De(f[3]||"",!0),Zr(this,f[4]),this.l=De(f[5]||"",!0),ei(this,f[6]||"",!0),this.m=De(f[7]||"")):(this.h=!1,this.i=new er(null,this.h))}Er.prototype.toString=function(){var l=[],f=this.j;f&&l.push(ni(f,zs,!0),":");var g=this.g;return(g||f=="file")&&(l.push("//"),(f=this.o)&&l.push(ni(f,zs,!0),"@"),l.push(encodeURIComponent(String(g)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.s,g!=null&&l.push(":",String(g))),(g=this.l)&&(this.g&&g.charAt(0)!="/"&&l.push("/"),l.push(ni(g,g.charAt(0)=="/"?kl:Pl,!0))),(g=this.i.toString())&&l.push("?",g),(g=this.m)&&l.push("#",ni(g,oa)),l.join("")};function hn(l){return new Er(l)}function es(l,f,g){l.j=g?De(f,!0):f,l.j&&(l.j=l.j.replace(/:$/,""))}function Zr(l,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);l.s=f}else l.s=null}function ei(l,f,g){f instanceof er?(l.i=f,tr(l.i,l.h)):(g||(f=ni(f,Nl)),l.i=new er(f,l.h))}function Ge(l,f,g){l.i.set(f,g)}function ti(l){return Ge(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function De(l,f){return l?f?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function ni(l,f,g){return typeof l=="string"?(l=encodeURI(l).replace(f,Rl),g&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function Rl(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var zs=/[#\/\?@]/g,Pl=/[#\?:]/g,kl=/[#\?]/g,Nl=/[#\?@]/g,oa=/#/g;function er(l,f){this.h=this.g=null,this.i=l||null,this.j=!!f}function Dt(l){l.g||(l.g=new Map,l.h=0,l.i&&Bc(l.i,function(f,g){l.add(decodeURIComponent(f.replace(/\+/g," ")),g)}))}i=er.prototype,i.add=function(l,f){Dt(this),this.i=null,l=wn(this,l);var g=this.g.get(l);return g||this.g.set(l,g=[]),g.push(f),this.h+=1,this};function Mn(l,f){Dt(l),f=wn(l,f),l.g.has(f)&&(l.i=null,l.h-=l.g.get(f).length,l.g.delete(f))}function bn(l,f){return Dt(l),f=wn(l,f),l.g.has(f)}i.forEach=function(l,f){Dt(this),this.g.forEach(function(g,E){g.forEach(function(L){l.call(f,L,E,this)},this)},this)},i.na=function(){Dt(this);const l=Array.from(this.g.values()),f=Array.from(this.g.keys()),g=[];for(let E=0;E<f.length;E++){const L=l[E];for(let j=0;j<L.length;j++)g.push(f[E])}return g},i.V=function(l){Dt(this);let f=[];if(typeof l=="string")bn(this,l)&&(f=f.concat(this.g.get(wn(this,l))));else{l=Array.from(this.g.values());for(let g=0;g<l.length;g++)f=f.concat(l[g])}return f},i.set=function(l,f){return Dt(this),this.i=null,l=wn(this,l),bn(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[f]),this.h+=1,this},i.get=function(l,f){return l?(l=this.V(l),0<l.length?String(l[0]):f):f};function ri(l,f,g){Mn(l,f),0<g.length&&(l.i=null,l.g.set(wn(l,f),J(g)),l.h+=g.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],f=Array.from(this.g.keys());for(var g=0;g<f.length;g++){var E=f[g];const j=encodeURIComponent(String(E)),Z=this.V(E);for(E=0;E<Z.length;E++){var L=j;Z[E]!==""&&(L+="="+encodeURIComponent(String(Z[E]))),l.push(L)}}return this.i=l.join("&")};function wn(l,f){return f=String(f),l.j&&(f=f.toLowerCase()),f}function tr(l,f){f&&!l.j&&(Dt(l),l.i=null,l.g.forEach(function(g,E){var L=E.toLowerCase();E!=L&&(Mn(this,E),ri(this,L,g))},l)),l.j=f}function $c(l,f){const g=new Ki;if(m.Image){const E=new Image;E.onload=z(Zt,g,"TestLoadImage: loaded",!0,f,E),E.onerror=z(Zt,g,"TestLoadImage: error",!1,f,E),E.onabort=z(Zt,g,"TestLoadImage: abort",!1,f,E),E.ontimeout=z(Zt,g,"TestLoadImage: timeout",!1,f,E),m.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=l}else f(!1)}function xl(l,f){const g=new Ki,E=new AbortController,L=setTimeout(()=>{E.abort(),Zt(g,"TestPingServer: timeout",!1,f)},1e4);fetch(l,{signal:E.signal}).then(j=>{clearTimeout(L),j.ok?Zt(g,"TestPingServer: ok",!0,f):Zt(g,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(L),Zt(g,"TestPingServer: error",!1,f)})}function Zt(l,f,g,E,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),E(g)}catch{}}function qc(){this.g=new Xo}function Vl(l,f,g){const E=g||"";try{Jr(l,function(L,j){let Z=L;_(L)&&(Z=Qo(L)),f.push(E+j+"="+encodeURIComponent(Z))})}catch(L){throw f.push(E+"type="+encodeURIComponent("_badmap")),L}}function wr(l){this.l=l.Ub||null,this.j=l.eb||!1}Q(wr,Wi),wr.prototype.g=function(){return new ts(this.l,this.j)},wr.prototype.i=function(l){return function(){return l}}({});function ts(l,f){qe.call(this),this.D=l,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}Q(ts,qe),i=ts.prototype,i.open=function(l,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=f,this.readyState=1,Un(this)},i.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(f.body=l),(this.D||m).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Fn(this)),this.readyState=0},i.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Un(this)),this.g&&(this.readyState=3,Un(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Dl(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function Dl(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}i.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var f=l.value?l.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!l.done}))&&(this.response=this.responseText+=f)}l.done?Fn(this):Un(this),this.readyState==3&&Dl(this)}},i.Ra=function(l){this.g&&(this.response=this.responseText=l,Fn(this))},i.Qa=function(l){this.g&&(this.response=l,Fn(this))},i.ga=function(){this.g&&Fn(this)};function Fn(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Un(l)}i.setRequestHeader=function(l,f){this.u.append(l,f)},i.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],f=this.h.entries();for(var g=f.next();!g.done;)g=g.value,l.push(g[0]+": "+g[1]),g=f.next();return l.join(`\r
`)};function Un(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(ts.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function Tr(l){let f="";return Ce(l,function(g,E){f+=E,f+=":",f+=g,f+=`\r
`}),f}function ii(l,f,g){e:{for(E in g){var E=!1;break e}E=!0}E||(g=Tr(g),typeof l=="string"?g!=null&&encodeURIComponent(String(g)):Ge(l,f,g))}function rt(l){qe.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}Q(rt,qe);var Hc=/^https?$/i,aa=["POST","PUT"];i=rt.prototype,i.Ha=function(l){this.J=l},i.ea=function(l,f,g,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);f=f?f.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():On.g(),this.v=this.o?xs(this.o):xs(On),this.g.onreadystatechange=C(this.Ea,this);try{this.B=!0,this.g.open(f,String(l),!0),this.B=!1}catch(j){ns(this,j);return}if(l=g||"",g=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var L in E)g.set(L,E[L]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const j of E.keys())g.set(j,E.get(j));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(g.keys()).find(j=>j.toLowerCase()=="content-type"),L=m.FormData&&l instanceof m.FormData,!(0<=Array.prototype.indexOf.call(aa,f,void 0))||E||L||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,Z]of g)this.g.setRequestHeader(j,Z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{$s(this),this.u=!0,this.g.send(l),this.u=!1}catch(j){ns(this,j)}};function ns(l,f){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=f,l.m=5,Bs(l),dn(l)}function Bs(l){l.A||(l.A=!0,He(l,"complete"),He(l,"error"))}i.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,He(this,"complete"),He(this,"abort"),dn(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),dn(this,!0)),rt.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?la(this):this.bb())},i.bb=function(){la(this)};function la(l){if(l.h&&typeof h<"u"&&(!l.v[1]||en(l)!=4||l.Z()!=2)){if(l.u&&en(l)==4)Wo(l.Ea,0,l);else if(He(l,"readystatechange"),en(l)==4){l.h=!1;try{const Z=l.Z();e:switch(Z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var g;if(!(g=f)){var E;if(E=Z===0){var L=String(l.D).match(Zi)[1]||null;!L&&m.self&&m.self.location&&(L=m.self.location.protocol.slice(0,-1)),E=!Hc.test(L?L.toLowerCase():"")}g=E}if(g)He(l,"complete"),He(l,"success");else{l.m=6;try{var j=2<en(l)?l.g.statusText:""}catch{j=""}l.l=j+" ["+l.Z()+"]",Bs(l)}}finally{dn(l)}}}}function dn(l,f){if(l.g){$s(l);const g=l.g,E=l.v[0]?()=>{}:null;l.g=null,l.v=null,f||He(l,"ready");try{g.onreadystatechange=E}catch{}}}function $s(l){l.I&&(m.clearTimeout(l.I),l.I=null)}i.isActive=function(){return!!this.g};function en(l){return l.g?l.g.readyState:0}i.Z=function(){try{return 2<en(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(l){if(this.g){var f=this.g.responseText;return l&&f.indexOf(l)==0&&(f=f.substring(l.length)),Yo(f)}};function ua(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function qs(l){const f={};l=(l.g&&2<=en(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<l.length;E++){if(ge(l[E]))continue;var g=V(l[E]);const L=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const j=f[L]||[];f[L]=j,j.push(g)}x(f,function(E){return E.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function nr(l,f,g){return g&&g.internalChannelParams&&g.internalChannelParams[l]||f}function ca(l){this.Aa=0,this.i=[],this.j=new Ki,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=nr("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=nr("baseRetryDelayMs",5e3,l),this.cb=nr("retryDelaySeedMs",1e4,l),this.Wa=nr("forwardChannelMaxRetries",2,l),this.wa=nr("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Ji(l&&l.concurrentRequestLimit),this.Da=new qc,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=ca.prototype,i.la=8,i.G=1,i.connect=function(l,f,g,E){ht(0),this.W=l,this.H=f||{},g&&E!==void 0&&(this.H.OSID=g,this.H.OAID=E),this.F=this.X,this.I=bl(this,null,this.W),rr(this)};function Ot(l){if(Hs(l),l.G==3){var f=l.U++,g=hn(l.I);if(Ge(g,"SID",l.K),Ge(g,"RID",f),Ge(g,"TYPE","terminate"),Ir(l,g),f=new Ln(l,l.j,f),f.L=2,f.v=ti(hn(g)),g=!1,m.navigator&&m.navigator.sendBeacon)try{g=m.navigator.sendBeacon(f.v.toString(),"")}catch{}!g&&m.Image&&(new Image().src=f.v,g=!0),g||(f.g=Fl(f.j,null),f.g.ea(f.v)),f.F=Date.now(),Qe(f)}Ml(l)}function jn(l){l.g&&(ha(l),l.g.cancel(),l.g=null)}function Hs(l){jn(l),l.u&&(m.clearTimeout(l.u),l.u=null),Ks(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&m.clearTimeout(l.s),l.s=null)}function rr(l){if(!cn(l.h)&&!l.s){l.s=!0;var f=l.Ga;Oe||ne(),ee||(Oe(),ee=!0),he.add(f,l),l.B=0}}function Wc(l,f){return Sl(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=f.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=Vn(C(l.Ga,l,f),Ll(l,l.B)),l.B++,!0)}i.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const L=new Ln(this,this.j,l);let j=this.o;if(this.S&&(j?(j=T(j),N(j,this.S)):j=this.S),this.m!==null||this.O||(L.H=j,j=null),this.P)e:{for(var f=0,g=0;g<this.i.length;g++){t:{var E=this.i[g];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(f+=E,4096<f){f=g;break e}if(f===4096||g===this.i.length-1){f=g+1;break e}}f=1e3}else f=1e3;f=si(this,L,f),g=hn(this.I),Ge(g,"RID",l),Ge(g,"CVER",22),this.D&&Ge(g,"X-HTTP-Session-Id",this.D),Ir(this,g),j&&(this.O?f="headers="+encodeURIComponent(String(Tr(j)))+"&"+f:this.m&&ii(g,this.m,j)),sa(this.h,L),this.Ua&&Ge(g,"TYPE","init"),this.P?(Ge(g,"$req",f),Ge(g,"SID","null"),L.T=!0,Fs(L,g,null)):Fs(L,g,f),this.G=2}}else this.G==3&&(l?Ws(this,l):this.i.length==0||cn(this.h)||Ws(this))};function Ws(l,f){var g;f?g=f.l:g=l.U++;const E=hn(l.I);Ge(E,"SID",l.K),Ge(E,"RID",g),Ge(E,"AID",l.T),Ir(l,E),l.m&&l.o&&ii(E,l.m,l.o),g=new Ln(l,l.j,g,l.B+1),l.m===null&&(g.H=l.o),f&&(l.i=f.D.concat(l.i)),f=si(l,g,1e3),g.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),sa(l.h,g),Fs(g,E,f)}function Ir(l,f){l.H&&Ce(l.H,function(g,E){Ge(f,E,g)}),l.l&&Jr({},function(g,E){Ge(f,E,g)})}function si(l,f,g){g=Math.min(l.i.length,g);var E=l.l?C(l.l.Na,l.l,l):null;e:{var L=l.i;let j=-1;for(;;){const Z=["count="+g];j==-1?0<g?(j=L[0].g,Z.push("ofs="+j)):j=0:Z.push("ofs="+j);let We=!0;for(let St=0;St<g;St++){let Me=L[St].g;const Pt=L[St].map;if(Me-=j,0>Me)j=Math.max(0,L[St].g-100),We=!1;else try{Vl(Pt,Z,"req"+Me+"_")}catch{E&&E(Pt)}}if(We){E=Z.join("&");break e}}}return l=l.i.splice(0,g),f.D=l,E}function rs(l){if(!l.g&&!l.u){l.Y=1;var f=l.Fa;Oe||ne(),ee||(Oe(),ee=!0),he.add(f,l),l.v=0}}function Gs(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=Vn(C(l.Fa,l),Ll(l,l.v)),l.v++,!0)}i.Fa=function(){if(this.u=null,Ol(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=Vn(C(this.ab,this),l)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ht(10),jn(this),Ol(this))};function ha(l){l.A!=null&&(m.clearTimeout(l.A),l.A=null)}function Ol(l){l.g=new Ln(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var f=hn(l.qa);Ge(f,"RID","rpc"),Ge(f,"SID",l.K),Ge(f,"AID",l.T),Ge(f,"CI",l.F?"0":"1"),!l.F&&l.ja&&Ge(f,"TO",l.ja),Ge(f,"TYPE","xmlhttp"),Ir(l,f),l.m&&l.o&&ii(f,l.m,l.o),l.L&&(l.g.I=l.L);var g=l.g;l=l.ia,g.L=1,g.v=ti(hn(f)),g.m=null,g.P=!0,ra(g,l)}i.Za=function(){this.C!=null&&(this.C=null,jn(this),Gs(this),ht(19))};function Ks(l){l.C!=null&&(m.clearTimeout(l.C),l.C=null)}function Qs(l,f){var g=null;if(l.g==f){Ks(l),ha(l),l.g=null;var E=2}else if(Qt(l.h,f))g=f.D,Al(l.h,f),E=1;else return;if(l.G!=0){if(f.o)if(E==1){g=f.m?f.m.length:0,f=Date.now()-f.F;var L=l.B;E=Gi(),He(E,new Os(E,g)),rr(l)}else rs(l);else if(L=f.s,L==3||L==0&&0<f.X||!(E==1&&Wc(l,f)||E==2&&Gs(l)))switch(g&&0<g.length&&(f=l.h,f.i=f.i.concat(g)),L){case 1:Sr(l,5);break;case 4:Sr(l,10);break;case 3:Sr(l,6);break;default:Sr(l,2)}}}function Ll(l,f){let g=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(g*=2),g*f}function Sr(l,f){if(l.j.info("Error code "+f),f==2){var g=C(l.fb,l),E=l.Xa;const L=!E;E=new Er(E||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||es(E,"https"),ti(E),L?$c(E.toString(),g):xl(E.toString(),g)}else ht(2);l.G=0,l.l&&l.l.sa(f),Ml(l),Hs(l)}i.fb=function(l){l?(this.j.info("Successfully pinged google.com"),ht(2)):(this.j.info("Failed to ping google.com"),ht(1))};function Ml(l){if(l.G=0,l.ka=[],l.l){const f=Cl(l.h);(f.length!=0||l.i.length!=0)&&(W(l.ka,f),W(l.ka,l.i),l.h.i.length=0,J(l.i),l.i.length=0),l.l.ra()}}function bl(l,f,g){var E=g instanceof Er?hn(g):new Er(g);if(E.g!="")f&&(E.g=f+"."+E.g),Zr(E,E.s);else{var L=m.location;E=L.protocol,f=f?f+"."+L.hostname:L.hostname,L=+L.port;var j=new Er(null);E&&es(j,E),f&&(j.g=f),L&&Zr(j,L),g&&(j.l=g),E=j}return g=l.D,f=l.ya,g&&f&&Ge(E,g,f),Ge(E,"VER",l.la),Ir(l,E),E}function Fl(l,f,g){if(f&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=l.Ca&&!l.pa?new rt(new wr({eb:g})):new rt(l.pa),f.Ha(l.J),f}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function da(){}i=da.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function Ys(){}Ys.prototype.g=function(l,f){return new Yt(l,f)};function Yt(l,f){qe.call(this),this.g=new ca(f),this.l=l,this.h=f&&f.messageUrlParams||null,l=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(l?l["X-WebChannel-Content-Type"]=f.messageContentType:l={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(l?l["X-WebChannel-Client-Profile"]=f.va:l={"X-WebChannel-Client-Profile":f.va}),this.g.S=l,(l=f&&f.Sb)&&!ge(l)&&(this.g.m=l),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!ge(f)&&(this.g.D=f,l=this.h,l!==null&&f in l&&(l=this.h,f in l&&delete l[f])),this.j=new ir(this)}Q(Yt,qe),Yt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Yt.prototype.close=function(){Ot(this.g)},Yt.prototype.o=function(l){var f=this.g;if(typeof l=="string"){var g={};g.__data__=l,l=g}else this.u&&(g={},g.__data__=Qo(l),l=g);f.i.push(new Il(f.Ya++,l)),f.G==3&&rr(f)},Yt.prototype.N=function(){this.g.l=null,delete this.j,Ot(this.g),delete this.g,Yt.aa.N.call(this)};function Ul(l){Jn.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var f=l.__sm__;if(f){e:{for(const g in f){l=g;break e}l=void 0}(this.i=l)&&(l=this.i,f=f!==null&&l in f?f[l]:void 0),this.data=f}else this.data=l}Q(Ul,Jn);function jl(){Ds.call(this),this.status=1}Q(jl,Ds);function ir(l){this.g=l}Q(ir,da),ir.prototype.ua=function(){He(this.g,"a")},ir.prototype.ta=function(l){He(this.g,new Ul(l))},ir.prototype.sa=function(l){He(this.g,new jl)},ir.prototype.ra=function(){He(this.g,"b")},Ys.prototype.createWebChannel=Ys.prototype.g,Yt.prototype.send=Yt.prototype.o,Yt.prototype.open=Yt.prototype.m,Yt.prototype.close=Yt.prototype.close,H_=function(){return new Ys},q_=function(){return Gi()},$_=Zn,jd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ms.NO_ERROR=0,Ms.TIMEOUT=8,Ms.HTTP_ERROR=6,qu=Ms,vl.COMPLETE="complete",B_=vl,Vs.EventType=vn,vn.OPEN="a",vn.CLOSE="b",vn.ERROR="c",vn.MESSAGE="d",qe.prototype.listen=qe.prototype.K,ja=Vs,rt.prototype.listenOnce=rt.prototype.L,rt.prototype.getLastError=rt.prototype.Ka,rt.prototype.getLastErrorCode=rt.prototype.Ba,rt.prototype.getStatus=rt.prototype.Z,rt.prototype.getResponseJson=rt.prototype.Oa,rt.prototype.getResponseText=rt.prototype.oa,rt.prototype.send=rt.prototype.ea,rt.prototype.setWithCredentials=rt.prototype.Ha,z_=rt}).apply(typeof Lu<"u"?Lu:typeof self<"u"?self:typeof window<"u"?window:{});const Gg="@firebase/firestore",Kg="4.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Wt.UNAUTHENTICATED=new Wt(null),Wt.GOOGLE_CREDENTIALS=new Wt("google-credentials-uid"),Wt.FIRST_PARTY=new Wt("first-party-uid"),Wt.MOCK_USER=new Wt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zo="12.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const As=new of("@firebase/firestore");function To(){return As.logLevel}function ie(i,...e){if(As.logLevel<=Ne.DEBUG){const t=e.map(yf);As.debug(`Firestore (${zo}): ${i}`,...t)}}function zr(i,...e){if(As.logLevel<=Ne.ERROR){const t=e.map(yf);As.error(`Firestore (${zo}): ${i}`,...t)}}function Vo(i,...e){if(As.logLevel<=Ne.WARN){const t=e.map(yf);As.warn(`Firestore (${zo}): ${i}`,...t)}}function yf(i){if(typeof i=="string")return i;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(i)}catch{return i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(i,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,W_(i,s,t)}function W_(i,e,t){let s=`FIRESTORE (${zo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${i.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw zr(s),new Error(s)}function Be(i,e,t,s){let o="Unexpected state";typeof t=="string"?o=t:s=t,i||W_(e,o,s)}function Ie(i,e){return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class te extends $r{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class xS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Wt.UNAUTHENTICATED))}shutdown(){}}class VS{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class DS{constructor(e){this.t=e,this.currentUser=Wt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Be(this.o===void 0,42304);let s=this.i;const o=y=>this.i!==s?(s=this.i,t(y)):Promise.resolve();let u=new Fr;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new Fr,e.enqueueRetryable(()=>o(this.currentUser))};const h=()=>{const y=u;e.enqueueRetryable(async()=>{await y.promise,await o(this.currentUser)})},m=y=>{ie("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=y,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(y=>m(y)),setTimeout(()=>{if(!this.auth){const y=this.t.getImmediate({optional:!0});y?m(y):(ie("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new Fr)}},0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(ie("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Be(typeof s.accessToken=="string",31837,{l:s}),new G_(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Be(e===null||typeof e=="string",2055,{h:e}),new Wt(e)}}class OS{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Wt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class LS{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new OS(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Wt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Qg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class MS{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,kn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Be(this.o===void 0,3512);const s=u=>{u.error!=null&&ie("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.m;return this.m=u.token,ie("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable(()=>s(u))};const o=u=>{ie("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(u=>o(u)),setTimeout(()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):ie("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Qg(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Be(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Qg(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bS(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<i;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=bS(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<t&&(s+=e.charAt(o[u]%62))}return s}}function xe(i,e){return i<e?-1:i>e?1:0}function zd(i,e){const t=Math.min(i.length,e.length);for(let s=0;s<t;s++){const o=i.charAt(s),u=e.charAt(s);if(o!==u)return Ad(o)===Ad(u)?xe(o,u):Ad(o)?1:-1}return xe(i.length,e.length)}const FS=55296,US=57343;function Ad(i){const e=i.charCodeAt(0);return e>=FS&&e<=US}function Do(i,e,t){return i.length===e.length&&i.every((s,o)=>t(s,e[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yg="__name__";class ur{constructor(e,t,s){t===void 0?t=0:t>e.length&&ve(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&ve(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return ur.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ur?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const u=ur.compareSegments(e.get(o),t.get(o));if(u!==0)return u}return xe(e.length,t.length)}static compareSegments(e,t){const s=ur.isNumericId(e),o=ur.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?ur.extractNumericId(e).compare(ur.extractNumericId(t)):zd(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return xi.fromString(e.substring(4,e.length-2))}}class Xe extends ur{construct(e,t,s){return new Xe(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new te(B.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(o=>o.length>0))}return new Xe(t)}static emptyPath(){return new Xe([])}}const jS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ut extends ur{construct(e,t,s){return new Ut(e,t,s)}static isValidIdentifier(e){return jS.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ut.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Yg}static keyField(){return new Ut([Yg])}static fromServerFormat(e){const t=[];let s="",o=0;const u=()=>{if(s.length===0)throw new te(B.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new te(B.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const y=e[o+1];if(y!=="\\"&&y!=="."&&y!=="`")throw new te(B.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=y,o+=2}else m==="`"?(h=!h,o++):m!=="."||h?(s+=m,o++):(u(),o++)}if(u(),h)throw new te(B.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ut(t)}static emptyPath(){return new Ut([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e){this.path=e}static fromPath(e){return new de(Xe.fromString(e))}static fromName(e){return new de(Xe.fromString(e).popFirst(5))}static empty(){return new de(Xe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Xe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Xe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new de(new Xe(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K_(i,e,t){if(!t)throw new te(B.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function zS(i,e,t,s){if(e===!0&&s===!0)throw new te(B.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function Xg(i){if(!de.isDocumentKey(i))throw new te(B.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function Jg(i){if(de.isDocumentKey(i))throw new te(B.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function Q_(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}function vc(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":ve(12329,{type:typeof i})}function _n(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new te(B.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=vc(i);throw new te(B.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(i,e){const t={typeString:i};return e&&(t.value=e),t}function fl(i,e){if(!Q_(i))throw new te(B.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const o=e[s].typeString,u="value"in e[s]?{value:e[s].value}:void 0;if(!(s in i)){t=`JSON missing required field: '${s}'`;break}const h=i[s];if(o&&typeof h!==o){t=`JSON field '${s}' must be a ${o}.`;break}if(u!==void 0&&h!==u.value){t=`Expected '${s}' field to equal '${u.value}'`;break}}if(t)throw new te(B.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zg=-62135596800,ey=1e6;class tt{static now(){return tt.fromMillis(Date.now())}static fromDate(e){return tt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*ey);return new tt(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new te(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new te(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Zg)throw new te(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new te(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ey}_compareTo(e){return this.seconds===e.seconds?xe(this.nanoseconds,e.nanoseconds):xe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:tt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(fl(e,tt._jsonSchema))return new tt(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Zg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}tt._jsonSchemaVersion="firestore/timestamp/1.0",tt._jsonSchema={type:Et("string",tt._jsonSchemaVersion),seconds:Et("number"),nanoseconds:Et("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{static fromTimestamp(e){return new Te(e)}static min(){return new Te(new tt(0,0))}static max(){return new Te(new tt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Za=-1;function BS(i,e){const t=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,o=Te.fromTimestamp(s===1e9?new tt(t+1,0):new tt(t,s));return new Di(o,de.empty(),e)}function $S(i){return new Di(i.readTime,i.key,Za)}class Di{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Di(Te.min(),de.empty(),Za)}static max(){return new Di(Te.max(),de.empty(),Za)}}function qS(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=de.comparator(i.documentKey,e.documentKey),t!==0?t:xe(i.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class WS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bo(i){if(i.code!==B.FAILED_PRECONDITION||i.message!==HS)throw i;ie("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ve(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new q((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof q?t:q.resolve(t)}catch(t){return q.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):q.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):q.reject(t)}static resolve(e){return new q((t,s)=>{t(e)})}static reject(e){return new q((t,s)=>{s(e)})}static waitFor(e){return new q((t,s)=>{let o=0,u=0,h=!1;e.forEach(m=>{++o,m.next(()=>{++u,h&&u===o&&t()},y=>s(y))}),h=!0,u===o&&t()})}static or(e){let t=q.resolve(!1);for(const s of e)t=t.next(o=>o?q.resolve(o):s());return t}static forEach(e,t){const s=[];return e.forEach((o,u)=>{s.push(t.call(this,o,u))}),this.waitFor(s)}static mapArray(e,t){return new q((s,o)=>{const u=e.length,h=new Array(u);let m=0;for(let y=0;y<u;y++){const _=y;t(e[_]).next(w=>{h[_]=w,++m,m===u&&s(h)},w=>o(w))}})}static doWhile(e,t){return new q((s,o)=>{const u=()=>{e()===!0?t().next(()=>{u()},o):s()};u()})}}function GS(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function $o(i){return i.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Ec.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vf=-1;function wc(i){return i==null}function ic(i){return i===0&&1/i==-1/0}function KS(i){return typeof i=="number"&&Number.isInteger(i)&&!ic(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y_="";function QS(i){let e="";for(let t=0;t<i.length;t++)e.length>0&&(e=ty(e)),e=YS(i.get(t),e);return ty(e)}function YS(i,e){let t=e;const s=i.length;for(let o=0;o<s;o++){const u=i.charAt(o);switch(u){case"\0":t+="";break;case Y_:t+="";break;default:t+=u}}return t}function ty(i){return i+Y_+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ny(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function ji(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function X_(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e,t){this.comparator=e,this.root=t||Ft.EMPTY}insert(e,t){return new at(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ft.BLACK,null,null))}remove(e){return new at(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ft.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Mu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Mu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Mu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Mu(this.root,e,this.comparator,!0)}}class Mu{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ft{constructor(e,t,s,o,u){this.key=e,this.value=t,this.color=s??Ft.RED,this.left=o??Ft.EMPTY,this.right=u??Ft.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,u){return new Ft(e??this.key,t??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,s),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Ft.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Ft.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ft.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ft.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ve(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ve(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ve(27949);return e+(this.isRed()?0:1)}}Ft.EMPTY=null,Ft.RED=!0,Ft.BLACK=!1;Ft.EMPTY=new class{constructor(){this.size=0}get key(){throw ve(57766)}get value(){throw ve(16141)}get color(){throw ve(16727)}get left(){throw ve(29726)}get right(){throw ve(36894)}copy(e,t,s,o,u){return this}insert(e,t,s){return new Ft(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this.comparator=e,this.data=new at(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ry(this.data.getIterator())}getIteratorFrom(e){return new ry(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof Rt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Rt(this.comparator);return t.data=e,t}}class ry{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e){this.fields=e,e.sort(Ut.comparator)}static empty(){return new yn([])}unionWith(e){let t=new Rt(Ut.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new yn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Do(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new J_("Invalid base64 string: "+u):u}}(e);return new jt(t)}static fromUint8Array(e){const t=function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u}(e);return new jt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return xe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}jt.EMPTY_BYTE_STRING=new jt("");const XS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Oi(i){if(Be(!!i,39018),typeof i=="string"){let e=0;const t=XS.exec(i);if(Be(!!t,46558,{timestamp:i}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ft(i.seconds),nanos:ft(i.nanos)}}function ft(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function Li(i){return typeof i=="string"?jt.fromBase64String(i):jt.fromUint8Array(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z_="server_timestamp",ev="__type__",tv="__previous_value__",nv="__local_write_time__";function Ef(i){return(i?.mapValue?.fields||{})[ev]?.stringValue===Z_}function Tc(i){const e=i.mapValue.fields[tv];return Ef(e)?Tc(e):e}function el(i){const e=Oi(i.mapValue.fields[nv].timestampValue);return new tt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JS{constructor(e,t,s,o,u,h,m,y,_,w){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=m,this.longPollingOptions=y,this.useFetchStreams=_,this.isUsingEmulator=w}}const sc="(default)";class tl{constructor(e,t){this.projectId=e,this.database=t||sc}static empty(){return new tl("","")}get isDefaultDatabase(){return this.database===sc}isEqual(e){return e instanceof tl&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rv="__type__",ZS="__max__",bu={mapValue:{}},iv="__vector__",oc="value";function Mi(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?Ef(i)?4:t1(i)?9007199254740991:e1(i)?10:11:ve(28295,{value:i})}function gr(i,e){if(i===e)return!0;const t=Mi(i);if(t!==Mi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return el(i).isEqual(el(e));case 3:return function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=Oi(o.timestampValue),m=Oi(u.timestampValue);return h.seconds===m.seconds&&h.nanos===m.nanos}(i,e);case 5:return i.stringValue===e.stringValue;case 6:return function(o,u){return Li(o.bytesValue).isEqual(Li(u.bytesValue))}(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return function(o,u){return ft(o.geoPointValue.latitude)===ft(u.geoPointValue.latitude)&&ft(o.geoPointValue.longitude)===ft(u.geoPointValue.longitude)}(i,e);case 2:return function(o,u){if("integerValue"in o&&"integerValue"in u)return ft(o.integerValue)===ft(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=ft(o.doubleValue),m=ft(u.doubleValue);return h===m?ic(h)===ic(m):isNaN(h)&&isNaN(m)}return!1}(i,e);case 9:return Do(i.arrayValue.values||[],e.arrayValue.values||[],gr);case 10:case 11:return function(o,u){const h=o.mapValue.fields||{},m=u.mapValue.fields||{};if(ny(h)!==ny(m))return!1;for(const y in h)if(h.hasOwnProperty(y)&&(m[y]===void 0||!gr(h[y],m[y])))return!1;return!0}(i,e);default:return ve(52216,{left:i})}}function nl(i,e){return(i.values||[]).find(t=>gr(t,e))!==void 0}function Oo(i,e){if(i===e)return 0;const t=Mi(i),s=Mi(e);if(t!==s)return xe(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return xe(i.booleanValue,e.booleanValue);case 2:return function(u,h){const m=ft(u.integerValue||u.doubleValue),y=ft(h.integerValue||h.doubleValue);return m<y?-1:m>y?1:m===y?0:isNaN(m)?isNaN(y)?0:-1:1}(i,e);case 3:return iy(i.timestampValue,e.timestampValue);case 4:return iy(el(i),el(e));case 5:return zd(i.stringValue,e.stringValue);case 6:return function(u,h){const m=Li(u),y=Li(h);return m.compareTo(y)}(i.bytesValue,e.bytesValue);case 7:return function(u,h){const m=u.split("/"),y=h.split("/");for(let _=0;_<m.length&&_<y.length;_++){const w=xe(m[_],y[_]);if(w!==0)return w}return xe(m.length,y.length)}(i.referenceValue,e.referenceValue);case 8:return function(u,h){const m=xe(ft(u.latitude),ft(h.latitude));return m!==0?m:xe(ft(u.longitude),ft(h.longitude))}(i.geoPointValue,e.geoPointValue);case 9:return sy(i.arrayValue,e.arrayValue);case 10:return function(u,h){const m=u.fields||{},y=h.fields||{},_=m[oc]?.arrayValue,w=y[oc]?.arrayValue,R=xe(_?.values?.length||0,w?.values?.length||0);return R!==0?R:sy(_,w)}(i.mapValue,e.mapValue);case 11:return function(u,h){if(u===bu.mapValue&&h===bu.mapValue)return 0;if(u===bu.mapValue)return 1;if(h===bu.mapValue)return-1;const m=u.fields||{},y=Object.keys(m),_=h.fields||{},w=Object.keys(_);y.sort(),w.sort();for(let R=0;R<y.length&&R<w.length;++R){const C=zd(y[R],w[R]);if(C!==0)return C;const z=Oo(m[y[R]],_[w[R]]);if(z!==0)return z}return xe(y.length,w.length)}(i.mapValue,e.mapValue);default:throw ve(23264,{he:t})}}function iy(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return xe(i,e);const t=Oi(i),s=Oi(e),o=xe(t.seconds,s.seconds);return o!==0?o:xe(t.nanos,s.nanos)}function sy(i,e){const t=i.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const u=Oo(t[o],s[o]);if(u)return u}return xe(t.length,s.length)}function Lo(i){return Bd(i)}function Bd(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?function(t){const s=Oi(t);return`time(${s.seconds},${s.nanos})`}(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?function(t){return Li(t).toBase64()}(i.bytesValue):"referenceValue"in i?function(t){return de.fromName(t).toString()}(i.referenceValue):"geoPointValue"in i?function(t){return`geo(${t.latitude},${t.longitude})`}(i.geoPointValue):"arrayValue"in i?function(t){let s="[",o=!0;for(const u of t.values||[])o?o=!1:s+=",",s+=Bd(u);return s+"]"}(i.arrayValue):"mapValue"in i?function(t){const s=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const h of s)u?u=!1:o+=",",o+=`${h}:${Bd(t.fields[h])}`;return o+"}"}(i.mapValue):ve(61005,{value:i})}function Hu(i){switch(Mi(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Tc(i);return e?16+Hu(e):16;case 5:return 2*i.stringValue.length;case 6:return Li(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((o,u)=>o+Hu(u),0)}(i.arrayValue);case 10:case 11:return function(s){let o=0;return ji(s.fields,(u,h)=>{o+=u.length+Hu(h)}),o}(i.mapValue);default:throw ve(13486,{value:i})}}function oy(i,e){return{referenceValue:`projects/${i.projectId}/databases/${i.database}/documents/${e.path.canonicalString()}`}}function $d(i){return!!i&&"integerValue"in i}function wf(i){return!!i&&"arrayValue"in i}function ay(i){return!!i&&"nullValue"in i}function ly(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function Wu(i){return!!i&&"mapValue"in i}function e1(i){return(i?.mapValue?.fields||{})[rv]?.stringValue===iv}function Wa(i){if(i.geoPointValue)return{geoPointValue:{...i.geoPointValue}};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:{...i.timestampValue}};if(i.mapValue){const e={mapValue:{fields:{}}};return ji(i.mapValue.fields,(t,s)=>e.mapValue.fields[t]=Wa(s)),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Wa(i.arrayValue.values[t]);return e}return{...i}}function t1(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===ZS}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e){this.value=e}static empty(){return new un({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Wu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Wa(t)}setAll(e){let t=Ut.emptyPath(),s={},o=[];e.forEach((h,m)=>{if(!t.isImmediateParentOf(m)){const y=this.getFieldsMap(t);this.applyChanges(y,s,o),s={},o=[],t=m.popLast()}h?s[m.lastSegment()]=Wa(h):o.push(m.lastSegment())});const u=this.getFieldsMap(t);this.applyChanges(u,s,o)}delete(e){const t=this.field(e.popLast());Wu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return gr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];Wu(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){ji(t,(o,u)=>e[o]=u);for(const o of s)delete e[o]}clone(){return new un(Wa(this.value))}}function sv(i){const e=[];return ji(i.fields,(t,s)=>{const o=new Ut([t]);if(Wu(s)){const u=sv(s.mapValue).fields;if(u.length===0)e.push(o);else for(const h of u)e.push(o.child(h))}else e.push(o)}),new yn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e,t,s,o,u,h,m){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=u,this.data=h,this.documentState=m}static newInvalidDocument(e){return new Gt(e,0,Te.min(),Te.min(),Te.min(),un.empty(),0)}static newFoundDocument(e,t,s,o){return new Gt(e,1,t,Te.min(),s,o,0)}static newNoDocument(e,t){return new Gt(e,2,t,Te.min(),Te.min(),un.empty(),0)}static newUnknownDocument(e,t){return new Gt(e,3,t,Te.min(),Te.min(),un.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=un.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=un.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Gt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Gt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(e,t){this.position=e,this.inclusive=t}}function uy(i,e,t){let s=0;for(let o=0;o<i.position.length;o++){const u=e[o],h=i.position[o];if(u.field.isKeyField()?s=de.comparator(de.fromName(h.referenceValue),t.key):s=Oo(h,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function cy(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!gr(i.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(e,t="asc"){this.field=e,this.dir=t}}function n1(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ov{}class vt extends ov{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new i1(e,t,s):t==="array-contains"?new a1(e,s):t==="in"?new l1(e,s):t==="not-in"?new u1(e,s):t==="array-contains-any"?new c1(e,s):new vt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new s1(e,s):new o1(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Oo(t,this.value)):t!==null&&Mi(this.value)===Mi(t)&&this.matchesComparison(Oo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ve(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Yn extends ov{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Yn(e,t)}matches(e){return av(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function av(i){return i.op==="and"}function lv(i){return r1(i)&&av(i)}function r1(i){for(const e of i.filters)if(e instanceof Yn)return!1;return!0}function qd(i){if(i instanceof vt)return i.field.canonicalString()+i.op.toString()+Lo(i.value);if(lv(i))return i.filters.map(e=>qd(e)).join(",");{const e=i.filters.map(t=>qd(t)).join(",");return`${i.op}(${e})`}}function uv(i,e){return i instanceof vt?function(s,o){return o instanceof vt&&s.op===o.op&&s.field.isEqual(o.field)&&gr(s.value,o.value)}(i,e):i instanceof Yn?function(s,o){return o instanceof Yn&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((u,h,m)=>u&&uv(h,o.filters[m]),!0):!1}(i,e):void ve(19439)}function cv(i){return i instanceof vt?function(t){return`${t.field.canonicalString()} ${t.op} ${Lo(t.value)}`}(i):i instanceof Yn?function(t){return t.op.toString()+" {"+t.getFilters().map(cv).join(" ,")+"}"}(i):"Filter"}class i1 extends vt{constructor(e,t,s){super(e,t,s),this.key=de.fromName(s.referenceValue)}matches(e){const t=de.comparator(e.key,this.key);return this.matchesComparison(t)}}class s1 extends vt{constructor(e,t){super(e,"in",t),this.keys=hv("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class o1 extends vt{constructor(e,t){super(e,"not-in",t),this.keys=hv("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function hv(i,e){return(e.arrayValue?.values||[]).map(t=>de.fromName(t.referenceValue))}class a1 extends vt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return wf(t)&&nl(t.arrayValue,this.value)}}class l1 extends vt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&nl(this.value.arrayValue,t)}}class u1 extends vt{constructor(e,t){super(e,"not-in",t)}matches(e){if(nl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!nl(this.value.arrayValue,t)}}class c1 extends vt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!wf(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>nl(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h1{constructor(e,t=null,s=[],o=[],u=null,h=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=h,this.endAt=m,this.Te=null}}function hy(i,e=null,t=[],s=[],o=null,u=null,h=null){return new h1(i,e,t,s,o,u,h)}function Tf(i){const e=Ie(i);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>qd(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(u){return u.field.canonicalString()+u.dir}(s)).join(","),wc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>Lo(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>Lo(s)).join(",")),e.Te=t}return e.Te}function If(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!n1(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!uv(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!cy(i.startAt,e.startAt)&&cy(i.endAt,e.endAt)}function Hd(i){return de.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(e,t=null,s=[],o=[],u=null,h="F",m=null,y=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=h,this.startAt=m,this.endAt=y,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function d1(i,e,t,s,o,u,h,m){return new qo(i,e,t,s,o,u,h,m)}function Ic(i){return new qo(i)}function dy(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function dv(i){return i.collectionGroup!==null}function Ga(i){const e=Ie(i);if(e.Ie===null){e.Ie=[];const t=new Set;for(const u of e.explicitOrderBy)e.Ie.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let m=new Rt(Ut.comparator);return h.filters.forEach(y=>{y.getFlattenedFilters().forEach(_=>{_.isInequality()&&(m=m.add(_.field))})}),m})(e).forEach(u=>{t.has(u.canonicalString())||u.isKeyField()||e.Ie.push(new rl(u,s))}),t.has(Ut.keyField().canonicalString())||e.Ie.push(new rl(Ut.keyField(),s))}return e.Ie}function dr(i){const e=Ie(i);return e.Ee||(e.Ee=f1(e,Ga(i))),e.Ee}function f1(i,e){if(i.limitType==="F")return hy(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map(o=>{const u=o.dir==="desc"?"asc":"desc";return new rl(o.field,u)});const t=i.endAt?new ac(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new ac(i.startAt.position,i.startAt.inclusive):null;return hy(i.path,i.collectionGroup,e,i.filters,i.limit,t,s)}}function Wd(i,e){const t=i.filters.concat([e]);return new qo(i.path,i.collectionGroup,i.explicitOrderBy.slice(),t,i.limit,i.limitType,i.startAt,i.endAt)}function Gd(i,e,t){return new qo(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function Sc(i,e){return If(dr(i),dr(e))&&i.limitType===e.limitType}function fv(i){return`${Tf(dr(i))}|lt:${i.limitType}`}function Io(i){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(o=>cv(o)).join(", ")}]`),wc(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(o=>function(h){return`${h.field.canonicalString()} (${h.dir})`}(o)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(o=>Lo(o)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(o=>Lo(o)).join(",")),`Target(${s})`}(dr(i))}; limitType=${i.limitType})`}function Ac(i,e){return e.isFoundDocument()&&function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):de.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)}(i,e)&&function(s,o){for(const u of Ga(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0}(i,e)&&function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0}(i,e)&&function(s,o){return!(s.startAt&&!function(h,m,y){const _=uy(h,m,y);return h.inclusive?_<=0:_<0}(s.startAt,Ga(s),o)||s.endAt&&!function(h,m,y){const _=uy(h,m,y);return h.inclusive?_>=0:_>0}(s.endAt,Ga(s),o))}(i,e)}function p1(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function pv(i){return(e,t)=>{let s=!1;for(const o of Ga(i)){const u=m1(o,e,t);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function m1(i,e,t){const s=i.field.isKeyField()?de.comparator(e.key,t.key):function(u,h,m){const y=h.data.field(u),_=m.data.field(u);return y!==null&&_!==null?Oo(y,_):ve(42886)}(i.field,e,t);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return ve(19790,{direction:i.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){ji(this.inner,(t,s)=>{for(const[o,u]of s)e(o,u)})}isEmpty(){return X_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g1=new at(de.comparator);function Br(){return g1}const mv=new at(de.comparator);function za(...i){let e=mv;for(const t of i)e=e.insert(t.key,t);return e}function gv(i){let e=mv;return i.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function _s(){return Ka()}function yv(){return Ka()}function Ka(){return new Ps(i=>i.toString(),(i,e)=>i.isEqual(e))}const y1=new at(de.comparator),_1=new Rt(de.comparator);function Ve(...i){let e=_1;for(const t of i)e=e.add(t);return e}const v1=new Rt(xe);function E1(){return v1}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sf(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ic(e)?"-0":e}}function _v(i){return{integerValue:""+i}}function w1(i,e){return KS(e)?_v(e):Sf(i,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(){this._=void 0}}function T1(i,e,t){return i instanceof il?function(o,u){const h={fields:{[ev]:{stringValue:Z_},[nv]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&Ef(u)&&(u=Tc(u)),u&&(h.fields[tv]=u),{mapValue:h}}(t,e):i instanceof sl?Ev(i,e):i instanceof ol?wv(i,e):function(o,u){const h=vv(o,u),m=fy(h)+fy(o.Ae);return $d(h)&&$d(o.Ae)?_v(m):Sf(o.serializer,m)}(i,e)}function I1(i,e,t){return i instanceof sl?Ev(i,e):i instanceof ol?wv(i,e):t}function vv(i,e){return i instanceof lc?function(s){return $d(s)||function(u){return!!u&&"doubleValue"in u}(s)}(e)?e:{integerValue:0}:null}class il extends Cc{}class sl extends Cc{constructor(e){super(),this.elements=e}}function Ev(i,e){const t=Tv(e);for(const s of i.elements)t.some(o=>gr(o,s))||t.push(s);return{arrayValue:{values:t}}}class ol extends Cc{constructor(e){super(),this.elements=e}}function wv(i,e){let t=Tv(e);for(const s of i.elements)t=t.filter(o=>!gr(o,s));return{arrayValue:{values:t}}}class lc extends Cc{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function fy(i){return ft(i.integerValue||i.doubleValue)}function Tv(i){return wf(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S1{constructor(e,t){this.field=e,this.transform=t}}function A1(i,e){return i.field.isEqual(e.field)&&function(s,o){return s instanceof sl&&o instanceof sl||s instanceof ol&&o instanceof ol?Do(s.elements,o.elements,gr):s instanceof lc&&o instanceof lc?gr(s.Ae,o.Ae):s instanceof il&&o instanceof il}(i.transform,e.transform)}class C1{constructor(e,t){this.version=e,this.transformResults=t}}class Kn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Kn}static exists(e){return new Kn(void 0,e)}static updateTime(e){return new Kn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Gu(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class Rc{}function Iv(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new Av(i.key,Kn.none()):new pl(i.key,i.data,Kn.none());{const t=i.data,s=un.empty();let o=new Rt(Ut.comparator);for(let u of e.fields)if(!o.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?s.delete(u):s.set(u,h),o=o.add(u)}return new zi(i.key,s,new yn(o.toArray()),Kn.none())}}function R1(i,e,t){i instanceof pl?function(o,u,h){const m=o.value.clone(),y=my(o.fieldTransforms,u,h.transformResults);m.setAll(y),u.convertToFoundDocument(h.version,m).setHasCommittedMutations()}(i,e,t):i instanceof zi?function(o,u,h){if(!Gu(o.precondition,u))return void u.convertToUnknownDocument(h.version);const m=my(o.fieldTransforms,u,h.transformResults),y=u.data;y.setAll(Sv(o)),y.setAll(m),u.convertToFoundDocument(h.version,y).setHasCommittedMutations()}(i,e,t):function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()}(0,e,t)}function Qa(i,e,t,s){return i instanceof pl?function(u,h,m,y){if(!Gu(u.precondition,h))return m;const _=u.value.clone(),w=gy(u.fieldTransforms,y,h);return _.setAll(w),h.convertToFoundDocument(h.version,_).setHasLocalMutations(),null}(i,e,t,s):i instanceof zi?function(u,h,m,y){if(!Gu(u.precondition,h))return m;const _=gy(u.fieldTransforms,y,h),w=h.data;return w.setAll(Sv(u)),w.setAll(_),h.convertToFoundDocument(h.version,w).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map(R=>R.field))}(i,e,t,s):function(u,h,m){return Gu(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):m}(i,e,t)}function P1(i,e){let t=null;for(const s of i.fieldTransforms){const o=e.data.field(s.field),u=vv(s.transform,o||null);u!=null&&(t===null&&(t=un.empty()),t.set(s.field,u))}return t||null}function py(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&Do(s,o,(u,h)=>A1(u,h))}(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class pl extends Rc{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class zi extends Rc{constructor(e,t,s,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function Sv(i){const e=new Map;return i.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=i.data.field(t);e.set(t,s)}}),e}function my(i,e,t){const s=new Map;Be(i.length===t.length,32656,{Re:t.length,Ve:i.length});for(let o=0;o<t.length;o++){const u=i[o],h=u.transform,m=e.data.field(u.field);s.set(u.field,I1(h,m,t[o]))}return s}function gy(i,e,t){const s=new Map;for(const o of i){const u=o.transform,h=t.data.field(o.field);s.set(o.field,T1(u,h,e))}return s}class Av extends Rc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class k1 extends Rc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N1{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&R1(u,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Qa(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Qa(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=yv();return this.mutations.forEach(o=>{const u=e.get(o.key),h=u.overlayedDocument;let m=this.applyToLocalView(h,u.mutatedFields);m=t.has(o.key)?null:m;const y=Iv(h,m);y!==null&&s.set(o.key,y),h.isValidDocument()||h.convertToNoDocument(Te.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Ve())}isEqual(e){return this.batchId===e.batchId&&Do(this.mutations,e.mutations,(t,s)=>py(t,s))&&Do(this.baseMutations,e.baseMutations,(t,s)=>py(t,s))}}class Af{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){Be(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let o=function(){return y1}();const u=e.mutations;for(let h=0;h<u.length;h++)o=o.insert(u[h].key,s[h].version);return new Af(e,t,s,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x1{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V1{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _t,be;function D1(i){switch(i){case B.OK:return ve(64938);case B.CANCELLED:case B.UNKNOWN:case B.DEADLINE_EXCEEDED:case B.RESOURCE_EXHAUSTED:case B.INTERNAL:case B.UNAVAILABLE:case B.UNAUTHENTICATED:return!1;case B.INVALID_ARGUMENT:case B.NOT_FOUND:case B.ALREADY_EXISTS:case B.PERMISSION_DENIED:case B.FAILED_PRECONDITION:case B.ABORTED:case B.OUT_OF_RANGE:case B.UNIMPLEMENTED:case B.DATA_LOSS:return!0;default:return ve(15467,{code:i})}}function Cv(i){if(i===void 0)return zr("GRPC error has no .code"),B.UNKNOWN;switch(i){case _t.OK:return B.OK;case _t.CANCELLED:return B.CANCELLED;case _t.UNKNOWN:return B.UNKNOWN;case _t.DEADLINE_EXCEEDED:return B.DEADLINE_EXCEEDED;case _t.RESOURCE_EXHAUSTED:return B.RESOURCE_EXHAUSTED;case _t.INTERNAL:return B.INTERNAL;case _t.UNAVAILABLE:return B.UNAVAILABLE;case _t.UNAUTHENTICATED:return B.UNAUTHENTICATED;case _t.INVALID_ARGUMENT:return B.INVALID_ARGUMENT;case _t.NOT_FOUND:return B.NOT_FOUND;case _t.ALREADY_EXISTS:return B.ALREADY_EXISTS;case _t.PERMISSION_DENIED:return B.PERMISSION_DENIED;case _t.FAILED_PRECONDITION:return B.FAILED_PRECONDITION;case _t.ABORTED:return B.ABORTED;case _t.OUT_OF_RANGE:return B.OUT_OF_RANGE;case _t.UNIMPLEMENTED:return B.UNIMPLEMENTED;case _t.DATA_LOSS:return B.DATA_LOSS;default:return ve(39323,{code:i})}}(be=_t||(_t={}))[be.OK=0]="OK",be[be.CANCELLED=1]="CANCELLED",be[be.UNKNOWN=2]="UNKNOWN",be[be.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",be[be.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",be[be.NOT_FOUND=5]="NOT_FOUND",be[be.ALREADY_EXISTS=6]="ALREADY_EXISTS",be[be.PERMISSION_DENIED=7]="PERMISSION_DENIED",be[be.UNAUTHENTICATED=16]="UNAUTHENTICATED",be[be.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",be[be.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",be[be.ABORTED=10]="ABORTED",be[be.OUT_OF_RANGE=11]="OUT_OF_RANGE",be[be.UNIMPLEMENTED=12]="UNIMPLEMENTED",be[be.INTERNAL=13]="INTERNAL",be[be.UNAVAILABLE=14]="UNAVAILABLE",be[be.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O1(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L1=new xi([4294967295,4294967295],0);function yy(i){const e=O1().encode(i),t=new j_;return t.update(e),new Uint8Array(t.digest())}function _y(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new xi([t,s],0),new xi([o,u],0)]}class Cf{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Ba(`Invalid padding: ${t}`);if(s<0)throw new Ba(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Ba(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Ba(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=xi.fromNumber(this.ge)}ye(e,t,s){let o=e.add(t.multiply(xi.fromNumber(s)));return o.compare(L1)===1&&(o=new xi([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=yy(e),[s,o]=_y(t);for(let u=0;u<this.hashCount;u++){const h=this.ye(s,o,u);if(!this.we(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),h=new Cf(u,o,t);return s.forEach(m=>h.insert(m)),h}insert(e){if(this.ge===0)return;const t=yy(e),[s,o]=_y(t);for(let u=0;u<this.hashCount;u++){const h=this.ye(s,o,u);this.Se(h)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Ba extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(e,t,s,o,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,ml.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Pc(Te.min(),o,new at(xe),Br(),Ve())}}class ml{constructor(e,t,s,o,u){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new ml(s,t,Ve(),Ve(),Ve())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(e,t,s,o){this.be=e,this.removedTargetIds=t,this.key=s,this.De=o}}class Rv{constructor(e,t){this.targetId=e,this.Ce=t}}class Pv{constructor(e,t,s=jt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class vy{constructor(){this.ve=0,this.Fe=Ey(),this.Me=jt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Ve(),t=Ve(),s=Ve();return this.Fe.forEach((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:ve(38017,{changeType:u})}}),new ml(this.Me,this.xe,e,t,s)}qe(){this.Oe=!1,this.Fe=Ey()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Be(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class M1{constructor(e){this.Ge=e,this.ze=new Map,this.je=Br(),this.Je=Fu(),this.He=Fu(),this.Ye=new at(xe)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.We(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:ve(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((s,o)=>{this.rt(o)&&t(o)})}st(e){const t=e.targetId,s=e.Ce.count,o=this.ot(t);if(o){const u=o.target;if(Hd(u))if(s===0){const h=new de(u.path);this.et(t,h,Gt.newNoDocument(h,Te.min()))}else Be(s===1,20013,{expectedCount:s});else{const h=this._t(t);if(h!==s){const m=this.ut(e),y=m?this.ct(m,e,h):1;if(y!==0){this.it(t);const _=y===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,_)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=t;let h,m;try{h=Li(s).toUint8Array()}catch(y){if(y instanceof J_)return Vo("Decoding the base64 bloom filter in existence filter failed ("+y.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw y}try{m=new Cf(h,o,u)}catch(y){return Vo(y instanceof Ba?"BloomFilter error: ":"Applying bloom filter failed: ",y),null}return m.ge===0?null:m}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let o=0;return s.forEach(u=>{const h=this.Ge.ht(),m=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.et(t,u,null),o++)}),o}Tt(e){const t=new Map;this.ze.forEach((u,h)=>{const m=this.ot(h);if(m){if(u.current&&Hd(m.target)){const y=new de(m.target.path);this.It(y).has(h)||this.Et(h,y)||this.et(h,y,Gt.newNoDocument(y,e))}u.Be&&(t.set(h,u.ke()),u.qe())}});let s=Ve();this.He.forEach((u,h)=>{let m=!0;h.forEachWhile(y=>{const _=this.ot(y);return!_||_.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)}),m&&(s=s.add(u))}),this.je.forEach((u,h)=>h.setReadTime(e));const o=new Pc(e,t,this.Ye,this.je,s);return this.je=Br(),this.Je=Fu(),this.He=Fu(),this.Ye=new at(xe),o}Xe(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,s),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const o=this.nt(e);this.Et(e,t)?o.Qe(t,1):o.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new vy,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new Rt(xe),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new Rt(xe),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||ie("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new vy),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Fu(){return new at(de.comparator)}function Ey(){return new at(de.comparator)}const b1={asc:"ASCENDING",desc:"DESCENDING"},F1={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},U1={and:"AND",or:"OR"};class j1{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Kd(i,e){return i.useProto3Json||wc(e)?e:{value:e}}function uc(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function kv(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function z1(i,e){return uc(i,e.toTimestamp())}function fr(i){return Be(!!i,49232),Te.fromTimestamp(function(t){const s=Oi(t);return new tt(s.seconds,s.nanos)}(i))}function Rf(i,e){return Qd(i,e).canonicalString()}function Qd(i,e){const t=function(o){return new Xe(["projects",o.projectId,"databases",o.database])}(i).child("documents");return e===void 0?t:t.child(e)}function Nv(i){const e=Xe.fromString(i);return Be(Lv(e),10190,{key:e.toString()}),e}function Yd(i,e){return Rf(i.databaseId,e.path)}function Cd(i,e){const t=Nv(e);if(t.get(1)!==i.databaseId.projectId)throw new te(B.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new te(B.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new de(Vv(t))}function xv(i,e){return Rf(i.databaseId,e)}function B1(i){const e=Nv(i);return e.length===4?Xe.emptyPath():Vv(e)}function Xd(i){return new Xe(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function Vv(i){return Be(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)}function wy(i,e,t){return{name:Yd(i,e),fields:t.value.mapValue.fields}}function $1(i,e){let t;if("targetChange"in e){e.targetChange;const s=function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:ve(39313,{state:_})}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=function(_,w){return _.useProto3Json?(Be(w===void 0||typeof w=="string",58123),jt.fromBase64String(w||"")):(Be(w===void 0||w instanceof Buffer||w instanceof Uint8Array,16193),jt.fromUint8Array(w||new Uint8Array))}(i,e.targetChange.resumeToken),h=e.targetChange.cause,m=h&&function(_){const w=_.code===void 0?B.UNKNOWN:Cv(_.code);return new te(w,_.message||"")}(h);t=new Pv(s,o,u,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=Cd(i,s.document.name),u=fr(s.document.updateTime),h=s.document.createTime?fr(s.document.createTime):Te.min(),m=new un({mapValue:{fields:s.document.fields}}),y=Gt.newFoundDocument(o,u,h,m),_=s.targetIds||[],w=s.removedTargetIds||[];t=new Ku(_,w,y.key,y)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=Cd(i,s.document),u=s.readTime?fr(s.readTime):Te.min(),h=Gt.newNoDocument(o,u),m=s.removedTargetIds||[];t=new Ku([],m,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=Cd(i,s.document),u=s.removedTargetIds||[];t=new Ku([],u,o,null)}else{if(!("filter"in e))return ve(11601,{Rt:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,h=new V1(o,u),m=s.targetId;t=new Rv(m,h)}}return t}function q1(i,e){let t;if(e instanceof pl)t={update:wy(i,e.key,e.value)};else if(e instanceof Av)t={delete:Yd(i,e.key)};else if(e instanceof zi)t={update:wy(i,e.key,e.data),updateMask:Z1(e.fieldMask)};else{if(!(e instanceof k1))return ve(16599,{Vt:e.type});t={verify:Yd(i,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(u,h){const m=h.transform;if(m instanceof il)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof sl)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof ol)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof lc)return{fieldPath:h.field.canonicalString(),increment:m.Ae};throw ve(20930,{transform:h.transform})}(0,s))),e.precondition.isNone||(t.currentDocument=function(o,u){return u.updateTime!==void 0?{updateTime:z1(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:ve(27497)}(i,e.precondition)),t}function H1(i,e){return i&&i.length>0?(Be(e!==void 0,14353),i.map(t=>function(o,u){let h=o.updateTime?fr(o.updateTime):fr(u);return h.isEqual(Te.min())&&(h=fr(u)),new C1(h,o.transformResults||[])}(t,e))):[]}function W1(i,e){return{documents:[xv(i,e.path)]}}function G1(i,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=xv(i,o);const u=function(_){if(_.length!==0)return Ov(Yn.create(_,"and"))}(e.filters);u&&(t.structuredQuery.where=u);const h=function(_){if(_.length!==0)return _.map(w=>function(C){return{field:So(C.field),direction:Y1(C.dir)}}(w))}(e.orderBy);h&&(t.structuredQuery.orderBy=h);const m=Kd(i,e.limit);return m!==null&&(t.structuredQuery.limit=m),e.startAt&&(t.structuredQuery.startAt=function(_){return{before:_.inclusive,values:_.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(_){return{before:!_.inclusive,values:_.position}}(e.endAt)),{ft:t,parent:o}}function K1(i){let e=B1(i.parent);const t=i.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){Be(s===1,65062);const w=t.from[0];w.allDescendants?o=w.collectionId:e=e.child(w.collectionId)}let u=[];t.where&&(u=function(R){const C=Dv(R);return C instanceof Yn&&lv(C)?C.getFilters():[C]}(t.where));let h=[];t.orderBy&&(h=function(R){return R.map(C=>function(Q){return new rl(Ao(Q.field),function(W){switch(W){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(Q.direction))}(C))}(t.orderBy));let m=null;t.limit&&(m=function(R){let C;return C=typeof R=="object"?R.value:R,wc(C)?null:C}(t.limit));let y=null;t.startAt&&(y=function(R){const C=!!R.before,z=R.values||[];return new ac(z,C)}(t.startAt));let _=null;return t.endAt&&(_=function(R){const C=!R.before,z=R.values||[];return new ac(z,C)}(t.endAt)),d1(e,o,h,u,m,"F",y,_)}function Q1(i,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ve(28987,{purpose:o})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Dv(i){return i.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Ao(t.unaryFilter.field);return vt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=Ao(t.unaryFilter.field);return vt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=Ao(t.unaryFilter.field);return vt.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=Ao(t.unaryFilter.field);return vt.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ve(61313);default:return ve(60726)}}(i):i.fieldFilter!==void 0?function(t){return vt.create(Ao(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ve(58110);default:return ve(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(i):i.compositeFilter!==void 0?function(t){return Yn.create(t.compositeFilter.filters.map(s=>Dv(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return ve(1026)}}(t.compositeFilter.op))}(i):ve(30097,{filter:i})}function Y1(i){return b1[i]}function X1(i){return F1[i]}function J1(i){return U1[i]}function So(i){return{fieldPath:i.canonicalString()}}function Ao(i){return Ut.fromServerFormat(i.fieldPath)}function Ov(i){return i instanceof vt?function(t){if(t.op==="=="){if(ly(t.value))return{unaryFilter:{field:So(t.field),op:"IS_NAN"}};if(ay(t.value))return{unaryFilter:{field:So(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(ly(t.value))return{unaryFilter:{field:So(t.field),op:"IS_NOT_NAN"}};if(ay(t.value))return{unaryFilter:{field:So(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:So(t.field),op:X1(t.op),value:t.value}}}(i):i instanceof Yn?function(t){const s=t.getFilters().map(o=>Ov(o));return s.length===1?s[0]:{compositeFilter:{op:J1(t.op),filters:s}}}(i):ve(54877,{filter:i})}function Z1(i){const e=[];return i.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Lv(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e,t,s,o,u=Te.min(),h=Te.min(),m=jt.EMPTY_BYTE_STRING,y=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=m,this.expectedCount=y}withSequenceNumber(e){return new Ri(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ri(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ri(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ri(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eA{constructor(e){this.yt=e}}function tA(i){const e=K1({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?Gd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA{constructor(){this.Cn=new rA}addToCollectionParentIndex(e,t){return this.Cn.add(t),q.resolve()}getCollectionParents(e,t){return q.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return q.resolve()}deleteFieldIndex(e,t){return q.resolve()}deleteAllFieldIndexes(e){return q.resolve()}createTargetIndexes(e,t){return q.resolve()}getDocumentsMatchingTarget(e,t){return q.resolve(null)}getIndexType(e,t){return q.resolve(0)}getFieldIndexes(e,t){return q.resolve([])}getNextCollectionGroupToUpdate(e){return q.resolve(null)}getMinOffset(e,t){return q.resolve(Di.min())}getMinOffsetFromCollectionGroup(e,t){return q.resolve(Di.min())}updateCollectionGroup(e,t,s){return q.resolve()}updateIndexEntries(e,t){return q.resolve()}}class rA{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new Rt(Xe.comparator),u=!o.has(s);return this.index[t]=o.add(s),u}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new Rt(Xe.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ty={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Mv=41943040;class ln{static withCacheSize(e){return new ln(e,ln.DEFAULT_COLLECTION_PERCENTILE,ln.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ln.DEFAULT_COLLECTION_PERCENTILE=10,ln.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ln.DEFAULT=new ln(Mv,ln.DEFAULT_COLLECTION_PERCENTILE,ln.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ln.DISABLED=new ln(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Mo(0)}static cr(){return new Mo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iy="LruGarbageCollector",iA=1048576;function Sy([i,e],[t,s]){const o=xe(i,t);return o===0?xe(e,s):o}class sA{constructor(e){this.Ir=e,this.buffer=new Rt(Sy),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();Sy(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class oA{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){ie(Iy,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){$o(t)?ie(Iy,"Ignoring IndexedDB error during garbage collection: ",t):await Bo(t)}await this.Vr(3e5)})}}class aA{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return q.resolve(Ec.ce);const s=new sA(t);return this.mr.forEachTarget(e,o=>s.Ar(o.sequenceNumber)).next(()=>this.mr.pr(e,o=>s.Ar(o))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.mr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ie("LruGarbageCollector","Garbage collection skipped; disabled"),q.resolve(Ty)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(ie("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ty):this.yr(e,t))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let s,o,u,h,m,y,_;const w=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(R=>(R>this.params.maximumSequenceNumbersToCollect?(ie("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${R}`),o=this.params.maximumSequenceNumbersToCollect):o=R,h=Date.now(),this.nthSequenceNumber(e,o))).next(R=>(s=R,m=Date.now(),this.removeTargets(e,s,t))).next(R=>(u=R,y=Date.now(),this.removeOrphanedDocuments(e,s))).next(R=>(_=Date.now(),To()<=Ne.DEBUG&&ie("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-w}ms
	Determined least recently used ${o} in `+(m-h)+`ms
	Removed ${u} targets in `+(y-m)+`ms
	Removed ${R} documents in `+(_-y)+`ms
Total Duration: ${_-w}ms`),q.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:R})))}}function lA(i,e){return new aA(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uA{constructor(){this.changes=new Ps(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Gt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?q.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cA{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hA{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(s=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(s!==null&&Qa(s.mutation,o,yn.empty(),tt.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,Ve()).next(()=>s))}getLocalViewOfDocuments(e,t,s=Ve()){const o=_s();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,s).next(u=>{let h=za();return u.forEach((m,y)=>{h=h.insert(m,y.overlayedDocument)}),h}))}getOverlayedDocuments(e,t){const s=_s();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,Ve()))}populateOverlays(e,t,s){const o=[];return s.forEach(u=>{t.has(u)||o.push(u)}),this.documentOverlayCache.getOverlays(e,o).next(u=>{u.forEach((h,m)=>{t.set(h,m)})})}computeViews(e,t,s,o){let u=Br();const h=Ka(),m=function(){return Ka()}();return t.forEach((y,_)=>{const w=s.get(_.key);o.has(_.key)&&(w===void 0||w.mutation instanceof zi)?u=u.insert(_.key,_):w!==void 0?(h.set(_.key,w.mutation.getFieldMask()),Qa(w.mutation,_,w.mutation.getFieldMask(),tt.now())):h.set(_.key,yn.empty())}),this.recalculateAndSaveOverlays(e,u).next(y=>(y.forEach((_,w)=>h.set(_,w)),t.forEach((_,w)=>m.set(_,new cA(w,h.get(_)??null))),m))}recalculateAndSaveOverlays(e,t){const s=Ka();let o=new at((h,m)=>h-m),u=Ve();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(h=>{for(const m of h)m.keys().forEach(y=>{const _=t.get(y);if(_===null)return;let w=s.get(y)||yn.empty();w=m.applyToLocalView(_,w),s.set(y,w);const R=(o.get(m.batchId)||Ve()).add(y);o=o.insert(m.batchId,R)})}).next(()=>{const h=[],m=o.getReverseIterator();for(;m.hasNext();){const y=m.getNext(),_=y.key,w=y.value,R=yv();w.forEach(C=>{if(!u.has(C)){const z=Iv(t.get(C),s.get(C));z!==null&&R.set(C,z),u=u.add(C)}}),h.push(this.documentOverlayCache.saveOverlays(e,_,R))}return q.waitFor(h)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,o){return function(h){return de.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):dv(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next(u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-u.size):q.resolve(_s());let m=Za,y=u;return h.next(_=>q.forEach(_,(w,R)=>(m<R.largestBatchId&&(m=R.largestBatchId),u.get(w)?q.resolve():this.remoteDocumentCache.getEntry(e,w).next(C=>{y=y.insert(w,C)}))).next(()=>this.populateOverlays(e,_,u)).next(()=>this.computeViews(e,y,_,Ve())).next(w=>({batchId:m,changes:gv(w)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new de(t)).next(s=>{let o=za();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const u=t.collectionGroup;let h=za();return this.indexManager.getCollectionParents(e,u).next(m=>q.forEach(m,y=>{const _=function(R,C){return new qo(C,null,R.explicitOrderBy.slice(),R.filters.slice(),R.limit,R.limitType,R.startAt,R.endAt)}(t,y.child(u));return this.getDocumentsMatchingCollectionQuery(e,_,s,o).next(w=>{w.forEach((R,C)=>{h=h.insert(R,C)})})}).next(()=>h))}getDocumentsMatchingCollectionQuery(e,t,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,o))).next(h=>{u.forEach((y,_)=>{const w=_.getKey();h.get(w)===null&&(h=h.insert(w,Gt.newInvalidDocument(w)))});let m=za();return h.forEach((y,_)=>{const w=u.get(y);w!==void 0&&Qa(w.mutation,_,yn.empty(),tt.now()),Ac(t,_)&&(m=m.insert(y,_))}),m})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dA{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return q.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:fr(o.createTime)}}(t)),q.resolve()}getNamedQuery(e,t){return q.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,function(o){return{name:o.name,query:tA(o.bundledQuery),readTime:fr(o.readTime)}}(t)),q.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fA{constructor(){this.overlays=new at(de.comparator),this.qr=new Map}getOverlay(e,t){return q.resolve(this.overlays.get(t))}getOverlays(e,t){const s=_s();return q.forEach(t,o=>this.getOverlay(e,o).next(u=>{u!==null&&s.set(o,u)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((o,u)=>{this.St(e,t,u)}),q.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.qr.get(s);return o!==void 0&&(o.forEach(u=>this.overlays=this.overlays.remove(u)),this.qr.delete(s)),q.resolve()}getOverlaysForCollection(e,t,s){const o=_s(),u=t.length+1,h=new de(t.child("")),m=this.overlays.getIteratorFrom(h);for(;m.hasNext();){const y=m.getNext().value,_=y.getKey();if(!t.isPrefixOf(_.path))break;_.path.length===u&&y.largestBatchId>s&&o.set(y.getKey(),y)}return q.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let u=new at((_,w)=>_-w);const h=this.overlays.getIterator();for(;h.hasNext();){const _=h.getNext().value;if(_.getKey().getCollectionGroup()===t&&_.largestBatchId>s){let w=u.get(_.largestBatchId);w===null&&(w=_s(),u=u.insert(_.largestBatchId,w)),w.set(_.getKey(),_)}}const m=_s(),y=u.getIterator();for(;y.hasNext()&&(y.getNext().value.forEach((_,w)=>m.set(_,w)),!(m.size()>=o)););return q.resolve(m)}St(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.qr.get(o.largestBatchId).delete(s.key);this.qr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new x1(t,s));let u=this.qr.get(t);u===void 0&&(u=Ve(),this.qr.set(t,u)),this.qr.set(t,u.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pA{constructor(){this.sessionToken=jt.EMPTY_BYTE_STRING}getSessionToken(e){return q.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,q.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{constructor(){this.Qr=new Rt(Vt.$r),this.Ur=new Rt(Vt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const s=new Vt(e,t);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.Gr(new Vt(e,t))}zr(e,t){e.forEach(s=>this.removeReference(s,t))}jr(e){const t=new de(new Xe([])),s=new Vt(t,e),o=new Vt(t,e+1),u=[];return this.Ur.forEachInRange([s,o],h=>{this.Gr(h),u.push(h.key)}),u}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new de(new Xe([])),s=new Vt(t,e),o=new Vt(t,e+1);let u=Ve();return this.Ur.forEachInRange([s,o],h=>{u=u.add(h.key)}),u}containsKey(e){const t=new Vt(e,0),s=this.Qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Vt{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return de.comparator(e.key,t.key)||xe(e.Yr,t.Yr)}static Kr(e,t){return xe(e.Yr,t.Yr)||de.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mA{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new Rt(Vt.$r)}checkEmpty(e){return q.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const u=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new N1(u,t,s,o);this.mutationQueue.push(h);for(const m of o)this.Zr=this.Zr.add(new Vt(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return q.resolve(h)}lookupMutationBatch(e,t){return q.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.ei(s),u=o<0?0:o;return q.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return q.resolve(this.mutationQueue.length===0?vf:this.tr-1)}getAllMutationBatches(e){return q.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Vt(t,0),o=new Vt(t,Number.POSITIVE_INFINITY),u=[];return this.Zr.forEachInRange([s,o],h=>{const m=this.Xr(h.Yr);u.push(m)}),q.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Rt(xe);return t.forEach(o=>{const u=new Vt(o,0),h=new Vt(o,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([u,h],m=>{s=s.add(m.Yr)})}),q.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let u=s;de.isDocumentKey(u)||(u=u.child(""));const h=new Vt(new de(u),0);let m=new Rt(xe);return this.Zr.forEachWhile(y=>{const _=y.key.path;return!!s.isPrefixOf(_)&&(_.length===o&&(m=m.add(y.Yr)),!0)},h),q.resolve(this.ti(m))}ti(e){const t=[];return e.forEach(s=>{const o=this.Xr(s);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){Be(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return q.forEach(t.mutations,o=>{const u=new Vt(o.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.Zr=s})}ir(e){}containsKey(e,t){const s=new Vt(t,0),o=this.Zr.firstAfterOrEqual(s);return q.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,q.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gA{constructor(e){this.ri=e,this.docs=function(){return new at(de.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),u=o?o.size:0,h=this.ri(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return q.resolve(s?s.document.mutableCopy():Gt.newInvalidDocument(t))}getEntries(e,t){let s=Br();return t.forEach(o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():Gt.newInvalidDocument(o))}),q.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let u=Br();const h=t.path,m=new de(h.child("__id-9223372036854775808__")),y=this.docs.getIteratorFrom(m);for(;y.hasNext();){const{key:_,value:{document:w}}=y.getNext();if(!h.isPrefixOf(_.path))break;_.path.length>h.length+1||qS($S(w),s)<=0||(o.has(w.key)||Ac(t,w))&&(u=u.insert(w.key,w.mutableCopy()))}return q.resolve(u)}getAllFromCollectionGroup(e,t,s,o){ve(9500)}ii(e,t){return q.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new yA(this)}getSize(e){return q.resolve(this.size)}}class yA extends uA{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?t.push(this.Nr.addEntry(e,o)):this.Nr.removeEntry(s)}),q.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _A{constructor(e){this.persistence=e,this.si=new Ps(t=>Tf(t),If),this.lastRemoteSnapshotVersion=Te.min(),this.highestTargetId=0,this.oi=0,this._i=new Pf,this.targetCount=0,this.ai=Mo.ur()}forEachTarget(e,t){return this.si.forEach((s,o)=>t(o)),q.resolve()}getLastRemoteSnapshotVersion(e){return q.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return q.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),q.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.oi&&(this.oi=t),q.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new Mo(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,q.resolve()}updateTargetData(e,t){return this.Pr(t),q.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,q.resolve()}removeTargets(e,t,s){let o=0;const u=[];return this.si.forEach((h,m)=>{m.sequenceNumber<=t&&s.get(m.targetId)===null&&(this.si.delete(h),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)}),q.waitFor(u).next(()=>o)}getTargetCount(e){return q.resolve(this.targetCount)}getTargetData(e,t){const s=this.si.get(t)||null;return q.resolve(s)}addMatchingKeys(e,t,s){return this._i.Wr(t,s),q.resolve()}removeMatchingKeys(e,t,s){this._i.zr(t,s);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach(h=>{u.push(o.markPotentiallyOrphaned(e,h))}),q.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),q.resolve()}getMatchingKeysForTargetId(e,t){const s=this._i.Hr(t);return q.resolve(s)}containsKey(e,t){return q.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bv{constructor(e,t){this.ui={},this.overlays={},this.ci=new Ec(0),this.li=!1,this.li=!0,this.hi=new pA,this.referenceDelegate=e(this),this.Pi=new _A(this),this.indexManager=new nA,this.remoteDocumentCache=function(o){return new gA(o)}(s=>this.referenceDelegate.Ti(s)),this.serializer=new eA(t),this.Ii=new dA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new fA,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ui[e.toKey()];return s||(s=new mA(t,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,s){ie("MemoryPersistence","Starting transaction:",e);const o=new vA(this.ci.next());return this.referenceDelegate.Ei(),s(o).next(u=>this.referenceDelegate.di(o).next(()=>u)).toPromise().then(u=>(o.raiseOnCommittedEvent(),u))}Ai(e,t){return q.or(Object.values(this.ui).map(s=>()=>s.containsKey(e,t)))}}class vA extends WS{constructor(e){super(),this.currentSequenceNumber=e}}class kf{constructor(e){this.persistence=e,this.Ri=new Pf,this.Vi=null}static mi(e){return new kf(e)}get fi(){if(this.Vi)return this.Vi;throw ve(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.fi.delete(s.toString()),q.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.fi.add(s.toString()),q.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),q.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach(o=>this.fi.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(u=>this.fi.add(u.toString()))}).next(()=>s.removeTargetData(e,t))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return q.forEach(this.fi,s=>{const o=de.fromPath(s);return this.gi(e,o).next(u=>{u||t.removeEntry(o,Te.min())})}).next(()=>(this.Vi=null,t.apply(e)))}updateLimboDocument(e,t){return this.gi(e,t).next(s=>{s?this.fi.delete(t.toString()):this.fi.add(t.toString())})}Ti(e){return 0}gi(e,t){return q.or([()=>q.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class cc{constructor(e,t){this.persistence=e,this.pi=new Ps(s=>QS(s.path),(s,o)=>s.isEqual(o)),this.garbageCollector=lA(this,t)}static mi(e,t){return new cc(e,t)}Ei(){}di(e){return q.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(o=>s+o))}wr(e){let t=0;return this.pr(e,s=>{t++}).next(()=>t)}pr(e,t){return q.forEach(this.pi,(s,o)=>this.br(e,s,o).next(u=>u?q.resolve():t(o)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ii(e,h=>this.br(e,h,t).next(m=>{m||(s++,u.removeEntry(h,Te.min()))})).next(()=>u.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),q.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),q.resolve()}removeReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),q.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),q.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Hu(e.data.value)),t}br(e,t,s){return q.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.pi.get(t);return q.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Es=s,this.ds=o}static As(e,t){let s=Ve(),o=Ve();for(const u of t.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new Nf(e,t.fromCache,s,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wA{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return Qw()?8:GS(Kt())>0?6:4}()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,o){const u={result:null};return this.ys(e,t).next(h=>{u.result=h}).next(()=>{if(!u.result)return this.ws(e,t,o,s).next(h=>{u.result=h})}).next(()=>{if(u.result)return;const h=new EA;return this.Ss(e,t,h).next(m=>{if(u.result=m,this.Vs)return this.bs(e,t,h,m.size)})}).next(()=>u.result)}bs(e,t,s,o){return s.documentReadCount<this.fs?(To()<=Ne.DEBUG&&ie("QueryEngine","SDK will not create cache indexes for query:",Io(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),q.resolve()):(To()<=Ne.DEBUG&&ie("QueryEngine","Query:",Io(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.gs*o?(To()<=Ne.DEBUG&&ie("QueryEngine","The SDK decides to create cache indexes for query:",Io(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,dr(t))):q.resolve())}ys(e,t){if(dy(t))return q.resolve(null);let s=dr(t);return this.indexManager.getIndexType(e,s).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=Gd(t,null,"F"),s=dr(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(u=>{const h=Ve(...u);return this.ps.getDocuments(e,h).next(m=>this.indexManager.getMinOffset(e,s).next(y=>{const _=this.Ds(t,m);return this.Cs(t,_,h,y.readTime)?this.ys(e,Gd(t,null,"F")):this.vs(e,_,t,y)}))})))}ws(e,t,s,o){return dy(t)||o.isEqual(Te.min())?q.resolve(null):this.ps.getDocuments(e,s).next(u=>{const h=this.Ds(t,u);return this.Cs(t,h,s,o)?q.resolve(null):(To()<=Ne.DEBUG&&ie("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Io(t)),this.vs(e,h,t,BS(o,Za)).next(m=>m))})}Ds(e,t){let s=new Rt(pv(e));return t.forEach((o,u)=>{Ac(e,u)&&(s=s.add(u))}),s}Cs(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}Ss(e,t,s){return To()<=Ne.DEBUG&&ie("QueryEngine","Using full collection scan to execute query:",Io(t)),this.ps.getDocumentsMatchingQuery(e,t,Di.min(),s)}vs(e,t,s,o){return this.ps.getDocumentsMatchingQuery(e,s,o).next(u=>(t.forEach(h=>{u=u.insert(h.key,h)}),u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xf="LocalStore",TA=3e8;class IA{constructor(e,t,s,o){this.persistence=e,this.Fs=t,this.serializer=o,this.Ms=new at(xe),this.xs=new Ps(u=>Tf(u),If),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new hA(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ms))}}function SA(i,e,t,s){return new IA(i,e,t,s)}async function Fv(i,e){const t=Ie(i);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next(u=>(o=u,t.Bs(e),t.mutationQueue.getAllMutationBatches(s))).next(u=>{const h=[],m=[];let y=Ve();for(const _ of o){h.push(_.batchId);for(const w of _.mutations)y=y.add(w.key)}for(const _ of u){m.push(_.batchId);for(const w of _.mutations)y=y.add(w.key)}return t.localDocuments.getDocuments(s,y).next(_=>({Ls:_,removedBatchIds:h,addedBatchIds:m}))})})}function AA(i,e){const t=Ie(i);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const o=e.batch.keys(),u=t.Ns.newChangeBuffer({trackRemovals:!0});return function(m,y,_,w){const R=_.batch,C=R.keys();let z=q.resolve();return C.forEach(Q=>{z=z.next(()=>w.getEntry(y,Q)).next(J=>{const W=_.docVersions.get(Q);Be(W!==null,48541),J.version.compareTo(W)<0&&(R.applyToRemoteDocument(J,_),J.isValidDocument()&&(J.setReadTime(_.commitVersion),w.addEntry(J)))})}),z.next(()=>m.mutationQueue.removeMutationBatch(y,R))}(t,s,e,u).next(()=>u.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(m){let y=Ve();for(let _=0;_<m.mutationResults.length;++_)m.mutationResults[_].transformResults.length>0&&(y=y.add(m.batch.mutations[_].key));return y}(e))).next(()=>t.localDocuments.getDocuments(s,o))})}function Uv(i){const e=Ie(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Pi.getLastRemoteSnapshotVersion(t))}function CA(i,e){const t=Ie(i),s=e.snapshotVersion;let o=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",u=>{const h=t.Ns.newChangeBuffer({trackRemovals:!0});o=t.Ms;const m=[];e.targetChanges.forEach((w,R)=>{const C=o.get(R);if(!C)return;m.push(t.Pi.removeMatchingKeys(u,w.removedDocuments,R).next(()=>t.Pi.addMatchingKeys(u,w.addedDocuments,R)));let z=C.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(R)!==null?z=z.withResumeToken(jt.EMPTY_BYTE_STRING,Te.min()).withLastLimboFreeSnapshotVersion(Te.min()):w.resumeToken.approximateByteSize()>0&&(z=z.withResumeToken(w.resumeToken,s)),o=o.insert(R,z),function(J,W,fe){return J.resumeToken.approximateByteSize()===0||W.snapshotVersion.toMicroseconds()-J.snapshotVersion.toMicroseconds()>=TA?!0:fe.addedDocuments.size+fe.modifiedDocuments.size+fe.removedDocuments.size>0}(C,z,w)&&m.push(t.Pi.updateTargetData(u,z))});let y=Br(),_=Ve();if(e.documentUpdates.forEach(w=>{e.resolvedLimboDocuments.has(w)&&m.push(t.persistence.referenceDelegate.updateLimboDocument(u,w))}),m.push(RA(u,h,e.documentUpdates).next(w=>{y=w.ks,_=w.qs})),!s.isEqual(Te.min())){const w=t.Pi.getLastRemoteSnapshotVersion(u).next(R=>t.Pi.setTargetsMetadata(u,u.currentSequenceNumber,s));m.push(w)}return q.waitFor(m).next(()=>h.apply(u)).next(()=>t.localDocuments.getLocalViewOfDocuments(u,y,_)).next(()=>y)}).then(u=>(t.Ms=o,u))}function RA(i,e,t){let s=Ve(),o=Ve();return t.forEach(u=>s=s.add(u)),e.getEntries(i,s).next(u=>{let h=Br();return t.forEach((m,y)=>{const _=u.get(m);y.isFoundDocument()!==_.isFoundDocument()&&(o=o.add(m)),y.isNoDocument()&&y.version.isEqual(Te.min())?(e.removeEntry(m,y.readTime),h=h.insert(m,y)):!_.isValidDocument()||y.version.compareTo(_.version)>0||y.version.compareTo(_.version)===0&&_.hasPendingWrites?(e.addEntry(y),h=h.insert(m,y)):ie(xf,"Ignoring outdated watch update for ",m,". Current version:",_.version," Watch version:",y.version)}),{ks:h,qs:o}})}function PA(i,e){const t=Ie(i);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=vf),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function kA(i,e){const t=Ie(i);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let o;return t.Pi.getTargetData(s,e).next(u=>u?(o=u,q.resolve(o)):t.Pi.allocateTargetId(s).next(h=>(o=new Ri(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.Pi.addTargetData(s,o).next(()=>o))))}).then(s=>{const o=t.Ms.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(s.targetId,s),t.xs.set(e,s.targetId)),s})}async function Jd(i,e,t){const s=Ie(i),o=s.Ms.get(e),u=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",u,h=>s.persistence.referenceDelegate.removeTarget(h,o))}catch(h){if(!$o(h))throw h;ie(xf,`Failed to update sequence numbers for target ${e}: ${h}`)}s.Ms=s.Ms.remove(e),s.xs.delete(o.target)}function Ay(i,e,t){const s=Ie(i);let o=Te.min(),u=Ve();return s.persistence.runTransaction("Execute query","readwrite",h=>function(y,_,w){const R=Ie(y),C=R.xs.get(w);return C!==void 0?q.resolve(R.Ms.get(C)):R.Pi.getTargetData(_,w)}(s,h,dr(e)).next(m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(h,m.targetId).next(y=>{u=y})}).next(()=>s.Fs.getDocumentsMatchingQuery(h,e,t?o:Te.min(),t?u:Ve())).next(m=>(NA(s,p1(e),m),{documents:m,Qs:u})))}function NA(i,e,t){let s=i.Os.get(e)||Te.min();t.forEach((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)}),i.Os.set(e,s)}class Cy{constructor(){this.activeTargetIds=E1()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class xA{constructor(){this.Mo=new Cy,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,s){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Cy,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VA{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ry="ConnectivityMonitor";class Py{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){ie(Ry,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){ie(Ry,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uu=null;function Zd(){return Uu===null?Uu=function(){return 268435456+Math.round(2147483648*Math.random())}():Uu++,"0x"+Uu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rd="RestConnection",DA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class OA{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${s}/databases/${o}`,this.Wo=this.databaseId.database===sc?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Go(e,t,s,o,u){const h=Zd(),m=this.zo(e,t.toUriEncodedString());ie(Rd,`Sending RPC '${e}' ${h}:`,m,s);const y={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(y,o,u);const{host:_}=new URL(m),w=Fo(_);return this.Jo(e,m,y,s,w).then(R=>(ie(Rd,`Received RPC '${e}' ${h}: `,R),R),R=>{throw Vo(Rd,`RPC '${e}' ${h} failed with error: `,R,"url: ",m,"request:",s),R})}Ho(e,t,s,o,u,h){return this.Go(e,t,s,o,u)}jo(e,t,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+zo}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((o,u)=>e[u]=o),s&&s.headers.forEach((o,u)=>e[u]=o)}zo(e,t){const s=DA[e];return`${this.Uo}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LA{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ht="WebChannelConnection";class MA extends OA{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,s,o,u){const h=Zd();return new Promise((m,y)=>{const _=new z_;_.setWithCredentials(!0),_.listenOnce(B_.COMPLETE,()=>{try{switch(_.getLastErrorCode()){case qu.NO_ERROR:const R=_.getResponseJson();ie(Ht,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(R)),m(R);break;case qu.TIMEOUT:ie(Ht,`RPC '${e}' ${h} timed out`),y(new te(B.DEADLINE_EXCEEDED,"Request time out"));break;case qu.HTTP_ERROR:const C=_.getStatus();if(ie(Ht,`RPC '${e}' ${h} failed with status:`,C,"response text:",_.getResponseText()),C>0){let z=_.getResponseJson();Array.isArray(z)&&(z=z[0]);const Q=z?.error;if(Q&&Q.status&&Q.message){const J=function(fe){const ge=fe.toLowerCase().replace(/_/g,"-");return Object.values(B).indexOf(ge)>=0?ge:B.UNKNOWN}(Q.status);y(new te(J,Q.message))}else y(new te(B.UNKNOWN,"Server responded with status "+_.getStatus()))}else y(new te(B.UNAVAILABLE,"Connection failed."));break;default:ve(9055,{l_:e,streamId:h,h_:_.getLastErrorCode(),P_:_.getLastError()})}}finally{ie(Ht,`RPC '${e}' ${h} completed.`)}});const w=JSON.stringify(o);ie(Ht,`RPC '${e}' ${h} sending request:`,o),_.send(t,"POST",w,s,15)})}T_(e,t,s){const o=Zd(),u=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=H_(),m=q_(),y={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},_=this.longPollingOptions.timeoutSeconds;_!==void 0&&(y.longPollingTimeout=Math.round(1e3*_)),this.useFetchStreams&&(y.useFetchStreams=!0),this.jo(y.initMessageHeaders,t,s),y.encodeInitMessageHeaders=!0;const w=u.join("");ie(Ht,`Creating RPC '${e}' stream ${o}: ${w}`,y);const R=h.createWebChannel(w,y);this.I_(R);let C=!1,z=!1;const Q=new LA({Yo:W=>{z?ie(Ht,`Not sending because RPC '${e}' stream ${o} is closed:`,W):(C||(ie(Ht,`Opening RPC '${e}' stream ${o} transport.`),R.open(),C=!0),ie(Ht,`RPC '${e}' stream ${o} sending:`,W),R.send(W))},Zo:()=>R.close()}),J=(W,fe,ge)=>{W.listen(fe,ye=>{try{ge(ye)}catch(Pe){setTimeout(()=>{throw Pe},0)}})};return J(R,ja.EventType.OPEN,()=>{z||(ie(Ht,`RPC '${e}' stream ${o} transport opened.`),Q.o_())}),J(R,ja.EventType.CLOSE,()=>{z||(z=!0,ie(Ht,`RPC '${e}' stream ${o} transport closed`),Q.a_(),this.E_(R))}),J(R,ja.EventType.ERROR,W=>{z||(z=!0,Vo(Ht,`RPC '${e}' stream ${o} transport errored. Name:`,W.name,"Message:",W.message),Q.a_(new te(B.UNAVAILABLE,"The operation could not be completed")))}),J(R,ja.EventType.MESSAGE,W=>{if(!z){const fe=W.data[0];Be(!!fe,16349);const ge=fe,ye=ge?.error||ge[0]?.error;if(ye){ie(Ht,`RPC '${e}' stream ${o} received error:`,ye);const Pe=ye.status;let Ke=function(T){const A=_t[T];if(A!==void 0)return Cv(A)}(Pe),Ce=ye.message;Ke===void 0&&(Ke=B.INTERNAL,Ce="Unknown error status: "+Pe+" with message "+ye.message),z=!0,Q.a_(new te(Ke,Ce)),R.close()}else ie(Ht,`RPC '${e}' stream ${o} received:`,fe),Q.u_(fe)}}),J(m,$_.STAT_EVENT,W=>{W.stat===jd.PROXY?ie(Ht,`RPC '${e}' stream ${o} detected buffering proxy`):W.stat===jd.NOPROXY&&ie(Ht,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{Q.__()},0),Q}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(t=>t===e)}}function Pd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kc(i){return new j1(i,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jv{constructor(e,t,s=1e3,o=1.5,u=6e4){this.Mi=e,this.timerId=t,this.d_=s,this.A_=o,this.R_=u,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),o=Math.max(0,t-s);o>0&&ie("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,o,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ky="PersistentStream";class zv{constructor(e,t,s,o,u,h,m,y){this.Mi=e,this.S_=s,this.b_=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=m,this.listener=y,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new jv(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===B.RESOURCE_EXHAUSTED?(zr(t.toString()),zr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===B.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.D_===t&&this.G_(s,o)},s=>{e(()=>{const o=new te(B.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(o)})})}G_(e,t){const s=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo(()=>{s(()=>this.listener.Xo())}),this.stream.t_(()=>{s(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(o=>{s(()=>this.z_(o))}),this.stream.onMessage(o=>{s(()=>++this.F_==1?this.J_(o):this.onNext(o))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return ie(ky,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget(()=>this.D_===e?t():(ie(ky,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class bA extends zv{constructor(e,t,s,o,u,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=$1(this.serializer,e),s=function(u){if(!("targetChange"in u))return Te.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?Te.min():h.readTime?fr(h.readTime):Te.min()}(e);return this.listener.H_(t,s)}Y_(e){const t={};t.database=Xd(this.serializer),t.addTarget=function(u,h){let m;const y=h.target;if(m=Hd(y)?{documents:W1(u,y)}:{query:G1(u,y).ft},m.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){m.resumeToken=kv(u,h.resumeToken);const _=Kd(u,h.expectedCount);_!==null&&(m.expectedCount=_)}else if(h.snapshotVersion.compareTo(Te.min())>0){m.readTime=uc(u,h.snapshotVersion.toTimestamp());const _=Kd(u,h.expectedCount);_!==null&&(m.expectedCount=_)}return m}(this.serializer,e);const s=Q1(this.serializer,e);s&&(t.labels=s),this.q_(t)}Z_(e){const t={};t.database=Xd(this.serializer),t.removeTarget=e,this.q_(t)}}class FA extends zv{constructor(e,t,s,o,u,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return Be(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Be(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Be(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=H1(e.writeResults,e.commitTime),s=fr(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=Xd(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>q1(this.serializer,s))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UA{}class jA extends UA{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new te(B.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,h])=>this.connection.Go(e,Qd(t,s),o,u,h)).catch(u=>{throw u.name==="FirebaseError"?(u.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new te(B.UNKNOWN,u.toString())})}Ho(e,t,s,o,u){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,m])=>this.connection.Ho(e,Qd(t,s),o,h,m,u)).catch(h=>{throw h.name==="FirebaseError"?(h.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new te(B.UNKNOWN,h.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class zA{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(zr(t),this.aa=!1):ie("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cs="RemoteStore";class BA{constructor(e,t,s,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=u,this.Aa.Oo(h=>{s.enqueueAndForget(async()=>{ks(this)&&(ie(Cs,"Restarting streams for network reachability change."),await async function(y){const _=Ie(y);_.Ea.add(4),await gl(_),_.Ra.set("Unknown"),_.Ea.delete(4),await Nc(_)}(this))})}),this.Ra=new zA(s,o)}}async function Nc(i){if(ks(i))for(const e of i.da)await e(!0)}async function gl(i){for(const e of i.da)await e(!1)}function Bv(i,e){const t=Ie(i);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Lf(t)?Of(t):Ho(t).O_()&&Df(t,e))}function Vf(i,e){const t=Ie(i),s=Ho(t);t.Ia.delete(e),s.O_()&&$v(t,e),t.Ia.size===0&&(s.O_()?s.L_():ks(t)&&t.Ra.set("Unknown"))}function Df(i,e){if(i.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Te.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Ho(i).Y_(e)}function $v(i,e){i.Va.Ue(e),Ho(i).Z_(e)}function Of(i){i.Va=new M1({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),At:e=>i.Ia.get(e)||null,ht:()=>i.datastore.serializer.databaseId}),Ho(i).start(),i.Ra.ua()}function Lf(i){return ks(i)&&!Ho(i).x_()&&i.Ia.size>0}function ks(i){return Ie(i).Ea.size===0}function qv(i){i.Va=void 0}async function $A(i){i.Ra.set("Online")}async function qA(i){i.Ia.forEach((e,t)=>{Df(i,e)})}async function HA(i,e){qv(i),Lf(i)?(i.Ra.ha(e),Of(i)):i.Ra.set("Unknown")}async function WA(i,e,t){if(i.Ra.set("Online"),e instanceof Pv&&e.state===2&&e.cause)try{await async function(o,u){const h=u.cause;for(const m of u.targetIds)o.Ia.has(m)&&(await o.remoteSyncer.rejectListen(m,h),o.Ia.delete(m),o.Va.removeTarget(m))}(i,e)}catch(s){ie(Cs,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await hc(i,s)}else if(e instanceof Ku?i.Va.Ze(e):e instanceof Rv?i.Va.st(e):i.Va.tt(e),!t.isEqual(Te.min()))try{const s=await Uv(i.localStore);t.compareTo(s)>=0&&await function(u,h){const m=u.Va.Tt(h);return m.targetChanges.forEach((y,_)=>{if(y.resumeToken.approximateByteSize()>0){const w=u.Ia.get(_);w&&u.Ia.set(_,w.withResumeToken(y.resumeToken,h))}}),m.targetMismatches.forEach((y,_)=>{const w=u.Ia.get(y);if(!w)return;u.Ia.set(y,w.withResumeToken(jt.EMPTY_BYTE_STRING,w.snapshotVersion)),$v(u,y);const R=new Ri(w.target,y,_,w.sequenceNumber);Df(u,R)}),u.remoteSyncer.applyRemoteEvent(m)}(i,t)}catch(s){ie(Cs,"Failed to raise snapshot:",s),await hc(i,s)}}async function hc(i,e,t){if(!$o(e))throw e;i.Ea.add(1),await gl(i),i.Ra.set("Offline"),t||(t=()=>Uv(i.localStore)),i.asyncQueue.enqueueRetryable(async()=>{ie(Cs,"Retrying IndexedDB access"),await t(),i.Ea.delete(1),await Nc(i)})}function Hv(i,e){return e().catch(t=>hc(i,t,e))}async function xc(i){const e=Ie(i),t=bi(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:vf;for(;GA(e);)try{const o=await PA(e.localStore,s);if(o===null){e.Ta.length===0&&t.L_();break}s=o.batchId,KA(e,o)}catch(o){await hc(e,o)}Wv(e)&&Gv(e)}function GA(i){return ks(i)&&i.Ta.length<10}function KA(i,e){i.Ta.push(e);const t=bi(i);t.O_()&&t.X_&&t.ea(e.mutations)}function Wv(i){return ks(i)&&!bi(i).x_()&&i.Ta.length>0}function Gv(i){bi(i).start()}async function QA(i){bi(i).ra()}async function YA(i){const e=bi(i);for(const t of i.Ta)e.ea(t.mutations)}async function XA(i,e,t){const s=i.Ta.shift(),o=Af.from(s,e,t);await Hv(i,()=>i.remoteSyncer.applySuccessfulWrite(o)),await xc(i)}async function JA(i,e){e&&bi(i).X_&&await async function(s,o){if(function(h){return D1(h)&&h!==B.ABORTED}(o.code)){const u=s.Ta.shift();bi(s).B_(),await Hv(s,()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o)),await xc(s)}}(i,e),Wv(i)&&Gv(i)}async function Ny(i,e){const t=Ie(i);t.asyncQueue.verifyOperationInProgress(),ie(Cs,"RemoteStore received new credentials");const s=ks(t);t.Ea.add(3),await gl(t),s&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Nc(t)}async function ZA(i,e){const t=Ie(i);e?(t.Ea.delete(2),await Nc(t)):e||(t.Ea.add(2),await gl(t),t.Ra.set("Unknown"))}function Ho(i){return i.ma||(i.ma=function(t,s,o){const u=Ie(t);return u.sa(),new bA(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(i.datastore,i.asyncQueue,{Xo:$A.bind(null,i),t_:qA.bind(null,i),r_:HA.bind(null,i),H_:WA.bind(null,i)}),i.da.push(async e=>{e?(i.ma.B_(),Lf(i)?Of(i):i.Ra.set("Unknown")):(await i.ma.stop(),qv(i))})),i.ma}function bi(i){return i.fa||(i.fa=function(t,s,o){const u=Ie(t);return u.sa(),new FA(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(i.datastore,i.asyncQueue,{Xo:()=>Promise.resolve(),t_:QA.bind(null,i),r_:JA.bind(null,i),ta:YA.bind(null,i),na:XA.bind(null,i)}),i.da.push(async e=>{e?(i.fa.B_(),await xc(i)):(await i.fa.stop(),i.Ta.length>0&&(ie(Cs,`Stopping write stream with ${i.Ta.length} pending writes`),i.Ta=[]))})),i.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(e,t,s,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new Fr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,u){const h=Date.now()+s,m=new Mf(e,t,h,o,u);return m.start(s),m}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new te(B.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function bf(i,e){if(zr("AsyncQueue",`${e}: ${i}`),$o(i))return new te(B.UNAVAILABLE,`${e}: ${i}`);throw i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{static emptySet(e){return new No(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||de.comparator(t.key,s.key):(t,s)=>de.comparator(t.key,s.key),this.keyedMap=za(),this.sortedSet=new at(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof No)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new No;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xy{constructor(){this.ga=new at(de.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):ve(63341,{Rt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal((t,s)=>{e.push(s)}),e}}class bo{constructor(e,t,s,o,u,h,m,y,_){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=m,this.excludesMetadataChanges=y,this.hasCachedResults=_}static fromInitialDocuments(e,t,s,o,u){const h=[];return t.forEach(m=>{h.push({type:0,doc:m})}),new bo(e,t,No.emptySet(t),h,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Sc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class tC{constructor(){this.queries=Vy(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const o=Ie(t),u=o.queries;o.queries=Vy(),u.forEach((h,m)=>{for(const y of m.Sa)y.onError(s)})})(this,new te(B.ABORTED,"Firestore shutting down"))}}function Vy(){return new Ps(i=>fv(i),Sc)}async function Ff(i,e){const t=Ie(i);let s=3;const o=e.query;let u=t.queries.get(o);u?!u.ba()&&e.Da()&&(s=2):(u=new eC,s=e.Da()?0:1);try{switch(s){case 0:u.wa=await t.onListen(o,!0);break;case 1:u.wa=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const m=bf(h,`Initialization of query '${Io(e.query)}' failed`);return void e.onError(m)}t.queries.set(o,u),u.Sa.push(e),e.va(t.onlineState),u.wa&&e.Fa(u.wa)&&jf(t)}async function Uf(i,e){const t=Ie(i),s=e.query;let o=3;const u=t.queries.get(s);if(u){const h=u.Sa.indexOf(e);h>=0&&(u.Sa.splice(h,1),u.Sa.length===0?o=e.Da()?0:1:!u.ba()&&e.Da()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function nC(i,e){const t=Ie(i);let s=!1;for(const o of e){const u=o.query,h=t.queries.get(u);if(h){for(const m of h.Sa)m.Fa(o)&&(s=!0);h.wa=o}}s&&jf(t)}function rC(i,e,t){const s=Ie(i),o=s.queries.get(e);if(o)for(const u of o.Sa)u.onError(t);s.queries.delete(e)}function jf(i){i.Ca.forEach(e=>{e.next()})}var ef,Dy;(Dy=ef||(ef={})).Ma="default",Dy.Cache="cache";class zf{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new bo(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=bo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==ef.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kv{constructor(e){this.key=e}}class Qv{constructor(e){this.key=e}}class iC{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Ve(),this.mutatedKeys=Ve(),this.eu=pv(e),this.tu=new No(this.eu)}get nu(){return this.Ya}ru(e,t){const s=t?t.iu:new xy,o=t?t.tu:this.tu;let u=t?t.mutatedKeys:this.mutatedKeys,h=o,m=!1;const y=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,_=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((w,R)=>{const C=o.get(w),z=Ac(this.query,R)?R:null,Q=!!C&&this.mutatedKeys.has(C.key),J=!!z&&(z.hasLocalMutations||this.mutatedKeys.has(z.key)&&z.hasCommittedMutations);let W=!1;C&&z?C.data.isEqual(z.data)?Q!==J&&(s.track({type:3,doc:z}),W=!0):this.su(C,z)||(s.track({type:2,doc:z}),W=!0,(y&&this.eu(z,y)>0||_&&this.eu(z,_)<0)&&(m=!0)):!C&&z?(s.track({type:0,doc:z}),W=!0):C&&!z&&(s.track({type:1,doc:C}),W=!0,(y||_)&&(m=!0)),W&&(z?(h=h.add(z),u=J?u.add(w):u.delete(w)):(h=h.delete(w),u=u.delete(w)))}),this.query.limit!==null)for(;h.size>this.query.limit;){const w=this.query.limitType==="F"?h.last():h.first();h=h.delete(w.key),u=u.delete(w.key),s.track({type:1,doc:w})}return{tu:h,iu:s,Cs:m,mutatedKeys:u}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const u=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const h=e.iu.ya();h.sort((w,R)=>function(z,Q){const J=W=>{switch(W){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ve(20277,{Rt:W})}};return J(z)-J(Q)}(w.type,R.type)||this.eu(w.doc,R.doc)),this.ou(s),o=o??!1;const m=t&&!o?this._u():[],y=this.Xa.size===0&&this.current&&!o?1:0,_=y!==this.Za;return this.Za=y,h.length!==0||_?{snapshot:new bo(this.query,e.tu,u,h,e.mutatedKeys,y===0,_,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:m}:{au:m}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new xy,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(t=>this.Ya=this.Ya.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ya=this.Ya.delete(t)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Ve(),this.tu.forEach(s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))});const t=[];return e.forEach(s=>{this.Xa.has(s)||t.push(new Qv(s))}),this.Xa.forEach(s=>{e.has(s)||t.push(new Kv(s))}),t}cu(e){this.Ya=e.Qs,this.Xa=Ve();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return bo.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Bf="SyncEngine";class sC{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class oC{constructor(e){this.key=e,this.hu=!1}}class aC{constructor(e,t,s,o,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.Pu={},this.Tu=new Ps(m=>fv(m),Sc),this.Iu=new Map,this.Eu=new Set,this.du=new at(de.comparator),this.Au=new Map,this.Ru=new Pf,this.Vu={},this.mu=new Map,this.fu=Mo.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function lC(i,e,t=!0){const s=tE(i);let o;const u=s.Tu.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.lu()):o=await Yv(s,e,t,!0),o}async function uC(i,e){const t=tE(i);await Yv(t,e,!0,!1)}async function Yv(i,e,t,s){const o=await kA(i.localStore,dr(e)),u=o.targetId,h=i.sharedClientState.addLocalQueryTarget(u,t);let m;return s&&(m=await cC(i,e,u,h==="current",o.resumeToken)),i.isPrimaryClient&&t&&Bv(i.remoteStore,o),m}async function cC(i,e,t,s,o){i.pu=(R,C,z)=>async function(J,W,fe,ge){let ye=W.view.ru(fe);ye.Cs&&(ye=await Ay(J.localStore,W.query,!1).then(({documents:x})=>W.view.ru(x,ye)));const Pe=ge&&ge.targetChanges.get(W.targetId),Ke=ge&&ge.targetMismatches.get(W.targetId)!=null,Ce=W.view.applyChanges(ye,J.isPrimaryClient,Pe,Ke);return Ly(J,W.targetId,Ce.au),Ce.snapshot}(i,R,C,z);const u=await Ay(i.localStore,e,!0),h=new iC(e,u.Qs),m=h.ru(u.documents),y=ml.createSynthesizedTargetChangeForCurrentChange(t,s&&i.onlineState!=="Offline",o),_=h.applyChanges(m,i.isPrimaryClient,y);Ly(i,t,_.au);const w=new sC(e,t,h);return i.Tu.set(e,w),i.Iu.has(t)?i.Iu.get(t).push(e):i.Iu.set(t,[e]),_.snapshot}async function hC(i,e,t){const s=Ie(i),o=s.Tu.get(e),u=s.Iu.get(o.targetId);if(u.length>1)return s.Iu.set(o.targetId,u.filter(h=>!Sc(h,e))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await Jd(s.localStore,o.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(o.targetId),t&&Vf(s.remoteStore,o.targetId),tf(s,o.targetId)}).catch(Bo)):(tf(s,o.targetId),await Jd(s.localStore,o.targetId,!0))}async function dC(i,e){const t=Ie(i),s=t.Tu.get(e),o=t.Iu.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Vf(t.remoteStore,s.targetId))}async function fC(i,e,t){const s=EC(i);try{const o=await function(h,m){const y=Ie(h),_=tt.now(),w=m.reduce((z,Q)=>z.add(Q.key),Ve());let R,C;return y.persistence.runTransaction("Locally write mutations","readwrite",z=>{let Q=Br(),J=Ve();return y.Ns.getEntries(z,w).next(W=>{Q=W,Q.forEach((fe,ge)=>{ge.isValidDocument()||(J=J.add(fe))})}).next(()=>y.localDocuments.getOverlayedDocuments(z,Q)).next(W=>{R=W;const fe=[];for(const ge of m){const ye=P1(ge,R.get(ge.key).overlayedDocument);ye!=null&&fe.push(new zi(ge.key,ye,sv(ye.value.mapValue),Kn.exists(!0)))}return y.mutationQueue.addMutationBatch(z,_,fe,m)}).next(W=>{C=W;const fe=W.applyToLocalDocumentSet(R,J);return y.documentOverlayCache.saveOverlays(z,W.batchId,fe)})}).then(()=>({batchId:C.batchId,changes:gv(R)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),function(h,m,y){let _=h.Vu[h.currentUser.toKey()];_||(_=new at(xe)),_=_.insert(m,y),h.Vu[h.currentUser.toKey()]=_}(s,o.batchId,t),await yl(s,o.changes),await xc(s.remoteStore)}catch(o){const u=bf(o,"Failed to persist write");t.reject(u)}}async function Xv(i,e){const t=Ie(i);try{const s=await CA(t.localStore,e);e.targetChanges.forEach((o,u)=>{const h=t.Au.get(u);h&&(Be(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.hu=!0:o.modifiedDocuments.size>0?Be(h.hu,14607):o.removedDocuments.size>0&&(Be(h.hu,42227),h.hu=!1))}),await yl(t,s,e)}catch(s){await Bo(s)}}function Oy(i,e,t){const s=Ie(i);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.Tu.forEach((u,h)=>{const m=h.view.va(e);m.snapshot&&o.push(m.snapshot)}),function(h,m){const y=Ie(h);y.onlineState=m;let _=!1;y.queries.forEach((w,R)=>{for(const C of R.Sa)C.va(m)&&(_=!0)}),_&&jf(y)}(s.eventManager,e),o.length&&s.Pu.H_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function pC(i,e,t){const s=Ie(i);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Au.get(e),u=o&&o.key;if(u){let h=new at(de.comparator);h=h.insert(u,Gt.newNoDocument(u,Te.min()));const m=Ve().add(u),y=new Pc(Te.min(),new Map,new at(xe),h,m);await Xv(s,y),s.du=s.du.remove(u),s.Au.delete(e),$f(s)}else await Jd(s.localStore,e,!1).then(()=>tf(s,e,t)).catch(Bo)}async function mC(i,e){const t=Ie(i),s=e.batch.batchId;try{const o=await AA(t.localStore,e);Zv(t,s,null),Jv(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await yl(t,o)}catch(o){await Bo(o)}}async function gC(i,e,t){const s=Ie(i);try{const o=await function(h,m){const y=Ie(h);return y.persistence.runTransaction("Reject batch","readwrite-primary",_=>{let w;return y.mutationQueue.lookupMutationBatch(_,m).next(R=>(Be(R!==null,37113),w=R.keys(),y.mutationQueue.removeMutationBatch(_,R))).next(()=>y.mutationQueue.performConsistencyCheck(_)).next(()=>y.documentOverlayCache.removeOverlaysForBatchId(_,w,m)).next(()=>y.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(_,w)).next(()=>y.localDocuments.getDocuments(_,w))})}(s.localStore,e);Zv(s,e,t),Jv(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await yl(s,o)}catch(o){await Bo(o)}}function Jv(i,e){(i.mu.get(e)||[]).forEach(t=>{t.resolve()}),i.mu.delete(e)}function Zv(i,e,t){const s=Ie(i);let o=s.Vu[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(t?u.reject(t):u.resolve(),o=o.remove(e)),s.Vu[s.currentUser.toKey()]=o}}function tf(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const s of i.Iu.get(e))i.Tu.delete(s),t&&i.Pu.yu(s,t);i.Iu.delete(e),i.isPrimaryClient&&i.Ru.jr(e).forEach(s=>{i.Ru.containsKey(s)||eE(i,s)})}function eE(i,e){i.Eu.delete(e.path.canonicalString());const t=i.du.get(e);t!==null&&(Vf(i.remoteStore,t),i.du=i.du.remove(e),i.Au.delete(t),$f(i))}function Ly(i,e,t){for(const s of t)s instanceof Kv?(i.Ru.addReference(s.key,e),yC(i,s)):s instanceof Qv?(ie(Bf,"Document no longer in limbo: "+s.key),i.Ru.removeReference(s.key,e),i.Ru.containsKey(s.key)||eE(i,s.key)):ve(19791,{wu:s})}function yC(i,e){const t=e.key,s=t.path.canonicalString();i.du.get(t)||i.Eu.has(s)||(ie(Bf,"New document in limbo: "+t),i.Eu.add(s),$f(i))}function $f(i){for(;i.Eu.size>0&&i.du.size<i.maxConcurrentLimboResolutions;){const e=i.Eu.values().next().value;i.Eu.delete(e);const t=new de(Xe.fromString(e)),s=i.fu.next();i.Au.set(s,new oC(t)),i.du=i.du.insert(t,s),Bv(i.remoteStore,new Ri(dr(Ic(t.path)),s,"TargetPurposeLimboResolution",Ec.ce))}}async function yl(i,e,t){const s=Ie(i),o=[],u=[],h=[];s.Tu.isEmpty()||(s.Tu.forEach((m,y)=>{h.push(s.pu(y,e,t).then(_=>{if((_||t)&&s.isPrimaryClient){const w=_?!_.fromCache:t?.targetChanges.get(y.targetId)?.current;s.sharedClientState.updateQueryState(y.targetId,w?"current":"not-current")}if(_){o.push(_);const w=Nf.As(y.targetId,_);u.push(w)}}))}),await Promise.all(h),s.Pu.H_(o),await async function(y,_){const w=Ie(y);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",R=>q.forEach(_,C=>q.forEach(C.Es,z=>w.persistence.referenceDelegate.addReference(R,C.targetId,z)).next(()=>q.forEach(C.ds,z=>w.persistence.referenceDelegate.removeReference(R,C.targetId,z)))))}catch(R){if(!$o(R))throw R;ie(xf,"Failed to update sequence numbers: "+R)}for(const R of _){const C=R.targetId;if(!R.fromCache){const z=w.Ms.get(C),Q=z.snapshotVersion,J=z.withLastLimboFreeSnapshotVersion(Q);w.Ms=w.Ms.insert(C,J)}}}(s.localStore,u))}async function _C(i,e){const t=Ie(i);if(!t.currentUser.isEqual(e)){ie(Bf,"User change. New user:",e.toKey());const s=await Fv(t.localStore,e);t.currentUser=e,function(u,h){u.mu.forEach(m=>{m.forEach(y=>{y.reject(new te(B.CANCELLED,h))})}),u.mu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await yl(t,s.Ls)}}function vC(i,e){const t=Ie(i),s=t.Au.get(e);if(s&&s.hu)return Ve().add(s.key);{let o=Ve();const u=t.Iu.get(e);if(!u)return o;for(const h of u){const m=t.Tu.get(h);o=o.unionWith(m.view.nu)}return o}}function tE(i){const e=Ie(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=Xv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=vC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=pC.bind(null,e),e.Pu.H_=nC.bind(null,e.eventManager),e.Pu.yu=rC.bind(null,e.eventManager),e}function EC(i){const e=Ie(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=mC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=gC.bind(null,e),e}class dc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=kc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return SA(this.persistence,new wA,e.initialUser,this.serializer)}Cu(e){return new bv(kf.mi,this.serializer)}Du(e){return new xA}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}dc.provider={build:()=>new dc};class wC extends dc{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){Be(this.persistence.referenceDelegate instanceof cc,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new oA(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?ln.withCacheSize(this.cacheSizeBytes):ln.DEFAULT;return new bv(s=>cc.mi(s,t),this.serializer)}}class nf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Oy(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=_C.bind(null,this.syncEngine),await ZA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new tC}()}createDatastore(e){const t=kc(e.databaseInfo.databaseId),s=function(u){return new MA(u)}(e.databaseInfo);return function(u,h,m,y){return new jA(u,h,m,y)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,o,u,h,m){return new BA(s,o,u,h,m)}(this.localStore,this.datastore,e.asyncQueue,t=>Oy(this.syncEngine,t,0),function(){return Py.v()?new Py:new VA}())}createSyncEngine(e,t){return function(o,u,h,m,y,_,w){const R=new aC(o,u,h,m,y,_);return w&&(R.gu=!0),R}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await async function(t){const s=Ie(t);ie(Cs,"RemoteStore shutting down."),s.Ea.add(5),await gl(s),s.Aa.shutdown(),s.Ra.set("Unknown")}(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}nf.provider={build:()=>new nf};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):zr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fi="FirestoreClient";class TC{constructor(e,t,s,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=Wt.UNAUTHENTICATED,this.clientId=_f.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,async h=>{ie(Fi,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h}),this.appCheckCredentials.start(s,h=>(ie(Fi,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Fr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=bf(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function kd(i,e){i.asyncQueue.verifyOperationInProgress(),ie(Fi,"Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let s=t.initialUser;i.setCredentialChangeListener(async o=>{s.isEqual(o)||(await Fv(e.localStore,o),s=o)}),e.persistence.setDatabaseDeletedListener(()=>i.terminate()),i._offlineComponents=e}async function My(i,e){i.asyncQueue.verifyOperationInProgress();const t=await IC(i);ie(Fi,"Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener(s=>Ny(e.remoteStore,s)),i.setAppCheckTokenChangeListener((s,o)=>Ny(e.remoteStore,o)),i._onlineComponents=e}async function IC(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){ie(Fi,"Using user provided OfflineComponentProvider");try{await kd(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===B.FAILED_PRECONDITION||o.code===B.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;Vo("Error using user provided cache. Falling back to memory cache: "+t),await kd(i,new dc)}}else ie(Fi,"Using default OfflineComponentProvider"),await kd(i,new wC(void 0));return i._offlineComponents}async function nE(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(ie(Fi,"Using user provided OnlineComponentProvider"),await My(i,i._uninitializedComponentsProvider._online)):(ie(Fi,"Using default OnlineComponentProvider"),await My(i,new nf))),i._onlineComponents}function SC(i){return nE(i).then(e=>e.syncEngine)}async function fc(i){const e=await nE(i),t=e.eventManager;return t.onListen=lC.bind(null,e.syncEngine),t.onUnlisten=hC.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=uC.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=dC.bind(null,e.syncEngine),t}function AC(i,e,t={}){const s=new Fr;return i.asyncQueue.enqueueAndForget(async()=>function(u,h,m,y,_){const w=new qf({next:C=>{w.Nu(),h.enqueueAndForget(()=>Uf(u,R));const z=C.docs.has(m);!z&&C.fromCache?_.reject(new te(B.UNAVAILABLE,"Failed to get document because the client is offline.")):z&&C.fromCache&&y&&y.source==="server"?_.reject(new te(B.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):_.resolve(C)},error:C=>_.reject(C)}),R=new zf(Ic(m.path),w,{includeMetadataChanges:!0,qa:!0});return Ff(u,R)}(await fc(i),i.asyncQueue,e,t,s)),s.promise}function CC(i,e,t={}){const s=new Fr;return i.asyncQueue.enqueueAndForget(async()=>function(u,h,m,y,_){const w=new qf({next:C=>{w.Nu(),h.enqueueAndForget(()=>Uf(u,R)),C.fromCache&&y.source==="server"?_.reject(new te(B.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):_.resolve(C)},error:C=>_.reject(C)}),R=new zf(m,w,{includeMetadataChanges:!0,qa:!0});return Ff(u,R)}(await fc(i),i.asyncQueue,e,t,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rE(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const by=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iE="firestore.googleapis.com",Fy=!0;class Uy{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new te(B.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=iE,this.ssl=Fy}else this.host=e.host,this.ssl=e.ssl??Fy;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Mv;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<iA)throw new te(B.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}zS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=rE(e.experimentalLongPollingOptions??{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new te(B.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new te(B.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new te(B.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Vc{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Uy({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new te(B.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new te(B.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Uy(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new xS;switch(s.type){case"firstParty":return new LS(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new te(B.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=by.get(t);s&&(ie("ComponentProvider","Removing Datastore"),by.delete(t),s.terminate())}(this),Promise.resolve()}}function RC(i,e,t,s={}){i=_n(i,Vc);const o=Fo(e),u=i._getSettings(),h={...u,emulatorOptions:i._getEmulatorOptions()},m=`${e}:${t}`;o&&(Jy(`https://${m}`),Zy("Firestore",!0)),u.host!==iE&&u.host!==m&&Vo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const y={...u,host:m,ssl:o,emulatorOptions:s};if(!ws(y,h)&&(i._setSettings(y),s.mockUserToken)){let _,w;if(typeof s.mockUserToken=="string")_=s.mockUserToken,w=Wt.MOCK_USER;else{_=jw(s.mockUserToken,i._app?.options.projectId);const R=s.mockUserToken.sub||s.mockUserToken.user_id;if(!R)throw new te(B.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");w=new Wt(R)}i._authCredentials=new VS(new G_(_,w))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Bi(this.firestore,e,this._query)}}class ut{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Vi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ut(this.firestore,e,this._key)}toJSON(){return{type:ut._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(fl(t,ut._jsonSchema))return new ut(e,s||null,new de(Xe.fromString(t.referencePath)))}}ut._jsonSchemaVersion="firestore/documentReference/1.0",ut._jsonSchema={type:Et("string",ut._jsonSchemaVersion),referencePath:Et("string")};class Vi extends Bi{constructor(e,t,s){super(e,t,Ic(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ut(this.firestore,null,new de(e))}withConverter(e){return new Vi(this.firestore,e,this._path)}}function Dr(i,e,...t){if(i=wt(i),K_("collection","path",e),i instanceof Vc){const s=Xe.fromString(e,...t);return Jg(s),new Vi(i,null,s)}{if(!(i instanceof ut||i instanceof Vi))throw new te(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(Xe.fromString(e,...t));return Jg(s),new Vi(i.firestore,null,s)}}function Or(i,e,...t){if(i=wt(i),arguments.length===1&&(e=_f.newId()),K_("doc","path",e),i instanceof Vc){const s=Xe.fromString(e,...t);return Xg(s),new ut(i,null,new de(s))}{if(!(i instanceof ut||i instanceof Vi))throw new te(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(Xe.fromString(e,...t));return Xg(s),new ut(i.firestore,i instanceof Vi?i.converter:null,new de(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jy="AsyncQueue";class zy{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new jv(this,"async_queue_retry"),this._c=()=>{const s=Pd();s&&ie(jy,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=Pd();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Pd();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new Fr;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!$o(e))throw e;ie(jy,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(s=>{throw this.nc=s,this.rc=!1,zr("INTERNAL UNHANDLED ERROR: ",By(s)),s}).then(s=>(this.rc=!1,s))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const o=Mf.createAndSchedule(this,e,t,s,u=>this.hc(u));return this.tc.push(o),o}uc(){this.nc&&ve(47125,{Pc:By(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function By(i){let e=i.message||"";return i.stack&&(e=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $y(i){return function(t,s){if(typeof t!="object"||t===null)return!1;const o=t;for(const u of s)if(u in o&&typeof o[u]=="function")return!0;return!1}(i,["next","error","complete"])}class Ui extends Vc{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new zy,this._persistenceKey=o?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new zy(e),this._firestoreClient=void 0,await e}}}function PC(i,e){const t=typeof i=="object"?i:r_(),s=typeof i=="string"?i:sc,o=lf(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=Fw("firestore");u&&RC(o,...u)}return o}function Dc(i){if(i._terminated)throw new te(B.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||kC(i),i._firestoreClient}function kC(i){const e=i._freezeSettings(),t=function(o,u,h,m){return new JS(o,u,h,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,rE(m.experimentalLongPollingOptions),m.useFetchStreams,m.isUsingEmulator)}(i._databaseId,i._app?.options.appId||"",i._persistenceKey,e);i._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(i._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),i._firestoreClient=new TC(i._authCredentials,i._appCheckCredentials,i._queue,t,i._componentsProvider&&function(o){const u=o?._online.build();return{_offline:o?._offline.build(u),_online:u}}(i._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Nn(jt.fromBase64String(e))}catch(t){throw new te(B.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Nn(jt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Nn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(fl(e,Nn._jsonSchema))return Nn.fromBase64String(e.bytes)}}Nn._jsonSchemaVersion="firestore/bytes/1.0",Nn._jsonSchema={type:Et("string",Nn._jsonSchemaVersion),bytes:Et("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new te(B.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ut(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new te(B.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new te(B.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return xe(this._lat,e._lat)||xe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:pr._jsonSchemaVersion}}static fromJSON(e){if(fl(e,pr._jsonSchema))return new pr(e.latitude,e.longitude)}}pr._jsonSchemaVersion="firestore/geoPoint/1.0",pr._jsonSchema={type:Et("string",pr._jsonSchemaVersion),latitude:Et("number"),longitude:Et("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0}(this._values,e._values)}toJSON(){return{type:mr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(fl(e,mr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new mr(e.vectorValues);throw new te(B.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}mr._jsonSchemaVersion="firestore/vectorValue/1.0",mr._jsonSchema={type:Et("string",mr._jsonSchemaVersion),vectorValues:Et("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NC=/^__.*__$/;class xC{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new zi(e,this.data,this.fieldMask,t,this.fieldTransforms):new pl(e,this.data,t,this.fieldTransforms)}}class sE{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new zi(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function oE(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ve(40011,{Ac:i})}}class Hf{constructor(e,t,s,o,u,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Rc(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Hf({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const t=this.path?.child(e),s=this.Vc({path:t,fc:!1});return s.gc(e),s}yc(e){const t=this.path?.child(e),s=this.Vc({path:t,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return pc(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(oE(this.Ac)&&NC.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class VC{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||kc(e)}Cc(e,t,s,o=!1){return new Hf({Ac:e,methodName:t,Dc:s,path:Ut.emptyPath(),fc:!1,bc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Mc(i){const e=i._freezeSettings(),t=kc(i._databaseId);return new VC(i._databaseId,!!e.ignoreUndefinedProperties,t)}function aE(i,e,t,s,o,u={}){const h=i.Cc(u.merge||u.mergeFields?2:0,e,t,o);Gf("Data must be an object, but it was:",h,s);const m=lE(s,h);let y,_;if(u.merge)y=new yn(h.fieldMask),_=h.fieldTransforms;else if(u.mergeFields){const w=[];for(const R of u.mergeFields){const C=rf(e,R,t);if(!h.contains(C))throw new te(B.INVALID_ARGUMENT,`Field '${C}' is specified in your field mask but missing from your input data.`);cE(w,C)||w.push(C)}y=new yn(w),_=h.fieldTransforms.filter(R=>y.covers(R.field))}else y=null,_=h.fieldTransforms;return new xC(new un(m),y,_)}class bc extends Lc{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof bc}}class Wf extends Lc{_toFieldTransform(e){return new S1(e.path,new il)}isEqual(e){return e instanceof Wf}}function DC(i,e,t,s){const o=i.Cc(1,e,t);Gf("Data must be an object, but it was:",o,s);const u=[],h=un.empty();ji(s,(y,_)=>{const w=Kf(e,y,t);_=wt(_);const R=o.yc(w);if(_ instanceof bc)u.push(w);else{const C=_l(_,R);C!=null&&(u.push(w),h.set(w,C))}});const m=new yn(u);return new sE(h,m,o.fieldTransforms)}function OC(i,e,t,s,o,u){const h=i.Cc(1,e,t),m=[rf(e,s,t)],y=[o];if(u.length%2!=0)throw new te(B.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let C=0;C<u.length;C+=2)m.push(rf(e,u[C])),y.push(u[C+1]);const _=[],w=un.empty();for(let C=m.length-1;C>=0;--C)if(!cE(_,m[C])){const z=m[C];let Q=y[C];Q=wt(Q);const J=h.yc(z);if(Q instanceof bc)_.push(z);else{const W=_l(Q,J);W!=null&&(_.push(z),w.set(z,W))}}const R=new yn(_);return new sE(w,R,h.fieldTransforms)}function LC(i,e,t,s=!1){return _l(t,i.Cc(s?4:3,e))}function _l(i,e){if(uE(i=wt(i)))return Gf("Unsupported field value:",e,i),lE(i,e);if(i instanceof Lc)return function(s,o){if(!oE(o.Ac))throw o.Sc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Sc(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)}(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(s,o){const u=[];let h=0;for(const m of s){let y=_l(m,o.wc(h));y==null&&(y={nullValue:"NULL_VALUE"}),u.push(y),h++}return{arrayValue:{values:u}}}(i,e)}return function(s,o){if((s=wt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return w1(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=tt.fromDate(s);return{timestampValue:uc(o.serializer,u)}}if(s instanceof tt){const u=new tt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:uc(o.serializer,u)}}if(s instanceof pr)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Nn)return{bytesValue:kv(o.serializer,s._byteString)};if(s instanceof ut){const u=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(u))throw o.Sc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:Rf(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof mr)return function(h,m){return{mapValue:{fields:{[rv]:{stringValue:iv},[oc]:{arrayValue:{values:h.toArray().map(_=>{if(typeof _!="number")throw m.Sc("VectorValues must only contain numeric values.");return Sf(m.serializer,_)})}}}}}}(s,o);throw o.Sc(`Unsupported field value: ${vc(s)}`)}(i,e)}function lE(i,e){const t={};return X_(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ji(i,(s,o)=>{const u=_l(o,e.mc(s));u!=null&&(t[s]=u)}),{mapValue:{fields:t}}}function uE(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof tt||i instanceof pr||i instanceof Nn||i instanceof ut||i instanceof Lc||i instanceof mr)}function Gf(i,e,t){if(!uE(t)||!Q_(t)){const s=vc(t);throw s==="an object"?e.Sc(i+" a custom object"):e.Sc(i+" "+s)}}function rf(i,e,t){if((e=wt(e))instanceof Oc)return e._internalPath;if(typeof e=="string")return Kf(i,e);throw pc("Field path arguments must be of type string or ",i,!1,void 0,t)}const MC=new RegExp("[~\\*/\\[\\]]");function Kf(i,e,t){if(e.search(MC)>=0)throw pc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new Oc(...e.split("."))._internalPath}catch{throw pc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function pc(i,e,t,s,o){const u=s&&!s.isEmpty(),h=o!==void 0;let m=`Function ${e}() called with invalid data`;t&&(m+=" (via `toFirestore()`)"),m+=". ";let y="";return(u||h)&&(y+=" (found",u&&(y+=` in field ${s}`),h&&(y+=` in document ${o}`),y+=")"),new te(B.INVALID_ARGUMENT,m+i+y)}function cE(i,e){return i.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hE{constructor(e,t,s,o,u){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new ut(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new bC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Fc("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class bC extends hE{data(){return super.data()}}function Fc(i,e){return typeof e=="string"?Kf(i,e):e instanceof Oc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dE(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new te(B.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Qf{}class fE extends Qf{}function vo(i,e,...t){let s=[];e instanceof Qf&&s.push(e),s=s.concat(t),function(u){const h=u.filter(y=>y instanceof Yf).length,m=u.filter(y=>y instanceof Uc).length;if(h>1||h>0&&m>0)throw new te(B.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const o of s)i=o._apply(i);return i}class Uc extends fE{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new Uc(e,t,s)}_apply(e){const t=this._parse(e);return pE(e._query,t),new Bi(e.firestore,e.converter,Wd(e._query,t))}_parse(e){const t=Mc(e.firestore);return function(u,h,m,y,_,w,R){let C;if(_.isKeyField()){if(w==="array-contains"||w==="array-contains-any")throw new te(B.INVALID_ARGUMENT,`Invalid Query. You can't perform '${w}' queries on documentId().`);if(w==="in"||w==="not-in"){Hy(R,w);const Q=[];for(const J of R)Q.push(qy(y,u,J));C={arrayValue:{values:Q}}}else C=qy(y,u,R)}else w!=="in"&&w!=="not-in"&&w!=="array-contains-any"||Hy(R,w),C=LC(m,h,R,w==="in"||w==="not-in");return vt.create(_,w,C)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function wi(i,e,t){const s=e,o=Fc("where",i);return Uc._create(o,s,t)}class Yf extends Qf{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Yf(e,t)}_parse(e){const t=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return t.length===1?t[0]:Yn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(o,u){let h=o;const m=u.getFlattenedFilters();for(const y of m)pE(h,y),h=Wd(h,y)}(e._query,t),new Bi(e.firestore,e.converter,Wd(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Xf extends fE{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Xf(e,t)}_apply(e){const t=function(o,u,h){if(o.startAt!==null)throw new te(B.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new te(B.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new rl(u,h)}(e._query,this._field,this._direction);return new Bi(e.firestore,e.converter,function(o,u){const h=o.explicitOrderBy.concat([u]);return new qo(o.path,o.collectionGroup,h,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)}(e._query,t))}}function FC(i,e="asc"){const t=e,s=Fc("orderBy",i);return Xf._create(s,t)}function qy(i,e,t){if(typeof(t=wt(t))=="string"){if(t==="")throw new te(B.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!dv(e)&&t.indexOf("/")!==-1)throw new te(B.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(Xe.fromString(t));if(!de.isDocumentKey(s))throw new te(B.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return oy(i,new de(s))}if(t instanceof ut)return oy(i,t._key);throw new te(B.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${vc(t)}.`)}function Hy(i,e){if(!Array.isArray(i)||i.length===0)throw new te(B.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function pE(i,e){const t=function(o,u){for(const h of o)for(const m of h.getFlattenedFilters())if(u.indexOf(m.op)>=0)return m.op;return null}(i.filters,function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new te(B.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new te(B.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class UC{convertValue(e,t="none"){switch(Mi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ft(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Li(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ve(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return ji(e,(o,u)=>{s[o]=this.convertValue(u,t)}),s}convertVectorValue(e){const t=e.fields?.[oc].arrayValue?.values?.map(s=>ft(s.doubleValue));return new mr(t)}convertGeoPoint(e){return new pr(ft(e.latitude),ft(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Tc(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(el(e));default:return null}}convertTimestamp(e){const t=Oi(e);return new tt(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=Xe.fromString(e);Be(Lv(s),9688,{name:e});const o=new tl(s.get(1),s.get(3)),u=new de(s.popFirst(5));return o.isEqual(t)||zr(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mE(i,e,t){let s;return s=i?i.toFirestore(e):e,s}class $a{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class vs extends hE{constructor(e,t,s,o,u,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Qu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Fc("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new te(B.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=vs._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}vs._jsonSchemaVersion="firestore/documentSnapshot/1.0",vs._jsonSchema={type:Et("string",vs._jsonSchemaVersion),bundleSource:Et("string","DocumentSnapshot"),bundleName:Et("string"),bundle:Et("string")};class Qu extends vs{data(e={}){return super.data(e)}}class Es{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new $a(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new Qu(this._firestore,this._userDataWriter,s.key,s,new $a(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new te(B.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(o,u){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map(m=>{const y=new Qu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new $a(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:y,oldIndex:-1,newIndex:h++}})}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(m=>u||m.type!==3).map(m=>{const y=new Qu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new $a(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let _=-1,w=-1;return m.type!==0&&(_=h.indexOf(m.doc.key),h=h.delete(m.doc.key)),m.type!==1&&(h=h.add(m.doc),w=h.indexOf(m.doc.key)),{type:jC(m.type),doc:y,oldIndex:_,newIndex:w}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new te(B.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Es._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=_f.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],o=[];return this.docs.forEach(u=>{u._document!==null&&(t.push(u._document),s.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function jC(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ve(61501,{type:i})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zC(i){i=_n(i,ut);const e=_n(i.firestore,Ui);return AC(Dc(e),i._key).then(t=>gE(e,i,t))}Es._jsonSchemaVersion="firestore/querySnapshot/1.0",Es._jsonSchema={type:Et("string",Es._jsonSchemaVersion),bundleSource:Et("string","QuerySnapshot"),bundleName:Et("string"),bundle:Et("string")};class Jf extends UC{constructor(e){super(),this.firestore=e}convertBytes(e){return new Nn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ut(this.firestore,null,t)}}function BC(i){i=_n(i,Bi);const e=_n(i.firestore,Ui),t=Dc(e),s=new Jf(e);return dE(i._query),CC(t,i._query).then(o=>new Es(e,s,i,o))}function $C(i,e,t){i=_n(i,ut);const s=_n(i.firestore,Ui),o=mE(i.converter,e);return Zf(s,[aE(Mc(s),"setDoc",i._key,o,i.converter!==null,t).toMutation(i._key,Kn.none())])}function Eo(i,e,t,...s){i=_n(i,ut);const o=_n(i.firestore,Ui),u=Mc(o);let h;return h=typeof(e=wt(e))=="string"||e instanceof Oc?OC(u,"updateDoc",i._key,e,t,s):DC(u,"updateDoc",i._key,e),Zf(o,[h.toMutation(i._key,Kn.exists(!0))])}function Nd(i,e){const t=_n(i.firestore,Ui),s=Or(i),o=mE(i.converter,e);return Zf(t,[aE(Mc(i.firestore),"addDoc",s._key,o,i.converter!==null,{}).toMutation(s._key,Kn.exists(!1))]).then(()=>s)}function ba(i,...e){i=wt(i);let t={includeMetadataChanges:!1,source:"default"},s=0;typeof e[s]!="object"||$y(e[s])||(t=e[s++]);const o={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if($y(e[s])){const y=e[s];e[s]=y.next?.bind(y),e[s+1]=y.error?.bind(y),e[s+2]=y.complete?.bind(y)}let u,h,m;if(i instanceof ut)h=_n(i.firestore,Ui),m=Ic(i._key.path),u={next:y=>{e[s]&&e[s](gE(h,i,y))},error:e[s+1],complete:e[s+2]};else{const y=_n(i,Bi);h=_n(y.firestore,Ui),m=y._query;const _=new Jf(h);u={next:w=>{e[s]&&e[s](new Es(h,_,y,w))},error:e[s+1],complete:e[s+2]},dE(i._query)}return function(_,w,R,C){const z=new qf(C),Q=new zf(w,z,R);return _.asyncQueue.enqueueAndForget(async()=>Ff(await fc(_),Q)),()=>{z.Nu(),_.asyncQueue.enqueueAndForget(async()=>Uf(await fc(_),Q))}}(Dc(h),m,o,u)}function Zf(i,e){return function(s,o){const u=new Fr;return s.asyncQueue.enqueueAndForget(async()=>fC(await SC(s),o,u)),u.promise}(Dc(i),e)}function gE(i,e,t){const s=t.docs.get(e._key),o=new Jf(i);return new vs(i,o,e._key,s,new $a(t.hasPendingWrites,t.fromCache),e.converter)}function wo(){return new Wf("serverTimestamp")}(function(e,t=!0){(function(o){zo=o})(Uo),xo(new Ts("firestore",(s,{instanceIdentifier:o,options:u})=>{const h=s.getProvider("app").getImmediate(),m=new Ui(new DS(s.getProvider("auth-internal")),new MS(h,s.getProvider("app-check-internal")),function(_,w){if(!Object.prototype.hasOwnProperty.apply(_.options,["projectId"]))throw new te(B.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new tl(_.options.projectId,w)}(h,o),h);return u={useFetchStreams:t,...u},m._setSettings(u),m},"PUBLIC").setMultipleInstances(!0)),Ni(Gg,Kg,e),Ni(Gg,Kg,"esm2020")})();const qC={apiKey:"AIzaSyCcBIzOTbW0R8vmO_vINpf7UNLqDHY-zOE",authDomain:"vibechat-677a6.firebaseapp.com",projectId:"vibechat-677a6",storageBucket:"vibechat-677a6.firebasestorage.app",messagingSenderId:"70333439409",appId:"1:70333439409:web:f1096cc50597cd5501f190"},yE=n_(qC),Ti=kS(yE),bt=PC(yE);function HC(){const[i,e]=ze.useState(null),[t,s]=ze.useState(null),[o,u]=ze.useState([]),[h,m]=ze.useState(null),[y,_]=ze.useState([]),[w,R]=ze.useState(""),[C,z]=ze.useState(!0),[Q,J]=ze.useState(!0),[W,fe]=ze.useState(!1),[ge,ye]=ze.useState(""),[Pe,Ke]=ze.useState(!1),[Ce,x]=ze.useState(null),[T,A]=ze.useState(null),[N,V]=ze.useState(null),[D,S]=ze.useState(null),Je=ze.useRef(null),pt=ze.useRef(null),Tt=ze.useRef(null),[Oe,ee]=ze.useState(""),[he,ne]=ze.useState(""),[O,$]=ze.useState(""),[ce,Ae]=ze.useState(""),[Se,Re]=ze.useState("male");ze.useEffect(()=>{const H=_I(Ti,async ae=>{if(ae)if(ae.emailVerified){e(ae);const we=await zC(Or(bt,"users",ae.uid));if(we.exists()){const nt={id:ae.uid,...we.data()};s(nt),await Eo(Or(bt,"users",ae.uid),{isOnline:!0,lastSeen:wo()})}fe(!1)}else ae&&!ae.emailVerified&&(fe(!0),ye(ae.email||""),e(null),s(null));else e(null),s(null),fe(!1);J(!1)});return()=>H()},[]),ze.useEffect(()=>{if(!t)return;const H=vo(Dr(bt,"users")),ae=ba(H,we=>{const qe=we.docs.map(He=>({id:He.id,...He.data()})).filter(He=>He.id!==t.id).filter(He=>t.gender==="male"?He.gender==="female"||He.gender==="other":t.gender==="female"?He.gender==="male"||He.gender==="other":!0);u(qe)});return()=>ae()},[t]),ze.useEffect(()=>{if(!h||!t)return;const H=vo(Dr(bt,"messages"),FC("timestamp","asc")),ae=ba(H,we=>{const It=we.docs.map(qe=>({id:qe.id,...qe.data()})).filter(qe=>qe.senderId===t.id&&qe.receiverId===h||qe.senderId===h&&qe.receiverId===t.id);_(It)});return()=>ae()},[h,t]),ze.useEffect(()=>{if(!t)return;const H=vo(Dr(bt,"videoCalls"),wi("receiverId","==",t.id),wi("status","==","pending")),ae=ba(H,we=>{if(!we.empty){const nt={id:we.docs[0].id,...we.docs[0].data()};x(nt)}});return()=>ae()},[t]),ze.useEffect(()=>{Tt.current?.scrollIntoView({behavior:"smooth"})},[y]);const Fe={iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"stun:stun1.l.google.com:19302"}]},Le=()=>{const H=new RTCPeerConnection(Fe);return H.onicecandidate=ae=>{ae.candidate&&h&&Nd(Dr(bt,"iceCandidates"),{candidate:ae.candidate,callId:h,senderId:t?.id,timestamp:wo()})},H.ontrack=ae=>{V(ae.streams[0]),pt.current&&(pt.current.srcObject=ae.streams[0])},H},$e=async()=>{try{const H=await navigator.mediaDevices.getUserMedia({video:!0,audio:!0});return A(H),Je.current&&(Je.current.srcObject=H),H}catch(H){return console.error("Error accessing media devices:",H),alert("Could not access camera/microphone. Please check permissions."),null}};ze.useEffect(()=>{if(!t||!Pe)return;const H=vo(Dr(bt,"iceCandidates"),wi("callId","==",h),wi("senderId","!=",t.id)),ae=ba(H,we=>{we.docChanges().forEach(nt=>{if(nt.type==="added"&&D){const It=nt.doc.data();D.addIceCandidate(new RTCIceCandidate(It.candidate))}})});return()=>ae()},[t,Pe,h,D]),ze.useEffect(()=>{if(!t)return;const H=vo(Dr(bt,"videoCalls"),wi("receiverId","==",t.id)),ae=ba(H,async we=>{we.docChanges().forEach(async nt=>{if(nt.type==="modified"){const It={id:nt.doc.id,...nt.doc.data()};It.status==="pending"&&It.offer&&!Ce?x(It):It.status==="active"&&It.answer&&D&&await D.setRemoteDescription(new RTCSessionDescription(It.answer))}})});return()=>ae()},[t,D,Ce]),ze.useEffect(()=>()=>{T&&T.getTracks().forEach(H=>H.stop()),D&&D.close()},[]);const mt=async H=>{H.preventDefault();try{console.log("🚀 Starting signup process...");const ae=await pI(Ti,Oe,he);console.log("✅ User created:",ae.user.uid),console.log("📧 Sending email verification..."),await Mg(ae.user),console.log("📝 Creating user document..."),await $C(Or(bt,"users",ae.user.uid),{email:Oe,username:O,gender:Se,age:parseInt(ce),isOnline:!1,lastSeen:wo(),avatar:`https://api.dicebear.com/7.x/avataaars/svg?seed=${O}&backgroundColor=b6e3f4`,emailVerified:!1}),fe(!0),ye(Oe),console.log("✅ Signup successful! Email verification sent."),ee(""),ne(""),$(""),Ae(""),Re("male")}catch(ae){console.error("❌ Signup failed:",ae),console.error("Error code:",ae.code),console.error("Error message:",ae.message);let we="Signup failed: ";switch(ae.code){case"auth/email-already-in-use":we+="This email is already registered. Try logging in instead.";break;case"auth/weak-password":we+="Password should be at least 6 characters.";break;case"auth/invalid-email":we+="Please enter a valid email address.";break;case"auth/operation-not-allowed":we+="Email/password authentication is not enabled. Please contact support.";break;case"permission-denied":we+="Database permission denied. Please check Firestore rules.";break;default:we+=ae.message}alert(we)}},xn=async H=>{H.preventDefault();try{if(console.log("🔑 Starting login process..."),!(await mI(Ti,Oe,he)).user.emailVerified){console.log("❌ Email not verified"),alert("Please verify your email before logging in. Check your inbox for the verification link."),await Id(Ti);return}console.log("✅ Login successful!")}catch(ae){console.error("❌ Login failed:",ae),console.error("Error code:",ae.code),console.error("Error message:",ae.message);let we="Login failed: ";switch(ae.code){case"auth/user-not-found":we+="No account found with this email. Please sign up first.";break;case"auth/wrong-password":we+="Incorrect password. Please try again.";break;case"auth/invalid-email":we+="Please enter a valid email address.";break;case"auth/too-many-requests":we+="Too many failed attempts. Please try again later.";break;default:we+=ae.message}alert(we)}},Wr=async()=>{t&&await Eo(Or(bt,"users",t.id),{isOnline:!1,lastSeen:wo()}),await Id(Ti)},Xn=async()=>{try{const H=Ti.currentUser;H&&(await Mg(H),alert("📧 Verification email sent! Please check your inbox."))}catch(H){console.error("Error resending verification email:",H),alert("Failed to resend verification email. Please try again.")}},yr=async()=>{try{const H=Ti.currentUser;H&&(await H.reload(),H.emailVerified?(await Eo(Or(bt,"users",H.uid),{emailVerified:!0,isOnline:!0}),fe(!1),alert("✅ Email verified successfully! Welcome to VibeChat!"),window.location.reload()):alert("❌ Email not verified yet. Please check your inbox and click the verification link."))}catch(H){console.error("Error checking verification status:",H),alert("Failed to check verification status. Please try again.")}},Gr=async H=>{H.preventDefault(),!(!w.trim()||!h||!t)&&(await Nd(Dr(bt,"messages"),{text:w.trim(),senderId:t.id,receiverId:h,timestamp:wo(),read:!1}),R(""))},Kr=async H=>{if(t)try{const ae=await $e();if(!ae)return;const we=Le();S(we),ae.getTracks().forEach(It=>{we.addTrack(It,ae)});const nt=await we.createOffer();await we.setLocalDescription(nt),await Nd(Dr(bt,"videoCalls"),{callerId:t.id,receiverId:H,status:"pending",offer:nt,timestamp:wo()}),Ke(!0),alert("📞 Video call request sent! Waiting for response...")}catch(ae){console.error("Error starting video call:",ae),alert("Failed to start video call. Please try again.")}},$i=async()=>{if(!(!Ce||!t))try{const H=await $e();if(!H)return;const ae=Le();S(ae),H.getTracks().forEach(nt=>{ae.addTrack(nt,H)}),await ae.setRemoteDescription(new RTCSessionDescription(Ce.offer));const we=await ae.createAnswer();await ae.setLocalDescription(we),await Eo(Or(bt,"videoCalls",Ce.id),{status:"active",answer:we}),Ke(!0),x(null),alert("📹 Video call started!")}catch(H){console.error("Error accepting video call:",H),alert("Failed to accept video call. Please try again.")}},Ns=async()=>{Ce&&(await Eo(Or(bt,"videoCalls",Ce.id),{status:"ended"}),x(null))},Qr=async()=>{if(T&&(T.getTracks().forEach(H=>H.stop()),A(null)),D&&(D.close(),S(null)),V(null),Ke(!1),x(null),h&&t){const H=vo(Dr(bt,"videoCalls"),wi("callerId","in",[t.id,h]),wi("receiverId","in",[t.id,h]),wi("status","==","active"));(await BC(H)).docs.forEach(async we=>{await Eo(Or(bt,"videoCalls",we.id),{status:"ended"})})}};if(Q)return F.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center",children:F.jsxs("div",{className:"text-center",children:[F.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"}),F.jsx("p",{className:"text-gray-600",children:"Loading VibeChat..."})]})});if(!i||!t)return W?F.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 flex items-center justify-center p-4",children:F.jsxs("div",{className:"bg-white rounded-xl shadow-xl p-8 w-full max-w-md text-center",children:[F.jsxs("div",{className:"mb-8",children:[F.jsx("div",{className:"w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center",children:F.jsx("span",{className:"text-3xl",children:"📧"})}),F.jsx("h1",{className:"text-2xl font-bold text-gray-900 mb-2",children:"Verify Your Email"}),F.jsx("p",{className:"text-gray-600 mb-4",children:"We've sent a verification link to:"}),F.jsx("p",{className:"text-purple-600 font-semibold text-lg mb-6",children:ge}),F.jsx("p",{className:"text-sm text-gray-500 mb-6",children:"Click the verification link in your email to activate your VibeChat account. Check your spam folder if you don't see it in your inbox."})]}),F.jsxs("div",{className:"space-y-4",children:[F.jsx("button",{onClick:yr,className:"w-full bg-gradient-to-r from-green-500 to-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:from-green-600 hover:to-blue-700 transition-all",children:"✅ I've Verified My Email"}),F.jsx("button",{onClick:Xn,className:"w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-3 px-4 rounded-lg font-medium hover:from-purple-600 hover:to-pink-700 transition-all",children:"📧 Resend Verification Email"}),F.jsx("button",{onClick:()=>{Id(Ti),fe(!1)},className:"w-full bg-gray-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-600 transition-all",children:"← Back to Login"})]}),F.jsxs("div",{className:"mt-6 p-4 bg-blue-50 rounded-lg",children:[F.jsx("h3",{className:"font-semibold text-blue-800 mb-2",children:"💡 Why verify your email?"}),F.jsxs("ul",{className:"text-sm text-blue-700 text-left space-y-1",children:[F.jsx("li",{children:"• Ensures you're using a real email address"}),F.jsx("li",{children:"• Prevents fake accounts from joining"}),F.jsx("li",{children:"• Helps recover your account if needed"}),F.jsx("li",{children:"• Keeps the VibeChat community safe"})]})]})]})}):F.jsx("div",{className:"min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex items-center justify-center p-4",children:F.jsxs("div",{className:"bg-white rounded-xl shadow-xl p-8 w-full max-w-md",children:[F.jsxs("div",{className:"text-center mb-8",children:[F.jsx("h1",{className:"text-3xl font-bold text-gray-900 mb-2",children:"💕 VibeChat"}),F.jsx("p",{className:"text-gray-600",children:"Connect with your perfect match!"})]}),F.jsxs("div",{className:"flex mb-6",children:[F.jsx("button",{onClick:()=>z(!0),className:`flex-1 py-2 px-4 rounded-l-lg font-medium ${C?"bg-pink-500 text-white":"bg-gray-100 text-gray-600 hover:bg-gray-200"}`,children:"Login"}),F.jsx("button",{onClick:()=>z(!1),className:`flex-1 py-2 px-4 rounded-r-lg font-medium ${C?"bg-gray-100 text-gray-600 hover:bg-gray-200":"bg-pink-500 text-white"}`,children:"Sign Up"})]}),F.jsxs("form",{onSubmit:C?xn:mt,className:"space-y-4",children:[!C&&F.jsxs(F.Fragment,{children:[F.jsx("input",{type:"text",placeholder:"Username",value:O,onChange:H=>$(H.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent",required:!0}),F.jsx("input",{type:"number",placeholder:"Age (18+)",value:ce,onChange:H=>Ae(H.target.value),min:"18",max:"100",className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent",required:!0}),F.jsxs("div",{className:"space-y-3",children:[F.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"I am:"}),F.jsxs("div",{className:"flex space-x-4",children:[F.jsxs("label",{className:"flex items-center",children:[F.jsx("input",{type:"radio",name:"gender",value:"male",checked:Se==="male",onChange:H=>Re(H.target.value),className:"mr-2 text-pink-600"}),F.jsx("span",{children:"👨 Male"})]}),F.jsxs("label",{className:"flex items-center",children:[F.jsx("input",{type:"radio",name:"gender",value:"female",checked:Se==="female",onChange:H=>Re(H.target.value),className:"mr-2 text-pink-600"}),F.jsx("span",{children:"👩 Female"})]}),F.jsxs("label",{className:"flex items-center",children:[F.jsx("input",{type:"radio",name:"gender",value:"other",checked:Se==="other",onChange:H=>Re(H.target.value),className:"mr-2 text-pink-600"}),F.jsx("span",{children:"🌈 Other"})]})]})]})]}),F.jsx("input",{type:"email",placeholder:"Email",value:Oe,onChange:H=>ee(H.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent",required:!0}),F.jsx("input",{type:"password",placeholder:"Password",value:he,onChange:H=>ne(H.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent",required:!0}),F.jsx("button",{type:"submit",className:"w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:from-pink-600 hover:to-purple-700 transition-all",children:C?"💕 Login to VibeChat":"� Sign Up & Verify Email"})]}),!C&&F.jsx("div",{className:"mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg",children:F.jsxs("p",{className:"text-sm text-yellow-800",children:[F.jsx("strong",{children:"📧 Email verification required!"}),F.jsx("br",{}),"After signing up, check your email for a verification link to activate your account."]})})]})});const ct=o.find(H=>H.id===h);return F.jsxs("div",{className:"h-screen bg-gray-100 flex",children:[Ce&&F.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",children:F.jsxs("div",{className:"bg-white rounded-2xl p-8 text-center",children:[F.jsxs("div",{className:"mb-6",children:[F.jsx("div",{className:"w-20 h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center",children:F.jsx("span",{className:"text-3xl",children:"📞"})}),F.jsx("h3",{className:"text-xl font-bold",children:"Incoming Video Call"}),F.jsx("p",{className:"text-gray-600",children:"Someone wants to video chat!"})]}),F.jsxs("div",{className:"flex space-x-4",children:[F.jsx("button",{onClick:$i,className:"flex-1 bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600",children:"📹 Accept"}),F.jsx("button",{onClick:Ns,className:"flex-1 bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600",children:"📵 Decline"})]})]})}),Pe&&F.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50",children:F.jsxs("div",{className:"w-full h-full relative",children:[F.jsx("video",{ref:pt,autoPlay:!0,playsInline:!0,className:"w-full h-full object-cover",style:{transform:"scaleX(-1)"}}),F.jsx("div",{className:"absolute top-4 right-4 w-48 h-36 bg-gray-900 rounded-lg overflow-hidden border-2 border-white shadow-lg",children:F.jsx("video",{ref:Je,autoPlay:!0,playsInline:!0,muted:!0,className:"w-full h-full object-cover",style:{transform:"scaleX(-1)"}})}),F.jsx("div",{className:"absolute bottom-8 left-1/2 transform -translate-x-1/2",children:F.jsxs("div",{className:"flex items-center space-x-4 bg-black bg-opacity-50 rounded-full px-6 py-3",children:[F.jsx("button",{onClick:()=>{if(T){const H=T.getVideoTracks()[0];H&&(H.enabled=!H.enabled)}},className:"p-3 bg-gray-600 hover:bg-gray-700 rounded-full text-white transition-colors",title:"Toggle Camera",children:"📹"}),F.jsx("button",{onClick:()=>{if(T){const H=T.getAudioTracks()[0];H&&(H.enabled=!H.enabled)}},className:"p-3 bg-gray-600 hover:bg-gray-700 rounded-full text-white transition-colors",title:"Toggle Microphone",children:"🎤"}),F.jsx("button",{onClick:Qr,className:"p-4 bg-red-500 hover:bg-red-600 rounded-full text-white transition-colors",title:"End Call",children:"📴"})]})}),F.jsx("div",{className:"absolute top-4 left-4 bg-black bg-opacity-50 rounded-lg px-4 py-2",children:F.jsxs("p",{className:"text-white text-sm",children:["📹 Video Call with ",ct?.username]})}),!N&&F.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center",children:F.jsxs("div",{className:"text-center text-white",children:[F.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"}),F.jsx("p",{className:"text-lg",children:"Connecting..."}),F.jsxs("p",{className:"text-sm opacity-75",children:["Waiting for ",ct?.username," to join"]})]})})]})}),F.jsxs("div",{className:"w-80 bg-white border-r border-gray-200 flex flex-col",children:[F.jsx("div",{className:"p-4 bg-gradient-to-r from-pink-500 to-purple-600",children:F.jsxs("div",{className:"flex items-center justify-between",children:[F.jsxs("div",{className:"flex items-center space-x-3",children:[F.jsx("img",{className:"h-10 w-10 rounded-full border-2 border-white",src:t.avatar,alt:t.username}),F.jsxs("div",{children:[F.jsx("h2",{className:"text-white font-medium",children:t.username}),F.jsxs("p",{className:"text-pink-100 text-sm",children:[t.gender==="male"?"👨":t.gender==="female"?"👩":"🌈",t.age," years old"]})]})]}),F.jsx("button",{onClick:Wr,className:"text-white hover:text-pink-200 p-2",children:F.jsx("svg",{className:"h-5 w-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:F.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"})})})]})}),F.jsx("div",{className:"p-3 bg-gradient-to-r from-pink-50 to-purple-50 border-b",children:F.jsxs("p",{className:"text-sm text-gray-600 text-center",children:["🎯 Showing ",t.gender==="male"?"females & others":t.gender==="female"?"males & others":"all genders"]})}),F.jsx("div",{className:"flex-1 overflow-y-auto",children:F.jsxs("div",{className:"p-4",children:[F.jsxs("h3",{className:"text-sm font-medium text-gray-500 uppercase tracking-wide mb-3",children:["Available (",o.length,")"]}),o.length===0?F.jsxs("div",{className:"text-center py-8",children:[F.jsx("p",{className:"text-gray-500 mb-2",children:"No matches found"}),F.jsx("p",{className:"text-sm text-gray-400",children:"Wait for more people to join!"})]}):F.jsx("div",{className:"space-y-2",children:o.map(H=>F.jsxs("button",{onClick:()=>m(H.id),className:`w-full flex items-center space-x-3 p-3 rounded-lg text-left hover:bg-gray-50 transition-colors ${h===H.id?"bg-pink-50 border border-pink-200":""}`,children:[F.jsxs("div",{className:"relative",children:[F.jsx("img",{className:"h-12 w-12 rounded-full",src:H.avatar,alt:H.username}),F.jsx("span",{className:`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white ${H.isOnline?"bg-green-400":"bg-gray-400"}`})]}),F.jsxs("div",{className:"flex-1 min-w-0",children:[F.jsx("p",{className:"font-medium text-gray-900 truncate",children:H.username}),F.jsxs("p",{className:"text-sm text-gray-500",children:[H.gender==="male"?"👨":H.gender==="female"?"👩":"🌈",H.age," years • ",H.isOnline?"Online":"Offline"]})]}),F.jsx("button",{onClick:ae=>{ae.stopPropagation(),Kr(H.id)},className:"p-2 text-pink-600 hover:bg-pink-100 rounded-full",title:"Start video call",children:"📹"})]},H.id))})]})})]}),F.jsx("div",{className:"flex-1 flex flex-col",children:h?F.jsxs(F.Fragment,{children:[F.jsx("div",{className:"px-6 py-4 border-b border-gray-200 bg-white",children:F.jsxs("div",{className:"flex items-center justify-between",children:[F.jsxs("div",{className:"flex items-center space-x-3",children:[F.jsx("img",{className:"h-10 w-10 rounded-full",src:ct?.avatar,alt:ct?.username}),F.jsxs("div",{children:[F.jsx("h3",{className:"text-lg font-medium text-gray-900",children:ct?.username}),F.jsxs("p",{className:"text-sm text-gray-500",children:[ct?.gender==="male"?"👨":ct?.gender==="female"?"👩":"🌈",ct?.age," years • ",ct?.isOnline?"Online":"Offline"]})]})]}),F.jsx("button",{onClick:()=>Kr(h),className:"bg-gradient-to-r from-green-400 to-blue-500 text-white p-3 rounded-full hover:from-green-500 hover:to-blue-600 transition-colors",children:F.jsx("svg",{className:"h-5 w-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:F.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"})})})]})}),F.jsx("div",{className:"flex-1 overflow-y-auto p-4 bg-gray-50",children:y.length===0?F.jsxs("div",{className:"text-center py-12",children:[F.jsx("div",{className:"text-6xl mb-4",children:"💕"}),F.jsx("h3",{className:"text-xl font-semibold text-gray-700 mb-2",children:"Start a conversation!"}),F.jsxs("p",{className:"text-gray-500",children:["Send a message to ",ct?.username]})]}):F.jsxs("div",{className:"space-y-4",children:[y.map(H=>F.jsx("div",{className:`flex ${H.senderId===t?.id?"justify-end":"justify-start"}`,children:F.jsxs("div",{className:`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${H.senderId===t?.id?"bg-gradient-to-r from-pink-500 to-purple-600 text-white":"bg-white text-gray-800 border"}`,children:[F.jsx("p",{children:H.text}),F.jsx("p",{className:`text-xs mt-1 ${H.senderId===t?.id?"text-white/70":"text-gray-500"}`,children:H.timestamp?.toDate?.()?.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})||"Just now"})]})},H.id)),F.jsx("div",{ref:Tt})]})}),F.jsx("div",{className:"p-4 bg-white border-t border-gray-200",children:F.jsxs("form",{onSubmit:Gr,className:"flex space-x-3",children:[F.jsx("input",{type:"text",value:w,onChange:H=>R(H.target.value),placeholder:`Message ${ct?.username}...`,className:"flex-1 px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-pink-500 focus:border-transparent"}),F.jsx("button",{type:"submit",disabled:!w.trim(),className:"bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full hover:from-pink-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed",children:"💕 Send"})]})})]}):F.jsx("div",{className:"flex-1 flex items-center justify-center bg-gray-50",children:F.jsxs("div",{className:"text-center",children:[F.jsx("div",{className:"h-16 w-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6",children:F.jsx("svg",{className:"h-8 w-8 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:F.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"})})}),F.jsx("h3",{className:"text-lg font-medium text-gray-900 mb-2",children:"Welcome to VibeChat! 💕"}),F.jsx("p",{className:"text-gray-600 max-w-sm",children:"Select someone from the sidebar to start chatting or video calling!"})]})})})]})}kw.createRoot(document.getElementById("root")).render(F.jsx(ze.StrictMode,{children:F.jsx(HC,{})}));
