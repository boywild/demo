<?php
/**
 * 计算系统耗时
 */

function _runtime(){
    list ($msec, $sec)=explode(' ',microtime());
    return $msec+$sec;
}

/**
 * 二维码生成
 */
function _code($w=75,$h=25,$rand=4,$border=false){
    $code='';
    $img=imagecreatetruecolor($w,$h);
    $bgcolor=imagecolorallocate($img,255,255,255);
    imagefill($img,0,0,$bgcolor);

    /**
     * 黑边
     */
    if($border){
        $black=imagecolorallocate($img,0,0,0);
        imagerectangle($img,0,0,$w-1,$h-1,$black);
    }


    /**
     * 验证码
     */
    for($i=0;$i<$rand;$i++){
        $txtcolor=imagecolorallocate($img,rand(0,120),rand(0,120),rand(0,120));
        $text=dechex(mt_rand(0,15));
        $code.=$text;
        $x= $i*$w/$rand+mt_rand(1,10);
        $y=mt_rand(1,$h/2);
        imagestring($img,8,$x,$y,$text,$txtcolor);
    }
    $_SESSION['code'] = $code;
    /**
     * 点
     */

    for($i=0;$i<300;$i++){
        $pointcolor=imagecolorallocate($img,rand(0,255),rand(0,255),rand(0,255));
        imagesetpixel($img,rand(1,$w-1),rand(1,$h-1),$pointcolor);
    }

    /**
     * 线
     */
    for($i=0;$i<4;$i++){
        $linecolor=imagecolorallocate($img,rand(80,200),rand(80,200),rand(80,200));
        $x1=rand(1,$w);
        $x2=rand(1,$w);
        $y1=rand(1,$h);
        $y2=rand(1,$h);
        imageline($img,$x1,$x2,$y1,$y2,$linecolor);
    }


    header('Content-type:image/png');
    imagepng($img);
    imagedestroy($img);
}