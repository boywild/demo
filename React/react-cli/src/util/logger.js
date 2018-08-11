export const logPrimary = 'font-size: 15px; color: #fe5f4c;';

export const logStyle = `
        font-size: 14px; color: #fff; background: #00c3d8; 
        margin-right: 8px; font-weight: normal; border-radius: 3px;
        padding: 0 8px;
    `;

// 生产/开发启动停用开关
//状态手机


export default class Logger {
    static openLog = true;
    static log(params) {
        this.openLog && console.log(params);
    }
    static info(params) {
        this.openLog && console.info(params);
    }
    static error(params) {
        this.openLog && console.error(params);
    }
    static warn(params) {
        this.openLog && console.warn(params);
    }
    static close() {
        this.openLog = false;
    }
    static open() {
        this.openLog = true;
    }
    static printLog(collect) {
        this.openLog && new formatLogs(collect);
    }

}
export class LogCollection {
    logs = [];
    constructor(methond, request) {
        this.methond = methond;
        this.request = request;
    }
    collect = (key, value) => {
        this.logs.push({
            [key]: value
        });
    };
};
const formatLogs = (collection) => {
    groupFormat(collection.methond, collection.request);
    iterateOutputLogs(collection.logs);
    groupFormatEnd();
}
function iterateOutputLogs(logs={}) {
    Object.keys(logs).forEach(element => {
        if (typeof logs[element] === 'object') {
            console.dir(logs[element])
        } else {
            logFormat(logs[element]);
        }
    });
}

function logFormat(msgs) {
    console.log(`%c${msgs}`, logStyle);
}

function groupFormat(methond = '', request = '') {
    const msgs = `%c${methond}%c${request}%c${getTime()}`;
    const gourpParams = [msgs, logStyle, logStyle, logStyle];
    console.group && console.group(...gourpParams);
}

function groupFormatEnd() {
    console.groupEnd && console.groupEnd();
}

function getTime() {
    const date = new Date();
    return date.toLocaleDateString() + ' ' + date.toTimeString().slice(0, 8);
}

