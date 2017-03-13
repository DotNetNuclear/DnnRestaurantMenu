/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "http://localhost:8080/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*****************************************!*\
  !*** ./restaurantmenu.web/src/main.jsx ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("E:\\websites\\dnn_900\\Website\\DesktopModules\\DotNetNuclear\\RestaurantMenuPB\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("E:\\websites\\dnn_900\\Website\\DesktopModules\\DotNetNuclear\\RestaurantMenuPB\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 3);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 4);
	
	var _configureStore = __webpack_require__(/*! ./store/configureStore */ 5);
	
	var _configureStore2 = _interopRequireDefault(_configureStore);
	
	var _Root = __webpack_require__(/*! ./containers/Root */ 16);
	
	var _Root2 = _interopRequireDefault(_Root);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var store = (0, _configureStore2.default)();
	
	var appContainer = document.getElementById("restaurantmenu-container");
	(0, _reactDom.render)(_react2.default.createElement(
	    _reactRedux.Provider,
	    { store: store },
	    _react2.default.createElement(_Root2.default, null)
	), appContainer);
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\websites\\dnn_900\\Website\\DesktopModules\\DotNetNuclear\\RestaurantMenuPB\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "main.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 1 */,
/* 2 */
/*!***********************************************!*\
  !*** external "window.dnn.nodeModules.React" ***!
  \***********************************************/
/***/ function(module, exports) {

	module.exports = window.dnn.nodeModules.React;

/***/ },
/* 3 */
/*!**************************************************!*\
  !*** external "window.dnn.nodeModules.ReactDOM" ***!
  \**************************************************/
/***/ function(module, exports) {

	module.exports = window.dnn.nodeModules.ReactDOM;

/***/ },
/* 4 */
/*!****************************************************!*\
  !*** external "window.dnn.nodeModules.ReactRedux" ***!
  \****************************************************/
/***/ function(module, exports) {

	module.exports = window.dnn.nodeModules.ReactRedux;

/***/ },
/* 5 */
/*!********************************************************!*\
  !*** ./restaurantmenu.web/src/store/configureStore.js ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("E:\\websites\\dnn_900\\Website\\DesktopModules\\DotNetNuclear\\RestaurantMenuPB\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("E:\\websites\\dnn_900\\Website\\DesktopModules\\DotNetNuclear\\RestaurantMenuPB\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = configureStore;
	
	var _redux = __webpack_require__(/*! redux */ 6);
	
	var _reduxThunk = __webpack_require__(/*! redux-thunk */ 7);
	
	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);
	
	var _reduxImmutableStateInvariant = __webpack_require__(/*! redux-immutable-state-invariant */ 8);
	
	var _reduxImmutableStateInvariant2 = _interopRequireDefault(_reduxImmutableStateInvariant);
	
	var _rootReducer = __webpack_require__(/*! ../reducers/rootReducer */ 9);
	
	var _rootReducer2 = _interopRequireDefault(_rootReducer);
	
	var _DevTools = __webpack_require__(/*! ../containers/DevTools */ 12);
	
	var _DevTools2 = _interopRequireDefault(_DevTools);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function configureStore(initialState) {
	    var store = (0, _redux.createStore)(_rootReducer2.default, initialState, (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default, (0, _reduxImmutableStateInvariant2.default)()), // TODO: apply only for development          
	    _DevTools2.default.instrument()));
	    return store;
	}
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\websites\\dnn_900\\Website\\DesktopModules\\DotNetNuclear\\RestaurantMenuPB\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "configureStore.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 6 */
/*!***********************************************!*\
  !*** external "window.dnn.nodeModules.Redux" ***!
  \***********************************************/
/***/ function(module, exports) {

	module.exports = window.dnn.nodeModules.Redux;

/***/ },
/* 7 */
/*!****************************************************!*\
  !*** external "window.dnn.nodeModules.ReduxThunk" ***!
  \****************************************************/
/***/ function(module, exports) {

	module.exports = window.dnn.nodeModules.ReduxThunk;

/***/ },
/* 8 */
/*!**********************************************************************!*\
  !*** external "window.dnn.nodeModules.ReduxImmutableStateInvariant" ***!
  \**********************************************************************/
/***/ function(module, exports) {

	module.exports = window.dnn.nodeModules.ReduxImmutableStateInvariant;

/***/ },
/* 9 */
/*!********************************************************!*\
  !*** ./restaurantmenu.web/src/reducers/rootReducer.js ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("E:\\websites\\dnn_900\\Website\\DesktopModules\\DotNetNuclear\\RestaurantMenuPB\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("E:\\websites\\dnn_900\\Website\\DesktopModules\\DotNetNuclear\\RestaurantMenuPB\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _redux = __webpack_require__(/*! redux */ 6);
	
	var _MenuReducer = __webpack_require__(/*! ./MenuReducer */ 10);
	
	var _MenuReducer2 = _interopRequireDefault(_MenuReducer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var rootReducer = (0, _redux.combineReducers)({
	    menu: _MenuReducer2.default
	});
	
	exports.default = rootReducer;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\websites\\dnn_900\\Website\\DesktopModules\\DotNetNuclear\\RestaurantMenuPB\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "rootReducer.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 10 */
/*!********************************************************!*\
  !*** ./restaurantmenu.web/src/reducers/MenuReducer.js ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("E:\\websites\\dnn_900\\Website\\DesktopModules\\DotNetNuclear\\RestaurantMenuPB\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("E:\\websites\\dnn_900\\Website\\DesktopModules\\DotNetNuclear\\RestaurantMenuPB\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = menu;
	
	var _MenuActionTypes = __webpack_require__(/*! constants/actionTypes/MenuActionTypes */ 11);
	
	var _MenuActionTypes2 = _interopRequireDefault(_MenuActionTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function menu() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
	        list: [],
	        totalCount: 0
	    };
	    var action = arguments[1];
	
	    switch (action.type) {
	        case _MenuActionTypes2.default.RETRIEVED_MENU:
	            return _extends({}, state, {
	                list: action.payload.Results,
	                totalCount: action.payload.TotalResults
	            });
	        default:
	            return state;
	    }
	}
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\websites\\dnn_900\\Website\\DesktopModules\\DotNetNuclear\\RestaurantMenuPB\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "MenuReducer.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 11 */
/*!*************************************************************************!*\
  !*** ./restaurantmenu.web/src/constants/actionTypes/MenuActionTypes.js ***!
  \*************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("E:\\websites\\dnn_900\\Website\\DesktopModules\\DotNetNuclear\\RestaurantMenuPB\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("E:\\websites\\dnn_900\\Website\\DesktopModules\\DotNetNuclear\\RestaurantMenuPB\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var menuActionTypes = {
	    RETRIEVED_MENU: "RETRIEVED_MENU",
	    UPDATE_MENUITEM: "UPDATE_MENUITEM",
	    DELETE_MENUITEM: "DELETE_MENUITEM",
	    CHANGE_FIELD_VALUE: "CHANGE_FIELD_VALUE"
	};
	exports.default = menuActionTypes;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\websites\\dnn_900\\Website\\DesktopModules\\DotNetNuclear\\RestaurantMenuPB\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "MenuActionTypes.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 12 */
/*!*******************************************************!*\
  !*** ./restaurantmenu.web/src/containers/DevTools.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("E:\\websites\\dnn_900\\Website\\DesktopModules\\DotNetNuclear\\RestaurantMenuPB\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("E:\\websites\\dnn_900\\Website\\DesktopModules\\DotNetNuclear\\RestaurantMenuPB\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reduxDevtools = __webpack_require__(/*! redux-devtools */ 13);
	
	var _reduxDevtoolsLogMonitor = __webpack_require__(/*! redux-devtools-log-monitor */ 14);
	
	var _reduxDevtoolsLogMonitor2 = _interopRequireDefault(_reduxDevtoolsLogMonitor);
	
	var _reduxDevtoolsDockMonitor = __webpack_require__(/*! redux-devtools-dock-monitor */ 15);
	
	var _reduxDevtoolsDockMonitor2 = _interopRequireDefault(_reduxDevtoolsDockMonitor);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (0, _reduxDevtools.createDevTools)(_react2.default.createElement(
	  _reduxDevtoolsDockMonitor2.default,
	  { toggleVisibilityKey: "ctrl-h",
	    changePositionKey: "ctrl-q" },
	  _react2.default.createElement(_reduxDevtoolsLogMonitor2.default, null)
	));
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\websites\\dnn_900\\Website\\DesktopModules\\DotNetNuclear\\RestaurantMenuPB\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "DevTools.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 13 */
/*!*******************************************************!*\
  !*** external "window.dnn.nodeModules.ReduxDevTools" ***!
  \*******************************************************/
/***/ function(module, exports) {

	module.exports = window.dnn.nodeModules.ReduxDevTools;

/***/ },
/* 14 */
/*!*****************************************************************!*\
  !*** external "window.dnn.nodeModules.ReduxDevToolsLogMonitor" ***!
  \*****************************************************************/
/***/ function(module, exports) {

	module.exports = window.dnn.nodeModules.ReduxDevToolsLogMonitor;

/***/ },
/* 15 */
/*!******************************************************************!*\
  !*** external "window.dnn.nodeModules.ReduxDevToolsDockMonitor" ***!
  \******************************************************************/
/***/ function(module, exports) {

	module.exports = window.dnn.nodeModules.ReduxDevToolsDockMonitor;

/***/ },
/* 16 */
/*!***************************************************!*\
  !*** ./restaurantmenu.web/src/containers/Root.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("E:\\websites\\dnn_900\\Website\\DesktopModules\\DotNetNuclear\\RestaurantMenuPB\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("E:\\websites\\dnn_900\\Website\\DesktopModules\\DotNetNuclear\\RestaurantMenuPB\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	/* eslint-disable no-undef */
	if (process.env.NODE_ENV === "production") {
	    module.exports = __webpack_require__(/*! ./Root.prod */ 18);
	} else {
	    module.exports = __webpack_require__(/*! ./Root.dev */ 64);
	}
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\websites\\dnn_900\\Website\\DesktopModules\\DotNetNuclear\\RestaurantMenuPB\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Root.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 17)))

/***/ },
/* 17 */
/*!******************************!*\
  !*** ./~/process/browser.js ***!
  \******************************/
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 18 */
/*!********************************************************!*\
  !*** ./restaurantmenu.web/src/containers/Root.prod.js ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("E:\\websites\\dnn_900\\Website\\DesktopModules\\DotNetNuclear\\RestaurantMenuPB\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("E:\\websites\\dnn_900\\Website\\DesktopModules\\DotNetNuclear\\RestaurantMenuPB\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _App = __webpack_require__(/*! ../components/App */ 19);
	
	var _App2 = _interopRequireDefault(_App);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Root = function (_Component) {
	    _inherits(Root, _Component);
	
	    function Root() {
	        _classCallCheck(this, Root);
	
	        return _possibleConstructorReturn(this, (Root.__proto__ || Object.getPrototypeOf(Root)).apply(this, arguments));
	    }
	
	    _createClass(Root, [{
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "div",
	                null,
	                _react2.default.createElement(_App2.default, null)
	            );
	        }
	    }]);
	
	    return Root;
	}(_react.Component);
	
	exports.default = Root;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\websites\\dnn_900\\Website\\DesktopModules\\DotNetNuclear\\RestaurantMenuPB\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Root.prod.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 19 */
/*!***************************************************!*\
  !*** ./restaurantmenu.web/src/components/App.jsx ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("E:\\websites\\dnn_900\\Website\\DesktopModules\\DotNetNuclear\\RestaurantMenuPB\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("E:\\websites\\dnn_900\\Website\\DesktopModules\\DotNetNuclear\\RestaurantMenuPB\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 4);
	
	var _dnnPersonaBarPageHeader = __webpack_require__(/*! dnn-persona-bar-page-header */ 20);
	
	var _dnnPersonaBarPageHeader2 = _interopRequireDefault(_dnnPersonaBarPageHeader);
	
	var _dnnPersonaBarPage = __webpack_require__(/*! dnn-persona-bar-page */ 21);
	
	var _dnnPersonaBarPage2 = _interopRequireDefault(_dnnPersonaBarPage);
	
	var _dnnButton = __webpack_require__(/*! dnn-button */ 22);
	
	var _dnnButton2 = _interopRequireDefault(_dnnButton);
	
	var _MenuList = __webpack_require__(/*! ./MenuList */ 23);
	
	var _MenuList2 = _interopRequireDefault(_MenuList);
	
	var _localization = __webpack_require__(/*! localization */ 28);
	
	var _localization2 = _interopRequireDefault(_localization);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var App = function (_Component) {
	    _inherits(App, _Component);
	
	    function App() {
	        _classCallCheck(this, App);
	
	        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));
	    }
	
	    _createClass(App, [{
	        key: "componentWillMount",
	        value: function componentWillMount() {}
	    }, {
	        key: "onCreate",
	        value: function onCreate() {
	            this.refs["menuPanel"].getWrappedInstance().onAddItem();
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "div",
	                { className: "restaurantMenu-app" },
	                _react2.default.createElement(
	                    _dnnPersonaBarPage2.default,
	                    { isOpen: "true" },
	                    _react2.default.createElement(
	                        _dnnPersonaBarPageHeader2.default,
	                        { title: _localization2.default.get("nav_RestaurantMenu") },
	                        _react2.default.createElement(
	                            _dnnButton2.default,
	                            { type: "primary", size: "large", onClick: this.onCreate.bind(this), title: _localization2.default.get("btnNewItem") },
	                            _localization2.default.get("btnNewItem")
	                        )
	                    ),
	                    _react2.default.createElement(_MenuList2.default, { ref: "menuPanel" })
	                )
	            );
	        }
	    }]);
	
	    return App;
	}(_react.Component);
	
	App.propTypes = {
	    dispatch: _react.PropTypes.func.isRequired,
	    menu: _react.PropTypes.array
	};
	
	function mapStateToProps(state) {
	    return {
	        menu: state.menu.list
	    };
	}
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(App);
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\websites\\dnn_900\\Website\\DesktopModules\\DotNetNuclear\\RestaurantMenuPB\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "App.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 20 */
/*!*******************************************************************************!*\
  !*** external "window.dnn.nodeModules.CommonComponents.PersonaBarPageHeader" ***!
  \*******************************************************************************/
/***/ function(module, exports) {

	module.exports = window.dnn.nodeModules.CommonComponents.PersonaBarPageHeader;

/***/ },
/* 21 */
/*!*************************************************************************!*\
  !*** external "window.dnn.nodeModules.CommonComponents.PersonaBarPage" ***!
  \*************************************************************************/
/***/ function(module, exports) {

	module.exports = window.dnn.nodeModules.CommonComponents.PersonaBarPage;

/***/ },
/* 22 */
/*!*****************************************************************!*\
  !*** external "window.dnn.nodeModules.CommonComponents.Button" ***!
  \*****************************************************************/
/***/ function(module, exports) {

	module.exports = window.dnn.nodeModules.CommonComponents.Button;

/***/ },
/* 23 */
/*!**************************************************************!*\
  !*** ./restaurantmenu.web/src/components/MenuList/index.jsx ***!
  \**************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("E:\\websites\\dnn_900\\Website\\DesktopModules\\DotNetNuclear\\RestaurantMenuPB\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("E:\\websites\\dnn_900\\Website\\DesktopModules\\DotNetNuclear\\RestaurantMenuPB\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 4);
	
	var _dnnPersonaBarPageBody = __webpack_require__(/*! dnn-persona-bar-page-body */ 24);
	
	var _dnnPersonaBarPageBody2 = _interopRequireDefault(_dnnPersonaBarPageBody);
	
	var _HeaderRow = __webpack_require__(/*! ./HeaderRow */ 25);
	
	var _HeaderRow2 = _interopRequireDefault(_HeaderRow);
	
	var _DetailRow = __webpack_require__(/*! ./DetailRow */ 30);
	
	var _DetailRow2 = _interopRequireDefault(_DetailRow);
	
	var _MenuActions = __webpack_require__(/*! actions/MenuActions */ 48);
	
	var _MenuActions2 = _interopRequireDefault(_MenuActions);
	
	var _MenuEditor = __webpack_require__(/*! ./MenuEditor */ 50);
	
	var _MenuEditor2 = _interopRequireDefault(_MenuEditor);
	
	var _CollapsibleSwitcher = __webpack_require__(/*! ../common/CollapsibleSwitcher */ 61);
	
	var _CollapsibleSwitcher2 = _interopRequireDefault(_CollapsibleSwitcher);
	
	var _localization = __webpack_require__(/*! localization */ 28);
	
	var _localization2 = _interopRequireDefault(_localization);
	
	__webpack_require__(/*! ./style.less */ 62);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var MenuList = function (_Component) {
	    _inherits(MenuList, _Component);
	
	    function MenuList() {
	        _classCallCheck(this, MenuList);
	
	        var _this = _possibleConstructorReturn(this, (MenuList.__proto__ || Object.getPrototypeOf(MenuList)).call(this));
	
	        _this.state = {
	            openId: "",
	            renderIndex: -1,
	            parameter: {}
	        };
	        return _this;
	    }
	
	    _createClass(MenuList, [{
	        key: "componentWillMount",
	        value: function componentWillMount() {
	            this.refreshMenu();
	        }
	
	        //componentWillReceiveProps(newProps) {
	        //}
	
	    }, {
	        key: "refreshMenu",
	        value: function refreshMenu() {
	            var _this2 = this;
	
	            var props = this.props,
	                state = this.state;
	
	            props.dispatch(_MenuActions2.default.getMenu(state.parameter, function (data) {
	                var menu = _extends([], data.Results);
	                _this2.setState({ menu: menu });
	            }));
	        }
	    }, {
	        key: "uncollapse",
	        value: function uncollapse(id, index) {
	            var _this3 = this;
	
	            setTimeout(function () {
	                _this3.setState({
	                    openId: id,
	                    renderIndex: index
	                });
	            }, this.timeout);
	        }
	    }, {
	        key: "collapse",
	        value: function collapse() {
	            if (this.state.openId !== "") {
	                this.setState({
	                    openId: "",
	                    renderIndex: -1
	                });
	            }
	        }
	    }, {
	        key: "toggle",
	        value: function toggle(openId, index) {
	            if (openId !== "") {
	                this.uncollapse(openId, index);
	            } else {
	                this.collapse();
	            }
	        }
	    }, {
	        key: "renderedMenu",
	        value: function renderedMenu() {
	            var _this4 = this;
	
	            if (this.props.menu.totalCount > 0) {
	                var i = 0;
	                return this.props.menu.list.map(function (item, index) {
	                    var id = "row-" + i++;
	                    var children = [_react2.default.createElement("div", null), _react2.default.createElement(_MenuEditor2.default, {
	                        menuDetails: item,
	                        onChangeField: _MenuActions2.default.changePageField,
	                        refreshMenu: _this4.refreshMenu.bind(_this4),
	                        menuId: item.id,
	                        Collapse: _this4.collapse.bind(_this4)
	                    })];
	                    return _react2.default.createElement(
	                        _DetailRow2.default,
	                        {
	                            name: item.name,
	                            price: item.priceFormatted,
	                            imageUrl: item.imageUrl,
	                            index: index,
	                            key: "menuitem-" + index,
	                            closeOnClick: true,
	                            openId: _this4.state.openId,
	                            currentIndex: _this4.state.renderIndex,
	                            OpenCollapseEditItems: _this4.toggle.bind(_this4, id, 1),
	                            Collapse: _this4.collapse.bind(_this4, id),
	                            id: id },
	                        _react2.default.createElement(_CollapsibleSwitcher2.default, { children: children, renderIndex: _this4.state.renderIndex })
	                    );
	                });
	            } else {
	                return _react2.default.createElement(
	                    "div",
	                    { className: "no-users-row" },
	                    _localization2.default.get("NoData")
	                );
	            }
	        }
	    }, {
	        key: "onAddItem",
	        value: function onAddItem() {
	            this.toggle(this.state.openId === "add" ? "" : "add", 1);
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var opened = this.state.openId === "add";
	            var children = [_react2.default.createElement("div", null), _react2.default.createElement(_MenuEditor2.default, {
	                menuId: -1,
	                onChangeField: _MenuActions2.default.changePageField,
	                refreshMenu: this.refreshMenu.bind(this),
	                Collapse: this.collapse.bind(this)
	            })];
	            return _react2.default.createElement(
	                _dnnPersonaBarPageBody2.default,
	                { className: "" /*{styles.menuList}*/ },
	                _react2.default.createElement(_HeaderRow2.default, null),
	                _react2.default.createElement(
	                    "div",
	                    { className: "add-setting-editor" },
	                    _react2.default.createElement(
	                        _DetailRow2.default,
	                        {
	                            name: "-",
	                            price: 0,
	                            imageUrl: "/DesktopModules/DotNetNuclear/RestaurantMenuPB/Resources/images/noimage.png",
	                            index: "add",
	                            key: "menuitem-add",
	                            closeOnClick: true,
	                            openId: this.state.openId,
	                            currentIndex: this.state.renderIndex,
	                            OpenCollapseEditItems: this.toggle.bind(this, "add", 1),
	                            Collapse: this.collapse.bind(this, "add"),
	                            id: "add",
	                            addIsClosed: !opened },
	                        opened && _react2.default.createElement(_CollapsibleSwitcher2.default, { children: children, renderIndex: this.state.renderIndex })
	                    )
	                ),
	                _react2.default.createElement(
	                    "div",
	                    { className: "menuitem-list-container" },
	                    this.renderedMenu()
	                )
	            );
	        }
	    }]);
	
	    return MenuList;
	}(_react.Component);
	
	MenuList.propTypes = {
	    dispatch: _react.PropTypes.func.isRequired,
	    menu: _react.PropTypes.array,
	    loadMore: _react.PropTypes.bool
	};
	
	function mapStateToProps(state) {
	    return {
	        menu: state.menu,
	        loadMore: state.loadMore
	    };
	}
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, null, null, { withRef: true })(MenuList);
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\websites\\dnn_900\\Website\\DesktopModules\\DotNetNuclear\\RestaurantMenuPB\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 24 */
/*!*****************************************************************************!*\
  !*** external "window.dnn.nodeModules.CommonComponents.PersonaBarPageBody" ***!
  \*****************************************************************************/
/***/ function(module, exports) {

	module.exports = window.dnn.nodeModules.CommonComponents.PersonaBarPageBody;

/***/ },
/* 25 */
/*!************************************************************************!*\
  !*** ./restaurantmenu.web/src/components/MenuList/HeaderRow/index.jsx ***!
  \************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("E:\\websites\\dnn_900\\Website\\DesktopModules\\DotNetNuclear\\RestaurantMenuPB\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("E:\\websites\\dnn_900\\Website\\DesktopModules\\DotNetNuclear\\RestaurantMenuPB\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _dnnGridCell = __webpack_require__(/*! dnn-grid-cell */ 26);
	
	var _dnnGridCell2 = _interopRequireDefault(_dnnGridCell);
	
	var _RowDefinitions = __webpack_require__(/*! ../RowDefinitions */ 27);
	
	var _RowDefinitions2 = _interopRequireDefault(_RowDefinitions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var HeaderRow = function (_Component) {
	    _inherits(HeaderRow, _Component);
	
	    function HeaderRow() {
	        _classCallCheck(this, HeaderRow);
	
	        return _possibleConstructorReturn(this, (HeaderRow.__proto__ || Object.getPrototypeOf(HeaderRow)).apply(this, arguments));
	    }
	
	    _createClass(HeaderRow, [{
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                _dnnGridCell2.default,
	                { columnSize: 100, className: "header-row" },
	                _RowDefinitions2.default.map(function (header) {
	                    return _react2.default.createElement(
	                        _dnnGridCell2.default,
	                        { columnSize: header.columnSize },
	                        _react2.default.createElement(
	                            "h6",
	                            null,
	                            header.header
	                        )
	                    );
	                })
	            );
	        }
	    }]);
	
	    return HeaderRow;
	}(_react.Component);
	
	HeaderRow.propTypes = {
	    headers: _react.PropTypes.array.isRequired
	};
	
	exports.default = HeaderRow;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\websites\\dnn_900\\Website\\DesktopModules\\DotNetNuclear\\RestaurantMenuPB\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 26 */
/*!*******************************************************************!*\
  !*** external "window.dnn.nodeModules.CommonComponents.GridCell" ***!
  \*******************************************************************/
/***/ function(module, exports) {

	module.exports = window.dnn.nodeModules.CommonComponents.GridCell;

/***/ },
/* 27 */
/*!***********************************************************************!*\
  !*** ./restaurantmenu.web/src/components/MenuList/RowDefinitions.jsx ***!
  \***********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("E:\\websites\\dnn_900\\Website\\DesktopModules\\DotNetNuclear\\RestaurantMenuPB\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("E:\\websites\\dnn_900\\Website\\DesktopModules\\DotNetNuclear\\RestaurantMenuPB\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _localization = __webpack_require__(/*! localization */ 28);
	
	var _localization2 = _interopRequireDefault(_localization);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = [{
	    key: "imageUrl",
	    columnSize: 20,
	    header: _localization2.default.get("Image.Header")
	}, {
	    key: "name",
	    columnSize: 40,
	    header: _localization2.default.get("Name.Header")
	}, {
	    key: "price",
	    columnSize: 25,
	    header: _localization2.default.get("Price.Header")
	}, {
	    key: "edit",
	    columnSize: 15,
	    header: _localization2.default.get("Edit.Header")
	}];
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\websites\\dnn_900\\Website\\DesktopModules\\DotNetNuclear\\RestaurantMenuPB\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "RowDefinitions.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 28 */
/*!*******************************************************!*\
  !*** ./restaurantmenu.web/src/localization/index.jsx ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("E:\\websites\\dnn_900\\Website\\DesktopModules\\DotNetNuclear\\RestaurantMenuPB\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("E:\\websites\\dnn_900\\Website\\DesktopModules\\DotNetNuclear\\RestaurantMenuPB\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _utils = __webpack_require__(/*! utils */ 29);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Localization = {
	    get: function get(key) {
	        var moduleName = "RestaurantMenu";
	        return _utils2.default.getResx(moduleName, key);
	    }
	};
	exports.default = Localization;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\websites\\dnn_900\\Website\\DesktopModules\\DotNetNuclear\\RestaurantMenuPB\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 29 */
/*!************************************************!*\
  !*** ./restaurantmenu.web/src/utils/index.jsx ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("E:\\websites\\dnn_900\\Website\\DesktopModules\\DotNetNuclear\\RestaurantMenuPB\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("E:\\websites\\dnn_900\\Website\\DesktopModules\\DotNetNuclear\\RestaurantMenuPB\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = _extends({}, window.dnn.utility);
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\websites\\dnn_900\\Website\\DesktopModules\\DotNetNuclear\\RestaurantMenuPB\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 30 */
/*!************************************************************************!*\
  !*** ./restaurantmenu.web/src/components/MenuList/DetailRow/index.jsx ***!
  \************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("E:\\websites\\dnn_900\\Website\\DesktopModules\\DotNetNuclear\\RestaurantMenuPB\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("E:\\websites\\dnn_900\\Website\\DesktopModules\\DotNetNuclear\\RestaurantMenuPB\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 3);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 4);
	
	var _dnnGridCell = __webpack_require__(/*! dnn-grid-cell */ 26);
	
	var _dnnGridCell2 = _interopRequireDefault(_dnnGridCell);
	
	var _dnnCollapsible = __webpack_require__(/*! dnn-collapsible */ 31);
	
	var _dnnCollapsible2 = _interopRequireDefault(_dnnCollapsible);
	
	var _IconButton = __webpack_require__(/*! ../../common/IconButton */ 32);
	
	var _IconButton2 = _interopRequireDefault(_IconButton);
	
	var _localization = __webpack_require__(/*! ../../../localization */ 28);
	
	var _localization2 = _interopRequireDefault(_localization);
	
	var _RowDefinitions = __webpack_require__(/*! ../RowDefinitions */ 27);
	
	var _RowDefinitions2 = _interopRequireDefault(_RowDefinitions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var DetailRow = function (_Component) {
	    _inherits(DetailRow, _Component);
	
	    function DetailRow() {
	        _classCallCheck(this, DetailRow);
	
	        var _this = _possibleConstructorReturn(this, (DetailRow.__proto__ || Object.getPrototypeOf(DetailRow)).call(this));
	
	        _this.handleClick = _this.handleClick.bind(_this);
	        return _this;
	    }
	
	    _createClass(DetailRow, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            document.addEventListener("click", this.handleClick);
	            this._isMounted = true;
	        }
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            document.removeEventListener("click", this.handleClick);
	            this._isMounted = false;
	        }
	    }, {
	        key: "componentWillMount",
	        value: function componentWillMount() {
	            var opened = this.props.openId !== "" && this.props.id === this.props.openId;
	            this.setState({
	                opened: opened
	            });
	        }
	    }, {
	        key: "handleClick",
	        value: function handleClick(event) {
	            // Note: this workaround is needed in IE. The remove event listener in the componentWillUnmount is called
	            // before the handleClick handler is called, but in spite of that, the handleClick is executed. To avoid
	            // the "findDOMNode was called on an unmounted component." error we need to check if the component is mounted before execute this code
	            if (!this._isMounted) {
	                return;
	            }
	            if (!_reactDom2.default.findDOMNode(this).contains(event.target) && typeof event.target.className === "string" && event.target.className.indexOf("do-not-close") === -1 && !(event.target.id === "confirmbtn" || event.target.id === "cancelbtn") && this.props.openId !== "add") {
	                this.timeout = 475;
	                if (this.props.openId !== "" && this.props.id === this.props.openId) {
	                    this.props.Collapse();
	                }
	            } else {
	                this.timeout = 0;
	            }
	        }
	    }, {
	        key: "toggleEditItem",
	        value: function toggleEditItem() {
	            if (this.props.openId !== "" && this.props.id === this.props.openId && this.props.currentIndex === 1) {
	                this.props.Collapse();
	            } else {
	                this.props.OpenCollapseEditItems(this.props.id);
	            }
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var _this2 = this;
	
	            var props = this.props;
	
	            var opened = this.props.openId !== "" && this.props.id === this.props.openId;
	            var uniqueId = "menuItem-" + Math.random() + Date.now();
	
	            return _react2.default.createElement(
	                "div",
	                { className: "collapsible-component1 " + opened, id: uniqueId },
	                !props.addIsClosed && _react2.default.createElement(
	                    "div",
	                    { className: "collapsible-header1 " + !opened },
	                    _RowDefinitions2.default.map(function (rowDetail) {
	                        if (rowDetail.key === 'edit') {
	                            return _react2.default.createElement(
	                                _dnnGridCell2.default,
	                                { columnSize: rowDetail.columnSize },
	                                _react2.default.createElement(_IconButton2.default, { type: "Edit",
	                                    className: "edit-icon " + !(opened && props.currentIndex === 1),
	                                    onClick: _this2.toggleEditItem.bind(_this2),
	                                    title: _localization2.default.get("EditItem") })
	                            );
	                        } else if (rowDetail.key === 'imageUrl') {
	                            return _react2.default.createElement(
	                                _dnnGridCell2.default,
	                                { columnSize: rowDetail.columnSize },
	                                _react2.default.createElement("img", { className: "item-thumb", src: _this2.props[rowDetail.key] })
	                            );
	                        } else {
	                            return _react2.default.createElement(
	                                _dnnGridCell2.default,
	                                { columnSize: rowDetail.columnSize },
	                                _react2.default.createElement(
	                                    "h6",
	                                    null,
	                                    _this2.props[rowDetail.key]
	                                )
	                            );
	                        }
	                    })
	                ),
	                _react2.default.createElement(
	                    _dnnCollapsible2.default,
	                    { accordion: true, isOpened: opened, className: "menu-row-collapsible" },
	                    opened && props.children
	                )
	            );
	        }
	    }]);
	
	    return DetailRow;
	}(_react.Component);
	
	DetailRow.propTypes = {
	    name: _react.PropTypes.string,
	    price: _react.PropTypes.string,
	    imageUrl: _react.PropTypes.string,
	    OpenCollapseEditItems: _react.PropTypes.func,
	    Collapse: _react.PropTypes.func,
	    id: _react.PropTypes.string,
	    openId: _react.PropTypes.string,
	    currentIndex: _react.PropTypes.number,
	    visible: _react.PropTypes.bool
	};
	
	DetailRow.defaultProps = {
	    collapsed: true,
	    visible: true
	};
	
	exports.default = DetailRow;
	
	//DetailRow.propTypes = {
	//    menuItem: PropTypes.object,
	//    OpenCollapse: PropTypes.func,
	//    Collapse: PropTypes.func,
	//    id: PropTypes.string,
	//    openId: PropTypes.string
	//};
	
	//export default DetailRow;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\websites\\dnn_900\\Website\\DesktopModules\\DotNetNuclear\\RestaurantMenuPB\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 31 */
/*!**********************************************************************!*\
  !*** external "window.dnn.nodeModules.CommonComponents.Collapsible" ***!
  \**********************************************************************/
/***/ function(module, exports) {

	module.exports = window.dnn.nodeModules.CommonComponents.Collapsible;

/***/ },
/* 32 */
/*!***********************************************************************!*\
  !*** ./restaurantmenu.web/src/components/common/IconButton/index.jsx ***!
  \***********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("E:\\websites\\dnn_900\\Website\\DesktopModules\\DotNetNuclear\\RestaurantMenuPB\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("E:\\websites\\dnn_900\\Website\\DesktopModules\\DotNetNuclear\\RestaurantMenuPB\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _dnnSvgIcons = __webpack_require__(/*! dnn-svg-icons */ 33);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	//import "./style.less";
	
	var IconButton = function (_Component) {
	    _inherits(IconButton, _Component);
	
	    function IconButton(props) {
	        _classCallCheck(this, IconButton);
	
	        return _possibleConstructorReturn(this, (IconButton.__proto__ || Object.getPrototypeOf(IconButton)).call(this, props));
	    }
	
	    _createClass(IconButton, [{
	        key: "getIcon",
	        value: function getIcon() {
	            var props = this.props;
	
	
	            switch (props.type.toLowerCase()) {
	                case "add":
	                    return _dnnSvgIcons.AddIcon;
	                case "edit":
	                    return _dnnSvgIcons.EditIcon;
	                case "card":
	                    return _dnnSvgIcons.CardViewIcon;
	                case "list":
	                    return _dnnSvgIcons.ListViewIcon;
	                case "preview":
	                    return _dnnSvgIcons.PreviewIcon;
	                case "settings":
	                    return _dnnSvgIcons.SettingsIcon;
	                case "page":
	                    return _dnnSvgIcons.PageIcon;
	                case "traffic":
	                    return _dnnSvgIcons.TrafficIcon;
	                case "template":
	                    return _dnnSvgIcons.TemplateIcon;
	                case "trash":
	                    return _dnnSvgIcons.TrashIcon;
	                case "user":
	                    return _dnnSvgIcons.UserIcon;
	                case "arrow-down":
	                    return _dnnSvgIcons.ArrowDownIcon;
	                case "arrow-right":
	                    return _dnnSvgIcons.ArrowRightIcon;
	                case "arrow-up":
	                    return _dnnSvgIcons.ArrowUpIcon;
	                case "lock-closed":
	                    return _dnnSvgIcons.LockClosedIcon;
	                default:
	                    return __webpack_require__(/*! raw!../../../img/common */ 34)("./" + props.type.toLowerCase() + ".svg");
	            }
	        }
	    }, {
	        key: "getClassName",
	        value: function getClassName() {
	            var props = this.props;
	
	
	            var name = "icon-button";
	            if (props.className) {
	                name += " " + props.className;
	            }
	
	            return name;
	        }
	    }, {
	        key: "getStyle",
	        value: function getStyle() {
	            var props = this.props;
	
	
	            var style = {};
	            if (props.width && props.width > 0) {
	                style["width"] = props.width + "px";
	            }
	            if (props.height && props.height > 0) {
	                style["height"] = props.height + "px";
	            }
	
	            return style;
	        }
	    }, {
	        key: "onClick",
	        value: function onClick(event) {
	            var props = this.props;
	
	
	            event.preventDefault();
	
	            props.onClick(event);
	        }
	        /* eslint-disable react/no-danger */
	
	    }, {
	        key: "render",
	        value: function render() {
	            var props = this.props;
	
	
	            if (typeof props.onClick === "function") {
	                return _react2.default.createElement("a", { href: "#", className: this.getClassName(), style: this.getStyle(), dangerouslySetInnerHTML: { __html: this.getIcon() }, title: props.title, onClick: this.onClick.bind(this) });
	            } else {
	                return _react2.default.createElement("span", { className: "icon-flat", style: this.getStyle(), dangerouslySetInnerHTML: { __html: this.getIcon() }, title: props.title });
	            }
	        }
	    }]);
	
	    return IconButton;
	}(_react.Component);
	
	IconButton.propTypes = {
	    type: _react.PropTypes.string,
	    onClick: _react.PropTypes.func,
	    width: _react.PropTypes.number,
	    height: _react.PropTypes.number,
	    title: _react.PropTypes.string
	};
	
	exports.default = IconButton;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\websites\\dnn_900\\Website\\DesktopModules\\DotNetNuclear\\RestaurantMenuPB\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 33 */
/*!*******************************************************************!*\
  !*** external "window.dnn.nodeModules.CommonComponents.SvgIcons" ***!
  \*******************************************************************/
/***/ function(module, exports) {

	module.exports = window.dnn.nodeModules.CommonComponents.SvgIcons;

/***/ },
/* 34 */
/*!************************************************************************!*\
  !*** ./restaurantmenu.web/src/img/common ./~/raw-loader!^\.\/.*\.svg$ ***!
  \************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./add.svg": 35,
		"./arrow_down.svg": 36,
		"./arrow_left.svg": 37,
		"./arrow_right.svg": 38,
		"./calendar_end.svg": 39,
		"./calendar_start.svg": 40,
		"./checkmark.svg": 41,
		"./edit.svg": 42,
		"./lock_closed.svg": 43,
		"./search.svg": 44,
		"./trash.svg": 45,
		"./users.svg": 46,
		"./x.svg": 47
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 34;


/***/ },
/* 35 */
/*!******************************************************************!*\
  !*** ./~/raw-loader!./restaurantmenu.web/src/img/common/add.svg ***!
  \******************************************************************/
/***/ function(module, exports) {

	module.exports = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<!-- Generator: Adobe Illustrator 20.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 2048 2048\" style=\"enable-background:new 0 0 2048 2048;\" xml:space=\"preserve\">\n<g>\n\t<path d=\"M386,1152V898h510l-0.1-514h258.3l0.1,514H1662v254h-507.7v512H896v-512H386z\"/>\n</g>\n</svg>\n"

/***/ },
/* 36 */
/*!*************************************************************************!*\
  !*** ./~/raw-loader!./restaurantmenu.web/src/img/common/arrow_down.svg ***!
  \*************************************************************************/
/***/ function(module, exports) {

	module.exports = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<!-- Generator: Adobe Illustrator 20.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 2048 2048\" style=\"enable-background:new 0 0 2048 2048;\" xml:space=\"preserve\">\n<path d=\"M1028.6,1367L259.3,683.5h1538L1028.6,1367z\"/>\n</svg>\n"

/***/ },
/* 37 */
/*!*************************************************************************!*\
  !*** ./~/raw-loader!./restaurantmenu.web/src/img/common/arrow_left.svg ***!
  \*************************************************************************/
/***/ function(module, exports) {

	module.exports = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<!-- Generator: Adobe Illustrator 20.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 2048 2048\" style=\"enable-background:new 0 0 2048 2048;\" xml:space=\"preserve\">\n<path class=\"st0\" d=\"M682.2,1024.3L1365.8,255v1538L682.2,1024.3z\"/>\n</svg>\n"

/***/ },
/* 38 */
/*!**************************************************************************!*\
  !*** ./~/raw-loader!./restaurantmenu.web/src/img/common/arrow_right.svg ***!
  \**************************************************************************/
/***/ function(module, exports) {

	module.exports = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<!-- Generator: Adobe Illustrator 20.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 2048 2048\" style=\"enable-background:new 0 0 2048 2048;\" xml:space=\"preserve\">\n<path class=\"st0\" d=\"M1365.8,1023.7L682.2,1793V255L1365.8,1023.7z\"/>\n</svg>\n"

/***/ },
/* 39 */
/*!***************************************************************************!*\
  !*** ./~/raw-loader!./restaurantmenu.web/src/img/common/calendar_end.svg ***!
  \***************************************************************************/
/***/ function(module, exports) {

	module.exports = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<!-- Generator: Adobe Illustrator 20.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 2048 2048\" style=\"enable-background:new 0 0 2048 2048;\" xml:space=\"preserve\">\n<g>\n\t<g>\n\t\t<g>\n\t\t\t<path d=\"M1455.9,256.8V93h-194.3v163.8H781.3V93H587v163.8H256.2v1535.6h1535.6V256.8H1455.9z M1614.7,1623.4H427.8V436.5H587\n\t\t\t\tV599h194.3V436.5h480.2V599h194.3V436.5h158.8V1623.4z\"/>\n\t\t</g>\n\t\t<g>\n\t\t\t<polygon points=\"1277.2,931.8 1192.2,846.8 1022.3,1016.7 850.3,844.7 763.9,931.1 935.9,1103.1 765.3,1273.7 850.3,1358.7 \n\t\t\t\t1020.9,1188 1192.2,1359.3 1278.6,1272.9 1107.3,1101.6 \t\t\t\"/>\n\t\t</g>\n\t</g>\n</g>\n</svg>\n"

/***/ },
/* 40 */
/*!*****************************************************************************!*\
  !*** ./~/raw-loader!./restaurantmenu.web/src/img/common/calendar_start.svg ***!
  \*****************************************************************************/
/***/ function(module, exports) {

	module.exports = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<!-- Generator: Adobe Illustrator 20.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 2048 2048\" style=\"enable-background:new 0 0 2048 2048;\" xml:space=\"preserve\">\n<g>\n\t<path d=\"M1458.1,256.8V93h-194.3v163.8H783.6V93H589.3v163.8H258.4v1535.6h1535.6V256.8H1458.1z M1616.9,1623.4H430.1V436.5h159.2\n\t\tV599h194.3V436.5h480.2V599h194.3V436.5h158.8V1623.4z\"/>\n\t<polygon points=\"1297.2,835.1 896.7,1235.6 743.3,1082.2 664.9,1160.6 896.7,1392.4 975.1,1314 975.1,1314 1375.6,913.5 \t\"/>\n</g>\n</svg>\n"

/***/ },
/* 41 */
/*!************************************************************************!*\
  !*** ./~/raw-loader!./restaurantmenu.web/src/img/common/checkmark.svg ***!
  \************************************************************************/
/***/ function(module, exports) {

	module.exports = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<!-- Generator: Adobe Illustrator 20.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 2048 2048\" style=\"enable-background:new 0 0 2048 2048;\" xml:space=\"preserve\">\n<polygon points=\"1793.7,585.8 1623.9,416.1 756.6,1283.4 424.4,951.3 254.6,1121 756.6,1623 926.4,1453.2 926.4,1453.2 \"/>\n</svg>\n"

/***/ },
/* 42 */
/*!*******************************************************************!*\
  !*** ./~/raw-loader!./restaurantmenu.web/src/img/common/edit.svg ***!
  \*******************************************************************/
/***/ function(module, exports) {

	module.exports = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<!-- Generator: Adobe Illustrator 20.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 2048 2048\" style=\"enable-background:new 0 0 2048 2048;\" xml:space=\"preserve\">\n<g>\n\t<polygon points=\"306.5,1438.4 259,1789 609.6,1741.5 610.8,1740.3 307.7,1437.2 \t\"/>\n\t<rect x=\"294.4\" y=\"752.6\" transform=\"matrix(0.7071 -0.7071 0.7071 0.7071 -367.0447 1047.6558)\" width=\"1573.5\" height=\"428.7\"/>\n</g>\n</svg>\n"

/***/ },
/* 43 */
/*!**************************************************************************!*\
  !*** ./~/raw-loader!./restaurantmenu.web/src/img/common/lock_closed.svg ***!
  \**************************************************************************/
/***/ function(module, exports) {

	module.exports = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<!-- Generator: Adobe Illustrator 20.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 2048 2048\" style=\"enable-background:new 0 0 2048 2048;\" xml:space=\"preserve\">\n<path d=\"M1613.5,840.7V267.9c0-6-4.9-10.9-11.1-10.9h-1157c-6.1,0-11.1,4.9-11.1,10.9v572.8H256.7V1789h1534.6V840.7H1613.5z\n\t M670.3,501.1c0-6,4.9-10.9,11.1-10.9h685.3c6.1,0,11.1,4.9,11.1,10.9v339.6H670.3V501.1z M1101.2,1304.4v259.1\n\tc0,4.3-3.2,7.7-7.2,7.7H954.1c-4,0-7.2-3.4-7.2-7.7v-259.1c-35.7-24.3-59.2-65-59.2-111.2c0-74.5,61.1-134.8,136.4-134.8\n\ts136.4,60.4,136.4,134.8C1160.4,1239.4,1136.9,1280.1,1101.2,1304.4z\"/>\n</svg>\n"

/***/ },
/* 44 */
/*!*********************************************************************!*\
  !*** ./~/raw-loader!./restaurantmenu.web/src/img/common/search.svg ***!
  \*********************************************************************/
/***/ function(module, exports) {

	module.exports = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<!-- Generator: Adobe Illustrator 20.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 2048 2048\" style=\"enable-background:new 0 0 2048 2048;\" xml:space=\"preserve\">\n<path d=\"M1773.2,1567.6l-266.3-266.2c67.5-105.3,107.1-230.1,107.1-364.5c0-373.7-302.9-676.6-676.6-676.6S260.8,563.2,260.8,936.9\n\ts302.9,676.6,676.6,676.6c134.3,0,259.2-39.7,364.4-107.1l266.2,266.3c18.8,18.8,49.6,18.8,68.3,0l136.8-136.7\n\tC1791.9,1617.2,1791.9,1586.4,1773.2,1567.6z M937.4,1420.2c-266.5,0-483.3-216.8-483.3-483.3s216.8-483.3,483.3-483.3\n\ts483.3,216.8,483.3,483.3S1203.9,1420.2,937.4,1420.2z\"/>\n</svg>\n"

/***/ },
/* 45 */
/*!********************************************************************!*\
  !*** ./~/raw-loader!./restaurantmenu.web/src/img/common/trash.svg ***!
  \********************************************************************/
/***/ function(module, exports) {

	module.exports = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<!-- Generator: Adobe Illustrator 20.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 2048 2048\" style=\"enable-background:new 0 0 2048 2048;\" xml:space=\"preserve\">\n<g>\n\t<polygon points=\"503.6,1786 1535.6,1786 1672.6,626.4 390.5,626.4 \t\"/>\n\t<polygon points=\"1287.6,386.2 1287.6,262 767.5,262 767.5,386.2 317.4,386.2 317.4,514 1730.6,514 1730.6,386.2 \t\"/>\n</g>\n</svg>\n"

/***/ },
/* 46 */
/*!********************************************************************!*\
  !*** ./~/raw-loader!./restaurantmenu.web/src/img/common/users.svg ***!
  \********************************************************************/
/***/ function(module, exports) {

	module.exports = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<!-- Generator: Adobe Illustrator 20.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 2048 2048\" style=\"enable-background:new 0 0 2048 2048;\" xml:space=\"preserve\">\n<path d=\"M1447.9,973.9l-334.4-138c0-5.5-0.2-10.9-0.4-16.2c125.4-44.3,218.2-172.3,218.2-294.2C1331.2,375,1193.7,253,1024,253\n\tS716.8,375,716.8,525.5c0,121.6,87.3,249.3,210.4,293.9c-0.2,5.5-0.4,11-0.4,16.6L584.6,980.8l-67.1,310.5l-72.9,407L499,1788\n\th1042.2l62.2-89.7l-75.5-407L1447.9,973.9z\"/>\n</svg>\n"

/***/ },
/* 47 */
/*!****************************************************************!*\
  !*** ./~/raw-loader!./restaurantmenu.web/src/img/common/x.svg ***!
  \****************************************************************/
/***/ function(module, exports) {

	module.exports = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<!-- Generator: Adobe Illustrator 20.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 2048 2048\" style=\"enable-background:new 0 0 2048 2048;\" xml:space=\"preserve\">\n<g>\n\t<path d=\"M662.6,1565.4L483,1385.8l360.6-360.6L480.1,661.8l182.6-182.6l363.5,363.4l359-359l179.6,179.6l-359,359l362,362\n\t\tl-182.6,182.6l-362-362L662.6,1565.4z\"/>\n</g>\n</svg>\n"

/***/ },
/* 48 */
/*!*******************************************************!*\
  !*** ./restaurantmenu.web/src/actions/MenuActions.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("E:\\websites\\dnn_900\\Website\\DesktopModules\\DotNetNuclear\\RestaurantMenuPB\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("E:\\websites\\dnn_900\\Website\\DesktopModules\\DotNetNuclear\\RestaurantMenuPB\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _MenuActionTypes = __webpack_require__(/*! constants/actionTypes/MenuActionTypes */ 11);
	
	var _MenuActionTypes2 = _interopRequireDefault(_MenuActionTypes);
	
	var _MenuService = __webpack_require__(/*! services/MenuService */ 49);
	
	var _MenuService2 = _interopRequireDefault(_MenuService);
	
	var _utils = __webpack_require__(/*! utils */ 29);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function errorCallback(message) {
	    _utils2.default.notifyError(JSON.parse(message.responseText).Message, 5000);
	}
	
	var MenuActions = {
	    getMenu: function getMenu(searchParameters, callback) {
	        return function (dispatch) {
	            _MenuService2.default.getMenuItems(searchParameters, function (data) {
	                dispatch({
	                    type: _MenuActionTypes2.default.RETRIEVED_MENU,
	                    payload: data
	                });
	                if (callback) {
	                    callback(data);
	                }
	            }, errorCallback);
	        };
	    },
	    saveItem: function saveItem(menuItem, callback) {
	        return function (dispatch) {
	            _MenuService2.default.saveMenuItem(menuItem, function (data) {
	                dispatch({
	                    type: _MenuActionTypes2.default.UPDATE_MENUITEM,
	                    payload: menuItem
	                });
	
	                if (callback) {
	                    callback(data);
	                }
	            }, errorCallback);
	        };
	    },
	    deleteItem: function deleteItem(menuItem, callback) {
	        return function (dispatch) {
	            _MenuService2.default.deleteMenuItem(menuItem, function (data) {
	                dispatch({
	                    type: _MenuActionTypes2.default.DELETE_MENUITEM,
	                    data: { menuId: data.itemId }
	                });
	
	                if (callback) {
	                    callback();
	                }
	            }, errorCallback);
	        };
	    },
	    changePageField: function changePageField(key, value) {
	        return function (dispatch) {
	            dispatch({
	                type: _MenuActionTypes2.default.CHANGE_FIELD_VALUE,
	                field: key,
	                value: value
	            });
	        };
	    }
	};
	
	exports.default = MenuActions;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\websites\\dnn_900\\Website\\DesktopModules\\DotNetNuclear\\RestaurantMenuPB\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "MenuActions.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 49 */
/*!********************************************************!*\
  !*** ./restaurantmenu.web/src/services/MenuService.js ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("E:\\websites\\dnn_900\\Website\\DesktopModules\\DotNetNuclear\\RestaurantMenuPB\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("E:\\websites\\dnn_900\\Website\\DesktopModules\\DotNetNuclear\\RestaurantMenuPB\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _utils = __webpack_require__(/*! ../utils */ 29);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//function serializeQueryStringParameters(obj) {
	//    let s = [];
	//    for (let p in obj) {
	//        if (obj.hasOwnProperty(p)) {
	//            s.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
	//        }
	//    }
	//    return s.join("&");
	//}
	
	var MenuService = function () {
	    function MenuService() {
	        _classCallCheck(this, MenuService);
	    }
	
	    _createClass(MenuService, [{
	        key: "getServiceFramework",
	        value: function getServiceFramework(controller) {
	            var sf = _utils2.default.sf;
	
	            sf.moduleRoot = "DotNetNuclear.RestaurantMenu.PersonaBar";
	            sf.controller = controller;
	
	            return sf;
	        }
	    }, {
	        key: "getMenuItems",
	        value: function getMenuItems(searchParameters, callback, errorCallback) {
	            var sf = this.getServiceFramework("Menu");
	            searchParameters = _extends({}, searchParameters, {});
	            sf.get("list", searchParameters, callback, errorCallback);
	        }
	    }, {
	        key: "saveMenuItem",
	        value: function saveMenuItem(menuItemVm, callback, errorCallback) {
	            var sf = this.getServiceFramework("Menu");
	            sf.post("upsert", menuItemVm, callback, errorCallback);
	        }
	    }, {
	        key: "deleteMenuItem",
	        value: function deleteMenuItem(menuItemVm, callback, errorCallback) {
	            var sf = this.getServiceFramework("Menu");
	            sf.post("delete", menuItemVm, callback, errorCallback);
	        }
	
	        //getGetScheduleItem(searchParameters, callback) {
	        //    const sf = this.getServiceFramework("TaskScheduler");
	        //    searchParameters = Object.assign({}, searchParameters, {
	        //        //logType: "*"
	        //    });
	        //    sf.get("GetScheduleItem?" + serializeQueryStringParameters(searchParameters), {}, callback);
	        //}
	
	        //deleteScheduleItem(payload, callback) {
	        //    const sf = this.getServiceFramework("TaskScheduler");        
	        //    sf.post("DeleteSchedule", payload, callback);
	        //}
	
	        //createScheduleItem(payload, callback, failureCallback) {
	        //    const sf = this.getServiceFramework("TaskScheduler");        
	        //    sf.post("CreateScheduleItem", payload, callback, failureCallback);
	        //}
	
	        //updateScheduleItem(payload, callback, failureCallback) {
	        //    const sf = this.getServiceFramework("TaskScheduler");        
	        //    sf.post("UpdateScheduleItem", payload, callback, failureCallback);
	        //}
	
	    }]);
	
	    return MenuService;
	}();
	
	var menuService = new MenuService();
	exports.default = menuService;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\websites\\dnn_900\\Website\\DesktopModules\\DotNetNuclear\\RestaurantMenuPB\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "MenuService.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 50 */
/*!*************************************************************************!*\
  !*** ./restaurantmenu.web/src/components/MenuList/MenuEditor/index.jsx ***!
  \*************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("E:\\websites\\dnn_900\\Website\\DesktopModules\\DotNetNuclear\\RestaurantMenuPB\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("E:\\websites\\dnn_900\\Website\\DesktopModules\\DotNetNuclear\\RestaurantMenuPB\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 4);
	
	var _utils = __webpack_require__(/*! ../../../utils */ 29);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var _localization = __webpack_require__(/*! ../../../localization */ 28);
	
	var _localization2 = _interopRequireDefault(_localization);
	
	var _dnnGridSystem = __webpack_require__(/*! dnn-grid-system */ 51);
	
	var _dnnGridSystem2 = _interopRequireDefault(_dnnGridSystem);
	
	var _dnnFileUpload = __webpack_require__(/*! dnn-file-upload */ 52);
	
	var _dnnFileUpload2 = _interopRequireDefault(_dnnFileUpload);
	
	var _dnnButton = __webpack_require__(/*! dnn-button */ 22);
	
	var _dnnButton2 = _interopRequireDefault(_dnnButton);
	
	var _dnnSwitch = __webpack_require__(/*! dnn-switch */ 53);
	
	var _dnnSwitch2 = _interopRequireDefault(_dnnSwitch);
	
	var _dnnSingleLineInputWithError = __webpack_require__(/*! dnn-single-line-input-with-error */ 54);
	
	var _dnnSingleLineInputWithError2 = _interopRequireDefault(_dnnSingleLineInputWithError);
	
	var _dnnMultiLineInput = __webpack_require__(/*! dnn-multi-line-input */ 55);
	
	var _dnnMultiLineInput2 = _interopRequireDefault(_dnnMultiLineInput);
	
	var _dnnLabel = __webpack_require__(/*! dnn-label */ 56);
	
	var _dnnLabel2 = _interopRequireDefault(_dnnLabel);
	
	var _MenuActions = __webpack_require__(/*! actions/MenuActions */ 48);
	
	var _MenuActions2 = _interopRequireDefault(_MenuActions);
	
	__webpack_require__(/*! ./style.less */ 57);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var MenuEditor = function (_Component) {
	    _inherits(MenuEditor, _Component);
	
	    function MenuEditor(props) {
	        _classCallCheck(this, MenuEditor);
	
	        var _this = _possibleConstructorReturn(this, (MenuEditor.__proto__ || Object.getPrototypeOf(MenuEditor)).call(this, props));
	
	        var menuDetails = _extends({}, props.menuDetails);
	        _this.state = {
	            menuDetails: props.menuId !== -1 ? menuDetails : {
	                id: -1,
	                name: "",
	                description: "",
	                imageUrl: "",
	                imageName: "",
	                imageFolder: "",
	                imageFileId: 0,
	                price: 0,
	                isDailySpecial: false,
	                isVegetarian: false
	            },
	            errors: {
	                Name: false,
	                Price: false
	            },
	            formModified: false
	        };
	        _this.submitted = false;
	        return _this;
	    }
	
	    _createClass(MenuEditor, [{
	        key: "onTextChange",
	        value: function onTextChange(key, event) {
	            this.performChange(key, event.target.value);
	        }
	    }, {
	        key: "performChange",
	        value: function performChange(key, value) {
	            var _this2 = this;
	
	            var menuDetails = this.state.menuDetails;
	
	            menuDetails[key] = value;
	            this.setState({
	                menuDetails: menuDetails
	            });
	            var state = this.state;
	
	            state.formModified = true;
	            this.setState({
	                state: state
	            }, function () {
	                _this2.validateForm();
	            });
	        }
	    }, {
	        key: "onSwitchToggle",
	        value: function onSwitchToggle(key, status) {
	            this.performChange(key, status);
	        }
	    }, {
	        key: "addUpdateMenuItem",
	        value: function addUpdateMenuItem(event) {
	            event.preventDefault();
	            var props = this.props,
	                state = this.state;
	
	            this.submitted = true;
	            if (!this.validateForm()) {
	                return;
	            }
	
	            if (state.formModified) {
	                var menuDetails = this.state.menuDetails;
	
	                var successMsg = _localization2.default.get("ItemAdded.Message");
	                var errorMsg = _localization2.default.get("ItemAdded.Error");
	                if (props.menuId > 0) {
	                    successMsg = _localization2.default.get("ItemUpdated.Message");
	                    errorMsg = _localization2.default.get("ItemUpdated.Error");
	                }
	                props.dispatch(_MenuActions2.default.saveItem(menuDetails, function () {
	                    _utils2.default.notify(successMsg);
	                    props.Collapse(event);
	                    props.refreshMenu();
	                }, function () {
	                    _utils2.default.notify(errorMsg);
	                }));
	            } else {
	                props.Collapse(event);
	            }
	        }
	    }, {
	        key: "validateForm",
	        value: function validateForm() {
	            var valid = true;
	            if (this.submitted) {
	                var menuDetails = this.state.menuDetails;
	                var errors = this.state.errors;
	
	                errors.Name = false;
	                if (menuDetails.name === "") {
	                    errors.Name = true;
	                    valid = false;
	                }
	                this.setState({ errors: errors });
	            }
	            return valid;
	        }
	    }, {
	        key: "onFileSelect",
	        value: function onFileSelect(selectedFile) {
	            this.performChange("imageName", selectedFile.fileName);
	            this.performChange("imageFileId", selectedFile.fileId);
	            //this.props.onChangeField("fileIdRedirection", selectedFile.fileId);
	            //this.props.onChangeField("fileFolderPathRedirection", selectedFile.folderPath);
	            //this.props.onChangeField("fileNameRedirection", selectedFile.fileName);
	        }
	    }, {
	        key: "deleteMenuItem",
	        value: function deleteMenuItem(event) {
	            var menuDetails = this.state.menuDetails;
	            var props = this.props;
	
	            if (props.menuId > 0) {
	                _utils2.default.confirm(_localization2.default.get("DeleteMenu.Confirm"), _localization2.default.get("Delete"), _localization2.default.get("Cancel"), function () {
	                    props.dispatch(_MenuActions2.default.deleteItem(menuDetails, function () {
	                        _utils2.default.notify(_localization2.default.get("DeleteMenu.Message"));
	                        props.Collapse(event);
	                        props.refreshMenu();
	                    }));
	                });
	            } else {
	                _utils2.default.notify(_localization2.default.get("DeleteInconsistency.Error"));
	            }
	        }
	        /* eslint-disable react/no-danger */
	
	    }, {
	        key: "render",
	        value: function render() {
	            var state = this.state;
	            var menuDetails = this.state.menuDetails;
	
	            var utilities = {
	                utilities: _utils2.default
	            };
	            var selectedFile = menuDetails.imageFileId ? {
	                fileId: menuDetails.imageFileId,
	                folderPath: menuDetails.imageFolder,
	                fileName: menuDetails.imageName
	            } : null;
	
	            var columnOne = _react2.default.createElement(
	                "div",
	                { className: "editor-container" },
	                _react2.default.createElement(
	                    "div",
	                    { className: "editor-row divider" },
	                    _react2.default.createElement(_dnnSingleLineInputWithError2.default, {
	                        value: state.menuDetails.name,
	                        onChange: this.onTextChange.bind(this, "name"),
	                        maxLength: 50,
	                        error: state.errors.Name,
	                        label: _localization2.default.get("Name"),
	                        tooltipMessage: _localization2.default.get("Name.Help"),
	                        errorMessage: _localization2.default.get("Name.Required"),
	                        autoComplete: "off",
	                        inputStyle: { marginBottom: 15 },
	                        tabIndex: 1 })
	                ),
	                _react2.default.createElement(
	                    "div",
	                    { className: "editor-row divider" },
	                    _react2.default.createElement(_dnnLabel2.default, { label: _localization2.default.get("Description"), tooltipMessage: _localization2.default.get("Description.Help"), tooltipPlace: "top" }),
	                    _react2.default.createElement(_dnnMultiLineInput2.default, { value: state.menuDetails.description, onChange: this.onTextChange.bind(this, "description"),
	                        tabIndex: 2, maxLength: 1000 })
	                ),
	                _react2.default.createElement(
	                    "div",
	                    { className: "editor-row divider" },
	                    _react2.default.createElement(_dnnSingleLineInputWithError2.default, {
	                        value: state.menuDetails.price,
	                        onChange: this.onTextChange.bind(this, "price"),
	                        maxLength: 8,
	                        error: state.errors.Price,
	                        label: _localization2.default.get("Price"),
	                        tooltipMessage: _localization2.default.get("Price.Help"),
	                        errorMessage: _localization2.default.get("Price.Required"),
	                        autoComplete: "off",
	                        inputStyle: { marginBottom: 15 },
	                        tabIndex: 3 })
	                )
	            );
	
	            var columnTwo = _react2.default.createElement(
	                "div",
	                { className: "editor-container right-column" },
	                _react2.default.createElement(
	                    "div",
	                    { className: "editor-row" },
	                    _react2.default.createElement(_dnnLabel2.default, { label: _localization2.default.get("Image"), tooltipMessage: _localization2.default.get("Image.Help"), tooltipPlace: "top" }),
	                    _react2.default.createElement(
	                        "div",
	                        { className: "image-container" },
	                        _react2.default.createElement(_dnnFileUpload2.default, {
	                            utils: utilities,
	                            selectedFile: selectedFile,
	                            onSelectFile: this.onFileSelect.bind(this) })
	                    )
	                ),
	                _react2.default.createElement(
	                    "div",
	                    { className: "status-row", style: { marginTop: "14px" } },
	                    _react2.default.createElement(
	                        "div",
	                        { className: "left", style: { marginTop: "6px" } },
	                        _react2.default.createElement(_dnnLabel2.default, { label: _localization2.default.get("isVegetarian"), tooltipMessage: _localization2.default.get("isVegetarian.Help"), tooltipPlace: "top" })
	                    ),
	                    _react2.default.createElement(
	                        "div",
	                        { className: "right" },
	                        _react2.default.createElement(_dnnSwitch2.default, { labelHidden: true, value: state.menuDetails.isVegetarian, tabIndex: 5,
	                            onChange: this.onSwitchToggle.bind(this, "isVegetarian") })
	                    )
	                ),
	                _react2.default.createElement(
	                    "div",
	                    { className: "status-row", style: { marginTop: "14px" } },
	                    _react2.default.createElement(
	                        "div",
	                        { className: "left", style: { marginTop: "6px" } },
	                        _react2.default.createElement(_dnnLabel2.default, { label: _localization2.default.get("isDailySpecial"), tooltipMessage: _localization2.default.get("isDailySpecial.Help"), tooltipPlace: "top" })
	                    ),
	                    _react2.default.createElement(
	                        "div",
	                        { className: "right" },
	                        _react2.default.createElement(_dnnSwitch2.default, { labelHidden: true, value: state.menuDetails.isDailySpecial, tabIndex: 6,
	                            onChange: this.onSwitchToggle.bind(this, "isDailySpecial") })
	                    )
	                )
	            );
	            var children = [];
	            children.push(columnOne);
	            children.push(columnTwo);
	            /* eslint-disable react/no-danger */
	            return _react2.default.createElement(
	                "div",
	                { className: "menu-details-editor" },
	                _react2.default.createElement(_dnnGridSystem2.default, { children: children, numberOfColumns: 2 }),
	                _react2.default.createElement(
	                    "div",
	                    { className: "buttons-box" },
	                    this.props.menuId > 0 && state.menuDetails.id > -1 ? _react2.default.createElement(
	                        _dnnButton2.default,
	                        { type: "secondary", onClick: this.deleteMenuItem.bind(this) },
	                        _localization2.default.get("Delete")
	                    ) : null,
	                    _react2.default.createElement(
	                        _dnnButton2.default,
	                        { type: "secondary", onClick: this.props.Collapse.bind(this) },
	                        _localization2.default.get("Cancel")
	                    ),
	                    _react2.default.createElement(
	                        _dnnButton2.default,
	                        { type: "primary", onClick: this.addUpdateMenuItem.bind(this) },
	                        _localization2.default.get("Save")
	                    )
	                )
	            );
	        }
	    }]);
	
	    return MenuEditor;
	}(_react.Component);
	
	MenuEditor.propTypes = {
	    dispatch: _react.PropTypes.func.isRequired,
	    //image: PropTypes.object.isRequired,
	    menuId: _react.PropTypes.number,
	    menuDetails: _react.PropTypes.object,
	    Collapse: _react.PropTypes.func,
	    refreshMenu: _react.PropTypes.func,
	    onChangeField: _react.PropTypes.func.isRequired
	};
	
	function mapStateToProps(state) {
	    return {};
	}
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(MenuEditor);
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\websites\\dnn_900\\Website\\DesktopModules\\DotNetNuclear\\RestaurantMenuPB\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 51 */
/*!*********************************************************************!*\
  !*** external "window.dnn.nodeModules.CommonComponents.GridSystem" ***!
  \*********************************************************************/
/***/ function(module, exports) {

	module.exports = window.dnn.nodeModules.CommonComponents.GridSystem;

/***/ },
/* 52 */
/*!*********************************************************************!*\
  !*** external "window.dnn.nodeModules.CommonComponents.FileUpload" ***!
  \*********************************************************************/
/***/ function(module, exports) {

	module.exports = window.dnn.nodeModules.CommonComponents.FileUpload;

/***/ },
/* 53 */
/*!*****************************************************************!*\
  !*** external "window.dnn.nodeModules.CommonComponents.Switch" ***!
  \*****************************************************************/
/***/ function(module, exports) {

	module.exports = window.dnn.nodeModules.CommonComponents.Switch;

/***/ },
/* 54 */
/*!***********************************************************************************!*\
  !*** external "window.dnn.nodeModules.CommonComponents.SingleLineInputWithError" ***!
  \***********************************************************************************/
/***/ function(module, exports) {

	module.exports = window.dnn.nodeModules.CommonComponents.SingleLineInputWithError;

/***/ },
/* 55 */
/*!*************************************************************************!*\
  !*** external "window.dnn.nodeModules.CommonComponents.MultiLineInput" ***!
  \*************************************************************************/
/***/ function(module, exports) {

	module.exports = window.dnn.nodeModules.CommonComponents.MultiLineInput;

/***/ },
/* 56 */
/*!****************************************************************!*\
  !*** external "window.dnn.nodeModules.CommonComponents.Label" ***!
  \****************************************************************/
/***/ function(module, exports) {

	module.exports = window.dnn.nodeModules.CommonComponents.Label;

/***/ },
/* 57 */
/*!**************************************************************************!*\
  !*** ./restaurantmenu.web/src/components/MenuList/MenuEditor/style.less ***!
  \**************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../../../../~/css-loader!./../../../../../~/less-loader!./style.less */ 58);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../../../~/style-loader/addStyles.js */ 60)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../node_modules/css-loader/index.js!./../../../../../node_modules/less-loader/index.js!./style.less", function() {
				var newContent = require("!!./../../../../../node_modules/css-loader/index.js!./../../../../../node_modules/less-loader/index.js!./style.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 58 */
/*!*********************************************************************************************************!*\
  !*** ./~/css-loader!./~/less-loader!./restaurantmenu.web/src/components/MenuList/MenuEditor/style.less ***!
  \*********************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../../../~/css-loader/lib/css-base.js */ 59)();
	// imports
	
	
	// module
	exports.push([module.id, "/* START EVOQ COLOR PALETTE */\n/* END EVOQ COLOR PALETTE */\n/* START ATTENTION COLORS */\n/* END ATTENTION COLORS */\n/* SVG HOVER STATES */\nsvg {\n  fill: #C8C8C8;\n}\nsvg:hover {\n  fill: #6F7273;\n}\nsvg:active {\n  fill: #1E88C3;\n}\n/* END SVG HOVER STATES */\n.menu-details-editor {\n  padding: 10px 0;\n  background-color: #FFFFFF;\n  display: block;\n  float: left;\n}\n.menu-details-editor .editor-container {\n  float: left;\n  padding: 10px 20px;\n  width: 100%;\n  box-sizing: border-box;\n}\n.menu-details-editor .editor-container.right-column {\n  border-left: 1px solid #C8C8C8;\n}\n.menu-details-editor .editor-container .title-row {\n  width: 100%;\n  float: left;\n  font-weight: bold;\n  text-transform: uppercase;\n  margin-bottom: 10px;\n}\n.menu-details-editor .editor-container .status-row {\n  width: 100%;\n  float: left;\n  margin-bottom: 10px;\n}\n.menu-details-editor .editor-container .status-row .left {\n  float: left;\n  width: 50%;\n}\n.menu-details-editor .editor-container .status-row .left .dnn-label {\n  float: left;\n}\n.menu-details-editor .editor-container .status-row .left .dnn-label label {\n  float: left;\n}\n.menu-details-editor .editor-container .status-row .right {\n  float: right;\n  width: 50%;\n  text-align: right;\n}\n.menu-details-editor .editor-container .status-row .right .checkbox {\n  float: right;\n}\n.menu-details-editor .editor-container .editor-row {\n  float: left;\n  width: 100%;\n}\n.menu-details-editor .editor-container .editor-row select.full {\n  float: left;\n  width: 100%;\n}\n.menu-details-editor .editor-container .editor-row select.two-fifth {\n  float: left;\n  width: 40%;\n}\n.menu-details-editor .editor-container .editor-row select.one-fourth {\n  float: left;\n  width: 25%;\n}\n.menu-details-editor .editor-container .editor-row .text-section {\n  width: 5%;\n  float: left;\n  text-align: center;\n  vertical-align: middle;\n  margin-top: 9px;\n}\n.menu-details-editor .editor-container .editor-row .dnn-single-line-input-with-error,\n.menu-details-editor .editor-container .editor-row input {\n  width: 100%;\n}\n.menu-details-editor .editor-container .editor-row.divider {\n  padding-bottom: 15px;\n}\n.menu-details-editor .editor-container .editor-row.divider .dnn-uicommon-select,\n.menu-details-editor .editor-container .editor-row.divider .dnn-ui-common-single-line-input {\n  border-radius: 0px;\n}\n.menu-details-editor .editor-container .editor-row.divider .dnn-ui-common-multi-line-input {\n  padding: 8px 16px 62px;\n  border-radius: 0px;\n}\n.menu-details-editor .editor-container .editor-row.divider .new-group-container {\n  position: absolute;\n  z-index: 999;\n}\n.menu-details-editor .editor-container .editor-row.divider .dnn-label {\n  float: left;\n}\n.menu-details-editor .editor-container .editor-row.divider .dnn-label label {\n  float: left;\n}\n.menu-details-editor .buttons-box {\n  width: 100%;\n  text-align: center;\n  float: left;\n  margin: 15px 0;\n}\n.menu-details-editor .buttons-box .dnn-ui-common-button {\n  margin: 5px;\n}\n.menu-details-editor .buttons-box .edit-icon {\n  margin: 0px 10px 20px 10px;\n  float: right;\n}\n.menu-details-editor .buttons-box .edit-icon svg {\n  width: 16px;\n  float: left;\n  height: 16px;\n}\n", ""]);
	
	// exports


/***/ },
/* 59 */
/*!**************************************!*\
  !*** ./~/css-loader/lib/css-base.js ***!
  \**************************************/
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 60 */
/*!*************************************!*\
  !*** ./~/style-loader/addStyles.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(true) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 61 */
/*!********************************************************************************!*\
  !*** ./restaurantmenu.web/src/components/common/CollapsibleSwitcher/index.jsx ***!
  \********************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("E:\\websites\\dnn_900\\Website\\DesktopModules\\DotNetNuclear\\RestaurantMenuPB\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("E:\\websites\\dnn_900\\Website\\DesktopModules\\DotNetNuclear\\RestaurantMenuPB\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 2);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CollapsibleSwitcher = function (_Component) {
	    _inherits(CollapsibleSwitcher, _Component);
	
	    function CollapsibleSwitcher() {
	        _classCallCheck(this, CollapsibleSwitcher);
	
	        return _possibleConstructorReturn(this, (CollapsibleSwitcher.__proto__ || Object.getPrototypeOf(CollapsibleSwitcher)).call(this));
	    }
	
	    _createClass(CollapsibleSwitcher, [{
	        key: "render",
	        value: function render() {
	            var props = this.props;
	
	            return props.renderIndex >= 0 && props.children[props.renderIndex];
	        }
	    }]);
	
	    return CollapsibleSwitcher;
	}(_react.Component);
	
	CollapsibleSwitcher.propTypes = {
	    renderIndex: _react.PropTypes.number,
	    children: _react.PropTypes.array
	};
	CollapsibleSwitcher.defaultProps = {
	    renderIndex: 0
	};
	
	exports.default = CollapsibleSwitcher;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\websites\\dnn_900\\Website\\DesktopModules\\DotNetNuclear\\RestaurantMenuPB\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 62 */
/*!***************************************************************!*\
  !*** ./restaurantmenu.web/src/components/MenuList/style.less ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../../../~/css-loader!./../../../../~/less-loader!./style.less */ 63);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../../~/style-loader/addStyles.js */ 60)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/less-loader/index.js!./style.less", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/less-loader/index.js!./style.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 63 */
/*!**********************************************************************************************!*\
  !*** ./~/css-loader!./~/less-loader!./restaurantmenu.web/src/components/MenuList/style.less ***!
  \**********************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../../~/css-loader/lib/css-base.js */ 59)();
	// imports
	
	
	// module
	exports.push([module.id, "/* START EVOQ COLOR PALETTE */\n/* END EVOQ COLOR PALETTE */\n/* START ATTENTION COLORS */\n/* END ATTENTION COLORS */\n/* SVG HOVER STATES */\nsvg {\n  fill: #C8C8C8;\n}\nsvg:hover {\n  fill: #6F7273;\n}\nsvg:active {\n  fill: #1E88C3;\n}\n/* END SVG HOVER STATES */\n.header-row {\n  padding: 10px 0 10px;\n  border-bottom: 1px solid #C8C8C8;\n  text-transform: uppercase;\n}\n.header-row .dnn-grid-cell {\n  padding: 0 15px;\n}\n.menuitem-list-container .menu-item-row,\n.add-setting-editor .menu-item-row {\n  border-bottom: 1px solid #C8C8C8;\n}\n.menuitem-list-container .menu-item-row:last-child,\n.add-setting-editor .menu-item-row:last-child {\n  border-bottom: none;\n}\n.menuitem-list-container .menu-item-row > .dnn-grid-cell,\n.add-setting-editor .menu-item-row > .dnn-grid-cell {\n  padding: 15px;\n}\n.menuitem-list-container .collapsible-component1,\n.add-setting-editor .collapsible-component1 {\n  display: table;\n  width: 100%;\n  border-bottom: 1px solid #C8C8C8;\n  cursor: auto;\n}\n.menuitem-list-container .collapsible-component1 > div,\n.add-setting-editor .collapsible-component1 > div {\n  float: left;\n  width: 100%;\n}\n.menuitem-list-container .collapsible-component1 > div > div,\n.add-setting-editor .collapsible-component1 > div > div {\n  float: left;\n  width: 100%;\n}\n.menuitem-list-container .collapsible-component1.true,\n.add-setting-editor .collapsible-component1.true {\n  border-top: 2px solid #1E88C3;\n  border-bottom: 2px solid #1E88C3;\n  margin-top: -1px;\n}\n.menuitem-list-container .collapsible-component1 .item-thumb,\n.add-setting-editor .collapsible-component1 .item-thumb {\n  max-width: 106px;\n  max-height: 70px;\n}\n.menuitem-list-container .collapsible-component1 .item-row-collapsible,\n.add-setting-editor .collapsible-component1 .item-row-collapsible {\n  background-color: #FFFFFF;\n}\n.menuitem-list-container .collapsible-component1 .item-row-collapsible > div,\n.add-setting-editor .collapsible-component1 .item-row-collapsible > div {\n  padding: 25px;\n}\n.menuitem-list-container .collapsible-component1 div.collapsible-header1,\n.add-setting-editor .collapsible-component1 div.collapsible-header1 {\n  color: #6F7273;\n  width: 100%;\n  float: left;\n  position: relative;\n  padding: 15px 18px;\n  box-sizing: border-box;\n  cursor: auto;\n}\n.menuitem-list-container .collapsible-component1 div.collapsible-header1.false,\n.add-setting-editor .collapsible-component1 div.collapsible-header1.false {\n  display: none;\n}\n.menuitem-list-container .collapsible-component1 div.collapsible-header1 .edit-icon,\n.add-setting-editor .collapsible-component1 div.collapsible-header1 .edit-icon {\n  margin-left: 5px;\n  float: right;\n  cursor: pointer;\n}\n.menuitem-list-container .collapsible-component1 div.collapsible-header1 .edit-icon svg,\n.add-setting-editor .collapsible-component1 div.collapsible-header1 .edit-icon svg {\n  width: 18px;\n  float: left;\n  height: 18px;\n}\n.menuitem-list-container .collapsible-component1 div.collapsible-header1 .edit-icon.false svg,\n.add-setting-editor .collapsible-component1 div.collapsible-header1 .edit-icon.false svg {\n  fill: #1E88C3;\n}\n.menuitem-list-container .collapsible-component1 div.collapsible-header1 .edit-icon.false svg:hover,\n.add-setting-editor .collapsible-component1 div.collapsible-header1 .edit-icon.false svg:hover {\n  fill: #4B4E4F;\n}\n.menuitem-list-container .collapsible-component1 div.collapsible-header1 .icon-flat,\n.add-setting-editor .collapsible-component1 div.collapsible-header1 .icon-flat {\n  display: inline-block;\n  width: 18px;\n  height: 18px;\n  vertical-align: middle;\n}\n.menuitem-list-container .collapsible-component1 div.collapsible-header1 .icon-flat svg,\n.add-setting-editor .collapsible-component1 div.collapsible-header1 .icon-flat svg {\n  fill: #4B4E4F;\n}\n", ""]);
	
	// exports


/***/ },
/* 64 */
/*!*******************************************************!*\
  !*** ./restaurantmenu.web/src/containers/Root.dev.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("E:\\websites\\dnn_900\\Website\\DesktopModules\\DotNetNuclear\\RestaurantMenuPB\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("E:\\websites\\dnn_900\\Website\\DesktopModules\\DotNetNuclear\\RestaurantMenuPB\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _App = __webpack_require__(/*! ../components/App */ 19);
	
	var _App2 = _interopRequireDefault(_App);
	
	var _DevTools = __webpack_require__(/*! ./DevTools */ 12);
	
	var _DevTools2 = _interopRequireDefault(_DevTools);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Root = function (_Component) {
	    _inherits(Root, _Component);
	
	    function Root() {
	        _classCallCheck(this, Root);
	
	        return _possibleConstructorReturn(this, (Root.__proto__ || Object.getPrototypeOf(Root)).apply(this, arguments));
	    }
	
	    _createClass(Root, [{
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "div",
	                null,
	                _react2.default.createElement(_App2.default, null),
	                _react2.default.createElement(_DevTools2.default, null)
	            );
	        }
	    }]);
	
	    return Root;
	}(_react.Component);
	
	exports.default = Root;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\websites\\dnn_900\\Website\\DesktopModules\\DotNetNuclear\\RestaurantMenuPB\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Root.dev.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }
/******/ ]);
//# sourceMappingURL=restaurantmenu-bundle.js.map