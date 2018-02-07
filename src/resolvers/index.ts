export default {
  Query: {
    allProducts: async (parent, args, { Moltin }) => {
      const { data } = await Moltin.Products.All()

      return data
    },

    Product: async (parent, { id }, { Moltin }) => {
      const { data } = await Moltin.Products.Get(id)

      return data
    },

    allBrands: (root, args, { Moltin }) => {
      return new Promise((resolve, reject) => {
        Moltin.Brands.All()
          .then(({ data }) => resolve(data))
          .catch(err => reject(err))
      })
    },

    Brand: (root, { id }, { Moltin }) => {
      return new Promise((resolve, reject) => {
        Moltin.Brands.Get(id)
          .then(({ data }) => resolve(data))
          .catch(err => reject(err))
      })
    },

    allCollections: (root, args, { Moltin }) => {
      return new Promise((resolve, reject) => {
        Moltin.Collections.All()
          .then(({ data }) => resolve(data))
          .catch(err => reject(err))
      })
    },

    Collection: (root, { id }, { Moltin }) => {
      return new Promise((resolve, reject) => {
        Moltin.Collections.Get(id)
          .then(({ data }) => resolve(data))
          .catch(err => reject(err))
      })
    },

    allCategories: (root, args, { Moltin }) => {
      return new Promise((resolve, reject) => {
        Moltin.Categories.All()
          .then(({ data }) => resolve(data))
          .catch(err => reject(err))
      })
    },

    Category: (root, { id }, { Moltin }) => {
      return new Promise((resolve, reject) => {
        Moltin.Categories.Get(id)
          .then(({ data }) => resolve(data))
          .catch(err => reject(err))
      })
    },

    Cart: (root, _, { Moltin }) => {
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
        grantType: grant_type,
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

    addToCart: async (parent, { productId, cartId }) => {
      // const cart = await getCartItems

      // demo purposes
      return {
        id: 'Test',
        items: [
          {
            id: 'randomID',
            type: 'item',
            name: 'iPhone X',
            description: 'Some random description about the product',
            quantity: 456,
          },
          {
            id: 'randomID',
            type: 'item',
            name: 'iPhone 8',
            description: 'Some random description about the product',
            quantity: 82,
          },
        ],
      }
    },

    checkout: async (parent, { input }) => {
      // demo purposes
      return { id: 'Test' }
    },

    pay: async (parent, { cartId }) => {
      // demo purposes
      return { id: 'Test' }
    },
  },
}
