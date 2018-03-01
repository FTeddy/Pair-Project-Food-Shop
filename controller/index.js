"use strict"
const MenuController = require('./MenuController.js')
const CostumerController = require('./CostumerController.js')
const InvoiceController = require('./InvoiceController.js')
const InvoiceMenuController = require('./InvoiceMenuController.js')

class Controller {

  static home(req, res){
    // res.send('homepage')
    res.render('home.ejs', {
      title: 'Homepage',
      header: 'Welcome to mini-POS'
    })
  }

}

module.exports = {
  Controller: Controller,
  MenuController: MenuController,
  CostumerController: CostumerController,
  InvoiceController: InvoiceController,
  InvoiceMenuController: InvoiceMenuController
};
