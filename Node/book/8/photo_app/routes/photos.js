const path = require('path');
const fs = require('fs');
var Photo = require('../models/Photo');
const express = require('express');
const router = express.Router();

var photos = [];
// photos.push({
//     name: 'Node.js Logo',
//     path:
//         'http://img5.imgtn.bdimg.com/it/u=3365018759,2226705862&fm=26&gp=0.jpg'
// });
// photos.push({
//     name: 'Ryan Speaking',
//     path: 'http://img5.imgtn.bdimg.com/it/u=935292084,2640874667&fm=26&gp=0.jpg'
// });

router.get('/', function(req, res, next) {
    Photo.find({}, function(err, photos) {
        if (err) return next(err);
        console.log(photos);
        res.render('index', {
            title: 'Photo',
            photos: photos
        });
    });
});

router.get('/:id/download', function(req, res, next) {
    var id = req.params.id;
    var dir = req.app.get('photos');
    Photo.find({ paths: id }, function(err, photo) {
        if (err) return next(err);
        console.log(photo);
        const file = path.join(dir, photo[0].paths);
        res.download(file);
    });
});
// router.get('/', function(req, res, next) {
//     res.render('index', {
//         title: 'Photo',
//         photos: photos
//     });
// });
router.get('/upload', function(req, res, next) {
    res.render('upload', {
        title: 'photo upload'
    });
});

module.exports = router;
