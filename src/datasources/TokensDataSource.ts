import {RESTDataSource} from "apollo-datasource-rest";

export class TokensDataSource extends RESTDataSource {
    willSendRequest(request) {
        request.headers.set('Accept', 'application/json')
    }

    constructor() {
        super()
        this.baseURL = `https://${process.env.ELASTICPATH_API_HOST}`
    }

    async authenticate(client_id) {
        const body = {
            client_id: client_id,
            grant_type: 'implicit'
        }
        return await this.post(
            `/oauth/access_token`,
            Object.keys(body)
                .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(body[k])}`)
                .join('&'),
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            }
        )
    }

    async authenticateAsCustomerViaPassword(email, password) {
        const headers= {
            'Content-Type': 'application/json',
            'Authorization': this.context.req.headers.authorization,
            'Accept': 'application/json'
        }
        const body = {
            type: "token",
            authentication_mechanism: "password",
            email,
            password
        }
        const {data} = await this.post(`/v2/customers/tokens`, {data:body}, { headers })
        return data;
    }

}