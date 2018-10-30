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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["isWeapp", "value", "years", "months", "days", "year", "month", "day"], _this.config = {
      navigationBarTitleText: 'Taro UI'
    }, _this.handleChange = function (e) {
      var val = e.detail.value;

      _this.setState({
        year: _this.state.years[val[0]],
        month: _this.state.months[val[1]],
        day: _this.state.days[val[2]],
        value: val
      });
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: "_constructor",
    value: function _constructor() {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), "_constructor", this).apply(this, arguments);
      var date = new Date();
      var years = [];
      var months = [];
      var days = [];

      for (var i = 1990; i <= date.getFullYear(); i++) {
        years.push(i);
      }
      for (var _i = 1; _i <= 12; _i++) {
        months.push(_i);
      }
      for (var _i2 = 1; _i2 <= 31; _i2++) {
        days.push(_i2);
      }

      this.state = {
        years: years,
        year: date.getFullYear(),
        months: months,
        month: 2,
        days: days,
        day: 2,
        value: [9999, 5, 17],
        isWeapp: false
      };
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var env = _index2.default.getEnv();
      this.setState({
        isWeapp: env === _index2.default.ENV_TYPE.WEAPP
      });
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};

      _objectDestructuringEmpty(this);

      var _state = this.__state,
          years = _state.years,
          months = _state.months,
          days = _state.days,
          value = _state.value,
          year = _state.year,
          month = _state.month,
          day = _state.day,
          isWeapp = _state.isWeapp;


      Object.assign(this.__state, {});
      return this.__state;
    }
  }]);

  return Index;
}(_index2.default.Component);

Index.properties = {};
Index.$$events = ["handleChange"];
exports.default = Index;

Component(require('../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Index, true));