<?php

    class Image{
        private $info;
        private $image;
        public function __construct($src){
            $this->info=$this->getimageinfo($src);
            $this->image=$this->generateimage($this->info['type'],$src);
        }

        /**
         * 生成缩略图
         * @param $with 宽
         * @param $height 高
         */
        public function compresspicture($with,$height){
            $thumb=imagecreatetruecolor($with,$height);
            imagecopyresampled($thumb,$this->image,0,0,0,0,$with,$height,$this->info['width'],$this->info['height']);
            imagedestroy($this->image);
            $this->image=$thumb;
        }

        /**
         * 添加文字水印
         * @param $size 文字大小
         * @param $angle 文字角度
         * @param $x 起始x坐标
         * @param $y 起始Y坐标
         * @param $color 颜色
         * @param $fontfile 字体文件
         * @param $text 文字
         */
        public function fontmark($size,$angle,$x,$y,$color,$fontfile,$text){
            $col=imagecolorallocatealpha($this->image,$color[0],$color[1],$color[2],$color[3]);
            imagettftext($this->image,$size,$angle,$x,$y,$col,$fontfile,$text);
        }

        /**
         * 添加图片水印
         * @param $mark 水印图
         */
        public function imageMark($mark,$local,$alpha){
            $remarkinfo=$this->getimageinfo($mark);
            $remarkimage=$this->generateimage($remarkinfo['type'],$mark);
            imagecopymerge($this->image,$remarkimage,$local['x'],$local['y'],0,0,$remarkinfo['width'],$remarkinfo['height'],$alpha);
            imagedestroy($remarkimage);
        }

        /**
         * 获取图片信息
         * @param $iamge 图片
         * @return array 图片相关信息
         */
        public function getimageinfo($iamge){
            $info=getimagesize($iamge);
            return array(
                'width'=>$info[0],
                'height'=>$info[1],
                'type'=>image_type_to_extension($info[2],false),
                'mime'=>$info[3]
            );
        }

        /**
         * 生成图片
         * @param $type 图片类型 png/jpg/jpeg/gif
         * @param $image 图片
         * @return mixed
         */
        public function generateimage($type,$image){
            $createimage="imagecreatefrom{$type}";
            return $createimage($image);
        }

        /**
         * 输出图片
         */
        public function outputimage(){
            header("content-type:{$this->info['mime']}");
            $outimage="image{$this->info['type']}";
            $outimage($this->image);
        }

        /**
         * 保存图片
         * @param $name
         */
        public function saveimage($name){
            $outimage="image{$this->info['type']}";
            $outimage($this->image,$name.'.'.$this->info['type']);
        }

        /**
         * 销毁
         */
        public function destroyimage(){
            imagedestroy($this->image);
        }
    }


?>