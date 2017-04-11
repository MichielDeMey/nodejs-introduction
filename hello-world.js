const fs = require('fs')
const { stdout } = process

fs.readFile('world.txt', 'utf8', (err, data) => {
  if (err) throw err
  stdout.write(data)
})

stdout.write('hello, ')
