# Moltin via GraphQL

```sh
yarn
```

http://localhost:4000/graphql for GraphiQL.

## Example query

```graphql
{
  products {
    id
    name
    slug
    description
    status
    sku
    manage_stock
    commodity_type
    price {
      currency
      amount
      includes_tax
    }
  }
}
```
