const express = require('express')
const router = express.Router()
const InvoiceController = require('../controller/index.js').InvoiceController

router.get('/', InvoiceController.homepage)
//
// router.get('/add', InvoiceController.itemAddPage)
// router.post('/add', InvoiceController.itemAddPagePost)
//
// router.get('/edit/:id', InvoiceController.itemEditPage)
// router.post('/edit/:id', InvoiceController.itemEditPagePost)
//
// router.get('/delete/:id', InvoiceController.itemDeletePage)

module.exports = router;
