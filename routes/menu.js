const express = require('express')
const router = express.Router()
const MenuController = require('../controller/index.js').MenuController

router.get('/', MenuController.homepage)
//
// router.get('/add', MenuController.itemAddPage)
// router.post('/add', MenuController.itemAddPagePost)
//
// router.get('/edit/:id', MenuController.itemEditPage)
// router.post('/edit/:id', MenuController.itemEditPagePost)
//
// router.get('/delete/:id', MenuController.itemDeletePage)

module.exports = router;
