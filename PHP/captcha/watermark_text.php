<?php
// 1.打开图片
$src=dirname(__FILE__).'\\images'.'\\1369025_192645024000_2.jpg';
// 2.获取图片信息
$info=getimagesize($src);
$type=image_type_to_extension($info[2],false);
//print_r($info);
//echo $type;
// 3.复制图片
$createimage="imagecreatefrom{$type}";
$img=$createimage($src);

// 4.加入日字体水印
$font=realpath('simhei.ttf');
$fontsize=20;
$fonttext='你好，陌生人';
$fontcolor=imagecolorallocatealpha($img,255,255,255,100);
imagettftext($img,$fontsize,0,20,90,$fontcolor,$font,$fonttext);


// 5.输出图片
header("Content-type:{$info['mime']}");

$outimage="image{$type}";
$outimage($img);
$outimage($img,'imageremark'.'.'.$type);
// 6.销毁图片
//imagedestroy($img);
