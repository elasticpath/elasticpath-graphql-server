const addCustomer = async (root, {customerInput}, {Moltin}) => {
    try {
        const {data: customer} = await Moltin.Customers.Create(customerInput)
        return customer
    } catch (e) {
        return e
    }
}

const addCustomerAddress = async (root, { customerId, address, token }, { Moltin }) => {
    try {
        const { data: addressRes } = await Moltin.Addresses.Create({ customer: customerId, body: address, token: token})
        return addressRes
    } catch (e) {
        return e
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
        return e
    }
}

const deleteCustomerAddress = async (root, { customerId, addressId, token }, { Moltin }) => {
    try {
        await Moltin.Addresses.Delete({ customer: customerId, address: addressId, token })
        return true
    } catch (e) {
        return e
    }
}

export default {
    addCustomer,
    addCustomerAddress,
    updateCustomerAddress,
    deleteCustomerAddress,
}

