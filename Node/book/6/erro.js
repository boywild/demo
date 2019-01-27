const connect = require('connect');

const app = connect()
    .use(function hello(req, res) {
        foo();
        res.setHeader('Content-Type', 'text/plain');
        res.end('hello world');
    })
    .use(errorHandle())
    .listen(3000);

function errorHandle() {
    const env = process.env.NODE_ENV || 'development';
    return function(err, req, res, next) {
        res.statusCode = 500;
        switch (env) {
            case 'development':
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(err));
                break;
            default:
                res.end('Server Error');
                break;
        }
    };
}
