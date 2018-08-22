import CryptoJS from 'crypto-js';
export const key = '0000000000000000'; //从服务器或者缓存获取
export const iv = '1234567812345678';
export default class encryption {
    //aes CBC模式加密
    static aesEncrypt(params) {
        const keys = CryptoJS.enc.Utf8.parse(key);
        const ivs = iv;
        const encryptedData = CryptoJS.AES.encrypt(params, keys, {
            iv: CryptoJS.enc.Utf8.parse(ivs),
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
        const encryptResult = encryptedData.ciphertext.toString();
        return new Promise((resolve, reject) => {
            resolve(encryptResult);
        });
    }
    //aes CBC模式解密
    static aesDecrypt(param) {
        const keys = CryptoJS.enc.Utf8.parse(key);
        const ivs = iv;
        const encryptedHexStr = CryptoJS.enc.Hex.parse(param);
        const encryptedBase64Str = CryptoJS.enc.Base64.stringify(encryptedHexStr);
        const decryptedData = CryptoJS.AES.decrypt(encryptedBase64Str, keys, {
            iv: CryptoJS.enc.Utf8.parse(ivs),
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
        const decryptedStr = CryptoJS.enc.Utf8.stringify(decryptedData).toString();
        return new Promise((resolve, reject) => {
            resolve(decryptedStr);
        });
    }
    //hmacMd5
    static hmacMd5() {}
    static aesEnLocal() {}
    static aesDeLocal() {}
    static aesEnSession() {}
    static aesDeSession() {}
}
