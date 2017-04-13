const http = require('http')
const fs = require('fs')
const pify = require('pify')
const readFile = pify(fs.readFile)

const server = http.createServer((req, res) => {
  return Promise.all([
    readFile('foo.txt', 'utf8'),
    readFile('bar.txt', 'utf8')
  ])
  .then(results => {
    return results.join('\n')
  })
  .then(data => {
    return res.end(data)
  })
  .catch(error => {
    res.writeHead(500)
    res.end(error.message)
  })
})

server.on('listening', () => {
  console.log('listening on http://0.0.0.0:3000')
})

server.listen(3000)
