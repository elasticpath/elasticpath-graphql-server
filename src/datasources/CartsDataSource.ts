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
    const { data } = await this.get(`/carts/${id}/`);
    return data;
  }

  async getCartItems(id) {
    const { data } = await this.get(`/carts/${id}/items/`);
    return data;
  }
  
  async addProductToCart(cartId, productId, quantity) {
    const body = {
      data: {
        type: "cart_item",
        id: productId,
        quantity: quantity
      }
    };
    const {data} = await this.post(`/carts/${cartId}/items/`, body);
    return data;
  }

  async updateProductQtyInCart(cartId, productId, quantity) {
    const body = {
      data: {
        type: "cart_item",
        id: productId,
        quantity: quantity
      }
    }
    const {data} = await this.put(`carts/${cartId}/items/${productId}`, body);
    return data[0];
  }

  async addPromotionToCart(cartId, promotionCode) {
    const body = {
      data: {
        type: "cart_item",
        code: promotionCode
      }
    }
    const {data} = await this.post(`/carts/${cartId}/items/`, body);
    return data;
  }

  async addCustomItemToCart(cartId, customItem) {
    customItem.type = "custom_item";
    const {data} = await this.post(`/carts/${cartId}/items/`, { data :customItem} );
    return data;
  }
  
  // this works for Checkout with an existing customer ID and for Checkout with an associated customer name and email 
  async checkout(cartId, customer, billing, shipping = billing) {
    const body = {
      data: {
        customer: customer,
        billing_address: billing,
        shipping_address: shipping
      }
    }
    const {data} = await this.post(`/carts/${cartId}/checkout/`, body);
    return data;
  }

}