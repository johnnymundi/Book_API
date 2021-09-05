const express = require('express')
const BookController = require('./controllers/BookController')
const BookMiddleware = require('./midllewares/BookMiddleware')

const routes = express.Router()

routes.get('/books', BookController.index)
routes.post('/books', BookController.store)
routes.put('/books/:id', BookMiddleware.validateID, BookController.update)
routes.delete('/books/:id', BookMiddleware.validateID, BookController.delete)
routes.patch('/books/:id', BookMiddleware.validateID, BookController.updateOne)

module.exports = routes