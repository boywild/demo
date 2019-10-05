<?php
    session_start();
    define('ROOT', dirname(__FILE__));
    //set_include_path("." . PATH_SEPARATOR . ROOT . "/lib" . PATH_SEPARATOR . ROOT . "/core".PATH_SEPARATOR.get_include_path());
    $path = "/lib";
    $path2 = "/core";
    $path3 = "/configs";
    set_include_path(get_include_path() . PATH_SEPARATOR . ROOT . $path . PATH_SEPARATOR . ROOT . $path2 . PATH_SEPARATOR . ROOT . $path3);


    require_once 'common.func.php';
    require_once 'image.func.php';
    require_once 'mysql.func.php';
    require_once 'page.func.php';
    require_once 'string.func.php';
    require_once 'upload.func.php';
    require_once 'configs.php';
    require_once 'admin.inc.php';
    //require_once 'database.class.php';
