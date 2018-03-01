"use strict"
const MenuController = require('./MenuController.js')
const CostumerController = require('./CostumerController.js')
const InvoiceController = require('./InvoiceController.js')
const InvoiceMenuController = require('./InvoiceMenuController.js')

class Controller {

  static home(req, res){
    // res.send(req.session)
    // console.log(req.session);
    let isLogin;
    let user;
    if (req.session.userName !== undefined) {
      isLogin = true;
      user = req.session.userName;
    } else {
      isLogin = false;
      user = null;
    }
    res.render('home.ejs', {
      title: 'Sushido',
      header: 'Welcome to Japan Sushido',
      isLogin: isLogin,
      user: user,
      err: null
    })
  }

  static login(req, res){
    res.render('login.ejs', {
      title: 'Login',
      header: 'Please Login',
      isLogin: false,
      user: null,
      err: null
    })
  }

  static loginSuccesful(req, res){
    // console.log(req.session);
    // res.send(req.body)
    res.redirect('/')
  }

  static logout(req,res){
    res.redirect('/')
  }

}

module.exports = {
  Controller: Controller,
  MenuController: MenuController,
  CostumerController: CostumerController,
  InvoiceController: InvoiceController,
  InvoiceMenuController: InvoiceMenuController
};
