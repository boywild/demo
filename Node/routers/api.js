var express=require('express');

var router=express.Router();
var User=require('../models/User');

/*
* 1.用户名不能为空
* 2.密码不能为空
* 3.两次输入密码不一致
* 4.用户名是否已经存在
*
* */

//统一返回格式
var responseData;

router.use(function (req,res,next){
    responseData={
        code:0,
        message:''
    };
    next();
});
//注册
router.post('/user/register',function (req,res,next) {
    // res.send('api user');
    var username=req.body.username;
    var password=req.body.password;
    var repassword=req.body.repassword;

    if(username==''){
        responseData.code=1;
        responseData.message='用户名不能为空';
        res.json(responseData);
        return;
    }
    if(password==''){
        responseData.code=2;
        responseData.message='密码不能为空';
        res.json(responseData);
        return;
    }
    if(password!=repassword){
        responseData.code=3;
        responseData.message='两次输入的密码必须一致';
        res.json(responseData);
        return;
    }
    //从数据库中查询数据判断是否已经注册
    User.findOne({
        username:username,
        password:password
    }).then(function (userInfo) {
        // console.log(userInfo);
        if(userInfo){
            responseData.code=4;
            responseData.message='用户已经被注册';
            res.json(responseData);
            return;
        }else{
            responseData.message='注册成功';
            res.json(responseData);
        }
        var user=new User({
            username:username,
            password:password
        });
        return user.save();
    }).then(function (newUserInfo) {
        console.log(newUserInfo);
    });
});

//登陆
router.post('/user/login',function (req,res,next) {
    var username=req.body.username;
    var password=req.body.password;
    if(username===''||password==''){
        responseData.code=1;
        responseData.message='用户名或密码不能为空';
        res.json(responseData);
        return;
    }
    //从数据库查询
    User.findOne({
        username:username,
        password:password
    }).then(function (userInfo) {
        if(!userInfo){
            responseData.code=2;
            responseData.message='用户名或密码错误';
            res.json(responseData);
            return;
        }
        responseData.message='登陆成功';
        responseData.userInfo={
            _id:userInfo._id,
            username:userInfo.username
        };
        req.cookies.set('userInfo',JSON.stringify({
            _id:userInfo._id,
            username:userInfo.username
        }));
        res.json(responseData);
        return;

    });
});

router.get('/user/logout',function (req,res) {
    req.cookies.set('userInfo',null);
    responseData.message='推出成功';
    res.json(responseData);
});

module.exports=router;