/*
 * @Author: kayak
 * @Date: 2018-09-05 18:21:53
 * -----
 * @Modified By: kayak
 * @Last Modified: 2018-09-05 18:21:53
 */
import pathToRegexp from 'path-to-regexp';
import reduce from 'lodash/reduce';
import filter from 'lodash/filter';

/**
 * 使用当前的路由路径在由菜单配置组成的key数组中匹配
 */

const getMeunMatchKeys=(flatMenuKeys,paths)=>{
    reduce(paths,(matchKeys,value)=>(
        matchKeys.concat(filter(flatMenuKeys,item=>pathToRegexp(item).test(value)))
    ),[])
}
export default getMeunMatchKeys;