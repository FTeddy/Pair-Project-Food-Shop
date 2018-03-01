const express = require('express')
const router = express.Router()
const InvoiceController = require('../controller/index.js').InvoiceController

router.get('/', InvoiceController.homepage)
//
router.get('/add', InvoiceController.invoiceAdd)
router.post('/add', InvoiceController.invoiceAddPost)

router.get('/edit/:id', InvoiceController.invoiceEdit)
router.post('/edit/:id', InvoiceController.invoiceEditPost)

router.get('/delete/:id', InvoiceController.invoiceDelete)

module.exports = router;
