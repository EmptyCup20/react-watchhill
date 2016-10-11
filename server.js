require('babel-register');
var path = require('path');
var express = require('express');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var logger = require('morgan');
var ejs = require('ejs');
var expressSession = require('express-session');
var cookieParser = require('cookie-parser');
var compression = require('compression');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var WebpackConfig = require('./webpack.browser.config');
var config = require('./config');

const app = express();


// view engine setup
app.set('views', path.join(__dirname, 'view'));
app.engine('.html', ejs.__express);
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));

if(app.get('env').trim()==='production'){

	app.use(compression());//开启gzip压缩
} else {
	require('./server/inits/user.init');	//其他环境下账号初始化设置
}



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser('MAGICString')); //开启cookie
app.use(expressSession({
	secret:'12345',
	name:'testapp',
	//cookie: {maxAge: 80000 },  	//设置maxAge是80000ms，即80s后session和相应的cookie失效过期
	resave: false,					//是指每次请求都重新设置session cookie，假设你的cookie是10分钟过期，每次请求都会再设置10分钟
	saveUninitialized: true			//是指无论有没有session cookie，每次请求都设置个session cookie ，默认给个标示为 connect.sid
}));                      			//开启session

app.use(express.static(path.join(__dirname, 'public')));

app.use(webpackDevMiddleware(webpack(WebpackConfig), {
	publicPath: WebpackConfig.output.publicPath,
	stats: {
		colors: true
	}
}))
//ajax请求路由
app.use('/user', require('./server/routes/user.route'));
app.use('/article', require('./server/routes/article.route'));

//app.use(function(err, req, res, next) {
//	console.log(err.stack.red);
//});

//react服务器渲染路由
app.get('/*', require('./server/routes/react.route'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
    console.log('Production Express server running at localhost:' + PORT);
});



module.exports = app;
