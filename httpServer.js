const http = require('http')
const fs = require('fs')
const url = require('url')
const querystring = require('querystring')
const express = require('express')

// const koa = require('koa')
// const app = koa()
const app = express()

const game = require('./game')

// 玩家胜利的次数，超过3则一直返回500
var playerWinCount = 0
// 玩家上次出的手势
var preVal = ''
// 玩家连续出同一个手势的次数，超过三次提示
var playerSameCount = 0

/** 版本3 */
// 中间键
app.get('/favicon.ico', function(request, response) {
  response.status(200)
})

app.get('/game', function(request, response, next) {
  const key = request.query.action
  if (!key) {
    response.status(400)
    response.send()
    return
  }
  response.key = key
  // 洋葱模型
  next()
}, function(request, response) {
  const key = response.key
  const gameVal = game(key)
  if (preVal === key) {
    playerSameCount ++
  } else {
    playerSameCount = 0
    preVal = key
  }
  if (playerSameCount >= 3) {
    response.status(500)
    response.send('你玩赖，不跟你玩了')
    return
  }
  response.status(200)
  if (gameVal === 0) {
    response.send('平局')
  } else if(gameVal === 1) {
    playerWinCount ++
    response.send('你赢了')
    if (playerWinCount >= 3) {
      response.status(200)
      response.send('你太厉害了，不跟你玩了')
      return
    }
  } else {
    response.send('你输了')
  }
})
app.get('/', function(request, response) {
  response.status(200)
  response.send(fs.readFileSync(__dirname + '/index.html', 'utf-8'))
})
/** 版本2 */
// app.get('/favicon.ico', function(request, response) {
//   response.writeHead(200)
//     response.end()
// })

// app.get('/game', function(request, response) {
//   const requestUrl = url.parse(request.url)
//   const key = querystring.parse(requestUrl.query).action
//     const gameVal = game(key)
//     if (playerWinCount >= 3) {
//       response.writeHead(200)
//       response.end('你太厉害了，不跟你玩了')
//       return
//     }
//     if (preVal === key) {
//       playerSameCount ++
//     } else {
//       playerSameCount = 0
//       preVal = key
//     }
//     if (playerSameCount >= 3) {
//       response.writeHead(500)
//       response.end('你玩赖，不跟你玩了')
//       return
//     }
//     response.writeHead(200)
//     if (gameVal === 0) {
//       response.end('平局')
//     } else if(gameVal === 1) {
//       playerWinCount ++
//       response.end('你赢了')
//     } else {
//       response.end('你输了')
//     }
// })
// app.get('/', function(request, response) {
//   response.writeHead(200)
//   fs.createReadStream(__dirname + '/index.html').pipe(response)
// })

app.listen(3000)


/** 版本1 */
// http.createServer(function(request, response) {
  // const requestUrl = url.parse(request.url)
  // if(request.url === '/favicon.ico') {
  //   response.writeHead(200)
  //   response.end()
  //   return
  // }
  // if (requestUrl.pathname === '/game') {
  //   const key = querystring.parse(requestUrl.query).action
  //   const gameVal = game(key)
  //   if (playerWinCount >= 3) {
  //     response.writeHead(200)
  //     response.end('你太厉害了，不跟你玩了')
  //     return
  //   }
  //   if (preVal === key) {
  //     playerSameCount ++
  //   } else {
  //     preVal = key
  //   }
  //   if (playerSameCount >= 3) {
  //     response.writeHead(500)
  //     response.end('你玩赖，不跟你玩了')
  //     return
  //   }
  //   response.writeHead(200)
  //   if (gameVal === 0) {
  //     response.end('平局')
  //   } else if(gameVal === 1) {
  //     playerWinCount ++
  //     response.end('你赢了')
  //   } else {
  //     response.end('你输了')
  //   }
  // }
  // else if(request.url === '/'){
  //   response.writeHead(200)
  //   fs.createReadStream(__dirname + '/index.html').pipe(response)

  // } 
  // else {
  //   response.writeHead(200)
  //   response.end('aaa')
  // }
// }).listen(3000)