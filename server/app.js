const express = require('express');


const app = express();

app.get('/chat', (req, res) => {
  res.send('<h1>Hello world</h1>');
});



const server = app.listen(3001, function() {
    console.log('server running on port 3001');
});


const io = require('socket.io')(server, {
  cors: {
    origin: '*',
    methods: ["GET", "POST"]
  }
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.broadcast.emit('hi');
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
  });
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});