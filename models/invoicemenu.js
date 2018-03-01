'use strict';
module.exports = (sequelize, DataTypes) => {
  var InvoiceMenu = sequelize.define('InvoiceMenu', {
    InvoiceId: {
      type:DataTypes.INTEGER,
      validate: {
        notNull: {
          args: [[true]],
          msg: 'Invoice No. cannot be filled with blank'
        }
      },
      validate: {
        min: {
          args: [[1]],
          msg: 'Invoice No. cannot be filled with 0'
        }
      }
    },
    MenuId: {
      type: DataTypes.INTEGER,
      validate: {
        notNull: {
          args: [[true]],
          msg: 'Menu No. cannot be filled with blank'
        }
      },
      validate: {
        min: {
          args: [[1]],
          msg: 'Menu No. cannot be filled with 0'
        }
      }
    },
    Quantity: {
      type: DataTypes.INTEGER,
      validate: {
        notNull: {
          args: [[true]],
          msg: 'Quantity cannot be filled with blank'
        }
      },
      validate: {
        min: {
          args: [[1]],
          msg: 'Quantity cannot be filled with 0'
        }
      }
    } 
  }, {});
  InvoiceMenu.associate = function(models) {
    // associations can be defined here
    InvoiceMenu.belongsTo(models.Menu);
  };
  return InvoiceMenu;
};