const express = require('express')
const router = express.Router()
const CostumerController = require('../controller/index.js').CostumerController

router.get('/', CostumerController.homepage)

// router.get('/add', CostumerController.itemAddPage)
// router.post('/add', CostumerController.itemAddPagePost)
//
// router.get('/edit/:id', CostumerController.itemEditPage)
// router.post('/edit/:id', CostumerController.itemEditPagePost)
//
// router.get('/delete/:id', CostumerController.itemDeletePage)

module.exports = router;
