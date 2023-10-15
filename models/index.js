const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products that belong Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
});

// Products BTM Tag
Product.belongsToMany(Tag, {
  through: ProductTag,
  // as: 'product_tags',
  foreignKey: 'product_id',
});

// Tags BTM Products 
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id',
});

module.exports = { Product, Category, Tag, ProductTag };

