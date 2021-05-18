require('dotenv').config();
import * as path from 'path';
import * as fs from "fs";
import {print} from 'graphql';
import {mergeTypeDefs} from "@graphql-tools/merge";
import {loadFilesSync} from '@graphql-tools/load-files';
import {ApolloServer, Config} from 'apollo-server'
import resolvers from './resolvers'
import {makeExecutableSchema} from '@graphql-tools/schema';

import {AccountsDataSource} from "./datasources/AccountsDataSource";
import {PCMDataSource} from './datasources/PCMDataSource';
import {TokensDataSource} from "./datasources/TokensDataSource";
import {CartsDataSource} from "./datasources/CartsDataSource";
import {OrdersDataSource} from "./datasources/OrdersDataSource";
import {CustomersDataSource} from "./datasources/CustomersDataSource";
import {LegacyCatalogDataSource} from "./datasources/LegacyCatalogDataSource";

const allTypes = loadFilesSync(path.join(__dirname, "./types/*.graphql"));
const typeDefs: Config["typeDefs"] = mergeTypeDefs(allTypes)
fs.writeFileSync('schema.graphql', print(typeDefs));

// set up any dataSources our resolvers need
const dataSources = () => ({
    accountsAPI: new AccountsDataSource(),
    pcmAPI: new PCMDataSource(),
    tokensAPI: new TokensDataSource(),
    cartsAPI: new CartsDataSource(),
    ordersAPI: new OrdersDataSource(),
    customersAPI: new CustomersDataSource(),
    legacyCatalogAPI: new LegacyCatalogDataSource()
})

// the function that sets up the global context for each resolver, using the req
const context = async ({req}) => {
    return {req}
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
