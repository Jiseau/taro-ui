(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"127":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var o=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),r=function get(e,t,n){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,t);if(void 0===o){var r=Object.getPrototypeOf(e);return null===r?void 0:get(r,t,n)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(n):void 0},a=_interopRequireDefault(n(1)),i=_interopRequireDefault(n(4)),l=n(131),c=n(138),u=_interopRequireDefault(n(133));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(546);var s=[{"url":"https://storage.360buyimg.com/mtd/home/111543234387022.jpg"},{"url":"https://storage.360buyimg.com/mtd/home/221543234387016.jpg"},{"url":"https://storage.360buyimg.com/mtd/home/331543234387025.jpg"}],p=function(e){function Index(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Index);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Index.__proto__||Object.getPrototypeOf(Index)).apply(this,arguments));return e.config={"navigationBarTitleText":"Taro UI"},e.state={"files1":Array.from(s),"files2":Array.from(s),"files3":Array.from(s),"files4":s.concat([{"url":"https://storage.360buyimg.com/mtd/home/36549825_887087111478302_5745542532574478336_n1543234831971.jpg"}])},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Index,i.default.Component),o(Index,[{"key":"onChange","value":function onChange(e,t){this.setState(function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{"value":n,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=n,e}({},e,t))}},{"key":"onFail","value":function onFail(e){console.log(e)}},{"key":"onImageClick","value":function onImageClick(e,t){console.log(e,t)}},{"key":"render","value":function render(){return a.default.createElement(l.View,{"className":"page"},a.default.createElement(u.default,{"title":"ImagePicker 图片选择器"}),a.default.createElement(l.View,{"className":"doc-body"},a.default.createElement(l.View,{"className":"panel"},a.default.createElement(l.View,{"className":"panel__title"},"基础用法"),a.default.createElement(l.View,{"className":"panel__content no-padding"},a.default.createElement(l.View,{"className":"example-item"},a.default.createElement(c.AtImagePicker,{"files":this.state.files1,"onChange":this.onChange.bind(this,"files1")})))),a.default.createElement(l.View,{"className":"panel"},a.default.createElement(l.View,{"className":"panel__title"},"多选图片"),a.default.createElement(l.View,{"className":"panel__content no-padding"},a.default.createElement(l.View,{"className":"example-item"},a.default.createElement(c.AtImagePicker,{"multiple":!0,"files":this.state.files2,"onChange":this.onChange.bind(this,"files2"),"onFail":this.onFail.bind(this),"onImageClick":this.onImageClick.bind(this)})))),a.default.createElement(l.View,{"className":"panel"},a.default.createElement(l.View,{"className":"panel__title"},"自定义每行数量"),a.default.createElement(l.View,{"className":"panel__content no-padding"},a.default.createElement(l.View,{"className":"example-item"},a.default.createElement(c.AtImagePicker,{"multiple":!0,"length":3,"files":this.state.files3,"onChange":this.onChange.bind(this,"files3")})))),a.default.createElement(l.View,{"className":"panel"},a.default.createElement(l.View,{"className":"panel__title"},"更改图片的缩放模式"),a.default.createElement(l.View,{"className":"panel__content no-padding"},a.default.createElement(l.View,{"className":"example-item"},a.default.createElement(c.AtImagePicker,{"mode":"aspectFit","multiple":!0,"files":this.state.files4,"onChange":this.onChange.bind(this,"files4")}))))))}},{"key":"componentDidMount","value":function componentDidMount(){r(Index.prototype.__proto__||Object.getPrototypeOf(Index.prototype),"componentDidMount",this)&&r(Index.prototype.__proto__||Object.getPrototypeOf(Index.prototype),"componentDidMount",this).call(this)}},{"key":"componentDidShow","value":function componentDidShow(){r(Index.prototype.__proto__||Object.getPrototypeOf(Index.prototype),"componentDidShow",this)&&r(Index.prototype.__proto__||Object.getPrototypeOf(Index.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){r(Index.prototype.__proto__||Object.getPrototypeOf(Index.prototype),"componentDidHide",this)&&r(Index.prototype.__proto__||Object.getPrototypeOf(Index.prototype),"componentDidHide",this).call(this)}}]),Index}();t.default=p},"133":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var o=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),r=_interopRequireDefault(n(1)),a=_interopRequireDefault(n(4)),i=_interopRequireDefault(n(132)),l=n(131);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(134);var c=function(e){function DocsHeader(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,DocsHeader),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(DocsHeader.__proto__||Object.getPrototypeOf(DocsHeader)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(DocsHeader,a.default.Component),o(DocsHeader,[{"key":"render","value":function render(){var e=this.props.title;return r.default.createElement(l.View,{"className":"doc-header"},r.default.createElement(l.View,{"className":"doc-header__title"},e))}}]),DocsHeader}();t.default=c,c.defaultProps={"title":"标题"},c.propTypes={"title":i.default.string}},"134":function(e,t,n){},"546":function(e,t,n){}}]);