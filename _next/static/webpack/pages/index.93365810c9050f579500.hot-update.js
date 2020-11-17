webpackHotUpdate_N_E("pages/index",{

/***/ "./Components/PhoneNavigation.js":
/*!***************************************!*\
  !*** ./Components/PhoneNavigation.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PhoneNavigation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _menuLinks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuLinks.js */ "./Components/menuLinks.js");
var _jsxFileName = "D:\\_Work\\_Unpaid\\Others\\rodia-valkanou\\Components\\PhoneNavigation.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function PhoneNavigation() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isOpen = _useState[0],
      setOpen = _useState[1];

  var closeMenu = function closeMenu() {
    setOpen(false);
    console.log("close menu");
  };

  var toggleMenu = function toggleMenu() {
    setOpen(!isOpen);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "d-block d-md-none pt-3 col-2",
    onClick: toggleMenu,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "button",
    style: {
      transform: isOpen ? "rotate(90deg)" : "none"
    },
    viewBox: "0 0 448 512",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx("path", {
    d: "M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }))), __jsx("div", {
    className: "drawer col-2 d-md-none  ".concat(isOpen ? "active d-flex flex-column" : "d-none"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, __jsx(_menuLinks_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    closeMenu: closeMenu,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  })));
}

_s(PhoneNavigation, "WPi2qa4HrijmrT7XyqmH7MkbZuo=");

_c = PhoneNavigation;

var _c;

$RefreshReg$(_c, "PhoneNavigation");

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

/***/ }),

/***/ "./Components/pageLayout.js":
/*!**********************************!*\
  !*** ./Components/pageLayout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PageLayout; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.js */ "./Components/header.js");
/* harmony import */ var _DesktopNavigation_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DesktopNavigation.js */ "./Components/DesktopNavigation.js");
/* harmony import */ var _PhoneNavigation_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PhoneNavigation.js */ "./Components/PhoneNavigation.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "D:\\_Work\\_Unpaid\\Others\\rodia-valkanou\\Components\\pageLayout.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function PageLayout(_ref) {
  var pageTitle = _ref.pageTitle,
      pageSubtitle = _ref.pageSubtitle,
      pageContent = _ref.pageContent;
  return __jsx("div", {
    className: "jsx-315272769" + " " + "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-315272769" + " " + "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-315272769" + " " + "col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx(_header_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }
  }))), __jsx("div", {
    className: "jsx-315272769" + " " + "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-315272769" + " " + "col-12 col-md-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx(_DesktopNavigation_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    currentPageTitle: pageTitle,
    className: "d-none d-md-block",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }), __jsx(_PhoneNavigation_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    currentPageTitle: pageTitle,
    className: "d-md-none d-block",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "jsx-315272769" + " " + "col-12 col-md-9",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "jsx-315272769",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, pageTitle), __jsx("h6", {
    className: "jsx-315272769",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, pageSubtitle), pageContent)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "315272769",
    __self: this
  }, "html{margin-left:calc(100vw - 100%);}body{background-color:#f1f1f1;font-family:Verdana,Geneva,sans-serif;color:#3e3e3e;}.container{padding-top:60px;}h6{font-style:italic;}.floatingImage{float:right;}svg{height:30px;cursor:pointer;-webkit-animation:rotation 2s infinite linear;animation:rotation 2s infinite linear;}.drawer{z-index:1;right:0px;width:200px;top:0px;-webkit-transform:translateX(400px);-ms-transform:translateX(400px);transform:translateX(400px);-webkit-transition-duration:1s;transition-duration:1s;padding:40px;text-align:right;}.active{-webkit-transform:translateX(0px);-ms-transform:translateX(0px);transform:translateX(0px);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxfV29ya1xcX1VucGFpZFxcT3RoZXJzXFxyb2RpYS12YWxrYW5vdVxcQ29tcG9uZW50c1xccGFnZUxheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQ1MsQUFHNEMsQUFHTixBQUtSLEFBR0MsQUFHTixBQUdBLEFBS0YsQUFVZ0IsVUFUaEIsRUFSWixBQUdpQixLQVRqQixDQUdBLEVBWWMsS0FwQjRCLEVBZUYsSUFsQnhDLENBd0JVLFFBQ29CLHVCQXJCZCxjQUNoQixhQTJCQSxxQkFiQSx5QkFPeUIsc0RBQ1YsYUFDSSxpQkFDbkIiLCJmaWxlIjoiRDpcXF9Xb3JrXFxfVW5wYWlkXFxPdGhlcnNcXHJvZGlhLXZhbGthbm91XFxDb21wb25lbnRzXFxwYWdlTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9oZWFkZXIuanNcIjtcclxuaW1wb3J0IERlc2t0b3BOYXZpZ2F0aW9uIGZyb20gXCIuL0Rlc2t0b3BOYXZpZ2F0aW9uLmpzXCI7XHJcbmltcG9ydCBQaG9uZU5hdmlnYXRpb24gZnJvbSBcIi4vUGhvbmVOYXZpZ2F0aW9uLmpzXCI7XHJcbmltcG9ydCBcImJvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZUxheW91dCh7IHBhZ2VUaXRsZSwgcGFnZVN1YnRpdGxlLCBwYWdlQ29udGVudCB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTNcIj5cclxuICAgICAgICAgIDxEZXNrdG9wTmF2aWdhdGlvblxyXG4gICAgICAgICAgICBjdXJyZW50UGFnZVRpdGxlPXtwYWdlVGl0bGV9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtbm9uZSBkLW1kLWJsb2NrXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8UGhvbmVOYXZpZ2F0aW9uXHJcbiAgICAgICAgICAgIGN1cnJlbnRQYWdlVGl0bGU9e3BhZ2VUaXRsZX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1tZC1ub25lIGQtYmxvY2tcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtOVwiPlxyXG4gICAgICAgICAgPGgyPntwYWdlVGl0bGV9PC9oMj5cclxuICAgICAgICAgIDxoNj57cGFnZVN1YnRpdGxlfTwvaDY+XHJcbiAgICAgICAgICB7cGFnZUNvbnRlbnR9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIGh0bWwge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogY2FsYygxMDB2dyAtIDEwMCUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjM2UzZTNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA2MHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaDYge1xyXG4gICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZmxvYXRpbmdJbWFnZSB7XHJcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHN2ZyB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBhbmltYXRpb246IHJvdGF0aW9uIDJzIGluZmluaXRlIGxpbmVhcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5kcmF3ZXIge1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICByaWdodDogMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNDAwcHgpO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxcztcclxuICAgICAgICAgICAgcGFkZGluZzogNDBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYWN0aXZlIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl19 */\n/*@ sourceURL=D:\\\\_Work\\\\_Unpaid\\\\Others\\\\rodia-valkanou\\\\Components\\\\pageLayout.js */"));
}
_c = PageLayout;

var _c;

$RefreshReg$(_c, "PageLayout");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9QaG9uZU5hdmlnYXRpb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL0NvbXBvbmVudHMvcGFnZUxheW91dC5qcyJdLCJuYW1lcyI6WyJQaG9uZU5hdmlnYXRpb24iLCJ1c2VTdGF0ZSIsImlzT3BlbiIsInNldE9wZW4iLCJjbG9zZU1lbnUiLCJjb25zb2xlIiwibG9nIiwidG9nZ2xlTWVudSIsInRyYW5zZm9ybSIsIlBhZ2VMYXlvdXQiLCJwYWdlVGl0bGUiLCJwYWdlU3VidGl0bGUiLCJwYWdlQ29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsZUFBVCxHQUEyQjtBQUFBOztBQUFBLGtCQUNkQyxzREFBUSxDQUFDLEtBQUQsQ0FETTtBQUFBLE1BQ2pDQyxNQURpQztBQUFBLE1BQ3pCQyxPQUR5Qjs7QUFHeEMsTUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUN0QkQsV0FBTyxDQUFDLEtBQUQsQ0FBUDtBQUNBRSxXQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaO0FBQ0QsR0FIRDs7QUFJQSxNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3ZCSixXQUFPLENBQUMsQ0FBQ0QsTUFBRixDQUFQO0FBQ0QsR0FGRDs7QUFHQSxTQUNFLG1FQUVFO0FBQUssYUFBUyxFQUFDLDhCQUFmO0FBQThDLFdBQU8sRUFBRUssVUFBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsU0FBSyxFQUFDLDRCQURSO0FBRUUsYUFBUyxFQUFDLFFBRlo7QUFHRSxTQUFLLEVBQUU7QUFDTEMsZUFBUyxFQUFFTixNQUFNLEdBQUcsZUFBSCxHQUFxQjtBQURqQyxLQUhUO0FBTUUsV0FBTyxFQUFDLGFBTlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVFFO0FBQU0sS0FBQyxFQUFDLHVWQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSRixDQURGLENBRkYsRUFjRTtBQUNFLGFBQVMsb0NBQ1BBLE1BQU0sR0FBRywyQkFBSCxHQUFpQyxRQURoQyxDQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLRSxNQUFDLHFEQUFEO0FBQVcsYUFBUyxFQUFFRSxTQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsQ0FkRixDQURGO0FBd0JEOztHQWxDdUJKLGU7O0tBQUFBLGU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIeEI7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTUyxVQUFULE9BQThEO0FBQUEsTUFBeENDLFNBQXdDLFFBQXhDQSxTQUF3QztBQUFBLE1BQTdCQyxZQUE2QixRQUE3QkEsWUFBNkI7QUFBQSxNQUFmQyxXQUFlLFFBQWZBLFdBQWU7QUFDM0UsU0FDRTtBQUFBLHVDQUFlLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUEsdUNBQWUsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQSx1Q0FBZSxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLENBREYsRUFNRTtBQUFBLHVDQUFlLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUEsdUNBQWUsaUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNkRBQUQ7QUFDRSxvQkFBZ0IsRUFBRUYsU0FEcEI7QUFFRSxhQUFTLEVBQUMsbUJBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBS0UsTUFBQywyREFBRDtBQUNFLG9CQUFnQixFQUFFQSxTQURwQjtBQUVFLGFBQVMsRUFBQyxtQkFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsQ0FERixFQVdFO0FBQUEsdUNBQWUsaUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLQSxTQUFMLENBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS0MsWUFBTCxDQUZGLEVBR0dDLFdBSEgsQ0FYRixDQU5GO0FBQUE7QUFBQTtBQUFBLGlrSUFERjtBQWtFRDtLQW5FdUJILFUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTMzNjU4MTBjOTA1MGY1Nzk1MDAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNZW51TGlua3MgZnJvbSBcIi4vbWVudUxpbmtzLmpzXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQaG9uZU5hdmlnYXRpb24oKSB7XHJcbiAgY29uc3QgW2lzT3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGNsb3NlTWVudSA9ICgpID0+IHtcclxuICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gICAgY29uc29sZS5sb2coXCJjbG9zZSBtZW51XCIpO1xyXG4gIH07XHJcbiAgY29uc3QgdG9nZ2xlTWVudSA9ICgpID0+IHtcclxuICAgIHNldE9wZW4oIWlzT3Blbik7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgey8qIFBob25lIE5hdmlnYXRpb24gKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1ibG9jayBkLW1kLW5vbmUgcHQtMyBjb2wtMlwiIG9uQ2xpY2s9e3RvZ2dsZU1lbnV9PlxyXG4gICAgICAgIDxzdmdcclxuICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uXCJcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogaXNPcGVuID8gXCJyb3RhdGUoOTBkZWcpXCIgOiBcIm5vbmVcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICB2aWV3Qm94PVwiMCAwIDQ0OCA1MTJcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxwYXRoIGQ9XCJNMTYgMTMyaDQxNmM4LjgzNyAwIDE2LTcuMTYzIDE2LTE2Vjc2YzAtOC44MzctNy4xNjMtMTYtMTYtMTZIMTZDNy4xNjMgNjAgMCA2Ny4xNjMgMCA3NnY0MGMwIDguODM3IDcuMTYzIDE2IDE2IDE2em0wIDE2MGg0MTZjOC44MzcgMCAxNi03LjE2MyAxNi0xNnYtNDBjMC04LjgzNy03LjE2My0xNi0xNi0xNkgxNmMtOC44MzcgMC0xNiA3LjE2My0xNiAxNnY0MGMwIDguODM3IDcuMTYzIDE2IDE2IDE2em0wIDE2MGg0MTZjOC44MzcgMCAxNi03LjE2MyAxNi0xNnYtNDBjMC04LjgzNy03LjE2My0xNi0xNi0xNkgxNmMtOC44MzcgMC0xNiA3LjE2My0xNiAxNnY0MGMwIDguODM3IDcuMTYzIDE2IDE2IDE2elwiIC8+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtgZHJhd2VyIGNvbC0yIGQtbWQtbm9uZSAgJHtcclxuICAgICAgICAgIGlzT3BlbiA/IFwiYWN0aXZlIGQtZmxleCBmbGV4LWNvbHVtblwiIDogXCJkLW5vbmVcIlxyXG4gICAgICAgIH1gfVxyXG4gICAgICA+XHJcbiAgICAgICAgPE1lbnVMaW5rcyBjbG9zZU1lbnU9e2Nsb3NlTWVudX0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBIZWFkZXIgZnJvbSBcIi4vaGVhZGVyLmpzXCI7XHJcbmltcG9ydCBEZXNrdG9wTmF2aWdhdGlvbiBmcm9tIFwiLi9EZXNrdG9wTmF2aWdhdGlvbi5qc1wiO1xyXG5pbXBvcnQgUGhvbmVOYXZpZ2F0aW9uIGZyb20gXCIuL1Bob25lTmF2aWdhdGlvbi5qc1wiO1xyXG5pbXBvcnQgXCJib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2VMYXlvdXQoeyBwYWdlVGl0bGUsIHBhZ2VTdWJ0aXRsZSwgcGFnZUNvbnRlbnQgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC0zXCI+XHJcbiAgICAgICAgICA8RGVza3RvcE5hdmlnYXRpb25cclxuICAgICAgICAgICAgY3VycmVudFBhZ2VUaXRsZT17cGFnZVRpdGxlfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJkLW5vbmUgZC1tZC1ibG9ja1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPFBob25lTmF2aWdhdGlvblxyXG4gICAgICAgICAgICBjdXJyZW50UGFnZVRpdGxlPXtwYWdlVGl0bGV9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtbWQtbm9uZSBkLWJsb2NrXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTlcIj5cclxuICAgICAgICAgIDxoMj57cGFnZVRpdGxlfTwvaDI+XHJcbiAgICAgICAgICA8aDY+e3BhZ2VTdWJ0aXRsZX08L2g2PlxyXG4gICAgICAgICAge3BhZ2VDb250ZW50fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxzdHlsZSBnbG9iYWwganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICBodG1sIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGNhbGMoMTAwdncgLSAxMDAlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICBjb2xvcjogIzNlM2UzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogNjBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGg2IHtcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmZsb2F0aW5nSW1hZ2Uge1xyXG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzdmcge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgYW5pbWF0aW9uOiByb3RhdGlvbiAycyBpbmZpbml0ZSBsaW5lYXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZHJhd2VyIHtcclxuICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgcmlnaHQ6IDBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDQwMHB4KTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDQwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=