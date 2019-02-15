const redis = require('redis');
const db = redis.createClient();

function Entry(obj) {
    for (let key in obj) {
        this[key] = obj[key];
    }
}
Entry.getRange = function(from, to, fn) {
    db.lrange('entries', from, to, function(err, items) {
        if (err) return fn(err);
        let entries = [];
        items.forEach(function(item) {
            entries.push(JSON.parse(item));
        });
        fn(null, entries);
    });
};

Entry.prototype.save = function(fn) {
    const entryJSON = JSON.stringify(this);
    db.lpush('entries', entryJSON, function(err) {
        if (err) return fn(err);
        fn();
    });
};
module.exports = Entry;
