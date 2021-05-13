const categories = async (parent, args, {Moltin}) => {
    try {
        const {data} = await Moltin.Categories.All()
        return data
    } catch (e) {
        return e
    }
}

const category = async (parent, {id}, {Moltin}) => {
    try {
        const {data} = await Moltin.Categories.Get(id)
        return data
    } catch (e) {
        return e
    }
}

export default {
    categories,
    category,
}
