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
	app.use('/article', __webpack_require__(11));

	//react服务器渲染路由
	app.use('/', __webpack_require__(25));

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

	var _user = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../controllers/user.controller\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

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

	//个人信息修改
	router.post('/profile/:type', _user.profile);

	//获取个人文章列表
	router.get('/getList', _user.getArticleList);

	module.exports = router;

/***/ },
/* 10 */,
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _article = __webpack_require__(12);

	var _uploader = __webpack_require__(23);

	var _express = __webpack_require__(1);

	var _express2 = _interopRequireDefault(_express);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var router = _express2.default.Router();

	//获取文章列表
	router.get('/getArticleList', _article.getArticleList);

	//获取文章内容
	router.post('/getArticle', _article.getArticle);

	//新增文章
	router.post('/addArticle', _article.addArticle);

	//修改文章
	router.post('/modfiyArticle', _article.modfiyArticle);

	//上传文章封面和图片
	router.post('/uploadimg', _uploader.uploaderImg);

	//获取文章中上传图片的url
	router.get('/getImgUrl', _article.getImgUrl);

	module.exports = router;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.getArticleList = getArticleList;
	exports.getArticle = getArticle;
	exports.addArticle = addArticle;
	exports.modfiyArticle = modfiyArticle;
	exports.getImgUrl = getImgUrl;

	var _express = __webpack_require__(1);

	var _express2 = _interopRequireDefault(_express);

	var _fs = __webpack_require__(13);

	var _fs2 = _interopRequireDefault(_fs);

	var _path = __webpack_require__(2);

	var _path2 = _interopRequireDefault(_path);

	var _article = __webpack_require__(14);

	var _article2 = _interopRequireDefault(_article);

	var _showdown = __webpack_require__(22);

	var _showdown2 = _interopRequireDefault(_showdown);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var converter = new _showdown2.default.Converter();

	//获取文章列表
	function getArticleList(req, res, next) {
	    var query = req.query;
	    _article2.default.getArticleList(query).then(function (data) {
	        res.send(data);
	    }, function (data) {
	        console.log(data);
	    });
	};

	//获取文章内容
	function getArticle(req, res, next) {
	    var query = req.body;
	    _article2.default.getArticle(query).then(function (data) {
	        var articleContent = _extends({}, data.userInfo, {
	            content: converter.makeHtml(data.content)
	        });
	        res.send(articleContent);
	    }, function (data) {
	        console.log(data);
	    });
	};

	//新增文章
	function addArticle(req, res, next) {
	    var query = req.body,
	        article_dir;
	    _article2.default.addArticle(query).then(function (data) {
	        //创建以文章标题为名称的文件夹
	        article_dir = _path2.default.resolve('public/images', req.session.loginUser.author, 'article', data.data._id.toHexString());
	        if (data.code == 0) {
	            _fs2.default.mkdir(article_dir, function (err) {
	                res.send(data);
	            });
	        } else {
	            res.send(data);
	        }
	    }, function (err) {
	        console.log(err);
	    });
	};

	//修改文章
	function modfiyArticle(req, res, next) {
	    var query = req.body;
	    _article2.default.modfiyArticle(query).then(function (data) {
	        res.send(data);
	    }, function (data) {
	        console.log(data);
	    });
	};

	//获取文章中上传图片的url
	function getImgUrl(req, res, next) {
	    var query = req.query;
	    _article2.default.getImgUrl(query).then(function (data) {
	        res.send(data);
	    }, function (data) {
	        console.log(data);
	    });
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = require("fs");

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _db_tools = __webpack_require__(15);

	var _db_tools2 = _interopRequireDefault(_db_tools);

	var _statusMsg = __webpack_require__(21);

	var _statusMsg2 = _interopRequireDefault(_statusMsg);

	var _path = __webpack_require__(2);

	var _path2 = _interopRequireDefault(_path);

	var _fs = __webpack_require__(13);

	var _fs2 = _interopRequireDefault(_fs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Article = function Article() {};

	//获取文章列表
	Article.getArticleList = function (obj) {
	    return new Promise(function (resolve, reject) {
	        _db_tools2.default.query('article', obj, '-content').then(function (data) {
	            resolve(data);
	        }, function (err) {
	            reject(err);
	        });
	    });
	};

	//获取文章内容及作者信息(byArticleId)
	Article.getArticle = function (obj) {
	    var queryObj = {
	        _id: obj.articleId
	    };
	    return new Promise(function (resolve, reject) {
	        _db_tools2.default.queryByCondition('article', queryObj, 'content author').then(function (articleData) {
	            articleData = articleData[0].toObject(); //转成对象字面量
	            //根据author字段查询作者信息，过滤密码字段
	            _db_tools2.default.queryByCondition('user', { author: articleData.author }, '-password').then(function (userData) {
	                userData = !!userData.length ? userData[0].toObject() : [];
	                articleData.userInfo = userData;
	                resolve(articleData);
	            });
	        }, function (err) {
	            reject(err);
	        });
	    });
	};

	//新增文章
	Article.addArticle = function (obj) {
	    return new Promise(function (resolve, reject) {
	        _db_tools2.default.add('article', obj).then(function (data) {
	            _statusMsg2.default.successMsg.data = data.toObject();
	            resolve(_statusMsg2.default.successMsg);
	        }, function (err) {
	            reject(err);
	        });
	    });
	};

	//修改文章
	Article.modfiyArticle = function (obj) {
	    return new Promise(function (resolve, reject) {
	        _db_tools2.default.edit('article', obj).then(function (data) {
	            resolve(data);
	        }, function (err) {
	            reject(err);
	        });
	    });
	};

	//获取文章中上传图片的url
	Article.getImgUrl = function (obj) {
	    var user_dir;
	    _statusMsg2.default.successMsg.data = [];
	    return new Promise(function (resolve, reject) {
	        user_dir = _path2.default.resolve('public/images', req.session.loginUser.author, 'article', obj.articleId);
	        _fs2.default.readdir(user_dir, function (err, data) {
	            data.forEach(function (value, index) {
	                _statusMsg2.default.successMsg.data.push(_path2.default.resolve(user_dir, value));
	            });
	            resolve(_statusMsg2.default.successMsg);
	        });
	    });
	};
	module.exports = Article;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * 增删改查操作
	 * @Author zhangxin14
	 * @Date   2016/7/19
	 *
	 */

	var db = __webpack_require__(16);
	var user = __webpack_require__(18);
	var article = __webpack_require__(19);
	var comment = __webpack_require__(20);
	var statusMsg = __webpack_require__(21);

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
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * 数据库连接
	 * @Author zhangxin14
	 * @Date   2016/7/19
	 *
	 */
	var mongoose = __webpack_require__(17);
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
/* 17 */
/***/ function(module, exports) {

	module.exports = require("mongoose");

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var db = __webpack_require__(16);
	var Schema = db.Schema;
	var ObjectId = db.Schema.Types.ObjectId;
	var userSchema = new Schema({
	    authorId: ObjectId,
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
	}, {
	    versionKey: false
	});

	var user = db.model('User', userSchema);
	module.exports = user;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var db = __webpack_require__(16);
	var Schema = db.Schema;
	var ObjectId = db.Schema.Types.ObjectId;
	var articleSchema = new Schema({
	    title: {
	        type: String,
	        index: 1,
	        require: true,
	        unique: true
	    },
	    tag: String,
	    // articleId:{
	    //    type:String,
	    //    default:ObjectId
	    // },
	    author: String,
	    createTime: String,
	    content: String,
	    image: {
	        type: String,
	        default: '/images/default/article.jpg'
	    },
	    describe: String

	}, {
	    versionKey: false
	});
	var article = db.model('Article', articleSchema);
	module.exports = article;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var db = __webpack_require__(16);
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
/* 21 */
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
/* 22 */
/***/ function(module, exports) {

	module.exports = require("showdown");

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.uploaderImg = uploaderImg;
	exports.userImg = userImg;

	var _formidable = __webpack_require__(24);

	var _formidable2 = _interopRequireDefault(_formidable);

	var _fs = __webpack_require__(13);

	var _fs2 = _interopRequireDefault(_fs);

	var _path = __webpack_require__(2);

	var _path2 = _interopRequireDefault(_path);

	var _statusMsg = __webpack_require__(21);

	var _statusMsg2 = _interopRequireDefault(_statusMsg);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//文件上传
	function uploaderImg(req, res, next) {
	    var form = _formidable2.default.IncomingForm(),
	        imgUrl;
	    form.encoding = 'utf-8';
	    //文件后缀名
	    form.keepExtensions = true;
	    //多文件上传
	    // form.multiples = true;
	    form.parse(req, function (err, fields, files) {
	        if (err) {
	            console.log(err);
	            res.send(err);
	            return;
	        }
	        //临时目录
	        var fileName = files.imgUrl ? files.imgUrl.name : files.articleFile.name;
	        var filePath = files.imgUrl ? files.imgUrl.path : files.articleFile.path;
	        imgUrl = _path2.default.resolve('public/images', req.session.loginUser.author, 'article', fields.articleId, fileName);
	        //读取文件
	        _fs2.default.writeFile(imgUrl, _fs2.default.readFileSync(filePath), function (err) {
	            if (err) {
	                res.send(err);
	                return;
	            }
	            _statusMsg2.default.successMsg.data = {
	                imgUrl: imgUrl
	            };
	            //返回成功信息
	            res.send(_statusMsg2.default.successMsg);
	        });
	    });
	};

	//上传头像与二维码
	function userImg(req, res, next) {
	    var form = _formidable2.default.IncomingForm(),
	        imgUrl;

	    form.encoding = 'utf-8';
	    form.keepExtensions = true;
	    form.parse(req, function (err, fields, files) {
	        if (err) {
	            console.log(err);
	            res.send(err);
	            return;
	        }
	        imgUrl = _path2.default.resolve('public/images', req.session.loginUser.author, 'userInfo', files.imgUrl.name);
	        _fs2.default.writeFile(imgUrl, _fs2.default.readFileSync(files.imgUrl.path), function (err) {
	            if (err) {
	                res.send(err);
	                return;
	            }
	            _statusMsg2.default.successMsg.data = {
	                imgUrl: imgUrl
	            };
	            //返回成功信息
	            res.send(_statusMsg2.default.successMsg);
	        });
	    });
	}

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = require("formidable");

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _express = __webpack_require__(1);

	var _express2 = _interopRequireDefault(_express);

	var _react = __webpack_require__(26);

	var _react2 = _interopRequireDefault(_react);

	var _server = __webpack_require__(27);

	var _reactRouter = __webpack_require__(28);

	var _reactRedux = __webpack_require__(29);

	var _redux = __webpack_require__(30);

	var _indexServer = __webpack_require__(31);

	var _indexServer2 = _interopRequireDefault(_indexServer);

	var _store = __webpack_require__(85);

	var _store2 = _interopRequireDefault(_store);

	var _article = __webpack_require__(14);

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
	        if (req.session.loginUser) {
	            req.session.stateTree.login = {
	                loginUser: req.session.loginUser,
	                logined: true
	            };
	        }
	    }

	    /**
	     * 获取文章列表
	     */
	    function getArticleList() {
	        return _article2.default.getArticleList({
	            pageSize: 9, //首页只需要获取9篇文章
	            pageNo: 1
	        });
	    }

	    var store = (0, _store2.default)(); //这里需要传入需要的state tree

	    (0, _reactRouter.match)({ routes: (0, _indexServer2.default)(store), location: req.url }, function (err, redirect, props) {

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
	                        list: [],
	                        contentList: [],
	                        getting: false
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
/* 26 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = require("react-redux");

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = require("redux");

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(26);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(28);

	var _AppContainer = __webpack_require__(32);

	var _AppContainer2 = _interopRequireDefault(_AppContainer);

	var _IndexContainer = __webpack_require__(34);

	var _IndexContainer2 = _interopRequireDefault(_IndexContainer);

	var _HomeContainer = __webpack_require__(45);

	var _HomeContainer2 = _interopRequireDefault(_HomeContainer);

	var _AboutContainer = __webpack_require__(49);

	var _AboutContainer2 = _interopRequireDefault(_AboutContainer);

	var _WebContainer = __webpack_require__(52);

	var _WebContainer2 = _interopRequireDefault(_WebContainer);

	var _NodeContainer = __webpack_require__(54);

	var _NodeContainer2 = _interopRequireDefault(_NodeContainer);

	var _AddArticleContainer = __webpack_require__(56);

	var _AddArticleContainer2 = _interopRequireDefault(_AddArticleContainer);

	var _ProfileContainer = __webpack_require__(63);

	var _ProfileContainer2 = _interopRequireDefault(_ProfileContainer);

	var _InfoContainer = __webpack_require__(65);

	var _InfoContainer2 = _interopRequireDefault(_InfoContainer);

	var _CodeContainer = __webpack_require__(68);

	var _CodeContainer2 = _interopRequireDefault(_CodeContainer);

	var _AvatarContainer = __webpack_require__(70);

	var _AvatarContainer2 = _interopRequireDefault(_AvatarContainer);

	var _PassContainer = __webpack_require__(72);

	var _PassContainer2 = _interopRequireDefault(_PassContainer);

	var _ArticleContainer = __webpack_require__(74);

	var _ArticleContainer2 = _interopRequireDefault(_ArticleContainer);

	var _UserContainer = __webpack_require__(76);

	var _UserContainer2 = _interopRequireDefault(_UserContainer);

	var _LoginContainer = __webpack_require__(78);

	var _LoginContainer2 = _interopRequireDefault(_LoginContainer);

	var _RegisterContainer = __webpack_require__(82);

	var _RegisterContainer2 = _interopRequireDefault(_RegisterContainer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//注册页


	//主页


	/*容器组件*/
	//基础库
	var routes = function routes(store) {
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
	            ),
	            _react2.default.createElement(_reactRouter.Route, { path: '/article/:id', component: _ArticleContainer2.default }),
	            _react2.default.createElement(_reactRouter.Route, { path: '/user/:id', component: _UserContainer2.default })
	        ),
	        _react2.default.createElement(_reactRouter.Route, { path: '/login', component: _LoginContainer2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: '/register', component: _RegisterContainer2.default })
	    );
	}; //登录页
	//首页
	exports.default = routes;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reactRedux = __webpack_require__(29);

	var _App = __webpack_require__(33);

	var _App2 = _interopRequireDefault(_App);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//基础库
	exports.default = (0, _reactRedux.connect)()(_App2.default);

	//视图组件

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactRouter = __webpack_require__(28);

	var _react = __webpack_require__(26);

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
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _redux = __webpack_require__(30);

	var _reactRedux = __webpack_require__(29);

	var _logout = __webpack_require__(35);

	var LogoutActions = _interopRequireWildcard(_logout);

	var _Index = __webpack_require__(39);

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
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.logout = logout;

	var _actionType = __webpack_require__(36);

	var _httpType = __webpack_require__(37);

	var _ajax = __webpack_require__(38);

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
/* 36 */
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
	    DEL_ARTICLE: 'DEL_ARTICLE'
	};

/***/ },
/* 37 */
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
/* 38 */
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

	        //个人中心-密码修改
	        modifyPass: function modifyPass(data) {
	            return req('POST', '/user/profile/pass', data);
	        },

	        //个人中心-个签,电话,邮箱修改
	        modifyInfo: function modifyInfo(data) {
	            return req('POST', '/user/profile/info', data);
	        },

	        //新增文章
	        addTempArticle: function addTempArticle(data) {
	            return req('POST', '/article/addArticle', data);
	        },

	        //获取文章内容
	        article: function article(data) {
	            return req('POST', '/article/getArticle', data);
	        },

	        //删除文章
	        delArticle: function delArticle(data) {
	            return req('POST', '/article/delArticle', data);
	        },

	        //获取个人文章列表
	        user: function user(data) {
	            return req('POST', '/user/getList', data);
	        }

	    };
	}

	exports.default = ajax;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(26);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(40);

	var _Header = __webpack_require__(41);

	var _Header2 = _interopRequireDefault(_Header);

	var _Footer = __webpack_require__(43);

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
/* 40 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactRouter = __webpack_require__(28);

	var _react = __webpack_require__(26);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(42);

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
/* 42 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(26);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(44);

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
/* 44 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _redux = __webpack_require__(30);

	var _reactRedux = __webpack_require__(29);

	var _Home = __webpack_require__(46);

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
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(26);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(47);

	var _reactRouter = __webpack_require__(28);

	var _history = __webpack_require__(48);

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
/* 47 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reactRouter = __webpack_require__(28);

	exports.default = _reactRouter.browserHistory;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reactRedux = __webpack_require__(29);

	var _About = __webpack_require__(50);

	var _About2 = _interopRequireDefault(_About);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//基础库
	exports.default = (0, _reactRedux.connect)()(_About2.default);

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

	var _react = __webpack_require__(26);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(51);

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
/* 51 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reactRedux = __webpack_require__(29);

	var _Web = __webpack_require__(53);

	var _Web2 = _interopRequireDefault(_Web);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//基础库
	exports.default = (0, _reactRedux.connect)()(_Web2.default);

	//action

	//视图组件

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(26);

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
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reactRedux = __webpack_require__(29);

	var _Node = __webpack_require__(55);

	var _Node2 = _interopRequireDefault(_Node);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//基础库
	exports.default = (0, _reactRedux.connect)()(_Node2.default);

	//action


	//视图组件

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(26);

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
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _redux = __webpack_require__(30);

	var _reactRedux = __webpack_require__(29);

	var _addArticle = __webpack_require__(57);

	var addArticle = _interopRequireWildcard(_addArticle);

	var _AddArticle = __webpack_require__(58);

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
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.preview = preview;
	exports.addTempArticle = addTempArticle;
	exports.addTitle = addTitle;
	exports.addIntro = addIntro;

	var _actionType = __webpack_require__(36);

	var _ajax = __webpack_require__(38);

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

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(26);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(59);

	var _Input = __webpack_require__(60);

	var _Input2 = _interopRequireDefault(_Input);

	var _Button = __webpack_require__(61);

	var _Button2 = _interopRequireDefault(_Button);

	var _Markdown = __webpack_require__(62);

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
	            });

	            //文件上传，ajax数据添加
	            // $('#imgUrl').on('filepreajax', function(event, previewId, index) {
	            //     $('#imgUrl').fileinput({
	            //         uploadExtraData: {
	            //             type:'cover',
	            //             articleId:_this.props.addArticle.articleId
	            //         }
	            //     });
	            // });
	            // $('#articleFile').on('filepreajax', function(event, previewId, index) {
	            //     $('#articleFile').fileinput({
	            //         uploadExtraData: {
	            //             type:'article',
	            //             articleId:_this.props.addArticle.articleId
	            //         }
	            //     });
	            // });

	            $('#article-add').click(function (e) {
	                if ($(e.target).parent().attr('class').indexOf('clear') > -1) {
	                    $('#atricleTitle').val('');
	                    $('#atricleDescribe').val('');
	                    $('#imgUrl').fileinput('clear');
	                    $('#articleFile').fileinput('clear');
	                    $('#text-input').val('');
	                }
	            });
	        }
	    }]);

	    return AddArticle;
	}(_react.Component);

	exports.default = AddArticle;

/***/ },
/* 59 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(26);

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
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(26);

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
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(26);

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
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _redux = __webpack_require__(30);

	var _reactRedux = __webpack_require__(29);

	var _Profile = __webpack_require__(64);

	var _Profile2 = _interopRequireDefault(_Profile);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _reactRedux.connect)()(_Profile2.default);

	//action


	//视图组件
	//基础库

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(26);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(28);

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
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _redux = __webpack_require__(30);

	var _reactRedux = __webpack_require__(29);

	var _profile = __webpack_require__(66);

	var ProfileActions = _interopRequireWildcard(_profile);

	var _Info = __webpack_require__(67);

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
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.modify_init = modify_init;
	exports.modify_start = modify_start;

	var _actionType = __webpack_require__(36);

	var _ajax = __webpack_require__(38);

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
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(26);

	var _react2 = _interopRequireDefault(_react);

	var _actionType = __webpack_require__(36);

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
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reactRedux = __webpack_require__(29);

	var _Code = __webpack_require__(69);

	var _Code2 = _interopRequireDefault(_Code);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//基础库
	exports.default = (0, _reactRedux.connect)()(_Code2.default);

	//action


	//视图组件

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(26);

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
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reactRedux = __webpack_require__(29);

	var _Avatar = __webpack_require__(71);

	var _Avatar2 = _interopRequireDefault(_Avatar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//基础库
	exports.default = (0, _reactRedux.connect)()(_Avatar2.default);

	//action


	//视图组件

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(26);

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
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _redux = __webpack_require__(30);

	var _reactRedux = __webpack_require__(29);

	var _profile = __webpack_require__(66);

	var ProfileActions = _interopRequireWildcard(_profile);

	var _Pass = __webpack_require__(73);

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
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(26);

	var _react2 = _interopRequireDefault(_react);

	var _actionType = __webpack_require__(36);

	var _httpType = __webpack_require__(37);

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
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _reactRedux = __webpack_require__(29);

	var _Article = __webpack_require__(75);

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
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(26);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(28);

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
	                                    ),
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'box-img' },
	                                        _react2.default.createElement('img', { src: showArticle.codeUrl, alt: '扫二维码' })
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
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reactRedux = __webpack_require__(29);

	var _User = __webpack_require__(77);

	var _User2 = _interopRequireDefault(_User);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//绑定article store到Article组件
	//function mapStateToProps(state) {
	//    return {
	//        articles: state.articles
	//    }
	//}


	//基础库
	exports.default = (0, _reactRedux.connect)()(_User2.default);

	//action


	//视图组件

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(26);

	var _react2 = _interopRequireDefault(_react);

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
	        key: "render",
	        value: function render() {

	            var loading = true;
	            var _props = this.props;
	            var user = _props.user;
	            var params = _props.params;


	            var showList = {}; //显示的文章列表

	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;

	            try {
	                for (var _iterator = user.articleList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var articleList = _step.value;

	                    if (articleList.userId === params.id) {
	                        showList = articleList;
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
	                "div",
	                { className: "content-wrapper" },
	                _react2.default.createElement("br", null),
	                loading ? _react2.default.createElement(
	                    "div",
	                    { className: "alert alert-info", role: "alert" },
	                    "信息正在加载,请稍后..."
	                ) : _react2.default.createElement(
	                    "div",
	                    { className: "info-box" },
	                    _react2.default.createElement(
	                        "div",
	                        { className: "info-box-content" },
	                        _react2.default.createElement(
	                            "div",
	                            { className: "container authors-info" },
	                            _react2.default.createElement(
	                                "blockquote",
	                                null,
	                                _react2.default.createElement(
	                                    "p",
	                                    { className: "module-list-item" },
	                                    _react2.default.createElement(
	                                        "a",
	                                        null,
	                                        _react2.default.createElement("img", { width: "60", height: "80", alt: "个人照片" })
	                                    )
	                                ),
	                                _react2.default.createElement(
	                                    "ul",
	                                    { className: "module-list" },
	                                    _react2.default.createElement(
	                                        "li",
	                                        { className: "module-list-item" },
	                                        "作者:"
	                                    ),
	                                    _react2.default.createElement(
	                                        "li",
	                                        { className: "module-list-item" },
	                                        "联系方式："
	                                    ),
	                                    _react2.default.createElement(
	                                        "li",
	                                        { className: "module-list-item" },
	                                        "邮箱: "
	                                    )
	                                )
	                            )
	                        ),
	                        _react2.default.createElement(
	                            "div",
	                            { className: "container author-info-list" },
	                            _react2.default.createElement(
	                                "ul",
	                                { className: "timeline" },
	                                _react2.default.createElement(
	                                    "li",
	                                    { className: "time-label" },
	                                    _react2.default.createElement(
	                                        "span",
	                                        { className: "bg-red" },
	                                        "10 Feb. 2014"
	                                    )
	                                ),
	                                _react2.default.createElement(
	                                    "li",
	                                    null,
	                                    _react2.default.createElement("i", { className: "fa fa-comment-o bg-yellow" }),
	                                    _react2.default.createElement(
	                                        "div",
	                                        { className: "timeline-item" },
	                                        _react2.default.createElement(
	                                            "span",
	                                            { className: "time" },
	                                            _react2.default.createElement("i", { className: "fa fa-clock-o" }),
	                                            "4324312"
	                                        ),
	                                        _react2.default.createElement(
	                                            "h3",
	                                            { className: "timeline-header" },
	                                            _react2.default.createElement(
	                                                "a",
	                                                { href: "<%= list.url %>" },
	                                                "43214321432"
	                                            )
	                                        ),
	                                        _react2.default.createElement(
	                                            "div",
	                                            { className: "timeline-body" },
	                                            "42314321......"
	                                        ),
	                                        _react2.default.createElement(
	                                            "div",
	                                            { className: "timeline-footer" },
	                                            _react2.default.createElement(
	                                                "a",
	                                                { className: "btn btn-primary btn-xs" },
	                                                "阅读全文..."
	                                            )
	                                        )
	                                    )
	                                )
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
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _redux = __webpack_require__(30);

	var _reactRedux = __webpack_require__(29);

	var _Login = __webpack_require__(79);

	var _Login2 = _interopRequireDefault(_Login);

	var _login = __webpack_require__(81);

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
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(26);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(28);

	var _Input = __webpack_require__(60);

	var _Input2 = _interopRequireDefault(_Input);

	var _Button = __webpack_require__(61);

	var _Button2 = _interopRequireDefault(_Button);

	var _privateType = __webpack_require__(80);

	var _httpType = __webpack_require__(37);

	var _history = __webpack_require__(48);

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
/* 80 */
/***/ function(module, exports) {

	'use strict';

	//私有函数常量

	module.exports = {
	    _onClick: Symbol('_onClick')
	};

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.login_init = login_init;
	exports.login_start = login_start;
	exports.login_reveive = login_reveive;

	var _actionType = __webpack_require__(36);

	var _ajax = __webpack_require__(38);

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
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _redux = __webpack_require__(30);

	var _reactRedux = __webpack_require__(29);

	var _Register = __webpack_require__(83);

	var _Register2 = _interopRequireDefault(_Register);

	var _register = __webpack_require__(84);

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
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(26);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(28);

	var _Input = __webpack_require__(60);

	var _Input2 = _interopRequireDefault(_Input);

	var _Button = __webpack_require__(61);

	var _Button2 = _interopRequireDefault(_Button);

	var _privateType = __webpack_require__(80);

	var _httpType = __webpack_require__(37);

	var _history = __webpack_require__(48);

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
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.register_init = register_init;
	exports.register_start = register_start;

	var _actionType = __webpack_require__(36);

	var _ajax = __webpack_require__(38);

	var _ajax2 = _interopRequireDefault(_ajax);

	var _httpType = __webpack_require__(37);

	var _login = __webpack_require__(81);

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
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = configureStore;

	var _redux = __webpack_require__(30);

	var _reduxThunk = __webpack_require__(86);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	var _reduxLogger = __webpack_require__(87);

	var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

	var _reducers = __webpack_require__(88);

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
/* 86 */
/***/ function(module, exports) {

	module.exports = require("redux-thunk");

/***/ },
/* 87 */
/***/ function(module, exports) {

	module.exports = require("redux-logger");

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _redux = __webpack_require__(30);

	var _login = __webpack_require__(89);

	var _login2 = _interopRequireDefault(_login);

	var _register = __webpack_require__(90);

	var _register2 = _interopRequireDefault(_register);

	var _articles = __webpack_require__(91);

	var _articles2 = _interopRequireDefault(_articles);

	var _addArticle = __webpack_require__(92);

	var _addArticle2 = _interopRequireDefault(_addArticle);

	var _profile = __webpack_require__(93);

	var _profile2 = _interopRequireDefault(_profile);

	var _user = __webpack_require__(94);

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
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _actionType = __webpack_require__(36);

	var _httpType = __webpack_require__(37);

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
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _httpType = __webpack_require__(37);

	var _actionType = __webpack_require__(36);

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
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _actionType = __webpack_require__(36);

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
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _actionType = __webpack_require__(36);

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
	        default:
	            return state;
	    }
	};

	exports.default = addArticle;

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _actionType = __webpack_require__(36);

	var _httpType = __webpack_require__(37);

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
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _actionType = __webpack_require__(36);

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
/******/ ]);