<?php
    require './DB.php';

    class App
    {
        private $db;

        public function __construct()
        {
            $this->db = new DB([
                'dsn' => 'mysql:host=localhost;dbname=testguest;port=3306',
                'username' => 'root',
                'password' => '',
                'charset' => 'utf8',
            ]);
        }

        public function run()
        {
            try {
                $page_size = $_GET['page_size'] ?? '10';
                $page_index = $_GET['page_index'];
                $data = $this->pagination(intval($page_size), intval($page_index));
                $count = $this->getCount();
                $totalPage = ceil($count / $page_size);
                $info = [
                    "count" => $count,
                    "total_page" => $totalPage,
                    "data" => $data
                ];
                return $this->successData($info);
            } catch (Exception $e) {
                return $this->returnData($e->getCode(), $e->getMessage());
            }

        }

        public function pagination($pageSize, $pageIndex)
        {
            $sql = 'select * from tg_article order by tg_date limit ? offset ?';

            $limit = $pageSize;
            $offset = $pageSize * ($pageIndex - 1);
            $data = $this->db->query($sql, [
                [$limit, PDO::PARAM_INT],
                [$offset, PDO::PARAM_INT]
            ]);
            return $data;
        }

        public function getCount()
        {
            $sql = 'select count(tg_id) from tg_article order by tg_date DESC';
            $data = $this->db->query($sql);
            return $data[0]['count(tg_id)'];
        }

        public function successData($data)
        {
            $content = [
                'code' => 0,
                'message' => 'success',
                'info' => $data
            ];

            return json_encode($content);
        }

        public function returnData($code, $message, $data = [])
        {
            $content = [
                'code' => $code,
                'message' => $message,
                'info' => $data
            ];
            return json_encode($content);
        }
    }

    $app = new App();
    $re = $app->run();
    echo $re;
