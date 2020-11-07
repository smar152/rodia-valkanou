webpackHotUpdate_N_E("pages/index",{

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
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  console.log("pageKey", pageKey);
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
      lineNumber: 13,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW3BhZ2VdLmpzIl0sIm5hbWVzIjpbIlBhZ2UiLCJwYWdlS2V5Iiwicm91dGVyIiwidXNlUm91dGVyIiwiY29uc29sZSIsImxvZyIsInRoaXNQYWdlIiwicXVlcnkiLCJwYWdlIiwicGFnZURhdGEiLCJnZXRQYWdlRGF0YSIsImNvbnRlbnQiLCJ0aXRsZSIsInN1YnRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsT0FBMkI7QUFBQTs7QUFBQSxNQUFYQyxPQUFXLFFBQVhBLE9BQVc7QUFDeEMsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCSixPQUF2QjtBQUNBLE1BQU1LLFFBQVEsR0FBR0wsT0FBTyxHQUFHQSxPQUFILEdBQWFDLE1BQU0sQ0FBQ0ssS0FBUCxDQUFhQyxJQUFsRDtBQUNBLE1BQU1DLFFBQVEsR0FBR0MsbUVBQVcsQ0FBQ0osUUFBRCxDQUE1QjtBQUp3QyxNQUtoQ0ssT0FMZ0MsR0FLSEYsUUFMRyxDQUtoQ0UsT0FMZ0M7QUFBQSxNQUt2QkMsS0FMdUIsR0FLSEgsUUFMRyxDQUt2QkcsS0FMdUI7QUFBQSxNQUtoQkMsUUFMZ0IsR0FLSEosUUFMRyxDQUtoQkksUUFMZ0I7QUFPeEMsU0FDRSxNQUFDLGlFQUFEO0FBQ0UsT0FBRyxFQUFDLE1BRE47QUFFRSxhQUFTLEVBQUVELEtBRmI7QUFHRSxnQkFBWSxFQUFFQyxRQUhoQjtBQUlFLGVBQVcsRUFBRUYsT0FKZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREY7QUFRRDs7R0FmdUJYLEk7VUFDUEcscUQ7OztLQURPSCxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjI3YWEwOTZhMmU4MjIzYWVmY2QyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBQYWdlTGF5b3V0IGZyb20gXCIuLi9Db21wb25lbnRzL3BhZ2VMYXlvdXQuanNcIjtcbmltcG9ydCB7IGdldFBhZ2VEYXRhIH0gZnJvbSBcIi4uL2RhdGEvcGFnZXNEYXRhXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2UoeyBwYWdlS2V5IH0pIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnNvbGUubG9nKFwicGFnZUtleVwiLCBwYWdlS2V5KTtcbiAgY29uc3QgdGhpc1BhZ2UgPSBwYWdlS2V5ID8gcGFnZUtleSA6IHJvdXRlci5xdWVyeS5wYWdlO1xuICBjb25zdCBwYWdlRGF0YSA9IGdldFBhZ2VEYXRhKHRoaXNQYWdlKTtcbiAgY29uc3QgeyBjb250ZW50LCB0aXRsZSwgc3VidGl0bGUgfSA9IHBhZ2VEYXRhO1xuXG4gIHJldHVybiAoXG4gICAgPFBhZ2VMYXlvdXRcbiAgICAgIGtleT1cInBhZ2VcIlxuICAgICAgcGFnZVRpdGxlPXt0aXRsZX1cbiAgICAgIHBhZ2VTdWJ0aXRsZT17c3VidGl0bGV9XG4gICAgICBwYWdlQ29udGVudD17Y29udGVudH1cbiAgICAvPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==