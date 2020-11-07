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
  var thisPage = pageKey ? pageKey : router.query.page; // Take page key from props if it exists

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
      lineNumber: 12,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW3BhZ2VdLmpzIl0sIm5hbWVzIjpbIlBhZ2UiLCJwYWdlS2V5Iiwicm91dGVyIiwidXNlUm91dGVyIiwidGhpc1BhZ2UiLCJxdWVyeSIsInBhZ2UiLCJwYWdlRGF0YSIsImdldFBhZ2VEYXRhIiwiY29udGVudCIsInRpdGxlIiwic3VidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxPQUEyQjtBQUFBOztBQUFBLE1BQVhDLE9BQVcsUUFBWEEsT0FBVztBQUN4QyxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHSCxPQUFPLEdBQUdBLE9BQUgsR0FBYUMsTUFBTSxDQUFDRyxLQUFQLENBQWFDLElBQWxELENBRndDLENBRWdCOztBQUN4RCxNQUFNQyxRQUFRLEdBQUdDLG1FQUFXLENBQUNKLFFBQUQsQ0FBNUI7QUFId0MsTUFJaENLLE9BSmdDLEdBSUhGLFFBSkcsQ0FJaENFLE9BSmdDO0FBQUEsTUFJdkJDLEtBSnVCLEdBSUhILFFBSkcsQ0FJdkJHLEtBSnVCO0FBQUEsTUFJaEJDLFFBSmdCLEdBSUhKLFFBSkcsQ0FJaEJJLFFBSmdCO0FBTXhDLFNBQ0UsTUFBQyxpRUFBRDtBQUNFLE9BQUcsRUFBQyxNQUROO0FBRUUsYUFBUyxFQUFFRCxLQUZiO0FBR0UsZ0JBQVksRUFBRUMsUUFIaEI7QUFJRSxlQUFXLEVBQUVGLE9BSmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGO0FBUUQ7O0dBZHVCVCxJO1VBQ1BHLHFEOzs7S0FET0gsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40Y2E2NzBiMjljMWQ5MDdmNmMzZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgUGFnZUxheW91dCBmcm9tIFwiLi4vQ29tcG9uZW50cy9wYWdlTGF5b3V0LmpzXCI7XG5pbXBvcnQgeyBnZXRQYWdlRGF0YSB9IGZyb20gXCIuLi9kYXRhL3BhZ2VzRGF0YVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlKHsgcGFnZUtleSB9KSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB0aGlzUGFnZSA9IHBhZ2VLZXkgPyBwYWdlS2V5IDogcm91dGVyLnF1ZXJ5LnBhZ2U7IC8vIFRha2UgcGFnZSBrZXkgZnJvbSBwcm9wcyBpZiBpdCBleGlzdHNcbiAgY29uc3QgcGFnZURhdGEgPSBnZXRQYWdlRGF0YSh0aGlzUGFnZSk7XG4gIGNvbnN0IHsgY29udGVudCwgdGl0bGUsIHN1YnRpdGxlIH0gPSBwYWdlRGF0YTtcblxuICByZXR1cm4gKFxuICAgIDxQYWdlTGF5b3V0XG4gICAgICBrZXk9XCJwYWdlXCJcbiAgICAgIHBhZ2VUaXRsZT17dGl0bGV9XG4gICAgICBwYWdlU3VidGl0bGU9e3N1YnRpdGxlfVxuICAgICAgcGFnZUNvbnRlbnQ9e2NvbnRlbnR9XG4gICAgLz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=