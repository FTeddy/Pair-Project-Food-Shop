"use strict"
const ControllerA = require('./ControllerA.js')
const ControllerB = require('./ControllerB.js')
const ControllerC = require('./ControllerC.js')

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
  ControllerA: ControllerA,
  ControllerB: ControllerB,
  ControllerC:ControllerC
};
