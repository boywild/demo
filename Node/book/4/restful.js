const http = require('http');
let items = [];
const server = http.createServer(function(req, res) {
    req.setEncoding('utf8');
    let item = '';
    switch (req.method) {
        case 'POST':
            item = '';
            break;
        case 'GET':
            items.forEach((item, i) => {
                res.write(i + ')' + item + '\n');
            });
            console.log(items);
            res.end();
            break;
        case 'PUT':
            item = '';
            break;

        case 'DELETE':
            item = '';
            const path = url.parse(req.url).pathname;
            const i = parseInt(path.slice(1), 10);
            if (isNaN(i)) {
                res.statusCode = 400;
                res.end('Invalid item id');
            } else if (!item[i]) {
                res.statusCode = 404;
                res.end('Item not found');
            } else {
                items.splice(i, 1);
                res.end('ok\n');
            }
            break;
    }
    req.on('data', function(chunk) {
        item += chunk;
        console.log('parsed', chunk);
    });
    req.on('end', function() {
        console.log('done parsing');
        items.push(item);
        res.end('OK\n');
    });
});

server.listen('8088');
