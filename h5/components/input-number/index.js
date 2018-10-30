"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../npm/prop-types/index.js");

var _index4 = _interopRequireDefault(_index3);

var _index5 = require("../../npm/classnames/index.js");

var _index6 = _interopRequireDefault(_index5);

var _component = require("../../common/component.js");

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AtInputNumber = function (_AtComponent) {
  _inherits(AtInputNumber, _AtComponent);

  function AtInputNumber() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AtInputNumber);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AtInputNumber.__proto__ || Object.getPrototypeOf(AtInputNumber)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "value", "min", "disabled", "max"], _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AtInputNumber, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(AtInputNumber.prototype.__proto__ || Object.getPrototypeOf(AtInputNumber.prototype), "_constructor", this).call(this, props);
    }
  }, {
    key: "handleMinus",
    value: function handleMinus() {
      var _props = this.props,
          disabled = _props.disabled,
          value = _props.value,
          min = _props.min,
          step = _props.step;

      if (disabled) {
        return;
      }var nextValue = AtInputNumber.addNum(value, -step);
      nextValue = nextValue > min ? nextValue : min;
      this.__triggerPropsFn("onChange", [null].concat([AtInputNumber.parseValue(nextValue)]));
    }
  }, {
    key: "handlePlus",
    value: function handlePlus() {
      var _props2 = this.props,
          disabled = _props2.disabled,
          value = _props2.value,
          max = _props2.max,
          step = _props2.step;

      if (disabled) {
        return;
      }var nextValue = AtInputNumber.addNum(value, step);
      nextValue = nextValue < max ? nextValue : max;
      this.__triggerPropsFn("onChange", [null].concat([AtInputNumber.parseValue(nextValue)]));
    }
  }, {
    key: "handleInput",
    value: function handleInput(e) {
      var value = e.target.value;
      var _props3 = this.props,
          disabled = _props3.disabled,
          min = _props3.min,
          max = _props3.max;

      if (disabled) {
        return;
      }var nextValue = value < max ? value : max;
      nextValue = nextValue > min ? nextValue : min;
      this.__triggerPropsFn("onChange", [null].concat([AtInputNumber.parseValue(nextValue)]));
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};

      _objectDestructuringEmpty(this);

      var _props4 = this.__props,
          isTest = _props4.isTest,
          customStyle = _props4.customStyle,
          className = _props4.className,
          width = _props4.width,
          disabled = _props4.disabled,
          value = _props4.value,
          min = _props4.min,
          max = _props4.max,
          size = _props4.size;


      if (isTest) {
        _index2.default.initPxTransform({ designWidth: 750 });
      }
      var inputStyle = "width: " + _index2.default.pxTransform(width);

      var anonymousState__temp = (0, _index6.default)({
        'at-input-number': true,
        'at-input-number--lg': size
      }, className);
      var anonymousState__temp2 = (0, _index.internal_inline_style)(customStyle);
      var anonymousState__temp3 = (0, _index.internal_inline_style)(inputStyle);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        value: value,
        min: min,
        disabled: disabled,
        max: max
      });
      return this.__state;
    }
  }], [{
    key: "addNum",
    value: function addNum(num1, num2) {
      var sq1 = void 0,
          sq2 = void 0;
      try {
        sq1 = num1.toString().split('.')[1].length;
      } catch (e) {
        sq1 = 0;
      }
      try {
        sq2 = num2.toString().split('.')[1].length;
      } catch (e) {
        sq2 = 0;
      }
      var m = Math.pow(10, Math.max(sq1, sq2));
      return (Math.round(num1 * m) + Math.round(num2 * m)) / m;
    }

    // 格式化数字，处理01变成1,并且不处理1. 这种情况

  }, {
    key: "parseValue",
    value: function parseValue(num) {
      var numStr = num.toString();
      if (numStr.indexOf('0') === 0 && numStr.indexOf('.') === -1) {
        return parseFloat(num);
      }
      return num;
    }
  }]);

  return AtInputNumber;
}(_component2.default);

AtInputNumber.properties = {
  "disabled": {
    "type": null,
    "value": null
  },
  "value": {
    "type": null,
    "value": null
  },
  "min": {
    "type": null,
    "value": null
  },
  "step": {
    "type": null,
    "value": null
  },
  "__fn_onChange": {
    "type": null,
    "value": null
  },
  "max": {
    "type": null,
    "value": null
  },
  "isTest": {
    "type": null,
    "value": null
  },
  "customStyle": {
    "type": null,
    "value": null
  },
  "className": {
    "type": null,
    "value": null
  },
  "width": {
    "type": null,
    "value": null
  },
  "size": {
    "type": null,
    "value": null
  }
};
AtInputNumber.$$events = ["handleMinus", "handleInput", "handlePlus"];
AtInputNumber.defaultProps = {
  isTest: false,
  customStyle: '',
  className: '',
  disabled: false,
  value: 1,
  width: 80,
  min: 0,
  max: 100,
  step: 1,
  size: '',
  onChange: function onChange() {}
};
AtInputNumber.propTypes = {
  customStyle: _index4.default.oneOfType([_index4.default.object, _index4.default.string]),
  className: _index4.default.oneOfType([_index4.default.array, _index4.default.string]),
  disabled: _index4.default.bool,
  value: _index4.default.number,
  width: _index4.default.number,
  min: _index4.default.number,
  max: _index4.default.number,
  step: _index4.default.number,
  size: _index4.default.string,
  onChange: _index4.default.func

  // 实现两数相加并保留小数点后最短尾数
};
exports.default = AtInputNumber;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(AtInputNumber));