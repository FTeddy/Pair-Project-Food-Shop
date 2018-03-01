const express = require('express')
const router = express.Router()
const InvoiceMenuController = require('../controller/index.js').InvoiceMenuController

router.get('/', InvoiceMenuController.homepage)
//
router.get('/add', InvoiceMenuController.invoicemenuAddGet)
router.post('/add', InvoiceMenuController.invoicemenuAddPost)
//
router.get('/edit/:id', InvoiceMenuController.invoicemenuEditGet)
router.post('/edit/:id', InvoiceMenuController.invoicemenuEditPost)
//
router.get('/delete/:id', InvoiceMenuController.invoicemenuDelete)

module.exports = router;
