const express = require('express');
const path = require('path');
const { PORT } = require('../config.server.json');
const app = express();

const test = require('./cloudfunctions/test').main;

app.listen(PORT, () => {
    console.log(`开发服务器启动成功：http://127.0.0.1:${PORT}`);
});

app.use('/static', express.static(path.join(__dirname, 'static'), { index: false, maxage: '30d' }));

app.get('/api/test', (req, res, next) => {
    test(req.query)
        .then(res.json.bind(res))
        .cath((e) => {
            console.error(e);
            next(e);
        });
});
