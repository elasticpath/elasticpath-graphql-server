const collections = async (parent, args, {Moltin}) => {
    try {
        const {data} = await Moltin.Collections.All()
        return data
    } catch (e) {
        return e
    }
}

const collection = async (parent, {id}, {Moltin}) => {
    try {
        const {data} = await Moltin.Collections.Get(id)
        return data
    } catch (e) {
        return e
    }
}

export default {
    collections,
    collection
}