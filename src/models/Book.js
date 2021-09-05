const { Schema, model } = require('mongoose')

const BookSchema = new Schema({
  _id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  publisher: {
    type: String,
    default: 'Não especificado'
  }
})

module.exports = model('Book', BookSchema)