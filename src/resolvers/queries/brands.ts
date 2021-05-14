import {UserInputError} from "apollo-server";

const brands = async (parent, args, {Moltin}) => {
    try {
        const {data: brands} = await Moltin.Brands.All()
        return brands
    } catch (e) {
        throw new UserInputError("API returned with errors.", e)
    }
}

const brand = async (parent, {id}, {Moltin}) => {
    try {
        const {data: brand} = await Moltin.Brands.Get(id)
        return brand
    } catch (e) {
        throw new UserInputError("API returned with errors.", e)
    }
}

export default {
    brands,
    brand
}
