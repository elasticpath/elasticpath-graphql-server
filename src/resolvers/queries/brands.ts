const brands = async (parent, args, {Moltin}) => {
    try {
        const {data} = await Moltin.Brands.All()
        return data
    } catch (e) {
        return e
    }
}

const brand = async (parent, {id}, {Moltin}) => {
    try {
        const {data} = await Moltin.Brands.Get(id)
        return data
    } catch (e) {
        return e
    }
}

export default {
    brands,
    brand
}
