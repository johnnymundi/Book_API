const mongoose = require('mongoose')

function databaseConnection() {
  mongoose.connect(process.env.DATABASE_URI, {
    useNewUrlParser: true
  })

  const db = mongoose.connection
  db.on('error', (err) => console.error(err))
  db.once('open', () => console.log('Successfully connected to database'))
}

module.exports = databaseConnection