const router = require('express').Router()

const contactsController = require('../controllers/contactsController')

router.get('/', (req, res) => contactsController.getAllContacts(req, res))
router.get('/:id', (req, res) => contactsController.getContactById(req, res))
router.post('/', (req, res) => contactsController.createContact(req, res))
router.get('/:id/edit', (req, res) => contactsController.editOneContact(req, res))
router.put('/', (req, res) => contactsController.updateOneContact(req, res))
router.delete('/', (req, res) => contactsController.deleteOneContact(req, res))

module.exports = router
