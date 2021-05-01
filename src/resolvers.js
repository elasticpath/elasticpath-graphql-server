module.exports = {
  Query: {
    products: async (parent, args, { Moltin }) => {
      try {
        const { data: products } = await Moltin.Products.All()

        return products
      } catch (e) {
        return e
      }
    },

    product: async (parent, { id }, { Moltin }) => {
      try {
        const { data: product } = await Moltin.Products.Get(id)

        return product
      } catch (e) {
        return e
      }
    },
    
    brands: async (parent, args, { Moltin }) => {
      try {
        const { data: brands } = await Moltin.Brands.All()

        return brands
      } catch (e) {
        return e
      }
    },

    brand: async (parent, { id }, { Moltin }) => {
      try {
        const { data: brand } = await Moltin.Brands.Get(id)

        return brand
      } catch (e) {
        return e
      }
    },
  },
  Mutation: {
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
  },
};