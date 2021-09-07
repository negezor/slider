import{toRefs as t,ref as e,computed as r,onMounted as n,onUnmounted as i,watch as o}from"@vue/composition-api";function a(t){return-1!==[null,void 0,!1].indexOf(t)}function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){u(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;function c(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function p(t){var e={exports:{}};return t(e,e.exports),e.exports}function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var d=p((function(t,e){t.exports=function(){var t=["decimals","thousand","mark","prefix","suffix","encoder","decoder","negativeBefore","negative","edit","undo"];function e(t){return t.split("").reverse().join("")}function r(t,e){return t.substring(0,e.length)===e}function n(t,e){return t.slice(-1*e.length)===e}function i(t,e,r){if((t[e]||t[r])&&t[e]===t[r])throw new Error(e)}function o(t){return"number"==typeof t&&isFinite(t)}function a(t,e){return t=t.toString().split("e"),(+((t=(t=Math.round(+(t[0]+"e"+(t[1]?+t[1]+e:e)))).toString().split("e"))[0]+"e"+(t[1]?+t[1]-e:-e))).toFixed(e)}function s(t,r,n,i,s,l,u,c,p,f,d,h){var m,v,g,b=h,y="",S="";return l&&(h=l(h)),!!o(h)&&(!1!==t&&0===parseFloat(h.toFixed(t))&&(h=0),h<0&&(m=!0,h=Math.abs(h)),!1!==t&&(h=a(h,t)),-1!==(h=h.toString()).indexOf(".")?(g=(v=h.split("."))[0],n&&(y=n+v[1])):g=h,r&&(g=e(g).match(/.{1,3}/g),g=e(g.join(e(r)))),m&&c&&(S+=c),i&&(S+=i),m&&p&&(S+=p),S+=g,S+=y,s&&(S+=s),f&&(S=f(S,b)),S)}function l(t,e,i,a,s,l,u,c,p,f,d,h){var m,v="";return d&&(h=d(h)),!(!h||"string"!=typeof h)&&(c&&r(h,c)&&(h=h.replace(c,""),m=!0),a&&r(h,a)&&(h=h.replace(a,"")),p&&r(h,p)&&(h=h.replace(p,""),m=!0),s&&n(h,s)&&(h=h.slice(0,-1*s.length)),e&&(h=h.split(e).join("")),i&&(h=h.replace(i,".")),m&&(v+="-"),""!==(v=(v+=h).replace(/[^0-9\.\-.]/g,""))&&(v=Number(v),u&&(v=u(v)),!!o(v)&&v))}function u(e){var r,n,o,a={};for(void 0===e.suffix&&(e.suffix=e.postfix),r=0;r<t.length;r+=1)if(void 0===(o=e[n=t[r]]))"negative"!==n||a.negativeBefore?"mark"===n&&"."!==a.thousand?a[n]=".":a[n]=!1:a[n]="-";else if("decimals"===n){if(!(o>=0&&o<8))throw new Error(n);a[n]=o}else if("encoder"===n||"decoder"===n||"edit"===n||"undo"===n){if("function"!=typeof o)throw new Error(n);a[n]=o}else{if("string"!=typeof o)throw new Error(n);a[n]=o}return i(a,"mark","thousand"),i(a,"prefix","negative"),i(a,"prefix","negativeBefore"),a}function c(e,r,n){var i,o=[];for(i=0;i<t.length;i+=1)o.push(e[t[i]]);return o.push(n),r.apply("",o)}function p(t){if(!(this instanceof p))return new p(t);"object"===f(t)&&(t=u(t),this.to=function(e){return c(t,s,e)},this.from=function(e){return c(t,l,e)})}return p}()}));function h(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function m(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function v(e,n,i){var o=t(e),a=o.format,s=o.step,l=i.value,u=i.classList,c=r((function(){return a&&a.value?"function"==typeof a.value?{to:a.value}:d(function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?h(Object(r),!0).forEach((function(e){m(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},a.value)):d({decimals:s.value>=0?0:2})}));return{tooltipsFormat:r((function(){return Array.isArray(l.value)?l.value.map((function(t){return c.value})):c.value})),tooltipsMerge:function(t,e,r){var n="rtl"===getComputedStyle(t).direction,i="rtl"===t.noUiSlider.options.direction,o="vertical"===t.noUiSlider.options.orientation,a=t.noUiSlider.getTooltips(),s=t.noUiSlider.getOrigins();a.forEach((function(t,e){t&&s[e].appendChild(t)})),t.noUiSlider.on("update",(function(t,s,l,p,f){var d=[[]],h=[[]],m=[[]],v=0;a[0]&&(d[0][0]=0,h[0][0]=f[0],m[0][0]=c.value.to(parseFloat(t[0])));for(var g=1;g<t.length;g++)(!a[g]||t[g]-t[g-1]>e)&&(d[++v]=[],m[v]=[],h[v]=[]),a[g]&&(d[v].push(g),m[v].push(c.value.to(parseFloat(t[g]))),h[v].push(f[g]));d.forEach((function(t,e){for(var s=t.length,l=0;l<s;l++){var c=t[l];if(l===s-1){var p=0;h[e].forEach((function(t){p+=1e3-10*t}));var f=o?"bottom":"right",d=i?0:s-1,v=1e3-10*h[e][d];p=(n&&!o?100:0)+p/s-v,a[c].innerHTML=m[e].join(r),a[c].style.display="block",a[c].style[f]=p+"%",a[c].classList.contains(u.value.tooltipHidden)&&a[c].classList.remove(u.value.tooltipHidden)}else a[c].style.display="none",a[c].classList.add(u.value.tooltipHidden)}}))}))}}}function g(t){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var b=c(p((function(t,e){!function(t){function e(t){return r(t)&&"function"==typeof t.from}function r(t){return"object"===g(t)&&"function"==typeof t.to}function n(t){t.parentElement.removeChild(t)}function i(t){return null!=t}function o(t){t.preventDefault()}function a(t){return t.filter((function(t){return!this[t]&&(this[t]=!0)}),{})}function s(t,e){return Math.round(t/e)*e}function l(t,e){var r=t.getBoundingClientRect(),n=t.ownerDocument,i=n.documentElement,o=b(n);return/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(o.x=0),e?r.top+o.y-i.clientTop:r.left+o.x-i.clientLeft}function u(t){return"number"==typeof t&&!isNaN(t)&&isFinite(t)}function c(t,e,r){r>0&&(h(t,e),setTimeout((function(){m(t,e)}),r))}function p(t){return Math.max(Math.min(t,100),0)}function f(t){return Array.isArray(t)?t:[t]}function d(t){var e=(t=String(t)).split(".");return e.length>1?e[1].length:0}function h(t,e){t.classList&&!/\s/.test(e)?t.classList.add(e):t.className+=" "+e}function m(t,e){t.classList&&!/\s/.test(e)?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," ")}function v(t,e){return t.classList?t.classList.contains(e):new RegExp("\\b"+e+"\\b").test(t.className)}function b(t){var e=void 0!==window.pageXOffset,r="CSS1Compat"===(t.compatMode||"");return{x:e?window.pageXOffset:r?t.documentElement.scrollLeft:t.body.scrollLeft,y:e?window.pageYOffset:r?t.documentElement.scrollTop:t.body.scrollTop}}function y(){return window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"}}function S(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,e)}catch(t){}return t}function x(){return window.CSS&&CSS.supports&&CSS.supports("touch-action","none")}function w(t,e){return 100/(e-t)}function E(t,e,r){return 100*e/(t[r+1]-t[r])}function P(t,e){return E(t,t[0]<0?e+Math.abs(t[0]):e-t[0],0)}function C(t,e){return e*(t[1]-t[0])/100+t[0]}function N(t,e){for(var r=1;t>=e[r];)r+=1;return r}function O(t,e,r){if(r>=t.slice(-1)[0])return 100;var n=N(r,t),i=t[n-1],o=t[n],a=e[n-1],s=e[n];return a+P([i,o],r)/w(a,s)}function V(t,e,r){if(r>=100)return t.slice(-1)[0];var n=N(r,e),i=t[n-1],o=t[n],a=e[n-1];return C([i,o],(r-a)*w(a,e[n]))}function k(t,e,r,n){if(100===n)return n;var i=N(n,t),o=t[i-1],a=t[i];return r?n-o>(a-o)/2?a:o:e[i-1]?t[i-1]+s(n-t[i-1],e[i-1]):n}var A,M;t.PipsMode=void 0,(M=t.PipsMode||(t.PipsMode={})).Range="range",M.Steps="steps",M.Positions="positions",M.Count="count",M.Values="values",t.PipsType=void 0,(A=t.PipsType||(t.PipsType={}))[A.None=-1]="None",A[A.NoValue=0]="NoValue",A[A.LargeValue=1]="LargeValue",A[A.SmallValue=2]="SmallValue";var j=function(){function t(t,e,r){var n;this.xPct=[],this.xVal=[],this.xSteps=[],this.xNumSteps=[],this.xHighestCompleteStep=[],this.xSteps=[r||!1],this.xNumSteps=[!1],this.snap=e;var i=[];for(Object.keys(t).forEach((function(e){i.push([f(t[e]),e])})),i.sort((function(t,e){return t[0][0]-e[0][0]})),n=0;n<i.length;n++)this.handleEntryPoint(i[n][1],i[n][0]);for(this.xNumSteps=this.xSteps.slice(0),n=0;n<this.xNumSteps.length;n++)this.handleStepPoint(n,this.xNumSteps[n])}return t.prototype.getDistance=function(t){var e,r=[];for(e=0;e<this.xNumSteps.length-1;e++){var n=this.xNumSteps[e];if(n&&t/n%1!=0)throw new Error("noUiSlider: 'limit', 'margin' and 'padding' of "+this.xPct[e]+"% range must be divisible by step.");r[e]=E(this.xVal,t,e)}return r},t.prototype.getAbsoluteDistance=function(t,e,r){var n,i=0;if(t<this.xPct[this.xPct.length-1])for(;t>this.xPct[i+1];)i++;else t===this.xPct[this.xPct.length-1]&&(i=this.xPct.length-2);r||t!==this.xPct[i+1]||i++,null===e&&(e=[]);var o=1,a=e[i],s=0,l=0,u=0,c=0;for(n=r?(t-this.xPct[i])/(this.xPct[i+1]-this.xPct[i]):(this.xPct[i+1]-t)/(this.xPct[i+1]-this.xPct[i]);a>0;)s=this.xPct[i+1+c]-this.xPct[i+c],e[i+c]*o+100-100*n>100?(l=s*n,o=(a-100*n)/e[i+c],n=1):(l=e[i+c]*s/100*o,o=0),r?(u-=l,this.xPct.length+c>=1&&c--):(u+=l,this.xPct.length-c>=1&&c++),a=e[i+c]*o;return t+u},t.prototype.toStepping=function(t){return t=O(this.xVal,this.xPct,t)},t.prototype.fromStepping=function(t){return V(this.xVal,this.xPct,t)},t.prototype.getStep=function(t){return t=k(this.xPct,this.xSteps,this.snap,t)},t.prototype.getDefaultStep=function(t,e,r){var n=N(t,this.xPct);return(100===t||e&&t===this.xPct[n-1])&&(n=Math.max(n-1,1)),(this.xVal[n]-this.xVal[n-1])/r},t.prototype.getNearbySteps=function(t){var e=N(t,this.xPct);return{stepBefore:{startValue:this.xVal[e-2],step:this.xNumSteps[e-2],highestStep:this.xHighestCompleteStep[e-2]},thisStep:{startValue:this.xVal[e-1],step:this.xNumSteps[e-1],highestStep:this.xHighestCompleteStep[e-1]},stepAfter:{startValue:this.xVal[e],step:this.xNumSteps[e],highestStep:this.xHighestCompleteStep[e]}}},t.prototype.countStepDecimals=function(){var t=this.xNumSteps.map(d);return Math.max.apply(null,t)},t.prototype.hasNoSize=function(){return this.xVal[0]===this.xVal[this.xVal.length-1]},t.prototype.convert=function(t){return this.getStep(this.toStepping(t))},t.prototype.handleEntryPoint=function(t,e){var r;if(!u(r="min"===t?0:"max"===t?100:parseFloat(t))||!u(e[0]))throw new Error("noUiSlider: 'range' value isn't numeric.");this.xPct.push(r),this.xVal.push(e[0]);var n=Number(e[1]);r?this.xSteps.push(!isNaN(n)&&n):isNaN(n)||(this.xSteps[0]=n),this.xHighestCompleteStep.push(0)},t.prototype.handleStepPoint=function(t,e){if(e)if(this.xVal[t]!==this.xVal[t+1]){this.xSteps[t]=E([this.xVal[t],this.xVal[t+1]],e,0)/w(this.xPct[t],this.xPct[t+1]);var r=(this.xVal[t+1]-this.xVal[t])/this.xNumSteps[t],n=Math.ceil(Number(r.toFixed(3))-1),i=this.xVal[t]+this.xNumSteps[t]*n;this.xHighestCompleteStep[t]=i}else this.xSteps[t]=this.xHighestCompleteStep[t]=this.xVal[t]},t}(),U={to:function(t){return void 0===t?"":t.toFixed(2)},from:Number},D={target:"target",base:"base",origin:"origin",handle:"handle",handleLower:"handle-lower",handleUpper:"handle-upper",touchArea:"touch-area",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect",connects:"connects",ltr:"ltr",rtl:"rtl",textDirectionLtr:"txt-dir-ltr",textDirectionRtl:"txt-dir-rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"},L={tooltips:".__tooltips",aria:".__aria"};function T(t,e){if(!u(e))throw new Error("noUiSlider: 'step' is not numeric.");t.singleStep=e}function F(t,e){if(!u(e))throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");t.keyboardPageMultiplier=e}function _(t,e){if(!u(e))throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");t.keyboardMultiplier=e}function z(t,e){if(!u(e))throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");t.keyboardDefaultStep=e}function H(t,e){if("object"!==g(e)||Array.isArray(e))throw new Error("noUiSlider: 'range' is not an object.");if(void 0===e.min||void 0===e.max)throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");t.spectrum=new j(e,t.snap||!1,t.singleStep)}function R(t,e){if(e=f(e),!Array.isArray(e)||!e.length)throw new Error("noUiSlider: 'start' option is incorrect.");t.handles=e.length,t.start=e}function q(t,e){if("boolean"!=typeof e)throw new Error("noUiSlider: 'snap' option must be a boolean.");t.snap=e}function B(t,e){if("boolean"!=typeof e)throw new Error("noUiSlider: 'animate' option must be a boolean.");t.animate=e}function $(t,e){if("number"!=typeof e)throw new Error("noUiSlider: 'animationDuration' option must be a number.");t.animationDuration=e}function X(t,e){var r,n=[!1];if("lower"===e?e=[!0,!1]:"upper"===e&&(e=[!1,!0]),!0===e||!1===e){for(r=1;r<t.handles;r++)n.push(e);n.push(!1)}else{if(!Array.isArray(e)||!e.length||e.length!==t.handles+1)throw new Error("noUiSlider: 'connect' option doesn't match handle count.");n=e}t.connect=n}function Y(t,e){switch(e){case"horizontal":t.ort=0;break;case"vertical":t.ort=1;break;default:throw new Error("noUiSlider: 'orientation' option is invalid.")}}function I(t,e){if(!u(e))throw new Error("noUiSlider: 'margin' option must be numeric.");0!==e&&(t.margin=t.spectrum.getDistance(e))}function W(t,e){if(!u(e))throw new Error("noUiSlider: 'limit' option must be numeric.");if(t.limit=t.spectrum.getDistance(e),!t.limit||t.handles<2)throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.")}function G(t,e){var r;if(!u(e)&&!Array.isArray(e))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(Array.isArray(e)&&2!==e.length&&!u(e[0])&&!u(e[1]))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(0!==e){for(Array.isArray(e)||(e=[e,e]),t.padding=[t.spectrum.getDistance(e[0]),t.spectrum.getDistance(e[1])],r=0;r<t.spectrum.xNumSteps.length-1;r++)if(t.padding[0][r]<0||t.padding[1][r]<0)throw new Error("noUiSlider: 'padding' option must be a positive number(s).");var n=e[0]+e[1],i=t.spectrum.xVal[0];if(n/(t.spectrum.xVal[t.spectrum.xVal.length-1]-i)>1)throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.")}}function J(t,e){switch(e){case"ltr":t.dir=0;break;case"rtl":t.dir=1;break;default:throw new Error("noUiSlider: 'direction' option was not recognized.")}}function K(t,e){if("string"!=typeof e)throw new Error("noUiSlider: 'behaviour' must be a string containing options.");var r=e.indexOf("tap")>=0,n=e.indexOf("drag")>=0,i=e.indexOf("fixed")>=0,o=e.indexOf("snap")>=0,a=e.indexOf("hover")>=0,s=e.indexOf("unconstrained")>=0,l=e.indexOf("drag-all")>=0;if(i){if(2!==t.handles)throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");I(t,t.start[1]-t.start[0])}if(s&&(t.margin||t.limit))throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");t.events={tap:r||o,drag:n,dragAll:l,fixed:i,snap:o,hover:a,unconstrained:s}}function Q(t,e){if(!1!==e)if(!0===e||r(e)){t.tooltips=[];for(var n=0;n<t.handles;n++)t.tooltips.push(e)}else{if((e=f(e)).length!==t.handles)throw new Error("noUiSlider: must pass a formatter for all handles.");e.forEach((function(t){if("boolean"!=typeof t&&!r(t))throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.")})),t.tooltips=e}}function Z(t,e){if(e.length!==t.handles)throw new Error("noUiSlider: must pass a attributes for all handles.");t.handleAttributes=e}function tt(t,e){if(!r(e))throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");t.ariaFormat=e}function et(t,r){if(!e(r))throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");t.format=r}function rt(t,e){if("boolean"!=typeof e)throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");t.keyboardSupport=e}function nt(t,e){t.documentElement=e}function it(t,e){if("string"!=typeof e&&!1!==e)throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");t.cssPrefix=e}function ot(t,e){if("object"!==g(e))throw new Error("noUiSlider: 'cssClasses' must be an object.");"string"==typeof t.cssPrefix?(t.cssClasses={},Object.keys(e).forEach((function(r){t.cssClasses[r]=t.cssPrefix+e[r]}))):t.cssClasses=e}function at(t){var e={margin:null,limit:null,padding:null,animate:!0,animationDuration:300,ariaFormat:U,format:U},r={step:{r:!1,t:T},keyboardPageMultiplier:{r:!1,t:F},keyboardMultiplier:{r:!1,t:_},keyboardDefaultStep:{r:!1,t:z},start:{r:!0,t:R},connect:{r:!0,t:X},direction:{r:!0,t:J},snap:{r:!1,t:q},animate:{r:!1,t:B},animationDuration:{r:!1,t:$},range:{r:!0,t:H},orientation:{r:!1,t:Y},margin:{r:!1,t:I},limit:{r:!1,t:W},padding:{r:!1,t:G},behaviour:{r:!0,t:K},ariaFormat:{r:!1,t:tt},format:{r:!1,t:et},tooltips:{r:!1,t:Q},keyboardSupport:{r:!0,t:rt},documentElement:{r:!1,t:nt},cssPrefix:{r:!0,t:it},cssClasses:{r:!0,t:ot},handleAttributes:{r:!1,t:Z}},n={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal",keyboardSupport:!0,cssPrefix:"noUi-",cssClasses:D,keyboardPageMultiplier:5,keyboardMultiplier:1,keyboardDefaultStep:10};t.format&&!t.ariaFormat&&(t.ariaFormat=t.format),Object.keys(r).forEach((function(o){if(i(t[o])||void 0!==n[o])r[o].t(e,i(t[o])?t[o]:n[o]);else if(r[o].r)throw new Error("noUiSlider: '"+o+"' is required.")})),e.pips=t.pips;var o=document.createElement("div"),a=void 0!==o.style.msTransform,s=void 0!==o.style.transform;e.transformRule=s?"transform":a?"msTransform":"webkitTransform";var l=[["left","top"],["right","bottom"]];return e.style=l[e.dir][e.ort],e}function st(e,r,s){var u,d,g,w,E,P=y(),C=x()&&S(),N=e,O=r.spectrum,V=[],k=[],A=[],M=0,j={},U=e.ownerDocument,D=r.documentElement||U.documentElement,T=U.body,F="rtl"===U.dir||1===r.ort?0:100;function _(t,e){var r=U.createElement("div");return e&&h(r,e),t.appendChild(r),r}function z(t,e){var n=_(t,r.cssClasses.origin),i=_(n,r.cssClasses.handle);if(_(i,r.cssClasses.touchArea),i.setAttribute("data-handle",String(e)),r.keyboardSupport&&(i.setAttribute("tabindex","0"),i.addEventListener("keydown",(function(t){return dt(t,e)}))),void 0!==r.handleAttributes){var o=r.handleAttributes[e];Object.keys(o).forEach((function(t){i.setAttribute(t,o[t])}))}return i.setAttribute("role","slider"),i.setAttribute("aria-orientation",r.ort?"vertical":"horizontal"),0===e?h(i,r.cssClasses.handleLower):e===r.handles-1&&h(i,r.cssClasses.handleUpper),n}function H(t,e){return!!e&&_(t,r.cssClasses.connect)}function R(t,e){var n=_(e,r.cssClasses.connects);d=[],(g=[]).push(H(n,t[0]));for(var i=0;i<r.handles;i++)d.push(z(e,i)),A[i]=i,g.push(H(n,t[i+1]))}function q(t){return h(t,r.cssClasses.target),0===r.dir?h(t,r.cssClasses.ltr):h(t,r.cssClasses.rtl),0===r.ort?h(t,r.cssClasses.horizontal):h(t,r.cssClasses.vertical),h(t,"rtl"===getComputedStyle(t).direction?r.cssClasses.textDirectionRtl:r.cssClasses.textDirectionLtr),_(t,r.cssClasses.base)}function B(t,e){return!(!r.tooltips||!r.tooltips[e])&&_(t.firstChild,r.cssClasses.tooltip)}function $(){return N.hasAttribute("disabled")}function X(t){return d[t].hasAttribute("disabled")}function Y(){E&&(gt("update"+L.tooltips),E.forEach((function(t){t&&n(t)})),E=null)}function I(){Y(),E=d.map(B),mt("update"+L.tooltips,(function(t,e,n){if(E&&r.tooltips&&!1!==E[e]){var i=t[e];!0!==r.tooltips[e]&&(i=r.tooltips[e].to(n[e])),E[e].innerHTML=i}}))}function W(){gt("update"+L.aria),mt("update"+L.aria,(function(t,e,n,i,o){A.forEach((function(t){var e=d[t],i=yt(k,t,0,!0,!0,!0),a=yt(k,t,100,!0,!0,!0),s=o[t],l=String(r.ariaFormat.to(n[t]));i=O.fromStepping(i).toFixed(1),a=O.fromStepping(a).toFixed(1),s=O.fromStepping(s).toFixed(1),e.children[0].setAttribute("aria-valuemin",i),e.children[0].setAttribute("aria-valuemax",a),e.children[0].setAttribute("aria-valuenow",s),e.children[0].setAttribute("aria-valuetext",l)}))}))}function G(e){if(e.mode===t.PipsMode.Range||e.mode===t.PipsMode.Steps)return O.xVal;if(e.mode===t.PipsMode.Count){if(e.values<2)throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");for(var r=e.values-1,n=100/r,i=[];r--;)i[r]=r*n;return i.push(100),J(i,e.stepped)}return e.mode===t.PipsMode.Positions?J(e.values,e.stepped):e.mode===t.PipsMode.Values?e.stepped?e.values.map((function(t){return O.fromStepping(O.getStep(O.toStepping(t)))})):e.values:[]}function J(t,e){return t.map((function(t){return O.fromStepping(e?O.getStep(t):t)}))}function K(e){function r(t,e){return Number((t+e).toFixed(7))}var n=G(e),i={},o=O.xVal[0],s=O.xVal[O.xVal.length-1],l=!1,u=!1,c=0;return(n=a(n.slice().sort((function(t,e){return t-e}))))[0]!==o&&(n.unshift(o),l=!0),n[n.length-1]!==s&&(n.push(s),u=!0),n.forEach((function(o,a){var s,p,f,d,h,m,v,g,b,y,S=o,x=n[a+1],w=e.mode===t.PipsMode.Steps;for(w&&(s=O.xNumSteps[a]),s||(s=x-S),void 0===x&&(x=S),s=Math.max(s,1e-7),p=S;p<=x;p=r(p,s)){for(g=(h=(d=O.toStepping(p))-c)/(e.density||1),y=h/(b=Math.round(g)),f=1;f<=b;f+=1)i[(m=c+f*y).toFixed(5)]=[O.fromStepping(m),0];v=n.indexOf(p)>-1?t.PipsType.LargeValue:w?t.PipsType.SmallValue:t.PipsType.NoValue,!a&&l&&p!==x&&(v=0),p===x&&u||(i[d.toFixed(5)]=[p,v]),c=d}})),i}function Q(e,n,i){var o,a,s=U.createElement("div"),l=((o={})[t.PipsType.None]="",o[t.PipsType.NoValue]=r.cssClasses.valueNormal,o[t.PipsType.LargeValue]=r.cssClasses.valueLarge,o[t.PipsType.SmallValue]=r.cssClasses.valueSub,o),u=((a={})[t.PipsType.None]="",a[t.PipsType.NoValue]=r.cssClasses.markerNormal,a[t.PipsType.LargeValue]=r.cssClasses.markerLarge,a[t.PipsType.SmallValue]=r.cssClasses.markerSub,a),c=[r.cssClasses.valueHorizontal,r.cssClasses.valueVertical],p=[r.cssClasses.markerHorizontal,r.cssClasses.markerVertical];function f(t,e){var n=e===r.cssClasses.value,i=n?l:u;return e+" "+(n?c:p)[r.ort]+" "+i[t]}function d(e,o,a){if((a=n?n(o,a):a)!==t.PipsType.None){var l=_(s,!1);l.className=f(a,r.cssClasses.marker),l.style[r.style]=e+"%",a>t.PipsType.NoValue&&((l=_(s,!1)).className=f(a,r.cssClasses.value),l.setAttribute("data-value",String(o)),l.style[r.style]=e+"%",l.innerHTML=String(i.to(o)))}}return h(s,r.cssClasses.pips),h(s,0===r.ort?r.cssClasses.pipsHorizontal:r.cssClasses.pipsVertical),Object.keys(e).forEach((function(t){d(t,e[t][0],e[t][1])})),s}function Z(){w&&(n(w),w=null)}function tt(t){Z();var e=K(t),r=t.filter,n=t.format||{to:function(t){return String(Math.round(t))}};return w=N.appendChild(Q(e,r,n))}function et(){var t=u.getBoundingClientRect(),e="offset"+["Width","Height"][r.ort];return 0===r.ort?t.width||u[e]:t.height||u[e]}function rt(t,e,n,i){var o=function(o){var a=nt(o,i.pageOffset,i.target||e);return!!a&&!($()&&!i.doNotReject)&&!(v(N,r.cssClasses.tap)&&!i.doNotReject)&&!(t===P.start&&void 0!==a.buttons&&a.buttons>1)&&(!i.hover||!a.buttons)&&(C||a.preventDefault(),a.calcPoint=a.points[r.ort],void n(a,i))},a=[];return t.split(" ").forEach((function(t){e.addEventListener(t,o,!!C&&{passive:!0}),a.push([t,o])})),a}function nt(t,e,r){var n=0===t.type.indexOf("touch"),i=0===t.type.indexOf("mouse"),o=0===t.type.indexOf("pointer"),a=0,s=0;if(0===t.type.indexOf("MSPointer")&&(o=!0),"mousedown"===t.type&&!t.buttons&&!t.touches)return!1;if(n){var l=function(e){var n=e.target;return n===r||r.contains(n)||t.composed&&t.composedPath().shift()===r};if("touchstart"===t.type){var u=Array.prototype.filter.call(t.touches,l);if(u.length>1)return!1;a=u[0].pageX,s=u[0].pageY}else{var c=Array.prototype.find.call(t.changedTouches,l);if(!c)return!1;a=c.pageX,s=c.pageY}}return e=e||b(U),(i||o)&&(a=t.clientX+e.x,s=t.clientY+e.y),t.pageOffset=e,t.points=[a,s],t.cursor=i||o,t}function it(t){var e=100*(t-l(u,r.ort))/et();return e=p(e),r.dir?100-e:e}function ot(t){var e=100,r=!1;return d.forEach((function(n,i){if(!X(i)){var o=k[i],a=Math.abs(o-t);(a<e||a<=e&&t>o||100===a&&100===e)&&(r=i,e=a)}})),r}function st(t,e){"mouseout"===t.type&&"HTML"===t.target.nodeName&&null===t.relatedTarget&&ut(t,e)}function lt(t,e){if(-1===navigator.appVersion.indexOf("MSIE 9")&&0===t.buttons&&0!==e.buttonsProperty)return ut(t,e);var n=(r.dir?-1:1)*(t.calcPoint-e.startCalcPoint);xt(n>0,100*n/e.baseSize,e.locations,e.handleNumbers,e.connect)}function ut(t,e){e.handle&&(m(e.handle,r.cssClasses.active),M-=1),e.listeners.forEach((function(t){D.removeEventListener(t[0],t[1])})),0===M&&(m(N,r.cssClasses.drag),Pt(),t.cursor&&(T.style.cursor="",T.removeEventListener("selectstart",o))),e.handleNumbers.forEach((function(t){bt("change",t),bt("set",t),bt("end",t)}))}function ct(t,e){if(!e.handleNumbers.some(X)){var n;1===e.handleNumbers.length&&(n=d[e.handleNumbers[0]].children[0],M+=1,h(n,r.cssClasses.active)),t.stopPropagation();var i=[],a=rt(P.move,D,lt,{target:t.target,handle:n,connect:e.connect,listeners:i,startCalcPoint:t.calcPoint,baseSize:et(),pageOffset:t.pageOffset,handleNumbers:e.handleNumbers,buttonsProperty:t.buttons,locations:k.slice()}),s=rt(P.end,D,ut,{target:t.target,handle:n,listeners:i,doNotReject:!0,handleNumbers:e.handleNumbers}),l=rt("mouseout",D,st,{target:t.target,handle:n,listeners:i,doNotReject:!0,handleNumbers:e.handleNumbers});i.push.apply(i,a.concat(s,l)),t.cursor&&(T.style.cursor=getComputedStyle(t.target).cursor,d.length>1&&h(N,r.cssClasses.drag),T.addEventListener("selectstart",o,!1)),e.handleNumbers.forEach((function(t){bt("start",t)}))}}function pt(t){t.stopPropagation();var e=it(t.calcPoint),n=ot(e);!1!==n&&(r.events.snap||c(N,r.cssClasses.tap,r.animationDuration),Ct(n,e,!0,!0),Pt(),bt("slide",n,!0),bt("update",n,!0),r.events.snap?ct(t,{handleNumbers:[n]}):(bt("change",n,!0),bt("set",n,!0)))}function ft(t){var e=it(t.calcPoint),r=O.getStep(e),n=O.fromStepping(r);Object.keys(j).forEach((function(t){"hover"===t.split(".")[0]&&j[t].forEach((function(t){t.call(Ft,n)}))}))}function dt(t,e){if($()||X(e))return!1;var n=["Left","Right"],i=["Down","Up"],o=["PageDown","PageUp"],a=["Home","End"];r.dir&&!r.ort?n.reverse():r.ort&&!r.dir&&(i.reverse(),o.reverse());var s,l=t.key.replace("Arrow",""),u=l===o[0],c=l===o[1],p=l===i[0]||l===n[0]||u,f=l===i[1]||l===n[1]||c,d=l===a[0],h=l===a[1];if(!(p||f||d||h))return!0;if(t.preventDefault(),f||p){var m=p?0:1,v=Ut(e)[m];if(null===v)return!1;!1===v&&(v=O.getDefaultStep(k[e],p,r.keyboardDefaultStep)),v*=c||u?r.keyboardPageMultiplier:r.keyboardMultiplier,v=Math.max(v,1e-7),v*=p?-1:1,s=V[e]+v}else s=h?r.spectrum.xVal[r.spectrum.xVal.length-1]:r.spectrum.xVal[0];return Ct(e,O.toStepping(s),!0,!0),bt("slide",e),bt("update",e),bt("change",e),bt("set",e),!1}function ht(t){t.fixed||d.forEach((function(t,e){rt(P.start,t.children[0],ct,{handleNumbers:[e]})})),t.tap&&rt(P.start,u,pt,{}),t.hover&&rt(P.move,u,ft,{hover:!0}),t.drag&&g.forEach((function(e,n){if(!1!==e&&0!==n&&n!==g.length-1){var i=d[n-1],o=d[n],a=[e],s=[i,o],l=[n-1,n];h(e,r.cssClasses.draggable),t.fixed&&(a.push(i.children[0]),a.push(o.children[0])),t.dragAll&&(s=d,l=A),a.forEach((function(t){rt(P.start,t,ct,{handles:s,handleNumbers:l,connect:e})}))}}))}function mt(t,e){j[t]=j[t]||[],j[t].push(e),"update"===t.split(".")[0]&&d.forEach((function(t,e){bt("update",e)}))}function vt(t){return t===L.aria||t===L.tooltips}function gt(t){var e=t&&t.split(".")[0],r=e?t.substring(e.length):t;Object.keys(j).forEach((function(t){var n=t.split(".")[0],i=t.substring(n.length);e&&e!==n||r&&r!==i||vt(i)&&r!==i||delete j[t]}))}function bt(t,e,n){Object.keys(j).forEach((function(i){var o=i.split(".")[0];t===o&&j[i].forEach((function(t){t.call(Ft,V.map(r.format.to),e,V.slice(),n||!1,k.slice(),Ft)}))}))}function yt(t,e,n,i,o,a){var s;return d.length>1&&!r.events.unconstrained&&(i&&e>0&&(s=O.getAbsoluteDistance(t[e-1],r.margin,!1),n=Math.max(n,s)),o&&e<d.length-1&&(s=O.getAbsoluteDistance(t[e+1],r.margin,!0),n=Math.min(n,s))),d.length>1&&r.limit&&(i&&e>0&&(s=O.getAbsoluteDistance(t[e-1],r.limit,!1),n=Math.min(n,s)),o&&e<d.length-1&&(s=O.getAbsoluteDistance(t[e+1],r.limit,!0),n=Math.max(n,s))),r.padding&&(0===e&&(s=O.getAbsoluteDistance(0,r.padding[0],!1),n=Math.max(n,s)),e===d.length-1&&(s=O.getAbsoluteDistance(100,r.padding[1],!0),n=Math.min(n,s))),!((n=p(n=O.getStep(n)))===t[e]&&!a)&&n}function St(t,e){var n=r.ort;return(n?e:t)+", "+(n?t:e)}function xt(t,e,r,n,i){var o=r.slice(),a=n[0],s=[!t,t],l=[t,!t];n=n.slice(),t&&n.reverse(),n.length>1?n.forEach((function(t,r){var n=yt(o,t,o[t]+e,s[r],l[r],!1);!1===n?e=0:(e=n-o[t],o[t]=n)})):s=l=[!0];var u=!1;n.forEach((function(t,n){u=Ct(t,r[t]+e,s[n],l[n])||u})),u&&(n.forEach((function(t){bt("update",t),bt("slide",t)})),null!=i&&bt("drag",a))}function wt(t,e){return r.dir?100-t-e:t}function Et(t,e){k[t]=e,V[t]=O.fromStepping(e);var n="translate("+St(10*(wt(e,0)-F)+"%","0")+")";d[t].style[r.transformRule]=n,Nt(t),Nt(t+1)}function Pt(){A.forEach((function(t){var e=k[t]>50?-1:1,r=3+(d.length+e*t);d[t].style.zIndex=String(r)}))}function Ct(t,e,r,n,i){return i||(e=yt(k,t,e,r,n,!1)),!1!==e&&(Et(t,e),!0)}function Nt(t){if(g[t]){var e=0,n=100;0!==t&&(e=k[t-1]),t!==g.length-1&&(n=k[t]);var i=n-e,o="translate("+St(wt(e,i)+"%","0")+")",a="scale("+St(i/100,"1")+")";g[t].style[r.transformRule]=o+" "+a}}function Ot(t,e){return null===t||!1===t||void 0===t?k[e]:("number"==typeof t&&(t=String(t)),!1!==(t=r.format.from(t))&&(t=O.toStepping(t)),!1===t||isNaN(t)?k[e]:t)}function Vt(t,e,n){var i=f(t),o=void 0===k[0];e=void 0===e||e,r.animate&&!o&&c(N,r.cssClasses.tap,r.animationDuration),A.forEach((function(t){Ct(t,Ot(i[t],t),!0,!1,n)}));var a=1===A.length?0:1;if(o&&O.hasNoSize()&&(n=!0,k[0]=0,A.length>1)){var s=100/(A.length-1);A.forEach((function(t){k[t]=t*s}))}for(;a<A.length;++a)A.forEach((function(t){Ct(t,k[t],!0,!0,n)}));Pt(),A.forEach((function(t){bt("update",t),null!==i[t]&&e&&bt("set",t)}))}function kt(t){Vt(r.start,t)}function At(t,e,r,n){if(!((t=Number(t))>=0&&t<A.length))throw new Error("noUiSlider: invalid handle number, got: "+t);Ct(t,Ot(e,t),!0,!0,n),bt("update",t),r&&bt("set",t)}function Mt(t){if(void 0===t&&(t=!1),t)return 1===V.length?V[0]:V.slice(0);var e=V.map(r.format.to);return 1===e.length?e[0]:e}function jt(){for(gt(L.aria),gt(L.tooltips),Object.keys(r.cssClasses).forEach((function(t){m(N,r.cssClasses[t])}));N.firstChild;)N.removeChild(N.firstChild);delete N.noUiSlider}function Ut(t){var e=k[t],n=O.getNearbySteps(e),i=V[t],o=n.thisStep.step,a=null;if(r.snap)return[i-n.stepBefore.startValue||null,n.stepAfter.startValue-i||null];!1!==o&&i+o>n.stepAfter.startValue&&(o=n.stepAfter.startValue-i),a=i>n.thisStep.startValue?n.thisStep.step:!1!==n.stepBefore.step&&i-n.stepBefore.highestStep,100===e?o=null:0===e&&(a=null);var s=O.countStepDecimals();return null!==o&&!1!==o&&(o=Number(o.toFixed(s))),null!==a&&!1!==a&&(a=Number(a.toFixed(s))),[a,o]}function Dt(){return A.map(Ut)}function Lt(t,e){var n=Mt(),o=["margin","limit","padding","range","animate","snap","step","format","pips","tooltips"];o.forEach((function(e){void 0!==t[e]&&(s[e]=t[e])}));var a=at(s);o.forEach((function(e){void 0!==t[e]&&(r[e]=a[e])})),O=a.spectrum,r.margin=a.margin,r.limit=a.limit,r.padding=a.padding,r.pips?tt(r.pips):Z(),r.tooltips?I():Y(),k=[],Vt(i(t.start)?t.start:n,e)}function Tt(){u=q(N),R(r.connect,u),ht(r.events),Vt(r.start),r.pips&&tt(r.pips),r.tooltips&&I(),W()}Tt();var Ft={destroy:jt,steps:Dt,on:mt,off:gt,get:Mt,set:Vt,setHandle:At,reset:kt,__moveHandles:function(t,e,r){xt(t,e,k,r)},options:s,updateOptions:Lt,target:N,removePips:Z,removeTooltips:Y,getPositions:function(){return k.slice()},getTooltips:function(){return E},getOrigins:function(){return d},pips:tt};return Ft}function lt(t,e){if(!t||!t.nodeName)throw new Error("noUiSlider: create requires a single element, got: "+t);if(t.noUiSlider)throw new Error("noUiSlider: Slider was already initialized.");var r=st(t,at(e),e);return t.noUiSlider=r,r}var ut={__spectrum:j,cssClasses:D,create:lt};t.create=lt,t.cssClasses=D,t.default=ut,Object.defineProperty(t,"__esModule",{value:!0})}(e)})));function y(t,e){var r=e.slice().sort();return t.length===e.length&&t.slice().sort().every((function(t,e){return t===r[e]}))}function S(t,e,r,n,i,o,a,s,l,u){"boolean"!=typeof a&&(l=s,s=a,a=!1);var c,p="function"==typeof r?r.options:r;if(t&&t.render&&(p.render=t.render,p.staticRenderFns=t.staticRenderFns,p._compiled=!0,i&&(p.functional=!0)),n&&(p._scopeId=n),o?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,l(t)),t&&t._registeredComponents&&t._registeredComponents.add(o)},p._ssrRegister=c):e&&(c=a?function(t){e.call(this,u(t,this.$root.$options.shadowRoot))}:function(t){e.call(this,s(t))}),c)if(p.functional){var f=p.render;p.render=function(t,e){return c.call(e),f(t,e)}}else{var d=p.beforeCreate;p.beforeCreate=d?[].concat(d,c):[c]}return r}const x={name:"Slider",emits:["input","update:modelValue","update","change"],props:{...{value:{validator:function(t){return t=>"number"==typeof t||t instanceof Array||null==t||!1===t},required:!1},modelValue:{validator:function(t){return t=>"number"==typeof t||t instanceof Array||null==t||!1===t},required:!1}},id:{type:[String,Number],required:!1},disabled:{type:Boolean,required:!1,default:!1},min:{type:Number,required:!1,default:0},max:{type:Number,required:!1,default:100},step:{type:Number,required:!1,default:1},orientation:{type:String,required:!1,default:"horizontal"},direction:{type:String,required:!1,default:"ltr"},tooltips:{type:Boolean,required:!1,default:!0},options:{type:Object,required:!1,default:()=>({})},merge:{type:Number,required:!1,default:-1},format:{type:[Object,Function,Boolean],required:!1,default:null},classes:{type:Object,required:!1,default:()=>({})},showTooltip:{type:String,required:!1,default:"always"},tooltipPosition:{type:String,required:!1,default:null}},setup(s,u){const c=function(r,n,i){var o=t(r),s=o.value,l=o.modelValue,u=void 0!==n.expose?l:s,c=e(u.value);if(a(u.value))throw new Error("Slider v-model must be a Number or Array");if(Array.isArray(u.value)&&0==u.value.length)throw new Error("Slider v-model must not be an empty array");return{value:u,initialValue:c}}(s,u),p=function(e,n,i){var o=t(e),a=o.classes,s=o.showTooltip,u=o.tooltipPosition,c=o.orientation,p=r((function(){return l({target:"slider-target",focused:"slider-focused",tooltipFocus:"slider-tooltip-focus",tooltipDrag:"slider-tooltip-drag",ltr:"slider-ltr",rtl:"slider-rtl",horizontal:"slider-horizontal",vertical:"slider-vertical",textDirectionRtl:"slider-txt-dir-rtl",textDirectionLtr:"slider-txt-dir-ltr",base:"slider-base",connects:"slider-connects",connect:"slider-connect",origin:"slider-origin",handle:"slider-handle",handleUpper:"slider-handle-upper",handleLower:"slider-handle-lower",touchArea:"slider-touch-area",tooltip:"slider-tooltip",tooltipTop:"slider-tooltip-top",tooltipBottom:"slider-tooltip-bottom",tooltipLeft:"slider-tooltip-left",tooltipRight:"slider-tooltip-right",tooltipHidden:"slider-tooltip-hidden",active:"slider-active",draggable:"slider-draggable",tap:"slider-state-tap",drag:"slider-state-drag",pips:"slider-pips",pipsHorizontal:"slider-pips-horizontal",pipsVertical:"slider-pips-vertical",marker:"slider-marker",markerHorizontal:"slider-marker-horizontal",markerVertical:"slider-marker-vertical",markerNormal:"slider-marker-normal",markerLarge:"slider-marker-large",markerSub:"slider-marker-sub",value:"slider-value",valueHorizontal:"slider-value-horizontal",valueVertical:"slider-value-vertical",valueNormal:"slider-value-normal",valueLarge:"slider-value-large",valueSub:"slider-value-sub"},a.value)}));return{classList:r((function(){var t=l({},p.value);return"always"!==s.value&&(t.target+=" ".concat("drag"===s.value?t.tooltipDrag:t.tooltipFocus)),"horizontal"===c.value&&(t.tooltip+="bottom"===u.value?" ".concat(t.tooltipBottom):" ".concat(t.tooltipTop)),"vertical"===c.value&&(t.tooltip+="right"===u.value?" ".concat(t.tooltipRight):" ".concat(t.tooltipLeft)),t}))}}(s),f=v(s,0,{value:c.value,classList:p.classList}),d=function(s,l,u){var c=t(s),p=c.orientation,f=c.direction,d=c.tooltips,h=c.step,m=c.min,v=c.max,g=c.merge,S=c.id,x=c.disabled,w=c.options,E=c.classes,P=c.format,C=u.value,N=u.initialValue,O=u.tooltipsFormat,V=u.tooltipsMerge,k=u.classList,A=e(null),M=e(null),j=e(!1),U=r((function(){var t={cssPrefix:"",cssClasses:k.value,orientation:p.value,direction:f.value,tooltips:!!d.value&&O.value,connect:"lower",start:a(C.value)?m.value:C.value,range:{min:m.value,max:v.value}};return h.value>0&&(t.step=h.value),Array.isArray(C.value)&&(t.connect=!0),t})),D=r((function(){var t={id:S&&S.value?S.value:void 0};return x.value&&(t.disabled=!0),t})),L=r((function(){return Array.isArray(C.value)})),T=function(){var t=M.value.get();return Array.isArray(t)?t.map((function(t){return parseFloat(t)})):parseFloat(t)},F=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];M.value.set(t,e)},_=function(t){l.emit("input",t),l.emit("update:modelValue",t),l.emit("update",t)},z=function(){M.value=b.create(A.value,Object.assign({},U.value,w.value)),d.value&&L.value&&g.value>=0&&V(A.value,g.value," - "),M.value.on("set",(function(t){l.emit("change",T())})),M.value.on("update",(function(t){if(j.value){var e=T();L.value&&y(C.value,e)||!L.value&&C.value==e?l.emit("update",e):_(e)}})),A.value.querySelectorAll("[data-handle]").forEach((function(t){t.onblur=function(){k.value.focused.split(" ").forEach((function(t){A.value.classList.remove(t)}))},t.onfocus=function(){k.value.focused.split(" ").forEach((function(t){A.value.classList.add(t)}))}})),j.value=!0},H=function(){M.value.off(),M.value.destroy(),M.value=null},R=function(t,e){j.value=!1,H(),z()};return n(z),i(H),o(L,R,{immediate:!1}),o(m,R,{immediate:!1}),o(v,R,{immediate:!1}),o(h,R,{immediate:!1}),o(p,R,{immediate:!1}),o(f,R,{immediate:!1}),o(d,R,{immediate:!1}),o(P,R,{immediate:!1,deep:!0}),o(g,R,{immediate:!1}),o(w,R,{immediate:!1,deep:!0}),o(E,R,{immediate:!1,deep:!0}),o(C,(function(t){a(t)?F(m.value,!1):(L.value&&!y(t,T())||!L.value&&t!=T())&&F(t,!1)}),{deep:!0}),{slider:A,slider$:M,isRange:L,sliderProps:D,init:z,destroy:H,refresh:R,update:F,reset:function(){_(N.value)}}}(s,u,{value:c.value,initialValue:c.initialValue,tooltipsFormat:f.tooltipsFormat,tooltipsMerge:f.tooltipsMerge,classList:p.classList});return{...p,...f,...d}}};var w=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",t._b({ref:"slider"},"div",t.sliderProps,!1))};w._withStripped=!0;const E=S({render:w,staticRenderFns:[]},undefined,x,undefined,false,undefined,!1,void 0,void 0,void 0);export default E;
