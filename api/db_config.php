<?php
	$db_user = 'user';
	$db_host = 'localhost';
	$db_pass = 'password';
	$db_base = 'base';

	$db = new mysqli($db_host, $db_user, $db_pass, $db_base);
	$db->set_charset('utf8');  
	
