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

var MIN_MAXPAGE = 1;
var getMaxPage = function getMaxPage() {
  var maxPage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  if (maxPage <= 0) {
    return MIN_MAXPAGE;
  }return maxPage;
};

var createPickerRange = function createPickerRange(max) {
  var range = new Array(max).fill(0).map(function (val, index) {
    return index + 1;
  });
  return range;
};

var AtPagination = function (_AtComponent) {
  _inherits(AtPagination, _AtComponent);

  function AtPagination() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AtPagination);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AtPagination.__proto__ || Object.getPrototypeOf(AtPagination)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "icon", "prevDisabled", "nextDisabled", "current", "maxPage", "pickerRange", "className"], _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AtPagination, [{
    key: "_constructor",
    value: function _constructor() {
      _get(AtPagination.prototype.__proto__ || Object.getPrototypeOf(AtPagination.prototype), "_constructor", this).apply(this, arguments);
      var _props = this.props,
          current = _props.current,
          pageSize = _props.pageSize,
          total = _props.total;

      var maxPage = getMaxPage(Math.ceil(total / pageSize));
      this.state = {
        current: current,
        maxPage: maxPage,
        pickerRange: createPickerRange(maxPage)
      };
    }
  }, {
    key: "onPrev",
    value: function onPrev() {
      var current = this.state.current;

      var originCur = current;
      current -= 1;
      current = Math.max(1, current);
      if (originCur === current) {
        return;
      }this.props.onPageChange && this.__triggerPropsFn("onPageChange", [null].concat([{ type: 'prev', current: current }]));
      this.setState({ current: current });
    }
  }, {
    key: "onNext",
    value: function onNext() {
      var current = this.state.current;

      var originCur = current;
      var maxPage = this.state.maxPage;

      current += 1;
      current = Math.min(maxPage, current);
      if (originCur === current) {
        return;
      }this.props.onPageChange && this.__triggerPropsFn("onPageChange", [null].concat([{ type: 'next', current: current }]));
      this.setState({ current: current });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(props) {
      var total = props.total,
          pageSize = props.pageSize,
          current = props.current;

      var maxPage = getMaxPage(Math.ceil(total / pageSize));
      if (maxPage !== this.state.maxPage) {
        this.setState({
          maxPage: maxPage,
          pickerRange: createPickerRange(maxPage)
        });
      }
      if (current !== this.state.current) {
        this.setState({ current: current });
      }
    }
  }, {
    key: "onPickerChange",
    value: function onPickerChange(evt) {
      var value = evt.detail.value;

      var current = +value + 1;
      if (current === this.state.current) {
        return;
      }this.props.onPageChange && this.__triggerPropsFn("onPageChange", [null].concat([{ type: 'pick', current: current }]));
      this.setState({
        current: current
      });
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};

      _objectDestructuringEmpty(this);

      var _props2 = this.__props,
          icon = _props2.icon,
          customStyle = _props2.customStyle;
      var _state = this.__state,
          current = _state.current,
          maxPage = _state.maxPage;


      var rootClassName = ['at-pagination'];

      var prevDisabled = maxPage === MIN_MAXPAGE || current === 1;
      var nextDisabled = maxPage === MIN_MAXPAGE || current === maxPage;

      var classObject = {
        'at-pagination--icon': icon
      };

      var anonymousState__temp = (0, _index6.default)(rootClassName, classObject, this.__props.className);
      var anonymousState__temp2 = (0, _index.internal_inline_style)(customStyle);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        icon: icon,
        prevDisabled: prevDisabled,
        nextDisabled: nextDisabled
      });
      return this.__state;
    }
  }]);

  return AtPagination;
}(_component2.default);

AtPagination.properties = {
  "current": {
    "type": null,
    "value": null
  },
  "pageSize": {
    "type": null,
    "value": null
  },
  "total": {
    "type": null,
    "value": null
  },
  "onPageChange": {
    "type": null,
    "value": null
  },
  "__fn_onPageChange": {
    "type": null,
    "value": null
  },
  "icon": {
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
  }
};
AtPagination.$$events = ["onPrev", "onNext"];


AtPagination.defaultProps = {
  current: 1,
  total: 0,
  pageSize: 20,
  icon: false,
  pickerSelect: false,
  customStyle: {},
  onPageChange: function onPageChange() {}
};

AtPagination.propTypes = {
  current: _index4.default.number,
  total: _index4.default.number,
  pageSize: _index4.default.number,
  icon: _index4.default.bool,
  pickerSelect: _index4.default.bool,
  customStyle: _index4.default.oneOfType([_index4.default.object, _index4.default.string]),
  onPageChange: _index4.default.func
};
exports.default = AtPagination;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(AtPagination));