const net = require('net')

const server = net.createServer((socket) => {
    setInterval(() => { 
        socket.write('Can you hear me?\r\n');
        socket.pipe(socket)
    }, 3000)
})

server.listen({
    port: 80
})
