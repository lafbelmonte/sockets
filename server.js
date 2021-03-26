// const WebSocket = require('ws');

// const wss = new WebSocket.Server({ port: 80 });

// wss.on('connection', function connection(ws) {
//   ws.on('message', function incoming(message) {
//     console.log('received: %s', message);
//   });

//   setInterval(function intervalFunc() {
//     ws.send('something')
//   }, 3000);

// });

const http = require('http')

const nodeServer = http.createServer();
const server = require('socket.io')(nodeServer);

nodeServer.listen(80);

server.sockets.on('connection', (socket) => {
    setInterval(function intervalFunc() {
    socket.emit('outgoing', 'Hello over websockets');
  }, 3000);
});

