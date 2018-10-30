const express = require('express');
const superagent = require('superagent');
const cheerio = require('cheerio');
const eventproxy = require('eventproxy');
const async = require('async');
const url = require('url');

const app = express();

app.get('/', (req, res, next) => {
    superagent.get('https://cnodejs.org/').end(function(err, res) {
        if (err) {
            return next(err);
        }
        const $ = cheerio.load(res.text);
        var item = [];
        $('#topic_list .topic_title').each((index, ele) => {
            const element = $(ele);
            items.push({
                title: $element.attr('title'),
                href: $element.attr('href')
            });
        });
    });
});

app.listen(3008, () => {
    console.log('监听3008成功');
});
