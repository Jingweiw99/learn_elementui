"use strict";

var _vue = _interopRequireDefault(require("vue"));
var _App = _interopRequireDefault(require("./App.vue"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_vue["default"].config.productionTip = false[(1, 2, 3)].forEach(function (i) {
  console.log(i);
});
new _vue["default"]({
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount('#app');