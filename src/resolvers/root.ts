import { UserInputError } from "apollo-server"

const brands = async ({relationships}, args, {dataSources}) => {
    if (!relationships || !relationships.brands) return
    try {
        const brandIds = relationships.brands.data.map(b => b.id)
        return brandIds.map(async id => {
            return dataSources.legacyCatalogAPI.getBrand(id)
        })
    } catch (e) {
        throw new UserInputError("API returned with errors.", e)
    }
}

const main_image = async ({relationships}, args, {dataSources}) => {
    if (!relationships || !relationships.main_image) return
    try {
        const { link, ...rest } = await dataSources.legacyCatalogAPI.getFile(relationships.main_image.data.id)
        return {
            href: link.href,
            ...rest
        }
    } catch (e) {
        throw new UserInputError("API returned with errors.", e)
    }
}

const products = async ({relationships}, args, {dataSources}) => {
    try {
        if (!relationships || !relationships.products) return
        const productIds = relationships.products.data.map(p => p.id)
        return productIds.map(async id => {
            return dataSources.legacyCatalogAPI.getProduct(id)
        })
    } catch (e) {
        throw new UserInputError("API returned with errors.", e)
    }
}


export default {
    Product: {
        brands,
        main_image
    },
    Brand: {
        products
    },
    
    Cart: {
        items: (parent, __, { dataSources }) => dataSources.cartsAPI.getCartItems(parent.id),
        priceWithTax: (parent) => parent.meta.display_price.with_tax,
        priceWithoutTax: (parent) => parent.meta.display_price.without_tax,
        tax: (parent) => parent.meta.display_price.tax,
    },

    Node: {
        children: (parent, __, { dataSources }) => dataSources.pcmAPI.getNodeChildren(parent.id),
        products: (parent, __, { dataSources }) => dataSources.pcmAPI.getNodesProduct(parent.id)
    }
}
