const Book = require('../models/Book.js')
const {v4:uuid} = require('uuid');
const { json } = require('body-parser');

module.exports = {
  async index(request, response) {
    try {
      const books = await Book.find();
      return response.status(200).json({ books })
    } catch (error) {
      response.status(500).json({ 
        error: error.message }) 
    }
  },
  async store(request, response) {
    const { title, author, publisher } = request.body

   if(!title || !author) {
    return response.status(400).json({error: "Missing title or author."})
   }

    const book = new Book({
      _id: uuid(),
      title,
      author,
      publisher // só para garantir kkk
    })

    try {
      await book.save()

      return response.status(200).json({ 
        message: 'Book added successfully' })
    } catch (error) {
      response.status(400).json({ error: error.message })
      
    }
  },
  async update(request, response) {
    const {title, author} = request.body

    if(!title && !author) {
      return response.status(400).json({
        message: 'Title or author can not be empty!'
      })
    }

    if(title) response.book.title = title
    if(author) response.book.author = author

    try {
      await response.book.save()
      response.status(200).json({
        message: 'Book updated successfully!'
      })
    } catch (error) {
      response.status(500).json({ error: error.message })
    }
  },
  async delete(request, response) {
    try {
      await response.book.remove()
      return response.status(200).json({
        message: 'Book deleted successfully'
      })
    } catch (error) {
      response.status(500).json({ error: error.message })
    }
  },
  async updateOne(request, response) {
    const id = request.params.id
    const updates = request.body
    
    try {
      const post = await Book.findByIdAndUpdate(id, updates, {new: true})
      response.status(200).json({message: 'Successfully updated!'})

    } catch (error) {
      response.status(500).json({ error: error.message }) 
    }
  }
}