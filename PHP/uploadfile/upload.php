<?php


    class upload
    {
        protected $fileName;
        protected $maxSize;
        protected $allowMime;
        protected $allowExt;
        protected $uploadPath;
        protected $imgFlag;
        protected $fileInfo;
        protected $ext;
        protected $error;

        public function __construct($fileNme = 'myFile', $uploadPath = 'uploads', $maxSize = 5242880, $allowExt = array('jpeg', 'jpg', 'png', 'gif'), $allowMime = array('image/jpeg', 'image/png', 'image/gif'), $imgFlag = true)
        {
            $this->fileName = $fileNme;
            $this->maxSize = $maxSize;
            $this->allowMime = $allowMime;
            $this->allowExt = $allowExt;
            $this->uploadPath = $uploadPath;
            $this->imgFlag = $imgFlag;
            $this->fileInfo = $_FILES[$this->fileName];
        }

        protected function checkError()
        {
            if (!is_null($this->fileInfo)) {
                if ($this->fileInfo['error'] > 0) {
                    switch ($this->fileInfo['error']) {
                        case 1:
                            $this->error = '超过了php配置文件中upload_max_filesize选项的值';
                            break;
                        case 2:
                            $this->error = '超过了表单中MAX_FILE_SIZE的值';
                            break;
                        case 3:
                            $this->error = '文件部分被上传';
                            break;
                        case 4:
                            $this->error = '没有选择上传文件';
                            break;
                        case 6:
                            $this->error = '没有找到临时目录';
                            break;
                        case 7:
                            $this->error = '文件不可写';
                            break;
                        case 8:
                            $this->error = '文件所上传中断';
                            break;
                    }
                    return false;
                } else {
                    return true;
                }
            } else {
                $this->error = '上传出错';
                return false;
            }


        }

        protected
        function checkSize()
        {
            if ($this->fileInfo['size'] > $this->maxSize) {
                $this->error = '上传文件过大';
                return false;
            }
            return true;
        }

        protected function checkExt()
        {
            $this->ext = pathinfo($this->fileInfo['name'], PATHINFO_EXTENSION);
            if (!in_array($this->ext, $this->allowExt)) {
                $this->error = '不允许的扩展名';
                return false;
            }
            return true;
        }

        protected function checkMime()
        {
            if (!in_array($this->fileInfo['type'], $this->allowMime)) {
                $this->error = '不允许的文件类型';
                return false;
            }
            return true;
        }

        protected function checkTrueImg()
        {
            if (!@getimagesize($this->fileInfo['tmp_name'])) {
                $this->error = '不是真实图片';
                return false;
            }
            return true;
        }

        protected function checkHTTPpost()
        {
            if (!is_uploaded_file($this->fileInfo['tmp_name'])) {
                $this->error = '不是通过HTTP POST方式上传';
                return false;
            }
            return true;
        }

        protected function showError()
        {
            exit('<span style="color:red;">' . $this->error . '</span>');
        }

        protected function checkUploadPath()
        {
            if (!file_exists($this->uploadPath)) {
                mkdir($this->uploadPath, '077', true);
            }
        }

        protected function getUniName()
        {
            return md5(uniqid(microtime(true), true));
        }

        public function uploadFile()
        {
            if ($this->checkError() && $this->checkSize() && $this->checkExt() && $this->checkMime() && $this->checkTrueImg() && $this->checkHTTPpost()) {
                $this->checkUploadPath();
                $this->uniName = $this->getUniName();
                $this->destination = $this->uploadPath . '/' . $this->uniName . '.' . $this->ext;
                if (@move_uploaded_file($this->fileInfo['tmp_name'], $this->destination)) {
                    return $this->destination;
                } else {
                    $this->error = '文件移动失败';
                    $this->showError();
                }
            } else {
                $this->showError();
            }
        }

    }