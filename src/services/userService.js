const BadRequest = require("../errors/badRequestError");
const ConflictError = require("../errors/conflictError");
const InternalServerError = require("../errors/internalServerError");
const NotFound = require("../errors/notFoundError");
const bcrypt = require('bcrypt');
const UnauthorizedError = require("../errors/unauthorizedError");
const { generateJWT } = require("../utils/auth");

class UserService {
    constructor(repository, cartRepository) {
        this.repository = repository;
        this.cartRepository = cartRepository;
    }

    async createUser (user) {
        try {
            const response = await this.repository.createUser(user.email, user.password);
            await this.cartRepository.createCart(response.id);
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

    async signInUser(data) {
        try {
            const user = await this.repository.getUserByEmail(data.email);
            if (!user) {
                throw new NotFound("User", "email", data.email);
            }
            const isPasswordMatch = bcrypt.compareSync(data.password, user.password);
            if (!isPasswordMatch) {
                throw new UnauthorizedError();
            };


            return generateJWT({email: user.email, id: user.id});
        } catch (error) {
            if ( error.name === "NotFound" || error.name === "UnauthorizedError") {
                throw error;
            }
            console.log("Error from signInUser Service:", error);
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