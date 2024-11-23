const fakeStoreRepo = require('../repositories/fakeStoreRepo');
const InternalServerError = require("../errors/internalServerError");
const NotFound = require("../errors/notFoundError");

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

    async getProducts() {
        try {
            const response = await this.repository.getProducts();
            return response;
        } catch (error) {
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
}




module.exports = ProductService;