"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var logoImg = "/assets/images/logo_taro.png";
var iconBasic = "/assets/images/icon-list-basic.png";
var iconView = "/assets/images/icon-list-view.png";
var iconAction = "/assets/images/icon-list-action.png";
var iconForm = "/assets/images/icon-list-form.png";
var iconLayout = "/assets/images/icon-list-layout.png";
var iconNavigation = "/assets/images/icon-list-navigation.png";

var Index = function (_Taro$Component) {
  _inherits(Index, _Taro$Component);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["logoImg", "list"], _this.config = {
      navigationBarTitleText: 'Taro UI'
    }, _this.gotoPanel = function (e) {
      var id = e.currentTarget.dataset.id;

      _index2.default.navigateTo({
        url: "/pages/panel/index?id=" + id.toLowerCase()
      });
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: "_constructor",
    value: function _constructor() {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), "_constructor", this).apply(this, arguments);

      this.state = {
        list: [{
          id: 'Basic',
          title: '基础',
          content: '包含颜色、文本、图标等',
          icon: iconBasic
        }, {
          id: 'View',
          title: '视图',
          content: '包含通告栏、标签、徽标等',
          icon: iconView
        }, {
          id: 'Action',
          title: '操作反馈',
          content: '包含对话框、进度条、动作面板等',
          icon: iconAction
        }, {
          id: 'Form',
          title: '表单',
          content: '包含输入框、单选框、复选框等',
          icon: iconForm
        }, {
          id: 'Layout',
          title: '布局',
          content: '包含列表、浮层、卡片等',
          icon: iconLayout
        }, {
          id: 'Navigation',
          title: '导航',
          content: '包含标签栏、导航栏、分段器等',
          icon: iconNavigation
        }]
      };
    }
  }, {
    key: "onShareAppMessage",
    value: function onShareAppMessage() {
      return {
        title: 'Taro UI',
        path: '/pages/index/index',
        imageUrl: 'http://storage.360buyimg.com/mtd/home/share1535013100318.jpg'
      };
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};

      _objectDestructuringEmpty(this);

      var list = this.__state.list;


      Object.assign(this.__state, {
        logoImg: logoImg
      });
      return this.__state;
    }
  }]);

  return Index;
}(_index2.default.Component);

Index.properties = {};
Index.$$events = ["gotoPanel"];
exports.default = Index;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Index, true));