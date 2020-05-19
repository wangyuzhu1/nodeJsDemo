console.log((async function() {
  throw new Error('111')
})())

console.log((function() {
  return new Promise((resolve, reject) => {
    reject(new Error('222'))
  })
})())