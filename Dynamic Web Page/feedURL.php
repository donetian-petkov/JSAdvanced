<?php
// Set the feed URL.
//$feed_url = "https://www.denofgeek.com/feed/";

$feed_url = "https://lwlies.com/feed/";

// Fetch the content.
// See http://php.net/manual/en/function.file-get-contents.php for more
// information about the file_get_contents() function.
$content = file_get_contents( $feed_url );

// Set the Content-Type header.
header( 'Content-Type: application/rss+xml' );

// Display the content and exit.
echo $content;
?>
