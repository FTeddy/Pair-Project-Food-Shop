'use strict'
const db = require('../models/index.js')
const express = require('express')

class CostumerController {

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
    // console.log(req.session)
    let isLogin = CostumerController.isLogin(req);
    let user = CostumerController.user(req);
    db.Costumer.findAll({
      order: [['userName', 'ASC']],
      include: [
        { model: db.Invoice },
      //   { model: db.InvoiceMenu }
      ]
    }).then(foundCostumers => {

      let frequent =  db.Costumer.frequentBuyer(function(frequent){
        res.render('./costumer/costumer.ejs', {
          title: 'Costumer Page',
          header: 'Costumer Page',
          frequent: frequent,
          foundCostumers: foundCostumers,
          isLogin: isLogin,
          user: user,
          err: null
        })
      })
    })
  }

  static costumerAdd(req, res){
    let isLogin = CostumerController.isLogin(req);
    let user = CostumerController.user(req);
    res.render('./costumer/costumerAddForm.ejs', {
      title: 'Adding Costumer',
      header: 'Adding Costumer',
      formData:{
        userName: '',
        password: ''
      },
      isLogin: isLogin,
      user: user,
      err: null
    })
  }
  static costumerAddPost(req, res){
    db.Costumer.create({
      userName: req.body.userName,
      password: req.body.password,
      createdAt: new Date(),
      updatedAt: new Date()
    }).then(newCostumer => {
      res.redirect('/costumer')
    }).catch(err => {
      let isLogin = CostumerController.isLogin(req);
      let user = CostumerController.user(req);
      res.render('./costumer/costumerAddForm.ejs', {
        title: 'Adding Costumer',
        header: 'Adding Costumer',
        formData:{
          userName: req.body.userName,
          password: ''
        },
        isLogin: isLogin,
        user: user,
        err: err
      })
    })
  }

  static costumerEdit(req, res){
    let isLogin = CostumerController.isLogin(req);
    let user = CostumerController.user(req);
    let costumerId = req.params.id;
    db.Costumer.findById(costumerId).then(foundCostumer => {
      res.render('./costumer/costumerEditForm.ejs', {
        title: 'Editing Costumer',
        header: 'Editing Costumer',
        costumerId: costumerId,
        foundCostumer: foundCostumer,
        isLogin: isLogin,
        user: user,
        err: null
      })
    })
  }
  static costumerEditPost(req, res){
    let isLogin = CostumerController.isLogin(req);
    let user = CostumerController.user(req);
    let costumerId = req.params.id;
    db.Costumer.update(
      {
        userName: req.body.userName,
        password: req.body.password,
        updatedAt: new Date()
      },
      {
        where: {
          id: req.params.id
        }
      }
    ).then(updatedCostumer => {
      res.redirect('/costumer')
    }).catch(err => {
      res.render('./costumer/costumerEditForm.ejs', {
        title: 'Editing Costumer',
        header: 'Editing Costumer',
        costumerId: costumerId,
        foundCostumer: {
          userName: req.body.userName,
          password: req.body.password
        },
        isLogin: isLogin,
        user: user,
        err: err
      })
    })


  }

  static costumerDelete(req, res){
    db.Costumer.destroy(
      {
        where : {
          id: req.params.id
        },
        individualHooks: true
      }
    ).then(()=> {
      res.redirect('/costumer')
    }).catch(err => {
      console.log('===== DELETE ====='+err);
    })
  }

}

module.exports = CostumerController;
