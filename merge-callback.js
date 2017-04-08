const fs = require('fs')
const async = require('async')

async.parallel([
  callback => fs.readFile('foo.txt', 'utf8', callback),
  callback => fs.readFile('bar.txt', 'utf8', callback)
], (error, results) => {
  if (error) return console.error(error)
  console.log(results.join('\n'))
})