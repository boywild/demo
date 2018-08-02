/*
 * @Author: chentian 
 * @Date: 2018-08-01 17:51:09 
 * ----- 
 * @Modified By: chentian 
 * @Last Modified: 2018-08-01 17:51:09 
 */

//抽离一个公共的底层方法
//支持多配置
//支持多种请求头header
//支持多类型body form file json
//提供全局调用api
//https://api.github.com/users

export class httpFetch {
    static fetchRequest(url, type, params, options) {
        if (params && typeof params !== 'object') {
            throw new Error('params must be object');
            return;
        }
        /**
         * 合并配置项
         * @param {object} initconfig 
         * @param {string} method 
         * @param {any} body 
         * @param {object} opt 
         */
        const mergeOption = (initconfig, method, body, opt) => {
            if (!body) {
                Object.assign(initconfig, {
                    method: method
                }, opt);
            } else {
                Object.assign(initconfig, {
                    method: method,
                    body: body
                }, opt);
            }
        }
        //fetch原生init配置项
        let init = {};
        if (type === 'GET') {
            let paramsArray = [];
            if (params && typeof params === 'object') {
                Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]));
                url += '?' + paramsArray.join('&');
            }
            Object.assign(init, { method: 'GET' }, options);
        } else if (type === 'POST') {
            /**
             * body类型<form|file|json>
             * 不同请求body类型对应response解析不一样 
             * response.json()/response.text()/response.blob()/response.formData()
             */
            if (options && options.bodyType) {
                switch (options.bodyType) {
                    case 'json':
                        mergeOption(init, 'POST', JSON.stringify(params), options);
                        break;
                    case 'file':
                        let fileData = new FormData();
                        Object.keys(params).map((index) => {
                            fileData.append(index, params[index]);
                        });
                        mergeOption(init, 'PUT', fileData, options);
                        break;
                    case 'form':
                        let formData = '';
                        Object.keys(params).map((index) => {
                            let param = encodeURI(params[index]);
                            formData += `${index}=${param}&`;
                        });
                        mergeOption(init, 'POST', formData, options);
                        break;
                    default:
                        mergeOption(init, 'POST', JSON.stringify(params), options);
                }
            } else {
                mergeOption(init, 'POST', JSON.stringify(params), options);
            }
        }
        return new Promise((resolve, reject) => {
            console.log({ ...init })
            fetch(url, { ...init })
                .then(response => {
                    console.log(response);
                    if (response.ok) {
                        // if(init&&init.dataType){}
                        resolve(response.json());

                    } else {
                        reject({ status: response.status });
                        throw new Error('Network response was not ok.');
                    }

                })
                .catch(function (error) {
                    reject({ status: -1 });
                    console.log('There has been a problem with your fetch operation: ', error.message);
                })
        });
    }
    static get(url, params, options) {
        this.fetchRequest(url, 'GET', params, options);
    }
    static post(url, params, options) {
        this.fetchRequest(url, 'POST', params, options);
    }
}