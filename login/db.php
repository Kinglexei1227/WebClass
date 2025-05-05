<?php
// db.php

$conn = new mysqli("localhost", "root", "비밀번호", "myproject");

if ($conn->connect_error) {
    die("데이터베이스 연결 실패: " . $conn->connect_error);
}
?>