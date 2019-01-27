const connect = require('connect');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const favicon = require('serve-favicon');
const session = require('express-session');
// const basicauth = require('basicauth-middleware');
var basicAuth = require('basic-auth-connect');
var serveStatic = require('serve-static');
var compression = require('compression');
const path = require('path');

const morgan = require('morgan');
const methodOverride = require('method-override');

const app = connect()
    .use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
    .use(compression())
    .use('/app/src', serveStatic(path.join(__dirname, 'public')))
    // .use(session())
    .use(function(req, res, next) {
        // console.log(req);
        res.end('asdfa');
    })
    .listen(3000);
