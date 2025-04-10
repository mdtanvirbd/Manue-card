<?php
session_start();
if (!isset($_SESSION['member_id'])) {
    header("Location: login.php"); // Redirect if not logged in
    exit();
}

echo "Welcome, " . $_SESSION['member_name'] . "!<br>";
echo "This is your dashboard.<br>";
echo "<a href='logout.php'>Logout</a>";

?>