var Zepto=function(){function t(t){return null==t?String(t):B[V.call(t)]||"object"}function e(e){return"function"==t(e)}function n(t){return null!=t&&t==t.window}function r(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function i(e){return"object"==t(e)}function o(t){return i(t)&&!n(t)&&Object.getPrototypeOf(t)==Object.prototype}function s(t){return"number"==typeof t.length}function a(t){return L.call(t,function(t){return null!=t})}function c(t){return t.length>0?S.fn.concat.apply([],t):t}function u(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function l(t){return t in k?k[t]:k[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function f(t,e){return"number"!=typeof e||R[u(t)]?e:e+"px"}function h(t){var e,n;return A[t]||(e=P.createElement(t),P.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),A[t]=n),A[t]}function p(t){return"children"in t?N.call(t.children):S.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function d(t,e,n){for(E in e)n&&(o(e[E])||X(e[E]))?(o(e[E])&&!o(t[E])&&(t[E]={}),X(e[E])&&!X(t[E])&&(t[E]=[]),d(t[E],e[E],n)):e[E]!==x&&(t[E]=e[E])}function m(t,e){return null==e?S(t):S(t).filter(e)}function v(t,n,r,i){return e(n)?n.call(t,r,i):n}function g(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function y(t,e){var n=t.className||"",r=n&&n.baseVal!==x;return e===x?r?n.baseVal:n:void(r?n.baseVal=e:t.className=e)}function b(t){try{return t?"true"==t||"false"!=t&&("null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?S.parseJSON(t):t):t}catch(e){return t}}function w(t,e){e(t);for(var n=0,r=t.childNodes.length;r>n;n++)w(t.childNodes[n],e)}var x,E,S,C,j,T,O=[],N=O.slice,L=O.filter,P=window.document,A={},k={},R={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},_=/^\s*<(\w+|!)[^>]*>/,D=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,H=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,z=/^(?:body|html)$/i,F=/([A-Z])/g,I=["val","css","html","text","data","width","height","offset"],Z=["after","prepend","before","append"],M=P.createElement("table"),$=P.createElement("tr"),q={tr:P.createElement("tbody"),tbody:M,thead:M,tfoot:M,td:$,th:$,"*":P.createElement("div")},J=/complete|loaded|interactive/,U=/^[\w-]*$/,B={},V=B.toString,Y={},Q=P.createElement("div"),W={tabindex:"tabIndex",readonly:"readOnly",for:"htmlFor",class:"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},X=Array.isArray||function(t){return t instanceof Array};return Y.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var r,i=t.parentNode,o=!i;return o&&(i=Q).appendChild(t),r=~Y.qsa(i,e).indexOf(t),o&&Q.removeChild(t),r},j=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},T=function(t){return L.call(t,function(e,n){return t.indexOf(e)==n})},Y.fragment=function(t,e,n){var r,i,s;return D.test(t)&&(r=S(P.createElement(RegExp.$1))),r||(t.replace&&(t=t.replace(H,"<$1></$2>")),e===x&&(e=_.test(t)&&RegExp.$1),e in q||(e="*"),s=q[e],s.innerHTML=""+t,r=S.each(N.call(s.childNodes),function(){s.removeChild(this)})),o(n)&&(i=S(r),S.each(n,function(t,e){I.indexOf(t)>-1?i[t](e):i.attr(t,e)})),r},Y.Z=function(t,e){return t=t||[],t.__proto__=S.fn,t.selector=e||"",t},Y.isZ=function(t){return t instanceof Y.Z},Y.init=function(t,n){var r;if(!t)return Y.Z();if("string"==typeof t)if("<"==(t=t.trim())[0]&&_.test(t))r=Y.fragment(t,RegExp.$1,n),t=null;else{if(n!==x)return S(n).find(t);r=Y.qsa(P,t)}else{if(e(t))return S(P).ready(t);if(Y.isZ(t))return t;if(X(t))r=a(t);else if(i(t))r=[t],t=null;else if(_.test(t))r=Y.fragment(t.trim(),RegExp.$1,n),t=null;else{if(n!==x)return S(n).find(t);r=Y.qsa(P,t)}}return Y.Z(r,t)},S=function(t,e){return Y.init(t,e)},S.extend=function(t){var e,n=N.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){d(t,n,e)}),t},Y.qsa=function(t,e){var n,i="#"==e[0],o=!i&&"."==e[0],s=i||o?e.slice(1):e,a=U.test(s);return r(t)&&a&&i?(n=t.getElementById(s))?[n]:[]:1!==t.nodeType&&9!==t.nodeType?[]:N.call(a&&!i?o?t.getElementsByClassName(s):t.getElementsByTagName(e):t.querySelectorAll(e))},S.contains=P.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},S.type=t,S.isFunction=e,S.isWindow=n,S.isArray=X,S.isPlainObject=o,S.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},S.inArray=function(t,e,n){return O.indexOf.call(e,t,n)},S.camelCase=j,S.trim=function(t){return null==t?"":String.prototype.trim.call(t)},S.uuid=0,S.support={},S.expr={},S.map=function(t,e){var n,r,i,o=[];if(s(t))for(r=0;r<t.length;r++)null!=(n=e(t[r],r))&&o.push(n);else for(i in t)null!=(n=e(t[i],i))&&o.push(n);return c(o)},S.each=function(t,e){var n,r;if(s(t)){for(n=0;n<t.length;n++)if(!1===e.call(t[n],n,t[n]))return t}else for(r in t)if(!1===e.call(t[r],r,t[r]))return t;return t},S.grep=function(t,e){return L.call(t,e)},window.JSON&&(S.parseJSON=JSON.parse),S.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){B["[object "+e+"]"]=e.toLowerCase()}),S.fn={forEach:O.forEach,reduce:O.reduce,push:O.push,sort:O.sort,indexOf:O.indexOf,concat:O.concat,map:function(t){return S(S.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return S(N.apply(this,arguments))},ready:function(t){return J.test(P.readyState)&&P.body?t(S):P.addEventListener("DOMContentLoaded",function(){t(S)},!1),this},get:function(t){return t===x?N.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return O.every.call(this,function(e,n){return!1!==t.call(e,n,e)}),this},filter:function(t){return e(t)?this.not(this.not(t)):S(L.call(this,function(e){return Y.matches(e,t)}))},add:function(t,e){return S(T(this.concat(S(t,e))))},is:function(t){return this.length>0&&Y.matches(this[0],t)},not:function(t){var n=[];if(e(t)&&t.call!==x)this.each(function(e){t.call(this,e)||n.push(this)});else{var r="string"==typeof t?this.filter(t):s(t)&&e(t.item)?N.call(t):S(t);this.forEach(function(t){r.indexOf(t)<0&&n.push(t)})}return S(n)},has:function(t){return this.filter(function(){return i(t)?S.contains(this,t):S(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!i(t)?t:S(t)},last:function(){var t=this[this.length-1];return t&&!i(t)?t:S(t)},find:function(t){var e=this;return t?"object"==typeof t?S(t).filter(function(){var t=this;return O.some.call(e,function(e){return S.contains(e,t)})}):1==this.length?S(Y.qsa(this[0],t)):this.map(function(){return Y.qsa(this,t)}):S()},closest:function(t,e){var n=this[0],i=!1;for("object"==typeof t&&(i=S(t));n&&!(i?i.indexOf(n)>=0:Y.matches(n,t));)n=n!==e&&!r(n)&&n.parentNode;return S(n)},parents:function(t){for(var e=[],n=this;n.length>0;)n=S.map(n,function(t){return(t=t.parentNode)&&!r(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return m(e,t)},parent:function(t){return m(T(this.pluck("parentNode")),t)},children:function(t){return m(this.map(function(){return p(this)}),t)},contents:function(){return this.map(function(){return N.call(this.childNodes)})},siblings:function(t){return m(this.map(function(t,e){return L.call(p(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return S.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=h(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var n=e(t);if(this[0]&&!n)var r=S(t).get(0),i=r.parentNode||this.length>1;return this.each(function(e){S(this).wrapAll(n?t.call(this,e):i?r.cloneNode(!0):r)})},wrapAll:function(t){if(this[0]){S(this[0]).before(t=S(t));for(var e;(e=t.children()).length;)t=e.first();S(t).append(this)}return this},wrapInner:function(t){var n=e(t);return this.each(function(e){var r=S(this),i=r.contents(),o=n?t.call(this,e):t;i.length?i.wrapAll(o):r.append(o)})},unwrap:function(){return this.parent().each(function(){S(this).replaceWith(S(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var e=S(this);(t===x?"none"==e.css("display"):t)?e.show():e.hide()})},prev:function(t){return S(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return S(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var n=this.innerHTML;S(this).empty().append(v(this,t,e,n))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=v(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this[0].textContent:null},attr:function(t,e){var n;return"string"!=typeof t||1 in arguments?this.each(function(n){if(1===this.nodeType)if(i(t))for(E in t)g(this,E,t[E]);else g(this,t,v(this,e,n,this.getAttribute(t)))}):this.length&&1===this[0].nodeType?!(n=this[0].getAttribute(t))&&t in this[0]?this[0][t]:n:x},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){g(this,t)},this)})},prop:function(t,e){return t=W[t]||t,1 in arguments?this.each(function(n){this[t]=v(this,e,n,this[t])}):this[0]&&this[0][t]},data:function(t,e){var n="data-"+t.replace(F,"-$1").toLowerCase(),r=1 in arguments?this.attr(n,e):this.attr(n);return null!==r?b(r):x},val:function(t){return 0 in arguments?this.each(function(e){this.value=v(this,t,e,this.value)}):this[0]&&(this[0].multiple?S(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(t){if(t)return this.each(function(e){var n=S(this),r=v(this,t,e,n.offset()),i=n.offsetParent().offset(),o={top:r.top-i.top,left:r.left-i.left};"static"==n.css("position")&&(o.position="relative"),n.css(o)});if(!this.length)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(e,n){if(arguments.length<2){var r,i=this[0];if(!i)return;if(r=getComputedStyle(i,""),"string"==typeof e)return i.style[j(e)]||r.getPropertyValue(e);if(X(e)){var o={};return S.each(e,function(t,e){o[e]=i.style[j(e)]||r.getPropertyValue(e)}),o}}var s="";if("string"==t(e))n||0===n?s=u(e)+":"+f(e,n):this.each(function(){this.style.removeProperty(u(e))});else for(E in e)e[E]||0===e[E]?s+=u(E)+":"+f(E,e[E])+";":this.each(function(){this.style.removeProperty(u(E))});return this.each(function(){this.style.cssText+=";"+s})},index:function(t){return t?this.indexOf(S(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return!!t&&O.some.call(this,function(t){return this.test(y(t))},l(t))},addClass:function(t){return t?this.each(function(e){if("className"in this){C=[];var n=y(this);v(this,t,e,n).split(/\s+/g).forEach(function(t){S(this).hasClass(t)||C.push(t)},this),C.length&&y(this,n+(n?" ":"")+C.join(" "))}}):this},removeClass:function(t){return this.each(function(e){if("className"in this){if(t===x)return y(this,"");C=y(this),v(this,t,e,C).split(/\s+/g).forEach(function(t){C=C.replace(l(t)," ")}),y(this,C.trim())}})},toggleClass:function(t,e){return t?this.each(function(n){var r=S(this);v(this,t,n,y(this)).split(/\s+/g).forEach(function(t){(e===x?!r.hasClass(t):e)?r.addClass(t):r.removeClass(t)})}):this},scrollTop:function(t){if(this.length){var e="scrollTop"in this[0];return t===x?e?this[0].scrollTop:this[0].pageYOffset:this.each(e?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})}},scrollLeft:function(t){if(this.length){var e="scrollLeft"in this[0];return t===x?e?this[0].scrollLeft:this[0].pageXOffset:this.each(e?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),n=this.offset(),r=z.test(e[0].nodeName)?{top:0,left:0}:e.offset();return n.top-=parseFloat(S(t).css("margin-top"))||0,n.left-=parseFloat(S(t).css("margin-left"))||0,r.top+=parseFloat(S(e[0]).css("border-top-width"))||0,r.left+=parseFloat(S(e[0]).css("border-left-width"))||0,{top:n.top-r.top,left:n.left-r.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||P.body;t&&!z.test(t.nodeName)&&"static"==S(t).css("position");)t=t.offsetParent;return t})}},S.fn.detach=S.fn.remove,["width","height"].forEach(function(t){var e=t.replace(/./,function(t){return t[0].toUpperCase()});S.fn[t]=function(i){var o,s=this[0];return i===x?n(s)?s["inner"+e]:r(s)?s.documentElement["scroll"+e]:(o=this.offset())&&o[t]:this.each(function(e){(s=S(this)).css(t,v(this,i,e,s[t]()))})}}),Z.forEach(function(e,n){var r=n%2;S.fn[e]=function(){var e,i,o=S.map(arguments,function(n){return"object"==(e=t(n))||"array"==e||null==n?n:Y.fragment(n)}),s=this.length>1;return o.length<1?this:this.each(function(t,e){i=r?e:e.parentNode,e=0==n?e.nextSibling:1==n?e.firstChild:2==n?e:null;var a=S.contains(P.documentElement,i);o.forEach(function(t){if(s)t=t.cloneNode(!0);else if(!i)return S(t).remove();i.insertBefore(t,e),a&&w(t,function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},S.fn[r?e+"To":"insert"+(n?"Before":"After")]=function(t){return S(t)[e](this),this}}),Y.Z.prototype=S.fn,Y.uniq=T,Y.deserializeValue=b,S.zepto=Y,S}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function(t){function e(t){return t._zid||(t._zid=h++)}function n(t,n,o,s){if((n=r(n)).ns)var a=i(n.ns);return(v[e(t)]||[]).filter(function(t){return!(!t||n.e&&t.e!=n.e||n.ns&&!a.test(t.ns)||o&&e(t.fn)!==e(o)||s&&t.sel!=s)})}function r(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function i(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function o(t,e){return t.del&&!y&&t.e in b||!!e}function s(t){return w[t]||y&&b[t]||t}function a(n,i,a,c,l,h,p){var d=e(n),m=v[d]||(v[d]=[]);i.split(/\s/).forEach(function(e){if("ready"==e)return t(document).ready(a);var i=r(e);i.fn=a,i.sel=l,i.e in w&&(a=function(e){var n=e.relatedTarget;return!n||n!==this&&!t.contains(this,n)?i.fn.apply(this,arguments):void 0}),i.del=h;var d=h||a;i.proxy=function(t){if(!(t=u(t)).isImmediatePropagationStopped()){t.data=c;var e=d.apply(n,t._args==f?[t]:[t].concat(t._args));return!1===e&&(t.preventDefault(),t.stopPropagation()),e}},i.i=m.length,m.push(i),"addEventListener"in n&&n.addEventListener(s(i.e),i.proxy,o(i,p))})}function c(t,r,i,a,c){var u=e(t);(r||"").split(/\s/).forEach(function(e){n(t,e,i,a).forEach(function(e){delete v[u][e.i],"removeEventListener"in t&&t.removeEventListener(s(e.e),e.proxy,o(e,c))})})}function u(e,n){return(n||!e.isDefaultPrevented)&&(n||(n=e),t.each(C,function(t,r){var i=n[t];e[t]=function(){return this[r]=x,i&&i.apply(n,arguments)},e[r]=E}),(n.defaultPrevented!==f?n.defaultPrevented:"returnValue"in n?!1===n.returnValue:n.getPreventDefault&&n.getPreventDefault())&&(e.isDefaultPrevented=x)),e}function l(t){var e,n={originalEvent:t};for(e in t)S.test(e)||t[e]===f||(n[e]=t[e]);return u(n,t)}var f,h=1,p=Array.prototype.slice,d=t.isFunction,m=function(t){return"string"==typeof t},v={},g={},y="onfocusin"in window,b={focus:"focusin",blur:"focusout"},w={mouseenter:"mouseover",mouseleave:"mouseout"};g.click=g.mousedown=g.mouseup=g.mousemove="MouseEvents",t.event={add:a,remove:c},t.proxy=function(n,r){var i=2 in arguments&&p.call(arguments,2);if(d(n)){var o=function(){return n.apply(r,i?i.concat(p.call(arguments)):arguments)};return o._zid=e(n),o}if(m(r))return i?(i.unshift(n[r],n),t.proxy.apply(null,i)):t.proxy(n[r],n);throw new TypeError("expected function")},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,r){return this.on(t,e,n,r,1)};var x=function(){return!0},E=function(){return!1},S=/^([A-Z]|returnValue$|layer[XY]$)/,C={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,n,r,i,o){var s,u,h=this;return e&&!m(e)?(t.each(e,function(t,e){h.on(t,n,r,e,o)}),h):(m(n)||d(i)||!1===i||(i=r,r=n,n=f),(d(r)||!1===r)&&(i=r,r=f),!1===i&&(i=E),h.each(function(f,h){o&&(s=function(t){return c(h,t.type,i),i.apply(this,arguments)}),n&&(u=function(e){var r,o=t(e.target).closest(n,h).get(0);return o&&o!==h?(r=t.extend(l(e),{currentTarget:o,liveFired:h}),(s||i).apply(o,[r].concat(p.call(arguments,1)))):void 0}),a(h,e,i,r,n,u||s)}))},t.fn.off=function(e,n,r){var i=this;return e&&!m(e)?(t.each(e,function(t,e){i.off(t,n,e)}),i):(m(n)||d(r)||!1===r||(r=n,n=f),!1===r&&(r=E),i.each(function(){c(this,e,r,n)}))},t.fn.trigger=function(e,n){return e=m(e)||t.isPlainObject(e)?t.Event(e):u(e),e._args=n,this.each(function(){e.type in b&&"function"==typeof this[e.type]?this[e.type]():"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,r){var i,o;return this.each(function(s,a){(i=l(m(e)?t.Event(e):e))._args=r,i.target=a,t.each(n(a,e.type||e),function(t,e){return o=e.proxy(i),!i.isImmediatePropagationStopped()&&void 0})}),o},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return 0 in arguments?this.bind(e,t):this.trigger(e)}}),t.Event=function(t,e){m(t)||(e=t,t=e.type);var n=document.createEvent(g[t]||"Events"),r=!0;if(e)for(var i in e)"bubbles"==i?r=!!e[i]:n[i]=e[i];return n.initEvent(t,r,!0),u(n)}}(Zepto),function(t){function e(e,n,r){var i=t.Event(n);return t(e).trigger(i,r),!i.isDefaultPrevented()}function n(t,n,r,i){return t.global?e(n||y,r,i):void 0}function r(e){e.global&&0==t.active++&&n(e,null,"ajaxStart")}function i(e){e.global&&!--t.active&&n(e,null,"ajaxStop")}function o(t,e){var r=e.context;return!1!==e.beforeSend.call(r,t,e)&&!1!==n(e,r,"ajaxBeforeSend",[t,e])&&void n(e,r,"ajaxSend",[t,e])}function s(t,e,r,i){var o=r.context,s="success";r.success.call(o,t,s,e),i&&i.resolveWith(o,[t,s,e]),n(r,o,"ajaxSuccess",[e,r,t]),c(s,e,r)}function a(t,e,r,i,o){var s=i.context;i.error.call(s,r,e,t),o&&o.rejectWith(s,[r,e,t]),n(i,s,"ajaxError",[r,i,t||e]),c(e,r,i)}function c(t,e,r){var o=r.context;r.complete.call(o,e,t),n(r,o,"ajaxComplete",[e,r]),i(r)}function u(){}function l(t){return t&&(t=t.split(";",2)[0]),t&&(t==S?"html":t==E?"json":w.test(t)?"script":x.test(t)&&"xml")||"text"}function f(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function h(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=f(e.url,e.data),e.data=void 0)}function p(e,n,r,i){return t.isFunction(n)&&(i=r,r=n,n=void 0),t.isFunction(r)||(i=r,r=void 0),{url:e,data:n,success:r,dataType:i}}function d(e,n,r,i){var o,s=t.isArray(n),a=t.isPlainObject(n);t.each(n,function(n,c){o=t.type(c),i&&(n=r?i:i+"["+(a||"object"==o||"array"==o?n:"")+"]"),!i&&s?e.add(c.name,c.value):"array"==o||!r&&"object"==o?d(e,c,r,n):e.add(n,c)})}var m,v,g=0,y=window.document,b=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,w=/^(?:text|application)\/javascript/i,x=/^(?:text|application)\/xml/i,E="application/json",S="text/html",C=/^\s*$/,j=y.createElement("a");j.href=window.location.href,t.active=0,t.ajaxJSONP=function(e,n){if(!("type"in e))return t.ajax(e);var r,i,c=e.jsonpCallback,u=(t.isFunction(c)?c():c)||"jsonp"+ ++g,l=y.createElement("script"),f=window[u],h=function(e){t(l).triggerHandler("error",e||"abort")},p={abort:h};return n&&n.promise(p),t(l).on("load error",function(o,c){clearTimeout(i),t(l).off().remove(),"error"!=o.type&&r?s(r[0],p,e,n):a(null,c||"error",p,e,n),window[u]=f,r&&t.isFunction(f)&&f(r[0]),f=r=void 0}),!1===o(p,e)?(h("abort"),p):(window[u]=function(){r=arguments},l.src=e.url.replace(/\?(.+)=\?/,"?$1="+u),y.head.appendChild(l),e.timeout>0&&(i=setTimeout(function(){h("timeout")},e.timeout)),p)},t.ajaxSettings={type:"GET",beforeSend:u,success:u,error:u,complete:u,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:E,xml:"application/xml, text/xml",html:S,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var n,i=t.extend({},e||{}),c=t.Deferred&&t.Deferred();for(m in t.ajaxSettings)void 0===i[m]&&(i[m]=t.ajaxSettings[m]);r(i),i.crossDomain||(n=y.createElement("a"),n.href=i.url,n.href=n.href,i.crossDomain=j.protocol+"//"+j.host!=n.protocol+"//"+n.host),i.url||(i.url=window.location.toString()),h(i);var p=i.dataType,d=/\?.+=\?/.test(i.url);if(d&&(p="jsonp"),!1!==i.cache&&(e&&!0===e.cache||"script"!=p&&"jsonp"!=p)||(i.url=f(i.url,"_="+Date.now())),"jsonp"==p)return d||(i.url=f(i.url,i.jsonp?i.jsonp+"=?":!1===i.jsonp?"":"callback=?")),t.ajaxJSONP(i,c);var g,b=i.accepts[p],w={},x=function(t,e){w[t.toLowerCase()]=[t,e]},E=/^([\w-]+:)\/\//.test(i.url)?RegExp.$1:window.location.protocol,S=i.xhr(),T=S.setRequestHeader;if(c&&c.promise(S),i.crossDomain||x("X-Requested-With","XMLHttpRequest"),x("Accept",b||"*/*"),(b=i.mimeType||b)&&(b.indexOf(",")>-1&&(b=b.split(",",2)[0]),S.overrideMimeType&&S.overrideMimeType(b)),(i.contentType||!1!==i.contentType&&i.data&&"GET"!=i.type.toUpperCase())&&x("Content-Type",i.contentType||"application/x-www-form-urlencoded"),i.headers)for(v in i.headers)x(v,i.headers[v]);if(S.setRequestHeader=x,S.onreadystatechange=function(){if(4==S.readyState){S.onreadystatechange=u,clearTimeout(g);var e,n=!1;if(S.status>=200&&S.status<300||304==S.status||0==S.status&&"file:"==E){p=p||l(i.mimeType||S.getResponseHeader("content-type")),e=S.responseText;try{"script"==p?(0,eval)(e):"xml"==p?e=S.responseXML:"json"==p&&(e=C.test(e)?null:t.parseJSON(e))}catch(t){n=t}n?a(n,"parsererror",S,i,c):s(e,S,i,c)}else a(S.statusText||null,S.status?"error":"abort",S,i,c)}},!1===o(S,i))return S.abort(),a(null,"abort",S,i,c),S;if(i.xhrFields)for(v in i.xhrFields)S[v]=i.xhrFields[v];var O=!("async"in i)||i.async;S.open(i.type,i.url,O,i.username,i.password);for(v in w)T.apply(S,w[v]);return i.timeout>0&&(g=setTimeout(function(){S.onreadystatechange=u,S.abort(),a(null,"timeout",S,i,c)},i.timeout)),S.send(i.data?i.data:null),S},t.get=function(){return t.ajax(p.apply(null,arguments))},t.post=function(){var e=p.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=p.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,r){if(!this.length)return this;var i,o=this,s=e.split(/\s/),a=p(e,n,r),c=a.success;return s.length>1&&(a.url=s[0],i=s[1]),a.success=function(e){o.html(i?t("<div>").html(e.replace(b,"")).find(i):e),c&&c.apply(o,arguments)},t.ajax(a),this};var T=encodeURIComponent;t.param=function(e,n){var r=[];return r.add=function(e,n){t.isFunction(n)&&(n=n()),null==n&&(n=""),this.push(T(e)+"="+T(n))},d(r,e,n),r.join("&").replace(/%20/g,"+")}}(Zepto),function(t){t.fn.serializeArray=function(){var e,n,r=[],i=function(t){return t.forEach?t.forEach(i):void r.push({name:e,value:t})};return this[0]&&t.each(this[0].elements,function(r,o){n=o.type,(e=o.name)&&"fieldset"!=o.nodeName.toLowerCase()&&!o.disabled&&"submit"!=n&&"reset"!=n&&"button"!=n&&"file"!=n&&("radio"!=n&&"checkbox"!=n||o.checked)&&i(t(o).val())}),r},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(0 in arguments)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(Zepto),function(t){"__proto__"in{}||t.extend(t.zepto,{Z:function(e,n){return e=e||[],t.extend(e,t.fn),e.selector=n||"",e.__Z=!0,e},isZ:function(e){return"array"===t.type(e)&&"__Z"in e}});try{getComputedStyle(void 0)}catch(t){var e=getComputedStyle;window.getComputedStyle=function(t){try{return e(t)}catch(t){return null}}}}(Zepto),function(t){"use strict";function e(t){return new RegExp("(^|\\s+)"+t+"(\\s+|$)")}function n(t,e){(r(t,e)?o:i)(t,e)}var r,i,o;"classList"in document.documentElement?(r=function(t,e){return t.classList.contains(e)},i=function(t,e){t.classList.add(e)},o=function(t,e){t.classList.remove(e)}):(r=function(t,n){return e(n).test(t.className)},i=function(t,e){r(t,e)||(t.className=t.className+" "+e)},o=function(t,n){t.className=t.className.replace(e(n)," ")});var s={hasClass:r,addClass:i,removeClass:o,toggleClass:n,has:r,add:i,remove:o,toggle:n};"function"==typeof define&&define.amd?define(s):t.classie=s}(window),function(t){"use strict";function e(){var e=a.clientHeight,n=t.innerHeight;return e<n?n:e}function n(){return t.pageYOffset||a.scrollTop}function r(t){var e=0,n=0;do{isNaN(t.offsetTop)||(e+=t.offsetTop),isNaN(t.offsetLeft)||(n+=t.offsetLeft)}while(t=t.offsetParent);return{top:e,left:n}}function i(t,i){var o=t.offsetHeight,s=n(),a=s+e(),c=r(t).top,u=c+o;return c+o*(i=i||0)<=a&&u-o*i>=s}function o(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}function s(t,e){this.el=t,this.options=o(this.defaults,e),this._init()}var a=t.document.documentElement;s.prototype={defaults:{minDuration:0,maxDuration:0,viewportFactor:0},_init:function(){this.items=Array.prototype.slice.call(document.querySelectorAll("#"+this.el.id+" > article")),this.itemsCount=this.items.length,this.itemsRenderedCount=0,this.didScroll=!1;var e=this;e.items.forEach(function(t,n){i(t)&&(e._checkTotalRendered(),classie.add(t,"shown"))}),t.addEventListener("scroll",function(){e._onScrollFn()},!1),t.addEventListener("resize",function(){e._resizeHandler()},!1)},_onScrollFn:function(){var t=this;this.didScroll||(this.didScroll=!0,setTimeout(function(){t._scrollPage()},60))},_scrollPage:function(){var t=this;this.items.forEach(function(r,o){classie.has(r,"shown")||classie.has(r,"animate")||!i(r,t.options.viewportFactor)||setTimeout(function(){var i=n()+e()/2;if(t.el.style.WebkitPerspectiveOrigin="50% "+i+"px",t.el.style.MozPerspectiveOrigin="50% "+i+"px",t.el.style.perspectiveOrigin="50% "+i+"px",t._checkTotalRendered(),t.options.minDuration&&t.options.maxDuration){var o=Math.random()*(t.options.maxDuration-t.options.minDuration)+t.options.minDuration+"s";r.style.WebkitAnimationDuration=o,r.style.MozAnimationDuration=o,r.style.animationDuration=o}classie.add(r,"animate")},25)}),this.didScroll=!1},_resizeHandler:function(){var t=this;this.resizeTimeout&&clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(function(){t._scrollPage(),t.resizeTimeout=null},1e3)},_checkTotalRendered:function(){++this.itemsRenderedCount===this.itemsCount&&t.removeEventListener("scroll",this._onScrollFn)}},t.AnimOnScroll=s}(window),function(t){t.fn.simpleJekyllSearch=function(e){function n(){u.keyup(function(e){t(this).val().length?i(r(t(this).val())):o()})}function r(e){var n=[];return t.each(c,function(t,r){for(var t=0;t<a.length;t++)void 0!==r[a[t]]&&-1!==r[a[t]].toLowerCase().indexOf(e.toLowerCase())&&(n.push(r),t=a.length)}),n}function i(e){o(),l.append(t(s.searchResultsTitle)),e.length?t.each(e,function(e,n){if(e<s.limit){for(var r=s.template,e=0;e<a.length;e++){var i=new RegExp("{"+a[e]+"}","g");r=r.replace(i,n[a[e]])}l.append(t(r))}}):l.append(s.noResults)}function o(){l.children().remove()}var s=t.extend({jsonFile:"/search.json",jsonFormat:"title,tags,categories,url,date",template:'<li><article><a href="{url}">{title} <span class="entry-date"><time datetime="{date}">{date}</time></span></a></article></li>',searchResults:".search-results",searchResultsTitle:"<h4>Search results:</h4>",limit:"10",noResults:"<p>Oh snap!<br/><small>We found nothing :(</small></p>"},e),a=s.jsonFormat.split(","),c=[],u=this,l=t(s.searchResults);s.jsonFile.length&&l.length&&t.ajax({type:"GET",url:s.jsonFile,dataType:"json",success:function(t,e,r){c=t,n()},error:function(t,e,n){console.log("***ERROR in simpleJekyllSearch.js***"),console.log(t),console.log(e),console.log(n)}})}}(Zepto),function(t,e){"function"==typeof define&&define.amd?define([],e(t)):"object"==typeof exports?module.exports=e(t):t.smoothScroll=e(t)}("undefined"!=typeof global?global:this.window||this.global,function(t){"use strict";var e,n,r,i,o={},s="querySelector"in document&&"addEventListener"in t,a={selector:"[data-scroll]",selectorHeader:"[data-scroll-header]",speed:500,easing:"easeInOutCubic",offset:0,updateURL:!0,callback:function(){}},c=function(){var t={},e=!1,n=0,r=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(e=arguments[0],n++);for(;n<r;n++)!function(n){for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e&&"[object Object]"===Object.prototype.toString.call(n[r])?t[r]=c(!0,t[r],n[r]):t[r]=n[r])}(arguments[n]);return t},u=function(t){return Math.max(t.scrollHeight,t.offsetHeight,t.clientHeight)},l=function(t,e){var n,r,i=e.charAt(0),o="classList"in document.documentElement;for("["===i&&(n=(e=e.substr(1,e.length-2)).split("=")).length>1&&(r=!0,n[1]=n[1].replace(/"/g,"").replace(/'/g,""));t&&t!==document;t=t.parentNode){if("."===i)if(o){if(t.classList.contains(e.substr(1)))return t}else if(new RegExp("(^|\\s)"+e.substr(1)+"(\\s|$)").test(t.className))return t;if("#"===i&&t.id===e.substr(1))return t;if("["===i&&t.hasAttribute(n[0])){if(!r)return t;if(t.getAttribute(n[0])===n[1])return t}if(t.tagName.toLowerCase()===e)return t}return null},f=function(t){for(var e,n=String(t),r=n.length,i=-1,o="",s=n.charCodeAt(0);++i<r;){if(0===(e=n.charCodeAt(i)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");e>=1&&e<=31||127==e||0===i&&e>=48&&e<=57||1===i&&e>=48&&e<=57&&45===s?o+="\\"+e.toString(16)+" ":o+=e>=128||45===e||95===e||e>=48&&e<=57||e>=65&&e<=90||e>=97&&e<=122?n.charAt(i):"\\"+n.charAt(i)}return o},h=function(t,e){var n;return"easeInQuad"===t&&(n=e*e),"easeOutQuad"===t&&(n=e*(2-e)),"easeInOutQuad"===t&&(n=e<.5?2*e*e:(4-2*e)*e-1),"easeInCubic"===t&&(n=e*e*e),"easeOutCubic"===t&&(n=--e*e*e+1),"easeInOutCubic"===t&&(n=e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1),"easeInQuart"===t&&(n=e*e*e*e),"easeOutQuart"===t&&(n=1- --e*e*e*e),"easeInOutQuart"===t&&(n=e<.5?8*e*e*e*e:1-8*--e*e*e*e),"easeInQuint"===t&&(n=e*e*e*e*e),"easeOutQuint"===t&&(n=1+--e*e*e*e*e),"easeInOutQuint"===t&&(n=e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e),n||e},p=function(t,e,n){var r=0;if(t.offsetParent)do{r+=t.offsetTop,t=t.offsetParent}while(t);return(r=r-e-n)>=0?r:0},d=function(){return Math.max(t.document.body.scrollHeight,t.document.documentElement.scrollHeight,t.document.body.offsetHeight,t.document.documentElement.offsetHeight,t.document.body.clientHeight,t.document.documentElement.clientHeight)},m=function(t){return t&&"object"==typeof JSON&&"function"==typeof JSON.parse?JSON.parse(t):{}},v=function(e,n){t.history.pushState&&(n||"true"===n)&&"file:"!==t.location.protocol&&t.history.pushState(null,null,[t.location.protocol,"//",t.location.host,t.location.pathname,t.location.search,e].join(""))},g=function(t){return null===t?0:u(t)+t.offsetTop};o.animateScroll=function(e,n,o){var s=m(e?e.getAttribute("data-options"):null),u=c(u||a,o||{},s),l="#"===(n="#"+f(n.substr(1)))?t.document.documentElement:t.document.querySelector(n),y=t.pageYOffset;r||(r=t.document.querySelector(u.selectorHeader)),i||(i=g(r));var b,w,x,E=p(l,i,parseInt(u.offset,10)),S=E-y,C=d(),j=0;v(n,u.updateURL);var T=function(r,i,o){var s=t.pageYOffset;(r==i||s==i||t.innerHeight+s>=C)&&(clearInterval(o),l.focus(),u.callback(e,n))},O=function(){w=(j+=16)/parseInt(u.speed,10),w=w>1?1:w,x=y+S*h(u.easing,w),t.scrollTo(0,Math.floor(x)),T(x,E,b)};0===t.pageYOffset&&t.scrollTo(0,0),b=setInterval(O,16)};var y=function(t){var n=l(t.target,e.selector);n&&"a"===n.tagName.toLowerCase()&&(t.preventDefault(),o.animateScroll(n,n.hash,e))},b=function(t){n||(n=setTimeout(function(){n=null,i=g(r)},66))};return o.destroy=function(){e&&(t.document.removeEventListener("click",y,!1),t.removeEventListener("resize",b,!1),e=null,n=null,r=null,i=null)},o.init=function(n){s&&(o.destroy(),e=c(a,n||{}),r=t.document.querySelector(e.selectorHeader),i=g(r),t.document.addEventListener("click",y,!1),r&&t.addEventListener("resize",b,!1))},o}),function(){for(var t=document.links,e=0,n=t.length;e<n;e++)t[e].hostname!=window.location.hostname&&(t[e].target="_blank",t[e].className+=" externalLink")}(),function(t,e,n){function r(){t(".search-wrapper").toggleClass("active"),i.searchform.toggleClass("active"),i.canvas.removeClass("search-overlay")}t("a#slide").click(function(){t("#sidebar,a#slide,#fade").addClass("slide"),t("#open").hide(),t("#search").hide(),t("#close").show()}),t("#fade").click(function(){t("#sidebar,a#slide,#fade").removeClass("slide"),t("#open").show(),t("#search").show(),t("#close").hide()});var i={close:t(".icon-remove-sign"),searchform:t(".search-form"),canvas:t("body"),dothis:t(".dosearch")};i.dothis.on("click",function(){t(".search-wrapper").toggleClass("active"),i.searchform.toggleClass("active"),i.searchform.find("input").focus(),i.canvas.toggleClass("search-overlay"),t(".search-field").simpleJekyllSearch()}),i.close.on("click",r),document.addEventListener("keyup",function(e){27==e.keyCode&&t(".search-overlay").length&&r()}),document.getElementsByClassName("home").length>=1&&new AnimOnScroll(document.getElementById("grid"),{minDuration:.4,maxDuration:.7,viewportFactor:.2}),smoothScroll.init({selectorHeader:".bar-header",speed:500,updateURL:!1}),screen.width>1024&&e.addEventListener("scroll",function(){var t,n=document.querySelector(".header-post .content");(t=e.scrollY)<=500&&null!=n&&(n.style.transform="translateY("+-t/3+"px)",n.style.opacity=1-t/500)})}(Zepto,window);