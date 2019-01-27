const connect = require('connect');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

const app = connect()
    .use(bodyParser.json())
    .use(function(req, res) {
        console.log(req.body);
        console.log(req.files);
        res.end('hello\n');
    })
    .listen(3000);
