const express = require('express')
const router = express.Router()
const ControllerA = require('../controller/index.js').ControllerA

router.get('/', ControllerA.homepage)
//
// router.get('/add', ControllerA.itemAddPage)
// router.post('/add', ControllerA.itemAddPagePost)
//
// router.get('/edit/:id', ControllerA.itemEditPage)
// router.post('/edit/:id', ControllerA.itemEditPagePost)
//
// router.get('/delete/:id', ControllerA.itemDeletePage)

module.exports = router;
