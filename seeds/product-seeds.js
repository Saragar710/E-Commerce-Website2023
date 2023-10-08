const { Product } = require('../models');

const productData = [
  {
    product_name: 'Vintage T-Shirt',
    price: 25.00,
    stock: 20,
    category_id: 1,
  },
  {
    product_name: 'Bermuda Shorts',
    price: 20.00,
    stock: 110,
    category_id: 2,
  },
  {
    product_name: 'Cross-body Bag',
    price: 17.99,
    stock: 75,
    category_id: 3,
  },
  {
    product_name: 'Hoodie',
    price: 75.00,
    stock: 12,
    category_id: 4,
  },
  {
    product_name: 'White Air Force Ones',
    price: 325.00,
    stock: 5,
    category_id: 5,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;