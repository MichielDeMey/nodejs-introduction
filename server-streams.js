const http = require('http')
const fs = require('fs')

const multistream = require('multistream')
const through = require('through2')

const server = http.createServer((req, res) => {

  multistream([
    fs.createReadStream('foo.txt'),
    fs.createReadStream('bar.txt')
  ])
  .on('error', throwError)
  .pipe(through((chunk, enc, cb) => {
    cb(null, chunk + '\n')
  }))
  .on('error', throwError)
  .pipe(res)

  function throwError (error) {
    res.writeHead(500)
    res.end(error.message)
  }

})

server.on('listening', () => {
  console.log('listening on http://0.0.0.0:3000')
})

server.listen(3000)
