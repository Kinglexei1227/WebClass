<?php
// DB 연결 파일
$conn = new mysqli("DB서버IP", "DB계정", "비밀번호", "DB이름");

if ($conn->connect_error) {
    die("❌ DB 연결 실패: " . $conn->connect_error);
}
?>
