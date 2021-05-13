const customer = async (parent, { id }, { Moltin }) => {
    try {
        const { data: customer } = await Moltin.Customers.Get(id)
        return customer
    } catch (e) {
        return e
    }
}
const customerAddresses = async (parent, { customer }, { Moltin }) => {
    try {
        const { data: addresses } = await Moltin.Addresses.All({ customer })
        return addresses
    } catch (e) {
        return e
    }
}

const customerAddress = async (parent, { customer, address: addressInput }, { Moltin }) => {
    console.log('ddd')
    try {
        const { data: address } = await Moltin.Addresses.Get({ customer, address: addressInput })
        return address
    } catch (e) {
        return e
    }
}

export default {
    customerAddresses,
    customerAddress,
    customer,
}
