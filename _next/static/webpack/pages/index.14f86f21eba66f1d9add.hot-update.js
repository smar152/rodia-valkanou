webpackHotUpdate_N_E("pages/index",{

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
var _jsxFileName = "D:\\_Work\\_Unpaid\\Others\\rodia-valkanou\\Components\\navigation.js",
    _s = $RefreshSig$();



var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function Navigation(_ref) {
  _s();

  var _this = this;

  var currentPageTitle = _ref.currentPageTitle;
  var menuItems = Object.keys(_data_pagesData_js__WEBPACK_IMPORTED_MODULE_3__["pages"]).filter(function (p) {
    return p !== "home";
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isOpen = _useState[0],
      setOpen = _useState[1];

  var closeMenu = function closeMenu() {
    setOpen(false);
  };

  var toggleMenu = function toggleMenu() {
    setOpen(!isOpen);
  };

  var MenuLinks = function MenuLinks() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, menuItems.map(function (e, index) {
      return __jsx("div", {
        key: index,
        className: "jsx-968263818",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 9
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        as: "/".concat(_data_pagesData_js__WEBPACK_IMPORTED_MODULE_3__["pages"][e].slug),
        href: "/".concat(_data_pagesData_js__WEBPACK_IMPORTED_MODULE_3__["pages"][e].slug),
        onClick: closeMenu,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "jsx-968263818" + " " + "link mb-2 d-flex flex-row align-items-center  ".concat(currentPageTitle === _data_pagesData_js__WEBPACK_IMPORTED_MODULE_3__["pages"][e].title ? "current" : ""),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 13
        }
      }, __jsx("img", {
        src: _data_pagesData_js__WEBPACK_IMPORTED_MODULE_3__["pages"][e].logoSrc,
        alt: "cube",
        className: "jsx-968263818" + " " + "img-fluid mr-4",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 15
        }
      }), __jsx("div", {
        className: "jsx-968263818",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 15
        }
      }, _data_pagesData_js__WEBPACK_IMPORTED_MODULE_3__["pages"][e].title))));
    }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "968263818",
      __self: _this
    }, ".link.jsx-968263818{cursor:pointer;}.current.jsx-968263818{font-weight:600;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxfV29ya1xcX1VucGFpZFxcT3RoZXJzXFxyb2RpYS12YWxrYW5vdVxcQ29tcG9uZW50c1xcbmF2aWdhdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQ1MsQUFHNEIsQUFHQyxlQUZsQixDQUdBIiwiZmlsZSI6IkQ6XFxfV29ya1xcX1VucGFpZFxcT3RoZXJzXFxyb2RpYS12YWxrYW5vdVxcQ29tcG9uZW50c1xcbmF2aWdhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgcGFnZXMgfSBmcm9tIFwiLi4vZGF0YS9wYWdlc0RhdGEuanNcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmlnYXRpb24oeyBjdXJyZW50UGFnZVRpdGxlIH0pIHtcclxuICBjb25zdCBtZW51SXRlbXMgPSBPYmplY3Qua2V5cyhwYWdlcykuZmlsdGVyKHAgPT4gcCAhPT0gXCJob21lXCIpO1xyXG5cclxuICBjb25zdCBbaXNPcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgY2xvc2VNZW51ID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgfTtcclxuICBjb25zdCB0b2dnbGVNZW51ID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbighaXNPcGVuKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBNZW51TGlua3MgPSAoKSA9PiAoXHJcbiAgICA8PlxyXG4gICAgICB7bWVudUl0ZW1zLm1hcCgoZSwgaW5kZXgpID0+IChcclxuICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgYXM9e2AvJHtwYWdlc1tlXS5zbHVnfWB9XHJcbiAgICAgICAgICAgIGhyZWY9e2AvJHtwYWdlc1tlXS5zbHVnfWB9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2Nsb3NlTWVudX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGxpbmsgbWItMiBkLWZsZXggZmxleC1yb3cgYWxpZ24taXRlbXMtY2VudGVyICAke1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFBhZ2VUaXRsZSA9PT0gcGFnZXNbZV0udGl0bGUgPyBcImN1cnJlbnRcIiA6IFwiXCJcclxuICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz17cGFnZXNbZV0ubG9nb1NyY31cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZCBtci00XCJcclxuICAgICAgICAgICAgICAgIGFsdD1cImN1YmVcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGRpdj57cGFnZXNbZV0udGl0bGV9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApKX1cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIC5saW5rIHtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmN1cnJlbnQge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8Lz5cclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgey8qIERlc2t0b3AgTmF2aWdhdGlvbiAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLW5vbmUgZC1tZC1ibG9jayBwdC0zXCI+XHJcbiAgICAgICAgPE1lbnVMaW5rcyAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgey8qIFBob25lIE5hdmlnYXRpb24gKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1ibG9jayBkLW1kLW5vbmUgcHQtMyBjb2wtMlwiIG9uQ2xpY2s9e3RvZ2dsZU1lbnV9PlxyXG4gICAgICAgIDxzdmdcclxuICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uXCJcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogaXNPcGVuID8gXCJyb3RhdGUoOTBkZWcpXCIgOiBcIm5vbmVcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICB2aWV3Qm94PVwiMCAwIDQ0OCA1MTJcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxwYXRoIGQ9XCJNMTYgMTMyaDQxNmM4LjgzNyAwIDE2LTcuMTYzIDE2LTE2Vjc2YzAtOC44MzctNy4xNjMtMTYtMTYtMTZIMTZDNy4xNjMgNjAgMCA2Ny4xNjMgMCA3NnY0MGMwIDguODM3IDcuMTYzIDE2IDE2IDE2em0wIDE2MGg0MTZjOC44MzcgMCAxNi03LjE2MyAxNi0xNnYtNDBjMC04LjgzNy03LjE2My0xNi0xNi0xNkgxNmMtOC44MzcgMC0xNiA3LjE2My0xNiAxNnY0MGMwIDguODM3IDcuMTYzIDE2IDE2IDE2em0wIDE2MGg0MTZjOC44MzcgMCAxNi03LjE2MyAxNi0xNnYtNDBjMC04LjgzNy03LjE2My0xNi0xNi0xNkgxNmMtOC44MzcgMC0xNiA3LjE2My0xNiAxNnY0MGMwIDguODM3IDcuMTYzIDE2IDE2IDE2elwiIC8+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtgZHJhd2VyIGNvbC0yIGQtbWQtbm9uZSBkLWZsZXggZmxleC1jb2x1bW4gJHtcclxuICAgICAgICAgIGlzT3BlbiA/IFwiYWN0aXZlXCIgOiBcImQtbm9uZVwiXHJcbiAgICAgICAgfWB9XHJcbiAgICAgID5cclxuICAgICAgICA8TWVudUxpbmtzIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXX0= */\n/*@ sourceURL=D:\\\\_Work\\\\_Unpaid\\\\Others\\\\rodia-valkanou\\\\Components\\\\navigation.js */"));
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "d-none d-md-block pt-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }, __jsx(MenuLinks, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "d-block d-md-none pt-3 col-2",
    onClick: toggleMenu,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
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
      lineNumber: 63,
      columnNumber: 9
    }
  }, __jsx("path", {
    d: "M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }))), __jsx("div", {
    className: "drawer col-2 d-md-none d-flex flex-column ".concat(isOpen ? "active" : "d-none"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }
  }, __jsx(MenuLinks, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  })));
}

_s(Navigation, "WPi2qa4HrijmrT7XyqmH7MkbZuo=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9uYXZpZ2F0aW9uLmpzIl0sIm5hbWVzIjpbIk5hdmlnYXRpb24iLCJjdXJyZW50UGFnZVRpdGxlIiwibWVudUl0ZW1zIiwiT2JqZWN0Iiwia2V5cyIsInBhZ2VzIiwiZmlsdGVyIiwicCIsInVzZVN0YXRlIiwiaXNPcGVuIiwic2V0T3BlbiIsImNsb3NlTWVudSIsInRvZ2dsZU1lbnUiLCJNZW51TGlua3MiLCJtYXAiLCJlIiwiaW5kZXgiLCJzbHVnIiwidGl0bGUiLCJsb2dvU3JjIiwidHJhbnNmb3JtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsVUFBVCxPQUEwQztBQUFBOztBQUFBOztBQUFBLE1BQXBCQyxnQkFBb0IsUUFBcEJBLGdCQUFvQjtBQUN2RCxNQUFNQyxTQUFTLEdBQUdDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZQyx3REFBWixFQUFtQkMsTUFBbkIsQ0FBMEIsVUFBQUMsQ0FBQztBQUFBLFdBQUlBLENBQUMsS0FBSyxNQUFWO0FBQUEsR0FBM0IsQ0FBbEI7O0FBRHVELGtCQUc3QkMsc0RBQVEsQ0FBQyxLQUFELENBSHFCO0FBQUEsTUFHaERDLE1BSGdEO0FBQUEsTUFHeENDLE9BSHdDOztBQUt2RCxNQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3RCRCxXQUFPLENBQUMsS0FBRCxDQUFQO0FBQ0QsR0FGRDs7QUFHQSxNQUFNRSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3ZCRixXQUFPLENBQUMsQ0FBQ0QsTUFBRixDQUFQO0FBQ0QsR0FGRDs7QUFJQSxNQUFNSSxTQUFTLEdBQUcsU0FBWkEsU0FBWTtBQUFBLFdBQ2hCLG1FQUNHWCxTQUFTLENBQUNZLEdBQVYsQ0FBYyxVQUFDQyxDQUFELEVBQUlDLEtBQUo7QUFBQSxhQUNiO0FBQUssV0FBRyxFQUFFQSxLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsZ0RBQUQ7QUFDRSxVQUFFLGFBQU1YLHdEQUFLLENBQUNVLENBQUQsQ0FBTCxDQUFTRSxJQUFmLENBREo7QUFFRSxZQUFJLGFBQU1aLHdEQUFLLENBQUNVLENBQUQsQ0FBTCxDQUFTRSxJQUFmLENBRk47QUFHRSxlQUFPLEVBQUVOLFNBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUtFO0FBQUEsbUdBRUlWLGdCQUFnQixLQUFLSSx3REFBSyxDQUFDVSxDQUFELENBQUwsQ0FBU0csS0FBOUIsR0FBc0MsU0FBdEMsR0FBa0QsRUFGdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUtFO0FBQ0UsV0FBRyxFQUFFYix3REFBSyxDQUFDVSxDQUFELENBQUwsQ0FBU0ksT0FEaEI7QUFHRSxXQUFHLEVBQUMsTUFITjtBQUFBLDJDQUVZLGdCQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFMRixFQVVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFNZCx3REFBSyxDQUFDVSxDQUFELENBQUwsQ0FBU0csS0FBZixDQVZGLENBTEYsQ0FERixDQURhO0FBQUEsS0FBZCxDQURIO0FBQUE7QUFBQTtBQUFBLGc4SEFEZ0I7QUFBQSxHQUFsQjs7QUFzQ0EsU0FDRSxtRUFFRTtBQUFLLGFBQVMsRUFBQyx3QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUZGLEVBTUU7QUFBSyxhQUFTLEVBQUMsOEJBQWY7QUFBOEMsV0FBTyxFQUFFTixVQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxTQUFLLEVBQUMsNEJBRFI7QUFFRSxhQUFTLEVBQUMsUUFGWjtBQUdFLFNBQUssRUFBRTtBQUNMUSxlQUFTLEVBQUVYLE1BQU0sR0FBRyxlQUFILEdBQXFCO0FBRGpDLEtBSFQ7QUFNRSxXQUFPLEVBQUMsYUFOVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBUUU7QUFBTSxLQUFDLEVBQUMsdVZBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJGLENBREYsQ0FORixFQWtCRTtBQUNFLGFBQVMsc0RBQ1BBLE1BQU0sR0FBRyxRQUFILEdBQWMsUUFEYixDQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLRSxNQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLENBbEJGLENBREY7QUE0QkQ7O0dBOUV1QlQsVTs7S0FBQUEsVSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xNGY4NmYyMWViYTY2ZjFkOWFkZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBwYWdlcyB9IGZyb20gXCIuLi9kYXRhL3BhZ2VzRGF0YS5qc1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2aWdhdGlvbih7IGN1cnJlbnRQYWdlVGl0bGUgfSkge1xyXG4gIGNvbnN0IG1lbnVJdGVtcyA9IE9iamVjdC5rZXlzKHBhZ2VzKS5maWx0ZXIocCA9PiBwICE9PSBcImhvbWVcIik7XHJcblxyXG4gIGNvbnN0IFtpc09wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBjbG9zZU1lbnUgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuKGZhbHNlKTtcclxuICB9O1xyXG4gIGNvbnN0IHRvZ2dsZU1lbnUgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuKCFpc09wZW4pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IE1lbnVMaW5rcyA9ICgpID0+IChcclxuICAgIDw+XHJcbiAgICAgIHttZW51SXRlbXMubWFwKChlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgIDxkaXYga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICBhcz17YC8ke3BhZ2VzW2VdLnNsdWd9YH1cclxuICAgICAgICAgICAgaHJlZj17YC8ke3BhZ2VzW2VdLnNsdWd9YH1cclxuICAgICAgICAgICAgb25DbGljaz17Y2xvc2VNZW51fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbGluayBtYi0yIGQtZmxleCBmbGV4LXJvdyBhbGlnbi1pdGVtcy1jZW50ZXIgICR7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50UGFnZVRpdGxlID09PSBwYWdlc1tlXS50aXRsZSA/IFwiY3VycmVudFwiIDogXCJcIlxyXG4gICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPXtwYWdlc1tlXS5sb2dvU3JjfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIG1yLTRcIlxyXG4gICAgICAgICAgICAgICAgYWx0PVwiY3ViZVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8ZGl2PntwYWdlc1tlXS50aXRsZX08L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkpfVxyXG5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgLmxpbmsge1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuY3VycmVudCB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvPlxyXG4gICk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7LyogRGVza3RvcCBOYXZpZ2F0aW9uICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtbm9uZSBkLW1kLWJsb2NrIHB0LTNcIj5cclxuICAgICAgICA8TWVudUxpbmtzIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7LyogUGhvbmUgTmF2aWdhdGlvbiAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWJsb2NrIGQtbWQtbm9uZSBwdC0zIGNvbC0yXCIgb25DbGljaz17dG9nZ2xlTWVudX0+XHJcbiAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b25cIlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBpc09wZW4gPyBcInJvdGF0ZSg5MGRlZylcIiA6IFwibm9uZVwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNDQ4IDUxMlwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHBhdGggZD1cIk0xNiAxMzJoNDE2YzguODM3IDAgMTYtNy4xNjMgMTYtMTZWNzZjMC04LjgzNy03LjE2My0xNi0xNi0xNkgxNkM3LjE2MyA2MCAwIDY3LjE2MyAwIDc2djQwYzAgOC44MzcgNy4xNjMgMTYgMTYgMTZ6bTAgMTYwaDQxNmM4LjgzNyAwIDE2LTcuMTYzIDE2LTE2di00MGMwLTguODM3LTcuMTYzLTE2LTE2LTE2SDE2Yy04LjgzNyAwLTE2IDcuMTYzLTE2IDE2djQwYzAgOC44MzcgNy4xNjMgMTYgMTYgMTZ6bTAgMTYwaDQxNmM4LjgzNyAwIDE2LTcuMTYzIDE2LTE2di00MGMwLTguODM3LTcuMTYzLTE2LTE2LTE2SDE2Yy04LjgzNyAwLTE2IDcuMTYzLTE2IDE2djQwYzAgOC44MzcgNy4xNjMgMTYgMTYgMTZ6XCIgLz5cclxuICAgICAgICA8L3N2Zz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2BkcmF3ZXIgY29sLTIgZC1tZC1ub25lIGQtZmxleCBmbGV4LWNvbHVtbiAke1xyXG4gICAgICAgICAgaXNPcGVuID8gXCJhY3RpdmVcIiA6IFwiZC1ub25lXCJcclxuICAgICAgICB9YH1cclxuICAgICAgPlxyXG4gICAgICAgIDxNZW51TGlua3MgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=