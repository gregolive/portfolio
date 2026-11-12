var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t,t.exports),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.provider`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.iterator;function p(e){return typeof e!=`object`||!e?null:(e=f&&e[f]||e[`@@iterator`],typeof e==`function`?e:null)}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,g={};function _(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}_.prototype.isReactComponent={},_.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`setState(...): takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function v(){}v.prototype=_.prototype;function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}var b=y.prototype=new v;b.constructor=y,h(b,_.prototype),b.isPureReactComponent=!0;var x=Array.isArray,ee=Object.prototype.hasOwnProperty,S={current:null},C={key:!0,ref:!0,__self:!0,__source:!0};function w(e,n,r){var i,a={},o=null,s=null;if(n!=null)for(i in n.ref!==void 0&&(s=n.ref),n.key!==void 0&&(o=``+n.key),n)ee.call(n,i)&&!C.hasOwnProperty(i)&&(a[i]=n[i]);var c=arguments.length-2;if(c===1)a.children=r;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];a.children=l}if(e&&e.defaultProps)for(i in c=e.defaultProps,c)a[i]===void 0&&(a[i]=c[i]);return{$$typeof:t,type:e,key:o,ref:s,props:a,_owner:S.current}}function T(e,n){return{$$typeof:t,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function E(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function D(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var O=/\/+/g;function te(e,t){return typeof e==`object`&&e&&e.key!=null?D(``+e.key):t.toString(36)}function k(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0}}if(c)return c=e,o=o(c),e=a===``?`.`+te(c,0):a,x(o)?(i=``,e!=null&&(i=e.replace(O,`$&/`)+`/`),k(o,r,i,``,function(e){return e})):o!=null&&(E(o)&&(o=T(o,i+(!o.key||c&&c.key===o.key?``:(``+o.key).replace(O,`$&/`)+`/`)+e)),r.push(o)),1;if(c=0,a=a===``?`.`:a+`:`,x(e))for(var l=0;l<e.length;l++){s=e[l];var u=a+te(s,l);c+=k(s,r,i,u,o)}else if(u=p(e),typeof u==`function`)for(e=u.call(e),l=0;!(s=e.next()).done;)s=s.value,u=a+te(s,l++),c+=k(s,r,i,u,o);else if(s===`object`)throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`);return c}function ne(e,t,n){if(e==null)return e;var r=[],i=0;return k(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function A(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var j={current:null},M={transition:null},re={ReactCurrentDispatcher:j,ReactCurrentBatchConfig:M,ReactCurrentOwner:S};e.Children={map:ne,forEach:function(e,t,n){ne(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ne(e,function(){t++}),t},toArray:function(e){return ne(e,function(e){return e})||[]},only:function(e){if(!E(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}},e.Component=_,e.Fragment=r,e.Profiler=a,e.PureComponent=y,e.StrictMode=i,e.Suspense=l,e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=re,e.cloneElement=function(e,n,r){if(e==null)throw Error(`React.cloneElement(...): The argument must be a React element, but you passed `+e+`.`);var i=h({},e.props),a=e.key,o=e.ref,s=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,s=S.current),n.key!==void 0&&(a=``+n.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in n)ee.call(n,l)&&!C.hasOwnProperty(l)&&(i[l]=n[l]===void 0&&c!==void 0?c[l]:n[l])}var l=arguments.length-2;if(l===1)i.children=r;else if(1<l){c=Array(l);for(var u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}return{$$typeof:t,type:e.type,key:a,ref:o,props:i,_owner:s}},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:o,_context:e},e.Consumer=e},e.createElement=w,e.createFactory=function(e){var t=w.bind(null,e);return t.type=e,t},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=E,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:A}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=M.transition;M.transition={};try{e()}finally{M.transition=t}},e.unstable_act=function(){throw Error(`act(...) is not supported in production builds of React.`)},e.useCallback=function(e,t){return j.current.useCallback(e,t)},e.useContext=function(e){return j.current.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e){return j.current.useDeferredValue(e)},e.useEffect=function(e,t){return j.current.useEffect(e,t)},e.useId=function(){return j.current.useId()},e.useImperativeHandle=function(e,t,n){return j.current.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return j.current.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return j.current.useLayoutEffect(e,t)},e.useMemo=function(e,t){return j.current.useMemo(e,t)},e.useReducer=function(e,t,n){return j.current.useReducer(e,t,n)},e.useRef=function(e){return j.current.useRef(e)},e.useState=function(e){return j.current.useState(e)},e.useSyncExternalStore=function(e,t,n){return j.current.useSyncExternalStore(e,t,n)},e.useTransition=function(){return j.current.useTransition()},e.version=`18.0.0-fc46dba67-20220329`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=typeof setTimeout==`function`?setTimeout:null,_=typeof clearTimeout==`function`?clearTimeout:null,v=typeof setImmediate<`u`?setImmediate:null;typeof navigator<`u`&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function b(e){if(h=!1,y(e),!m){if(n(c)!==null)m=!0,ne(x);else{var t=n(l);t!==null&&A(b,t.startTime-e)}}}function x(t,i){m=!1,h&&(h=!1,_(C),C=-1),p=!0;var a=f;try{for(y(i),d=n(c);d!==null&&(!(d.expirationTime>i)||t&&!E());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=i);i=e.unstable_now(),typeof s==`function`?d.callback=s:d===n(c)&&r(c),y(i)}else r(c);d=n(c)}if(d!==null)var u=!0;else{var g=n(l);g!==null&&A(b,g.startTime-i),u=!1}return u}finally{d=null,f=a,p=!1}}var ee=!1,S=null,C=-1,w=5,T=-1;function E(){return!(e.unstable_now()-T<w)}function D(){if(S!==null){var t=e.unstable_now();T=t;var n=!0;try{n=S(!0,t)}finally{n?O():(ee=!1,S=null)}}else ee=!1}var O;if(typeof v==`function`)O=function(){v(D)};else if(typeof MessageChannel<`u`){var te=new MessageChannel,k=te.port2;te.port1.onmessage=D,O=function(){k.postMessage(null)}}else O=function(){g(D,0)};function ne(e){S=e,ee||(ee=!0,O())}function A(t,n){C=g(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_continueExecution=function(){m||p||(m=!0,ne(x))},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(_(C),C=-1):h=!0,A(b,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,ne(x))),r},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u(),n=f();function r(e){for(var t=`https://reactjs.org/docs/error-decoder.html?invariant=`+e,n=1;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n]);return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}var i=new Set,a={};function o(e,t){s(e,t),s(e+`Capture`,t)}function s(e,t){for(a[e]=t,e=0;e<t.length;e++)i.add(t[e])}var c=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0,l=Object.prototype.hasOwnProperty,d=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},m={};function h(e){return l.call(m,e)?!0:l.call(p,e)?!1:d.test(e)?m[e]=!0:(p[e]=!0,!1)}function g(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case`function`:case`symbol`:return!0;case`boolean`:return r?!1:n===null?(e=e.toLowerCase().slice(0,5),e!==`data-`&&e!==`aria-`):!n.acceptsBooleans;default:return!1}}function _(e,t,n,r){if(t==null||g(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function v(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var y={};`children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style`.split(` `).forEach(function(e){y[e]=new v(e,0,!1,e,null,!1,!1)}),[[`acceptCharset`,`accept-charset`],[`className`,`class`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`]].forEach(function(e){var t=e[0];y[t]=new v(t,1,!1,e[1],null,!1,!1)}),[`contentEditable`,`draggable`,`spellCheck`,`value`].forEach(function(e){y[e]=new v(e,2,!1,e.toLowerCase(),null,!1,!1)}),[`autoReverse`,`externalResourcesRequired`,`focusable`,`preserveAlpha`].forEach(function(e){y[e]=new v(e,2,!1,e,null,!1,!1)}),`allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope`.split(` `).forEach(function(e){y[e]=new v(e,3,!1,e.toLowerCase(),null,!1,!1)}),[`checked`,`multiple`,`muted`,`selected`].forEach(function(e){y[e]=new v(e,3,!0,e,null,!1,!1)}),[`capture`,`download`].forEach(function(e){y[e]=new v(e,4,!1,e,null,!1,!1)}),[`cols`,`rows`,`size`,`span`].forEach(function(e){y[e]=new v(e,6,!1,e,null,!1,!1)}),[`rowSpan`,`start`].forEach(function(e){y[e]=new v(e,5,!1,e.toLowerCase(),null,!1,!1)});var b=/[\-:]([a-z])/g;function x(e){return e[1].toUpperCase()}`accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height`.split(` `).forEach(function(e){var t=e.replace(b,x);y[t]=new v(t,1,!1,e,null,!1,!1)}),`xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type`.split(` `).forEach(function(e){var t=e.replace(b,x);y[t]=new v(t,1,!1,e,`http://www.w3.org/1999/xlink`,!1,!1)}),[`xml:base`,`xml:lang`,`xml:space`].forEach(function(e){var t=e.replace(b,x);y[t]=new v(t,1,!1,e,`http://www.w3.org/XML/1998/namespace`,!1,!1)}),[`tabIndex`,`crossOrigin`].forEach(function(e){y[e]=new v(e,1,!1,e.toLowerCase(),null,!1,!1)}),y.xlinkHref=new v(`xlinkHref`,1,!1,`xlink:href`,`http://www.w3.org/1999/xlink`,!0,!1),[`src`,`href`,`action`,`formAction`].forEach(function(e){y[e]=new v(e,1,!1,e.toLowerCase(),null,!0,!0)});function ee(e,t,n,r){var i=y.hasOwnProperty(t)?y[t]:null;(i===null?r||!(2<t.length)||t[0]!==`o`&&t[0]!==`O`||t[1]!==`n`&&t[1]!==`N`:i.type!==0)&&(_(t,n,i,r)&&(n=null),r||i===null?h(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,``+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type!==3&&``:n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&!0===n?``:``+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var S=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,C=Symbol.for(`react.element`),w=Symbol.for(`react.portal`),T=Symbol.for(`react.fragment`),E=Symbol.for(`react.strict_mode`),D=Symbol.for(`react.profiler`),O=Symbol.for(`react.provider`),te=Symbol.for(`react.context`),k=Symbol.for(`react.forward_ref`),ne=Symbol.for(`react.suspense`),A=Symbol.for(`react.suspense_list`),j=Symbol.for(`react.memo`),M=Symbol.for(`react.lazy`),re=Symbol.for(`react.offscreen`),N=Symbol.iterator;function ie(e){return typeof e!=`object`||!e?null:(e=N&&e[N]||e[`@@iterator`],typeof e==`function`?e:null)}var P=Object.assign,F;function I(e){if(F===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);F=t&&t[1]||``}return`
`+F+e}var L=!1;function ae(e,t){if(!e||L)return``;L=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t){if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(t,[])}catch(e){var r=e}Reflect.construct(e,[],t)}else{try{t.call()}catch(e){r=e}e.call(t.prototype)}}else{try{throw Error()}catch(e){r=e}e()}}catch(t){if(t&&r&&typeof t.stack==`string`){for(var i=t.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==a[s]){var c=`
`+i[o].replace(` at new `,` at `);return e.displayName&&c.includes(`<anonymous>`)&&(c=c.replace(`<anonymous>`,e.displayName)),c}while(1<=o&&0<=s);break}}}finally{L=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:``)?I(e):``}function oe(e){switch(e.tag){case 5:return I(e.type);case 16:return I(`Lazy`);case 13:return I(`Suspense`);case 19:return I(`SuspenseList`);case 0:case 2:case 15:return e=ae(e.type,!1),e;case 11:return e=ae(e.type.render,!1),e;case 1:return e=ae(e.type,!0),e;default:return``}}function se(e){if(e==null)return null;if(typeof e==`function`)return e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case T:return`Fragment`;case w:return`Portal`;case D:return`Profiler`;case E:return`StrictMode`;case ne:return`Suspense`;case A:return`SuspenseList`}if(typeof e==`object`)switch(e.$$typeof){case te:return(e.displayName||`Context`)+`.Consumer`;case O:return(e._context.displayName||`Context`)+`.Provider`;case k:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case j:return t=e.displayName||null,t===null?se(e.type)||`Memo`:t;case M:t=e._payload,e=e._init;try{return se(e(t))}catch{}}return null}function ce(e){var t=e.type;switch(e.tag){case 24:return`Cache`;case 9:return(t.displayName||`Context`)+`.Consumer`;case 10:return(t._context.displayName||`Context`)+`.Provider`;case 18:return`DehydratedFragment`;case 11:return e=t.render,e=e.displayName||e.name||``,t.displayName||(e===``?`ForwardRef`:`ForwardRef(`+e+`)`);case 7:return`Fragment`;case 5:return t;case 4:return`Portal`;case 3:return`Root`;case 6:return`Text`;case 16:return se(t);case 8:return t===E?`StrictMode`:`Mode`;case 22:return`Offscreen`;case 12:return`Profiler`;case 21:return`Scope`;case 13:return`Suspense`;case 19:return`SuspenseList`;case 25:return`TracingMarker`;case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t==`function`)return t.displayName||t.name||null;if(typeof t==`string`)return t}return null}function le(e){switch(typeof e){case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function ue(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function de(e){var t=ue(e)?`checked`:`value`,n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=``+e[t];if(!e.hasOwnProperty(t)&&n!==void 0&&typeof n.get==`function`&&typeof n.set==`function`){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function fe(e){e._valueTracker||=de(e)}function pe(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=ue(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}function me(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}function he(e,t){var n=t.checked;return P({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ge(e,t){var n=t.defaultValue==null?``:t.defaultValue,r=t.checked==null?t.defaultChecked:t.checked;n=le(t.value==null?n:t.value),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type===`checkbox`||t.type===`radio`?t.checked!=null:t.value!=null}}function _e(e,t){t=t.checked,t!=null&&ee(e,`checked`,t,!1)}function ve(e,t){_e(e,t);var n=le(t.value),r=t.type;if(n!=null)r===`number`?(n===0&&e.value===``||e.value!=n)&&(e.value=``+n):e.value!==``+n&&(e.value=``+n);else if(r===`submit`||r===`reset`){e.removeAttribute(`value`);return}t.hasOwnProperty(`value`)?be(e,t.type,n):t.hasOwnProperty(`defaultValue`)&&be(e,t.type,le(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ye(e,t,n){if(t.hasOwnProperty(`value`)||t.hasOwnProperty(`defaultValue`)){var r=t.type;if(!(r!==`submit`&&r!==`reset`||t.value!==void 0&&t.value!==null))return;t=``+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==``&&(e.name=``),e.defaultChecked=!!e._wrapperState.initialChecked,n!==``&&(e.name=n)}function be(e,t,n){(t!==`number`||me(e.ownerDocument)!==e)&&(n==null?e.defaultValue=``+e._wrapperState.initialValue:e.defaultValue!==``+n&&(e.defaultValue=``+n))}var xe=Array.isArray;function Se(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+le(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ce(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(r(91));return P({},t,{value:void 0,defaultValue:void 0,children:``+e._wrapperState.initialValue})}function we(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(r(92));if(xe(n)){if(1<n.length)throw Error(r(93));n=n[0]}t=n}t??=``,n=t}e._wrapperState={initialValue:le(n)}}function Te(e,t){var n=le(t.value),r=le(t.defaultValue);n!=null&&(n=``+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=``+r)}function Ee(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==``&&t!==null&&(e.value=t)}function De(e){switch(e){case`svg`:return`http://www.w3.org/2000/svg`;case`math`:return`http://www.w3.org/1998/Math/MathML`;default:return`http://www.w3.org/1999/xhtml`}}function Oe(e,t){return e==null||e===`http://www.w3.org/1999/xhtml`?De(t):e===`http://www.w3.org/2000/svg`&&t===`foreignObject`?`http://www.w3.org/1999/xhtml`:e}var ke,Ae=function(e){return typeof MSApp<`u`&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!==`http://www.w3.org/2000/svg`||`innerHTML`in e)e.innerHTML=t;else{for(ke||=document.createElement(`div`),ke.innerHTML=`<svg>`+t.valueOf().toString()+`</svg>`,t=ke.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function je(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Me={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ne=[`Webkit`,`ms`,`Moz`,`O`];Object.keys(Me).forEach(function(e){Ne.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Me[t]=Me[e]})});function Pe(e,t,n){return t==null||typeof t==`boolean`||t===``?``:n||typeof t!=`number`||t===0||Me.hasOwnProperty(e)&&Me[e]?(``+t).trim():t+`px`}function Fe(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=n.indexOf(`--`)===0,i=Pe(n,t[n],r);n===`float`&&(n=`cssFloat`),r?e.setProperty(n,i):e[n]=i}}var Ie=P({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Le(e,t){if(t){if(Ie[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(r(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(r(60));if(typeof t.dangerouslySetInnerHTML!=`object`||!(`__html`in t.dangerouslySetInnerHTML))throw Error(r(61))}if(t.style!=null&&typeof t.style!=`object`)throw Error(r(62))}}function Re(e,t){if(e.indexOf(`-`)===-1)return typeof t.is==`string`;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var ze=null;function Be(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ve=null,He=null,Ue=null;function We(e){if(e=Li(e)){if(typeof Ve!=`function`)throw Error(r(280));var t=e.stateNode;t&&(t=zi(t),Ve(e.stateNode,e.type,t))}}function Ge(e){He?Ue?Ue.push(e):Ue=[e]:He=e}function Ke(){if(He){var e=He,t=Ue;if(Ue=He=null,We(e),t)for(e=0;e<t.length;e++)We(t[e])}}function qe(e,t){return e(t)}function Je(){}var Ye=!1;function Xe(e,t,n){if(Ye)return e(t,n);Ye=!0;try{return qe(e,t,n)}finally{Ye=!1,(He!==null||Ue!==null)&&(Je(),Ke())}}function Ze(e,t){var n=e.stateNode;if(n===null)return null;var i=zi(n);if(i===null)return null;n=i[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(i=!i.disabled)||(e=e.type,i=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!i;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(r(231,t,typeof n));return n}var Qe=!1;if(c)try{var $e={};Object.defineProperty($e,"passive",{get:function(){Qe=!0}}),window.addEventListener(`test`,$e,$e),window.removeEventListener(`test`,$e,$e)}catch{Qe=!1}function et(e,t,n,r,i,a,o,s,c){var l=Array.prototype.slice.call(arguments,3);try{t.apply(n,l)}catch(e){this.onError(e)}}var tt=!1,nt=null,rt=!1,it=null,at={onError:function(e){tt=!0,nt=e}};function ot(e,t,n,r,i,a,o,s,c){tt=!1,nt=null,et.apply(at,arguments)}function st(e,t,n,i,a,o,s,c,l){if(ot.apply(this,arguments),tt){if(tt){var u=nt;tt=!1,nt=null}else throw Error(r(198));rt||(rt=!0,it=u)}}function ct(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function lt(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ut(e){if(ct(e)!==e)throw Error(r(188))}function dt(e){var t=e.alternate;if(!t){if(t=ct(e),t===null)throw Error(r(188));return t===e?e:null}for(var n=e,i=t;;){var a=n.return;if(a===null)break;var o=a.alternate;if(o===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===n)return ut(a),e;if(o===i)return ut(a),t;o=o.sibling}throw Error(r(188))}if(n.return!==i.return)n=a,i=o;else{for(var s=!1,c=a.child;c;){if(c===n){s=!0,n=a,i=o;break}if(c===i){s=!0,i=a,n=o;break}c=c.sibling}if(!s){for(c=o.child;c;){if(c===n){s=!0,n=o,i=a;break}if(c===i){s=!0,i=o,n=a;break}c=c.sibling}if(!s)throw Error(r(189))}}if(n.alternate!==i)throw Error(r(190))}if(n.tag!==3)throw Error(r(188));return n.stateNode.current===n?e:t}function R(e){return e=dt(e),e===null?null:ft(e)}function ft(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ft(e);if(t!==null)return t;e=e.sibling}return null}var pt=n.unstable_scheduleCallback,mt=n.unstable_cancelCallback,ht=n.unstable_shouldYield,gt=n.unstable_requestPaint,z=n.unstable_now,_t=n.unstable_getCurrentPriorityLevel,vt=n.unstable_ImmediatePriority,yt=n.unstable_UserBlockingPriority,bt=n.unstable_NormalPriority,xt=n.unstable_LowPriority,St=n.unstable_IdlePriority,Ct=null,wt=null;function Tt(e){if(wt&&typeof wt.onCommitFiberRoot==`function`)try{wt.onCommitFiberRoot(Ct,e,void 0,(e.current.flags&128)==128)}catch{}}var B=Math.clz32?Math.clz32:Ot,Et=Math.log,Dt=Math.LN2;function Ot(e){return e>>>=0,e===0?32:31-(Et(e)/Dt|0)|0}var kt=64,At=4194304;function jt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Mt(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~i;s===0?(a&=o,a!==0&&(r=jt(a))):r=jt(s)}else o=n&~i,o===0?a!==0&&(r=jt(a)):r=jt(o);if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,a=t&-t,i>=a||i===16&&a&4194240))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-B(t),i=1<<n,r|=e[n],t&=~i;return r}function Nt(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pt(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-B(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=Nt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}}function Ft(e){return e=e.pendingLanes&-1073741825,e===0?e&1073741824?1073741824:0:e}function It(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Lt(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-B(t),e[t]=n}function Rt(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-B(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function zt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-B(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var V=0;function Bt(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Vt,Ht,Ut,Wt,Gt,Kt=!1,qt=[],Jt=null,Yt=null,Xt=null,Zt=new Map,Qt=new Map,$t=[],en=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit`.split(` `);function tn(e,t){switch(e){case`focusin`:case`focusout`:Jt=null;break;case`dragenter`:case`dragleave`:Yt=null;break;case`mouseover`:case`mouseout`:Xt=null;break;case`pointerover`:case`pointerout`:Zt.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:Qt.delete(t.pointerId)}}function nn(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Li(t),t!==null&&Ht(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function rn(e,t,n,r,i){switch(t){case`focusin`:return Jt=nn(Jt,e,t,n,r,i),!0;case`dragenter`:return Yt=nn(Yt,e,t,n,r,i),!0;case`mouseover`:return Xt=nn(Xt,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return Zt.set(a,nn(Zt.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,Qt.set(a,nn(Qt.get(a)||null,e,t,n,r,i)),!0}return!1}function an(e){var t=Ii(e.target);if(t!==null){var n=ct(t);if(n!==null){if(t=n.tag,t===13){if(t=lt(n),t!==null){e.blockedOn=t,Gt(e.priority,function(){Ut(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function on(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=gn(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ze=r,n.target.dispatchEvent(r),ze=null}else return t=Li(n),t!==null&&Ht(t),e.blockedOn=n,!1;t.shift()}return!0}function sn(e,t,n){on(e)&&n.delete(t)}function cn(){Kt=!1,Jt!==null&&on(Jt)&&(Jt=null),Yt!==null&&on(Yt)&&(Yt=null),Xt!==null&&on(Xt)&&(Xt=null),Zt.forEach(sn),Qt.forEach(sn)}function ln(e,t){e.blockedOn===t&&(e.blockedOn=null,Kt||(Kt=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,cn)))}function un(e){function t(t){return ln(t,e)}if(0<qt.length){ln(qt[0],e);for(var n=1;n<qt.length;n++){var r=qt[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Jt!==null&&ln(Jt,e),Yt!==null&&ln(Yt,e),Xt!==null&&ln(Xt,e),Zt.forEach(t),Qt.forEach(t),n=0;n<$t.length;n++)r=$t[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<$t.length&&(n=$t[0],n.blockedOn===null);)an(n),n.blockedOn===null&&$t.shift()}var dn=S.ReactCurrentBatchConfig;function fn(e,t,n,r){var i=V,a=dn.transition;dn.transition=null;try{V=1,mn(e,t,n,r)}finally{V=i,dn.transition=a}}function pn(e,t,n,r){var i=V,a=dn.transition;dn.transition=null;try{V=4,mn(e,t,n,r)}finally{V=i,dn.transition=a}}function mn(e,t,n,r){var i=gn(e,t,n,r);if(i===null)li(e,t,r,hn,n),tn(e,r);else if(rn(i,e,t,n,r))r.stopPropagation();else if(tn(e,r),t&4&&-1<en.indexOf(e)){for(;i!==null;){var a=Li(i);if(a!==null&&Vt(a),a=gn(e,t,n,r),a===null&&li(e,t,r,hn,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else li(e,t,r,null,n)}var hn=null;function gn(e,t,n,r){if(hn=null,e=Be(r),e=Ii(e),e!==null){if(t=ct(e),t===null)e=null;else if(n=t.tag,n===13){if(e=lt(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}return hn=e,null}function _n(e){switch(e){case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 1;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`toggle`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 4;case`message`:switch(_t()){case vt:return 1;case yt:return 4;case bt:case xt:return 16;case St:return 536870912;default:return 16}default:return 16}}var vn=null,yn=null,bn=null;function xn(){if(bn)return bn;var e,t=yn,n=t.length,r,i=`value`in vn?vn.value:vn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return bn=i.slice(e,1<r?1-r:void 0)}function Sn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Cn(){return!0}function wn(){return!1}function Tn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Cn:wn,this.isPropagationStopped=wn,this}return P(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Cn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Cn)},persist:function(){},isPersistent:Cn}),t}var En={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Dn=Tn(En),On=P({},En,{view:0,detail:0}),kn=Tn(On),An,jn,Mn,Nn=P({},On,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Mn&&(Mn&&e.type===`mousemove`?(An=e.screenX-Mn.screenX,jn=e.screenY-Mn.screenY):jn=An=0,Mn=e),An)},movementY:function(e){return`movementY`in e?e.movementY:jn}}),Pn=Tn(Nn),Fn=Tn(P({},Nn,{dataTransfer:0})),In=Tn(P({},On,{relatedTarget:0})),Ln=Tn(P({},En,{animationName:0,elapsedTime:0,pseudoElement:0})),Rn=Tn(P({},En,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),zn=Tn(P({},En,{data:0})),Bn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Vn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Hn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Un(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Hn[e])?!!t[e]:!1}function Wn(){return Un}var Gn=Tn(P({},On,{key:function(e){if(e.key){var t=Bn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Sn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Vn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wn,charCode:function(e){return e.type===`keypress`?Sn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Sn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Kn=Tn(P({},Nn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),qn=Tn(P({},On,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wn})),Jn=Tn(P({},En,{propertyName:0,elapsedTime:0,pseudoElement:0})),Yn=Tn(P({},Nn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Xn=[9,13,27,32],Zn=c&&`CompositionEvent`in window,Qn=null;c&&`documentMode`in document&&(Qn=document.documentMode);var $n=c&&`TextEvent`in window&&!Qn,er=c&&(!Zn||Qn&&8<Qn&&11>=Qn),tr=` `,nr=!1;function rr(e,t){switch(e){case`keyup`:return Xn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function ir(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var ar=!1;function or(e,t){switch(e){case`compositionend`:return ir(t);case`keypress`:return t.which===32?(nr=!0,tr):null;case`textInput`:return e=t.data,e===tr&&nr?null:e;default:return null}}function sr(e,t){if(ar)return e===`compositionend`||!Zn&&rr(e,t)?(e=xn(),bn=yn=vn=null,ar=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return er&&t.locale!==`ko`?null:t.data;default:return null}}var cr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!cr[e.type]:t===`textarea`}function ur(e,t,n,r){Ge(r),t=di(t,`onChange`),0<t.length&&(n=new Dn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var dr=null,fr=null;function pr(e){ii(e,0)}function mr(e){if(pe(Ri(e)))return e}function hr(e,t){if(e===`change`)return t}var gr=!1;if(c){var _r;if(c){var vr=`oninput`in document;if(!vr){var yr=document.createElement(`div`);yr.setAttribute(`oninput`,`return;`),vr=typeof yr.oninput==`function`}_r=vr}else _r=!1;gr=_r&&(!document.documentMode||9<document.documentMode)}function br(){dr&&(dr.detachEvent(`onpropertychange`,xr),fr=dr=null)}function xr(e){if(e.propertyName===`value`&&mr(fr)){var t=[];ur(t,fr,e,Be(e)),Xe(pr,t)}}function Sr(e,t,n){e===`focusin`?(br(),dr=t,fr=n,dr.attachEvent(`onpropertychange`,xr)):e===`focusout`&&br()}function Cr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return mr(fr)}function wr(e,t){if(e===`click`)return mr(t)}function Tr(e,t){if(e===`input`||e===`change`)return mr(t)}function Er(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Dr=typeof Object.is==`function`?Object.is:Er;function Or(e,t){if(Dr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!l.call(t,i)||!Dr(e[i],t[i]))return!1}return!0}function kr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ar(e,t){var n=kr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=kr(n)}}function jr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?jr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Mr(){for(var e=window,t=me();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=me(e.document)}return t}function Nr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}function Pr(e){var t=Mr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&jr(n.ownerDocument.documentElement,n)){if(r!==null&&Nr(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),`selectionStart`in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=Ar(n,a);var o=Ar(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus==`function`&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Fr=c&&`documentMode`in document&&11>=document.documentMode,Ir=null,Lr=null,Rr=null,zr=!1;function Br(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zr||Ir==null||Ir!==me(r)||(r=Ir,`selectionStart`in r&&Nr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Rr&&Or(Rr,r)||(Rr=r,r=di(Lr,`onSelect`),0<r.length&&(t=new Dn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Ir)))}function Vr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Hr={animationend:Vr(`Animation`,`AnimationEnd`),animationiteration:Vr(`Animation`,`AnimationIteration`),animationstart:Vr(`Animation`,`AnimationStart`),transitionend:Vr(`Transition`,`TransitionEnd`)},Ur={},Wr={};c&&(Wr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Hr.animationend.animation,delete Hr.animationiteration.animation,delete Hr.animationstart.animation),`TransitionEvent`in window||delete Hr.transitionend.transition);function Gr(e){if(Ur[e])return Ur[e];if(!Hr[e])return e;var t=Hr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Wr)return Ur[e]=t[n];return e}var Kr=Gr(`animationend`),qr=Gr(`animationiteration`),Jr=Gr(`animationstart`),Yr=Gr(`transitionend`),Xr=new Map,Zr=`abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);function Qr(e,t){Xr.set(e,t),o(t,[e])}for(var $r=0;$r<Zr.length;$r++){var ei=Zr[$r];Qr(ei.toLowerCase(),`on`+(ei[0].toUpperCase()+ei.slice(1)))}Qr(Kr,`onAnimationEnd`),Qr(qr,`onAnimationIteration`),Qr(Jr,`onAnimationStart`),Qr(`dblclick`,`onDoubleClick`),Qr(`focusin`,`onFocus`),Qr(`focusout`,`onBlur`),Qr(Yr,`onTransitionEnd`),s(`onMouseEnter`,[`mouseout`,`mouseover`]),s(`onMouseLeave`,[`mouseout`,`mouseover`]),s(`onPointerEnter`,[`pointerout`,`pointerover`]),s(`onPointerLeave`,[`pointerout`,`pointerover`]),o(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),o(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),o(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),o(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),o(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),o(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var ti=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),ni=new Set(`cancel close invalid load scroll toggle`.split(` `).concat(ti));function ri(e,t,n){var r=e.type||`unknown-event`;e.currentTarget=n,st(r,t,void 0,e),e.currentTarget=null}function ii(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;ri(i,s,l),a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;ri(i,s,l),a=c}}}if(rt)throw e=it,rt=!1,it=null,e}function H(e,t){var n=t[Ni];n===void 0&&(n=t[Ni]=new Set);var r=e+`__bubble`;n.has(r)||(ci(t,e,2,!1),n.add(r))}function ai(e,t,n){var r=0;t&&(r|=4),ci(n,e,r,t)}var oi=`_reactListening`+Math.random().toString(36).slice(2);function si(e){if(!e[oi]){e[oi]=!0,i.forEach(function(t){t!==`selectionchange`&&(ni.has(t)||ai(t,!1,e),ai(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[oi]||(t[oi]=!0,ai(`selectionchange`,!1,t))}}function ci(e,t,n,r){switch(_n(t)){case 1:var i=fn;break;case 4:i=pn;break;default:i=mn}n=i.bind(null,t,n,e),i=void 0,!Qe||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function li(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;o=o.return}for(;s!==null;){if(o=Ii(s),o===null)return;if(c=o.tag,c===5||c===6){r=a=o;continue a}s=s.parentNode}}r=r.return}Xe(function(){var r=a,i=Be(n),o=[];a:{var s=Xr.get(e);if(s!==void 0){var c=Dn,l=e;switch(e){case`keypress`:if(Sn(n)===0)break a;case`keydown`:case`keyup`:c=Gn;break;case`focusin`:l=`focus`,c=In;break;case`focusout`:l=`blur`,c=In;break;case`beforeblur`:case`afterblur`:c=In;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:c=Pn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:c=Fn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:c=qn;break;case Kr:case qr:case Jr:c=Ln;break;case Yr:c=Jn;break;case`scroll`:c=kn;break;case`wheel`:c=Yn;break;case`copy`:case`cut`:case`paste`:c=Rn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:c=Kn}var u=!!(t&4),d=!u&&e===`scroll`,f=u?s===null?null:s+`Capture`:s;u=[];for(var p=r,m;p!==null;){m=p;var h=m.stateNode;if(m.tag===5&&h!==null&&(m=h,f!==null&&(h=Ze(p,f),h!=null&&u.push(ui(p,h,m)))),d)break;p=p.return}0<u.length&&(s=new c(s,l,null,n,i),o.push({event:s,listeners:u}))}}if(!(t&7)){a:{if(s=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,s&&n!==ze&&(l=n.relatedTarget||n.fromElement)&&(Ii(l)||l[Mi]))break a;if((c||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,c?(l=n.relatedTarget||n.toElement,c=r,l=l?Ii(l):null,l!==null&&(d=ct(l),l!==d||l.tag!==5&&l.tag!==6)&&(l=null)):(c=null,l=r),c!==l)){if(u=Pn,h=`onMouseLeave`,f=`onMouseEnter`,p=`mouse`,(e===`pointerout`||e===`pointerover`)&&(u=Kn,h=`onPointerLeave`,f=`onPointerEnter`,p=`pointer`),d=c==null?s:Ri(c),m=l==null?s:Ri(l),s=new u(h,p+`leave`,c,n,i),s.target=d,s.relatedTarget=m,h=null,Ii(i)===r&&(u=new u(f,p+`enter`,l,n,i),u.target=m,u.relatedTarget=d,h=u),d=h,c&&l)b:{for(u=c,f=l,p=0,m=u;m;m=fi(m))p++;for(m=0,h=f;h;h=fi(h))m++;for(;0<p-m;)u=fi(u),p--;for(;0<m-p;)f=fi(f),m--;for(;p--;){if(u===f||f!==null&&u===f.alternate)break b;u=fi(u),f=fi(f)}u=null}else u=null;c!==null&&pi(o,s,c,u,!1),l!==null&&d!==null&&pi(o,d,l,u,!0)}}a:{if(s=r?Ri(r):window,c=s.nodeName&&s.nodeName.toLowerCase(),c===`select`||c===`input`&&s.type===`file`)var g=hr;else if(lr(s)){if(gr)g=Tr;else{g=Cr;var _=Sr}}else(c=s.nodeName)&&c.toLowerCase()===`input`&&(s.type===`checkbox`||s.type===`radio`)&&(g=wr);if(g&&=g(e,r)){ur(o,g,n,i);break a}_&&_(e,s,r),e===`focusout`&&(_=s._wrapperState)&&_.controlled&&s.type===`number`&&be(s,`number`,s.value)}switch(_=r?Ri(r):window,e){case`focusin`:(lr(_)||_.contentEditable===`true`)&&(Ir=_,Lr=r,Rr=null);break;case`focusout`:Rr=Lr=Ir=null;break;case`mousedown`:zr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:zr=!1,Br(o,n,i);break;case`selectionchange`:if(Fr)break;case`keydown`:case`keyup`:Br(o,n,i)}var v;if(Zn)b:{switch(e){case`compositionstart`:var y=`onCompositionStart`;break b;case`compositionend`:y=`onCompositionEnd`;break b;case`compositionupdate`:y=`onCompositionUpdate`;break b}y=void 0}else ar?rr(e,n)&&(y=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(y=`onCompositionStart`);y&&(er&&n.locale!==`ko`&&(ar||y!==`onCompositionStart`?y===`onCompositionEnd`&&ar&&(v=xn()):(vn=i,yn=`value`in vn?vn.value:vn.textContent,ar=!0)),_=di(r,y),0<_.length&&(y=new zn(y,e,null,n,i),o.push({event:y,listeners:_}),v?y.data=v:(v=ir(n),v!==null&&(y.data=v)))),(v=$n?or(e,n):sr(e,n))&&(r=di(r,`onBeforeInput`),0<r.length&&(i=new zn(`onBeforeInput`,`beforeinput`,null,n,i),o.push({event:i,listeners:r}),i.data=v))}ii(o,t)})}function ui(e,t,n){return{instance:e,listener:t,currentTarget:n}}function di(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=Ze(e,n),a!=null&&r.unshift(ui(e,a,i)),a=Ze(e,t),a!=null&&r.push(ui(e,a,i))),e=e.return}return r}function fi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function pi(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(c!==null&&c===r)break;s.tag===5&&l!==null&&(s=l,i?(c=Ze(n,a),c!=null&&o.unshift(ui(n,c,s))):i||(c=Ze(n,a),c!=null&&o.push(ui(n,c,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var mi=/\r\n?/g,hi=/\u0000|\uFFFD/g;function gi(e){return(typeof e==`string`?e:``+e).replace(mi,`
`).replace(hi,``)}function _i(e,t,n){if(t=gi(t),gi(e)!==t&&n)throw Error(r(425))}function vi(){}var yi=null;function bi(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var xi=typeof setTimeout==`function`?setTimeout:void 0,Si=typeof clearTimeout==`function`?clearTimeout:void 0,Ci=typeof Promise==`function`?Promise:void 0,wi=typeof queueMicrotask==`function`?queueMicrotask:Ci===void 0?xi:function(e){return Ci.resolve(null).then(e).catch(Ti)};function Ti(e){setTimeout(function(){throw e})}function Ei(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`){if(r===0){e.removeChild(i),un(t);return}r--}else n!==`$`&&n!==`$?`&&n!==`$!`||r++}n=i}while(n);un(t)}function Di(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`)break;if(t===`/$`)return null}}return e}function Oi(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`){if(t===0)return e;t--}else n===`/$`&&t++}e=e.previousSibling}return null}var ki=Math.random().toString(36).slice(2),Ai=`__reactFiber$`+ki,ji=`__reactProps$`+ki,Mi=`__reactContainer$`+ki,Ni=`__reactEvents$`+ki,Pi=`__reactListeners$`+ki,Fi=`__reactHandles$`+ki;function Ii(e){var t=e[Ai];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Mi]||n[Ai]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Oi(e);e!==null;){if(n=e[Ai])return n;e=Oi(e)}return t}e=n,n=e.parentNode}return null}function Li(e){return e=e[Ai]||e[Mi],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ri(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(r(33))}function zi(e){return e[ji]||null}var Bi=[],Vi=-1;function Hi(e){return{current:e}}function U(e){0>Vi||(e.current=Bi[Vi],Bi[Vi]=null,Vi--)}function W(e,t){Vi++,Bi[Vi]=e.current,e.current=t}var Ui={},Wi=Hi(Ui),Gi=Hi(!1),Ki=Ui;function qi(e,t){var n=e.type.contextTypes;if(!n)return Ui;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ji(e){return e=e.childContextTypes,e!=null}function Yi(){U(Gi),U(Wi)}function Xi(e,t,n){if(Wi.current!==Ui)throw Error(r(168));W(Wi,t),W(Gi,n)}function Zi(e,t,n){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!=`function`)return n;for(var a in i=i.getChildContext(),i)if(!(a in t))throw Error(r(108,ce(e)||`Unknown`,a));return P({},n,i)}function Qi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ui,Ki=Wi.current,W(Wi,e),W(Gi,Gi.current),!0}function $i(e,t,n){var i=e.stateNode;if(!i)throw Error(r(169));n?(e=Zi(e,t,Ki),i.__reactInternalMemoizedMergedChildContext=e,U(Gi),U(Wi),W(Wi,e)):U(Gi),W(Gi,n)}var ea=null,ta=!1,na=!1;function ra(e){ea===null?ea=[e]:ea.push(e)}function ia(e){ta=!0,ra(e)}function aa(){if(!na&&ea!==null){na=!0;var e=0,t=V;try{var n=ea;for(V=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ea=null,ta=!1}catch(t){throw ea!==null&&(ea=ea.slice(e+1)),pt(vt,aa),t}finally{V=t,na=!1}}return null}var oa=S.ReactCurrentBatchConfig;function sa(e,t){if(e&&e.defaultProps){for(var n in t=P({},t),e=e.defaultProps,e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var ca=Hi(null),la=null,ua=null,da=null;function fa(){da=ua=la=null}function pa(e){var t=ca.current;U(ca),e._currentValue=t}function ma(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function ha(e,t){la=e,da=ua=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Ns=!0),e.firstContext=null)}function ga(e){var t=e._currentValue;if(da!==e){if(e={context:e,memoizedValue:t,next:null},ua===null){if(la===null)throw Error(r(308));ua=e,la.dependencies={lanes:0,firstContext:e}}else ua=ua.next=e}return t}var _a=null,va=!1;function ya(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ba(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function xa(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Sa(e,t){var n=e.updateQueue;n!==null&&(n=n.shared,Z!==null&&e.mode&1&&!(X&2)?(e=n.interleaved,e===null?(t.next=t,_a===null?_a=[n]:_a.push(n)):(t.next=e.next,e.next=t),n.interleaved=t):(e=n.pending,e===null?t.next=t:(t.next=e.next,e.next=t),n.pending=t))}function Ca(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194240)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,zt(e,n)}}function wa(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n}else e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ta(e,t,n,r){var i=e.updateQueue;va=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane,p=s.eventTime;if((r&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});a:{var m=e,h=s;switch(f=t,p=n,h.tag){case 1:if(m=h.payload,typeof m==`function`){d=m.call(p,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=h.payload,f=typeof m==`function`?m.call(p,d,f):m,f==null)break a;d=P({},d,f);break a;case 2:va=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[s]:f.push(s))}else p={eventTime:p,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;f=s,s=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);Rc|=o,e.lanes=o,e.memoizedState=d}}function Ea(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],a=i.callback;if(a!==null){if(i.callback=null,i=n,typeof a!=`function`)throw Error(r(191,a));a.call(i)}}}var Da=new t.Component().refs;function Oa(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:P({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ka={isMounted:function(e){return(e=e._reactInternals)?ct(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=tl(),i=nl(e),a=xa(r,i);a.payload=t,n!=null&&(a.callback=n),Sa(e,a),t=rl(e,i,r),t!==null&&Ca(t,e,i)},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=tl(),i=nl(e),a=xa(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),Sa(e,a),t=rl(e,i,r),t!==null&&Ca(t,e,i)},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=tl(),r=nl(e),i=xa(n,r);i.tag=2,t!=null&&(i.callback=t),Sa(e,i),t=rl(e,r,n),t!==null&&Ca(t,e,r)}};function Aa(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Or(n,r)||!Or(i,a):!0}function ja(e,t,n){var r=!1,i=Ui,a=t.contextType;return typeof a==`object`&&a?a=ga(a):(i=Ji(t)?Ki:Wi.current,r=t.contextTypes,a=(r=r!=null)?qi(e,i):Ui),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ka,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function Ma(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ka.enqueueReplaceState(t,t.state,null)}function Na(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Da,ya(e);var a=t.contextType;typeof a==`object`&&a?i.context=ga(a):(a=Ji(t)?Ki:Wi.current,i.context=qi(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a==`function`&&(Oa(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps==`function`||typeof i.getSnapshotBeforeUpdate==`function`||typeof i.UNSAFE_componentWillMount!=`function`&&typeof i.componentWillMount!=`function`||(t=i.state,typeof i.componentWillMount==`function`&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount==`function`&&i.UNSAFE_componentWillMount(),t!==i.state&&ka.enqueueReplaceState(i,i.state,null),Ta(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount==`function`&&(e.flags|=4194308)}var Pa=[],Fa=0,Ia=null,La=0,Ra=[],za=0,Ba=null,Va=1,Ha=``;function Ua(e,t){Pa[Fa++]=La,Pa[Fa++]=Ia,Ia=e,La=t}function Wa(e,t,n){Ra[za++]=Va,Ra[za++]=Ha,Ra[za++]=Ba,Ba=e;var r=Va;e=Ha;var i=32-B(r)-1;r&=~(1<<i),n+=1;var a=32-B(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Va=1<<32-B(t)+i|n<<i|r,Ha=a+e}else Va=1<<a|n<<i|r,Ha=e}function Ga(e){e.return!==null&&(Ua(e,1),Wa(e,1,0))}function Ka(e){for(;e===Ia;)Ia=Pa[--Fa],Pa[Fa]=null,La=Pa[--Fa],Pa[Fa]=null;for(;e===Ba;)Ba=Ra[--za],Ra[za]=null,Ha=Ra[--za],Ra[za]=null,Va=Ra[--za],Ra[za]=null}var qa=null,Ja=null,G=!1,Ya=null;function Xa(e,t){var n=Il(5,null,null,0);n.elementType=`DELETED`,n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Za(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null&&(e.stateNode=t,qa=e,Ja=Di(t.firstChild),!0);case 6:return t=e.pendingProps===``||t.nodeType!==3?null:t,t!==null&&(e.stateNode=t,qa=e,Ja=null,!0);case 13:return t=t.nodeType===8?t:null,t!==null&&(n=Ba===null?null:{id:Va,overflow:Ha},e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Il(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,qa=e,Ja=null,!0);default:return!1}}function Qa(e){return!!(e.mode&1)&&!(e.flags&128)}function $a(e){if(G){var t=Ja;if(t){var n=t;if(!Za(e,t)){if(Qa(e))throw Error(r(418));t=Di(n.nextSibling);var i=qa;t&&Za(e,t)?Xa(i,n):(e.flags=e.flags&-4097|2,G=!1,qa=e)}}else{if(Qa(e))throw Error(r(418));e.flags=e.flags&-4097|2,G=!1,qa=e}}}function eo(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;qa=e}function to(e){if(e!==qa)return!1;if(!G)return eo(e),G=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!==`head`&&t!==`body`&&!bi(e.type,e.memoizedProps)),t&&=Ja){if(Qa(e)){for(e=Ja;e;)e=Di(e.nextSibling);throw Error(r(418))}for(;t;)Xa(e,t),t=Di(t.nextSibling)}if(eo(e),e.tag===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(r(317));a:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`){if(t===0){Ja=Di(e.nextSibling);break a}t--}else n!==`$`&&n!==`$!`&&n!==`$?`||t++}e=e.nextSibling}Ja=null}}else Ja=qa?Di(e.stateNode.nextSibling):null;return!0}function no(){Ja=qa=null,G=!1}function ro(e){Ya===null?Ya=[e]:Ya.push(e)}function io(e,t,n){if(e=n.ref,e!==null&&typeof e!=`function`&&typeof e!=`object`){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(r(309));var i=n.stateNode}if(!i)throw Error(r(147,e));var a=i,o=``+e;return t!==null&&t.ref!==null&&typeof t.ref==`function`&&t.ref._stringRef===o?t.ref:(t=function(e){var t=a.refs;t===Da&&(t=a.refs={}),e===null?delete t[o]:t[o]=e},t._stringRef=o,t)}if(typeof e!=`string`)throw Error(r(284));if(!n._owner)throw Error(r(290,e))}return e}function ao(e,t){throw e=Object.prototype.toString.call(t),Error(r(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e))}function oo(e){var t=e._init;return t(e._payload)}function so(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function i(e,t){for(e=new Map;t!==null;)t.key===null?e.set(t.index,t):e.set(t.key,t),t=t.sibling;return e}function a(e,t){return e=zl(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=2,n):(r=r.index,r<n?(t.flags|=2,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=2),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=Ul(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===T?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===M&&oo(i)===t.type)?(r=a(t,n.props),r.ref=io(e,t,n),r.return=e,r):(r=Bl(n.type,n.key,n.props,null,e.mode,r),r.ref=io(e,t,n),r.return=e,r)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Wl(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=Vl(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`)return t=Ul(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case C:return n=Bl(t.type,t.key,t.props,null,e.mode,n),n.ref=io(e,null,t),n.return=e,n;case w:return t=Wl(t,e.mode,n),t.return=e,t;case M:var r=t._init;return f(e,r(t._payload),n)}if(xe(t)||ie(t))return t=Vl(t,e.mode,n,null),t.return=e,t;ao(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case C:return n.key===i?l(e,t,n,r):null;case w:return n.key===i?u(e,t,n,r):null;case M:return i=n._init,p(e,t,i(n._payload),r)}if(xe(n)||ie(n))return i===null?d(e,t,n,r,null):null;ao(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case C:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case w:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case M:var a=r._init;return m(e,t,n,a(r._payload),i)}if(xe(r)||ie(r))return e=e.get(n)||null,d(t,e,r,i,null);ao(t,r)}return null}function h(r,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(r,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(r,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(r,d),G&&Ua(r,h),l;if(d===null){for(;h<s.length;h++)d=f(r,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return G&&Ua(r,h),l}for(d=i(r,d);h<s.length;h++)g=m(d,r,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(r,e)}),G&&Ua(r,h),l}function g(a,s,c,l){var u=ie(c);if(typeof u!=`function`)throw Error(r(150));if(c=u.call(c),c==null)throw Error(r(151));for(var d=u=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),G&&Ua(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return G&&Ua(a,g),u}for(h=i(a,h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),G&&Ua(a,g),u}function _(e,r,i,o){if(typeof i==`object`&&i&&i.type===T&&i.key===null&&(i=i.props.children),typeof i==`object`&&i){switch(i.$$typeof){case C:a:{for(var c=i.key,l=r;l!==null;){if(l.key===c){if(c=i.type,c===T){if(l.tag===7){n(e,l.sibling),r=a(l,i.props.children),r.return=e,e=r;break a}}else if(l.elementType===c||typeof c==`object`&&c&&c.$$typeof===M&&oo(c)===l.type){n(e,l.sibling),r=a(l,i.props),r.ref=io(e,l,i),r.return=e,e=r;break a}n(e,l);break}t(e,l),l=l.sibling}i.type===T?(r=Vl(i.props.children,e.mode,o,i.key),r.return=e,e=r):(o=Bl(i.type,i.key,i.props,null,e.mode,o),o.ref=io(e,r,i),o.return=e,e=o)}return s(e);case w:a:{for(l=i.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===i.containerInfo&&r.stateNode.implementation===i.implementation){n(e,r.sibling),r=a(r,i.children||[]),r.return=e,e=r;break a}n(e,r);break}t(e,r),r=r.sibling}r=Wl(i,e.mode,o),r.return=e,e=r}return s(e);case M:return l=i._init,_(e,r,l(i._payload),o)}if(xe(i))return h(e,r,i,o);if(ie(i))return g(e,r,i,o);ao(e,i)}return typeof i==`string`&&i!==``||typeof i==`number`?(i=``+i,r!==null&&r.tag===6?(n(e,r.sibling),r=a(r,i),r.return=e,e=r):(n(e,r),r=Ul(i,e.mode,o),r.return=e,e=r),s(e)):n(e,r)}return _}var co=so(!0),lo=so(!1),uo={},fo=Hi(uo),po=Hi(uo),mo=Hi(uo);function ho(e){if(e===uo)throw Error(r(174));return e}function go(e,t){switch(W(mo,t),W(po,e),W(fo,uo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Oe(null,``);break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Oe(t,e)}U(fo),W(fo,t)}function _o(){U(fo),U(po),U(mo)}function vo(e){ho(mo.current);var t=ho(fo.current),n=Oe(t,e.type);t!==n&&(W(po,e),W(fo,n))}function yo(e){po.current===e&&(U(fo),U(po))}var K=Hi(0);function bo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data===`$?`||n.data===`$!`))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var xo=[];function So(){for(var e=0;e<xo.length;e++)xo[e]._workInProgressVersionPrimary=null;xo.length=0}var Co=S.ReactCurrentDispatcher,wo=S.ReactCurrentBatchConfig,To=0,q=null,Eo=null,J=null,Do=!1,Oo=!1,ko=0,Ao=0;function jo(){throw Error(r(321))}function Mo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Dr(e[n],t[n]))return!1;return!0}function No(e,t,n,i,a,o){if(To=o,q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Co.current=e===null||e.memoizedState===null?hs:gs,e=n(i,a),Oo){o=0;do{if(Oo=!1,ko=0,25<=o)throw Error(r(301));o+=1,J=Eo=null,t.updateQueue=null,Co.current=_s,e=n(i,a)}while(Oo)}if(Co.current=ms,t=Eo!==null&&Eo.next!==null,To=0,J=Eo=q=null,Do=!1,t)throw Error(r(300));return e}function Po(){var e=ko!==0;return ko=0,e}function Fo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return J===null?q.memoizedState=J=e:J=J.next=e,J}function Io(){if(Eo===null){var e=q.alternate;e=e===null?null:e.memoizedState}else e=Eo.next;var t=J===null?q.memoizedState:J.next;if(t!==null)J=t,Eo=e;else{if(e===null)throw Error(r(310));Eo=e,e={memoizedState:Eo.memoizedState,baseState:Eo.baseState,baseQueue:Eo.baseQueue,queue:Eo.queue,next:null},J===null?q.memoizedState=J=e:J=J.next=e}return J}function Lo(e,t){return typeof t==`function`?t(e):t}function Ro(e){var t=Io(),n=t.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=e;var i=Eo,a=i.baseQueue,o=n.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}i.baseQueue=a=o,n.pending=null}if(a!==null){o=a.next,i=i.baseState;var c=s=null,l=null,u=o;do{var d=u.lane;if((To&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:e(i,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(c=l=f,s=i):l=l.next=f,q.lanes|=d,Rc|=d}u=u.next}while(u!==null&&u!==o);l===null?s=i:l.next=c,Dr(i,t.memoizedState)||(Ns=!0),t.memoizedState=i,t.baseState=s,t.baseQueue=l,n.lastRenderedState=i}if(e=n.interleaved,e!==null){a=e;do o=a.lane,q.lanes|=o,Rc|=o,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function zo(e){var t=Io(),n=t.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=e;var i=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Dr(o,t.memoizedState)||(Ns=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,i]}function Bo(){}function Vo(e,t){var n=q,i=Io(),a=t(),o=!Dr(i.memoizedState,a);if(o&&(i.memoizedState=a,Ns=!0),i=i.queue,Qo(Wo.bind(null,n,i,e),[e]),i.getSnapshot!==t||o||J!==null&&J.memoizedState.tag&1){if(n.flags|=2048,qo(9,Uo.bind(null,n,i,a,t),void 0,null),Z===null)throw Error(r(349));To&30||Ho(n,t,a)}return a}function Ho(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=q.updateQueue,t===null?(t={lastEffect:null,stores:null},q.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Uo(e,t,n,r){t.value=n,t.getSnapshot=r,Go(t)&&rl(e,1,-1)}function Wo(e,t,n){return n(function(){Go(t)&&rl(e,1,-1)})}function Go(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Dr(e,n)}catch{return!0}}function Ko(e){var t=Fo();return typeof e==`function`&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Lo,lastRenderedState:e},t.queue=e,e=e.dispatch=ls.bind(null,q,e),[t.memoizedState,e]}function qo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=q.updateQueue,t===null?(t={lastEffect:null,stores:null},q.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Jo(){return Io().memoizedState}function Yo(e,t,n,r){var i=Fo();q.flags|=e,i.memoizedState=qo(1|t,n,void 0,r===void 0?null:r)}function Xo(e,t,n,r){var i=Io();r=r===void 0?null:r;var a=void 0;if(Eo!==null){var o=Eo.memoizedState;if(a=o.destroy,r!==null&&Mo(r,o.deps)){i.memoizedState=qo(t,n,a,r);return}}q.flags|=e,i.memoizedState=qo(1|t,n,a,r)}function Zo(e,t){return Yo(8390656,8,e,t)}function Qo(e,t){return Xo(2048,8,e,t)}function $o(e,t){return Xo(4,2,e,t)}function es(e,t){return Xo(4,4,e,t)}function ts(e,t){if(typeof t==`function`)return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ns(e,t,n){return n=n==null?null:n.concat([e]),Xo(4,4,ts.bind(null,t,e),n)}function rs(){}function is(e,t){var n=Io();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Mo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function as(e,t){var n=Io();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Mo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function os(e,t){var n=V;V=n!==0&&4>n?n:4,e(!0);var r=wo.transition;wo.transition={};try{e(!1),t()}finally{V=n,wo.transition=r}}function ss(){return Io().memoizedState}function cs(e,t,n){var r=nl(e);n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},us(e)?ds(t,n):(fs(e,t,n),n=tl(),e=rl(e,r,n),e!==null&&ps(e,t,r))}function ls(e,t,n){var r=nl(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(us(e))ds(t,i);else{fs(e,t,i);var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Dr(s,o))return}catch{}n=tl(),e=rl(e,r,n),e!==null&&ps(e,t,r)}}function us(e){var t=e.alternate;return e===q||t!==null&&t===q}function ds(e,t){Oo=Do=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function fs(e,t,n){Z!==null&&e.mode&1&&!(X&2)?(e=t.interleaved,e===null?(n.next=n,_a===null?_a=[t]:_a.push(t)):(n.next=e.next,e.next=n),t.interleaved=n):(e=t.pending,e===null?n.next=n:(n.next=e.next,e.next=n),t.pending=n)}function ps(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,zt(e,n)}}var ms={readContext:ga,useCallback:jo,useContext:jo,useEffect:jo,useImperativeHandle:jo,useInsertionEffect:jo,useLayoutEffect:jo,useMemo:jo,useReducer:jo,useRef:jo,useState:jo,useDebugValue:jo,useDeferredValue:jo,useTransition:jo,useMutableSource:jo,useSyncExternalStore:jo,useId:jo,unstable_isNewReconciler:!1},hs={readContext:ga,useCallback:function(e,t){return Fo().memoizedState=[e,t===void 0?null:t],e},useContext:ga,useEffect:Zo,useImperativeHandle:function(e,t,n){return n=n==null?null:n.concat([e]),Yo(4194308,4,ts.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Yo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Yo(4,2,e,t)},useMemo:function(e,t){var n=Fo();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Fo();return t=n===void 0?t:n(t),r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=cs.bind(null,q,e),[r.memoizedState,e]},useRef:function(e){var t=Fo();return e={current:e},t.memoizedState=e},useState:Ko,useDebugValue:rs,useDeferredValue:function(e){var t=Ko(e),n=t[0],r=t[1];return Zo(function(){var t=wo.transition;wo.transition={};try{r(e)}finally{wo.transition=t}},[e]),n},useTransition:function(){var e=Ko(!1),t=e[0];return e=os.bind(null,e[1]),Fo().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var i=q,a=Fo();if(G){if(n===void 0)throw Error(r(407));n=n()}else{if(n=t(),Z===null)throw Error(r(349));To&30||Ho(i,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,Zo(Wo.bind(null,i,o,e),[e]),i.flags|=2048,qo(9,Uo.bind(null,i,o,n,t),void 0,null),n},useId:function(){var e=Fo(),t=Z.identifierPrefix;if(G){var n=Ha,r=Va;n=(r&~(1<<32-B(r)-1)).toString(32)+n,t=`:`+t+`R`+n,n=ko++,0<n&&(t+=`H`+n.toString(32)),t+=`:`}else n=Ao++,t=`:`+t+`r`+n.toString(32)+`:`;return e.memoizedState=t},unstable_isNewReconciler:!1},gs={readContext:ga,useCallback:is,useContext:ga,useEffect:Qo,useImperativeHandle:ns,useInsertionEffect:$o,useLayoutEffect:es,useMemo:as,useReducer:Ro,useRef:Jo,useState:function(){return Ro(Lo)},useDebugValue:rs,useDeferredValue:function(e){var t=Ro(Lo),n=t[0],r=t[1];return Qo(function(){var t=wo.transition;wo.transition={};try{r(e)}finally{wo.transition=t}},[e]),n},useTransition:function(){return[Ro(Lo)[0],Io().memoizedState]},useMutableSource:Bo,useSyncExternalStore:Vo,useId:ss,unstable_isNewReconciler:!1},_s={readContext:ga,useCallback:is,useContext:ga,useEffect:Qo,useImperativeHandle:ns,useInsertionEffect:$o,useLayoutEffect:es,useMemo:as,useReducer:zo,useRef:Jo,useState:function(){return zo(Lo)},useDebugValue:rs,useDeferredValue:function(e){var t=zo(Lo),n=t[0],r=t[1];return Qo(function(){var t=wo.transition;wo.transition={};try{r(e)}finally{wo.transition=t}},[e]),n},useTransition:function(){return[zo(Lo)[0],Io().memoizedState]},useMutableSource:Bo,useSyncExternalStore:Vo,useId:ss,unstable_isNewReconciler:!1};function vs(e,t){try{var n=``,r=t;do n+=oe(r),r=r.return;while(r);var i=n}catch(e){i=`
Error generating stack: `+e.message+`
`+e.stack}return{value:e,source:t,stack:i}}function ys(e,t){try{console.error(t.value)}catch(e){setTimeout(function(){throw e})}}var bs=typeof WeakMap==`function`?WeakMap:Map;function xs(e,t,n){n=xa(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Gc||(Gc=!0,Kc=r),ys(e,t)},n}function Ss(e,t,n){n=xa(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r==`function`){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ys(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch==`function`&&(n.callback=function(){ys(e,t),typeof r!=`function`&&(qc===null?qc=new Set([this]):qc.add(this));var n=t.stack;this.componentDidCatch(t.value,{componentStack:n===null?``:n})}),n}function Cs(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new bs;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=kl.bind(null,e,t,n),t.then(e,e))}function ws(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t===null||t.dehydrated!==null),t)return e;e=e.return}while(e!==null);return null}function Ts(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=xa(-1,1),t.tag=2,Sa(n,t))),n.lanes|=1),e)}var Es=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Ds=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,ho(fo.current);var o=null;switch(n){case`input`:i=he(e,i),r=he(e,r),o=[];break;case`select`:i=P({},i,{value:void 0}),r=P({},r,{value:void 0}),o=[];break;case`textarea`:i=Ce(e,i),r=Ce(e,r),o=[];break;default:typeof i.onClick!=`function`&&typeof r.onClick==`function`&&(e.onclick=vi)}Le(n,r);var s;for(u in n=null,i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null){if(u===`style`){var c=i[u];for(s in c)c.hasOwnProperty(s)&&(n||={},n[s]=``)}else u!==`dangerouslySetInnerHTML`&&u!==`children`&&u!==`suppressContentEditableWarning`&&u!==`suppressHydrationWarning`&&u!==`autoFocus`&&(a.hasOwnProperty(u)?o||=[]:(o||=[]).push(u,null))}for(u in r){var l=r[u];if(c=i?.[u],r.hasOwnProperty(u)&&l!==c&&(l!=null||c!=null)){if(u===`style`){if(c){for(s in c)!c.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||={},n[s]=``);for(s in l)l.hasOwnProperty(s)&&c[s]!==l[s]&&(n||={},n[s]=l[s])}else n||(o||=[],o.push(u,n)),n=l}else u===`dangerouslySetInnerHTML`?(l=l?l.__html:void 0,c=c?c.__html:void 0,l!=null&&c!==l&&(o||=[]).push(u,l)):u===`children`?typeof l!=`string`&&typeof l!=`number`||(o||=[]).push(u,``+l):u!==`suppressContentEditableWarning`&&u!==`suppressHydrationWarning`&&(a.hasOwnProperty(u)?(l!=null&&u===`onScroll`&&H(`scroll`,e),o||c===l||(o=[])):(o||=[]).push(u,l))}}n&&(o||=[]).push(`style`,n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}},Os=function(e,t,n,r){n!==r&&(t.flags|=4)};function ks(e,t){if(!G)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function As(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function js(e,t,n){var i=t.pendingProps;switch(Ka(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return As(t),null;case 1:return Ji(t.type)&&Yi(),As(t),null;case 3:return i=t.stateNode,_o(),U(Gi),U(Wi),So(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(to(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ya!==null&&(cl(Ya),Ya=null))),As(t),null;case 5:yo(t);var o=ho(mo.current);if(n=t.type,e!==null&&t.stateNode!=null)Ds(e,t,n,i,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(r(166));return As(t),null}if(e=ho(fo.current),to(t)){i=t.stateNode,n=t.type;var s=t.memoizedProps;switch(i[Ai]=t,i[ji]=s,e=!!(t.mode&1),n){case`dialog`:H(`cancel`,i),H(`close`,i);break;case`iframe`:case`object`:case`embed`:H(`load`,i);break;case`video`:case`audio`:for(o=0;o<ti.length;o++)H(ti[o],i);break;case`source`:H(`error`,i);break;case`img`:case`image`:case`link`:H(`error`,i),H(`load`,i);break;case`details`:H(`toggle`,i);break;case`input`:ge(i,s),H(`invalid`,i);break;case`select`:i._wrapperState={wasMultiple:!!s.multiple},H(`invalid`,i);break;case`textarea`:we(i,s),H(`invalid`,i)}for(var c in Le(n,s),o=null,s)if(s.hasOwnProperty(c)){var l=s[c];c===`children`?typeof l==`string`?i.textContent!==l&&(_i(i.textContent,l,e),o=[`children`,l]):typeof l==`number`&&i.textContent!==``+l&&(_i(i.textContent,l,e),o=[`children`,``+l]):a.hasOwnProperty(c)&&l!=null&&c===`onScroll`&&H(`scroll`,i)}switch(n){case`input`:fe(i),ye(i,s,!0);break;case`textarea`:fe(i),Ee(i);break;case`select`:case`option`:break;default:typeof s.onClick==`function`&&(i.onclick=vi)}i=o,t.updateQueue=i,i!==null&&(t.flags|=4)}else{c=o.nodeType===9?o:o.ownerDocument,e===`http://www.w3.org/1999/xhtml`&&(e=De(n)),e===`http://www.w3.org/1999/xhtml`?n===`script`?(e=c.createElement(`div`),e.innerHTML=`<script><\/script>`,e=e.removeChild(e.firstChild)):typeof i.is==`string`?e=c.createElement(n,{is:i.is}):(e=c.createElement(n),n===`select`&&(c=e,i.multiple?c.multiple=!0:i.size&&(c.size=i.size))):e=c.createElementNS(e,n),e[Ai]=t,e[ji]=i,Es(e,t,!1,!1),t.stateNode=e;a:{switch(c=Re(n,i),n){case`dialog`:H(`cancel`,e),H(`close`,e),o=i;break;case`iframe`:case`object`:case`embed`:H(`load`,e),o=i;break;case`video`:case`audio`:for(o=0;o<ti.length;o++)H(ti[o],e);o=i;break;case`source`:H(`error`,e),o=i;break;case`img`:case`image`:case`link`:H(`error`,e),H(`load`,e),o=i;break;case`details`:H(`toggle`,e),o=i;break;case`input`:ge(e,i),o=he(e,i),H(`invalid`,e);break;case`option`:o=i;break;case`select`:e._wrapperState={wasMultiple:!!i.multiple},o=P({},i,{value:void 0}),H(`invalid`,e);break;case`textarea`:we(e,i),o=Ce(e,i),H(`invalid`,e);break;default:o=i}for(s in Le(n,o),l=o,l)if(l.hasOwnProperty(s)){var u=l[s];s===`style`?Fe(e,u):s===`dangerouslySetInnerHTML`?(u=u?u.__html:void 0,u!=null&&Ae(e,u)):s===`children`?typeof u==`string`?(n!==`textarea`||u!==``)&&je(e,u):typeof u==`number`&&je(e,``+u):s!==`suppressContentEditableWarning`&&s!==`suppressHydrationWarning`&&s!==`autoFocus`&&(a.hasOwnProperty(s)?u!=null&&s===`onScroll`&&H(`scroll`,e):u!=null&&ee(e,s,u,c))}switch(n){case`input`:fe(e),ye(e,i,!1);break;case`textarea`:fe(e),Ee(e);break;case`option`:i.value!=null&&e.setAttribute(`value`,``+le(i.value));break;case`select`:e.multiple=!!i.multiple,s=i.value,s==null?i.defaultValue!=null&&Se(e,!!i.multiple,i.defaultValue,!0):Se(e,!!i.multiple,s,!1);break;default:typeof o.onClick==`function`&&(e.onclick=vi)}switch(n){case`button`:case`input`:case`select`:case`textarea`:i=!!i.autoFocus;break a;case`img`:i=!0;break a;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return As(t),null;case 6:if(e&&t.stateNode!=null)Os(e,t,e.memoizedProps,i);else{if(typeof i!=`string`&&t.stateNode===null)throw Error(r(166));if(n=ho(mo.current),ho(fo.current),to(t)){if(i=t.stateNode,n=t.memoizedProps,i[Ai]=t,(s=i.nodeValue!==n)&&(e=qa,e!==null))switch(c=!!(e.mode&1),e.tag){case 3:_i(i.nodeValue,n,c);break;case 5:!0!==e.memoizedProps[void 0]&&_i(i.nodeValue,n,c)}s&&(t.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Ai]=t,t.stateNode=i}return As(t),null;case 13:if(U(K),i=t.memoizedState,G&&Ja!==null&&t.mode&1&&!(t.flags&128)){for(i=Ja;i;)i=Di(i.nextSibling);return no(),t.flags|=98560,t}if(i!==null&&i.dehydrated!==null){if(i=to(t),e===null){if(!i)throw Error(r(318));if(i=t.memoizedState,i=i===null?null:i.dehydrated,!i)throw Error(r(317));i[Ai]=t}else no(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;return As(t),null}return Ya!==null&&(cl(Ya),Ya=null),t.flags&128?(t.lanes=n,t):(i=i!==null,n=!1,e===null?to(t):n=e.memoizedState!==null,i&&!n&&(t.child.flags|=8192,t.mode&1&&(e===null||K.current&1?$===0&&($=3):vl())),t.updateQueue!==null&&(t.flags|=4),As(t),null);case 4:return _o(),e===null&&si(t.stateNode.containerInfo),As(t),null;case 10:return pa(t.type._context),As(t),null;case 17:return Ji(t.type)&&Yi(),As(t),null;case 19:if(U(K),s=t.memoizedState,s===null)return As(t),null;if(i=!!(t.flags&128),c=s.rendering,c===null){if(i)ks(s,!1);else{if($!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(c=bo(e),c!==null){for(t.flags|=128,ks(s,!1),i=c.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=n,n=t.child;n!==null;)s=n,e=i,s.flags&=14680066,c=s.alternate,c===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=c.childLanes,s.lanes=c.lanes,s.child=c.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=c.memoizedProps,s.memoizedState=c.memoizedState,s.updateQueue=c.updateQueue,s.type=c.type,e=c.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return W(K,K.current&1|2),t.child}e=e.sibling}s.tail!==null&&z()>Wc&&(t.flags|=128,i=!0,ks(s,!1),t.lanes=4194304)}}else{if(!i){if(e=bo(c),e!==null){if(t.flags|=128,i=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ks(s,!0),s.tail===null&&s.tailMode===`hidden`&&!c.alternate&&!G)return As(t),null}else 2*z()-s.renderingStartTime>Wc&&n!==1073741824&&(t.flags|=128,i=!0,ks(s,!1),t.lanes=4194304)}s.isBackwards?(c.sibling=t.child,t.child=c):(n=s.last,n===null?t.child=c:n.sibling=c,s.last=c)}return s.tail===null?(As(t),null):(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=z(),t.sibling=null,n=K.current,W(K,i?n&1|2:n&1),t);case 22:case 23:return ml(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&t.mode&1?Fc&1073741824&&(As(t),t.subtreeFlags&6&&(t.flags|=8192)):As(t),null;case 24:return null;case 25:return null}throw Error(r(156,t.tag))}var Ms=S.ReactCurrentOwner,Ns=!1;function Ps(e,t,n,r){t.child=e===null?lo(t,null,n,r):co(t,e.child,n,r)}function Fs(e,t,n,r,i){n=n.render;var a=t.ref;return ha(t,i),r=No(e,t,n,r,a,i),n=Po(),e!==null&&!Ns?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,tc(e,t,i)):(G&&n&&Ga(t),t.flags|=1,Ps(e,t,r,i),t.child)}function Is(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!Ll(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Ls(e,t,a,r,i)):(e=Bl(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,(e.lanes&i)===0){var o=a.memoizedProps;if(n=n.compare,n=n===null?Or:n,n(o,r)&&e.ref===t.ref)return tc(e,t,i)}return t.flags|=1,e=zl(a,r),e.ref=t.ref,e.return=t,t.child=e}function Ls(e,t,n,r,i){if(e!==null&&Or(e.memoizedProps,r)&&e.ref===t.ref){if(Ns=!1,(e.lanes&i)!==0)e.flags&131072&&(Ns=!0);else return t.lanes=e.lanes,tc(e,t,i)}return Bs(e,t,n,r,i)}function Rs(e,t,n){var r=t.pendingProps,i=r.children,a=e===null?null:e.memoizedState;if(r.mode===`hidden`){if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null},W(Ic,Fc),Fc|=n;else if(n&1073741824)t.memoizedState={baseLanes:0,cachePool:null},r=a===null?n:a.baseLanes,W(Ic,Fc),Fc|=r;else return e=a===null?n:a.baseLanes|n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null},t.updateQueue=null,W(Ic,Fc),Fc|=e,null}else a===null?r=n:(r=a.baseLanes|n,t.memoizedState=null),W(Ic,Fc),Fc|=r;return Ps(e,t,i,n),t.child}function zs(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Bs(e,t,n,r,i){var a=Ji(n)?Ki:Wi.current;return a=qi(t,a),ha(t,i),n=No(e,t,n,r,a,i),r=Po(),e!==null&&!Ns?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,tc(e,t,i)):(G&&r&&Ga(t),t.flags|=1,Ps(e,t,n,i),t.child)}function Vs(e,t,n,r,i){if(Ji(n)){var a=!0;Qi(t)}else a=!1;if(ha(t,i),t.stateNode===null)e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),ja(t,n,r),Na(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var c=o.context,l=n.contextType;typeof l==`object`&&l?l=ga(l):(l=Ji(n)?Ki:Wi.current,l=qi(t,l));var u=n.getDerivedStateFromProps,d=typeof u==`function`||typeof o.getSnapshotBeforeUpdate==`function`;d||typeof o.UNSAFE_componentWillReceiveProps!=`function`&&typeof o.componentWillReceiveProps!=`function`||(s!==r||c!==l)&&Ma(t,o,r,l),va=!1;var f=t.memoizedState;o.state=f,Ta(t,r,o,i),c=t.memoizedState,s!==r||f!==c||Gi.current||va?(typeof u==`function`&&(Oa(t,n,u,r),c=t.memoizedState),(s=va||Aa(t,n,s,r,f,c,l))?(d||typeof o.UNSAFE_componentWillMount!=`function`&&typeof o.componentWillMount!=`function`||(typeof o.componentWillMount==`function`&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount==`function`&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount==`function`&&(t.flags|=4194308)):(typeof o.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),o.props=r,o.state=c,o.context=l,r=s):(typeof o.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,ba(e,t),s=t.memoizedProps,l=t.type===t.elementType?s:sa(t.type,s),o.props=l,d=t.pendingProps,f=o.context,c=n.contextType,typeof c==`object`&&c?c=ga(c):(c=Ji(n)?Ki:Wi.current,c=qi(t,c));var p=n.getDerivedStateFromProps;(u=typeof p==`function`||typeof o.getSnapshotBeforeUpdate==`function`)||typeof o.UNSAFE_componentWillReceiveProps!=`function`&&typeof o.componentWillReceiveProps!=`function`||(s!==d||f!==c)&&Ma(t,o,r,c),va=!1,f=t.memoizedState,o.state=f,Ta(t,r,o,i);var m=t.memoizedState;s!==d||f!==m||Gi.current||va?(typeof p==`function`&&(Oa(t,n,p,r),m=t.memoizedState),(l=va||Aa(t,n,l,r,f,m,c)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!=`function`&&typeof o.componentWillUpdate!=`function`||(typeof o.componentWillUpdate==`function`&&o.componentWillUpdate(r,m,c),typeof o.UNSAFE_componentWillUpdate==`function`&&o.UNSAFE_componentWillUpdate(r,m,c)),typeof o.componentDidUpdate==`function`&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof o.componentDidUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),o.props=r,o.state=m,o.context=c,r=l):(typeof o.componentDidUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Hs(e,t,n,r,a,i)}function Hs(e,t,n,r,i,a){zs(e,t);var o=!!(t.flags&128);if(!r&&!o)return i&&$i(t,n,!1),tc(e,t,a);r=t.stateNode,Ms.current=t;var s=o&&typeof n.getDerivedStateFromError!=`function`?null:r.render();return t.flags|=1,e!==null&&o?(t.child=co(t,e.child,null,a),t.child=co(t,null,s,a)):Ps(e,t,s,a),t.memoizedState=r.state,i&&$i(t,n,!0),t.child}function Us(e){var t=e.stateNode;t.pendingContext?Xi(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Xi(e,t.context,!1),go(e,t.containerInfo)}function Ws(e,t,n,r,i){return no(),ro(i),t.flags|=256,Ps(e,t,n,r),t.child}var Gs={dehydrated:null,treeContext:null,retryLane:0};function Ks(e){return{baseLanes:e,cachePool:null}}function qs(e,t,n){var i=t.pendingProps,a=K.current,o=!1,s=!!(t.flags&128),c;if((c=s)||(c=e!==null&&e.memoizedState===null?!1:!!(a&2)),c?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),W(K,a&1),e===null)return $a(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data===`$!`?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=i.children,e=i.fallback,o?(i=t.mode,o=t.child,a={mode:`hidden`,children:a},!(i&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Hl(a,i,0,null),e=Vl(e,i,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Ks(n),t.memoizedState=Gs,e):Js(t,a));if(a=e.memoizedState,a!==null){if(c=a.dehydrated,c!==null){if(s)return t.flags&256?(t.flags&=-257,Zs(e,t,n,Error(r(422)))):t.memoizedState===null?(o=i.fallback,a=t.mode,i=Hl({mode:`visible`,children:i.children},a,0,null),o=Vl(o,a,n,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,t.mode&1&&co(t,e.child,null,n),t.child.memoizedState=Ks(n),t.memoizedState=Gs,o):(t.child=e.child,t.flags|=128,null);if(!(t.mode&1))t=Zs(e,t,n,null);else if(c.data===`$!`)t=Zs(e,t,n,Error(r(419)));else if(i=(n&e.childLanes)!==0,Ns||i){if(i=Z,i!==null){switch(n&-n){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}i=(o&(i.suspendedLanes|n))===0?o:0,i!==0&&i!==a.retryLane&&(a.retryLane=i,rl(e,i,-1))}vl(),t=Zs(e,t,n,Error(r(421)))}else c.data===`$?`?(t.flags|=128,t.child=e.child,t=jl.bind(null,e),c._reactRetry=t,t=null):(n=a.treeContext,Ja=Di(c.nextSibling),qa=t,G=!0,Ya=null,n!==null&&(Ra[za++]=Va,Ra[za++]=Ha,Ra[za++]=Ba,Va=n.id,Ha=n.overflow,Ba=t),t=Js(t,t.pendingProps.children),t.flags|=4096);return t}return o?(i=Xs(e,t,i.children,i.fallback,n),o=t.child,a=e.child.memoizedState,o.memoizedState=a===null?Ks(n):{baseLanes:a.baseLanes|n,cachePool:null},o.childLanes=e.childLanes&~n,t.memoizedState=Gs,i):(n=Ys(e,t,i.children,n),t.memoizedState=null,n)}return o?(i=Xs(e,t,i.children,i.fallback,n),o=t.child,a=e.child.memoizedState,o.memoizedState=a===null?Ks(n):{baseLanes:a.baseLanes|n,cachePool:null},o.childLanes=e.childLanes&~n,t.memoizedState=Gs,i):(n=Ys(e,t,i.children,n),t.memoizedState=null,n)}function Js(e,t){return t=Hl({mode:`visible`,children:t},e.mode,0,null),t.return=e,e.child=t}function Ys(e,t,n,r){var i=e.child;return e=i.sibling,n=zl(i,{mode:`visible`,children:n}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n}function Xs(e,t,n,r,i){var a=t.mode;e=e.child;var o=e.sibling,s={mode:`hidden`,children:n};return!(a&1)&&t.child!==e?(n=t.child,n.childLanes=0,n.pendingProps=s,t.deletions=null):(n=zl(e,s),n.subtreeFlags=e.subtreeFlags&14680064),o===null?(r=Vl(r,a,i,null),r.flags|=2):r=zl(o,r),r.return=t,n.return=t,n.sibling=r,t.child=n,r}function Zs(e,t,n,r){return r!==null&&ro(r),co(t,e.child,null,n),e=Js(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Qs(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ma(e.return,t,n)}function $s(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function ec(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(Ps(e,t,r.children,n),r=K.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Qs(e,n,t);else if(e.tag===19)Qs(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(W(K,r),!(t.mode&1))t.memoizedState=null;else switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&bo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),$s(t,!1,i,n,a);break;case`backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&bo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}$s(t,!0,n,null,a);break;case`together`:$s(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function tc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Rc|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(r(153));if(t.child!==null){for(e=t.child,n=zl(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=zl(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function nc(e,t,n){switch(t.tag){case 3:Us(t),no();break;case 5:vo(t);break;case 1:Ji(t.type)&&Qi(t);break;case 4:go(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;W(ca,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(W(K,K.current&1),e=tc(e,t,n),e===null?null:e.sibling):qs(e,t,n):(W(K,K.current&1),t.flags|=128,null);W(K,K.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return ec(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),W(K,K.current),r)break;return null;case 22:case 23:return t.lanes=0,Rs(e,t,n)}return tc(e,t,n)}function rc(e,t){switch(Ka(t),t.tag){case 1:return Ji(t.type)&&Yi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return _o(),U(Gi),U(Wi),So(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return yo(t),null;case 13:if(U(K),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(r(340));no()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return U(K),null;case 4:return _o(),null;case 10:return pa(t.type._context),null;case 22:case 23:return ml(),null;case 24:return null;default:return null}}var ic=!1,ac=!1,oc=typeof WeakSet==`function`?WeakSet:Set,Y=null;function sc(e,t){var n=e.ref;if(n!==null){if(typeof n==`function`)try{n(null)}catch(n){Ol(e,t,n)}else n.current=null}}function cc(e,t,n){try{n()}catch(n){Ol(e,t,n)}}var lc=!1;function uc(e,t){if(e=Mr(),Nr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===i&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(yi={focusedElem:e,selectionRange:n},Y=t;Y!==null;)if(t=Y,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,Y=e;else for(;Y!==null;){t=Y;try{var h=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(h!==null){var g=h.memoizedProps,_=h.memoizedState,v=t.stateNode;v.__reactInternalSnapshotBeforeUpdate=v.getSnapshotBeforeUpdate(t.elementType===t.type?g:sa(t.type,g),_)}break;case 3:var y=t.stateNode.containerInfo;if(y.nodeType===1)y.textContent=``;else if(y.nodeType===9){var b=y.body;b!=null&&(b.textContent=``)}break;case 5:case 6:case 4:case 17:break;default:throw Error(r(163))}}catch(e){Ol(t,t.return,e)}if(e=t.sibling,e!==null){e.return=t.return,Y=e;break}Y=t.return}return h=lc,lc=!1,h}function dc(e,t,n){var r=t.updateQueue;if(r=r===null?null:r.lastEffect,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&cc(t,n,a)}i=i.next}while(i!==r)}}function fc(e,t){if(t=t.updateQueue,t=t===null?null:t.lastEffect,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function pc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t==`function`?t(e):t.current=e}}function mc(e,t,n){if(wt&&typeof wt.onCommitFiberUnmount==`function`)try{wt.onCommitFiberUnmount(Ct,t)}catch{}switch(t.tag){case 0:case 11:case 14:case 15:if(e=t.updateQueue,e!==null&&(e=e.lastEffect,e!==null)){var r=e=e.next;do{var i=r,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&cc(t,n,a),r=r.next}while(r!==e)}break;case 1:if(sc(t,n),e=t.stateNode,typeof e.componentWillUnmount==`function`)try{e.props=t.memoizedProps,e.state=t.memoizedState,e.componentWillUnmount()}catch(e){Ol(t,n,e)}break;case 5:sc(t,n);break;case 4:xc(e,t,n)}}function hc(e){var t=e.alternate;t!==null&&(e.alternate=null,hc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ai],delete t[ji],delete t[Ni],delete t[Pi],delete t[Fi])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function gc(e){return e.tag===5||e.tag===3||e.tag===4}function _c(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||gc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function vc(e){a:{for(var t=e.return;t!==null;){if(gc(t))break a;t=t.return}throw Error(r(160))}var n=t;switch(n.tag){case 5:t=n.stateNode,n.flags&32&&(je(t,``),n.flags&=-33),n=_c(e),bc(e,n,t);break;case 3:case 4:t=n.stateNode.containerInfo,n=_c(e),yc(e,n,t);break;default:throw Error(r(161))}}function yc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=vi));else if(r!==4&&(e=e.child,e!==null))for(yc(e,t,n),e=e.sibling;e!==null;)yc(e,t,n),e=e.sibling}function bc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(bc(e,t,n),e=e.sibling;e!==null;)bc(e,t,n),e=e.sibling}function xc(e,t,n){for(var i=t,a=!1,o,s;;){if(!a){a=i.return;a:for(;;){if(a===null)throw Error(r(160));switch(o=a.stateNode,a.tag){case 5:s=!1;break a;case 3:o=o.containerInfo,s=!0;break a;case 4:o=o.containerInfo,s=!0;break a}a=a.return}a=!0}if(i.tag===5||i.tag===6){a:for(var c=e,l=i,u=n,d=l;;)if(mc(c,d,u),d.child!==null&&d.tag!==4)d.child.return=d,d=d.child;else{if(d===l)break a;for(;d.sibling===null;){if(d.return===null||d.return===l)break a;d=d.return}d.sibling.return=d.return,d=d.sibling}s?(c=o,l=i.stateNode,c.nodeType===8?c.parentNode.removeChild(l):c.removeChild(l)):o.removeChild(i.stateNode)}else if(i.tag===18)s?(c=o,l=i.stateNode,c.nodeType===8?Ei(c.parentNode,l):c.nodeType===1&&Ei(c,l),un(c)):Ei(o,i.stateNode);else if(i.tag===4){if(i.child!==null){o=i.stateNode.containerInfo,s=!0,i.child.return=i,i=i.child;continue}}else if(mc(e,i,n),i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return;i=i.return,i.tag===4&&(a=!1)}i.sibling.return=i.return,i=i.sibling}}function Sc(e,t){switch(t.tag){case 0:case 11:case 14:case 15:dc(3,t,t.return),fc(3,t),dc(5,t,t.return);return;case 1:return;case 5:var n=t.stateNode;if(n!=null){var i=t.memoizedProps,a=e===null?i:e.memoizedProps;e=t.type;var o=t.updateQueue;if(t.updateQueue=null,o!==null){for(e===`input`&&i.type===`radio`&&i.name!=null&&_e(n,i),Re(e,a),t=Re(e,i),a=0;a<o.length;a+=2){var s=o[a],c=o[a+1];s===`style`?Fe(n,c):s===`dangerouslySetInnerHTML`?Ae(n,c):s===`children`?je(n,c):ee(n,s,c,t)}switch(e){case`input`:ve(n,i);break;case`textarea`:Te(n,i);break;case`select`:e=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!i.multiple,o=i.value,o==null?e!==!!i.multiple&&(i.defaultValue==null?Se(n,!!i.multiple,i.multiple?[]:``,!1):Se(n,!!i.multiple,i.defaultValue,!0)):Se(n,!!i.multiple,o,!1)}n[ji]=i}}return;case 6:if(t.stateNode===null)throw Error(r(162));t.stateNode.nodeValue=t.memoizedProps;return;case 3:e!==null&&e.memoizedState.isDehydrated&&un(t.stateNode.containerInfo);return;case 12:return;case 13:Cc(t);return;case 19:Cc(t);return;case 17:return}throw Error(r(163))}function Cc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new oc),t.forEach(function(t){var r=Ml.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))})}}function wc(e,t){for(Y=t;Y!==null;){t=Y;var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{xc(e,i,t);var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(e){Ol(i,t,e)}}if(n=t.child,t.subtreeFlags&12854&&n!==null)n.return=t,Y=n;else for(;Y!==null;){t=Y;try{var o=t.flags;if(o&32&&je(t.stateNode,``),o&512){var s=t.alternate;if(s!==null){var c=s.ref;c!==null&&(typeof c==`function`?c(null):c.current=null)}}if(o&8192)switch(t.tag){case 13:if(t.memoizedState!==null){var l=t.alternate;(l===null||l.memoizedState===null)&&(Uc=z())}break;case 22:var u=t.memoizedState!==null,d=t.alternate,f=d!==null&&d.memoizedState!==null;n=t;a:{r=n,i=u;for(var p=null,m=r;;){if(m.tag===5){if(p===null){p=m;var h=m.stateNode;if(i){var g=h.style;typeof g.setProperty==`function`?g.setProperty(`display`,`none`,`important`):g.display=`none`}else{var _=m.stateNode,v=m.memoizedProps.style,y=v!=null&&v.hasOwnProperty(`display`)?v.display:null;_.style.display=Pe(`display`,y)}}}else if(m.tag===6)p===null&&(m.stateNode.nodeValue=i?``:m.memoizedProps);else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===r)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===r)break;for(;m.sibling===null;){if(m.return===null||m.return===r)break a;p===m&&(p=null),m=m.return}p===m&&(p=null),m.sibling.return=m.return,m=m.sibling}}if(u&&!f&&n.mode&1){Y=n;for(var b=n.child;b!==null;){for(n=Y=b;Y!==null;){r=Y;var x=r.child;switch(r.tag){case 0:case 11:case 14:case 15:dc(4,r,r.return);break;case 1:sc(r,r.return);var ee=r.stateNode;if(typeof ee.componentWillUnmount==`function`){var S=r.return;try{ee.props=r.memoizedProps,ee.state=r.memoizedState,ee.componentWillUnmount()}catch(e){Ol(r,S,e)}}break;case 5:sc(r,r.return);break;case 22:if(r.memoizedState!==null){Oc(n);continue}}x===null?Oc(n):(x.return=r,Y=x)}b=b.sibling}}}switch(o&4102){case 2:vc(t),t.flags&=-3;break;case 6:vc(t),t.flags&=-3,Sc(t.alternate,t);break;case 4096:t.flags&=-4097;break;case 4100:t.flags&=-4097,Sc(t.alternate,t);break;case 4:Sc(t.alternate,t)}}catch(e){Ol(t,t.return,e)}if(n=t.sibling,n!==null){n.return=t.return,Y=n;break}Y=t.return}}}function Tc(e,t,n){Y=e,Ec(e,t,n)}function Ec(e,t,n){for(var r=!!(e.mode&1);Y!==null;){var i=Y,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ic;if(!o){var s=i.alternate,c=s!==null&&s.memoizedState!==null||ac;s=ic;var l=ac;if(ic=o,(ac=c)&&!l)for(Y=i;Y!==null;)o=Y,c=o.child,o.tag===22&&o.memoizedState!==null||c===null?kc(i):(c.return=o,Y=c);for(;a!==null;)Y=a,Ec(a,t,n),a=a.sibling;Y=i,ic=s,ac=l}Dc(e,t,n)}else i.subtreeFlags&8772&&a!==null?(a.return=i,Y=a):Dc(e,t,n)}}function Dc(e){for(;Y!==null;){var t=Y;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ac||fc(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!ac){if(n===null)i.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:sa(t.type,n.memoizedProps);i.componentDidUpdate(a,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}}var o=t.updateQueue;o!==null&&Ea(t,o,i);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ea(t,s,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var l=t.memoizedProps;switch(t.type){case`button`:case`input`:case`select`:case`textarea`:l.autoFocus&&n.focus();break;case`img`:l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&un(f)}}}break;case 19:case 17:case 21:case 22:case 23:break;default:throw Error(r(163))}ac||t.flags&512&&pc(t)}catch(e){Ol(t,t.return,e)}}if(t===e){Y=null;break}if(n=t.sibling,n!==null){n.return=t.return,Y=n;break}Y=t.return}}function Oc(e){for(;Y!==null;){var t=Y;if(t===e){Y=null;break}var n=t.sibling;if(n!==null){n.return=t.return,Y=n;break}Y=t.return}}function kc(e){for(;Y!==null;){var t=Y;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{fc(4,t)}catch(e){Ol(t,n,e)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount==`function`){var i=t.return;try{r.componentDidMount()}catch(e){Ol(t,i,e)}}var a=t.return;try{pc(t)}catch(e){Ol(t,a,e)}break;case 5:var o=t.return;try{pc(t)}catch(e){Ol(t,o,e)}}}catch(e){Ol(t,t.return,e)}if(t===e){Y=null;break}var s=t.sibling;if(s!==null){s.return=t.return,Y=s;break}Y=t.return}}var Ac=Math.ceil,jc=S.ReactCurrentDispatcher,Mc=S.ReactCurrentOwner,Nc=S.ReactCurrentBatchConfig,X=0,Z=null,Q=null,Pc=0,Fc=0,Ic=Hi(0),$=0,Lc=null,Rc=0,zc=0,Bc=0,Vc=null,Hc=null,Uc=0,Wc=1/0,Gc=!1,Kc=null,qc=null,Jc=!1,Yc=null,Xc=0,Zc=0,Qc=null,$c=-1,el=0;function tl(){return X&6?z():$c===-1?$c=z():$c}function nl(e){return e.mode&1?X&2&&Pc!==0?Pc&-Pc:oa.transition===null?(e=V,e===0&&(e=window.event,e=e===void 0?16:_n(e.type)),e):(el===0&&(e=kt,kt<<=1,!(kt&4194240)&&(kt=64),el=e),el):1}function rl(e,t,n){if(50<Zc)throw Zc=0,Qc=null,Error(r(185));var i=il(e,t);return i===null?null:(Lt(i,t,n),X&2&&i===Z||(i===Z&&(!(X&2)&&(zc|=t),$===4&&ul(i,Pc)),al(i,n),t===1&&X===0&&!(e.mode&1)&&(Wc=z()+500,ta&&aa())),i)}function il(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}function al(e,t){var n=e.callbackNode;Pt(e,t);var r=Mt(e,e===Z?Pc:0);if(r===0)n!==null&&mt(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&mt(n),t===1)e.tag===0?ia(dl.bind(null,e)):ra(dl.bind(null,e)),wi(function(){X===0&&aa()}),n=null;else{switch(Bt(r)){case 1:n=vt;break;case 4:n=yt;break;case 16:n=bt;break;case 536870912:n=St;break;default:n=bt}n=Pl(n,ol.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ol(e,t){if($c=-1,el=0,X&6)throw Error(r(327));var n=e.callbackNode;if(El()&&e.callbackNode!==n)return null;var i=Mt(e,e===Z?Pc:0);if(i===0)return null;if(i&30||(i&e.expiredLanes)!==0||t)t=yl(e,i);else{t=i;var a=X;X|=2;var o=_l();(Z!==e||Pc!==t)&&(Wc=z()+500,hl(e,t));do try{xl();break}catch(t){gl(e,t)}while(1);fa(),jc.current=o,X=a,Q===null?(Z=null,Pc=0,t=$):t=0}if(t!==0){if(t===2&&(a=Ft(e),a!==0&&(i=a,t=sl(e,a))),t===1)throw n=Lc,hl(e,0),ul(e,i),al(e,z()),n;if(t===6)ul(e,i);else{if(a=e.current.alternate,!(i&30)&&!ll(a)&&(t=yl(e,i),t===2&&(o=Ft(e),o!==0&&(i=o,t=sl(e,o))),t===1))throw n=Lc,hl(e,0),ul(e,i),al(e,z()),n;switch(e.finishedWork=a,e.finishedLanes=i,t){case 0:case 1:throw Error(r(345));case 2:wl(e,Hc);break;case 3:if(ul(e,i),(i&130023424)===i&&(t=Uc+500-z(),10<t)){if(Mt(e,0)!==0)break;if(a=e.suspendedLanes,(a&i)!==i){tl(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=xi(wl.bind(null,e,Hc),t);break}wl(e,Hc);break;case 4:if(ul(e,i),(i&4194240)===i)break;for(t=e.eventTimes,a=-1;0<i;){var s=31-B(i);o=1<<s,s=t[s],s>a&&(a=s),i&=~o}if(i=a,i=z()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Ac(i/1960))-i,10<i){e.timeoutHandle=xi(wl.bind(null,e,Hc),i);break}wl(e,Hc);break;case 5:wl(e,Hc);break;default:throw Error(r(329))}}}return al(e,z()),e.callbackNode===n?ol.bind(null,e):null}function sl(e,t){var n=Vc;return e.current.memoizedState.isDehydrated&&(hl(e,t).flags|=256),e=yl(e,t),e!==2&&(t=Hc,Hc=n,t!==null&&cl(t)),e}function cl(e){Hc===null?Hc=e:Hc.push.apply(Hc,e)}function ll(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Dr(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ul(e,t){for(t&=~Bc,t&=~zc,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-B(t),r=1<<n;e[n]=-1,t&=~r}}function dl(e){if(X&6)throw Error(r(327));El();var t=Mt(e,0);if(!(t&1))return al(e,z()),null;var n=yl(e,t);if(e.tag!==0&&n===2){var i=Ft(e);i!==0&&(t=i,n=sl(e,i))}if(n===1)throw n=Lc,hl(e,0),ul(e,t),al(e,z()),n;if(n===6)throw Error(r(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wl(e,Hc),al(e,z()),null}function fl(e,t){var n=X;X|=1;try{return e(t)}finally{X=n,X===0&&(Wc=z()+500,ta&&aa())}}function pl(e){Yc!==null&&Yc.tag===0&&!(X&6)&&El();var t=X;X|=1;var n=Nc.transition,r=V;try{if(Nc.transition=null,V=1,e)return e()}finally{V=r,Nc.transition=n,X=t,!(X&6)&&aa()}}function ml(){Fc=Ic.current,U(Ic)}function hl(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Si(n)),Q!==null)for(n=Q.return;n!==null;){var r=n;switch(Ka(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Yi();break;case 3:_o(),U(Gi),U(Wi),So();break;case 5:yo(r);break;case 4:_o();break;case 13:U(K);break;case 19:U(K);break;case 10:pa(r.type._context);break;case 22:case 23:ml()}n=n.return}if(Z=e,Q=e=zl(e.current,null),Pc=Fc=t,$=0,Lc=null,Bc=zc=Rc=0,Hc=Vc=null,_a!==null){for(t=0;t<_a.length;t++)if(n=_a[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}_a=null}return e}function gl(e,t){do{var n=Q;try{if(fa(),Co.current=ms,Do){for(var i=q.memoizedState;i!==null;){var a=i.queue;a!==null&&(a.pending=null),i=i.next}Do=!1}if(To=0,J=Eo=q=null,Oo=!1,ko=0,Mc.current=null,n===null||n.return===null){$=1,Lc=t,Q=null;break}a:{var o=e,s=n.return,c=n,l=t;if(t=Pc,c.flags|=32768,typeof l==`object`&&l&&typeof l.then==`function`){var u=l,d=c,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=ws(s);if(m!==null){m.flags&=-257,Ts(m,s,c,o,t),m.mode&1&&Cs(o,u,t),t=m,l=u;var h=t.updateQueue;if(h===null){var g=new Set;g.add(l),t.updateQueue=g}else h.add(l);break a}if(!(t&1)){Cs(o,u,t),vl();break a}l=Error(r(426))}else if(G&&c.mode&1){var _=ws(s);if(_!==null){!(_.flags&65536)&&(_.flags|=256),Ts(_,s,c,o,t),ro(l);break a}}o=l,$!==4&&($=2),Vc===null?Vc=[o]:Vc.push(o),l=vs(l,c),c=s;do{switch(c.tag){case 3:c.flags|=65536,t&=-t,c.lanes|=t;var v=xs(c,l,t);wa(c,v);break a;case 1:o=l;var y=c.type,b=c.stateNode;if(!(c.flags&128)&&(typeof y.getDerivedStateFromError==`function`||b!==null&&typeof b.componentDidCatch==`function`&&(qc===null||!qc.has(b)))){c.flags|=65536,t&=-t,c.lanes|=t;var x=Ss(c,o,t);wa(c,x);break a}}c=c.return}while(c!==null)}Cl(n)}catch(e){t=e,Q===n&&n!==null&&(Q=n=n.return);continue}break}while(1)}function _l(){var e=jc.current;return jc.current=ms,e===null?ms:e}function vl(){($===0||$===3||$===2)&&($=4),Z===null||!(Rc&268435455)&&!(zc&268435455)||ul(Z,Pc)}function yl(e,t){var n=X;X|=2;var i=_l();Z===e&&Pc===t||hl(e,t);do try{bl();break}catch(t){gl(e,t)}while(1);if(fa(),X=n,jc.current=i,Q!==null)throw Error(r(261));return Z=null,Pc=0,$}function bl(){for(;Q!==null;)Sl(Q)}function xl(){for(;Q!==null&&!ht();)Sl(Q)}function Sl(e){var t=Nl(e.alternate,e,Fc);e.memoizedProps=e.pendingProps,t===null?Cl(e):Q=t,Mc.current=null}function Cl(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=rc(n,t),n!==null){n.flags&=32767,Q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{$=6,Q=null;return}}else if(n=js(n,t,Fc),n!==null){Q=n;return}if(t=t.sibling,t!==null){Q=t;return}Q=t=e}while(t!==null);$===0&&($=5)}function wl(e,t){var n=V,r=Nc.transition;try{Nc.transition=null,V=1,Tl(e,t,n)}finally{Nc.transition=r,V=n}return null}function Tl(e,t,n){do El();while(Yc!==null);if(X&6)throw Error(r(327));var i=e.finishedWork,a=e.finishedLanes;if(i===null)return null;if(e.finishedWork=null,e.finishedLanes=0,i===e.current)throw Error(r(177));e.callbackNode=null,e.callbackPriority=0;var o=i.lanes|i.childLanes;if(Rt(e,o),e===Z&&(Q=Z=null,Pc=0),!(i.subtreeFlags&2064)&&!(i.flags&2064)||Jc||(Jc=!0,Pl(bt,function(){return El(),null})),o=!!(i.flags&15990),i.subtreeFlags&15990||o){o=Nc.transition,Nc.transition=null;var s=V;V=1;var c=X;X|=4,Mc.current=null,uc(e,i),wc(e,i,a),Pr(yi),yi=null,e.current=i,Tc(i,e,a),gt(),X=c,V=s,Nc.transition=o}else e.current=i;if(Jc&&(Jc=!1,Yc=e,Xc=a),o=e.pendingLanes,o===0&&(qc=null),Tt(i.stateNode,n),al(e,z()),t!==null)for(n=e.onRecoverableError,i=0;i<t.length;i++)n(t[i]);if(Gc)throw Gc=!1,e=Kc,Kc=null,e;return Xc&1&&e.tag!==0&&El(),o=e.pendingLanes,o&1?e===Qc?Zc++:(Zc=0,Qc=e):Zc=0,aa(),null}function El(){if(Yc!==null){var e=Bt(Xc),t=Nc.transition,n=V;try{if(Nc.transition=null,V=16>e?16:e,Yc===null)var i=!1;else{if(e=Yc,Yc=null,Xc=0,X&6)throw Error(r(331));var a=X;for(X|=4,Y=e.current;Y!==null;){var o=Y,s=o.child;if(Y.flags&16){var c=o.deletions;if(c!==null){for(var l=0;l<c.length;l++){var u=c[l];for(Y=u;Y!==null;){var d=Y;switch(d.tag){case 0:case 11:case 15:dc(8,d,o)}var f=d.child;if(f!==null)f.return=d,Y=f;else for(;Y!==null;){d=Y;var p=d.sibling,m=d.return;if(hc(d),d===u){Y=null;break}if(p!==null){p.return=m,Y=p;break}Y=m}}}var h=o.alternate;if(h!==null){var g=h.child;if(g!==null){h.child=null;do{var _=g.sibling;g.sibling=null,g=_}while(g!==null)}}Y=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,Y=s;else b:for(;Y!==null;){if(o=Y,o.flags&2048)switch(o.tag){case 0:case 11:case 15:dc(9,o,o.return)}var v=o.sibling;if(v!==null){v.return=o.return,Y=v;break b}Y=o.return}}var y=e.current;for(Y=y;Y!==null;){s=Y;var b=s.child;if(s.subtreeFlags&2064&&b!==null)b.return=s,Y=b;else b:for(s=y;Y!==null;){if(c=Y,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:fc(9,c)}}catch(e){Ol(c,c.return,e)}if(c===s){Y=null;break b}var x=c.sibling;if(x!==null){x.return=c.return,Y=x;break b}Y=c.return}}if(X=a,aa(),wt&&typeof wt.onPostCommitFiberRoot==`function`)try{wt.onPostCommitFiberRoot(Ct,e)}catch{}i=!0}return i}finally{V=n,Nc.transition=t}}return!1}function Dl(e,t,n){t=vs(n,t),t=xs(e,t,1),Sa(e,t),t=tl(),e=il(e,1),e!==null&&(Lt(e,1,t),al(e,t))}function Ol(e,t,n){if(e.tag===3)Dl(e,e,n);else for(;t!==null;){if(t.tag===3){Dl(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(qc===null||!qc.has(r))){e=vs(n,e),e=Ss(t,e,1),Sa(t,e),e=tl(),t=il(t,1),t!==null&&(Lt(t,1,e),al(t,e));break}}t=t.return}}function kl(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=tl(),e.pingedLanes|=e.suspendedLanes&n,Z===e&&(Pc&n)===n&&($===4||$===3&&(Pc&130023424)===Pc&&500>z()-Uc?hl(e,0):Bc|=n),al(e,t)}function Al(e,t){t===0&&(e.mode&1?(t=At,At<<=1,!(At&130023424)&&(At=4194304)):t=1);var n=tl();e=il(e,t),e!==null&&(Lt(e,t,n),al(e,n))}function jl(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Al(e,n)}function Ml(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(r(314))}i!==null&&i.delete(t),Al(e,n)}var Nl=function(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps||Gi.current)Ns=!0;else{if((e.lanes&n)===0&&!(t.flags&128))return Ns=!1,nc(e,t,n);Ns=!!(e.flags&131072)}}else Ns=!1,G&&t.flags&1048576&&Wa(t,La,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps;var a=qi(t,Wi.current);ha(t,n),a=No(null,t,i,e,a,n);var o=Po();return t.flags|=1,typeof a==`object`&&a&&typeof a.render==`function`&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ji(i)?(o=!0,Qi(t)):o=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,ya(t),a.updater=ka,t.stateNode=a,a._reactInternals=t,Na(t,i,e,n),t=Hs(null,t,i,!0,o,n)):(t.tag=0,G&&o&&Ga(t),Ps(null,t,a,n),t=t.child),t;case 16:i=t.elementType;a:{switch(e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps,a=i._init,i=a(i._payload),t.type=i,a=t.tag=Rl(i),e=sa(i,e),a){case 0:t=Bs(null,t,i,e,n);break a;case 1:t=Vs(null,t,i,e,n);break a;case 11:t=Fs(null,t,i,e,n);break a;case 14:t=Is(null,t,i,sa(i.type,e),n);break a}throw Error(r(306,i,``))}return t;case 0:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:sa(i,a),Bs(e,t,i,a,n);case 1:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:sa(i,a),Vs(e,t,i,a,n);case 3:a:{if(Us(t),e===null)throw Error(r(387));i=t.pendingProps,o=t.memoizedState,a=o.element,ba(e,t),Ta(t,i,null,n);var s=t.memoizedState;if(i=s.element,o.isDehydrated){if(o={element:i,isDehydrated:!1,cache:s.cache,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){a=Error(r(423)),t=Ws(e,t,i,n,a);break a}if(i!==a){a=Error(r(424)),t=Ws(e,t,i,n,a);break a}for(Ja=Di(t.stateNode.containerInfo.firstChild),qa=t,G=!0,Ya=null,n=lo(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(no(),i===a){t=tc(e,t,n);break a}Ps(e,t,i,n)}t=t.child}return t;case 5:return vo(t),e===null&&$a(t),i=t.type,a=t.pendingProps,o=e===null?null:e.memoizedProps,s=a.children,bi(i,a)?s=null:o!==null&&bi(i,o)&&(t.flags|=32),zs(e,t),Ps(e,t,s,n),t.child;case 6:return e===null&&$a(t),null;case 13:return qs(e,t,n);case 4:return go(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=co(t,null,i,n):Ps(e,t,i,n),t.child;case 11:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:sa(i,a),Fs(e,t,i,a,n);case 7:return Ps(e,t,t.pendingProps,n),t.child;case 8:return Ps(e,t,t.pendingProps.children,n),t.child;case 12:return Ps(e,t,t.pendingProps.children,n),t.child;case 10:a:{if(i=t.type._context,a=t.pendingProps,o=t.memoizedProps,s=a.value,W(ca,i._currentValue),i._currentValue=s,o!==null){if(Dr(o.value,s)){if(o.children===a.children&&!Gi.current){t=tc(e,t,n);break a}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var c=o.dependencies;if(c!==null){s=o.child;for(var l=c.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=xa(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),ma(o.return,n,t),c.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(r(341));s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),ma(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}}Ps(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,i=t.pendingProps.children,ha(t,n),a=ga(a),i=i(a),t.flags|=1,Ps(e,t,i,n),t.child;case 14:return i=t.type,a=sa(i,t.pendingProps),a=sa(i.type,a),Is(e,t,i,a,n);case 15:return Ls(e,t,t.type,t.pendingProps,n);case 17:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:sa(i,a),e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),t.tag=1,Ji(i)?(e=!0,Qi(t)):e=!1,ha(t,n),ja(t,i,a),Na(t,i,a,n),Hs(null,t,i,!0,e,n);case 19:return ec(e,t,n);case 22:return Rs(e,t,n)}throw Error(r(156,t.tag))};function Pl(e,t){return pt(e,t)}function Fl(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Il(e,t,n,r){return new Fl(e,t,n,r)}function Ll(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Rl(e){if(typeof e==`function`)return+!!Ll(e);if(e!=null){if(e=e.$$typeof,e===k)return 11;if(e===j)return 14}return 2}function zl(e,t){var n=e.alternate;return n===null?(n=Il(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Bl(e,t,n,i,a,o){var s=2;if(i=e,typeof e==`function`)Ll(e)&&(s=1);else if(typeof e==`string`)s=5;else a:switch(e){case T:return Vl(n.children,a,o,t);case E:s=8,a|=8;break;case D:return e=Il(12,n,t,a|2),e.elementType=D,e.lanes=o,e;case ne:return e=Il(13,n,t,a),e.elementType=ne,e.lanes=o,e;case A:return e=Il(19,n,t,a),e.elementType=A,e.lanes=o,e;case re:return Hl(n,a,o,t);default:if(typeof e==`object`&&e)switch(e.$$typeof){case O:s=10;break a;case te:s=9;break a;case k:s=11;break a;case j:s=14;break a;case M:s=16,i=null;break a}throw Error(r(130,e==null?e:typeof e,``))}return t=Il(s,n,t,a),t.elementType=e,t.type=i,t.lanes=o,t}function Vl(e,t,n,r){return e=Il(7,e,r,t),e.lanes=n,e}function Hl(e,t,n,r){return e=Il(22,e,r,t),e.elementType=re,e.lanes=n,e.stateNode={},e}function Ul(e,t,n){return e=Il(6,e,null,t),e.lanes=n,e}function Wl(e,t,n){return t=Il(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Gl(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=It(0),this.expirationTimes=It(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=It(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Kl(e,t,n,r,i,a,o,s,c){return e=new Gl(e,t,n,s,c),t===1?(t=1,!0===a&&(t|=8)):t=0,a=Il(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null},ya(a),e}function ql(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:w,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}function Jl(e){if(!e)return Ui;e=e._reactInternals;a:{if(ct(e)!==e||e.tag!==1)throw Error(r(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break a;case 1:if(Ji(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break a}}t=t.return}while(t!==null);throw Error(r(171))}if(e.tag===1){var n=e.type;if(Ji(n))return Zi(e,n,t)}return t}function Yl(e,t,n,r,i,a,o,s,c){return e=Kl(n,r,!0,e,i,a,o,s,c),e.context=Jl(null),n=e.current,r=tl(),i=nl(n),a=xa(r,i),a.callback=t??null,Sa(n,a),e.current.lanes=i,Lt(e,i,r),al(e,r),e}function Xl(e,t,n,r){var i=t.current,a=tl(),o=nl(i);return n=Jl(n),t.context===null?t.context=n:t.pendingContext=n,t=xa(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),Sa(i,t),e=rl(i,o,a),e!==null&&Ca(e,i,o),o}function Zl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ql(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function $l(e,t){Ql(e,t),(e=e.alternate)&&Ql(e,t)}function eu(){return null}var tu=typeof reportError==`function`?reportError:function(e){console.error(e)};function nu(e){this._internalRoot=e}ru.prototype.render=nu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(r(409));Xl(e,t,null,null)},ru.prototype.unmount=nu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;pl(function(){Xl(null,e,null,null)}),t[Mi]=null}};function ru(e){this._internalRoot=e}ru.prototype.unstable_scheduleHydration=function(e){if(e){var t=Wt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<$t.length&&t!==0&&t<$t[n].priority;n++);$t.splice(n,0,e),n===0&&an(e)}};function iu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function au(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==` react-mount-point-unstable `))}function ou(){}function su(e,t,n,r,i){if(i){if(typeof r==`function`){var a=r;r=function(){var e=Zl(o);a.call(e)}}var o=Yl(t,r,e,0,null,!1,!1,``,ou);return e._reactRootContainer=o,e[Mi]=o.current,si(e.nodeType===8?e.parentNode:e),pl(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r==`function`){var s=r;r=function(){var e=Zl(c);s.call(e)}}var c=Kl(e,0,!1,null,null,!1,!1,``,ou);return e._reactRootContainer=c,e[Mi]=c.current,si(e.nodeType===8?e.parentNode:e),pl(function(){Xl(t,c,n,r)}),c}function cu(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i==`function`){var s=i;i=function(){var e=Zl(o);s.call(e)}}Xl(t,o,e,i)}else o=su(n,t,e,i,r);return Zl(o)}Vt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=jt(t.pendingLanes);n!==0&&(zt(t,n|1),al(t,z()),!(X&6)&&(Wc=z()+500,aa()))}break;case 13:var r=tl();pl(function(){return rl(e,1,r)}),$l(e,1)}},Ht=function(e){e.tag===13&&(rl(e,134217728,tl()),$l(e,134217728))},Ut=function(e){if(e.tag===13){var t=tl(),n=nl(e);rl(e,n,t),$l(e,n)}},Wt=function(){return V},Gt=function(e,t){var n=V;try{return V=e,t()}finally{V=n}},Ve=function(e,t,n){switch(t){case`input`:if(ve(e,n),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name=`+JSON.stringify(``+t)+`][type="radio"]`),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var a=zi(i);if(!a)throw Error(r(90));pe(i),ve(i,a)}}}break;case`textarea`:Te(e,n);break;case`select`:t=n.value,t!=null&&Se(e,!!n.multiple,t,!1)}},qe=fl,Je=pl;var lu={usingClientEntryPoint:!1,Events:[Li,Ri,zi,Ge,Ke,fl]},uu={findFiberByHostInstance:Ii,bundleType:0,version:`18.0.0-fc46dba67-20220329`,rendererPackageName:`react-dom`},du={bundleType:uu.bundleType,version:uu.version,rendererPackageName:uu.rendererPackageName,rendererConfig:uu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:S.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=R(e),e===null?null:e.stateNode},findFiberByHostInstance:uu.findFiberByHostInstance||eu,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:`18.0.0-fc46dba67-20220329`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var fu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fu.isDisabled&&fu.supportsFiber)try{Ct=fu.inject(du),wt=fu}catch{}}e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lu,e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!iu(t))throw Error(r(200));return ql(e,t,null,n)},e.createRoot=function(e,t){if(!iu(e))throw Error(r(299));var n=!1,i=``,a=tu;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=Kl(e,1,!1,null,null,n,!1,i,a),e[Mi]=t.current,si(e.nodeType===8?e.parentNode:e),new nu(t)},e.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(r(188)):(e=Object.keys(e).join(`,`),Error(r(268,e)));return e=R(t),e=e===null?null:e.stateNode,e},e.flushSync=function(e){return pl(e)},e.hydrate=function(e,t,n){if(!au(t))throw Error(r(200));return cu(null,e,t,!0,n)},e.hydrateRoot=function(e,t,n){if(!iu(e))throw Error(r(405));var i=n!=null&&n.hydratedSources||null,a=!1,o=``,s=tu;if(n!=null&&(!0===n.unstable_strictMode&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Yl(t,null,e,1,n??null,a,!1,o,s),e[Mi]=t.current,si(e),i)for(e=0;e<i.length;e++)n=i[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new ru(t)},e.render=function(e,t,n){if(!au(t))throw Error(r(200));return cu(null,e,t,!1,n)},e.unmountComponentAtNode=function(e){if(!au(e))throw Error(r(40));return e._reactRootContainer?(pl(function(){cu(null,null,e,!1,function(){e._reactRootContainer=null,e[Mi]=null})}),!0):!1},e.unstable_batchedUpdates=fl,e.unstable_renderSubtreeIntoContainer=function(e,t,n,i){if(!au(n))throw Error(r(200));if(e==null||e._reactInternals===void 0)throw Error(r(38));return cu(e,t,n,!1,i)},e.version=`18.0.0-fc46dba67-20220329`})),m=o(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=m();e.createRoot=t.createRoot,e.hydrateRoot=t.hydrateRoot})),g=c(u()),_=c(h(),1),v=o((e=>{var t=60103,n=60106,r=60107,i=60108,a=60114,o=60109,s=60110,c=60112,l=60113,u=60120,d=60115,f=60116,p=60121,m=60122,h=60117,g=60129,_=60131;if(typeof Symbol==`function`&&Symbol.for){var v=Symbol.for;t=v(`react.element`),n=v(`react.portal`),r=v(`react.fragment`),i=v(`react.strict_mode`),a=v(`react.profiler`),o=v(`react.provider`),s=v(`react.context`),c=v(`react.forward_ref`),l=v(`react.suspense`),u=v(`react.suspense_list`),d=v(`react.memo`),f=v(`react.lazy`),p=v(`react.block`),m=v(`react.server.block`),h=v(`react.fundamental`),g=v(`react.debug_trace_mode`),_=v(`react.legacy_hidden`)}function y(e){if(typeof e==`object`&&e){var p=e.$$typeof;switch(p){case t:switch(e=e.type,e){case r:case a:case i:case l:case u:return e;default:switch(e&&=e.$$typeof,e){case s:case c:case f:case d:case o:return e;default:return p}}case n:return p}}}e.isValidElementType=function(e){return!!(typeof e==`string`||typeof e==`function`||e===r||e===a||e===g||e===i||e===l||e===u||e===_||typeof e==`object`&&e&&(e.$$typeof===f||e.$$typeof===d||e.$$typeof===o||e.$$typeof===s||e.$$typeof===c||e.$$typeof===h||e.$$typeof===p||e[0]===m))},e.typeOf=y})),y=o(((e,t)=>{t.exports=v()})),b=o(((e,t)=>{t.exports=function(e,t,n,r){var i=n?n.call(r,e,t):void 0;if(i!==void 0)return!!i;if(e===t)return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),c=0;c<a.length;c++){var l=a[c];if(!s(l))return!1;var u=e[l],d=t[l];if(i=n?n.call(r,u,d,l):void 0,i===!1||i===void 0&&u!==d)return!1}return!0}})),x=y(),ee=c(b());function S(e){function t(e,r,c,l,u){for(var p=0,m=0,h=0,g=0,_,x,S=0,C=0,w,T=w=_=0,E=0,A=0,M=0,N=0,ie=c.length,P=ie-1,F,I=``,L=``,ae=``,oe=``,se;E<ie;){if(x=c.charCodeAt(E),E===P&&m+g+h+p!==0&&(m!==0&&(x=m===47?10:47),g=h=p=0,ie++,P++),m+g+h+p===0){if(E===P&&(0<A&&(I=I.replace(f,``)),0<I.trim().length)){switch(x){case 32:case 9:case 59:case 13:case 10:break;default:I+=c.charAt(E)}x=59}switch(x){case 123:for(I=I.trim(),_=I.charCodeAt(0),w=1,N=++E;E<ie;){switch(x=c.charCodeAt(E)){case 123:w++;break;case 125:w--;break;case 47:switch(x=c.charCodeAt(E+1)){case 42:case 47:a:{for(T=E+1;T<P;++T)switch(c.charCodeAt(T)){case 47:if(x===42&&c.charCodeAt(T-1)===42&&E+2!==T){E=T+1;break a}break;case 10:if(x===47){E=T+1;break a}}E=T}}break;case 91:x++;case 40:x++;case 34:case 39:for(;E++<P&&c.charCodeAt(E)!==x;);}if(w===0)break;E++}switch(w=c.substring(N,E),_===0&&(_=(I=I.replace(d,``).trim()).charCodeAt(0)),_){case 64:switch(0<A&&(I=I.replace(f,``)),x=I.charCodeAt(1),x){case 100:case 109:case 115:case 45:A=r;break;default:A=ne}if(w=t(r,A,w,x,u+1),N=w.length,0<j&&(A=n(ne,I,M),se=s(3,w,A,r,O,D,N,x,u,l),I=A.join(``),se!==void 0&&(N=(w=se.trim()).length)===0&&(x=0,w=``)),0<N)switch(x){case 115:I=I.replace(ee,o);case 100:case 109:case 45:w=I+`{`+w+`}`;break;case 107:I=I.replace(v,`$1 $2`),w=I+`{`+w+`}`,w=k===1||k===2&&a(`@`+w,3)?`@-webkit-`+w+`@`+w:`@`+w;break;default:w=I+w,l===112&&(w=(L+=w,``))}else w=``;break;default:w=t(r,n(r,I,M),w,l,u+1)}ae+=w,w=M=A=T=_=0,I=``,x=c.charCodeAt(++E);break;case 125:case 59:if(I=(0<A?I.replace(f,``):I).trim(),1<(N=I.length))switch(T===0&&(_=I.charCodeAt(0),_===45||96<_&&123>_)&&(N=(I=I.replace(` `,`:`)).length),0<j&&(se=s(1,I,r,e,O,D,L.length,l,u,l))!==void 0&&(N=(I=se.trim()).length)===0&&(I=`\0\0`),_=I.charCodeAt(0),x=I.charCodeAt(1),_){case 0:break;case 64:if(x===105||x===99){oe+=I+c.charAt(E);break}default:I.charCodeAt(N-1)!==58&&(L+=i(I,_,x,I.charCodeAt(2)))}M=A=T=_=0,I=``,x=c.charCodeAt(++E)}}switch(x){case 13:case 10:m===47?m=0:1+_===0&&l!==107&&0<I.length&&(A=1,I+=`\0`),0<j*re&&s(0,I,r,e,O,D,L.length,l,u,l),D=1,O++;break;case 59:case 125:if(m+g+h+p===0){D++;break}default:switch(D++,F=c.charAt(E),x){case 9:case 32:if(g+p+m===0)switch(S){case 44:case 58:case 9:case 32:F=``;break;default:x!==32&&(F=` `)}break;case 0:F=`\\0`;break;case 12:F=`\\f`;break;case 11:F=`\\v`;break;case 38:g+m+p===0&&(A=M=1,F=`\f`+F);break;case 108:if(g+m+p+te===0&&0<T)switch(E-T){case 2:S===112&&c.charCodeAt(E-3)===58&&(te=S);case 8:C===111&&(te=C)}break;case 58:g+m+p===0&&(T=E);break;case 44:m+h+g+p===0&&(A=1,F+=`\r`);break;case 34:case 39:m===0&&(g=g===x?0:g===0?x:g);break;case 91:g+m+h===0&&p++;break;case 93:g+m+h===0&&p--;break;case 41:g+m+p===0&&h--;break;case 40:if(g+m+p===0){if(_===0)switch(2*S+3*C){case 533:break;default:_=1}h++}break;case 64:m+h+g+p+T+w===0&&(w=1);break;case 42:case 47:if(!(0<g+p+h))switch(m){case 0:switch(2*x+3*c.charCodeAt(E+1)){case 235:m=47;break;case 220:N=E,m=42}break;case 42:x===47&&S===42&&N+2!==E&&(c.charCodeAt(N+2)===33&&(L+=c.substring(N,E+1)),F=``,m=0)}}m===0&&(I+=F)}C=S,S=x,E++}if(N=L.length,0<N){if(A=r,0<j&&(se=s(2,L,A,e,O,D,N,l,u,l),se!==void 0&&(L=se).length===0))return oe+L+ae;if(L=A.join(`,`)+`{`+L+`}`,k*te!==0){switch(k!==2||a(L,2)||(te=0),te){case 111:L=L.replace(b,`:-moz-$1`)+L;break;case 112:L=L.replace(y,`::-webkit-input-$1`)+L.replace(y,`::-moz-$1`)+L.replace(y,`:-ms-input-$1`)+L}te=0}}return oe+L+ae}function n(e,t,n){var i=t.trim().split(g);t=i;var a=i.length,o=e.length;switch(o){case 0:case 1:var s=0;for(e=o===0?``:e[0]+` `;s<a;++s)t[s]=r(e,t[s],n).trim();break;default:var c=s=0;for(t=[];s<a;++s)for(var l=0;l<o;++l)t[c++]=r(e[l]+` `,i[s],n).trim()}return t}function r(e,t,n){var r=t.charCodeAt(0);switch(33>r&&(r=(t=t.trim()).charCodeAt(0)),r){case 38:return t.replace(_,`$1`+e.trim());case 58:return e.trim()+t.replace(_,`$1`+e.trim());default:if(0<1*n&&0<t.indexOf(`\f`))return t.replace(_,(e.charCodeAt(0)===58?``:`$1`)+e.trim())}return e+t}function i(e,t,n,r){var o=e+`;`,s=2*t+3*n+4*r;if(s===944){e=o.indexOf(`:`,9)+1;var c=o.substring(e,o.length-1).trim();return c=o.substring(0,e).trim()+c+`;`,k===1||k===2&&a(c,1)?`-webkit-`+c+c:c}if(k===0||k===2&&!a(o,1))return o;switch(s){case 1015:return o.charCodeAt(10)===97?`-webkit-`+o+o:o;case 951:return o.charCodeAt(3)===116?`-webkit-`+o+o:o;case 963:return o.charCodeAt(5)===110?`-webkit-`+o+o:o;case 1009:if(o.charCodeAt(4)!==100)break;case 969:case 942:return`-webkit-`+o+o;case 978:return`-webkit-`+o+`-moz-`+o+o;case 1019:case 983:return`-webkit-`+o+`-moz-`+o+`-ms-`+o+o;case 883:if(o.charCodeAt(8)===45)return`-webkit-`+o+o;if(0<o.indexOf(`image-set(`,11))return o.replace(E,`$1-webkit-$2`)+o;break;case 932:if(o.charCodeAt(4)===45)switch(o.charCodeAt(5)){case 103:return`-webkit-box-`+o.replace(`-grow`,``)+`-webkit-`+o+`-ms-`+o.replace(`grow`,`positive`)+o;case 115:return`-webkit-`+o+`-ms-`+o.replace(`shrink`,`negative`)+o;case 98:return`-webkit-`+o+`-ms-`+o.replace(`basis`,`preferred-size`)+o}return`-webkit-`+o+`-ms-`+o+o;case 964:return`-webkit-`+o+`-ms-flex-`+o+o;case 1023:if(o.charCodeAt(8)!==99)break;return c=o.substring(o.indexOf(`:`,15)).replace(`flex-`,``).replace(`space-between`,`justify`),`-webkit-box-pack`+c+`-webkit-`+o+`-ms-flex-pack`+c+o;case 1005:return m.test(o)?o.replace(p,`:-webkit-`)+o.replace(p,`:-moz-`)+o:o;case 1e3:switch(c=o.substring(13).trim(),t=c.indexOf(`-`)+1,c.charCodeAt(0)+c.charCodeAt(t)){case 226:c=o.replace(x,`tb`);break;case 232:c=o.replace(x,`tb-rl`);break;case 220:c=o.replace(x,`lr`);break;default:return o}return`-webkit-`+o+`-ms-`+c+o;case 1017:if(o.indexOf(`sticky`,9)===-1)break;case 975:switch(t=(o=e).length-10,c=(o.charCodeAt(t)===33?o.substring(0,t):o).substring(e.indexOf(`:`,7)+1).trim(),s=c.charCodeAt(0)+(c.charCodeAt(7)|0)){case 203:if(111>c.charCodeAt(8))break;case 115:o=o.replace(c,`-webkit-`+c)+`;`+o;break;case 207:case 102:o=o.replace(c,`-webkit-`+(102<s?`inline-`:``)+`box`)+`;`+o.replace(c,`-webkit-`+c)+`;`+o.replace(c,`-ms-`+c+`box`)+`;`+o}return o+`;`;case 938:if(o.charCodeAt(5)===45)switch(o.charCodeAt(6)){case 105:return c=o.replace(`-items`,``),`-webkit-`+o+`-webkit-box-`+c+`-ms-flex-`+c+o;case 115:return`-webkit-`+o+`-ms-flex-item-`+o.replace(C,``)+o;default:return`-webkit-`+o+`-ms-flex-line-pack`+o.replace(`align-content`,``).replace(C,``)+o}break;case 973:case 989:if(o.charCodeAt(3)!==45||o.charCodeAt(4)===122)break;case 931:case 953:if(!0===T.test(e))return(c=e.substring(e.indexOf(`:`)+1)).charCodeAt(0)===115?i(e.replace(`stretch`,`fill-available`),t,n,r).replace(`:fill-available`,`:stretch`):o.replace(c,`-webkit-`+c)+o.replace(c,`-moz-`+c.replace(`fill-`,``))+o;break;case 962:if(o=`-webkit-`+o+(o.charCodeAt(5)===102?`-ms-`+o:``)+o,n+r===211&&o.charCodeAt(13)===105&&0<o.indexOf(`transform`,10))return o.substring(0,o.indexOf(`;`,27)+1).replace(h,`$1-webkit-$2`)+o}return o}function a(e,t){var n=e.indexOf(t===1?`:`:`{`),r=e.substring(0,t===3?10:n);return n=e.substring(n+1,e.length-1),M(t===2?r.replace(w,`$1`):r,n,t)}function o(e,t){var n=i(t,t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2));return n===t+`;`?`(`+t+`)`:n.replace(S,` or ($1)`).substring(4)}function s(e,t,n,r,i,a,o,s,c,l){for(var d=0,f=t,p;d<j;++d)switch(p=A[d].call(u,e,f,n,r,i,a,o,s,c,l)){case void 0:case!1:case!0:case null:break;default:f=p}if(f!==t)return f}function c(e){switch(e){case void 0:case null:j=A.length=0;break;default:if(typeof e==`function`)A[j++]=e;else if(typeof e==`object`)for(var t=0,n=e.length;t<n;++t)c(e[t]);else re=!!e|0}return c}function l(e){return e=e.prefix,e!==void 0&&(M=null,e?typeof e==`function`?(k=2,M=e):k=1:k=0),l}function u(e,n){var r=e;if(33>r.charCodeAt(0)&&(r=r.trim()),N=r,r=[N],0<j){var i=s(-1,n,r,r,O,D,0,0,0,0);i!==void 0&&typeof i==`string`&&(n=i)}var a=t(ne,r,n,0,0);return 0<j&&(i=s(-2,a,r,r,O,D,a.length,0,0,0),i!==void 0&&(a=i)),N=``,te=0,D=O=1,a}var d=/^\0+/g,f=/[\0\r\f]/g,p=/: */g,m=/zoo|gra/,h=/([,: ])(transform)/g,g=/,\r+?/g,_=/([\t\r\n ])*\f?&/g,v=/@(k\w+)\s*(\S*)\s*/,y=/::(place)/g,b=/:(read-only)/g,x=/[svh]\w+-[tblr]{2}/,ee=/\(\s*(.*)\s*\)/g,S=/([\s\S]*?);/g,C=/-self|flex-/g,w=/[^]*?(:[rp][el]a[\w-]+)[^]*/,T=/stretch|:\s*\w+\-(?:conte|avail)/,E=/([^-])(image-set\()/,D=1,O=1,te=0,k=1,ne=[],A=[],j=0,M=null,re=0,N=``;return u.use=c,u.set=l,e!==void 0&&l(e),u}var C={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function w(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var T=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,E=w(function(e){return T.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),D=o((e=>{var t=typeof Symbol==`function`&&Symbol.for,n=t?Symbol.for(`react.element`):60103,r=t?Symbol.for(`react.portal`):60106,i=t?Symbol.for(`react.fragment`):60107,a=t?Symbol.for(`react.strict_mode`):60108,o=t?Symbol.for(`react.profiler`):60114,s=t?Symbol.for(`react.provider`):60109,c=t?Symbol.for(`react.context`):60110,l=t?Symbol.for(`react.async_mode`):60111,u=t?Symbol.for(`react.concurrent_mode`):60111,d=t?Symbol.for(`react.forward_ref`):60112,f=t?Symbol.for(`react.suspense`):60113,p=t?Symbol.for(`react.suspense_list`):60120,m=t?Symbol.for(`react.memo`):60115,h=t?Symbol.for(`react.lazy`):60116,g=t?Symbol.for(`react.block`):60121,_=t?Symbol.for(`react.fundamental`):60117,v=t?Symbol.for(`react.responder`):60118,y=t?Symbol.for(`react.scope`):60119;function b(e){if(typeof e==`object`&&e){var t=e.$$typeof;switch(t){case n:switch(e=e.type,e){case l:case u:case i:case o:case a:case f:return e;default:switch(e&&=e.$$typeof,e){case c:case d:case h:case m:case s:return e;default:return t}}case r:return t}}}function x(e){return b(e)===u}e.AsyncMode=l,e.ConcurrentMode=u,e.ContextConsumer=c,e.ContextProvider=s,e.Element=n,e.ForwardRef=d,e.Fragment=i,e.Lazy=h,e.Memo=m,e.Portal=r,e.Profiler=o,e.StrictMode=a,e.Suspense=f,e.isAsyncMode=function(e){return x(e)||b(e)===l},e.isConcurrentMode=x,e.isContextConsumer=function(e){return b(e)===c},e.isContextProvider=function(e){return b(e)===s},e.isElement=function(e){return typeof e==`object`&&!!e&&e.$$typeof===n},e.isForwardRef=function(e){return b(e)===d},e.isFragment=function(e){return b(e)===i},e.isLazy=function(e){return b(e)===h},e.isMemo=function(e){return b(e)===m},e.isPortal=function(e){return b(e)===r},e.isProfiler=function(e){return b(e)===o},e.isStrictMode=function(e){return b(e)===a},e.isSuspense=function(e){return b(e)===f},e.isValidElementType=function(e){return typeof e==`string`||typeof e==`function`||e===i||e===u||e===o||e===a||e===f||e===p||typeof e==`object`&&!!e&&(e.$$typeof===h||e.$$typeof===m||e.$$typeof===s||e.$$typeof===c||e.$$typeof===d||e.$$typeof===_||e.$$typeof===v||e.$$typeof===y||e.$$typeof===g)},e.typeOf=b})),O=o(((e,t)=>{t.exports=D()})),te=c(o(((e,t)=>{var n=O(),r={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},o={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};s[n.ForwardRef]=a,s[n.Memo]=o;function c(e){return n.isMemo(e)?o:s[e.$$typeof]||r}var l=Object.defineProperty,u=Object.getOwnPropertyNames,d=Object.getOwnPropertySymbols,f=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,m=Object.prototype;function h(e,t,n){if(typeof t!=`string`){if(m){var r=p(t);r&&r!==m&&h(e,r,n)}var a=u(t);d&&(a=a.concat(d(t)));for(var o=c(e),s=c(t),g=0;g<a.length;++g){var _=a[g];if(!i[_]&&!(n&&n[_])&&!(s&&s[_])&&!(o&&o[_])){var v=f(t,_);try{l(e,_,v)}catch{}}}}return e}t.exports=h}))());function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var ne=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},A=function(e){return typeof e==`object`&&!!e&&(e.toString?e.toString():Object.prototype.toString.call(e))===`[object Object]`&&!(0,x.typeOf)(e)},j=Object.freeze([]),M=Object.freeze({});function re(e){return typeof e==`function`}function N(e){return e.displayName||e.name||`Component`}function ie(e){return e&&typeof e.styledComponentId==`string`}var P=typeof process<`u`&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||`data-styled`,F=typeof window<`u`&&`HTMLElement`in window,I=!!(typeof SC_DISABLE_SPEEDY==`boolean`?SC_DISABLE_SPEEDY:typeof process<`u`&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==``?{}.REACT_APP_SC_DISABLE_SPEEDY!==`false`&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<`u`&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==``&&{}.SC_DISABLE_SPEEDY!==`false`&&{}.SC_DISABLE_SPEEDY);function L(e){var t=[...arguments].slice(1);throw Error(`An error occurred. See https://git.io/JUIaE#`+e+` for more information.`+(t.length>0?` Args: `+t.join(`, `):``))}var ae=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}var t=e.prototype;return t.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},t.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,i=r;e>=i;)(i<<=1)<0&&L(16,``+e);this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var a=r;a<i;a++)this.groupSizes[a]=0}for(var o=this.indexOfGroup(e+1),s=0,c=t.length;s<c;s++)this.tag.insertRule(o,t[s])&&(this.groupSizes[e]++,o++)},t.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var i=n;i<r;i++)this.tag.deleteRule(n)}},t.getGroup=function(e){var t=``;if(e>=this.length||this.groupSizes[e]===0)return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n,a=r;a<i;a++)t+=this.tag.getRule(a)+`/*!sc*/
`;return t},e}(),oe=new Map,se=new Map,ce=1,le=function(e){if(oe.has(e))return oe.get(e);for(;se.has(ce);)ce++;var t=ce++;return oe.set(e,t),se.set(t,e),t},ue=function(e){return se.get(e)},de=function(e,t){t>=ce&&(ce=t+1),oe.set(e,t),se.set(t,e)},fe=`style[`+P+`][data-styled-version="5.3.5"]`,pe=RegExp(`^`+P+`\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),me=function(e,t,n){for(var r,i=n.split(`,`),a=0,o=i.length;a<o;a++)(r=i[a])&&e.registerName(t,r)},he=function(e,t){for(var n=(t.textContent||``).split(`/*!sc*/
`),r=[],i=0,a=n.length;i<a;i++){var o=n[i].trim();if(o){var s=o.match(pe);if(s){var c=0|parseInt(s[1],10),l=s[2];c!==0&&(de(l,c),me(e,l,s[3]),e.getTag().insertRules(c,r)),r.length=0}else r.push(o)}}},ge=function(){return typeof window<`u`&&window.__webpack_nonce__!==void 0?window.__webpack_nonce__:null},_e=function(e){var t=document.head,n=e||t,r=document.createElement(`style`),i=function(e){for(var t=e.childNodes,n=t.length;n>=0;n--){var r=t[n];if(r&&r.nodeType===1&&r.hasAttribute(P))return r}}(n),a=i===void 0?null:i.nextSibling;r.setAttribute(P,`active`),r.setAttribute(`data-styled-version`,`5.3.5`);var o=ge();return o&&r.setAttribute(`nonce`,o),n.insertBefore(r,a),r},ve=function(){function e(e){var t=this.element=_e(e);t.appendChild(document.createTextNode(``)),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var i=t[n];if(i.ownerNode===e)return i}L(17)}(t),this.length=0}var t=e.prototype;return t.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}},t.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.getRule=function(e){var t=this.sheet.cssRules[e];return t!==void 0&&typeof t.cssText==`string`?t.cssText:``},e}(),ye=function(){function e(e){var t=this.element=_e(e);this.nodes=t.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t),r=this.nodes[e];return this.element.insertBefore(n,r||null),this.length++,!0}return!1},t.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.getRule=function(e){return e<this.length?this.nodes[e].textContent:``},e}(),be=function(){function e(e){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},t.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.getRule=function(e){return e<this.length?this.rules[e]:``},e}(),xe=F,Se={isServer:!F,useCSSOMInjection:!I},Ce=function(){function e(e,t,n){e===void 0&&(e=M),t===void 0&&(t={}),this.options=k({},Se,{},e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&F&&xe&&(xe=!1,function(e){for(var t=document.querySelectorAll(fe),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(P)!==`active`&&(he(e,i),i.parentNode&&i.parentNode.removeChild(i))}}(this))}e.registerId=function(e){return le(e)};var t=e.prototype;return t.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(k({},this.options,{},t),this.gs,n&&this.names||void 0)},t.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.getTag=function(){return this.tag||=(n=(t=this.options).isServer,r=t.useCSSOMInjection,i=t.target,e=n?new be(i):r?new ve(i):new ye(i),new ae(e));var e,t,n,r,i},t.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},t.registerName=function(e,t){if(le(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},t.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(le(e),n)},t.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.clearRules=function(e){this.getTag().clearGroup(le(e)),this.clearNames(e)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(e){for(var t=e.getTag(),n=t.length,r=``,i=0;i<n;i++){var a=ue(i);if(a!==void 0){var o=e.names.get(a),s=t.getGroup(i);if(o&&s&&o.size){var c=P+`.g`+i+`[id="`+a+`"]`,l=``;o!==void 0&&o.forEach((function(e){e.length>0&&(l+=e+`,`)})),r+=``+s+c+`{content:"`+l+`"}/*!sc*/
`}}}return r}(this)},e}(),we=/(a)(d)/gi,Te=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ee(e){var t,n=``;for(t=Math.abs(e);t>52;t=t/52|0)n=Te(t%52)+n;return(Te(t%52)+n).replace(we,`$1-$2`)}var De=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Oe=function(e){return De(5381,e)};function ke(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(re(n)&&!ie(n))return!1}return!0}var Ae=Oe(`5.3.5`),je=function(){function e(e,t,n){this.rules=e,this.staticRulesId=``,this.isStatic=(n===void 0||n.isStatic)&&ke(e),this.componentId=t,this.baseHash=De(Ae,t),this.baseStyle=n,Ce.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.componentId,i=[];if(this.baseStyle&&i.push(this.baseStyle.generateAndInjectStyles(e,t,n)),this.isStatic&&!n.hash){if(this.staticRulesId&&t.hasNameForId(r,this.staticRulesId))i.push(this.staticRulesId);else{var a=Ye(this.rules,e,t,n).join(``),o=Ee(De(this.baseHash,a)>>>0);if(!t.hasNameForId(r,o)){var s=n(a,`.`+o,void 0,r);t.insertRules(r,o,s)}i.push(o),this.staticRulesId=o}}else{for(var c=this.rules.length,l=De(this.baseHash,n.hash),u=``,d=0;d<c;d++){var f=this.rules[d];if(typeof f==`string`)u+=f;else if(f){var p=Ye(f,e,t,n),m=Array.isArray(p)?p.join(``):p;l=De(l,m+d),u+=m}}if(u){var h=Ee(l>>>0);if(!t.hasNameForId(r,h)){var g=n(u,`.`+h,void 0,r);t.insertRules(r,h,g)}i.push(h)}}return i.join(` `)},e}(),Me=/^\s*\/\/.*$/gm,Ne=[`:`,`[`,`.`,`#`];function Pe(e){var t,n,r,i,a=e===void 0?M:e,o=a.options,s=o===void 0?M:o,c=a.plugins,l=c===void 0?j:c,u=new S(s),d=[],f=function(e){function t(t){if(t)try{e(t+`}`)}catch{}}return function(n,r,i,a,o,s,c,l,u,d){switch(n){case 1:if(u===0&&r.charCodeAt(0)===64)return e(r+`;`),``;break;case 2:if(l===0)return r+`/*|*/`;break;case 3:switch(l){case 102:case 112:return e(i[0]+r),``;default:return r+(d===0?`/*|*/`:``)}case-2:r.split(`/*|*/}`).forEach(t)}}}((function(e){d.push(e)})),p=function(e,r,a){return r===0&&Ne.indexOf(a[n.length])!==-1||a.match(i)?e:`.`+t};function m(e,a,o,s){s===void 0&&(s=`&`);var c=e.replace(Me,``),l=a&&o?o+` `+a+` { `+c+` }`:c;return t=s,n=a,r=RegExp(`\\`+n+`\\b`,`g`),i=RegExp(`(\\`+n+`\\b){2,}`),u(o||!a?``:a,l)}return u.use([].concat(l,[function(e,t,i){e===2&&i.length&&i[0].lastIndexOf(n)>0&&(i[0]=i[0].replace(r,p))},f,function(e){if(e===-2){var t=d;return d=[],t}}])),m.hash=l.length?l.reduce((function(e,t){return t.name||L(15),De(e,t.name)}),5381).toString():``,m}var Fe=g.createContext();Fe.Consumer;var Ie=g.createContext(),Le=(Ie.Consumer,new Ce),Re=Pe();function ze(){return(0,g.useContext)(Fe)||Le}function Be(){return(0,g.useContext)(Ie)||Re}function Ve(e){var t=(0,g.useState)(e.stylisPlugins),n=t[0],r=t[1],i=ze(),a=(0,g.useMemo)((function(){var t=i;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target]),o=(0,g.useMemo)((function(){return Pe({options:{prefix:!e.disableVendorPrefixes},plugins:n})}),[e.disableVendorPrefixes,n]);return(0,g.useEffect)((function(){(0,ee.default)(n,e.stylisPlugins)||r(e.stylisPlugins)}),[e.stylisPlugins]),g.createElement(Fe.Provider,{value:a},g.createElement(Ie.Provider,{value:o},e.children))}var He=function(){function e(e,t){var n=this;this.inject=function(e,t){t===void 0&&(t=Re);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,`@keyframes`))},this.toString=function(){return L(12,String(n.name))},this.name=e,this.id=`sc-keyframes-`+e,this.rules=t}return e.prototype.getName=function(e){return e===void 0&&(e=Re),this.name+e.hash},e}(),Ue=/([A-Z])/,We=/([A-Z])/g,Ge=/^ms-/,Ke=function(e){return`-`+e.toLowerCase()};function qe(e){return Ue.test(e)?e.replace(We,Ke).replace(Ge,`-ms-`):e}var Je=function(e){return e==null||!1===e||e===``};function Ye(e,t,n,r){if(Array.isArray(e)){for(var i,a=[],o=0,s=e.length;o<s;o+=1)(i=Ye(e[o],t,n,r))!==``&&(Array.isArray(i)?a.push.apply(a,i):a.push(i));return a}if(Je(e))return``;if(ie(e))return`.`+e.styledComponentId;if(re(e))return typeof(c=e)!=`function`||c.prototype&&c.prototype.isReactComponent||!t?e:Ye(e(t),t,n,r);var c;return e instanceof He?n?(e.inject(n,r),e.getName(r)):e:A(e)?function e(t,n){var r,i,a=[];for(var o in t)t.hasOwnProperty(o)&&!Je(t[o])&&(Array.isArray(t[o])&&t[o].isCss||re(t[o])?a.push(qe(o)+`:`,t[o],`;`):A(t[o])?a.push.apply(a,e(t[o],o)):a.push(qe(o)+`: `+(r=o,(i=t[o])==null||typeof i==`boolean`||i===``?``:typeof i!=`number`||i===0||r in C?String(i).trim():i+`px`)+`;`));return n?[n+` {`].concat(a,[`}`]):a}(e):e.toString()}var Xe=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Ze(e){var t=[...arguments].slice(1);return re(e)||A(e)?Xe(Ye(ne(j,[e].concat(t)))):t.length===0&&e.length===1&&typeof e[0]==`string`?e:Xe(Ye(ne(e,t)))}var Qe=function(e,t,n){return n===void 0&&(n=M),e.theme!==n.theme&&e.theme||t||n.theme},$e=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,et=/(^-|-$)/g;function tt(e){return e.replace($e,`-`).replace(et,``)}var nt=function(e){return Ee(Oe(e)>>>0)};function rt(e){return typeof e==`string`&&!0}var it=function(e){return typeof e==`function`||typeof e==`object`&&!!e&&!Array.isArray(e)},at=function(e){return e!==`__proto__`&&e!==`constructor`&&e!==`prototype`};function ot(e,t,n){var r=e[n];it(t)&&it(r)?st(r,t):e[n]=t}function st(e){for(var t=[...arguments].slice(1),n=0,r=t;n<r.length;n++){var i=r[n];if(it(i))for(var a in i)at(a)&&ot(e,i[a],a)}return e}var ct=g.createContext();ct.Consumer;function lt(e){var t=(0,g.useContext)(ct),n=(0,g.useMemo)((function(){return function(e,t){return e?re(e)?e(t):Array.isArray(e)||typeof e!=`object`?L(8):t?k({},t,{},e):e:L(14)}(e.theme,t)}),[e.theme,t]);return e.children?g.createElement(ct.Provider,{value:n},e.children):null}var ut={};function dt(e,t,n){var r=ie(e),i=!rt(e),a=t.attrs,o=a===void 0?j:a,s=t.componentId,c=s===void 0?function(e,t){var n=typeof e==`string`?tt(e):`sc`;ut[n]=(ut[n]||0)+1;var r=n+`-`+nt(`5.3.5`+n+ut[n]);return t?t+`-`+r:r}(t.displayName,t.parentComponentId):s,l=t.displayName,u=l===void 0?function(e){return rt(e)?`styled.`+e:`Styled(`+N(e)+`)`}(e):l,d=t.displayName&&t.componentId?tt(t.displayName)+`-`+t.componentId:t.componentId||c,f=r&&e.attrs?Array.prototype.concat(e.attrs,o).filter(Boolean):o,p=t.shouldForwardProp;r&&e.shouldForwardProp&&(p=t.shouldForwardProp?function(n,r,i){return e.shouldForwardProp(n,r,i)&&t.shouldForwardProp(n,r,i)}:e.shouldForwardProp);var m,h=new je(n,d,r?e.componentStyle:void 0),_=h.isStatic&&o.length===0,v=function(e,t){return function(e,t,n,r){var i=e.attrs,a=e.componentStyle,o=e.defaultProps,s=e.foldedComponentIds,c=e.shouldForwardProp,l=e.styledComponentId,u=e.target,d=function(e,t,n){e===void 0&&(e=M);var r=k({},t,{theme:e}),i={};return n.forEach((function(e){var t,n,a,o=e;for(t in re(o)&&(o=o(r)),o)r[t]=i[t]=t===`className`?(n=i[t],a=o[t],n&&a?n+` `+a:n||a):o[t]})),[r,i]}(Qe(t,(0,g.useContext)(ct),o)||M,t,i),f=d[0],p=d[1],m=function(e,t,n,r){var i=ze(),a=Be();return t?e.generateAndInjectStyles(M,i,a):e.generateAndInjectStyles(n,i,a)}(a,r,f,void 0),h=n,_=p.$as||t.$as||p.as||t.as||u,v=rt(_),y=p===t?t:k({},t,{},p),b={};for(var x in y)x[0]!==`$`&&x!==`as`&&(x===`forwardedAs`?b.as=y[x]:(c?c(x,E,_):!v||E(x))&&(b[x]=y[x]));return t.style&&p.style!==t.style&&(b.style=k({},t.style,{},p.style)),b.className=Array.prototype.concat(s,l,m===l?null:m,t.className,p.className).filter(Boolean).join(` `),b.ref=h,(0,g.createElement)(_,b)}(m,e,t,_)};return v.displayName=u,(m=g.forwardRef(v)).attrs=f,m.componentStyle=h,m.displayName=u,m.shouldForwardProp=p,m.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):j,m.styledComponentId=d,m.target=r?e.target:e,m.withComponent=function(e){var r=t.componentId,i=function(e,t){if(e==null)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(t,[`componentId`]),a=r&&r+`-`+(rt(e)?e:tt(N(e)));return dt(e,k({},i,{attrs:f,componentId:a}),n)},Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=r?st({},e.defaultProps,t):t}}),m.toString=function(){return`.`+m.styledComponentId},i&&(0,te.default)(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),m}var R=function(e){return function e(t,n,r){if(r===void 0&&(r=M),!(0,x.isValidElementType)(n))return L(1,String(n));var i=function(){return t(n,r,Ze.apply(void 0,arguments))};return i.withConfig=function(i){return e(t,n,k({},r,{},i))},i.attrs=function(i){return e(t,n,k({},r,{attrs:Array.prototype.concat(r.attrs,i).filter(Boolean)}))},i}(dt,e)};`a.abbr.address.area.article.aside.audio.b.base.bdi.bdo.big.blockquote.body.br.button.canvas.caption.cite.code.col.colgroup.data.datalist.dd.del.details.dfn.dialog.div.dl.dt.em.embed.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.head.header.hgroup.hr.html.i.iframe.img.input.ins.kbd.keygen.label.legend.li.link.main.map.mark.marquee.menu.menuitem.meta.meter.nav.noscript.object.ol.optgroup.option.output.p.param.picture.pre.progress.q.rp.rt.ruby.s.samp.script.section.select.small.source.span.strong.style.sub.summary.sup.table.tbody.td.textarea.tfoot.th.thead.time.title.tr.track.u.ul.var.video.wbr.circle.clipPath.defs.ellipse.foreignObject.g.image.line.linearGradient.marker.mask.path.pattern.polygon.polyline.radialGradient.rect.stop.svg.text.textPath.tspan`.split(`.`).forEach((function(e){R[e]=R(e)})),function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=ke(e),Ce.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(e,t,n,r){var i=r(Ye(this.rules,t,n,r).join(``),``),a=this.componentId+e;n.insertRules(a,a,i)},t.removeStyles=function(e,t){t.clearRules(this.componentId+e)},t.renderStyles=function(e,t,n,r){e>2&&Ce.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();function ft(e){var t=[...arguments].slice(1),n=Ze.apply(void 0,[e].concat(t)).join(``);return new He(nt(n),n)}(function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return``;var n=ge();return`<style `+[n&&`nonce="`+n+`"`,P+`="true"`,`data-styled-version="5.3.5"`].filter(Boolean).join(` `)+`>`+t+`</style>`},this.getStyleTags=function(){return e.sealed?L(2):e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)return L(2);var n=((t={})[P]=``,t[`data-styled-version`]=`5.3.5`,t.dangerouslySetInnerHTML={__html:e.instance.toString()},t),r=ge();return r&&(n.nonce=r),[g.createElement(`style`,k({},n,{key:`sc-0-0`}))]},this.seal=function(){e.sealed=!0},this.instance=new Ce({isServer:!0}),this.sealed=!1}var t=e.prototype;return t.collectStyles=function(e){return this.sealed?L(2):g.createElement(Ve,{sheet:this.instance},e)},t.interleaveWithNodeStream=function(e){return L(3)},e})();var pt=function(){return(0,g.useContext)(ct)},mt={isDark:!1,primaryColor:`#2924fb`,secondaryColor:`#fd23de`,backgroundColor:`#fff`,bgPrimaryColor:`#2924fb`,bgSecondaryColor:`#fd23de`,fontColor:`#0b132b`,textShadowColor:`#2924fb`,borderColor:`#e6ecf8`,boxShadowColor:`rgba(0,0,0,0.1)`,inputColor:`#f5f5fa`,placeholderColor:`#adadb8`,headerHighlightColor:`#2924fb`,headerHighlightOpacity:`0.08`},ht={isDark:!0,primaryColor:`#2924fb`,secondaryColor:`#fd23de`,backgroundColor:`#0b132b`,bgPrimaryColor:`#030250`,bgSecondaryColor:`#3617B6`,fontColor:`#fff`,textShadowColor:`#fff`,borderColor:`rgba(255,255,255,0.5)`,boxShadowColor:`rgba(255,255,255,0.75)`,inputColor:`#152451`,placeholderColor:`#5e5e66`,headerHighlightColor:`#fff`,headerHighlightOpacity:`0.1`},gt=(e,t)=>{let[n,r]=(0,g.useState)(``);return(0,g.useEffect)(()=>{let n=()=>{if(window.innerHeight+window.scrollY>=document.documentElement.scrollHeight-2){r(e[e.length-1]);return}let n=``;e.forEach(e=>{let r=document.getElementById(e);r&&r.getBoundingClientRect().top<=t&&(n=e)}),r(n)},i,a=()=>{i?.disconnect();let e=Math.max(0,window.innerHeight-t-1);i=new IntersectionObserver(n,{rootMargin:`-${t}px 0px -${e}px 0px`}),document.querySelectorAll(`main > *, footer`).forEach(e=>i?.observe(e))},o=new IntersectionObserver(n,{threshold:[0,1]}),s=document.querySelector(`footer`);return s&&o.observe(s),a(),window.addEventListener(`resize`,a),()=>{window.removeEventListener(`resize`,a),i?.disconnect(),o.disconnect()}},[e,t]),n},z=R.nav`
  background: ${e=>e.theme.backgroundColor};
  border-bottom: 1px solid ${e=>e.theme.fontColor};
  padding: 0.25rem 2rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr repeat(2, auto);
  align-items: center;
  column-gap: 1.5rem;
  line-height: 3rem;
  position: fixed;
  top: 0;
  box-sizing: border-box;
  z-index: 2;
  transition: background 0.2s ease;

  @media screen and (max-width: 480px) {
    padding: 0.25rem 1rem;
  }
`,_t=ft`
  from {
    opacity: 0;
    transform: translateY(-4rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,vt=R.a`
  color: ${e=>e.theme.backgroundColor};
  font-family: 'Simplaform';
  font-size: 2.5rem;
  padding-top: 0.25rem;
  text-shadow: ${e=>`${e.theme.secondaryColor} 2px -2px, ${e.theme.primaryColor} -2px 2px`};
  transition: text-shadow 0.18s ease-in-out;
  justify-self: start;
  letter-spacing: 2px;
  animation: ${_t} 0.5s ease-out;
  animation-fill-mode: forwards;

  &:hover {
    text-shadow: ${e=>`${e.theme.primaryColor} 2px -1px, ${e.theme.secondaryColor} -3px 1px`};
  }

  @media screen and (max-width: 768px) {
    animation: none;
  }
`,yt=R.label`
  opacity: 0;
  position: relative;
  display: inline-block;
  width: 2.9rem;
  height: 1.5rem;
  cursor: pointer;
  animation: ${_t} 0.5s ease-out;
  animation-fill-mode: forwards;
  animation-delay: 0.2s;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  @media screen and (max-width: 768px) {
    opacity: 1;
    animation: none;
  }
`,bt=R.span`
  background: #192B61;
  border-radius: 0.75rem;
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  -webkit-transition: 0.4s;
  transition: 0.4s;

  &:before {
    content: "";
    background: white;
    border-radius: 50%;
    position: absolute;
    height: 1.25rem;
    width: 1.25rem;
    left: 0.125rem;
    bottom: 0.125rem;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    z-index: 1;
  }

  ${yt}:hover &:before{
    box-shadow: ${e=>e.theme.textShadowColor} 0 0 8px;
  }

  input:checked + & {
    background: ${e=>e.theme.primaryColor};
  }
  
  input:checked + &:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(calc(2.9rem - 1.5rem));
  }
`,xt=R.div`
  height: 1.5rem;
  width: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;

  &.moon {
    left: 0.15rem;
  }

  &.sun {
    right: 0.15rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.95rem;
  }
`,St=R.button`
  color: inherit;
  opacity: 0;
  justify-self: end;
  display: none;
  padding: 0;

  @media screen and (max-width: 768px) {
    opacity: 1;
    display: flex;
  }
`,Ct=R.div`
  justify-self: end;
  display: grid;
  grid-template-columns: repeat(3, auto);
  column-gap: 1.5rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: auto;
    grid-column: 1 / -1;
    justify-self: center;
    overflow: hidden;
    width: 100%;
  
    &.open {
      background: ${e=>e.theme.backgroundColor};
      max-height: 18rem;
      visibility: visible;
      transition: max-height 0.25s ease-in;
      padding-bottom: 0.5rem;
    }
    
    &.close {
      max-height: 0;
      visibility: hidden;
      transition: max-height 0.15s ease-out;
    }
  }
`,wt=R.a`
  opacity: 0;
  font-size: 1.1rem;
  font-weight: 500;
  transition: 0.3s;
  position: relative;
  animation: ${_t} 0.5s ease-out;
  animation-fill-mode: forwards;

  &:first-child {
    animation-delay: 0.4s;
  }

  &:nth-child(2) {
    animation-delay: 0.6s;
  }

  &:nth-child(3) {
    animation-delay: 0.8s;
  }

  &:nth-child(4) {
    animation-delay: 1s;
  }

  &:nth-child(5) {
    animation-delay: 1.2s;
  }

  &:hover {
    color: ${e=>e.theme.textShadowColor};
    text-shadow: ${e=>e.theme.textShadowColor} 0 0 15px;
  }

  &:before {
    content: "";
    background: ${e=>e.theme.headerHighlightColor};
    border-radius: 0.5rem;
    opacity: ${e=>e.theme.headerHighlightOpacity};
    width: 0;
    height: 50%;
    position: absolute;
    left: -0.5rem;
    bottom: 25%;
    transition: width 0.4s ease-out;
  }

  &.active&:before {
    width: calc(100% + 1rem);
  }

  @media screen and (max-width: 768px) {
    grid-column: 1 / -1;
    text-align: center;
    opacity: 1;
    animation: none;

    &:before {
      opacity: 0;
    }
  }
`,Tt=o((e=>{var t=u(),n=Symbol.for(`react.element`),r=Symbol.for(`react.fragment`),i=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,r){var s,c={},l=null,u=null;for(s in r!==void 0&&(l=``+r),t.key!==void 0&&(l=``+t.key),t.ref!==void 0&&(u=t.ref),t)i.call(t,s)&&!o.hasOwnProperty(s)&&(c[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps,t)c[s]===void 0&&(c[s]=t[s]);return{$$typeof:n,type:e,key:l,ref:u,props:c,_owner:a.current}}e.Fragment=r,e.jsx=s,e.jsxs=s})),B=o(((e,t)=>{t.exports=Tt()}))(),Et=[{id:`bio`,label:`Bio`},{id:`experience`,label:`Experience`},{id:`contact`,label:`Contact`}],Dt=Et.map(({id:e})=>e),Ot=200,kt=({toggleTheme:e,dark:t})=>{let[n,r]=(0,g.useState)(!1),i=gt(Dt,Ot),a=()=>r(e=>!e),o=()=>r(!1);return(0,B.jsxs)(z,{children:[(0,B.jsx)(vt,{href:`#`,children:`go`}),(0,B.jsxs)(yt,{children:[(0,B.jsx)(`input`,{type:`checkbox`,onChange:e,checked:t,"aria-label":`Toggle dark mode`}),(0,B.jsx)(bt,{}),(0,B.jsx)(xt,{className:`moon`,children:`🌜`}),(0,B.jsx)(xt,{className:`sun`,children:`🌞`})]}),(0,B.jsx)(St,{type:`button`,onClick:a,"aria-label":`Toggle navigation menu`,"aria-expanded":n,children:(0,B.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,version:`1.1`,width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`currentColor`,children:(0,B.jsx)(`path`,{d:`M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z`})})}),(0,B.jsx)(Ct,{className:n?`navbar-menu open`:`navbar-menu close`,children:Et.map(({id:e,label:t})=>(0,B.jsx)(wt,{href:`#${e}`,className:i===e?`active`:``,onClick:o,children:t},e))})]})},At=({strings:e=[`Put your strings here...`,`and Enjoy!`],typeSpeed:t=100,backSpeed:n=50,backDelay:r=500,startDelay:i=500,cursorChar:a=`|`,placeholder:o=!1,showCursor:s=!0,disableBackTyping:c=!1,onFinished:l=function(){},loop:u=!0})=>({strings:e,typeSpeed:t,backSpeed:n,cursorChar:a,backDelay:r,placeholder:o,startDelay:i,showCursor:s,loop:u,disableBackTyping:c,onFinished:l}),jt=(e,t)=>{let n=0,r,i,a=(e,t)=>{n===r&&t.loop&&(n=0),setTimeout(()=>{o(e[n],t)},t.startDelay)},o=(t,n)=>{let r=0,i=t.length,a=setInterval(()=>{if(n.placeholder?e.placeholder+=t[r]:e.textContent+=t[r],++r===i)return s(a,n)},n.typeSpeed)},s=(e,t)=>{if(clearInterval(e),t.disableBackTyping&&n===r-1||!t.loop&&n===r-1)return t.onFinished();setTimeout(()=>c(t),t.backDelay)},c=t=>{let n=t.placeholder?e.placeholder:e.textContent,r=n.length,i=setInterval(()=>{if(t.placeholder?e.placeholder=e.placeholder.substr(0,--r):e.textContent=n.substr(0,--r),r===0)return l(i,t)},t.backSpeed)},l=(e,t)=>{clearInterval(e),++n,a(i,t)},u=(e,t)=>{let n=document.createElement(`span`);n.classList.add(`ityped-cursor`),n.textContent=`|`,n.textContent=t.cursorChar,e.insertAdjacentElement(`afterend`,n)};return(t=>{let n=At(t||{}),o=n.strings;i=o,r=o.length,typeof e==`string`&&(e=document.querySelector(e)),n.showCursor&&u(e,n),a(o,n)})(t)},Mt=R.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  position: relative;
  
  h1 {
    font-size: 5rem;
    font-weight: 900;
    font-style: italic;
    line-height: 4rem;
    margin: 0;
  }

  @media screen and (max-width: 768px) {
    h1 {
      font-size: 4rem;
      line-height: 3.2rem;
    }
  }

  @media screen and (max-width: 480px) {
    h1 {
      font-size: 3.3rem;
      line-height: 2.5rem;
    }
  }
`,Nt=R.div`
  font-family: 'Fira Code', monospace;
  font-size: 2rem;
  color: ${e=>e.theme.backgroundColor};
  background: ${e=>e.theme.fontColor};
  box-shadow: ${e=>`${e.theme.secondaryColor} 2px -2px, ${e.theme.primaryColor} -3px 3px`};
  padding: 0.5rem 1.5rem;
  position: relative;

  .prompt {
    font-size: 1.3rem;
    font-weight: 500;
  }

  .command {
    font-size: 2rem;
    font-weight: 600;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
    padding: 0.75rem 1.25rem;

    .prompt {
      font-size: 1.1rem;
      letter-spacing: -1px;
    }
  
    .command {
      font-size: 1.5rem;
    }
  }

  @media screen and (max-width: 480px) {
    padding: 0.5rem 0.7rem;

    .prompt {
      font-size: 0.9rem;
    }
  
    .command {
      font-size: 1.25rem;
    }
  }
`,Pt=ft`
  0% {
    opacity: 0;
    transform: translateY(-2rem);
  }
  40%, 70% {
    opacity: 1;
    transform: translateY(0);
  }
  90% {
    opacity: 0;
    transform: translateY(1rem);
  }
  100% {
    opacity: 0;
  }
`,Ft=R.div`
  color: ${e=>e.theme.fontColor};

  svg {
    opacity: 0;
    animation: ${Pt} 2s ease-out infinite;
    position: absolute;
    bottom: 1.5rem;
    left: calc(50vw - 18px);
  }

  svg:nth-child(2) {
    animation-delay: 0.4s;
  }

  svg:nth-child(3) {
    animation-delay: 0.7s;
  }
`,It=R.span`
  position: relative;
  justify-self: center;

  &:before, &:after {
    font-family: 'Fira Code', monospace;
    font-size: 1.1rem;
    font-weight: 500;
    font-style: italic;
    color: ${e=>e.theme.fontColor};
    opacity: 0.07;
    position: absolute;
  }

  &:before {
    content: '<${e=>e.className}>';
    top: -0.75rem;
    left: -2.25rem;
  }

  &:after {
    content: '</${e=>e.className}>';
    bottom: -0.75rem;
    right: -2.75rem;
  }

  &.h1&:before, &.h1&:after {
    font-size: 1.75rem;
    opacity: 0.14;
  }

  &.h1&:before {
    top: -2.25rem;
    left: 0;
  }

  &.h1&:after {
    bottom: -2.25rem;
    right: 0;
  }

  &.h2&:before {
    top: -0.75rem;
    left: -2.75rem;
  }

  &.h2&:after {
    bottom: -0.75rem;
    right: -3.25rem;
  }

  @media screen and (max-width: 1024px) {
    &.p&:before {
      top: -1rem;
      left: -1.5rem;
    }
  
    &.p&:after {
      bottom: -1rem;
      right: -1.5rem;
    }
  }

  @media screen and (max-width: 768px) {
    &:before, &:after {
      font-size: 1rem;
    }

    &.h1&:before {
      font-size: 1.5rem;
      top: -1.75rem;
    }

    &.h1&:after {
      font-size: 1.5rem;
      bottom: -1.75rem;
    }
    
    &.h2&:before {
      top: -0.5rem;
      left: -2.5rem;
    }

    &.h2&:after {
      bottom: -0.5rem;
      right: -3rem;
    }
  }

  @media screen and (max-width: 480px) {
    &.p&:before {
      left: -0.5rem;
    }
  
    &.p&:after {
      right: -0.5rem;
    }
  }
`,Lt=({className:e,content:t})=>(0,B.jsx)(It,{className:e,children:t}),Rt=R.section`
  padding: 3rem 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  position: relative;

  &.bio {
    padding-bottom: 8rem !important;
  }

  &:before, &:after {
    font-family: 'Fira Code', monospace;
    font-size: 1.1rem;
    font-weight: 500;
    font-style: italic;
    color: ${e=>e.theme.fontColor};
    opacity: 0.07;
    position: absolute;
  }

  &:before {
    content: '<section class="${e=>e.id}">';    
    top: 1rem;
    left: 3vw;
  }

  &:after {
    content: "</section>";
    bottom: 1rem;
    right: calc(3vw + 7px);
  }

  .bio&:before, .bio&:after, &.bio * *:after, &.bio * *:before {
    color: white;
    opacity: 0.12;
  }

  .section-description {
    padding: 0 10vw;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-template-columns: auto;
    gap: 1.5rem;
  }

  h2 {
    font-size: 2.25rem;
    margin: 0;
  }

  p {
    font-size: 1.2rem;
    font-weight: 200;
    line-height: 1.75rem;
    margin: 0;
    justify-self: center;
  }

  @media screen and (max-width: 1024px) {
    padding: 3rem 3rem;

    &:before {
      top: 0.5rem;
      left: 1vw;
    }

    &:after {
      right: calc(1vw + 7px);
    }

    .section-description {
      padding: 0;
    }

    &.bio&:after {
      bottom: calc(6rem + 1vw);
    }
  }

  @media screen and (max-width: 768px) {
    padding: 3rem 2rem;

    &:before, &:after {
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 480px) {
    padding: 3rem 1rem;

    h2 {
      font-size: 2rem;
    }

    p {
      font-size: 1.1rem;
    }
  }
`,zt=ft`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`,V=R(Rt)`
  color: white;
  background: ${e=>`linear-gradient(-45deg, ${e.theme.bgPrimaryColor}, ${e.theme.bgSecondaryColor}) no-repeat`};
  background-size: 400% 100%;
  animation: ${zt} 15s ease infinite;
`,Bt=()=>{let e=(0,g.useRef)(null),t=(0,g.useRef)(!1);return(0,g.useEffect)(()=>{e.current&&!t.current&&(t.current=!0,jt(e.current,{showCursor:!1,strings:[`Full-stack developer`,`OS Contributor`,`Designer`],typeSpeed:100,backDelay:2e3,backSpeed:60}))},[]),(0,B.jsxs)(Mt,{className:`banner`,children:[(0,B.jsx)(Lt,{className:`h1`,content:(0,B.jsx)(`h1`,{children:`GREG OLIVE`})}),(0,B.jsxs)(Nt,{children:[(0,B.jsx)(`span`,{className:`prompt`,children:`C:\\Users\\guest>\xA0`}),(0,B.jsx)(`span`,{className:`command`,ref:e})]}),(0,B.jsxs)(Ft,{children:[(0,B.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,version:`1.1`,width:`36`,height:`36`,viewBox:`0 0 24 24`,fill:`currentColor`,children:(0,B.jsx)(`path`,{d:`M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z`})}),(0,B.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,version:`1.1`,width:`36`,height:`36`,viewBox:`0 0 24 24`,fill:`currentColor`,children:(0,B.jsx)(`path`,{d:`M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z`})}),(0,B.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,version:`1.1`,width:`36`,height:`36`,viewBox:`0 0 24 24`,fill:`currentColor`,children:(0,B.jsx)(`path`,{d:`M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z`})})]})]})},Vt=R.div`
  display: flex;
  gap: 1.3rem;
`,Ht=R.a`
  border: 2px solid rgba(255,255,255,0.4);
  height: 2.8rem;
  width: 2.8rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s;
  
  &:hover {
    border: 2px solid white;
  }
`,Ut=({email:e=!1})=>(0,B.jsxs)(Vt,{children:[(0,B.jsx)(Ht,{href:`https://github.com/gregolive`,target:`_blank`,rel:`noreferrer`,"aria-label":`GitHub`,children:(0,B.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,version:`1.1`,width:`30`,height:`30`,viewBox:`0 0 24 24`,fill:`currentColor`,children:(0,B.jsx)(`path`,{d:`M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z`})})}),(0,B.jsx)(Ht,{href:`https://www.linkedin.com/in/gregory-olive-b3a5baa6/`,target:`_blank`,rel:`noreferrer`,"aria-label":`LinkedIn`,children:(0,B.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,version:`1.1`,width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`currentColor`,children:(0,B.jsx)(`path`,{d:`M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z`})})}),e?(0,B.jsx)(Ht,{href:`#contact`,"aria-label":`Contact me`,children:(0,B.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,version:`1.1`,width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`currentColor`,children:(0,B.jsx)(`path`,{d:`M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z`})})}):null]}),Wt=()=>(0,B.jsxs)(V,{id:`bio`,className:`bio`,children:[(0,B.jsxs)(`div`,{className:`section-description`,children:[(0,B.jsx)(Lt,{className:`h2`,content:(0,B.jsx)(`h2`,{children:`Hello world!`})}),(0,B.jsx)(Lt,{className:`p`,content:(0,B.jsx)(`p`,{children:`
    I started coding almost 10 years ago, and I've been building for the web as a professional developer since 2022.
    I am a problem solver, curious, and love working towards improving my skills in whatever I do.
    I was drawn to software development because it allows me to flex my creative muscles while creating something I am passionate about.
    I'm always happy to connect with people to share ideas!
  `})})]}),(0,B.jsx)(Ut,{email:!0})]}),Gt=R.article`
  color: ${e=>e.theme.fontColor};
  background: ${e=>e.theme.backgroundColor};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: 0.8rem;
  box-shadow: 1px 1px 5px ${e=>e.theme.boxShadowColor};
  margin: -6rem 16vw 2rem 16vw;
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 2rem;
  justify-items: center;
  position: relative;

  @media screen and (max-width: 1024px) {
    margin: -6rem 8vw 2rem 8vw;
    padding: 1.5rem;
    column-gap: 1rem;
  }
  
  @media screen and (max-width: 768px) {
    margin: -6rem 15vw 2rem 15vw;
    padding: 2rem;
    grid-template-columns: 1fr;
    row-gap: 2rem;
  }
  
  @media screen and (max-width: 480px) {
    margin: -6rem 5vw 2rem 5vw;
    padding: 1.5rem;
  }
`,Kt=R.div`
  font-family: 'Fira Code', monospace;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  h3 {
    margin-top: 0.5rem;
  }

  svg {
    color: ${e=>e.theme.primaryColor};
    height: 3rem;
  }

  li {
    min-width: 100px;
    font-size: 1rem;
    font-weight: 300;
    line-height: 2rem;
    text-align: center;
  }
`,qt=R.ul`
  margin-top: 0.5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  li {
    display: grid;
  }

  li:last-child:not(:nth-child(even)) {
    grid-column: 1 / -1;
  }

  i {
    font-size: 2rem;
  }
`,Jt=[{text:`JavaScript`,icon:(0,B.jsx)(`i`,{className:`devicon-javascript-plain colored`})},{text:`TypeScript`,icon:(0,B.jsx)(`i`,{className:`devicon-typescript-plain colored`})},{text:`PHP`,icon:(0,B.jsx)(`i`,{className:`devicon-php-plain colored`})},{text:`SQL`,icon:(0,B.jsx)(`i`,{className:`devicon-azuresqldatabase-plain colored`})},{text:`CSS`,icon:(0,B.jsx)(`i`,{className:`devicon-css3-plain colored`})},{text:`HTML`,icon:(0,B.jsx)(`i`,{className:`devicon-html5-plain colored`})}],Yt=[{text:`React`,icon:(0,B.jsx)(`i`,{className:`devicon-react-original colored`})},{text:`React Native`,icon:(0,B.jsx)(`i`,{className:`devicon-reactnative-original colored`})},{text:`Symfony`,icon:(0,B.jsx)(`i`,{className:`devicon-symfony-original colored`})},{text:`Remix`,icon:(0,B.jsx)(`i`,{className:`devicon-remix-original colored`})},{text:`Jest`,icon:(0,B.jsx)(`i`,{className:`devicon-jest-plain colored`})},{text:`Tailwind`,icon:(0,B.jsx)(`i`,{className:`devicon-tailwindcss-plain colored`})}],Xt=[{text:`AWS`,icon:(0,B.jsx)(`i`,{className:`devicon-amazonwebservices-plain-wordmark colored`})},{text:`Cloudflare`,icon:(0,B.jsx)(`i`,{className:`devicon-cloudflare-plain colored`})},{text:`Git`,icon:(0,B.jsx)(`i`,{className:`devicon-git-plain colored`})},{text:`npm`,icon:(0,B.jsx)(`i`,{className:`devicon-npm-original-wordmark colored`})},{text:`Storybook`,icon:(0,B.jsx)(`i`,{className:`devicon-storybook-plain colored`})},{text:`Yarn`,icon:(0,B.jsx)(`i`,{className:`devicon-yarn-original colored`})}],Zt=({svg:e,title:t,skills:n})=>(0,B.jsxs)(Kt,{children:[e,(0,B.jsx)(`h3`,{children:t}),(0,B.jsx)(qt,{children:n.map(e=>(0,B.jsxs)(`li`,{children:[e.icon,e.text]},e.text))})]}),Qt=()=>(0,B.jsxs)(Gt,{children:[(0,B.jsx)(Zt,{svg:(0,B.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 640 640`,fill:`currentColor`,children:(0,B.jsx)(`path`,{d:`M392.8 65.2C375.8 60.3 358.1 70.2 353.2 87.2L225.2 535.2C220.3 552.2 230.2 569.9 247.2 574.8C264.2 579.7 281.9 569.8 286.8 552.8L414.8 104.8C419.7 87.8 409.8 70.1 392.8 65.2zM457.4 201.3C444.9 213.8 444.9 234.1 457.4 246.6L530.8 320L457.4 393.4C444.9 405.9 444.9 426.2 457.4 438.7C469.9 451.2 490.2 451.2 502.7 438.7L598.7 342.7C611.2 330.2 611.2 309.9 598.7 297.4L502.7 201.4C490.2 188.9 469.9 188.9 457.4 201.4zM182.7 201.3C170.2 188.8 149.9 188.8 137.4 201.3L41.4 297.3C28.9 309.8 28.9 330.1 41.4 342.6L137.4 438.6C149.9 451.1 170.2 451.1 182.7 438.6C195.2 426.1 195.2 405.8 182.7 393.3L109.3 320L182.6 246.6C195.1 234.1 195.1 213.8 182.6 201.3z`})}),title:`Languages I Speak`,skills:Jt}),(0,B.jsx)(Zt,{svg:(0,B.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 640 640`,fill:`currentColor`,children:(0,B.jsx)(`path`,{d:`M176 168C189.3 168 200 157.3 200 144C200 130.7 189.3 120 176 120C162.7 120 152 130.7 152 144C152 157.3 162.7 168 176 168zM256 144C256 176.8 236.3 205 208 217.3L208 240C208 266.5 229.5 288 256 288L384 288C410.5 288 432 266.5 432 240L432 217.3C403.7 205 384 176.8 384 144C384 99.8 419.8 64 464 64C508.2 64 544 99.8 544 144C544 176.8 524.3 205 496 217.3L496 240C496 301.9 445.9 352 384 352L352 352L352 422.7C380.3 435 400 463.2 400 496C400 540.2 364.2 576 320 576C275.8 576 240 540.2 240 496C240 463.2 259.7 435 288 422.7L288 352L256 352C194.1 352 144 301.9 144 240L144 217.3C115.7 205 96 176.8 96 144C96 99.8 131.8 64 176 64C220.2 64 256 99.8 256 144zM464 168C477.3 168 488 157.3 488 144C488 130.7 477.3 120 464 120C450.7 120 440 130.7 440 144C440 157.3 450.7 168 464 168zM344 496C344 482.7 333.3 472 320 472C306.7 472 296 482.7 296 496C296 509.3 306.7 520 320 520C333.3 520 344 509.3 344 496z`})}),title:`My Frameworks`,skills:Yt}),(0,B.jsx)(Zt,{svg:(0,B.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 640 640`,fill:`currentColor`,children:(0,B.jsx)(`path`,{d:`M240 120L240 160L400 160L400 120C400 115.6 396.4 112 392 112L248 112C243.6 112 240 115.6 240 120zM192 160L192 120C192 89.1 217.1 64 248 64L392 64C422.9 64 448 89.1 448 120L448 160L476.1 160C488.8 160 501 165.1 510 174.1L561.9 226C570.9 235 576 247.2 576 259.9L576 336L440 336L440 320C440 306.7 429.3 296 416 296C402.7 296 392 306.7 392 320L392 336L248 336L248 320C248 306.7 237.3 296 224 296C210.7 296 200 306.7 200 320L200 336L64 336L64 259.9C64 247.2 69.1 235 78.1 226L130 174.1C139 165.1 151.2 160 163.9 160L192 160zM64 480L64 384L200 384L200 400C200 413.3 210.7 424 224 424C237.3 424 248 413.3 248 400L248 384L392 384L392 400C392 413.3 402.7 424 416 424C429.3 424 440 413.3 440 400L440 384L576 384L576 480C576 515.3 547.3 544 512 544L128 544C92.7 544 64 515.3 64 480z`})}),title:`My Dev Tools`,skills:Xt})]}),$t=R.div`
  position: relative;

  button {
    color: gray;
    opacity: 0.5;
    padding: 0;
    position: absolute;
    top: 50%;
    transition: 0.25s;
  }

  button:hover {
    color: ${e=>e.$color};
    opacity: 1;
  }

  button:first-of-type {
    left: 0;
  }

  button:last-of-type {
    right: 0;
  }

  button svg {
    height: 3rem;
    width: auto;
  }
`,en=R.div`
  justify-self: center;
`,tn=R.div`
  display: grid;
  overflow: hidden;
  padding: 0.5rem;
  margin: -0.5rem;
`,nn=ft`
  from { transform: translateX(calc(100% + 1rem)); }
  to { transform: translateX(0); }
`,rn=ft`
  from { transform: translateX(0); }
  to { transform: translateX(calc(-100% - 1rem)); visibility: hidden; }
`,an=ft`
  from { transform: translateX(calc(-100% - 1rem)); }
  to { transform: translateX(0); }
`,on=ft`
  from { transform: translateX(0); }
  to { transform: translateX(calc(100% + 1rem)); visibility: hidden; }
`,sn=R.div`
  grid-area: 1 / 1;
  align-self: center;
  visibility: hidden;

  &.active, &.leaving {
    visibility: visible;
  }

  &.animate {
    animation-duration: 0.5s;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
  }

  &.animate.active.next { animation-name: ${nn}; }
  &.animate.leaving.next { animation-name: ${rn}; }
  &.animate.active.prev { animation-name: ${an}; }
  &.animate.leaving.prev { animation-name: ${on}; }

  @media (prefers-reduced-motion: reduce) {
    &.animate {
      animation-duration: 0.01s;
    }
  }

  img {
    border: 1px solid ${e=>e.theme.borderColor};
    border-radius: 0.5rem;
    box-shadow: 1px 1px 5px ${e=>e.theme.boxShadowColor};
    display: block;
    ${e=>e.$wide?`
      width: 100%;
      height: auto;
      max-height: 28rem;
      object-fit: contain;
    `:`
      height: 30rem;
      aspect-ratio: 0.685;
    `}
  }
`,cn=R.div`
  margin-top: 0.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
`,ln=R.button`
  padding: 0;
  background: ${e=>e.theme.boxShadowColor};
  border-radius: 50%;
  height: 0.75rem;
  width: 0.75rem;
  cursor: pointer;
  transition: 0.4s;

  &.active, &:hover {
    background: ${e=>e.$color};
  }

  &:focus-visible {
    outline: 2px solid ${e=>e.$color};
    outline-offset: 2px;
  }
`,un=({images:e,color:t,wide:n=!1})=>{let[r,i]=(0,g.useState)({index:0,prev:null,dir:`next`}),a=r.index,o=e.length>1,s=(e,t)=>i({index:e,prev:a,dir:t}),c=()=>s(a<=0?e.length-1:a-1,`prev`),l=()=>s(a>=e.length-1?0:a+1,`next`),u=e=>{let t=[r.dir];return r.prev!==null&&t.push(`animate`),e===a&&t.push(`active`),e===r.prev&&e!==a&&t.push(`leaving`),t.join(` `)};return(0,g.useEffect)(()=>{if(!o)return;let e=window.setInterval(l,5e3);return()=>window.clearInterval(e)},[a,o]),(0,B.jsxs)(en,{className:`carousel`,children:[(0,B.jsxs)($t,{$color:t,children:[(0,B.jsx)(tn,{children:e.map((e,t)=>(0,B.jsx)(sn,{$wide:n,className:u(t),"aria-hidden":t!==a,children:(0,B.jsx)(`img`,{src:e.src,alt:e.alt})},e.src))}),o&&(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(`button`,{type:`button`,onClick:c,"aria-label":`Previous image`,children:(0,B.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,version:`1.1`,width:`24`,height:`24`,viewBox:`0 0 256 512`,fill:`currentColor`,children:(0,B.jsx)(`path`,{d:`M137.4 406.6l-128-127.1C3.125 272.4 0 264.2 0 255.1s3.125-16.38 9.375-22.63l128-127.1c9.156-9.156 22.91-11.9 34.88-6.943S192 115.1 192 128v255.1c0 12.94-7.781 24.62-19.75 29.58S146.5 415.8 137.4 406.6z`})})}),(0,B.jsx)(`button`,{type:`button`,onClick:l,"aria-label":`Next image`,children:(0,B.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,version:`1.1`,width:`24`,height:`24`,viewBox:`0 0 256 512`,fill:`currentColor`,children:(0,B.jsx)(`path`,{d:`M118.6 105.4l128 127.1C252.9 239.6 256 247.8 256 255.1s-3.125 16.38-9.375 22.63l-128 127.1c-9.156 9.156-22.91 11.9-34.88 6.943S64 396.9 64 383.1V128c0-12.94 7.781-24.62 19.75-29.58S109.5 96.23 118.6 105.4z`})})})]})]}),o&&(0,B.jsx)(cn,{children:e.map((e,n)=>(0,B.jsx)(ln,{type:`button`,$color:t,className:n===a?`active`:``,"aria-label":`Show image ${n+1}: ${e.alt}`,"aria-current":n===a,onClick:()=>{n!==a&&s(n,n>a?`next`:`prev`)}},e.src))})]})};R.div`
  display: grid;
  gap: 3rem;
`,R.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 5vw;

  .project-overview {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: center;
  }

  @media screen and (min-width: 768px) {
    &:nth-child(even) .project-overview {
      grid-area: 1 / 1 / 2 / 2;
    }

    &:nth-child(even) .carousel {
      grid-column: 2 / 3;
    }
  }

  @media screen and (max-width: 1024px) {
    gap: 2vw;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    text-align: center;
  }
`;var dn=R.h3`
  font-family: 'Fira Code', monospace;
  color: ${e=>e.$color};
  font-size: 1.65rem;
  margin: 0;
  display: flex;
  gap: 0.75rem;

  @media screen and (max-width: 1024px) {
    font-size: 1.55rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.65rem;
    justify-content: center;
  }
`;R.div`
  color: ${e=>e.theme.fontColor};
  display: flex;
  gap: 0.25rem;

  svg {
    transition: 0.25s ease-in-out;
  }

  svg:hover {
    transform: scale(1.15);
  }
`;var fn=R.div`
  font-family: 'Fira Code', monospace;
  font-size: 0.9rem;
  font-weight: 300;
  margin-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  span {
    color: ${e=>e.$color};
    background: ${e=>e.theme.backgroundColor};
    border: 1px solid ${e=>e.$color};
    border-radius: 1rem;
    padding: 0.3rem 0.7rem;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    text-align: center;
    cursor: default;
    transition: 0.4s;
  }

  span:hover {
    color: ${e=>e.theme.backgroundColor};
    background: ${e=>e.$color};
  }

  span i {
    font-size: 1.25rem;
  }

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`,pn=R.div`
  display: grid;
  gap: 4rem;
  width: 100%;
  max-width: 70rem;
`,mn=R.article`
  display: grid;
  gap: 2.5rem;
`,hn=R.div`
  background: ${e=>e.theme.backgroundColor};
  border: 1px solid ${e=>e.theme.borderColor};
  border-top: 4px solid ${e=>e.$color};
  border-radius: 0.5rem;
  box-shadow: 1px 1px 5px ${e=>e.theme.boxShadowColor};
  padding: 1.5rem 2rem;
  display: grid;
  gap: 1.25rem;

  @media screen and (max-width: 480px) {
    padding: 1.25rem 1rem;
  }
`,gn=R.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 1.25rem;

  .job-company {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .job-company h3 {
    font-family: 'Fira Code', monospace;
    color: ${e=>e.$color};
    font-size: 1.65rem;
    margin: 0;
  }

  .job-company h3 a:hover {
    text-decoration: underline;
  }

  .job-location {
    font-size: 1rem;
    font-weight: 300;
    opacity: 0.8;
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
    justify-items: center;
    text-align: center;
  }
`,_n=R.div`
  background: ${e=>e.theme.inputColor};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: 0.5rem;
  height: 4.5rem;
  width: 4.5rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Fira Code', monospace;
  font-size: 1.75rem;
  font-weight: 500;
  color: ${e=>e.$color};

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`,vn=R.ul`
  list-style: none;
  margin: 0;
  padding: 0 0 0 1.25rem;
  border-left: 2px solid ${e=>e.$color};
  display: grid;
  gap: 0.75rem;

  li {
    position: relative;
    display: flex;
    flex-direction: column;
  }

  li:before {
    content: '';
    background: ${e=>e.$color};
    border-radius: 50%;
    height: 0.75rem;
    width: 0.75rem;
    position: absolute;
    left: calc(-1.25rem - 7px);
    top: 0.45rem;
  }

  .role-title {
    font-size: 1.2rem;
    font-weight: 500;
  }

  .role-dates {
    font-size: 0.95rem;
    font-weight: 300;
    opacity: 0.8;
  }

  @media screen and (max-width: 480px) {
    text-align: left;
  }
`,yn=R.div`
  display: grid;
  gap: 1rem;

  p {
    font-size: 1.1rem;
  }

  .job-responsibilities {
    display: grid;
    gap: 0.5rem;
  }

  h4 {
    font-family: 'Fira Code', monospace;
    font-size: 1.1rem;
    font-weight: 500;
    margin: 0;
  }

  ul {
    font-size: 1.05rem;
    font-weight: 200;
    line-height: 1.6rem;
    margin: 0;
    padding-left: 1.25rem;
    display: grid;
    gap: 0.25rem;
  }

  li {
    list-style: disc;
  }

  @media screen and (max-width: 768px) {
    text-align: left;
  }
`,bn=R.div`
  display: grid;
  gap: 3rem;

  .highlights-heading {
    font-family: 'Fira Code', monospace;
    font-size: 1.1rem;
    font-weight: 500;
    opacity: 0.6;
    margin: 0;
    text-align: center;
  }
`,xn=R.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  align-items: center;
  gap: 3rem;

  .carousel {
    justify-self: stretch;
  }

  .highlight-overview {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    justify-content: center;
  }

  .highlight-overview p {
    font-size: 1.1rem;
    font-weight: 200;
    line-height: 1.6rem;
    margin: 0;
  }

  .highlight-impact {
    font-size: 1.05rem;
    font-weight: 300;
    line-height: 1.6rem;
    margin: 0;
    padding-left: 1.25rem;
    display: grid;
    gap: 0.25rem;

    li {
      list-style: disc;
    }
  }

  @media screen and (min-width: 768px) {
    &:nth-of-type(even) .highlight-overview {
      grid-area: 1 / 1 / 2 / 2;
    }

    &:nth-of-type(even) .carousel {
      grid-column: 2 / 3;
    }
  }

  @media screen and (max-width: 1024px) {
    gap: 2rem;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: minmax(0, 1fr);
    gap: 1.5rem;
    text-align: center;

    .highlight-impact {
      text-align: left;
    }
  }
`,Sn=({highlight:e,color:t})=>{let{title:n,summary:r,impact:i=[],tags:a=[],images:o=[]}=e;return(0,B.jsxs)(xn,{children:[o.length>0&&(0,B.jsx)(un,{images:o,color:t,wide:!0}),(0,B.jsxs)(`div`,{className:`highlight-overview`,children:[(0,B.jsx)(dn,{$color:t,children:n}),(0,B.jsx)(`p`,{children:r}),i.length>0&&(0,B.jsx)(`ul`,{className:`highlight-impact`,children:i.map((e,t)=>(0,B.jsx)(`li`,{children:e},t))}),a.length>0&&(0,B.jsx)(fn,{$color:t,children:a.map(e=>(0,B.jsxs)(`span`,{children:[e.icon,e.text]},e.text))})]})]})},Cn=(e,t)=>pt().isDark&&t?t:e,wn=({job:e})=>{let{company:t,logo:n,link:r,location:i,color:a,darkColor:o,roles:s=[],summary:c,responsibilities:l=[],tags:u=[],highlights:d=[]}=e,f=Cn(a,o);return(0,B.jsxs)(mn,{children:[(0,B.jsxs)(hn,{$color:f,children:[(0,B.jsxs)(gn,{$color:f,children:[(0,B.jsx)(_n,{$color:f,children:n?(0,B.jsx)(`img`,{src:n,alt:`${t} logo`}):t.charAt(0)}),(0,B.jsxs)(`div`,{className:`job-company`,children:[(0,B.jsx)(`h3`,{children:r?(0,B.jsx)(`a`,{href:r,target:`_blank`,rel:`noreferrer`,children:t}):t}),i&&(0,B.jsx)(`span`,{className:`job-location`,children:i})]})]}),(0,B.jsx)(vn,{$color:f,children:s.map((e,t)=>(0,B.jsxs)(`li`,{children:[(0,B.jsx)(`span`,{className:`role-title`,children:e.title}),(0,B.jsxs)(`span`,{className:`role-dates`,children:[e.start,` - `,e.end]})]},t))}),(0,B.jsxs)(yn,{children:[c&&(0,B.jsx)(`p`,{children:c}),l.length>0&&(0,B.jsxs)(`div`,{className:`job-responsibilities`,children:[(0,B.jsx)(`h4`,{children:`Responsibilities`}),(0,B.jsx)(`ul`,{children:l.map((e,t)=>(0,B.jsx)(`li`,{children:e},t))})]}),u.length>0&&(0,B.jsx)(fn,{$color:f,children:u.map(e=>(0,B.jsxs)(`span`,{children:[e.icon,e.text]},e.text))})]})]}),d.length>0&&(0,B.jsxs)(bn,{children:[(0,B.jsx)(`h4`,{className:`highlights-heading`,children:`Shipped feature highlights`}),d.map(e=>(0,B.jsx)(Sn,{highlight:e,color:f},e.title))]})]})},Tn=[{company:`Gist Applications`,logo:`/portfolio/assets/gist-apps-logo-HFEwa3VO.jpeg`,link:`https://gist-apps.com/`,location:`Victoria, BC, Canada`,color:`#202e37`,darkColor:`#1fbfa3`,roles:[{title:`Full-Stack Developer`,start:`Sept 2022`,end:`Present`}],summary:`
      B2B e-commerce SaaS startup in the Shopify ecosystem that helps thousands of businesses sell better online. 
    `,responsibilities:[`Build customer-facing widgets that integrate seamlessly with different e-commerce storefronts and improve merchant shopping experience and sales, while being mindful of accessibility and responsive design`,`Develop merchant-facing admin dashboards following Shopify design systems, providing intuitive interfaces for feature management and customization, analytics, and third-party service integrations`,`Iterate rapidly on frontend user interfaces based on user feedback and analytics, ensuring high-performing and reliable product experiences while taking ownership of feature delivery from design to implementation`,`Create robust back-end workflows that interface with the Shopify GraphQL and REST APIs alongside real-time webhooks to process core business logic and handle high-volume event triggers`,`Deploy and manage application infrastructure on AWS and Cloudflare Workers, ensuring up-to-date API integrations, maintaining version control, and debugging production issues via back-end logs`],tags:[{text:`React`,icon:(0,B.jsx)(`i`,{className:`devicon-react-original`})},{text:`TypeScript`,icon:(0,B.jsx)(`i`,{className:`devicon-typescript-plain`})},{text:`JavaScript`,icon:(0,B.jsx)(`i`,{className:`devicon-javascript-plain`})},{text:`PHP`,icon:(0,B.jsx)(`i`,{className:`devicon-php-plain`})},{text:`Symfony`,icon:(0,B.jsx)(`i`,{className:`devicon-symfony-original`})},{text:`SQL`,icon:(0,B.jsx)(`i`,{className:`devicon-azuresqldatabase-plain`})},{text:`GraphQL`,icon:(0,B.jsx)(`i`,{className:`devicon-graphql-plain`})},{text:`AWS`,icon:(0,B.jsx)(`i`,{className:`devicon-amazonwebservices-plain`})},{text:`Cloudflare`,icon:(0,B.jsx)(`i`,{className:`devicon-cloudflare-plain`})},{text:`Yarn`,icon:(0,B.jsx)(`i`,{className:`devicon-yarn-plain`})},{text:`Storybook`,icon:(0,B.jsx)(`i`,{className:`devicon-storybook-plain`})}],highlights:[{title:`Template Builder`,summary:`
          A schema-based, highly customizable template builder for the configuration of app features that includes an intuitive user interface. Implemented as a standalone npm package.
        `,impact:[`Drag and drop feature 'blocks' with near-infinite nesting of blocks and a live preview of resulting configuration`,`Schema-based configuration allows for high flexibility and reusability across multiple apps and features`,`Example use cases: Email templates, customer-facing forms, order invoice PDF templates`],tags:[{text:`React`,icon:(0,B.jsx)(`i`,{className:`devicon-react-original`})},{text:`TypeScript`,icon:(0,B.jsx)(`i`,{className:`devicon-typescript-plain`})},{text:`Storybook`,icon:(0,B.jsx)(`i`,{className:`devicon-storybook-plain`})},{text:`npm`,icon:(0,B.jsx)(`i`,{className:`devicon-npm-original-wordmark`})}],images:[{src:`/portfolio/assets/gist-template-1-3zfHGgm1.jpg`,alt:`template builder checkout`},{src:`/portfolio/assets/gist-template-2-BlWUDiCY.jpg`,alt:`template builder order printer`}]},{title:`Bulk Spreadsheet Order System`,summary:`
          A spreadsheet-based order creation system that allows merchants or their customers to efficiently create a large number of orders at the same time.
        `,impact:[`High-value feature for both merchants who save time and for our company, as merchants are charged per order created`,`Loads real time merchant shipping rates and customization features to ensure that created orders are consistent with merchant requirements and store settings`,`Features geographic validation, row virtualization, and safe copy/paste JSON handling`],tags:[{text:`React`,icon:(0,B.jsx)(`i`,{className:`devicon-react-original`})},{text:`TypeScript`,icon:(0,B.jsx)(`i`,{className:`devicon-typescript-plain`})},{text:`PHP`,icon:(0,B.jsx)(`i`,{className:`devicon-php-plain`})},{text:`Symfony`,icon:(0,B.jsx)(`i`,{className:`devicon-symfony-original`})}],images:[{src:`/portfolio/assets/gist-ordering-C9EUHO6L.jpg`,alt:`bulk spreadsheet order system`}]},{title:`User Interfaces`,summary:`
          A few examples of customer- and merchant-facing user interfaces implemented across different features and applications.
        `,impact:[`Bundle builder flow chart UI`,`Multiple address cart layout`,`Rules configuration interface`],tags:[],images:[{src:`/portfolio/assets/gist-flow-B4YT0ZbY.jpeg`,alt:`bundle flow`},{src:`/portfolio/assets/gist-cart-BuJLA7xu.jpg`,alt:`cart layout`},{src:`/portfolio/assets/gist-rules-CQPZZvUZ.jpg`,alt:`rules layout`}]}]}],En=()=>(0,B.jsxs)(Rt,{id:`experience`,children:[(0,B.jsxs)(`div`,{className:`section-description`,children:[(0,B.jsx)(Lt,{className:`h2`,content:(0,B.jsx)(`h2`,{children:`Experience`})}),(0,B.jsx)(Lt,{className:`p`,content:(0,B.jsx)(`p`,{children:`Where I've worked and some of the features I've helped ship.`})})]}),(0,B.jsx)(pn,{children:Tn.map(e=>(0,B.jsx)(wn,{job:e},e.company))})]}),Dn={_origin:`https://api.emailjs.com`},On=(e,t=`https://api.emailjs.com`)=>{Dn._userID=e,Dn._origin=t},kn=(e,t,n)=>{if(!e)throw`The public key is required. Visit https://dashboard.emailjs.com/admin/account`;if(!t)throw`The service ID is required. Visit https://dashboard.emailjs.com/admin`;if(!n)throw`The template ID is required. Visit https://dashboard.emailjs.com/admin/templates`;return!0},An=class{constructor(e){this.status=e.status,this.text=e.responseText}},jn=(e,t,n={})=>new Promise((r,i)=>{let a=new XMLHttpRequest;a.addEventListener(`load`,({target:e})=>{let t=new An(e);t.status===200||t.text===`OK`?r(t):i(t)}),a.addEventListener(`error`,({target:e})=>{i(new An(e))}),a.open(`POST`,Dn._origin+e,!0),Object.keys(n).forEach(e=>{a.setRequestHeader(e,n[e])}),a.send(t)}),Mn=(e,t,n,r)=>{let i=r||Dn._userID;return kn(i,e,t),jn(`/api/v1.0/email/send`,JSON.stringify({lib_version:`3.6.2`,user_id:i,service_id:e,template_id:t,template_params:n}),{"Content-type":`application/json`})},Nn=e=>{let t;if(t=typeof e==`string`?document.querySelector(e):e,!t||t.nodeName!==`FORM`)throw`The 3rd parameter is expected to be the HTML form element or the style selector of form`;return t},Pn={init:On,send:Mn,sendForm:(e,t,n,r)=>{let i=r||Dn._userID,a=Nn(n);kn(i,e,t);let o=new FormData(a);return o.append(`lib_version`,`3.6.2`),o.append(`service_id`,e),o.append(`template_id`,t),o.append(`user_id`,i),jn(`/api/v1.0/email/send-form`,o)}},Fn=R.form`
  width: 80%;
  display: grid;
  grid-template: repeat(3, auto) / repeat(2, 1fr);
  column-gap: 1rem;

  * {
    font-family: 'Inter', sans-serif;
    font-size: 1.1rem;
    border-radius: 0.5rem;
  }

  input, textarea {
    background: ${e=>e.theme.inputColor};
    color: ${e=>e.theme.fontColor};
    border: 1px solid transparent;
    padding: 0.8rem 1rem;
    outline: none;
    transition: border-color 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;

    &::placeholder {
      color: ${e=>e.theme.placeholderColor};
      transition: opacity 0.25s ease;
    }

    &:hover {
      border-color: ${e=>e.theme.borderColor};
    }

    &:focus {
      border-color: ${e=>e.theme.primaryColor};
      box-shadow: 0 0 0 3px ${e=>e.theme.primaryColor}33, 0 2px 12px ${e=>e.theme.primaryColor}22;
    }

    &:focus::placeholder {
      opacity: 0.5;
    }
  }

  button {
    margin-top: 0.5rem;
    justify-self: start;
    grid-column: 1 / -1;
  }

  @media screen and (max-width: 1024px) {
    width: 90%;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    grid-template-columns: 1fr;

    button {
      justify-self: stretch;
    }
  }
`,In=R.input`
  margin-bottom: 1rem;

  &:nth-child(3) {
    grid-column: 1 / -1;
  }
`,Ln=R.textarea`
  grid-column: 1 / -1;
  resize: vertical;
  margin-bottom: 0.5rem;
`,Rn=R.small`
  font-size: 0.85rem;
  color: #ff3860;
  background: none;
`,zn=R.button`
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  background: ${e=>`linear-gradient(135deg, ${e.theme.primaryColor}, ${e.theme.secondaryColor})`};
  color: white;
  border: none;
  border-radius: 0.5rem;
  padding: 0.75rem 2.25rem;
  box-shadow: 0 4px 14px ${e=>e.theme.primaryColor}66;
  transition: transform 0.25s ease, box-shadow 0.25s ease, filter 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px ${e=>e.theme.secondaryColor}55;
    filter: brightness(1.08);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 8px ${e=>e.theme.primaryColor}66;
  }

  &:focus-visible {
    outline: 2px solid ${e=>e.theme.fontColor};
    outline-offset: 3px;
  }
`,Bn=R.div`
  background: rgba(0, 0, 0, 0.6);
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
`,Vn=ft`
  0%, 80%, 100% {
    box-shadow: 0 1.5rem 0 -1.3rem;
  }
  40% {
    box-shadow: 0 1.5rem 0 0;
  }
`,Hn=R.div`
  color: #fff;
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  position: relative;
  animation: ${Vn} 1.5s infinite ease-in-out;
  animation-fill-mode: both;
  animation-delay: -0.16s;

  &:before, &:after {
    content: '';
    border-radius: 50%;
    width: 1.5rem;
    height: 1.5rem;
    position: absolute;
    top: 0;
    animation: ${Vn} 1.5s infinite ease-in-out;
    animation-fill-mode: both;
  }

  &:before {
    left: -2.5rem;
    animation-delay: -0.32s;
  }

  &:after {
    left: 2.5rem;
  }
`,Un=()=>(0,B.jsx)(Bn,{children:(0,B.jsx)(Hn,{})}),Wn=`/portfolio/assets/doodle-DHLNIgbw.png`,Gn=R.div`
  background: rgba(0, 0, 0, 0.8);
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
`,Kn=R.div`
  background: ${e=>e.theme.backgroundColor};
  border: 1px solid ${e=>e.theme.fontColor};
  border-radius: 1rem;
  padding: 2rem;
  display: grid;
  gap: 1rem;
  text-align: center;
  z-index: 4;

  img {
    height: calc(15rem + 5vw);
    justify-self: center;
  }

  h4 {
    font-size: 1.8rem;
    font-weight: 600;
    margin: 0;
  }

  p {
    font-size: 1.1rem;
  }

  @media screen and (max-width: 480px) {
    img {
      height: 50vw;
    }

    h4 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem;
    }
  }
`,qn=({setShowMsg:e})=>{let t=(0,g.useRef)(null);return(0,g.useEffect)(()=>{let t=t=>{t.key===`Escape`&&e(!1)};return window.addEventListener(`keydown`,t),()=>window.removeEventListener(`keydown`,t)},[e]),(0,B.jsx)(Gn,{ref:t,onClick:n=>{n.target===t.current&&e(!1)},role:`dialog`,"aria-modal":`true`,"aria-labelledby":`success-msg-title`,children:(0,B.jsxs)(Kn,{children:[(0,B.jsx)(`img`,{src:Wn,alt:`success doodle`}),(0,B.jsxs)(`div`,{children:[(0,B.jsx)(`h4`,{id:`success-msg-title`,children:`Thanks for reaching out!`}),(0,B.jsx)(`p`,{children:`I'll get back to you as soon as I can.`})]}),(0,B.jsx)(zn,{type:`button`,onClick:()=>e(!1),autoFocus:!0,children:`Close`})]})})},Jn=`Invalid email address`,Yn=()=>{let[e,t]=(0,g.useState)(``),[n,r]=(0,g.useState)(!1),[i,a]=(0,g.useState)(!1),o=()=>{e!==Jn&&t(``)};return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsxs)(Fn,{onSubmit:e=>{e.preventDefault();let n=e.currentTarget;n.checkValidity()?(r(!0),Pn.sendForm(`service_r3a5ya8`,`portfolio_template`,n,`84iANqR5si--0G9px`).then(()=>{a(!0),n.reset()}).catch(e=>{console.error(e),t(`Sorry, your message could not be sent${e?.text?` (${e.text})`:``}. Please try again later.`)}).finally(()=>r(!1))):t(`Please fill in all fields and enter a valid email address`)},noValidate:!0,children:[(0,B.jsx)(In,{type:`text`,name:`user_name`,placeholder:`Name`,"aria-label":`Name`,onChange:o,required:!0}),(0,B.jsx)(In,{type:`email`,name:`user_email`,placeholder:`Email`,"aria-label":`Email`,onBlur:e=>{t(e.target.validity.typeMismatch?Jn:``)},required:!0}),(0,B.jsx)(In,{type:`text`,name:`subject`,placeholder:`Subject`,"aria-label":`Subject`,onChange:o,required:!0}),(0,B.jsx)(Ln,{name:`message`,placeholder:`Message`,"aria-label":`Message`,rows:4,onChange:o,required:!0}),(0,B.jsx)(Rn,{role:`alert`,children:e}),(0,B.jsx)(zn,{type:`submit`,disabled:n,children:`Send`})]}),n?(0,B.jsx)(Un,{}):null,i?(0,B.jsx)(qn,{setShowMsg:a}):null]})},Xn=()=>(0,B.jsxs)(Rt,{id:`contact`,children:[(0,B.jsxs)(`div`,{className:`section-description`,children:[(0,B.jsx)(Lt,{className:`h2`,content:(0,B.jsx)(`h2`,{children:`Get in touch`})}),(0,B.jsx)(Lt,{className:`p`,content:(0,B.jsx)(`p`,{children:`For information about me or my work, feel free to reach out!`})})]}),(0,B.jsx)(Yn,{})]}),Zn=e=>{let[t,n]=(0,g.useState)(()=>window.scrollY>e);return(0,g.useEffect)(()=>{let t=()=>n(window.scrollY>e);return t(),window.addEventListener(`scroll`,t,{passive:!0}),()=>window.removeEventListener(`scroll`,t)},[e]),t},Qn=R.button`
  background: ${e=>e.theme.primaryColor};
  color: white;
  border-radius: 50%;
  height: 3.3rem;
  width: 3.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  position: fixed;
  bottom: 1.25rem;
  right: 1.25rem;
  transition: 0.4s;

  &.visible {
    opacity: 1;
    visibility: visible;
  }

  @media screen and (max-width: 768px) {
    height: 3rem;
    width: 3rem;
    bottom: 0.75rem;
    right: 0.75rem;
  }
`,$n=()=>{let e=Zn(1500);return(0,B.jsx)(Qn,{type:`button`,className:e?`visible`:``,onClick:()=>window.scrollTo({top:0}),"aria-label":`Back to top`,children:(0,B.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,version:`1.1`,width:`36`,height:`36`,viewBox:`0 0 320 512`,fill:`currentColor`,children:(0,B.jsx)(`path`,{d:`M9.39 265.4l127.1-128C143.6 131.1 151.8 128 160 128s16.38 3.125 22.63 9.375l127.1 128c9.156 9.156 11.9 22.91 6.943 34.88S300.9 320 287.1 320H32.01c-12.94 0-24.62-7.781-29.58-19.75S.2333 274.5 9.39 265.4z`})})})},er=()=>(0,B.jsxs)(`main`,{children:[(0,B.jsx)(Bt,{}),(0,B.jsx)(Wt,{}),(0,B.jsx)(Qt,{}),(0,B.jsx)(En,{}),(0,B.jsx)(Xn,{}),(0,B.jsx)($n,{})]}),tr=R.footer`
  color: white;
  background: ${e=>`linear-gradient(-45deg, ${e.theme.bgPrimaryColor}, ${e.theme.bgSecondaryColor}) no-repeat`};
  background-size: 400% 100%;
  animation: ${zt} 15s ease infinite;
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  small {
    font-size: 1rem;
    font-weight: 200;
  }
`,nr=R.a`
  color: ${e=>e.theme.backgroundColor};
  font-family: 'Simplaform';
  font-size: 2.5rem;
  text-shadow: ${e=>`${e.theme.secondaryColor} 2px -2px, ${e.theme.primaryColor} -2px 2px`};
  letter-spacing: 2px;
`,rr=()=>(0,B.jsxs)(tr,{children:[(0,B.jsx)(nr,{href:`#`,children:`go`}),(0,B.jsx)(Ut,{email:!1}),(0,B.jsx)(`small`,{children:`Built with care by @gregolive`})]}),ir=R.div`
  background: ${e=>e.theme.backgroundColor};
  color: ${e=>e.theme.fontColor};
`,ar=()=>{try{let e=localStorage.getItem(`dark`);if(e!==null)return e===`true`}catch{}return window.matchMedia?.(`(prefers-color-scheme: dark)`).matches??!1};_.createRoot(document.getElementById(`root`)).render((0,B.jsx)(g.StrictMode,{children:(0,B.jsx)(()=>{let[e,t]=(0,g.useState)(ar);return(0,B.jsx)(lt,{theme:e?ht:mt,children:(0,B.jsxs)(ir,{children:[(0,B.jsx)(kt,{toggleTheme:()=>{t(e=>{let t=!e;try{localStorage.setItem(`dark`,String(t))}catch{}return t})},dark:e}),(0,B.jsx)(er,{}),(0,B.jsx)(rr,{})]})})},{})}));