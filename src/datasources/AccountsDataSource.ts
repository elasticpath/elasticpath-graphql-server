import {RESTDataSource} from "apollo-datasource-rest";

export class AccountsDataSource extends RESTDataSource {
    willSendRequest(request) {
        request.headers.set('Authorization', this.context.req.headers.authorization)
        request.headers.set('Content-Type', 'application/json')
        request.headers.set('Accept', 'application/json')
        request.headers.set('EP-Beta-Features', this.context.req.headers['ep-beta-features'])
        if(this.context.req.headers['ep-account-management-authentication-token']){
            request.headers.set('EP-Account-Management-Authentication-Token', this.context.req.headers['ep-account-management-authentication-token'])
        }
    }

    constructor() {
        super();
        this.baseURL = `https://${process.env.ELASTICPATH_API_HOST}/v2`
    }

    async generateAccountTokens(accountTokenInput) {
        accountTokenInput.type = 'account_management_authentication_token'
        const {data} = await this.post(`/account-members/tokens`, {"data": accountTokenInput});
        return data;
    }
}