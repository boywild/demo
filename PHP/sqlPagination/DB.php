<?php


    /**
     * page_size page_index
     * code message info->count total_page data[]
     */
    class DB
    {
        private $dsn;
        private $username;
        private $password;
        private $charset;
        /**
         * @var PDO
         */
        private $pdoInstance;
        private $pdoStmt;

        public function __construct($config = [])
        {
            $this->dsn = $config['dsn'];
            $this->username = $config['username'];
            $this->password = $config['password'];
            $this->charset = $config['charset'];
            $this->connect();
        }

        private function connect()
        {
            if (!$this->pdoInstance) {
                $options = [
                    PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES' . $this->charset
                ];
                $this->pdoInstance = new PDO($this->dsn, $this->username, $this->password);
                $this->pdoInstance->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            }

        }

        public function query($sql, $params = [])
        {
            if (!is_array($params)) {
                $params = [$params];
            }
            $this->pdoStmt = $this->pdoInstance->prepare($sql);
            $index = 1;
            foreach ($params as $key) {
                $this->pdoStmt->bindValue($index++, $key[0] ?? $params, $key[1] ?? PDO::PARAM_INT);
            }
            $res = $this->pdoStmt->execute();
            if (!$res) {
                throw new MYSQLException($this->pdoStmt->errorInfo()[2], $this->pdoStmt->errorCode());
            }
            $data = $this->pdoStmt->fetchAll(PDO::FETCH_ASSOC);
            return $data;
        }
    }

