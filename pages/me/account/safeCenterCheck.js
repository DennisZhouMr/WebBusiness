(wx.webpackJsonp=wx.webpackJsonp||[]).push([[100],{"252":function(e,t,o){"use strict";o.r(t);var n=o(74),r=o.n(n);for(var a in n)"default"!==a&&function(e){o.d(t,e,function(){return n[e]})}(a);t.default=r.a},"435":function(e,t,o){e.exports=o.p+"pages/me/account/safeCenterCheck.wxml"},"690":function(e,t,o){"use strict";o.r(t);o(691);var n=o(252);for(var r in n)"default"!==r&&function(e){o.d(t,e,function(){return n[e]})}(r)},"691":function(e,t,o){"use strict";o(435)},"74":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var $=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,t){var o=[],n=!0,r=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(o.push(i.value),!t||o.length!==t);n=!0);}catch(e){r=!0,a=e}finally{try{!n&&c.return&&c.return()}finally{if(r)throw a}}return o}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},n=function(e,t,o){return t&&defineProperties(e.prototype,t),o&&defineProperties(e,o),e};function defineProperties(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var r,a,w=o(0),x=function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}(w);function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}o(7);var i=(function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(_TaroComponentClass,w.Component),n(_TaroComponentClass,[{"key":"_constructor","value":function _constructor(e){(function get(e,t,o){null===e&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,t);if(void 0===n){var r=Object.getPrototypeOf(e);return null===r?void 0:get(r,t,o)}if("value"in n)return n.value;var a=n.get;return void 0!==a?a.call(o):void 0})(_TaroComponentClass.prototype.__proto__||Object.getPrototypeOf(_TaroComponentClass.prototype),"_constructor",this).call(this,e),this.$$refs=new x.default.RefsArray}},{"key":"_createData","value":function _createData(e,t,o){this.__state=e||this.state||{},this.__props=t||this.props||{};var n=this.$prefix,r=(0,w.genCompid)(n+"$compid__1586"),a=$(r,2),i=a[0],c=a[1],s=(0,w.genCompid)(n+"$compid__1587"),u=$(s,2),p=u[0],l=u[1],f=(0,w.genCompid)(n+"$compid__1588"),_=$(f,2),d=_[0],h=_[1],m=(0,w.genCompid)(n+"$compid__1589"),C=$(m,2),y=C[0],b=C[1],v=this.__state,g=v.checkboxOption,k=v.checked,O={"background":"linear-gradient(#fff, #f5f5f5)"};return this.anonymousFunc0=function(){x.default.navigateTo({"url":"/pages/me/account/index"})},w.propsManager.set({"background":O},c,i),w.propsManager.set({"text":"安全中心"},l,p),w.propsManager.set({"prefixClass":"icon","value":"exclamation-circle","size":"22","color":"#229e8e"},h,d),w.propsManager.set({"options":g,"selectedList":k,"onChange":this.handleCheckChange},b,y),Object.assign(this.__state,{"anonymousState__temp":O,"$compid__1586":c,"$compid__1587":l,"$compid__1588":h,"$compid__1589":b}),this.__state}},{"key":"anonymousFunc0","value":function anonymousFunc0(){}}]),a=r=_TaroComponentClass,r.$$events=["anonymousFunc0"],r.$$componentPath="pages/me/account/safeCenterCheck",a);function _TaroComponentClass(){var e,t,o;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,_TaroComponentClass);for(var n=arguments.length,r=Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=o=_possibleConstructorReturn(this,(e=_TaroComponentClass.__proto__||Object.getPrototypeOf(_TaroComponentClass)).call.apply(e,[this].concat(r)))).$usedState=["anonymousState__temp","$compid__1586","$compid__1587","$compid__1588","$compid__1589","checked","checkboxOption"],o.config={"navigationBarTitleText":"安全中心"},o.state={"checked":[],"checkboxOption":[{"value":"1","label":"我已阅读并同意"}]},o.handleCheckChange=function(e){console.log(e),o.setState({"checked":e})},o.customComponents=["Root","Caption","AtIcon","AtCheckbox"],_possibleConstructorReturn(o,t)}t.default=i,Component(o(0).default.createComponent(i,!0))}},[[690,0,1,2]]]);