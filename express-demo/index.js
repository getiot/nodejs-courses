const express = require('express');

const app  = express();
const port = 3000;

// 设定根路由显示内容
app.get('/', (req, res) => res.send('Hello, Express!'));

// 监听端口
app.listen(port, () => console.log(`Example app listening on http://localhost:${port}`));