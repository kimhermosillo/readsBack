const express = require('express')
const router = express.Router()

router.get('/', (request, response, next) => {
  queries.list()
    .then(books => {
      response.json({books})
    })
    .catch(next)
})
  

router.get('/', (request, response, next) => {
  queries.list()
    .then(authors => {
      response.json({authors})
    })
    .catch(next)
})