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

  async getOrders() {
    const { data: result } = await this.get(`/orders/`);
    console.log(result);
    return result;
  }
  
  async getOrder(id) {
    const { data: result } = await this.get(`/orders/${id}/`);
    return result;
  }

}