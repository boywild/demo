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

// 4.加入图片水印
$remark=dirname(__FILE__).'\\images'.'\\hot.jpg';
$remarkInfo=getimagesize($remark);
$remarkType=image_type_to_extension($remarkInfo[2],false);
$cloneimage="imagecreatefrom{$remarkType}";
$image=$cloneimage($remark);
//print_r($remarkInfo);
imagecopymerge($img,$image,0,0,0,0,$remarkInfo[0],$remarkInfo[1],30);
imagedestroy($image);

// 5.输出图片
header("Content-type:{$info['mime']}");

$outimage="image{$type}";
$outimage($img);
$outimage($img,'imageremark'.'.'.$type);
// 6.销毁图片
imagedestroy($img);
