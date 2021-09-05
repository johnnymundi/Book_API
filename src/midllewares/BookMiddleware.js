const { validate: isUuid } = require('uuid')
const Book = require('../models/Book')

module.exports = {
  async validateID(request, response, next) {
    const { id } = request.params

    if(!isUuid(id)) {
      return response.status(400).json({ error: 'Invalid Book ID' })
    }

    try {
      const book = await Book.findById(id)
      response.book = book
      if(!book) {
        return response.status(404).json({ error: "Book not found" })
      }
    } catch (error) {
      return response.status(500).json({ error: error.message })
    }

    next()
  }
}