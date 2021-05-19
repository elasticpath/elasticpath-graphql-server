import { UserInputError } from 'apollo-server'

const accountAuthenticationSetting = (root, { accountTokenInput }, { dataSources }) => {
  try {
    return dataSources.accountsAPI.accountAuthenticationSetting()
  } catch (e) {
    throw new UserInputError('API returned with errors.', e)
  }
}

export default {
  accountAuthenticationSetting,
}
