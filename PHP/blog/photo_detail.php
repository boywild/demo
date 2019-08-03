
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>图片详情</title>
    <link rel="shortcut icon" href="favicon.ico" />
    <link rel="stylesheet" type="text/css" href="styles/1/basic.css" />
    <link rel="stylesheet" type="text/css" href="styles/1/photo_detail.css" />
</head>
<body>

<div id="header">
    <h1><a href="index.php">瓢城Web俱乐部多用户留言系统</a></h1>
    <ul>
        <li><a href="index.php">首页</a></li>
        <li><a href="member.php">陈湉·个人中心</a> <strong class="noread"><a href="member_message.php">(0)</a></strong></li>
        <li><a href="blog.php">博友</a></li>
        <li><a href="photo.php">相册</a></li>
        <li class="skin" onmouseover='inskin()' onmouseout='outskin()'>
            <a href="javascript:;">风格</a>
            <dl id="skin">
                <dd><a href="skin.php?id=1">1.一号皮肤</a></dd>
                <dd><a href="skin.php?id=2">2.二号皮肤</a></dd>
                <dd><a href="skin.php?id=3">3.三号皮肤</a></dd>
            </dl>
        </li>

        <li><a href="logout.php">退出</a></li>	</ul>
</div>
<div id="photo">
    <h2>图片详情</h2>
    <a name="pre"></a><a name="next"></a>
    <dl class="detail">
        <dd class="name">qm</dd>
        <dt><a href="photo_detail.php?id=97#pre">上一页</a><img src="photo/1286182218/1532745361.gif" /><a href="photo_detail.php?id=95#next">下一页</a></dt>
        <dd>[<a href="photo_show.php?id=3">返回列表</a>]</dd>
        <dd>浏览量(<strong>496</strong>) 评论量(<strong>1</strong>) 发表于：2018-07-28 10:36:05 上传者：jianwangyue</dd>
        <dd>简介：qm</dd>
    </dl>


    <p class="line"></p>

    <div class="re">
        <dl>
            <dd class="user">张三丰(男)</dd>
            <dt><img src="face/m01.gif" alt="张三丰" /></dt>
            <dd class="message"><a href="javascript:;" name="message" title="466">发消息</a></dd>
            <dd class="friend"><a href="javascript:;" name="friend" title="466">加为好友</a></dd>
            <dd class="guest">写留言</dd>
            <dd class="flower"><a href="javascript:;" name="flower" title="466">给他送花</a></dd>
            <dd class="email">邮件：<a href="mailto:37897667@qq.com">37897667@qq.com</a></dd>
            <dd class="url">网址：<a href="http://uwwq.com" target="_blank">http://uwwq.com</a></dd>
        </dl>
        <div class="content">
            <div class="user">
                <span>1#</span>张三丰 | 发表于：2019-01-28 00:35:47			</div>
            <h3>主题：RE:qm</h3>
            <div class="detail">
                <img src="qpic/2/8.gif" alt="图片" />							</div>
        </div>
    </div>

    <div id="page_num"><ul><li><a href="photo_detail.php?id=96&page=1" class="selected">1</a></li></ul></div>

    <p class="line"></p>
    <form method="post" action="?action=rephoto">
        <input type="hidden" name="sid" value="96" />
        <dl class="rephoto">
            <dd>标　　题：<input type="text" name="title" class="text" value="RE:qm" /> (*必填，2-40位)</dd>
            <dd id="q">贴　　图：　<a href="javascript:;">Q图系列[1]</a>　 <a href="javascript:;">Q图系列[2]</a>　 <a href="javascript:;">Q图系列[3]</a></dd>
            <dd>
                <div id="ubb">
                    <img src="images/fontsize.gif" title="字体大小" alt="字体大小" />
                    <img src="images/space.gif" title="线条" alt="线条" />
                    <img src="images/bold.gif" title="粗体" />
                    <img src="images/italic.gif" title="斜体" />
                    <img src="images/underline.gif" title="下划线" />
                    <img src="images/strikethrough.gif" title="删除线" />
                    <img src="images/space.gif" />
                    <img src="images/color.gif" title="颜色" />
                    <img src="images/url.gif" title="超链接" />
                    <img src="images/email.gif" title="邮件" />
                    <img src="images/image.gif" title="图片" />
                    <img src="images/swf.gif" title="flash" />
                    <img src="images/movie.gif" title="影片" />
                    <img src="images/space.gif" />
                    <img src="images/left.gif" title="左区域" />
                    <img src="images/center.gif" title="中区域" />
                    <img src="images/right.gif" title="右区域" />
                    <img src="images/space.gif" />
                    <img src="images/increase.gif" title="扩大输入区" />
                    <img src="images/decrease.gif" title="缩小输入区" />
                    <img src="images/help.gif" />
                </div>
                <div id="font">
                    <strong onclick="font(10)">10px</strong>
                    <strong onclick="font(12)">12px</strong>
                    <strong onclick="font(14)">14px</strong>
                    <strong onclick="font(16)">16px</strong>
                    <strong onclick="font(18)">18px</strong>
                    <strong onclick="font(20)">20px</strong>
                    <strong onclick="font(22)">22px</strong>
                    <strong onclick="font(24)">24px</strong>
                </div>
                <div id="color">
                    <strong title="黑色" style="background:#000" onclick="showcolor('#000')"></strong>
                    <strong title="褐色" style="background:#930" onclick="showcolor('#930')"></strong>
                    <strong title="橄榄树" style="background:#330" onclick="showcolor('#330')"></strong>
                    <strong title="深绿" style="background:#030" onclick="showcolor('#030')"></strong>
                    <strong title="深青" style="background:#036" onclick="showcolor('#036')"></strong>
                    <strong title="深蓝" style="background:#000080" onclick="showcolor('#000080')"></strong>
                    <strong title="靓蓝" style="background:#339" onclick="showcolor('#339')"></strong>
                    <strong title="灰色-80%" style="background:#333" onclick="showcolor('#333')"></strong>
                    <strong title="深红" style="background:#800000" onclick="showcolor('#800000')"></strong>
                    <strong title="橙红" style="background:#f60" onclick="showcolor('#f60')"></strong>
                    <strong title="深黄" style="background:#808000" onclick="showcolor('#000')"></strong>
                    <strong title="深绿" style="background:#008000" onclick="showcolor('#808000')"></strong>
                    <strong title="绿色" style="background:#008080" onclick="showcolor('#008080')"></strong>
                    <strong title="蓝色" style="background:#00f" onclick="showcolor('#00f')"></strong>
                    <strong title="蓝灰" style="background:#669" onclick="showcolor('#669')"></strong>
                    <strong title="灰色-50%" style="background:#808080" onclick="showcolor('#808080')"></strong>
                    <strong title="红色" style="background:#f00" onclick="showcolor('#f00')"></strong>
                    <strong title="浅橙" style="background:#f90" onclick="showcolor('#f90')"></strong>
                    <strong title="酸橙" style="background:#9c0" onclick="showcolor('#9c0')"></strong>
                    <strong title="海绿" style="background:#396" onclick="showcolor('#396')"></strong>
                    <strong title="水绿色" style="background:#3cc" onclick="showcolor('#3cc')"></strong>
                    <strong title="浅蓝" style="background:#36f" onclick="showcolor('#36f')"></strong>
                    <strong title="紫罗兰" style="background:#800080" onclick="showcolor('#800080')"></strong>
                    <strong title="灰色-40%" style="background:#999" onclick="showcolor('#999')"></strong>
                    <strong title="粉红" style="background:#f0f" onclick="showcolor('#f0f')"></strong>
                    <strong title="金色" style="background:#fc0" onclick="showcolor('#fc0')"></strong>
                    <strong title="黄色" style="background:#ff0" onclick="showcolor('#ff0')"></strong>
                    <strong title="鲜绿" style="background:#0f0" onclick="showcolor('#0f0')"></strong>
                    <strong title="青绿" style="background:#0ff" onclick="showcolor('#0ff')"></strong>
                    <strong title="天蓝" style="background:#0cf" onclick="showcolor('#0cf')"></strong>
                    <strong title="梅红" style="background:#936" onclick="showcolor('#936')"></strong>
                    <strong title="灰度-20%" style="background:#c0c0c0" onclick="showcolor('#c0c0c0')"></strong>
                    <strong title="玫瑰红" style="background:#f90" onclick="showcolor('#f90')"></strong>
                    <strong title="茶色" style="background:#fc9" onclick="showcolor('#fc9')"></strong>
                    <strong title="浅黄" style="background:#ff9" onclick="showcolor('#ff9')"></strong>
                    <strong title="浅绿" style="background:#cfc" onclick="showcolor('#cfc')"></strong>
                    <strong title="浅青绿" style="background:#cff" onclick="showcolor('#cff')"></strong>
                    <strong title="浅蓝" style="background:#9cf" onclick="showcolor('#9cf')"></strong>
                    <strong title="淡紫" style="background:#c9f" onclick="showcolor('#c9f')"></strong>
                    <strong title="白色" style="background:#fff" ></strong>
                    <em><input type="text" name="t" value="#" /></em>
                </div>				<textarea name="content" rows="9"></textarea>
            </dd>

            <dd>
                验 证 码：
                <input type="text" name="code" class="text yzm"  /> <img src="code.php" id="code" />
                <input type="submit" class="submit" value="发表帖子" /></dd>
        </dl>
    </form>

</div>

<div id="footer">
    <p>本程序执行耗时为: 0.0119秒</p>
    <p>版权所有 翻版必究</p>
    <p>本程序由<span>瓢城Web俱乐部</span>提供 源代码可以任意修改或发布 (c) yc60.com</p>
</div></body>
</html>
