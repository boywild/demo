<?php
    if(isset($_REQUEST['authcode'])){
        session_start();
        if(strtolower($_REQUEST['authcode'])==strtolower($_SESSION['authcode'])){
            echo '<span style="color:green">输入正确</span>';
        }else{
            echo '<span style="color:red">输入错误</span>';
        }
        exit();
    }

?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>确认验证码</title>
</head>
<body>
    <form action="./form.php" method="post">
        <p>验证码图片：
            <img id="captcha_img" src="./captcha.php?r=<?php echo rand(); ?>" alt="" width="100" height="30">
            <a href="javascript:void(0)" onclick="test()">看不清换一张</a>
        </p>
        <p>请输入图片中的类容：<input type="text" name="authcode" value="" /></p>
        <p><input type="submit" value="提交"></p>
    </form>
</body>
<script>
    function test() {
        console.log('====');
        const img=document.getElementById('captcha_img');
        img.src="./captcha.php?r="+Math.floor(Math.random(0,10)*10);
    }
</script>
</html>