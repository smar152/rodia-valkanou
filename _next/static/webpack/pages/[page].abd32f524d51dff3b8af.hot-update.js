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
  console.log(currentPageTitle);

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
          lineNumber: 21,
          columnNumber: 9
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        as: "/".concat(_data_pagesData_js__WEBPACK_IMPORTED_MODULE_3__["pages"][e].slug),
        href: "/".concat(_data_pagesData_js__WEBPACK_IMPORTED_MODULE_3__["pages"][e].slug),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "jsx-968263818" + " " + "link mb-2 d-flex flex-row align-items-center  ".concat(currentPageTitle === _data_pagesData_js__WEBPACK_IMPORTED_MODULE_3__["pages"][e].title ? "current" : ""),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 13
        }
      }, __jsx("img", {
        src: _data_pagesData_js__WEBPACK_IMPORTED_MODULE_3__["pages"][e].logoSrc,
        alt: "cube",
        className: "jsx-968263818" + " " + "img-fluid mr-4",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 15
        }
      }), __jsx("div", {
        className: "jsx-968263818",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 15
        }
      }, _data_pagesData_js__WEBPACK_IMPORTED_MODULE_3__["pages"][e].title))));
    }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "968263818",
      __self: _this
    }, ".link.jsx-968263818{cursor:pointer;}.current.jsx-968263818{font-weight:600;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxfV29ya1xcX1VucGFpZFxcT3RoZXJzXFxyb2RpYS12YWxrYW5vdVxcQ29tcG9uZW50c1xcbmF2aWdhdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1Q1MsQUFHNEIsQUFHQyxlQUZsQixDQUdBIiwiZmlsZSI6IkQ6XFxfV29ya1xcX1VucGFpZFxcT3RoZXJzXFxyb2RpYS12YWxrYW5vdVxcQ29tcG9uZW50c1xcbmF2aWdhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgcGFnZXMgfSBmcm9tIFwiLi4vZGF0YS9wYWdlc0RhdGEuanNcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmlnYXRpb24oeyBjdXJyZW50UGFnZVRpdGxlIH0pIHtcclxuICBjb25zdCBtZW51SXRlbXMgPSBPYmplY3Qua2V5cyhwYWdlcykuZmlsdGVyKHAgPT4gcCAhPT0gXCJob21lXCIpO1xyXG4gIGNvbnNvbGUubG9nKGN1cnJlbnRQYWdlVGl0bGUpO1xyXG5cclxuICBjb25zdCBbaXNPcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgY2xvc2VNZW51ID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgfTtcclxuICBjb25zdCB0b2dnbGVNZW51ID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbighaXNPcGVuKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBNZW51TGlua3MgPSAoKSA9PiAoXHJcbiAgICA8PlxyXG4gICAgICB7bWVudUl0ZW1zLm1hcCgoZSwgaW5kZXgpID0+IChcclxuICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgPExpbmsgYXM9e2AvJHtwYWdlc1tlXS5zbHVnfWB9IGhyZWY9e2AvJHtwYWdlc1tlXS5zbHVnfWB9PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbGluayBtYi0yIGQtZmxleCBmbGV4LXJvdyBhbGlnbi1pdGVtcy1jZW50ZXIgICR7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50UGFnZVRpdGxlID09PSBwYWdlc1tlXS50aXRsZSA/IFwiY3VycmVudFwiIDogXCJcIlxyXG4gICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPXtwYWdlc1tlXS5sb2dvU3JjfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIG1yLTRcIlxyXG4gICAgICAgICAgICAgICAgYWx0PVwiY3ViZVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8ZGl2PntwYWdlc1tlXS50aXRsZX08L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkpfVxyXG5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgLmxpbmsge1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuY3VycmVudCB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvPlxyXG4gICk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7LyogRGVza3RvcCBOYXZpZ2F0aW9uICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtbm9uZSBkLW1kLWJsb2NrIHB0LTNcIj5cclxuICAgICAgICA8TWVudUxpbmtzIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7LyogUGhvbmUgTmF2aWdhdGlvbiAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWJsb2NrIGQtbWQtbm9uZSBwdC0zXCI+XHJcbiAgICAgICAgPE1lbnVMaW5rcyAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl19 */\n/*@ sourceURL=D:\\\\_Work\\\\_Unpaid\\\\Others\\\\rodia-valkanou\\\\Components\\\\navigation.js */"));
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "d-none d-md-block pt-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, __jsx(MenuLinks, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "d-block d-md-none pt-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }, __jsx(MenuLinks, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9uYXZpZ2F0aW9uLmpzIl0sIm5hbWVzIjpbIk5hdmlnYXRpb24iLCJjdXJyZW50UGFnZVRpdGxlIiwibWVudUl0ZW1zIiwiT2JqZWN0Iiwia2V5cyIsInBhZ2VzIiwiZmlsdGVyIiwicCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VTdGF0ZSIsImlzT3BlbiIsInNldE9wZW4iLCJjbG9zZU1lbnUiLCJ0b2dnbGVNZW51IiwiTWVudUxpbmtzIiwibWFwIiwiZSIsImluZGV4Iiwic2x1ZyIsInRpdGxlIiwibG9nb1NyYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFVBQVQsT0FBMEM7QUFBQTs7QUFBQTs7QUFBQSxNQUFwQkMsZ0JBQW9CLFFBQXBCQSxnQkFBb0I7QUFDdkQsTUFBTUMsU0FBUyxHQUFHQyxNQUFNLENBQUNDLElBQVAsQ0FBWUMsd0RBQVosRUFBbUJDLE1BQW5CLENBQTBCLFVBQUFDLENBQUM7QUFBQSxXQUFJQSxDQUFDLEtBQUssTUFBVjtBQUFBLEdBQTNCLENBQWxCO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZUixnQkFBWjs7QUFGdUQsa0JBSTdCUyxzREFBUSxDQUFDLEtBQUQsQ0FKcUI7QUFBQSxNQUloREMsTUFKZ0Q7QUFBQSxNQUl4Q0MsT0FKd0M7O0FBTXZELE1BQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFDdEJELFdBQU8sQ0FBQyxLQUFELENBQVA7QUFDRCxHQUZEOztBQUdBLE1BQU1FLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDdkJGLFdBQU8sQ0FBQyxDQUFDRCxNQUFGLENBQVA7QUFDRCxHQUZEOztBQUlBLE1BQU1JLFNBQVMsR0FBRyxTQUFaQSxTQUFZO0FBQUEsV0FDaEIsbUVBQ0diLFNBQVMsQ0FBQ2MsR0FBVixDQUFjLFVBQUNDLENBQUQsRUFBSUMsS0FBSjtBQUFBLGFBQ2I7QUFBSyxXQUFHLEVBQUVBLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxnREFBRDtBQUFNLFVBQUUsYUFBTWIsd0RBQUssQ0FBQ1ksQ0FBRCxDQUFMLENBQVNFLElBQWYsQ0FBUjtBQUErQixZQUFJLGFBQU1kLHdEQUFLLENBQUNZLENBQUQsQ0FBTCxDQUFTRSxJQUFmLENBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFBLG1HQUVJbEIsZ0JBQWdCLEtBQUtJLHdEQUFLLENBQUNZLENBQUQsQ0FBTCxDQUFTRyxLQUE5QixHQUFzQyxTQUF0QyxHQUFrRCxFQUZ0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBS0U7QUFDRSxXQUFHLEVBQUVmLHdEQUFLLENBQUNZLENBQUQsQ0FBTCxDQUFTSSxPQURoQjtBQUdFLFdBQUcsRUFBQyxNQUhOO0FBQUEsMkNBRVksZ0JBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUxGLEVBVUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQU1oQix3REFBSyxDQUFDWSxDQUFELENBQUwsQ0FBU0csS0FBZixDQVZGLENBREYsQ0FERixDQURhO0FBQUEsS0FBZCxDQURIO0FBQUE7QUFBQTtBQUFBLHd5RkFEZ0I7QUFBQSxHQUFsQjs7QUFrQ0EsU0FDRSxtRUFFRTtBQUFLLGFBQVMsRUFBQyx3QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUZGLEVBTUU7QUFBSyxhQUFTLEVBQUMsd0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FORixDQURGO0FBWUQ7O0dBM0R1QnBCLFU7O0tBQUFBLFUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW3BhZ2VdLmFiZDMyZjUyNGQ1MWRmZjNiOGFmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHBhZ2VzIH0gZnJvbSBcIi4uL2RhdGEvcGFnZXNEYXRhLmpzXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZpZ2F0aW9uKHsgY3VycmVudFBhZ2VUaXRsZSB9KSB7XHJcbiAgY29uc3QgbWVudUl0ZW1zID0gT2JqZWN0LmtleXMocGFnZXMpLmZpbHRlcihwID0+IHAgIT09IFwiaG9tZVwiKTtcclxuICBjb25zb2xlLmxvZyhjdXJyZW50UGFnZVRpdGxlKTtcclxuXHJcbiAgY29uc3QgW2lzT3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGNsb3NlTWVudSA9ICgpID0+IHtcclxuICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gIH07XHJcbiAgY29uc3QgdG9nZ2xlTWVudSA9ICgpID0+IHtcclxuICAgIHNldE9wZW4oIWlzT3Blbik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgTWVudUxpbmtzID0gKCkgPT4gKFxyXG4gICAgPD5cclxuICAgICAge21lbnVJdGVtcy5tYXAoKGUsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgIDxMaW5rIGFzPXtgLyR7cGFnZXNbZV0uc2x1Z31gfSBocmVmPXtgLyR7cGFnZXNbZV0uc2x1Z31gfT5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGxpbmsgbWItMiBkLWZsZXggZmxleC1yb3cgYWxpZ24taXRlbXMtY2VudGVyICAke1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFBhZ2VUaXRsZSA9PT0gcGFnZXNbZV0udGl0bGUgPyBcImN1cnJlbnRcIiA6IFwiXCJcclxuICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz17cGFnZXNbZV0ubG9nb1NyY31cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZCBtci00XCJcclxuICAgICAgICAgICAgICAgIGFsdD1cImN1YmVcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGRpdj57cGFnZXNbZV0udGl0bGV9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApKX1cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIC5saW5rIHtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmN1cnJlbnQge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8Lz5cclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgey8qIERlc2t0b3AgTmF2aWdhdGlvbiAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLW5vbmUgZC1tZC1ibG9jayBwdC0zXCI+XHJcbiAgICAgICAgPE1lbnVMaW5rcyAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgey8qIFBob25lIE5hdmlnYXRpb24gKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1ibG9jayBkLW1kLW5vbmUgcHQtM1wiPlxyXG4gICAgICAgIDxNZW51TGlua3MgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=