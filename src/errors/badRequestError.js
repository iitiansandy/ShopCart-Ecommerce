const { StatusCodes, ReasonPhrases } = require("http-status-codes");

class BadReques extends Error {
    constructor(message) {
        super(message)
        this.statusCode = StatusCodes.BAD_REQUEST;
        this.reason = ReasonPhrases.BAD_REQUEST,
        this.message = message;
        this.name = "BadRequest"
    }
};

module.exports = BadReques;