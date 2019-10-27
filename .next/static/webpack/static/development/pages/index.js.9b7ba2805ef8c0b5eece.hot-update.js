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
                  results: results.body
                });

              case 13:
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
      }, ".flexy.jsx-1552033435{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcam9zaHVcXERvY3VtZW50c1xcR2l0SHViXFxuZXh0LW11bHRpZnlcXGNvbXBvbmVudFxcU2VhcmNoUGFnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwRHNCLEFBSVUsMEVBQUMiLCJmaWxlIjoiQzpcXFVzZXJzXFxqb3NodVxcRG9jdW1lbnRzXFxHaXRIdWJcXG5leHQtbXVsdGlmeVxcY29tcG9uZW50XFxTZWFyY2hQYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBTZWFyY2hQYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICB2YWx1ZTogJycsXHJcbiAgICAgICAgICByZXN1bHRzOiBbXVxyXG4gICAgICAgIH07XHJcbiAgICBcclxuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgICAgaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZX0pO1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgICAgYXN5bmMgaGFuZGxlU3VibWl0KGV2ZW50KSB7XHJcbiAgICAgICAgYWxlcnQoJ0FuIGVzc2F5IHdhcyBzdWJtaXR0ZWQ6ICcgKyB0aGlzLnN0YXRlLnZhbHVlKTtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCB0b2tlbiA9ICB0aGlzLnByb3BzLnVzZXIudXNlcl90b2tlblxyXG4gICAgICAgIGNvbnN0IHVybCA9ICdodHRwczovL2FwaS5zcG90aWZ5LmNvbS92MS9zZWFyY2g/cT0nICsgdGhpcy5zdGF0ZS52YWx1ZSArIFwiJnR5cGU9dHJhY2tcIlxyXG4gICAgICAgIGxldCByZXN1bHRzID0gYXdhaXQgZmV0Y2ggKHVybCwge1xyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyt0b2tlblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0cylcclxuICAgICAgICByZXN1bHRzID0gYXdhaXQgcmVzdWx0cy5qc29uKClcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHRzKVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3Jlc3VsdHMgOiByZXN1bHRzLmJvZHl9KVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXF1ZXN0KCkge1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgIGxldCByZXN1bHRzID0gdGhpcy5zdGF0ZS5yZXN1bHRzLm1hcCgoeCk9PntcclxuICAgICAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICAgIHt4fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICB9KVxyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9Jy8nPkJhY2s8L2E+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMucHJvcHMuYWRkU29uZ30+QUREIFNPTkc8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxoMT57dGhpcy5wcm9wcy5hZGRTb25nfTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgIEVzc2F5OlxyXG4gICAgICAgICAgPHRleHRhcmVhIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IC8+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU3VibWl0XCIgb25DbGljaz17dGhpcy5oYW5kbGVTdWJtaXR9Lz5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXh5Jz5cclxuICAgICAgICAgICAgICB7cmVzdWx0c31cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgLmZsZXh5IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaFBhZ2U7Il19 */\n/*@ sourceURL=C:\\Users\\joshu\\Documents\\GitHub\\next-multify\\component\\SearchPage.js */"));
    }
  }]);

  return SearchPage;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SearchPage);

/***/ })

})
//# sourceMappingURL=index.js.9b7ba2805ef8c0b5eece.hot-update.js.map