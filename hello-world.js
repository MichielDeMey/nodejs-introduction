          const fs = require('fs')

          fs.readFile('world.txt', 'utf8', (err, data) => {
            if (err) throw err
            console.log(data)
          })

          console.log('hello, ')