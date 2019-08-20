<?php
/**
* TestGuest Version1.0
* ================================================
* Copy 2010-2012 yc60
* Web: http://www.yc60.com
* ================================================
* Author: Lee
* Date: 2010-8-11
*/
session_start();
//定义个常量，用来授权调用includes里面的文件
define('IN_TG',true);
//定义个常量，用来指定本页的内容
define('SCRIPT','register');
//引入公共文件
require dirname(__FILE__).'/includes/common.inc.php';
//登录状态
_login_state();
global $_system;
//判断是否提交了
if ($_GET['action'] == 'register') {
	if (empty($_system['register'])) {
		exit('不要非法注册！');
	}
	//为了防止恶意注册，跨站攻击
	_check_code($_POST['code'],$_SESSION['code']);
	//引入验证文件
	include ROOT_PATH.'includes/check.func.php';
	//创建一个空数组，用来存放提交过来的合法数据
	$_clean = array();
	//可以通过唯一标识符来防止恶意注册，伪装表单跨站攻击等。
	//这个存放入数据库的唯一标识符还有第二个用处，就是登录cookies验证
	$_clean['uniqid'] = _check_uniqid($_POST['uniqid'],$_SESSION['uniqid']);
	//active也是一个唯一标识符，用来刚注册的用户进行激活处理，方可登录。
	$_clean['active'] = _sha1_uniqid();
	$_clean['username'] = _check_username($_POST['username'],2,20);
	$_clean['password'] = _check_password($_POST['password'],$_POST['notpassword'],6);
	$_clean['question'] = _check_question($_POST['question'],2,20);
	$_clean['answer'] = _check_answer($_POST['question'],$_POST['answer'],2,20);
	$_clean['sex'] = _check_sex($_POST['sex']);
	$_clean['face'] = _check_face($_POST['face']);
	$_clean['email'] = _check_email($_POST['email'],6,40);
	$_clean['qq'] = _check_qq($_POST['qq']);
	$_clean['url'] = _check_url($_POST['url'],40);
	
	//在新增之前，要判断用户名是否重复
	_is_repeat(
				"SELECT tg_username FROM tg_user WHERE tg_username='{$_clean['username']}' LIMIT 1",
				'对不起，此用户已被注册'
	);
	
	//新增用户  //在双引号里，直接放变量是可以的，比如$_username,但如果是数组，就必须加上{} ，比如 {$_clean['username']}
	_query(
						"INSERT INTO tg_user (
																tg_uniqid,
																tg_active,
																tg_username,
																tg_password,
																tg_question,
																tg_answer,
																tg_sex,
																tg_face,
																tg_email,
																tg_qq,
																tg_url,
																tg_reg_time,
																tg_last_time,
																tg_last_ip
																) 
												VALUES (
																'{$_clean['uniqid']}',
																'{$_clean['active']}',
																'{$_clean['username']}',
																'{$_clean['password']}',
																'{$_clean['question']}',
																'{$_clean['answer']}',
																'{$_clean['sex']}',
																'{$_clean['face']}',
																'{$_clean['email']}',
																'{$_clean['qq']}',
																'{$_clean['url']}',
																NOW(),
																NOW(),
																'{$_SERVER["REMOTE_ADDR"]}'
																)"
	);
	if (_affected_rows() == 1) {
		//获取刚刚新增的ID
		$_clean['id'] = _insert_id();
		_close();
		//_session_destroy();
		//生成XML
		_set_xml('new.xml',$_clean);
		_location('恭喜你，注册成功！','active.php?active='.$_clean['active']);
	} else {
		_close();
		//_session_destroy();
		_location('很遗憾，注册失败！','register.php');
	}
} else {
	$_SESSION['uniqid'] = $_uniqid = _sha1_uniqid();
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
<script type="text/javascript" src="js/register.js"></script>
</head>
<body>
<?php 
	require ROOT_PATH.'includes/header.inc.php';
?>

<div class="card">
    <div class="card-header">
        会员注册
    </div>
    <div class="card-body">
        <div id="register">
            <?php if (!empty($_system['register'])) {?>
                <form method="post" name="register" action="register.php?action=register">
                    <input type="hidden" name="uniqid" value="<?php echo $_uniqid ?>" />
                    <div class="form-group row">
                        <label for="username" class="col-sm-2 col-form-label">用 户 名：</label>
                        <div class="col-sm-8">
                            <input type="text" name="username" class="form-control" placeholder="请输入用户名">
                        </div>
                        <div class="col-sm-2">(*必填，至少两位)</div>
                    </div>
                    <div class="form-group row">
                        <label for="password" class="col-sm-2 col-form-label">密　　码：</label>
                        <div class="col-sm-8">
                            <input type="password" name="password" class="form-control" placeholder="请输入密码">
                        </div>
                        <div class="col-sm-2">(*必填，至少六位)</div>
                    </div>
                    <div class="form-group row">
                        <label for="notpassword" class="col-sm-2 col-form-label">确认密码：</label>
                        <div class="col-sm-8">
                            <input type="password" name="notpassword" class="form-control" placeholder="请确认密码">
                        </div>
                        <div class="col-sm-2">(*必填，至少六位)</div>
                    </div>
                    <div class="form-group row">
                        <label for="question" class="col-sm-2 col-form-label">密码提示：</label>
                        <div class="col-sm-8">
                            <input type="text" name="question" class="form-control" placeholder="请输入密码提示">
                        </div>
                        <div class="col-sm-2">(*必填，至少两位)</div>
                    </div>
                    <div class="form-group row">
                        <label for="answer" class="col-sm-2 col-form-label">密码回答：</label>
                        <div class="col-sm-8">
                            <input type="text" name="answer" class="form-control" placeholder="请输入密码回答">
                        </div>
                        <div class="col-sm-2">(*必填，至少两位)</div>
                    </div>
                    <fieldset class="form-group">
                        <div class="row">
                            <legend class="col-form-label col-sm-2 pt-0">性　　别：</legend>
                            <div class="col-sm-8">
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="sex" value="男">
                                    <label class="form-check-label" for="sex">
                                        男
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="sex" value="女">
                                    <label class="form-check-label" for="sex">
                                        女
                                    </label>
                                </div>
                            </div>

                        </div>
                    </fieldset>
                    <div class="form-group row">
                        <label for="email" class="col-sm-2 col-form-label">头像选择：</label>
                        <div class="col-sm-8">
                            <input type="hidden" name="face" value="face/m01.gif" /><img src="face/m01.gif" alt="头像选择" id="faceimg" />
                        </div>

                    </div>
                    <div class="form-group row">
                        <label for="email" class="col-sm-2 col-form-label">电子邮件：</label>
                        <div class="col-sm-8">
                            <input type="email" name="email" class="form-control" placeholder="请输入电子邮件">
                        </div>
                        <div class="col-sm-2">(*必填，激活账户)</div>
                    </div>
                    <div class="form-group row">
                        <label for="qq" class="col-sm-2 col-form-label">Q Q：</label>
                        <div class="col-sm-8">
                            <input type="text" name="qq" class="form-control" placeholder="请输入Q Q">
                        </div>
                        <div class="col-sm-2">(*必填，至少两位)</div>
                    </div>
                    <div class="form-group row">
                        <label for="url" class="col-sm-2 col-form-label">主页地址：</label>
                        <div class="col-sm-8">
                            <input type="text" name="url" class="form-control" value="http://" placeholder="请输入主页地址">
                        </div>
                        <div class="col-sm-2">(*必填，至少两位)</div>
                    </div>
                    <div class="form-group row">
                        <label for="code" class="col-sm-2 col-form-label">验 证 码：</label>
                        <div class="col-sm-8">
                            <input type="text" name="code" class="form-control" placeholder="请输入验 证 码">
                        </div>
                        <div class="col-sm-2"><img src="code.php" id="code" onclick="javascript:this.src='code.php?tm='+Math.random();" /></div>
                    </div>
                    <div class="form-group row">
                        <div class="col-sm-12 align-center">
                            <button type="submit" class="btn btn-primary">注册</button>
                        </div>
                    </div>
                </form>
            <?php } else {
                echo '<h4 style="text-align:center;padding:20px;">本站关闭了注册功能！</h4>';
            }?>
        </div>
    </div>
</div>


<?php 
	require ROOT_PATH.'includes/footer.inc.php';
?>
</body>
</html>
