import authenticationMutationResolvers from './mutations/authentication'
import cartMutationResolvers from './mutations/carts'
import orderMutationResolvers from './mutations/orders'
import customerMutationResolvers from './mutations/customers'

import cartQueryResolvers from './queries/cart'
import legacyCatalogQueryResolvers from './queries/legacy_catalog'
import pcmQueryResolvers from './queries/pcm'
import customerQueryResolvers from './queries/customers'
import rootQueryResolvers from './root'

export default {
  ...rootQueryResolvers,
  Mutation: {
    ...authenticationMutationResolvers,
    ...cartMutationResolvers,
    ...orderMutationResolvers,
    ...customerMutationResolvers,
  },
  Query: {
    ...cartQueryResolvers,
    ...pcmQueryResolvers,
    ...customerQueryResolvers,
    ...legacyCatalogQueryResolvers
  },
}
