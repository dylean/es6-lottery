/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(2);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';

	{
	  var regex = new RegExp('xyz', 'i');
	  var regex2 = new RegExp(/xyz/i);

	  console.log(regex.test('xyz123'), regex2.test('xyz123'));

	  var regex3 = new RegExp(/xyz/ig, 'i');
	  console.log(regex3.flags);
	}

	{
	  var s = 'bbb_bbb_b';
	  var a1 = /b+/g;
	  var a2 = new RegExp('b+', 'y');
	  //g 和 y 的区别。g不强调下一个字符开始匹配。会忽略下划线。
	  console.log('one', a1.exec(s), a2.exec(s));
	  console.log('two', a1.exec(s), a2.exec(s));

	  console.log(a1.sticky, a2.sticky); // 判断是否开启y
	}

	{
	  // u unicode
	  console.log('u-1', /^\uD83D/.test('\uD83D\uDC2A')); //理解成两个字符，4个字节
	  console.log('u-1', /^(?:\uD83D(?![\uDC00-\uDFFF]))/.test('\uD83D\uDC2A')); //4个字节当做一个字符

	  console.log(/\u{61}/.test('a')); // 匹配小于两个字节长度的字符，换行符 回车符 行分隔符 段分隔符也不能识别
	  console.log(/a/.test('a'));

	  console.log('\uD842\uDFB7');
	  var _s = '𠮷';
	  console.log('u', /^.$/.test(_s));
	  console.log('u-2', /^(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])$/.test(_s));
	  // 大于两个字节 加上 u 修饰符去识别

	  console.log('test', /(?:\uD842\uDFB7){2}/.test('𠮷𠮷'));
	}

/***/ })
/******/ ]);