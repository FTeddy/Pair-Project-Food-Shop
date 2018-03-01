"use strict"
const MenuController = require('./MenuController.js')
const CostumerController = require('./CostumerController.js')
const InvoiceController = require('./InvoiceController.js')

class Controller {

  static home(req, res){
    // res.send(req.session)
    res.render('home.ejs', {
      title: 'Sushido',
      header: 'Welcome to Japan Sushido',
      err: null
    })
  }

  static login(req, res){
    res.render('login.ejs', {
      title: 'Login',
      header: 'Login',
      err:null
    })
  }

  static loginSuccesful(req, res){
    console.log(req.session);
    res.send(req.body)
    // res.render('login.ejs', {
    //   title: 'Login',
    //   header: 'Login',
    //   err:null
    // })
  }

}

module.exports = {
  Controller: Controller,
  MenuController: MenuController,
  CostumerController: CostumerController,
  InvoiceController: InvoiceController
};
