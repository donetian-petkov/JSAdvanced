<?php

require('connect.php');

$query = "SELECT * FROM comments";

if ($result = $connection->query($query)) {
    while ($row = $result->fetch_assoc()) {
        $name = $row["name"];
        $comment = $row["content"];
        $date = $row["submit_date"];

        echo '<div class="comment-section-comment">
              <article class="comment-section-info">
              <h5>Име: '.$name.'</h5>
              <h5>Дата: '.$date.'</h5>
              </article>
              <article class="comment-section-content">
              <p>'.$comment.'</p>
              </article>
              </div>';
    }
    $result->free();
}
?>