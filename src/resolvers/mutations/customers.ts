const addCustomerAddress = async (root, {customerId,address}, {Moltin}) => {
    try {
        const {data: addressRes} = await Moltin.Addresses.Create({customer : customerId,body : address})
        return addressRes
    } catch (e) {
        return e
    }
}
const updateCustomerAddress = async (root, {customerId,addressId,address}, {Moltin}) => {
    console.log(customerId,addressId,address)
    try {
        const {data: addressRes} = await Moltin.Addresses.Update({customer : customerId, address : addressId, body : address})
        return addressRes
    } catch (e) {
        console.log(e.error())
        return e
    }
}

export default {
    addCustomerAddress,
    updateCustomerAddress
}