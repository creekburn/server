const express = require('express')
const app = express()

// Logs all requests
app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.path}`)
  next()
})

// acquire specification for server
const specs = [require('./test-api.js')]

// apply middleware from this project
const middleware = require('../lib/spec-middleware.js')
app.use(middleware(specs))

// start express server
app.listen(3000, () => console.log('Application Ready'))
