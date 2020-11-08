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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_pagesData_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/pagesData.js */ "./data/pagesData.js");
var _jsxFileName = "D:\\_Work\\_Unpaid\\Others\\rodia-valkanou\\Components\\navigation.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Navigation() {
  var _this = this;

  var menuItems = Object.keys(_data_pagesData_js__WEBPACK_IMPORTED_MODULE_2__["pages"]).filter(function (p) {
    return p !== "home";
  });
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, menuItems.map(function (e, index) {
    return __jsx("div", {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      as: "/".concat(_data_pagesData_js__WEBPACK_IMPORTED_MODULE_2__["pages"][e].slug),
      href: "/".concat(_data_pagesData_js__WEBPACK_IMPORTED_MODULE_2__["pages"][e].slug),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 13
      }
    }, __jsx("img", {
      src: _data_pagesData_js__WEBPACK_IMPORTED_MODULE_2__["pages"][e].logoSrc,
      className: "img-fluid",
      alt: "cube",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 15
      }
    }), _data_pagesData_js__WEBPACK_IMPORTED_MODULE_2__["pages"][e].title)));
  }), __jsx("img", {
    src: "https://raw.githubusercontent.com/smar152/rodia-valkanou/master/logo/green_cube.png",
    className: "",
    alt: "logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9uYXZpZ2F0aW9uLmpzIl0sIm5hbWVzIjpbIk5hdmlnYXRpb24iLCJtZW51SXRlbXMiLCJPYmplY3QiLCJrZXlzIiwicGFnZXMiLCJmaWx0ZXIiLCJwIiwibWFwIiwiZSIsImluZGV4Iiwic2x1ZyIsImxvZ29TcmMiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsVUFBVCxHQUFzQjtBQUFBOztBQUNuQyxNQUFNQyxTQUFTLEdBQUdDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZQyx3REFBWixFQUFtQkMsTUFBbkIsQ0FBMEIsVUFBQUMsQ0FBQztBQUFBLFdBQUlBLENBQUMsS0FBSyxNQUFWO0FBQUEsR0FBM0IsQ0FBbEI7QUFDQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0wsU0FBUyxDQUFDTSxHQUFWLENBQWMsVUFBQ0MsQ0FBRCxFQUFJQyxLQUFKO0FBQUEsV0FDYjtBQUFLLFNBQUcsRUFBRUEsS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUUsYUFBTUwsd0RBQUssQ0FBQ0ksQ0FBRCxDQUFMLENBQVNFLElBQWYsQ0FBUjtBQUErQixVQUFJLGFBQU1OLHdEQUFLLENBQUNJLENBQUQsQ0FBTCxDQUFTRSxJQUFmLENBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLGVBQVMsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLFNBQUcsRUFBRU4sd0RBQUssQ0FBQ0ksQ0FBRCxDQUFMLENBQVNHLE9BQW5CO0FBQTRCLGVBQVMsRUFBQyxXQUF0QztBQUFrRCxTQUFHLEVBQUMsTUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLEVBRUdQLHdEQUFLLENBQUNJLENBQUQsQ0FBTCxDQUFTSSxLQUZaLENBREYsQ0FERixDQURhO0FBQUEsR0FBZCxDQURILEVBV0U7QUFDRSxPQUFHLEVBQUMscUZBRE47QUFFRSxhQUFTLEVBQUMsRUFGWjtBQUdFLE9BQUcsRUFBQyxNQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFYRixDQURGO0FBbUJEO0tBckJ1QlosVSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bcGFnZV0uOTMyMGNkMWQxNzM5OWE4YjQyOWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgcGFnZXMgfSBmcm9tIFwiLi4vZGF0YS9wYWdlc0RhdGEuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmlnYXRpb24oKSB7XHJcbiAgY29uc3QgbWVudUl0ZW1zID0gT2JqZWN0LmtleXMocGFnZXMpLmZpbHRlcihwID0+IHAgIT09IFwiaG9tZVwiKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAge21lbnVJdGVtcy5tYXAoKGUsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgIDxMaW5rIGFzPXtgLyR7cGFnZXNbZV0uc2x1Z31gfSBocmVmPXtgLyR7cGFnZXNbZV0uc2x1Z31gfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz17cGFnZXNbZV0ubG9nb1NyY30gY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgYWx0PVwiY3ViZVwiIC8+XHJcbiAgICAgICAgICAgICAge3BhZ2VzW2VdLnRpdGxlfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSl9XHJcbiAgICAgIDxpbWdcclxuICAgICAgICBzcmM9XCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vc21hcjE1Mi9yb2RpYS12YWxrYW5vdS9tYXN0ZXIvbG9nby9ncmVlbl9jdWJlLnBuZ1wiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiXCJcclxuICAgICAgICBhbHQ9XCJsb2dvXCJcclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==