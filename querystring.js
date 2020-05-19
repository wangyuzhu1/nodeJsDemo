const querystring = require('querystring')

const url = 'http://localhost:3000/game?action=rock'

const decodeUrl = querystring.decode(url)
const encodeUrl = querystring.encode(url)
const escapeUrl = querystring.escape(url)
const parseUrl = querystring.parse(url)
const stringfyUrl = querystring.stringify(url)
const enescapeUrl = querystring.unescape(url)

console.log(decodeUrl, '-----decodeUrl')
console.log(encodeUrl, '-----encodeUrl')
console.log(escapeUrl, '-----escapeUrl')
console.log(parseUrl, '-----parseUrl')
console.log(stringfyUrl, '-----stringfyUrl')
console.log(enescapeUrl, '-----enescapeUrl')
