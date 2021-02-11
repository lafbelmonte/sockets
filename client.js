const net = require('net')

const client = net.createConnection({
    port: 80
})

client.on('data', (data) => {
    console.log(data)
})