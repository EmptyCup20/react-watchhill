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
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _express = __webpack_require__(1);

	var _express2 = _interopRequireDefault(_express);

	var _path = __webpack_require__(2);

	var _path2 = _interopRequireDefault(_path);

	var _serveFavicon = __webpack_require__(3);

	var _serveFavicon2 = _interopRequireDefault(_serveFavicon);

	var _bodyParser = __webpack_require__(4);

	var _bodyParser2 = _interopRequireDefault(_bodyParser);

	var _morgan = __webpack_require__(5);

	var _morgan2 = _interopRequireDefault(_morgan);

	var _ejs = __webpack_require__(6);

	var _ejs2 = _interopRequireDefault(_ejs);

	var _expressSession = __webpack_require__(7);

	var _expressSession2 = _interopRequireDefault(_expressSession);

	var _cookieParser = __webpack_require__(8);

	var _cookieParser2 = _interopRequireDefault(_cookieParser);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var app = (0, _express2.default)();

	// view engine setup
	app.set('views', _path2.default.join(__dirname, 'view'));
	app.engine('.html', _ejs2.default.__express);
	app.set('view engine', 'html');

	// uncomment after placing your favicon in /public
	//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
	app.use((0, _morgan2.default)('dev'));
	app.use(_bodyParser2.default.json());
	app.use(_bodyParser2.default.urlencoded({ extended: false }));
	app.use((0, _cookieParser2.default)('MAGICString')); //开启cookie
	app.use((0, _expressSession2.default)({
		secret: '12345',
		name: 'testapp',
		//cookie: {maxAge: 80000 },  	//设置maxAge是80000ms，即80s后session和相应的cookie失效过期
		resave: false, //是指每次请求都重新设置session cookie，假设你的cookie是10分钟过期，每次请求都会再设置10分钟
		saveUninitialized: true //是指无论有没有session cookie，每次请求都设置个session cookie ，默认给个标示为 connect.sid
	})); //开启session


	app.use(_express2.default.static(_path2.default.join(__dirname, 'public')));

	//ajax请求路由
	app.use('/user', __webpack_require__(9));

	//react服务器渲染路由
	app.use('/', __webpack_require__(12));

	//传统的express捕捉异常用不到
	// catch 404 and forward to error handler
	//app.use(function(req, res, next) {
	//  var err = new Error('Not Found');
	//  err.status = 404;
	//  next(err);
	//});

	// error handlers

	// development error handler
	// will print stacktrace
	//if (app.get('env') === 'development') {
	//  app.use(function(err, req, res, next) {
	//    res.status(err.status || 500);
	//    res.render('error', {
	//      message: err.message,
	//      error: err
	//    });
	//  });
	//}
	//
	//// production error handler
	//// no stacktraces leaked to user
	//app.use(function(err, req, res, next) {
	//  res.status(err.status || 500);
	//  res.render('error', {
	//    message: err.message,
	//    error: {}
	//  });
	//});


	var PORT = process.env.PORT || 3000;
	app.listen(PORT, function () {
		console.log('Production Express server running at localhost:' + PORT);
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("serve-favicon");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("body-parser");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("morgan");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("ejs");

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("express-session");

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("cookie-parser");

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _user = __webpack_require__(10);

	var _express = __webpack_require__(1);

	var _express2 = _interopRequireDefault(_express);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var router = _express2.default.Router();

	//登录认证
	router.post('/login', _user.loginAuthen);

	//注册
	router.post('/register', _user.register);

	//注销
	router.get('/logout', _user.logout);

	module.exports = router;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.loginAuthen = loginAuthen;
	exports.register = register;
	exports.logout = logout;

	var _httpType = __webpack_require__(11);

	/**
	 * 登录验证
	 * @param req
	 * @param res
	 * @param next
	 */
	function loginAuthen(req, res, next) {
	    //console.log(req.body.username);
	    //console.log(req.body.password);
	    if (req.body.username === 'xx' && req.body.password === '1111') {
	        //req.session.loginName = req.body.username;
	        req.session.user = req.body.username;
	        res.json({ status: _httpType.success });
	    } else if (req.body.username !== 'xx') {
	        res.json({ status: _httpType.user_no_exist });
	    } else if (req.body.password !== '1111') {
	        res.json({ status: _httpType.password_err });
	    }
	}

	/**
	 * 账号注册
	 * @param req
	 * @param res
	 * @param next
	 */
	function register(req, res, next) {
	    if (req.body.username === 'xx') {
	        res.json({ status: _httpType.user_exist });
	    } else {
	        req.session.user = req.body.username;
	        res.json({ status: _httpType.success });
	    }
	}

	/**
	 * 注销
	 * @param req
	 * @param res
	 * @param next
	 */
	function logout(req, res, next) {
	    req.session.destroy(function () {
	        //移除会话
	        res.json({ status: _httpType.success });
	    });
	}

/***/ },
/* 11 */
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


	    success: 'success' //请求成功
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _express = __webpack_require__(1);

	var _express2 = _interopRequireDefault(_express);

	var _react = __webpack_require__(13);

	var _react2 = _interopRequireDefault(_react);

	var _server = __webpack_require__(14);

	var _reactRouter = __webpack_require__(15);

	var _reactRedux = __webpack_require__(16);

	var _redux = __webpack_require__(17);

	var _routes = __webpack_require__(18);

	var _routes2 = _interopRequireDefault(_routes);

	var _store = __webpack_require__(38);

	var _store2 = _interopRequireDefault(_store);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var router = _express2.default.Router();

	//基础库
	//express


	//react路由


	//redux store


	router.get('/*', function (req, res, next) {

	    //暂时这么设置,同步服务端和客户端
	    if (req.session.user) {
	        var store = (0, _store2.default)({
	            login: {
	                loginUser: {
	                    username: req.session.user
	                },
	                logined: true
	            }
	        }); //这里需要传入需要的state tree
	    } else {
	        var store = (0, _store2.default)();
	    }

	    //const store = configureStore();       //这里需要传入需要的state tree
	    console.log('node  store:', store.getState()); //需要注意与客户端的store统一

	    (0, _reactRouter.match)({ routes: (0, _routes2.default)(), location: req.url }, function (err, redirect, props) {
	        if (err) {
	            res.status(500).send(err.message);
	        } else if (redirect) {
	            res.redirect(redirect.pathname + redirect.search);
	        } else if (props) {
	            var appHtml = (0, _server.renderToString)(_react2.default.createElement(
	                _reactRedux.Provider,
	                { store: store },
	                _react2.default.createElement(_reactRouter.RouterContext, props)
	            ));

	            res.render('index', {
	                html: appHtml,
	                serverState: JSON.stringify(store.getState())
	            });
	        } else {
	            //路由匹配不到,这里这个提示页面暂时不做
	            res.status(404).send('Not Found');
	        }
	    });
	});

	module.exports = router;

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = require("react-redux");

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = require("redux");

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(13);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(15);

	var _App = __webpack_require__(19);

	var _App2 = _interopRequireDefault(_App);

	var _IndexContainer = __webpack_require__(20);

	var _IndexContainer2 = _interopRequireDefault(_IndexContainer);

	var _Home = __webpack_require__(27);

	var _Home2 = _interopRequireDefault(_Home);

	var _Blog = __webpack_require__(28);

	var _Blog2 = _interopRequireDefault(_Blog);

	var _About = __webpack_require__(29);

	var _About2 = _interopRequireDefault(_About);

	var _LoginContainer = __webpack_require__(30);

	var _LoginContainer2 = _interopRequireDefault(_LoginContainer);

	var _RegisterContainer = __webpack_require__(35);

	var _RegisterContainer2 = _interopRequireDefault(_RegisterContainer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var routes = function routes(state) {

	    //进入之前判断是否已经登录
	    function isLogined() {
	        //console.log('isLogined:',state.login.logined);
	    }

	    return _react2.default.createElement(
	        _reactRouter.Route,
	        null,
	        _react2.default.createElement(_reactRouter.Route, { path: '/', component: _App2.default }),
	        _react2.default.createElement(
	            _reactRouter.Route,
	            { path: '/index', component: _IndexContainer2.default },
	            _react2.default.createElement(_reactRouter.IndexRoute, { component: _Home2.default }),
	            _react2.default.createElement(_reactRouter.Route, { path: '/blog', component: _Blog2.default }),
	            _react2.default.createElement(_reactRouter.Route, { path: '/about', component: _About2.default })
	        ),
	        _react2.default.createElement(_reactRouter.Route, { path: '/login', onEnter: isLogined, component: _LoginContainer2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: '/register', component: _RegisterContainer2.default })
	    );
	};
	//import Index from '../containers/Index';


	//容器组件
	//基础库
	exports.default = routes;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactRouter = __webpack_require__(15);

	var _react = __webpack_require__(13);

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
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _redux = __webpack_require__(17);

	var _reactRedux = __webpack_require__(16);

	var _logout = __webpack_require__(21);

	var LogoutActions = _interopRequireWildcard(_logout);

	var _Index = __webpack_require__(24);

	var _Index2 = _interopRequireDefault(_Index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	//action
	//基础库
	//import React,{ Component } from 'react';
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
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.logout = logout;

	var _actionType = __webpack_require__(22);

	var _httpType = __webpack_require__(11);

	var _ajax = __webpack_require__(23);

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
/* 22 */
/***/ function(module, exports) {

	'use strict';

	//action类型

	module.exports = {

	    //login
	    LOGIN_REQUEST: 'LOGIN_REQUEST', //挂起登录请求
	    LOGIN_RECEIVE: 'LOGIN_RECEIVE', //接收登录状况处理

	    //register
	    REGISTER_REQUEST: 'REGISTER_REQUEST', //挂起注册请求
	    REGISTER_RECEIVE: 'REGISTER_RECEIVE', //接收注册状况处理

	    //logout
	    LOGOUT_RECEIVE: 'LOGOUT_RECEIVE' //注销
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * ajax路由
	 */

	function ajax() {
	    function req(method, url, data) {
	        var defered = $.Deferred();
	        var request = {
	            type: method,
	            url: url
	            //dataType: "json"?
	            //data: data
	        };

	        if (data) {
	            request.data = data;
	        }

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
	            return req('POST', '/user/login', data);
	        },

	        //注销
	        logout: function logout() {
	            return req('GET', '/user/logout');
	        },

	        //注册
	        register: function register(data) {
	            return req('POST', '/user/register', data);
	        }
	    };
	}

	exports.default = ajax;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactRouter = __webpack_require__(15);

	var _react = __webpack_require__(13);

	var _react2 = _interopRequireDefault(_react);

	var _Button = __webpack_require__(25);

	var _Button2 = _interopRequireDefault(_Button);

	var _history = __webpack_require__(26);

	var _history2 = _interopRequireDefault(_history);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //基础库


	//基础组件(demo)


	//导航


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
	            var login = this.props.login;
	            //const _this = this;
	            //console.log(login);

	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
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
	                                    { className: 'nav navbar-nav navbar-left' },
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
	                                            { to: '/blog' },
	                                            '博客'
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
	                                                    { to: '#' },
	                                                    '新增文章'
	                                                )
	                                            ),
	                                            _react2.default.createElement(
	                                                'li',
	                                                { className: 'dropdown user user-menu' },
	                                                _react2.default.createElement(
	                                                    'a',
	                                                    { href: '', className: 'dropdown-togglt', 'data-toggle': 'dropdown', 'aria-expanded': 'false' },
	                                                    _react2.default.createElement('img', { src: '#', alt: 'User Image', className: 'user-image' }),
	                                                    _react2.default.createElement(
	                                                        'span',
	                                                        { className: 'hidden-xs' },
	                                                        login.loginUser.username
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
	                                                            { to: '#' },
	                                                            _react2.default.createElement('img', { src: '#', className: 'img-circle', alt: 'user image' })
	                                                        ),
	                                                        _react2.default.createElement(
	                                                            'p',
	                                                            null,
	                                                            '人生一世',
	                                                            _react2.default.createElement(
	                                                                'small',
	                                                                null,
	                                                                '18768107826'
	                                                            ),
	                                                            _react2.default.createElement(
	                                                                'small',
	                                                                null,
	                                                                '11@qq.com'
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
	                                                                'a',
	                                                                { className: 'btn btn-default btn-flat' },
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
	                ),
	                _react2.default.createElement(
	                    'h3',
	                    null,
	                    '导航部分'
	                ),
	                _react2.default.createElement(
	                    'h1',
	                    null,
	                    'Watchhill'
	                ),
	                _react2.default.createElement(
	                    'ul',
	                    { role: 'nav' },
	                    _react2.default.createElement(
	                        'li',
	                        { role: 'presentation' },
	                        _react2.default.createElement(
	                            _reactRouter.Link,
	                            { to: '/index', activeClassName: 'active', onlyActiveOnIndex: true },
	                            '主页'
	                        )
	                    ),
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
	                            { to: '/blog' },
	                            '博客页'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'li',
	                        { role: 'presentation' },
	                        _react2.default.createElement(
	                            _reactRouter.Link,
	                            { to: '/about' },
	                            '关于页'
	                        )
	                    )
	                ),
	                _react2.default.createElement('hr', null),
	                _react2.default.createElement(
	                    'h3',
	                    null,
	                    '身体部分'
	                ),
	                this.props.children,
	                _react2.default.createElement('hr', null),
	                _react2.default.createElement(
	                    'h3',
	                    null,
	                    '尾部'
	                )
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
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(13);

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
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reactRouter = __webpack_require__(15);

	exports.default = _reactRouter.browserHistory;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(13);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Home = function (_Component) {
	    _inherits(Home, _Component);

	    function Home() {
	        _classCallCheck(this, Home);

	        return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
	    }

	    _createClass(Home, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'h1',
	                    null,
	                    '主页'
	                )
	            );
	        }
	    }]);

	    return Home;
	}(_react.Component);

	exports.default = Home;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(13);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Blog = function (_Component) {
	    _inherits(Blog, _Component);

	    function Blog() {
	        _classCallCheck(this, Blog);

	        return _possibleConstructorReturn(this, (Blog.__proto__ || Object.getPrototypeOf(Blog)).apply(this, arguments));
	    }

	    _createClass(Blog, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'h1',
	                    null,
	                    '博客页'
	                )
	            );
	        }
	    }]);

	    return Blog;
	}(_react.Component);

	exports.default = Blog;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(13);

	var _react2 = _interopRequireDefault(_react);

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
	                null,
	                _react2.default.createElement(
	                    'h1',
	                    null,
	                    '关于页'
	                )
	            );
	        }
	    }]);

	    return About;
	}(_react.Component);

	exports.default = About;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _redux = __webpack_require__(17);

	var _reactRedux = __webpack_require__(16);

	var _Login = __webpack_require__(31);

	var _Login2 = _interopRequireDefault(_Login);

	var _login = __webpack_require__(34);

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
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(13);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(15);

	var _Input = __webpack_require__(32);

	var _Input2 = _interopRequireDefault(_Input);

	var _Button = __webpack_require__(25);

	var _Button2 = _interopRequireDefault(_Button);

	var _privateType = __webpack_require__(33);

	var _httpType = __webpack_require__(11);

	var _history = __webpack_require__(26);

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
	                    username: username.trim(),
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
	                            _react2.default.createElement(_Input2.default, { id: 'login_username', className: 'form-control', placeholder: '账号' }),
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
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(13);

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
/* 33 */
/***/ function(module, exports) {

	'use strict';

	//私有函数常量

	module.exports = {
	    _onClick: Symbol('_onClick')
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.login_start = login_start;
	exports.login_reveive = login_reveive;

	var _actionType = __webpack_require__(22);

	var _ajax = __webpack_require__(23);

	var _ajax2 = _interopRequireDefault(_ajax);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
	            return dispatch(login_reveive(user, data.status));
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

	function login_reveive(user, status) {
	    return {
	        type: _actionType.LOGIN_RECEIVE,
	        user: { username: user.username },
	        status: status
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
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _redux = __webpack_require__(17);

	var _reactRedux = __webpack_require__(16);

	var _Register = __webpack_require__(36);

	var _Register2 = _interopRequireDefault(_Register);

	var _register = __webpack_require__(37);

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
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(13);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(15);

	var _Input = __webpack_require__(32);

	var _Input2 = _interopRequireDefault(_Input);

	var _Button = __webpack_require__(25);

	var _Button2 = _interopRequireDefault(_Button);

	var _privateType = __webpack_require__(33);

	var _httpType = __webpack_require__(11);

	var _history = __webpack_require__(26);

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
	            if (username && pass && password && email && tel && team) {
	                var user = {
	                    username: username,
	                    pass: pass,
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
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.register_start = register_start;

	var _actionType = __webpack_require__(22);

	var _ajax = __webpack_require__(23);

	var _ajax2 = _interopRequireDefault(_ajax);

	var _httpType = __webpack_require__(11);

	var _login = __webpack_require__(34);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
	            return dispatch(register_process(user, data.status));
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
	 * ajax数据接收处理
	 * @param user
	 * @param status
	 * @returns {{type: *, user: {username: *}, status: *}}
	 */
	function register_process(user, status) {

	    if (status === _httpType.user_exist) {
	        //注册失败
	        return register_recieve(status);
	    } else {
	        //注册成功
	        return function (dispatch) {
	            dispatch((0, _login.login_reveive)(user, status)); //登录state tree
	            return dispatch(register_recieve(status));
	        };
	    }
	}

	function register_recieve(status) {
	    return {
	        type: _actionType.REGISTER_RECEIVE,
	        status: status
	    };
	}

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = configureStore;

	var _redux = __webpack_require__(17);

	var _reduxThunk = __webpack_require__(39);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	var _reduxLogger = __webpack_require__(40);

	var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

	var _reducers = __webpack_require__(41);

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
/* 39 */
/***/ function(module, exports) {

	module.exports = require("redux-thunk");

/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports = require("redux-logger");

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _redux = __webpack_require__(17);

	var _login = __webpack_require__(42);

	var _login2 = _interopRequireDefault(_login);

	var _register = __webpack_require__(43);

	var _register2 = _interopRequireDefault(_register);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//登录
	var reducer = (0, _redux.combineReducers)({
		login: _login2.default,
		register: _register2.default
	});
	//注册
	//基础库
	exports.default = reducer;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _actionType = __webpack_require__(22);

	var _httpType = __webpack_require__(11);

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
					loginUser: action.user,
					logining: false
				};

			default:
				return state;
		}
	};

	var login = function login() {
		var state = arguments.length <= 0 || arguments[0] === undefined ? {
			logined: false,
			loginStatus: _httpType.init, //登录状态
			logining: false, //有没有正在登录标志
			loginUser: {}
		} : arguments[0];
		var action = arguments[1];


		switch (action.type) {

			case _actionType.LOGIN_REQUEST:
				//发起登录请求
				return _extends({}, state, {
					logining: true
				});

			case _actionType.LOGIN_RECEIVE:
				//接受登录结果
				return _extends({}, state, login_status(state, action));

			case _actionType.LOGOUT_RECEIVE:
				return _extends({}, state, {
					logined: false,
					loginUser: {},
					loginStatus: _httpType.init,
					logining: false
				});

			default:
				return state;
		}
	};

	exports.default = login;

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _httpType = __webpack_require__(11);

	var _actionType = __webpack_require__(22);

	var register = function register() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? {
	        registering: false, //正在注册
	        registerStatus: _httpType.init //注册状态
	    } : arguments[0];
	    var action = arguments[1];


	    switch (action.type) {
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

/***/ }
/******/ ]);