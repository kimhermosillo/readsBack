const port = 7000
const app = require('./app')





app.listen(port)
  .on('error',     console.error.bind(console))
  .on('listening', console.log.bind(console, 'Listening on onoooko ' + port))
