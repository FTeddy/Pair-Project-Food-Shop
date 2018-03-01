'use strict'
const db = require('../models/index.js')
const express = require('express')

class InvoiceController {

  static isLogin(req){
    if (req.session.userName !== undefined) {
      return true;
    } else {
      return false;
    }
  }

  static user(req){
    if (req.session.userName !== undefined) {
      return req.session.userName;
    } else {
      return null;
    }
  }

  static homepage(req, res){
    let isLogin = InvoiceController.isLogin(req);
    let user = InvoiceController.user(req);
    db.Invoice.findAll({
      // include: [
      //   { model: db.menu },
      //   { model: db.InvoiceMenu }
      // ]
    }).then(foundInvoices => {
      // res.send(foundInvoices);
      res.render('./invoice/invoice.ejs', {
        title: 'Invoice Page',
        header: 'Invoice Page',
        foundInvoices: foundInvoices,
        isLogin: isLogin,
        user: user,
        err: null
      })
    })
  }



  static invoiceAdd(req, res){
    let isLogin = InvoiceController.isLogin(req);
    let user = InvoiceController.user(req);
    res.render('./invoice/invoiceAddForm.ejs', {
      title: 'Adding Invoice',
      header: 'Adding Invoice',
      formData:{
        CostumerId: ''
      },
      isLogin: isLogin,
      user: user,
      err: null
    })
  }
  static invoiceAddPost(req, res){
    db.Invoice.create({
      CostumerId: req.body.CostumerId,
      createdAt: new Date(),
      updatedAt: new Date()
    }).then(newInvoice => {
      res.redirect('/invoice')
    }).catch(err => {
      let isLogin = InvoiceController.isLogin(req);
      let user = InvoiceController.user(req);
      res.render('./invoice/invoiceAddForm.ejs', {
        title: 'Adding Invoice',
        header: 'Adding Invoice',
        formData:{
          CostumerId: req.body.CostumerId
        },
        isLogin: isLogin,
        user: user,
        err: err
      })
    })
  }

  static invoiceEdit(req, res){
    let isLogin = InvoiceController.isLogin(req);
    let user = InvoiceController.user(req);
    let invoiceId = req.params.id;
    db.Invoice.findById(invoiceId).then(foundInvoice => {
      res.render('./invoice/invoiceEditForm.ejs', {
        title: 'Editing Invoice',
        header: 'Editing Invoice',
        invoiceId: invoiceId,
        foundInvoice: foundInvoice,
        isLogin: isLogin,
        user: user,
        err: null
      })
    })
  }
  static invoiceEditPost(req, res){
    let invoiceId = req.params.id;
    db.Invoice.update(
      {
        CostumerId: req.body.CostumerId,
        updatedAt: new Date()
      },
      {
        where: {
          id: req.params.id
        }
      }
    ).then(updatedInvoice => {
      res.redirect('/invoice')
    }).catch(err => {
      let isLogin = InvoiceController.isLogin(req);
      let user = InvoiceController.user(req);
      res.render('./invoice/invoiceEditForm.ejs', {
        title: 'Editing Invoice',
        header: 'Editing Invoice',
        invoiceId: invoiceId,
        foundInvoice: {
          CostumerId: req.body.CostumerId
        },
        isLogin: isLogin,
        user: user,
        err: err
      })
    })


  }

  static invoiceDelete(req, res){
    db.Invoice.destroy(
      {
        where : {
          id: req.params.id
        },
        individualHooks: true
      }
    ).then(()=> {
      res.redirect('/invoice')
    }).catch(err => {
      console.log('===== DELETE ====='+err);
    })
  }

}

module.exports = InvoiceController;
