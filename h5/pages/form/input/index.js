"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _index = require("../../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var verificationCode = "/assets/images/verification_code.png";

var Index = function (_Taro$Component) {
  _inherits(Index, _Taro$Component);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "verificationCode", "value1", "value2", "value3", "value4", "value5", "value6", "value7", "value8", "value9", "value10", "value13", "value14", "value15", "disabled", "second", "value11"], _this.config = {
      navigationBarTitleText: 'Taro UI'
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: "_constructor",
    value: function _constructor() {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        value1: '',
        value2: '',
        value3: '',
        value4: '',
        value5: '',
        value6: '',
        value7: '',
        value8: '',
        value9: '',
        value10: '',
        value13: '',
        value14: '',
        value15: '',
        disabled: false,
        second: 60
      };
    }
  }, {
    key: "showTipText",
    value: function showTipText() {
      return this.state.disabled ? this.state.second + "s\u540E\u91CD\u8BD5" : '发送验证码';
    }
  }, {
    key: "sendCode",
    value: function sendCode() {
      var _this2 = this;

      if (this.state.disabled) {
        return;
      }this.setState({
        disabled: true
      });
      // 倒计时
      var timer = setInterval(function () {
        if (_this2.state.second > 0) {
          _this2.setState({
            second: _this2.state.second - 1
          });
        } else {
          _this2.setState({
            second: 60,
            disabled: false
          });
          clearInterval(timer);
        }
      }, 1000);
    }
  }, {
    key: "handleInput",
    value: function handleInput(stateName, value) {
      this.setState(_defineProperty({}, stateName, value));
    }
  }, {
    key: "handleClick",
    value: function handleClick() {
      _index2.default.showToast({
        title: '已发送验证码',
        icon: 'success',
        duration: 2000
      });
    }
  }, {
    key: "onClickErrorIcon",
    value: function onClickErrorIcon() {
      _index2.default.showToast({
        title: '请输入数字',
        icon: 'success',
        duration: 2000
      });
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};

      _objectDestructuringEmpty(this);

      var anonymousState__temp = (0, _index.internal_inline_style)({
        'color': this.__state.disabled ? '#FF4949' : '',
        'fontSize': '12px',
        'width': '90px'
      });
      var anonymousState__temp2 = this.showTipText();
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        verificationCode: verificationCode
      });
      return this.__state;
    }
  }]);

  return Index;
}(_index2.default.Component);

Index.properties = {};
Index.$$events = ["handleInput", "onClickErrorIcon", "sendCode"];
exports.default = Index;

Component(require('../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Index, true));