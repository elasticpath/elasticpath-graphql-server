const express = require('express')
const bodyParser = require('body-parser')
const {graphqlExpress, graphiqlExpress} = require('apollo-server-express')
const {makeExecutableSchema} = require('graphql-tools')
const {formatError} = require('apollo-errors')
const MoltinGateway = require('@moltin/sdk').gateway

const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers')

const {PORT = 5000, MOLTIN_CLIENT_ID} = process.env

const Moltin = MoltinGateway({
  client_id: MOLTIN_CLIENT_ID
})

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

const app = express()

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
)

app.get('/graphiql', graphiqlExpress({endpointURL: '/graphql'}))

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`)
})
