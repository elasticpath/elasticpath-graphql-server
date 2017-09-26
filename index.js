const server = require('apollo-server-micro');
const {makeExecutableSchema} = require('graphql-tools');
const {formatError} = require('apollo-errors');
const MoltinGateway = require('@moltin/sdk').gateway;

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

const Moltin = MoltinGateway({
  client_id: 'AQ8ZbUAOozQlOz3Sw0A0mXRR7iNAtwqGJYSxctwaZh'
});

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

module.exports = server.microGraphql({
  formatError,
  schema,
  context: {
    Moltin
  }
});
