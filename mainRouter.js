const path = require('path')
const express = require('express')

const mainRouter = express.Router()

mainRouter.get('/', (req, res) => {
    res.send('Hello World!. I\'m a Node app.')
})

mainRouter.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'about.html'))
})

module.exports = mainRouter