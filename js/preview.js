(window.textWebpackJsonp=window.textWebpackJsonp||[]).push([[186],{330:function(e,r,t){var o=t(556);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,t(153).default)("e7906548",o,!0,{})},337:function(e,r,t){var o=t(620);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,t(153).default)("5ba6a5c3",o,!0,{})},338:function(e,r,t){var o=t(622);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,t(153).default)("ed017fbc",o,!0,{})},542:function(e,r,t){"use strict";var o=t(319),n=t(323);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function s(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function l(e,r,t){return r&&s(e.prototype,r),t&&s(e,t),e}function c(e,r){return!r||"object"!==i(r)&&"function"!=typeof r?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):r}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),r&&p(e,r)}function p(e,r){return(p=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e})(e,r)}
/*
 * @copyright Copyright (c) 2019 Julius Härtl <jus@bitgrid.net>
 *
 * @author Julius Härtl <jus@bitgrid.net>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */var f=function(e){function r(){return a(this,r),c(this,d(r).apply(this,arguments))}return u(r,e),l(r,[{key:"name",get:function(){return"strong"}}]),r}(n.b),m=function(e){function r(){return a(this,r),c(this,d(r).apply(this,arguments))}return u(r,e),l(r,[{key:"name",get:function(){return"em"}}]),r}(n.m),h=function(e){function r(){return a(this,r),c(this,d(r).apply(this,arguments))}return u(r,e),l(r,[{key:"schema",get:function(){return{parseDOM:[{tag:"s"},{tag:"del"},{tag:"strike"},{style:"text-decoration",getAttrs:function(e){return"line-through"===e}}],toDOM:function(){return["s",0]},toMarkdown:{open:"~~",close:"~~",mixable:!0,expelEnclosingWhitespace:!0}}}}]),r}(n.r),y=["image/png","image/jpeg","image/gif","image/x-xbitmap","image/bmp","image/svg+xml"],g=function(e,r){var t=e.split("#")[1];if(void 0!==t){var o=t.split("&");if(void 0!==o)for(var n=0;n<o.length;n++){var i=o[n].split("=");if(decodeURIComponent(i[0])===r)return decodeURIComponent(i[1])}}},j={name:"ImageView",props:["node","updateAttrs","view"],data:function(){return{imageLoaded:!1,loaded:!1,failed:!1}},computed:{mimeIcon:function(){var e=g(this.src,"mimetype");return e?{backgroundImage:"url("+window.OC.MimeType.getIconUrl(e)+")"}:{}},isSupportedImage:function(){var e=g(this.src,"mimetype");return void 0===e||-1!==y.indexOf(e)},internalLinkOrImage:function(){var e=g(this.src,"fileId");return e?OC.generateUrl("/f/"+e):this.src},src:{get:function(){return this.node.attrs.src},set:function(e){this.updateAttrs({src:e})}},alt:{get:function(){return this.node.attrs.alt?this.node.attrs.alt:""},set:function(e){this.updateAttrs({alt:e})}},t:function(){return function(e,r){return window.t(e,r)}}},beforeMount:function(){var e=this;if(!this.isSupportedImage)return this.failed=!0,this.imageLoaded=!1,void(this.loaded=!0);var r=new Image;r.src=this.node.attrs.src,r.onload=function(){e.imageLoaded=!0},r.onerror=function(){e.failed=!0,e.imageLoaded=!1,e.loaded=!0}},methods:{updateAlt:function(){this.alt=this.$refs.altInput.value},onLoaded:function(){this.loaded=!0}}},v=(t(555),t(50)),b=Object(v.a)(j,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"image",class:{"icon-loading":!e.loaded},attrs:{"data-src":e.src}},[e.imageLoaded&&e.isSupportedImage?t("div",[t("transition",{attrs:{name:"fade"}},[t("img",{directives:[{name:"show",rawName:"v-show",value:e.loaded,expression:"loaded"}],staticClass:"image__main",attrs:{src:e.src},on:{load:e.onLoaded}})]),e._v(" "),t("transition",{attrs:{name:"fade"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.loaded,expression:"loaded"}],staticClass:"image__caption"},[t("input",{ref:"altInput",attrs:{type:"text"},domProps:{value:e.alt},on:{keyup:function(r){return!r.type.indexOf("key")&&e._k(r.keyCode,"enter",13,r.key,"Enter")?null:e.updateAlt()}}})])])],1):t("div",{staticClass:"image__placeholder"},[t("transition",{attrs:{name:"fade"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.loaded,expression:"loaded"}],staticClass:"image__main"},[t("div",{staticClass:"icon-image",style:e.mimeIcon}),e._v(" "),t("p",[t("a",{attrs:{href:e.internalLinkOrImage,target:"_blank"}},[e._v(e._s(e.isSupportedImage?e.t("text","Show image"):e.t("text","Show file")))])])])]),t("transition",{attrs:{name:"fade"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.loaded,expression:"loaded"}],staticClass:"image__caption"},[t("input",{ref:"altInput",attrs:{type:"text"},domProps:{value:e.alt},on:{keyup:function(r){return!r.type.indexOf("key")&&e._k(r.keyCode,"enter",13,r.key,"Enter")?null:e.updateAlt()}}})])])],1)])}),[],!1,null,"2ac49a8a",null).exports;function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function P(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function k(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function O(e,r){return!r||"object"!==x(r)&&"function"!=typeof r?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):r}function M(e,r,t){return(M="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,r,t){var o=function(e,r){for(;!Object.prototype.hasOwnProperty.call(e,r)&&null!==(e=_(e)););return e}(e,r);if(o){var n=Object.getOwnPropertyDescriptor(o,r);return n.get?n.get.call(t):n.value}})(e,r,t||e)}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e,r){return(S=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e})(e,r)}
/*
 * @copyright Copyright (c) 2019 Julius Härtl <jus@bitgrid.net>
 *
 * @author Julius Härtl <jus@bitgrid.net>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */var E=function(e){function r(){return function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,r),O(this,_(r).apply(this,arguments))}var t,o,n;return function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),r&&S(e,r)}(r,e),t=r,(o=[{key:"view",get:function(){return b}},{key:"schema",get:function(){return function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?w(t,!0).forEach((function(r){P(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(t).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},M(_(r.prototype),"schema",this),{selectable:!1})}}])&&k(t.prototype,o),n&&k(t,n),r}(n.l),z=t(329);function I(e){return(I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function q(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function C(e,r){return!r||"object"!==I(r)&&"function"!=typeof r?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):r}function A(e){return(A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function R(e,r){return(R=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e})(e,r)}
/*
 * @copyright Copyright (c) 2019 Julius Härtl <jus@bitgrid.net>
 *
 * @author Julius Härtl <jus@bitgrid.net>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */var D=function(e){function r(){return function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,r),C(this,A(r).apply(this,arguments))}var t,o,n;return function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),r&&R(e,r)}(r,e),t=r,(o=[{key:"keys",value:function(){var e=this;return{Tab:function(r){return Object(z.c)("\t")(r,e.editor.view.dispatch,e.editor.view),!0}}}},{key:"name",get:function(){return"doc"}},{key:"schema",get:function(){return{content:"block"}}}])&&q(t.prototype,o),n&&q(t,n),r}(o.g),T=t(347),L=t.n(T),N=t(637);
/*
 * @copyright Copyright (c) 2019 Julius Härtl <jus@bitgrid.net>
 *
 * @author Julius Härtl <jus@bitgrid.net>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */function U(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var t=[],o=!0,n=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done)&&(t.push(a.value),!r||t.length!==r);o=!0);}catch(e){n=!0,i=e}finally{try{o||null==s.return||s.return()}finally{if(n)throw i}}return t}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function W(e){return function(e){if(Array.isArray(e)){for(var r=0,t=new Array(e.length);r<e.length;r++)t[r]=e[r];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function F(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function J(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?F(t,!0).forEach((function(r){$(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):F(t).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function $(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}
/*
 * @copyright Copyright (c) 2019 Julius Härtl <jus@bitgrid.net>
 *
 * @author Julius Härtl <jus@bitgrid.net>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */t.d(r,"d",(function(){return G})),t.d(r,"a",(function(){return V})),t.d(r,"b",(function(){return K})),t.d(r,"e",(function(){return Q})),t.d(r,"c",(function(){return B}));var B=function(e){var r,o,n,i;return regeneratorRuntime.async((function(a){for(;;)switch(a.prev=a.next){case 0:r=[e],o={},n=0;case 3:if(!(n<r.length)){a.next=17;break}return a.prev=4,a.next=7,regeneratorRuntime.awrap(t(612)("./"+r[n]));case 7:i=a.sent,o[r[n]]=i.default,a.next=14;break;case 11:return a.prev=11,a.t0=a.catch(4),a.abrupt("return",void 0);case 14:n++,a.next=3;break;case 17:if(0!==Object.keys(o).length||o.constructor!==Object){a.next=19;break}return a.abrupt("return",void 0);case 19:return a.abrupt("return",{languages:o});case 20:case"end":return a.stop()}}),null,null,[[4,11]])},V=function(e){var r=e.content,t=e.onInit,i=e.onUpdate,a=e.extensions,s=e.enableRichEditing,l=e.languages,c=[];return c=s?[new n.i,new n.d,new f,new m,new h,new n.h,new n.k,new n.c,new n.p,new n.a,new n.e,new n.o,new n.n,new E,new n.q({emptyNodeClass:"is-empty",emptyNodeText:"Add notes, lists or links …",showOnlyWhenEditable:!0})]:[new D,new o.j,new n.f(J({},l))],a=a||[],new o.a({content:r,onInit:t,onUpdate:i,extensions:[].concat(W(c),[new n.j]).concat(a),useBuiltInExtensions:s})},G=L()("commonmark",{html:!1,breaks:!1}).enable("strikethrough"),H=function(e){this.message=e},K=function(e,r){var t=Object.entries(e).filter((function(e){return U(e,2)[1].toMarkdown})).reduce((function(e,r){var t=U(r,2);return J({},e,$({},t[0],t[1].toMarkdown))}),{}),o=Object.entries(r).filter((function(e){return U(e,2)[1].toMarkdown})).reduce((function(e,r){var t=U(r,2);return J({},e,$({},t[0],t[1].toMarkdown))}),{});return{serializer:new N.a(J({},N.b.nodes,{},t),J({},N.b.marks,{},o)),serialize:function(e,r){return this.serializer.serialize(e,J({},r,{tightLists:!0})).split("\\[ \\]").join("[ ]").split("\\[x\\]").join("[x]")}}},Q=function(e){var r=e.getJSON();if(1!==r.content.length||void 0===r.content[0].content||1!==r.content[0].content.length){if("code_block"===r.content[0].type&&void 0===r.content[0].content)return"";throw new H("Failed to serialize document to plain text")}var t=r.content[0].content[0];if("text"!==t.type)throw new H("Failed to serialize document to plain text");return t.text}},555:function(e,r,t){"use strict";var o=t(330);t.n(o).a},556:function(e,r,t){(e.exports=t(152)(!1)).push([e.i,".image[data-v-2ac49a8a]{margin:0;padding:0}.image__caption[data-v-2ac49a8a]{text-align:center;color:var(--color-text-lighter)}.image__caption input[type='text'][data-v-2ac49a8a]{width:100%;border:none;text-align:center}.icon-image[data-v-2ac49a8a]{margin-top:10px;height:32px;padding:20px;background-size:contain}.image__loading[data-v-2ac49a8a]{height:100px}.image__placeholder .image__main[data-v-2ac49a8a]{background-color:var(--color-background-dark);text-align:center;padding:20px;border-radius:var(--border-radius)}.image__placeholder .image__main .icon-image[data-v-2ac49a8a]{opacity:0.7}.fade-enter-active[data-v-2ac49a8a]{transition:opacity .3s ease-in-out}.fade-enter-to[data-v-2ac49a8a]{opacity:1}.fade-enter[data-v-2ac49a8a]{opacity:0}\n",""])},612:function(e,r,t){var o={"./1c":[357,1],"./1c.js":[357,1],"./abnf":[358,2],"./abnf.js":[358,2],"./accesslog":[359,3],"./accesslog.js":[359,3],"./actionscript":[360,4],"./actionscript.js":[360,4],"./ada":[361,5],"./ada.js":[361,5],"./angelscript":[362,6],"./angelscript.js":[362,6],"./apache":[363,7],"./apache.js":[363,7],"./applescript":[364,8],"./applescript.js":[364,8],"./arcade":[365,9],"./arcade.js":[365,9],"./arduino":[366,10],"./arduino.js":[366,10],"./armasm":[367,11],"./armasm.js":[367,11],"./asciidoc":[368,12],"./asciidoc.js":[368,12],"./aspectj":[369,13],"./aspectj.js":[369,13],"./autohotkey":[370,14],"./autohotkey.js":[370,14],"./autoit":[371,15],"./autoit.js":[371,15],"./avrasm":[372,16],"./avrasm.js":[372,16],"./awk":[373,17],"./awk.js":[373,17],"./axapta":[374,18],"./axapta.js":[374,18],"./bash":[375,19],"./bash.js":[375,19],"./basic":[376,20],"./basic.js":[376,20],"./bnf":[377,21],"./bnf.js":[377,21],"./brainfuck":[378,22],"./brainfuck.js":[378,22],"./cal":[379,23],"./cal.js":[379,23],"./capnproto":[380,24],"./capnproto.js":[380,24],"./ceylon":[381,25],"./ceylon.js":[381,25],"./clean":[382,26],"./clean.js":[382,26],"./clojure":[384,27],"./clojure-repl":[383,28],"./clojure-repl.js":[383,28],"./clojure.js":[384,27],"./cmake":[385,29],"./cmake.js":[385,29],"./coffeescript":[386,30],"./coffeescript.js":[386,30],"./coq":[387,31],"./coq.js":[387,31],"./cos":[388,32],"./cos.js":[388,32],"./cpp":[389,33],"./cpp.js":[389,33],"./crmsh":[390,34],"./crmsh.js":[390,34],"./crystal":[391,35],"./crystal.js":[391,35],"./cs":[392,36],"./cs.js":[392,36],"./csp":[393,37],"./csp.js":[393,37],"./css":[394,38],"./css.js":[394,38],"./d":[395,39],"./d.js":[395,39],"./dart":[396,40],"./dart.js":[396,40],"./delphi":[397,41],"./delphi.js":[397,41],"./diff":[398,42],"./diff.js":[398,42],"./django":[399,43],"./django.js":[399,43],"./dns":[400,44],"./dns.js":[400,44],"./dockerfile":[401,45],"./dockerfile.js":[401,45],"./dos":[402,46],"./dos.js":[402,46],"./dsconfig":[403,47],"./dsconfig.js":[403,47],"./dts":[404,48],"./dts.js":[404,48],"./dust":[405,49],"./dust.js":[405,49],"./ebnf":[406,50],"./ebnf.js":[406,50],"./elixir":[407,51],"./elixir.js":[407,51],"./elm":[408,52],"./elm.js":[408,52],"./erb":[409,53],"./erb.js":[409,53],"./erlang":[411,54],"./erlang-repl":[410,55],"./erlang-repl.js":[410,55],"./erlang.js":[411,54],"./excel":[412,56],"./excel.js":[412,56],"./fix":[413,57],"./fix.js":[413,57],"./flix":[414,58],"./flix.js":[414,58],"./fortran":[415,59],"./fortran.js":[415,59],"./fsharp":[416,60],"./fsharp.js":[416,60],"./gams":[417,61],"./gams.js":[417,61],"./gauss":[418,62],"./gauss.js":[418,62],"./gcode":[419,63],"./gcode.js":[419,63],"./gherkin":[420,64],"./gherkin.js":[420,64],"./glsl":[421,65],"./glsl.js":[421,65],"./gml":[422,66],"./gml.js":[422,66],"./go":[423,67],"./go.js":[423,67],"./golo":[424,68],"./golo.js":[424,68],"./gradle":[425,69],"./gradle.js":[425,69],"./groovy":[426,70],"./groovy.js":[426,70],"./haml":[427,71],"./haml.js":[427,71],"./handlebars":[428,72],"./handlebars.js":[428,72],"./haskell":[429,73],"./haskell.js":[429,73],"./haxe":[430,74],"./haxe.js":[430,74],"./hsp":[431,75],"./hsp.js":[431,75],"./htmlbars":[432,76],"./htmlbars.js":[432,76],"./http":[433,77],"./http.js":[433,77],"./hy":[434,78],"./hy.js":[434,78],"./inform7":[435,79],"./inform7.js":[435,79],"./ini":[436,80],"./ini.js":[436,80],"./irpf90":[437,81],"./irpf90.js":[437,81],"./isbl":[438,82],"./isbl.js":[438,82],"./java":[439,83],"./java.js":[439,83],"./javascript":[440,84],"./javascript.js":[440,84],"./jboss-cli":[441,85],"./jboss-cli.js":[441,85],"./json":[442,86],"./json.js":[442,86],"./julia":[444,87],"./julia-repl":[443,88],"./julia-repl.js":[443,88],"./julia.js":[444,87],"./kotlin":[445,89],"./kotlin.js":[445,89],"./lasso":[446,90],"./lasso.js":[446,90],"./ldif":[447,91],"./ldif.js":[447,91],"./leaf":[448,92],"./leaf.js":[448,92],"./less":[449,93],"./less.js":[449,93],"./lisp":[450,94],"./lisp.js":[450,94],"./livecodeserver":[451,95],"./livecodeserver.js":[451,95],"./livescript":[452,96],"./livescript.js":[452,96],"./llvm":[453,97],"./llvm.js":[453,97],"./lsl":[454,98],"./lsl.js":[454,98],"./lua":[455,99],"./lua.js":[455,99],"./makefile":[456,100],"./makefile.js":[456,100],"./markdown":[457,101],"./markdown.js":[457,101],"./mathematica":[458,102],"./mathematica.js":[458,102],"./matlab":[459,103],"./matlab.js":[459,103],"./maxima":[460,104],"./maxima.js":[460,104],"./mel":[461,105],"./mel.js":[461,105],"./mercury":[462,106],"./mercury.js":[462,106],"./mipsasm":[463,107],"./mipsasm.js":[463,107],"./mizar":[464,108],"./mizar.js":[464,108],"./mojolicious":[465,109],"./mojolicious.js":[465,109],"./monkey":[466,110],"./monkey.js":[466,110],"./moonscript":[467,111],"./moonscript.js":[467,111],"./n1ql":[468,112],"./n1ql.js":[468,112],"./nginx":[469,113],"./nginx.js":[469,113],"./nimrod":[470,114],"./nimrod.js":[470,114],"./nix":[471,115],"./nix.js":[471,115],"./nsis":[472,116],"./nsis.js":[472,116],"./objectivec":[473,117],"./objectivec.js":[473,117],"./ocaml":[474,118],"./ocaml.js":[474,118],"./openscad":[475,119],"./openscad.js":[475,119],"./oxygene":[476,120],"./oxygene.js":[476,120],"./parser3":[477,121],"./parser3.js":[477,121],"./perl":[478,122],"./perl.js":[478,122],"./pf":[479,123],"./pf.js":[479,123],"./pgsql":[480,124],"./pgsql.js":[480,124],"./php":[481,125],"./php.js":[481,125],"./plaintext":[482,126],"./plaintext.js":[482,126],"./pony":[483,127],"./pony.js":[483,127],"./powershell":[484,128],"./powershell.js":[484,128],"./processing":[485,129],"./processing.js":[485,129],"./profile":[486,130],"./profile.js":[486,130],"./prolog":[487,131],"./prolog.js":[487,131],"./properties":[488,132],"./properties.js":[488,132],"./protobuf":[489,133],"./protobuf.js":[489,133],"./puppet":[490,134],"./puppet.js":[490,134],"./purebasic":[491,135],"./purebasic.js":[491,135],"./python":[492,136],"./python.js":[492,136],"./q":[493,137],"./q.js":[493,137],"./qml":[494,138],"./qml.js":[494,138],"./r":[495,139],"./r.js":[495,139],"./reasonml":[496,140],"./reasonml.js":[496,140],"./rib":[497,141],"./rib.js":[497,141],"./roboconf":[498,142],"./roboconf.js":[498,142],"./routeros":[499,143],"./routeros.js":[499,143],"./rsl":[500,144],"./rsl.js":[500,144],"./ruby":[501,145],"./ruby.js":[501,145],"./ruleslanguage":[502,146],"./ruleslanguage.js":[502,146],"./rust":[503,147],"./rust.js":[503,147],"./sas":[504,148],"./sas.js":[504,148],"./scala":[505,149],"./scala.js":[505,149],"./scheme":[506,150],"./scheme.js":[506,150],"./scilab":[507,151],"./scilab.js":[507,151],"./scss":[508,152],"./scss.js":[508,152],"./shell":[509,153],"./shell.js":[509,153],"./smali":[510,154],"./smali.js":[510,154],"./smalltalk":[511,155],"./smalltalk.js":[511,155],"./sml":[512,156],"./sml.js":[512,156],"./sqf":[513,157],"./sqf.js":[513,157],"./sql":[514,158],"./sql.js":[514,158],"./stan":[515,159],"./stan.js":[515,159],"./stata":[516,160],"./stata.js":[516,160],"./step21":[517,161],"./step21.js":[517,161],"./stylus":[518,162],"./stylus.js":[518,162],"./subunit":[519,163],"./subunit.js":[519,163],"./swift":[520,164],"./swift.js":[520,164],"./taggerscript":[521,165],"./taggerscript.js":[521,165],"./tap":[522,166],"./tap.js":[522,166],"./tcl":[523,167],"./tcl.js":[523,167],"./tex":[524,168],"./tex.js":[524,168],"./thrift":[525,169],"./thrift.js":[525,169],"./tp":[526,170],"./tp.js":[526,170],"./twig":[527,171],"./twig.js":[527,171],"./typescript":[528,172],"./typescript.js":[528,172],"./vala":[529,173],"./vala.js":[529,173],"./vbnet":[530,174],"./vbnet.js":[530,174],"./vbscript":[532,175],"./vbscript-html":[531,176],"./vbscript-html.js":[531,176],"./vbscript.js":[532,175],"./verilog":[533,177],"./verilog.js":[533,177],"./vhdl":[534,178],"./vhdl.js":[534,178],"./vim":[535,179],"./vim.js":[535,179],"./x86asm":[536,180],"./x86asm.js":[536,180],"./xl":[537,181],"./xl.js":[537,181],"./xml":[538,182],"./xml.js":[538,182],"./xquery":[539,183],"./xquery.js":[539,183],"./yaml":[540,184],"./yaml.js":[540,184],"./zephir":[541,185],"./zephir.js":[541,185]};function n(e){if(!t.o(o,e))return Promise.resolve().then((function(){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}));var r=o[e],n=r[0];return t.e(r[1]).then((function(){return t.t(n,7)}))}n.keys=function(){return Object.keys(o)},n.id=612,e.exports=n},619:function(e,r,t){"use strict";var o=t(337);t.n(o).a},620:function(e,r,t){(e.exports=t(152)(!1)).push([e.i,'#read-only-editor{overflow:scroll}#read-only-editor div.ProseMirror{margin-top:44px;height:100%;position:relative;word-wrap:break-word;white-space:pre-wrap;-webkit-font-variant-ligatures:none;font-variant-ligatures:none;padding:4px 8px 200px 14px;line-height:150%;font-size:14px;outline:none}#read-only-editor div.ProseMirror[contenteditable=true],#read-only-editor div.ProseMirror[contenteditable=false]{border:none !important;width:100%;background-color:transparent;color:var(--color-main-text);opacity:1;-webkit-user-select:text;user-select:text;font-size:14px}#read-only-editor div.ProseMirror p:first-child,#read-only-editor div.ProseMirror h1:first-child,#read-only-editor div.ProseMirror h2:first-child,#read-only-editor div.ProseMirror h3:first-child,#read-only-editor div.ProseMirror h4:first-child,#read-only-editor div.ProseMirror h5:first-child,#read-only-editor div.ProseMirror h6:first-child{margin-top:10px}#read-only-editor div.ProseMirror a{color:var(--color-primary-element);text-decoration:underline;padding:.5em 0}#read-only-editor div.ProseMirror p{margin-bottom:1em;line-height:150%}#read-only-editor div.ProseMirror em{font-style:italic}#read-only-editor div.ProseMirror h1,#read-only-editor div.ProseMirror h2,#read-only-editor div.ProseMirror h3,#read-only-editor div.ProseMirror h4,#read-only-editor div.ProseMirror h5,#read-only-editor div.ProseMirror h6{font-weight:600;line-height:120%;margin-top:24px;margin-bottom:12px;color:var(--color-main-text)}#read-only-editor div.ProseMirror h1{font-size:36px;margin-top:48px}#read-only-editor div.ProseMirror h2{font-size:28px;margin-top:48px}#read-only-editor div.ProseMirror h3{font-size:24px}#read-only-editor div.ProseMirror h4{font-size:21px}#read-only-editor div.ProseMirror h5{font-size:17px}#read-only-editor div.ProseMirror h6{font-size:14px}#read-only-editor div.ProseMirror img{cursor:default;max-width:100%}#read-only-editor div.ProseMirror hr{padding:2px 0;border:none;margin:1em 0;width:100%}#read-only-editor div.ProseMirror hr:after{content:"";display:block;height:1px;background-color:var(--color-border-dark);line-height:2px}#read-only-editor div.ProseMirror pre{white-space:pre-wrap;background-color:var(--color-background-dark);border-radius:var(--border-radius);padding:1em 1.3em;margin-bottom:1em}#read-only-editor div.ProseMirror p code{background-color:var(--color-background-dark);border-radius:var(--border-radius);padding:.1em .3em}#read-only-editor div.ProseMirror li{position:relative}#read-only-editor div.ProseMirror ul,#read-only-editor div.ProseMirror ol{padding-left:14px}#read-only-editor div.ProseMirror ul li{list-style-type:disc}#read-only-editor div.ProseMirror ul>li>ul>li{list-style-type:circle}#read-only-editor div.ProseMirror ul>li>ul>li ul li{list-style-type:square}#read-only-editor div.ProseMirror blockquote{padding-left:1em;border-left:4px solid var(--color-primary-element);color:var(--color-text-maxcontrast);margin-left:0;margin-right:0}#read-only-editor .ProseMirror-focused .ProseMirror-gapcursor{display:block}#read-only-editor .editor__content p.is-empty:first-child::before{content:attr(data-empty-text);float:left;color:var(--color-text-maxcontrast);pointer-events:none;height:0}.thumbnailContainer #read-only-editor{width:100%}.thumbnailContainer #read-only-editor .ProseMirror{height:auto;margin:0 0 0 0;padding:0}\n',""])},621:function(e,r,t){"use strict";var o=t(338);t.n(o).a},622:function(e,r,t){(e.exports=t(152)(!1)).push([e.i,'div.ProseMirror{margin-top:44px;height:100%;position:relative;word-wrap:break-word;white-space:pre-wrap;-webkit-font-variant-ligatures:none;font-variant-ligatures:none;padding:4px 8px 200px 14px;line-height:150%;font-size:14px;outline:none}div.ProseMirror[contenteditable=true],div.ProseMirror[contenteditable=false]{border:none !important;width:100%;background-color:transparent;color:var(--color-main-text);opacity:1;-webkit-user-select:text;user-select:text;font-size:14px}div.ProseMirror p:first-child,div.ProseMirror h1:first-child,div.ProseMirror h2:first-child,div.ProseMirror h3:first-child,div.ProseMirror h4:first-child,div.ProseMirror h5:first-child,div.ProseMirror h6:first-child{margin-top:10px}div.ProseMirror a{color:var(--color-primary-element);text-decoration:underline;padding:.5em 0}div.ProseMirror p{margin-bottom:1em;line-height:150%}div.ProseMirror em{font-style:italic}div.ProseMirror h1,div.ProseMirror h2,div.ProseMirror h3,div.ProseMirror h4,div.ProseMirror h5,div.ProseMirror h6{font-weight:600;line-height:120%;margin-top:24px;margin-bottom:12px;color:var(--color-main-text)}div.ProseMirror h1{font-size:36px;margin-top:48px}div.ProseMirror h2{font-size:28px;margin-top:48px}div.ProseMirror h3{font-size:24px}div.ProseMirror h4{font-size:21px}div.ProseMirror h5{font-size:17px}div.ProseMirror h6{font-size:14px}div.ProseMirror img{cursor:default;max-width:100%}div.ProseMirror hr{padding:2px 0;border:none;margin:1em 0;width:100%}div.ProseMirror hr:after{content:"";display:block;height:1px;background-color:var(--color-border-dark);line-height:2px}div.ProseMirror pre{white-space:pre-wrap;background-color:var(--color-background-dark);border-radius:var(--border-radius);padding:1em 1.3em;margin-bottom:1em}div.ProseMirror p code{background-color:var(--color-background-dark);border-radius:var(--border-radius);padding:.1em .3em}div.ProseMirror li{position:relative}div.ProseMirror ul,div.ProseMirror ol{padding-left:14px}div.ProseMirror ul li{list-style-type:disc}div.ProseMirror ul>li>ul>li{list-style-type:circle}div.ProseMirror ul>li>ul>li ul li{list-style-type:square}div.ProseMirror blockquote{padding-left:1em;border-left:4px solid var(--color-primary-element);color:var(--color-text-maxcontrast);margin-left:0;margin-right:0}.ProseMirror-focused .ProseMirror-gapcursor{display:block}.editor__content p.is-empty:first-child::before{content:attr(data-empty-text);float:left;color:var(--color-text-maxcontrast);pointer-events:none;height:0}\n',""])},639:function(e,r,t){"use strict";t.r(r);var o=t(319),n=t(345),i=t.n(n),a=t(542),s={name:"ReadOnlyEditor",components:{EditorContent:o.b},props:{content:{type:String,required:!0},isRichEditor:{type:Boolean,default:!0}},data:function(){return{editor:null}},mounted:function(){this.editor=Object(a.a)({content:this.isRichEditor?a.d.render(this.content):"<pre>"+i()(this.content)+"</pre>",enableRichEditing:this.isRichEditor}),this.editor.setOptions({editable:!1})},beforeDestroy:function(){this.editor.destroy()}},l=(t(619),t(621),t(50)),c=Object(l.a)(s,(function(){var e=this.$createElement,r=this._self._c||e;return this.editor?r("EditorContent",{attrs:{id:"read-only-editor",editor:this.editor}}):this._e()}),[],!1,null,null,null);r.default=c.exports}}]);
//# sourceMappingURL=preview.js.map?v=a764c28d8466fe7a27de