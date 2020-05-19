// const buffer1 = Buffer.from('abcdefg')
// const buffer2 = Buffer.from([1, 2, 3, 4])
// const buffer3 = Buffer.alloc(20)
// console.log(buffer1)
// console.log(buffer2)
// console.log(buffer3)

// // buffer1.writeInt8(12, 1)
// // console.log(buffer1, 'buffer1')

// // buffer2.writeInt8(12, 1)
// // buffer2.writeInt16BE(512, 1)
// buffer2.writeUInt16LE(512, 1)
// console.log(buffer2, 'buffer2')

const fs = require('fs')
const protobuf = require('protocol-buffers')

const schema = protobuf(fs.readFileSync(__dirname + '/test.proto', 'utf-8'))

console.log(schema, 'schema')

const buffer = schema.Collumn.encode({
  id: 1,
  name: 'geekbang',
  price: 88.4
})

console.log(buffer, 'buffer')

const DcodeBuf = schema.Collumn.decode(buffer)
console.log(DcodeBuf, 'DcodeBuf')