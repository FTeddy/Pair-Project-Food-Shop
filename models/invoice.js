'use strict';
module.exports = (sequelize, DataTypes) => {
  var Invoice = sequelize.define('Invoice', {
    CostumerId: {
      type: DataTypes.INTEGER,
      validate: {
        notNull: true
      }
    },
    buyDate: DataTypes.STRING
  },
  {
    hooks: {
      beforeCreate :(instance, options)=>{
        instance.buyDate = new Date();
      }
    }
  });
  Invoice.associate = function(models) {
    // associations can be defined here
    Invoice.belongsTo(models.Costumer)
    // Invoice.belongsToMany(models.Menu, {through : 'InvoiceMenu'})
    // Invoice.hasMany(models.InvoiceMenu)
  };
  return Invoice;
};
