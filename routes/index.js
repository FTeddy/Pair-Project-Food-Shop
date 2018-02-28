const express = require('express')
const router = express.Router()
const Controller = require('../controller/index.js').Controller

router.use('/menu', require('./menu.js'))
router.use('/costumer', require('./costumer.js'))
router.use('/invoice', require('./invoice.js'))

router.get('/', Controller.home)

module.exports = router;
