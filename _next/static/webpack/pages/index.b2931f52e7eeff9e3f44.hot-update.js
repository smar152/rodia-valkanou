webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_pagesData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/pagesData */ "./data/pagesData.js");
/* harmony import */ var _Components_header_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Components/header.js */ "./Components/header.js");
var _jsxFileName = "D:\\_Work\\_Unpaid\\Others\\rodia-valkanou\\pages\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function Home() {
  var _this = this;

  var pageData = Object(_data_pagesData__WEBPACK_IMPORTED_MODULE_4__["getPageData"])("home");
  var menuItems = Object.keys(_data_pagesData__WEBPACK_IMPORTED_MODULE_4__["pages"]).filter(function (p) {
    return p !== "home" && p != "contact";
  });
  var content = pageData.content,
      title = pageData.title,
      subtitle = pageData.subtitle;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, "\u03A1\u03BF\u03B4\u03B9\u03AC \u0392\u03B1\u03BB\u03BA\u03AC\u03BD\u03BF\u03C5 - ", title)), __jsx("div", {
    className: "jsx-3954200782" + " " + "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-3954200782" + " " + "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-3954200782" + " " + "col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, __jsx(_Components_header_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }))), __jsx("div", {
    className: "jsx-3954200782" + " " + "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-3954200782" + " " + "col-12 content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, __jsx("h2", {
    className: "jsx-3954200782",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, title), __jsx("h6", {
    className: "jsx-3954200782",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, subtitle), content)), __jsx("div", {
    className: "jsx-3954200782" + " " + "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, menuItems.map(function (e, index) {
    return __jsx("div", {
      key: index,
      className: "jsx-3954200782" + " " + "link col-6 col-sm-4 col-md card pt-5 pb-5 mb-2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 13
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      as: "/".concat(_data_pagesData__WEBPACK_IMPORTED_MODULE_4__["pages"][e].slug),
      href: "/".concat(_data_pagesData__WEBPACK_IMPORTED_MODULE_4__["pages"][e].slug),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "jsx-3954200782" + " " + "col",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }
    }, __jsx("img", {
      src: _data_pagesData__WEBPACK_IMPORTED_MODULE_4__["pages"][e].cubeSrc,
      alt: "cube",
      className: "jsx-3954200782" + " " + "img-fluid mr-4 mb-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 19
      }
    }), __jsx("div", {
      className: "jsx-3954200782" + " " + "row justify-content-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 19
      }
    }, __jsx("div", {
      className: "jsx-3954200782",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 21
      }
    }, _data_pagesData__WEBPACK_IMPORTED_MODULE_4__["pages"][e].title)))));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3954200782",
    __self: this
  }, "html{margin-left:calc(100vw - 100%);}body{background-color:#f1f1f1;font-family:Verdana,Geneva,sans-serif;color:#3e3e3e;}.container{padding-top:60px;}h6{font-style:italic;}.floatingImage{float:right;}.content{margin-bottom:70px;padding-left:0px;}link{cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxfV29ya1xcX1VucGFpZFxcT3RoZXJzXFxyb2RpYS12YWxrYW5vdVxccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9EVyxBQUc4QyxBQUdOLEFBS1IsQUFHQyxBQUdOLEFBR08sQUFJSixZQU5qQixHQU9BLEVBYkEsQ0FHQSxDQU1tQixNQWR1QixNQUgxQyxLQWtCQSwyQkFkZ0IsY0FDaEIiLCJmaWxlIjoiRDpcXF9Xb3JrXFxfVW5wYWlkXFxPdGhlcnNcXHJvZGlhLXZhbGthbm91XFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgZ2V0UGFnZURhdGEsIHBhZ2VzIH0gZnJvbSBcIi4uL2RhdGEvcGFnZXNEYXRhXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL0NvbXBvbmVudHMvaGVhZGVyLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IHBhZ2VEYXRhID0gZ2V0UGFnZURhdGEoXCJob21lXCIpO1xyXG4gIGNvbnN0IG1lbnVJdGVtcyA9IE9iamVjdC5rZXlzKHBhZ2VzKS5maWx0ZXIoXHJcbiAgICBwID0+IHAgIT09IFwiaG9tZVwiICYmIHAgIT0gXCJjb250YWN0XCJcclxuICApO1xyXG4gIGNvbnN0IHsgY29udGVudCwgdGl0bGUsIHN1YnRpdGxlIH0gPSBwYWdlRGF0YTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPs6hzr/OtM65zqwgzpLOsc67zrrOrM69zr/PhSAtIHt0aXRsZX08L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxoMj57dGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgPGg2PntzdWJ0aXRsZX08L2g2PlxyXG4gICAgICAgICAgICB7Y29udGVudH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICB7bWVudUl0ZW1zLm1hcCgoZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGluayBjb2wtNiBjb2wtc20tNCBjb2wtbWQgY2FyZCBwdC01IHBiLTUgbWItMlwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8TGluayBhcz17YC8ke3BhZ2VzW2VdLnNsdWd9YH0gaHJlZj17YC8ke3BhZ2VzW2VdLnNsdWd9YH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtwYWdlc1tlXS5jdWJlU3JjfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZCBtci00IG1iLTRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cImN1YmVcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj57cGFnZXNbZV0udGl0bGV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD5cclxuICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgIGh0bWwge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBjYWxjKDEwMHZ3IC0gMTAwJSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjM2UzZTNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA2MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGg2IHtcclxuICAgICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmZsb2F0aW5nSW1hZ2Uge1xyXG4gICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY29udGVudCB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNzBweDtcclxuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsaW5rIHtcclxuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdfQ== */\n/*@ sourceURL=D:\\\\_Work\\\\_Unpaid\\\\Others\\\\rodia-valkanou\\\\pages\\\\index.js */")));
}
_c = Home;

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInBhZ2VEYXRhIiwiZ2V0UGFnZURhdGEiLCJtZW51SXRlbXMiLCJPYmplY3QiLCJrZXlzIiwicGFnZXMiLCJmaWx0ZXIiLCJwIiwiY29udGVudCIsInRpdGxlIiwic3VidGl0bGUiLCJtYXAiLCJlIiwiaW5kZXgiLCJzbHVnIiwiY3ViZVNyYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFDN0IsTUFBTUMsUUFBUSxHQUFHQyxtRUFBVyxDQUFDLE1BQUQsQ0FBNUI7QUFDQSxNQUFNQyxTQUFTLEdBQUdDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZQyxxREFBWixFQUFtQkMsTUFBbkIsQ0FDaEIsVUFBQUMsQ0FBQztBQUFBLFdBQUlBLENBQUMsS0FBSyxNQUFOLElBQWdCQSxDQUFDLElBQUksU0FBekI7QUFBQSxHQURlLENBQWxCO0FBRjZCLE1BS3JCQyxPQUxxQixHQUtRUixRQUxSLENBS3JCUSxPQUxxQjtBQUFBLE1BS1pDLEtBTFksR0FLUVQsUUFMUixDQUtaUyxLQUxZO0FBQUEsTUFLTEMsUUFMSyxHQUtRVixRQUxSLENBS0xVLFFBTEs7QUFNN0IsU0FDRSxtRUFDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJGQUF5QkQsS0FBekIsQ0FERixDQURGLEVBSUU7QUFBQSx3Q0FBZSxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBLHdDQUFlLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUEsd0NBQWUsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixDQURGLEVBTUU7QUFBQSx3Q0FBZSxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBLHdDQUFlLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS0EsS0FBTCxDQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtDLFFBQUwsQ0FGRixFQUdHRixPQUhILENBREYsQ0FORixFQWFFO0FBQUEsd0NBQWUsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dOLFNBQVMsQ0FBQ1MsR0FBVixDQUFjLFVBQUNDLENBQUQsRUFBSUMsS0FBSjtBQUFBLFdBQ2I7QUFDRSxTQUFHLEVBQUVBLEtBRFA7QUFBQSwwQ0FFWSxnREFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BSUUsTUFBQyxnREFBRDtBQUFNLFFBQUUsYUFBTVIscURBQUssQ0FBQ08sQ0FBRCxDQUFMLENBQVNFLElBQWYsQ0FBUjtBQUErQixVQUFJLGFBQU1ULHFEQUFLLENBQUNPLENBQUQsQ0FBTCxDQUFTRSxJQUFmLENBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBLDBDQUFlLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQ0UsU0FBRyxFQUFFVCxxREFBSyxDQUFDTyxDQUFELENBQUwsQ0FBU0csT0FEaEI7QUFHRSxTQUFHLEVBQUMsTUFITjtBQUFBLDBDQUVZLHFCQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQU1FO0FBQUEsMENBQWUsNEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFNVixxREFBSyxDQUFDTyxDQUFELENBQUwsQ0FBU0gsS0FBZixDQURGLENBTkYsQ0FERixDQUpGLENBRGE7QUFBQSxHQUFkLENBREgsQ0FiRjtBQUFBO0FBQUE7QUFBQSwwbklBSkYsQ0FERjtBQXVFRDtLQTdFdUJWLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjI5MzFmNTJlN2VlZmY5ZTNmNDQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBnZXRQYWdlRGF0YSwgcGFnZXMgfSBmcm9tIFwiLi4vZGF0YS9wYWdlc0RhdGFcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vQ29tcG9uZW50cy9oZWFkZXIuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgcGFnZURhdGEgPSBnZXRQYWdlRGF0YShcImhvbWVcIik7XHJcbiAgY29uc3QgbWVudUl0ZW1zID0gT2JqZWN0LmtleXMocGFnZXMpLmZpbHRlcihcclxuICAgIHAgPT4gcCAhPT0gXCJob21lXCIgJiYgcCAhPSBcImNvbnRhY3RcIlxyXG4gICk7XHJcbiAgY29uc3QgeyBjb250ZW50LCB0aXRsZSwgc3VidGl0bGUgfSA9IHBhZ2VEYXRhO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+zqHOv860zrnOrCDOks6xzrvOus6szr3Ov8+FIC0ge3RpdGxlfTwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGgyPnt0aXRsZX08L2gyPlxyXG4gICAgICAgICAgICA8aDY+e3N1YnRpdGxlfTwvaDY+XHJcbiAgICAgICAgICAgIHtjb250ZW50fVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIHttZW51SXRlbXMubWFwKChlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsaW5rIGNvbC02IGNvbC1zbS00IGNvbC1tZCBjYXJkIHB0LTUgcGItNSBtYi0yXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGFzPXtgLyR7cGFnZXNbZV0uc2x1Z31gfSBocmVmPXtgLyR7cGFnZXNbZV0uc2x1Z31gfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBzcmM9e3BhZ2VzW2VdLmN1YmVTcmN9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIG1yLTQgbWItNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiY3ViZVwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PntwYWdlc1tlXS50aXRsZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxzdHlsZSBnbG9iYWwganN4PlxyXG4gICAgICAgICAge2BcclxuICAgICAgICAgICAgaHRtbCB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGNhbGMoMTAwdncgLSAxMDAlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBib2R5IHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICMzZTNlM2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDYwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaDYge1xyXG4gICAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZmxvYXRpbmdJbWFnZSB7XHJcbiAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jb250ZW50IHtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA3MHB4O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxpbmsge1xyXG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgYH1cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==