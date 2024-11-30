const { StatusCodes, ReasonPhrases } = require("http-status-codes");

class UnauthorizedError extends Error {
    constructor() {
        const errorMessage = 'Invalid login credentials, please try again';
        super(errorMessage)
        this.statusCode = StatusCodes.UNAUTHORIZED;
        this.reason = ReasonPhrases.UNAUTHORIZED,
        this.errorMessage = errorMessage;
        this.name = "UnauthorizedError"
    }
};

module.exports = UnauthorizedError;