import {RESTDataSource} from "apollo-datasource-rest";

export class OrdersDataSource extends RESTDataSource {
  willSendRequest(request) {
    request.headers.set('Authorization', this.context.req.headers.authorization)
    request.headers.set('X-Moltin-Customer-Token', this.context.req.headers['x-moltin-customer-token'])
    request.headers.set('Content-Type', 'application/json')
    request.headers.set('Accept', 'application/json')
  }

  constructor() {
    super();
    this.baseURL = `https://${process.env.ELASTICPATH_API_HOST}/v2`
  }


  async getOrders(pageOffset, pageLimit) {
    return await this.get(`/orders?page[offset]=`+pageOffset+`&page[limit]=`+pageLimit);
  }
  
  async getOrder(id) {
    const { data } = await this.get(`/orders/${id}/`);
    return data;
  }

}
