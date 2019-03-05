const http = require('http');
const work = require('./lib/timetrack');
const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'myuser',
    password: 'mypassword',
    database: 'timetrack'
});

const server = http.createServer(function(req, res) {
    switch (req.method) {
        case 'GET':
            switch (req.url) {
                case '/':
                    work.show(db, req, res);
                    break;
                case '/archive':
                    work.showArchive(db, res);
                    break;
            }
            break;
        case 'POST':
            switch (req.url) {
                case '/':
                    work.addEvent(db, req, res);
                    break;
                case '/archive':
                    work.archiveEvent(db, req, res);
                    break;
                case '/delete':
                    work.deleteEvent(db, req, res);
                    break;
            }
            break;
    }
});

db.query(
    'CREATE TABLE IF NOT EXISTS work(' +
        ' id INT(10) NOT NULL AUTO_INCREMENT,' +
        ' hours DECIMAL(5,2) DEFAULT 0,' +
        ' date DATE,' +
        ' archived INT(1) DEFAULT 0,' +
        ' description LONGTEXT,' +
        ' PRIMARY KEY(id))',
    function(err) {
        if (err) throw err;
        console.log('Server started...');
        server.listen(3000, '127.0.0.1');
    }
);
