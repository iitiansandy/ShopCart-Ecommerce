const Sequelize = require('sequelize');
const db = require('../config/dbConfig');
const Product = require('./product');

const Category = db.define('category', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },

    description: {
        type: Sequelize.STRING,
    }
});


module.exports = Category;