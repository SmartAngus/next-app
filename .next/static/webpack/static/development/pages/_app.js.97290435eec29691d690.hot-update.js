webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/app */ \"./node_modules/next/app.js\");\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var antd_dist_antd_less__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/dist/antd.less */ \"./node_modules/antd/dist/antd.less\");\n/* harmony import */ var antd_dist_antd_less__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_less__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _components_with_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/with-redux */ \"./components/with-redux.js\");\n\n\n\n\n\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\nvar MyApp = /*#__PURE__*/function (_App) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(MyApp, _App);\n\n  var _super = _createSuper(MyApp);\n\n  function MyApp() {\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, MyApp);\n\n    return _super.apply(this, arguments);\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(MyApp, [{\n    key: \"render\",\n    value: function render() {\n      console.log(\"my app init\");\n      var _this$props = this.props,\n          Component = _this$props.Component,\n          pageProps = _this$props.pageProps,\n          reduxStore = _this$props.reduxStore;\n      return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_9__[\"Provider\"], {\n        store: reduxStore\n      }, __jsx(Component, pageProps));\n    }\n  }], [{\n    key: \"getInitialProps\",\n    value: function () {\n      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {\n        var Component, pageProps;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                Component = ctx.Component;\n                pageProps = {};\n\n                if (!Component.getInitialProps) {\n                  _context.next = 6;\n                  break;\n                }\n\n                _context.next = 5;\n                return Component.getInitialProps(ctx);\n\n              case 5:\n                pageProps = _context.sent;\n\n              case 6:\n                return _context.abrupt(\"return\", {\n                  pageProps: pageProps\n                });\n\n              case 7:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      function getInitialProps(_x) {\n        return _getInitialProps.apply(this, arguments);\n      }\n\n      return getInitialProps;\n    }()\n  }]);\n\n  return MyApp;\n}(next_app__WEBPACK_IMPORTED_MODULE_8___default.a);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c = Object(_components_with_redux__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(MyApp));\n\nvar _c;\n\n$RefreshReg$(_c, \"%default%\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiTXlBcHAiLCJjb25zb2xlIiwibG9nIiwicHJvcHMiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJyZWR1eFN0b3JlIiwiY3R4IiwiZ2V0SW5pdGlhbFByb3BzIiwiQXBwIiwid2l0aFJlZHV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxLOzs7Ozs7Ozs7Ozs7OzZCQVdJO0FBQ1JDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVo7QUFEUSx3QkFFK0IsS0FBS0MsS0FGcEM7QUFBQSxVQUVEQyxTQUZDLGVBRURBLFNBRkM7QUFBQSxVQUVTQyxTQUZULGVBRVNBLFNBRlQ7QUFBQSxVQUVtQkMsVUFGbkIsZUFFbUJBLFVBRm5CO0FBR1IsYUFDQyxNQUFDLG9EQUFEO0FBQVUsYUFBSyxFQUFFQTtBQUFqQixTQUNDLE1BQUMsU0FBRCxFQUFlRCxTQUFmLENBREQsQ0FERDtBQUtBOzs7OytOQWxCNEJFLEc7Ozs7OztBQUNyQkgseUIsR0FBYUcsRyxDQUFiSCxTO0FBQ0hDLHlCLEdBQVksRTs7cUJBQ2JELFNBQVMsQ0FBQ0ksZTs7Ozs7O3VCQUNNSixTQUFTLENBQUNJLGVBQVYsQ0FBMEJELEdBQTFCLEM7OztBQUFsQkYseUI7OztpREFFTTtBQUNOQSwyQkFBUyxFQUFUQTtBQURNLGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBUFdJLCtDOztBQXFCTCxvRUFBQUMsdUVBQVMsQ0FBQ1YsS0FBRCxDQUF4QiIsImZpbGUiOiIuL3BhZ2VzL19hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQXBwIGZyb20gJ25leHQvYXBwJ1xuaW1wb3J0IHtQcm92aWRlcn0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgJ2FudGQvZGlzdC9hbnRkLmxlc3MnXG5pbXBvcnQgd2l0aFJlZHV4IGZyb20gJy4uL2NvbXBvbmVudHMvd2l0aC1yZWR1eCdcblxuY2xhc3MgTXlBcHAgZXh0ZW5kcyBBcHB7XG5cdHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoY3R4KXtcblx0XHRjb25zdCB7Q29tcG9uZW50fSA9IGN0eFxuXHRcdGxldCBwYWdlUHJvcHMgPSB7fVxuXHRcdGlmKENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMpe1xuXHRcdFx0cGFnZVByb3BzID0gYXdhaXQgQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhjdHgpXG5cdFx0fVxuXHRcdHJldHVybiB7XG5cdFx0XHRwYWdlUHJvcHNcblx0XHR9XG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdGNvbnNvbGUubG9nKFwibXkgYXBwIGluaXRcIilcblx0XHRjb25zdCB7Q29tcG9uZW50LHBhZ2VQcm9wcyxyZWR1eFN0b3JlfT10aGlzLnByb3BzXG5cdFx0cmV0dXJuIChcblx0XHRcdDxQcm92aWRlciBzdG9yZT17cmVkdXhTdG9yZX0+XG5cdFx0XHRcdDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30vPlxuXHRcdFx0PC9Qcm92aWRlcj5cblx0XHQpO1xuXHR9XG59XG5leHBvcnQgZGVmYXVsdCB3aXRoUmVkdXgoTXlBcHApIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

})