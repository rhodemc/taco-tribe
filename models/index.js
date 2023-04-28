// import models
const Taco = require('./Taco');
const TacoShop = require('./TacoShop');

// Tacos belongsTo TacoShops
// Is foreignkey shop_id?
Taco.belongsTo(TacoShop, {
  foreignKey: 'shop_id',
});

// TacoShops have many Tacos
TacoShop.hasMany(Taco, {
  foreignKey: 'shop_id',
  onDelete: 'CASCADE',
});

module.exports = {
  Taco,
  TacoShop,
};
