export default {
  Query: {
    collections: async (parent, args, { Moltin }) => {
      try {
        const { data: collections } = await Moltin.Collections.All()

        return collections
      } catch (e) {
        return e
      }
    },

    collection: async (parent, { id }, { Moltin }) => {
      try {
        const { data: collection } = await Moltin.Collections.Get(id)

        return collection
      } catch (e) {
        return e
      }
    },
  },
}
