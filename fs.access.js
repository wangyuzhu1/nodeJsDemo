const fs = require('fs')

/** 检查文件是否存在当前目录中 */
testFs('dir.js', fs.constants.F_OK, (err) => {
  console.log(err ? '不存在': '存在')
})
testFs('package.json', fs.constants.F_OK, err => {
  console.log(err)
})
/** 检查文件是否可读 */
testFs('dir.js', fs.constants.R_OK, err => {
  console.log(err, '检查文件是否可读')
})

/** 检查文件是否可写 */
testFs('dir.js', fs.constants.W_OK, err => {
  console.log(err, '检查文件是否可写')
})

function testFs(fileName, fsType, cb) {
// 判断文件是否存在当前目录
fs.access(fileName, fsType, cb)
}