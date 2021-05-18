require('dotenv').config();

module.exports = {
  // Set path to collection and corresponding environment variables
  collection: './postman/EP-GraphQL-Test.postman_collection.json',
  environment: './postman/EP-GraphQL-env.postman_environment.json',
  globals: './postman/EP-GraphQL-globals.postman_globals.json',

  // Set reporters to be used
  reporters: [ 'cli', 'htmlextra', 'junit' ],

  // Set reporte configurations
  reporter: {
    htmlextra: {
      export: './build/reports/postman-collection-report.html',
      browserTitle: 'EPCC Graphql API Test Report',
      title: 'EPCC Graphql API Test Report',
    },
    junit: {
      export: './build/reports/postman-collection-report-junit.xml'
    }
  },

  // Overwrite or set some of the variables’s initial values
  globalVar: [
    {
      "key": "ELASTICPATH_CLIENT_ID",
      "value": process.env.ELASTICPATH_CLIENT_ID
    },
  ]
}
