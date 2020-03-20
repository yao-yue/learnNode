const buffer1 = Buffer.from('geekbang')
const buffer2 = Buffer.from([1,2,3,4])

const buffer3 = Buffer.alloc(20) //长度为20的空buffer

// console.log(buffer1)
// console.log(buffer2)
// console.log(buffer3)

// buffer2.writeInt8(12,0)      //0c
// console.log(buffer2)         //0c
// buffer2.writeInt16BE(512, 2) // 02 00
// console.log(buffer2)   

//buffer的读写 BE LE Int8 Int16  16进制 8占一位 16占2位
//BE（低位、高位）   BE高位放前面 LE低位放前面 00 02 
//二进制的编码  write(value, 0) write(value, 3) ..5

//protocol google语言无关的协议
const fs = require('fs')
const protobuf = require('protocol-buffers')
const schema = protobuf(fs.readFileSync(__dirname + '/test.proto', 'utf-8'))

console.log(schema)
const buffer = schema.Column.encode({
    id: 1,
    name: 'Node.js',
    price: 80.4   //出现精度问题80.4000015258789
})
console.log(schema.Column.decode(buffer))