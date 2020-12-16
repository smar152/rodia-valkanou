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
      className: "jsx-3954200782" + " " + "col-6 col-sm-4 col-md card pt-5 pb-5 mb-2",
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
  }, "html{margin-left:calc(100vw - 100%);}body{background-color:#f1f1f1;font-family:Verdana,Geneva,sans-serif;color:#3e3e3e;}.container{padding-top:60px;}h6{font-style:italic;}.floatingImage{float:right;}.content{margin-bottom:70px;padding-left:0px;}link{cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxfV29ya1xcX1VucGFpZFxcT3RoZXJzXFxyb2RpYS12YWxrYW5vdVxccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9EVyxBQUc4QyxBQUdOLEFBS1IsQUFHQyxBQUdOLEFBR08sQUFJSixZQU5qQixHQU9BLEVBYkEsQ0FHQSxDQU1tQixNQWR1QixNQUgxQyxLQWtCQSwyQkFkZ0IsY0FDaEIiLCJmaWxlIjoiRDpcXF9Xb3JrXFxfVW5wYWlkXFxPdGhlcnNcXHJvZGlhLXZhbGthbm91XFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgZ2V0UGFnZURhdGEsIHBhZ2VzIH0gZnJvbSBcIi4uL2RhdGEvcGFnZXNEYXRhXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL0NvbXBvbmVudHMvaGVhZGVyLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IHBhZ2VEYXRhID0gZ2V0UGFnZURhdGEoXCJob21lXCIpO1xyXG4gIGNvbnN0IG1lbnVJdGVtcyA9IE9iamVjdC5rZXlzKHBhZ2VzKS5maWx0ZXIoXHJcbiAgICBwID0+IHAgIT09IFwiaG9tZVwiICYmIHAgIT0gXCJjb250YWN0XCJcclxuICApO1xyXG4gIGNvbnN0IHsgY29udGVudCwgdGl0bGUsIHN1YnRpdGxlIH0gPSBwYWdlRGF0YTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPs6hzr/OtM65zqwgzpLOsc67zrrOrM69zr/PhSAtIHt0aXRsZX08L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxoMj57dGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgPGg2PntzdWJ0aXRsZX08L2g2PlxyXG4gICAgICAgICAgICB7Y29udGVudH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICB7bWVudUl0ZW1zLm1hcCgoZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLTYgY29sLXNtLTQgY29sLW1kIGNhcmQgcHQtNSBwYi01IG1iLTJcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPExpbmsgYXM9e2AvJHtwYWdlc1tlXS5zbHVnfWB9IGhyZWY9e2AvJHtwYWdlc1tlXS5zbHVnfWB9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bjb2xgfT5cclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17cGFnZXNbZV0uY3ViZVNyY31cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWQgbXItNCBtYi00XCJcclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJjdWJlXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+e3BhZ2VzW2VdLnRpdGxlfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+XHJcbiAgICAgICAgICB7YFxyXG4gICAgICAgICAgICBodG1sIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogY2FsYygxMDB2dyAtIDEwMCUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICBjb2xvcjogIzNlM2UzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogNjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoNiB7XHJcbiAgICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5mbG9hdGluZ0ltYWdlIHtcclxuICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDcwcHg7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGluayB7XHJcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXX0= */\n/*@ sourceURL=D:\\\\_Work\\\\_Unpaid\\\\Others\\\\rodia-valkanou\\\\pages\\\\index.js */")));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInBhZ2VEYXRhIiwiZ2V0UGFnZURhdGEiLCJtZW51SXRlbXMiLCJPYmplY3QiLCJrZXlzIiwicGFnZXMiLCJmaWx0ZXIiLCJwIiwiY29udGVudCIsInRpdGxlIiwic3VidGl0bGUiLCJtYXAiLCJlIiwiaW5kZXgiLCJzbHVnIiwiY3ViZVNyYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFDN0IsTUFBTUMsUUFBUSxHQUFHQyxtRUFBVyxDQUFDLE1BQUQsQ0FBNUI7QUFDQSxNQUFNQyxTQUFTLEdBQUdDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZQyxxREFBWixFQUFtQkMsTUFBbkIsQ0FDaEIsVUFBQUMsQ0FBQztBQUFBLFdBQUlBLENBQUMsS0FBSyxNQUFOLElBQWdCQSxDQUFDLElBQUksU0FBekI7QUFBQSxHQURlLENBQWxCO0FBRjZCLE1BS3JCQyxPQUxxQixHQUtRUixRQUxSLENBS3JCUSxPQUxxQjtBQUFBLE1BS1pDLEtBTFksR0FLUVQsUUFMUixDQUtaUyxLQUxZO0FBQUEsTUFLTEMsUUFMSyxHQUtRVixRQUxSLENBS0xVLFFBTEs7QUFNN0IsU0FDRSxtRUFDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJGQUF5QkQsS0FBekIsQ0FERixDQURGLEVBSUU7QUFBQSx3Q0FBZSxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBLHdDQUFlLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUEsd0NBQWUsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixDQURGLEVBTUU7QUFBQSx3Q0FBZSxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBLHdDQUFlLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS0EsS0FBTCxDQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtDLFFBQUwsQ0FGRixFQUdHRixPQUhILENBREYsQ0FORixFQWFFO0FBQUEsd0NBQWUsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dOLFNBQVMsQ0FBQ1MsR0FBVixDQUFjLFVBQUNDLENBQUQsRUFBSUMsS0FBSjtBQUFBLFdBQ2I7QUFDRSxTQUFHLEVBQUVBLEtBRFA7QUFBQSwwQ0FFWSwyQ0FGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BSUUsTUFBQyxnREFBRDtBQUFNLFFBQUUsYUFBTVIscURBQUssQ0FBQ08sQ0FBRCxDQUFMLENBQVNFLElBQWYsQ0FBUjtBQUErQixVQUFJLGFBQU1ULHFEQUFLLENBQUNPLENBQUQsQ0FBTCxDQUFTRSxJQUFmLENBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUNFLFNBQUcsRUFBRVQscURBQUssQ0FBQ08sQ0FBRCxDQUFMLENBQVNHLE9BRGhCO0FBR0UsU0FBRyxFQUFDLE1BSE47QUFBQSwwQ0FFWSxxQkFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsRUFNRTtBQUFBLDBDQUFlLDRCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBTVYscURBQUssQ0FBQ08sQ0FBRCxDQUFMLENBQVNILEtBQWYsQ0FERixDQU5GLENBREYsQ0FKRixDQURhO0FBQUEsR0FBZCxDQURILENBYkY7QUFBQTtBQUFBO0FBQUEsa25JQUpGLENBREY7QUF1RUQ7S0E3RXVCVixJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmZhNzQ5YTk5YjhmMTNhMTU3Y2Y3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgZ2V0UGFnZURhdGEsIHBhZ2VzIH0gZnJvbSBcIi4uL2RhdGEvcGFnZXNEYXRhXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL0NvbXBvbmVudHMvaGVhZGVyLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IHBhZ2VEYXRhID0gZ2V0UGFnZURhdGEoXCJob21lXCIpO1xyXG4gIGNvbnN0IG1lbnVJdGVtcyA9IE9iamVjdC5rZXlzKHBhZ2VzKS5maWx0ZXIoXHJcbiAgICBwID0+IHAgIT09IFwiaG9tZVwiICYmIHAgIT0gXCJjb250YWN0XCJcclxuICApO1xyXG4gIGNvbnN0IHsgY29udGVudCwgdGl0bGUsIHN1YnRpdGxlIH0gPSBwYWdlRGF0YTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPs6hzr/OtM65zqwgzpLOsc67zrrOrM69zr/PhSAtIHt0aXRsZX08L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxoMj57dGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgPGg2PntzdWJ0aXRsZX08L2g2PlxyXG4gICAgICAgICAgICB7Y29udGVudH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICB7bWVudUl0ZW1zLm1hcCgoZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLTYgY29sLXNtLTQgY29sLW1kIGNhcmQgcHQtNSBwYi01IG1iLTJcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPExpbmsgYXM9e2AvJHtwYWdlc1tlXS5zbHVnfWB9IGhyZWY9e2AvJHtwYWdlc1tlXS5zbHVnfWB9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bjb2xgfT5cclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17cGFnZXNbZV0uY3ViZVNyY31cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWQgbXItNCBtYi00XCJcclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJjdWJlXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+e3BhZ2VzW2VdLnRpdGxlfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+XHJcbiAgICAgICAgICB7YFxyXG4gICAgICAgICAgICBodG1sIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogY2FsYygxMDB2dyAtIDEwMCUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICBjb2xvcjogIzNlM2UzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogNjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoNiB7XHJcbiAgICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5mbG9hdGluZ0ltYWdlIHtcclxuICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDcwcHg7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGluayB7XHJcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9