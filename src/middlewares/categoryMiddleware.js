const { StatusCodes } = require('http-status-codes');

function catValidation (req, res, next) {
    if (!req.body.name) {
        return res.status(StatusCodes.BAD_REQUEST).send({
            status: false,
            message: 'Category name is required'
        });
    };
    next();
}

module.exports = {catValidation};