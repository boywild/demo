<?php
    /**
     * 查询用户是否存在
     * @param $link
     * @param $sql
     * @return array|null
     */
    function checkAdmin($sql)
    {
        return getOne($sql);
    }

    /**
     * 检测是否登陆
     */
    function checkLogin()
    {
        if (!isset($_SESSION['adminId']) && !isset($_COOKIE['adminId'])) {
            alertMes('请先登陆', 'login.php');
        } else {

        }
    }

    /**
     * 退出登陆
     */
    function logout()
    {
        $_SESSION = array();
        if (isset($_COOKIE[session_name()])) {
            setcookie(session_name(), '', time() - 1);
            setcookie('adminId', '', time() - 1);
            setcookie('adminName', '', time() - 1);
        }
        session_destroy();
        header('location:login.php');
    }

    /**
     * 添加管理员
     */

    function addAdmin()
    {
        $arr = $_POST;
        if (dbinsert('', 'imooc_admin', $arr)) {
            $mes = "添加成功!<br/><a href='addAdmin.php'>继续添加</a>|<a href='listAdmin.php'>查看管理员列表</a>";
        } else {
            $mes = "添加失败!<br/><a href='addAdmin.php'>继续添加</a>|<a href='listAdmin.php'>查看管理员列表</a>";
        }

        return $mes;
    }