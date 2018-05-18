const router = require('express').Router()

const sessionController = require('../controllers/sessionController')

console.log(sessionController)

router.get('/', (req, res) => res.render('index'))
router.post('/login', (req, res) => sessionController.makeLogin(req, res))
router.get('/logout', (req, res) => res.render('logout'))

module.exports = router
