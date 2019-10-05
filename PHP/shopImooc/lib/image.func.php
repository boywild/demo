<?php
    function verifyImage($width = 100, $height = 30)
    {
        $code = '';
        $img = imagecreatetruecolor('100', '30');

        //背景
        $bgcolor = imagecolorallocate($img, 255, 255, 255);
        imagefill($img, 0, 0, $bgcolor);
        //文字

        for ($i = 0; $i < 4; $i++) {
            $fontcolor = imagecolorallocate($img, rand(0, 120), rand(0, 120), rand(0, 120));
            $data = array(chr(rand(65, 90)), chr(rand(65, 90)), rand(0, 9));
            $txt = $data[rand(0, 2)];
            $x = ($i * 100 / 4) + rand(0, 9);
            $y = rand(5, 10);
            $code .= $txt;
            imagestring($img, 14, $x, $y, $txt, $fontcolor);
        }
        $_SESSION['verify'] = strtolower($code);
        //点
        for ($i = 0; $i < 200; $i++) {
            $dotcolor = imagecolorallocate($img, rand(50, 200), rand(50, 200), rand(50, 200));
            $x = rand(1, $width - 1);
            $y = rand(1, $height - 1);
            imagesetpixel($img, $x, $y, $dotcolor);
        }

        //线
        header('Content-type:image/png');
        for ($i = 0; $i < 5; $i++) {
            $linecolor = imagecolorallocate($img, rand(80, 200), rand(80, 200), rand(80, 200));
            $x1 = rand(1, $width - 1);
            $y1 = rand(1, $height - 1);
            $x2 = rand(1, $width - 1);
            $y2 = rand(1, $height - 1);
            imageline($img, $x1, $y1, $x2, $y2, $linecolor);
        }

        imagepng($img);
        imagedestroy($img);
    }


