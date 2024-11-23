const { StatusCodes } = require('http-status-codes');

function productValidation (req, res, next) {
    if (!req.body.title) {
        return res.status(StatusCodes.BAD_REQUEST).send({
            status: false,
            message: 'Product title is required'
        });
    };

    if (!req.body.description) {
        return res.status(StatusCodes.BAD_REQUEST).send({
            status: false,
            message: 'Product description is required'
        });
    };

    if (!req.body.price) {
        return res.status(StatusCodes.BAD_REQUEST).send({
            status: false,
            message: 'Product price is required'
        });
    };

    if (!req.body.image) {
        return res.status(StatusCodes.BAD_REQUEST).send({
            status: false,
            message: 'Product image is required'
        });
    };

    if (!req.body.categoryId) {
        return res.status(StatusCodes.BAD_REQUEST).send({
            status: false,
            message: 'categoryId is required'
        });
    };
    next();
}

module.exports = {productValidation};