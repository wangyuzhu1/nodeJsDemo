
// try {
  getJob((err, res) => {
    if (err instanceof Error) {
      return console.log('cry')
    }
   console.log(res, 'smail')
 })
// } catch (error) {
  // 无法捕捉捕捉到错误
// }


function getJob(cb) {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      cb(null, 'success')
    } else {
      cb(new Error('fail'))
      /**
       * 无法捕捉捕捉到错误，因为setTimeout执行以后，
       * 对应的回调函数开辟了新的调用栈并作为栈底函数，与getJob的调用栈无关，
       * 无法通过getJob调用栈的错误捕捉方法捕捉到该抛出错误。
       * */
      // throw new Error('fail!')
    }
  }, 100)
}