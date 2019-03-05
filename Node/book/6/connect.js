const connect = require('connect');

function logger(format) {
    let regexp = /\:(\w+)/g;

    return function(req, res, next) {
        let str = format.replace(regexp, function(match, property) {
            return req[property];
        });
        console.log(str);
        next();
    };
}

function hello(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('hello world');
}
function restrict(req, res, next) {
    const authorization = req.headers.authorization;
    console.log(authorization);
    if (!authorization) return next(new Error('Unauthorized'));
    const author = authorization.split(' ');
    const info = new Buffer(author[1], 'base64').toString().split(':');
    const user = info[0];
    const pass = info[1];
    authenticateWithDatabase(user, pass, function(err) {
        if (err) return next(err);
        next();
    });
}

function authenticateWithDatabase(user, pass, callback) {
    let err;
    if (user !== 'tobi' || pass !== 'ferret') {
        err = new Error('Unauthorized');
    }
    callback(err);
}
function admin(req, res, next) {
    switch (req.url) {
        case '/':
            res.end('try/user');
            break;
        case '/users':
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(['tobi', 'loki', 'jane']));
            break;
    }
}

function router(format) {
    return function(req, res, next) {};
}

connect()
    .use(logger)
    .use('/admin', restrict)
    .use('/admin', admin)
    .use(hello)
    .listen(3000);
