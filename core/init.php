<?php

// Require các thư viện PHP
require_once 'admin/classes/DB.php';
//require_once 'admin/classes/Session.php';
require_once 'admin/classes/Functions.php';

// Kết nối database
$db = new DB();
$db->connect();
$db->set_char('utf8');

$_DOMAIN = 'http://localhost:8888/AppForChildren/';


 $user='';


// Lấy thông tin website


?>