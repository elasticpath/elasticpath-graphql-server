const { GraphQLList } = require('graphql')
const productType = require('./productType')
const Moltin = require('./moltin')

module.exports = {
  type: new GraphQLList(productType),
  args: {},
  resolve: (root, args) => {
    return new Promise((resolve, reject) => {
      Moltin.Products
        .All()
        .then(({ data }) => resolve(data))
        .catch(err => reject(err))
    })
  }
}
