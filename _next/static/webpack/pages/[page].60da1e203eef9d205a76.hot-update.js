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
  var thisPage = router.query.page;
  console.log(thisPage);

  var _ref = Object(_data_pagesData_js__WEBPACK_IMPORTED_MODULE_2__["getPagesData"])()[thisPage] || {},
      content = _ref.content,
      title = _ref.title,
      subtitle = _ref.subtitle;

  return __jsx(_Components_pageLayout_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    key: "page",
    pageTitle: title,
    pageSubtitle: subtitle,
    pageContent: content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW3BhZ2VdLmpzIl0sIm5hbWVzIjpbIlBhZ2UiLCJwcm9wcyIsInJvdXRlciIsInVzZVJvdXRlciIsImNvbnNvbGUiLCJsb2ciLCJ0aGlzUGFnZSIsInF1ZXJ5IiwicGFnZSIsImdldFBhZ2VzRGF0YSIsImNvbnRlbnQiLCJ0aXRsZSIsInN1YnRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsQ0FBY0MsS0FBZCxFQUFxQjtBQUFBOztBQUNsQyxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRUFDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSixLQUFaO0FBRUEsTUFBTUssUUFBUSxHQUFHSixNQUFNLENBQUNLLEtBQVAsQ0FBYUMsSUFBOUI7QUFDQUosU0FBTyxDQUFDQyxHQUFSLENBQVlDLFFBQVo7O0FBTmtDLGFBT0dHLHVFQUFZLEdBQUdILFFBQUgsQ0FBWixJQUE0QixFQVAvQjtBQUFBLE1BTzFCSSxPQVAwQixRQU8xQkEsT0FQMEI7QUFBQSxNQU9qQkMsS0FQaUIsUUFPakJBLEtBUGlCO0FBQUEsTUFPVkMsUUFQVSxRQU9WQSxRQVBVOztBQVFsQyxTQUNFLE1BQUMsaUVBQUQ7QUFDRSxPQUFHLEVBQUMsTUFETjtBQUVFLGFBQVMsRUFBRUQsS0FGYjtBQUdFLGdCQUFZLEVBQUVDLFFBSGhCO0FBSUUsZUFBVyxFQUFFRixPQUpmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERjtBQVFEOztHQWhCdUJWLEk7VUFDUEcscUQ7OztLQURPSCxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1twYWdlXS42MGRhMWUyMDNlZWY5ZDIwNWE3Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBnZXRQYWdlc0RhdGEgfSBmcm9tICcuLi9kYXRhL3BhZ2VzRGF0YS5qcyc7XHJcbmltcG9ydCBQYWdlTGF5b3V0IGZyb20gJy4uL0NvbXBvbmVudHMvcGFnZUxheW91dC5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlKHByb3BzKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnNvbGUubG9nKHByb3BzKTtcclxuXHJcbiAgY29uc3QgdGhpc1BhZ2UgPSByb3V0ZXIucXVlcnkucGFnZTtcclxuICBjb25zb2xlLmxvZyh0aGlzUGFnZSk7XHJcbiAgY29uc3QgeyBjb250ZW50LCB0aXRsZSwgc3VidGl0bGUgfSA9IGdldFBhZ2VzRGF0YSgpW3RoaXNQYWdlXSB8fCB7fTtcclxuICByZXR1cm4gKFxyXG4gICAgPFBhZ2VMYXlvdXRcclxuICAgICAga2V5PVwicGFnZVwiXHJcbiAgICAgIHBhZ2VUaXRsZT17dGl0bGV9XHJcbiAgICAgIHBhZ2VTdWJ0aXRsZT17c3VidGl0bGV9XHJcbiAgICAgIHBhZ2VDb250ZW50PXtjb250ZW50fVxyXG4gICAgLz5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=