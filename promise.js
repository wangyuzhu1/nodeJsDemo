// (function() {
//   const prom = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // reject(new Error(3))
//       resolve()
//     }, 300)
//   })
//   .then().catch(() => {
//     console.error('error11111')
//   }).catch(() => {
//     console.log('error!!!')
//   })
  
  
//   // console.log(prom, '-----now')
  
//   // setTimeout(() => {
//   //   console.log(prom, '-----after 500mm')
//   // }, 500)
// })()

function prom (round) {
  return new Promise((resolve, reject) => {
    if(Math.random() > 0) {
      resolve(11)
    } else {
      const err = new Error()
      err.round = round
      reject(err)
    }
  })
}

const prom1 = prom(1).then((res) => {
  console.log(res)
  return res
})

setTimeout(() => {
  console.log(prom1, 'prom1')
}, 0)
// const prom2 = prom1.then(() => {
//   return prom(2)
// })
// const prom3 = prom2.then(() => {
//   console.log(3333)
// }).catch(err => {
//   console.log(err.round)
// })