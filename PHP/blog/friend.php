
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>加为好友</title>
    <link rel="shortcut icon" href="favicon.ico" />
    <link rel="stylesheet" type="text/css" href="styles/1/basic.css" />
    <link rel="stylesheet" type="text/css" href="styles/1/friend.css" />
</head>
<body>


<div id="message">
    <h3>添加好友</h3>
    <form method="post" action="?action=add">
        <input type="hidden" name="touser" value="guest" />
        <dl>
            <dd><input type="text" readonly="readonly" value="TO:guest" class="text" /></dd>
            <dd><textarea name="content">我非常想和你交朋友！</textarea></dd>
            <dd>验 证 码：<input type="text" name="code" class="text yzm"  /> <img src="code.php" id="code" onclick="javascript:this.src='code.php?tm='+Math.random();" /> <input type="submit" class="submit" value="添加好友" /></dd>
        </dl>
    </form>
</div>



</body>
</html>