import * as path from 'path';
import * as fs from "fs";
import {print} from 'graphql';
import {mergeTypeDefs} from "@graphql-tools/merge";
import {loadFilesSync} from '@graphql-tools/load-files';
import {Config} from 'apollo-server'

const allTypes = loadFilesSync(path.join(__dirname, "/*.graphql"));
const typeDefs: Config["typeDefs"] = mergeTypeDefs(allTypes)
fs.writeFileSync('schema.graphql', print(typeDefs));

export {
    typeDefs
}