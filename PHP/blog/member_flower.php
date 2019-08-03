
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>查询花朵</title>
    <link rel="shortcut icon" href="favicon.ico" />
    <link rel="stylesheet" type="text/css" href="styles/1/basic.css" />
    <link rel="stylesheet" type="text/css" href="styles/1/member_flower.css" />
</head>
<body>
<div id="header">
    <h1><a href="index.php">瓢城Web俱乐部多用户留言系统</a></h1>
    <ul>
        <li><a href="index.php">首页</a></li>
        <li><a href="member.php">陈湉·个人中心</a> <strong class="noread"><a href="member_message.php">(0)</a></strong></li>
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

        <li><a href="logout.php">退出</a></li>	</ul>
</div>
<div id="member">
    <div id="member_sidebar">
        <h2>中心导航</h2>
        <dl>
            <dt>账号管理</dt>
            <dd><a href="member.php">个人信息</a></dd>
            <dd><a href="member_modify.php">修改资料</a></dd>
        </dl>
        <dl>
            <dt>其他管理</dt>
            <dd><a href="member_message.php">短信查阅</a></dd>
            <dd><a href="member_friend.php">好友设置</a></dd>
            <dd><a href="member_flower.php">查询花朵</a></dd>
            <dd><a href="###">个人相册</a></dd>
        </dl>
    </div>	<div id="member_main">
        <h2>花朵管理中心</h2>
        <form method="post" action="?action=delete">
            <table cellspacing="1">
                <tr><th>送花人</th><th>花朵数目</th><th>感言</th><th>时间</th><th>操作</th></tr>
                <tr><td colspan="5">共<strong></strong>朵花</td></tr>
                <tr><td colspan="5"><label for="all">全选 <input type="checkbox" name="chkall" id="all" /></label> <input type="submit" value="批删除" /></td></tr>
            </table>
        </form>
        <div id="page_text"><ul><li>1/1页 | </li><li>共有<strong>0</strong>条数据 | </li><li>首页 | </li><li>上一页 | </li><li>下一页 | </li><li>尾页</li></ul></div>	</div>
</div>

<div id="footer">
    <p>本程序执行耗时为: 0.007秒</p>
    <p>版权所有 翻版必究</p>
    <p>本程序由<span>瓢城Web俱乐部</span>提供 源代码可以任意修改或发布 (c) yc60.com</p>
</div></body>
</html>