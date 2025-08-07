<?php
include 'cors.php';
include 'db_connect.php';
require 'vendor/autoload.php'; // for JWT

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

$jwt_secret = "your_secret_key"; // Change this!

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);
    $username = $data['username'] ?? '';
    $password = $data['password'] ?? '';

    $stmt = $conn->prepare("SELECT user_id, role FROM users WHERE username = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $stmt->bind_result($user_id, $role);
    if ($stmt->fetch()) {
        $stmt->close();
        $stmt2 = $conn->prepare("SELECT password_hash FROM passwords WHERE user_id = ? AND is_current = 1");
        $stmt2->bind_param("i", $user_id);
        $stmt2->execute();
        $stmt2->bind_result($hash);
        if ($stmt2->fetch() && password_verify($password, $hash)) {
            $payload = [
                "user_id" => $user_id,
                "role" => $role,
                "exp" => time() + 60*60*24 // 1 day
            ];
            $jwt = JWT::encode($payload, $jwt_secret, 'HS256');
            echo json_encode(['success' => true, 'token' => $jwt]);
            exit;
        }
    }
    echo json_encode(['success' => false, 'error' => 'Invalid credentials']);
    exit;
}
?>