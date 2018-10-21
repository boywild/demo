/*
 * @Author: chentian
 * @Date: 2018-10-21 17:36:13
 * -----
 * @Modified By: chentian
 * @Last Modified: 2018-10-21 17:36:13
 */

const Promise = require('bluebird');
export const test = (a, b) => {
    return new Promise((resolve, reject) => {
        wx.request({
            url: 'http://127.0.0.1:3000/api/test',
            data: { a, b },
            success: (res) => {
                resolve({ result: res.data });
            },
            fail: (e) => {
                reject(e);
            }
        });
    });
};
