const fs = require('fs');
const path = require('path');

const file = path.join(process.cwd(), '/.tasks');
const args = process.argv.slice(2);
console.log(process.argv);
const commond = args.shift();
const taskdesc = args.join(' ');

switch (commond) {
    case 'list':
        showList(file);
        break;
    case 'add':
        addList(file, taskdesc);
        break;
    default:
        console.log('asdf');
        break;
}

function showList(file) {
    checkFile(file, function(tasks) {
        for (let key in tasks) {
            console.log(tasks[key]);
        }
    });
}

function addList(file, taskdesc) {
    checkFile(file, function(tasks) {
        tasks.push(taskdesc);
        saveData(file, tasks);
    });
}

function checkFile(file, cb) {
    fs.exists(file, function(exists) {
        if (exists) {
            fs.readFile(file, 'utf8', function(err, data) {
                if (err) throw err;
                const param = data.toString();
                const tasks = JSON.parse(param || '[]');
                cb(tasks);
            });
        } else {
            cb([]);
        }
    });
}
function saveData(file, tasks) {
    fs.writeFile(file, JSON.stringify(tasks), 'utf8', function(err) {
        if (err) throw err;
        console.log(err);
    });
}
