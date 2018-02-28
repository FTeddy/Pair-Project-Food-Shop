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
  Costumer.associate = function(models) {
    // associations can be defined here
    // Costumer.hasMany(models.Invoice)
  };
  return Costumer;
};
