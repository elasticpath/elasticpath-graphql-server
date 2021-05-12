require('dotenv').config();
import { typeDefs } from './schema'
import {gateway as MoltinGateway} from '@moltin/sdk'
import {ApolloServer} from 'apollo-server'
import resolvers from './resolvers'
import loaders from './loaders'

const { makeExecutableSchema } = require('apollo-server');

const {ELASTICPATH_CLIENT_ID, ELASTICPATH_CLIENT_SECRET, ELASTICPATH_API_HOST} = process.env

export const Moltin = MoltinGateway({
    client_id: ELASTICPATH_CLIENT_ID,
    client_secret: ELASTICPATH_CLIENT_SECRET,
    host: ELASTICPATH_API_HOST
})


// set up any dataSources our resolvers need
const dataSources = () => ({})

// the function that sets up the global context for each resolver, using the req
const context = async ({req}) => {
    return {...req, Moltin, loaders}
}

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});

// Set up Apollo Server
const server = new ApolloServer({
    schema,
    dataSources,
    context,
    introspection: true,
    playground: true,
    engine: {},
})

// Start our server if we're not in a test env.
// if we're in a test env, we'll manually start it in a test
if (process.env.NODE_ENV !== 'test') {
    server.listen().then(() => {
        console.log(`
      Server is running!
      Listening on port 4000
      Query at https://studio.apollographql.com/dev
    `)
    })
}

// export all the important pieces for integration/e2e tests to use
module.exports = {
    dataSources,
    context,
    typeDefs,
    resolvers,
    ApolloServer,
    server,
}
