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

  async getOrders(listInput) {
    let path = '/orders?'
    if (listInput.page_limit) {
      path = path + 'page[limit]='+listInput.page_limit+'&'
    }
    if (listInput.page_offset) {
      path = path + 'page[offset]='+listInput.page_offset+'&'
    }
    if (listInput.sort) {
      path = path + 'sort=' + listInput.sort+'&'
    }
    if (listInput.filter) {
      path = path + 'filter='+listInput.filter+'&'
    }
    return await this.get(path);
  }
  
  async getOrder(id) {
    const { data } = await this.get(`/orders/${id}/`);
    return data;
  }

  async payForOrder(orderId, gateway, method) {
    const body = {
      data: {
        gateway: gateway,
        method: method
      }
    }
    const {data} = await this.post(`/orders/${orderId}/payments`, body );
    return data;
  }
}
