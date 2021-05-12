const customerAddresses = async (parent, {customer}, {Moltin}) => {
    try {

        const {data: addresses} = await Moltin.Addresses.All({customer:customer})
        return addresses
    } catch (e) {
        return e
    }
}

const customerAddress = async (parent, {customer:customer,address:addressInput}, {Moltin}) => {
    console.log("ddd")
    try {
        const {data: address} = await Moltin.Addresses.Get({customer:customer,address:addressInput})
        return address
    } catch (e) {
        return e
    }
}

export default {
    customerAddresses,
    customerAddress
}
