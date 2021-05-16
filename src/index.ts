require('dotenv').config();
import { typeDefs } from './types'
import {gateway as MoltinGateway} from '@moltin/sdk'
import {ApolloServer} from 'apollo-server'
import resolvers from './resolvers'
import loaders from './loaders'
import { makeExecutableSchema } from '@graphql-tools/schema';

import {PCMDataSource} from './datasources/PCMDataSource'
import {TokensDataSource} from "./datasources/TokensDataSource";
import {CartsDataSource} from "./datasources/CartsDataSource";
import {CustomersDataSource} from "./datasources/CustomersDataSource";
import {LegacyCatalogDataSource} from "./datasources/LegacyCatalogDataSource";

const {ELASTICPATH_CLIENT_ID, ELASTICPATH_API_HOST} = process.env

export const Moltin = MoltinGateway({
    client_id: ELASTICPATH_CLIENT_ID,
    host: ELASTICPATH_API_HOST
})

// set up any dataSources our resolvers need
export const dataSources = () => ({
    pcmAPI: new PCMDataSource(),
    tokensAPI: new TokensDataSource(),
    cartsAPI: new CartsDataSource(),
    customersAPI: new CustomersDataSource(),
    legacyCatalogAPI: new LegacyCatalogDataSource()
})

// the function that sets up the global context for each resolver, using the req
const context = async ({req}) => {
    return {req, Moltin, loaders}
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
    server.listen().then(({url}) => {
        console.log(`\n\tServer is ready at ${url}, For postman, curl and Playground.\n`)
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
