//net不一样的地方 回调是一个socket

const net = require('net')
// 通道里面写数据 write
// 读数据  on(data,)
const server = net.createServer((socket) => {
    socket.on('data', function(buffer) {
        console.log(buffer, buffer.toString())
    })
})
server.listen(4000,() => {
    console.log('listner at port:4000')
})


// 半双工通信的时序
// 同一时间内只有一端通信。

// 全双工通信，包序号 seq
// TCP会粘包