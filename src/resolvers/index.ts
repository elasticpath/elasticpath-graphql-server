import authenticationMutationResolvers from './mutations/authentication'
import cartMutationResolvers from './mutations/cart'
import orderMutationResolvers from './mutations/orders'

import cartQueryResolvers from './queries/cart'
import brandQueryResolvers from './queries/brands'
import productQueryResolvers from './queries/products'
import categoryQueryResolvers from './queries/categories'
import collectionQueryResolvers from './queries/collections'
import rootQueryResolvers from './root'

export default {
  ...rootQueryResolvers,
  Mutation: {
    ...authenticationMutationResolvers,
    ...cartMutationResolvers,
    ...orderMutationResolvers,
  },
  Query: {
    ...brandQueryResolvers,
    ...cartQueryResolvers,
    ...productQueryResolvers,
    ...categoryQueryResolvers,
    ...collectionQueryResolvers
  },
}
