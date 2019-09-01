<?php
$filename=$_GET['filename'];
header('content-disposition:attachment;filename='.basename($filename));
header('content-langth:'.filesize($filename));
readfile($filename);