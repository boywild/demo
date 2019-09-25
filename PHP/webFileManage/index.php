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
<form action="index.php" method="post" enctype="multipart/form-data">
    <table width="100%" border="1" cellpadding="5" cellspacing="0" bgcolor="#ABCDEF" align="center">
        <tr id="createFolder" style="display:none;">
            <td>请输入文件夹名称</td>
            <td>
                <input type="text" name="dirname"/>
                <input type="hidden" name="path" value="xxx"/>
                <input type="submit" name="act" value="创建文件夹"/>
            </td>
        </tr>
        <tr id="createFile" style="display:none;">
            <td>请输入文件名称</td>
            <td>
                <input type="text" name="filename"/>
                <input type="hidden" name="path" value="xxx"/>
                <input type="submit" name="act" value="创建文件"/>
            </td>
        </tr>
        <tr id="uploadFile" style="display:none;">
            <td>请选择要上传的文件</td>
            <td><input type="file" name="myFile"/>
                <input type="submit" name="act" value="上传文件"/>
            </td>
        </tr>
        <tr>
            <td>编号</td>
            <td>名称</td>
            <td>类型</td>
            <td>大小</td>
            <td>可读</td>
            <td>可写</td>
            <td>可执行</td>
            <td>创建时间</td>
            <td>修改时间</td>
            <td>访问时间</td>
            <td>操作</td>
        </tr>

    </table>
</form>

</body>
<script>
    function show(type) {
        const createFile=document.getElementById('createFile');
        const createFolder=document.getElementById('createFolder');
        const uploadFile=document.getElementById('uploadFile');
        switch (type) {
            case "createFile":
                createFile.style.display='block';
                createFolder.style.display='none';
                uploadFile.style.display='none';
                break;
            case "createFolder":
                createFile.style.display='none';
                createFolder.style.display='block';
                uploadFile.style.display='none';
                break;
            case "uploadFile":
                createFile.style.display='none';
                createFolder.style.display='none';
                uploadFile.style.display='block';
                break;
            default:
                createFile.style.display='none';
                createFolder.style.display='none';
                uploadFile.style.display='none';
                break;

        }
    }
</script>
</html>