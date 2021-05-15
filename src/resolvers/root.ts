import { UserInputError } from "apollo-server"

const brands = async ({relationships}, args, {loaders: {brandLoader}}) => {
    if (!relationships || !relationships.brands) return
    try {
        const brandIds = relationships.brands.data.map(b => b.id)
        return await brandLoader.loadMany(brandIds)
    } catch (e) {
        throw new UserInputError("API returned with errors.", e)
    }
}

const main_image = async ({relationships}, args, {loaders: {mainImageLoader}}) => {
    if (!relationships || !relationships.main_image) return
    try {
        return await mainImageLoader.load(relationships.main_image.data.id)
    } catch (e) {
        throw new UserInputError("API returned with errors.", e)
    }
}

const products = async ({relationships}, args, {loaders: {productLoader}}) => {
    try {
        if (!relationships || !relationships.products) return
        const productIds = relationships.products.data.map(p => p.id)
        return await productLoader.loadMany(productIds)
    } catch (e) {
        throw new UserInputError("API returned with errors.", e)
    }
}

const items = async (parent, { id: cartId }, { dataSources }) => {
    try {
        return dataSources.cartsAPI.getCartItems(cartId)
    } catch (e) {
        throw new UserInputError("API returned with errors.", e)
    }
}

const priceWithTax = (parent) => parent.meta.display_price.with_tax
const priceWithoutTax= (parent) => parent.meta.display_price.without_tax
const tax = (parent) => parent.meta.display_price.tax

export default {
    Product: {
        brands,
        main_image
    },
    Brand: {
        products
    },
    //TODO: refactor this later
    Cart: {
        items,
        priceWithTax,
        priceWithoutTax,
        tax
    }
}
