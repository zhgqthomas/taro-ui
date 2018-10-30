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

var Index = function (_Taro$Component) {
  _inherits(Index, _Taro$Component);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["selector", "selectorValue", "multiSelector", "mulitSelectorValues", "timeSel", "dateSel"], _this.config = {
      navigationBarTitleText: 'Taro UI'
    }, _this.state = {
      selector: ['中国', '美国', '巴西', '日本'],
      multiSelector: [['饭', '粥', '粉'], ['猪肉', '牛肉']],
      selectorValue: 0,
      mulitSelectorValues: [0, 1],
      timeSel: '06:18',
      dateSel: '2018-06-18'
    }, _this.handleChange = function (e) {
      _this.setState({
        selectorValue: e.detail.value
      });
    }, _this.handleMulitChange = function (e) {
      _this.setState({
        mulitSelectorValues: e.detail.value
      });
    }, _this.handleTimeChange = function (e) {
      _this.setState({
        timeSel: e.detail.value
      });
    }, _this.handleDateChange = function (e) {
      _this.setState({
        dateSel: e.detail.value
      });
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), "_constructor", this).call(this, props);
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};

      _objectDestructuringEmpty(this);

      var _state = this.__state,
          selector = _state.selector,
          selectorValue = _state.selectorValue,
          multiSelector = _state.multiSelector,
          mulitSelectorValues = _state.mulitSelectorValues,
          timeSel = _state.timeSel,
          dateSel = _state.dateSel;


      Object.assign(this.__state, {});
      return this.__state;
    }
  }]);

  return Index;
}(_index2.default.Component);

Index.properties = {};
Index.$$events = ["handleChange", "handleMulitChange", "handleTimeChange", "handleDateChange"];
exports.default = Index;

Component(require('../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Index, true));