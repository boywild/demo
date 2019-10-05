<?php
?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<form action="doAdminAction.php?act=addAdmin" method="post">
    <table width="70%" border="none" bgcolor="#ccc" cellspacing="0" cellpadding="5">
        <tbody>
        <tr>
            <td>管理员名称</td>
            <td><input type="text" name="username" placeholder="请输入管理员名称"></td>
        </tr>
        <tr>
            <td>管理员密码</td>
            <td><input type="text" name="password" placeholder="请输入管理员密码"></td>
        </tr>
        <tr>
            <td>管理员邮箱</td>
            <td><input type="text" name="email" placeholder="请输入管理员邮箱"></td>
        </tr>
        <tr>
            <td colspan="2"><input type="submit" value="新增"></td>
        </tr>
        </tbody>
    </table>
</form>
</body>
</html>
