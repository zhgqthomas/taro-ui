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

var AtSegmentedControl = function (_AtComponent) {
  _inherits(AtSegmentedControl, _AtComponent);

  function AtSegmentedControl() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AtSegmentedControl);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AtSegmentedControl.__proto__ || Object.getPrototypeOf(AtSegmentedControl)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "loopArray0", "disabled", "values"], _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AtSegmentedControl, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(AtSegmentedControl.prototype.__proto__ || Object.getPrototypeOf(AtSegmentedControl.prototype), "_constructor", this).call(this, props);
    }
  }, {
    key: "handleClick",
    value: function handleClick(i, disable) {
      if (disable) {
        return;
      }this.__triggerPropsFn("onClick", [null].concat([i].concat(Array.prototype.slice.call(arguments))));
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};

      _objectDestructuringEmpty(this);

      var _props = this.__props,
          isTest = _props.isTest,
          customStyle = _props.customStyle,
          className = _props.className,
          disabled = _props.disabled,
          values = _props.values,
          selectedColor = _props.selectedColor,
          current = _props.current,
          color = _props.color,
          fontSize = _props.fontSize;


      if (isTest) {
        _index2.default.initPxTransform({ designWidth: 750 });
      }
      var rootStyle = "border-color: " + selectedColor + ";";
      var itemStyle = "\n      color: " + selectedColor + ";\n      background-color:" + color + ";\n      border-color: " + selectedColor + ";\n      font-size: " + _index2.default.pxTransform(fontSize) + ";\n    ";
      var selectedItemStyle = "\n      color: " + color + ";\n      background-color:" + selectedColor + ";\n      border-color: " + selectedColor + ";\n      font-size: " + _index2.default.pxTransform(fontSize) + ";\n    ";

      var anonymousState__temp = (0, _index6.default)({
        'at-segmented-control': true,
        'at-segmented-control--disabled': disabled
      }, className);
      var anonymousState__temp2 = (0, _index.internal_inline_style)(this.mergeStyle(rootStyle, customStyle));
      var loopArray0 = values.map(function (value, i) {
        value = {
          $original: (0, _index.internal_get_original)(value)
        };
        var $loopState__temp4 = (0, _index.internal_inline_style)(current === i ? selectedItemStyle : itemStyle);
        return {
          $loopState__temp4: $loopState__temp4,
          $original: value.$original
        };
      });
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        loopArray0: loopArray0,
        disabled: disabled,
        values: values
      });
      return this.__state;
    }
  }]);

  return AtSegmentedControl;
}(_component2.default);

AtSegmentedControl.properties = {
  "__fn_onClick": {
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
  "disabled": {
    "type": null,
    "value": null
  },
  "values": {
    "type": null,
    "value": null
  },
  "selectedColor": {
    "type": null,
    "value": null
  },
  "current": {
    "type": null,
    "value": null
  },
  "color": {
    "type": null,
    "value": null
  },
  "fontSize": {
    "type": null,
    "value": null
  }
};
AtSegmentedControl.$$events = ["handleClick"];
AtSegmentedControl.defaultProps = {
  isTest: false,
  customStyle: '',
  className: '',
  current: 0,
  color: '#fff',
  fontSize: '28',
  disabled: false,
  selectedColor: '#6190E8',
  values: [],
  onClick: function onClick() {}
};
AtSegmentedControl.propTypes = {
  customStyle: _index4.default.oneOfType([_index4.default.object, _index4.default.string]),
  className: _index4.default.oneOfType([_index4.default.array, _index4.default.string]),
  current: _index4.default.number,
  color: _index4.default.string,
  fontSize: _index4.default.oneOfType([_index4.default.string, _index4.default.number]),
  disabled: _index4.default.bool,
  values: _index4.default.array,
  onClick: _index4.default.func
};
exports.default = AtSegmentedControl;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(AtSegmentedControl));