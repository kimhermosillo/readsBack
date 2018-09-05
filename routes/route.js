const express = require('express')
const router = express.Route()
const queries = require('../queries')

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

router.get('/', (request, response, next) => {
  queries.list()
    .then(books_authors => {
      response.json({books_authors})
    })
    .catch(next)
})

router.post('/', (request, response, next) => {
  queries.create(request.body)
    .then(books => {
      response.status(201).json({books})
    })
    .catch(next)
})
router.delete('/:id', (request, response, next) => {
  queries.delete(request.params.id)
    .then(() => {
      response.status(204).json({deleted: true})
    })
    .catch(next)
})
  
router.put('/:id', (request, response, next) => {
  queries.update(request.params.id, request.body)
    .then(books => {
      response.json({books})
    })
    .catch(next)
})

module.exports = router