import {UserInputError} from "apollo-server";

const pcmProducts = async (parent, {page_offset:pageOffset,page_limit:pageLimit, sort: sort}, {dataSources}) => {
    try {
        return dataSources.pcmAPI.getProducts(pageOffset, pageLimit, sort)
    } catch (e) {
        throw new UserInputError("API returned with errors.", e)
    }
}

const pcmProduct = async (parent, {id}, {dataSources}) => {
    try {
        return dataSources.pcmAPI.getProduct(id)
    } catch (e) {
        throw new UserInputError("API returned with errors.", e)
    }
}

const nodes = async (parent, args, {dataSources}) => {
    try {
        return dataSources.pcmAPI.getNodes()
    } catch (e) {
        throw new UserInputError("API returned with errors.", e)
    }
}

const node = async (parent, {id}, {dataSources}) => {
    try {
        return dataSources.pcmAPI.getNode(id)
    } catch (e) {
        throw new UserInputError("API returned with errors.", e)
    }
}

const hierarchies = async (parent, args, {dataSources}) => {
    try {
        return dataSources.pcmAPI.getHierarchies()
    } catch (e) {
        throw new UserInputError("API returned with errors.", e)
    }
}

const hierarchy = async (parent, {id}, {dataSources}) => {
    try {
        return dataSources.pcmAPI.getHierarchy(id)
    } catch (e) {
        throw new UserInputError("API returned with errors.", e)
    }
}

export default {
    pcmProducts,
    pcmProduct,
    nodes,
    node,
    hierarchies,
    hierarchy
}