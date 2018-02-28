'use strict'
const db = require('../models/index.js')
const express = require('express')

class MenuController {

  static homepage(req, res){
    res.send('Menu page');
  }

}

module.exports = MenuController;
