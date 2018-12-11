const fs = require('fs');
const events = require('events');
const util = require('util');

const watchDir = './watch';
const processedDir = './done';

function Watcher(watchDir, processedDir) {
    this.watchDir = watchDir;
    this.processedDir = processedDir;
}

util.inherits(Watcher, events.EventEmitter);

Watcher.prototype.watch = function() {
    const watch = this;
    fs.readdir(this.watchDir, function(err, files) {
        if (err) throw err;
        for (var index in files) {
            watcher.emit('process', files[index]);
        }
        console.log(files);
    });
};

Watcher.prototype.start = function() {
    const watch = this;
    fs.watchFile(watchDir, function() {
        watcher.watch();
    });
};

const watcher = new Watcher(watchDir, processedDir);
watcher.on('process', function process(file) {
    const watchFile = this.watchDir + '/' + file;
    const processedFile = this.processedDir + '/' + file.toLowerCase();
    fs.rename(watchFile, processedFile, function(err) {
        if (err) throw err;
    });
});

watcher.start();
