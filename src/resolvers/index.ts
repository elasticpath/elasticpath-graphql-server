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

  Query: {
    products: async (parent, args, { Moltin, loaders }, info) => {
      const { data } = await Moltin.Products.All()

      return data
    },

    product: async (parent, { id }, { Moltin }) => {
      const { data } = await Moltin.Products.Get(id)

      return data
    },

    brands: (root, args, { Moltin }) => {
      return new Promise((resolve, reject) => {
        Moltin.Brands.All()
          .then(({ data }) => resolve(data))
          .catch(err => reject(err))
      })
    },

    brand: (root, { id }, { Moltin }) => {
      return new Promise((resolve, reject) => {
        Moltin.Brands.Get(id)
          .then(({ data }) => resolve(data))
          .catch(err => reject(err))
      })
    },

    collections: (root, args, { Moltin }) => {
      return new Promise((resolve, reject) => {
        Moltin.Collections.All()
          .then(({ data }) => resolve(data))
          .catch(err => reject(err))
      })
    },

    collection: (root, { id }, { Moltin }) => {
      return new Promise((resolve, reject) => {
        Moltin.Collections.Get(id)
          .then(({ data }) => resolve(data))
          .catch(err => reject(err))
      })
    },

    categories: (root, args, { Moltin }) => {
      return new Promise((resolve, reject) => {
        Moltin.Categories.All()
          .then(({ data }) => resolve(data))
          .catch(err => reject(err))
      })
    },

    category: (root, { id }, { Moltin }) => {
      return new Promise((resolve, reject) => {
        Moltin.Categories.Get(id)
          .then(({ data }) => resolve(data))
          .catch(err => reject(err))
      })
    },

    cart: (root, _, { Moltin }) => {
      const getCart = new Promise((resolve, reject) =>
        resolve(Moltin.Cart.Get()),
      )

      const getCartItems = new Promise((resolve, reject) =>
        resolve(Moltin.Cart.Items()),
      )

      return Promise.all([getCart, getCartItems]).then(([cart, items]) => {
        return Object.assign(
          {},
          {
            id: cart.data.id,
            items: items.data,
          },
        )
      })
    },
  },

  Mutation: {
    authenticate: async (
      parent,
      {
        clientId: client_id,
        clientSecret: client_secret,
        grantType: grant_type = 'implicit',
      },
    ) => {
      const body = {
        client_id,
        client_secret,
        grant_type,
      }

      try {
        const data = await fetch(`https://api.moltin.com/oauth/access_token`, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: Object.keys(body)
            .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(body[k])}`)
            .join('&'),
        })

        return data.json()
      } catch (e) {
        console.error(e)
        return { error: e.message }
      }
    },
  },
}
