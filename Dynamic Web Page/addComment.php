<?php

require('connect.php');

if(isset($_POST) & !empty($_POST)){
	$name = mysqli_real_escape_string($connection, $_POST['name']);
	$content = mysqli_real_escape_string($connection, $_POST['content']);

	$sql = "INSERT INTO comments (name, content) VALUES ('$name', '$content')";
	$res = mysqli_query($connection, $sql) or die(mysqli_error($connection));
	if($res){
		$smsg = "Your Comment Submitted Successfully";
	}else{
		$fmsg = "Failed to Submit Your Comment";
	}

}