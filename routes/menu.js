const express = require('express')
const router = express.Router()
const MenuController = require('../controller/index.js').MenuController

router.get('/', MenuController.homepage)
//
router.get('/add', MenuController.menuAddGet)
router.post('/add', MenuController.menuAddPost)
//
router.get('/edit/:id', MenuController.menuEditGet)
router.post('/edit/:id', MenuController.menuEditPost)
//
router.get('/delete/:id', MenuController.menuDelete)

module.exports = router;
