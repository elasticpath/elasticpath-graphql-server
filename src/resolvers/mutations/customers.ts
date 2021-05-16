import { UserInputError } from "apollo-server"

const addCustomer = async (root, {customerInput}, {Moltin}) => {
    try {
        const {data: customer} = await Moltin.Customers.Create(customerInput)
        return customer
    } catch (e) {
        throw new UserInputError("API returned with errors.", e)
    }
}

const addCustomerAddress = async (root, { customerId, address, token }, { Moltin, req }) => {
    try {
        const { data }  = await Moltin.Addresses.Create({ customer: customerId, body: address, token: req.headers['x-moltin-customer-token']})
        return data
    } catch (e) {
        throw new UserInputError("API returned with errors.", e)
    }
}
const updateCustomerAddress = async (root, { customerId, addressId, address, token }, { Moltin, req }) => {
    try {
        const { data: addressRes } = await Moltin.Addresses.Update({
            customer: customerId,
            address: addressId,
            body: address,
            token: req.headers['x-moltin-customer-token']
        })
        return addressRes
    } catch (e) {
        throw new UserInputError("API returned with errors.", e)
    }
}

const deleteCustomerAddress = async (root, { customerId, addressId, token }, { Moltin, req }) => {
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
