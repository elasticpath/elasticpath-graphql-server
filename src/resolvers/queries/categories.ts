import {UserInputError} from "apollo-server";

const categories = async (parent, args, {Moltin}) => {
    try {
        const {data: categories} = await Moltin.Categories.All()
        return categories
    } catch (e) {
        throw new UserInputError("API returned with errors.", e)
    }
}

const category = async (parent, {id}, {Moltin}) => {
    try {
        const {data: category} = await Moltin.Categories.Get(id)
        return category
    } catch (e) {
        throw new UserInputError("API returned with errors.", e)
    }
}

export default {
    categories,
    category,
}
