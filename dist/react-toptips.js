!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("classnames"),require("noop"),require("prop-types"),require("react-append-to-document")):"function"==typeof define&&define.amd?define(["react","classnames","noop","prop-types","react-append-to-document"],t):"object"==typeof exports?exports.ReactToptips=t(require("react"),require("classnames"),require("noop"),require("prop-types"),require("react-append-to-document")):e.ReactToptips=t(e.react,e.classnames,e.noop,e["prop-types"],e["react-append-to-document"])}(this,function(e,t,n,r,o){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(1),i=r(o),a=n(3),s=r(a);e.exports={ReactToptips:i.default,ReactToptipsCtrl:s.default}},function(e,t,n){(function(e){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(7);var c=n(10),f=r(c),l=n(2),p=n(11),d=r(p),h=n(8),v=r(h),b=n(9),m=(r(b),function(t){function n(e){o(this,n);var t=i(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t._onClick=function(e){t.hide()},t.state=s({},e,{content:""}),t}return a(n,t),u(n,null,[{key:"newInstance",value:function(e){return(0,d.default)(n,e,{className:"toptips-wrapper"})}}]),u(n,[{key:"show",value:function(e){this.setState(s({},e,{visible:!0}))}},{key:"hide",value:function(){this.setState({visible:!1})}},{key:"render",value:function(){var t=this.state,n=t.visible,r=t.theme,o=t.size,i=t.className,a=t.content;return e.createElement("div",{"data-visible":n,"data-theme":r,onClick:this._onClick,style:{fontSize:o},className:(0,v.default)("react-toptips",i),dangerouslySetInnerHTML:{__html:a}})}}]),n}(l.PureComponent));m.propTypes={className:f.default.string,theme:f.default.string,size:f.default.string,onClick:f.default.func},m.defaultProps={visible:!1,theme:"default",size:"12px"},t.default=m}).call(t,n(2))},function(t,n){t.exports=e},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(1),s=r(a),u=void 0,c=void 0,f=function(){function e(){o(this,e)}return i(e,null,[{key:"createInstance",value:function(e){return u=u||s.default.newInstance(e)}},{key:"show",value:function(e){u.component.show(e),clearTimeout(c),c=setTimeout(function(){u.component.hide()},e.interval||2e3)}},{key:"hide",value:function(e){u.component.hide()}},{key:"destroy",value:function(){u.destroy(),u=null}}]),e}();t.default=f},function(e,t,n){t=e.exports=n(5)(),t.push([e.id,".react-toptips{height:3em;line-height:3em;font-size:1.4em;-webkit-transition:top .3s;transition:top .3s;position:fixed;text-align:center;color:#fff;width:100%}.react-toptips[data-visible=true]{top:0}.react-toptips[data-visible=false]{top:-3em}.react-toptips[data-theme=default]{background:rgba(51,51,51,.9)}.react-toptips[data-theme=info]{background:rgba(37,99,171,.9)}.react-toptips[data-theme=error]{background:rgba(224,42,45,.9)}.react-toptips[data-theme=warn]{background:rgba(237,159,53,.9)}.react-toptips[data-theme=success]{background:rgba(53,144,48,.9)}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=d[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(c(r.parts[i],t))}else{for(var a=[],i=0;i<r.parts.length;i++)a.push(c(r.parts[i],t));d[r.id]={id:r.id,refs:1,parts:a}}}}function o(e){for(var t=[],n={},r=0;r<e.length;r++){var o=e[r],i=o[0],a=o[1],s=o[2],u=o[3],c={css:a,media:s,sourceMap:u};n[i]?n[i].parts.push(c):t.push(n[i]={id:i,parts:[c]})}return t}function i(e,t){var n=b(),r=g[g.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),g.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function a(e){e.parentNode.removeChild(e);var t=g.indexOf(e);t>=0&&g.splice(t,1)}function s(e){var t=document.createElement("style");return t.type="text/css",i(e,t),t}function u(e){var t=document.createElement("link");return t.rel="stylesheet",i(e,t),t}function c(e,t){var n,r,o;if(t.singleton){var i=y++;n=m||(m=s(t)),r=f.bind(null,n,i,!1),o=f.bind(null,n,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=u(t),r=p.bind(null,n),o=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(t),r=l.bind(null,n),o=function(){a(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function f(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function l(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function p(e,t){var n=t.css,r=t.sourceMap;r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var o=new Blob([n],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(o),i&&URL.revokeObjectURL(i)}var d={},h=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},v=h(function(){return/msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())}),b=h(function(){return document.head||document.getElementsByTagName("head")[0]}),m=null,y=0,g=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=v()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=o(e);return r(n,t),function(e){for(var i=[],a=0;a<n.length;a++){var s=n[a],u=d[s.id];u.refs--,i.push(u)}if(e){var c=o(e);r(c,t)}for(var a=0;a<i.length;a++){var u=i[a];if(0===u.refs){for(var f=0;f<u.parts.length;f++)u.parts[f]();delete d[u.id]}}}};var x=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){var r=n(4);"string"==typeof r&&(r=[[e.id,r,""]]);n(6)(r,{});r.locals&&(e.exports=r.locals)},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){e.exports=r},function(e,t){e.exports=o}])});
//# sourceMappingURL=react-toptips.js.map