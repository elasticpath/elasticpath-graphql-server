import authenticationMutationResolvers from './mutations/authentication'
import cartMutationResolvers from './mutations/carts'
import customerMutationResolvers from './mutations/customers'

import cartsQueryResolvers from './queries/carts'
import ordersQueryResolvers from './queries/orders'
import legacyCatalogQueryResolvers from './queries/legacy_catalog'
import pcmQueryResolvers from './queries/pcm'
import customerQueryResolvers from './queries/customers'
import rootQueryResolvers from './root'

export default {
  ...rootQueryResolvers,
  Mutation: {
    ...authenticationMutationResolvers,
    ...cartMutationResolvers,
    ...customerMutationResolvers,
  },
  Query: {
    ...cartsQueryResolvers,
    ...ordersQueryResolvers,
    ...pcmQueryResolvers,
    ...customerQueryResolvers,
    ...legacyCatalogQueryResolvers
  },
}