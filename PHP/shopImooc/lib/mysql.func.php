<?php
    require 'database.class.php';
    global $db;
    $config = array(
        'dbhost' => 'localhost',
        'dbuser' => 'root',
        'dbpwd' => '',
        'dbname' => 'shopImooc',
        'charset' => 'utf8',
        'port' => '3306'
    );
    $db = new database($config);


    // insert into table (xx,xx) values (xx,xx)
    function dbinsert($table, $data)
    {
        return $GLOBALS['db']->insert($table, $data);
    }


    // update table set key=value where id=1
    function dbupdate($table, $data, $where = null)
    {
        return $GLOBALS['db']->update($table, $data, $where);
    }


    // delete from table where id=1
    function dbdelete($table, $where)
    {
        return $GLOBALS['db']->delete($table, $where);
    }

    function getOne($sql, $resultType = MYSQLI_ASSOC)
    {
        return $GLOBALS['db']->fetchOne($sql, $resultType);
    }


    function getAll($sql, $resultType = MYSQLI_ASSOC)
    {
        return $GLOBALS['db']->fetchAll($sql, $resultType = MYSQLI_ASSOC);
    }

    function getNum($sql)
    {
        return $GLOBALS['db']->getResultNum($sql);
    }
