<?php
// Set the feed URL.
//$feed_url = "https://www.denofgeek.com/feed/";

$feed_url = "https://www.gamespot.com/api/reviews/?api_key=9120f24aef34abfcba8177ecc401255f88906501&format=json&sort=publish_date:desc";

$options = array(
  'http'=>array(
    'method'=>"GET",
    'header'=> "User-Agent: Mozilla/5.0 (X11; CrOS x86_64 8172.45.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.64 Safari/537.36"
  )
);

$context = stream_context_create($options);

// Fetch the content.
// See http://php.net/manual/en/function.file-get-contents.php for more
// information about the file_get_contents() function.
$content = file_get_contents( $feed_url , false, $context);

// Set the Content-Type header.
header( 'Content-Type: application/json' );

// Display the content and exit.
echo $content;
?>
