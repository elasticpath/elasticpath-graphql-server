<img src="https://www.elasticpath.com/themes/custom/bootstrap_sass/logo.svg" alt="" width="400" />

# GraphQL Server for Elastic Path Commerce Cloud 

[Elastic Path](https://www.elasticpath.com/) is a composable, API-first, headless commerce platform. This project provides a [GraphQL](https://graphql.org/) abstraction for a subset of Elastic Path Commerce Cloud APIs to support shopping experiences. APIs that are used for store administration are not included in this project. This code uses [Apollo Server](https://www.apollographql.com/docs/apollo-server/getting-started/).

Contributors welcome 👋

## Pre-requisites
This requires an [Elastic Path Commerce Cloud](https://www.elasticpath.com) account.

## Architecture

This GraphQL server can be hosted anywhere by an Elastic Path customer. For each GraphQL query it makes one or more REST calls to Elastic Path Commerce Cloud. The diagram below shows one example query execution.
![Architecture](docs/architecture.png)

## Installation

```bash
git clone https://github.com/elasticpath/elasticpath-graphql-server
cd elasticpath-graphql-server
yarn
```

You will need to set a few environment variables inside.

Copy the `.env.example` file to create a `.env` file and fill in appropriate values or...


```bash
export ELASTICPATH_API_HOST=
```

## Development

Starting the development server is easy.

```bash
yarn dev
```

Development uses [nodemon](https://github.com/remy/nodemon) which automatically reloads code after changes.

Visit [http://localhost:4000/](http://localhost:4000/) where you will be able to perform queries using [GraphQL Playground](https://github.com/graphql/graphql-playground).

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

Postman can help generate a collection for us based on our schema, doing so we can import differences when we make changes.
The existing postman collection including tests are checked into the project under `postman` directory.

#### Generating the new collection

When you make a schema change, you can do the following to generate a postman collection:

1. In postman create new `API` and select schema type as `GraphQL` with format `GraphQL SDL`. (One-time step)
1. Under `Define` tab, update the schema with the contents of `schema.graphql`
1. Click on `Generate Collection` giving it a name and selecting `Test the API` to create a Test suite collection.
   
#### Adding to the existing collection

You can do this in one of two ways:

1. Manually, by adding in any changes or new postman requests to the existing collection.
   1. Copy any changes from the new collection into the existing collection
      - If we added a new query, we will have new requests to add to the collection
      - If we modified existing types, an existing request needs to be updated
   1. Add or fix the postman tests into the existing collection.
   1. Export your modified collection back to the project and add it to git.
   
1. Using a diff/merge tool
   1. Using IntelliJ, compare the new collection with the existing one.
   1. Merge any differences in the new file back to the existing collection.
   1. Import the collection into Postman.
   1. Add new tests to any new APIs, make sure to use the `setNextRequest` to add your tests into the current workflow.
   1. Using the options on the collection you can `Run the collection` which will execute all of the tests.
   1. Once all tests are passing, export your updated collection and save it back into the project.

The workflow using `setNextRequest` allows us to control order of tests, to do things such as:
1. Get all products, storing the id of a product 
1. Getting a product by previously stored id. 
   
For an example of tests, check out `products` and `product` within the Postman Collection.
