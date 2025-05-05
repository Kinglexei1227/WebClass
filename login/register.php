<?php
// DB 연결
$conn = new mysqli("localhost", "root", "비밀번호", "lhj_db");
if ($conn->connect_error) {
    die("DB 연결 실패: " . $conn->connect_error);
}

// 사용자 입력값 받기
$username = $_POST['username'];
$password = password_hash($_POST['password'], PASSWORD_DEFAULT); // 비밀번호 암호화

// INSERT 쿼리
$sql = "INSERT INTO users (username, password) VALUES (?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $username, $password);

if ($stmt->execute()) {
    echo "회원가입 성공!";
} else {
    echo "회원가입 실패: " . $stmt->error;
}

$conn->close();
?>