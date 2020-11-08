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
var _jsxFileName = "D:\\_Work\\_Unpaid\\Others\\rodia-valkanou\\Components\\navigation.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function Navigation(_ref) {
  var _this = this;

  var currentPageTitle = _ref.currentPageTitle;
  var menuItems = Object.keys(_data_pagesData_js__WEBPACK_IMPORTED_MODULE_3__["pages"]).filter(function (p) {
    return p !== "home";
  });
  console.log(currentPageTitle);
  return __jsx("div", {
    className: "jsx-968263818" + " " + "pt-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, menuItems.map(function (e, index) {
    return __jsx("div", {
      key: index,
      className: "jsx-968263818",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      as: "/".concat(_data_pagesData_js__WEBPACK_IMPORTED_MODULE_3__["pages"][e].slug),
      href: "/".concat(_data_pagesData_js__WEBPACK_IMPORTED_MODULE_3__["pages"][e].slug),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "jsx-968263818" + " " + "link row mb-2 ".concat(currentPageTitle === _data_pagesData_js__WEBPACK_IMPORTED_MODULE_3__["pages"][e].title ? "current" : ""),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "jsx-968263818" + " " + "col-3",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 15
      }
    }, __jsx("img", {
      src: _data_pagesData_js__WEBPACK_IMPORTED_MODULE_3__["pages"][e].logoSrc,
      alt: "cube",
      className: "jsx-968263818" + " " + "img-fluid",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }
    })), _data_pagesData_js__WEBPACK_IMPORTED_MODULE_3__["pages"][e].title)));
  }), __jsx("div", {
    className: "jsx-968263818" + " " + "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-968263818" + " " + "pt-4 col-9",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "https://raw.githubusercontent.com/smar152/rodia-valkanou/master/logo/gray_cube.png",
    alt: "logo",
    className: "jsx-968263818" + " " + "img-fluid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "968263818",
    __self: this
  }, ".link.jsx-968263818{cursor:pointer;}.current.jsx-968263818{font-weight:600;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxfV29ya1xcX1VucGFpZFxcT3RoZXJzXFxyb2RpYS12YWxrYW5vdVxcQ29tcG9uZW50c1xcbmF2aWdhdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQ1MsQUFHNEIsQUFHQyxlQUZsQixDQUdBIiwiZmlsZSI6IkQ6XFxfV29ya1xcX1VucGFpZFxcT3RoZXJzXFxyb2RpYS12YWxrYW5vdVxcQ29tcG9uZW50c1xcbmF2aWdhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgcGFnZXMgfSBmcm9tIFwiLi4vZGF0YS9wYWdlc0RhdGEuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmlnYXRpb24oeyBjdXJyZW50UGFnZVRpdGxlIH0pIHtcclxuICBjb25zdCBtZW51SXRlbXMgPSBPYmplY3Qua2V5cyhwYWdlcykuZmlsdGVyKHAgPT4gcCAhPT0gXCJob21lXCIpO1xyXG4gIGNvbnNvbGUubG9nKGN1cnJlbnRQYWdlVGl0bGUpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTNcIj5cclxuICAgICAge21lbnVJdGVtcy5tYXAoKGUsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgIDxMaW5rIGFzPXtgLyR7cGFnZXNbZV0uc2x1Z31gfSBocmVmPXtgLyR7cGFnZXNbZV0uc2x1Z31gfT5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGxpbmsgcm93IG1iLTIgJHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRQYWdlVGl0bGUgPT09IHBhZ2VzW2VdLnRpdGxlID8gXCJjdXJyZW50XCIgOiBcIlwiXHJcbiAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0zXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17cGFnZXNbZV0ubG9nb1NyY30gY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgYWx0PVwiY3ViZVwiIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAge3BhZ2VzW2VdLnRpdGxlfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSl9XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC00IGNvbC05XCI+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9zbWFyMTUyL3JvZGlhLXZhbGthbm91L21hc3Rlci9sb2dvL2dyYXlfY3ViZS5wbmdcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWRcIlxyXG4gICAgICAgICAgICBhbHQ9XCJsb2dvXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgLmxpbmsge1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuY3VycmVudCB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl19 */\n/*@ sourceURL=D:\\\\_Work\\\\_Unpaid\\\\Others\\\\rodia-valkanou\\\\Components\\\\navigation.js */"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9uYXZpZ2F0aW9uLmpzIl0sIm5hbWVzIjpbIk5hdmlnYXRpb24iLCJjdXJyZW50UGFnZVRpdGxlIiwibWVudUl0ZW1zIiwiT2JqZWN0Iiwia2V5cyIsInBhZ2VzIiwiZmlsdGVyIiwicCIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJlIiwiaW5kZXgiLCJzbHVnIiwidGl0bGUiLCJsb2dvU3JjIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxVQUFULE9BQTBDO0FBQUE7O0FBQUEsTUFBcEJDLGdCQUFvQixRQUFwQkEsZ0JBQW9CO0FBQ3ZELE1BQU1DLFNBQVMsR0FBR0MsTUFBTSxDQUFDQyxJQUFQLENBQVlDLHdEQUFaLEVBQW1CQyxNQUFuQixDQUEwQixVQUFBQyxDQUFDO0FBQUEsV0FBSUEsQ0FBQyxLQUFLLE1BQVY7QUFBQSxHQUEzQixDQUFsQjtBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWVIsZ0JBQVo7QUFDQSxTQUNFO0FBQUEsdUNBQWUsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dDLFNBQVMsQ0FBQ1EsR0FBVixDQUFjLFVBQUNDLENBQUQsRUFBSUMsS0FBSjtBQUFBLFdBQ2I7QUFBSyxTQUFHLEVBQUVBLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUUsYUFBTVAsd0RBQUssQ0FBQ00sQ0FBRCxDQUFMLENBQVNFLElBQWYsQ0FBUjtBQUErQixVQUFJLGFBQU1SLHdEQUFLLENBQUNNLENBQUQsQ0FBTCxDQUFTRSxJQUFmLENBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBLGlFQUVJWixnQkFBZ0IsS0FBS0ksd0RBQUssQ0FBQ00sQ0FBRCxDQUFMLENBQVNHLEtBQTlCLEdBQXNDLFNBQXRDLEdBQWtELEVBRnREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FLRTtBQUFBLHlDQUFlLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssU0FBRyxFQUFFVCx3REFBSyxDQUFDTSxDQUFELENBQUwsQ0FBU0ksT0FBbkI7QUFBa0QsU0FBRyxFQUFDLE1BQXREO0FBQUEseUNBQXNDLFdBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQUxGLEVBUUdWLHdEQUFLLENBQUNNLENBQUQsQ0FBTCxDQUFTRyxLQVJaLENBREYsQ0FERixDQURhO0FBQUEsR0FBZCxDQURILEVBaUJFO0FBQUEsdUNBQWUsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQSx1Q0FBZSxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLE9BQUcsRUFBQyxvRkFETjtBQUdFLE9BQUcsRUFBQyxNQUhOO0FBQUEsdUNBRVksV0FGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixDQWpCRjtBQUFBO0FBQUE7QUFBQSw4OEVBREY7QUF3Q0Q7S0EzQ3VCZCxVIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmYyMWQwYjg2YThhOThjYWU0ZjhjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHBhZ2VzIH0gZnJvbSBcIi4uL2RhdGEvcGFnZXNEYXRhLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZpZ2F0aW9uKHsgY3VycmVudFBhZ2VUaXRsZSB9KSB7XHJcbiAgY29uc3QgbWVudUl0ZW1zID0gT2JqZWN0LmtleXMocGFnZXMpLmZpbHRlcihwID0+IHAgIT09IFwiaG9tZVwiKTtcclxuICBjb25zb2xlLmxvZyhjdXJyZW50UGFnZVRpdGxlKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwdC0zXCI+XHJcbiAgICAgIHttZW51SXRlbXMubWFwKChlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgIDxkaXYga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICA8TGluayBhcz17YC8ke3BhZ2VzW2VdLnNsdWd9YH0gaHJlZj17YC8ke3BhZ2VzW2VdLnNsdWd9YH0+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BsaW5rIHJvdyBtYi0yICR7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50UGFnZVRpdGxlID09PSBwYWdlc1tlXS50aXRsZSA/IFwiY3VycmVudFwiIDogXCJcIlxyXG4gICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtM1wiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e3BhZ2VzW2VdLmxvZ29TcmN9IGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIGFsdD1cImN1YmVcIiAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIHtwYWdlc1tlXS50aXRsZX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkpfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNCBjb2wtOVwiPlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBzcmM9XCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vc21hcjE1Mi9yb2RpYS12YWxrYW5vdS9tYXN0ZXIvbG9nby9ncmF5X2N1YmUucG5nXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCJcclxuICAgICAgICAgICAgYWx0PVwibG9nb1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIC5saW5rIHtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmN1cnJlbnQge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=