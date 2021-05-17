import {UserInputError} from "apollo-server";

const generateAccountTokens = async (root, {accountTokenInput} , {dataSources}) => {
    try {
        return dataSources.accountsAPI.generateAccountTokens( accountTokenInput )
    } catch (e) {
        throw new UserInputError("API returned with errors.", e)
    }
}

export default {
    generateAccountTokens,
}

