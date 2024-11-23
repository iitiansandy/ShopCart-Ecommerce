const {Product} = require('../models/index');

class ProductRepository {

    async createProduct(title, description, price, image, categoryId) {
        try {
            const response = await Product.create({title, description, price, image, categoryId});
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    };
    
    async getProducts() {
        try {
            const response = await Product.findAll();
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    };

    async getProduct(id) {
        try {
            const response = await Product.findByPk(id);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    };

    async destroyProduct(id) {
        try {
            const response = await Product.destroy({
                where: {
                    id: id
                }
            });
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    };
}



module.exports = ProductRepository;