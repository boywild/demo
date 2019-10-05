<?php
    require_once '../include.php';
    $username = $_POST['username'];
    $password = md5($_POST['password']);
    $verify = $_POST['verify'];
    $autoFlag = isset($_POST['autoFlag']) ? $_POST['autoFlag'] : '';
    $sessionVerify = $_SESSION['verify'];


    if ($verify == $sessionVerify) {
        $sql = "select * from imooc_admin where username='{$username}' and password='{$password}'";
        //$link = connect();
        $row = checkAdmin($sql);
        print_r($row);
        if ($row) {
            if ($autoFlag) {
                setcookie('adminId', $row['id'], time() + 7 * 24 * 3600);
                setcookie('adminName', $row['username'], time() + 7 * 24 * 3600);
            }
            $_SESSION['adminName'] = $row['username'];
            $_SESSION['adminId'] = $row['id'];
            alertMes('登陆成功', 'index.php');
        } else {
            alertMes('登陆失败，重新登陆', 'login.php');
        }
    } else {
        alertMes('验证码输入错误', 'login.php');
    }