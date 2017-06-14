const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema')

const app = express()

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
    pretty: true
  })
)

app.listen(process.env.PORT || 4000)
