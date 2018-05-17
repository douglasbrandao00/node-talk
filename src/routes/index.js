const router = require('express').Router()

const login = require('./login')

router.use('/login', login)
router.get('/*', (req, res) => res.send('bad gateway'))

module.exports = router
