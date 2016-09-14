import express from 'express';
import path from 'path';
import favicon from 'serve-favicon';
import bodyParser from 'body-parser';
import logger from 'morgan';
import ejs from 'ejs';
import expressSession from 'express-session';
import cookieParser from 'cookie-parser';

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'view'));
app.engine('.html',ejs.__express);
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser('MAGICString'));           //开启cookie
app.use(expressSession());                      //开启session
app.use(express.static(path.join(__dirname, 'public')));


//ajax请求路由
app.use('/user', require('./server/routes/user.route'));



//react服务器渲染路由
app.use('/', require('./server/routes/react.route'));


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


const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT);
});

