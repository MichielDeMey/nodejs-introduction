const fs = require('fs')
const pify = require('pify')
const readFile = pify(fs.readFile)

Promise.all([
  readFile('foo.txt', 'utf8'),
  readFile('bar.txt', 'utf8')
])
.then(results => {
  console.log(results.join('\n'))
})
.catch(error => {
  console.error(error)
})