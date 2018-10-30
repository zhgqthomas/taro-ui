'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = require('./npm/@tarojs/taro-weapp/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _App = function (_BaseComponent) {
  _inherits(_App, _BaseComponent);

  function _App() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, _App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _App.__proto__ || Object.getPrototypeOf(_App)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      pages: ['pages/index/index', 'pages/panel/index', 'pages/basic/icon/index', 'pages/basic/button/index', 'pages/basic/color/index', 'pages/basic/typo/index', 'pages/view/noticebar/index', 'pages/view/badge/index', 'pages/view/tag/index', 'pages/view/avatar/index', 'pages/view/article/index', 'pages/view/timeline/index', 'pages/view/swiper/index', 'pages/action/toast/index', 'pages/action/modal/index', 'pages/action/progress/index', 'pages/action/action-sheet/index', 'pages/action/swipe-action/index', 'pages/action/activity-indicator/index', 'pages/navigation/drawer/index', 'pages/navigation/pagination/index', 'pages/navigation/tabs/index', 'pages/navigation/tabbar/index', 'pages/navigation/segmented-control/index', 'pages/navigation/navbar/index', 'pages/layout/flex/index', 'pages/layout/grid/index', 'pages/layout/float-layout/index', 'pages/layout/card/index', 'pages/layout/list/index', 'pages/layout/accordion/index', 'pages/form/checkbox/index', 'pages/form/input/index', 'pages/form/input-number/index', 'pages/form/radio/index', 'pages/form/textarea/index', 'pages/form/switch/index', 'pages/form/rate/index', 'pages/form/picker/index', 'pages/form/picker-view/index', 'pages/form/slider/index', 'pages/form/search-bar/index'],
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'black'
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(_App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentDidShow',
    value: function componentDidShow() {}
  }, {
    key: 'componentDidHide',
    value: function componentDidHide() {}
  }, {
    key: 'componentCatchError',
    value: function componentCatchError() {}
  }, {
    key: '_createData',
    value: function _createData() {}
  }]);

  return _App;
}(_index.Component);

exports.default = _App;

App(require('./npm/@tarojs/taro-weapp/index.js').default.createApp(_App));
_index2.default.initPxTransform({
  "designWidth": 750
});