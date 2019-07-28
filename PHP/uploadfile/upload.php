<?php
    print_r($_FILES);
    $maxFileSize='1048567';//1M
    $allowExt=array('jpeg','jpg','png','gif');

    $file=$_FILES['myFile'];
    $fileName=$file['name'];
    $fileType=$file['type'];
    $fileTmpName=$file['tmp_name'];
    $fileError=$file['error'];
    $fileSize=$file['size'];

    $path='uploads';
    $destination=$path.'/'.$fileName;

    /**
     * error
     * 0 UPLOAD_ERR_OK:其值为0，没有错误发生，文件上传成功
     * 1 UPLOAD_ERR_INI_SIZE:其值为1，上传文件超过了php.ini中upload_max_filesize选项限制的值
     * 2 UPLOAD_ERR_FORM_SIZE:其值为2， 上传文件的大小超过了html表单中MAX_FILE_SIZE选项指定的值
     * 3 UPLOAD_ERR_PARTIAL:其值为3， 文件只有部分被上传
     * 4 没有选择上传文件
     * 6 没有找到临时目录
     */

    /**
     * 检测上传文件大小
     * 检测上传文件类型
     * 检测是否为真实图片类型
     * 检测上传文件夹是否存在
     * 处理重复上传同一文件
     * 检测文件是否通过post方式上传
     */

    if($fileError===UPLOAD_ERR_OK){
        $ext=pathinfo($fileName,PATHINFO_EXTENSION);

        if(!in_array($ext,$allowExt)){
            exit('文件类型错误');
        }
        if(!file_exists($path)){
            mkdir($path,0777,true);
            chmod($path,0777);
        }
        if(!getimagesize($fileTmpName)){
            exit('不是真正的图片类型');
        }
        if($fileSize>$maxFileSize){
            exit('上传文件大小超过1M');
        }
        if(!is_uploaded_file($fileTmpName)){
            exit('请通过post方式上传');
        }
        if(@move_uploaded_file($fileTmpName,$destination)){
            echo '文件上传成功';
        }else {
            echo '移动文件出错';
        }

    }else{
        switch ($fileError){
            case 1:
                echo '上传文件超过了php.ini中upload_max_filesize选项限制的值';
                break;
            case 2:
                echo '上传文件的大小超过了html表单中MAX_FILE_SIZE选项指定的值';
                break;
            case 3:
                echo '文件只有部分被上传';
                break;
            case 4:
                echo '没有选择上传文件';
                break;
            case 6:
                echo '没有找到临时目录';
                break;
            case 7:
            case 8:
                echo '系统出现错误';
                break;
        }
    }


?>