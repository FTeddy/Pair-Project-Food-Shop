'use strict';
module.exports = (sequelize, DataTypes) => {
  var InvoiceMenu = sequelize.define('InvoiceMenu', {
    InvoiceId: DataTypes.INTEGER,
    MenuId: DataTypes.INTEGER,
    Quantity: DataTypes.INTEGER
  }, {});
  InvoiceMenu.associate = function(models) {
    // associations can be defined here
  };
  return InvoiceMenu;
};