'use strict'
const db = require('../models/index.js')
const express = require('express')

class MenuController {
  static homepage(req, res){
    // res.send('Menu page');
    db.Menu.findAll({
      order: [['id','ASC']]
    }).then(projects => {
      // projects will be an array of all Project instances
      let obj = {
        title: 'MENU',
        arrObjMenu: projects
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
      title: 'Edit Menu Data'
  };
  res.render('./menu/editmenu.ejs', obj);
  }

  static menuEditPost(req,res){
    let obj = {
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
        // res.render('items.ejs', {err: err.message})
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
