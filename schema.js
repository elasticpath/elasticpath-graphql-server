const { GraphQLSchema, GraphQLObjectType } = require('graphql')

const queries = require('./queries')

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: queries
  })
})

module.exports = schema
