import { UserInputError } from 'apollo-server'

const authenticate = async (root, { client_id }, { dataSources }) => {
  try {
    return dataSources.tokensAPI.authenticate(client_id)
  } catch (e) {
    throw new UserInputError('API returned with errors.', e)
  }
}

const authenticateAsCustomerViaPassword = async (root, { email, password }, { dataSources }) => {
  try {
    return dataSources.tokensAPI.authenticateAsCustomerViaPassword(email, password)
  } catch (e) {
    throw new UserInputError('API returned with errors.', e)
  }
}

export default {
  authenticate,
  authenticateAsCustomerViaPassword,
}
