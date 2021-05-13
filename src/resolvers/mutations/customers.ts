const addCustomer = async (root, {customerInput}, {Moltin}) => {
    try {
        const {data: customer} = await Moltin.Customers.Create(customerInput)
        return customer
    } catch (e) {
        return e
    }
}

const addCustomerAddress = async (root, { customerId, address }, { Moltin }) => {
    try {
        const { data: addressRes } = await Moltin.Addresses.Create({ customer: customerId, body: address })
        return addressRes
    } catch (e) {
        return e
    }
}
const updateCustomerAddress = async (root, { customerId, addressId, address }, { Moltin }) => {
    try {
        const { data: addressRes } = await Moltin.Addresses.Update({
            customer: customerId,
            address: addressId,
            body: address,
        })
        return addressRes
    } catch (e) {
        return e
    }
}

const deleteCustomerAddress = async (root, { customerId, addressId }, { Moltin }) => {
    try {
        await Moltin.Addresses.Delete({ customer: customerId, address: addressId })
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

