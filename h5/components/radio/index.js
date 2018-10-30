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

var AtRadio = function (_AtComponent) {
  _inherits(AtRadio, _AtComponent);

  function AtRadio() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AtRadio);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AtRadio.__proto__ || Object.getPrototypeOf(AtRadio)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "loopArray0", "options"], _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AtRadio, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(AtRadio.prototype.__proto__ || Object.getPrototypeOf(AtRadio.prototype), "_constructor", this).call(this, props);
    }
  }, {
    key: "handleClick",
    value: function handleClick(option) {
      if (option.disabled) {
        return;
      }this.__triggerPropsFn("onClick", [null].concat([option.value].concat(Array.prototype.slice.call(arguments))));
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};

      _objectDestructuringEmpty(this);

      var _props = this.__props,
          customStyle = _props.customStyle,
          className = _props.className,
          options = _props.options,
          value = _props.value;


      var anonymousState__temp = (0, _index6.default)('at-radio', className);
      var anonymousState__temp2 = (0, _index.internal_inline_style)(customStyle);
      var loopArray0 = options.map(function (option) {
        option = {
          $original: (0, _index.internal_get_original)(option)
        };
        var $loopState__temp4 = (0, _index6.default)({
          'at-radio__option': true,
          'at-radio__option--disabled': option.$original.disabled
        });
        var $loopState__temp6 = (0, _index6.default)({
          'at-radio__icon': true,
          'at-radio__icon--checked': value === option.$original.value
        });
        return {
          $loopState__temp4: $loopState__temp4,
          $loopState__temp6: $loopState__temp6,
          $original: option.$original
        };
      });
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        loopArray0: loopArray0,
        options: options
      });
      return this.__state;
    }
  }]);

  return AtRadio;
}(_component2.default);

AtRadio.properties = {
  "__fn_onClick": {
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
  "options": {
    "type": null,
    "value": null
  },
  "value": {
    "type": null,
    "value": null
  }
};
AtRadio.$$events = ["handleClick"];
AtRadio.defaultProps = {
  customStyle: '',
  className: '',
  value: '',
  options: [],
  onClick: function onClick() {}
};
AtRadio.propTypes = {
  customStyle: _index4.default.oneOfType([_index4.default.object, _index4.default.string]),
  className: _index4.default.oneOfType([_index4.default.array, _index4.default.string]),
  value: _index4.default.string,
  options: _index4.default.array,
  onClick: _index4.default.func
};
exports.default = AtRadio;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(AtRadio));