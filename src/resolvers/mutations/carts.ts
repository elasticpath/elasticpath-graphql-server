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

const checkoutCart = async (root, {cartId, customer, billing, shipping = billing}, {dataSources}) => {
    try {
        return dataSources.cartsAPI.checkout(cartId, customer, billing, shipping)
    } catch (e) {
        throw new UserInputError("API returned with errors.", e)
    }
}
export default {
    checkoutCart,
    addToCart,
    addPromotion
}