<?php


    class database
    {
        protected $link;
        protected $dbhost;
        protected $dbuser;
        protected $dbpwd;
        protected $dbname;
        protected $port;
        protected $charset;

        function __construct($config)
        {
            $this->dbhost = $config['dbhost'];
            $this->dbuser = $config['dbuser'];
            $this->dbpwd = $config['dbpwd'];
            $this->dbname = $config['dbname'];
            $this->port = $config['port'];
            $this->charset = $config['charset'];
            $this->connect();
        }


        public function getInstance($config)
        {
            if (!isset(self::$link)) {
                self::$link = new self($config);
            }
            return self::$link;
        }

        public function connect()
        {
            $this->link = mysqli_connect($this->dbhost,  $this->dbuser, $this->dbpwd, $this->dbname, '3306');
            mysqli_set_charset($this->link, $this->charset);
            if (mysqli_connect_errno()) {
                printf("Connect failed: %s\n", mysqli_connect_error());
                exit();
            }
        }

        /**
         * @param $table
         * @param $data
         * @return int|string
         */
        // insert into table (xx,xx) values (xx,xx)
        public function insert($table, $data)
        {
            $key = join(',', array_keys($data));
            $value = join(',', array_values($data));
            $sql = "insert into {$table} ({$key}) values ({$value})";
            mysqli_query($this->link, $sql);
            return mysqli_insert_id($this->link);
        }

        /**
         * @param $table
         * @param $data
         * @param null $where
         * @return int
         */
        // update table set key=value where id=1
        public function update($table, $data, $where = null)
        {
            foreach ($data as $key => $value) {
                if ($str = null) {
                    $str = '';
                } else {
                    $str = ",";
                }
                $str .= $key . "='" . $value . "'";
            }
            $sql = "update {$table} set {$str}" . ($where == null ? '' : 'where' . $where);
            mysqli_query($this->link, $sql);
            return mysqli_affected_rows($this->link);
        }

        /**
         * @param $table
         * @param $where
         * @return int
         */
        // delete from table where id=1
        public function delete($table, $where)
        {
            $where = $where == null ? '' : 'where' . $where;
            $sql = "delete from {$table}" . $where;
            mysqli_query($sql);
            return mysqli_affected_rows($this->link, $sql);
        }

        /**
         * @param $link
         * @param $sql
         * @param int $resultType
         * @return array|null
         */
        public function fetchOne($sql, $resultType = MYSQLI_ASSOC)
        {
            $res = mysqli_query($this->link, $sql);
            if (!$res) {
                printf("Error: %s\n", mysqli_error($this->link));
                exit();
            }
            $row = mysqli_fetch_array($res, $resultType);
            return $row;
        }

        /**
         * @param $link
         * @param $sql
         * @param int $resultType
         * @return array
         */
        public function fetchAll($sql, $resultType = MYSQLI_ASSOC)
        {
            $res = mysqli_query($this->link, $sql);
            $row = mysqli_fetch_all($res, $resultType);
            while (@$row = mysqli_fetch_array($res, $resultType)) {
                $rows[] = $row;
            }
            return $rows;
        }

        /**
         * @param $link
         * @param $sql
         * @return int
         */
        public function getResultNum($sql)
        {
            $res = mysqli_query($this->link, $sql);
            return mysqli_num_rows($res);
        }
    }