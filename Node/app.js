
/*
* db           -数据库存储目录
* models       -数据库模型文件目录
* node_modules -node第三方模块目录
* public       -公共文件目录
* router       -路由文件目录
* schemas      -数据库结构文件目录
* views        -模板试图目录
* app.js       -引用启动入口目录
* package.json
* */

//加载
var express=require('express');
var swig=require('swig');
var mongoose=require('mongoose');
var bodyParser=require('body-parser');

//创建app引用>相当于NodeJS http.createServer()
var app=express();

//静态文件托管js/css/image
//当用户访问的url以public开始，那么直接返回对应的__dirname+'/public'下的文件
app.use('/public',express.static(__dirname+'/public'));

//配置应用模板，定义当前所使用的模板引擎
/*
* 第一个参数：模板引擎的名称，同时也是模板文件的后缀
* 第二个参数：表示用于解析处理模板内容的方法
* */
app.engine('html',swig.renderFile);

//设置模板文件存放的目录
/*
* 第一个参数:必须是views
* 第二个参数:是目录
* */
app.set('views','./views');

//注册所使用的模板引擎
/*
*第一个参数必须是view engine
* 第二个参数和app.engine这个方法中定义的模板引擎的名称(第一个参数)是一致的
*/
app.set('view engine','html');


//取消模板缓存
swig.setDefaults({cache:false});

//通过app.get()/app.post() 等方法可以把一个url路径和一个或n个函数进行绑定
/*app.get('/',function(req,res.next){})
*req:request对象保存客户端请求相关的一些数据-http.request
*res:response对象服务端输出对象，提供一些服务器端输出相关的一些方法-http.response
* next:用于执行下一个和路径匹配的函数
* 内容输出：通过res.send(string) 发送内容至客户端
*/
// app.get('/',function (req,res,next) {
    /*
    * 读取views目录下制定的文件，解析并返回给客户端
    * 第一个参数：表示模板的文件，相对于views目录  views/index.html
    * 第二个参数：传递给模板使用的数据
    * */
    // res.render('index');
// });


app.use(bodyParser.urlencoded({extended:true}));

//根据不同的功能划分模块
/*
* admin-管理台相关页面
* api -接口相关
* / -前端展示页面相关
* */
app.use('/admin',require('./routers/admin'));
app.use('/api',require('./routers/api'));
app.use('/',require('./routers/main'));


//链接数据库
mongoose.connect('mongodb://localhost:27017/blog',function (err) {
    if(err){
        console.log('数据库链接失败');
    }else{
        console.log('数据库链接成功');
        //监听端口
        app.listen('3000');
    }
});




/*用户发送http请求 > url > 解析路由 > 找到匹配规则 > 执行制定的绑定函数,返回对应内容至用户
*返回内容分动态和静态
*1. /public > 静态 > 直接读取指定目录下的文件返回给用户
*2. 动态 > 处理业务逻辑 > 加载模板,解析模板 > 返回数据给用户
*/