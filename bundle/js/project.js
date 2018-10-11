/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

var _mobile_menu = __webpack_require__(2);

var mobile_menu = _interopRequireWildcard(_mobile_menu);

var _smoothScroll = __webpack_require__(3);

var smoothScroll = _interopRequireWildcard(_smoothScroll);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mobileBtn = document.querySelector('.js-mobile-menu');
var mobileMenu = document.querySelector('.js-navigation');

if (!!mobileBtn && !!mobileMenu) {
    var menuActive = true;

    var onKeyDown = function onKeyDown(evt) {
        evt = evt || window.event;
        if (evt.keyCode == 27) {
            closeMenu();
        }
    };

    var onBodyClick = function onBodyClick(evt) {
        evt = evt || window.event;
        var targetHref = evt.target.getAttribute('href');
        if (evt.target.classList.contains('menu__link') || /^#/.test(targetHref)) {
            closeMenu();
        }
    };

    var showMenu = function showMenu() {
        mobileBtn.querySelector('.menu-btn').classList.add('open');
        mobileMenu.classList.add('open');
        document.body.classList.add('mobile-menu-opened');
        document.addEventListener('keydown', onKeyDown);
        document.addEventListener('click', onBodyClick);
        menuActive = false;
    };
    var closeMenu = function closeMenu() {
        mobileBtn.querySelector('.menu-btn').classList.remove('open');
        mobileMenu.classList.remove('open');
        document.body.classList.remove('mobile-menu-opened');
        document.removeEventListener('keydown', onKeyDown);
        document.removeEventListener('click', onBodyClick);
        menuActive = true;
    };

    mobileBtn.onclick = function () {
        console.log('123');
        if (menuActive) {
            showMenu();
        } else {
            closeMenu();
        }
    };
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


document.querySelectorAll('.js-smooth-link').forEach(function (a) {
    a.addEventListener('click', function (e) {
        e.preventDefault();
        var href = this.getAttribute("href");
        var elem = document.querySelector(href) || document.querySelector("a[name=" + href.substring(1, href.length) + "]");
        window.scroll({
            top: elem.offsetTop,
            left: 0,
            behavior: 'smooth'
        });
    });
});

/***/ })
/******/ ]);
//# sourceMappingURL=project.js.map