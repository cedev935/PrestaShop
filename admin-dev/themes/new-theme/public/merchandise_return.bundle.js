window.merchandise_return=function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=502)}({0:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},1:function(e,t,n){"use strict";t.__esModule=!0;var r=n(19),o=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,o.default)(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()},10:function(e,t,n){var r=n(6),o=n(12);e.exports=n(2)?function(e,t,n){return r.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},11:function(e,t,n){var r=n(4);e.exports=function(e){if(!r(e))throw TypeError(e+" is not an object!");return e}},12:function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},13:function(e,t,n){var r=n(4);e.exports=function(e,t){if(!r(e))return e;var n,o;if(t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;if("function"==typeof(n=e.valueOf)&&!r(o=n.call(e)))return o;if(!t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},15:function(e,t,n){var r=n(18);e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}}},16:function(e,t,n){var r=n(4),o=n(5).document,i=r(o)&&r(o.createElement);e.exports=function(e){return i?o.createElement(e):{}}},17:function(e,t,n){e.exports=!n(2)&&!n(7)(function(){return 7!=Object.defineProperty(n(16)("div"),"a",{get:function(){return 7}}).a})},18:function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},19:function(e,t,n){e.exports={default:n(20),__esModule:!0}},2:function(e,t,n){e.exports=!n(7)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},20:function(e,t,n){n(21);var r=n(3).Object;e.exports=function(e,t,n){return r.defineProperty(e,t,n)}},21:function(e,t,n){var r=n(8);r(r.S+r.F*!n(2),"Object",{defineProperty:n(6).f})},23:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),i=r(o),u=n(1),s=r(u),c=window.$,a=function(){function e(t){(0,i.default)(this,e),this.id=t,this.$container=c("#"+this.id+"_grid")}return(0,s.default)(e,[{key:"getId",value:function(){return this.id}},{key:"getContainer",value:function(){return this.$container}},{key:"getHeaderContainer",value:function(){return this.$container.closest(".js-grid-panel").find(".js-grid-header")}},{key:"addExtension",value:function(e){e.extend(this)}}]),e}();t.default=a},24:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),i=r(o),u=n(1),s=r(u),c=n(42),a=r(c),f=window.$,l=function(){function e(){(0,i.default)(this,e)}return(0,s.default)(e,[{key:"extend",value:function(e){e.getContainer().on("click",".js-reset-search",function(e){(0,a.default)(f(e.currentTarget).data("url"),f(e.currentTarget).data("redirect"))})}}]),e}();t.default=l},25:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),i=r(o),u=n(1),s=r(u),c=n(40),a=r(c),f=function(){function e(){(0,i.default)(this,e)}return(0,s.default)(e,[{key:"extend",value:function(e){var t=e.getContainer().find("table.table");new a.default(t).attach()}}]),e}();/**
      * 2007-2020 PrestaShop SA and Contributors
      *
      * NOTICE OF LICENSE
      *
      * This source file is subject to the Open Software License (OSL 3.0)
      * that is bundled with this package in the file LICENSE.txt.
      * It is also available through the world-wide-web at this URL:
      * https://opensource.org/licenses/OSL-3.0
      * If you did not receive a copy of the license and are unable to
      * obtain it through the world-wide-web, please send an email
      * to license@prestashop.com so we can send you a copy immediately.
      *
      * DISCLAIMER
      *
      * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
      * versions in the future. If you wish to customize PrestaShop for your
      * needs please refer to https://www.prestashop.com for more information.
      *
      * @author    PrestaShop SA <contact@prestashop.com>
      * @copyright 2007-2020 PrestaShop SA and Contributors
      * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
      * International Registered Trademark & Property of PrestaShop SA
      */
t.default=f},3:function(e,t){var n=e.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},30:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),i=r(o),u=n(1),s=r(u),c=function(){function e(){(0,i.default)(this,e)}return(0,s.default)(e,[{key:"extend",value:function(e){var t=e.getContainer().find(".column-filters");t.find(".grid-search-button").prop("disabled",!0),t.find("input:not(.js-bulk-action-select-all), select").on("input dp.change",function(){t.find(".grid-search-button").prop("disabled",!1),t.find(".js-grid-reset-button").prop("hidden",!1)})}}]),e}();t.default=c},36:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EventEmitter=void 0;var r=n(53),o=function(e){return e&&e.__esModule?e:{default:e}}(r);t.EventEmitter=new o.default},4:function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},40:function(e,t,n){"use strict";(function(e){function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),i=r(o),u=n(1),s=r(u),c=e.$,a=function(){function e(t){(0,i.default)(this,e),this.selector=".ps-sortable-column",this.columns=c(t).find(this.selector)}return(0,s.default)(e,[{key:"attach",value:function(){var e=this;this.columns.on("click",function(t){var n=c(t.delegateTarget);e._sortByColumn(n,e._getToggledSortDirection(n))})}},{key:"sortBy",value:function(e,t){var n=this.columns.is('[data-sort-col-name="'+e+'"]');if(!n)throw new Error('Cannot sort by "'+e+'": invalid column');this._sortByColumn(n,t)}},{key:"_sortByColumn",value:function(e,t){window.location=this._getUrl(e.data("sortColName"),"desc"===t?"desc":"asc",e.data("sortPrefix"))}},{key:"_getToggledSortDirection",value:function(e){return"asc"===e.data("sortDirection")?"desc":"asc"}},{key:"_getUrl",value:function(e,t,n){var r=new URL(window.location.href),o=r.searchParams;return n?(o.set(n+"[orderBy]",e),o.set(n+"[sortOrder]",t)):(o.set("orderBy",e),o.set("sortOrder",t)),r.toString()}}]),e}();t.default=a}).call(t,n(9))},42:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});/**
 * 2007-2020 PrestaShop SA and Contributors
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2020 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */
var n=e.$,r=function(e,t){n.post(e).then(function(){return window.location.assign(t)})};t.default=r}).call(t,n(9))},44:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),i=r(o),u=n(1),s=r(u),c=n(36),a=window.$,f=function(){function e(t){(0,i.default)(this,e),t=t||{},this.localeItemSelector=t.localeItemSelector||".js-locale-item",this.localeButtonSelector=t.localeButtonSelector||".js-locale-btn",this.localeInputSelector=t.localeInputSelector||".js-locale-input",a("body").on("click",this.localeItemSelector,this.toggleLanguage.bind(this)),c.EventEmitter.on("languageSelected",this.toggleInputs.bind(this))}return(0,s.default)(e,[{key:"toggleLanguage",value:function(e){var t=a(e.target),n=t.closest("form");c.EventEmitter.emit("languageSelected",{selectedLocale:t.data("locale"),form:n})}},{key:"toggleInputs",value:function(e){var t=e.form,n=e.selectedLocale,r=t.find(this.localeButtonSelector),o=r.data("change-language-url");r.text(n),t.find(this.localeInputSelector).addClass("d-none"),t.find(this.localeInputSelector+".js-locale-"+n).removeClass("d-none"),o&&this._saveSelectedLanguage(o,n)}},{key:"_saveSelectedLanguage",value:function(e,t){a.post({url:e,data:{language_iso_code:t}})}}]),e}();t.default=f},5:function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},502:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(23),i=r(o),u=n(25),s=r(u),c=n(24),a=r(c),f=n(30),l=r(f),d=n(44),p=r(d);/**
                   * 2007-2020 PrestaShop SA and Contributors
                   *
                   * NOTICE OF LICENSE
                   *
                   * This source file is subject to the Open Software License (OSL 3.0)
                   * that is bundled with this package in the file LICENSE.txt.
                   * It is also available through the world-wide-web at this URL:
                   * https://opensource.org/licenses/OSL-3.0
                   * If you did not receive a copy of the license and are unable to
                   * obtain it through the world-wide-web, please send an email
                   * to license@prestashop.com so we can send you a copy immediately.
                   *
                   * DISCLAIMER
                   *
                   * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
                   * versions in the future. If you wish to customize PrestaShop for your
                   * needs please refer to https://www.prestashop.com for more information.
                   *
                   * @author    PrestaShop SA <contact@prestashop.com>
                   * @copyright 2007-2020 PrestaShop SA and Contributors
                   * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
                   * International Registered Trademark & Property of PrestaShop SA
                   */
(0,window.$)(function(){var e=new i.default("merchandise_return");e.addExtension(new s.default),e.addExtension(new a.default),e.addExtension(new l.default),new p.default})},53:function(e,t,n){"use strict";function r(e){console&&console.warn&&console.warn(e)}function o(){o.init.call(this)}function i(e){return void 0===e._maxListeners?o.defaultMaxListeners:e._maxListeners}function u(e,t,n,o){var u,s,c;if("function"!=typeof n)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof n);if(s=e._events,void 0===s?(s=e._events=Object.create(null),e._eventsCount=0):(void 0!==s.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),s=e._events),c=s[t]),void 0===c)c=s[t]=n,++e._eventsCount;else if("function"==typeof c?c=s[t]=o?[n,c]:[c,n]:o?c.unshift(n):c.push(n),(u=i(e))>0&&c.length>u&&!c.warned){c.warned=!0;var a=new Error("Possible EventEmitter memory leak detected. "+c.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");a.name="MaxListenersExceededWarning",a.emitter=e,a.type=t,a.count=c.length,r(a)}return e}function s(){for(var e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);this.fired||(this.target.removeListener(this.type,this.wrapFn),this.fired=!0,y(this.listener,this.target,e))}function c(e,t,n){var r={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},o=s.bind(r);return o.listener=n,r.wrapFn=o,o}function a(e,t,n){var r=e._events;if(void 0===r)return[];var o=r[t];return void 0===o?[]:"function"==typeof o?n?[o.listener||o]:[o]:n?p(o):l(o,o.length)}function f(e){var t=this._events;if(void 0!==t){var n=t[e];if("function"==typeof n)return 1;if(void 0!==n)return n.length}return 0}function l(e,t){for(var n=new Array(t),r=0;r<t;++r)n[r]=e[r];return n}function d(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}function p(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}var v,h="object"==typeof Reflect?Reflect:null,y=h&&"function"==typeof h.apply?h.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)};v=h&&"function"==typeof h.ownKeys?h.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var g=Number.isNaN||function(e){return e!==e};e.exports=o,o.EventEmitter=o,o.prototype._events=void 0,o.prototype._eventsCount=0,o.prototype._maxListeners=void 0;var _=10;Object.defineProperty(o,"defaultMaxListeners",{enumerable:!0,get:function(){return _},set:function(e){if("number"!=typeof e||e<0||g(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");_=e}}),o.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},o.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||g(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},o.prototype.getMaxListeners=function(){return i(this)},o.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var r="error"===e,o=this._events;if(void 0!==o)r=r&&void 0===o.error;else if(!r)return!1;if(r){var i;if(t.length>0&&(i=t[0]),i instanceof Error)throw i;var u=new Error("Unhandled error."+(i?" ("+i.message+")":""));throw u.context=i,u}var s=o[e];if(void 0===s)return!1;if("function"==typeof s)y(s,this,t);else for(var c=s.length,a=l(s,c),n=0;n<c;++n)y(a[n],this,t);return!0},o.prototype.addListener=function(e,t){return u(this,e,t,!1)},o.prototype.on=o.prototype.addListener,o.prototype.prependListener=function(e,t){return u(this,e,t,!0)},o.prototype.once=function(e,t){if("function"!=typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t);return this.on(e,c(this,e,t)),this},o.prototype.prependOnceListener=function(e,t){if("function"!=typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t);return this.prependListener(e,c(this,e,t)),this},o.prototype.removeListener=function(e,t){var n,r,o,i,u;if("function"!=typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t);if(void 0===(r=this._events))return this;if(void 0===(n=r[e]))return this;if(n===t||n.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!=typeof n){for(o=-1,i=n.length-1;i>=0;i--)if(n[i]===t||n[i].listener===t){u=n[i].listener,o=i;break}if(o<0)return this;0===o?n.shift():d(n,o),1===n.length&&(r[e]=n[0]),void 0!==r.removeListener&&this.emit("removeListener",e,u||t)}return this},o.prototype.off=o.prototype.removeListener,o.prototype.removeAllListeners=function(e){var t,n,r;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete n[e]),this;if(0===arguments.length){var o,i=Object.keys(n);for(r=0;r<i.length;++r)"removeListener"!==(o=i[r])&&this.removeAllListeners(o);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=n[e]))this.removeListener(e,t);else if(void 0!==t)for(r=t.length-1;r>=0;r--)this.removeListener(e,t[r]);return this},o.prototype.listeners=function(e){return a(this,e,!0)},o.prototype.rawListeners=function(e){return a(this,e,!1)},o.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):f.call(e,t)},o.prototype.listenerCount=f,o.prototype.eventNames=function(){return this._eventsCount>0?v(this._events):[]}},6:function(e,t,n){var r=n(11),o=n(17),i=n(13),u=Object.defineProperty;t.f=n(2)?Object.defineProperty:function(e,t,n){if(r(e),t=i(t,!0),r(n),o)try{return u(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},7:function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},8:function(e,t,n){var r=n(5),o=n(3),i=n(15),u=n(10),s=function(e,t,n){var c,a,f,l=e&s.F,d=e&s.G,p=e&s.S,v=e&s.P,h=e&s.B,y=e&s.W,g=d?o:o[t]||(o[t]={}),_=g.prototype,m=d?r:p?r[t]:(r[t]||{}).prototype;d&&(n=t);for(c in n)(a=!l&&m&&void 0!==m[c])&&c in g||(f=a?m[c]:n[c],g[c]=d&&"function"!=typeof m[c]?n[c]:h&&a?i(f,r):y&&m[c]==f?function(e){var t=function(t,n,r){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,r)}return e.apply(this,arguments)};return t.prototype=e.prototype,t}(f):v&&"function"==typeof f?i(Function.call,f):f,v&&((g.virtual||(g.virtual={}))[c]=f,e&s.R&&_&&!_[c]&&u(_,c,f)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,e.exports=s},9:function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n}});