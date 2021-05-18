const newman = require('newman')
const config = require('./newman-config.js')

newman.run(
  config,
  function (error, summary) {
    if (error || summary.error || summary.run.failures.length) {
      console.error('collection run encountered errors or test failures')
      process.exit(1)
    }
  })
  .on('start', function (err, args) {
    console.log('running postman collection with following configurations...\n',config)
  })
