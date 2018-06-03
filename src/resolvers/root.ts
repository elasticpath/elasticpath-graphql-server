export default {
  Product: {
    brands: async ({ relationships }, args, { loaders: { brandLoader } }) => {
      if (!relationships || !relationships.brands) return

      try {
        const brandIds = relationships.brands.data.map(b => b.id)
        const brand = await brandLoader.loadMany(brandIds)

        return brand
      } catch (e) {
        return e
      }
    },

    main_image: async (
      { relationships },
      args,
      { loaders: { mainImageLoader } },
    ) => {
      if (!relationships || !relationships.main_image) return

      try {
        const mainImage = await mainImageLoader.load(
          relationships.main_image.data.id,
        )

        return mainImage
      } catch (e) {
        return e
      }
    },
  },

  Brand: {
    products: async (
      { relationships },
      args,
      { loaders: { productLoader } },
    ) => {
      try {
        if (!relationships || !relationships.products) return

        const productIds = relationships.products.data.map(p => p.id)
        const product = await productLoader.loadMany(productIds)

        return product
      } catch (e) {
        return e
      }
    },
  },
}
