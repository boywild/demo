var express=require('express');
var User=require('../models/User');
var router=express.Router();

router.use(function (req,res,next) {
    if(!req.userInfo.isAdmin){
        res.send('对不起，只有管理员才可以进入后台管理');
        return;
    }
    next();
});

router.get('/',function (req,res,next) {
    res.render('admin/index',{
        userInfo:req.userInfo
    });
});
router.get('/user',function (req,res,next) {
    /*
    * 从数据库中读取用户数据
    * limit(Number) Number 限制每页展示数据的条数
    * skip(Number) Number 指定每次查询时跳过前面Number条数据，从第Number+1条开始查询
    * */
    var page=Number(req.query.page) || 1;
    var limit=1;
    var total_page=0;
    User.count().then(function (count) {
        total_page=Math.ceil(count/limit);
        console.log(Math.min(page,total_page));
        page=Math.min(page,total_page);
        page=Math.max(1,page);
        var skip=(page-1)*limit;
        User.find().limit(limit).skip(skip).then(function (user) {
            console.log(user);
            res.render('admin/user_list',{
                userInfo:req.userInfo,
                users:user,
                count:count,
                limit:limit,
                total_page:total_page,
                page:page
            });
        });
    });

});

module.exports=router;