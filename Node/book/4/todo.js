const http = require('http');
const queryString = require('querystring');
const formidable = require('formidable');
const items = [];

const server = http.createServer(function(req, res) {
    if (req.url === '/') {
        switch (req.method) {
            case 'GET':
                show(res);
                break;
            case 'POST':
                upload(req, res);
                break;
            default:
                badRequest(res);
        }
    } else {
        notFound(res);
    }
});

function show(res) {
    var list = items
        .map(function(item) {
            return '<li>' + item + '</li>';
        })
        .join('');
    var html =
        '<html><head><title> Todo List</title></head><body>' +
        '<h1>Todo List</h1>' +
        '<ul>' +
        list +
        '</ul>' +
        '<form method="post" action="/" enctype="multipart/form-data">' +
        '<p><input type="file" value="file" /></p>' +
        '<p><input type="submit" value="Add Item" /></p>' +
        '</form></body></html>';

    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Content-Length', Buffer.byteLength(html));
    res.end(html);
}
function add(req, res) {
    let body = '';
    req.setEncoding('utf8');
    req.on('data', function(chunk) {
        body += chunk;
    });
    req.on('end', function() {
        const obj = queryString.parse(body);
        items.push(obj.item);
        show(res);
    });
}
function upload(req, res) {
    if (!isFormData(req)) {
        res.statusCode = 400;
        res.end('Bad Request');
        return;
    }
    const form = new formidable.IncomingForm();
    form.on('field', function(field, value) {
        console.log(field);
        console.log(value);
    });
    form.on('file', function(name, file) {
        console.log(name);
        console.log(file);
    });
    form.on('progress', function(bytesReceived, bytesExpected) {
        let percent = Math.floor((bytesReceived / bytesExpected) * 100);
        console.log(percent);
    });
    form.on('end', function() {
        res.end('upload complete');
    });
    form.parse(req);
}
function isFormData(req) {
    console.log(req);
    let type = req.headers['content-type'] || '';
    return 0 === type.indexOf('multipart/form-data');
}
function badRequest(res) {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Bad Request');
}
function notFound(res) {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found');
}
server.listen('8080');
