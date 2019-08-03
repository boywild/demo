
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>相册</title>
    <link rel="shortcut icon" href="favicon.ico" />
    <link rel="stylesheet" type="text/css" href="styles/1/basic.css" />
    <link rel="stylesheet" type="text/css" href="styles/1/photo.css" /></head>
<body>
<div id="header">
    <h1><a href="index.php">瓢城Web俱乐部多用户留言系统</a></h1>
    <ul>
        <li><a href="index.php">首页</a></li>
        <li><a href="register.php">注册</a></li>
        <li><a href="login.php">登录</a></li>
        <li><a href="blog.php">博友</a></li>
        <li><a href="photo.php">相册</a></li>
        <li class="skin" onmouseover='inskin()' onmouseout='outskin()'>
            <a href="javascript:;">风格</a>
            <dl id="skin">
                <dd><a href="skin.php?id=1">1.一号皮肤</a></dd>
                <dd><a href="skin.php?id=2">2.二号皮肤</a></dd>
                <dd><a href="skin.php?id=3">3.三号皮肤</a></dd>
            </dl>
        </li>

    </ul>
</div>
<div id="photo">
    <h2>相册列表</h2>
    <dl>
        <dt><a href="photo_show.php?id=10"></a></dt>
        <dd><a href="photo_show.php?id=10">哈哈 [4](公开)</a></dd>
    </dl>
    <dl>
        <dt><a href="photo_show.php?id=4"><img src="monipic/chinajoy.jpg" alt="" /></a></dt>
        <dd><a href="photo_show.php?id=4">诱惑ChinaJoy2010 [24](私密)</a></dd>
    </dl>
    <dl>
        <dt><a href="photo_show.php?id=3"><img src="monipic/moshou.jpg" alt="" /></a></dt>
        <dd><a href="photo_show.php?id=3">网络游戏宣传图 [45](公开)</a></dd>
    </dl>

</div>

<div id="footer">
    <p>本程序执行耗时为: 0.0071秒</p>
    <p>版权所有 翻版必究</p>
    <p>本程序由<span>瓢城Web俱乐部</span>提供 源代码可以任意修改或发布 (c) yc60.com</p>
</div></body>
</html>
