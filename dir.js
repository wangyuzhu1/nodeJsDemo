const fs = require('fs')
async function print(path) {
  const dirs = await fs.promises.opendir(path)
  // console.log(Object.prototype.toString.call(dirs), 'Object.prototype.toString.call(dirs)')
  for await(const dir of dirs) {
    // console.log(dir.name, 'dir')
    console.log(dir.name)
  }
}
print('./').catch(err => {
  console.error(err, 'aaaaas')
})