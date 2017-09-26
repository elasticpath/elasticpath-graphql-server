# Moltin GraphQL Server

## Installation

  ```bash
  git clone https://github.com/notrab/moltin-graphql.git
  cd moltin-graphql
  yarn
  ```

  ```bash
  export MOLTIN_CLIENT_ID=
  ```

## Development
To start the development server, you must run:

  ```bash
  yarn dev
  ```

Development uses micro-dev which automatically reloads code after changes and provides better Error handling.

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

This GraphQL server is designed to run using Zeit Micro. All you need to do is run:

  ```bash
  yarn start
  ```
