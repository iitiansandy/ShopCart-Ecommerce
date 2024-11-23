const Category = require("./category");
const Product = require("./product");


Category.hasMany(Product, {foreginKey: 'categoryId'});
Product.belongsTo(Category, {foreginKey: 'categoryId'});

module.exports = { Product, Category };