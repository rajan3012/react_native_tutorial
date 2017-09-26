// DEPENDENCIES, ETCETERA
const express  = require('express'),
  path         = require('path'),
  favicon      = require('serve-favicon'),
  logger       = require('morgan'),
  cookieParser = require('cookie-parser'),
  bodyParser   = require('body-parser'),
  mongoose     = require('mongoose');

// ROUTES
const index    = require('./routes/index'),
  users        = require('./routes/users');

const app      = express();

// CONFIGURATION
// database
// TODO: use environment variables instead of hardcoding
// TODO: replace local database with a production db and change connection string
const mongoDB = 'mongodb://127.0.0.1:3003/mkbdb';
mongoose.connect(mongoDB);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// uncomment after placing favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// ERROR HANDLER
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // send error
  res.status(err.status || 500);
  res.send({
    message: err.message,
    error: err
  });
  return;
});

module.exports = app;
