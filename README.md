# Moltin GraphQL Server

[moltin](https://moltin.com) is a fully baked eCommerce REST API for developers.

This repo is a WIP. Contributors welcome 👋

## Installation

```bash
git clone https://github.com/notrab/graphql-moltin-wrapper.git
cd graphql-moltin-wrapper
yarn
```

You will need to set `MOLTIN_CLIENT_ID` inside `.env` or...

```bash
export MOLTIN_CLIENT_ID=
```

## Development

Start the development server is easy.

```bash
yarn dev
```

Development uses [nodemon](https://github.com/remy/nodemon) which automatically reloads code after changes.

Visit [http://localhost:4000/playground](http://localhost:4000/playground) where you will be able to perform queries using GraphiQL.

## Example Query

```graphql
{
  allProducts {
    id
    name
    description
    status
  }

  Product(id: "PRODUCT_ID") {
    id
    name
    description
  }

  allBrands {
    id
    name
  }
}
```

## Production

Most Node deployments will look for the `start` script. This is set to `node index.js` which will run the Express application. You can run as production by running the following;

```bash
NODE_ENV=production yarn start
```
