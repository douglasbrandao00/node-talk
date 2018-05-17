const express = require('express')
const path = require('path')
const bodyParser = require('body-parser').json()
const cookieParser = require('cookie-parser')

const routes = require('./routes')

const app = express()
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser)
app.use('/', routes)

module.exports = app
