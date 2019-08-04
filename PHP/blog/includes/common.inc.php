<?php
    header('Content-Type: text/html; charset=utf-8');
    if(PHP_VERSION<5.2){
        exit('The version is too low, please upgrade to above 5.2');
    }

    define('ROOT_PATH',pathinfo(dirname(__FILE__))['dirname']);
    define('DB_HOST','localhost');
    define('DB_USER','root');
    define('DB_PASSWORD','');
    define('DB_NAME','testguest');

    require ROOT_PATH.'/includes/global.func.php';

    define('START_TIME',_runtime());
?>