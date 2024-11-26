const InternalServerError = require("../errors/internalServerError");
const NotFound = require("../errors/notFoundError");

class CategoryService {
    constructor(repository, productRepo) {
        this.repository = repository;
        this.productRepo = productRepo;
    }

    async getProductsForCategory(id) {
        try {
            await this.getCategory(id);
            const response = await this.productRepo.getProductsForCategory(id);
            return response;
        } catch (error) {
            if (error.name === "NotFound") {
                throw error;
            }
            console.log("Error from getProductForCategory Service:", error);
            throw new InternalServerError();
        }
    };

    async createCategory (category) {
        try {
            const response = await this.repository.createCategory(category.name, category.description);
            return response;
        } catch (error) {
            console.log("Error from createCategory Service:", error);
            throw new InternalServerError();
        }
    };

    async getCategories () {
        try {
            const response = await this.repository.getCategories();
            return response;
        } catch (error) {
            console.log("Error from getCategories Service:", error);
            throw new InternalServerError();
        }
    };

    async getCategory (id) {
        try {
            const response = await this.repository.getCategory(id);
            if (!response) {
                throw new NotFound("Category", "id", id);
            }
            return response;
        } catch (error) {
            if (error.name === "NotFound") {
                throw error;
            }
            console.log("Error from getCategory Service:", error);
            throw new InternalServerError();
        }
    };

    async destroyCategory (id) {
        try {
            const response = await this.repository.destroyCategory(id);
            if (!response) {
                throw new NotFound("Category", "id", id);
            }
            return response;
        } catch (error) {
            console.log("Error from destroyCategory Service:", error);
            throw new InternalServerError();
        }
    };
};


module.exports = CategoryService;