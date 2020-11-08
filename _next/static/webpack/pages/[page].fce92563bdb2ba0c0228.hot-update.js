webpackHotUpdate_N_E("pages/[page]",{

/***/ "./Components/navigation.js":
/*!**********************************!*\
  !*** ./Components/navigation.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navigation; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_pagesData_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/pagesData.js */ "./data/pagesData.js");
var _jsxFileName = "D:\\_Work\\_Unpaid\\Others\\rodia-valkanou\\Components\\navigation.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function Navigation() {
  var _this = this;

  var menuItems = Object.keys(_data_pagesData_js__WEBPACK_IMPORTED_MODULE_3__["pages"]).filter(function (p) {
    return p !== "home";
  });
  return __jsx("div", {
    className: "jsx-828444638" + " " + "pt-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, menuItems.map(function (e, index) {
    return __jsx("div", {
      key: index,
      className: "jsx-828444638",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      as: "/".concat(_data_pagesData_js__WEBPACK_IMPORTED_MODULE_3__["pages"][e].slug),
      href: "/".concat(_data_pagesData_js__WEBPACK_IMPORTED_MODULE_3__["pages"][e].slug),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "jsx-828444638" + " " + "row mb-2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 13
      }
    }, __jsx("img", {
      src: _data_pagesData_js__WEBPACK_IMPORTED_MODULE_3__["pages"][e].logoSrc,
      alt: "cube",
      className: "jsx-828444638" + " " + "img-fluid col-3",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 15
      }
    }), _data_pagesData_js__WEBPACK_IMPORTED_MODULE_3__["pages"][e].title)));
  }), __jsx("div", {
    className: "jsx-828444638" + " " + "pt-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: "https://raw.githubusercontent.com/smar152/rodia-valkanou/master/logo/gray_cube.png",
    alt: "logo",
    className: "jsx-828444638" + " " + "img-fluid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "828444638",
    __self: this
  }, "link.jsx-828444638{cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxfV29ya1xcX1VucGFpZFxcT3RoZXJzXFxyb2RpYS12YWxrYW5vdVxcQ29tcG9uZW50c1xcbmF2aWdhdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4QlMsQUFHNEIsZUFDakIiLCJmaWxlIjoiRDpcXF9Xb3JrXFxfVW5wYWlkXFxPdGhlcnNcXHJvZGlhLXZhbGthbm91XFxDb21wb25lbnRzXFxuYXZpZ2F0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBwYWdlcyB9IGZyb20gXCIuLi9kYXRhL3BhZ2VzRGF0YS5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2aWdhdGlvbigpIHtcclxuICBjb25zdCBtZW51SXRlbXMgPSBPYmplY3Qua2V5cyhwYWdlcykuZmlsdGVyKHAgPT4gcCAhPT0gXCJob21lXCIpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTNcIj5cclxuICAgICAge21lbnVJdGVtcy5tYXAoKGUsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgIDxMaW5rIGFzPXtgLyR7cGFnZXNbZV0uc2x1Z31gfSBocmVmPXtgLyR7cGFnZXNbZV0uc2x1Z31gfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWItMlwiPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz17cGFnZXNbZV0ubG9nb1NyY31cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZCBjb2wtM1wiXHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJjdWJlXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIHtwYWdlc1tlXS50aXRsZX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkpfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTRcIj5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBzcmM9XCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vc21hcjE1Mi9yb2RpYS12YWxrYW5vdS9tYXN0ZXIvbG9nby9ncmF5X2N1YmUucG5nXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiXHJcbiAgICAgICAgICBhbHQ9XCJsb2dvXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIGxpbmsge1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl19 */\n/*@ sourceURL=D:\\\\_Work\\\\_Unpaid\\\\Others\\\\rodia-valkanou\\\\Components\\\\navigation.js */"));
}
_c = Navigation;

var _c;

$RefreshReg$(_c, "Navigation");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9uYXZpZ2F0aW9uLmpzIl0sIm5hbWVzIjpbIk5hdmlnYXRpb24iLCJtZW51SXRlbXMiLCJPYmplY3QiLCJrZXlzIiwicGFnZXMiLCJmaWx0ZXIiLCJwIiwibWFwIiwiZSIsImluZGV4Iiwic2x1ZyIsImxvZ29TcmMiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsVUFBVCxHQUFzQjtBQUFBOztBQUNuQyxNQUFNQyxTQUFTLEdBQUdDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZQyx3REFBWixFQUFtQkMsTUFBbkIsQ0FBMEIsVUFBQUMsQ0FBQztBQUFBLFdBQUlBLENBQUMsS0FBSyxNQUFWO0FBQUEsR0FBM0IsQ0FBbEI7QUFDQSxTQUNFO0FBQUEsdUNBQWUsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dMLFNBQVMsQ0FBQ00sR0FBVixDQUFjLFVBQUNDLENBQUQsRUFBSUMsS0FBSjtBQUFBLFdBQ2I7QUFBSyxTQUFHLEVBQUVBLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUUsYUFBTUwsd0RBQUssQ0FBQ0ksQ0FBRCxDQUFMLENBQVNFLElBQWYsQ0FBUjtBQUErQixVQUFJLGFBQU1OLHdEQUFLLENBQUNJLENBQUQsQ0FBTCxDQUFTRSxJQUFmLENBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBLHlDQUFlLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQ0UsU0FBRyxFQUFFTix3REFBSyxDQUFDSSxDQUFELENBQUwsQ0FBU0csT0FEaEI7QUFHRSxTQUFHLEVBQUMsTUFITjtBQUFBLHlDQUVZLGlCQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQU1HUCx3REFBSyxDQUFDSSxDQUFELENBQUwsQ0FBU0ksS0FOWixDQURGLENBREYsQ0FEYTtBQUFBLEdBQWQsQ0FESCxFQWVFO0FBQUEsdUNBQWUsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxPQUFHLEVBQUMsb0ZBRE47QUFHRSxPQUFHLEVBQUMsTUFITjtBQUFBLHVDQUVZLFdBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBZkY7QUFBQTtBQUFBO0FBQUEseStEQURGO0FBaUNEO0tBbkN1QlosVSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bcGFnZV0uZmNlOTI1NjNiZGIyYmEwYzAyMjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgcGFnZXMgfSBmcm9tIFwiLi4vZGF0YS9wYWdlc0RhdGEuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmlnYXRpb24oKSB7XHJcbiAgY29uc3QgbWVudUl0ZW1zID0gT2JqZWN0LmtleXMocGFnZXMpLmZpbHRlcihwID0+IHAgIT09IFwiaG9tZVwiKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwdC0zXCI+XHJcbiAgICAgIHttZW51SXRlbXMubWFwKChlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgIDxkaXYga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICA8TGluayBhcz17YC8ke3BhZ2VzW2VdLnNsdWd9YH0gaHJlZj17YC8ke3BhZ2VzW2VdLnNsdWd9YH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTJcIj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9e3BhZ2VzW2VdLmxvZ29TcmN9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWQgY29sLTNcIlxyXG4gICAgICAgICAgICAgICAgYWx0PVwiY3ViZVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICB7cGFnZXNbZV0udGl0bGV9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApKX1cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC00XCI+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3NtYXIxNTIvcm9kaWEtdmFsa2Fub3UvbWFzdGVyL2xvZ28vZ3JheV9jdWJlLnBuZ1wiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWRcIlxyXG4gICAgICAgICAgYWx0PVwibG9nb1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICBsaW5rIHtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=