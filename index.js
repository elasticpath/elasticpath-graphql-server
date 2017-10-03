const express = require('express');
const bodyParser = require('body-parser');
const {graphqlExpress, graphiqlExpress} = require('apollo-server-express');
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

const app = express();

app.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress({
    formatError,
    schema,
    context: {
      Moltin
    }
  })
);

app.get('/graphiql', graphiqlExpress({endpointURL: '/graphql'}));

app.listen(process.env.PORT || 5000);
