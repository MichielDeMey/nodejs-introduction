const fs = require('fs')

const multistream = require('multistream')
const through = require('through2')

multistream([
  fs.createReadStream('foo.txt'),
  fs.createReadStream('bar.txt')
])
.pipe(through((chunk, enc, cb) => {
  cb(null, chunk + '\n')
}))
.pipe(process.stdout)
