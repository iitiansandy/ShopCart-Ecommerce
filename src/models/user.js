const Sequelize = require('sequelize');
const db = require('../config/dbConfig');
// const { Hooks } = require('sequelize/lib/hooks');
const bcrypt = require('bcrypt');
const { saltRounds } = require('../config/serverConfig');

const User = db.define('user', {
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },

    password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: [3, 30],
            isAlphanumeric: true
        }
    }
}, {
    hooks: {
        beforeCreate: function(user) {
            const salt = bcrypt.genSaltSync(+saltRounds);
            user.password = bcrypt.hashSync(user.password, salt);
        }
    }
});


module.exports = User;