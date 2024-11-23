const Sequelize = require('sequelize');
const db = require('../config/dbConfig');
const Category = require('./category');

const Product = db.define('product', {
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    description: {
        type: Sequelize.STRING,
    },

    price: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },

    image: {
        type: Sequelize.STRING,
        allowNull: false
    },

    categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'Categories',
            key: 'id'
        }
    }
});

module.exports = Product;