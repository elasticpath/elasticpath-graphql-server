import {UserInputError} from "apollo-server";

const addToCart = async (root, {cartId, productId, quantity}, {dataSources}) => {
    try {
        return dataSources.cartsAPI.addProductToCart(cartId, productId, quantity)
    } catch (e) {
        throw new UserInputError("API returned with errors.", e)
    }
}

const addPromotion = async (root, {cartId, promotionCode}, {dataSources}) => {
    try {
        return dataSources.cartsAPI.addProductToCart(cartId, promotionCode)
    } catch (e) {
        throw new UserInputError("API returned with errors.", e)
    }
}

const checkoutCart = async (root, {cartId, billing, customer, shipping = billing}, {Moltin}) => {
    try {
        const {data: order} = await Moltin.Cart(cartId).Checkout(
            customer,
            billing,
            shipping,
        )
        return order
    } catch (e) {
        throw new UserInputError("API returned with errors.", e)
    }
}
export default {
    checkoutCart,
    addToCart,
    addPromotion
}
