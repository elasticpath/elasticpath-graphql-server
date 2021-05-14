import {UserInputError} from "apollo-server";

const authenticateAsCustomerViaPassword = async (root, { email, password }, {Moltin}) => {
    try {
        const {data: token} = await Moltin.Customers.TokenViaPassword(email, password)
        return token
    } catch (e) {
        throw new UserInputError("API returned with errors.", e)
    }
}

export default {
    authenticateAsCustomerViaPassword
}
