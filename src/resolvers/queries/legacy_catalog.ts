import {UserInputError} from "apollo-server";

const products = async (parent, {}, {dataSources}) => {
    try {
        return dataSources.legacyCatalogAPI.getProducts()
    } catch (e) {
        throw new UserInputError("API returned with errors.", e)
    }
}

const product = async (parent, {id}, {dataSources}) => {
    try {
        return dataSources.legacyCatalogAPI.getProduct(id)
    } catch (e) {
        throw new UserInputError("API returned with errors.", e)
    }
}
const brands = async (parent, args, {dataSources}) => {
    try {
        return dataSources.legacyCatalogAPI.getBrands()
    } catch (e) {
        throw new UserInputError("API returned with errors.", e)
    }
}

const brand = async (parent, {id}, {dataSources}) => {
    try {
        return dataSources.legacyCatalogAPI.getBrand(id)
    } catch (e) {
        throw new UserInputError("API returned with errors.", e)
    }
}

const categories = async (parent, args, {dataSources}) => {
    try {
        return dataSources.legacyCatalogAPI.getCategories()
    } catch (e) {
        throw new UserInputError("API returned with errors.", e)
    }
}

const category = async (parent, {id}, {dataSources}) => {
    try {
        return dataSources.legacyCatalogAPI.getCategory(id)
    } catch (e) {
        throw new UserInputError("API returned with errors.", e)
    }
}

const collections = async (parent, args, {dataSources}) => {
    try {
        return dataSources.legacyCatalogAPI.getCollections()
    } catch (e) {
        throw new UserInputError("API returned with errors.", e)
    }
}

const collection = async (parent, {id}, {dataSources}) => {
    try {
        return dataSources.legacyCatalogAPI.getCollection(id)
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
