module.exports = `
  enum ProductType {
    product
  }

  enum ActiveStatus {
    draft
    live
  }

  type Price {
    amount: Int!
    currency: String!
    includes_tax: Boolean!
  }

  type Product {
    id: ID!
    type: ProductType!
    name: String!
    description: String!
    slug: String!
    status: ActiveStatus!
    sku: String!
    manage_stock: Boolean!
    price: [Price]
  }

  type Brand {
    id: ID!
    type: String!
    name: String
    slug: String
    description: String
    status: ActiveStatus
  }

  type Collection {
    id: ID!
    type: String!
    status: ActiveStatus
    name: String
    slug: String
    description: String
  }

  type Category {
    id: ID!
    type: String!
    status: ActiveStatus
    name: String
    slug: String
    description: String
  }

  type CartItem {
    id: ID!
    type: String!
    name: String!
    description: String
    quantity: Int!
  }

  type Cart {
    id: ID!
    items: [CartItem]
  }

  type Query {
    allProducts: [Product]
    Product(id: ID!): Product
    allBrands: [Brand]
    Brand(id: ID!): Brand
    allCollections: [Collection]
    Collection(id: ID!): Collection
    allCategories: [Category]
    Category(id: ID!): Category
    Cart: Cart
  }

  enum AuthGrantType {
    client_credentials
    implicit
    refresh_token
  }

  type AuthenticatePayload {
    expires: Int!
    identifier: String!
    expires_in: Int!
    access_token: String!
    token_type: String!
  }

  type Mutation {
    authenticate(clientId: String!, clientSecret: String, grantType: AuthGrantType!): AuthenticatePayload
  }
`;
