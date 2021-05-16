import {UserInputError} from "apollo-server";

const customer = async (parent, { id, token }, { Moltin, req }) => {
    try {
        const { data: customer } = await Moltin.Customers.Get(id, req.headers['x-moltin-customer-token'])
        return customer
    } catch (e) {
        throw new UserInputError("API returned with errors.", e)
    }
}
const customerAddresses = async (parent, { customer, token }, { Moltin, req }) => {
    try {
        const { data: addresses } = await Moltin.Addresses.All({ customer: customer, token: req.headers['x-moltin-customer-token'] } )
        return addresses
    } catch (e) {
        throw new UserInputError("API returned with errors.", e)
    }
}

const customerAddress = async (parent, { customer, address: addressInput, token}, { Moltin, req }) => {
    try {
        const { data: address } = await Moltin.Addresses.Get({ customer: customer, address: addressInput, token: req.headers['x-moltin-customer-token'] })
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
