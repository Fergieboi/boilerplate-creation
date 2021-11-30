const path = require('path')

const envPath = path.join(__dirname, '.env')
require('dotenv').config({path: envPath})

const server = require('./server')

const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
  console.log('Listening on port', PORT)
  console.log("Process key is:", process.env.IMDB_KEYCODE)
})
