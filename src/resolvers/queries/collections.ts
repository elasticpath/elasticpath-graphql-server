import {UserInputError} from "apollo-server";

const collections = async (parent, args, {Moltin}) => {
    try {
        const {data: collections} = await Moltin.Collections.All()
        return collections
    } catch (e) {
        throw new UserInputError("API returned with errors.", e)
    }
}

const collection = async (parent, {id}, {Moltin}) => {
    try {
        const {data: collection} = await Moltin.Collections.Get(id)
        return collection
    } catch (e) {
        throw new UserInputError("API returned with errors.", e)
    }
}

export default {
    collections,
    collection
}
