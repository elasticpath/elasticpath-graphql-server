const cart = async (parent, { id: cartId }, { Moltin }) => {
    const getCart = Moltin.Cart(cartId).Get()
    const getCartItems = Moltin.Cart(cartId).Items()
    const [{ data: cartData }, { data: itemsData }] = await Promise.all([getCart, getCartItems])
    return {
        ...cartData,
        priceWithTax: cartData.meta.display_price.with_tax,
        priceWithoutTax: cartData.meta.display_price.without_tax,
        tax: cartData.meta.display_price.tax,
        items: itemsData,
    }
}

export default {
    cart,
}
