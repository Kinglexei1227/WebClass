// backend/index.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// CORS 설정
app.use(cors());

// GET 요청 응답
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from Express!' });
});

// 서버 실행
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
