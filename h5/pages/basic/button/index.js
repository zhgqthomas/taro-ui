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

// import AtForm from '../../../components/form/index'

var ButtonPage = function (_Taro$Component) {
  _inherits(ButtonPage, _Taro$Component);

  function ButtonPage() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ButtonPage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ButtonPage.__proto__ || Object.getPrototypeOf(ButtonPage)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = [], _this.config = {
      navigationBarTitleText: 'Taro UI'
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ButtonPage, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(ButtonPage.prototype.__proto__ || Object.getPrototypeOf(ButtonPage.prototype), "_constructor", this).call(this, props);
    }
  }, {
    key: "onButtonClick",
    value: function onButtonClick() {
      var content = [].concat(Array.prototype.slice.call(arguments)).find(function (item) {
        return typeof item === 'string';
      });
      var ENV = _index2.default.getEnv();
      if (ENV === 'WEAPP') {
        _index2.default.showModal({ content: content || '您点击了！', showCancel: false });
      } else if (ENV === 'WEB') {
        alert(content || '您点击了！');
      }
    }
  }, {
    key: "onShareAppMessage",
    value: function onShareAppMessage() {
      return {
        title: 'Taro UI',
        path: '/pages/index/index',
        imageUrl: 'http://storage.360buyimg.com/mtd/home/share1535013100318.jpg'
      };
    }
  }, {
    key: "onContact",
    value: function onContact() {
      console.log('呼起客服回调');
    }
  }, {
    key: "onSubmit",
    value: function onSubmit() {
      _index2.default.showModal({ content: "submit event detail: " + JSON.stringify(arguments[0].detail), showCancel: false });
    }
  }, {
    key: "onReset",
    value: function onReset() {
      _index2.default.showModal({ content: "reset event detail: " + JSON.stringify(arguments[0].detail), showCancel: false });
    }
  }, {
    key: "onGetUserInfo",
    value: function onGetUserInfo() {
      console.log('onGetUserInfo', arguments);
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};

      _objectDestructuringEmpty(this);

      Object.assign(this.__state, {});
      return this.__state;
    }
  }]);

  return ButtonPage;
}(_index2.default.Component);

ButtonPage.properties = {};
ButtonPage.$$events = ["onButtonClick", "onContact", "onSubmit", "onReset"];
exports.default = ButtonPage;

Component(require('../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(ButtonPage, true));