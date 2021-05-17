const orders = async (parent, {token}, {Moltin}) => {
    try {
        const {data: orders} = await Moltin.Orders.All(token)
        return orders
    } catch (e) {
        return e
    }
}

export default {
    orders
}
