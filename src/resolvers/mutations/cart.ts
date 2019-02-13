export default {
  addToCart: async (root, { productId, cartId }, { Moltin }) => {
    try {
      await Moltin.Cart(cartId).AddProduct(productId)

      const getCart = Moltin.Cart(cartId).Get()
      const getCartItems = Moltin.Cart(cartId).Items()

      const [{ data: { id } }, { data: items }] = await Promise.all([
        getCart,
        getCartItems,
      ])

      return {
        id,
        items,
      }
    } catch (e) {
      return e
    }
  },

  checkoutCart: async (
    root,
    { cartId, billing, customer, shipping = billing },
    { Moltin },
  ) => {
    try {
      const { data: order } = await Moltin.Cart(cartId).Checkout(
        customer,
        billing,
        shipping,
      )

      return order
    } catch (e) {
      return e
    }
  },
}
