import {UserInputError} from "apollo-server";

const products = async (parent, args, {Moltin}) => {
    try {
        const {data: products} = await Moltin.Products.All()
        return products
    } catch (e) {
        throw new UserInputError("API returned with errors.", e)
    }
}

const product = async (parent, {id}, {Moltin}) => {
    try {
        const {data: product} = await Moltin.Products.Get(id)
        return product
    } catch (e) {
        throw new UserInputError("API returned with errors.", e)
    }
}
export default {
    products,
    product
}
