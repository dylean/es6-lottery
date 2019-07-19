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

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	//proxy 代理，用户拿的对象和原始对象，用户是不能直接操作原始对象的。
	//reflect 反射
	{
	  var obj = {
	    time: '2017-03-11',
	    name: 'net',
	    _r: 123
	  };

	  var monitor = new Proxy(obj, {
	    //拦截对象属性的读取
	    get: function get(target, key) {
	      return target[key].replace('2017', '2018');
	    },

	    //拦截对象设置属性
	    set: function set(target, p, value, receiver) {
	      if (p === 'name') {
	        return target[p] = value;
	      } else {
	        return target[p];
	      }
	    },

	    //拦截key in object操作
	    has: function has(target, key) {
	      if (key === 'name') {
	        return target[key];
	      } else {
	        return false;
	      }
	    },

	    //拦截delete操作
	    deleteProperty: function deleteProperty(target, p) {
	      if (p.indexOf('_') > -1) {
	        delete target[p];
	        return true;
	      } else {
	        return target[p];
	      }
	    },

	    //拦截object.keys,object.getOwnPropertySymbols,Object.getOwnPropertyNames
	    ownKeys: function ownKeys(target) {
	      return Object.keys(target).filter(function (item) {
	        return item !== 'time';
	      });
	    }
	  });
	  console.log('get', monitor.time);
	  monitor.time = '2019';
	  monitor.name = 'mukewang';
	  console.log(monitor, monitor.time);
	  console.log('has', 'time' in monitor);
	  delete monitor.time;
	  console.log(monitor);
	  delete monitor._r;
	  console.log(monitor);
	  console.log('ownKeys', Object.keys(monitor));
	}

	{
	  //reflect
	  var _obj = {
	    time: '2017-03-11',
	    name: 'net',
	    _r: 123
	  };
	  console.log(Reflect.get(_obj, 'time'));
	  console.log(Reflect.set(_obj, 'name', 'javascript'), _obj);
	  console.log(Reflect.has(_obj, 'name'));
	}

	{
	  //和业务解耦

	  var validator = function validator(target, _validator) {
	    return new Proxy(target, {
	      _validator: _validator,
	      set: function set(target, p, value, receiver) {
	        if (target.hasOwnProperty(p)) {
	          var va = this._validator[p];
	          if (!!va(value)) {
	            return Reflect.set(target, p, value, receiver);
	          } else {
	            throw Error('\u4E0D\u80FD\u8BBE\u7F6E' + p + '\u4E3A' + value);
	          }
	        } else {
	          throw Error(p + ' \u4E0D\u5B58\u5728');
	        }
	      }
	    });
	  };

	  var personValidators = {
	    name: function name(val) {
	      return typeof val === 'string';
	    },
	    age: function age(val) {
	      return typeof val === 'number' && val > 18;
	    },
	    mobile: function mobile(val) {}
	  };

	  var Person = function Person(name, age) {
	    _classCallCheck(this, Person);

	    this.name = name;
	    this.age = age;
	    this.mobile = '1111';
	    return validator(this, personValidators); // this值Person的实例
	  };

	  var person = new Person('lilei', 30);

	  console.log(person);
	  person.name = 'Han mei mei';
	  console.log(person);
	}

/***/ })
/******/ ]);