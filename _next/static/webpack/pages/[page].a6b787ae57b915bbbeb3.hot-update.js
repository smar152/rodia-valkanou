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
/* harmony import */ var _Components_pageLayout_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/pageLayout.js */ "./Components/pageLayout.js");
/* harmony import */ var _data_pagesData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/pagesData */ "./data/pagesData.js");
var _jsxFileName = "C:\\Users\\Panagis\\code\\rodia-valkanou\\pages\\[page].js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Page(_ref) {
  _s();

  var pageKey = _ref.pageKey;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])(); // Take page key from props if it exists, otherwise from router

  var thisPage = pageKey ? pageKey : router.query.page;
  var pageData = Object(_data_pagesData__WEBPACK_IMPORTED_MODULE_3__["getPageData"])(thisPage);
  var content = pageData.content,
      title = pageData.title,
      subtitle = pageData.subtitle;
  return __jsx(_Components_pageLayout_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    key: "page",
    pageTitle: title,
    pageSubtitle: subtitle,
    pageContent: content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW3BhZ2VdLmpzIl0sIm5hbWVzIjpbIlBhZ2UiLCJwYWdlS2V5Iiwicm91dGVyIiwidXNlUm91dGVyIiwidGhpc1BhZ2UiLCJxdWVyeSIsInBhZ2UiLCJwYWdlRGF0YSIsImdldFBhZ2VEYXRhIiwiY29udGVudCIsInRpdGxlIiwic3VidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxPQUEyQjtBQUFBOztBQUFBLE1BQVhDLE9BQVcsUUFBWEEsT0FBVztBQUN4QyxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCLENBRHdDLENBR3hDOztBQUVBLE1BQU1DLFFBQVEsR0FBR0gsT0FBTyxHQUFHQSxPQUFILEdBQWFDLE1BQU0sQ0FBQ0csS0FBUCxDQUFhQyxJQUFsRDtBQUNBLE1BQU1DLFFBQVEsR0FBR0MsbUVBQVcsQ0FBQ0osUUFBRCxDQUE1QjtBQU53QyxNQU9oQ0ssT0FQZ0MsR0FPSEYsUUFQRyxDQU9oQ0UsT0FQZ0M7QUFBQSxNQU92QkMsS0FQdUIsR0FPSEgsUUFQRyxDQU92QkcsS0FQdUI7QUFBQSxNQU9oQkMsUUFQZ0IsR0FPSEosUUFQRyxDQU9oQkksUUFQZ0I7QUFTeEMsU0FDRSxNQUFDLGlFQUFEO0FBQ0UsT0FBRyxFQUFDLE1BRE47QUFFRSxhQUFTLEVBQUVELEtBRmI7QUFHRSxnQkFBWSxFQUFFQyxRQUhoQjtBQUlFLGVBQVcsRUFBRUYsT0FKZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREY7QUFRRDs7R0FqQnVCVCxJO1VBQ1BHLHFEOzs7S0FET0gsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bcGFnZV0uYTZiNzg3YWU1N2I5MTViYmJlYjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IFBhZ2VMYXlvdXQgZnJvbSBcIi4uL0NvbXBvbmVudHMvcGFnZUxheW91dC5qc1wiO1xuaW1wb3J0IHsgZ2V0UGFnZURhdGEgfSBmcm9tIFwiLi4vZGF0YS9wYWdlc0RhdGFcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZSh7IHBhZ2VLZXkgfSkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICAvLyBUYWtlIHBhZ2Uga2V5IGZyb20gcHJvcHMgaWYgaXQgZXhpc3RzLCBvdGhlcndpc2UgZnJvbSByb3V0ZXJcblxuICBjb25zdCB0aGlzUGFnZSA9IHBhZ2VLZXkgPyBwYWdlS2V5IDogcm91dGVyLnF1ZXJ5LnBhZ2U7XG4gIGNvbnN0IHBhZ2VEYXRhID0gZ2V0UGFnZURhdGEodGhpc1BhZ2UpO1xuICBjb25zdCB7IGNvbnRlbnQsIHRpdGxlLCBzdWJ0aXRsZSB9ID0gcGFnZURhdGE7XG5cbiAgcmV0dXJuIChcbiAgICA8UGFnZUxheW91dFxuICAgICAga2V5PVwicGFnZVwiXG4gICAgICBwYWdlVGl0bGU9e3RpdGxlfVxuICAgICAgcGFnZVN1YnRpdGxlPXtzdWJ0aXRsZX1cbiAgICAgIHBhZ2VDb250ZW50PXtjb250ZW50fVxuICAgIC8+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9