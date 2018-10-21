/*
 * @Author: chentian
 * @Date: 2018-10-21 17:03:48
 * -----
 * @Modified By: chentian
 * @Last Modified: 2018-10-21 17:03:48
 */

exports.main = async (event) => {
    let { a, b } = event;
    return new Promise((resolve, reject) => {
        resolve({ result: parseInt(a) + parseInt(b) });
    });
};
