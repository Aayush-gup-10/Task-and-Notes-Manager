const express = require('express')

const { db } = require('./db')
const taskRoute = require('./routes/api')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', express.static(__dirname + '/public'))

app.use('/tasks', taskRoute)

db.sync({force : true})
  .then(() => {
    app.listen(3333)
  })
  .catch((err) => {
    console.error(err)
  })