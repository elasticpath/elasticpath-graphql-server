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
    products,
    product,
    brands,
    brand,
    categories,
    category,
    collections,
    collection
}
