const BadRequest = require("../errors/badRequestError");
const ConflictError = require("../errors/conflictError");
const InternalServerError = require("../errors/internalServerError");
const NotFound = require("../errors/notFoundError");

class UserService {
    constructor(repository) {
        this.repository = repository;
    }

    async createUser (user) {
        try {
            const response = await this.repository.createUser(user.email, user.password);
            return response;
        } catch (error) {
            if (error.name === "SequelizeUniqueConstraintError") {
                throw new ConflictError("User", error.errors[0].message);
            }

            if (error.name === "SequelizeValidationError") {
                let propertiesHavingValidationIssues = "";
                let reason = [];
                error.errors.forEach(error => {
                    propertiesHavingValidationIssues += error.path + ", ";
                    reason.push(error.message);
                });
                throw new BadRequest(propertiesHavingValidationIssues, true, reason);
            }
            console.log("Error from createUser Service:", error);
            throw new InternalServerError();
        }
    };

    async getUsers () {
        try {
            const response = await this.repository.getUsers();
            return response;
        } catch (error) {
            console.log("Error from getUsers Service:", error);
            throw new InternalServerError();
        }
    };

    async getUser (id) {
        try {
            const response = await this.repository.getUser(id);
            if (!response) {
                throw new NotFound("User", "id", id);
            }
            return response;
        } catch (error) {
            if (error.name === "NotFound") {
                throw error;
            }
            console.log("Error from getUser Service:", error);
            throw new InternalServerError();
        }
    };

    async destroyUser (id) {
        try {
            const response = await this.repository.destroyUser(id);
            if (!response) {
                throw new NotFound("User", "id", id);
            }
            return response;
        } catch (error) {
            if (error.name === "NotFound") {
                throw error;
            }
            console.log("Error from destroyUser Service:", error);
            throw new InternalServerError();
        }
    };
};


module.exports = UserService;