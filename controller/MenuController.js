'use strict'
const db = require('../models/index.js')
const express = require('express')
const sequelize = require('sequelize');
const Op = sequelize.Op;

class MenuController {

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
    // res.send('Menu page');
    let inJanuary = '2018-01%';
    let inFebuary = '2018-02%';
    let isLogin = MenuController.isLogin(req);
    let user = MenuController.user(req);
    db.Menu.findAll({
      include: [{model: db.InvoiceMenu,
        order: [['Quantity','DESC']],
        group: 'MenuId',
      }, {
        model: db.Invoice,
        where: {
          buyDate:{
            [Op.like]: inJanuary
          }
        }
      } ],
      order: [['id','ASC']]
    }).then(projects => {
      // projects will be an array of all Project instances

      // res.send(projects[0].dataValues);

      let arrtotalQty = [];
      for(let i = 0; i < projects.length; i++){
        projects[i].dataValues.totalQty = 0;
        for (let j = 0; j < projects[i].InvoiceMenus.length; j++) {
          projects[i].dataValues.totalQty += projects[i].InvoiceMenus[j].Quantity;
        }
        arrtotalQty.push(projects[i].dataValues.totalQty);
      }

      let arrQtyMax3 = arrtotalQty.sort(function(a, b){return b-a}).slice(0,3)
      // res.send(arrQtyMax3)

      let arrIdMax3 = [];
      for(let i = 0; i < projects.length; i++){
        for (let j = 0; j < arrQtyMax3.length; j++){
          if (projects[i].dataValues.totalQty == arrQtyMax3[j]) {
            console.log(projects[i].dataValues.id);
            arrIdMax3.push(projects[i].dataValues.id);
          }
        }
      }

      // console.log(projects.length);
      // res.send(arrtotalQty);
      // res.send(arrIdMax3);

        let obj = {
          title: 'MENU',
          arrObjMenu: projects,
          arrIdMax3: arrIdMax3,
          isLogin: isLogin,
          user: user,
        }
        // res.send(obj);
        res.render('./menu/showmenu.ejs', obj);


    })
  }

  static menuAddGet(req,res){
    let isLogin = MenuController.isLogin(req);
    let user = MenuController.user(req);
    let obj = {
        title: 'Add Menu Data',
        isLogin: isLogin,
        user: user,
        err: null
    };
    // res.send(obj);
    res.render('./menu/addmenu.ejs', obj); // return array of objects supplier
  }

  static menuAddPost(req,res){
    var obj = {
      MenuType: req.body.MenuType,
      Name: req.body.Name,
      Price: req.body.Price
  }
  db.Menu.create(obj)
      .then(() => {
        // res.send(obj);
          res.redirect('/menu')
      })
      .catch((err) => {
          // res.send(err);
          let isLogin = MenuController.isLogin(req);
          let user = MenuController.user(req);
          let obj = {
              title: 'Add Menu Data',
              isLogin: isLogin,
              user: user,
              err: err.message
          };
          res.render('./menu/addmenu.ejs', obj)
      })
  }

  static menuEditGet(req,res){
    let isLogin = MenuController.isLogin(req);
    let user = MenuController.user(req);
    let obj = {
      title: 'Edit Menu Data',
      isLogin: isLogin,
      user: user,
      err: null
  };
  res.render('./menu/editmenu.ejs', obj);
  }

  static menuEditPost(req,res){
    let obj = {
      title:'Edit Menu Data',
      MenuType: req.body.MenuType,
      Name: req.body.Name,
      Price: req.body.Price
    }
    let id = req.params.id;

    db.Menu.update(obj, {where: {id: id}})
    .then(() => {
        // console.log(obj);
        res.redirect('/menu');
    })
    .catch((err) => {
        let isLogin = MenuController.isLogin(req);
        let user = MenuController.user(req);
        let obj1 = {
          title:'Edit Menu Data',
          isLogin: isLogin,
          user: user,
          err: err.message,
        }
        res.render('./menu/editmenu.ejs', obj1)
    })
  }

  static menuDelete(req,res){
    let id = req.params.id;

    db.Menu.destroy({where: {id: id}})
        .then(() => {
            console.log(`Successfully deleted ID ${id}`);
            res.redirect('/menu');
        })
  }




}

module.exports = MenuController;
