<?php

require('connect.php');

if(isset($_POST) & !empty($_POST)){
	$name = mysqli_real_escape_string($connection, $_POST['name']);
	$content = mysqli_real_escape_string($connection, $_POST['content']);

	$isql = "INSERT INTO comments (name, content) VALUES ('$name', '$content')";
	$ires = mysqli_query($connection, $isql) or die(mysqli_error($connection));
	if($ires){
		$smsg = "Your Comment Submitted Successfully";
	}else{
		$fmsg = "Failed to Submit Your Comment";
	}

}