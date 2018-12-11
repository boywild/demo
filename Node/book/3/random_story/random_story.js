/*
 * @Author: chentian
 * @Date: 2018-12-11 22:26:20
 * -----
 * @Modified By: chentian
 * @Last Modified: 2018-12-11 22:33:34
 * 串行流程控制
 */

const fs = require('fs');
const request = require('request');

fs.readFile('rss_feeds.txt', function(err, feesList) {
    console.log(
        feesList
            .toString()
            .replace(/^\s+|\s+$/, '')
            .split('\n')
    );
});

request('http://www.google.com', function(
    err,
    res,
    body
) {
    console.log(err);
    console.log(res);
    console.log(body);
});
