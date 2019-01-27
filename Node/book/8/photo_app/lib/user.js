const redis = require('redis');
const bcrypt = require('bcrypt');
const db = redis.createClient();

module.exports = User;

function User(obj) {
    for (let key in obj) {
        this[key] = obj[key];
    }
}
User.prototype.save = function(fn) {
    if (this.id) {
        this.update(fn);
    } else {
        const user = this;
        db.incr('user:ids', function(err, id) {
            if (err) return fn(err);
            console.log(id);
            user.id = id;
            user.hashPassword(function(err) {
                if (err) return fn(err);
                user.update(fn);
            });
        });
    }
};
User.prototype.update = function(fn) {
    const user = this;
    const id = user.id;
    db.set('user:id:' + user.name, id, function(err) {
        if (err) return fn(err);
        db.hmset('user:' + id, user, function(err) {
            fn(err);
        });
    });
};
User.prototype.hashPassword = function(fn) {
    const user = this;
    bcrypt.genSalt(12, function(err, salt) {
        if (err) return fn(err);
        console.log(salt);
        user.salt = salt;
        bcrypt.hash(user.pass, salt, function(err, hash) {
            if (err) return fn(err);
            user.pass = hash;
            fn();
        });
    });
};

const test = new User({
    name: 'chentian',
    pass: 'im a ferret',
    age: '28'
});

test.save(function(err) {
    if (err) throw err;
    console.log('user id %d', test.id);
});
