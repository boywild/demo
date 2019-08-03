<?php
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>多用户留言系统--首页</title>
    <link rel="shortcut icon" href="favicon.ico" />
    <link rel="stylesheet" type="text/css" href="./styles/1/basic.css" />
    <link rel="stylesheet" type="text/css" href="./styles/1/index.css" />
</head>
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
<div id="list">
    <h2>帖子列表</h2>
    <a href="post.php" class="post">发表帖子</a>
    <ul class="article">
        <li class="icon8"><em>阅读数(<strong>65535</strong>) 评论数(<strong>4</strong>)</em> <a href="article.php?id=496">hyjghjgjhgjgjg</a></li><li class="icon1"><em>阅读数(<strong>72</strong>) 评论数(<strong>1</strong>)</em> <a href="article.php?id=494">sadfafds</a></li><li class="icon11"><em>阅读数(<strong>110</strong>) 评论数(<strong>1</strong>)</em> <a href="article.php?id=492">武磊踢得可谓是相当郁闷</a></li><li class="icon2"><em>阅读数(<strong>109</strong>) 评论数(<strong>1</strong>)</em> <a href="article.php?id=490">666</a></li><li class="icon1"><em>阅读数(<strong>114</strong>) 评论数(<strong>0</strong>)</em> <a href="article.php?id=488">66</a></li><li class="icon1"><em>阅读数(<strong>118</strong>) 评论数(<strong>1</strong>)</em> <a href="article.php?id=487">test</a></li><li class="icon2"><em>阅读数(<strong>158</strong>) 评论数(<strong>0</strong>)</em> <a href="article.php?id=486">213213</a></li><li class="icon1"><em>阅读数(<strong>131</strong>) 评论数(<strong>0</strong>)</em> <a href="article.php?id=485">ttt</a></li><li class="icon2"><em>阅读数(<strong>181</strong>) 评论数(<strong>3</strong>)</em> <a href="article.php?id=483">我的幸福刚刚好</a></li><li class="icon4"><em>阅读数(<strong>208</strong>) 评论数(<strong>0</strong>)</em> <a href="article.php?id=482">1111111111111</a></li>	</ul>
    <div id="page_text"><ul><li>1/19页 | </li><li>共有<strong>189</strong>条数据 | </li><li>首页 | </li><li>上一页 | </li><li><a href="index.php?page=2">下一页</a> | </li><li><a href="index.php?page=19">尾页</a></li></ul></div></div>

<div id="user">
    <h2>新进会员</h2>
    <dl>
        <dd class="user">asdfasdf(男)</dd>
        <dt><img src="face/m12.gif" alt="asdfasdf" /></dt>
        <dd class="message"><a href="javascript:;" name="message" title="476">发消息</a></dd>
        <dd class="friend"><a href="javascript:;" name="friend" title="476">加为好友</a></dd>
        <dd class="guest">写留言</dd>
        <dd class="flower"><a href="javascript:;" name="flower" title="476">给他送花</a></dd>
        <dd class="email">邮件：<a href="mailto:asdf@asdf.com">asdf@asdf.com</a></dd>
        <dd class="url">网址：<a href="" target="_blank"></a></dd>
    </dl>
</div>

<div id="pics">
    <h2>最新图片 -- go</h2>
    <a href="photo_detail.php?id=98"><img src="./photo/1286182218/1562292817.jpg" alt="go" /></a>
</div>

<div id="footer">
    <p>本程序执行耗时为: 0.0081秒</p>
    <p>版权所有 翻版必究</p>
    <p>本程序由<span>瓢城Web俱乐部</span>提供 源代码可以任意修改或发布 (c) yc60.com</p>
</div>

</body>
</html>


