<img src="https://www.elasticpath.com/themes/custom/bootstrap_sass/logo.svg" alt="" width="400" />

# GraphQL Server for Elastic Path Commerce Cloud 

[Elastic Path](https://www.elasticpath.com/) is composable, API-first, headless commerce platform.

Contributors welcome 👋

## Installation

```bash
git clone https://github.com/elasticpath/elasticpath-graphql-server
cd elasticpath-graphql-server
yarn
```

The first time you open the project you may need to run 
```bash
npm isntall apollo-server graphql
```

You will need to set a few environment variables inside.

Copy the `.env.example` file to create a `.env` file and fill in appropriate values or...


```bash
export ELASTICPATH_CLIENT_ID=
export ELASTICPATH_CLIENT_SECRET=
export ELASTICPATH_API_HOST=
```

## Development

Start the development server is easy.

```bash
yarn dev
```

Development uses [nodemon](https://github.com/remy/nodemon) which automatically reloads code after changes.

Visit [http://localhost:4000/graphql](http://localhost:4000/graphql) where you will be able to perform queries using GraphiQL.

## Example Query

```graphql
{
  products {
    id
    name
    description
    status
  }

  product(id: "PRODUCT_ID") {
    id
    name
    description
  }

  brands {
    id
    name
  }
}
```
