const fs = require('fs');
const { print } = require('graphql')
const { loadFilesSync } = require('@graphql-tools/load-files');
const { mergeTypeDefs } = require('@graphql-tools/merge');

const loadedFiles = loadFilesSync(__dirname, { extensions: ['graphql'], recursive: true });

const typeDefs = mergeTypeDefs(loadedFiles);

const printedTypeDefs = print(typeDefs);
fs.writeFileSync('schema.graphql', printedTypeDefs);

module.exports = {
  typeDefs,
};
