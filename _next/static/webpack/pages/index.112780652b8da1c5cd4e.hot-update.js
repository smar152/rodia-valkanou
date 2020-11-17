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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9QaG9uZU5hdmlnYXRpb24uanMiXSwibmFtZXMiOlsiUGhvbmVOYXZpZ2F0aW9uIiwidXNlU3RhdGUiLCJpc09wZW4iLCJzZXRPcGVuIiwiY2xvc2VNZW51IiwiY29uc29sZSIsImxvZyIsInRvZ2dsZU1lbnUiLCJ0cmFuc2Zvcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLGVBQVQsR0FBMkI7QUFBQTs7QUFBQSxrQkFDZEMsc0RBQVEsQ0FBQyxLQUFELENBRE07QUFBQSxNQUNqQ0MsTUFEaUM7QUFBQSxNQUN6QkMsT0FEeUI7O0FBR3hDLE1BQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFDdEJELFdBQU8sQ0FBQyxLQUFELENBQVA7QUFDQUUsV0FBTyxDQUFDQyxHQUFSLENBQVksWUFBWjtBQUNELEdBSEQ7O0FBSUEsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUN2QkosV0FBTyxDQUFDLENBQUNELE1BQUYsQ0FBUDtBQUNELEdBRkQ7O0FBR0EsU0FDRSxtRUFFRTtBQUFLLGFBQVMsRUFBQyw4QkFBZjtBQUE4QyxXQUFPLEVBQUVLLFVBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLFNBQUssRUFBQyw0QkFEUjtBQUVFLGFBQVMsRUFBQyxRQUZaO0FBR0UsU0FBSyxFQUFFO0FBQ0xDLGVBQVMsRUFBRU4sTUFBTSxHQUFHLGVBQUgsR0FBcUI7QUFEakMsS0FIVDtBQU1FLFdBQU8sRUFBQyxhQU5WO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FRRTtBQUFNLEtBQUMsRUFBQyx1VkFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkYsQ0FERixDQUZGLEVBY0U7QUFDRSxhQUFTLG9DQUNQQSxNQUFNLEdBQUcsMkJBQUgsR0FBaUMsUUFEaEMsQ0FEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0UsTUFBQyxxREFBRDtBQUFXLGFBQVMsRUFBRUUsU0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLENBZEYsQ0FERjtBQXdCRDs7R0FsQ3VCSixlOztLQUFBQSxlIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjExMjc4MDY1MmI4ZGExYzVjZDRlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWVudUxpbmtzIGZyb20gXCIuL21lbnVMaW5rcy5qc1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGhvbmVOYXZpZ2F0aW9uKCkge1xyXG4gIGNvbnN0IFtpc09wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBjbG9zZU1lbnUgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuKGZhbHNlKTtcclxuICAgIGNvbnNvbGUubG9nKFwiY2xvc2UgbWVudVwiKTtcclxuICB9O1xyXG4gIGNvbnN0IHRvZ2dsZU1lbnUgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuKCFpc09wZW4pO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHsvKiBQaG9uZSBOYXZpZ2F0aW9uICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtYmxvY2sgZC1tZC1ub25lIHB0LTMgY29sLTJcIiBvbkNsaWNrPXt0b2dnbGVNZW51fT5cclxuICAgICAgICA8c3ZnXHJcbiAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IGlzT3BlbiA/IFwicm90YXRlKDkwZGVnKVwiIDogXCJub25lXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgdmlld0JveD1cIjAgMCA0NDggNTEyXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8cGF0aCBkPVwiTTE2IDEzMmg0MTZjOC44MzcgMCAxNi03LjE2MyAxNi0xNlY3NmMwLTguODM3LTcuMTYzLTE2LTE2LTE2SDE2QzcuMTYzIDYwIDAgNjcuMTYzIDAgNzZ2NDBjMCA4LjgzNyA3LjE2MyAxNiAxNiAxNnptMCAxNjBoNDE2YzguODM3IDAgMTYtNy4xNjMgMTYtMTZ2LTQwYzAtOC44MzctNy4xNjMtMTYtMTYtMTZIMTZjLTguODM3IDAtMTYgNy4xNjMtMTYgMTZ2NDBjMCA4LjgzNyA3LjE2MyAxNiAxNiAxNnptMCAxNjBoNDE2YzguODM3IDAgMTYtNy4xNjMgMTYtMTZ2LTQwYzAtOC44MzctNy4xNjMtMTYtMTYtMTZIMTZjLTguODM3IDAtMTYgNy4xNjMtMTYgMTZ2NDBjMCA4LjgzNyA3LjE2MyAxNiAxNiAxNnpcIiAvPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17YGRyYXdlciBjb2wtMiBkLW1kLW5vbmUgICR7XHJcbiAgICAgICAgICBpc09wZW4gPyBcImFjdGl2ZSBkLWZsZXggZmxleC1jb2x1bW5cIiA6IFwiZC1ub25lXCJcclxuICAgICAgICB9YH1cclxuICAgICAgPlxyXG4gICAgICAgIDxNZW51TGlua3MgY2xvc2VNZW51PXtjbG9zZU1lbnV9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9