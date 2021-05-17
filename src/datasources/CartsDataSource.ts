import {RESTDataSource} from "apollo-datasource-rest";

export class CartsDataSource extends RESTDataSource {
  willSendRequest(request) {
    request.headers.set('Authorization', this.context.req.headers.authorization)
    request.headers.set('Content-Type', 'application/json')
    request.headers.set('Accept', 'application/json')
  }

  constructor() {
    super();
    this.baseURL = `https://${process.env.ELASTICPATH_API_HOST}/v2`
  }

  async getCart(id) {
    const { data: result } = await this.get(`/carts/${id}/`);
    return result;
  }

  async getCartItems(id) {
    const { data: result } = await this.get(`/carts/${id}/items/`);
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

  async updateProductQtyInCart(cartId, productId, quantity) {
    var apiStr = `carts/${cartId}/items/${productId}`;
    var body = `{
      "data": {
        "type": "cart_item",
        "id": "${productId}",
        "quantity": ${quantity}
      }
    }`;
    const {data: result} = await this.put(apiStr, body);
    return result[0]; //I have to do this because there is a "["
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

  async addCustomItemToCart(cartId, customItem) {
    customItem.type = "custom_item";
    const body = `{
      "data":
        ${JSON.stringify(customItem)}
    }`;
    const {data: result} = await this.post(`/carts/${cartId}/items/`, body);
    return result;
  }
  
  // this works for Checkout with an existing customer ID and for Checkout with an associated customer name and email 
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