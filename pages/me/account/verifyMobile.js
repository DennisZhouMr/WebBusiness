(wx.webpackJsonp=wx.webpackJsonp||[]).push([[103],{"255":function(e,t,o){"use strict";o.r(t);var n=o(77),r=o.n(n);for(var a in n)"default"!==a&&function(e){o.d(t,e,function(){return n[e]})}(a);t.default=r.a},"438":function(e,t,o){e.exports=o.p+"pages/me/account/verifyMobile.wxml"},"696":function(e,t,o){"use strict";o.r(t);o(697);var n=o(255);for(var r in n)"default"!==r&&function(e){o.d(t,e,function(){return n[e]})}(r)},"697":function(e,t,o){"use strict";o(438)},"77":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var Y=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,t){var o=[],n=!0,r=!1,a=void 0;try{for(var i,s=e[Symbol.iterator]();!(n=(i=s.next()).done)&&(o.push(i.value),!t||o.length!==t);n=!0);}catch(e){r=!0,a=e}finally{try{!n&&s.return&&s.return()}finally{if(r)throw a}}return o}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},n=function(e,t,o){return t&&defineProperties(e.prototype,t),o&&defineProperties(e,o),e};function defineProperties(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var r,a,Z=o(0),ee=function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}(Z),i=o(6);function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}o(7);var s=(function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(_TaroComponentClass,Z.Component),n(_TaroComponentClass,[{"key":"_constructor","value":function _constructor(e){(function get(e,t,o){null===e&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,t);if(void 0===n){var r=Object.getPrototypeOf(e);return null===r?void 0:get(r,t,o)}if("value"in n)return n.value;var a=n.get;return void 0!==a?a.call(o):void 0})(_TaroComponentClass.prototype.__proto__||Object.getPrototypeOf(_TaroComponentClass.prototype),"_constructor",this).call(this,e),this.$$refs=new ee.default.RefsArray}},{"key":"countDown","value":function countDown(){var e=this,t=this.state.count;1===t?this.setState({"show_btn":!0,"count":60,"code_ts":"获取验证码"}):(this.setState({"count":t-1,"show_btn":!1,"code_ts":t+"S重发"}),setTimeout(function(){return e.countDown()},1e3))}},{"key":"_createData","value":function _createData(e,t,o){this.__state=e||this.state||{},this.__props=t||this.props||{};var n=this.$prefix,r=(0,Z.genCompid)(n+"$compid__1607"),a=Y(r,2),i=a[0],s=a[1],c=(0,Z.genCompid)(n+"$compid__1608"),u=Y(c,2),p=u[0],l=u[1],_=(0,Z.genCompid)(n+"$compid__1609"),d=Y(_,2),m=d[0],f=d[1],h=(0,Z.genCompid)(n+"$compid__1610"),y=Y(h,2),b=y[0],C=y[1],g=(0,Z.genCompid)(n+"$compid__1611"),v=Y(g,2),$=v[0],w=v[1],S=(0,Z.genCompid)(n+"$compid__1612"),M=Y(S,2),O=M[0],T=M[1],k=(0,Z.genCompid)(n+"$compid__1613"),j=Y(k,2),P=j[0],x=j[1],A=(0,Z.genCompid)(n+"$compid__1614"),D=Y(A,2),B=D[0],R=D[1],F=(0,Z.genCompid)(n+"$compid__1615"),N=Y(F,2),E=N[0],I=N[1],z=(0,Z.genCompid)(n+"$compid__1616"),G=Y(z,2),J=G[0],q=G[1],H=this.__state,K=H.mobile,L=H.code,Q=H.isShowButton,U=H.show_btn,V=(H.code_ts,{"background":"linear-gradient(#fff, #f5f5f5)"}),W=!U,X="code-button "+(U?"code-primary":"code-secondary");return this.anonymousFunc0=function(){ee.default.navigateBack()},Z.propsManager.set({"background":V},s,i),Z.propsManager.set({"text":"换绑定手机号"},l,p),Z.propsManager.set({"className":"common-form verifyMobile-form"},f,m),Z.propsManager.set({"prefixClass":"icon","value":"telephone","size":"16","color":"#848484"},C,b),Z.propsManager.set({"className":"code-input","name":"mobile","title":"","type":"phone","placeholder":"请输入手机号","value":K,"onChange":this.handleMobileChange},w,$),Z.propsManager.set({"type":"primary","size":"small","disabled":W,"className":X,"onClick":this.handleGetCode},T,O),Z.propsManager.set({"prefixClass":"icon","value":"security","size":"16","color":"#848484"},x,P),Z.propsManager.set({"clear":!0,"name":"code","type":"number","placeholder":"短信验证码","value":L,"onChange":this.handleCodeChange},R,B),Q&&Z.propsManager.set({"className":"default-button primary-button","onClick":this.handleSubmit},I,E),Q||Z.propsManager.set({"type":"secondary","className":"default-button","onClick":this.anonymousFunc0},q,J),Object.assign(this.__state,{"anonymousState__temp":V,"anonymousState__temp2":W,"anonymousState__temp3":X,"$compid__1607":s,"$compid__1608":l,"$compid__1609":f,"$compid__1610":C,"$compid__1611":w,"$compid__1612":T,"$compid__1613":x,"$compid__1614":R,"$compid__1615":I,"$compid__1616":q}),this.__state}},{"key":"anonymousFunc0","value":function anonymousFunc0(){}}]),a=r=_TaroComponentClass,r.$$events=[],r.$$componentPath="pages/me/account/verifyMobile",a);function _TaroComponentClass(){var e,t,o;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,_TaroComponentClass);for(var n=arguments.length,r=Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=o=_possibleConstructorReturn(this,(e=_TaroComponentClass.__proto__||Object.getPrototypeOf(_TaroComponentClass)).call.apply(e,[this].concat(r)))).$usedState=["anonymousState__temp","anonymousState__temp2","anonymousState__temp3","$compid__1607","$compid__1608","$compid__1609","$compid__1610","$compid__1611","$compid__1612","$compid__1613","$compid__1614","$compid__1615","$compid__1616","isShowButton","code_ts","mobile","code","show_btn","count"],o.config={"navigationBarTitleText":"换绑定手机号"},o.state={"mobile":"","code":"","isShowButton":!1,"show_btn":!0,"count":60,"code_ts":"获取验证码"},o.handleMobileChange=function(e){o.setState({"mobile":e})},o.handleCodeChange=function(e){o.setState({"code":e,"isShowButton":!0})},o.handleGetCode=function(){var e=o.state.mobile;if(!(0,i.isMobile)(e))return ee.default.showToast({"title":"手机号输入有误","icon":"none","duration":2e3}),!1;o.countDown()},o.handleSubmit=function(){ee.default.redirectTo({"url":"/pages/me/account/bindNewMobile"})},o.customComponents=["Root","Caption","AtForm","AtIcon","AtInput","AtButton"],_possibleConstructorReturn(o,t)}t.default=s,Component(o(0).default.createComponent(s,!0))}},[[696,0,1,2]]]);