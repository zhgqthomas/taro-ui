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

var TagPage = function (_Taro$Component) {
  _inherits(TagPage, _Taro$Component);

  function TagPage() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TagPage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TagPage.__proto__ || Object.getPrototypeOf(TagPage)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["tagList"], _this.config = {
      navigationBarTitleText: 'Taro UI'
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TagPage, [{
    key: "_constructor",
    value: function _constructor() {
      _get(TagPage.prototype.__proto__ || Object.getPrototypeOf(TagPage.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        tagList: [{ name: 'tag-1', active: false }, { name: 'tag-2', active: false }, { name: 'tag-3', active: true }, { name: 'tag-4', active: true }]
      };
    }
  }, {
    key: "onClick",
    value: function onClick(data) {
      var tagList = this.state.tagList;

      var findIndex = this.state.tagList.findIndex(function (item) {
        return item.name === data.name;
      });
      var active = !tagList[findIndex].active;
      tagList[findIndex].active = active;
      var content = "\u60A8\u70B9\u51FB\u7684 tag \u6807\u7B7E\u540D\u662F\uFF1A" + data.name + "\uFF0C\u70B9\u51FB\u524D\u662F\u5426\u9009\u4E2D\uFF1A" + data.active + "\uFF0C\u70B9\u51FB\u540E\uFF1A" + active;
      this.setState({ tagList: tagList });
      if (_index2.default.getEnv() === _index2.default.ENV_TYPE.WEAPP) {
        _index2.default.showModal({ content: content, showCancel: false });
      } else if (_index2.default.getEnv() === _index2.default.ENV_TYPE.WEB) {
        alert(content);
      }console.log(data);
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};

      _objectDestructuringEmpty(this);

      Object.assign(this.__state, {});
      return this.__state;
    }
  }]);

  return TagPage;
}(_index2.default.Component);

TagPage.properties = {};
TagPage.$$events = ["onClick"];
exports.default = TagPage;

Component(require('../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(TagPage, true));