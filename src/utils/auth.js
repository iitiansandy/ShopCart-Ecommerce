const jwt = require('jsonwebtoken');
const { jwtSecret, jwtExpiry } = require('../config/serverConfig');
const UnauthorizedError = require('../errors/unauthorizedError');

function generateJWT(payload) {
    return jwt.sign(payload, jwtSecret, { expiresIn: jwtExpiry });
};

function verifyToken(token) {
    try {
        return jwt.verify(token, jwtSecret);
    } catch (error) {
        console.log(error);
        throw new UnauthorizedError();
    }
};

module.exports = {
    generateJWT,
    verifyToken
}