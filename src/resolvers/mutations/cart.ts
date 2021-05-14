import {UserInputError} from "apollo-server";

const addToCart = async (root, {productId, cartId, quantity}, {Moltin}) => {
    try {
        await Moltin.Cart(cartId).AddProduct(productId, quantity)
        const getCart = Moltin.Cart(cartId).Get()
        const getCartItems = Moltin.Cart(cartId).Items()

        const [{data: {id}}, {data: items}] = await Promise.all([
            getCart,
            getCartItems,
        ])
        return {id, items}
    } catch (e) {
        throw new UserInputError("API returned with errors.", e)
    }
}

const addPromotion = async (root, {cartId, promotionCode}, {Moltin}) => {
    try {
        await Moltin.Cart(cartId).AddPromotion(promotionCode)
        const getCart = Moltin.Cart(cartId).Get()
        const getCartItems = Moltin.Cart(cartId).Items()

        const [{data: {id}}, {data: items}] = await Promise.all([
            getCart,
            getCartItems,
        ])
        return {id, items}
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
