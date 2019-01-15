// 并行流程控制
const fs = require('fs');
let completedTasks = 0;
const tasks = [];
const wordCounts = {};
const filesDir = './text';

function checkIfComplete() {
    completedTasks++;
    if (completedTasks === tasks.length) {
        for (let index in wordCounts) {
            console.log(index + ':' + wordCounts[index]);
        }
    }
}

function countWordsInText(text) {
    const words = text
        .toString()
        .toLowerCase()
        .split(/\W+/)
        .sort();
    for (let index in words) {
        let word = words[index];
        if (word) {
            wordCounts[word] = wordCounts[word] ? wordCounts[word] + 1 : 1;
        }
    }
}

fs.readdir(filesDir, function(err, files) {
    if (err) throw err;
    for (let index in files) {
        const task = (function(file) {
            return function() {
                fs.readFile(file, function(err, data) {
                    if (err) throw err;
                    countWordsInText(data);
                    checkIfComplete();
                });
            };
        })(filesDir + '/' + files[index]);
        tasks.push(task);
    }
    for (let task in tasks) {
        tasks[task]();
    }
});
