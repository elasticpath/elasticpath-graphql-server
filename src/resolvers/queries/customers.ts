const customer = async (parent, { id }, { Moltin }) => {
    try {
        const {data} = await Moltin.Customers.Get(id)
        return data
    } catch (e) {
        return e
    }
}
const customerAddresses = async (parent, { customer }, { Moltin }) => {
    try {
        const {data} = await Moltin.Addresses.All({ customer })
        return data
    } catch (e) {
        return e
    }
}

const customerAddress = async (parent, { customer, address: addressInput }, { Moltin }) => {
    try {
        const {data} = await Moltin.Addresses.Get({ customer, address: addressInput })
        return data
    } catch (e) {
        return e
    }
}

export default {
    customerAddresses,
    customerAddress,
    customer,
}
