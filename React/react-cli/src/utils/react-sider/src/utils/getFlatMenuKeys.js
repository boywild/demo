/*
 * @Author: kayak
 * @Date: 2018-09-05 17:47:54
 * -----
 * @Modified By: kayak
 * @Last Modified: 2018-09-05 17:47:54
 */

import reduce from 'lodash/reduce';

/**
 * 使用菜单配置信息中的完整路径生成key的arr集合
 * @param {Array} fullPathMenuData 具有完整路径的菜单配置项
 * @returns {Array}
 */

const getFlatMenuKeys = (fullPathMenuData) =>
    reduce(
        fullPathMenuData,
        (accumulator, value) => {
            accumulator.push(value.path);
            if (value.children) {
                return accumulator.concat(getFlatMenuKeys(value.children));
            }
            return accumulator;
        },
        []
    );

export default getFlatMenuKeys;
