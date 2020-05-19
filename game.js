function  game(type) {
  const rdm = Math.random() * 3
  let smartVal = ''
  if (rdm > 2) {
    // 剪刀
    smartVal = 'scissor'
  } else if (rdm < 1) {
    // 石头
    smartVal = 'rock'
  } else {
    // 布
    smartVal = 'paper'
  }
  if (type === smartVal) {
    // 平局
    return 0
  } else if ((type === 'scissor' && smartVal === 'paper') || (type === 'rock' && smartVal === 'scissor') || (type === 'paper' && smartVal === 'rock')) {
    // 你赢了
    return 1
  } else {
    // 你输了
    return -1
  }
}

module.exports = game