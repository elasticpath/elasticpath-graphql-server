import {UserInputError} from "apollo-server";

const orders = async (parent, {page_offset:pageOffset,page_limit:pageLimit}, {dataSources}) => {
    try {
        return dataSources.ordersAPI.getOrders(pageOffset,pageLimit)
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