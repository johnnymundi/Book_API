require('dotenv').config()
const express = require('express')
const routes = require('./routes')
const databaseConnection = require('./database')

// database connection
databaseConnection()

const app = express()
const port = 3000

app.use(express.json())
app.use(routes)

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`)
})
