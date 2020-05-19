const eventLoop = {
  queue: [],
  timeoutQueue: [],
  fsQueue: [],
  loop() {
    while(this.queue.length) {
      const cb = this.queue.shift()
      cb()
    }

   /**
    * 在默认情况下，使用 window.setTimeout() 时，
    * this 关键字会指向 window （或 global）对象。
    * 当类的方法中需要 this 指向类的实例时，
    * 你可能需要显式地把 this 绑定到回调函数，就不会丢失该实例的引用。
    */
    setTimeout(this.loop.bind(this), 50)
    // this.loop.bind(this)
  },
  add(cb) {
    this.queue.push(cb)
  }
}

eventLoop.loop()

setTimeout(() => {
  eventLoop.add(() => {
    console.log(1)
  })
}, 1000)

setTimeout(() => {
  eventLoop.add(() => {
    console.log(2)
  })
}, 5000)

