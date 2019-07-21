<?php

session_start();

$table=array(
    'pic0'=>'蛇',
    'pic1'=>'猫',
    'pic2'=>'狗',
    'pic3'=>'猪',
    'pic4'=>'鼠',
);

$index=rand(0,4);
$value=$table['pic'.$index];
$_SESSION['authcode']=$value;

$filename=dirname(__FILE__).'\\images'.'\\pic'.$index.'.jpg';
$contents=file_get_contents($filename);

header('content-type:image/jpg');

echo $contents;