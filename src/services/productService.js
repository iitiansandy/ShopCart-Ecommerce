const fakeStoreRepo = require('../repositories/fakeStoreRepo');

class ProductService {

    constructor (repository) {
        this.repository = repository;
    }

    async createProduct(product) {
        const newProduct = await this.repository.createProduct(product);
        return newProduct;
    };

    async getProducts() {
        const response = await this.repository.getProducts();
        return response;
    };

    async getProduct (id) {
        const response = await this.repository.getProduct(id);
        return response;
    }
}




module.exports = ProductService;