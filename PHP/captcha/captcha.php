<?php

session_start();

//1.底图/干扰点-颜色随机/干扰线-颜色随机浅色0-120 深色50-200
//2.4位随机数字/字母组合-颜色随机/倾斜不规则排列
$code='';
$img=imagecreatetruecolor(100,30);
$bgcolor=imagecolorallocate($img,255,255,255);
imagefill($img,0,0,$bgcolor);

for($i=0;$i<4;$i++){
    $fontsize=6;
    $fontcolor=imagecolorallocate($img,rand(0,120),rand(0,120),rand(0,120));
    $data='qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890';
    $txt=substr($data,rand(0,strlen($data)),1);
    $code.=$txt;
    $x=($i*100/4)+rand(0,9);
    $y=rand(5,10);
    imagestring($img,$fontsize,$x,$y,$txt,$fontcolor);
}

$_SESSION['authcode']=$code;
for ($i=0;$i<200;$i++){
    $pointcolor=imagecolorallocate($img,rand(50,200),rand(50,200),rand(50,200));
    $x=rand(1,99);
    $y=rand(1,29);
    imagesetpixel($img, $x,$y,$pointcolor);
}

for ($i=0;$i<3;$i++){
    $linecolor=imagecolorallocate($img,rand(80,200),rand(80,200),rand(80,200));
    imageline($img,rand(1,99), rand(1,29),rand(1,99), rand(1,29),$linecolor);
}

header('Content-type:image/png');
imagepng($img);
imagedestroy($img);