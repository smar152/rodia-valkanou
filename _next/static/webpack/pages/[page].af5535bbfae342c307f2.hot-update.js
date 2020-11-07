webpackHotUpdate_N_E("pages/[page]",{

/***/ "./pages/[page].js":
/*!*************************!*\
  !*** ./pages/[page].js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Page; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_pagesData_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/pagesData.js */ "./data/pagesData.js");
/* harmony import */ var _Components_pageLayout_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/pageLayout.js */ "./Components/pageLayout.js");
var _jsxFileName = "C:\\Users\\Panagis\\code\\rodia-valkanou\\pages\\[page].js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Page(props) {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  console.log(props);
  debugger;
  var thisPage = router.query.page;
  console.log(thisPage);
  var _getPagesData$thisPag = Object(_data_pagesData_js__WEBPACK_IMPORTED_MODULE_2__["getPagesData"])()[thisPage],
      content = _getPagesData$thisPag.content,
      title = _getPagesData$thisPag.title,
      subtitle = _getPagesData$thisPag.subtitle;
  return __jsx(_Components_pageLayout_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    key: "page",
    pageTitle: title,
    pageSubtitle: subtitle,
    pageContent: content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  });
}

_s(Page, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"]];
});

_c = Page;

var _c;

$RefreshReg$(_c, "Page");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW3BhZ2VdLmpzIl0sIm5hbWVzIjpbIlBhZ2UiLCJwcm9wcyIsInJvdXRlciIsInVzZVJvdXRlciIsImNvbnNvbGUiLCJsb2ciLCJ0aGlzUGFnZSIsInF1ZXJ5IiwicGFnZSIsImdldFBhZ2VzRGF0YSIsImNvbnRlbnQiLCJ0aXRsZSIsInN1YnRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsQ0FBY0MsS0FBZCxFQUFxQjtBQUFBOztBQUNsQyxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRUFDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSixLQUFaO0FBQ0E7QUFFQSxNQUFNSyxRQUFRLEdBQUdKLE1BQU0sQ0FBQ0ssS0FBUCxDQUFhQyxJQUE5QjtBQUNBSixTQUFPLENBQUNDLEdBQVIsQ0FBWUMsUUFBWjtBQVBrQyw4QkFTR0csdUVBQVksR0FBR0gsUUFBSCxDQVRmO0FBQUEsTUFTMUJJLE9BVDBCLHlCQVMxQkEsT0FUMEI7QUFBQSxNQVNqQkMsS0FUaUIseUJBU2pCQSxLQVRpQjtBQUFBLE1BU1ZDLFFBVFUseUJBU1ZBLFFBVFU7QUFVbEMsU0FDRSxNQUFDLGlFQUFEO0FBQ0UsT0FBRyxFQUFDLE1BRE47QUFFRSxhQUFTLEVBQUVELEtBRmI7QUFHRSxnQkFBWSxFQUFFQyxRQUhoQjtBQUlFLGVBQVcsRUFBRUYsT0FKZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREY7QUFRRDs7R0FsQnVCVixJO1VBQ1BHLHFEOzs7S0FET0gsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bcGFnZV0uYWY1NTM1YmJmYWUzNDJjMzA3ZjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgZ2V0UGFnZXNEYXRhIH0gZnJvbSAnLi4vZGF0YS9wYWdlc0RhdGEuanMnO1xyXG5pbXBvcnQgUGFnZUxheW91dCBmcm9tICcuLi9Db21wb25lbnRzL3BhZ2VMYXlvdXQuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZShwcm9wcykge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zb2xlLmxvZyhwcm9wcyk7XHJcbiAgZGVidWdnZXI7XHJcblxyXG4gIGNvbnN0IHRoaXNQYWdlID0gcm91dGVyLnF1ZXJ5LnBhZ2U7XHJcbiAgY29uc29sZS5sb2codGhpc1BhZ2UpO1xyXG5cclxuICBjb25zdCB7IGNvbnRlbnQsIHRpdGxlLCBzdWJ0aXRsZSB9ID0gZ2V0UGFnZXNEYXRhKClbdGhpc1BhZ2VdO1xyXG4gIHJldHVybiAoXHJcbiAgICA8UGFnZUxheW91dFxyXG4gICAgICBrZXk9XCJwYWdlXCJcclxuICAgICAgcGFnZVRpdGxlPXt0aXRsZX1cclxuICAgICAgcGFnZVN1YnRpdGxlPXtzdWJ0aXRsZX1cclxuICAgICAgcGFnZUNvbnRlbnQ9e2NvbnRlbnR9XHJcbiAgICAvPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==