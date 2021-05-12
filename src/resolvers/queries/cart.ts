const cart = async (root, { id: cartId }, { Moltin }) => {
    const getCart = Moltin.Cart(cartId).Get()
    const getCartItems = Moltin.Cart(cartId).Items()
    const [{ data: { id } }, { data: items }] = await Promise.all([getCart, getCartItems])
    return { id, items }
}

export default {
    cart,
}
