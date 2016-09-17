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

	//app.use('/users', users);


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

	module.exports = router;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.loginAuthen = loginAuthen;

	var _httpType = __webpack_require__(11);

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

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';

	//请求状态

	module.exports = {

	    //login
	    login_init: 'login_init', //登录初始化
	    user_no_exist: 'user_no_exist', //用户不存在
	    password_err: 'password_err', //密码错误


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

	var _store = __webpack_require__(34);

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
	        console.log('logined');
	        var store = (0, _store2.default)({
	            login: {
	                loginUser: {
	                    username: req.session.user
	                },
	                logined: true
	            }
	        }); //这里需要传入需要的state tree

	        //console.log(JSON.stringify(store.getState()));

	    } else {
	        console.log('unlogined');
	        var store = (0, _store2.default)(); //const有块级作用域
	    }

	    //const store = configureStore();       //这里需要传入需要的state tree
	    console.log('node  store:', store.getState()); //需要注意与客户端的store统一

	    (0, _reactRouter.match)({ routes: (0, _routes2.default)(), location: req.url }, function (err, redirect, props) {

	        //测试用
	        console.log('node,req.url:', req.url);

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
	            //路由匹配不到
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

	var _Home = __webpack_require__(22);

	var _Home2 = _interopRequireDefault(_Home);

	var _Blog = __webpack_require__(23);

	var _Blog2 = _interopRequireDefault(_Blog);

	var _About = __webpack_require__(24);

	var _About2 = _interopRequireDefault(_About);

	var _LoginContainer = __webpack_require__(25);

	var _LoginContainer2 = _interopRequireDefault(_LoginContainer);

	var _Register = __webpack_require__(33);

	var _Register2 = _interopRequireDefault(_Register);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var routes = function routes(state) {
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
	        _react2.default.createElement(_reactRouter.Route, { path: '/login', component: _LoginContainer2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: '/register', component: _Register2.default })
	    );
	};

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

	var _react = __webpack_require__(13);

	var _react2 = _interopRequireDefault(_react);

	var _redux = __webpack_require__(17);

	var _reactRedux = __webpack_require__(16);

	var _Index = __webpack_require__(21);

	var _Index2 = _interopRequireDefault(_Index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//基础库
	function mapStateToProps(state) {
	    return {
	        login: state.login
	    };
	}

	//视图组件
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(_Index2.default);

/***/ },
/* 21 */
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

	var Index = function (_Component) {
	    _inherits(Index, _Component);

	    function Index() {
	        _classCallCheck(this, Index);

	        return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));
	    }

	    _createClass(Index, [{
	        key: 'render',
	        value: function render() {
	            var login = this.props.login;


	            return _react2.default.createElement(
	                'div',
	                null,
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
	                            { to: '/' },
	                            '首页'
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
	                    ),
	                    !login.logined ? _react2.default.createElement(
	                        'l',
	                        null,
	                        _react2.default.createElement(
	                            'li',
	                            { role: 'presentation' },
	                            _react2.default.createElement(
	                                _reactRouter.Link,
	                                { to: '/login' },
	                                '登录页'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'li',
	                            { role: 'presentation' },
	                            _react2.default.createElement(
	                                _reactRouter.Link,
	                                { to: '/register' },
	                                '注册页'
	                            )
	                        )
	                    ) : _react2.default.createElement(
	                        'li',
	                        { role: 'presentation' },
	                        _react2.default.createElement(
	                            _reactRouter.Link,
	                            null,
	                            '登录用户名:',
	                            login.loginUser.username
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

	exports.default = Index;

/***/ },
/* 22 */
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
/* 23 */
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
/* 24 */
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
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(13);

	var _react2 = _interopRequireDefault(_react);

	var _redux = __webpack_require__(17);

	var _reactRedux = __webpack_require__(16);

	var _Login = __webpack_require__(26);

	var _Login2 = _interopRequireDefault(_Login);

	var _login = __webpack_require__(31);

	var LoginActions = _interopRequireWildcard(_login);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//绑定login store到Login组件


	//视图组件
	function mapStateToProps(state) {
	    return {
	        login: state.login
	    };
	}

	//绑定login action到Login组件


	//action
	//基础库
	function mapDispatchToProps(dispatch) {
	    return (0, _redux.bindActionCreators)(LoginActions, dispatch);
	}

	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Login2.default);

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(13);

	var _react2 = _interopRequireDefault(_react);

	var _Input = __webpack_require__(27);

	var _Input2 = _interopRequireDefault(_Input);

	var _Button = __webpack_require__(28);

	var _Button2 = _interopRequireDefault(_Button);

	var _privateType = __webpack_require__(29);

	var _httpType = __webpack_require__(11);

	var _history = __webpack_require__(30);

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
	            var username = document.getElementById('username'),
	                password = document.getElementById('password');

	            //这里还要做一个登录格式验证

	            if (username.value.trim() && password.value.trim()) {
	                //console.log(username.value);
	                //console.log(password.value);
	                var user = {
	                    username: username.value.trim(),
	                    password: password.value.trim()
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
	                { className: 'container' },
	                _react2.default.createElement(
	                    'h1',
	                    null,
	                    '登录页'
	                ),
	                _react2.default.createElement(
	                    'form',
	                    { className: 'form-inline' },
	                    _react2.default.createElement(_Input2.default, { type: 'text', id: 'username', className: 'form-control', placeholder: '账号' }),
	                    _react2.default.createElement(_Input2.default, { type: 'password', id: 'password', className: 'form-control', placeholder: '密码' }),
	                    _react2.default.createElement(
	                        _Button2.default,
	                        { type: 'submit', className: 'btn btn-default', onClick: this._onClick.bind(this) },
	                        '登录'
	                    )
	                ),
	                _react2.default.createElement('br', null),

	                //login.logining
	                //?
	                //    <div className="alert alert-info" role="alert">正在登录...</div>
	                //:
	                //    <div className="alert alert-success" role="alert">登录提示</div>
	                //switch(login.loginStatus) {
	                //
	                //}

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
	                }()
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
/* 29 */
/***/ function(module, exports) {

	'use strict';

	//私有函数常量

	module.exports = {
	    _onClick: Symbol('_onClick')
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reactRouter = __webpack_require__(15);

	exports.default = _reactRouter.browserHistory;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.login_start = login_start;

	var _actionType = __webpack_require__(32);

	/**
	 * 准备开始登录
	 * @param user -> 登录用户名
	 * @param pass -> 登录密码
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
	        dispatch(login_request(user)); //挂起登录请求,防止重复请求
	        return ajax().login(user).then(function (data) {
	            return dispatch(login_reveive(user, data.status));
	        }); //接受到数据后重新更新state
	    };
	}

	/**
	 * 挂起请求登录
	 * @param user
	 * @returns {{type: string, user: *}}
	 */
	function login_request(user) {
	    return {
	        type: _actionType.LOGIN_REQUEST
	    };
	}

	function login_reveive(user, status) {
	    return {
	        type: _actionType.LOGIN_RECEIVE,
	        user: { username: user.username },
	        status: status
	    };
	}

	/**
	 * 这里暂时放一下ajax,最后可以独立出来
	 */

	function ajax() {
	    function req(method, url, data) {
	        var defered = $.Deferred();
	        var request = {
	            type: method,
	            url: url,
	            //dataType: "json"?
	            data: data
	        };

	        $.ajax(request).done(function (data) {
	            defered.resolve(data);
	        }).fail(function () {
	            defered.reject();
	        });

	        return defered.promise();
	    }

	    return {
	        login: function login(data) {
	            return req('POST', '/user/login', data);
	        }
	    };
	}

/***/ },
/* 32 */
/***/ function(module, exports) {

	'use strict';

	//action类型

	module.exports = {

	    //login
	    LOGIN_REQUEST: 'LOGIN_REQUEST', //挂起登录请求
	    LOGIN_RECEIVE: 'LOGIN_RECEIVE' //接收登录状况处理

	};

/***/ },
/* 33 */
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

	var Register = function (_Component) {
	    _inherits(Register, _Component);

	    function Register() {
	        _classCallCheck(this, Register);

	        return _possibleConstructorReturn(this, (Register.__proto__ || Object.getPrototypeOf(Register)).apply(this, arguments));
	    }

	    _createClass(Register, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'h1',
	                    null,
	                    '注册页'
	                )
	            );
	        }
	    }]);

	    return Register;
	}(_react.Component);

	exports.default = Register;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = configureStore;

	var _redux = __webpack_require__(17);

	var _reduxThunk = __webpack_require__(35);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	var _reduxLogger = __webpack_require__(36);

	var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

	var _reducers = __webpack_require__(37);

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
/* 35 */
/***/ function(module, exports) {

	module.exports = require("redux-thunk");

/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = require("redux-logger");

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _redux = __webpack_require__(17);

	var _login = __webpack_require__(38);

	var _login2 = _interopRequireDefault(_login);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//基础库
	var reducer = (0, _redux.combineReducers)({
		login: _login2.default
	});

	//登录
	exports.default = reducer;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _actionType = __webpack_require__(32);

	var login_status = function login_status(state, action) {
		//console.log('action:',action);
		switch (action.status) {

			case 'user_no_exist':
				//console.log('1');
				return {
					//logined:false,
					loginStatus: 'user_no_exist',
					logining: false
					//loginUser:{}	
				};

			case 'password_err':
				//console.log('2');
				return {
					//logined:false,
					loginStatus: 'password_err',
					logining: false
					//loginUser:{}
				};

			case 'success':
				//console.log('3');
				return {
					logined: true,
					loginStatus: 'success',
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
			loginStatus: 'login_init', //登录状态
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
				var obj = _extends({}, state, login_status(state, action));
				//console.log('reducers,login:',obj);

				return obj;

			default:
				return state;
		}
	};

	exports.default = login;

/***/ }
/******/ ]);