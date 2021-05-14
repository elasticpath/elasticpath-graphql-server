import authenticationMutationResolvers from './mutations/authentication'
import cartMutationResolvers from './mutations/cart'
import orderMutationResolvers from './mutations/orders'
import customerMutationResolvers from './mutations/customers'

import cartQueryResolvers from './queries/cart'
import brandQueryResolvers from './queries/brands'
import productQueryResolvers from './queries/products'
import pcmQueryResolvers from './queries/pcm'
import categoryQueryResolvers from './queries/categories'
import collectionQueryResolvers from './queries/collections'
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
    ...brandQueryResolvers,
    ...cartQueryResolvers,
    ...productQueryResolvers,
    ...pcmQueryResolvers,
    ...categoryQueryResolvers,
    ...collectionQueryResolvers,
    ...customerQueryResolvers
  },
}
