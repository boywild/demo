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
const htmlparse = require('htmlparser');

const configFilename = './rss_feeds.txt';
function checkForRSSFile(file) {
    fs.exists(configFilename, function(exists) {
        if (!exists) return next(new Error(configFilename + '文件不存在'));
        next(null, configFilename);
    });
}

function readRSSfile(configFilename) {
    fs.readFile(configFilename, function(err, feedList) {
        if (err) next(err);
        feedList = feedList
            .toString()
            .replace(/^\s+|\s+$/, '')
            .split('\n');
        const random = Math.floor(Math.random() * feedList.length);
        next(null, feedList[random]);
    });
}

function downloadRSSFeed(url) {
    request(url, function(err, res, body) {
        if (err) next(err);
        if (res.statusCode != 200) {
            return next(new Error('请求失败'));
        }
        next(null, body);
    });
}

function parseRSSFeed(rss) {
    const handle = new htmlparser.RssHandler();
    const parser = new htmlparser.Parser(handle);
    parser.parserComplete(rss);
    if (!handler.dom.items.length) {
        return next(new Error('No Rss items found'));
    }
    const item = handler.dom.items.shift();
    console.log(item.title);
    console.log(item.link);
}

const tasks = [checkForRSSFile, readRSSfile, downloadRSSFeed, parseRSSFeed];

function next(err, result) {
    if (err) throw err;
    const currentTask = tasks.shift();
    if (currentTask) {
        currentTask(result);
    }
}
next();
