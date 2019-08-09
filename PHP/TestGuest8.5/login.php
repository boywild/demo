<?php
/**
* TestGuest Version1.0
* ================================================
* Copy 2010-2012 yc60
* Web: http://www.yc60.com
* ================================================
* Author: Lee
* Date: 2010-8-21
*/
session_start();
//定义个常量，用来授权调用includes里面的文件
define('IN_TG',true);
//定义个常量，用来指定本页的内容
define('SCRIPT','login');
//引入公共文件
require dirname(__FILE__).'/includes/common.inc.php';
//登录状态
_login_state();
global $_system;
//开始处理登录状态
if (isset($_GET['action'] )&&$_GET['action'] == 'login') {
	if (!empty($_system['code'])) {
		//为了防止恶意注册，跨站攻击
		_check_code($_POST['code'],$_SESSION['code']);
	}
	//引入验证文件
	include ROOT_PATH.'includes/login.func.php';
	//接受数据
	$_clean = array();
	$_clean['username'] = _check_username($_POST['username'],2,20);
	$_clean['password'] = _check_password($_POST['password'],6);
	$_clean['time'] = _check_time($_POST['time']);
	//到数据库去验证
	if (!!$_rows = _fetch_array("SELECT tg_username,tg_uniqid,tg_level FROM tg_user WHERE tg_username='{$_clean['username']}' AND tg_password='{$_clean['password']}' AND tg_active='' LIMIT 1")) {
		//登录成功后，记录登录信息
		_query("UPDATE tg_user SET 
															tg_last_time=NOW(),
															tg_last_ip='{$_SERVER["REMOTE_ADDR"]}',
															tg_login_count=tg_login_count+1
												WHERE 
															tg_username='{$_rows['tg_username']}'				
													");
		//_session_destroy();
		_setcookies($_rows['tg_username'],$_rows['tg_uniqid'],$_clean['time']);
		if ($_rows['tg_level'] == 1) {
			$_SESSION['admin'] = $_rows['tg_username'];
		}
		_close();
		_location(null,'member.php');
	} else {
		_close();
		//_session_destroy();
		_location('用户名密码不正确或者该账户未被激活！','login.php');
	}
}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<?php 
	require ROOT_PATH.'includes/title.inc.php';
?>
<script type="text/javascript" src="js/code.js"></script>
<script type="text/javascript" src="js/login.js"></script>
</head>
<body>


<form class="form-signin align-center" method="post" name="login" action="login.php?action=login">
    <h1 class="h3 mb-3 font-weight-normal">登录</h1>
    <label for="username" class="sr-only">用户名</label>
    <input type="text" name="username" id="username" class="form-control" placeholder="用户名" required autofocus>
    <label for="password" class="sr-only">密码</label>
    <input type="password" name="password" id="password" class="form-control" placeholder="密码" required>
    <label for="code" class="sr-only">验证码</label>
    <input type="text" name="code" id="code" class="form-control" placeholder="验证码" required>
    <img src="code.php" alt="验证码">
    <div class="checkbox mb-3">
        <label>
            保留
        </label>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="time" id="inlineRadio1" value="0">
            <label class="form-check-label" for="inlineRadio1">不保留</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="time" id="inlineRadio2" value="1">
            <label class="form-check-label" for="inlineRadio2">一天</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="time" id="inlineRadio2" value="2">
            <label class="form-check-label" for="inlineRadio2">一周</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="time" id="inlineRadio2" value="3">
            <label class="form-check-label" for="inlineRadio2">一月</label>
        </div>
    </div>

    <button class="btn btn-lg btn-primary btn-block" type="submit">登录</button>
    <button class="btn btn-lg btn-success btn-block" type="submit"><a href="register.php">注册</a></button>
    <p class="mt-5 mb-3 text-muted">&copy; 2019-2020</p>
</form>

</body>
</html>

