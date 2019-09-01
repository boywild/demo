<?php
    include_once 'upload.php';
    //var_dump($_FILES);
    $upload = new upload('myFile1','imooc');
    $dest = $upload->uploadFile();
    echo $dest;