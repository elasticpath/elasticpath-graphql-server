import {UserInputError} from "apollo-server";

const customer = async (parent, { id }, { dataSources}) => {
    try {
        return dataSources.customersAPI.getCustomer(id)
    } catch (e) {
        throw new UserInputError("API returned with errors.", e)
    }
}
const customerAddresses = async (parent, { customerId }, { dataSources }) => {
    try {
        return dataSources.customersAPI.getCustomerAddresses(customerId)
    } catch (e) {
        throw new UserInputError("API returned with errors.", e)
    }
}

const customerAddress = async (parent, { customerId, addressId}, { dataSources }) => {
    try {
        return dataSources.customersAPI.getCustomerAddress(customerId, addressId)
    } catch (e) {
        throw new UserInputError("API returned with errors.", e)
    }
}

export default {
    customerAddresses,
    customerAddress,
    customer,
}
