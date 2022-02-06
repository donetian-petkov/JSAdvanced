<?php
	$connection = mysqli_connect('localhost', 'unpvik5v68xcd', 'glpsj34xmr0s', 'dbn2gtkaheoc3x');

	if(!$connection){
		echo "Error: Unable to connect to MySQL." . PHP_EOL;
    	echo "Debugging errno: " . mysqli_connect_errno() . PHP_EOL;
    	echo "Debugging error: " . mysqli_connect_error() . PHP_EOL;
    	exit;
	} else {
        echo "Success!";
        }
?>
