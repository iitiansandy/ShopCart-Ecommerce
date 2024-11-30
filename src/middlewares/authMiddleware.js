const { StatusCodes, ReasonPhrases } = require('http-status-codes');
const jwt = require('jsonwebtoken');
const { errorResponse } = require('../utils/errorResponse');
const UnauthorizedError = require('../errors/unauthorizedError');
const { verifyToken } = require('../utils/auth');

const isLoggedIn = async (req, res, next) => {
    
    if (!req.cookies || !req.cookies.token) {
        return res.status(StatusCodes.UNAUTHORIZED).send(errorResponse(ReasonPhrases.UNAUTHORIZED, new UnauthorizedError()));
    };
    const { token } = req.cookies;
    let decodedToken;
    try {
        decodedToken = verifyToken(token);
    } catch (error) {
        console.log(error);
        return res.status(StatusCodes.UNAUTHORIZED).send(errorResponse(ReasonPhrases.UNAUTHORIZED, new UnauthorizedError()));
    }
    req.user = { email: decodedToken.email, id: decodedToken.id };
    next();
};

module.exports = {
    isLoggedIn
};