const {Category} = require('../models/index');

class CategoryRepository {

    async createCategory(name, description) {
        try {
            const response = await Category.create({name, description});
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    };
    
    async getCategories() {
        try {
            const response = await Category.findAll();
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    };

    async getCategory(id) {
        try {
            const response = await Category.findByPk(id);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    };

    async destroyCategory(id) {
        try {
            const response = await Category.destroy({
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

    // async getProductsForCategory(id) {
    //     try {
    //         const category = await Category.findByPk(id);
    //         const products = await category.getProducts();
    //         return products;
    //     } catch (error) {
    //         console.log(error);
    //         throw error;
    //     }
    // }
}



module.exports = CategoryRepository;