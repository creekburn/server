const express = require('express')
const app = express()
const middleware = require('../lib/spec-middleware.js')

const specs = [{}]

app.use(middleware(specs))
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000)