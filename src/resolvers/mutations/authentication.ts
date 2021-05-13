const authenticateAsCustomerViaPassword = async (root, { email, password }, {Moltin}) => {
    try {
        const {data: token} = await Moltin.Customers.TokenViaPassword(email, password)
        return token
    } catch (e) {
        return e
    }
}

export default {
    authenticateAsCustomerViaPassword
}
