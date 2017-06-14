const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList
} = require('graphql')
const priceType = require('./priceType')

module.exports = new GraphQLObjectType({
  name: 'Product',
  fields: () => ({
    id: {
      type: GraphQLString
    },
    name: {
      type: GraphQLString
    },
    slug: {
      type: GraphQLString
    },
    description: {
      type: GraphQLString
    },
    sku: {
      type: GraphQLString
    },
    status: {
      type: GraphQLString
    },
    commodity_type: {
      type: GraphQLString
    },
    manage_stock: {
      type: GraphQLBoolean
    },
    price: {
      type: new GraphQLList(priceType)
    }
  })
})
