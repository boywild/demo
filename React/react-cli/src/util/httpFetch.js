/*
 * @Author: chentian 
 * @Date: 2018-08-01 17:51:09 
 * ----- 
 * @Modified By: chentian 
 * @Last Modified: 2018-08-01 17:51:09 
 */

const HTTP = {};
HTTP.get = function (url, params, fetchOptions) {
    if (params && typeof params === 'object') {
        let paramsArray = [];
        Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]));
        if (url.search(/\?/) === -1) {
            url += '?' + paramsArray.join('&');
        } else {
            url += '&' + paramsArray.join('&');
        }
    }
    // 请求头设置
    let initConfig = {
        method: 'GET',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json;charset=utf-8'
        }
    };
    if (fetchOptions && typeof fetchOptions === 'object') {
        initConfig = Object.assign(initConfig, fetchOptions);
    }
    return new Promise((resolve, reject) => {
        fetch(url, initConfig).then(response => {
            if (response.ok) {
                resolve(response.json());
            } else {
                reject({ status: response.status });
                throw new Error('网络请求故障');
            }
        }).catch((error) => {
            reject({ status: -1 });
            throw new Error(error.message);
        });
    });
};

HTTP.post = function (url, params, fetchOptions) {
    if (typeof params === 'object') {
        throw new Error('params must be object');
    }
    // 请求头设置
    let initConfig = {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(params)
    };
    if (fetchOptions && typeof fetchOptions === 'object') {
        initConfig = Object.assign(initConfig, fetchOptions);
    }
    return Promise.race([
        fetch(url, initConfig),
        new Promise((resolve, reject) => {
            setTimeout(() => reject(new Error('request timeout')), 3 * 1000);
        })
    ]).then(response => response.json());
};

//抽离一个公共的底层方法
//支持多配置
//支持多种请求头header
//支持多类型body form file json
//提供全局调用api

export class httpFetch {
    static fetchRequest(url, type, params, options) {
        let init = {
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json;charset=utf-8'
            }
        };
        if (type === 'GET') {
            let paramsArray = [];
            if (params && typeof params === 'object') {
                Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]));
                url += '&' + paramsArray.join('&');
            }
            Object.assign(init, { method: 'GET' }, options);
        } else if (type === 'POST') {
            Object.assign(init, {
                method: 'POST',
                body: JSON.stringify(params)
            });
            Object.assign(init, { method: 'GET' }, options);
        }
        return new Promise((resolve, reject) => {
            console.log({ ...init })
            fetch(url, { ...init })
                .then(response => {
                    if (response.ok) {
                        resolve(response.json());
                    }
                })
        });
    }
}


export default HTTP; 