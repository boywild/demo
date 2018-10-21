/*
 * @Author: chentian
 * @Date: 2018-10-21 17:35:37
 * -----
 * @Modified By: chentian
 * @Last Modified: 2018-10-21 17:35:37
 */

export const test = (a, b) => {
    return wx.cloud.callFunction({
        name: 'test',
        data: {
            a,
            b
        }
    });
};
