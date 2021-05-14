import { UserInputError } from "apollo-server"

const addCustomer = async (root, {customerInput}, {Moltin}) => {
    try {
        const {data: customer} = await Moltin.Customers.Create(customerInput)
        return customer
    } catch (e) {
        throw new UserInputError("API returned with errors.", e)
    }
}

const addCustomerAddress = async (root, { customerId, address, token }, { Moltin }) => {
    try {
        const response = await Moltin.Addresses.Create({ customer: customerId, body: address, token: token})
        const { data: addressRes } = response
        return addressRes
    } catch (e) {
        throw new UserInputError("API returned with errors.", e)
    }
}
const updateCustomerAddress = async (root, { customerId, addressId, address, token }, { Moltin }) => {
    try {
        const { data: addressRes } = await Moltin.Addresses.Update({
            customer: customerId,
            address: addressId,
            body: address,
            token,
        })
        return addressRes
    } catch (e) {
        throw new UserInputError("API returned with errors.", e)
    }
}

const deleteCustomerAddress = async (root, { customerId, addressId, token }, { Moltin }) => {
    try {
        await Moltin.Addresses.Delete({ customer: customerId, address: addressId, token })
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

