const querystring = require('querystring');

exports.show = function(db, res, showArchive) {
    const query = 'SELECT * FROM work WHERE archived=? ORDER BY date DESC';
    const archivedVal = showArchive ? 1 : 0;
    db.query(query, [archivedVal], function(err, rows) {
        if (err) throw err;
        html = showArchive ? '' : '<a>archived work</a>';
        html += exports.workHitlistHtml();
        html += exports.workFormHtml();
        exports.sendHtml(res, html);
    });
};
exports.showArchive = function(db, res) {
    exports.show(db, res, true);
};
exports.addEvent = function(db, req, res) {
    exports.parseReceivedData(req, function(work) {
        db.query(
            'INSERT INTO work(hours,date,description) VALUES (?,?,?)',
            [work.hours, work.date, work.description],
            function(err) {
                if (err) throw err;
                exports.show(db, res);
            }
        );
    });
};
exports.archiveEvent = function(db, req, res) {
    exports.parseReceivedData(req, function(work) {
        db.query('UPDATE work SET archived=1 WHERE id=?', [work.id], function(
            err
        ) {
            if (err) throw err;
            exports.show(db, res);
        });
    });
};
exports.deleteEvent = function(db, req, res) {
    exports.parseReceivedData(req, function(work) {
        db.query('DELETE FROM work WHERE id=?', [work.id], function(err) {
            if (err) throw err;
            exports.show(db, res);
        });
    });
};

exports.sendHtml = function(res, html) {
    res.setHeader('Contet-Type', 'text/html');
    res.setHeader('Content-Length', Buffer.byteLength(html));
    res.end(html);
};
exports.parseReceivedData = function(req, cb) {
    const body = '';
    req.setEncoding('utf8');
    req.on('data', function(chunk) {
        body += chunk;
    });
    req.on('end', function() {
        const data = querystring.parse(body);
        cb(data);
    });
};

exports.actionForm = function(id, path, label) {
    var html =
        '<form method="POST" action="' +
        path +
        '">' +
        '<input type="hidden" name="id" value="' +
        id +
        '">' +
        '<input type="submit" value="' +
        lable +
        '">' +
        '</form>';

    return html;
};

exports.workHitlistHtml = function() {
    let html = '<table>';
    for (var i in rows) {
        html += '<tr>';
        html += '<td>' + rows[i].date + '</td>';
        html += '<td>' + rows[i].hours + '</td>';
        html += '<td>' + rows[i].description + '</td>';
        if (!rows[i].archived) {
            html += '<td>' + exports.workArchiveForm(rows[i].id) + '</td>';
        }
        html += '<td>' + exports.workDeleteForm(rows[i].id) + '</td>';
        html += '</tr>';
    }
    html += '</table>';
    return html;
};
exports.workFormHtml = function() {
    let html =
        '<form method=" POST" action="/">' +
        '<p> Date (YYYY- MM- DD):<br/><input name="date" type="text">< p/>' +
        '<p> Hours worked:< br/><input name="hours" type="text">< p/>' +
        '<p> Description:< br/>' +
        '<textarea name=" description"></textarea></p>' +
        '<input type=" submit" value=" Add" />' +
        '</form>';
    return html;
};
exports.workArchiveForm = function(id) {
    return exports.actionForm(id, '/archive', 'Archive');
};
exports.workDeleteForm = function(id) {
    return exports.actionForm(id, '/delete', 'Delete');
};
