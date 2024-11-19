const Sequelize = require('sequelize');
const db = require('../config/dbConfig');

const Category = db.define('category', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    description: {
        type: Sequelize.STRING,
    }
});

module.exports = Category;