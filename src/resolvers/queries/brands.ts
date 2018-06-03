export default {
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
}
