"use strict"
const MenuController = require('./MenuController.js')
const CostumerController = require('./CostumerController.js')
const InvoiceController = require('./InvoiceController.js')

class Controller {

  static home(req, res){
    // res.send('homepage')
    res.render('home.ejs', {
      title: 'Sushido',
      header: 'Welcome to Japan Sushido'
    })
  }

}

module.exports = {
  Controller: Controller,
  MenuController: MenuController,
  CostumerController: CostumerController,
  InvoiceController: InvoiceController
};
