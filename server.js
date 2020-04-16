const express = require('express')

const { db } = require('./db')
const taskRoute = require('./routes/api')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', express.static(__dirname + '/Public'))

app.use('/tasks', taskRoute)

// app.get('/', function(request, response) {
//   response.send('Hello World!');
//   });

db.sync()
  .then(() => {
    app.listen(process.env.PORT || 3333)
  })
  .catch((err) => {
    console.error(err)
  })