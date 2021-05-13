const promotions = async (parent, args, {Moltin}) => {
    try {
        const {data} = await Moltin.Promotions.All()
        return data
    } catch (e) {
        return e
    }
}

const promotion = async (parent, {id}, {Moltin}) => {
    try {
        const {data} = await Moltin.Promotions.Get(id)
        return data
    } catch (e) {
        return e
    }
}
export default {
    promotion,
    promotions,
}
