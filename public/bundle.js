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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nError: [BABEL]: Cannot find module '@babel/plugin-bugfix-safari-id-destructuring-collision-in-function-expression'\\nRequire stack:\\n- /Users/mtdupuie/hackReactor/fec/node_modules/@babel/preset-env/lib/available-plugins.js\\n- /Users/mtdupuie/hackReactor/fec/node_modules/@babel/preset-env/lib/filter-items.js\\n- /Users/mtdupuie/hackReactor/fec/node_modules/@babel/preset-env/lib/index.js\\n- /Users/mtdupuie/hackReactor/fec/node_modules/@babel/core/lib/config/files/module-types.js\\n- /Users/mtdupuie/hackReactor/fec/node_modules/@babel/core/lib/config/files/configuration.js\\n- /Users/mtdupuie/hackReactor/fec/node_modules/@babel/core/lib/config/files/index.js\\n- /Users/mtdupuie/hackReactor/fec/node_modules/@babel/core/lib/index.js\\n- /Users/mtdupuie/hackReactor/fec/node_modules/babel-loader/lib/index.js\\n- /Users/mtdupuie/hackReactor/fec/node_modules/loader-runner/lib/loadLoader.js\\n- /Users/mtdupuie/hackReactor/fec/node_modules/loader-runner/lib/LoaderRunner.js\\n- /Users/mtdupuie/hackReactor/fec/node_modules/webpack/lib/NormalModule.js\\n- /Users/mtdupuie/hackReactor/fec/node_modules/webpack/lib/NormalModuleFactory.js\\n- /Users/mtdupuie/hackReactor/fec/node_modules/webpack/lib/Compiler.js\\n- /Users/mtdupuie/hackReactor/fec/node_modules/webpack/lib/webpack.js\\n- /Users/mtdupuie/hackReactor/fec/node_modules/webpack-cli/lib/webpack-cli.js\\n- /Users/mtdupuie/hackReactor/fec/node_modules/webpack-cli/lib/bootstrap.js\\n- /Users/mtdupuie/hackReactor/fec/node_modules/webpack-cli/bin/cli.js\\n- /Users/mtdupuie/hackReactor/fec/node_modules/webpack/bin/webpack.js (While processing: /Users/mtdupuie/hackReactor/fec/node_modules/@babel/preset-env/lib/index.js)\\n    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:889:15)\\n    at Function.Module._load (internal/modules/cjs/loader.js:745:27)\\n    at Module.require (internal/modules/cjs/loader.js:961:19)\\n    at require (internal/modules/cjs/helpers.js:92:18)\\n    at Object.<anonymous> (/Users/mtdupuie/hackReactor/fec/node_modules/@babel/preset-env/lib/available-plugins.js:142:71)\\n    at Module._compile (internal/modules/cjs/loader.js:1072:14)\\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1101:10)\\n    at Module.load (internal/modules/cjs/loader.js:937:32)\\n    at Function.Module._load (internal/modules/cjs/loader.js:778:12)\\n    at Module.require (internal/modules/cjs/loader.js:961:19)\");\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });