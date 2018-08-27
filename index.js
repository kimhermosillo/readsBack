const app = require ('./app')
const port = parseInt(process.env.PORT || 7000)

app.listen(port)
  .on('error', console.error.bind(console))
  .on('listening', console.log.bind(console, 'trappin outta' + port))