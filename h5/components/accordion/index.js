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

var AtAccordion = function (_AtComponent) {
  _inherits(AtAccordion, _AtComponent);

  function AtAccordion() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AtAccordion);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AtAccordion.__proto__ || Object.getPrototypeOf(AtAccordion)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "anonymousState__temp4", "anonymousState__temp5", "icon", "animatedStyle", "title", "bodyHeight", "children"], _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AtAccordion, [{
    key: "_constructor",
    value: function _constructor() {
      _get(AtAccordion.prototype.__proto__ || Object.getPrototypeOf(AtAccordion.prototype), "_constructor", this).apply(this, arguments);
      // body 元素id
      var randomId = "" + new Date().getTime() + Math.ceil(Math.random() * 10e5).toString(36);
      this.elemId = "at-accordion_body_" + randomId;
      // body 高度
      this.bodyHeight = 0;
      // 组件是否展开
      this.isOpen = this.props.open;
      this.state = {
        bodyHeight: ''
      };
    }
  }, {
    key: "handleClick",
    value: function handleClick(e) {
      this.switch();
      this.__triggerPropsFn("onClick", [null].concat([e]));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      // 获取 body 高度
      var env = _index2.default.getEnv();
      if (env === _index2.default.ENV_TYPE.WEB) {
        setTimeout(function () {
          _this2.bodyHeight = document.getElementsByClassName("" + _this2.elemId)[0].scrollHeight;
          _this2.setState({
            bodyHeight: _this2.isOpen ? _this2.bodyHeight : 0
          });
        });
      } else if (env === _index2.default.ENV_TYPE.WEAPP) {
        var query = _index2.default.createSelectorQuery().in(this.$scope);
        query.select("." + this.elemId).boundingClientRect(function (res) {
          _this2.bodyHeight = res.height;
          _this2.setState({
            bodyHeight: _this2.isOpen ? _this2.bodyHeight : 0
          });
        }).exec();
      }
    }
  }, {
    key: "switch",
    value: function _switch() {
      this.isOpen = !this.isOpen;
      this.setState({
        bodyHeight: this.isOpen ? this.bodyHeight : 0
      });
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
          isTest = _props.isTest,
          title = _props.title,
          icon = _props.icon;
      var bodyHeight = this.__state.bodyHeight;


      var contentStyle = {
        height: bodyHeight + "px"
      };

      var animatedStyle = {
        transition: 'transform 0.2s ease'
      };
      if (this.isOpen) {
        animatedStyle.transform = 'rotate(180deg)';
      } else {
        animatedStyle.transform = 'rotate(0)';
      }

      var contentCls = {
        'at-accordion__content': true
      };
      contentCls[this.elemId] = !isTest;

      var anonymousState__temp = (0, _index6.default)('at-accordion', className);
      var anonymousState__temp2 = (0, _index.internal_inline_style)(customStyle);
      var anonymousState__temp3 = icon ? { marginRight: '15px' } : null;
      var anonymousState__temp4 = (0, _index6.default)(contentCls);
      var anonymousState__temp5 = (0, _index.internal_inline_style)(contentStyle);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        anonymousState__temp4: anonymousState__temp4,
        anonymousState__temp5: anonymousState__temp5,
        icon: icon,
        animatedStyle: animatedStyle,
        title: title
      });
      return this.__state;
    }
  }]);

  return AtAccordion;
}(_component2.default);

AtAccordion.properties = {
  "open": {
    "type": null,
    "value": null
  },
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
  "isTest": {
    "type": null,
    "value": null
  },
  "title": {
    "type": null,
    "value": null
  },
  "icon": {
    "type": null,
    "value": null
  }
};
AtAccordion.$$events = ["handleClick"];
AtAccordion.defaultProps = {
  isTest: false,
  open: false,
  customStyle: '',
  className: '',
  title: '',
  onClick: function onClick() {}
};
AtAccordion.propTypes = {
  customStyle: _index4.default.oneOfType([_index4.default.object, _index4.default.string]),
  className: _index4.default.oneOfType([_index4.default.array, _index4.default.string]),
  open: _index4.default.bool,
  title: _index4.default.string,
  icon: _index4.default.object,
  onClick: _index4.default.func
};
exports.default = AtAccordion;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(AtAccordion));