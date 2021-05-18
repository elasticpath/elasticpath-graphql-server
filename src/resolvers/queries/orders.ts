import {UserInputError} from "apollo-server";

const orders = async (parent, {listInput}, {dataSources}) => {
    try {
        return dataSources.ordersAPI.getOrders(listInput)
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
