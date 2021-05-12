const addCustomer = async (root, { customerInput }, { Moltin }) => {
    try {
        const { data: customer } = await Moltin.Customers.Create(customerInput)
        return customer
    } catch (e) {
        return e
    }
}

export default {
    addCustomer,
}
