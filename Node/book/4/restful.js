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
