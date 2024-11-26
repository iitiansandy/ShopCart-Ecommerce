const {Product} = require('../models/index');
const { Op } = require('sequelize');

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
    
    async getProducts(limit, offset, minPrice, maxPrice) {
        try {
            const filter = {};
            if (limit) {
                filter.limit = limit;
            };

            if (offset) {
                filter.offset = offset;
            };

            const minValue = minPrice ? minPrice : Number.MIN_SAFE_INTEGER;
            const maxValue = maxPrice ? maxPrice : Number.MAX_SAFE_INTEGER;

            const response = await Product.findAll({
                where: { 
                    price: { 
                        [Op.between]: [minValue, maxValue]
                    }
                },
                ...filter
            })
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    };

    async searchProducts(search_query) {
        try {
            const response = await Product.findAll({
                where: { 
                    title: { 
                        [Op.like]: `%${search_query}`
                    }
                },
            });
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

    async getProductsForCategory(categoryId) {
        try {
            const products = await Product.findAll({
                where: {
                    categoryId: categoryId
                }
            });
            return products;
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