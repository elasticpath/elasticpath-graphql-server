import {UserInputError} from "apollo-server";

const cart = async (parent, { id: cartId }, { dataSources }) => {
    try {
        return dataSources.cartsAPI.getCart(cartId)
    } catch (e) {
        throw new UserInputError("API returned with errors.", e)
    }
}

export default {
    cart,
}
