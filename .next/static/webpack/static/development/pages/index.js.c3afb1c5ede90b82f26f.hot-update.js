webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./component/SearchPage.js":
/*!*********************************!*\
  !*** ./component/SearchPage.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);









var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;


var SearchPage =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(SearchPage, _Component);

  function SearchPage(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, SearchPage);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(SearchPage).call(this, props));
    _this.state = {
      value: '',
      results: []
    };
    _this.handleChange = _this.handleChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.handleSubmit = _this.handleSubmit.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(SearchPage, [{
    key: "handleChange",
    value: function handleChange(event) {
      this.setState({
        value: event.target.value
      });
    }
  }, {
    key: "handleSubmit",
    value: function () {
      var _handleSubmit = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {
        var token, url, results;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                alert('An essay was submitted: ' + this.state.value);
                event.preventDefault();
                token = this.props.user.user_token;
                url = 'https://api.spotify.com/v1/search?q=' + this.state.value + "&type=track";
                _context.next = 6;
                return fetch(url, {
                  headers: {
                    'Authorization': 'Bearer ' + token
                  }
                });

              case 6:
                results = _context.sent;
                console.log(results);
                _context.next = 10;
                return results.json();

              case 10:
                results = _context.sent;
                console.log(results);
                this.setState({
                  results: results.items
                });
                console.log(result.items);

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function handleSubmit(_x) {
        return _handleSubmit.apply(this, arguments);
      }

      return handleSubmit;
    }()
  }, {
    key: "request",
    value: function request() {}
  }, {
    key: "render",
    value: function render() {
      var results = this.state.results.map(function (x) {
        return __jsx("div", null, x);
      });
      return __jsx("div", {
        className: "jsx-1552033435"
      }, __jsx("a", {
        href: "/",
        className: "jsx-1552033435"
      }, "Back"), __jsx("button", {
        onClick: this.props.addSong,
        className: "jsx-1552033435"
      }, "ADD SONG"), __jsx("h1", {
        className: "jsx-1552033435"
      }, this.props.addSong), __jsx("form", {
        onSubmit: this.handleSubmit,
        className: "jsx-1552033435"
      }, __jsx("label", {
        className: "jsx-1552033435"
      }, "Essay:", __jsx("textarea", {
        value: this.state.value,
        onChange: this.handleChange,
        className: "jsx-1552033435"
      })), __jsx("input", {
        type: "submit",
        value: "Submit",
        onClick: this.handleSubmit,
        className: "jsx-1552033435"
      })), __jsx("div", {
        className: "jsx-1552033435" + " " + 'flexy'
      }, results), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "1552033435"
      }, ".flexy.jsx-1552033435{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcam9zaHVcXERvY3VtZW50c1xcR2l0SHViXFxuZXh0LW11bHRpZnlcXGNvbXBvbmVudFxcU2VhcmNoUGFnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyRHNCLEFBSVUsMEVBQUMiLCJmaWxlIjoiQzpcXFVzZXJzXFxqb3NodVxcRG9jdW1lbnRzXFxHaXRIdWJcXG5leHQtbXVsdGlmeVxcY29tcG9uZW50XFxTZWFyY2hQYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBTZWFyY2hQYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICB2YWx1ZTogJycsXHJcbiAgICAgICAgICByZXN1bHRzOiBbXVxyXG4gICAgICAgIH07XHJcbiAgICBcclxuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgICAgaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZX0pO1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgICAgYXN5bmMgaGFuZGxlU3VibWl0KGV2ZW50KSB7XHJcbiAgICAgICAgYWxlcnQoJ0FuIGVzc2F5IHdhcyBzdWJtaXR0ZWQ6ICcgKyB0aGlzLnN0YXRlLnZhbHVlKTtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCB0b2tlbiA9ICB0aGlzLnByb3BzLnVzZXIudXNlcl90b2tlblxyXG4gICAgICAgIGNvbnN0IHVybCA9ICdodHRwczovL2FwaS5zcG90aWZ5LmNvbS92MS9zZWFyY2g/cT0nICsgdGhpcy5zdGF0ZS52YWx1ZSArIFwiJnR5cGU9dHJhY2tcIlxyXG4gICAgICAgIGxldCByZXN1bHRzID0gYXdhaXQgZmV0Y2ggKHVybCwge1xyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyt0b2tlblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0cylcclxuICAgICAgICByZXN1bHRzID0gYXdhaXQgcmVzdWx0cy5qc29uKClcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHRzKVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3Jlc3VsdHMgOiByZXN1bHRzLml0ZW1zfSlcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQuaXRlbXMpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJlcXVlc3QoKSB7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICBcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgbGV0IHJlc3VsdHMgPSB0aGlzLnN0YXRlLnJlc3VsdHMubWFwKCh4KT0+e1xyXG4gICAgICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICAgICAge3h9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj0nLyc+QmFjazwvYT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5wcm9wcy5hZGRTb25nfT5BREQgU09ORzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGgxPnt0aGlzLnByb3BzLmFkZFNvbmd9PC9oMT5cclxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgRXNzYXk6XHJcbiAgICAgICAgICA8dGV4dGFyZWEgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gLz5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTdWJtaXRcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZVN1Ym1pdH0vPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleHknPlxyXG4gICAgICAgICAgICAgIHtyZXN1bHRzfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAuZmxleHkge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoUGFnZTsiXX0= */\n/*@ sourceURL=C:\\Users\\joshu\\Documents\\GitHub\\next-multify\\component\\SearchPage.js */"));
    }
  }]);

  return SearchPage;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SearchPage);

/***/ })

})
//# sourceMappingURL=index.js.c3afb1c5ede90b82f26f.hot-update.js.map