'use strict'
const db = require('../models/index.js')
const express = require('express')
const sequelize = require('sequelize');
const Op = sequelize.Op;

class MenuController {
  static homepage(req, res){
    // res.send('Menu page');
    let inJanuary = '2018-01%';
    let inFebuary = '2018-02%';
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

      // res.send(projects);

      let arrtotalQty = [];
      for(let i = 0; i < projects.length; i++){
        projects[i].dataValues.totalQty = 0;
        for (let j = 0; j < projects[i].InvoiceMenus.length; j++) {
          projects[i].dataValues.totalQty += projects[i].InvoiceMenus[j].Quantity;
        }
        arrtotalQty.push(projects[i].dataValues.totalQty);
      }
      let arrQtyMax3 = arrtotalQty.sort(function(a, b){return b-a}).slice(0,3)

      let arrIdMax3 = [];
      for(let i = 0; i < projects.length; i++){
        for (let j = 0; j < arrQtyMax3.length; j++){
          if (projects[i].dataValues.totalQty == arrQtyMax3[j]) {
            arrIdMax3.push(projects[i].dataValues.id);
          }
        }


      }
      
      // res.send(arrtotalQty);
      // res.send(arrIdMax3);

        let obj = {
          title: 'MENU',
          arrObjMenu: projects,
          arrIdMax3: arrIdMax3
        }
        // res.send(obj);
        res.render('./menu/showmenu.ejs', obj);
      
      
    })
  }

  static menuAddGet(req,res){
    let obj = {
        title: 'Add Menu Data'
    };
    // res.send(obj);
    res.render('./menu/addmenu.ejs', {err: null}); // return array of objects supplier
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
          res.render('./menu/addmenu.ejs', {err: err.message})
      })
  }

  static menuEditGet(req,res){
    let obj = {
      title: 'Edit Menu Data',
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
        let obj1 = {
          title:'Edit Menu Data',
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
