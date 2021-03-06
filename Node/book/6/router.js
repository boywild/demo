const parse = require('url').parse;
module.exports = function router(obj) {
    return function(req, res, next) {
        if (!obj[req.method]) {
            next();
            return;
        }
        const routes = obj[req.method];
        const url = parse(req.url);
        const paths = Object.keys(routes);
        for (let i = 0; i < paths.length; i++) {
            let path = paths[i];
            const fn = method[path];
            path = path.replace(/\//g, '\\/').replace(/\:(\w)+/g, '([^\\/]+)');
            const re = new RegExp('^' + path + '$');
            const captures = url.pathname.match(re);
            if (captures) {
                const argus = [req, res].concat(captures.slice(1));
                fn.apply(null, argus);
                return;
            }
        }
        next();
    };
};
