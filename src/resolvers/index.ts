import authenticationMutationResolvers from './mutations/authentication'

import cartQueryResolvers from './queries/cart'
import brandQueryResolvers from './queries/brands'
import productQueryResolvers from './queries/products'
import rootQueryResolvers from './root'

export default {
  ...rootQueryResolvers,
  Mutation: {
    ...authenticationMutationResolvers,
  },
  Query: {
    ...brandQueryResolvers,
    ...cartQueryResolvers,
    ...productQueryResolvers,
  },
}
