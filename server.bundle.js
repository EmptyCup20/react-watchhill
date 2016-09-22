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
	app.use('/article', __webpack_require__(19));

	//react服务器渲染路由
	app.use('/', __webpack_require__(22));

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

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.loginAuthen = loginAuthen;
	exports.register = register;
	exports.logout = logout;

	var _user = __webpack_require__(11);

	var _user2 = _interopRequireDefault(_user);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * 登录验证
	 * @param req
	 * @param res
	 * @param next
	 */
	function loginAuthen(req, res, next) {

	    var query = req.body;
	    _user2.default.login(query).then(function (data) {
	        if (data.code === 0) {
	            var login = data.data; //数据库给的是数组
	            req.session.author = login.author;
	            req.session.avatarUrl = login.avatarUrl;
	            req.session.email = login.email;
	            req.session.team = login.team;
	            req.session.brief = login.brief;
	            req.session.codeUrl = login.codeUrl;
	            req.session.tel = login.tel;
	        }

	        res.send(data);
	    }, function (data) {
	        console.log(data);
	    });
	}

	/**
	 * 账号注册
	 * @param req
	 * @param res
	 * @param next
	 */
	// import { user_no_exist,password_err,user_exist,success } from '../../react/constants/httpType';
	function register(req, res, next) {
	    var query = req.body;
	    _user2.default.addUser(query).then(function (data) {
	        if (data.code === 0) {
	            var login = data.data; //数据库给的是数组
	            req.session.author = login.author;
	            req.session.avatarUrl = login.avatarUrl;
	            req.session.email = login.email;
	            req.session.team = login.team;
	            req.session.brief = login.brief;
	            req.session.codeUrl = login.codeUrl;
	            req.session.tel = login.tel;
	        }
	        res.send(data);
	    }, function (data) {
	        console.log(data);
	    });
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
	        res.json({
	            "code": 0,
	            "data": null,
	            "status": 'success'
	        });
	    });
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _db_tools = __webpack_require__(12);

	var _db_tools2 = _interopRequireDefault(_db_tools);

	var _statusMsg = __webpack_require__(18);

	var _statusMsg2 = _interopRequireDefault(_statusMsg);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var User = function User() {};

	//用户注册
	User.addUser = function (obj) {
	    return new Promise(function (resolve, reject) {
	        _db_tools2.default.queryByCondition('user', { author: obj.author }).then(function (data) {
	            //用户存在
	            if (data.length !== 0) {
	                resolve(_statusMsg2.default.registerErr);
	                return;
	            }
	            _db_tools2.default.add('user', obj).then(function (data) {
	                _statusMsg2.default.successMsg.data = data.toObject();
	                if (_statusMsg2.default.successMsg.data.password) {
	                    // 不返回用户密码
	                    delete _statusMsg2.default.successMsg.data.password;
	                }
	                resolve(_statusMsg2.default.successMsg);
	            }, function (err) {
	                reject(err);
	            });
	        }, function (err) {
	            reject(err);
	        });
	    });
	};

	//登录
	User.login = function (obj) {
	    return new Promise(function (resolve, reject) {
	        //查询用户是否存在
	        _db_tools2.default.queryByCondition('user', { author: obj.author }).then(function (data) {
	            if (data.length === 0) {
	                //返回用户不存在信息
	                resolve(_statusMsg2.default.loginNoExistErr);
	                return;
	            }
	            //查询用户的密码是否错误
	            _db_tools2.default.queryByCondition('user', { author: obj.author, password: obj.password }, '-password').then(function (data) {
	                if (data.length === 0) {
	                    //返回密码错误信息
	                    resolve(_statusMsg2.default.loginPwdErr);
	                    return;
	                }
	                //返回登录成功
	                _statusMsg2.default.successMsg.data = data[0].toObject();
	                resolve(_statusMsg2.default.successMsg);
	            }, function (err) {
	                reject(err);
	            });
	        }, function (err) {
	            reject(err);
	        });
	    });
	};

	//修改用户密码
	User.modifyPwd = function (obj) {
	    return new Promise(function (resolve, reject) {
	        //判断旧密码是否正确
	        _db_tools2.default.queryByCondition('user', { _id: obj.userId }, 'password').then(function (data) {
	            data = data.toObject();
	            if (data.password !== obj.oldPwd) {
	                reslove(_statusMsg2.default.modfiyPwdErr);
	                return;
	            }
	            //修改密码
	            _db_tools2.default.edit('user', { _id: obj.userId }).then(function (data) {
	                //返回成功信息
	                reslove(data);
	            }, function (err) {
	                reject(data);
	            });
	        }, function (derrata) {
	            reject(data);
	        });
	    });
	};

	//修改用户资料
	User.modfiyUserData = function (obj) {
	    return new Promise(function (resolve, reject) {
	        _db_tools2.default.edit('user', obj).then(function (data) {
	            resolve(data);
	        }, function (err) {
	            reject(err);
	        });
	    });
	};

	module.exports = User;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * 增删改查操作
	 * @Author zhangxin14
	 * @Date   2016/7/19
	 *
	 */

	var db = __webpack_require__(13);
	var user = __webpack_require__(15);
	var article = __webpack_require__(16);
	var comment = __webpack_require__(17);
	var statusMsg = __webpack_require__(18);

	var Db_tools = function Db_tools() {};

	//初始化model
	function init(model) {
	    var modelList = {
	        'user': user,
	        'article': article,
	        'comment': comment
	    };
	    for (var item in modelList) {
	        if (item === model) {
	            model = modelList[item];
	            return model;
	        }
	    }
	};

	/**
	 * [add description]
	 * @author zhangxin14
	 * @date   2016-07-19
	 * @param  {string}   model [新增的类型]
	 * @param  {object}   addObj     [新的数据
	 *                                User的字段(author,tel,email,team,photo);
	 *                                Article的字段(title,author,createTime,content,image,describe)]
	 */

	Db_tools.add = function (model, addObj) {
	    model = init(model);
	    return new Promise(function (resolve, reject) {
	        model.create(addObj, function (err, doc) {
	            if (err) {
	                reject(err);
	            } else {
	                resolve(doc);
	            }
	        });
	    });
	};

	/**
	 * [edit description]
	 * @author zhangxin14
	 * @date   2016-07-19
	 * @param  {string}   model [新增的类型]
	 * @param  {object}   editObj    [需要修改的数据]
	 * @param  {Function} callback   回调函数
	 */
	Db_tools.edit = function (model, editObj) {
	    var typeId = model + 'Id',
	        id = editObj[typeId];
	    delete editObj[typeId];
	    model = init(model);
	    return new Promise(function (resolve, reject) {
	        model.findOneAndUpdate({ _id: id }, {
	            $set: editObj
	        }, function (err) {
	            if (err) {
	                reject(err);
	            } else {
	                resolve(statusMsg.successMsg);
	            }
	        });
	    });
	};
	/**
	 * [remove description]
	 * @author zhangxin14
	 * @date   2016-07-19
	 * @param  {string}   model [新增的类型]
	 * @param  {string}   removeId   [删除的项目的id]
	 * @param  {Function} callback   回调函数
	 * @return {[type]}              [description]
	 */
	Db_tools.remove = function (model, removeId) {
	    model = init(model);
	    return new Promise(function (resolve, reject) {
	        model.remove({ _id: removeId }, function (err) {
	            if (err) {
	                reject(err);
	            } else {
	                resolve(statusMsg.successMsg);
	            }
	        });
	    });
	};
	/**
	 * [query description]
	 * @author zhangxin14
	 * @date   2016-07-19
	 * @param  {string}   model [新增的类型]
	 * @param  {object}   queryObj   [查询的pageSize和pageNo]
	 * @param  {Function} callback   回调函数
	 * @return {[type]}              [description]
	 */
	Db_tools.query = function (model, queryObj, fields, options, callback) {
	    var pageSize = Number(queryObj.pageSize);
	    var pageNo = Number(queryObj.pageNo);
	    model = init(model);
	    var query = model.find({}, fields, options, callback);
	    //开头跳过查询的调试
	    query.skip((pageNo - 1) * pageSize);
	    //最多显示条数
	    query.limit(pageSize);
	    //计算分页数据
	    return new Promise(function (resole, reject) {
	        query.exec(function (err, doc) {
	            if (err) {
	                reject(err);
	            } else {
	                //计算数据总数
	                model.find(function (err, result) {
	                    var jsonArray = { code: 0, rows: doc, message: null, total: result.length, success: true };
	                    resole(jsonArray);
	                });
	            }
	        });
	    });
	};
	/**
	 * 根据单一条件查询
	 * @author zhangxin14
	 * @date   2016-07-25
	 * @param  {string}   model 集合名称
	 * @param  {查询主键}   queryObj   string
	 * @return {[type]}              [description]
	 */
	Db_tools.queryByCondition = function (model, queryObj, fields, options, callback) {
	    model = init(model);
	    var query = model.find(queryObj, fields, options, callback);
	    return new Promise(function (resolve, reject) {
	        query.exec(queryObj, function (err, doc) {
	            if (err) {
	                reject(err);
	            } else {
	                resolve(doc);
	            }
	        });
	    });
	};
	module.exports = Db_tools;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * 数据库连接
	 * @Author zhangxin14
	 * @Date   2016/7/19
	 *
	 */
	var mongoose = __webpack_require__(14);
	//连接数据库
	var db = mongoose.connect('mongodb://10.33.31.234/watchhill', function (err) {
	    //var db = mongoose.connect('mongodb://localhost/watchhill',function(err){
	    if (err) {
	        console.log(err);
	    }

	    console.log("Connect to mongoDB success!");
	});

	module.exports = db;

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = require("mongoose");

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var db = __webpack_require__(13);
	var Schema = db.Schema;
	var userSchema = new Schema({
	    //用户名
	    author: {
	        type: String,
	        index: 1,
	        require: true,
	        unique: true
	    },
	    //密码
	    password: String,
	    //邮箱
	    email: String,
	    //电话
	    tel: String,
	    //头像
	    avatarUrl: {
	        type: String,
	        default: '/images/default/avatar.jpg'
	    },
	    //二维码
	    codeUrl: {
	        type: String,
	        default: '/images/default/code.jpg'
	    },
	    //简介
	    brief: {
	        type: String,
	        default: ' '
	    },
	    //部门
	    team: String
	});
	var user = db.model('User', userSchema);
	module.exports = user;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var db = __webpack_require__(13);
	var Schema = db.Schema;
	var articleSchema = new Schema({
	    title: {
	        type: String,
	        index: 1,
	        require: true,
	        unique: true
	    },
	    tag: String,
	    author: String,
	    createTime: String,
	    content: String,
	    image: {
	        type: String,
	        default: '/images/default/article.jpg'
	    },
	    describe: String
	});
	var article = db.model('Article', articleSchema);
	module.exports = article;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var db = __webpack_require__(13);
	var Schema = db.Schema;

	var commentSchema = new Schema({
	    author: String, //评论人
	    createTime: Date, //评论时间
	    text: String, //评论内容
	    index: Number, //评分
	    //头像路径
	    avatarUrl: {
	        type: String,
	        default: '/'
	    }
	});
	var comment = db.model('Comment', commentSchema);
	module.exports = comment;

/***/ },
/* 18 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * 请求的返回信息
	 * @Author zhangxin14
	 * @Date   2016/9/20
	 *
	 */

	module.exports = {
	    /* 成功信息 */
	    successMsg: {
	        "code": 0,
	        "data": null,
	        "status": 'success'
	    },

	    /* 注册失败(用户名已存在) */
	    registerErr: {
	        "code": 11,
	        "data": null,
	        "status": 'user_exist'
	    },

	    /* 登录失败(用户名不存在) */
	    loginNoExistErr: {
	        "code": 21,
	        "data": null,
	        "status": 'user_no_exist'
	    },

	    /* 登录失败(密码错误) */
	    loginPwdErr: {
	        "code": 22,
	        "data": null,
	        "status": 'password_err'
	    },

	    /* 旧密码不正确*/
	    modfiyPwdErr: {
	        "code": 31,
	        "data": null,
	        "status": 'old_pwd_err'
	    }
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _article = __webpack_require__(20);

	var _express = __webpack_require__(1);

	var _express2 = _interopRequireDefault(_express);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var router = _express2.default.Router();

	router.get('/getArticleList', _article.getArticleList);

	module.exports = router;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.getArticleList = getArticleList;
	var article = __webpack_require__(21);
	var express = __webpack_require__(1);
	var router = express.Router();

	function getArticleList(req, res, next) {
	    var query = req.query;
	    article.getArticleList(query).then(function (data) {
	        res.send(data);
	    }, function (data) {
	        console.log(data);
	    });
	}

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _db_tools = __webpack_require__(12);

	var _db_tools2 = _interopRequireDefault(_db_tools);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Article = function Article() {};

	//获取文章列表
	Article.getArticleList = function (obj) {
	    return new Promise(function (resolve, reject) {
	        _db_tools2.default.query('article', obj, '-content -_id -__v').then(function (data) {
	            resolve(data);
	        }, function (err) {
	            reject(err);
	        });
	    });
	};

	//获取文章内容
	Article.getArticle = function (obj) {
	    return new Promise(function (resolve, reject) {
	        _db_tools2.default.queryByCondition('article', obj, 'content').then(function (data) {
	            resolve(data);
	        }, function (err) {
	            reject(err);
	        });
	    });
	};
	module.exports = Article;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _express = __webpack_require__(1);

	var _express2 = _interopRequireDefault(_express);

	var _react = __webpack_require__(23);

	var _react2 = _interopRequireDefault(_react);

	var _server = __webpack_require__(24);

	var _reactRouter = __webpack_require__(25);

	var _reactRedux = __webpack_require__(26);

	var _redux = __webpack_require__(27);

	var _routes = __webpack_require__(28);

	var _routes2 = _interopRequireDefault(_routes);

	var _store = __webpack_require__(76);

	var _store2 = _interopRequireDefault(_store);

	var _article = __webpack_require__(21);

	var _article2 = _interopRequireDefault(_article);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var router = _express2.default.Router();

	//基础库
	//express


	//react路由


	//redux store


	//mongo article


	router.get('/*', function (req, res, next) {

	    //state tree
	    req.session.stateTree = {};

	    /**
	     * 获取登录状态
	     */
	    function getLoginStatus() {
	        if (req.session.author) {
	            req.session.stateTree.login = {
	                loginUser: {
	                    author: req.session.author,
	                    avatarUrl: req.session.avatarUrl,
	                    email: req.session.email,
	                    team: req.session.team,
	                    brief: req.session.brief,
	                    codeUrl: req.session.codeUrl,
	                    tel: req.session.tel
	                },
	                logined: true
	            };
	        }
	    }

	    /**
	     * 获取文章列表
	     */
	    function getArticleList() {
	        //if(!req.session.browse) {             //如果网页没有浏览过,则获取文章列表
	        //req.session.browse = true;
	        return _article2.default.getArticleList({
	            pageSize: 9,
	            pageNo: 1
	        });
	        //}
	    }

	    ////暂时这么设置,同步服务端和客户端
	    //if(req.session.user) {
	    //    var store = configureStore({
	    //        login:{
	    //            loginUser:{
	    //                username:req.session.user
	    //            },
	    //            logined:true
	    //        }
	    //    });       //这里需要传入需要的state tree
	    //
	    //} else {
	    //    var store = configureStore({});
	    //}


	    //console.log('node init store:', store.getState());  //需要注意与客户端的store统一
	    //const store = configureStore();       //这里需要传入需要的state tree

	    (0, _reactRouter.match)({ routes: (0, _routes2.default)(), location: req.url }, function (err, redirect, props) {

	        if (err) {
	            res.status(500).send(err.message);
	        } else if (redirect) {
	            res.redirect(redirect.pathname + redirect.search);
	        } else if (props) {

	            Promise.all([
	            //getLoginStatus()
	            getArticleList()]).then(function (datas) {

	                /*1. state tree 获取登录状态*/
	                getLoginStatus();

	                /*2. state tree 获取文章列表*/
	                if (datas && datas[0] && datas[0].rows) {
	                    req.session.stateTree.articles = {
	                        list: []
	                    };

	                    datas[0].rows.forEach(function (item) {
	                        req.session.stateTree.articles.list.push(item._doc);
	                    });
	                }

	                var store = (0, _store2.default)(req.session.stateTree);
	                console.log('node finally store:', store.getState()); //需要注意与客户端的store统一


	                var appHtml = (0, _server.renderToString)(_react2.default.createElement(
	                    _reactRedux.Provider,
	                    { store: store },
	                    _react2.default.createElement(_reactRouter.RouterContext, props)
	                ));
	                res.render('index', {
	                    html: appHtml,
	                    serverState: JSON.stringify(store.getState())
	                });
	            }).catch();
	        } else {
	            //路由匹配不到,这里这个提示页面暂时不做
	            res.status(404).send('Not Found');
	        }
	    });
	});

	module.exports = router;

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = require("react-redux");

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = require("redux");

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(23);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(25);

	var _AppContainer = __webpack_require__(29);

	var _AppContainer2 = _interopRequireDefault(_AppContainer);

	var _IndexContainer = __webpack_require__(31);

	var _IndexContainer2 = _interopRequireDefault(_IndexContainer);

	var _HomeContainer = __webpack_require__(41);

	var _HomeContainer2 = _interopRequireDefault(_HomeContainer);

	var _AboutContainer = __webpack_require__(44);

	var _AboutContainer2 = _interopRequireDefault(_AboutContainer);

	var _WebContainer = __webpack_require__(47);

	var _WebContainer2 = _interopRequireDefault(_WebContainer);

	var _NodeContainer = __webpack_require__(49);

	var _NodeContainer2 = _interopRequireDefault(_NodeContainer);

	var _AddArticleContainer = __webpack_require__(51);

	var _AddArticleContainer2 = _interopRequireDefault(_AddArticleContainer);

	var _ProfileContainer = __webpack_require__(58);

	var _ProfileContainer2 = _interopRequireDefault(_ProfileContainer);

	var _InfoContainer = __webpack_require__(60);

	var _InfoContainer2 = _interopRequireDefault(_InfoContainer);

	var _CodeContainer = __webpack_require__(62);

	var _CodeContainer2 = _interopRequireDefault(_CodeContainer);

	var _AvatarContainer = __webpack_require__(64);

	var _AvatarContainer2 = _interopRequireDefault(_AvatarContainer);

	var _PassContainer = __webpack_require__(66);

	var _PassContainer2 = _interopRequireDefault(_PassContainer);

	var _LoginContainer = __webpack_require__(68);

	var _LoginContainer2 = _interopRequireDefault(_LoginContainer);

	var _RegisterContainer = __webpack_require__(73);

	var _RegisterContainer2 = _interopRequireDefault(_RegisterContainer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//登录页


	//容器组件

	//首页
	//基础库
	var routes = function routes(state) {

	    //进入之前判断是否已经登录
	    function isLogined() {
	        //console.log('isLogined:',state.login.logined);
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
	                _react2.default.createElement(_reactRouter.IndexRoute, { component: _InfoContainer2.default }),
	                _react2.default.createElement(_reactRouter.Route, { path: 'info', component: _InfoContainer2.default }),
	                _react2.default.createElement(_reactRouter.Route, { path: 'pass', component: _PassContainer2.default }),
	                _react2.default.createElement(_reactRouter.Route, { path: 'avatar', component: _AvatarContainer2.default }),
	                _react2.default.createElement(_reactRouter.Route, { path: 'code', component: _CodeContainer2.default })
	            )
	        ),
	        _react2.default.createElement(_reactRouter.Route, { path: '/login', onEnter: isLogined, component: _LoginContainer2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: '/register', component: _RegisterContainer2.default })
	    );
	};

	//注册页


	//主页
	exports.default = routes;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reactRedux = __webpack_require__(26);

	var _App = __webpack_require__(30);

	var _App2 = _interopRequireDefault(_App);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//基础库
	exports.default = (0, _reactRedux.connect)()(_App2.default);

	//视图组件

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactRouter = __webpack_require__(25);

	var _react = __webpack_require__(23);

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
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _redux = __webpack_require__(27);

	var _reactRedux = __webpack_require__(26);

	var _logout = __webpack_require__(32);

	var LogoutActions = _interopRequireWildcard(_logout);

	var _Index = __webpack_require__(36);

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
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.logout = logout;

	var _actionType = __webpack_require__(33);

	var _httpType = __webpack_require__(34);

	var _ajax = __webpack_require__(35);

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
/* 33 */
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
	    LOGOUT_RECEIVE: 'LOGOUT_RECEIVE', //注销

	    //addArticle
	    PREVIEW: 'PREVIEW', //预览功能
	    ADD_TEMP_ARTICLE: 'ADD_TEMP_ARTICLE' //新增文章
	};

/***/ },
/* 34 */
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
/* 35 */
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
	        },

	        //新增空白文章
	        addTempArticle: function addTempArticle() {
	            return req('POST', '/article/addArticle');
	        }
	    };
	}

	exports.default = ajax;

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(23);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(37);

	var _Header = __webpack_require__(38);

	var _Header2 = _interopRequireDefault(_Header);

	var _Footer = __webpack_require__(40);

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
/* 37 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactRouter = __webpack_require__(25);

	var _react = __webpack_require__(23);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(39);

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
	                                                        { to: '#' },
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
/* 39 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(23);

	var _react2 = _interopRequireDefault(_react);

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
	                'h3',
	                null,
	                '尾部'
	            );
	        }
	    }]);

	    return Footer;
	}(_react.Component);

	exports.default = Footer;

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _redux = __webpack_require__(27);

	var _reactRedux = __webpack_require__(26);

	var _Home = __webpack_require__(42);

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
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(23);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(43);

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
	                                        'a',
	                                        { href: '#', title: 'none' },
	                                        _react2.default.createElement('img', { className: 'lazy artical-image', src: article.image, alt: article.title })
	                                    ),
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'caption' },
	                                        _react2.default.createElement(
	                                            'h3',
	                                            { className: 'artical-title' },
	                                            _react2.default.createElement(
	                                                'a',
	                                                { href: '#' },
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
/* 43 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reactRedux = __webpack_require__(26);

	var _About = __webpack_require__(45);

	var _About2 = _interopRequireDefault(_About);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//基础库
	exports.default = (0, _reactRedux.connect)()(_About2.default);

	//action


	//视图组件

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(23);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(46);

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
/* 46 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reactRedux = __webpack_require__(26);

	var _Web = __webpack_require__(48);

	var _Web2 = _interopRequireDefault(_Web);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//基础库
	exports.default = (0, _reactRedux.connect)()(_Web2.default);

	//action

	//视图组件

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(23);

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
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reactRedux = __webpack_require__(26);

	var _Node = __webpack_require__(50);

	var _Node2 = _interopRequireDefault(_Node);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//基础库
	exports.default = (0, _reactRedux.connect)()(_Node2.default);

	//action


	//视图组件

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(23);

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
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _redux = __webpack_require__(27);

	var _reactRedux = __webpack_require__(26);

	var _addArticle = __webpack_require__(52);

	var addArticle = _interopRequireWildcard(_addArticle);

	var _AddArticle = __webpack_require__(53);

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
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.preview = preview;
	exports.addTempArticle = addTempArticle;

	var _actionType = __webpack_require__(33);

	var _ajax = __webpack_require__(35);

	var _ajax2 = _interopRequireDefault(_ajax);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function preview(value) {
	    return {
	        type: _actionType.PREVIEW,
	        value: value
	    };
	}

	function addTempArticle() {
	    return function (dispatch) {
	        return (0, _ajax2.default)().addTempArticle().then(function (data) {
	            return dispatch(data);
	        });
	    };
	}

	function addTempArticle_receive(data) {
	    return {
	        type: ADD_TEMP_ARTICLE,
	        value: data.data
	    };
	}

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(23);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(54);

	var _Input = __webpack_require__(55);

	var _Input2 = _interopRequireDefault(_Input);

	var _Button = __webpack_require__(56);

	var _Button2 = _interopRequireDefault(_Button);

	var _Markdown = __webpack_require__(57);

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
	            this.props.addTempArticle();
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
	                                    _react2.default.createElement(_Input2.default, { type: 'text', className: 'form-control', id: 'atricleTitle', name: 'atricleTitle' })
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'form-group' },
	                                    _react2.default.createElement(
	                                        'label',
	                                        { htmlFor: 'atricleDescribe' },
	                                        '简介'
	                                    ),
	                                    _react2.default.createElement('textarea', { id: 'atricleDescribe', className: 'form-control', rows: '3', placeholder: '简介...' })
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'form-group' },
	                                    _react2.default.createElement(
	                                        'label',
	                                        { htmlFor: 'imgUrl' },
	                                        '封面'
	                                    ),
	                                    _react2.default.createElement('input', { id: 'imgUrl', name: 'imgUrl', type: 'file', className: 'file-loading', 'data-upload-url': '/article/add' })
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'form-group' },
	                                    _react2.default.createElement(
	                                        'label',
	                                        { htmlFor: 'articleFile' },
	                                        '文章图片'
	                                    ),
	                                    _react2.default.createElement('input', { id: 'articleFile', name: 'articleFile', type: 'file', className: 'file-loading', multiple: true, 'data-upload-url': '/article/add' }),
	                                    _react2.default.createElement(
	                                        'p',
	                                        { className: 'help-block' },
	                                        '请选择.jpg.jpeg.png.gif格式的文件上传'
	                                    ),
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'btn-group' },
	                                        _react2.default.createElement(
	                                            'div',
	                                            null,
	                                            _react2.default.createElement(
	                                                'div',
	                                                { className: 'btn btn-primary' },
	                                                '获取图片的url路径'
	                                            )
	                                        ),
	                                        _react2.default.createElement('ul', null)
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
	                                    { type: 'button', id: 'article-upload', className: 'btn-primary btn-block btn-flat btn button' },
	                                    '上传'
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
	            $('#imgUrl').fileinput({
	                language: "zh",
	                allowedFileExtensions: ["jpg", "png", "gif", "jpeg"],
	                uploadAsync: true,
	                maxFileCount: 1
	            });
	            //初始化文章的表单
	            $('#articleFile').fileinput({
	                language: "zh",
	                allowedFileExtensions: ["jpg", "png", "gif", "jpeg"],
	                uploadAsync: true,
	                maxFileSize: 200
	            });
	        }
	    }]);

	    return AddArticle;
	}(_react.Component);

	exports.default = AddArticle;

/***/ },
/* 54 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(23);

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
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(23);

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
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(23);

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
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _redux = __webpack_require__(27);

	var _reactRedux = __webpack_require__(26);

	var _Profile = __webpack_require__(59);

	var _Profile2 = _interopRequireDefault(_Profile);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _reactRedux.connect)()(_Profile2.default);

	//action


	//视图组件
	//基础库

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(23);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(25);

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
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reactRedux = __webpack_require__(26);

	var _Info = __webpack_require__(61);

	var _Info2 = _interopRequireDefault(_Info);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//基础库
	exports.default = (0, _reactRedux.connect)()(_Info2.default);

	//action


	//视图组件

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(23);

	var _react2 = _interopRequireDefault(_react);

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
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "div",
	                null,
	                _react2.default.createElement(
	                    "div",
	                    { className: "box box-info" },
	                    _react2.default.createElement(
	                        "div",
	                        { className: "box-header with-border" },
	                        _react2.default.createElement(
	                            "h3",
	                            { className: "box-title" },
	                            "个签修改"
	                        )
	                    ),
	                    _react2.default.createElement(
	                        "form",
	                        { className: "form-horizontal" },
	                        _react2.default.createElement(
	                            "div",
	                            { className: "box-body" },
	                            _react2.default.createElement(
	                                "div",
	                                { className: "form-group" },
	                                _react2.default.createElement(
	                                    "label",
	                                    { htmlFor: "inputPassword3", className: "col-sm-2 control-label" },
	                                    "新的个签"
	                                ),
	                                _react2.default.createElement(
	                                    "div",
	                                    { className: "col-sm-10" },
	                                    _react2.default.createElement("input", { type: "password", className: "form-control", id: "inputPassword3", placeholder: "New Label" })
	                                )
	                            )
	                        ),
	                        _react2.default.createElement(
	                            "div",
	                            { className: "box-footer" },
	                            _react2.default.createElement(
	                                "button",
	                                { type: "submit", className: "btn btn-info pull-right" },
	                                "修 改"
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(
	                        "div",
	                        { className: "box-header with-border" },
	                        _react2.default.createElement(
	                            "h3",
	                            { className: "box-title" },
	                            "邮箱修改"
	                        )
	                    ),
	                    _react2.default.createElement(
	                        "form",
	                        { className: "form-horizontal" },
	                        _react2.default.createElement(
	                            "div",
	                            { className: "box-body" },
	                            _react2.default.createElement(
	                                "div",
	                                { className: "form-group" },
	                                _react2.default.createElement(
	                                    "label",
	                                    { htmlFor: "inputEmail3", className: "col-sm-2 control-label" },
	                                    "原始邮箱"
	                                ),
	                                _react2.default.createElement(
	                                    "div",
	                                    { className: "col-sm-10" },
	                                    _react2.default.createElement("input", { type: "email", className: "form-control", id: "inputEmail3", disabled: true })
	                                )
	                            ),
	                            _react2.default.createElement(
	                                "div",
	                                { className: "form-group" },
	                                _react2.default.createElement(
	                                    "label",
	                                    { htmlFor: "inputPassword3", className: "col-sm-2 control-label" },
	                                    "新的邮箱"
	                                ),
	                                _react2.default.createElement(
	                                    "div",
	                                    { className: "col-sm-10" },
	                                    _react2.default.createElement("input", { type: "password", className: "form-control", id: "inputPassword3", placeholder: "New Email" })
	                                )
	                            )
	                        ),
	                        _react2.default.createElement(
	                            "div",
	                            { className: "box-footer" },
	                            _react2.default.createElement(
	                                "button",
	                                { type: "submit", className: "btn btn-info pull-right" },
	                                "修 改"
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(
	                        "div",
	                        { className: "box-header with-border" },
	                        _react2.default.createElement(
	                            "h3",
	                            { className: "box-title" },
	                            "电话修改"
	                        )
	                    ),
	                    _react2.default.createElement(
	                        "form",
	                        { className: "form-horizontal" },
	                        _react2.default.createElement(
	                            "div",
	                            { className: "box-body" },
	                            _react2.default.createElement(
	                                "div",
	                                { className: "form-group" },
	                                _react2.default.createElement(
	                                    "label",
	                                    { htmlFor: "inputEmail3", className: "col-sm-2 control-label" },
	                                    "原始电话"
	                                ),
	                                _react2.default.createElement(
	                                    "div",
	                                    { className: "col-sm-10" },
	                                    _react2.default.createElement("input", { type: "email", className: "form-control", id: "inputEmail3", disabled: true })
	                                )
	                            ),
	                            _react2.default.createElement(
	                                "div",
	                                { className: "form-group" },
	                                _react2.default.createElement(
	                                    "label",
	                                    { htmlFor: "inputPassword3", className: "col-sm-2 control-label" },
	                                    "新的电话"
	                                ),
	                                _react2.default.createElement(
	                                    "div",
	                                    { className: "col-sm-10" },
	                                    _react2.default.createElement("input", { type: "password", className: "form-control", id: "inputPassword3", placeholder: "New Tel" })
	                                )
	                            )
	                        ),
	                        _react2.default.createElement(
	                            "div",
	                            { className: "box-footer" },
	                            _react2.default.createElement(
	                                "button",
	                                { type: "submit", className: "btn btn-info pull-right" },
	                                "修 改"
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
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reactRedux = __webpack_require__(26);

	var _Code = __webpack_require__(63);

	var _Code2 = _interopRequireDefault(_Code);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//基础库
	exports.default = (0, _reactRedux.connect)()(_Code2.default);

	//action


	//视图组件

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(23);

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
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reactRedux = __webpack_require__(26);

	var _Avatar = __webpack_require__(65);

	var _Avatar2 = _interopRequireDefault(_Avatar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//基础库
	exports.default = (0, _reactRedux.connect)()(_Avatar2.default);

	//action


	//视图组件

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(23);

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
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reactRedux = __webpack_require__(26);

	var _Pass = __webpack_require__(67);

	var _Pass2 = _interopRequireDefault(_Pass);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//基础库
	exports.default = (0, _reactRedux.connect)()(_Pass2.default);

	//action


	//视图组件

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(23);

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
	                { className: "box box-info" },
	                _react2.default.createElement(
	                    "div",
	                    { className: "box-header with-border" },
	                    _react2.default.createElement(
	                        "h3",
	                        { className: "box-title" },
	                        "密码修改"
	                    )
	                ),
	                _react2.default.createElement(
	                    "form",
	                    { className: "form-horizontal" },
	                    _react2.default.createElement(
	                        "div",
	                        { className: "box-body" },
	                        _react2.default.createElement(
	                            "div",
	                            { className: "form-group" },
	                            _react2.default.createElement(
	                                "label",
	                                { htmlFor: "inputEmail3", className: "col-sm-2 control-label" },
	                                "原始密码"
	                            ),
	                            _react2.default.createElement(
	                                "div",
	                                { className: "col-sm-10" },
	                                _react2.default.createElement("input", { type: "email", className: "form-control", id: "inputEmail3", placeholder: "Password" })
	                            )
	                        ),
	                        _react2.default.createElement(
	                            "div",
	                            { className: "form-group" },
	                            _react2.default.createElement(
	                                "label",
	                                { htmlFor: "inputPassword3", className: "col-sm-2 control-label" },
	                                "新的密码"
	                            ),
	                            _react2.default.createElement(
	                                "div",
	                                { className: "col-sm-10" },
	                                _react2.default.createElement("input", { type: "password", className: "form-control", id: "inputPassword3", placeholder: "New Password" })
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(
	                        "div",
	                        { className: "box-footer" },
	                        _react2.default.createElement(
	                            "button",
	                            { type: "submit", className: "btn btn-info pull-right" },
	                            "修 改"
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
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _redux = __webpack_require__(27);

	var _reactRedux = __webpack_require__(26);

	var _Login = __webpack_require__(69);

	var _Login2 = _interopRequireDefault(_Login);

	var _login = __webpack_require__(72);

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
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(23);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(25);

	var _Input = __webpack_require__(55);

	var _Input2 = _interopRequireDefault(_Input);

	var _Button = __webpack_require__(56);

	var _Button2 = _interopRequireDefault(_Button);

	var _privateType = __webpack_require__(70);

	var _httpType = __webpack_require__(34);

	var _history = __webpack_require__(71);

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
/* 70 */
/***/ function(module, exports) {

	'use strict';

	//私有函数常量

	module.exports = {
	    _onClick: Symbol('_onClick')
	};

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reactRouter = __webpack_require__(25);

	exports.default = _reactRouter.browserHistory;

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.login_start = login_start;
	exports.login_reveive = login_reveive;

	var _actionType = __webpack_require__(33);

	var _ajax = __webpack_require__(35);

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
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _redux = __webpack_require__(27);

	var _reactRedux = __webpack_require__(26);

	var _Register = __webpack_require__(74);

	var _Register2 = _interopRequireDefault(_Register);

	var _register = __webpack_require__(75);

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
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(23);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(25);

	var _Input = __webpack_require__(55);

	var _Input2 = _interopRequireDefault(_Input);

	var _Button = __webpack_require__(56);

	var _Button2 = _interopRequireDefault(_Button);

	var _privateType = __webpack_require__(70);

	var _httpType = __webpack_require__(34);

	var _history = __webpack_require__(71);

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
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.register_start = register_start;

	var _actionType = __webpack_require__(33);

	var _ajax = __webpack_require__(35);

	var _ajax2 = _interopRequireDefault(_ajax);

	var _httpType = __webpack_require__(34);

	var _login = __webpack_require__(72);

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
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = configureStore;

	var _redux = __webpack_require__(27);

	var _reduxThunk = __webpack_require__(77);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	var _reduxLogger = __webpack_require__(78);

	var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

	var _reducers = __webpack_require__(79);

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
/* 77 */
/***/ function(module, exports) {

	module.exports = require("redux-thunk");

/***/ },
/* 78 */
/***/ function(module, exports) {

	module.exports = require("redux-logger");

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _redux = __webpack_require__(27);

	var _login = __webpack_require__(80);

	var _login2 = _interopRequireDefault(_login);

	var _register = __webpack_require__(81);

	var _register2 = _interopRequireDefault(_register);

	var _articles = __webpack_require__(82);

	var _articles2 = _interopRequireDefault(_articles);

	var _addArticle = __webpack_require__(83);

	var _addArticle2 = _interopRequireDefault(_addArticle);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//文章


	//登录
	var reducer = (0, _redux.combineReducers)({
		login: _login2.default,
		register: _register2.default,
		articles: _articles2.default,
		addArticle: _addArticle2.default
	});
	//添加文章

	//注册
	//基础库
	exports.default = reducer;

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _actionType = __webpack_require__(33);

	var _httpType = __webpack_require__(34);

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
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _httpType = __webpack_require__(34);

	var _actionType = __webpack_require__(33);

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

/***/ },
/* 82 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var article = function article() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? {
	        list: []
	    } : arguments[0];
	    var action = arguments[1];


	    switch (action.type) {
	        default:
	            return state;
	    }
	};

	exports.default = article;

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _actionType = __webpack_require__(33);

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
	                tempId: action.value._id
	            });
	        default:
	            return state;
	    }
	};

	exports.default = addArticle;

/***/ }
/******/ ]);