const { TacoShop } = require('../models');

const shopData = [
  {
    shop_name: 'Taco Bell',
  },
  {
    shop_name: 'Taco Gang PDX',
  },
  {
    shop_name: 'Taqueria Portland',
  },
  {
    shop_name: 'Por Que No',
  },
  {
    shop_name: 'Taco Bueno',
  },
  {
    shop_name: 'Taco Del Mar',
  },
  {
    shop_name: 'Taco Maker',
  },
  {
    shop_name: 'Taco Villa',
  },
  {
    shop_name: 'Taco Maker',
  },
];

const seedShops = () => TacoShop.bulkCreate(shopData);

module.exports = seedShops;
