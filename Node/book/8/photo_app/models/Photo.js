const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/photo_app');
const schema = new mongoose.Schema({
    name: String,
    paths: String
});

module.exports = mongoose.model('Photo', schema);
