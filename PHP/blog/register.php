<?php
?>

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>注册</title>
    <link rel="shortcut icon" href="favicon.ico" />
    <link rel="stylesheet" type="text/css" href="styles/1/basic.css" />
    <link rel="stylesheet" type="text/css" href="styles/1/register.css" />
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
<div id="register">
    <h2>会员注册</h2>
    <form method="post" name="register" action="register.php?action=register">
        <input type="hidden" name="uniqid" value="63dc9b6912272fa086924b5eb72ab8e505f05dac" />
        <dl>
            <dt>请认真填写一下内容</dt>
            <dd>用 户 名：<input type="text" name="username" class="text" /> (*必填，至少两位)</dd>
            <dd>密　　码：<input type="password" name="password" class="text" /> (*必填，至少六位)</dd>
            <dd>确认密码：<input type="password" name="notpassword" class="text" /> (*必填，同上)</dd>
            <dd>密码提示：<input type="text" name="question" class="text" /> (*必填，至少两位)</dd>
            <dd>密码回答：<input type="text" name="answer" class="text" /> (*必填，至少两位)</dd>
            <dd>性　　别：<input type="radio" name="sex" value="男" checked="checked" />男 <input type="radio" name="sex" value="女" />女</dd>
            <dd class="face"><input type="hidden" name="face" value="face/m01.gif" /><img src="face/m01.gif" alt="头像选择" id="faceimg" /></dd>
            <dd>电子邮件：<input type="text" name="email" class="text" /> (*必填，激活账户)</dd>
            <dd>　Q Q 　：<input type="text" name="qq" class="text" /></dd>
            <dd>主页地址：<input type="text" name="url" class="text" value="http://" /></dd>
            <dd>验 证 码：<input type="text" name="code" class="text yzm"  /> <img src="code.php" id="code" onclick="javascript:this.src='code.php?tm='+Math.random();" /></dd>
            <dd><input type="submit" class="submit" value="注册" /></dd>
        </dl>
    </form>
</div>

<div id="footer">
    <p>本程序执行耗时为: 0.0048秒</p>
    <p>版权所有 翻版必究</p>
    <p>本程序由<span>瓢城Web俱乐部</span>提供 源代码可以任意修改或发布 (c) yc60.com</p>
</div></body>
</html>