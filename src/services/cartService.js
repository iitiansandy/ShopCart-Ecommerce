const InternalServerError = require("../errors/internalServerError");
const NotFound = require("../errors/notFoundError");
const UnauthorizedError = require("../errors/unauthorizedError");

class CartService {
    constructor(repository) {
        this.repository = repository;
    }


    async updateCart (userId, cartId, productId, inc=true) {
        try {
            const cart = await this.repository.getCart(cartId);
            if(!cart) {
                throw new NotFound('Cart', 'id', cartId);
            }
            if (cart.userId !== userId) {
                throw new UnauthorizedError('You are not authorized to do this operation!!!');
            };

            const response = await this.repository.updateCart(cartId, productId, inc);
            return response;
        } catch (error) {
            if (error.name === "NotFound") {
                throw error;
            }
            if (error.name === "UnauthorizedError") {
                throw error;
            };
            console.log("Error from createCategory Service:", error);
            throw new InternalServerError();
        }
    };

    async getCartProducts (cartId, userId) {
        try {
            const cart = await this.repository.getCart(cartId);
            if(!cart) {
                throw new NotFound('Cart', 'id', cartId);
            };

            if (cart.userId !== userId) {
                throw new UnauthorizedError('You are not authorized to do this operation!!!');
            };

            const response = await this.repository.getCartProducts(cartId);
            return response;
        } catch (error) {
            if (error.name === "NotFound") {
                throw error;
            }
            if (error.name === "UnauthorizedError") {
                throw error;
            };
            console.log("Error from createCategory Service:", error);
            throw new InternalServerError();
        }
    };

    async clearCart (cartId, userId) {
        try {
            const cart = await this.repository.getCart(cartId);
            if(!cart) {
                throw new NotFound('Cart', 'id', cartId);
            };

            if (cart.userId !== userId) {
                throw new UnauthorizedError('You are not authorized to do this operation!!!');
            };

            const response = await this.repository.clearCart(cartId);
            return response;
        } catch (error) {
            if (error.name === "NotFound") {
                throw error;
            }
            if (error.name === "UnauthorizedError") {
                throw error;
            };
            console.log("Error from createCategory Service:", error);
            throw new InternalServerError();
        }
    };
};


module.exports = CartService;