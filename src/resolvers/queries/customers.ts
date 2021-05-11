export default {
  customers: async (parent, args, { Moltin }) => {
    try {
      const { data: customers } = await Moltin.Customers.All()

      return customers
    } catch (e) {
      return e
    }
  },

  customer: async (parent, { id }, { Moltin }) => {
    try {
      const { data: customer } = await Moltin.Customers.Get(id)
      return customer
    } catch (e) {
      return e
    }
  },
}
