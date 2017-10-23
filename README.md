# Moltin GraphQL Server

[moltin](https://moltin.com) is a fully baked eCommerce REST API for developers. This repo is a WIP. Contributors welcome 👋

## Installation

  ```bash
  git clone https://github.com/notrab/moltin-graphql.git
  cd moltin-graphql
  yarn
  ```

You may wish to use [direnv](direnv.net) to manage `ENV` variables. Simply type `direnv allow` to set the environment variables otherwise you can export these via shell.

  ```bash
  export MOLTIN_CLIENT_ID=
  ```

## Development
Start the development server is easy.

  ```bash
  yarn dev
  ```

Development uses [nodemon](https://github.com/remy/nodemon) which automatically reloads code after changes.

Visit [http://localhost:5000/graphiql](http://localhost:5000/graphiql) where you will be able to perform queries using GraphiQL.

## Example Query

  ```graphql
  {
    allProducts {
      id
      name
      description
      status
    }
  }
  ```

## Production

Most Node deployments will look for the `start` script. This is set to `node index.js` which will run the Express application. You can run as production by running the following;

  ```bash
  NODE_ENV=production yarn start
  ```
