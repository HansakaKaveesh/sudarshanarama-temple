<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Authorization, Content-Type");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
include 'cors.php';
include './db_connect.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);
    $username = $data['username'] ?? '';
    $password = $data['password'] ?? '';
    $role     = $data['role'] ?? 'student';

    if (!$username || !$password) {
        echo json_encode(['success' => false, 'error' => 'Missing fields']);
        exit;
    }

    $check = $conn->prepare("SELECT user_id FROM users WHERE username = ?");
    $check->bind_param("s", $username);
    $check->execute();
    $check->store_result();
    if ($check->num_rows > 0) {
        echo json_encode(['success' => false, 'error' => 'Username exists']);
        exit;
    }

    $stmt = $conn->prepare("INSERT INTO users (username, role) VALUES (?, ?)");
    $stmt->bind_param("ss", $username, $role);
    if ($stmt->execute()) {
        $user_id = $conn->insert_id;
        $hash = password_hash($password, PASSWORD_BCRYPT);
        $stmt2 = $conn->prepare("INSERT INTO passwords (user_id, password_hash, is_current) VALUES (?, ?, 1)");
        $stmt2->bind_param("is", $user_id, $hash);
        $stmt2->execute();
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false, 'error' => 'Registration failed']);
    }
    exit;
}
?>