const mysql = require('mysql2');
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json()); // JSON 요청 해석

// DB 연결
const conn = mysql.createConnection({
    host: 'DB주소',
    user: 'DB유저',
    password: 'DB비밀번호',
    database: 'DB이름'
});

// 데이터 등록
app.post('/api/register', (req, res) => {
    const { username, password } = req.body;

    const sql = 'INSERT INTO users (username, password) VALUES (?, ?)';
    conn.query(sql, [username, password], (err, result) => {
        if (err) return res.status(500).send('DB 저장 실패');
        res.send('회원가입 성공');
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
