export default {
  stripeTokenPayment: async (root, { orderId, token: payment }, { Moltin }) => {
    try {
      await Moltin.Orders.Payment(orderId, {
        gateway: 'stripe',
        method: 'purchase',
        payment,
      })

      const getOrder = Moltin.Orders.Get(orderId)
      const getOrderItems = Moltin.Orders.Items(orderId)

      const [{ data: { id, ...rest } }, { data: items }] = await Promise.all([
        getOrder,
        getOrderItems,
      ])

      return {
        id,
        items,
        ...rest,
      }
    } catch (e) {
      return e
    }
  },
}
