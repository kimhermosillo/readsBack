const express = require('express')
const port = 7000
const app = express()

app.get('/', (request, response, next) => {
  response.send('hiiiiii')
})

app.listen(port, () => {
  console.log(`running on ${port}`)
})

module.exports = app