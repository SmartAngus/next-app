webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/button/style */ \"./node_modules/antd/lib/button/style/index.js\");\n/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/button */ \"./node_modules/antd/lib/button/index.js\");\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _public_index_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/index.less */ \"./public/index.less\");\n/* harmony import */ var _public_index_less__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_index_less__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../store/store */ \"./store/store.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\n\n\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;\n\n\n\n\n\nvar events = ['routeChangeStart', 'routeChangeCompolete', 'routeChangeError', 'beforeHistoryChange', 'hashChangeStart', 'hashCHangeCompolete'];\n\nfunction makeEvent(type) {\n  return function () {\n    var _console;\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    (_console = console).log.apply(_console, [type].concat(args));\n  };\n}\n\nevents.forEach(function (event) {\n  next_router__WEBPACK_IMPORTED_MODULE_7___default.a.events.on(event, makeEvent(event));\n});\n\nfunction gotoPage() {\n  next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push({\n    pathname: '/other',\n    query: {\n      id: 1\n    }\n  });\n}\n\nvar Index = function Index(props) {\n  var counter = props.counter,\n      username = props.username,\n      stars = props.stars,\n      add = props.add,\n      updateUserName = props.updateUserName;\n  return __jsx(\"div\", null, \"Next stars: \", stars, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    href: \"/other?id=2\",\n    as: \"/other/2\"\n  }, __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    type: \"primary\"\n  }, \"Primary\")), __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    onClick: gotoPage\n  }, \"Default\"), __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    type: \"dashed\"\n  }, \"Dashed\"), __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    type: \"link\",\n    onClick: function onClick() {\n      return add(2);\n    }\n  }, \"change username\"), __jsx(\"input\", {\n    type: \"text\",\n    onChange: function onChange(e) {\n      return updateUserName(e.target.value);\n    }\n  }), __jsx(\"div\", null, \"count:\", counter, \",username:\", username));\n};\n\n_c = Index;\n\nIndex.getInitialProps = /*#__PURE__*/function () {\n  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {\n    var reduxStore;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            // const res = await fetch('https://api.github.com/repos/zeit/next.js')\n            // const json = await res.json()\n            // return { stars: json.stargazers_count }\n            reduxStore = ctx.reduxStore;\n            reduxStore.dispatch(Object(_store_store__WEBPACK_IMPORTED_MODULE_8__[\"add\"])(3));\n            _context.next = 4;\n            return reduxStore.dispatch(Object(_store_store__WEBPACK_IMPORTED_MODULE_8__[\"addAsync\"])(6));\n\n          case 4:\n            return _context.abrupt(\"return\", {\n              stars: 200\n            });\n\n          case 5:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x) {\n    return _ref.apply(this, arguments);\n  };\n}(); // 还没有和nextjs集成\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__[\"connect\"])(function mapStateToProps(state) {\n  return {\n    counter: state.counter.count,\n    username: state.user.username\n  };\n}, function mapDispatchToProps(dispatch) {\n  return {\n    add: function add(num) {\n      return dispatch({\n        type: 'add',\n        num: num\n      });\n    },\n    updateUserName: function updateUserName(name) {\n      return dispatch({\n        type: \"UPDATE_USER\",\n        user: name\n      });\n    }\n  };\n})(Index));\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbImV2ZW50cyIsIm1ha2VFdmVudCIsInR5cGUiLCJhcmdzIiwiY29uc29sZSIsImxvZyIsImZvckVhY2giLCJldmVudCIsIlJvdXRlciIsIm9uIiwiZ290b1BhZ2UiLCJwdXNoIiwicGF0aG5hbWUiLCJxdWVyeSIsImlkIiwiSW5kZXgiLCJwcm9wcyIsImNvdW50ZXIiLCJ1c2VybmFtZSIsInN0YXJzIiwiYWRkIiwidXBkYXRlVXNlck5hbWUiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJyZWR1eFN0b3JlIiwiZGlzcGF0Y2giLCJhZGRBc3luYyIsImNvbm5lY3QiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImNvdW50IiwidXNlciIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsIm51bSIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxNQUFNLEdBQUcsQ0FDZCxrQkFEYyxFQUVkLHNCQUZjLEVBR2Qsa0JBSGMsRUFJZCxxQkFKYyxFQUtkLGlCQUxjLEVBTWQscUJBTmMsQ0FBZjs7QUFTQSxTQUFTQyxTQUFULENBQW1CQyxJQUFuQixFQUF3QjtBQUN2QixTQUFPLFlBQVc7QUFBQTs7QUFBQSxzQ0FBUEMsSUFBTztBQUFQQSxVQUFPO0FBQUE7O0FBQ2pCLGdCQUFBQyxPQUFPLEVBQUNDLEdBQVIsa0JBQVlILElBQVosU0FBb0JDLElBQXBCO0FBQ0EsR0FGRDtBQUdBOztBQUNESCxNQUFNLENBQUNNLE9BQVAsQ0FBZSxVQUFDQyxLQUFELEVBQVM7QUFDdkJDLG9EQUFNLENBQUNSLE1BQVAsQ0FBY1MsRUFBZCxDQUFpQkYsS0FBakIsRUFBdUJOLFNBQVMsQ0FBQ00sS0FBRCxDQUFoQztBQUNBLENBRkQ7O0FBSUEsU0FBU0csUUFBVCxHQUFtQjtBQUNsQkYsb0RBQU0sQ0FBQ0csSUFBUCxDQUFZO0FBQ1hDLFlBQVEsRUFBQyxRQURFO0FBRVhDLFNBQUssRUFBQztBQUNMQyxRQUFFLEVBQUM7QUFERTtBQUZLLEdBQVo7QUFNQTs7QUFFRCxJQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxLQUFELEVBQVU7QUFBQSxNQUNoQkMsT0FEZ0IsR0FDMkJELEtBRDNCLENBQ2hCQyxPQURnQjtBQUFBLE1BQ1JDLFFBRFEsR0FDMkJGLEtBRDNCLENBQ1JFLFFBRFE7QUFBQSxNQUNDQyxLQURELEdBQzJCSCxLQUQzQixDQUNDRyxLQUREO0FBQUEsTUFDT0MsR0FEUCxHQUMyQkosS0FEM0IsQ0FDT0ksR0FEUDtBQUFBLE1BQ1dDLGNBRFgsR0FDMkJMLEtBRDNCLENBQ1dLLGNBRFg7QUFFdkIsU0FDQyxtQ0FDY0YsS0FEZCxFQUVDLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsYUFBWDtBQUF5QixNQUFFLEVBQUM7QUFBNUIsS0FDQztBQUFRLFFBQUksRUFBQztBQUFiLGVBREQsQ0FGRCxFQUtJO0FBQVEsV0FBTyxFQUFFVDtBQUFqQixlQUxKLEVBTUk7QUFBUSxRQUFJLEVBQUM7QUFBYixjQU5KLEVBT0k7QUFBUSxRQUFJLEVBQUMsTUFBYjtBQUFvQixXQUFPLEVBQUU7QUFBQSxhQUFJVSxHQUFHLENBQUMsQ0FBRCxDQUFQO0FBQUE7QUFBN0IsdUJBUEosRUFRSTtBQUFPLFFBQUksRUFBQyxNQUFaO0FBQW1CLFlBQVEsRUFBRSxrQkFBQ0UsQ0FBRDtBQUFBLGFBQUtELGNBQWMsQ0FBQ0MsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBbkI7QUFBQTtBQUE3QixJQVJKLEVBU0ksNkJBQ0tQLE9BREwsZ0JBQ3dCQyxRQUR4QixDQVRKLENBREQ7QUFlQSxDQWpCRDs7S0FBTUgsSzs7QUFxQk5BLEtBQUssQ0FBQ1UsZUFBTjtBQUFBLDhMQUF3QixpQkFBT0MsR0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDdEI7QUFDQTtBQUNBO0FBQ09DLHNCQUplLEdBSUhELEdBSkcsQ0FJZkMsVUFKZTtBQUt0QkEsc0JBQVUsQ0FBQ0MsUUFBWCxDQUFvQlIsd0RBQUcsQ0FBQyxDQUFELENBQXZCO0FBTHNCO0FBQUEsbUJBTWhCTyxVQUFVLENBQUNDLFFBQVgsQ0FBb0JDLDZEQUFRLENBQUMsQ0FBRCxDQUE1QixDQU5nQjs7QUFBQTtBQUFBLDZDQU9mO0FBQUVWLG1CQUFLLEVBQUU7QUFBVCxhQVBlOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQXhCOztBQUFBO0FBQUE7QUFBQTtBQUFBLEksQ0FTQTs7O0FBQ2VXLDBIQUFPLENBQUMsU0FBU0MsZUFBVCxDQUF5QkMsS0FBekIsRUFBK0I7QUFDckQsU0FBTztBQUNOZixXQUFPLEVBQUVlLEtBQUssQ0FBQ2YsT0FBTixDQUFjZ0IsS0FEakI7QUFFTmYsWUFBUSxFQUFDYyxLQUFLLENBQUNFLElBQU4sQ0FBV2hCO0FBRmQsR0FBUDtBQUlBLENBTHFCLEVBS3BCLFNBQVNpQixrQkFBVCxDQUE0QlAsUUFBNUIsRUFBcUM7QUFDdEMsU0FBTztBQUNOUixPQUFHLEVBQUMsYUFBQ2dCLEdBQUQ7QUFBQSxhQUFTUixRQUFRLENBQUM7QUFBQzFCLFlBQUksRUFBQyxLQUFOO0FBQVlrQyxXQUFHLEVBQUNBO0FBQWhCLE9BQUQsQ0FBakI7QUFBQSxLQURFO0FBRU5mLGtCQUFjLEVBQUMsd0JBQUNnQixJQUFEO0FBQUEsYUFBUVQsUUFBUSxDQUFDO0FBQUMxQixZQUFJLEVBQUMsYUFBTjtBQUFvQmdDLFlBQUksRUFBQ0c7QUFBekIsT0FBRCxDQUFoQjtBQUFBO0FBRlQsR0FBUDtBQUlBLENBVnFCLENBQVAsQ0FVWnRCLEtBVlksQ0FBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgJy4uL3B1YmxpYy9pbmRleC5sZXNzJ1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnYW50ZCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQge2FkZCxhZGRBc3luY30gZnJvbSAnLi4vc3RvcmUvc3RvcmUnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5cbmNvbnN0IGV2ZW50cyA9IFtcblx0J3JvdXRlQ2hhbmdlU3RhcnQnLFxuXHQncm91dGVDaGFuZ2VDb21wb2xldGUnLFxuXHQncm91dGVDaGFuZ2VFcnJvcicsXG5cdCdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcblx0J2hhc2hDaGFuZ2VTdGFydCcsXG5cdCdoYXNoQ0hhbmdlQ29tcG9sZXRlJ1xuXVxuXG5mdW5jdGlvbiBtYWtlRXZlbnQodHlwZSl7XG4gcmV0dXJuICguLi5hcmdzKT0+e1xuIFx0Y29uc29sZS5sb2codHlwZSwuLi5hcmdzKVxuIH1cbn1cbmV2ZW50cy5mb3JFYWNoKChldmVudCk9Pntcblx0Um91dGVyLmV2ZW50cy5vbihldmVudCxtYWtlRXZlbnQoZXZlbnQpKVxufSlcblxuZnVuY3Rpb24gZ290b1BhZ2UoKXtcblx0Um91dGVyLnB1c2goe1xuXHRcdHBhdGhuYW1lOicvb3RoZXInLFxuXHRcdHF1ZXJ5Ontcblx0XHRcdGlkOjFcblx0XHR9XG5cdH0pXG59XG5cbmNvbnN0IEluZGV4ID0gKHByb3BzKSA9Pntcblx0Y29uc3Qge2NvdW50ZXIsdXNlcm5hbWUsc3RhcnMsYWRkLHVwZGF0ZVVzZXJOYW1lfT1wcm9wc1xuXHRyZXR1cm4gKFxuXHRcdDxkaXY+XG5cdFx0XHROZXh0IHN0YXJzOiB7c3RhcnN9XG5cdFx0XHQ8TGluayBocmVmPVwiL290aGVyP2lkPTJcIiBhcz1cIi9vdGhlci8yXCI+XG5cdFx0XHRcdDxCdXR0b24gdHlwZT1cInByaW1hcnlcIj5QcmltYXJ5PC9CdXR0b24+XG5cdFx0XHQ8L0xpbms+XG5cdFx0ICAgIDxCdXR0b24gb25DbGljaz17Z290b1BhZ2V9PkRlZmF1bHQ8L0J1dHRvbj5cblx0XHQgICAgPEJ1dHRvbiB0eXBlPVwiZGFzaGVkXCI+RGFzaGVkPC9CdXR0b24+XG5cdFx0ICAgIDxCdXR0b24gdHlwZT1cImxpbmtcIiBvbkNsaWNrPXsoKT0+YWRkKDIpfT5jaGFuZ2UgdXNlcm5hbWU8L0J1dHRvbj5cblx0XHQgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9eyhlKT0+dXBkYXRlVXNlck5hbWUoZS50YXJnZXQudmFsdWUpfS8+XG5cdFx0ICAgIDxkaXY+XG5cdFx0XHRcdGNvdW50Ontjb3VudGVyfSx1c2VybmFtZTp7dXNlcm5hbWV9XG5cdFx0ICAgIDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpXG59XG5cbiAgXG5cbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcbiAgLy8gY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvemVpdC9uZXh0LmpzJylcbiAgLy8gY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKClcbiAgLy8gcmV0dXJuIHsgc3RhcnM6IGpzb24uc3RhcmdhemVyc19jb3VudCB9XG4gIGNvbnN0IHtyZWR1eFN0b3JlfT1jdHhcbiAgcmVkdXhTdG9yZS5kaXNwYXRjaChhZGQoMykpXG4gIGF3YWl0IHJlZHV4U3RvcmUuZGlzcGF0Y2goYWRkQXN5bmMoNikpXG4gIHJldHVybiB7IHN0YXJzOiAyMDAgfVxufVxuLy8g6L+Y5rKh5pyJ5ZKMbmV4dGpz6ZuG5oiQXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KGZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSl7XG5cdHJldHVybiB7XG5cdFx0Y291bnRlcjogc3RhdGUuY291bnRlci5jb3VudCxcblx0XHR1c2VybmFtZTpzdGF0ZS51c2VyLnVzZXJuYW1lXG5cdH1cbn0sZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoKXtcblx0cmV0dXJuIHtcblx0XHRhZGQ6KG51bSkgPT4gZGlzcGF0Y2goe3R5cGU6J2FkZCcsbnVtOm51bX0pLFxuXHRcdHVwZGF0ZVVzZXJOYW1lOihuYW1lKT0+ZGlzcGF0Y2goe3R5cGU6XCJVUERBVEVfVVNFUlwiLHVzZXI6bmFtZX0pXG5cdH1cbn0pKEluZGV4KSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})