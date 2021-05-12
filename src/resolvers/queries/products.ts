const products = async (parent, args, { Moltin }) => {
    try {
        const { data: products } = await Moltin.Products.All()
        return products
    } catch (e) {
        return e
    }
}

const product = async (parent, { id }, { Moltin }) => {
    try {
        const { data: product } = await Moltin.Products.Get(id)
        return product
    } catch (e) {
        return e
    }
}
export default {
    products,
    product,
}
