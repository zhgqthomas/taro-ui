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

var BasicColor = function (_Taro$Component) {
  _inherits(BasicColor, _Taro$Component);

  function BasicColor() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, BasicColor);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BasicColor.__proto__ || Object.getPrototypeOf(BasicColor)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["colorData"], _this.config = {
      navigationBarTitleText: 'Taro UI'
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(BasicColor, [{
    key: "_constructor",
    value: function _constructor() {
      _get(BasicColor.prototype.__proto__ || Object.getPrototypeOf(BasicColor.prototype), "_constructor", this).apply(this, arguments);

      this.state = {
        colorData: [{
          type: '主色',
          data: [{
            name: '浅蓝色',
            hex: '#78A4FA'
          }, {
            name: '品牌蓝',
            hex: '#6190E8'
          }, {
            name: '深蓝色',
            hex: '#346FC2'
          }]
        }, {
          type: '辅助色',
          data: [{
            name: '蓝色 - Info',
            hex: '#78A4FA'
          }, {
            name: '绿色 - Positive',
            hex: '#13CE66'
          }, {
            name: '红色 - Negative',
            hex: '#FF4949'
          }, {
            name: '黄色 - Warning',
            hex: '#FFC82C'
          }]
        }, {
          type: '中性色',
          data: [{
            name: '黑色 0',
            hex: '#333333'
          }, {
            name: '黑色 1',
            hex: '#7F7F7F'
          }, {
            name: '黑色 2',
            hex: '#B2B2B2'
          }, {
            name: '灰色 0',
            hex: '#333333'
          }, {
            name: '灰色 1',
            hex: '#666666'
          }, {
            name: '灰色 2',
            hex: '#999999'
          }, {
            name: '灰色 3',
            hex: '#CCCCCC'
          }, {
            name: '灰色 4',
            hex: '#E5E5E5'
          }, {
            name: '灰色 5',
            hex: '#F0F0F0'
          }, {
            name: '灰色 6',
            hex: '#F7F7F7'
          }]
        }, {
          type: '其他色',
          data: [{
            name: '边框可选色',
            hex: '#C5D9E8'
          }, {
            name: '背景色 0',
            hex: '#ECF5FD'
          }, {
            name: '背景色 1',
            hex: '#FAFBFC'
          }]
        }]
      };
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};

      _objectDestructuringEmpty(this);

      var colorData = this.__state.colorData;


      Object.assign(this.__state, {});
      return this.__state;
    }
  }]);

  return BasicColor;
}(_index2.default.Component);

BasicColor.properties = {};
BasicColor.$$events = [];
exports.default = BasicColor;

Component(require('../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(BasicColor, true));