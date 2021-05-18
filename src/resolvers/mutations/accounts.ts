import {UserInputError} from "apollo-server";

const generateAccountTokens = (root, {accountTokenInput} , {dataSources}) => {
    try {
        return dataSources.accountsAPI.generateAccountTokens( accountTokenInput )
    } catch (e) {
        throw new UserInputError("API returned with errors.", e)
    }
}
const accountAuthenticationSetting = (root, {accountTokenInput} , {dataSources}) => {
    try {
        return dataSources.accountsAPI.accountAuthenticationSetting()
    } catch (e) {
        throw new UserInputError("API returned with errors.", e)
    }
}

export default {
    generateAccountTokens,
    accountAuthenticationSetting,
}

