'use strict'
const db = require('../models/index.js')
const express = require('express')

class InvoiceController {

  static homepage(req, res){
    res.send('Invoice page');
  }

}

module.exports = InvoiceController;
