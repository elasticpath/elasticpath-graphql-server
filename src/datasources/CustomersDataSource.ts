import {RESTDataSource} from "apollo-datasource-rest";

export class CustomersDataSource extends RESTDataSource {
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

  async getCustomer(id) {
    const { data: result } = await this.get(`/customers/${id}/`);
    return result;
  }

  async getCustomerAddresses(id) {
    const { data: result } = await this.get(`/customers/${id}/addresses/`);
    return result;
  }

  async getCustomerAddress(customerId, addressId) {
    const { data: result } = await this.get(`/customers/${customerId}/addresses/${addressId}`);
    return result;
  }
  
  async addProductToCart(cartId, productId, quantity) {
    const body = `{
      "data": {
        "type": "cart_item",
        "id": "${productId}",
        "quantity": ${quantity}
      }
    }`;
    const {data: result} = await this.post(`/carts/${cartId}/items/`, body);
    return result;
  }

  async addPromotionToCart(cartId, promotionCode) {
    const body = `{
      "data": {
        "type": "cart_item",
        "code": "${promotionCode}"
      }
    }`;
    const {data: result} = await this.post(`/carts/${cartId}/items/`, body);
    return result;
  }
  
  async checkout(cartId, customer, billing, shipping = billing) {
    const body = `{
      "data": {
        "customer": ${JSON.stringify(customer)},
        "billing_address": ${JSON.stringify(billing)},
        "shipping_address": ${JSON.stringify(shipping)}
      }
    }`;
    
    const {data: result} = await this.post(`/carts/${cartId}/checkout/`, body);
    return result;
  }

}