var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//渲染视图路由
var indexRouter = require('./routes/index');

//api接口 路由
var apiRouter = require('./api/index');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// for (var i in indexRouter) {
//   app.use(i, indexRouter[i]);
// }

//挂载视图 路由
app.use('/', indexRouter);

//挂载api 路由
for (let i in apiRouter) {
  app.use('/api' + i, apiRouter[i]); // '/api'一级路由
}

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;