'use strict';
module.exports = (sequelize, DataTypes) => {
  var Costumer = sequelize.define('Costumer', {
    userName: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
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
  };
  return Costumer;
};
