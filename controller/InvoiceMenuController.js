'use strict'
const db = require('../models/index.js')
const express = require('express')

class InvoiceMenuController {

  static homepage(req, res){
    // res.send('InvoiceMenu page');
    db.InvoiceMenu.findAll({
      include: [
        {model: db.Menu}
      ],
      order: [['id','ASC']]
    }).then(projects => {
      // projects will be an array of all Project instances
      let obj = {
        title: 'DETAIL INVOICE TRANSACTION',
        arrObjMenu: projects
      }
      // res.send(obj);
      res.render('./menu/showinvoicemenu.ejs', obj);
    })
  }

  static invoicemenuAddGet(req,res){
    let obj = {
        title: 'Add Invoice Transation Data'
    };
    // res.send(obj);
    res.render('./menu/addinvoicemenu.ejs', {err: null}); // return array of objects supplier
  }

  static invoicemenuAddPost(req,res){
    var obj = {
      InvoiceId: req.body.InvoiceId,
      MenuId: req.body.MenuId,
      Quantity: req.body.Quantity
  }
  db.InvoiceMenu.create(obj)
      .then(() => {
        // res.send(obj);
          res.redirect('/invoicemenu')
      })
      .catch((err) => {
          // res.send(err);
          res.render('./menu/addinvoicemenu.ejs', {err: err.message})
      })
  }

  static invoicemenuEditGet(req,res){
    let obj = {
      title: 'Edit Invoice Transaction Data',
      err: null
  };
  res.render('./menu/editinvoicemenu.ejs', obj);
  }

  static invoicemenuEditPost(req,res){
    let obj = {
      title:'Edit Invoice Transaction Data',
      InvoiceId: req.body.InvoiceId,
      MenuId: req.body.MenuId,
      Quantity: req.body.Quantity
    }
    let id = req.params.id;
    
    db.InvoiceMenu.update(obj, {where: {id: id}})
    .then(() => {
        // console.log(obj);
        res.redirect('/invoicemenu');
    })
    .catch((err) => {
        let obj1 = {
          title:'Edit Invoice Transaction Data',
          err: err.message,
        }
        res.render('./menu/editinvoicemenu.ejs', obj1)
    })
  }

  static invoicemenuDelete(req,res){
    let id = req.params.id;

    db.InvoiceMenu.destroy({where: {id: id}})
        .then(() => {  
            console.log(`Successfully deleted ID ${id}`);
            res.redirect('/invoicemenu');
        })
  }




}

module.exports = InvoiceMenuController;
