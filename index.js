const express = require('express')
const mainRouter = require('./mainRouter')

const app = express()
app.use(mainRouter)

app.listen(3000)
console.log('App running on port 3000')