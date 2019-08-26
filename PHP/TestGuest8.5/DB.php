<?php
    /**
     * Class DB
     * code message info->data count page
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
                $this->pdoInstance = new PDO($this->dsn, $this->username, $this->password);
                $this->pdoInstance->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            }
        }

        public function query($sql, $params=[])
        {
            if (!is_array($params)) {
                $params = [$params];
            }
            $this->pdoStmt = $this->pdoInstance->prepare($sql);
            $index = 1;
            foreach ($params as $key) {
                $this->pdoStmt->bindValue($index++, $key[0], $key[1] ?? PDO::PARAM_INT);
            }
            $re = $this->pdoStmt->execute();
            if (!$re) {
                throw new MYSQLException($this->pdoStmt->errorInfo()[2], $this->pdoStmt->errorCode());
            }
            $data = $this->pdoStmt->fetchAll(PDO::FETCH_ASSOC);
            return $data;
        }

    }


    class MYSQLException extends Exception
    {
    }