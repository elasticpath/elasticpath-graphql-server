export default {
  cart: async (root, args, { Moltin }) => {
    const getCart = await Moltin.Cart().Get()
    const getCartItems = await Moltin.Cart().Items()

    const [{ data: { id } }, { data: items }] = await Promise.all([
      getCart,
      getCartItems,
    ])

    return {
      id,
      items,
    }
  },
}
