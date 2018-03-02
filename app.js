"use strict"
const express = require('express')
const app = express()
const session = require('express-session')
const bodyParser = require('body-parser')
const routes = require('./routes/index.js')

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: false }));
app.use( session({
  secret: 'bushido',
  resave: false,
  saveUninitialized: true,
  cookie: { }
}) );
app.use(express.static('public'))
app.locals.helper = require('./helper')

app.use('/', routes)

let PORT = process.env.PORT || 3000
app.listen(PORT, ()=>{
  console.log('Start listening on PORT 3000');
})
