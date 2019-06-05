<?php
/**
 * Created by PhpStorm.
 * User: shiye
 * Date: 2019/5/23
 * Time: 10:52
 */
$dbType='\think\db\connector\Sqlsrv';//数据库类型
$host='192.168.5.200';//主机名
$dbName='supmes2019';//数据库名
$userName='tester';//用户名
$passWord='test2019';//密码
//创建dsn源 数据库类型:主机名;数据库名
$dsn="{$dbType}:host={$host};dbname={$dbName}";
//创建PDO对象
$pdo=new PDO($dsn,$userName,$passWord);
