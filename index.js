const express= require('express');
const http= require('http');
const socketio= require('socket.io');

const app= express();
const server= http.createServer(app);
const io=socketio(server);

io.on('connection', (socket)=>{
    console.log('a user connected', socket.id);


    socket.on('msg_send', (data) =>{
        console.log(data);
       // io.emit('msg_rd', data);
       //socket.emit('msg_rd', data);
       socket.broadcast.emit('msg_rd', data);
    })
});

app.use('/', express.static(__dirname + '/public'));
server.listen(4000,()=>{
    console.log('Server started');
});