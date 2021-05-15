import {RESTDataSource} from "apollo-datasource-rest";

export class CartDataSource extends RESTDataSource {
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
    console.log(body)
    const {data: result} = await this.post(`/carts/${cartId}/items/`, body);
    console.log(result)
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

  async updateCartItem(cartId, itemId, qty) {
    var apiStr = `/carts/${cartId}/items/${itemId}`;
    var body = `{
      "data": {
      "type": "cart_item",
      "id": "${itemId}",
      "quantity": ${qty}
      }
    }`;
    const {data: result} = await this.put(apiStr, body);
    //console.log(result);
    return result[0]; //I have to do this because there is a "["
  }

}