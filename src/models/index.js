const Category = require("./category");
const Product = require("./product");
const User = require('./user');
const Cart = require('./cart');
const CartProducts = require('./cartProducts');
const Order = require('./order');
const OrderProducts = require('./orderProducts');


Category.hasMany(Product, {foreginKey: 'categoryId'});
Product.belongsTo(Category, {foreginKey: 'categoryId'});

// One to one mapping of users and cart
// Cart belongs to one user
// User has one cart

User.hasOne(Cart);
Cart.belongsTo(User, {foreignKey: 'userId'});

// Many to Many mapping between cart and products
// Cart has many products through cart_products
// Product belongs to many cart through cart_products
Cart.belongsToMany(Product, { through: CartProducts });
Product.belongsToMany(Cart, { through: CartProducts });

Order.belongsTo(User, {foreignKey: 'userId'});
User.hasMany(Order, {foreignKey: 'userId'});

Order.belongsToMany(Product, { through: OrderProducts });
Product.belongsToMany(Order, { through: OrderProducts });


module.exports = { Product, Category, User, Cart, CartProducts, Order, OrderProducts };