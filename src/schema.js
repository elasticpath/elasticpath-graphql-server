const path = require('path');
const { print } = require('graphql');
const fs = require('fs');
const { loadFilesSync } = require('@graphql-tools/load-files');
const { mergeTypeDefs } = require('@graphql-tools/merge');

// const loadedFiles = loadFilesSync(path.join(__dirname, './types'), { extensions: ['graphql'], recursive: true });
const loadedFiles = loadFilesSync(__dirname, { extensions: ['graphql'], recursive: true });

const typeDefs = mergeTypeDefs(loadedFiles);

const printedTypeDefs = print(typeDefs);
console.log(printedTypeDefs)
// fs.writeFileSync('joined.graphql', printedTypeDefs);

module.exports = {
  typeDefs
}