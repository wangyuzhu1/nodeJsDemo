// 使用 fs.watch（）监听器的示例。
const fs = require('fs')

fs.watch('./', {}, (eventType, filename) => {
  
  if (filename) {
    console.log(filename);
    // 打印: <Buffer ...>
    fs.close('./')
  }
});