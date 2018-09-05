/*
 * @Author: kayak
 * @Date: 2018-09-05 17:04:46
 * -----
 * @Modified By: kayak
 * @Last Modified: 2018-09-05 17:04:46
 */

import map from 'lodash/map';

/**
 * 根据当前页面路由(pathname)得到当前路由所有父级路由层级关系并用数组表示,例如当访问路由为'a/b/c',处理过后的结果是['/a','/a/b','/a/b/c']
 * @param {string} pathname 当前页面路由
 * @returns {Array}
 */

const urlToList = (pathname) => {
    let arr = [];
    const urlList = pathname.split('/').filter((i) => i);
    return map(urlList, (urlItem, index) => `/${pathname.slice(0, index + 1).join('/')}`);
};

export default urlToList;
