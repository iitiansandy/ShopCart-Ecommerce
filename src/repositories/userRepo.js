const {User} = require('../models/index');

class UserRepository {

    async createUser(email, password) {
        try {
            const response = await User.create({email, password});
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    };
    
    async getUsers() {
        try {
            const response = await User.findAll();
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    };

    async getUser(id) {
        try {
            const response = await User.findByPk(id);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    };

    async getUserByEmail(email) {
        try {
            const response = await User.findOne({
                where: { email: email }
            });
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    };

    async destroyUser(id) {
        try {
            const response = await User.destroy({
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



module.exports = UserRepository;