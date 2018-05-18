const router = require('express').Router()

const sessionRoute = require('./sessionRoute')
const contactRoute = require('./contactsRoute')

router.use('/session', sessionRoute)
router.use('/contacts', contactRoute)
router.get('/*', (req, res) => res.send('invalid endpoint'))

module.exports = router
