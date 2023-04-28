// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class TacoShop extends Model {}

// set up fields and rules for Product model
TacoShop.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    shop_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    shop_address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    shop_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'TacoShop',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'TacoShop',
  }
);

module.exports = { TacoShop };
