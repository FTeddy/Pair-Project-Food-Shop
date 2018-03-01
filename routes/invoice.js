const express = require('express')
const router = express.Router()
const helper = require('../helper')
const InvoiceController = require('../controller/index.js').InvoiceController

router.get('/', helper.isLogin, InvoiceController.homepage)
//
router.get('/add', helper.isLogin, InvoiceController.invoiceAdd)
router.post('/add', helper.isLogin, InvoiceController.invoiceAddPost)

router.get('/edit/:id', helper.isLogin, InvoiceController.invoiceEdit)
router.post('/edit/:id', helper.isLogin, InvoiceController.invoiceEditPost)

router.get('/delete/:id', helper.isLogin, InvoiceController.invoiceDelete)

module.exports = router;
