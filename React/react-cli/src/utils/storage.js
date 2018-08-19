/**
 * 向localStorage中写入数据，返回promise，通过.then((data)=>{})得到当前正在操作的的数据(写入/读取/删除)
 * @param {string} key 
 * @param {*} value 
 * @returns Promise
 * 增加满足一写入多条/一次读取多条/一次删除多条
 */
export const setLocal = (key, value) => {
    return new setFactory('local', key, value);
}
export const getLocal = (key) => {
    return new getFactory('local', key);
}
export const setSession = (key, value) => {
    return new setFactory('session', key, value);
}
export const getSession = (key) => {
    return new getFactory('session', key);
}
export const clearLocal = (key) => {
    return new clearFactory('local', key);
}
export const clearAllLocal = (key) => {
    return new clearFactory('local', key, 'all');
}
export const clearSession = (key) => {
    return new clearFactory('session', key);
}
export const clearAllSession = (key) => {
    return new clearFactory('session', key, 'all');
}
export const updateLocalSave = (key, fieldName, fieldValue) => {
    return new updateFactory('local', key, fieldName, fieldValue, 'save');
}
export const updateLocalRemove = (key, fieldName, fieldValue) => {
    return new updateFactory('local', key, fieldName, fieldValue, 'remove');
}
export const updateSessionSave = (key, fieldName, fieldValue) => {
    return new updateFactory('session', key, fieldName, fieldValue, 'save');
}
export const updateSessionRemove = (key, fieldName, fieldValue) => {
    return new updateFactory('session', key, fieldName, fieldValue, 'remove');
}

const setFactory = (storageType, key, value) => {
    let result = {};
    try {
        key = key.toString();
    } catch (e) {
        key = JSON.stringify(key);
    }
    if (typeof value === 'object') {
        value = JSON.stringify(value);
    } else if (typeof value === 'string') {
        value = value;
    } else {
        throw new Error('value must be a string or an object')
    }
    if (storageType != 'local' && storageType != 'session') {
        throw new Error('storage type error');
    }
    storageType === 'local' ? localStorage.setItem(key, value) : '';
    storageType === 'session' ? sessionStorage.setItem(key, value) : '';
    try {
        value = JSON.parse(value);
    } catch (e) {
        value = value;
    }
    result = {
        [key]: value
    }
    return new Promise((resolve) => {
        resolve(result);
    });
}

const getFactory = (storageType, key) => {
    let getData = {};
    let result = '';
    try {
        key = key.toString();
    } catch (e) {
        key = JSON.stringify(key);
    }
    if (storageType !== 'local' && storageType !== 'session') {
        throw new Error('storage type error');
    }
    storageType === 'local' ? getData = localStorage.getItem(key) : '';
    storageType === 'session' ? getData = sessionStorage.getItem(key) : '';
    try {
        result = JSON.parse(getData);
    } catch (e) {
        result = getData;
    }
    return new Promise((resolve) => {
        resolve(result);
    });
}

const clearFactory = (storageType, key, range) => {
    let result = {};
    let storageObj = null;
    try {
        key = key.toString();
    } catch (e) {
        key = JSON.stringify(key);
    }
    storageType === 'local' ? storageObj = localStorage : '';
    storageType === 'session' ? storageObj = sessionStorage : '';
    if (!!range && range === 'all') {
        Object.keys(storageObj).forEach((storage) => {
            result[storage] = storageObj.getItem(storage);
            storageObj.removeItem(storage);
        });
    } else {
        let getValue = storageObj.getItem(key);
        try {
            getValue = JSON.parse(storageObj.getItem(key));
        } catch (e) {
            getValue = getValue;
        }
        result[key] = getValue;
        storageObj.removeItem(key);
    }
    return new Promise((resolve) => {
        resolve(result);
    });
}
const updateFactory = (storageType, key, fieldName, fieldValue, handle) => {
    let storageObj = null;
    storageType === 'local' ? storageObj = localStorage : '';
    storageType === 'session' ? storageObj = sessionStorage : '';
    let source = storageType.getItem(key);
    try {
        source = source.JSON.parse(source);
    } catch (e) {
        source = source;
    }
    if (source[fieldName]) {
        (!!handle && handle === 'save') ? storageType.setItem(key, JSON.stringify({ ...source, [fieldName]: fieldValue })) : '';
        (!!handle && handle === 'remove') ? (delete source[fieldName] && storageType.setItem(key, JSON.stringify(source))) : '';

    } else {
        throw new Error('Only objects can be updated');
    }
}