function isValidate(req, res, next) {
  const db = require('../models/index.js')
  // console.log('===================NEW LOGIN===========');
  console.log(req.body);

  db.Costumer.findOne({
    where: {
      userName: req.body.userName
    }
  }).then(foundCostumer => {
    // console.log('==========FOUND USER===========');
    // console.log(foundCostumer);
    if (foundCostumer === null) {
      res.render('login.ejs', {
        title: 'Login',
        header: 'Login',
        err:{message: 'Username Is not in Database.'}
      })
    } else {
      // console.log('===========PASSWORD=============');
      if (req.body.password === foundCostumer.password) {
        // console.log('==========SUCCESS==============');
        req.session.userName = req.body.userName

        next()
      } else {
        // console.log('===========FAILURE===========');
        res.render('login.ejs', {
          title: 'Login',
          header: 'Login',
          err:{message: 'Cannot find this Username/Password combination.'}
        })
      }
    }
  })

}

function isLogin (req, res, next){
  // console.log('=======Checking Session======');
  // console.log(req.session);
  if (req.session.userName === undefined) {
    res.redirect('/login')
  } else {
    next()
  }
}

function isLogout(req, res, next){
  if (req.session.userName === undefined){
    next()
  } else {
    res.redirect('/')
  }
}

function loggingOut(req,res,next){
  if (req.session.userName === undefined) {
    res.redirect('/')
  } else {
    req.session.destroy()
    // console.log('=============DESTROY SESSION=========');
    next()
  }
}

module.exports = {
  isValidate: isValidate,
  isLogin: isLogin,
  isLogout: isLogout,
  loggingOut: loggingOut,
};
