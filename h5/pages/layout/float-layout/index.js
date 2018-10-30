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

var FloatLayoutPage = function (_Taro$Component) {
  _inherits(FloatLayoutPage, _Taro$Component);

  function FloatLayoutPage() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, FloatLayoutPage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FloatLayoutPage.__proto__ || Object.getPrototypeOf(FloatLayoutPage)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["isOpened1", "isOpened2"], _this.config = {
      navigationBarTitleText: 'Taro UI'
    }, _this.handleClick = function (type) {
      _this.setState(_defineProperty({}, "isOpened" + type, true));
    }, _this.handleClose = function (type) {
      console.log('handleClose');
      _this.setState(_defineProperty({}, "isOpened" + type, false));
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(FloatLayoutPage, [{
    key: "_constructor",
    value: function _constructor() {
      _get(FloatLayoutPage.prototype.__proto__ || Object.getPrototypeOf(FloatLayoutPage.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        isOpened1: false,
        isOpened2: false
      };
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};

      _objectDestructuringEmpty(this);

      var _state = this.__state,
          isOpened1 = _state.isOpened1,
          isOpened2 = _state.isOpened2;


      Object.assign(this.__state, {});
      return this.__state;
    }
  }]);

  return FloatLayoutPage;
}(_index2.default.Component);

FloatLayoutPage.properties = {};
FloatLayoutPage.$$events = ["handleClick", "handleClose"];
exports.default = FloatLayoutPage;

Component(require('../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(FloatLayoutPage, true));