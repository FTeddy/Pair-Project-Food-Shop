'use strict';
module.exports = (sequelize, DataTypes) => {
  var Costumer = sequelize.define('Costumer', {
    userName: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        isUnique(value, callback){
          Costumer.findOne({
            where:{
              userName:value
            }
          }).then(foundCostumer => {
            if (foundCostumer) {
              callback(`${value} is currently in use. Please create a new username.`);
            } else {
              callback();
            }
          })
        }
      }
    },
    password: {
      type:DataTypes.STRING,
      validate: {
        isLong(value){
          if (value.length < 6){
            throw new Error('Password must be 6 characters or longer.')
          }
        }
      }
    },
    isLogin: DataTypes.BOOLEAN
  },
  {
    hooks: {
      beforeCreate :(instance, options)=>{
        instance.isLogin = false;
      }
    }
  });
  Costumer.frequentBuyer = function(callback){
    Costumer.findAll(
      {
        include:
        [
          {
            model: sequelize.models.Invoice,
          }
        ]
      }
    ).then(foundCostumers =>{
      let frequent = [];
      for (var i = 0; i < foundCostumers.length; i++) {
        // console.log(foundCostumers[i]);
        if(foundCostumers[i].Invoices.length > 2){

          frequent.push(foundCostumers[i])
        }
      }
      // console.log('===============');
      // console.log(frequent);
      callback(frequent)
    })
  }

  Costumer.prototype.sumInvoices = function(){
    let length = this.Invoices.length;
    return length;
  }

  Costumer.associate = function(models) {
    // associations can be defined here
    Costumer.hasMany(models.Invoice)
  };
  return Costumer;
};
