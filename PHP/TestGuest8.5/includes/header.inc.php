<?php
/**
* TestGuest Version1.0
* ================================================
* Copy 2010-2012 yc60
* Web: http://www.yc60.com
* ================================================
* Author: Lee
* Date: 2010-8-10
*/
//防止恶意调用
if (!defined('IN_TG')) {
	exit('Access Defined!');
}
?>
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
<script type="text/javascript" src="js/bootstrap.bundle.min.js"></script>
<script type="text/javascript" src="js/skin.js"></script>
<header class="blog-header py-3">
    <div class="row flex-nowrap justify-content-between align-items-center">
        <div class="col-4 pt-1">
            <?php
                if (isset($_COOKIE['username'])){
//                    echo '<li><a href="member.php">'.$_COOKIE['username'].'·个人中心</a> '.$GLOBALS['message'].'</li>';
                    echo '<a class="nav-link dropdown-toggle" href="http://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">'.$_COOKIE['username'].'</a>'.
                            '<div class="dropdown-menu" aria-labelledby="dropdown01">
                                <a class="dropdown-item" href="member.php">个人中心</a>
                                <a class="dropdown-item" href="member_message.php">会员消息'.$GLOBALS['message'].'</a>
                                <a class="dropdown-item" href="logout.php">退出登录</a>
                            </div>';
                }
            ?>

        </div>
        <div class="col-4 text-center">
            <a class="blog-header-logo text-dark" href="#">留言系统</a>
        </div>
        <div class="col-4 d-flex justify-content-end align-items-center">
            <a class="btn btn-sm btn-outline-secondary" href="skin.php?id=1">号皮肤1</a>
            <a class="btn btn-sm btn-outline-secondary" href="skin.php?id=2">号皮肤2</a>
            <a class="btn btn-sm btn-outline-secondary" href="skin.php?id=3">号皮肤3</a>
            <?php
                if (!isset($_COOKIE['username'])){
                    echo '<a class="btn btn-sm btn-outline-secondary" href="login.php">登录</a>';
                }
            ?>
            <?php
                if (isset($_COOKIE['username']) && isset($_SESSION['admin'])) {
                    echo '<a href="manage.php" class="btn btn-sm btn-outline-secondary">管理</a>';
                }
            ?>

        </div>
    </div>
</header>

<div class="nav-scroller py-1 mb-2">
    <nav class="nav d-flex justify-content-between">
        <a class="p-2 text-muted" href="index.php">首页</a>
        <a class="p-2 text-muted" href="blog.php">博友</a>
        <a class="p-2 text-muted" href="photo.php">相册</a>
    </nav>
</div>

<div id="carouselExampleControls" class="carousel slide mgb20" data-ride="carousel">
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img class="d-block w-100" src="./images/1.jpg" alt="First slide">
        </div>
        <div class="carousel-item">
            <img class="d-block w-100" src="./images/2.jpg" alt="Second slide">
        </div>
        <div class="carousel-item">
            <img class="d-block w-100" src="./images/3.jpg" alt="Third slide">
        </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
    </a>
</div>
