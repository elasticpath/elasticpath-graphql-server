import { UserInputError } from "apollo-server"

const addCustomer = async (root, {customerInput}, {dataSources}) => {
    try {
        return dataSources.customersAPI.createCustomer(customerInput)
    } catch (e) {
        throw new UserInputError("API returned with errors.", e)
    }
}

const addCustomerAddress = async (root, { customerId, address }, { dataSources}) => {
    try {
        return dataSources.customersAPI.createCustomerAddress(customerId, address)
    } catch (e) {
        throw new UserInputError("API returned with errors.", e)
    }
}
const updateCustomerAddress = async (root, { customerId, addressId, address }, { dataSources }) => {
    try {
        return dataSources.customersAPI.updateCustomerAddress(customerId, addressId, address)
    } catch (e) {
        throw new UserInputError("API returned with errors.", e)
    }
}

const deleteCustomerAddress = async (root, { customerId, addressId }, { Moltin, req }) => {
    try {
        await Moltin.Addresses.Delete({ customer: customerId, address: addressId, token: req.headers['x-moltin-customer-token'] })
        return true
    } catch (e) {
        throw new UserInputError("API returned with errors.", e)
    }
}

export default {
    addCustomer,
    addCustomerAddress,
    updateCustomerAddress,
    deleteCustomerAddress,
}
