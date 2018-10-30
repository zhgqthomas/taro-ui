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

var _isFunction2 = require("../../npm/lodash/isFunction.js");

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _component = require("../../common/component.js");

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AtSwipeAction = function (_AtComponent) {
  _inherits(AtSwipeAction, _AtComponent);

  function AtSwipeAction() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AtSwipeAction);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AtSwipeAction.__proto__ || Object.getPrototypeOf(AtSwipeAction)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp7", "loopArray0", "rootClass", "options", "offsetSize", "isOpened", "children"], _this.handleOpened = function () {
      if ((0, _isFunction3.default)(_this.props.onOpened) && !_this.state.isOpened) {
        _this.__triggerPropsFn("onOpened", [null].concat([]));
      }
    }, _this.handleClosed = function () {
      if ((0, _isFunction3.default)(_this.props.onClosed) && _this.state.isOpened) {
        _this.__triggerPropsFn("onClosed", [null].concat([]));
      }
    }, _this.handleTouchStart = function (e) {
      var clientX = e.touches[0].clientX;


      if (_this.props.disabled) {
        return;
      }_this.startX = clientX;
      _this.isTouching = true;
    }, _this.handleTouchEnd = function () {
      _this.isTouching = false;

      var offsetSize = _this.state.offsetSize;


      _this.endValue = offsetSize;

      var breakpoint = _this.maxOffsetSize / 2;
      var absOffsetSize = Math.abs(offsetSize);

      if (absOffsetSize > breakpoint) {
        _this.endValue = -_this.maxOffsetSize;
        _this.handleOpened();
        return _this.setState({
          isOpened: true,
          offsetSize: -_this.maxOffsetSize
        });
      }

      _this.endValue = 0;
      _this.handleClosed();
      _this.setState({
        isOpened: false,
        offsetSize: 0
      });
    }, _this.handleTouchMove = function (e) {
      var clientX = e.touches[0].clientX;

      if (_this.isTouching) {
        var offsetSize = clientX - _this.startX;
        var isRight = offsetSize > 0;

        if (_this.state.offsetSize === 0 && isRight) {
          return;
        }var value = _this.endValue + offsetSize;
        _this.setState({
          offsetSize: value >= 0 ? 0 : value
        });
      }
    }, _this.handleDomInfo = function (_ref2) {
      var width = _ref2.width;

      _this.maxOffsetSize = width;
    }, _this.handleClick = function (item, index) {
      for (var _len2 = arguments.length, arg = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        arg[_key2 - 2] = arguments[_key2];
      }

      var _this$props = _this.props,
          onClick = _this$props.onClick,
          autoClose = _this$props.autoClose;


      if ((0, _isFunction3.default)(onClick)) {
        _this.__triggerPropsFn("onClick", [null].concat([item, index].concat(arg)));
      }
      if (autoClose) {
        _this._reset();
        _this.handleClosed();
      }
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AtSwipeAction, [{
    key: "_constructor",
    value: function _constructor() {
      _get(AtSwipeAction.prototype.__proto__ || Object.getPrototypeOf(AtSwipeAction.prototype), "_constructor", this).apply(this, arguments);

      this.endValue = 0;
      this.startX = null;
      this.isTouching = false;
      this.maxOffsetSize = 0;

      this.state = {
        offsetSize: 0,
        isOpened: false
      };
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var isClose = nextProps.isClose;
      var isOpened = this.state.isOpened;


      if (isClose && isOpened) {
        this._reset();
        this.handleClosed();
      }
    }
  }, {
    key: "_reset",
    value: function _reset() {
      this.endValue = 0;
      this.isTouching = false;
      this.setState({
        offsetSize: 0,
        isOpened: false
      });
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};

      _objectDestructuringEmpty(this);

      var offsetSize = this.__state.offsetSize;
      var options = this.__props.options;

      var rootClass = (0, _index6.default)('at-swipe-action', this.__props.className);

      var anonymousState__temp = (0, _index6.default)('at-swipe-action__content', {
        animtion: !this.isTouching
      });
      var anonymousState__temp2 = (0, _index.internal_inline_style)({
        transform: "translate3d(" + offsetSize + "px,0,0)"
      });
      var anonymousState__temp7 = Array.isArray(options) && options.length > 0;
      var loopArray0 = options.map(function (item, key) {
        item = {
          $original: (0, _index.internal_get_original)(item)
        };
        var $loopState__temp4 = Array.isArray(options) && options.length > 0 ? (0, _index.internal_inline_style)(item.$original.style) : null;
        var $loopState__temp6 = Array.isArray(options) && options.length > 0 ? (0, _index6.default)('at-swipe-action__option', item.$original.className) : null;
        return {
          $loopState__temp4: $loopState__temp4,
          $loopState__temp6: $loopState__temp6,
          $original: item.$original
        };
      });
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp7: anonymousState__temp7,
        loopArray0: loopArray0,
        rootClass: rootClass,
        options: options
      });
      return this.__state;
    }
  }]);

  return AtSwipeAction;
}(_component2.default);

AtSwipeAction.properties = {
  "onOpened": {
    "type": null,
    "value": null
  },
  "__fn_onOpened": {
    "type": null,
    "value": null
  },
  "onClosed": {
    "type": null,
    "value": null
  },
  "__fn_onClosed": {
    "type": null,
    "value": null
  },
  "disabled": {
    "type": null,
    "value": null
  },
  "onClick": {
    "type": null,
    "value": null
  },
  "autoClose": {
    "type": null,
    "value": null
  },
  "__fn_onClick": {
    "type": null,
    "value": null
  },
  "options": {
    "type": null,
    "value": null
  },
  "className": {
    "type": null,
    "value": null
  },
  "isClose": {
    "type": null,
    "value": null
  }
};
AtSwipeAction.$$events = ["handleTouchMove", "handleTouchEnd", "handleTouchStart", "handleDomInfo", "handleClick"];


AtSwipeAction.defaultProps = {
  options: [],
  isClose: false,
  disabled: false,
  autoClose: false
};

AtSwipeAction.propTypes = {
  isClose: _index4.default.bool,
  disabled: _index4.default.bool,
  onClick: _index4.default.func,
  onOpened: _index4.default.func,
  onClosed: _index4.default.func,
  autoClose: _index4.default.bool,
  options: _index4.default.arrayOf(_index4.default.shape({
    text: _index4.default.string,
    style: _index4.default.oneOfType([_index4.default.object, _index4.default.string]),
    className: _index4.default.oneOfType([_index4.default.object, _index4.default.string, _index4.default.array])
  }))
};
exports.default = AtSwipeAction;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(AtSwipeAction));