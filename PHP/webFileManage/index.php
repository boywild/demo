<?php
    require_once 'dir.func.php';
    $path = "file";
    $info = readDirectory('file');
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
        "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    <title>Insert title here</title>
    <link rel="stylesheet" href="cikonss.css"/>
    <script src="jquery-ui/js/jquery-1.10.2.js"></script>
    <script src="jquery-ui/js/jquery-ui-1.10.4.custom.js"></script>
    <script src="jquery-ui/js/jquery-ui-1.10.4.custom.min.js"></script>
    <link rel="stylesheet" href="jquery-ui/css/ui-lightness/jquery-ui-1.10.4.custom.css" type="text/css"/>
    <style type="text/css">
        body, p, div, ul, ol, table, dl, dd, dt {
            margin: 0;
            padding: 0;
        }

        a {
            text-decoration: none;
        }

        ul, li {
            list-style: none;
            float: left;
        }

        #top {
            width: 100%;
            height: 48px;
            margin: 0 auto;
            background: #E2E2E2;
        }

        #navi a {
            display: block;
            width: 48px;
            height: 48px;
        }

        #main {
            margin: 0 auto;
            border: 2px solid #ABCDEF;
        }

        .small {
            width: 25px;
            height: 25px;
            border: 0;
        }

        .form {
            padding: 20px;
        }

        .form input[type="text"] {
            line-height: 30px;
            padding: 0;
            margin: 0;
            outline: none;
            width: 300px;
            text-indent: 10px;
            font-size: 14px;
            border-radius: 5px;
            border: 1px solid #E2E2E2;
        }

        .form input[type="submit"] {
            line-height: 30px;
            padding: 0;
            margin: 0;
            outline: none;
            width: auto;
            padding: 0 15px;
            font-size: 14px;
            border-radius: 5px;
            background: #1c94c4;
            color: #fff;
        }
    </style>

</head>

<body>
<div id="showDetail" style="display:none"><img src="" id="showImg" alt=""/></div>
<h1>在线文件管理器</h1>
<div id="top">
    <ul id="navi">
        <li>
            <a href="index.php" title="主目录">
                <span style="margin-left: 8px; margin-top: 0px; top: 4px;" class="icon icon-small icon-square">
                    <span class="icon-home"></span></span>
            </a>
        </li>
        <li>
            <a href="#" onclick="show('createFile')" title="新建文件">
                <span style="margin-left: 8px; margin-top: 0px; top: 4px;" class="icon icon-small icon-square">
                    <span class="icon-file"></span>
                </span>
            </a>
        </li>
        <li>
            <a href="#" onclick="show('createFolder')" title="新建文件夹">
                <span style="margin-left: 8px; margin-top: 0px; top: 4px;" class="icon icon-small icon-square">
                    <span class="icon-folder"></span>
                </span>
            </a>
        </li>
        <li>
            <a href="#" onclick="show('uploadFile')" title="上传文件">
                <span style="margin-left: 8px; margin-top: 0px; top: 4px;" class="icon icon-small icon-square">
                    <span class="icon-upload"></span>
                </span>
            </a>
        </li>
        <li>
            <a href="#" title="返回上级目录">
                <span style="margin-left: 8px; margin-top: 0px; top: 4px;" class="icon icon-small icon-square">
                    <span class="icon-arrowLeft"></span>
                </span>
            </a>
        </li>
    </ul>
</div>
<form class="form" action="index.php" method="post" enctype="multipart/form-data">
    <div id="createFolder" style="display:none;">
        <label>请输入文件夹名称</label>
        <div>
            <input type="text" name="dirname"/>
            <input type="hidden" name="path" value="xxx"/>
            <input type="submit" name="act" value="创建文件夹"/>
        </div>
    </div>
    <div id="createFile" style="display:none;">
        <label>请输入文件名称</label>
        <div>
            <input type="text" name="filename"/>
            <input type="hidden" name="path" value="xxx"/>
            <input type="submit" name="act" value="创建文件"/>
        </div>
    </div>
    <div id="uploadFile" style="display:none;">
        <label>请选择要上传的文件</label>
        <div>
            <input type="file" name="myFile"/>
            <input type="submit" name="act" value="上传文件"/>
        </div>
    </div>
</form>
<table width="100%" border="1" cellpadding="5" cellspacing="0" bgcolor="#ABCDEF" align="center">

    <tr>
        <td width="5%">编号</td>
        <td width="10%">名称</td>
        <td width="5%">类型</td>
        <td width="5%">大小</td>
        <td width="5%">可读</td>
        <td width="5%">可写</td>
        <td width="5%">可执行</td>
        <td width="15%">创建时间</td>
        <td width="15%">修改时间</td>
        <td width="15%">访问时间</td>
        <td width="25%">操作</td>
    </tr>

    <?php
        if ($info['dir']) {
            $i = 0;
            foreach ($info['dir'] as $value) {
                $i++;
                $resource = $path . "/" . $value;

                ?>
                <tr>
                    <td><?php echo $i ?></td>
                    <td><?php echo $value ?></td>
                    <td><?php echo '<img class="small" src="./images/folder_ico.png">' ?></td>
                    <td></td>
                    <td><?php $src = is_readable($resource) ? 'correct.png' : 'error.png' ?><img class="small"
                                                                                                 src="./images/<?php echo $src ?>"
                                                                                                 alt=""></td>
                    <td><?php $src = is_writable($resource) ? 'correct.png' : 'error.png' ?><img class="small"
                                                                                                 src="./images/<?php echo $src ?>"
                                                                                                 alt=""></td>
                    <td><?php $src = is_executable($resource) ? 'correct.png' : 'error.png' ?><img class="small"
                                                                                                   src="./images/<?php echo $src ?>"
                                                                                                   alt=""></td>
                    <td><?php echo date('Y-m-d h:m:s', filectime($resource)) ?></td>
                    <td><?php echo date('Y-m-d h:m:s', filemtime($resource)) ?></td>
                    <td><?php echo date('Y-m-d h:m:s', fileatime($resource)) ?></td>
                    <td>
                        <a href="index.php?path=<?php echo $resource; ?>"><img class="small" src="images/show.png"
                                                                               alt=""
                                                                               title="查看"/></a>|
                        <a href="index.php?act=renameFolder&path=<?php echo $path; ?>&dirname=<?php echo $resource; ?>"><img
                                    class="small" src="images/rename.png" alt="" title="重命名"/></a>|
                        <a href="index.php?act=copyFolder&path=<?php echo $path; ?>&dirname=<?php echo $resource; ?>"><img
                                    class="small" src="images/copy.png" alt="" title="复制"/></a>|
                        <a href="index.php?act=cutFolder&path=<?php echo $path; ?>&dirname=<?php echo $resource; ?>"><img
                                    class="small" src="images/cut.png" alt="" title="剪切"/></a>|
                        <a href="#" onclick="delFolder('<?php echo $resource; ?>','<?php echo $path; ?>')"><img
                                    class="small" src="images/delete.png" alt="" title="删除"/></a>|
                    </td>
                </tr>
            <?php }
        } ?>
    <?php
        if ($info['file']) {
            $i = 0;
            foreach ($info['file'] as $value) {
                $i++;

                ?>
                <tr>
                    <td><?php echo $i ?></td>
                    <td><?php echo $value ?></td>
                    <td><?php echo '<img class="small" src="./images/file_ico.png">' ?></td>
                    <td><?php echo filesize('file' . '/' . $value) ?></td>
                    <td><?php $src = is_readable($resource) ? 'correct.png' : 'error.png' ?><img class="small"
                                                                                                 src="./images/<?php echo $src ?>"
                                                                                                 alt=""></td>
                    <td><?php $src = is_writable($resource) ? 'correct.png' : 'error.png' ?><img class="small"
                                                                                                 src="./images/<?php echo $src ?>"
                                                                                                 alt=""></td>
                    <td><?php $src = is_executable($resource) ? 'correct.png' : 'error.png' ?><img class="small"
                                                                                                   src="./images/<?php echo $src ?>"
                                                                                                   alt=""></td>
                    <td><?php echo date('Y-m-d h:m:s', filectime($resource)) ?></td>
                    <td><?php echo date('Y-m-d h:m:s', filemtime($resource)) ?></td>
                    <td><?php echo date('Y-m-d h:m:s', fileatime($resource)) ?></td>
                    <td>
                        <a href="index.php?path=<?php echo $resource; ?>"><img class="small" src="images/show.png"
                                                                               alt=""
                                                                               title="查看"/></a>|
                        <a href="index.php?act=renameFolder&path=<?php echo $path; ?>&dirname=<?php echo $resource; ?>"><img
                                    class="small" src="images/rename.png" alt="" title="重命名"/></a>|
                        <a href="index.php?act=copyFolder&path=<?php echo $path; ?>&dirname=<?php echo $resource; ?>"><img
                                    class="small" src="images/copy.png" alt="" title="复制"/></a>|
                        <a href="index.php?act=cutFolder&path=<?php echo $path; ?>&dirname=<?php echo $resource; ?>"><img
                                    class="small" src="images/cut.png" alt="" title="剪切"/></a>|
                        <a href="#" onclick="delFolder('<?php echo $resource; ?>','<?php echo $path; ?>')"><img
                                    class="small" src="images/delete.png" alt="" title="删除"/></a>|
                    </td>
                </tr>
            <?php }
        } ?>

</table>


</body>
<script>
    function show(type) {
        const createFile = document.getElementById('createFile');
        const createFolder = document.getElementById('createFolder');
        const uploadFile = document.getElementById('uploadFile');
        switch (type) {
            case "createFile":
                createFile.style.display = 'block';
                createFolder.style.display = 'none';
                uploadFile.style.display = 'none';
                break;
            case "createFolder":
                createFile.style.display = 'none';
                createFolder.style.display = 'block';
                uploadFile.style.display = 'none';
                break;
            case "uploadFile":
                createFile.style.display = 'none';
                createFolder.style.display = 'none';
                uploadFile.style.display = 'block';
                break;
            default:
                createFile.style.display = 'none';
                createFolder.style.display = 'none';
                uploadFile.style.display = 'none';
                break;

        }
    }
</script>
</html>