// const WebSocket = require('ws');

// const ws = new WebSocket('ws://localhost:80');

// ws.on('open', function open() {
//   ws.send('something');
// });

// ws.on('message', function incoming(data) {
//   console.log(data);
// });

// ws.on('error', function(error) {
//     console.log(error)
// })


const ioClient = require('socket.io-client')
const client = ioClient.connect(`ws://localhost:80`, {transports: ['websocket']});

client.on('outgoing', (data) => {
  console.log(data)
});