const fakeStoreRepo = require('../repositories/fakeStoreRepo');
const InternalServerError = require("../errors/internalServerError");
const NotFound = require("../errors/notFoundError");
const BadRequest = require('../errors/badRequestError');

class ProductService {

    constructor (repository) {
        this.repository = repository;
    }

    async createProduct(product) {
        try {
            const newProduct = await this.repository.createProduct(product.title, product.description, product.price, product.image, product.categoryId);
            return newProduct;
        } catch (error) {
            console.log("Error from createProduct Service:", error);
            throw new InternalServerError();
        }
    };

    async getProducts(query) {
        try {
            if((query.limit && isNaN(query.limit)) || (query.offset && isNaN(query.offset))) {
                throw new BadRequest("limit, offset", true);
            };

            if(query.minPrice && isNaN(query.minPrice)) {
                throw new BadRequest("minPrice", true);
            };

            if(query.maxPrice && isNaN(query.maxPrice)) {
                throw new BadRequest("maxPrice", true);
            };

            const response = await this.repository.getProducts(+query.limit, +query.offset, +query.minPrice, +query.maxPrice);
            return response;
        } catch (error) {
            if (error.name === "BadRequest") {
                throw error;
            }
            console.log("Error from getProducts Service:", error);
            throw new InternalServerError();
        }
    };

    async getProduct (id) {
        try {
            const response = await this.repository.getProduct(id);
            if (!response) {
                throw new NotFound("Product", "id", id);
            }
            return response;
        } catch (error) {
            if (error.name === "NotFound") {
                throw error;
            }
            console.log("Error from getCategory Service:", error);
            throw new InternalServerError();
        }
    }

    async destroyProduct (id) {
        try {
            const response = await this.repository.destroyProduct(id);
            if (!response) {
                throw new NotFound("Product", "id", id);
            }
            return response;
        } catch (error) {
            if (error.name === "NotFound") {
                throw error;
            }
            console.log("Error from destroyProduct Service:", error);
            throw new InternalServerError();
        }
    };
}




module.exports = ProductService;