// io.onにつながる
const socket = io();

const form = document.getElementById('form');
const input = document.getElementById('input');

var messages = document.getElementById('messages');


form.addEventListener('submit', function (e) {
    e.preventDefault();
    // 入力を取得
    if (input.value) {
        // socket.onに通信
        socket.emit('chat message', input.value);
        input.value = '';
    }
});

socket.on('chat message', function (msg) {
    var item = document.createElement('li');
    item.textContent = msg;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
});