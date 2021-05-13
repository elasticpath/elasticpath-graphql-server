const products = async (parent, args, {Moltin}) => {
    try {
        const {data} = await Moltin.Products.All()
        return data
    } catch (e) {
        return e
    }
}

const product = async (parent, {id}, {Moltin}) => {
    try {
        const {data} = await Moltin.Products.Get(id)
        return data
    } catch (e) {
        return e
    }
}
export default {
    products,
    product
}
