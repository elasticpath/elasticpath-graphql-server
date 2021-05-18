import authenticationMutation from './mutations/authentication'
import accountMutation from './mutations/accounts'
import cartMutation from './mutations/carts'
import customerMutation from './mutations/customers'

import accountQuery from './queries/accounts'
import cartsQuery from './queries/carts'
import ordersQuery from './queries/orders'
import legacyCatalogQuery from './queries/legacy_catalog'
import pcmQuery from './queries/pcm'
import customerQuery from './queries/customers'
import rootQuery from './root'

export default {
  ...rootQuery,
  Mutation: {
    ...accountMutation,
    ...authenticationMutation,
    ...cartMutation,
    ...customerMutation,
  },
  Query: {
    ...accountQuery,
    ...cartsQuery,
    ...ordersQuery,
    ...pcmQuery,
    ...customerQuery,
    ...legacyCatalogQuery
  },
}