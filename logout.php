<?php
session_start();
session_destroy();
header("Location: index.html"); // Or login.php
exit();
?>