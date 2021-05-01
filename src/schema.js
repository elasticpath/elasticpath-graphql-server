const { gql } = require('apollo-server');

const typeDefs = gql`
type Product {
  id: ID!
  name: String!
  slug: String!
  description: String!
  status: ActiveStatus!
  price: [ProductPrice]
  brands: [Brand]
  main_image: MainImage
}

type ProductPrice {
  amount: Int!
  currency: String
  includes_tax: Boolean!
}

type MainImage {
  file_name: String
  href: String
}

enum ActiveStatus {
  draft
  live
}

type Brand {
  id: ID!
  type: String!
  name: String!
  slug: String!
  description: String
  status: ActiveStatus!
  products: [Product]
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

type Order {
  id: ID!
  items: [OrderItem]
  status: String!
  payment: String!
  shipping: String!
}

type OrderItem {
  id: ID!
  name: String!
  product_id: ID!
  quantity: Int!
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

type Checkout {
  id: ID!
}

type Payment {
  id: ID!
}

type Query {
  products: [Product]
  product(id: ID!): Product
  brands: [Brand]
  brand(id: ID!): Brand
  collections: [Collection]
  collection(id: ID!): Collection
  categories: [Category]
  category(id: ID!): Category
  cart(id: ID!): Cart
}

input BillingAddress {
  first_name: String!
  last_name: String!
  company_name: String
  line_1: String!
  line_2: String
  city: String
  postcode: String!
  county: String!
  country: String
}

input ShippingAddress {
  first_name: String!
  last_name: String!
  phone_number: String
  company_name: String
  line_1: String!
  line_2: String
  city: String
  postcode: String!
  county: String!
  country: String
  instructions: String
}

input Customer {
  id: ID
  name: String
  email: String
}

type Mutation {
  authenticate(
    clientId: String!
    clientSecret: String
    grantType: AuthGrantType
  ): AuthenticatePayload
  addToCart(productId: ID!, cartId: ID!): Cart
  checkoutCart(
    cartId: ID!
    customer: Customer!
    billing: BillingAddress!
    shipping: ShippingAddress
  ): Order
  stripeTokenPayment(orderId: ID!, token: String!): Order
}

`;

module.exports = typeDefs;
