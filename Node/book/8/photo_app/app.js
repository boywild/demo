var createError = require('http-errors');
var express = require('express');
var path = require('path');
var fs = require('fs');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var multer = require('multer');
var session = require('express-session');
var upload = multer({ dest: 'uploads/' });

var Photo = require('./models/Photo');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var photosRouter = require('./routes/photos');
var loginRouter = require('./routes/login');
var registerRouter = require('./routes/register');
var articleRouter = require('./routes/article');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('photos', path.join(__dirname, '/public/photos'));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/photos', photosRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/article', articleRouter);
app.post('/test', upload.array('avatar', 2), function(req, res, next) {
    // console.log(req);
    const dir = req.app.get('photos');
    const img = req.files[0];
    const name = req.body.user;
    const newPath = path.join(dir, img.originalname);
    fs.rename(img.path, newPath, function(err) {
        if (err) return next(err);
        Photo.create(
            {
                name: name,
                paths: img.originalname
            },
            function(err) {
                if (err) return next(err);
                res.redirect('/photos');
            }
        );
    });
});
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
