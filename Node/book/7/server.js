const connect = require('connect');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const favicon = require('serve-favicon');
const session = require('express-session');
// const basicauth = require('basicauth-middleware');
var basicAuth = require('basic-auth-connect');
var serveStatic = require('serve-static');
var compression = require('compression');
var serveIndex = require('serve-index');
const path = require('path');

const morgan = require('morgan');
const methodOverride = require('method-override');

const app = connect()
    .use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
    .use(
        '/app/src',
        serveIndex(path.join(__dirname, 'public'), { icons: true })
    )
    .use('/app/src', serveStatic(path.join(__dirname, 'public')))
    .use(compression({ filter: test }))
    // .use(session())
    .use(function(req, res, next) {
        // console.log(req);
        res.end('asdfa');
    })
    .listen(3000);

function test(req) {
    console.log(req.getHeader);
    // var type = req.headers('Content-Type') || '';
    // return 0 == type.indexOf('application/javascript');
}
