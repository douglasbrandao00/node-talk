const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const expressSession = require('express-session')
const methodOverride = require('method-override')

const routes = require('./routes')

const app = express()
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(cookieParser('nodetalk'))
app.use(expressSession())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use(methodOverride('_method'))
app.use(express.static(path.join(__dirname, 'public')))
app.use('/', routes)

module.exports = app
