const InternalServerError = require("../errors/internalServerError");
const NotFound = require("../errors/notFoundError");

class OrderService {
    constructor(repository, cartRepository) {
        this.repository = repository;
        this.cartRepository = cartRepository;
    }

    async createOrder (userId, ) {
        try {
            const cart = await this.cartRepository.getCartByUser(userId);
            if (!cart) {
                throw new NotFound('Cart', 'userId', userId);
            };
            const cartProducts = await cart.getProducts();
            if (cartProducts.length === 0) {
                throw new InternalServerError();
            };

            const order = await this.repository.createOrder(userId, 'pending');
            const orderProductsArray = cartProducts.map(product => {
                return { 
                    orderId: order.id,
                    productId: product.id,
                    quantity: product.cart_products.quantity
                }
            })
            const orderProducts = await this.repository.addOrderProductsInBulk(orderProductsArray);

            order.status = "successful";
            await order.save();
            await this.cartRepository.clearCart(cart.id);
            return {
                orderId: order.id,
                products: orderProducts
            }
        } catch (error) {
            if (error.name === "NotFound") {
                throw error;
            }
            if (error.name === "UnauthorizedError") {
                throw error;
            };
            console.log("Error from createOrder Service:", error);
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
            if (error.name === "NotFound") {
                throw error;
            }
            console.log("Error from destroyCategory Service:", error);
            throw new InternalServerError();
        }
    };

    async fetchOrderDetails (userId, orderId) {
        try {
            const orderObject = await this.repository.getOrder(orderId);
            if(!orderObject) {
                throw new NotFoundError('Order', 'order id', orderId);
            }
            if(orderObject.userId != userId) {
                throw new UnauthorizedError('You are not authorised to do the current operation');
            }
            const response = await this.repository.fetechOrderDetails(orderId);
            if (!response) {
                throw new NotFound("Order", "orderId", orderId);
            };

            const order = {id: response.id, status: response.status, createdAt: response.createdAt, updatedAt: response.updatedAt};
            let totalOrderValue = 0;
            order.products = response.products.map(product => {
                totalOrderValue += product.price * product.order_products.quantity;
                return {
                    title: product.title,
                    price: product.price,
                    image: product.image,
                    id: product.id,
                    quantity: product.order_products.quantity
                }
            });
            order.totalOrderValue = totalOrderValue;
            return order;
        } catch (error) {
            if (error.name === "NotFound") {
                throw error;
            }
            console.log("Error from fetchOrderDetails Service:", error);
            throw new InternalServerError();
        }
    };
};


module.exports = OrderService;