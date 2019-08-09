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
_close();
?>
<div id="footer">
	<span>本程序执行耗时为: <?php echo  round((_runtime() - START_TIME),4)?>秒</span>
	<span>版权所有 翻版必究</span>
</div>