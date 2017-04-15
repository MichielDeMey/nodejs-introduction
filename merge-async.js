const fs = require('fs')
const pify = require('pify')
const readFile = pify(fs.readFile)

async function main () {
  const foo = await readFile('foo.txt')
  const bar = await readFile('bar.txt')

  console.log([foo, bar].join('\n'))
}

main().catch(err => {
  console.error(err)
})
