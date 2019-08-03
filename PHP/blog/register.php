<?php
?>

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>瓢城Web俱乐部(YCKU.COM)</title>
    <link rel="shortcut icon" href="favicon.ico" />
    <link rel="stylesheet" type="text/css" href="styles/1/basic.css" />
    <link rel="stylesheet" type="text/css" href="styles/1/login.css" />
</head>
<body>
<script type="text/javascript" src="js/skin.js"></script>
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
<div id="login">
    <h2>登录</h2>
    <form method="post" name="login" action="login.php?action=login">
        <dl>
            <dt></dt>
            <dd>用 户 名：<input type="text" name="username" class="text" /></dd>
            <dd>密　　码：<input type="password" name="password" class="text" /></dd>
            <dd>保　　留：<input type="radio" name="time" value="0" checked="checked" /> 不保留 <input type="radio" name="time" value="1" /> 一天 <input type="radio" name="time" value="2" /> 一周 <input type="radio" name="time" value="3" /> 一月</dd>
            <dd>验 证 码：<input type="text" name="code" class="text code"  /> <img src="code.php" id="code" onclick="javascript:this.src='code.php?tm='+Math.random();" /></dd>
            <dd><input type="submit" value="登录" class="button" /> <input type="button" value="注册" id="location" class="button location" /></dd>
        </dl>
    </form>
</div>

<div id="footer">
    <p>本程序执行耗时为: 0.0058秒</p>
    <p>版权所有 翻版必究</p>
    <p>本程序由<span>瓢城Web俱乐部</span>提供 源代码可以任意修改或发布 (c) yc60.com</p>
</div></body>
</html>

