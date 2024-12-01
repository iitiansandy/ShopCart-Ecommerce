const { Op } = require('sequelize');
const {Cart, CartProducts} = require('../models/index');
const NotFound = require('../errors/notFoundError');

class CartRepository {

    async createCart(userId) {
        try {
            const response = await Cart.create({userId});
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    };
    
    async getCarts() {
        try {
            const response = await Cart.findAll();
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    };

    async getCart(id) {
        try {
            const response = await Cart.findByPk(id);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    };

    async getCartProducts(id) {
        try {
            let response = await CartProducts.findAll({
                where: {
                    cartId: id
                }
            });
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    };


    async clearCart(id) {
        try {
            let response = await CartProducts.destroy({
                where: {
                    cartId: id
                }
            });
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    };

    async destroyCart(id) {
        try {
            const response = await Cart.destroy({
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

    async updateCart(cartId, productId, inc = true) {
        try {
            const result = await CartProducts.findOne({
                where: {
                    [Op.and]: [
                        {cartId: cartId},
                        {productId: productId}
                    ]
                }
            });
            
            if (inc) {
                if (!result) {
                    await CartProducts.create({cartId, productId});
                } else {
                    await result.increment({quantity: 1});
                }
            } else {
                if (!result) {
                    throw new NotFound('Cart Product', 'Product', productId);
                } 
                if (result.quantity === 1) {
                    await CartProducts.destroy({
                        where: {
                            [Op.and]: [
                                {cartId: cartId},
                                {productId: productId}
                            ]
                        }
                    })
                } else {
                    await result.increment({quantity: -1});
                }
            }

            const response = await CartProducts.findAll({
                where: {
                    cartId: cartId
                }
            });

            return {cartId: cartId, products: response};
        } catch (error) {
            console.log(error);
            throw error;
        }
    };

    
}



module.exports = CartRepository;