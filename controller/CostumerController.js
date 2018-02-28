'use strict'
const db = require('../models/index.js')
const express = require('express')

class CostumerController {

  static homepage(req, res){
    res.send('costumer page');
  }

}

module.exports = CostumerController;
