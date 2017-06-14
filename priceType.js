const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean
} = require('graphql')

module.exports = new GraphQLObjectType({
  name: 'Price',
  fields: () => ({
    amount: {
      type: GraphQLInt
    },
    currency: {
      type: GraphQLString
    },
    includes_tax: {
      type: GraphQLBoolean
    }
  })
})
