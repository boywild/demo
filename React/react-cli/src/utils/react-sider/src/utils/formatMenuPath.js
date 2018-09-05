/*
 * @Author: kayak
 * @Date: 2018-09-04 17:07:05
 * -----
 * @Modified By: kayak
 * @Last Modified: 2018-09-04 17:07:05
 */

import map from 'lodash/map';

/**
 * 将具有层级关系的菜单项的path处理成完整的路径,例如a/b/c/d
 * @param {Array} data 菜单配置数组
 * @param {string} parentPath 父级菜单path,用于拼接完整的子级菜单
 */

const formatMenuPath = (data, parentPath = '/') =>
    map(data, (item) => {
        const result = {
            ...item,
            path: `${parentPath}${item.path}`
        };
        if (item.children) {
            result.children = formatMenuPath(item.children, `${parentPath}${item.path}/`);
        }
        return result;
    });

export default formatMenuPath;
