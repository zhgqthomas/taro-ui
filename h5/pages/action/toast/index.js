'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _index = require('../../../npm/@tarojs/taro-weapp/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var INIT_STATE = {
  image: '',
  icon: '',
  text: '',
  status: '',
  duration: 3000,
  hasMask: false,
  isOpened: false
};

var ToastPage = function (_BaseComponent) {
  _inherits(ToastPage, _BaseComponent);

  function ToastPage() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ToastPage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ToastPage.__proto__ || Object.getPrototypeOf(ToastPage)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["icon", "text", "image", "status", "hasMask", "isOpened", "duration"], _this.config = {
      navigationBarTitleText: 'Taro UI'
    }, _this.handleClick = function (text, icon, image, hasMask, status) {
      if (_this.state.isOpened) {
        return _this.setState(INIT_STATE);
      }
      var state = Object.assign(_extends({}, INIT_STATE, { isOpened: true }), { text: text, icon: icon, image: image, hasMask: hasMask, status: status });

      _this.setState(state);
    }, _this.handleClose = function () {
      _this.setState({
        isOpened: false
      });
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ToastPage, [{
    key: '_constructor',
    value: function _constructor() {
      _get(ToastPage.prototype.__proto__ || Object.getPrototypeOf(ToastPage.prototype), '_constructor', this).apply(this, arguments);
      this.state = INIT_STATE;
    }
  }, {
    key: '_createData',
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};

      _objectDestructuringEmpty(this);

      var _state = this.__state,
          text = _state.text,
          icon = _state.icon,
          status = _state.status,
          isOpened = _state.isOpened,
          duration = _state.duration,
          image = _state.image,
          hasMask = _state.hasMask;


      Object.assign(this.__state, {
        icon: icon,
        text: text,
        image: image,
        status: status,
        hasMask: hasMask,
        isOpened: isOpened,
        duration: duration
      });
      return this.__state;
    }
  }]);

  return ToastPage;
}(_index.Component);

ToastPage.properties = {};
ToastPage.$$events = ["handleClick", "handleClose"];
exports.default = ToastPage;

Component(require('../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(ToastPage, true));