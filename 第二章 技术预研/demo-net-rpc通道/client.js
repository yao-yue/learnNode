const net = require('net')

//创建一个socket
const socket = new net.Socket({})

socket.connect({
     host: '127.0.0.1',
     port: 4000
})

//单工通信
socket.write('good morning penguin!')