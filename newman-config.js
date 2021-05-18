require('dotenv').config();

module.exports = {
  // Set path to collection and corresponding environment variables
  collection: "postman/EP-GraphQL-Test.postman_collection.json",
  environment: "postman/EP-GraphQL-env.postman_environment.json",
  globals: "postman/EP-GraphQL-globals.postman_globals.json",

  // Reporting configurations
  reporters: 'cli',

  // Overwrite or set some of the variables’s initial values
  globalVar: [
    {
      "key": "ELASTICPATH_CLIENT_ID",
      "value": process.env.ELASTICPATH_CLIENT_ID
    },
  ]
}