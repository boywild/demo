const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');
const parse = url.parse;
const root = __dirname;
const app = http.createServer((req, res) => {
    const pathname = parse(req.url).pathname;
    const file = path.join(root, 'static' + pathname);
    fs.stat(file, function(err, stat) {
        console.log(err);
        console.log(stat);
        if (err) {
            if (err.code === 'ENOENT') {
                res.statusCode = 400;
                res.end('Not Found');
            } else {
                res.statusCode = 500;
                res.end('Internam Server Error');
            }
        } else {
            res.setHeader('Content-Length', stat.size);
            const stream = fs.createReadStream(file);
            stream.pipe(res);
            stream.on('error', function(err) {
                res.statusCode = 500;
                res.end('Internam Server Error');
            });
        }
    });
    console.log(file);
    const stream = fs.createReadStream(file);
    stream.on('data', function(chunk) {
        res.write(chunk);
    });
    stream.on('end', function(chunk) {
        res.end();
    });
    stream.on('error', function() {
        res.statusCode = 500;
        res.end('Internal Server Error');
    });
});

app.listen('8080', () => {
    console.log('服务启动成功 端口8080');
});
