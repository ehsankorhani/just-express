const express = require('express')
const helmet = require('helmet')
const config = require('dotenv').config

const userRoutes = require('./routes/userRoutes')

const PORT = 3000 || process.env.PORT

const app = express()

app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended : false }))

app.use('/users', userRoutes)

app.get('/', (req, res) => {
  return res.send(`welcome to express`)
})

app.listen(PORT, () => {
  console.log(`express is running on port ${PORT}`)
})