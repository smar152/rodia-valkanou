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
    className: "pt-3",
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
      className: "row mb-2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 13
      }
    }, __jsx("img", {
      src: _data_pagesData_js__WEBPACK_IMPORTED_MODULE_2__["pages"][e].logoSrc,
      className: "img-fluid col-3",
      alt: "cube",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 15
      }
    }), _data_pagesData_js__WEBPACK_IMPORTED_MODULE_2__["pages"][e].title)));
  }), __jsx("div", {
    className: "pt-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: "https://raw.githubusercontent.com/smar152/rodia-valkanou/master/logo/green_cube.png",
    className: "img-fluid",
    alt: "logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  })));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9uYXZpZ2F0aW9uLmpzIl0sIm5hbWVzIjpbIk5hdmlnYXRpb24iLCJtZW51SXRlbXMiLCJPYmplY3QiLCJrZXlzIiwicGFnZXMiLCJmaWx0ZXIiLCJwIiwibWFwIiwiZSIsImluZGV4Iiwic2x1ZyIsImxvZ29TcmMiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsVUFBVCxHQUFzQjtBQUFBOztBQUNuQyxNQUFNQyxTQUFTLEdBQUdDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZQyx3REFBWixFQUFtQkMsTUFBbkIsQ0FBMEIsVUFBQUMsQ0FBQztBQUFBLFdBQUlBLENBQUMsS0FBSyxNQUFWO0FBQUEsR0FBM0IsQ0FBbEI7QUFDQSxTQUNFO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHTCxTQUFTLENBQUNNLEdBQVYsQ0FBYyxVQUFDQyxDQUFELEVBQUlDLEtBQUo7QUFBQSxXQUNiO0FBQUssU0FBRyxFQUFFQSxLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBRSxhQUFNTCx3REFBSyxDQUFDSSxDQUFELENBQUwsQ0FBU0UsSUFBZixDQUFSO0FBQStCLFVBQUksYUFBTU4sd0RBQUssQ0FBQ0ksQ0FBRCxDQUFMLENBQVNFLElBQWYsQ0FBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssZUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQ0UsU0FBRyxFQUFFTix3REFBSyxDQUFDSSxDQUFELENBQUwsQ0FBU0csT0FEaEI7QUFFRSxlQUFTLEVBQUMsaUJBRlo7QUFHRSxTQUFHLEVBQUMsTUFITjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsRUFNR1Asd0RBQUssQ0FBQ0ksQ0FBRCxDQUFMLENBQVNJLEtBTlosQ0FERixDQURGLENBRGE7QUFBQSxHQUFkLENBREgsRUFlRTtBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLE9BQUcsRUFBQyxxRkFETjtBQUVFLGFBQVMsRUFBQyxXQUZaO0FBR0UsT0FBRyxFQUFDLE1BSE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBZkYsQ0FERjtBQXlCRDtLQTNCdUJaLFUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW3BhZ2VdLjk5Yjk4NTdkNzM5NjFmZGRmYjgyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHBhZ2VzIH0gZnJvbSBcIi4uL2RhdGEvcGFnZXNEYXRhLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZpZ2F0aW9uKCkge1xyXG4gIGNvbnN0IG1lbnVJdGVtcyA9IE9iamVjdC5rZXlzKHBhZ2VzKS5maWx0ZXIocCA9PiBwICE9PSBcImhvbWVcIik7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtM1wiPlxyXG4gICAgICB7bWVudUl0ZW1zLm1hcCgoZSwgaW5kZXgpID0+IChcclxuICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgPExpbmsgYXM9e2AvJHtwYWdlc1tlXS5zbHVnfWB9IGhyZWY9e2AvJHtwYWdlc1tlXS5zbHVnfWB9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi0yXCI+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPXtwYWdlc1tlXS5sb2dvU3JjfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIGNvbC0zXCJcclxuICAgICAgICAgICAgICAgIGFsdD1cImN1YmVcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAge3BhZ2VzW2VdLnRpdGxlfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSl9XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNFwiPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9zbWFyMTUyL3JvZGlhLXZhbGthbm91L21hc3Rlci9sb2dvL2dyZWVuX2N1YmUucG5nXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiXHJcbiAgICAgICAgICBhbHQ9XCJsb2dvXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==