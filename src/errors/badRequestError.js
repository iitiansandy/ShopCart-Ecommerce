const { StatusCodes, ReasonPhrases } = require("http-status-codes");

class BadRequest extends Error {
    constructor(property, invalidProperty=null) {
        const errorMessage = (invalidProperty)? `${property} is invalid in request` : `${property} is missing from the req body`;
        super(errorMessage)
        this.statusCode = StatusCodes.BAD_REQUEST;
        this.reason = ReasonPhrases.BAD_REQUEST,
        this.errorMessage = errorMessage;
        this.name = "BadRequest"
    }
};

module.exports = BadRequest;