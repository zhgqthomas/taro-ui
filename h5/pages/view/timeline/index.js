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

var TimelinePage = function (_Taro$Component) {
  _inherits(TimelinePage, _Taro$Component);

  function TimelinePage() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TimelinePage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TimelinePage.__proto__ || Object.getPrototypeOf(TimelinePage)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "anonymousState__temp4", "anonymousState__temp5"], _this.config = {
      navigationBarTitleText: 'Taro UI'
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TimelinePage, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(TimelinePage.prototype.__proto__ || Object.getPrototypeOf(TimelinePage.prototype), "_constructor", this).call(this, props);
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};

      _objectDestructuringEmpty(this);

      var anonymousState__temp = [{ title: '刷牙洗脸' }, { title: '吃早餐' }, { title: '上班' }, { title: '睡觉' }];
      var anonymousState__temp2 = [{ title: '刷牙洗脸' }, { title: '吃早餐', color: 'green' }, { title: '上班', color: 'red' }, { title: '睡觉', color: 'yellow' }];
      var anonymousState__temp3 = [{ title: '刷牙洗脸', icon: 'check-circle' }, { title: '吃早餐', icon: 'clock' }, { title: '上班', icon: 'clock' }, { title: '睡觉', icon: 'clock' }];
      var anonymousState__temp4 = [{ title: '刷牙洗脸' }, { title: '吃早餐' }, { title: '上班' }, { title: '睡觉' }];
      var anonymousState__temp5 = [{ title: '刷牙洗脸', content: ['大概8:00'], icon: 'check-circle' }, { title: '吃早餐', content: ['牛奶+面包', '餐后记得吃药'], icon: 'clock' }, { title: '上班', content: ['查看邮件', '写PPT', '发送PPT给领导'], icon: 'clock' }, { title: '睡觉', content: ['不超过23:00'], icon: 'clock' }];
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        anonymousState__temp4: anonymousState__temp4,
        anonymousState__temp5: anonymousState__temp5
      });
      return this.__state;
    }
  }]);

  return TimelinePage;
}(_index2.default.Component);

TimelinePage.properties = {};
TimelinePage.$$events = [];
exports.default = TimelinePage;

Component(require('../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(TimelinePage, true));