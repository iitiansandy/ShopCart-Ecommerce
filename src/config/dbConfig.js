const Sequelize = require('sequelize');

const { dbHost, dbName, dbPassword, user } = require('./serverConfig');

const sequelize = new Sequelize(dbName, user, dbPassword, {
    host: dbHost,
    dialect: 'mysql'
});

module.exports = sequelize;