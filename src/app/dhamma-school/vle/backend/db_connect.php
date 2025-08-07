<?php
// db_connect.php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Authorization, Content-Type");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

$host = "sql105.infinityfree.com";      // or your DB host
$user = "if0_39538259";   // your DB username
$pass = "QZbWWcZ0xfm6";   // your DB password
$db   = "if0_39538259_su_vle";   // your DB name

// Create connection
$conn = new mysqli($host, $user, $pass, $db);

// Check connection
if ($conn->connect_error) {
    http_response_code(500);
    die(json_encode([
        "success" => false,
        "error" => "Database connection failed: " . $conn->connect_error
    ]));
}

// Optional: Set charset to utf8mb4 for full Unicode support
$conn->set_charset("utf8mb4");
?>