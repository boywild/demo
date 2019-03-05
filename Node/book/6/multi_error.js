var connect = require('connect');
var parse = require('url').parse;

function hello(req, res, next) {
    const url = parse(req.url).pathname;
    if (url.match(/^\/hello/)) {
        res.end('Hello World\n');
    } else {
        next();
    }
}

var db = {
    users: [{ name: 'tobi' }, { name: 'loki' }, { name: 'jane' }]
};

function users(req, res, next) {
    const url = parse(req.url).pathname;
    var match = url.match(/^\/user\/(.+)/);
    console.log(match);

    if (match) {
        var user = db.users.find((item) => {
            return item.name === match[1];
        });
        if (user) {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(user));
        } else {
            var err = new Error('User not found');
            err.notFound = true;
            next(err);
        }
    } else {
        next();
    }
}

function pets(req, res, next) {
    const url = parse(req.url).pathname;
    if (url.match(/^\/pet\/(.+)/)) {
        foo();
    } else {
        next();
    }
}

function errorHandler(err, req, res, next) {
    console.error(err.stack);
    res.setHeader('Content-Type', 'application/json');
    if (err.notFound) {
        res.statusCode = 404;
        res.end(JSON.stringify({ error: err.message }));
    } else {
        res.statusCode = 500;
        res.end(JSON.stringify({ error: 'Internal Server Error' }));
    }
}

connect()
    .use(users)
    .use(pets)
    .use(errorHandler)
    .use(hello)
    .listen(3000);
