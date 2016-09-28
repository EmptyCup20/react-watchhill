webpackJsonp([0,1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactRouter = __webpack_require__(3);

	var _reactRedux = __webpack_require__(67);

	var _routes = __webpack_require__(89);

	var _routes2 = _interopRequireDefault(_routes);

	var _store = __webpack_require__(145);

	var _store2 = _interopRequireDefault(_store);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//路由
	//基础库
	var serverState = window.__SERVER_STATE__;

	//redux store

	var store = (0, _store2.default)(serverState); //传入服务端请求的state,使前后端Store tree统一
	console.log('browser store:', store.getState());

	var app = document.getElementById('app');

	//<Router routes={routes} history={browserHistory}/>, ???  https://github.com/reactjs/react-router-tutorial/tree/master/lessons/13-server-rendering
	(0, _reactDom.render)(_react2.default.createElement(
	  _reactRedux.Provider,
	  { store: store },
	  _react2.default.createElement(
	    _reactRouter.Router,
	    { history: _reactRouter.browserHistory },
	    (0, _routes2.default)(store)
	  )
	), app);

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.createMemoryHistory = exports.hashHistory = exports.browserHistory = exports.applyRouterMiddleware = exports.formatPattern = exports.useRouterHistory = exports.match = exports.routerShape = exports.locationShape = exports.PropTypes = exports.RoutingContext = exports.RouterContext = exports.createRoutes = exports.useRoutes = exports.RouteContext = exports.Lifecycle = exports.History = exports.Route = exports.Redirect = exports.IndexRoute = exports.IndexRedirect = exports.withRouter = exports.IndexLink = exports.Link = exports.Router = undefined;

	var _RouteUtils = __webpack_require__(4);

	Object.defineProperty(exports, 'createRoutes', {
	  enumerable: true,
	  get: function get() {
	    return _RouteUtils.createRoutes;
	  }
	});

	var _PropTypes2 = __webpack_require__(5);

	Object.defineProperty(exports, 'locationShape', {
	  enumerable: true,
	  get: function get() {
	    return _PropTypes2.locationShape;
	  }
	});
	Object.defineProperty(exports, 'routerShape', {
	  enumerable: true,
	  get: function get() {
	    return _PropTypes2.routerShape;
	  }
	});

	var _PatternUtils = __webpack_require__(11);

	Object.defineProperty(exports, 'formatPattern', {
	  enumerable: true,
	  get: function get() {
	    return _PatternUtils.formatPattern;
	  }
	});

	var _Router2 = __webpack_require__(13);

	var _Router3 = _interopRequireDefault(_Router2);

	var _Link2 = __webpack_require__(44);

	var _Link3 = _interopRequireDefault(_Link2);

	var _IndexLink2 = __webpack_require__(45);

	var _IndexLink3 = _interopRequireDefault(_IndexLink2);

	var _withRouter2 = __webpack_require__(46);

	var _withRouter3 = _interopRequireDefault(_withRouter2);

	var _IndexRedirect2 = __webpack_require__(48);

	var _IndexRedirect3 = _interopRequireDefault(_IndexRedirect2);

	var _IndexRoute2 = __webpack_require__(50);

	var _IndexRoute3 = _interopRequireDefault(_IndexRoute2);

	var _Redirect2 = __webpack_require__(49);

	var _Redirect3 = _interopRequireDefault(_Redirect2);

	var _Route2 = __webpack_require__(51);

	var _Route3 = _interopRequireDefault(_Route2);

	var _History2 = __webpack_require__(52);

	var _History3 = _interopRequireDefault(_History2);

	var _Lifecycle2 = __webpack_require__(53);

	var _Lifecycle3 = _interopRequireDefault(_Lifecycle2);

	var _RouteContext2 = __webpack_require__(54);

	var _RouteContext3 = _interopRequireDefault(_RouteContext2);

	var _useRoutes2 = __webpack_require__(55);

	var _useRoutes3 = _interopRequireDefault(_useRoutes2);

	var _RouterContext2 = __webpack_require__(41);

	var _RouterContext3 = _interopRequireDefault(_RouterContext2);

	var _RoutingContext2 = __webpack_require__(56);

	var _RoutingContext3 = _interopRequireDefault(_RoutingContext2);

	var _PropTypes3 = _interopRequireDefault(_PropTypes2);

	var _match2 = __webpack_require__(57);

	var _match3 = _interopRequireDefault(_match2);

	var _useRouterHistory2 = __webpack_require__(61);

	var _useRouterHistory3 = _interopRequireDefault(_useRouterHistory2);

	var _applyRouterMiddleware2 = __webpack_require__(62);

	var _applyRouterMiddleware3 = _interopRequireDefault(_applyRouterMiddleware2);

	var _browserHistory2 = __webpack_require__(63);

	var _browserHistory3 = _interopRequireDefault(_browserHistory2);

	var _hashHistory2 = __webpack_require__(66);

	var _hashHistory3 = _interopRequireDefault(_hashHistory2);

	var _createMemoryHistory2 = __webpack_require__(58);

	var _createMemoryHistory3 = _interopRequireDefault(_createMemoryHistory2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Router = _Router3.default; /* components */

	exports.Link = _Link3.default;
	exports.IndexLink = _IndexLink3.default;
	exports.withRouter = _withRouter3.default;

	/* components (configuration) */

	exports.IndexRedirect = _IndexRedirect3.default;
	exports.IndexRoute = _IndexRoute3.default;
	exports.Redirect = _Redirect3.default;
	exports.Route = _Route3.default;

	/* mixins */

	exports.History = _History3.default;
	exports.Lifecycle = _Lifecycle3.default;
	exports.RouteContext = _RouteContext3.default;

	/* utils */

	exports.useRoutes = _useRoutes3.default;
	exports.RouterContext = _RouterContext3.default;
	exports.RoutingContext = _RoutingContext3.default;
	exports.PropTypes = _PropTypes3.default;
	exports.match = _match3.default;
	exports.useRouterHistory = _useRouterHistory3.default;
	exports.applyRouterMiddleware = _applyRouterMiddleware3.default;

	/* histories */

	exports.browserHistory = _browserHistory3.default;
	exports.hashHistory = _hashHistory3.default;
	exports.createMemoryHistory = _createMemoryHistory3.default;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.isReactChildren = isReactChildren;
	exports.createRouteFromReactElement = createRouteFromReactElement;
	exports.createRoutesFromReactChildren = createRoutesFromReactChildren;
	exports.createRoutes = createRoutes;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function isValidChild(object) {
	  return object == null || _react2.default.isValidElement(object);
	}

	function isReactChildren(object) {
	  return isValidChild(object) || Array.isArray(object) && object.every(isValidChild);
	}

	function createRoute(defaultProps, props) {
	  return _extends({}, defaultProps, props);
	}

	function createRouteFromReactElement(element) {
	  var type = element.type;
	  var route = createRoute(type.defaultProps, element.props);

	  if (route.children) {
	    var childRoutes = createRoutesFromReactChildren(route.children, route);

	    if (childRoutes.length) route.childRoutes = childRoutes;

	    delete route.children;
	  }

	  return route;
	}

	/**
	 * Creates and returns a routes object from the given ReactChildren. JSX
	 * provides a convenient way to visualize how routes in the hierarchy are
	 * nested.
	 *
	 *   import { Route, createRoutesFromReactChildren } from 'react-router'
	 *
	 *   const routes = createRoutesFromReactChildren(
	 *     <Route component={App}>
	 *       <Route path="home" component={Dashboard}/>
	 *       <Route path="news" component={NewsFeed}/>
	 *     </Route>
	 *   )
	 *
	 * Note: This method is automatically used when you provide <Route> children
	 * to a <Router> component.
	 */
	function createRoutesFromReactChildren(children, parentRoute) {
	  var routes = [];

	  _react2.default.Children.forEach(children, function (element) {
	    if (_react2.default.isValidElement(element)) {
	      // Component classes may have a static create* method.
	      if (element.type.createRouteFromReactElement) {
	        var route = element.type.createRouteFromReactElement(element, parentRoute);

	        if (route) routes.push(route);
	      } else {
	        routes.push(createRouteFromReactElement(element));
	      }
	    }
	  });

	  return routes;
	}

	/**
	 * Creates and returns an array of routes from the given object which
	 * may be a JSX route, a plain object route, or an array of either.
	 */
	function createRoutes(routes) {
	  if (isReactChildren(routes)) {
	    routes = createRoutesFromReactChildren(routes);
	  } else if (routes && !Array.isArray(routes)) {
	    routes = [routes];
	  }

	  return routes;
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports.router = exports.routes = exports.route = exports.components = exports.component = exports.location = exports.history = exports.falsy = exports.locationShape = exports.routerShape = undefined;

	var _react = __webpack_require__(1);

	var _deprecateObjectProperties = __webpack_require__(7);

	var _deprecateObjectProperties2 = _interopRequireDefault(_deprecateObjectProperties);

	var _InternalPropTypes = __webpack_require__(10);

	var InternalPropTypes = _interopRequireWildcard(_InternalPropTypes);

	var _routerWarning = __webpack_require__(8);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var func = _react.PropTypes.func;
	var object = _react.PropTypes.object;
	var shape = _react.PropTypes.shape;
	var string = _react.PropTypes.string;
	var routerShape = exports.routerShape = shape({
	  push: func.isRequired,
	  replace: func.isRequired,
	  go: func.isRequired,
	  goBack: func.isRequired,
	  goForward: func.isRequired,
	  setRouteLeaveHook: func.isRequired,
	  isActive: func.isRequired
	});

	var locationShape = exports.locationShape = shape({
	  pathname: string.isRequired,
	  search: string.isRequired,
	  state: object,
	  action: string.isRequired,
	  key: string
	});

	// Deprecated stuff below:

	var falsy = exports.falsy = InternalPropTypes.falsy;
	var history = exports.history = InternalPropTypes.history;
	var location = exports.location = locationShape;
	var component = exports.component = InternalPropTypes.component;
	var components = exports.components = InternalPropTypes.components;
	var route = exports.route = InternalPropTypes.route;
	var routes = exports.routes = InternalPropTypes.routes;
	var router = exports.router = routerShape;

	if (process.env.NODE_ENV !== 'production') {
	  (function () {
	    var deprecatePropType = function deprecatePropType(propType, message) {
	      return function () {
	        process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, message) : void 0;
	        return propType.apply(undefined, arguments);
	      };
	    };

	    var deprecateInternalPropType = function deprecateInternalPropType(propType) {
	      return deprecatePropType(propType, 'This prop type is not intended for external use, and was previously exported by mistake. These internal prop types are deprecated for external use, and will be removed in a later version.');
	    };

	    var deprecateRenamedPropType = function deprecateRenamedPropType(propType, name) {
	      return deprecatePropType(propType, 'The `' + name + '` prop type is now exported as `' + name + 'Shape` to avoid name conflicts. This export is deprecated and will be removed in a later version.');
	    };

	    exports.falsy = falsy = deprecateInternalPropType(falsy);
	    exports.history = history = deprecateInternalPropType(history);
	    exports.component = component = deprecateInternalPropType(component);
	    exports.components = components = deprecateInternalPropType(components);
	    exports.route = route = deprecateInternalPropType(route);
	    exports.routes = routes = deprecateInternalPropType(routes);

	    exports.location = location = deprecateRenamedPropType(location, 'location');
	    exports.router = router = deprecateRenamedPropType(router, 'router');
	  })();
	}

	var defaultExport = {
	  falsy: falsy,
	  history: history,
	  location: location,
	  component: component,
	  components: components,
	  route: route,
	  // For some reason, routes was never here.
	  router: router
	};

	if (process.env.NODE_ENV !== 'production') {
	  defaultExport = (0, _deprecateObjectProperties2.default)(defaultExport, 'The default export from `react-router/lib/PropTypes` is deprecated. Please use the named exports instead.');
	}

	exports.default = defaultExport;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 6 */
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
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports.canUseMembrane = undefined;

	var _routerWarning = __webpack_require__(8);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var canUseMembrane = exports.canUseMembrane = false;

	// No-op by default.
	var deprecateObjectProperties = function deprecateObjectProperties(object) {
	  return object;
	};

	if (process.env.NODE_ENV !== 'production') {
	  try {
	    if (Object.defineProperty({}, 'x', {
	      get: function get() {
	        return true;
	      }
	    }).x) {
	      exports.canUseMembrane = canUseMembrane = true;
	    }
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */

	  if (canUseMembrane) {
	    deprecateObjectProperties = function deprecateObjectProperties(object, message) {
	      // Wrap the deprecated object in a membrane to warn on property access.
	      var membrane = {};

	      var _loop = function _loop(prop) {
	        if (!Object.prototype.hasOwnProperty.call(object, prop)) {
	          return 'continue';
	        }

	        if (typeof object[prop] === 'function') {
	          // Can't use fat arrow here because of use of arguments below.
	          membrane[prop] = function () {
	            process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, message) : void 0;
	            return object[prop].apply(object, arguments);
	          };
	          return 'continue';
	        }

	        // These properties are non-enumerable to prevent React dev tools from
	        // seeing them and causing spurious warnings when accessing them. In
	        // principle this could be done with a proxy, but support for the
	        // ownKeys trap on proxies is not universal, even among browsers that
	        // otherwise support proxies.
	        Object.defineProperty(membrane, prop, {
	          get: function get() {
	            process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, message) : void 0;
	            return object[prop];
	          }
	        });
	      };

	      for (var prop in object) {
	        var _ret = _loop(prop);

	        if (_ret === 'continue') continue;
	      }

	      return membrane;
	    };
	  }
	}

	exports.default = deprecateObjectProperties;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = routerWarning;
	exports._resetWarned = _resetWarned;

	var _warning = __webpack_require__(9);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var warned = {};

	function routerWarning(falseToWarn, message) {
	  // Only issue deprecation warnings once.
	  if (message.indexOf('deprecated') !== -1) {
	    if (warned[message]) {
	      return;
	    }

	    warned[message] = true;
	  }

	  message = '[react-router] ' + message;

	  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	    args[_key - 2] = arguments[_key];
	  }

	  _warning2.default.apply(undefined, [falseToWarn, message].concat(args));
	}

	function _resetWarned() {
	  warned = {};
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  warning = function(condition, format, args) {
	    var len = arguments.length;
	    args = new Array(len > 2 ? len - 2 : 0);
	    for (var key = 2; key < len; key++) {
	      args[key - 2] = arguments[key];
	    }
	    if (format === undefined) {
	      throw new Error(
	        '`warning(condition, format, ...args)` requires a warning ' +
	        'message argument'
	      );
	    }

	    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
	      throw new Error(
	        'The warning format should be able to uniquely identify this ' +
	        'warning. Please, use a more descriptive format than: ' + format
	      );
	    }

	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' +
	        format.replace(/%s/g, function() {
	          return args[argIndex++];
	        });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch(x) {}
	    }
	  };
	}

	module.exports = warning;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.routes = exports.route = exports.components = exports.component = exports.history = undefined;
	exports.falsy = falsy;

	var _react = __webpack_require__(1);

	var func = _react.PropTypes.func;
	var object = _react.PropTypes.object;
	var arrayOf = _react.PropTypes.arrayOf;
	var oneOfType = _react.PropTypes.oneOfType;
	var element = _react.PropTypes.element;
	var shape = _react.PropTypes.shape;
	var string = _react.PropTypes.string;
	function falsy(props, propName, componentName) {
	  if (props[propName]) return new Error('<' + componentName + '> should not have a "' + propName + '" prop');
	}

	var history = exports.history = shape({
	  listen: func.isRequired,
	  push: func.isRequired,
	  replace: func.isRequired,
	  go: func.isRequired,
	  goBack: func.isRequired,
	  goForward: func.isRequired
	});

	var component = exports.component = oneOfType([func, string]);
	var components = exports.components = oneOfType([component, object]);
	var route = exports.route = oneOfType([object, element]);
	var routes = exports.routes = oneOfType([route, arrayOf(route)]);

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports.compilePattern = compilePattern;
	exports.matchPattern = matchPattern;
	exports.getParamNames = getParamNames;
	exports.getParams = getParams;
	exports.formatPattern = formatPattern;

	var _invariant = __webpack_require__(12);

	var _invariant2 = _interopRequireDefault(_invariant);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function escapeRegExp(string) {
	  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	}

	function _compilePattern(pattern) {
	  var regexpSource = '';
	  var paramNames = [];
	  var tokens = [];

	  var match = void 0,
	      lastIndex = 0,
	      matcher = /:([a-zA-Z_$][a-zA-Z0-9_$]*)|\*\*|\*|\(|\)/g;
	  while (match = matcher.exec(pattern)) {
	    if (match.index !== lastIndex) {
	      tokens.push(pattern.slice(lastIndex, match.index));
	      regexpSource += escapeRegExp(pattern.slice(lastIndex, match.index));
	    }

	    if (match[1]) {
	      regexpSource += '([^/]+)';
	      paramNames.push(match[1]);
	    } else if (match[0] === '**') {
	      regexpSource += '(.*)';
	      paramNames.push('splat');
	    } else if (match[0] === '*') {
	      regexpSource += '(.*?)';
	      paramNames.push('splat');
	    } else if (match[0] === '(') {
	      regexpSource += '(?:';
	    } else if (match[0] === ')') {
	      regexpSource += ')?';
	    }

	    tokens.push(match[0]);

	    lastIndex = matcher.lastIndex;
	  }

	  if (lastIndex !== pattern.length) {
	    tokens.push(pattern.slice(lastIndex, pattern.length));
	    regexpSource += escapeRegExp(pattern.slice(lastIndex, pattern.length));
	  }

	  return {
	    pattern: pattern,
	    regexpSource: regexpSource,
	    paramNames: paramNames,
	    tokens: tokens
	  };
	}

	var CompiledPatternsCache = Object.create(null);

	function compilePattern(pattern) {
	  if (!CompiledPatternsCache[pattern]) CompiledPatternsCache[pattern] = _compilePattern(pattern);

	  return CompiledPatternsCache[pattern];
	}

	/**
	 * Attempts to match a pattern on the given pathname. Patterns may use
	 * the following special characters:
	 *
	 * - :paramName     Matches a URL segment up to the next /, ?, or #. The
	 *                  captured string is considered a "param"
	 * - ()             Wraps a segment of the URL that is optional
	 * - *              Consumes (non-greedy) all characters up to the next
	 *                  character in the pattern, or to the end of the URL if
	 *                  there is none
	 * - **             Consumes (greedy) all characters up to the next character
	 *                  in the pattern, or to the end of the URL if there is none
	 *
	 *  The function calls callback(error, matched) when finished.
	 * The return value is an object with the following properties:
	 *
	 * - remainingPathname
	 * - paramNames
	 * - paramValues
	 */
	function matchPattern(pattern, pathname) {
	  // Ensure pattern starts with leading slash for consistency with pathname.
	  if (pattern.charAt(0) !== '/') {
	    pattern = '/' + pattern;
	  }

	  var _compilePattern2 = compilePattern(pattern);

	  var regexpSource = _compilePattern2.regexpSource;
	  var paramNames = _compilePattern2.paramNames;
	  var tokens = _compilePattern2.tokens;


	  if (pattern.charAt(pattern.length - 1) !== '/') {
	    regexpSource += '/?'; // Allow optional path separator at end.
	  }

	  // Special-case patterns like '*' for catch-all routes.
	  if (tokens[tokens.length - 1] === '*') {
	    regexpSource += '$';
	  }

	  var match = pathname.match(new RegExp('^' + regexpSource, 'i'));
	  if (match == null) {
	    return null;
	  }

	  var matchedPath = match[0];
	  var remainingPathname = pathname.substr(matchedPath.length);

	  if (remainingPathname) {
	    // Require that the match ends at a path separator, if we didn't match
	    // the full path, so any remaining pathname is a new path segment.
	    if (matchedPath.charAt(matchedPath.length - 1) !== '/') {
	      return null;
	    }

	    // If there is a remaining pathname, treat the path separator as part of
	    // the remaining pathname for properly continuing the match.
	    remainingPathname = '/' + remainingPathname;
	  }

	  return {
	    remainingPathname: remainingPathname,
	    paramNames: paramNames,
	    paramValues: match.slice(1).map(function (v) {
	      return v && decodeURIComponent(v);
	    })
	  };
	}

	function getParamNames(pattern) {
	  return compilePattern(pattern).paramNames;
	}

	function getParams(pattern, pathname) {
	  var match = matchPattern(pattern, pathname);
	  if (!match) {
	    return null;
	  }

	  var paramNames = match.paramNames;
	  var paramValues = match.paramValues;

	  var params = {};

	  paramNames.forEach(function (paramName, index) {
	    params[paramName] = paramValues[index];
	  });

	  return params;
	}

	/**
	 * Returns a version of the given pattern with params interpolated. Throws
	 * if there is a dynamic segment of the pattern for which there is no param.
	 */
	function formatPattern(pattern, params) {
	  params = params || {};

	  var _compilePattern3 = compilePattern(pattern);

	  var tokens = _compilePattern3.tokens;

	  var parenCount = 0,
	      pathname = '',
	      splatIndex = 0;

	  var token = void 0,
	      paramName = void 0,
	      paramValue = void 0;
	  for (var i = 0, len = tokens.length; i < len; ++i) {
	    token = tokens[i];

	    if (token === '*' || token === '**') {
	      paramValue = Array.isArray(params.splat) ? params.splat[splatIndex++] : params.splat;

	      !(paramValue != null || parenCount > 0) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'Missing splat #%s for path "%s"', splatIndex, pattern) : (0, _invariant2.default)(false) : void 0;

	      if (paramValue != null) pathname += encodeURI(paramValue);
	    } else if (token === '(') {
	      parenCount += 1;
	    } else if (token === ')') {
	      parenCount -= 1;
	    } else if (token.charAt(0) === ':') {
	      paramName = token.substring(1);
	      paramValue = params[paramName];

	      !(paramValue != null || parenCount > 0) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'Missing "%s" parameter for path "%s"', paramName, pattern) : (0, _invariant2.default)(false) : void 0;

	      if (paramValue != null) pathname += encodeURIComponent(paramValue);
	    } else {
	      pathname += token;
	    }
	  }

	  return pathname.replace(/\/+/g, '/');
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createHashHistory = __webpack_require__(14);

	var _createHashHistory2 = _interopRequireDefault(_createHashHistory);

	var _useQueries = __webpack_require__(30);

	var _useQueries2 = _interopRequireDefault(_useQueries);

	var _invariant = __webpack_require__(12);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _createTransitionManager = __webpack_require__(33);

	var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

	var _InternalPropTypes = __webpack_require__(10);

	var _RouterContext = __webpack_require__(41);

	var _RouterContext2 = _interopRequireDefault(_RouterContext);

	var _RouteUtils = __webpack_require__(4);

	var _RouterUtils = __webpack_require__(43);

	var _routerWarning = __webpack_require__(8);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function isDeprecatedHistory(history) {
	  return !history || !history.__v2_compatible__;
	}

	/* istanbul ignore next: sanity check */
	function isUnsupportedHistory(history) {
	  // v3 histories expose getCurrentLocation, but aren't currently supported.
	  return history && history.getCurrentLocation;
	}

	var _React$PropTypes = _react2.default.PropTypes;
	var func = _React$PropTypes.func;
	var object = _React$PropTypes.object;

	/**
	 * A <Router> is a high-level API for automatically setting up
	 * a router that renders a <RouterContext> with all the props
	 * it needs each time the URL changes.
	 */

	var Router = _react2.default.createClass({
	  displayName: 'Router',


	  propTypes: {
	    history: object,
	    children: _InternalPropTypes.routes,
	    routes: _InternalPropTypes.routes, // alias for children
	    render: func,
	    createElement: func,
	    onError: func,
	    onUpdate: func,

	    // Deprecated:
	    parseQueryString: func,
	    stringifyQuery: func,

	    // PRIVATE: For client-side rehydration of server match.
	    matchContext: object
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      render: function render(props) {
	        return _react2.default.createElement(_RouterContext2.default, props);
	      }
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      location: null,
	      routes: null,
	      params: null,
	      components: null
	    };
	  },
	  handleError: function handleError(error) {
	    if (this.props.onError) {
	      this.props.onError.call(this, error);
	    } else {
	      // Throw errors by default so we don't silently swallow them!
	      throw error; // This error probably occurred in getChildRoutes or getComponents.
	    }
	  },
	  componentWillMount: function componentWillMount() {
	    var _this = this;

	    var _props = this.props;
	    var parseQueryString = _props.parseQueryString;
	    var stringifyQuery = _props.stringifyQuery;

	    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(!(parseQueryString || stringifyQuery), '`parseQueryString` and `stringifyQuery` are deprecated. Please create a custom history. http://tiny.cc/router-customquerystring') : void 0;

	    var _createRouterObjects = this.createRouterObjects();

	    var history = _createRouterObjects.history;
	    var transitionManager = _createRouterObjects.transitionManager;
	    var router = _createRouterObjects.router;


	    this._unlisten = transitionManager.listen(function (error, state) {
	      if (error) {
	        _this.handleError(error);
	      } else {
	        _this.setState(state, _this.props.onUpdate);
	      }
	    });

	    this.history = history;
	    this.router = router;
	  },
	  createRouterObjects: function createRouterObjects() {
	    var matchContext = this.props.matchContext;

	    if (matchContext) {
	      return matchContext;
	    }

	    var history = this.props.history;
	    var _props2 = this.props;
	    var routes = _props2.routes;
	    var children = _props2.children;


	    !!isUnsupportedHistory(history) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'You have provided a history object created with history v3.x. ' + 'This version of React Router is not compatible with v3 history ' + 'objects. Please use history v2.x instead.') : (0, _invariant2.default)(false) : void 0;

	    if (isDeprecatedHistory(history)) {
	      history = this.wrapDeprecatedHistory(history);
	    }

	    var transitionManager = (0, _createTransitionManager2.default)(history, (0, _RouteUtils.createRoutes)(routes || children));
	    var router = (0, _RouterUtils.createRouterObject)(history, transitionManager);
	    var routingHistory = (0, _RouterUtils.createRoutingHistory)(history, transitionManager);

	    return { history: routingHistory, transitionManager: transitionManager, router: router };
	  },
	  wrapDeprecatedHistory: function wrapDeprecatedHistory(history) {
	    var _props3 = this.props;
	    var parseQueryString = _props3.parseQueryString;
	    var stringifyQuery = _props3.stringifyQuery;


	    var createHistory = void 0;
	    if (history) {
	      process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'It appears you have provided a deprecated history object to `<Router/>`, please use a history provided by ' + 'React Router with `import { browserHistory } from \'react-router\'` or `import { hashHistory } from \'react-router\'`. ' + 'If you are using a custom history please create it with `useRouterHistory`, see http://tiny.cc/router-usinghistory for details.') : void 0;
	      createHistory = function createHistory() {
	        return history;
	      };
	    } else {
	      process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, '`Router` no longer defaults the history prop to hash history. Please use the `hashHistory` singleton instead. http://tiny.cc/router-defaulthistory') : void 0;
	      createHistory = _createHashHistory2.default;
	    }

	    return (0, _useQueries2.default)(createHistory)({ parseQueryString: parseQueryString, stringifyQuery: stringifyQuery });
	  },


	  /* istanbul ignore next: sanity check */
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(nextProps.history === this.props.history, 'You cannot change <Router history>; it will be ignored') : void 0;

	    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)((nextProps.routes || nextProps.children) === (this.props.routes || this.props.children), 'You cannot change <Router routes>; it will be ignored') : void 0;
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    if (this._unlisten) this._unlisten();
	  },
	  render: function render() {
	    var _state = this.state;
	    var location = _state.location;
	    var routes = _state.routes;
	    var params = _state.params;
	    var components = _state.components;
	    var _props4 = this.props;
	    var createElement = _props4.createElement;
	    var render = _props4.render;

	    var props = _objectWithoutProperties(_props4, ['createElement', 'render']);

	    if (location == null) return null; // Async match

	    // Only forward non-Router-specific props to routing context, as those are
	    // the only ones that might be custom routing context props.
	    Object.keys(Router.propTypes).forEach(function (propType) {
	      return delete props[propType];
	    });

	    return render(_extends({}, props, {
	      history: this.history,
	      router: this.router,
	      location: location,
	      routes: routes,
	      params: params,
	      components: components,
	      createElement: createElement
	    }));
	  }
	});

	exports.default = Router;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(15);

	var _warning2 = _interopRequireDefault(_warning);

	var _invariant = __webpack_require__(12);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _Actions = __webpack_require__(16);

	var _PathUtils = __webpack_require__(17);

	var _ExecutionEnvironment = __webpack_require__(18);

	var _DOMUtils = __webpack_require__(19);

	var _DOMStateStorage = __webpack_require__(20);

	var _createDOMHistory = __webpack_require__(21);

	var _createDOMHistory2 = _interopRequireDefault(_createDOMHistory);

	function isAbsolutePath(path) {
	  return typeof path === 'string' && path.charAt(0) === '/';
	}

	function ensureSlash() {
	  var path = _DOMUtils.getHashPath();

	  if (isAbsolutePath(path)) return true;

	  _DOMUtils.replaceHashPath('/' + path);

	  return false;
	}

	function addQueryStringValueToPath(path, key, value) {
	  return path + (path.indexOf('?') === -1 ? '?' : '&') + (key + '=' + value);
	}

	function stripQueryStringValueFromPath(path, key) {
	  return path.replace(new RegExp('[?&]?' + key + '=[a-zA-Z0-9]+'), '');
	}

	function getQueryStringValueFromPath(path, key) {
	  var match = path.match(new RegExp('\\?.*?\\b' + key + '=(.+?)\\b'));
	  return match && match[1];
	}

	var DefaultQueryKey = '_k';

	function createHashHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Hash history needs a DOM') : _invariant2['default'](false) : undefined;

	  var queryKey = options.queryKey;

	  if (queryKey === undefined || !!queryKey) queryKey = typeof queryKey === 'string' ? queryKey : DefaultQueryKey;

	  function getCurrentLocation() {
	    var path = _DOMUtils.getHashPath();

	    var key = undefined,
	        state = undefined;
	    if (queryKey) {
	      key = getQueryStringValueFromPath(path, queryKey);
	      path = stripQueryStringValueFromPath(path, queryKey);

	      if (key) {
	        state = _DOMStateStorage.readState(key);
	      } else {
	        state = null;
	        key = history.createKey();
	        _DOMUtils.replaceHashPath(addQueryStringValueToPath(path, queryKey, key));
	      }
	    } else {
	      key = state = null;
	    }

	    var location = _PathUtils.parsePath(path);

	    return history.createLocation(_extends({}, location, { state: state }), undefined, key);
	  }

	  function startHashChangeListener(_ref) {
	    var transitionTo = _ref.transitionTo;

	    function hashChangeListener() {
	      if (!ensureSlash()) return; // Always make sure hashes are preceeded with a /.

	      transitionTo(getCurrentLocation());
	    }

	    ensureSlash();
	    _DOMUtils.addEventListener(window, 'hashchange', hashChangeListener);

	    return function () {
	      _DOMUtils.removeEventListener(window, 'hashchange', hashChangeListener);
	    };
	  }

	  function finishTransition(location) {
	    var basename = location.basename;
	    var pathname = location.pathname;
	    var search = location.search;
	    var state = location.state;
	    var action = location.action;
	    var key = location.key;

	    if (action === _Actions.POP) return; // Nothing to do.

	    var path = (basename || '') + pathname + search;

	    if (queryKey) {
	      path = addQueryStringValueToPath(path, queryKey, key);
	      _DOMStateStorage.saveState(key, state);
	    } else {
	      // Drop key and state.
	      location.key = location.state = null;
	    }

	    var currentHash = _DOMUtils.getHashPath();

	    if (action === _Actions.PUSH) {
	      if (currentHash !== path) {
	        window.location.hash = path;
	      } else {
	        process.env.NODE_ENV !== 'production' ? _warning2['default'](false, 'You cannot PUSH the same path using hash history') : undefined;
	      }
	    } else if (currentHash !== path) {
	      // REPLACE
	      _DOMUtils.replaceHashPath(path);
	    }
	  }

	  var history = _createDOMHistory2['default'](_extends({}, options, {
	    getCurrentLocation: getCurrentLocation,
	    finishTransition: finishTransition,
	    saveState: _DOMStateStorage.saveState
	  }));

	  var listenerCount = 0,
	      stopHashChangeListener = undefined;

	  function listenBefore(listener) {
	    if (++listenerCount === 1) stopHashChangeListener = startHashChangeListener(history);

	    var unlisten = history.listenBefore(listener);

	    return function () {
	      unlisten();

	      if (--listenerCount === 0) stopHashChangeListener();
	    };
	  }

	  function listen(listener) {
	    if (++listenerCount === 1) stopHashChangeListener = startHashChangeListener(history);

	    var unlisten = history.listen(listener);

	    return function () {
	      unlisten();

	      if (--listenerCount === 0) stopHashChangeListener();
	    };
	  }

	  function push(location) {
	    process.env.NODE_ENV !== 'production' ? _warning2['default'](queryKey || location.state == null, 'You cannot use state without a queryKey it will be dropped') : undefined;

	    history.push(location);
	  }

	  function replace(location) {
	    process.env.NODE_ENV !== 'production' ? _warning2['default'](queryKey || location.state == null, 'You cannot use state without a queryKey it will be dropped') : undefined;

	    history.replace(location);
	  }

	  var goIsSupportedWithoutReload = _DOMUtils.supportsGoWithoutReloadUsingHash();

	  function go(n) {
	    process.env.NODE_ENV !== 'production' ? _warning2['default'](goIsSupportedWithoutReload, 'Hash history go(n) causes a full page reload in this browser') : undefined;

	    history.go(n);
	  }

	  function createHref(path) {
	    return '#' + history.createHref(path);
	  }

	  // deprecated
	  function registerTransitionHook(hook) {
	    if (++listenerCount === 1) stopHashChangeListener = startHashChangeListener(history);

	    history.registerTransitionHook(hook);
	  }

	  // deprecated
	  function unregisterTransitionHook(hook) {
	    history.unregisterTransitionHook(hook);

	    if (--listenerCount === 0) stopHashChangeListener();
	  }

	  // deprecated
	  function pushState(state, path) {
	    process.env.NODE_ENV !== 'production' ? _warning2['default'](queryKey || state == null, 'You cannot use state without a queryKey it will be dropped') : undefined;

	    history.pushState(state, path);
	  }

	  // deprecated
	  function replaceState(state, path) {
	    process.env.NODE_ENV !== 'production' ? _warning2['default'](queryKey || state == null, 'You cannot use state without a queryKey it will be dropped') : undefined;

	    history.replaceState(state, path);
	  }

	  return _extends({}, history, {
	    listenBefore: listenBefore,
	    listen: listen,
	    push: push,
	    replace: replace,
	    go: go,
	    createHref: createHref,

	    registerTransitionHook: registerTransitionHook, // deprecated - warning is in createHistory
	    unregisterTransitionHook: unregisterTransitionHook, // deprecated - warning is in createHistory
	    pushState: pushState, // deprecated - warning is in createHistory
	    replaceState: replaceState // deprecated - warning is in createHistory
	  });
	}

	exports['default'] = createHashHistory;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  warning = function(condition, format, args) {
	    var len = arguments.length;
	    args = new Array(len > 2 ? len - 2 : 0);
	    for (var key = 2; key < len; key++) {
	      args[key - 2] = arguments[key];
	    }
	    if (format === undefined) {
	      throw new Error(
	        '`warning(condition, format, ...args)` requires a warning ' +
	        'message argument'
	      );
	    }

	    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
	      throw new Error(
	        'The warning format should be able to uniquely identify this ' +
	        'warning. Please, use a more descriptive format than: ' + format
	      );
	    }

	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' +
	        format.replace(/%s/g, function() {
	          return args[argIndex++];
	        });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch(x) {}
	    }
	  };
	}

	module.exports = warning;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 16 */
/***/ function(module, exports) {

	/**
	 * Indicates that navigation was caused by a call to history.push.
	 */
	'use strict';

	exports.__esModule = true;
	var PUSH = 'PUSH';

	exports.PUSH = PUSH;
	/**
	 * Indicates that navigation was caused by a call to history.replace.
	 */
	var REPLACE = 'REPLACE';

	exports.REPLACE = REPLACE;
	/**
	 * Indicates that navigation was caused by some other action such
	 * as using a browser's back/forward buttons and/or manually manipulating
	 * the URL in a browser's location bar. This is the default.
	 *
	 * See https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate
	 * for more information.
	 */
	var POP = 'POP';

	exports.POP = POP;
	exports['default'] = {
	  PUSH: PUSH,
	  REPLACE: REPLACE,
	  POP: POP
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports.extractPath = extractPath;
	exports.parsePath = parsePath;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(15);

	var _warning2 = _interopRequireDefault(_warning);

	function extractPath(string) {
	  var match = string.match(/^https?:\/\/[^\/]*/);

	  if (match == null) return string;

	  return string.substring(match[0].length);
	}

	function parsePath(path) {
	  var pathname = extractPath(path);
	  var search = '';
	  var hash = '';

	  process.env.NODE_ENV !== 'production' ? _warning2['default'](path === pathname, 'A path must be pathname + search + hash only, not a fully qualified URL like "%s"', path) : undefined;

	  var hashIndex = pathname.indexOf('#');
	  if (hashIndex !== -1) {
	    hash = pathname.substring(hashIndex);
	    pathname = pathname.substring(0, hashIndex);
	  }

	  var searchIndex = pathname.indexOf('?');
	  if (searchIndex !== -1) {
	    search = pathname.substring(searchIndex);
	    pathname = pathname.substring(0, searchIndex);
	  }

	  if (pathname === '') pathname = '/';

	  return {
	    pathname: pathname,
	    search: search,
	    hash: hash
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
	exports.canUseDOM = canUseDOM;

/***/ },
/* 19 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.addEventListener = addEventListener;
	exports.removeEventListener = removeEventListener;
	exports.getHashPath = getHashPath;
	exports.replaceHashPath = replaceHashPath;
	exports.getWindowPath = getWindowPath;
	exports.go = go;
	exports.getUserConfirmation = getUserConfirmation;
	exports.supportsHistory = supportsHistory;
	exports.supportsGoWithoutReloadUsingHash = supportsGoWithoutReloadUsingHash;

	function addEventListener(node, event, listener) {
	  if (node.addEventListener) {
	    node.addEventListener(event, listener, false);
	  } else {
	    node.attachEvent('on' + event, listener);
	  }
	}

	function removeEventListener(node, event, listener) {
	  if (node.removeEventListener) {
	    node.removeEventListener(event, listener, false);
	  } else {
	    node.detachEvent('on' + event, listener);
	  }
	}

	function getHashPath() {
	  // We can't use window.location.hash here because it's not
	  // consistent across browsers - Firefox will pre-decode it!
	  return window.location.href.split('#')[1] || '';
	}

	function replaceHashPath(path) {
	  window.location.replace(window.location.pathname + window.location.search + '#' + path);
	}

	function getWindowPath() {
	  return window.location.pathname + window.location.search + window.location.hash;
	}

	function go(n) {
	  if (n) window.history.go(n);
	}

	function getUserConfirmation(message, callback) {
	  callback(window.confirm(message));
	}

	/**
	 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
	 *
	 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
	 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
	 * changed to avoid false negatives for Windows Phones: https://github.com/rackt/react-router/issues/586
	 */

	function supportsHistory() {
	  var ua = navigator.userAgent;
	  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) {
	    return false;
	  }
	  return window.history && 'pushState' in window.history;
	}

	/**
	 * Returns false if using go(n) with hash history causes a full page reload.
	 */

	function supportsGoWithoutReloadUsingHash() {
	  var ua = navigator.userAgent;
	  return ua.indexOf('Firefox') === -1;
	}

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/*eslint-disable no-empty */
	'use strict';

	exports.__esModule = true;
	exports.saveState = saveState;
	exports.readState = readState;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(15);

	var _warning2 = _interopRequireDefault(_warning);

	var KeyPrefix = '@@History/';
	var QuotaExceededErrors = ['QuotaExceededError', 'QUOTA_EXCEEDED_ERR'];

	var SecurityError = 'SecurityError';

	function createKey(key) {
	  return KeyPrefix + key;
	}

	function saveState(key, state) {
	  try {
	    if (state == null) {
	      window.sessionStorage.removeItem(createKey(key));
	    } else {
	      window.sessionStorage.setItem(createKey(key), JSON.stringify(state));
	    }
	  } catch (error) {
	    if (error.name === SecurityError) {
	      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
	      // attempt to access window.sessionStorage.
	      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available due to security settings') : undefined;

	      return;
	    }

	    if (QuotaExceededErrors.indexOf(error.name) >= 0 && window.sessionStorage.length === 0) {
	      // Safari "private mode" throws QuotaExceededError.
	      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available in Safari private mode') : undefined;

	      return;
	    }

	    throw error;
	  }
	}

	function readState(key) {
	  var json = undefined;
	  try {
	    json = window.sessionStorage.getItem(createKey(key));
	  } catch (error) {
	    if (error.name === SecurityError) {
	      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
	      // attempt to access window.sessionStorage.
	      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to read state; sessionStorage is not available due to security settings') : undefined;

	      return null;
	    }
	  }

	  if (json) {
	    try {
	      return JSON.parse(json);
	    } catch (error) {
	      // Ignore invalid JSON.
	    }
	  }

	  return null;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _invariant = __webpack_require__(12);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _ExecutionEnvironment = __webpack_require__(18);

	var _DOMUtils = __webpack_require__(19);

	var _createHistory = __webpack_require__(22);

	var _createHistory2 = _interopRequireDefault(_createHistory);

	function createDOMHistory(options) {
	  var history = _createHistory2['default'](_extends({
	    getUserConfirmation: _DOMUtils.getUserConfirmation
	  }, options, {
	    go: _DOMUtils.go
	  }));

	  function listen(listener) {
	    !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'DOM history needs a DOM') : _invariant2['default'](false) : undefined;

	    return history.listen(listener);
	  }

	  return _extends({}, history, {
	    listen: listen
	  });
	}

	exports['default'] = createDOMHistory;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(15);

	var _warning2 = _interopRequireDefault(_warning);

	var _deepEqual = __webpack_require__(23);

	var _deepEqual2 = _interopRequireDefault(_deepEqual);

	var _PathUtils = __webpack_require__(17);

	var _AsyncUtils = __webpack_require__(26);

	var _Actions = __webpack_require__(16);

	var _createLocation2 = __webpack_require__(27);

	var _createLocation3 = _interopRequireDefault(_createLocation2);

	var _runTransitionHook = __webpack_require__(28);

	var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

	var _deprecate = __webpack_require__(29);

	var _deprecate2 = _interopRequireDefault(_deprecate);

	function createRandomKey(length) {
	  return Math.random().toString(36).substr(2, length);
	}

	function locationsAreEqual(a, b) {
	  return a.pathname === b.pathname && a.search === b.search &&
	  //a.action === b.action && // Different action !== location change.
	  a.key === b.key && _deepEqual2['default'](a.state, b.state);
	}

	var DefaultKeyLength = 6;

	function createHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	  var getCurrentLocation = options.getCurrentLocation;
	  var finishTransition = options.finishTransition;
	  var saveState = options.saveState;
	  var go = options.go;
	  var getUserConfirmation = options.getUserConfirmation;
	  var keyLength = options.keyLength;

	  if (typeof keyLength !== 'number') keyLength = DefaultKeyLength;

	  var transitionHooks = [];

	  function listenBefore(hook) {
	    transitionHooks.push(hook);

	    return function () {
	      transitionHooks = transitionHooks.filter(function (item) {
	        return item !== hook;
	      });
	    };
	  }

	  var allKeys = [];
	  var changeListeners = [];
	  var location = undefined;

	  function getCurrent() {
	    if (pendingLocation && pendingLocation.action === _Actions.POP) {
	      return allKeys.indexOf(pendingLocation.key);
	    } else if (location) {
	      return allKeys.indexOf(location.key);
	    } else {
	      return -1;
	    }
	  }

	  function updateLocation(newLocation) {
	    var current = getCurrent();

	    location = newLocation;

	    if (location.action === _Actions.PUSH) {
	      allKeys = [].concat(allKeys.slice(0, current + 1), [location.key]);
	    } else if (location.action === _Actions.REPLACE) {
	      allKeys[current] = location.key;
	    }

	    changeListeners.forEach(function (listener) {
	      listener(location);
	    });
	  }

	  function listen(listener) {
	    changeListeners.push(listener);

	    if (location) {
	      listener(location);
	    } else {
	      var _location = getCurrentLocation();
	      allKeys = [_location.key];
	      updateLocation(_location);
	    }

	    return function () {
	      changeListeners = changeListeners.filter(function (item) {
	        return item !== listener;
	      });
	    };
	  }

	  function confirmTransitionTo(location, callback) {
	    _AsyncUtils.loopAsync(transitionHooks.length, function (index, next, done) {
	      _runTransitionHook2['default'](transitionHooks[index], location, function (result) {
	        if (result != null) {
	          done(result);
	        } else {
	          next();
	        }
	      });
	    }, function (message) {
	      if (getUserConfirmation && typeof message === 'string') {
	        getUserConfirmation(message, function (ok) {
	          callback(ok !== false);
	        });
	      } else {
	        callback(message !== false);
	      }
	    });
	  }

	  var pendingLocation = undefined;

	  function transitionTo(nextLocation) {
	    if (location && locationsAreEqual(location, nextLocation)) return; // Nothing to do.

	    pendingLocation = nextLocation;

	    confirmTransitionTo(nextLocation, function (ok) {
	      if (pendingLocation !== nextLocation) return; // Transition was interrupted.

	      if (ok) {
	        // treat PUSH to current path like REPLACE to be consistent with browsers
	        if (nextLocation.action === _Actions.PUSH) {
	          var prevPath = createPath(location);
	          var nextPath = createPath(nextLocation);

	          if (nextPath === prevPath && _deepEqual2['default'](location.state, nextLocation.state)) nextLocation.action = _Actions.REPLACE;
	        }

	        if (finishTransition(nextLocation) !== false) updateLocation(nextLocation);
	      } else if (location && nextLocation.action === _Actions.POP) {
	        var prevIndex = allKeys.indexOf(location.key);
	        var nextIndex = allKeys.indexOf(nextLocation.key);

	        if (prevIndex !== -1 && nextIndex !== -1) go(prevIndex - nextIndex); // Restore the URL.
	      }
	    });
	  }

	  function push(location) {
	    transitionTo(createLocation(location, _Actions.PUSH, createKey()));
	  }

	  function replace(location) {
	    transitionTo(createLocation(location, _Actions.REPLACE, createKey()));
	  }

	  function goBack() {
	    go(-1);
	  }

	  function goForward() {
	    go(1);
	  }

	  function createKey() {
	    return createRandomKey(keyLength);
	  }

	  function createPath(location) {
	    if (location == null || typeof location === 'string') return location;

	    var pathname = location.pathname;
	    var search = location.search;
	    var hash = location.hash;

	    var result = pathname;

	    if (search) result += search;

	    if (hash) result += hash;

	    return result;
	  }

	  function createHref(location) {
	    return createPath(location);
	  }

	  function createLocation(location, action) {
	    var key = arguments.length <= 2 || arguments[2] === undefined ? createKey() : arguments[2];

	    if (typeof action === 'object') {
	      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, 'The state (2nd) argument to history.createLocation is deprecated; use a ' + 'location descriptor instead') : undefined;

	      if (typeof location === 'string') location = _PathUtils.parsePath(location);

	      location = _extends({}, location, { state: action });

	      action = key;
	      key = arguments[3] || createKey();
	    }

	    return _createLocation3['default'](location, action, key);
	  }

	  // deprecated
	  function setState(state) {
	    if (location) {
	      updateLocationState(location, state);
	      updateLocation(location);
	    } else {
	      updateLocationState(getCurrentLocation(), state);
	    }
	  }

	  function updateLocationState(location, state) {
	    location.state = _extends({}, location.state, state);
	    saveState(location.key, location.state);
	  }

	  // deprecated
	  function registerTransitionHook(hook) {
	    if (transitionHooks.indexOf(hook) === -1) transitionHooks.push(hook);
	  }

	  // deprecated
	  function unregisterTransitionHook(hook) {
	    transitionHooks = transitionHooks.filter(function (item) {
	      return item !== hook;
	    });
	  }

	  // deprecated
	  function pushState(state, path) {
	    if (typeof path === 'string') path = _PathUtils.parsePath(path);

	    push(_extends({ state: state }, path));
	  }

	  // deprecated
	  function replaceState(state, path) {
	    if (typeof path === 'string') path = _PathUtils.parsePath(path);

	    replace(_extends({ state: state }, path));
	  }

	  return {
	    listenBefore: listenBefore,
	    listen: listen,
	    transitionTo: transitionTo,
	    push: push,
	    replace: replace,
	    go: go,
	    goBack: goBack,
	    goForward: goForward,
	    createKey: createKey,
	    createPath: createPath,
	    createHref: createHref,
	    createLocation: createLocation,

	    setState: _deprecate2['default'](setState, 'setState is deprecated; use location.key to save state instead'),
	    registerTransitionHook: _deprecate2['default'](registerTransitionHook, 'registerTransitionHook is deprecated; use listenBefore instead'),
	    unregisterTransitionHook: _deprecate2['default'](unregisterTransitionHook, 'unregisterTransitionHook is deprecated; use the callback returned from listenBefore instead'),
	    pushState: _deprecate2['default'](pushState, 'pushState is deprecated; use push instead'),
	    replaceState: _deprecate2['default'](replaceState, 'replaceState is deprecated; use replace instead')
	  };
	}

	exports['default'] = createHistory;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var pSlice = Array.prototype.slice;
	var objectKeys = __webpack_require__(24);
	var isArguments = __webpack_require__(25);

	var deepEqual = module.exports = function (actual, expected, opts) {
	  if (!opts) opts = {};
	  // 7.1. All identical values are equivalent, as determined by ===.
	  if (actual === expected) {
	    return true;

	  } else if (actual instanceof Date && expected instanceof Date) {
	    return actual.getTime() === expected.getTime();

	  // 7.3. Other pairs that do not both pass typeof value == 'object',
	  // equivalence is determined by ==.
	  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
	    return opts.strict ? actual === expected : actual == expected;

	  // 7.4. For all other Object pairs, including Array objects, equivalence is
	  // determined by having the same number of owned properties (as verified
	  // with Object.prototype.hasOwnProperty.call), the same set of keys
	  // (although not necessarily the same order), equivalent values for every
	  // corresponding key, and an identical 'prototype' property. Note: this
	  // accounts for both named and indexed properties on Arrays.
	  } else {
	    return objEquiv(actual, expected, opts);
	  }
	}

	function isUndefinedOrNull(value) {
	  return value === null || value === undefined;
	}

	function isBuffer (x) {
	  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
	  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
	    return false;
	  }
	  if (x.length > 0 && typeof x[0] !== 'number') return false;
	  return true;
	}

	function objEquiv(a, b, opts) {
	  var i, key;
	  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
	    return false;
	  // an identical 'prototype' property.
	  if (a.prototype !== b.prototype) return false;
	  //~~~I've managed to break Object.keys through screwy arguments passing.
	  //   Converting to array solves the problem.
	  if (isArguments(a)) {
	    if (!isArguments(b)) {
	      return false;
	    }
	    a = pSlice.call(a);
	    b = pSlice.call(b);
	    return deepEqual(a, b, opts);
	  }
	  if (isBuffer(a)) {
	    if (!isBuffer(b)) {
	      return false;
	    }
	    if (a.length !== b.length) return false;
	    for (i = 0; i < a.length; i++) {
	      if (a[i] !== b[i]) return false;
	    }
	    return true;
	  }
	  try {
	    var ka = objectKeys(a),
	        kb = objectKeys(b);
	  } catch (e) {//happens when one is a string literal and the other isn't
	    return false;
	  }
	  // having the same number of owned properties (keys incorporates
	  // hasOwnProperty)
	  if (ka.length != kb.length)
	    return false;
	  //the same set of keys (although not necessarily the same order),
	  ka.sort();
	  kb.sort();
	  //~~~cheap key test
	  for (i = ka.length - 1; i >= 0; i--) {
	    if (ka[i] != kb[i])
	      return false;
	  }
	  //equivalent values for every corresponding key, and
	  //~~~possibly expensive deep test
	  for (i = ka.length - 1; i >= 0; i--) {
	    key = ka[i];
	    if (!deepEqual(a[key], b[key], opts)) return false;
	  }
	  return typeof a === typeof b;
	}


/***/ },
/* 24 */
/***/ function(module, exports) {

	exports = module.exports = typeof Object.keys === 'function'
	  ? Object.keys : shim;

	exports.shim = shim;
	function shim (obj) {
	  var keys = [];
	  for (var key in obj) keys.push(key);
	  return keys;
	}


/***/ },
/* 25 */
/***/ function(module, exports) {

	var supportsArgumentsClass = (function(){
	  return Object.prototype.toString.call(arguments)
	})() == '[object Arguments]';

	exports = module.exports = supportsArgumentsClass ? supported : unsupported;

	exports.supported = supported;
	function supported(object) {
	  return Object.prototype.toString.call(object) == '[object Arguments]';
	};

	exports.unsupported = unsupported;
	function unsupported(object){
	  return object &&
	    typeof object == 'object' &&
	    typeof object.length == 'number' &&
	    Object.prototype.hasOwnProperty.call(object, 'callee') &&
	    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
	    false;
	};


/***/ },
/* 26 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	var _slice = Array.prototype.slice;
	exports.loopAsync = loopAsync;

	function loopAsync(turns, work, callback) {
	  var currentTurn = 0,
	      isDone = false;
	  var sync = false,
	      hasNext = false,
	      doneArgs = undefined;

	  function done() {
	    isDone = true;
	    if (sync) {
	      // Iterate instead of recursing if possible.
	      doneArgs = [].concat(_slice.call(arguments));
	      return;
	    }

	    callback.apply(this, arguments);
	  }

	  function next() {
	    if (isDone) {
	      return;
	    }

	    hasNext = true;
	    if (sync) {
	      // Iterate instead of recursing if possible.
	      return;
	    }

	    sync = true;

	    while (!isDone && currentTurn < turns && hasNext) {
	      hasNext = false;
	      work.call(this, currentTurn++, next, done);
	    }

	    sync = false;

	    if (isDone) {
	      // This means the loop finished synchronously.
	      callback.apply(this, doneArgs);
	      return;
	    }

	    if (currentTurn >= turns && hasNext) {
	      isDone = true;
	      callback();
	    }
	  }

	  next();
	}

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(15);

	var _warning2 = _interopRequireDefault(_warning);

	var _Actions = __webpack_require__(16);

	var _PathUtils = __webpack_require__(17);

	function createLocation() {
	  var location = arguments.length <= 0 || arguments[0] === undefined ? '/' : arguments[0];
	  var action = arguments.length <= 1 || arguments[1] === undefined ? _Actions.POP : arguments[1];
	  var key = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

	  var _fourthArg = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

	  if (typeof location === 'string') location = _PathUtils.parsePath(location);

	  if (typeof action === 'object') {
	    process.env.NODE_ENV !== 'production' ? _warning2['default'](false, 'The state (2nd) argument to createLocation is deprecated; use a ' + 'location descriptor instead') : undefined;

	    location = _extends({}, location, { state: action });

	    action = key || _Actions.POP;
	    key = _fourthArg;
	  }

	  var pathname = location.pathname || '/';
	  var search = location.search || '';
	  var hash = location.hash || '';
	  var state = location.state || null;

	  return {
	    pathname: pathname,
	    search: search,
	    hash: hash,
	    state: state,
	    action: action,
	    key: key
	  };
	}

	exports['default'] = createLocation;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(15);

	var _warning2 = _interopRequireDefault(_warning);

	function runTransitionHook(hook, location, callback) {
	  var result = hook(location, callback);

	  if (hook.length < 2) {
	    // Assume the hook runs synchronously and automatically
	    // call the callback with the return value.
	    callback(result);
	  } else {
	    process.env.NODE_ENV !== 'production' ? _warning2['default'](result === undefined, 'You should not "return" in a transition hook with a callback argument; call the callback instead') : undefined;
	  }
	}

	exports['default'] = runTransitionHook;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(15);

	var _warning2 = _interopRequireDefault(_warning);

	function deprecate(fn, message) {
	  return function () {
	    process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] ' + message) : undefined;
	    return fn.apply(this, arguments);
	  };
	}

	exports['default'] = deprecate;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(15);

	var _warning2 = _interopRequireDefault(_warning);

	var _queryString = __webpack_require__(31);

	var _runTransitionHook = __webpack_require__(28);

	var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

	var _PathUtils = __webpack_require__(17);

	var _deprecate = __webpack_require__(29);

	var _deprecate2 = _interopRequireDefault(_deprecate);

	var SEARCH_BASE_KEY = '$searchBase';

	function defaultStringifyQuery(query) {
	  return _queryString.stringify(query).replace(/%20/g, '+');
	}

	var defaultParseQueryString = _queryString.parse;

	function isNestedObject(object) {
	  for (var p in object) {
	    if (Object.prototype.hasOwnProperty.call(object, p) && typeof object[p] === 'object' && !Array.isArray(object[p]) && object[p] !== null) return true;
	  }return false;
	}

	/**
	 * Returns a new createHistory function that may be used to create
	 * history objects that know how to handle URL queries.
	 */
	function useQueries(createHistory) {
	  return function () {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    var history = createHistory(options);

	    var stringifyQuery = options.stringifyQuery;
	    var parseQueryString = options.parseQueryString;

	    if (typeof stringifyQuery !== 'function') stringifyQuery = defaultStringifyQuery;

	    if (typeof parseQueryString !== 'function') parseQueryString = defaultParseQueryString;

	    function addQuery(location) {
	      if (location.query == null) {
	        var search = location.search;

	        location.query = parseQueryString(search.substring(1));
	        location[SEARCH_BASE_KEY] = { search: search, searchBase: '' };
	      }

	      // TODO: Instead of all the book-keeping here, this should just strip the
	      // stringified query from the search.

	      return location;
	    }

	    function appendQuery(location, query) {
	      var _extends2;

	      var searchBaseSpec = location[SEARCH_BASE_KEY];
	      var queryString = query ? stringifyQuery(query) : '';
	      if (!searchBaseSpec && !queryString) {
	        return location;
	      }

	      process.env.NODE_ENV !== 'production' ? _warning2['default'](stringifyQuery !== defaultStringifyQuery || !isNestedObject(query), 'useQueries does not stringify nested query objects by default; ' + 'use a custom stringifyQuery function') : undefined;

	      if (typeof location === 'string') location = _PathUtils.parsePath(location);

	      var searchBase = undefined;
	      if (searchBaseSpec && location.search === searchBaseSpec.search) {
	        searchBase = searchBaseSpec.searchBase;
	      } else {
	        searchBase = location.search || '';
	      }

	      var search = searchBase;
	      if (queryString) {
	        search += (search ? '&' : '?') + queryString;
	      }

	      return _extends({}, location, (_extends2 = {
	        search: search
	      }, _extends2[SEARCH_BASE_KEY] = { search: search, searchBase: searchBase }, _extends2));
	    }

	    // Override all read methods with query-aware versions.
	    function listenBefore(hook) {
	      return history.listenBefore(function (location, callback) {
	        _runTransitionHook2['default'](hook, addQuery(location), callback);
	      });
	    }

	    function listen(listener) {
	      return history.listen(function (location) {
	        listener(addQuery(location));
	      });
	    }

	    // Override all write methods with query-aware versions.
	    function push(location) {
	      history.push(appendQuery(location, location.query));
	    }

	    function replace(location) {
	      history.replace(appendQuery(location, location.query));
	    }

	    function createPath(location, query) {
	      process.env.NODE_ENV !== 'production' ? _warning2['default'](!query, 'the query argument to createPath is deprecated; use a location descriptor instead') : undefined;

	      return history.createPath(appendQuery(location, query || location.query));
	    }

	    function createHref(location, query) {
	      process.env.NODE_ENV !== 'production' ? _warning2['default'](!query, 'the query argument to createHref is deprecated; use a location descriptor instead') : undefined;

	      return history.createHref(appendQuery(location, query || location.query));
	    }

	    function createLocation(location) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      var fullLocation = history.createLocation.apply(history, [appendQuery(location, location.query)].concat(args));
	      if (location.query) {
	        fullLocation.query = location.query;
	      }
	      return addQuery(fullLocation);
	    }

	    // deprecated
	    function pushState(state, path, query) {
	      if (typeof path === 'string') path = _PathUtils.parsePath(path);

	      push(_extends({ state: state }, path, { query: query }));
	    }

	    // deprecated
	    function replaceState(state, path, query) {
	      if (typeof path === 'string') path = _PathUtils.parsePath(path);

	      replace(_extends({ state: state }, path, { query: query }));
	    }

	    return _extends({}, history, {
	      listenBefore: listenBefore,
	      listen: listen,
	      push: push,
	      replace: replace,
	      createPath: createPath,
	      createHref: createHref,
	      createLocation: createLocation,

	      pushState: _deprecate2['default'](pushState, 'pushState is deprecated; use push instead'),
	      replaceState: _deprecate2['default'](replaceState, 'replaceState is deprecated; use replace instead')
	    });
	  };
	}

	exports['default'] = useQueries;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strictUriEncode = __webpack_require__(32);

	exports.extract = function (str) {
		return str.split('?')[1] || '';
	};

	exports.parse = function (str) {
		if (typeof str !== 'string') {
			return {};
		}

		str = str.trim().replace(/^(\?|#|&)/, '');

		if (!str) {
			return {};
		}

		return str.split('&').reduce(function (ret, param) {
			var parts = param.replace(/\+/g, ' ').split('=');
			// Firefox (pre 40) decodes `%3D` to `=`
			// https://github.com/sindresorhus/query-string/pull/37
			var key = parts.shift();
			var val = parts.length > 0 ? parts.join('=') : undefined;

			key = decodeURIComponent(key);

			// missing `=` should be `null`:
			// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
			val = val === undefined ? null : decodeURIComponent(val);

			if (!ret.hasOwnProperty(key)) {
				ret[key] = val;
			} else if (Array.isArray(ret[key])) {
				ret[key].push(val);
			} else {
				ret[key] = [ret[key], val];
			}

			return ret;
		}, {});
	};

	exports.stringify = function (obj) {
		return obj ? Object.keys(obj).sort().map(function (key) {
			var val = obj[key];

			if (val === undefined) {
				return '';
			}

			if (val === null) {
				return key;
			}

			if (Array.isArray(val)) {
				return val.slice().sort().map(function (val2) {
					return strictUriEncode(key) + '=' + strictUriEncode(val2);
				}).join('&');
			}

			return strictUriEncode(key) + '=' + strictUriEncode(val);
		}).filter(function (x) {
			return x.length > 0;
		}).join('&') : '';
	};


/***/ },
/* 32 */
/***/ function(module, exports) {

	'use strict';
	module.exports = function (str) {
		return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
			return '%' + c.charCodeAt(0).toString(16).toUpperCase();
		});
	};


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = createTransitionManager;

	var _routerWarning = __webpack_require__(8);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var _Actions = __webpack_require__(16);

	var _computeChangedRoutes2 = __webpack_require__(34);

	var _computeChangedRoutes3 = _interopRequireDefault(_computeChangedRoutes2);

	var _TransitionUtils = __webpack_require__(35);

	var _isActive2 = __webpack_require__(37);

	var _isActive3 = _interopRequireDefault(_isActive2);

	var _getComponents = __webpack_require__(38);

	var _getComponents2 = _interopRequireDefault(_getComponents);

	var _matchRoutes = __webpack_require__(40);

	var _matchRoutes2 = _interopRequireDefault(_matchRoutes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function hasAnyProperties(object) {
	  for (var p in object) {
	    if (Object.prototype.hasOwnProperty.call(object, p)) return true;
	  }return false;
	}

	function createTransitionManager(history, routes) {
	  var state = {};

	  // Signature should be (location, indexOnly), but needs to support (path,
	  // query, indexOnly)
	  function isActive(location) {
	    var indexOnlyOrDeprecatedQuery = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
	    var deprecatedIndexOnly = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

	    var indexOnly = void 0;
	    if (indexOnlyOrDeprecatedQuery && indexOnlyOrDeprecatedQuery !== true || deprecatedIndexOnly !== null) {
	      process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, '`isActive(pathname, query, indexOnly) is deprecated; use `isActive(location, indexOnly)` with a location descriptor instead. http://tiny.cc/router-isActivedeprecated') : void 0;
	      location = { pathname: location, query: indexOnlyOrDeprecatedQuery };
	      indexOnly = deprecatedIndexOnly || false;
	    } else {
	      location = history.createLocation(location);
	      indexOnly = indexOnlyOrDeprecatedQuery;
	    }

	    return (0, _isActive3.default)(location, indexOnly, state.location, state.routes, state.params);
	  }

	  function createLocationFromRedirectInfo(location) {
	    return history.createLocation(location, _Actions.REPLACE);
	  }

	  var partialNextState = void 0;

	  function match(location, callback) {
	    if (partialNextState && partialNextState.location === location) {
	      // Continue from where we left off.
	      finishMatch(partialNextState, callback);
	    } else {
	      (0, _matchRoutes2.default)(routes, location, function (error, nextState) {
	        if (error) {
	          callback(error);
	        } else if (nextState) {
	          finishMatch(_extends({}, nextState, { location: location }), callback);
	        } else {
	          callback();
	        }
	      });
	    }
	  }

	  function finishMatch(nextState, callback) {
	    var _computeChangedRoutes = (0, _computeChangedRoutes3.default)(state, nextState);

	    var leaveRoutes = _computeChangedRoutes.leaveRoutes;
	    var changeRoutes = _computeChangedRoutes.changeRoutes;
	    var enterRoutes = _computeChangedRoutes.enterRoutes;


	    (0, _TransitionUtils.runLeaveHooks)(leaveRoutes, state);

	    // Tear down confirmation hooks for left routes
	    leaveRoutes.filter(function (route) {
	      return enterRoutes.indexOf(route) === -1;
	    }).forEach(removeListenBeforeHooksForRoute);

	    // change and enter hooks are run in series
	    (0, _TransitionUtils.runChangeHooks)(changeRoutes, state, nextState, function (error, redirectInfo) {
	      if (error || redirectInfo) return handleErrorOrRedirect(error, redirectInfo);

	      (0, _TransitionUtils.runEnterHooks)(enterRoutes, nextState, finishEnterHooks);
	    });

	    function finishEnterHooks(error, redirectInfo) {
	      if (error || redirectInfo) return handleErrorOrRedirect(error, redirectInfo);

	      // TODO: Fetch components after state is updated.
	      (0, _getComponents2.default)(nextState, function (error, components) {
	        if (error) {
	          callback(error);
	        } else {
	          // TODO: Make match a pure function and have some other API
	          // for "match and update state".
	          callback(null, null, state = _extends({}, nextState, { components: components }));
	        }
	      });
	    }

	    function handleErrorOrRedirect(error, redirectInfo) {
	      if (error) callback(error);else callback(null, createLocationFromRedirectInfo(redirectInfo));
	    }
	  }

	  var RouteGuid = 1;

	  function getRouteID(route) {
	    var create = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

	    return route.__id__ || create && (route.__id__ = RouteGuid++);
	  }

	  var RouteHooks = Object.create(null);

	  function getRouteHooksForRoutes(routes) {
	    return routes.reduce(function (hooks, route) {
	      hooks.push.apply(hooks, RouteHooks[getRouteID(route)]);
	      return hooks;
	    }, []);
	  }

	  function transitionHook(location, callback) {
	    (0, _matchRoutes2.default)(routes, location, function (error, nextState) {
	      if (nextState == null) {
	        // TODO: We didn't actually match anything, but hang
	        // onto error/nextState so we don't have to matchRoutes
	        // again in the listen callback.
	        callback();
	        return;
	      }

	      // Cache some state here so we don't have to
	      // matchRoutes() again in the listen callback.
	      partialNextState = _extends({}, nextState, { location: location });

	      var hooks = getRouteHooksForRoutes((0, _computeChangedRoutes3.default)(state, partialNextState).leaveRoutes);

	      var result = void 0;
	      for (var i = 0, len = hooks.length; result == null && i < len; ++i) {
	        // Passing the location arg here indicates to
	        // the user that this is a transition hook.
	        result = hooks[i](location);
	      }

	      callback(result);
	    });
	  }

	  /* istanbul ignore next: untestable with Karma */
	  function beforeUnloadHook() {
	    // Synchronously check to see if any route hooks want
	    // to prevent the current window/tab from closing.
	    if (state.routes) {
	      var hooks = getRouteHooksForRoutes(state.routes);

	      var message = void 0;
	      for (var i = 0, len = hooks.length; typeof message !== 'string' && i < len; ++i) {
	        // Passing no args indicates to the user that this is a
	        // beforeunload hook. We don't know the next location.
	        message = hooks[i]();
	      }

	      return message;
	    }
	  }

	  var unlistenBefore = void 0,
	      unlistenBeforeUnload = void 0;

	  function removeListenBeforeHooksForRoute(route) {
	    var routeID = getRouteID(route, false);
	    if (!routeID) {
	      return;
	    }

	    delete RouteHooks[routeID];

	    if (!hasAnyProperties(RouteHooks)) {
	      // teardown transition & beforeunload hooks
	      if (unlistenBefore) {
	        unlistenBefore();
	        unlistenBefore = null;
	      }

	      if (unlistenBeforeUnload) {
	        unlistenBeforeUnload();
	        unlistenBeforeUnload = null;
	      }
	    }
	  }

	  /**
	   * Registers the given hook function to run before leaving the given route.
	   *
	   * During a normal transition, the hook function receives the next location
	   * as its only argument and can return either a prompt message (string) to show the user,
	   * to make sure they want to leave the page; or `false`, to prevent the transition.
	   * Any other return value will have no effect.
	   *
	   * During the beforeunload event (in browsers) the hook receives no arguments.
	   * In this case it must return a prompt message to prevent the transition.
	   *
	   * Returns a function that may be used to unbind the listener.
	   */
	  function listenBeforeLeavingRoute(route, hook) {
	    // TODO: Warn if they register for a route that isn't currently
	    // active. They're probably doing something wrong, like re-creating
	    // route objects on every location change.
	    var routeID = getRouteID(route);
	    var hooks = RouteHooks[routeID];

	    if (!hooks) {
	      var thereWereNoRouteHooks = !hasAnyProperties(RouteHooks);

	      RouteHooks[routeID] = [hook];

	      if (thereWereNoRouteHooks) {
	        // setup transition & beforeunload hooks
	        unlistenBefore = history.listenBefore(transitionHook);

	        if (history.listenBeforeUnload) unlistenBeforeUnload = history.listenBeforeUnload(beforeUnloadHook);
	      }
	    } else {
	      if (hooks.indexOf(hook) === -1) {
	        process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'adding multiple leave hooks for the same route is deprecated; manage multiple confirmations in your own code instead') : void 0;

	        hooks.push(hook);
	      }
	    }

	    return function () {
	      var hooks = RouteHooks[routeID];

	      if (hooks) {
	        var newHooks = hooks.filter(function (item) {
	          return item !== hook;
	        });

	        if (newHooks.length === 0) {
	          removeListenBeforeHooksForRoute(route);
	        } else {
	          RouteHooks[routeID] = newHooks;
	        }
	      }
	    };
	  }

	  /**
	   * This is the API for stateful environments. As the location
	   * changes, we update state and call the listener. We can also
	   * gracefully handle errors and redirects.
	   */
	  function listen(listener) {
	    // TODO: Only use a single history listener. Otherwise we'll
	    // end up with multiple concurrent calls to match.
	    return history.listen(function (location) {
	      if (state.location === location) {
	        listener(null, state);
	      } else {
	        match(location, function (error, redirectLocation, nextState) {
	          if (error) {
	            listener(error);
	          } else if (redirectLocation) {
	            history.transitionTo(redirectLocation);
	          } else if (nextState) {
	            listener(null, nextState);
	          } else {
	            process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'Location "%s" did not match any routes', location.pathname + location.search + location.hash) : void 0;
	          }
	        });
	      }
	    });
	  }

	  return {
	    isActive: isActive,
	    match: match,
	    listenBeforeLeavingRoute: listenBeforeLeavingRoute,
	    listen: listen
	  };
	}

	//export default useRoutes

	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _PatternUtils = __webpack_require__(11);

	function routeParamsChanged(route, prevState, nextState) {
	  if (!route.path) return false;

	  var paramNames = (0, _PatternUtils.getParamNames)(route.path);

	  return paramNames.some(function (paramName) {
	    return prevState.params[paramName] !== nextState.params[paramName];
	  });
	}

	/**
	 * Returns an object of { leaveRoutes, changeRoutes, enterRoutes } determined by
	 * the change from prevState to nextState. We leave routes if either
	 * 1) they are not in the next state or 2) they are in the next state
	 * but their params have changed (i.e. /users/123 => /users/456).
	 *
	 * leaveRoutes are ordered starting at the leaf route of the tree
	 * we're leaving up to the common parent route. enterRoutes are ordered
	 * from the top of the tree we're entering down to the leaf route.
	 *
	 * changeRoutes are any routes that didn't leave or enter during
	 * the transition.
	 */
	function computeChangedRoutes(prevState, nextState) {
	  var prevRoutes = prevState && prevState.routes;
	  var nextRoutes = nextState.routes;

	  var leaveRoutes = void 0,
	      changeRoutes = void 0,
	      enterRoutes = void 0;
	  if (prevRoutes) {
	    (function () {
	      var parentIsLeaving = false;
	      leaveRoutes = prevRoutes.filter(function (route) {
	        if (parentIsLeaving) {
	          return true;
	        } else {
	          var isLeaving = nextRoutes.indexOf(route) === -1 || routeParamsChanged(route, prevState, nextState);
	          if (isLeaving) parentIsLeaving = true;
	          return isLeaving;
	        }
	      });

	      // onLeave hooks start at the leaf route.
	      leaveRoutes.reverse();

	      enterRoutes = [];
	      changeRoutes = [];

	      nextRoutes.forEach(function (route) {
	        var isNew = prevRoutes.indexOf(route) === -1;
	        var paramsChanged = leaveRoutes.indexOf(route) !== -1;

	        if (isNew || paramsChanged) enterRoutes.push(route);else changeRoutes.push(route);
	      });
	    })();
	  } else {
	    leaveRoutes = [];
	    changeRoutes = [];
	    enterRoutes = nextRoutes;
	  }

	  return {
	    leaveRoutes: leaveRoutes,
	    changeRoutes: changeRoutes,
	    enterRoutes: enterRoutes
	  };
	}

	exports.default = computeChangedRoutes;
	module.exports = exports['default'];

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports.runEnterHooks = runEnterHooks;
	exports.runChangeHooks = runChangeHooks;
	exports.runLeaveHooks = runLeaveHooks;

	var _AsyncUtils = __webpack_require__(36);

	var _routerWarning = __webpack_require__(8);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function createTransitionHook(hook, route, asyncArity) {
	  return function () {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    hook.apply(route, args);

	    if (hook.length < asyncArity) {
	      var callback = args[args.length - 1];
	      // Assume hook executes synchronously and
	      // automatically call the callback.
	      callback();
	    }
	  };
	}

	function getEnterHooks(routes) {
	  return routes.reduce(function (hooks, route) {
	    if (route.onEnter) hooks.push(createTransitionHook(route.onEnter, route, 3));

	    return hooks;
	  }, []);
	}

	function getChangeHooks(routes) {
	  return routes.reduce(function (hooks, route) {
	    if (route.onChange) hooks.push(createTransitionHook(route.onChange, route, 4));
	    return hooks;
	  }, []);
	}

	function runTransitionHooks(length, iter, callback) {
	  if (!length) {
	    callback();
	    return;
	  }

	  var redirectInfo = void 0;
	  function replace(location, deprecatedPathname, deprecatedQuery) {
	    if (deprecatedPathname) {
	      process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, '`replaceState(state, pathname, query) is deprecated; use `replace(location)` with a location descriptor instead. http://tiny.cc/router-isActivedeprecated') : void 0;
	      redirectInfo = {
	        pathname: deprecatedPathname,
	        query: deprecatedQuery,
	        state: location
	      };

	      return;
	    }

	    redirectInfo = location;
	  }

	  (0, _AsyncUtils.loopAsync)(length, function (index, next, done) {
	    iter(index, replace, function (error) {
	      if (error || redirectInfo) {
	        done(error, redirectInfo); // No need to continue.
	      } else {
	        next();
	      }
	    });
	  }, callback);
	}

	/**
	 * Runs all onEnter hooks in the given array of routes in order
	 * with onEnter(nextState, replace, callback) and calls
	 * callback(error, redirectInfo) when finished. The first hook
	 * to use replace short-circuits the loop.
	 *
	 * If a hook needs to run asynchronously, it may use the callback
	 * function. However, doing so will cause the transition to pause,
	 * which could lead to a non-responsive UI if the hook is slow.
	 */
	function runEnterHooks(routes, nextState, callback) {
	  var hooks = getEnterHooks(routes);
	  return runTransitionHooks(hooks.length, function (index, replace, next) {
	    hooks[index](nextState, replace, next);
	  }, callback);
	}

	/**
	 * Runs all onChange hooks in the given array of routes in order
	 * with onChange(prevState, nextState, replace, callback) and calls
	 * callback(error, redirectInfo) when finished. The first hook
	 * to use replace short-circuits the loop.
	 *
	 * If a hook needs to run asynchronously, it may use the callback
	 * function. However, doing so will cause the transition to pause,
	 * which could lead to a non-responsive UI if the hook is slow.
	 */
	function runChangeHooks(routes, state, nextState, callback) {
	  var hooks = getChangeHooks(routes);
	  return runTransitionHooks(hooks.length, function (index, replace, next) {
	    hooks[index](state, nextState, replace, next);
	  }, callback);
	}

	/**
	 * Runs all onLeave hooks in the given array of routes in order.
	 */
	function runLeaveHooks(routes, prevState) {
	  for (var i = 0, len = routes.length; i < len; ++i) {
	    if (routes[i].onLeave) routes[i].onLeave.call(routes[i], prevState);
	  }
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 36 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports.loopAsync = loopAsync;
	exports.mapAsync = mapAsync;
	function loopAsync(turns, work, callback) {
	  var currentTurn = 0,
	      isDone = false;
	  var sync = false,
	      hasNext = false,
	      doneArgs = void 0;

	  function done() {
	    isDone = true;
	    if (sync) {
	      // Iterate instead of recursing if possible.
	      doneArgs = [].concat(Array.prototype.slice.call(arguments));
	      return;
	    }

	    callback.apply(this, arguments);
	  }

	  function next() {
	    if (isDone) {
	      return;
	    }

	    hasNext = true;
	    if (sync) {
	      // Iterate instead of recursing if possible.
	      return;
	    }

	    sync = true;

	    while (!isDone && currentTurn < turns && hasNext) {
	      hasNext = false;
	      work.call(this, currentTurn++, next, done);
	    }

	    sync = false;

	    if (isDone) {
	      // This means the loop finished synchronously.
	      callback.apply(this, doneArgs);
	      return;
	    }

	    if (currentTurn >= turns && hasNext) {
	      isDone = true;
	      callback();
	    }
	  }

	  next();
	}

	function mapAsync(array, work, callback) {
	  var length = array.length;
	  var values = [];

	  if (length === 0) return callback(null, values);

	  var isDone = false,
	      doneCount = 0;

	  function done(index, error, value) {
	    if (isDone) return;

	    if (error) {
	      isDone = true;
	      callback(error);
	    } else {
	      values[index] = value;

	      isDone = ++doneCount === length;

	      if (isDone) callback(null, values);
	    }
	  }

	  array.forEach(function (item, index) {
	    work(item, index, function (error, value) {
	      done(index, error, value);
	    });
	  });
	}

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports.default = isActive;

	var _PatternUtils = __webpack_require__(11);

	function deepEqual(a, b) {
	  if (a == b) return true;

	  if (a == null || b == null) return false;

	  if (Array.isArray(a)) {
	    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
	      return deepEqual(item, b[index]);
	    });
	  }

	  if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) === 'object') {
	    for (var p in a) {
	      if (!Object.prototype.hasOwnProperty.call(a, p)) {
	        continue;
	      }

	      if (a[p] === undefined) {
	        if (b[p] !== undefined) {
	          return false;
	        }
	      } else if (!Object.prototype.hasOwnProperty.call(b, p)) {
	        return false;
	      } else if (!deepEqual(a[p], b[p])) {
	        return false;
	      }
	    }

	    return true;
	  }

	  return String(a) === String(b);
	}

	/**
	 * Returns true if the current pathname matches the supplied one, net of
	 * leading and trailing slash normalization. This is sufficient for an
	 * indexOnly route match.
	 */
	function pathIsActive(pathname, currentPathname) {
	  // Normalize leading slash for consistency. Leading slash on pathname has
	  // already been normalized in isActive. See caveat there.
	  if (currentPathname.charAt(0) !== '/') {
	    currentPathname = '/' + currentPathname;
	  }

	  // Normalize the end of both path names too. Maybe `/foo/` shouldn't show
	  // `/foo` as active, but in this case, we would already have failed the
	  // match.
	  if (pathname.charAt(pathname.length - 1) !== '/') {
	    pathname += '/';
	  }
	  if (currentPathname.charAt(currentPathname.length - 1) !== '/') {
	    currentPathname += '/';
	  }

	  return currentPathname === pathname;
	}

	/**
	 * Returns true if the given pathname matches the active routes and params.
	 */
	function routeIsActive(pathname, routes, params) {
	  var remainingPathname = pathname,
	      paramNames = [],
	      paramValues = [];

	  // for...of would work here but it's probably slower post-transpilation.
	  for (var i = 0, len = routes.length; i < len; ++i) {
	    var route = routes[i];
	    var pattern = route.path || '';

	    if (pattern.charAt(0) === '/') {
	      remainingPathname = pathname;
	      paramNames = [];
	      paramValues = [];
	    }

	    if (remainingPathname !== null && pattern) {
	      var matched = (0, _PatternUtils.matchPattern)(pattern, remainingPathname);
	      if (matched) {
	        remainingPathname = matched.remainingPathname;
	        paramNames = [].concat(paramNames, matched.paramNames);
	        paramValues = [].concat(paramValues, matched.paramValues);
	      } else {
	        remainingPathname = null;
	      }

	      if (remainingPathname === '') {
	        // We have an exact match on the route. Just check that all the params
	        // match.
	        // FIXME: This doesn't work on repeated params.
	        return paramNames.every(function (paramName, index) {
	          return String(paramValues[index]) === String(params[paramName]);
	        });
	      }
	    }
	  }

	  return false;
	}

	/**
	 * Returns true if all key/value pairs in the given query are
	 * currently active.
	 */
	function queryIsActive(query, activeQuery) {
	  if (activeQuery == null) return query == null;

	  if (query == null) return true;

	  return deepEqual(query, activeQuery);
	}

	/**
	 * Returns true if a <Link> to the given pathname/query combination is
	 * currently active.
	 */
	function isActive(_ref, indexOnly, currentLocation, routes, params) {
	  var pathname = _ref.pathname;
	  var query = _ref.query;

	  if (currentLocation == null) return false;

	  // TODO: This is a bit ugly. It keeps around support for treating pathnames
	  // without preceding slashes as absolute paths, but possibly also works
	  // around the same quirks with basenames as in matchRoutes.
	  if (pathname.charAt(0) !== '/') {
	    pathname = '/' + pathname;
	  }

	  if (!pathIsActive(pathname, currentLocation.pathname)) {
	    // The path check is necessary and sufficient for indexOnly, but otherwise
	    // we still need to check the routes.
	    if (indexOnly || !routeIsActive(pathname, routes, params)) {
	      return false;
	    }
	  }

	  return queryIsActive(query, currentLocation.query);
	}
	module.exports = exports['default'];

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _AsyncUtils = __webpack_require__(36);

	var _makeStateWithLocation = __webpack_require__(39);

	var _makeStateWithLocation2 = _interopRequireDefault(_makeStateWithLocation);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getComponentsForRoute(nextState, route, callback) {
	  if (route.component || route.components) {
	    callback(null, route.component || route.components);
	    return;
	  }

	  var getComponent = route.getComponent || route.getComponents;
	  if (!getComponent) {
	    callback();
	    return;
	  }

	  var location = nextState.location;

	  var nextStateWithLocation = (0, _makeStateWithLocation2.default)(nextState, location);

	  getComponent.call(route, nextStateWithLocation, callback);
	}

	/**
	 * Asynchronously fetches all components needed for the given router
	 * state and calls callback(error, components) when finished.
	 *
	 * Note: This operation may finish synchronously if no routes have an
	 * asynchronous getComponents method.
	 */
	function getComponents(nextState, callback) {
	  (0, _AsyncUtils.mapAsync)(nextState.routes, function (route, index, callback) {
	    getComponentsForRoute(nextState, route, callback);
	  }, callback);
	}

	exports.default = getComponents;
	module.exports = exports['default'];

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = makeStateWithLocation;

	var _deprecateObjectProperties = __webpack_require__(7);

	var _routerWarning = __webpack_require__(8);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function makeStateWithLocation(state, location) {
	  if (process.env.NODE_ENV !== 'production' && _deprecateObjectProperties.canUseMembrane) {
	    var stateWithLocation = _extends({}, state);

	    // I don't use deprecateObjectProperties here because I want to keep the
	    // same code path between development and production, in that we just
	    // assign extra properties to the copy of the state object in both cases.

	    var _loop = function _loop(prop) {
	      if (!Object.prototype.hasOwnProperty.call(location, prop)) {
	        return 'continue';
	      }

	      Object.defineProperty(stateWithLocation, prop, {
	        get: function get() {
	          process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'Accessing location properties directly from the first argument to `getComponent`, `getComponents`, `getChildRoutes`, and `getIndexRoute` is deprecated. That argument is now the router state (`nextState` or `partialNextState`) rather than the location. To access the location, use `nextState.location` or `partialNextState.location`.') : void 0;
	          return location[prop];
	        }
	      });
	    };

	    for (var prop in location) {
	      var _ret = _loop(prop);

	      if (_ret === 'continue') continue;
	    }

	    return stateWithLocation;
	  }

	  return _extends({}, state, location);
	}
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports.default = matchRoutes;

	var _AsyncUtils = __webpack_require__(36);

	var _makeStateWithLocation = __webpack_require__(39);

	var _makeStateWithLocation2 = _interopRequireDefault(_makeStateWithLocation);

	var _PatternUtils = __webpack_require__(11);

	var _routerWarning = __webpack_require__(8);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var _RouteUtils = __webpack_require__(4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getChildRoutes(route, location, paramNames, paramValues, callback) {
	  if (route.childRoutes) {
	    return [null, route.childRoutes];
	  }
	  if (!route.getChildRoutes) {
	    return [];
	  }

	  var sync = true,
	      result = void 0;

	  var partialNextState = {
	    location: location,
	    params: createParams(paramNames, paramValues)
	  };

	  var partialNextStateWithLocation = (0, _makeStateWithLocation2.default)(partialNextState, location);

	  route.getChildRoutes(partialNextStateWithLocation, function (error, childRoutes) {
	    childRoutes = !error && (0, _RouteUtils.createRoutes)(childRoutes);
	    if (sync) {
	      result = [error, childRoutes];
	      return;
	    }

	    callback(error, childRoutes);
	  });

	  sync = false;
	  return result; // Might be undefined.
	}

	function getIndexRoute(route, location, paramNames, paramValues, callback) {
	  if (route.indexRoute) {
	    callback(null, route.indexRoute);
	  } else if (route.getIndexRoute) {
	    var partialNextState = {
	      location: location,
	      params: createParams(paramNames, paramValues)
	    };

	    var partialNextStateWithLocation = (0, _makeStateWithLocation2.default)(partialNextState, location);

	    route.getIndexRoute(partialNextStateWithLocation, function (error, indexRoute) {
	      callback(error, !error && (0, _RouteUtils.createRoutes)(indexRoute)[0]);
	    });
	  } else if (route.childRoutes) {
	    (function () {
	      var pathless = route.childRoutes.filter(function (childRoute) {
	        return !childRoute.path;
	      });

	      (0, _AsyncUtils.loopAsync)(pathless.length, function (index, next, done) {
	        getIndexRoute(pathless[index], location, paramNames, paramValues, function (error, indexRoute) {
	          if (error || indexRoute) {
	            var routes = [pathless[index]].concat(Array.isArray(indexRoute) ? indexRoute : [indexRoute]);
	            done(error, routes);
	          } else {
	            next();
	          }
	        });
	      }, function (err, routes) {
	        callback(null, routes);
	      });
	    })();
	  } else {
	    callback();
	  }
	}

	function assignParams(params, paramNames, paramValues) {
	  return paramNames.reduce(function (params, paramName, index) {
	    var paramValue = paramValues && paramValues[index];

	    if (Array.isArray(params[paramName])) {
	      params[paramName].push(paramValue);
	    } else if (paramName in params) {
	      params[paramName] = [params[paramName], paramValue];
	    } else {
	      params[paramName] = paramValue;
	    }

	    return params;
	  }, params);
	}

	function createParams(paramNames, paramValues) {
	  return assignParams({}, paramNames, paramValues);
	}

	function matchRouteDeep(route, location, remainingPathname, paramNames, paramValues, callback) {
	  var pattern = route.path || '';

	  if (pattern.charAt(0) === '/') {
	    remainingPathname = location.pathname;
	    paramNames = [];
	    paramValues = [];
	  }

	  // Only try to match the path if the route actually has a pattern, and if
	  // we're not just searching for potential nested absolute paths.
	  if (remainingPathname !== null && pattern) {
	    try {
	      var matched = (0, _PatternUtils.matchPattern)(pattern, remainingPathname);
	      if (matched) {
	        remainingPathname = matched.remainingPathname;
	        paramNames = [].concat(paramNames, matched.paramNames);
	        paramValues = [].concat(paramValues, matched.paramValues);
	      } else {
	        remainingPathname = null;
	      }
	    } catch (error) {
	      callback(error);
	    }

	    // By assumption, pattern is non-empty here, which is the prerequisite for
	    // actually terminating a match.
	    if (remainingPathname === '') {
	      var _ret2 = function () {
	        var match = {
	          routes: [route],
	          params: createParams(paramNames, paramValues)
	        };

	        getIndexRoute(route, location, paramNames, paramValues, function (error, indexRoute) {
	          if (error) {
	            callback(error);
	          } else {
	            if (Array.isArray(indexRoute)) {
	              var _match$routes;

	              process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(indexRoute.every(function (route) {
	                return !route.path;
	              }), 'Index routes should not have paths') : void 0;
	              (_match$routes = match.routes).push.apply(_match$routes, indexRoute);
	            } else if (indexRoute) {
	              process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(!indexRoute.path, 'Index routes should not have paths') : void 0;
	              match.routes.push(indexRoute);
	            }

	            callback(null, match);
	          }
	        });

	        return {
	          v: void 0
	        };
	      }();

	      if ((typeof _ret2 === 'undefined' ? 'undefined' : _typeof(_ret2)) === "object") return _ret2.v;
	    }
	  }

	  if (remainingPathname != null || route.childRoutes) {
	    // Either a) this route matched at least some of the path or b)
	    // we don't have to load this route's children asynchronously. In
	    // either case continue checking for matches in the subtree.
	    var onChildRoutes = function onChildRoutes(error, childRoutes) {
	      if (error) {
	        callback(error);
	      } else if (childRoutes) {
	        // Check the child routes to see if any of them match.
	        matchRoutes(childRoutes, location, function (error, match) {
	          if (error) {
	            callback(error);
	          } else if (match) {
	            // A child route matched! Augment the match and pass it up the stack.
	            match.routes.unshift(route);
	            callback(null, match);
	          } else {
	            callback();
	          }
	        }, remainingPathname, paramNames, paramValues);
	      } else {
	        callback();
	      }
	    };

	    var result = getChildRoutes(route, location, paramNames, paramValues, onChildRoutes);
	    if (result) {
	      onChildRoutes.apply(undefined, result);
	    }
	  } else {
	    callback();
	  }
	}

	/**
	 * Asynchronously matches the given location to a set of routes and calls
	 * callback(error, state) when finished. The state object will have the
	 * following properties:
	 *
	 * - routes       An array of routes that matched, in hierarchical order
	 * - params       An object of URL parameters
	 *
	 * Note: This operation may finish synchronously if no routes have an
	 * asynchronous getChildRoutes method.
	 */
	function matchRoutes(routes, location, callback, remainingPathname) {
	  var paramNames = arguments.length <= 4 || arguments[4] === undefined ? [] : arguments[4];
	  var paramValues = arguments.length <= 5 || arguments[5] === undefined ? [] : arguments[5];

	  if (remainingPathname === undefined) {
	    // TODO: This is a little bit ugly, but it works around a quirk in history
	    // that strips the leading slash from pathnames when using basenames with
	    // trailing slashes.
	    if (location.pathname.charAt(0) !== '/') {
	      location = _extends({}, location, {
	        pathname: '/' + location.pathname
	      });
	    }
	    remainingPathname = location.pathname;
	  }

	  (0, _AsyncUtils.loopAsync)(routes.length, function (index, next, done) {
	    matchRouteDeep(routes[index], location, remainingPathname, paramNames, paramValues, function (error, match) {
	      if (error || match) {
	        done(error, match);
	      } else {
	        next();
	      }
	    });
	  }, callback);
	}
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _invariant = __webpack_require__(12);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _deprecateObjectProperties = __webpack_require__(7);

	var _deprecateObjectProperties2 = _interopRequireDefault(_deprecateObjectProperties);

	var _getRouteParams = __webpack_require__(42);

	var _getRouteParams2 = _interopRequireDefault(_getRouteParams);

	var _RouteUtils = __webpack_require__(4);

	var _routerWarning = __webpack_require__(8);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _React$PropTypes = _react2.default.PropTypes;
	var array = _React$PropTypes.array;
	var func = _React$PropTypes.func;
	var object = _React$PropTypes.object;

	/**
	 * A <RouterContext> renders the component tree for a given router state
	 * and sets the history object and the current location in context.
	 */

	var RouterContext = _react2.default.createClass({
	  displayName: 'RouterContext',


	  propTypes: {
	    history: object,
	    router: object.isRequired,
	    location: object.isRequired,
	    routes: array.isRequired,
	    params: object.isRequired,
	    components: array.isRequired,
	    createElement: func.isRequired
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      createElement: _react2.default.createElement
	    };
	  },


	  childContextTypes: {
	    history: object,
	    location: object.isRequired,
	    router: object.isRequired
	  },

	  getChildContext: function getChildContext() {
	    var _props = this.props;
	    var router = _props.router;
	    var history = _props.history;
	    var location = _props.location;

	    if (!router) {
	      process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, '`<RouterContext>` expects a `router` rather than a `history`') : void 0;

	      router = _extends({}, history, {
	        setRouteLeaveHook: history.listenBeforeLeavingRoute
	      });
	      delete router.listenBeforeLeavingRoute;
	    }

	    if (process.env.NODE_ENV !== 'production') {
	      location = (0, _deprecateObjectProperties2.default)(location, '`context.location` is deprecated, please use a route component\'s `props.location` instead. http://tiny.cc/router-accessinglocation');
	    }

	    return { history: history, location: location, router: router };
	  },
	  createElement: function createElement(component, props) {
	    return component == null ? null : this.props.createElement(component, props);
	  },
	  render: function render() {
	    var _this = this;

	    var _props2 = this.props;
	    var history = _props2.history;
	    var location = _props2.location;
	    var routes = _props2.routes;
	    var params = _props2.params;
	    var components = _props2.components;

	    var element = null;

	    if (components) {
	      element = components.reduceRight(function (element, components, index) {
	        if (components == null) return element; // Don't create new children; use the grandchildren.

	        var route = routes[index];
	        var routeParams = (0, _getRouteParams2.default)(route, params);
	        var props = {
	          history: history,
	          location: location,
	          params: params,
	          route: route,
	          routeParams: routeParams,
	          routes: routes
	        };

	        if ((0, _RouteUtils.isReactChildren)(element)) {
	          props.children = element;
	        } else if (element) {
	          for (var prop in element) {
	            if (Object.prototype.hasOwnProperty.call(element, prop)) props[prop] = element[prop];
	          }
	        }

	        if ((typeof components === 'undefined' ? 'undefined' : _typeof(components)) === 'object') {
	          var elements = {};

	          for (var key in components) {
	            if (Object.prototype.hasOwnProperty.call(components, key)) {
	              // Pass through the key as a prop to createElement to allow
	              // custom createElement functions to know which named component
	              // they're rendering, for e.g. matching up to fetched data.
	              elements[key] = _this.createElement(components[key], _extends({
	                key: key }, props));
	            }
	          }

	          return elements;
	        }

	        return _this.createElement(components, props);
	      }, element);
	    }

	    !(element === null || element === false || _react2.default.isValidElement(element)) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'The root route must render a single element') : (0, _invariant2.default)(false) : void 0;

	    return element;
	  }
	});

	exports.default = RouterContext;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _PatternUtils = __webpack_require__(11);

	/**
	 * Extracts an object of params the given route cares about from
	 * the given params object.
	 */
	function getRouteParams(route, params) {
	  var routeParams = {};

	  if (!route.path) return routeParams;

	  (0, _PatternUtils.getParamNames)(route.path).forEach(function (p) {
	    if (Object.prototype.hasOwnProperty.call(params, p)) {
	      routeParams[p] = params[p];
	    }
	  });

	  return routeParams;
	}

	exports.default = getRouteParams;
	module.exports = exports['default'];

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.createRouterObject = createRouterObject;
	exports.createRoutingHistory = createRoutingHistory;

	var _deprecateObjectProperties = __webpack_require__(7);

	var _deprecateObjectProperties2 = _interopRequireDefault(_deprecateObjectProperties);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function createRouterObject(history, transitionManager) {
	  return _extends({}, history, {
	    setRouteLeaveHook: transitionManager.listenBeforeLeavingRoute,
	    isActive: transitionManager.isActive
	  });
	}

	// deprecated
	function createRoutingHistory(history, transitionManager) {
	  history = _extends({}, history, transitionManager);

	  if (process.env.NODE_ENV !== 'production') {
	    history = (0, _deprecateObjectProperties2.default)(history, '`props.history` and `context.history` are deprecated. Please use `context.router`. http://tiny.cc/router-contextchanges');
	  }

	  return history;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _routerWarning = __webpack_require__(8);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var _invariant = __webpack_require__(12);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _PropTypes = __webpack_require__(5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var _React$PropTypes = _react2.default.PropTypes;
	var bool = _React$PropTypes.bool;
	var object = _React$PropTypes.object;
	var string = _React$PropTypes.string;
	var func = _React$PropTypes.func;
	var oneOfType = _React$PropTypes.oneOfType;


	function isLeftClickEvent(event) {
	  return event.button === 0;
	}

	function isModifiedEvent(event) {
	  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
	}

	// TODO: De-duplicate against hasAnyProperties in createTransitionManager.
	function isEmptyObject(object) {
	  for (var p in object) {
	    if (Object.prototype.hasOwnProperty.call(object, p)) return false;
	  }return true;
	}

	function createLocationDescriptor(to, _ref) {
	  var query = _ref.query;
	  var hash = _ref.hash;
	  var state = _ref.state;

	  if (query || hash || state) {
	    return { pathname: to, query: query, hash: hash, state: state };
	  }

	  return to;
	}

	/**
	 * A <Link> is used to create an <a> element that links to a route.
	 * When that route is active, the link gets the value of its
	 * activeClassName prop.
	 *
	 * For example, assuming you have the following route:
	 *
	 *   <Route path="/posts/:postID" component={Post} />
	 *
	 * You could use the following component to link to that route:
	 *
	 *   <Link to={`/posts/${post.id}`} />
	 *
	 * Links may pass along location state and/or query string parameters
	 * in the state/query props, respectively.
	 *
	 *   <Link ... query={{ show: true }} state={{ the: 'state' }} />
	 */
	var Link = _react2.default.createClass({
	  displayName: 'Link',


	  contextTypes: {
	    router: _PropTypes.routerShape
	  },

	  propTypes: {
	    to: oneOfType([string, object]).isRequired,
	    query: object,
	    hash: string,
	    state: object,
	    activeStyle: object,
	    activeClassName: string,
	    onlyActiveOnIndex: bool.isRequired,
	    onClick: func,
	    target: string
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      onlyActiveOnIndex: false,
	      style: {}
	    };
	  },
	  handleClick: function handleClick(event) {
	    if (this.props.onClick) this.props.onClick(event);

	    if (event.defaultPrevented) return;

	    !this.context.router ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, '<Link>s rendered outside of a router context cannot navigate.') : (0, _invariant2.default)(false) : void 0;

	    if (isModifiedEvent(event) || !isLeftClickEvent(event)) return;

	    // If target prop is set (e.g. to "_blank"), let browser handle link.
	    /* istanbul ignore if: untestable with Karma */
	    if (this.props.target) return;

	    event.preventDefault();

	    var _props = this.props;
	    var to = _props.to;
	    var query = _props.query;
	    var hash = _props.hash;
	    var state = _props.state;

	    var location = createLocationDescriptor(to, { query: query, hash: hash, state: state });

	    this.context.router.push(location);
	  },
	  render: function render() {
	    var _props2 = this.props;
	    var to = _props2.to;
	    var query = _props2.query;
	    var hash = _props2.hash;
	    var state = _props2.state;
	    var activeClassName = _props2.activeClassName;
	    var activeStyle = _props2.activeStyle;
	    var onlyActiveOnIndex = _props2.onlyActiveOnIndex;

	    var props = _objectWithoutProperties(_props2, ['to', 'query', 'hash', 'state', 'activeClassName', 'activeStyle', 'onlyActiveOnIndex']);

	    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(!(query || hash || state), 'the `query`, `hash`, and `state` props on `<Link>` are deprecated, use `<Link to={{ pathname, query, hash, state }}/>. http://tiny.cc/router-isActivedeprecated') : void 0;

	    // Ignore if rendered outside the context of router, simplifies unit testing.
	    var router = this.context.router;


	    if (router) {
	      var location = createLocationDescriptor(to, { query: query, hash: hash, state: state });
	      props.href = router.createHref(location);

	      if (activeClassName || activeStyle != null && !isEmptyObject(activeStyle)) {
	        if (router.isActive(location, onlyActiveOnIndex)) {
	          if (activeClassName) {
	            if (props.className) {
	              props.className += ' ' + activeClassName;
	            } else {
	              props.className = activeClassName;
	            }
	          }

	          if (activeStyle) props.style = _extends({}, props.style, activeStyle);
	        }
	      }
	    }

	    return _react2.default.createElement('a', _extends({}, props, { onClick: this.handleClick }));
	  }
	});

	exports.default = Link;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Link = __webpack_require__(44);

	var _Link2 = _interopRequireDefault(_Link);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * An <IndexLink> is used to link to an <IndexRoute>.
	 */
	var IndexLink = _react2.default.createClass({
	  displayName: 'IndexLink',
	  render: function render() {
	    return _react2.default.createElement(_Link2.default, _extends({}, this.props, { onlyActiveOnIndex: true }));
	  }
	});

	exports.default = IndexLink;
	module.exports = exports['default'];

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = withRouter;

	var _invariant = __webpack_require__(12);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _hoistNonReactStatics = __webpack_require__(47);

	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

	var _PropTypes = __webpack_require__(5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getDisplayName(WrappedComponent) {
	  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
	}

	function withRouter(WrappedComponent, options) {
	  var withRef = options && options.withRef;

	  var WithRouter = _react2.default.createClass({
	    displayName: 'WithRouter',

	    contextTypes: { router: _PropTypes.routerShape },
	    propTypes: { router: _PropTypes.routerShape },

	    getWrappedInstance: function getWrappedInstance() {
	      !withRef ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'To access the wrapped instance, you need to specify ' + '`{ withRef: true }` as the second argument of the withRouter() call.') : (0, _invariant2.default)(false) : void 0;

	      return this.wrappedInstance;
	    },
	    render: function render() {
	      var _this = this;

	      var router = this.props.router || this.context.router;
	      var props = _extends({}, this.props, { router: router });

	      if (withRef) {
	        props.ref = function (c) {
	          _this.wrappedInstance = c;
	        };
	      }

	      return _react2.default.createElement(WrappedComponent, props);
	    }
	  });

	  WithRouter.displayName = 'withRouter(' + getDisplayName(WrappedComponent) + ')';
	  WithRouter.WrappedComponent = WrappedComponent;

	  return (0, _hoistNonReactStatics2.default)(WithRouter, WrappedComponent);
	}
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 47 */
/***/ function(module, exports) {

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	'use strict';

	var REACT_STATICS = {
	    childContextTypes: true,
	    contextTypes: true,
	    defaultProps: true,
	    displayName: true,
	    getDefaultProps: true,
	    mixins: true,
	    propTypes: true,
	    type: true
	};

	var KNOWN_STATICS = {
	    name: true,
	    length: true,
	    prototype: true,
	    caller: true,
	    arguments: true,
	    arity: true
	};

	var isGetOwnPropertySymbolsAvailable = typeof Object.getOwnPropertySymbols === 'function';

	module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, customStatics) {
	    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
	        var keys = Object.getOwnPropertyNames(sourceComponent);

	        /* istanbul ignore else */
	        if (isGetOwnPropertySymbolsAvailable) {
	            keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent));
	        }

	        for (var i = 0; i < keys.length; ++i) {
	            if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]] && (!customStatics || !customStatics[keys[i]])) {
	                try {
	                    targetComponent[keys[i]] = sourceComponent[keys[i]];
	                } catch (error) {

	                }
	            }
	        }
	    }

	    return targetComponent;
	};


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _routerWarning = __webpack_require__(8);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var _invariant = __webpack_require__(12);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _Redirect = __webpack_require__(49);

	var _Redirect2 = _interopRequireDefault(_Redirect);

	var _InternalPropTypes = __webpack_require__(10);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _React$PropTypes = _react2.default.PropTypes;
	var string = _React$PropTypes.string;
	var object = _React$PropTypes.object;

	/**
	 * An <IndexRedirect> is used to redirect from an indexRoute.
	 */

	var IndexRedirect = _react2.default.createClass({
	  displayName: 'IndexRedirect',


	  statics: {
	    createRouteFromReactElement: function createRouteFromReactElement(element, parentRoute) {
	      /* istanbul ignore else: sanity check */
	      if (parentRoute) {
	        parentRoute.indexRoute = _Redirect2.default.createRouteFromReactElement(element);
	      } else {
	        process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'An <IndexRedirect> does not make sense at the root of your route config') : void 0;
	      }
	    }
	  },

	  propTypes: {
	    to: string.isRequired,
	    query: object,
	    state: object,
	    onEnter: _InternalPropTypes.falsy,
	    children: _InternalPropTypes.falsy
	  },

	  /* istanbul ignore next: sanity check */
	  render: function render() {
	     true ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, '<IndexRedirect> elements are for router configuration only and should not be rendered') : (0, _invariant2.default)(false) : void 0;
	  }
	});

	exports.default = IndexRedirect;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _invariant = __webpack_require__(12);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _RouteUtils = __webpack_require__(4);

	var _PatternUtils = __webpack_require__(11);

	var _InternalPropTypes = __webpack_require__(10);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _React$PropTypes = _react2.default.PropTypes;
	var string = _React$PropTypes.string;
	var object = _React$PropTypes.object;

	/**
	 * A <Redirect> is used to declare another URL path a client should
	 * be sent to when they request a given URL.
	 *
	 * Redirects are placed alongside routes in the route configuration
	 * and are traversed in the same manner.
	 */

	var Redirect = _react2.default.createClass({
	  displayName: 'Redirect',


	  statics: {
	    createRouteFromReactElement: function createRouteFromReactElement(element) {
	      var route = (0, _RouteUtils.createRouteFromReactElement)(element);

	      if (route.from) route.path = route.from;

	      route.onEnter = function (nextState, replace) {
	        var location = nextState.location;
	        var params = nextState.params;


	        var pathname = void 0;
	        if (route.to.charAt(0) === '/') {
	          pathname = (0, _PatternUtils.formatPattern)(route.to, params);
	        } else if (!route.to) {
	          pathname = location.pathname;
	        } else {
	          var routeIndex = nextState.routes.indexOf(route);
	          var parentPattern = Redirect.getRoutePattern(nextState.routes, routeIndex - 1);
	          var pattern = parentPattern.replace(/\/*$/, '/') + route.to;
	          pathname = (0, _PatternUtils.formatPattern)(pattern, params);
	        }

	        replace({
	          pathname: pathname,
	          query: route.query || location.query,
	          state: route.state || location.state
	        });
	      };

	      return route;
	    },
	    getRoutePattern: function getRoutePattern(routes, routeIndex) {
	      var parentPattern = '';

	      for (var i = routeIndex; i >= 0; i--) {
	        var route = routes[i];
	        var pattern = route.path || '';

	        parentPattern = pattern.replace(/\/*$/, '/') + parentPattern;

	        if (pattern.indexOf('/') === 0) break;
	      }

	      return '/' + parentPattern;
	    }
	  },

	  propTypes: {
	    path: string,
	    from: string, // Alias for path
	    to: string.isRequired,
	    query: object,
	    state: object,
	    onEnter: _InternalPropTypes.falsy,
	    children: _InternalPropTypes.falsy
	  },

	  /* istanbul ignore next: sanity check */
	  render: function render() {
	     true ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, '<Redirect> elements are for router configuration only and should not be rendered') : (0, _invariant2.default)(false) : void 0;
	  }
	});

	exports.default = Redirect;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _routerWarning = __webpack_require__(8);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var _invariant = __webpack_require__(12);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _RouteUtils = __webpack_require__(4);

	var _InternalPropTypes = __webpack_require__(10);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var func = _react2.default.PropTypes.func;

	/**
	 * An <IndexRoute> is used to specify its parent's <Route indexRoute> in
	 * a JSX route config.
	 */

	var IndexRoute = _react2.default.createClass({
	  displayName: 'IndexRoute',


	  statics: {
	    createRouteFromReactElement: function createRouteFromReactElement(element, parentRoute) {
	      /* istanbul ignore else: sanity check */
	      if (parentRoute) {
	        parentRoute.indexRoute = (0, _RouteUtils.createRouteFromReactElement)(element);
	      } else {
	        process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'An <IndexRoute> does not make sense at the root of your route config') : void 0;
	      }
	    }
	  },

	  propTypes: {
	    path: _InternalPropTypes.falsy,
	    component: _InternalPropTypes.component,
	    components: _InternalPropTypes.components,
	    getComponent: func,
	    getComponents: func
	  },

	  /* istanbul ignore next: sanity check */
	  render: function render() {
	     true ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, '<IndexRoute> elements are for router configuration only and should not be rendered') : (0, _invariant2.default)(false) : void 0;
	  }
	});

	exports.default = IndexRoute;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _invariant = __webpack_require__(12);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _RouteUtils = __webpack_require__(4);

	var _InternalPropTypes = __webpack_require__(10);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _React$PropTypes = _react2.default.PropTypes;
	var string = _React$PropTypes.string;
	var func = _React$PropTypes.func;

	/**
	 * A <Route> is used to declare which components are rendered to the
	 * page when the URL matches a given pattern.
	 *
	 * Routes are arranged in a nested tree structure. When a new URL is
	 * requested, the tree is searched depth-first to find a route whose
	 * path matches the URL.  When one is found, all routes in the tree
	 * that lead to it are considered "active" and their components are
	 * rendered into the DOM, nested in the same order as in the tree.
	 */

	var Route = _react2.default.createClass({
	  displayName: 'Route',


	  statics: {
	    createRouteFromReactElement: _RouteUtils.createRouteFromReactElement
	  },

	  propTypes: {
	    path: string,
	    component: _InternalPropTypes.component,
	    components: _InternalPropTypes.components,
	    getComponent: func,
	    getComponents: func
	  },

	  /* istanbul ignore next: sanity check */
	  render: function render() {
	     true ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, '<Route> elements are for router configuration only and should not be rendered') : (0, _invariant2.default)(false) : void 0;
	  }
	});

	exports.default = Route;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _routerWarning = __webpack_require__(8);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var _InternalPropTypes = __webpack_require__(10);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * A mixin that adds the "history" instance variable to components.
	 */
	var History = {

	  contextTypes: {
	    history: _InternalPropTypes.history
	  },

	  componentWillMount: function componentWillMount() {
	    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'the `History` mixin is deprecated, please access `context.router` with your own `contextTypes`. http://tiny.cc/router-historymixin') : void 0;
	    this.history = this.context.history;
	  }
	};

	exports.default = History;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _routerWarning = __webpack_require__(8);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _invariant = __webpack_require__(12);

	var _invariant2 = _interopRequireDefault(_invariant);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var object = _react2.default.PropTypes.object;

	/**
	 * The Lifecycle mixin adds the routerWillLeave lifecycle method to a
	 * component that may be used to cancel a transition or prompt the user
	 * for confirmation.
	 *
	 * On standard transitions, routerWillLeave receives a single argument: the
	 * location we're transitioning to. To cancel the transition, return false.
	 * To prompt the user for confirmation, return a prompt message (string).
	 *
	 * During the beforeunload event (assuming you're using the useBeforeUnload
	 * history enhancer), routerWillLeave does not receive a location object
	 * because it isn't possible for us to know the location we're transitioning
	 * to. In this case routerWillLeave must return a prompt message to prevent
	 * the user from closing the window/tab.
	 */

	var Lifecycle = {

	  contextTypes: {
	    history: object.isRequired,
	    // Nested children receive the route as context, either
	    // set by the route component using the RouteContext mixin
	    // or by some other ancestor.
	    route: object
	  },

	  propTypes: {
	    // Route components receive the route object as a prop.
	    route: object
	  },

	  componentDidMount: function componentDidMount() {
	    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'the `Lifecycle` mixin is deprecated, please use `context.router.setRouteLeaveHook(route, hook)`. http://tiny.cc/router-lifecyclemixin') : void 0;
	    !this.routerWillLeave ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'The Lifecycle mixin requires you to define a routerWillLeave method') : (0, _invariant2.default)(false) : void 0;

	    var route = this.props.route || this.context.route;

	    !route ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'The Lifecycle mixin must be used on either a) a <Route component> or ' + 'b) a descendant of a <Route component> that uses the RouteContext mixin') : (0, _invariant2.default)(false) : void 0;

	    this._unlistenBeforeLeavingRoute = this.context.history.listenBeforeLeavingRoute(route, this.routerWillLeave);
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    if (this._unlistenBeforeLeavingRoute) this._unlistenBeforeLeavingRoute();
	  }
	};

	exports.default = Lifecycle;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _routerWarning = __webpack_require__(8);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var object = _react2.default.PropTypes.object;

	/**
	 * The RouteContext mixin provides a convenient way for route
	 * components to set the route in context. This is needed for
	 * routes that render elements that want to use the Lifecycle
	 * mixin to prevent transitions.
	 */

	var RouteContext = {

	  propTypes: {
	    route: object.isRequired
	  },

	  childContextTypes: {
	    route: object.isRequired
	  },

	  getChildContext: function getChildContext() {
	    return {
	      route: this.props.route
	    };
	  },
	  componentWillMount: function componentWillMount() {
	    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'The `RouteContext` mixin is deprecated. You can provide `this.props.route` on context with your own `contextTypes`. http://tiny.cc/router-routecontextmixin') : void 0;
	  }
	};

	exports.default = RouteContext;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _useQueries = __webpack_require__(30);

	var _useQueries2 = _interopRequireDefault(_useQueries);

	var _createTransitionManager = __webpack_require__(33);

	var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

	var _routerWarning = __webpack_require__(8);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	/**
	 * Returns a new createHistory function that may be used to create
	 * history objects that know about routing.
	 *
	 * Enhances history objects with the following methods:
	 *
	 * - listen((error, nextState) => {})
	 * - listenBeforeLeavingRoute(route, (nextLocation) => {})
	 * - match(location, (error, redirectLocation, nextState) => {})
	 * - isActive(pathname, query, indexOnly=false)
	 */
	function useRoutes(createHistory) {
	  process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, '`useRoutes` is deprecated. Please use `createTransitionManager` instead.') : void 0;

	  return function () {
	    var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    var routes = _ref.routes;

	    var options = _objectWithoutProperties(_ref, ['routes']);

	    var history = (0, _useQueries2.default)(createHistory)(options);
	    var transitionManager = (0, _createTransitionManager2.default)(history, routes);
	    return _extends({}, history, transitionManager);
	  };
	}

	exports.default = useRoutes;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _RouterContext = __webpack_require__(41);

	var _RouterContext2 = _interopRequireDefault(_RouterContext);

	var _routerWarning = __webpack_require__(8);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var RoutingContext = _react2.default.createClass({
	  displayName: 'RoutingContext',
	  componentWillMount: function componentWillMount() {
	    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, '`RoutingContext` has been renamed to `RouterContext`. Please use `import { RouterContext } from \'react-router\'`. http://tiny.cc/router-routercontext') : void 0;
	  },
	  render: function render() {
	    return _react2.default.createElement(_RouterContext2.default, this.props);
	  }
	});

	exports.default = RoutingContext;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _invariant = __webpack_require__(12);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _createMemoryHistory = __webpack_require__(58);

	var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);

	var _createTransitionManager = __webpack_require__(33);

	var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

	var _RouteUtils = __webpack_require__(4);

	var _RouterUtils = __webpack_require__(43);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	/**
	 * A high-level API to be used for server-side rendering.
	 *
	 * This function matches a location to a set of routes and calls
	 * callback(error, redirectLocation, renderProps) when finished.
	 *
	 * Note: You probably don't want to use this in a browser unless you're using
	 * server-side rendering with async routes.
	 */
	function match(_ref, callback) {
	  var history = _ref.history;
	  var routes = _ref.routes;
	  var location = _ref.location;

	  var options = _objectWithoutProperties(_ref, ['history', 'routes', 'location']);

	  !(history || location) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'match needs a history or a location') : (0, _invariant2.default)(false) : void 0;

	  history = history ? history : (0, _createMemoryHistory2.default)(options);
	  var transitionManager = (0, _createTransitionManager2.default)(history, (0, _RouteUtils.createRoutes)(routes));

	  var unlisten = void 0;

	  if (location) {
	    // Allow match({ location: '/the/path', ... })
	    location = history.createLocation(location);
	  } else {
	    // Pick up the location from the history via synchronous history.listen
	    // call if needed.
	    unlisten = history.listen(function (historyLocation) {
	      location = historyLocation;
	    });
	  }

	  var router = (0, _RouterUtils.createRouterObject)(history, transitionManager);
	  history = (0, _RouterUtils.createRoutingHistory)(history, transitionManager);

	  transitionManager.match(location, function (error, redirectLocation, nextState) {
	    callback(error, redirectLocation, nextState && _extends({}, nextState, {
	      history: history,
	      router: router,
	      matchContext: { history: history, transitionManager: transitionManager, router: router }
	    }));

	    // Defer removing the listener to here to prevent DOM histories from having
	    // to unwind DOM event listeners unnecessarily, in case callback renders a
	    // <Router> and attaches another history listener.
	    if (unlisten) {
	      unlisten();
	    }
	  });
	}

	exports.default = match;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = createMemoryHistory;

	var _useQueries = __webpack_require__(30);

	var _useQueries2 = _interopRequireDefault(_useQueries);

	var _useBasename = __webpack_require__(59);

	var _useBasename2 = _interopRequireDefault(_useBasename);

	var _createMemoryHistory = __webpack_require__(60);

	var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function createMemoryHistory(options) {
	  // signatures and type checking differ between `useRoutes` and
	  // `createMemoryHistory`, have to create `memoryHistory` first because
	  // `useQueries` doesn't understand the signature
	  var memoryHistory = (0, _createMemoryHistory2.default)(options);
	  var createHistory = function createHistory() {
	    return memoryHistory;
	  };
	  var history = (0, _useQueries2.default)((0, _useBasename2.default)(createHistory))(options);
	  history.__v2_compatible__ = true;
	  return history;
	}
	module.exports = exports['default'];

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(15);

	var _warning2 = _interopRequireDefault(_warning);

	var _ExecutionEnvironment = __webpack_require__(18);

	var _PathUtils = __webpack_require__(17);

	var _runTransitionHook = __webpack_require__(28);

	var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

	var _deprecate = __webpack_require__(29);

	var _deprecate2 = _interopRequireDefault(_deprecate);

	function useBasename(createHistory) {
	  return function () {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    var history = createHistory(options);

	    var basename = options.basename;

	    var checkedBaseHref = false;

	    function checkBaseHref() {
	      if (checkedBaseHref) {
	        return;
	      }

	      // Automatically use the value of <base href> in HTML
	      // documents as basename if it's not explicitly given.
	      if (basename == null && _ExecutionEnvironment.canUseDOM) {
	        var base = document.getElementsByTagName('base')[0];
	        var baseHref = base && base.getAttribute('href');

	        if (baseHref != null) {
	          basename = baseHref;

	          process.env.NODE_ENV !== 'production' ? _warning2['default'](false, 'Automatically setting basename using <base href> is deprecated and will ' + 'be removed in the next major release. The semantics of <base href> are ' + 'subtly different from basename. Please pass the basename explicitly in ' + 'the options to createHistory') : undefined;
	        }
	      }

	      checkedBaseHref = true;
	    }

	    function addBasename(location) {
	      checkBaseHref();

	      if (basename && location.basename == null) {
	        if (location.pathname.indexOf(basename) === 0) {
	          location.pathname = location.pathname.substring(basename.length);
	          location.basename = basename;

	          if (location.pathname === '') location.pathname = '/';
	        } else {
	          location.basename = '';
	        }
	      }

	      return location;
	    }

	    function prependBasename(location) {
	      checkBaseHref();

	      if (!basename) return location;

	      if (typeof location === 'string') location = _PathUtils.parsePath(location);

	      var pname = location.pathname;
	      var normalizedBasename = basename.slice(-1) === '/' ? basename : basename + '/';
	      var normalizedPathname = pname.charAt(0) === '/' ? pname.slice(1) : pname;
	      var pathname = normalizedBasename + normalizedPathname;

	      return _extends({}, location, {
	        pathname: pathname
	      });
	    }

	    // Override all read methods with basename-aware versions.
	    function listenBefore(hook) {
	      return history.listenBefore(function (location, callback) {
	        _runTransitionHook2['default'](hook, addBasename(location), callback);
	      });
	    }

	    function listen(listener) {
	      return history.listen(function (location) {
	        listener(addBasename(location));
	      });
	    }

	    // Override all write methods with basename-aware versions.
	    function push(location) {
	      history.push(prependBasename(location));
	    }

	    function replace(location) {
	      history.replace(prependBasename(location));
	    }

	    function createPath(location) {
	      return history.createPath(prependBasename(location));
	    }

	    function createHref(location) {
	      return history.createHref(prependBasename(location));
	    }

	    function createLocation(location) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      return addBasename(history.createLocation.apply(history, [prependBasename(location)].concat(args)));
	    }

	    // deprecated
	    function pushState(state, path) {
	      if (typeof path === 'string') path = _PathUtils.parsePath(path);

	      push(_extends({ state: state }, path));
	    }

	    // deprecated
	    function replaceState(state, path) {
	      if (typeof path === 'string') path = _PathUtils.parsePath(path);

	      replace(_extends({ state: state }, path));
	    }

	    return _extends({}, history, {
	      listenBefore: listenBefore,
	      listen: listen,
	      push: push,
	      replace: replace,
	      createPath: createPath,
	      createHref: createHref,
	      createLocation: createLocation,

	      pushState: _deprecate2['default'](pushState, 'pushState is deprecated; use push instead'),
	      replaceState: _deprecate2['default'](replaceState, 'replaceState is deprecated; use replace instead')
	    });
	  };
	}

	exports['default'] = useBasename;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(15);

	var _warning2 = _interopRequireDefault(_warning);

	var _invariant = __webpack_require__(12);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _PathUtils = __webpack_require__(17);

	var _Actions = __webpack_require__(16);

	var _createHistory = __webpack_require__(22);

	var _createHistory2 = _interopRequireDefault(_createHistory);

	function createStateStorage(entries) {
	  return entries.filter(function (entry) {
	    return entry.state;
	  }).reduce(function (memo, entry) {
	    memo[entry.key] = entry.state;
	    return memo;
	  }, {});
	}

	function createMemoryHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  if (Array.isArray(options)) {
	    options = { entries: options };
	  } else if (typeof options === 'string') {
	    options = { entries: [options] };
	  }

	  var history = _createHistory2['default'](_extends({}, options, {
	    getCurrentLocation: getCurrentLocation,
	    finishTransition: finishTransition,
	    saveState: saveState,
	    go: go
	  }));

	  var _options = options;
	  var entries = _options.entries;
	  var current = _options.current;

	  if (typeof entries === 'string') {
	    entries = [entries];
	  } else if (!Array.isArray(entries)) {
	    entries = ['/'];
	  }

	  entries = entries.map(function (entry) {
	    var key = history.createKey();

	    if (typeof entry === 'string') return { pathname: entry, key: key };

	    if (typeof entry === 'object' && entry) return _extends({}, entry, { key: key });

	     true ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Unable to create history entry from %s', entry) : _invariant2['default'](false) : undefined;
	  });

	  if (current == null) {
	    current = entries.length - 1;
	  } else {
	    !(current >= 0 && current < entries.length) ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Current index must be >= 0 and < %s, was %s', entries.length, current) : _invariant2['default'](false) : undefined;
	  }

	  var storage = createStateStorage(entries);

	  function saveState(key, state) {
	    storage[key] = state;
	  }

	  function readState(key) {
	    return storage[key];
	  }

	  function getCurrentLocation() {
	    var entry = entries[current];
	    var basename = entry.basename;
	    var pathname = entry.pathname;
	    var search = entry.search;

	    var path = (basename || '') + pathname + (search || '');

	    var key = undefined,
	        state = undefined;
	    if (entry.key) {
	      key = entry.key;
	      state = readState(key);
	    } else {
	      key = history.createKey();
	      state = null;
	      entry.key = key;
	    }

	    var location = _PathUtils.parsePath(path);

	    return history.createLocation(_extends({}, location, { state: state }), undefined, key);
	  }

	  function canGo(n) {
	    var index = current + n;
	    return index >= 0 && index < entries.length;
	  }

	  function go(n) {
	    if (n) {
	      if (!canGo(n)) {
	        process.env.NODE_ENV !== 'production' ? _warning2['default'](false, 'Cannot go(%s) there is not enough history', n) : undefined;
	        return;
	      }

	      current += n;

	      var currentLocation = getCurrentLocation();

	      // change action to POP
	      history.transitionTo(_extends({}, currentLocation, { action: _Actions.POP }));
	    }
	  }

	  function finishTransition(location) {
	    switch (location.action) {
	      case _Actions.PUSH:
	        current += 1;

	        // if we are not on the top of stack
	        // remove rest and push new
	        if (current < entries.length) entries.splice(current);

	        entries.push(location);
	        saveState(location.key, location.state);
	        break;
	      case _Actions.REPLACE:
	        entries[current] = location;
	        saveState(location.key, location.state);
	        break;
	    }
	  }

	  return history;
	}

	exports['default'] = createMemoryHistory;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = useRouterHistory;

	var _useQueries = __webpack_require__(30);

	var _useQueries2 = _interopRequireDefault(_useQueries);

	var _useBasename = __webpack_require__(59);

	var _useBasename2 = _interopRequireDefault(_useBasename);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function useRouterHistory(createHistory) {
	  return function (options) {
	    var history = (0, _useQueries2.default)((0, _useBasename2.default)(createHistory))(options);
	    history.__v2_compatible__ = true;
	    return history;
	  };
	}
	module.exports = exports['default'];

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _RouterContext = __webpack_require__(41);

	var _RouterContext2 = _interopRequireDefault(_RouterContext);

	var _routerWarning = __webpack_require__(8);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }

	  if (process.env.NODE_ENV !== 'production') {
	    middlewares.forEach(function (middleware, index) {
	      process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(middleware.renderRouterContext || middleware.renderRouteComponent, 'The middleware specified at index ' + index + ' does not appear to be ' + 'a valid React Router middleware.') : void 0;
	    });
	  }

	  var withContext = middlewares.map(function (middleware) {
	    return middleware.renderRouterContext;
	  }).filter(Boolean);
	  var withComponent = middlewares.map(function (middleware) {
	    return middleware.renderRouteComponent;
	  }).filter(Boolean);

	  var makeCreateElement = function makeCreateElement() {
	    var baseCreateElement = arguments.length <= 0 || arguments[0] === undefined ? _react.createElement : arguments[0];
	    return function (Component, props) {
	      return withComponent.reduceRight(function (previous, renderRouteComponent) {
	        return renderRouteComponent(previous, props);
	      }, baseCreateElement(Component, props));
	    };
	  };

	  return function (renderProps) {
	    return withContext.reduceRight(function (previous, renderRouterContext) {
	      return renderRouterContext(previous, renderProps);
	    }, _react2.default.createElement(_RouterContext2.default, _extends({}, renderProps, {
	      createElement: makeCreateElement(renderProps.createElement)
	    })));
	  };
	};

	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _createBrowserHistory = __webpack_require__(64);

	var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

	var _createRouterHistory = __webpack_require__(65);

	var _createRouterHistory2 = _interopRequireDefault(_createRouterHistory);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _createRouterHistory2.default)(_createBrowserHistory2.default);
	module.exports = exports['default'];

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _invariant = __webpack_require__(12);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _Actions = __webpack_require__(16);

	var _PathUtils = __webpack_require__(17);

	var _ExecutionEnvironment = __webpack_require__(18);

	var _DOMUtils = __webpack_require__(19);

	var _DOMStateStorage = __webpack_require__(20);

	var _createDOMHistory = __webpack_require__(21);

	var _createDOMHistory2 = _interopRequireDefault(_createDOMHistory);

	/**
	 * Creates and returns a history object that uses HTML5's history API
	 * (pushState, replaceState, and the popstate event) to manage history.
	 * This is the recommended method of managing history in browsers because
	 * it provides the cleanest URLs.
	 *
	 * Note: In browsers that do not support the HTML5 history API full
	 * page reloads will be used to preserve URLs.
	 */
	function createBrowserHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Browser history needs a DOM') : _invariant2['default'](false) : undefined;

	  var forceRefresh = options.forceRefresh;

	  var isSupported = _DOMUtils.supportsHistory();
	  var useRefresh = !isSupported || forceRefresh;

	  function getCurrentLocation(historyState) {
	    try {
	      historyState = historyState || window.history.state || {};
	    } catch (e) {
	      historyState = {};
	    }

	    var path = _DOMUtils.getWindowPath();
	    var _historyState = historyState;
	    var key = _historyState.key;

	    var state = undefined;
	    if (key) {
	      state = _DOMStateStorage.readState(key);
	    } else {
	      state = null;
	      key = history.createKey();

	      if (isSupported) window.history.replaceState(_extends({}, historyState, { key: key }), null);
	    }

	    var location = _PathUtils.parsePath(path);

	    return history.createLocation(_extends({}, location, { state: state }), undefined, key);
	  }

	  function startPopStateListener(_ref) {
	    var transitionTo = _ref.transitionTo;

	    function popStateListener(event) {
	      if (event.state === undefined) return; // Ignore extraneous popstate events in WebKit.

	      transitionTo(getCurrentLocation(event.state));
	    }

	    _DOMUtils.addEventListener(window, 'popstate', popStateListener);

	    return function () {
	      _DOMUtils.removeEventListener(window, 'popstate', popStateListener);
	    };
	  }

	  function finishTransition(location) {
	    var basename = location.basename;
	    var pathname = location.pathname;
	    var search = location.search;
	    var hash = location.hash;
	    var state = location.state;
	    var action = location.action;
	    var key = location.key;

	    if (action === _Actions.POP) return; // Nothing to do.

	    _DOMStateStorage.saveState(key, state);

	    var path = (basename || '') + pathname + search + hash;
	    var historyState = {
	      key: key
	    };

	    if (action === _Actions.PUSH) {
	      if (useRefresh) {
	        window.location.href = path;
	        return false; // Prevent location update.
	      } else {
	          window.history.pushState(historyState, null, path);
	        }
	    } else {
	      // REPLACE
	      if (useRefresh) {
	        window.location.replace(path);
	        return false; // Prevent location update.
	      } else {
	          window.history.replaceState(historyState, null, path);
	        }
	    }
	  }

	  var history = _createDOMHistory2['default'](_extends({}, options, {
	    getCurrentLocation: getCurrentLocation,
	    finishTransition: finishTransition,
	    saveState: _DOMStateStorage.saveState
	  }));

	  var listenerCount = 0,
	      stopPopStateListener = undefined;

	  function listenBefore(listener) {
	    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

	    var unlisten = history.listenBefore(listener);

	    return function () {
	      unlisten();

	      if (--listenerCount === 0) stopPopStateListener();
	    };
	  }

	  function listen(listener) {
	    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

	    var unlisten = history.listen(listener);

	    return function () {
	      unlisten();

	      if (--listenerCount === 0) stopPopStateListener();
	    };
	  }

	  // deprecated
	  function registerTransitionHook(hook) {
	    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

	    history.registerTransitionHook(hook);
	  }

	  // deprecated
	  function unregisterTransitionHook(hook) {
	    history.unregisterTransitionHook(hook);

	    if (--listenerCount === 0) stopPopStateListener();
	  }

	  return _extends({}, history, {
	    listenBefore: listenBefore,
	    listen: listen,
	    registerTransitionHook: registerTransitionHook,
	    unregisterTransitionHook: unregisterTransitionHook
	  });
	}

	exports['default'] = createBrowserHistory;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	exports.default = function (createHistory) {
	  var history = void 0;
	  if (canUseDOM) history = (0, _useRouterHistory2.default)(createHistory)();
	  return history;
	};

	var _useRouterHistory = __webpack_require__(61);

	var _useRouterHistory2 = _interopRequireDefault(_useRouterHistory);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

	module.exports = exports['default'];

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _createHashHistory = __webpack_require__(14);

	var _createHashHistory2 = _interopRequireDefault(_createHashHistory);

	var _createRouterHistory = __webpack_require__(65);

	var _createRouterHistory2 = _interopRequireDefault(_createRouterHistory);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _createRouterHistory2.default)(_createHashHistory2.default);
	module.exports = exports['default'];

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.connect = exports.Provider = undefined;

	var _Provider = __webpack_require__(68);

	var _Provider2 = _interopRequireDefault(_Provider);

	var _connect = __webpack_require__(71);

	var _connect2 = _interopRequireDefault(_connect);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	exports.Provider = _Provider2["default"];
	exports.connect = _connect2["default"];

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports["default"] = undefined;

	var _react = __webpack_require__(1);

	var _storeShape = __webpack_require__(69);

	var _storeShape2 = _interopRequireDefault(_storeShape);

	var _warning = __webpack_require__(70);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var didWarnAboutReceivingStore = false;
	function warnAboutReceivingStore() {
	  if (didWarnAboutReceivingStore) {
	    return;
	  }
	  didWarnAboutReceivingStore = true;

	  (0, _warning2["default"])('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reactjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
	}

	var Provider = function (_Component) {
	  _inherits(Provider, _Component);

	  Provider.prototype.getChildContext = function getChildContext() {
	    return { store: this.store };
	  };

	  function Provider(props, context) {
	    _classCallCheck(this, Provider);

	    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

	    _this.store = props.store;
	    return _this;
	  }

	  Provider.prototype.render = function render() {
	    var children = this.props.children;

	    return _react.Children.only(children);
	  };

	  return Provider;
	}(_react.Component);

	exports["default"] = Provider;

	if (process.env.NODE_ENV !== 'production') {
	  Provider.prototype.componentWillReceiveProps = function (nextProps) {
	    var store = this.store;
	    var nextStore = nextProps.store;

	    if (store !== nextStore) {
	      warnAboutReceivingStore();
	    }
	  };
	}

	Provider.propTypes = {
	  store: _storeShape2["default"].isRequired,
	  children: _react.PropTypes.element.isRequired
	};
	Provider.childContextTypes = {
	  store: _storeShape2["default"].isRequired
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(1);

	exports["default"] = _react.PropTypes.shape({
	  subscribe: _react.PropTypes.func.isRequired,
	  dispatch: _react.PropTypes.func.isRequired,
	  getState: _react.PropTypes.func.isRequired
	});

/***/ },
/* 70 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that you can use this stack
	    // to find the callsite that caused this warning to fire.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.__esModule = true;
	exports["default"] = connect;

	var _react = __webpack_require__(1);

	var _storeShape = __webpack_require__(69);

	var _storeShape2 = _interopRequireDefault(_storeShape);

	var _shallowEqual = __webpack_require__(72);

	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

	var _wrapActionCreators = __webpack_require__(73);

	var _wrapActionCreators2 = _interopRequireDefault(_wrapActionCreators);

	var _warning = __webpack_require__(70);

	var _warning2 = _interopRequireDefault(_warning);

	var _isPlainObject = __webpack_require__(76);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _hoistNonReactStatics = __webpack_require__(47);

	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

	var _invariant = __webpack_require__(12);

	var _invariant2 = _interopRequireDefault(_invariant);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var defaultMapStateToProps = function defaultMapStateToProps(state) {
	  return {};
	}; // eslint-disable-line no-unused-vars
	var defaultMapDispatchToProps = function defaultMapDispatchToProps(dispatch) {
	  return { dispatch: dispatch };
	};
	var defaultMergeProps = function defaultMergeProps(stateProps, dispatchProps, parentProps) {
	  return _extends({}, parentProps, stateProps, dispatchProps);
	};

	function getDisplayName(WrappedComponent) {
	  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
	}

	var errorObject = { value: null };
	function tryCatch(fn, ctx) {
	  try {
	    return fn.apply(ctx);
	  } catch (e) {
	    errorObject.value = e;
	    return errorObject;
	  }
	}

	// Helps track hot reloading.
	var nextVersion = 0;

	function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
	  var options = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

	  var shouldSubscribe = Boolean(mapStateToProps);
	  var mapState = mapStateToProps || defaultMapStateToProps;

	  var mapDispatch = undefined;
	  if (typeof mapDispatchToProps === 'function') {
	    mapDispatch = mapDispatchToProps;
	  } else if (!mapDispatchToProps) {
	    mapDispatch = defaultMapDispatchToProps;
	  } else {
	    mapDispatch = (0, _wrapActionCreators2["default"])(mapDispatchToProps);
	  }

	  var finalMergeProps = mergeProps || defaultMergeProps;
	  var _options$pure = options.pure;
	  var pure = _options$pure === undefined ? true : _options$pure;
	  var _options$withRef = options.withRef;
	  var withRef = _options$withRef === undefined ? false : _options$withRef;

	  var checkMergedEquals = pure && finalMergeProps !== defaultMergeProps;

	  // Helps track hot reloading.
	  var version = nextVersion++;

	  return function wrapWithConnect(WrappedComponent) {
	    var connectDisplayName = 'Connect(' + getDisplayName(WrappedComponent) + ')';

	    function checkStateShape(props, methodName) {
	      if (!(0, _isPlainObject2["default"])(props)) {
	        (0, _warning2["default"])(methodName + '() in ' + connectDisplayName + ' must return a plain object. ' + ('Instead received ' + props + '.'));
	      }
	    }

	    function computeMergedProps(stateProps, dispatchProps, parentProps) {
	      var mergedProps = finalMergeProps(stateProps, dispatchProps, parentProps);
	      if (process.env.NODE_ENV !== 'production') {
	        checkStateShape(mergedProps, 'mergeProps');
	      }
	      return mergedProps;
	    }

	    var Connect = function (_Component) {
	      _inherits(Connect, _Component);

	      Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
	        return !pure || this.haveOwnPropsChanged || this.hasStoreStateChanged;
	      };

	      function Connect(props, context) {
	        _classCallCheck(this, Connect);

	        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

	        _this.version = version;
	        _this.store = props.store || context.store;

	        (0, _invariant2["default"])(_this.store, 'Could not find "store" in either the context or ' + ('props of "' + connectDisplayName + '". ') + 'Either wrap the root component in a <Provider>, ' + ('or explicitly pass "store" as a prop to "' + connectDisplayName + '".'));

	        var storeState = _this.store.getState();
	        _this.state = { storeState: storeState };
	        _this.clearCache();
	        return _this;
	      }

	      Connect.prototype.computeStateProps = function computeStateProps(store, props) {
	        if (!this.finalMapStateToProps) {
	          return this.configureFinalMapState(store, props);
	        }

	        var state = store.getState();
	        var stateProps = this.doStatePropsDependOnOwnProps ? this.finalMapStateToProps(state, props) : this.finalMapStateToProps(state);

	        if (process.env.NODE_ENV !== 'production') {
	          checkStateShape(stateProps, 'mapStateToProps');
	        }
	        return stateProps;
	      };

	      Connect.prototype.configureFinalMapState = function configureFinalMapState(store, props) {
	        var mappedState = mapState(store.getState(), props);
	        var isFactory = typeof mappedState === 'function';

	        this.finalMapStateToProps = isFactory ? mappedState : mapState;
	        this.doStatePropsDependOnOwnProps = this.finalMapStateToProps.length !== 1;

	        if (isFactory) {
	          return this.computeStateProps(store, props);
	        }

	        if (process.env.NODE_ENV !== 'production') {
	          checkStateShape(mappedState, 'mapStateToProps');
	        }
	        return mappedState;
	      };

	      Connect.prototype.computeDispatchProps = function computeDispatchProps(store, props) {
	        if (!this.finalMapDispatchToProps) {
	          return this.configureFinalMapDispatch(store, props);
	        }

	        var dispatch = store.dispatch;

	        var dispatchProps = this.doDispatchPropsDependOnOwnProps ? this.finalMapDispatchToProps(dispatch, props) : this.finalMapDispatchToProps(dispatch);

	        if (process.env.NODE_ENV !== 'production') {
	          checkStateShape(dispatchProps, 'mapDispatchToProps');
	        }
	        return dispatchProps;
	      };

	      Connect.prototype.configureFinalMapDispatch = function configureFinalMapDispatch(store, props) {
	        var mappedDispatch = mapDispatch(store.dispatch, props);
	        var isFactory = typeof mappedDispatch === 'function';

	        this.finalMapDispatchToProps = isFactory ? mappedDispatch : mapDispatch;
	        this.doDispatchPropsDependOnOwnProps = this.finalMapDispatchToProps.length !== 1;

	        if (isFactory) {
	          return this.computeDispatchProps(store, props);
	        }

	        if (process.env.NODE_ENV !== 'production') {
	          checkStateShape(mappedDispatch, 'mapDispatchToProps');
	        }
	        return mappedDispatch;
	      };

	      Connect.prototype.updateStatePropsIfNeeded = function updateStatePropsIfNeeded() {
	        var nextStateProps = this.computeStateProps(this.store, this.props);
	        if (this.stateProps && (0, _shallowEqual2["default"])(nextStateProps, this.stateProps)) {
	          return false;
	        }

	        this.stateProps = nextStateProps;
	        return true;
	      };

	      Connect.prototype.updateDispatchPropsIfNeeded = function updateDispatchPropsIfNeeded() {
	        var nextDispatchProps = this.computeDispatchProps(this.store, this.props);
	        if (this.dispatchProps && (0, _shallowEqual2["default"])(nextDispatchProps, this.dispatchProps)) {
	          return false;
	        }

	        this.dispatchProps = nextDispatchProps;
	        return true;
	      };

	      Connect.prototype.updateMergedPropsIfNeeded = function updateMergedPropsIfNeeded() {
	        var nextMergedProps = computeMergedProps(this.stateProps, this.dispatchProps, this.props);
	        if (this.mergedProps && checkMergedEquals && (0, _shallowEqual2["default"])(nextMergedProps, this.mergedProps)) {
	          return false;
	        }

	        this.mergedProps = nextMergedProps;
	        return true;
	      };

	      Connect.prototype.isSubscribed = function isSubscribed() {
	        return typeof this.unsubscribe === 'function';
	      };

	      Connect.prototype.trySubscribe = function trySubscribe() {
	        if (shouldSubscribe && !this.unsubscribe) {
	          this.unsubscribe = this.store.subscribe(this.handleChange.bind(this));
	          this.handleChange();
	        }
	      };

	      Connect.prototype.tryUnsubscribe = function tryUnsubscribe() {
	        if (this.unsubscribe) {
	          this.unsubscribe();
	          this.unsubscribe = null;
	        }
	      };

	      Connect.prototype.componentDidMount = function componentDidMount() {
	        this.trySubscribe();
	      };

	      Connect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        if (!pure || !(0, _shallowEqual2["default"])(nextProps, this.props)) {
	          this.haveOwnPropsChanged = true;
	        }
	      };

	      Connect.prototype.componentWillUnmount = function componentWillUnmount() {
	        this.tryUnsubscribe();
	        this.clearCache();
	      };

	      Connect.prototype.clearCache = function clearCache() {
	        this.dispatchProps = null;
	        this.stateProps = null;
	        this.mergedProps = null;
	        this.haveOwnPropsChanged = true;
	        this.hasStoreStateChanged = true;
	        this.haveStatePropsBeenPrecalculated = false;
	        this.statePropsPrecalculationError = null;
	        this.renderedElement = null;
	        this.finalMapDispatchToProps = null;
	        this.finalMapStateToProps = null;
	      };

	      Connect.prototype.handleChange = function handleChange() {
	        if (!this.unsubscribe) {
	          return;
	        }

	        var storeState = this.store.getState();
	        var prevStoreState = this.state.storeState;
	        if (pure && prevStoreState === storeState) {
	          return;
	        }

	        if (pure && !this.doStatePropsDependOnOwnProps) {
	          var haveStatePropsChanged = tryCatch(this.updateStatePropsIfNeeded, this);
	          if (!haveStatePropsChanged) {
	            return;
	          }
	          if (haveStatePropsChanged === errorObject) {
	            this.statePropsPrecalculationError = errorObject.value;
	          }
	          this.haveStatePropsBeenPrecalculated = true;
	        }

	        this.hasStoreStateChanged = true;
	        this.setState({ storeState: storeState });
	      };

	      Connect.prototype.getWrappedInstance = function getWrappedInstance() {
	        (0, _invariant2["default"])(withRef, 'To access the wrapped instance, you need to specify ' + '{ withRef: true } as the fourth argument of the connect() call.');

	        return this.refs.wrappedInstance;
	      };

	      Connect.prototype.render = function render() {
	        var haveOwnPropsChanged = this.haveOwnPropsChanged;
	        var hasStoreStateChanged = this.hasStoreStateChanged;
	        var haveStatePropsBeenPrecalculated = this.haveStatePropsBeenPrecalculated;
	        var statePropsPrecalculationError = this.statePropsPrecalculationError;
	        var renderedElement = this.renderedElement;

	        this.haveOwnPropsChanged = false;
	        this.hasStoreStateChanged = false;
	        this.haveStatePropsBeenPrecalculated = false;
	        this.statePropsPrecalculationError = null;

	        if (statePropsPrecalculationError) {
	          throw statePropsPrecalculationError;
	        }

	        var shouldUpdateStateProps = true;
	        var shouldUpdateDispatchProps = true;
	        if (pure && renderedElement) {
	          shouldUpdateStateProps = hasStoreStateChanged || haveOwnPropsChanged && this.doStatePropsDependOnOwnProps;
	          shouldUpdateDispatchProps = haveOwnPropsChanged && this.doDispatchPropsDependOnOwnProps;
	        }

	        var haveStatePropsChanged = false;
	        var haveDispatchPropsChanged = false;
	        if (haveStatePropsBeenPrecalculated) {
	          haveStatePropsChanged = true;
	        } else if (shouldUpdateStateProps) {
	          haveStatePropsChanged = this.updateStatePropsIfNeeded();
	        }
	        if (shouldUpdateDispatchProps) {
	          haveDispatchPropsChanged = this.updateDispatchPropsIfNeeded();
	        }

	        var haveMergedPropsChanged = true;
	        if (haveStatePropsChanged || haveDispatchPropsChanged || haveOwnPropsChanged) {
	          haveMergedPropsChanged = this.updateMergedPropsIfNeeded();
	        } else {
	          haveMergedPropsChanged = false;
	        }

	        if (!haveMergedPropsChanged && renderedElement) {
	          return renderedElement;
	        }

	        if (withRef) {
	          this.renderedElement = (0, _react.createElement)(WrappedComponent, _extends({}, this.mergedProps, {
	            ref: 'wrappedInstance'
	          }));
	        } else {
	          this.renderedElement = (0, _react.createElement)(WrappedComponent, this.mergedProps);
	        }

	        return this.renderedElement;
	      };

	      return Connect;
	    }(_react.Component);

	    Connect.displayName = connectDisplayName;
	    Connect.WrappedComponent = WrappedComponent;
	    Connect.contextTypes = {
	      store: _storeShape2["default"]
	    };
	    Connect.propTypes = {
	      store: _storeShape2["default"]
	    };

	    if (process.env.NODE_ENV !== 'production') {
	      Connect.prototype.componentWillUpdate = function componentWillUpdate() {
	        if (this.version === version) {
	          return;
	        }

	        // We are hot reloading!
	        this.version = version;
	        this.trySubscribe();
	        this.clearCache();
	      };
	    }

	    return (0, _hoistNonReactStatics2["default"])(Connect, WrappedComponent);
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 72 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = shallowEqual;
	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);

	  if (keysA.length !== keysB.length) {
	    return false;
	  }

	  // Test for A's keys different from B.
	  var hasOwn = Object.prototype.hasOwnProperty;
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	      return false;
	    }
	  }

	  return true;
	}

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = wrapActionCreators;

	var _redux = __webpack_require__(74);

	function wrapActionCreators(actionCreators) {
	  return function (dispatch) {
	    return (0, _redux.bindActionCreators)(actionCreators, dispatch);
	  };
	}

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = undefined;

	var _createStore = __webpack_require__(75);

	var _createStore2 = _interopRequireDefault(_createStore);

	var _combineReducers = __webpack_require__(84);

	var _combineReducers2 = _interopRequireDefault(_combineReducers);

	var _bindActionCreators = __webpack_require__(86);

	var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);

	var _applyMiddleware = __webpack_require__(87);

	var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);

	var _compose = __webpack_require__(88);

	var _compose2 = _interopRequireDefault(_compose);

	var _warning = __webpack_require__(85);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/*
	* This is a dummy function to check if the function name has been altered by minification.
	* If the function has been minified and NODE_ENV !== 'production', warn the user.
	*/
	function isCrushed() {}

	if (process.env.NODE_ENV !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
	  (0, _warning2['default'])('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
	}

	exports.createStore = _createStore2['default'];
	exports.combineReducers = _combineReducers2['default'];
	exports.bindActionCreators = _bindActionCreators2['default'];
	exports.applyMiddleware = _applyMiddleware2['default'];
	exports.compose = _compose2['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.ActionTypes = undefined;
	exports['default'] = createStore;

	var _isPlainObject = __webpack_require__(76);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _symbolObservable = __webpack_require__(81);

	var _symbolObservable2 = _interopRequireDefault(_symbolObservable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * These are private action types reserved by Redux.
	 * For any unknown actions, you must return the current state.
	 * If the current state is undefined, you must return the initial state.
	 * Do not reference these action types directly in your code.
	 */
	var ActionTypes = exports.ActionTypes = {
	  INIT: '@@redux/INIT'
	};

	/**
	 * Creates a Redux store that holds the state tree.
	 * The only way to change the data in the store is to call `dispatch()` on it.
	 *
	 * There should only be a single store in your app. To specify how different
	 * parts of the state tree respond to actions, you may combine several reducers
	 * into a single reducer function by using `combineReducers`.
	 *
	 * @param {Function} reducer A function that returns the next state tree, given
	 * the current state tree and the action to handle.
	 *
	 * @param {any} [preloadedState] The initial state. You may optionally specify it
	 * to hydrate the state from the server in universal apps, or to restore a
	 * previously serialized user session.
	 * If you use `combineReducers` to produce the root reducer function, this must be
	 * an object with the same shape as `combineReducers` keys.
	 *
	 * @param {Function} enhancer The store enhancer. You may optionally specify it
	 * to enhance the store with third-party capabilities such as middleware,
	 * time travel, persistence, etc. The only store enhancer that ships with Redux
	 * is `applyMiddleware()`.
	 *
	 * @returns {Store} A Redux store that lets you read the state, dispatch actions
	 * and subscribe to changes.
	 */
	function createStore(reducer, preloadedState, enhancer) {
	  var _ref2;

	  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
	    enhancer = preloadedState;
	    preloadedState = undefined;
	  }

	  if (typeof enhancer !== 'undefined') {
	    if (typeof enhancer !== 'function') {
	      throw new Error('Expected the enhancer to be a function.');
	    }

	    return enhancer(createStore)(reducer, preloadedState);
	  }

	  if (typeof reducer !== 'function') {
	    throw new Error('Expected the reducer to be a function.');
	  }

	  var currentReducer = reducer;
	  var currentState = preloadedState;
	  var currentListeners = [];
	  var nextListeners = currentListeners;
	  var isDispatching = false;

	  function ensureCanMutateNextListeners() {
	    if (nextListeners === currentListeners) {
	      nextListeners = currentListeners.slice();
	    }
	  }

	  /**
	   * Reads the state tree managed by the store.
	   *
	   * @returns {any} The current state tree of your application.
	   */
	  function getState() {
	    return currentState;
	  }

	  /**
	   * Adds a change listener. It will be called any time an action is dispatched,
	   * and some part of the state tree may potentially have changed. You may then
	   * call `getState()` to read the current state tree inside the callback.
	   *
	   * You may call `dispatch()` from a change listener, with the following
	   * caveats:
	   *
	   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
	   * If you subscribe or unsubscribe while the listeners are being invoked, this
	   * will not have any effect on the `dispatch()` that is currently in progress.
	   * However, the next `dispatch()` call, whether nested or not, will use a more
	   * recent snapshot of the subscription list.
	   *
	   * 2. The listener should not expect to see all state changes, as the state
	   * might have been updated multiple times during a nested `dispatch()` before
	   * the listener is called. It is, however, guaranteed that all subscribers
	   * registered before the `dispatch()` started will be called with the latest
	   * state by the time it exits.
	   *
	   * @param {Function} listener A callback to be invoked on every dispatch.
	   * @returns {Function} A function to remove this change listener.
	   */
	  function subscribe(listener) {
	    if (typeof listener !== 'function') {
	      throw new Error('Expected listener to be a function.');
	    }

	    var isSubscribed = true;

	    ensureCanMutateNextListeners();
	    nextListeners.push(listener);

	    return function unsubscribe() {
	      if (!isSubscribed) {
	        return;
	      }

	      isSubscribed = false;

	      ensureCanMutateNextListeners();
	      var index = nextListeners.indexOf(listener);
	      nextListeners.splice(index, 1);
	    };
	  }

	  /**
	   * Dispatches an action. It is the only way to trigger a state change.
	   *
	   * The `reducer` function, used to create the store, will be called with the
	   * current state tree and the given `action`. Its return value will
	   * be considered the **next** state of the tree, and the change listeners
	   * will be notified.
	   *
	   * The base implementation only supports plain object actions. If you want to
	   * dispatch a Promise, an Observable, a thunk, or something else, you need to
	   * wrap your store creating function into the corresponding middleware. For
	   * example, see the documentation for the `redux-thunk` package. Even the
	   * middleware will eventually dispatch plain object actions using this method.
	   *
	   * @param {Object} action A plain object representing “what changed”. It is
	   * a good idea to keep actions serializable so you can record and replay user
	   * sessions, or use the time travelling `redux-devtools`. An action must have
	   * a `type` property which may not be `undefined`. It is a good idea to use
	   * string constants for action types.
	   *
	   * @returns {Object} For convenience, the same action object you dispatched.
	   *
	   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
	   * return something else (for example, a Promise you can await).
	   */
	  function dispatch(action) {
	    if (!(0, _isPlainObject2['default'])(action)) {
	      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
	    }

	    if (typeof action.type === 'undefined') {
	      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
	    }

	    if (isDispatching) {
	      throw new Error('Reducers may not dispatch actions.');
	    }

	    try {
	      isDispatching = true;
	      currentState = currentReducer(currentState, action);
	    } finally {
	      isDispatching = false;
	    }

	    var listeners = currentListeners = nextListeners;
	    for (var i = 0; i < listeners.length; i++) {
	      listeners[i]();
	    }

	    return action;
	  }

	  /**
	   * Replaces the reducer currently used by the store to calculate the state.
	   *
	   * You might need this if your app implements code splitting and you want to
	   * load some of the reducers dynamically. You might also need this if you
	   * implement a hot reloading mechanism for Redux.
	   *
	   * @param {Function} nextReducer The reducer for the store to use instead.
	   * @returns {void}
	   */
	  function replaceReducer(nextReducer) {
	    if (typeof nextReducer !== 'function') {
	      throw new Error('Expected the nextReducer to be a function.');
	    }

	    currentReducer = nextReducer;
	    dispatch({ type: ActionTypes.INIT });
	  }

	  /**
	   * Interoperability point for observable/reactive libraries.
	   * @returns {observable} A minimal observable of state changes.
	   * For more information, see the observable proposal:
	   * https://github.com/zenparsing/es-observable
	   */
	  function observable() {
	    var _ref;

	    var outerSubscribe = subscribe;
	    return _ref = {
	      /**
	       * The minimal observable subscription method.
	       * @param {Object} observer Any object that can be used as an observer.
	       * The observer object should have a `next` method.
	       * @returns {subscription} An object with an `unsubscribe` method that can
	       * be used to unsubscribe the observable from the store, and prevent further
	       * emission of values from the observable.
	       */
	      subscribe: function subscribe(observer) {
	        if (typeof observer !== 'object') {
	          throw new TypeError('Expected the observer to be an object.');
	        }

	        function observeState() {
	          if (observer.next) {
	            observer.next(getState());
	          }
	        }

	        observeState();
	        var unsubscribe = outerSubscribe(observeState);
	        return { unsubscribe: unsubscribe };
	      }
	    }, _ref[_symbolObservable2['default']] = function () {
	      return this;
	    }, _ref;
	  }

	  // When a store is created, an "INIT" action is dispatched so that every
	  // reducer returns their initial state. This effectively populates
	  // the initial state tree.
	  dispatch({ type: ActionTypes.INIT });

	  return _ref2 = {
	    dispatch: dispatch,
	    subscribe: subscribe,
	    getState: getState,
	    replaceReducer: replaceReducer
	  }, _ref2[_symbolObservable2['default']] = observable, _ref2;
	}

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var getPrototype = __webpack_require__(77),
	    isHostObject = __webpack_require__(79),
	    isObjectLike = __webpack_require__(80);

	/** `Object#toString` result references. */
	var objectTag = '[object Object]';

	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) ||
	      objectToString.call(value) != objectTag || isHostObject(value)) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return (typeof Ctor == 'function' &&
	    Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
	}

	module.exports = isPlainObject;


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(78);

	/** Built-in value references. */
	var getPrototype = overArg(Object.getPrototypeOf, Object);

	module.exports = getPrototype;


/***/ },
/* 78 */
/***/ function(module, exports) {

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	module.exports = overArg;


/***/ },
/* 79 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
	    try {
	      result = !!(value + '');
	    } catch (e) {}
	  }
	  return result;
	}

	module.exports = isHostObject;


/***/ },
/* 80 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(82);


/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _ponyfill = __webpack_require__(83);

	var _ponyfill2 = _interopRequireDefault(_ponyfill);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var root = undefined; /* global window */

	if (typeof global !== 'undefined') {
		root = global;
	} else if (typeof window !== 'undefined') {
		root = window;
	}

	var result = (0, _ponyfill2['default'])(root);
	exports['default'] = result;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 83 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports['default'] = symbolObservablePonyfill;
	function symbolObservablePonyfill(root) {
		var result;
		var _Symbol = root.Symbol;

		if (typeof _Symbol === 'function') {
			if (_Symbol.observable) {
				result = _Symbol.observable;
			} else {
				result = _Symbol('observable');
				_Symbol.observable = result;
			}
		} else {
			result = '@@observable';
		}

		return result;
	};

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports['default'] = combineReducers;

	var _createStore = __webpack_require__(75);

	var _isPlainObject = __webpack_require__(76);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _warning = __webpack_require__(85);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function getUndefinedStateErrorMessage(key, action) {
	  var actionType = action && action.type;
	  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

	  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state.';
	}

	function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
	  var reducerKeys = Object.keys(reducers);
	  var argumentName = action && action.type === _createStore.ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

	  if (reducerKeys.length === 0) {
	    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
	  }

	  if (!(0, _isPlainObject2['default'])(inputState)) {
	    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
	  }

	  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
	    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
	  });

	  unexpectedKeys.forEach(function (key) {
	    unexpectedKeyCache[key] = true;
	  });

	  if (unexpectedKeys.length > 0) {
	    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
	  }
	}

	function assertReducerSanity(reducers) {
	  Object.keys(reducers).forEach(function (key) {
	    var reducer = reducers[key];
	    var initialState = reducer(undefined, { type: _createStore.ActionTypes.INIT });

	    if (typeof initialState === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined.');
	    }

	    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
	    if (typeof reducer(undefined, { type: type }) === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined.');
	    }
	  });
	}

	/**
	 * Turns an object whose values are different reducer functions, into a single
	 * reducer function. It will call every child reducer, and gather their results
	 * into a single state object, whose keys correspond to the keys of the passed
	 * reducer functions.
	 *
	 * @param {Object} reducers An object whose values correspond to different
	 * reducer functions that need to be combined into one. One handy way to obtain
	 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
	 * undefined for any action. Instead, they should return their initial state
	 * if the state passed to them was undefined, and the current state for any
	 * unrecognized action.
	 *
	 * @returns {Function} A reducer function that invokes every reducer inside the
	 * passed object, and builds a state object with the same shape.
	 */
	function combineReducers(reducers) {
	  var reducerKeys = Object.keys(reducers);
	  var finalReducers = {};
	  for (var i = 0; i < reducerKeys.length; i++) {
	    var key = reducerKeys[i];

	    if (process.env.NODE_ENV !== 'production') {
	      if (typeof reducers[key] === 'undefined') {
	        (0, _warning2['default'])('No reducer provided for key "' + key + '"');
	      }
	    }

	    if (typeof reducers[key] === 'function') {
	      finalReducers[key] = reducers[key];
	    }
	  }
	  var finalReducerKeys = Object.keys(finalReducers);

	  if (process.env.NODE_ENV !== 'production') {
	    var unexpectedKeyCache = {};
	  }

	  var sanityError;
	  try {
	    assertReducerSanity(finalReducers);
	  } catch (e) {
	    sanityError = e;
	  }

	  return function combination() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var action = arguments[1];

	    if (sanityError) {
	      throw sanityError;
	    }

	    if (process.env.NODE_ENV !== 'production') {
	      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
	      if (warningMessage) {
	        (0, _warning2['default'])(warningMessage);
	      }
	    }

	    var hasChanged = false;
	    var nextState = {};
	    for (var i = 0; i < finalReducerKeys.length; i++) {
	      var key = finalReducerKeys[i];
	      var reducer = finalReducers[key];
	      var previousStateForKey = state[key];
	      var nextStateForKey = reducer(previousStateForKey, action);
	      if (typeof nextStateForKey === 'undefined') {
	        var errorMessage = getUndefinedStateErrorMessage(key, action);
	        throw new Error(errorMessage);
	      }
	      nextState[key] = nextStateForKey;
	      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
	    }
	    return hasChanged ? nextState : state;
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 85 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that if you enable
	    // "break on all exceptions" in your console,
	    // it would pause the execution at this line.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ },
/* 86 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = bindActionCreators;
	function bindActionCreator(actionCreator, dispatch) {
	  return function () {
	    return dispatch(actionCreator.apply(undefined, arguments));
	  };
	}

	/**
	 * Turns an object whose values are action creators, into an object with the
	 * same keys, but with every function wrapped into a `dispatch` call so they
	 * may be invoked directly. This is just a convenience method, as you can call
	 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
	 *
	 * For convenience, you can also pass a single function as the first argument,
	 * and get a function in return.
	 *
	 * @param {Function|Object} actionCreators An object whose values are action
	 * creator functions. One handy way to obtain it is to use ES6 `import * as`
	 * syntax. You may also pass a single function.
	 *
	 * @param {Function} dispatch The `dispatch` function available on your Redux
	 * store.
	 *
	 * @returns {Function|Object} The object mimicking the original object, but with
	 * every action creator wrapped into the `dispatch` call. If you passed a
	 * function as `actionCreators`, the return value will also be a single
	 * function.
	 */
	function bindActionCreators(actionCreators, dispatch) {
	  if (typeof actionCreators === 'function') {
	    return bindActionCreator(actionCreators, dispatch);
	  }

	  if (typeof actionCreators !== 'object' || actionCreators === null) {
	    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
	  }

	  var keys = Object.keys(actionCreators);
	  var boundActionCreators = {};
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    var actionCreator = actionCreators[key];
	    if (typeof actionCreator === 'function') {
	      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
	    }
	  }
	  return boundActionCreators;
	}

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports['default'] = applyMiddleware;

	var _compose = __webpack_require__(88);

	var _compose2 = _interopRequireDefault(_compose);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * Creates a store enhancer that applies middleware to the dispatch method
	 * of the Redux store. This is handy for a variety of tasks, such as expressing
	 * asynchronous actions in a concise manner, or logging every action payload.
	 *
	 * See `redux-thunk` package as an example of the Redux middleware.
	 *
	 * Because middleware is potentially asynchronous, this should be the first
	 * store enhancer in the composition chain.
	 *
	 * Note that each middleware will be given the `dispatch` and `getState` functions
	 * as named arguments.
	 *
	 * @param {...Function} middlewares The middleware chain to be applied.
	 * @returns {Function} A store enhancer applying the middleware.
	 */
	function applyMiddleware() {
	  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }

	  return function (createStore) {
	    return function (reducer, preloadedState, enhancer) {
	      var store = createStore(reducer, preloadedState, enhancer);
	      var _dispatch = store.dispatch;
	      var chain = [];

	      var middlewareAPI = {
	        getState: store.getState,
	        dispatch: function dispatch(action) {
	          return _dispatch(action);
	        }
	      };
	      chain = middlewares.map(function (middleware) {
	        return middleware(middlewareAPI);
	      });
	      _dispatch = _compose2['default'].apply(undefined, chain)(store.dispatch);

	      return _extends({}, store, {
	        dispatch: _dispatch
	      });
	    };
	  };
	}

/***/ },
/* 88 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = compose;
	/**
	 * Composes single-argument functions from right to left. The rightmost
	 * function can take multiple arguments as it provides the signature for
	 * the resulting composite function.
	 *
	 * @param {...Function} funcs The functions to compose.
	 * @returns {Function} A function obtained by composing the argument functions
	 * from right to left. For example, compose(f, g, h) is identical to doing
	 * (...args) => f(g(h(...args))).
	 */

	function compose() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }

	  if (funcs.length === 0) {
	    return function (arg) {
	      return arg;
	    };
	  }

	  if (funcs.length === 1) {
	    return funcs[0];
	  }

	  var last = funcs[funcs.length - 1];
	  var rest = funcs.slice(0, -1);
	  return function () {
	    return rest.reduceRight(function (composed, f) {
	      return f(composed);
	    }, last.apply(undefined, arguments));
	  };
	}

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	var _AppContainer = __webpack_require__(90);

	var _AppContainer2 = _interopRequireDefault(_AppContainer);

	var _IndexContainer = __webpack_require__(92);

	var _IndexContainer2 = _interopRequireDefault(_IndexContainer);

	var _HomeContainer = __webpack_require__(103);

	var _HomeContainer2 = _interopRequireDefault(_HomeContainer);

	var _AboutContainer = __webpack_require__(107);

	var _AboutContainer2 = _interopRequireDefault(_AboutContainer);

	var _WebContainer = __webpack_require__(110);

	var _WebContainer2 = _interopRequireDefault(_WebContainer);

	var _NodeContainer = __webpack_require__(112);

	var _NodeContainer2 = _interopRequireDefault(_NodeContainer);

	var _AddArticleContainer = __webpack_require__(114);

	var _AddArticleContainer2 = _interopRequireDefault(_AddArticleContainer);

	var _ProfileContainer = __webpack_require__(121);

	var _ProfileContainer2 = _interopRequireDefault(_ProfileContainer);

	var _InfoContainer = __webpack_require__(123);

	var _InfoContainer2 = _interopRequireDefault(_InfoContainer);

	var _CodeContainer = __webpack_require__(126);

	var _CodeContainer2 = _interopRequireDefault(_CodeContainer);

	var _AvatarContainer = __webpack_require__(128);

	var _AvatarContainer2 = _interopRequireDefault(_AvatarContainer);

	var _PassContainer = __webpack_require__(130);

	var _PassContainer2 = _interopRequireDefault(_PassContainer);

	var _ArticleContainer = __webpack_require__(132);

	var _ArticleContainer2 = _interopRequireDefault(_ArticleContainer);

	var _UserContainer = __webpack_require__(134);

	var _UserContainer2 = _interopRequireDefault(_UserContainer);

	var _LoginContainer = __webpack_require__(136);

	var _LoginContainer2 = _interopRequireDefault(_LoginContainer);

	var _RegisterContainer = __webpack_require__(140);

	var _RegisterContainer2 = _interopRequireDefault(_RegisterContainer);

	var _login = __webpack_require__(139);

	var _register = __webpack_require__(142);

	var _profile = __webpack_require__(124);

	var _addArticle = __webpack_require__(115);

	var _article = __webpack_require__(143);

	var _user = __webpack_require__(144);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//注册页

	/*action*/
	//主页


	/*容器组件*/
	//基础库
	var routes = function routes(store) {

	    //初始化视图
	    function loginViewStateInit() {
	        store.dispatch((0, _login.login_init)());
	    }

	    function registerViewStateInit() {
	        store.dispatch((0, _register.register_init)());
	    }

	    function profileViewStateInit() {
	        store.dispatch((0, _profile.modify_init)());
	    }

	    //获取文章内容
	    function getArticleContent(nextState, replaceState) {
	        var id = {
	            articleId: nextState.params.id
	        };

	        var isContentExist = false;

	        var state = store.getState();
	        var lists = state.articles.contentList;

	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;

	        try {
	            for (var _iterator = lists[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                var article = _step.value;

	                if (article._id === nextState.params.id) {
	                    isContentExist = true;
	                    break;
	                }
	            }
	        } catch (err) {
	            _didIteratorError = true;
	            _iteratorError = err;
	        } finally {
	            try {
	                if (!_iteratorNormalCompletion && _iterator.return) {
	                    _iterator.return();
	                }
	            } finally {
	                if (_didIteratorError) {
	                    throw _iteratorError;
	                }
	            }
	        }

	        if (!isContentExist) {
	            //如果文章不存在,则ajax获取文章
	            store.dispatch((0, _article.article_getContent)(id));
	        }
	    }

	    //获取个人文章列表
	    function getArticleList(nextState, replaceState) {
	        var id = {
	            userId: nextState.params.id
	        };

	        var isListExist = false;
	        var state = store.getState();
	        var lists = state.user.articleList;

	        var _iteratorNormalCompletion2 = true;
	        var _didIteratorError2 = false;
	        var _iteratorError2 = undefined;

	        try {
	            for (var _iterator2 = lists[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                var list = _step2.value;

	                if (list._id === nextState.params.id) {
	                    isListExist = true;
	                    break;
	                }
	            }
	        } catch (err) {
	            _didIteratorError2 = true;
	            _iteratorError2 = err;
	        } finally {
	            try {
	                if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                    _iterator2.return();
	                }
	            } finally {
	                if (_didIteratorError2) {
	                    throw _iteratorError2;
	                }
	            }
	        }

	        if (!isListExist) {
	            store.dispatch((0, _user.user_getList)(id));
	        }
	    }

	    return _react2.default.createElement(
	        _reactRouter.Route,
	        null,
	        _react2.default.createElement(_reactRouter.Route, { path: '/', component: _AppContainer2.default }),
	        _react2.default.createElement(
	            _reactRouter.Route,
	            { path: '/index', component: _IndexContainer2.default },
	            _react2.default.createElement(_reactRouter.IndexRoute, { component: _HomeContainer2.default }),
	            _react2.default.createElement(_reactRouter.Route, { path: '/web', component: _WebContainer2.default }),
	            _react2.default.createElement(_reactRouter.Route, { path: '/node', component: _NodeContainer2.default }),
	            _react2.default.createElement(_reactRouter.Route, { path: '/about', component: _AboutContainer2.default }),
	            _react2.default.createElement(_reactRouter.Route, { path: '/add_article', component: _AddArticleContainer2.default }),
	            _react2.default.createElement(
	                _reactRouter.Route,
	                { path: '/profile', component: _ProfileContainer2.default },
	                _react2.default.createElement(_reactRouter.IndexRoute, { onEnter: profileViewStateInit, component: _InfoContainer2.default }),
	                _react2.default.createElement(_reactRouter.Route, { path: 'info', onEnter: profileViewStateInit, component: _InfoContainer2.default }),
	                _react2.default.createElement(_reactRouter.Route, { path: 'pass', onEnter: profileViewStateInit, component: _PassContainer2.default }),
	                _react2.default.createElement(_reactRouter.Route, { path: 'avatar', component: _AvatarContainer2.default }),
	                _react2.default.createElement(_reactRouter.Route, { path: 'code', component: _CodeContainer2.default })
	            ),
	            _react2.default.createElement(_reactRouter.Route, { path: '/article/:id', onEnter: getArticleContent, component: _ArticleContainer2.default }),
	            _react2.default.createElement(_reactRouter.Route, { path: '/user/:id', onEnter: getArticleList, component: _UserContainer2.default })
	        ),
	        _react2.default.createElement(_reactRouter.Route, { path: '/login', onEnter: loginViewStateInit, component: _LoginContainer2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: '/register', onEnter: registerViewStateInit, component: _RegisterContainer2.default })
	    );
	}; //登录页
	//首页
	exports.default = routes;

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reactRedux = __webpack_require__(67);

	var _App = __webpack_require__(91);

	var _App2 = _interopRequireDefault(_App);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//基础库
	exports.default = (0, _reactRedux.connect)()(_App2.default);

	//视图组件

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactRouter = __webpack_require__(3);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var App = function (_Component) {
	    _inherits(App, _Component);

	    function App() {
	        _classCallCheck(this, App);

	        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
	    }

	    _createClass(App, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'h1',
	                    null,
	                    'Watchhill首页'
	                ),
	                _react2.default.createElement(
	                    'ul',
	                    { role: 'nav' },
	                    _react2.default.createElement(
	                        'li',
	                        { role: 'presentation' },
	                        _react2.default.createElement(
	                            _reactRouter.Link,
	                            { to: '/index' },
	                            '主页'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'li',
	                        { role: 'presentation' },
	                        _react2.default.createElement(
	                            _reactRouter.Link,
	                            { to: '/login' },
	                            '登录'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'li',
	                        { role: 'presentation' },
	                        _react2.default.createElement(
	                            _reactRouter.Link,
	                            { to: '/register' },
	                            '注册'
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return App;
	}(_react.Component);

	exports.default = App;

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _redux = __webpack_require__(74);

	var _reactRedux = __webpack_require__(67);

	var _logout = __webpack_require__(93);

	var LogoutActions = _interopRequireWildcard(_logout);

	var _Index = __webpack_require__(97);

	var _Index2 = _interopRequireDefault(_Index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	//action
	//基础库
	function mapStateToProps(state) {
	    return {
	        login: state.login
	    };
	}

	//绑定logout action到Logout组件


	//视图组件
	function mapDispatchToProps(dispatch) {
	    return (0, _redux.bindActionCreators)(LogoutActions, dispatch);
	}

	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Index2.default);

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.logout = logout;

	var _actionType = __webpack_require__(94);

	var _httpType = __webpack_require__(95);

	var _ajax = __webpack_require__(96);

	var _ajax2 = _interopRequireDefault(_ajax);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * 发起注销请求
	 * @returns {Function}
	 */

	function logout() {
	    return function (dispatch) {
	        return (0, _ajax2.default)().logout().then(function (data) {
	            if (data.status === _httpType.success) {
	                return dispatch(logout_receive());
	            }
	        }); //接受到数据后重新更新state
	    };
	}

	/**
	 * 注销接收
	 */
	function logout_receive() {
	    return {
	        type: _actionType.LOGOUT_RECEIVE
	    };
	}

/***/ },
/* 94 */
/***/ function(module, exports) {

	'use strict';

	//action类型

	module.exports = {

	    //login
	    LOGIN_INIT: 'LOGIN_INIT', //登录视图初始化
	    LOGIN_REQUEST: 'LOGIN_REQUEST', //挂起登录请求
	    LOGIN_RECEIVE: 'LOGIN_RECEIVE', //接收登录状况处理

	    //register
	    REGISTER_INIT: 'REGISTER_INIT', //注册视图初始化
	    REGISTER_REQUEST: 'REGISTER_REQUEST', //挂起注册请求
	    REGISTER_RECEIVE: 'REGISTER_RECEIVE', //接收注册状况处理

	    //profile
	    MODIFY_INIT: 'MODIFY_INIT', //前端状态初始化(需要注意服务器端数据,刷新时保持一致)
	    MODIFY_REQUEST: 'MODIFY_REQUEST', //挂起修改请求
	    MODIFY_PASS: 'MODIFY_PASS', //修改密码
	    MODIFY_EMAIL: 'MODIFY_EMAIL', //修改邮箱
	    MODIFY_BRIEF: 'MODIFY_BRIEF', //修改简介
	    MODIFY_TEL: 'MODIFY_TEL', //修改电话
	    MODIFY_RECEIVE: 'MODIFY_RECEIVE', //接收修改状况处理
	    MODIFY_LOGIN: 'MODIFY_LOGIN', //修改信息的同时更新视图个人信息

	    //logout
	    LOGOUT_RECEIVE: 'LOGOUT_RECEIVE', //注销

	    //article
	    ARTICLE_REQUEST: 'ARTICLE_REQUEST', //挂起获取文章请求
	    ARTICLE_RECEIVE: 'ARTICLE_RECEIVE', //获取文章内容处理

	    //user
	    USER_REQUEST: 'USER_REQUEST', //获取个人文章列表
	    USER_RECEIVE: 'USER_RECEIVE',

	    //addArticle
	    PREVIEW: 'PREVIEW', //预览功能
	    ADD_TEMP_ARTICLE: 'ADD_TEMP_ARTICLE', //新增文章
	    ADD_ARTICLE_TITLE: 'ADD_ARTICLE_TITLE', //新增标题
	    ADD_ARTICLE_INTRO: 'ADD_ARTICLE_INTRO', //新增简介
	    DEL_ARTICLE: 'DEL_ARTICLE', //删除文章
	    SAVE_ARTICLE: 'SAVE_ARTICLE' //保存文章
	};

/***/ },
/* 95 */
/***/ function(module, exports) {

	'use strict';

	//请求状态

	module.exports = {

	    init: 'init', //初始化

	    //login
	    user_no_exist: 'user_no_exist', //用户不存在
	    password_err: 'password_err', //密码错误

	    //register
	    user_exist: 'user_exist', //用户存在


	    //profile
	    old_pwd_err: 'old_pwd_err', //原始密码错误


	    success: 'success', //请求成功
	    fail: 'fail' //请求失败
	};

/***/ },
/* 96 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * ajax路由
	 */

	function ajax() {
	    function req(request) {
	        var defered = $.Deferred();

	        $.ajax(request).done(function (data) {
	            defered.resolve(data);
	        }).fail(function () {
	            defered.reject();
	        });

	        return defered.promise();
	    }

	    return {
	        //登录
	        login: function login(data) {
	            return req({
	                type: 'POST',
	                url: '/user/login',
	                data: data
	            });
	        },

	        //注销
	        logout: function logout() {
	            return req({
	                type: 'GET',
	                url: '/user/logout'
	            });
	        },

	        //注册
	        register: function register(data) {
	            return req({
	                type: 'POST',
	                url: '/user/register',
	                data: data
	            });
	        },

	        //个人中心-密码修改
	        modifyPass: function modifyPass(data) {
	            return req({
	                type: 'POST',
	                url: '/user/profile/pass',
	                data: data
	            });
	        },

	        //个人中心-个签,电话,邮箱修改
	        modifyInfo: function modifyInfo(data) {
	            return req({
	                type: 'POST',
	                url: '/user/profile/info',
	                data: data
	            });
	        },

	        //新增文章
	        addTempArticle: function addTempArticle(data) {
	            return req({
	                type: 'POST',
	                url: '/article/addArticle',
	                data: data
	            });
	        },

	        //获取文章内容
	        article: function article(data) {
	            return req({
	                type: 'POST',
	                url: '/article/getArticle',
	                data: data
	            });
	        },

	        //删除文章
	        delArticle: function delArticle(data) {
	            return req({
	                type: 'POST',
	                url: '/article/delArticle',
	                data: data
	            });
	        },

	        //获取个人文章列表
	        user: function user(data) {
	            return req({
	                type: 'GET',
	                url: '/user/getList',
	                data: data
	            });
	        },
	        //保存文章
	        save_article: function save_article(data) {
	            return req({
	                type: 'POST',
	                url: '/article/modfiyArticle',
	                data: data,
	                success: function success(data) {
	                    if (data.status === 'success') {
	                        alert('保存成功');
	                    }
	                }
	            });
	        }

	    };
	}

	exports.default = ajax;

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(98);

	var _Header = __webpack_require__(99);

	var _Header2 = _interopRequireDefault(_Header);

	var _Footer = __webpack_require__(101);

	var _Footer2 = _interopRequireDefault(_Footer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //基础库


	//主要组件


	var Index = function (_Component) {
	    _inherits(Index, _Component);

	    function Index() {
	        _classCallCheck(this, Index);

	        return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));
	    }

	    _createClass(Index, [{
	        key: 'logout',
	        value: function logout(e) {
	            e.preventDefault();
	            //alert('111');
	            this.props.logout(); //注销
	        }

	        // componentWillUpdate(nextProps,nextState) {
	        //    if(!nextProps.login.logined) {
	        //        history.replace({
	        //            pathname:'/'
	        //        });
	        //    }
	        // }


	    }, {
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var login = _props.login;
	            var logout = _props.logout;
	            //const _this = this;
	            //console.log(login);

	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(_Header2.default, { login: login, logout: logout }),
	                this.props.children,
	                _react2.default.createElement(_Footer2.default, null)
	            );
	        }
	    }]);

	    return Index;
	}(_react.Component);

	Index.propTypes = {
	    login: _react.PropTypes.object.isRequired
	};
	exports.default = Index;

/***/ },
/* 98 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactRouter = __webpack_require__(3);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(100);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //基础库


	var Header = function (_Component) {
	    _inherits(Header, _Component);

	    function Header() {
	        _classCallCheck(this, Header);

	        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
	    }

	    _createClass(Header, [{
	        key: 'logout',
	        value: function logout(e) {
	            e.preventDefault();
	            //alert('111');
	            this.props.logout(); //注销
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var login = this.props.login;


	            return _react2.default.createElement(
	                'header',
	                { className: 'main-header skin-header-user' },
	                _react2.default.createElement(
	                    'nav',
	                    { className: 'navbar navbar-static-top' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'container' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'navbar-header' },
	                            _react2.default.createElement(
	                                _reactRouter.Link,
	                                { to: '/', className: 'navbar-brand' },
	                                _react2.default.createElement(
	                                    'b',
	                                    null,
	                                    'Watch'
	                                ),
	                                'Hill'
	                            ),
	                            _react2.default.createElement(
	                                'button',
	                                { type: 'button', className: 'navbar-toggle collapsed', 'data-toggle': 'collapse',
	                                    'data-target': '#navbar-collapse' },
	                                _react2.default.createElement('i', { className: 'fa fa-bars' })
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'collapse navbar-collapse', id: 'navbar-collapse' },
	                            _react2.default.createElement(
	                                'ul',
	                                { className: 'nav navbar-nav navbar-left', role: 'nav' },
	                                _react2.default.createElement(
	                                    'li',
	                                    null,
	                                    _react2.default.createElement(
	                                        _reactRouter.Link,
	                                        { to: '/index' },
	                                        '主页'
	                                    )
	                                ),
	                                _react2.default.createElement(
	                                    'li',
	                                    null,
	                                    _react2.default.createElement(
	                                        _reactRouter.Link,
	                                        { to: '/web' },
	                                        'web前端'
	                                    )
	                                ),
	                                _react2.default.createElement(
	                                    'li',
	                                    null,
	                                    _react2.default.createElement(
	                                        _reactRouter.Link,
	                                        { to: '/node' },
	                                        'Nodejs'
	                                    )
	                                ),
	                                _react2.default.createElement(
	                                    'li',
	                                    null,
	                                    _react2.default.createElement(
	                                        _reactRouter.Link,
	                                        { to: '/about' },
	                                        '关于'
	                                    )
	                                )
	                            ),
	                            function (_this) {
	                                if (login.logined) {
	                                    return _react2.default.createElement(
	                                        'ul',
	                                        { className: 'nav navbar-nav navbar-right' },
	                                        _react2.default.createElement(
	                                            'li',
	                                            { className: 'dropdown' },
	                                            _react2.default.createElement(
	                                                _reactRouter.Link,
	                                                { to: '/add_article' },
	                                                '新增文章'
	                                            )
	                                        ),
	                                        _react2.default.createElement(
	                                            'li',
	                                            { className: 'dropdown user user-menu' },
	                                            _react2.default.createElement(
	                                                'a',
	                                                { href: '', className: 'dropdown-togglt', 'data-toggle': 'dropdown', 'aria-expanded': 'false' },
	                                                _react2.default.createElement('img', { src: login.loginUser.avatarUrl, alt: 'User Image', className: 'user-image' }),
	                                                _react2.default.createElement(
	                                                    'span',
	                                                    { className: 'hidden-xs' },
	                                                    login.loginUser.author
	                                                )
	                                            ),
	                                            _react2.default.createElement(
	                                                'ul',
	                                                { className: 'dropdown-menu' },
	                                                _react2.default.createElement(
	                                                    'li',
	                                                    { className: 'user-header' },
	                                                    _react2.default.createElement(
	                                                        _reactRouter.Link,
	                                                        { to: '/user/' + login.loginUser._id },
	                                                        _react2.default.createElement('img', { src: login.loginUser.avatarUrl, className: 'img-circle', alt: 'user image' })
	                                                    ),
	                                                    _react2.default.createElement(
	                                                        'p',
	                                                        null,
	                                                        login.loginUser.brief,
	                                                        _react2.default.createElement(
	                                                            'small',
	                                                            null,
	                                                            login.loginUser.tel
	                                                        ),
	                                                        _react2.default.createElement(
	                                                            'small',
	                                                            null,
	                                                            login.loginUser.email
	                                                        )
	                                                    )
	                                                ),
	                                                _react2.default.createElement(
	                                                    'li',
	                                                    { className: 'user-footer' },
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        { className: 'pull-left' },
	                                                        _react2.default.createElement(
	                                                            _reactRouter.Link,
	                                                            { to: '/profile', className: 'btn btn-default btn-flat' },
	                                                            '个人中心'
	                                                        )
	                                                    ),
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        { className: 'pull-right' },
	                                                        _react2.default.createElement(
	                                                            'a',
	                                                            { className: 'btn btn-default btn-flat', onClick: _this.logout.bind(_this) },
	                                                            '退出登录'
	                                                        )
	                                                    )
	                                                )
	                                            )
	                                        )
	                                    );
	                                } else {
	                                    return _react2.default.createElement(
	                                        'ul',
	                                        { className: 'nav navbar-nav navbar-right' },
	                                        _react2.default.createElement(
	                                            'li',
	                                            null,
	                                            _react2.default.createElement(
	                                                _reactRouter.Link,
	                                                { to: '/login' },
	                                                '登录'
	                                            )
	                                        ),
	                                        _react2.default.createElement(
	                                            'li',
	                                            null,
	                                            _react2.default.createElement(
	                                                _reactRouter.Link,
	                                                { to: '/register' },
	                                                '注册'
	                                            )
	                                        )
	                                    );
	                                }
	                            }(this)
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return Header;
	}(_react.Component);

	Header.propTypes = {
	    login: _react.PropTypes.object.isRequired
	};
	exports.default = Header;

/***/ },
/* 100 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(102);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //基础库


	var Footer = function (_Component) {
	    _inherits(Footer, _Component);

	    function Footer() {
	        _classCallCheck(this, Footer);

	        return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
	    }

	    _createClass(Footer, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'footer',
	                { className: 'main-footer' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'pull-right hidden-xs' },
	                    _react2.default.createElement(
	                        'b',
	                        null,
	                        'Version'
	                    ),
	                    ' 1.1.0'
	                ),
	                _react2.default.createElement('br', null)
	            );
	        }
	    }]);

	    return Footer;
	}(_react.Component);

	exports.default = Footer;

/***/ },
/* 102 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _redux = __webpack_require__(74);

	var _reactRedux = __webpack_require__(67);

	var _Home = __webpack_require__(104);

	var _Home2 = _interopRequireDefault(_Home);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function mapStateToProps(state) {
	    return {
	        articles: state.articles
	    };
	}

	//绑定logout action到Logout组件
	//function mapDispatchToProps(dispatch) {
	//    return bindActionCreators(LogoutActions,dispatch);
	//}


	//视图组件
	//基础库
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(_Home2.default);

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(105);

	var _reactRouter = __webpack_require__(3);

	var _history = __webpack_require__(106);

	var _history2 = _interopRequireDefault(_history);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	//导航


	var Home = function (_Component) {
	    _inherits(Home, _Component);

	    function Home() {
	        _classCallCheck(this, Home);

	        return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
	    }

	    _createClass(Home, [{
	        key: 'render',


	        //static contextTypes = {
	        //    router: PropTypes.object
	        //};


	        //_onClick(e) {
	        //    e.preventDefault();
	        //
	        //    let id = e.target.getAttribute('data-id');
	        //
	        //
	        //    console.log(id);
	        //
	        //    //alert(1);
	        //
	        //    ////to={'/article/' + article._id}
	        //    //history.replace({
	        //    //    pathname:`/article/${id}`
	        //    //});
	        //
	        //    this.context.router.push(`/article/${id}`);
	        //}

	        value: function render() {
	            var articles = this.props.articles;


	            return _react2.default.createElement(
	                'div',
	                { className: 'content-wrapped blog-list' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'info-box head-response' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'info-box-content' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'container' },
	                            _react2.default.createElement(
	                                'blockquote',
	                                null,
	                                _react2.default.createElement(
	                                    'h1',
	                                    null,
	                                    '我们始终秉持着emptyCup的精神，追求艺术与技术的完美融合'
	                                ),
	                                _react2.default.createElement(
	                                    'h2',
	                                    null,
	                                    '一步一个脚印，一天一个开始'
	                                ),
	                                _react2.default.createElement(
	                                    'footer',
	                                    null,
	                                    '楼宇WEB前端组 ',
	                                    _react2.default.createElement(
	                                        'cite',
	                                        { title: 'Source Title' },
	                                        '一群有志向的青年、一个欢乐又不失严肃的团队'
	                                    )
	                                )
	                            )
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'container', id: 'actives' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'row head-response-article' },
	                        articles.list.map(function (article, index, articles) {
	                            return _react2.default.createElement(
	                                'div',
	                                { key: article.title, className: 'col-sm-6 col-md-4 col-lg-4' },
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'thumbnail article-body' },
	                                    _react2.default.createElement(
	                                        _reactRouter.Link,
	                                        { to: '/article/' + article._id },
	                                        _react2.default.createElement('img', { className: 'lazy artical-image', src: article.image, alt: article.title })
	                                    ),
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'caption' },
	                                        _react2.default.createElement(
	                                            'h3',
	                                            { className: 'artical-title' },
	                                            _react2.default.createElement(
	                                                _reactRouter.Link,
	                                                { to: '/article/' + article._id },
	                                                article.title
	                                            )
	                                        ),
	                                        _react2.default.createElement(
	                                            'small',
	                                            null,
	                                            '作者:',
	                                            article.author
	                                        ),
	                                        _react2.default.createElement('br', null),
	                                        _react2.default.createElement(
	                                            'small',
	                                            null,
	                                            article.createTime
	                                        ),
	                                        _react2.default.createElement(
	                                            'p',
	                                            { className: 'artical-describe' },
	                                            article.describe
	                                        )
	                                    )
	                                )
	                            );
	                        })
	                    )
	                )
	            );
	        }
	    }]);

	    return Home;
	}(_react.Component);

	exports.default = Home;

/***/ },
/* 105 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reactRouter = __webpack_require__(3);

	exports.default = _reactRouter.browserHistory;

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reactRedux = __webpack_require__(67);

	var _About = __webpack_require__(108);

	var _About2 = _interopRequireDefault(_About);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//基础库
	exports.default = (0, _reactRedux.connect)()(_About2.default);

	//action


	//视图组件

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(109);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var About = function (_Component) {
	    _inherits(About, _Component);

	    function About() {
	        _classCallCheck(this, About);

	        return _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).apply(this, arguments));
	    }

	    _createClass(About, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'content-wrapper skin-about' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'jumbotron masthead head head-response' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'container head-title' },
	                        _react2.default.createElement(
	                            'h1',
	                            null,
	                            'HIK FED'
	                        ),
	                        _react2.default.createElement(
	                            'h2',
	                            null,
	                            'HIK FED (Hikvision The Front-End Development Community) 海康前端开发社区'
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { id: 'actives', className: 'container' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'row' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'box head-response-first' },
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'box-header' },
	                                _react2.default.createElement(
	                                    'h3',
	                                    { className: 'box-title' },
	                                    '我们是谁'
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'box-body' },
	                                _react2.default.createElement(
	                                    'p',
	                                    null,
	                                    'HIK FED是一个海康威视web前端开发社区，其中 FE 是 Front End 的缩写，D 是开发的意思:'
	                                )
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'box' },
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'box-header' },
	                                _react2.default.createElement(
	                                    'h3',
	                                    { className: 'box-title' },
	                                    '我们的成员'
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'box-body' },
	                                _react2.default.createElement(
	                                    'ul',
	                                    { className: 'users-list clearfix' },
	                                    _react2.default.createElement(
	                                        'li',
	                                        null,
	                                        _react2.default.createElement('img', { className: 'member-img', src: '/images/default/avatar.jpg', alt: '' }),
	                                        _react2.default.createElement(
	                                            'a',
	                                            { className: 'users-list-name', href: '#' },
	                                            'liumeng'
	                                        )
	                                    )
	                                )
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'box' },
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'box-header' },
	                                _react2.default.createElement(
	                                    'h3',
	                                    { className: 'box-title' },
	                                    '我们的理念'
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'box-body' },
	                                _react2.default.createElement(
	                                    'p',
	                                    null,
	                                    _react2.default.createElement(
	                                        'strong',
	                                        null,
	                                        'EmptyCup，'
	                                    ),
	                                    '不仅仅是需要保持谦逊，更多的是需要打开你的思维，发掘新的前端世界.'
	                                )
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'box' },
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'box-header' },
	                                _react2.default.createElement(
	                                    'h3',
	                                    { className: 'box-title' },
	                                    '我们要做什么'
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'box-body' },
	                                _react2.default.createElement(
	                                    'p',
	                                    null,
	                                    '前端的世界一直在变化着，在各种熟悉的语言进化中迅速的化学反应。也许你和我们一样，对前端的理解也在不断刷新。'
	                                ),
	                                _react2.default.createElement(
	                                    'p',
	                                    null,
	                                    '不变的永远是变化，专业，无论什么时刻，我们用专业的态度，专业的技术，开发专业的产品，分享专业的知识。'
	                                ),
	                                _react2.default.createElement(
	                                    'p',
	                                    null,
	                                    '我们必须专业，必须严谨，必须乐于分享！为了保持与时代并行的脚步！'
	                                )
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'box' },
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'box-header' },
	                                _react2.default.createElement(
	                                    'h3',
	                                    { className: 'box-title' },
	                                    '加入我们'
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'box-body' },
	                                _react2.default.createElement(
	                                    'p',
	                                    null,
	                                    '如果您对web前端有足够的热情，又乐于分享，请加入我们！'
	                                )
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return About;
	}(_react.Component);

	exports.default = About;

/***/ },
/* 109 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reactRedux = __webpack_require__(67);

	var _Web = __webpack_require__(111);

	var _Web2 = _interopRequireDefault(_Web);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//基础库
	exports.default = (0, _reactRedux.connect)()(_Web2.default);

	//action

	//视图组件

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Web = function (_Component) {
	    _inherits(Web, _Component);

	    function Web() {
	        _classCallCheck(this, Web);

	        return _possibleConstructorReturn(this, (Web.__proto__ || Object.getPrototypeOf(Web)).apply(this, arguments));
	    }

	    _createClass(Web, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'h1',
	                    null,
	                    '前端文章'
	                )
	            );
	        }
	    }]);

	    return Web;
	}(_react.Component);

	exports.default = Web;

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reactRedux = __webpack_require__(67);

	var _Node = __webpack_require__(113);

	var _Node2 = _interopRequireDefault(_Node);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//基础库
	exports.default = (0, _reactRedux.connect)()(_Node2.default);

	//action


	//视图组件

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Node = function (_Component) {
	    _inherits(Node, _Component);

	    function Node() {
	        _classCallCheck(this, Node);

	        return _possibleConstructorReturn(this, (Node.__proto__ || Object.getPrototypeOf(Node)).apply(this, arguments));
	    }

	    _createClass(Node, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'h1',
	                    null,
	                    'Nodejs文章'
	                )
	            );
	        }
	    }]);

	    return Node;
	}(_react.Component);

	exports.default = Node;

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _redux = __webpack_require__(74);

	var _reactRedux = __webpack_require__(67);

	var _addArticle = __webpack_require__(115);

	var addArticle = _interopRequireWildcard(_addArticle);

	var _AddArticle = __webpack_require__(116);

	var _AddArticle2 = _interopRequireDefault(_AddArticle);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	//action
	//基础库
	function mapStateToProps(state) {
	    return {
	        addArticle: state.addArticle
	    };
	}

	//视图组件


	function mapDispatchToProps(dispatch) {
	    return (0, _redux.bindActionCreators)(addArticle, dispatch);
	}

	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_AddArticle2.default);

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.preview = preview;
	exports.addTempArticle = addTempArticle;
	exports.addTitle = addTitle;
	exports.addIntro = addIntro;
	exports.save_article = save_article;

	var _actionType = __webpack_require__(94);

	var _ajax = __webpack_require__(96);

	var _ajax2 = _interopRequireDefault(_ajax);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function preview(value) {
	    return {
	        type: _actionType.PREVIEW,
	        value: value
	    };
	}

	function addTempArticle(article) {
	    if (article.articleId) {
	        var delbool = window.confirm('是否确定删除清空');
	        if (delbool) {
	            // return ajax().delArticle(article)
	            //     .then(data => {
	            //         return dispatch(clearAndDel_receive());
	            //     })
	            return clearAndDel_receive();
	        } else {
	            return {
	                type: 'NO_DELETE'
	            };
	        }
	    } else {
	        return function (dispatch) {
	            return (0, _ajax2.default)().addTempArticle(article).then(function (data) {
	                return dispatch(addTempArticle_receive(data));
	            });
	        };
	    }
	}

	function addTempArticle_receive(data) {
	    return {
	        type: _actionType.ADD_TEMP_ARTICLE,
	        value: data.data
	    };
	}

	function addTitle(value) {
	    return {
	        type: _actionType.ADD_ARTICLE_TITLE,
	        value: value
	    };
	}

	function addIntro(value) {
	    return {
	        type: _actionType.ADD_ARTICLE_INTRO,
	        value: value
	    };
	}

	function clearAndDel_receive() {
	    return {
	        type: _actionType.DEL_ARTICLE
	    };
	}

	function save_article(article) {
	    return function (dispatch) {
	        return (0, _ajax2.default)().save_article(article).then(function (data) {
	            return dispatch(saveArticle_receive(data));
	        });
	    };
	}

	function saveArticle_receive(data) {
	    return {
	        type: _actionType.SAVE_ARTICLE,
	        value: data
	    };
	}

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(117);

	var _Input = __webpack_require__(118);

	var _Input2 = _interopRequireDefault(_Input);

	var _Button = __webpack_require__(119);

	var _Button2 = _interopRequireDefault(_Button);

	var _Markdown = __webpack_require__(120);

	var _Markdown2 = _interopRequireDefault(_Markdown);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	//基础组件


	var AddArticle = function (_Component) {
	    _inherits(AddArticle, _Component);

	    function AddArticle() {
	        _classCallCheck(this, AddArticle);

	        return _possibleConstructorReturn(this, (AddArticle.__proto__ || Object.getPrototypeOf(AddArticle)).apply(this, arguments));
	    }

	    _createClass(AddArticle, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            this.props.preview('');
	        }
	    }, {
	        key: 'addTitle',
	        value: function addTitle(event) {
	            this.props.addTitle(event.target.value);
	        }
	    }, {
	        key: 'addIntro',
	        value: function addIntro(event) {
	            this.props.addIntro(event.target.value);
	        }
	    }, {
	        key: 'add_del',
	        value: function add_del() {
	            this.props.addTempArticle(this.props.addArticle);
	        }
	    }, {
	        key: 'save_article',
	        value: function save_article() {
	            var obj = {
	                articleId: this.props.addArticle.articleId,
	                title: this.props.addArticle.title,
	                describe: this.props.addArticle.describe,
	                content: this.props.addArticle.preview
	            };
	            this.props.save_article(obj);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var preview = _props.preview;
	            var addArticle = _props.addArticle;

	            return _react2.default.createElement(
	                'div',
	                { className: 'content-wrapper add-article' },
	                _react2.default.createElement(
	                    'div',
	                    { id: 'container' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'row' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'col-xs-10  col-xs-offset-1 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2' },
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'page-header' },
	                                _react2.default.createElement(
	                                    'h1',
	                                    null,
	                                    '新增文章'
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'form',
	                                { id: 'articleForm' },
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'form-group' },
	                                    _react2.default.createElement(
	                                        'label',
	                                        { htmlFor: 'atricleTitle' },
	                                        '标题'
	                                    ),
	                                    _react2.default.createElement('input', { type: 'text', className: 'form-control', id: 'atricleTitle', name: 'atricleTitle', onBlur: this.addTitle.bind(this) })
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'form-group' },
	                                    _react2.default.createElement(
	                                        'label',
	                                        { htmlFor: 'atricleDescribe' },
	                                        '简介'
	                                    ),
	                                    _react2.default.createElement('textarea', { id: 'atricleDescribe', className: 'form-control', rows: '3', placeholder: '简介...', onBlur: this.addIntro.bind(this) })
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    { id: 'btn-div', className: addArticle.articleId ? "clear" : "add" },
	                                    _react2.default.createElement(
	                                        'button',
	                                        { type: 'button', id: 'article-add', className: 'btn-primary btn-block btn-flat btn button', onClick: this.add_del.bind(this) },
	                                        ' ',
	                                        addArticle.articleId ? "删除清空" : "新建文章",
	                                        ' '
	                                    )
	                                ),
	                                _react2.default.createElement('br', null),
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: addArticle.articleId ? "" : "hidden", id: 'article-detail' },
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'form-group' },
	                                        _react2.default.createElement(
	                                            'label',
	                                            { htmlFor: 'imgUrl' },
	                                            '封面'
	                                        ),
	                                        _react2.default.createElement('input', { id: 'imgUrl', name: 'imgUrl', type: 'file', className: 'file-loading' })
	                                    ),
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'form-group' },
	                                        _react2.default.createElement(
	                                            'label',
	                                            { htmlFor: 'articleFile' },
	                                            '文章图片'
	                                        ),
	                                        _react2.default.createElement('input', { id: 'articleFile', name: 'articleFile', type: 'file', className: 'file-loading', multiple: true }),
	                                        _react2.default.createElement(
	                                            'p',
	                                            { className: 'help-block' },
	                                            '请选择.jpg.jpeg.png.gif格式的文件上传'
	                                        ),
	                                        _react2.default.createElement(
	                                            'div',
	                                            { className: 'btn-group get-url' },
	                                            _react2.default.createElement(
	                                                'div',
	                                                null,
	                                                _react2.default.createElement(
	                                                    'div',
	                                                    { className: 'btn btn-primary', id: 'getFileUrl' },
	                                                    '获取图片的url路径'
	                                                )
	                                            ),
	                                            _react2.default.createElement('ul', { id: 'urlList', className: 'list-group urlList' })
	                                        )
	                                    ),
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'form-group' },
	                                        _react2.default.createElement(
	                                            'label',
	                                            { htmlFor: 'text-input' },
	                                            '文章'
	                                        ),
	                                        _react2.default.createElement(_Markdown2.default, { preview: preview, addArticle: addArticle })
	                                    ),
	                                    _react2.default.createElement(
	                                        'button',
	                                        { type: 'button', id: 'article-upload', className: 'btn-primary btn-block btn-flat btn button', onClick: this.save_article.bind(this) },
	                                        '保存'
	                                    )
	                                )
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var _this = this;
	            var imgUrl = {
	                filename: '',
	                url: ''
	            };
	            var files = [];

	            //初始化文件插件
	            $('#imgUrl').fileinput({
	                language: "zh",
	                allowedFileExtensions: ["jpg", "png", "gif", "jpeg"],
	                uploadAsync: true,
	                maxFileCount: 1,
	                uploadUrl: '/article/uploadimg',
	                uploadExtraData: function uploadExtraData(previewId, index) {
	                    var obj = {
	                        type: 'cover',
	                        articleId: _this.props.addArticle.articleId
	                    };
	                    return obj;
	                }

	            });
	            $('#articleFile').fileinput({
	                language: "zh",
	                allowedFileExtensions: ["jpg", "png", "gif", "jpeg"],
	                uploadAsync: true,
	                maxFileSize: 200,
	                uploadUrl: '/article/uploadimg',
	                uploadExtraData: function uploadExtraData(previewId, index) {
	                    var obj = {
	                        type: 'article',
	                        articleId: _this.props.addArticle.articleId
	                    };
	                    return obj;
	                }
	            });

	            //文件上传事件
	            $('#imgUrl').on('fileuploaded', function (event, data, previewId, index) {
	                imgUrl.filename = data.filenames[0];
	                imgUrl.url = data.response.data.url;
	            });

	            $('#articleFile').on('fileuploaded', function (event, data, previewId, index) {
	                files = data.files;
	                var files = $('#articleFile').fileinput('getFileStack');
	            });

	            //清空事件
	            $('#article-add').click(function (e) {
	                if ($(e.target).parent().attr('class').indexOf('clear') > -1) {
	                    $('#atricleTitle').val('');
	                    $('#atricleDescribe').val('');
	                    $('#imgUrl').fileinput('clear');
	                    $('#articleFile').fileinput('clear');
	                    $('#text-input').val('');
	                }
	            });

	            //获取图片路径
	            $('#getFileUrl').click(function (e) {
	                $.ajax({
	                    url: '/article/getImgUrl',
	                    type: 'GET',
	                    data: {
	                        articleId: _this.props.addArticle.articleId
	                    },
	                    success: function success(data) {
	                        var node = '';
	                        $('#urlList').hide('normal');
	                        for (var url in data.data) {
	                            var str = '<li class="list-group-item" >' + '<span class="url-content">' + data.data[url] + '</span>' + '<span class="url-edit fa fa-fw fa-copy"  data-toggle="tooltip" data-placement="top" title="复制URL"></span>' + '</li>';
	                            node = node + str;
	                        }
	                        $('#urlList').html(node).show('normal');
	                    }
	                });
	            });
	            //绑定复制事件
	            var copy = new Clipboard('#urlList .url-edit', {
	                text: function text(trigger) {
	                    return $(trigger).prev().text();
	                }
	            });
	            copy.on('success', function (e) {
	                $(e.trigger).attr('data-original-title', '复制成功');
	                // $(e.trigger).tooltip('hide');
	                $(e.trigger).tooltip('show');
	                setTimeout(function () {
	                    $(e.trigger).attr('data-original-title', '复制URL');
	                    $(e.trigger).tooltip('hide');
	                }, 2000);
	            });
	            // $('#urlList').on('click','.url-edit',function(event){
	            //     var str = $(event.target).prev().text();
	            //     var clipboard = new Clipboard()
	            //     str.clone();
	            //     $(event.target).prev().attr('title','复制成功');
	            //     setTimeout(function(){
	            //         $(event.target).prev().attr('title','复制URL');
	            //     },1000);
	            // });
	        }
	    }]);

	    return AddArticle;
	}(_react.Component);

	exports.default = AddArticle;

/***/ },
/* 117 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Input = function (_React$Component) {
	    _inherits(Input, _React$Component);

	    function Input() {
	        _classCallCheck(this, Input);

	        return _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).apply(this, arguments));
	    }

	    _createClass(Input, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var type = _props.type;
	            var className = _props.className;
	            var id = _props.id;
	            var placeholder = _props.placeholder;
	            var name = _props.name;
	            var autocomplete = _props.autocomplete;
	            var onChange = _props.onChange;


	            return _react2.default.createElement('input', {
	                type: type,
	                className: className,
	                id: id,
	                placeholder: placeholder,
	                name: name,
	                autocomplete: autocomplete,
	                onChange: onChange
	            });
	        }

	        //https://facebook.github.io/react/docs/top-level-api.html
	        //https://facebook.github.io/react/docs/reusable-components.html

	    }]);

	    return Input;
	}(_react2.default.Component);

	Input.propTypes = {
	    type: _react.PropTypes.string.isRequired,
	    className: _react.PropTypes.string.isRequired,
	    id: _react.PropTypes.string,
	    placeholder: _react.PropTypes.string,
	    //value: PropTypes.string,
	    //autoFocus: React.PropTypes.bool,
	    //required: React.PropTypes.string,
	    name: _react.PropTypes.string,
	    autocomplete: _react.PropTypes.oneOf(['on', 'off']),
	    onChange: _react.PropTypes.func
	};
	exports.default = Input;

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Button = function (_React$Component) {
	    _inherits(Button, _React$Component);

	    function Button() {
	        _classCallCheck(this, Button);

	        return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
	    }

	    _createClass(Button, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var type = _props.type;
	            var className = _props.className;
	            var onClick = _props.onClick;
	            var dataIndex = _props.dataIndex;


	            return _react2.default.createElement(
	                'button',
	                { type: type, className: className, onClick: onClick, 'data-index': dataIndex },
	                this.props.children
	            );
	        }
	    }]);

	    return Button;
	}(_react2.default.Component);

	Button.propTypes = {
	    className: _react.PropTypes.string.isRequired,
	    onClick: _react.PropTypes.func.isRequired,
	    type: _react.PropTypes.string.isRequired,
	    dataIndex: _react.PropTypes.number
	};
	exports.default = Button;

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Markdown = function (_React$Component) {
	    _inherits(Markdown, _React$Component);

	    function Markdown() {
	        _classCallCheck(this, Markdown);

	        return _possibleConstructorReturn(this, (Markdown.__proto__ || Object.getPrototypeOf(Markdown)).apply(this, arguments));
	    }

	    _createClass(Markdown, [{
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "div",
	                { className: "nav-tabs-custom" },
	                _react2.default.createElement(
	                    "ul",
	                    { className: "nav nav-tabs" },
	                    _react2.default.createElement(
	                        "li",
	                        { className: "active" },
	                        _react2.default.createElement(
	                            "a",
	                            { href: "#edit", "data-toggle": "tab" },
	                            _react2.default.createElement("i", { className: "fa fa-pencil fa-fw" }),
	                            "编辑"
	                        )
	                    ),
	                    _react2.default.createElement(
	                        "li",
	                        null,
	                        _react2.default.createElement(
	                            "a",
	                            { href: "#preview", "data-toggle": "tab" },
	                            _react2.default.createElement("i", { className: "fa fa-eye fa-fw" }),
	                            "预览"
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    "div",
	                    { className: "tab-content" },
	                    _react2.default.createElement(
	                        "div",
	                        { className: "active tab-pane", id: "edit" },
	                        _react2.default.createElement(
	                            "div",
	                            { className: "form-group" },
	                            _react2.default.createElement("textarea", { className: "form-control", id: "text-input", rows: "3", placeholder: "请在此输入文本 ...", onBlur: this.update.bind(this) })
	                        )
	                    ),
	                    _react2.default.createElement(
	                        "div",
	                        { className: "tab-pane", id: "preview" },
	                        _react2.default.createElement("div", { id: "preview", dangerouslySetInnerHTML: this.tohtml() })
	                    )
	                )
	            );
	        }
	    }, {
	        key: "update",
	        value: function update(event) {
	            this.props.preview(markdown.toHTML(event.target.value));
	        }
	    }, {
	        key: "tohtml",
	        value: function tohtml() {
	            return { __html: this.props.addArticle.preview };
	        }
	    }]);

	    return Markdown;
	}(_react2.default.Component);

	exports.default = Markdown;

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _redux = __webpack_require__(74);

	var _reactRedux = __webpack_require__(67);

	var _Profile = __webpack_require__(122);

	var _Profile2 = _interopRequireDefault(_Profile);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _reactRedux.connect)()(_Profile2.default);

	//action


	//视图组件
	//基础库

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Profile = function (_Component) {
	    _inherits(Profile, _Component);

	    function Profile() {
	        _classCallCheck(this, Profile);

	        return _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).apply(this, arguments));
	    }

	    _createClass(Profile, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'container' },
	                _react2.default.createElement('br', null),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'col-xs-3 col-sm-3 col-md-3 col-lg-3' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'list-group' },
	                        _react2.default.createElement(
	                            _reactRouter.Link,
	                            { to: '/profile/info', className: 'list-group-item' },
	                            '个人信息'
	                        ),
	                        _react2.default.createElement(
	                            _reactRouter.Link,
	                            { to: '/profile/pass', className: 'list-group-item' },
	                            '密码'
	                        ),
	                        _react2.default.createElement(
	                            _reactRouter.Link,
	                            { to: '/profile/avatar', className: 'list-group-item' },
	                            '头像'
	                        ),
	                        _react2.default.createElement(
	                            _reactRouter.Link,
	                            { to: '/profile/code', className: 'list-group-item' },
	                            '二维码'
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'col-xs-7 col-sm-7 col-md-7 col-lg-7' },
	                    this.props.children
	                )
	            );
	        }
	    }]);

	    return Profile;
	}(_react.Component);

	exports.default = Profile;

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _redux = __webpack_require__(74);

	var _reactRedux = __webpack_require__(67);

	var _profile = __webpack_require__(124);

	var ProfileActions = _interopRequireWildcard(_profile);

	var _Info = __webpack_require__(125);

	var _Info2 = _interopRequireDefault(_Info);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	//绑定state


	//action
	//基础库
	function mapStateToProps(state) {
	    return {
	        login: state.login,
	        profile: state.profile
	    };
	}

	//绑定action


	//视图组件
	function mapDispatchToProps(dispatch) {
	    return (0, _redux.bindActionCreators)(ProfileActions, dispatch);
	}

	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Info2.default);

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.modify_init = modify_init;
	exports.modify_start = modify_start;

	var _actionType = __webpack_require__(94);

	var _ajax = __webpack_require__(96);

	var _ajax2 = _interopRequireDefault(_ajax);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * 状态初始化动作
	 * @returns {{type: string}}
	 */

	function modify_init() {
	    return {
	        type: _actionType.MODIFY_INIT
	    };
	}

	/**
	 * 发起修改请求
	 * @param type -> 修改类型
	 * @param data -> 修改数据
	 */
	function modify_start(type, data) {
	    return function (dispatch, getState) {
	        if (modify_authen(getState())) {
	            return dispatch(modify_ajax(type, data)); //发起一个登录http请求
	        } else {
	            return Promise.resolve(); //告诉thunk无需等待,从而跳过dispatch,进入reducers?
	        }
	    };
	}

	/**
	 * 判断是否正在修改
	 * @param state
	 * @returns {boolean}
	 */
	function modify_authen(state) {
	    return !state.profile.modifying;
	}

	/**
	 * 发起ajax请求
	 * @param type
	 * @param user -> 需要修改的用户信息
	 */
	function modify_ajax(type, user) {

	    return function (dispatch) {
	        dispatch(modify_request()); //挂起注册请求,防止重复请求

	        switch (type) {
	            //修改密码
	            case _actionType.MODIFY_PASS:
	                return (0, _ajax2.default)().modifyPass(user).then(function (data) {
	                    return dispatch(modify_process(type, data));
	                }); //接受到数据后重新更新state

	            //修改邮箱,简介,电话
	            case _actionType.MODIFY_EMAIL:
	            case _actionType.MODIFY_BRIEF:
	            case _actionType.MODIFY_TEL:
	                return (0, _ajax2.default)().modifyInfo(user).then(function (data) {
	                    return dispatch(modify_process(type, data, user));
	                }); //接受到数据后重新更新state

	            default:
	                return dispatch(modify_receive());
	        }
	    };
	}

	/**
	 * 挂起修改请求动作
	 */
	function modify_request() {
	    return {
	        type: _actionType.MODIFY_REQUEST
	    };
	}

	/**
	 * 接收数据处理
	 * @param user -> 需要更改的用户信息
	 * @param type
	 * @param data -> 反馈信息
	 * @returns {Function}
	 */
	function modify_process(type, data, user) {

	    return function (dispatch) {

	        switch (type) {
	            //修改密码
	            case _actionType.MODIFY_PASS:
	                dispatch(modify_receive(data.status));
	                break;

	            //修改邮箱,简介,电话
	            case _actionType.MODIFY_EMAIL:
	            case _actionType.MODIFY_BRIEF:
	            case _actionType.MODIFY_TEL:
	                if (data.status === 'success') {
	                    //一般来说肯定会返回成功,但是数据库那边没有反馈err处理
	                    dispatch(modify_login(user));
	                }
	                return dispatch(modify_receive(data.status));
	                break;

	            default:
	                break;
	        }
	    };
	}

	/**
	 * 发起登录用户信息更改动作
	 * @param user
	 */

	function modify_login(user) {
	    return {
	        type: _actionType.MODIFY_LOGIN,
	        user: user
	    };
	}

	/**
	 * 发起接收处理动作
	 * @param status
	 * @returns {{type: string, status: *}}
	 */
	function modify_receive(status) {
	    return {
	        type: _actionType.MODIFY_RECEIVE,
	        status: status
	    };
	}

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _actionType = __webpack_require__(94);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Info = function (_Component) {
	    _inherits(Info, _Component);

	    function Info() {
	        _classCallCheck(this, Info);

	        return _possibleConstructorReturn(this, (Info.__proto__ || Object.getPrototypeOf(Info)).apply(this, arguments));
	    }

	    _createClass(Info, [{
	        key: '_onClick',
	        value: function _onClick(e) {
	            e.preventDefault();
	            var data = {};
	            var refs = this.refs;

	            switch (e.target.id) {
	                case _actionType.MODIFY_BRIEF:
	                    data = {
	                        brief: refs.brief.value
	                    };
	                    break;

	                case _actionType.MODIFY_EMAIL:
	                    data = {
	                        email: refs.email.value
	                    };
	                    break;

	                case _actionType.MODIFY_TEL:
	                    data = {
	                        tel: refs.tel.value
	                    };
	                    break;

	                default:
	                    break;
	            }

	            this.props.modify_start(e.target.id, data);

	            //清空
	            refs.brief.value = '';
	            refs.email.value = '';
	            refs.tel.value = '';
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var profile = _props.profile;
	            var login = _props.login;


	            return _react2.default.createElement(
	                'div',
	                null,
	                function () {
	                    if (profile.modifyStatus === 'success') {
	                        return _react2.default.createElement(
	                            'div',
	                            { className: 'alert alert-success', role: 'alert' },
	                            '修改成功!'
	                        );
	                    }
	                }(),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'box box-info' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'box-header with-border' },
	                        _react2.default.createElement(
	                            'h3',
	                            { className: 'box-title' },
	                            '个签修改'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'form',
	                        { className: 'form-horizontal' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'box-body' },
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'form-group' },
	                                _react2.default.createElement(
	                                    'label',
	                                    { htmlFor: 'profile_brief', className: 'col-sm-2 control-label' },
	                                    '原始个签'
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'col-sm-10' },
	                                    _react2.default.createElement('input', { type: 'text', className: 'form-control', id: 'profile_brief', value: login.loginUser.brief, disabled: true })
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'form-group' },
	                                _react2.default.createElement(
	                                    'label',
	                                    { htmlFor: 'profile_brief_new', className: 'col-sm-2 control-label' },
	                                    '新的个签'
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'col-sm-10' },
	                                    _react2.default.createElement('input', { type: 'text', className: 'form-control', id: 'profile_brief_new', ref: 'brief', placeholder: 'New Label' })
	                                )
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'box-footer' },
	                            _react2.default.createElement(
	                                'button',
	                                { id: _actionType.MODIFY_BRIEF, type: 'submit', className: 'btn btn-info pull-right', onClick: this._onClick.bind(this) },
	                                '修 改'
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'box-header with-border' },
	                        _react2.default.createElement(
	                            'h3',
	                            { className: 'box-title' },
	                            '邮箱修改'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'form',
	                        { className: 'form-horizontal' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'box-body' },
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'form-group' },
	                                _react2.default.createElement(
	                                    'label',
	                                    { htmlFor: 'profile_email', className: 'col-sm-2 control-label' },
	                                    '原始邮箱'
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'col-sm-10' },
	                                    _react2.default.createElement('input', { type: 'email', className: 'form-control', id: 'profile_email', value: login.loginUser.email, disabled: true })
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'form-group' },
	                                _react2.default.createElement(
	                                    'label',
	                                    { htmlFor: 'profile_email_new', className: 'col-sm-2 control-label' },
	                                    '新的邮箱'
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'col-sm-10' },
	                                    _react2.default.createElement('input', { type: 'email', className: 'form-control', id: 'profile_email_new', ref: 'email', placeholder: 'New Email' })
	                                )
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'box-footer' },
	                            _react2.default.createElement(
	                                'button',
	                                { id: _actionType.MODIFY_EMAIL, type: 'submit', className: 'btn btn-info pull-right', onClick: this._onClick.bind(this) },
	                                '修 改'
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'box-header with-border' },
	                        _react2.default.createElement(
	                            'h3',
	                            { className: 'box-title' },
	                            '电话修改'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'form',
	                        { className: 'form-horizontal' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'box-body' },
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'form-group' },
	                                _react2.default.createElement(
	                                    'label',
	                                    { htmlFor: 'profile_tel', className: 'col-sm-2 control-label' },
	                                    '原始电话'
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'col-sm-10' },
	                                    _react2.default.createElement('input', { type: 'text', className: 'form-control', id: 'profile_tel', value: login.loginUser.tel, disabled: true })
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'form-group' },
	                                _react2.default.createElement(
	                                    'label',
	                                    { htmlFor: 'profile_tel_new', className: 'col-sm-2 control-label' },
	                                    '新的电话'
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'col-sm-10' },
	                                    _react2.default.createElement('input', { type: 'text', className: 'form-control', id: 'profile_tel_new', ref: 'tel', placeholder: 'New Tel' })
	                                )
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'box-footer' },
	                            _react2.default.createElement(
	                                'button',
	                                { id: _actionType.MODIFY_TEL, type: 'submit', className: 'btn btn-info pull-right', onClick: this._onClick.bind(this) },
	                                '修 改'
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return Info;
	}(_react.Component);

	exports.default = Info;

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reactRedux = __webpack_require__(67);

	var _Code = __webpack_require__(127);

	var _Code2 = _interopRequireDefault(_Code);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//基础库
	exports.default = (0, _reactRedux.connect)()(_Code2.default);

	//action


	//视图组件

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Code = function (_Component) {
	    _inherits(Code, _Component);

	    function Code() {
	        _classCallCheck(this, Code);

	        return _possibleConstructorReturn(this, (Code.__proto__ || Object.getPrototypeOf(Code)).apply(this, arguments));
	    }

	    _createClass(Code, [{
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "div",
	                { className: "container" },
	                "二维码"
	            );
	        }
	    }]);

	    return Code;
	}(_react.Component);

	exports.default = Code;

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reactRedux = __webpack_require__(67);

	var _Avatar = __webpack_require__(129);

	var _Avatar2 = _interopRequireDefault(_Avatar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//基础库
	exports.default = (0, _reactRedux.connect)()(_Avatar2.default);

	//action


	//视图组件

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Avatar = function (_Component) {
	    _inherits(Avatar, _Component);

	    function Avatar() {
	        _classCallCheck(this, Avatar);

	        return _possibleConstructorReturn(this, (Avatar.__proto__ || Object.getPrototypeOf(Avatar)).apply(this, arguments));
	    }

	    _createClass(Avatar, [{
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "div",
	                { className: "container" },
	                "头像"
	            );
	        }
	    }]);

	    return Avatar;
	}(_react.Component);

	exports.default = Avatar;

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _redux = __webpack_require__(74);

	var _reactRedux = __webpack_require__(67);

	var _profile = __webpack_require__(124);

	var ProfileActions = _interopRequireWildcard(_profile);

	var _Pass = __webpack_require__(131);

	var _Pass2 = _interopRequireDefault(_Pass);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	//绑定state


	//action
	//基础库
	function mapStateToProps(state) {
	    return {
	        profile: state.profile
	    };
	}

	//绑定action


	//视图组件
	function mapDispatchToProps(dispatch) {
	    return (0, _redux.bindActionCreators)(ProfileActions, dispatch);
	}

	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Pass2.default);

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _actionType = __webpack_require__(94);

	var _httpType = __webpack_require__(95);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Code = function (_Component) {
	    _inherits(Code, _Component);

	    function Code() {
	        _classCallCheck(this, Code);

	        return _possibleConstructorReturn(this, (Code.__proto__ || Object.getPrototypeOf(Code)).apply(this, arguments));
	    }

	    _createClass(Code, [{
	        key: '_onClick',
	        value: function _onClick(e) {
	            e.preventDefault();
	            var pass = this.refs.pass.value,
	                password = this.refs.password.value,
	                verify = this.refs.verify.value;

	            if (pass === password) {
	                this.refs.password.value = '';
	                this.refs.verify.value = '';
	                alert('新密码与原始密码一致!');
	            } else if (password !== verify) {
	                this.refs.password.value = '';
	                this.refs.verify.value = '';
	                alert('两次新密码不一致!');
	            } else {
	                var data = {
	                    oldPwd: pass,
	                    password: password
	                };

	                this.props.modify_start(_actionType.MODIFY_PASS, data);
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var profile = this.props.profile;


	            return _react2.default.createElement(
	                'div',
	                { className: 'box box-info' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'box-header with-border' },
	                    _react2.default.createElement(
	                        'h3',
	                        { className: 'box-title' },
	                        '密码修改'
	                    )
	                ),
	                _react2.default.createElement(
	                    'form',
	                    { className: 'form-horizontal' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'box-body' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'form-group' },
	                            _react2.default.createElement(
	                                'label',
	                                { htmlFor: 'profile_pass', className: 'col-sm-2 control-label' },
	                                '原始密码'
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'col-sm-10' },
	                                _react2.default.createElement('input', { type: 'password', ref: 'pass', className: 'form-control', id: 'profile_pass', placeholder: 'Password' })
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'form-group' },
	                            _react2.default.createElement(
	                                'label',
	                                { htmlFor: 'profile_password', className: 'col-sm-2 control-label' },
	                                '新的密码'
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'col-sm-10' },
	                                _react2.default.createElement('input', { type: 'password', ref: 'password', className: 'form-control', id: 'profile_password', placeholder: 'New Password' })
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'form-group' },
	                            _react2.default.createElement(
	                                'label',
	                                { htmlFor: 'profile_verify', className: 'col-sm-2 control-label' },
	                                '密码确认'
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'col-sm-10' },
	                                _react2.default.createElement('input', { type: 'password', ref: 'verify', className: 'form-control', id: 'verify', placeholder: 'New Password' })
	                            )
	                        )
	                    ),
	                    function () {
	                        switch (profile.modifyStatus) {
	                            case _httpType.old_pwd_err:
	                                return _react2.default.createElement(
	                                    'div',
	                                    { className: 'alert alert-danger', role: 'alert' },
	                                    '原始密码错误!'
	                                );

	                            case _httpType.success:
	                                return _react2.default.createElement(
	                                    'div',
	                                    { className: 'alert alert-success', role: 'alert' },
	                                    '修改成功!'
	                                );
	                            default:
	                                break;
	                        }
	                    }(),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'box-footer' },
	                        _react2.default.createElement(
	                            'button',
	                            { type: 'submit', className: 'btn btn-info pull-right', onClick: this._onClick.bind(this) },
	                            '修 改'
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return Code;
	}(_react.Component);

	exports.default = Code;

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _reactRedux = __webpack_require__(67);

	var _Article = __webpack_require__(133);

	var _Article2 = _interopRequireDefault(_Article);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//绑定article store到Article组件
	//基础库
	function mapStateToProps(state) {
	    return {
	        articles: state.articles
	    };
	}

	//action


	//视图组件
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(_Article2.default);

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Article = function (_Component) {
	    _inherits(Article, _Component);

	    function Article() {
	        _classCallCheck(this, Article);

	        return _possibleConstructorReturn(this, (Article.__proto__ || Object.getPrototypeOf(Article)).apply(this, arguments));
	    }

	    _createClass(Article, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var articles = _props.articles;
	            var params = _props.params;

	            var loading = true; //正在获取文章
	            var showArticle = {}; //显示的文章

	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;

	            try {
	                for (var _iterator = articles.contentList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var article = _step.value;

	                    if (article._id === params.id) {
	                        showArticle = article;
	                        loading = false; //已经获取到文章
	                        break;
	                    }
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }

	            return _react2.default.createElement(
	                'div',
	                { className: 'container' },
	                _react2.default.createElement('br', null),
	                loading ? _react2.default.createElement(
	                    'div',
	                    { className: 'alert alert-info', role: 'alert' },
	                    '文章正在加载,请稍后...'
	                ) : _react2.default.createElement(
	                    'div',
	                    { className: 'row' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'col-lg-4 col-md-4 col-sm-12' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'module-categories module' },
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'box box-primary row' },
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'box-body box-profile col-sm-12 col-md-12 col-lg-12' },
	                                    _react2.default.createElement(
	                                        'a',
	                                        null,
	                                        _react2.default.createElement('img', { src: showArticle.avatarUrl, className: 'profile-user-img img-responsive img-circle', alt: '个人照片' })
	                                    ),
	                                    _react2.default.createElement(
	                                        'h3',
	                                        { className: 'profile-username text-center' },
	                                        showArticle.author
	                                    ),
	                                    _react2.default.createElement(
	                                        'p',
	                                        { className: 'text-muted text-center' },
	                                        showArticle.brief
	                                    ),
	                                    _react2.default.createElement(
	                                        'p',
	                                        { className: 'text-muted text-center' },
	                                        showArticle.team
	                                    ),
	                                    _react2.default.createElement(
	                                        'ul',
	                                        { className: 'list-group list-group-unbordered' },
	                                        _react2.default.createElement(
	                                            'li',
	                                            { className: 'list-group-item' },
	                                            _react2.default.createElement(
	                                                'b',
	                                                null,
	                                                '联系方式:'
	                                            ),
	                                            _react2.default.createElement(
	                                                'a',
	                                                { className: 'pull-right', title: showArticle.tel },
	                                                showArticle.tel
	                                            )
	                                        ),
	                                        _react2.default.createElement(
	                                            'li',
	                                            { className: 'list-group-item' },
	                                            _react2.default.createElement(
	                                                'b',
	                                                null,
	                                                '邮箱:'
	                                            ),
	                                            _react2.default.createElement(
	                                                'a',
	                                                { className: 'pull-right', title: showArticle.email, href: "mailto:" + showArticle.email },
	                                                showArticle.email
	                                            )
	                                        )
	                                    ),
	                                    _react2.default.createElement(
	                                        _reactRouter.Link,
	                                        { to: '/user/' + showArticle.userId, className: 'btn btn-primary btn-block' },
	                                        _react2.default.createElement(
	                                            'b',
	                                            null,
	                                            '更多文章...'
	                                        )
	                                    )
	                                )
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'col-lg-8 col-md-8 col-sm-12' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'content-wrapper bg-content' },
	                            _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: showArticle.content } })
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'jumbotron' },
	                            _react2.default.createElement(
	                                'p',
	                                null,
	                                '扫二维码'
	                            ),
	                            _react2.default.createElement('img', { src: showArticle.codeUrl, alt: '扫二维码' })
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return Article;
	}(_react.Component);

	exports.default = Article;

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _reactRedux = __webpack_require__(67);

	var _User = __webpack_require__(135);

	var _User2 = _interopRequireDefault(_User);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//绑定user store到user组件
	//基础库
	function mapStateToProps(state) {
	    return {
	        user: state.user
	    };
	}

	//action


	//视图组件
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(_User2.default);

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var User = function (_Component) {
	    _inherits(User, _Component);

	    function User() {
	        _classCallCheck(this, User);

	        return _possibleConstructorReturn(this, (User.__proto__ || Object.getPrototypeOf(User)).apply(this, arguments));
	    }

	    _createClass(User, [{
	        key: 'render',
	        value: function render() {

	            var loading = true;
	            var _props = this.props;
	            var user = _props.user;
	            var params = _props.params;

	            var lists = user.articleList;

	            var showList = {}; //显示的文章列表

	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;

	            try {
	                for (var _iterator = lists[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var articleList = _step.value;

	                    if (articleList._id === params.id) {
	                        showList = articleList;
	                        loading = false; //已经获取到用户列表
	                        break;
	                    }
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }

	            return _react2.default.createElement(
	                'div',
	                { className: 'content-wrapper' },
	                _react2.default.createElement('br', null),
	                loading ? _react2.default.createElement(
	                    'div',
	                    { className: 'alert alert-info', role: 'alert' },
	                    '信息正在加载,请稍后...'
	                ) : _react2.default.createElement(
	                    'div',
	                    { className: 'info-box' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'info-box-content' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'container authors-info' },
	                            _react2.default.createElement(
	                                'blockquote',
	                                null,
	                                _react2.default.createElement(
	                                    'p',
	                                    { className: 'module-list-item' },
	                                    _react2.default.createElement(
	                                        'a',
	                                        null,
	                                        _react2.default.createElement('img', { src: showList.avatarUrl, 'class': 'img-circle', width: '60', height: '80', alt: '个人照片' })
	                                    )
	                                ),
	                                _react2.default.createElement(
	                                    'ul',
	                                    { className: 'module-list' },
	                                    _react2.default.createElement(
	                                        'li',
	                                        { className: 'module-list-item' },
	                                        '作者:',
	                                        showList.author
	                                    ),
	                                    _react2.default.createElement(
	                                        'li',
	                                        { className: 'module-list-item' },
	                                        '联系方式：',
	                                        showList.tel
	                                    ),
	                                    _react2.default.createElement(
	                                        'li',
	                                        { className: 'module-list-item' },
	                                        '邮箱: ',
	                                        showList.email
	                                    )
	                                )
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'container author-info-list' },
	                            _react2.default.createElement(
	                                'ul',
	                                { className: 'timeline' },
	                                _react2.default.createElement(
	                                    'li',
	                                    { className: 'time-label' },
	                                    _react2.default.createElement(
	                                        'span',
	                                        { className: 'bg-red' },
	                                        '10 Feb. 2014'
	                                    )
	                                ),
	                                showList.articleList.map(function (article, index, lists) {
	                                    return _react2.default.createElement(
	                                        'li',
	                                        { key: article._id },
	                                        _react2.default.createElement('i', { className: 'fa fa-comment-o bg-yellow' }),
	                                        _react2.default.createElement(
	                                            'div',
	                                            { className: 'timeline-item' },
	                                            _react2.default.createElement(
	                                                'span',
	                                                { className: 'time' },
	                                                _react2.default.createElement('i', { className: 'fa fa-clock-o' }),
	                                                'article.createTime'
	                                            ),
	                                            _react2.default.createElement(
	                                                'h3',
	                                                { className: 'timeline-header' },
	                                                _react2.default.createElement(
	                                                    _reactRouter.Link,
	                                                    { to: '/article/' + article._id },
	                                                    article.title
	                                                )
	                                            ),
	                                            _react2.default.createElement(
	                                                'div',
	                                                { className: 'timeline-body' },
	                                                article.describe
	                                            ),
	                                            _react2.default.createElement(
	                                                'div',
	                                                { className: 'timeline-footer' },
	                                                _react2.default.createElement(
	                                                    _reactRouter.Link,
	                                                    { to: '/article/' + article._id, className: 'btn btn-primary btn-xs' },
	                                                    '阅读全文...'
	                                                )
	                                            )
	                                        )
	                                    );
	                                })
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return User;
	}(_react.Component);

	exports.default = User;

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _redux = __webpack_require__(74);

	var _reactRedux = __webpack_require__(67);

	var _Login = __webpack_require__(137);

	var _Login2 = _interopRequireDefault(_Login);

	var _login = __webpack_require__(139);

	var LoginActions = _interopRequireWildcard(_login);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//绑定login store到Login组件


	//视图组件
	//基础库
	//import React,{ Component } from 'react';
	function mapStateToProps(state) {
	    return {
	        login: state.login
	    };
	}

	//绑定login action到Login组件


	//action
	function mapDispatchToProps(dispatch) {
	    return (0, _redux.bindActionCreators)(LoginActions, dispatch);
	}

	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Login2.default);

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	var _Input = __webpack_require__(118);

	var _Input2 = _interopRequireDefault(_Input);

	var _Button = __webpack_require__(119);

	var _Button2 = _interopRequireDefault(_Button);

	var _privateType = __webpack_require__(138);

	var _httpType = __webpack_require__(95);

	var _history = __webpack_require__(106);

	var _history2 = _interopRequireDefault(_history);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //基础库


	//基础组件


	//常量
	//私有函数常量
	//登录状态常量

	//导航


	var Login = function (_Component) {
	    _inherits(Login, _Component);

	    function Login() {
	        _classCallCheck(this, Login);

	        return _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).apply(this, arguments));
	    }

	    _createClass(Login, [{
	        key: 'componentWillUpdate',


	        //这里是否可以加static属性,公司测试
	        //不能修改属性和状态,在render之前接收到新的props和state进行执行
	        value: function componentWillUpdate(nextProps, nextState) {
	            //console.log(nextProps.login);
	            if (nextProps.login.logined) {
	                _history2.default.replace({
	                    pathname: '/index'
	                });
	            }
	        }
	    }, {
	        key: '_onClick',
	        value: function _onClick(e) {
	            e.preventDefault();
	            //console.log(this.refs.username.value);
	            //console.log(this.refs.password.value);    //使用此种方式主要用于制作可控表单
	            //let username = document.getElementById('username'),
	            //    password = document.getElementById('password');


	            var username = $('#login_username').val(),
	                password = $('#login_password').val();

	            //这里还要做一个登录格式验证

	            if (username.trim() && password.trim()) {
	                //console.log(username.value);
	                //console.log(password.value);
	                var user = {
	                    author: username.trim(),
	                    password: password.trim()
	                };

	                //console.log('user:',user);
	                this.props.login_start(user);
	                //console.log('this.props.login:',this.props.login);
	            } else {
	                alert('空');
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var login = this.props.login; //注意这里应该查看容易中允许传入的state属性
	            //console.log(login.loginStatus);

	            return _react2.default.createElement(
	                'div',
	                { className: 'login-box skin-login' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'login-logo' },
	                    _react2.default.createElement(
	                        _reactRouter.Link,
	                        { to: '/' },
	                        _react2.default.createElement(
	                            'strong',
	                            null,
	                            'Watch'
	                        ),
	                        'Hill'
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'login-box-body' },
	                    _react2.default.createElement(
	                        'p',
	                        { className: 'login-box-msg' },
	                        '账号登录'
	                    ),
	                    function () {
	                        switch (login.loginStatus) {
	                            case _httpType.user_no_exist:
	                                return _react2.default.createElement(
	                                    'div',
	                                    { className: 'alert alert-danger', role: 'alert' },
	                                    '用户名不存在!'
	                                );

	                            case _httpType.password_err:
	                                return _react2.default.createElement(
	                                    'div',
	                                    { className: 'alert alert-danger', role: 'alert' },
	                                    '密码错误!'
	                                );
	                            default:
	                                break;
	                        }
	                    }(),
	                    _react2.default.createElement(
	                        'from',
	                        null,
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'form-group has-feedback' },
	                            _react2.default.createElement(_Input2.default, { id: 'login_username', type: 'text', className: 'form-control', placeholder: '账号' }),
	                            _react2.default.createElement(
	                                'span',
	                                { className: 'form-control-feedback' },
	                                ' ',
	                                _react2.default.createElement('i', { className: 'fa fa-user fa-fw' })
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'form-group has-feedback' },
	                            _react2.default.createElement(_Input2.default, { id: 'login_password', type: 'password', className: 'form-control', placeholder: '密码' }),
	                            _react2.default.createElement(
	                                'span',
	                                { className: 'form-control-feedback' },
	                                ' ',
	                                _react2.default.createElement('i', { className: 'fa fa-lock fa-fw' })
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'row' },
	                            _react2.default.createElement('div', { className: 'col-xs-8' }),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'col-xs-4' },
	                                _react2.default.createElement(
	                                    _Button2.default,
	                                    { type: 'submit', className: ' btn-primary btn-block btn-flat btn', onClick: this._onClick.bind(this) },
	                                    '登录'
	                                )
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return Login;
	}(_react.Component);

	Login.propTypes = {
	    login_start: _react.PropTypes.func.isRequired,
	    login: _react.PropTypes.object.isRequired
	};
	exports.default = Login;

/***/ },
/* 138 */
/***/ function(module, exports) {

	'use strict';

	//私有函数常量

	module.exports = {
	    _onClick: Symbol('_onClick')
	};

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.login_init = login_init;
	exports.login_start = login_start;
	exports.login_reveive = login_reveive;

	var _actionType = __webpack_require__(94);

	var _ajax = __webpack_require__(96);

	var _ajax2 = _interopRequireDefault(_ajax);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * 视图初始化
	 */
	function login_init() {
	    return {
	        type: _actionType.LOGIN_INIT
	    };
	}

	/**
	 * 准备开始登录
	 * @param user -> 登录用户
	 * @returns {Function}
	 */
	function login_start(user) {
	    return function (dispatch, getState) {
	        if (login_authen(getState())) {
	            return dispatch(login_ajax(user)); //发起一个登录http请求
	        } else {
	            return Promise.resolve(); //告诉thunk无需等待,从而跳过dispatch,进入reducers?
	        }
	    };
	}

	/**
	 * 判断是否已经登录,以及是否正在登录
	 * @param state
	 * @returns {boolean} true -> 可以进行登录操作,这一步可以控制HTTP请求数,防止恶意的重复请求
	 */
	function login_authen(state) {
	    return !state.login.logined && !state.login.logining;
	}

	/**
	 * 发起登录的ajax请求
	 * @param user
	 * @param pass
	 * @returns {Function}
	 */
	function login_ajax(user) {
	    return function (dispatch) {
	        dispatch(login_request()); //挂起登录请求,防止重复请求
	        return (0, _ajax2.default)().login(user).then(function (data) {
	            return dispatch(login_reveive(data));
	        }); //接受到数据后重新更新state
	    };
	}

	/**
	 * 挂起请求登录
	 * @param user
	 * @returns {{type: string, user: *}}
	 */
	function login_request() {
	    return {
	        type: _actionType.LOGIN_REQUEST
	    };
	}

	/**
	 * ajax数据接收处理
	 * @param user
	 * @param status
	 * @returns {{type: string, user: {username: *}, status: *}}
	 */

	function login_reveive(data) {
	    return {
	        type: _actionType.LOGIN_RECEIVE,
	        user: data.data,
	        status: data.status
	    };
	}

	///**
	// * 这里暂时放一下ajax,最后可以独立出来
	// */
	//
	//function ajax(){
	//    function req(method,url,data) {
	//        var defered = $.Deferred();
	//        var request = {
	//            type: method,
	//            url: url,
	//            //dataType: "json"?
	//            data: data
	//        };
	//
	//        $.ajax(request)
	//            .done(function(data){
	//                defered.resolve(data);
	//            })
	//            .fail(function(){
	//                defered.reject();
	//            });
	//
	//        return defered.promise();
	//    }
	//
	//    return {
	//        login: function(data){
	//            return req('POST','/user/login',data);
	//        }
	//    };
	//}

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _redux = __webpack_require__(74);

	var _reactRedux = __webpack_require__(67);

	var _Register = __webpack_require__(141);

	var _Register2 = _interopRequireDefault(_Register);

	var _register = __webpack_require__(142);

	var RegisterActions = _interopRequireWildcard(_register);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//绑定login store到Login组件,注册的同时也登录了,所以绑定login store


	//视图组件
	//基础库
	function mapStateToProps(state) {
	    return {
	        register: state.register,
	        login: state.login
	    };
	}

	//绑定register action到Login组件


	//action
	function mapDispatchToProps(dispatch) {
	    return (0, _redux.bindActionCreators)(RegisterActions, dispatch);
	}

	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Register2.default);

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	var _Input = __webpack_require__(118);

	var _Input2 = _interopRequireDefault(_Input);

	var _Button = __webpack_require__(119);

	var _Button2 = _interopRequireDefault(_Button);

	var _privateType = __webpack_require__(138);

	var _httpType = __webpack_require__(95);

	var _history = __webpack_require__(106);

	var _history2 = _interopRequireDefault(_history);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //基础库


	//基础组件


	//常量
	//私有函数常量
	//注册状态常量

	//导航


	var Login = function (_Component) {
	    _inherits(Login, _Component);

	    function Login() {
	        _classCallCheck(this, Login);

	        return _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).apply(this, arguments));
	    }

	    _createClass(Login, [{
	        key: 'componentWillUpdate',
	        value: function componentWillUpdate(nextProps, nextState) {
	            if (nextProps.login.logined) {
	                _history2.default.replace({
	                    pathname: '/index'
	                });
	            }
	        }
	    }, {
	        key: '_onClick',
	        value: function _onClick(e) {
	            e.preventDefault();

	            var username = $('#register_username').val().trim(),
	                pass = $('#register_pass').val().trim(),
	                password = $('#register_password').val().trim(),
	                email = $('#register_email').val().trim(),
	                tel = $('#register_tel').val().trim(),
	                team = $('#register_team').val().trim();

	            //这里先暂时不检测
	            if (username && password && email && tel && team) {
	                var user = {
	                    author: username,
	                    password: password,
	                    email: email,
	                    tel: tel,
	                    team: team
	                };

	                this.props.register_start(user);
	            } else {
	                alert('请填写完整!');
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var register = this.props.register;


	            return _react2.default.createElement(
	                'div',
	                { className: 'login-box' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'login-logo' },
	                    _react2.default.createElement(
	                        _reactRouter.Link,
	                        { to: '/' },
	                        _react2.default.createElement(
	                            'strong',
	                            null,
	                            'Watch'
	                        ),
	                        'Hill'
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'login-box-body' },
	                    _react2.default.createElement(
	                        'p',
	                        { className: 'login-box-msg' },
	                        '账号注册'
	                    ),
	                    function () {
	                        if (register.registerStatus === _httpType.user_exist) {
	                            return _react2.default.createElement(
	                                'div',
	                                { className: 'alert alert-danger', role: 'alert' },
	                                '用户名已经存在!'
	                            );
	                        }
	                    }(),
	                    _react2.default.createElement(
	                        'form',
	                        null,
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'form-group has-feedback' },
	                            _react2.default.createElement(_Input2.default, { id: 'register_username', name: 'author', type: 'text', className: 'form-control', placeholder: '账号' }),
	                            _react2.default.createElement(
	                                'span',
	                                { className: 'form-control-feedback' },
	                                ' ',
	                                _react2.default.createElement('i', { className: 'fa fa-user fa-fw' })
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'form-group has-feedback' },
	                            _react2.default.createElement(_Input2.default, { id: 'register_pass', name: 'pass', type: 'password', className: 'form-control', placeholder: '密码' }),
	                            _react2.default.createElement(
	                                'span',
	                                { className: 'form-control-feedback' },
	                                ' ',
	                                _react2.default.createElement('i', { className: 'fa fa-lock fa-fw' })
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'form-group has-feedback' },
	                            _react2.default.createElement(_Input2.default, { id: 'register_password', name: 'password', type: 'password', className: 'form-control', placeholder: '密码确认' }),
	                            _react2.default.createElement(
	                                'span',
	                                { className: 'form-control-feedback' },
	                                ' ',
	                                _react2.default.createElement('i', { className: 'fa fa-lock fa-fw' })
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'form-group has-feedback' },
	                            _react2.default.createElement(_Input2.default, { id: 'register_email', name: 'email', type: 'email', className: 'form-control', placeholder: '邮箱' }),
	                            _react2.default.createElement(
	                                'span',
	                                { className: 'form-control-feedback' },
	                                ' ',
	                                _react2.default.createElement('i', { className: 'fa fa-comment fa-fw' })
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'form-group has-feedback' },
	                            _react2.default.createElement(_Input2.default, { id: 'register_tel', name: 'tel', type: 'text', className: 'form-control', placeholder: '电话' }),
	                            _react2.default.createElement(
	                                'span',
	                                { className: 'form-control-feedback' },
	                                ' ',
	                                _react2.default.createElement('i', { className: 'fa fa-phone fa-fw' })
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'form-group has-feedback' },
	                            _react2.default.createElement(
	                                'select',
	                                { id: 'register_team', name: 'team', className: 'form-control' },
	                                _react2.default.createElement(
	                                    'option',
	                                    { value: 'Web前端组' },
	                                    'Web前端组'
	                                )
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'row' },
	                            _react2.default.createElement('div', { className: 'col-xs-8' }),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'col-xs-4' },
	                                _react2.default.createElement(
	                                    _Button2.default,
	                                    { type: 'submit', id: 'submit', className: 'btn btn-primary btn-block btn-flat', onClick: this._onClick.bind(this) },
	                                    '注册'
	                                )
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return Login;
	}(_react.Component);

	Login.propTypes = {
	    register: _react.PropTypes.object.isRequired
	};
	exports.default = Login;

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.register_init = register_init;
	exports.register_start = register_start;

	var _actionType = __webpack_require__(94);

	var _ajax = __webpack_require__(96);

	var _ajax2 = _interopRequireDefault(_ajax);

	var _httpType = __webpack_require__(95);

	var _login = __webpack_require__(139);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * 视图初始化
	 */
	function register_init() {
	    return {
	        type: _actionType.REGISTER_INIT
	    };
	}

	/**
	 * 准备开始注册
	 * @param user -> 注册用户
	 * @returns {Function}
	 */
	function register_start(user) {
	    return function (dispatch, getState) {
	        if (register_authen(getState())) {
	            return dispatch(register_ajax(user)); //发起一个登录http请求
	        } else {
	            return Promise.resolve(); //告诉thunk无需等待,从而跳过dispatch,进入reducers?
	        }
	    };
	}

	/**
	 * 判断是否正在注册
	 * @param state
	 * @returns {boolean}
	 */

	function register_authen(state) {
	    return !state.register.registering;
	}

	/**
	 * 发起注册的ajax请求
	 * @param user
	 */
	function register_ajax(user) {
	    return function (dispatch) {
	        dispatch(register_request()); //挂起注册请求,防止重复请求
	        return (0, _ajax2.default)().register(user).then(function (data) {
	            return dispatch(register_process(data));
	        }); //接受到数据后重新更新state
	    };
	}

	/**
	 * 挂起注册请求
	 * @returns {{type: string}}
	 */

	function register_request() {
	    return {
	        type: _actionType.REGISTER_REQUEST
	    };
	}

	/**
	 * 接收状态处理
	 * @param user
	 * @param data
	 * @returns {{type: *, user: {username: *}, status: *}}
	 */
	function register_process(data) {

	    if (status === _httpType.user_exist) {
	        //注册失败
	        return register_recieve(data.status);
	    } else {
	        //注册成功
	        return function (dispatch) {
	            dispatch((0, _login.login_reveive)(data)); //登录state tree
	            return dispatch(register_recieve(data.status));
	        };
	    }
	}

	/**
	 * 发起receive请求
	 * @param status
	 * @returns {{type: string, status: *}}
	 */
	function register_recieve(status) {
	    return {
	        type: _actionType.REGISTER_RECEIVE,
	        status: status
	    };
	}

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.article_getContent = article_getContent;

	var _actionType = __webpack_require__(94);

	var _ajax = __webpack_require__(96);

	var _ajax2 = _interopRequireDefault(_ajax);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * 获取文章内容
	 * @param id -> 需要获取的文章id
	 * @returns {Function}
	 */
	function article_getContent(id) {
	    return function (dispatch, getState) {
	        if (article_authen(getState())) {
	            return dispatch(article_ajax(id)); //发起一个http请求
	        } else {
	            return Promise.resolve(); //告诉thunk无需等待,从而跳过dispatch,进入reducers?
	        }
	    };
	}

	/**
	 * 判断是否正在获取文章
	 * @param state
	 */

	function article_authen(state) {
	    return !state.articles.getting;
	}

	/**
	 * 发起获取文章内容的ajax
	 * @param id
	 */
	function article_ajax(id) {
	    return function (dispatch) {
	        dispatch(article_request()); //挂起登录请求,防止重复请求
	        return (0, _ajax2.default)().article(id).then(function (data) {
	            return dispatch(article_reveive(id, data));
	        }); //接受到数据后重新更新state
	    };
	}

	/**
	 * 挂起获取文章内容请求
	 * @returns {{type: string}}
	 */
	function article_request() {
	    return {
	        type: _actionType.ARTICLE_REQUEST
	    };
	}

	/**
	 * 获取文章内容
	 * @param id
	 * @param data
	 * @returns {{type: string}}
	 */
	function article_reveive(id, data) {

	    data.userId = data._id; //用户Id
	    data._id = id.articleId; //文章Id

	    return {
	        type: _actionType.ARTICLE_RECEIVE,
	        data: data
	    };
	}

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.user_getList = user_getList;

	var _actionType = __webpack_require__(94);

	var _ajax = __webpack_require__(96);

	var _ajax2 = _interopRequireDefault(_ajax);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * 获取个人文章列表
	 * @param id -> 用户id
	 * @returns {Function}
	 */
	function user_getList(id) {
	    return function (dispatch, getState) {
	        if (user_authen(getState())) {
	            return dispatch(user_ajax(id)); //发起一个http请求
	        } else {
	            return Promise.resolve(); //告诉thunk无需等待,从而跳过dispatch,进入reducers?
	        }
	    };
	}

	/**
	 * 判断是否正在获取
	 * @param state
	 */

	function user_authen(state) {
	    return !state.user.getting;
	}

	/**
	 * 发起获取文章列表的ajax
	 * @param id
	 */
	function user_ajax(id) {
	    return function (dispatch) {
	        dispatch(user_request()); //挂起登录请求,防止重复请求
	        return (0, _ajax2.default)().user(id).then(function (data) {
	            return dispatch(user_reveive(id, data));
	        }); //接受到数据后重新更新state
	    };
	}

	/**
	 * 挂起获取文章列表请求
	 * @returns {{type: string}}
	 */
	function user_request() {
	    return {
	        type: _actionType.USER_REQUEST
	    };
	}

	/**
	 * 获取文章列表
	 * @param id
	 * @param data
	 * @returns {{type: string}}
	 */
	function user_reveive(id, data) {

	    return {
	        type: _actionType.USER_RECEIVE,
	        data: data.data
	    };
	}

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = configureStore;

	var _redux = __webpack_require__(74);

	var _reduxThunk = __webpack_require__(146);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	var _reduxLogger = __webpack_require__(147);

	var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

	var _reducers = __webpack_require__(148);

	var _reducers2 = _interopRequireDefault(_reducers);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//基础库
	var loggerMiddleware = (0, _reduxLogger2.default)();

	//reducers -> 改变state


	//中间件
	function configureStore(preloadedState) {
		var store = (0, _redux.createStore)(_reducers2.default, preloadedState, (0, _redux.applyMiddleware)(_reduxThunk2.default, loggerMiddleware));

		return store;
	}

/***/ },
/* 146 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	function createThunkMiddleware(extraArgument) {
	  return function (_ref) {
	    var dispatch = _ref.dispatch;
	    var getState = _ref.getState;
	    return function (next) {
	      return function (action) {
	        if (typeof action === 'function') {
	          return action(dispatch, getState, extraArgument);
	        }

	        return next(action);
	      };
	    };
	  };
	}

	var thunk = createThunkMiddleware();
	thunk.withExtraArgument = createThunkMiddleware;

	exports['default'] = thunk;

/***/ },
/* 147 */
/***/ function(module, exports) {

	"use strict";

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

	var repeat = function repeat(str, times) {
	  return new Array(times + 1).join(str);
	};
	var pad = function pad(num, maxLength) {
	  return repeat("0", maxLength - num.toString().length) + num;
	};
	var formatTime = function formatTime(time) {
	  return "@ " + pad(time.getHours(), 2) + ":" + pad(time.getMinutes(), 2) + ":" + pad(time.getSeconds(), 2) + "." + pad(time.getMilliseconds(), 3);
	};

	// Use the new performance api to get better precision if available
	var timer = typeof performance !== "undefined" && typeof performance.now === "function" ? performance : Date;

	/**
	 * parse the level option of createLogger
	 *
	 * @property {string | function | object} level - console[level]
	 * @property {object} action
	 * @property {array} payload
	 * @property {string} type
	 */

	function getLogLevel(level, action, payload, type) {
	  switch (typeof level === "undefined" ? "undefined" : _typeof(level)) {
	    case "object":
	      return typeof level[type] === "function" ? level[type].apply(level, _toConsumableArray(payload)) : level[type];
	    case "function":
	      return level(action);
	    default:
	      return level;
	  }
	}

	/**
	 * Creates logger with followed options
	 *
	 * @namespace
	 * @property {object} options - options for logger
	 * @property {string | function | object} options.level - console[level]
	 * @property {boolean} options.duration - print duration of each action?
	 * @property {boolean} options.timestamp - print timestamp with each action?
	 * @property {object} options.colors - custom colors
	 * @property {object} options.logger - implementation of the `console` API
	 * @property {boolean} options.logErrors - should errors in action execution be caught, logged, and re-thrown?
	 * @property {boolean} options.collapsed - is group collapsed?
	 * @property {boolean} options.predicate - condition which resolves logger behavior
	 * @property {function} options.stateTransformer - transform state before print
	 * @property {function} options.actionTransformer - transform action before print
	 * @property {function} options.errorTransformer - transform error before print
	 */

	function createLogger() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	  var _options$level = options.level;
	  var level = _options$level === undefined ? "log" : _options$level;
	  var _options$logger = options.logger;
	  var logger = _options$logger === undefined ? console : _options$logger;
	  var _options$logErrors = options.logErrors;
	  var logErrors = _options$logErrors === undefined ? true : _options$logErrors;
	  var collapsed = options.collapsed;
	  var predicate = options.predicate;
	  var _options$duration = options.duration;
	  var duration = _options$duration === undefined ? false : _options$duration;
	  var _options$timestamp = options.timestamp;
	  var timestamp = _options$timestamp === undefined ? true : _options$timestamp;
	  var transformer = options.transformer;
	  var _options$stateTransfo = options.stateTransformer;
	  var // deprecated
	  stateTransformer = _options$stateTransfo === undefined ? function (state) {
	    return state;
	  } : _options$stateTransfo;
	  var _options$actionTransf = options.actionTransformer;
	  var actionTransformer = _options$actionTransf === undefined ? function (actn) {
	    return actn;
	  } : _options$actionTransf;
	  var _options$errorTransfo = options.errorTransformer;
	  var errorTransformer = _options$errorTransfo === undefined ? function (error) {
	    return error;
	  } : _options$errorTransfo;
	  var _options$colors = options.colors;
	  var colors = _options$colors === undefined ? {
	    title: function title() {
	      return "#000000";
	    },
	    prevState: function prevState() {
	      return "#9E9E9E";
	    },
	    action: function action() {
	      return "#03A9F4";
	    },
	    nextState: function nextState() {
	      return "#4CAF50";
	    },
	    error: function error() {
	      return "#F20404";
	    }
	  } : _options$colors;

	  // exit if console undefined

	  if (typeof logger === "undefined") {
	    return function () {
	      return function (next) {
	        return function (action) {
	          return next(action);
	        };
	      };
	    };
	  }

	  if (transformer) {
	    console.error("Option 'transformer' is deprecated, use stateTransformer instead");
	  }

	  var logBuffer = [];
	  function printBuffer() {
	    logBuffer.forEach(function (logEntry, key) {
	      var started = logEntry.started;
	      var startedTime = logEntry.startedTime;
	      var action = logEntry.action;
	      var prevState = logEntry.prevState;
	      var error = logEntry.error;
	      var took = logEntry.took;
	      var nextState = logEntry.nextState;

	      var nextEntry = logBuffer[key + 1];
	      if (nextEntry) {
	        nextState = nextEntry.prevState;
	        took = nextEntry.started - started;
	      }
	      // message
	      var formattedAction = actionTransformer(action);
	      var isCollapsed = typeof collapsed === "function" ? collapsed(function () {
	        return nextState;
	      }, action) : collapsed;

	      var formattedTime = formatTime(startedTime);
	      var titleCSS = colors.title ? "color: " + colors.title(formattedAction) + ";" : null;
	      var title = "action " + (timestamp ? formattedTime : "") + " " + formattedAction.type + " " + (duration ? "(in " + took.toFixed(2) + " ms)" : "");

	      // render
	      try {
	        if (isCollapsed) {
	          if (colors.title) logger.groupCollapsed("%c " + title, titleCSS);else logger.groupCollapsed(title);
	        } else {
	          if (colors.title) logger.group("%c " + title, titleCSS);else logger.group(title);
	        }
	      } catch (e) {
	        logger.log(title);
	      }

	      var prevStateLevel = getLogLevel(level, formattedAction, [prevState], "prevState");
	      var actionLevel = getLogLevel(level, formattedAction, [formattedAction], "action");
	      var errorLevel = getLogLevel(level, formattedAction, [error, prevState], "error");
	      var nextStateLevel = getLogLevel(level, formattedAction, [nextState], "nextState");

	      if (prevStateLevel) {
	        if (colors.prevState) logger[prevStateLevel]("%c prev state", "color: " + colors.prevState(prevState) + "; font-weight: bold", prevState);else logger[prevStateLevel]("prev state", prevState);
	      }

	      if (actionLevel) {
	        if (colors.action) logger[actionLevel]("%c action", "color: " + colors.action(formattedAction) + "; font-weight: bold", formattedAction);else logger[actionLevel]("action", formattedAction);
	      }

	      if (error && errorLevel) {
	        if (colors.error) logger[errorLevel]("%c error", "color: " + colors.error(error, prevState) + "; font-weight: bold", error);else logger[errorLevel]("error", error);
	      }

	      if (nextStateLevel) {
	        if (colors.nextState) logger[nextStateLevel]("%c next state", "color: " + colors.nextState(nextState) + "; font-weight: bold", nextState);else logger[nextStateLevel]("next state", nextState);
	      }

	      try {
	        logger.groupEnd();
	      } catch (e) {
	        logger.log("—— log end ——");
	      }
	    });
	    logBuffer.length = 0;
	  }

	  return function (_ref) {
	    var getState = _ref.getState;
	    return function (next) {
	      return function (action) {
	        // exit early if predicate function returns false
	        if (typeof predicate === "function" && !predicate(getState, action)) {
	          return next(action);
	        }

	        var logEntry = {};
	        logBuffer.push(logEntry);

	        logEntry.started = timer.now();
	        logEntry.startedTime = new Date();
	        logEntry.prevState = stateTransformer(getState());
	        logEntry.action = action;

	        var returnedValue = undefined;
	        if (logErrors) {
	          try {
	            returnedValue = next(action);
	          } catch (e) {
	            logEntry.error = errorTransformer(e);
	          }
	        } else {
	          returnedValue = next(action);
	        }

	        logEntry.took = timer.now() - logEntry.started;
	        logEntry.nextState = stateTransformer(getState());

	        printBuffer();

	        if (logEntry.error) throw logEntry.error;
	        return returnedValue;
	      };
	    };
	  };
	}

	module.exports = createLogger;

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _redux = __webpack_require__(74);

	var _login = __webpack_require__(149);

	var _login2 = _interopRequireDefault(_login);

	var _register = __webpack_require__(150);

	var _register2 = _interopRequireDefault(_register);

	var _articles = __webpack_require__(151);

	var _articles2 = _interopRequireDefault(_articles);

	var _addArticle = __webpack_require__(152);

	var _addArticle2 = _interopRequireDefault(_addArticle);

	var _profile = __webpack_require__(153);

	var _profile2 = _interopRequireDefault(_profile);

	var _user = __webpack_require__(154);

	var _user2 = _interopRequireDefault(_user);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//个人中心-用户修改

	//文章


	//登录
	var reducer = (0, _redux.combineReducers)({
		login: _login2.default,
		register: _register2.default,
		articles: _articles2.default,
		addArticle: _addArticle2.default,
		profile: _profile2.default,
		user: _user2.default
	});
	//个人文章列表

	//添加文章

	//注册
	//基础库
	exports.default = reducer;

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _actionType = __webpack_require__(94);

	var _httpType = __webpack_require__(95);

	/**
	 * 登录状态设置
	 * @param state
	 * @param action
	 * @returns {*}
	 */
	var login_status = function login_status(state, action) {
		switch (action.status) {

			case _httpType.user_no_exist:
				return {
					//logined:false,
					loginStatus: _httpType.user_no_exist,
					logining: false
					//loginUser:{}
				};

			case _httpType.password_err:
				return {
					//logined:false,
					loginStatus: _httpType.password_err,
					logining: false
					//loginUser:{}
				};

			case _httpType.success:
				return {
					logined: true,
					loginStatus: _httpType.success,
					loginUser: action.user, //数据库里传的是数组
					logining: false
				};

			default:
				return state;
		}
	};

	/**
	 * Login State Tree Reducer
	 * @param state
	 * @param action
	 * @returns {*}
	 */

	var login = function login() {
		var state = arguments.length <= 0 || arguments[0] === undefined ? {
			logined: false,
			loginStatus: _httpType.init, //登录状态
			logining: false, //有没有正在登录标志
			loginUser: {}
		} : arguments[0];
		var action = arguments[1];


		switch (action.type) {

			case _actionType.LOGIN_INIT:
				//初始化视图
				return _extends({}, state, {
					loginStatus: _httpType.init
				});

			case _actionType.LOGIN_REQUEST:
				//发起登录请求
				return _extends({}, state, {
					logining: true
				});

			case _actionType.LOGIN_RECEIVE:
				//接受登录结果,注册的时候也会调用
				return _extends({}, state, login_status(state, action));

			case _actionType.LOGOUT_RECEIVE:
				return _extends({}, state, {
					logined: false,
					loginUser: {},
					loginStatus: _httpType.init,
					logining: false
				});

			case _actionType.MODIFY_LOGIN:
				//个人信息修改页面发送的action
				return _extends({}, state, {
					loginUser: _extends({}, state.loginUser, action.user)
				});

			default:
				return state;
		}
	};

	exports.default = login;

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _httpType = __webpack_require__(95);

	var _actionType = __webpack_require__(94);

	var register = function register() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? {
	        registering: false, //正在注册
	        registerStatus: _httpType.init //注册状态
	    } : arguments[0];
	    var action = arguments[1];


	    switch (action.type) {

	        case _actionType.REGISTER_INIT:
	            //初始化视图
	            return _extends({}, state, {
	                registerStatus: _httpType.init
	            });

	        case _actionType.REGISTER_REQUEST:
	            return _extends({}, state, {

	                registering: true
	            });

	        case _actionType.REGISTER_RECEIVE:
	            return _extends({}, state, {
	                registering: false,
	                registerStatus: action.status
	            });

	        default:
	            return state;
	    }
	};

	exports.default = register;

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _actionType = __webpack_require__(94);

	/**
	 * 存入文章
	 * @param state
	 * @param data
	 */
	var addContentList = function addContentList(state, data) {
	    var lists = state.contentList;
	    lists.push(data);
	    return lists;
	};

	var article = function article() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? {
	        list: [], //页面显示的文章列表
	        contentList: [], //文章内容组成的列表
	        getting: false //有没有正在获取文章内容标志

	    } : arguments[0];
	    var action = arguments[1];


	    switch (action.type) {
	        case _actionType.ARTICLE_REQUEST:
	            return _extends({}, state, {
	                getting: true
	            });

	        case _actionType.ARTICLE_RECEIVE:
	            return _extends({}, state, {
	                getting: false,
	                contentList: addContentList(state, action.data)
	            });

	        default:
	            return state;
	    }
	};

	exports.default = article;

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _actionType = __webpack_require__(94);

	var addArticle = function addArticle() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? {
	        preview: ''
	    } : arguments[0];
	    var action = arguments[1];


	    switch (action.type) {
	        case _actionType.PREVIEW:
	            return _extends({}, state, {
	                preview: action.value
	            });
	        case _actionType.ADD_TEMP_ARTICLE:
	            return _extends({}, state, {
	                articleId: action.value._id
	            });
	        case _actionType.ADD_ARTICLE_TITLE:
	            return _extends({}, state, {
	                title: action.value
	            });
	        case _actionType.ADD_ARTICLE_INTRO:
	            return _extends({}, state, {
	                describe: action.value
	            });
	        case _actionType.DEL_ARTICLE:
	            {
	                return _extends({}, state, {
	                    title: '',
	                    describe: '',
	                    articleId: '',
	                    preview: ''
	                });
	            }
	        case _actionType.SAVE_ARTICLE:
	            {
	                return state;
	            }
	        default:
	            return state;
	    }
	};

	exports.default = addArticle;

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _actionType = __webpack_require__(94);

	var _httpType = __webpack_require__(95);

	var profile = function profile() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? {
	        modifying: false, //正在修改
	        modifyStatus: _httpType.init
	    } : arguments[0];
	    var action = arguments[1];


	    switch (action.type) {

	        case _actionType.MODIFY_INIT:
	            return _extends({}, state, {
	                modifyStatus: _httpType.init
	            });

	        case _actionType.MODIFY_REQUEST:
	            return _extends({}, state, {
	                modifying: true
	            });

	        case _actionType.MODIFY_RECEIVE:
	            return _extends({}, state, {
	                modifying: false,
	                modifyStatus: action.status
	            });

	        default:
	            return state;
	    }
	};

	exports.default = profile;

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _actionType = __webpack_require__(94);

	function addArticleList(state, data) {
	    var lists = state.articleList;
	    lists.push(data);
	    return lists;
	}

	var user = function user() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? {
	        articleList: [], //个人文章列表
	        getting: false //有没有正在获取文章内容列表
	    } : arguments[0];
	    var action = arguments[1];


	    switch (action.type) {
	        case _actionType.USER_REQUEST:
	            return _extends({}, state, {
	                getting: true
	            });

	        case _actionType.USER_RECEIVE:
	            return _extends({}, state, {
	                getting: false,
	                articleList: addArticleList(state, action.data)
	            });

	        default:
	            return state;
	    }
	};

	exports.default = user;

/***/ }
]);