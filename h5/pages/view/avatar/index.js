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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AvatarPage = function (_Taro$Component) {
  _inherits(AvatarPage, _Taro$Component);

  function AvatarPage() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AvatarPage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AvatarPage.__proto__ || Object.getPrototypeOf(AvatarPage)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "anonymousState__temp4", "anonymousState__temp5", "avatarImg"], _this.config = {
      navigationBarTitleText: 'Taro UI'
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AvatarPage, [{
    key: "_constructor",
    value: function _constructor() {
      _get(AvatarPage.prototype.__proto__ || Object.getPrototypeOf(AvatarPage.prototype), "_constructor", this).apply(this, arguments);
      this.state = {};
    }
  }, {
    key: "onClick",
    value: function onClick() {
      // alert('点击了！')
      console.log(arguments);
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};

      _objectDestructuringEmpty(this);

      var avatarImg = 'http://storage.360buyimg.com/mtd/home/32443566_635798770100444_2113947400891531264_n1533825816008.jpg';

      var anonymousState__temp = _index2.default.getEnv() === _index2.default.ENV_TYPE.WEAPP ? { type: 'userAvatarUrl' } : null;
      var anonymousState__temp2 = _index2.default.getEnv() === _index2.default.ENV_TYPE.WEAPP ? { type: 'userAvatarUrl' } : null;
      var anonymousState__temp3 = _index2.default.getEnv() === _index2.default.ENV_TYPE.WEAPP ? { type: 'userAvatarUrl' } : null;
      var anonymousState__temp4 = _index2.default.getEnv() === _index2.default.ENV_TYPE.WEAPP ? { type: 'userAvatarUrl' } : null;
      var anonymousState__temp5 = _index2.default.getEnv() === _index2.default.ENV_TYPE.WEAPP;
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        anonymousState__temp4: anonymousState__temp4,
        anonymousState__temp5: anonymousState__temp5,
        avatarImg: avatarImg
      });
      return this.__state;
    }
  }]);

  return AvatarPage;
}(_index2.default.Component);

AvatarPage.properties = {};
AvatarPage.$$events = [];
exports.default = AvatarPage;

Component(require('../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(AvatarPage, true));