const express = require('express')
const mainRouter = require('./mainRouter')

const app = express()
app.use(mainRouter)

const port = process.env.PORT || 3000
app.listen(port)
console.log('App running on port', port)