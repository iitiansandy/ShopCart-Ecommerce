const { StatusCodes, ReasonPhrases } = require("http-status-codes");

class ConflictError extends Error {
    constructor(resource, conflict) {
        const errorMessage = `Request can not be completed as ${resource} is conflicting with the request due to ${conflict}`
        super(errorMessage)
        this.statusCode = StatusCodes.CONFLICT;
        this.reason = ReasonPhrases.CONFLICT,
        this.errorMessage = errorMessage;
        this.name = "ConflictError",
        this.conflict = conflict
    }
};

module.exports = ConflictError;