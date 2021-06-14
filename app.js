// 複数ページへの分岐ページ
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const path = require('path');

const { Server } = require("socket.io");
const io = new Server(server);

// ローカルファイル読み込み
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    // res.send('<h1>Hello world</h1>');
    console.log('index');
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/janken', (req, res) => {
    console.log('janken');
    res.sendFile(__dirname + '/views/janken.html');
});


require('./websocket/janken.js')(io);

server.listen(3000, () => {
    console.log('listening on *:3000');
});

