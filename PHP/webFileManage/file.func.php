<?php
    function transByte($byte)
    {
        $unit = array('Byte', 'KB', 'MB', 'GB', 'TB');
        $index = 0;
        while ($byte > 1024) {
            $byte /= 1024;
            $index++;
        }
        echo round($byte, 2) . $unit[$index];
    }

    function createFile($file)
    {
        //文件名
        $name = basename($file);
        //检测文件名合法性/*<>?|
        $reg = "/[\/,\*,<>,\?\|]/";
        if (!preg_match($reg, $name)) {
            //是否有同名文件
            if (file_exists($name)) {
                return '文件已经存在';
            } else {
                if (touch($name)) {
                    return '文件创建成功';
                } else {
                    return '文件创建失败';
                }
            }

        } else {
            return '文件名不合法';
        }


    }