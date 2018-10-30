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

var iconBasic = "/assets/images/icon-list-basic.png";
var iconView = "/assets/images/icon-list-view.png";
var iconAction = "/assets/images/icon-list-action.png";
var iconForm = "/assets/images/icon-list-form.png";
var iconLayout = "/assets/images/icon-list-layout.png";
var iconNavigation = "/assets/images/icon-list-navigation.png";

var PanelBasic = function (_BaseComponent) {
  _inherits(PanelBasic, _BaseComponent);

  function PanelBasic() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PanelBasic);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PanelBasic.__proto__ || Object.getPrototypeOf(PanelBasic)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["icon", "currentId", "itemList", "title", "panelNames", "list"], _this.config = {
      navigationBarTitleText: 'Taro UI'
    }, _this.gotoComponent = function (e) {
      var _e$currentTarget$data = e.currentTarget.dataset,
          id = _e$currentTarget$data.id,
          parent = _e$currentTarget$data.parent;

      _index2.default.navigateTo({
        url: "/pages/" + parent.toLowerCase() + "/" + id.toLowerCase() + "/index"
      });
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PanelBasic, [{
    key: "_constructor",
    value: function _constructor() {
      _get(PanelBasic.prototype.__proto__ || Object.getPrototypeOf(PanelBasic.prototype), "_constructor", this).apply(this, arguments);

      this.state = {
        panelNames: {
          basic: {
            name: '基础',
            icon: iconBasic
          },
          view: {
            name: '视图',
            icon: iconView
          },
          action: {
            name: '操作反馈',
            icon: iconAction
          },
          form: {
            name: '表单',
            icon: iconForm
          },
          layout: {
            name: '布局',
            icon: iconLayout
          },
          navigation: {
            name: '导航',
            icon: iconNavigation
          }
        },
        list: {
          basic: [{
            id: 'Color',
            name: '颜色'
          }, {
            id: 'Icon',
            name: '图标'
          }, {
            id: 'Typo',
            name: '字体'
          }, {
            id: 'Button',
            name: '按钮'
          }],
          view: [{
            id: 'Avatar',
            name: '头像'
          }, {
            id: 'Article',
            name: '文章'
          }, {
            id: 'Badge',
            name: '徽标'
          }, {
            id: 'NoticeBar',
            name: '通告栏'
          }, {
            id: 'Tag',
            name: '标签'
          }, {
            id: 'Timeline',
            name: '时间轴'
          }, {
            id: 'Swiper',
            name: '滑块视图容器'
          }],
          action: [{
            id: 'Action-Sheet',
            name: '动作面板'
          }, {
            id: 'Activity-Indicator',
            name: '活动指示器'
          }, {
            id: 'Modal',
            name: '模态框'
          }, {
            id: 'Progress',
            name: '进度条'
          }, {
            id: 'Toast',
            name: '轻提示'
          }, {
            id: 'Swipe-Action',
            name: '滑动操作'
          }],
          form: [{
            id: 'Input',
            name: '输入框'
          }, {
            id: 'Radio',
            name: '单选框'
          }, {
            id: 'Checkbox',
            name: '复选框'
          }, {
            id: 'Switch',
            name: '开关'
          }, {
            id: 'Rate',
            name: '评分'
          }, {
            id: 'Input-Number',
            name: '数字输入框'
          }, {
            id: 'Textarea',
            name: '多行文本框'
          }, {
            id: 'Picker',
            name: '选择器'
          }, {
            id: 'Picker-View',
            name: '滚动选择器'
          }, {
            id: 'Slider',
            name: '滑动条'
          }, {
            id: 'Search-Bar',
            name: '搜索栏'
          }],
          layout: [{
            id: 'Flex',
            name: '弹性布局'
          }, {
            id: 'Grid',
            name: '栅格'
          }, {
            id: 'List',
            name: '列表'
          }, {
            id: 'Card',
            name: '卡片'
          }, {
            id: 'Float-Layout',
            name: '浮动弹层'
          }, {
            id: 'Accordion',
            name: '手风琴'
          }],
          navigation: [{
            id: 'NavBar',
            name: '导航栏'
          }, {
            id: 'TabBar',
            name: '标签栏'
          }, {
            id: 'Tabs',
            name: '标签页'
          }, {
            id: 'Segmented-Control',
            name: '分段器'
          }, {
            id: 'Pagination',
            name: '分页器'
          }, {
            id: 'Drawer',
            name: '抽屉'
          }]
        }
      };
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var id = this.$router.params.id;

      this.setState({
        currentId: id.toLowerCase() || ''
      });
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};

      _objectDestructuringEmpty(this);

      var _state = this.__state,
          list = _state.list,
          currentId = _state.currentId,
          panelNames = _state.panelNames;

      var itemList = list[currentId] || [];
      var title = panelNames[currentId] && panelNames[currentId].name || '';
      var icon = panelNames[currentId] && panelNames[currentId].icon || '';

      Object.assign(this.__state, {
        icon: icon,
        currentId: currentId,
        itemList: itemList,
        title: title
      });
      return this.__state;
    }
  }]);

  return PanelBasic;
}(_index.Component);

PanelBasic.properties = {};
PanelBasic.$$events = ["gotoComponent"];
exports.default = PanelBasic;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(PanelBasic, true));