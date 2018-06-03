import { GraphQLServer } from 'graphql-yoga'
import { gateway as MoltinGateway } from '@moltin/sdk'

import resolvers from './resolvers'
import loaders from './loaders'

const { MOLTIN_CLIENT_ID, MOLTIN_CLIENT_SECRET } = process.env

export const Moltin = MoltinGateway({
  client_id: MOLTIN_CLIENT_ID,
  client_secret: MOLTIN_CLIENT_SECRET,
})

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    Moltin,
    loaders,
  }),
})

server.start(({ port }) => console.log(`Server is running on PORT: ${port}`))
