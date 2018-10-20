const express = require('express');
const test = require('./cloudfunctions/sum/').main
const app = express();

app.listen(3000, () => {
    console.log(`开发服务器启动成功：http://127.0.0.1:3000`);
})

app.get('/api/test', (req, res, next) => {
    // 将 req.query 传入
    console.log('=================================================');
    console.log(req);
    console.log('=================================================');
    console.log(res);
    console.log('=================================================');
    console.log(next);
    console.log('=================================================');
    test(req.query).then(res.json.bind(res)).catch((e) => {
        console.error(e)
        next(e)
    })
    // next()
})