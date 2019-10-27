webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./component/App.css":
/*!***************************!*\
  !*** ./component/App.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./component/App.js":
/*!**************************!*\
  !*** ./component/App.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./App.css */ "./component/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _SearchPage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SearchPage */ "./component/SearchPage.js");
/* harmony import */ var _Playlist__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Playlist */ "./component/Playlist.js");






var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

 //import img from './plus.svg';

 //import { relative } from 'path';



var App =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(App, _Component);

  function App(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, App);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(App).call(this, props));
    _this.state = {
      songs: []
    };
    _this.addSong = _this.addSong.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
    key: "addSong",
    value: function addSong() {
      var RandomNumber = Math.floor(Math.random() * 100 + 1);
      var newSong = {
        name: 'Bohemian Rhapsody',
        rank: '1.',
        artist: 'Queen',
        number: RandomNumber
      };
      var newarr = this.state.songs;
      newarr.push(newSong);
      this.setState({
        songs: newarr
      });
    }
  }, {
    key: "render",
    value: function render() {
      console.log("App Page");
      console.log(this.props);
      return __jsx("div", null, __jsx(_Playlist__WEBPACK_IMPORTED_MODULE_9__["default"], {
        addSong: this.addSong,
        songs: this.state.songs
      }), __jsx(_SearchPage__WEBPACK_IMPORTED_MODULE_8__["default"], {
        user: this.props.user,
        addSong: this.addSong
      }));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./component/Playlist.js":
/*!*******************************!*\
  !*** ./component/Playlist.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Playlist; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Song__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Song */ "./component/Song.js");





var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;



var Playlist =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Playlist, _Component);

  function Playlist() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Playlist);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Playlist).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Playlist, [{
    key: "render",
    value: function render() {
      var styles = {
        link: {
          width: '5vh',
          padding: '10%'
        },
        playlist: {
          display: 'flex',
          flexWrap: 'wrap',
          width: '100%'
        }
      };
      var songlist = this.props.songs.map(function (x) {
        return __jsx(_Song__WEBPACK_IMPORTED_MODULE_6__["default"], {
          name: x.name,
          rank: x.rank,
          artist: x.artist,
          number: x.number
        });
      });
      return __jsx("div", {
        style: styles.playlist
      }, songlist, __jsx("a", {
        href: "/search",
        style: styles.link
      }, __jsx("img", {
        src: "",
        alt: "plus",
        style: styles.link
      })), __jsx("button", {
        onClick: this.props.addSong
      }, " ADD SONG"));
    }
  }]);

  return Playlist;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);


;

/***/ }),

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
                url = 'https://api.spotify.com/v1/search/q=name:' + this.state.value + "&type=track";
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
                this.setState({
                  results: results.body
                });

              case 12:
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
      }, ".flexy.jsx-1552033435{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcam9zaHVcXERvY3VtZW50c1xcR2l0SHViXFxuZXh0LW11bHRpZnlcXGNvbXBvbmVudFxcU2VhcmNoUGFnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5RHNCLEFBSVUsMEVBQUMiLCJmaWxlIjoiQzpcXFVzZXJzXFxqb3NodVxcRG9jdW1lbnRzXFxHaXRIdWJcXG5leHQtbXVsdGlmeVxcY29tcG9uZW50XFxTZWFyY2hQYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBTZWFyY2hQYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICB2YWx1ZTogJycsXHJcbiAgICAgICAgICByZXN1bHRzOiBbXVxyXG4gICAgICAgIH07XHJcbiAgICBcclxuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgICAgaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZX0pO1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgICAgYXN5bmMgaGFuZGxlU3VibWl0KGV2ZW50KSB7XHJcbiAgICAgICAgYWxlcnQoJ0FuIGVzc2F5IHdhcyBzdWJtaXR0ZWQ6ICcgKyB0aGlzLnN0YXRlLnZhbHVlKTtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCB0b2tlbiA9ICB0aGlzLnByb3BzLnVzZXIudXNlcl90b2tlblxyXG4gICAgICAgIGNvbnN0IHVybCA9ICdodHRwczovL2FwaS5zcG90aWZ5LmNvbS92MS9zZWFyY2gvcT1uYW1lOicgKyB0aGlzLnN0YXRlLnZhbHVlICsgXCImdHlwZT10cmFja1wiXHJcbiAgICAgICAgbGV0IHJlc3VsdHMgPSBhd2FpdCBmZXRjaCAodXJsLCB7XHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnK3Rva2VuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHRzKVxyXG4gICAgICAgIHJlc3VsdHMgPSBhd2FpdCByZXN1bHRzLmpzb24oKVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3Jlc3VsdHMgOiByZXN1bHRzLmJvZHl9KVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXF1ZXN0KCkge1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgIGxldCByZXN1bHRzID0gdGhpcy5zdGF0ZS5yZXN1bHRzLm1hcCgoeCk9PntcclxuICAgICAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICAgIHt4fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICB9KVxyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9Jy8nPkJhY2s8L2E+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMucHJvcHMuYWRkU29uZ30+QUREIFNPTkc8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxoMT57dGhpcy5wcm9wcy5hZGRTb25nfTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgIEVzc2F5OlxyXG4gICAgICAgICAgPHRleHRhcmVhIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IC8+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU3VibWl0XCIgb25DbGljaz17dGhpcy5oYW5kbGVTdWJtaXR9Lz5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXh5Jz5cclxuICAgICAgICAgICAgICB7cmVzdWx0c31cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgLmZsZXh5IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaFBhZ2U7Il19 */\n/*@ sourceURL=C:\\Users\\joshu\\Documents\\GitHub\\next-multify\\component\\SearchPage.js */"));
    }
  }]);

  return SearchPage;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SearchPage);

/***/ }),

/***/ "./component/Song.js":
/*!***************************!*\
  !*** ./component/Song.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Song; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);






var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;


var Song =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Song, _Component);

  function Song(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Song);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Song).call(this, props));
    _this.state = {
      r: Math.floor(Math.random() * 256),
      g: Math.floor(Math.random() * 256),
      b: Math.floor(Math.random() * 256),
      opacityup: 0.2,
      opacitydown: 0.2
    };
    _this.voteup = _this.voteup.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.votedown = _this.votedown.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Song, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log(this.state.r, this.state.g, this.state.b);
    }
  }, {
    key: "voteup",
    value: function voteup() {
      this.setState({
        opacityup: 1
      });
    }
  }, {
    key: "votedown",
    value: function votedown() {
      this.setState({
        opacitydown: 1
      });
    }
  }, {
    key: "render",
    value: function render() {
      var styles = {
        box: {
          display: 'flex',
          flexDirection: 'column',
          width: '22%',
          height: '25%',
          margin: '8px',
          padding: '10px',
          position: 'relative',
          background: "rgba(" + this.state.r + "," + this.state.g + "," + this.state.b + ", 0.5"
        },
        h1: {
          fontSize: '140px',
          margin: '0',
          paddingLeft: '5%'
        },
        h2: {
          fontSize: '40px',
          marginTop: '-6%',
          paddingLeft: '15%'
        },
        p: {
          fontSize: '40px',
          margin: '0',
          paddingLeft: '15%'
        },
        button1: {
          background: 'none',
          border: 'none',
          width: '100px',
          height: '100px',
          position: 'absolute',
          top: '10px',
          right: '20px'
        },
        button2: {
          background: 'none',
          border: 'none',
          width: '100px',
          height: '100px',
          position: 'absolute',
          bottom: '10px',
          right: '20px'
        },
        imageup: {
          width: '100px',
          height: '100px',
          opacity: this.state.opacityup
        },
        imagedown: {
          width: '100px',
          height: '100px',
          opacity: this.state.opacitydown
        }
      };
      return __jsx("div", {
        style: styles.box
      }, __jsx("h1", {
        style: styles.h1
      }, this.props.rank), __jsx("h2", {
        style: styles.h2
      }, this.props.name), __jsx("p", {
        style: styles.p
      }, this.props.artist), __jsx("button", {
        style: styles.button1,
        onClick: this.votedown
      }, __jsx("img", {
        src: "",
        alt: "triangle down",
        style: styles.imagedown
      })), __jsx("button", {
        style: styles.button2,
        onClick: this.voteup
      }, __jsx("img", {
        src: "",
        alt: "triangle up",
        style: styles.imageup
      })));
    }
  }]);

  return Song;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);


;

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _component_Login__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../component/Login */ "./component/Login.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _component_App__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../component/App */ "./component/App.js");
/* harmony import */ var _Events__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Events */ "./Events.js");
/* harmony import */ var _Events__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_Events__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_14__);








var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;








var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Index, _React$Component);

  function Index(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Index);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Index).call(this, props));
    _this.state = {
      inRoom: false
    };
    _this.enter = _this.enter.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Index, [{
    key: "enter",
    value: function enter(evt) {
      evt.preventDefault();
      this.setState({
        inRoom: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      var Button = __jsx("div", {
        className: "btn btn-primary",
        onClick: this.enter
      }, "Enter Room");

      console.log(this.props);
      return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, this.state.inRoom ? __jsx(_component_App__WEBPACK_IMPORTED_MODULE_12__["default"], {
        user: this.props.user
      }) : __jsx("div", null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_10___default.a, null, __jsx("title", null, "Example of the Authorization Code flow with Spotify"), __jsx("link", {
        rel: "stylesheet",
        href: "//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css"
      })), this.props.user.user_token ? Button : __jsx(_component_Login__WEBPACK_IMPORTED_MODULE_9__["default"], null)));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
        var res, user;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11___default()('http://localhost:3000/getUser', {
                  headers: {
                    cookie: ctx.req.headers.cookie
                  }
                });

              case 2:
                res = _context.sent;
                _context.next = 5;
                return res.json();

              case 5:
                user = _context.sent;
                return _context.abrupt("return", {
                  user: user
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.033917b832035befc526.hot-update.js.map