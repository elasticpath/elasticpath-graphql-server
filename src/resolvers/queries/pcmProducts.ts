const pcmProducts = async (parent, args, {Moltin}) => {
    try {
        const {data: products} = await Moltin.PCM.All()
        return products
    } catch (e) {
        return e
    }
}

const pcmProduct = async (parent, {id}, {Moltin}) => {
    try {
        const {data: product} = await Moltin.PCM.Get(id)
        return product
    } catch (e) {
        return e
    }
}
export default {
    pcmProducts,
    pcmProduct
}
