const Category = require("./category");
const Product = require("./product");
const User = require('./user');


Category.hasMany(Product, {foreginKey: 'categoryId'});
Product.belongsTo(Category, {foreginKey: 'categoryId'});

module.exports = { Product, Category, User };