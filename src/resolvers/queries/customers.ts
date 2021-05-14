import {UserInputError} from "apollo-server";

const customer = async (parent, { id, token }, { Moltin }) => {
    try {
        const { data: customer } = await Moltin.Customers.Get(id, token)
        return customer
    } catch (e) {
        throw new UserInputError("API returned with errors.", e)
    }
}
const customerAddresses = async (parent, { customer, token }, { Moltin }) => {
    try {
        const { data: addresses } = await Moltin.Addresses.All({ customer, token }, )
        return addresses
    } catch (e) {
        throw new UserInputError("API returned with errors.", e)
    }
}

const customerAddress = async (parent, { customer, address: addressInput, token}, { Moltin }) => {
    try {
        const { data: address } = await Moltin.Addresses.Get({ customer, address: addressInput, token })
        return address
    } catch (e) {
        throw new UserInputError("API returned with errors.", e)
    }
}

export default {
    customerAddresses,
    customerAddress,
    customer,
}
