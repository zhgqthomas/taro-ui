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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable taro/function-naming */


var AtFloatLayout = function (_AtComponent) {
  _inherits(AtFloatLayout, _AtComponent);

  function AtFloatLayout() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AtFloatLayout);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AtFloatLayout.__proto__ || Object.getPrototypeOf(AtFloatLayout)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["rootClass", "title", "_isOpened", "children"], _this.handleClose = function () {
      if ((0, _isFunction3.default)(_this.props.onClose)) {
        _this.__triggerPropsFn("onClose", [null].concat([]));
      }
    }, _this.close = function () {
      _this.setState({
        _isOpened: false
      }, _this.handleClose);
    }, _this.handleTouchMove = function (e) {
      e.stopPropagation();
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AtFloatLayout, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(AtFloatLayout.prototype.__proto__ || Object.getPrototypeOf(AtFloatLayout.prototype), "_constructor", this).apply(this, arguments);

      var isOpened = props.isOpened;

      this.state = {
        _isOpened: isOpened
      };
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var isOpened = nextProps.isOpened;

      if (isOpened !== this.state._isOpened) {
        this.setState({
          _isOpened: isOpened
        });
        !isOpened && this.handleClose();
      }
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};

      _objectDestructuringEmpty(this);

      var _isOpened = this.__state._isOpened;
      var title = this.__props.title;


      var rootClass = (0, _index6.default)('at-float-layout', {
        'at-float-layout--active': _isOpened
      }, this.__props.className);

      Object.assign(this.__state, {
        rootClass: rootClass,
        title: title
      });
      return this.__state;
    }
  }]);

  return AtFloatLayout;
}(_component2.default);

AtFloatLayout.properties = {
  "onClose": {
    "type": null,
    "value": null
  },
  "__fn_onClose": {
    "type": null,
    "value": null
  },
  "title": {
    "type": null,
    "value": null
  },
  "className": {
    "type": null,
    "value": null
  },
  "isOpened": {
    "type": null,
    "value": null
  }
};
AtFloatLayout.$$events = ["handleTouchMove", "close"];


AtFloatLayout.defaultProps = {
  isOpened: false
};

AtFloatLayout.propTypes = {
  onClose: _index4.default.func,
  title: _index4.default.string,
  isOpened: _index4.default.bool
};
exports.default = AtFloatLayout;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(AtFloatLayout));