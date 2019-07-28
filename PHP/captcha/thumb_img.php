<?php
// 原图路径
$src=dirname(__FILE__).'\\images'.'\\1369025_192645024000_2.jpg';

// 获取原图信息
$info=getimagesize($src);
$type=image_type_to_extension($info[2],false);

// 创建图片
$createimage="imagecreatefrom{$type}";
$image=$createimage($src);

// 生成缩略图
$thumb=imagecreatetruecolor(300,200);
imagecopyresampled($thumb,$image,0,0,0,0,300,200,$info[0],$info[1]);

// 输入图片
$outimage="image{$type}";
header("content-type:{$info['mime']}");
$outimage($thumb);

// 销毁图片
imagedestroy($image);
imagedestroy($thumb);