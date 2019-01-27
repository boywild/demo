const connect = require('connect');
const parse = require('url').parse;

const app = connect()
    .use(rewrite)
    .use(showPost)
    .listen(3000);

function rewrite(req, res, next) {
    const path = parse(req.url).pathname;
    const match = path.match(/^\/blog\/posts\/(.+)/);
    if (match) {
        findPostIdBySlug(match[1], function(err, id) {
            if (err) return next(err);
            if (!id) return next(new Error('User Not Found'));
            req.url = '/blog/posts/' + id;
            next();
        });
    } else {
        next();
    }
}

function showPost() {
    
}
