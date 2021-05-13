<img src="https://www.elasticpath.com/themes/custom/bootstrap_sass/logo.svg" alt="" width="400" />

# GraphQL Server for Elastic Path Commerce Cloud 

[Elastic Path](https://www.elasticpath.com/) is composable, API-first, headless commerce platform.

Contributors welcome 👋

## Pre-requisites 
This code uses [Apollo Server](https://www.apollographql.com/docs/apollo-server/getting-started/)

## Installation

```bash
git clone https://github.com/elasticpath/elasticpath-graphql-server
cd elasticpath-graphql-server
yarn
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

### Example Query

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

## Testing

This project uses postman collection to handle testing. We can run the tests on the command-line using newman so it is easy to incorporate those tests in CI.

Before running the tests, make sure your server is up and running!

Run the tests with the following command:

```bash
yarn test
```

### Adding to the tests

By default postman collections run in the order of the collection. In order to control test order we use postman's `setNextRequest` to create a workflow.
When adding new apis and tests, make sure to add them into the workflow appropriately and to not break the chain.

When you make a schema change, you can do the following to add to the collection:

1. Make sure the `schema.graphql` has been updated with your changes.
1. In postman create new `API` and select schema type as `GraphQL` with format `GraphQL SDL`. (If you already have one, then re-use it)
1. Under `Define` tab, update the schema with the contents of `schema.graphql` 
1. Click on `Generate Collection` giving it a name and selecting `Test the API` to create a Test suite collection.
1. Export the new postman collection to a file, and open with IntelliJ (or your favourite compare tool)
1. Using IntelliJ compare the new collection with the existing one under `postman` directory.
1. Merge any differences in the file to the existing collection, making sure to leave the tests.
1. Import the collection into Postman, replacing an existing collection.
1. Using the options on the collection you can `Run the collection` which will execute all of the tests.
    - If there are test failures, make sure to fix them.
1. Add new tests to any new APIs, make sure to use the `setNextRequest` to add your tests into the current workflow.
    - The workflow allows us to control order of tests, to do things such as get all products, store the id of a product, followed by getting product by id.
    - For an example of tests, check out `products` and `product` within the Postman Collection.
1. Make sure all tests are passing, then export your updated collection and save it back into the project.
