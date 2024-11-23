const { StatusCodes, ReasonPhrases } = require("http-status-codes");

class NotFound extends Error {
    constructor(resourceName, property, propertyValue) {
        const errorMessage = `The ${resourceName} with ${property}: ${propertyValue} not found`
        super(errorMessage)
        this.statusCode = StatusCodes.NOT_FOUND;
        this.reason = ReasonPhrases.NOT_FOUND,
        this.errorMessage = errorMessage;
        this.name = "NotFound"
    }
};

module.exports = NotFound;