import {UserInputError} from "apollo-server";

const orders = async (parent, args, {dataSources}) => {
    try {
        return dataSources.ordersAPI.getOrders()
    } catch (e) {
        throw new UserInputError("API returned with errors.", e)
    }
}

const order = async (parent, { id: orderId }, { dataSources }) => {
    try {
        return dataSources.ordersAPI.getOrder(orderId)
    } catch (e) {
        throw new UserInputError("API returned with errors.", e)
    }
}

export default {
    orders,
    order
}