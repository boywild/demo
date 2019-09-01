<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <form action="file.php" method="post" enctype="multipart/form-data">
<!--         <input type="hidden" name="MAX_FILE_SIZE" value='176942' />-->
        请选择您要上传的文件：<input type="file" name='myFile1' /><br/>
<!--        请选择您要上传的文件：<input type="file" name='myFile2' /><br/>-->
<!--        请选择您要上传的文件：<input type="file" name='myFile3' /><br/>-->
<!--        请选择您要上传的文件：<input type="file" name='myFile4' /><br/>-->
<!--        请选择您要上传的文件：<input type="file" name='myFile5' /><br/>-->
<!--        请选择您要上传的文件：<input type="file" name='myFile[]' multiple="multiple"/>-->
        <!-- <input type="file" name="myFile"  accept="image/jpeg,image/gif,image/png"/><br /> -->
        <input type="submit" value="上传" /><br/>
        <a href="corporateclean-7.x-2.3.tar.gz">下载文件</a><br/>
        <a href="download.php?filename=./images/pic1.jpg">下载图片</a>
    </form>
</body>
</html>