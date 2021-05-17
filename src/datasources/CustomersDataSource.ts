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
    const { data } = await this.get(`/customers/${id}/`);
    return data;
  }

  async getCustomerAddresses(id) {
    const { data } = await this.get(`/customers/${id}/addresses/`);
    return data;
  }

  async getCustomerAddress(customerId, addressId) {
    const { data } = await this.get(`/customers/${customerId}/addresses/${addressId}`);
    return data;
  }
  
  async createCustomer(customerInput) {
    customerInput.type = 'customer'
    const { data } = await this.post(`/customers/`, {data :customerInput} );
    return data;
  }

  async createCustomerAddress(customerId, address) {
    const {data} = await this.post(`/customers/${customerId}/addresses/`, {data : address});
    return data;
  }

  async updateCustomerAddress(customerId, addressId, address) {
    const {data} = await this.put(`/customers/${customerId}/addresses/${addressId}`, {data : address});
    return data;
  }

  async deleteCustomerAddress(customerId, addressId) {
    await this.delete(`/customers/${customerId}/addresses/${addressId}`);
    return true;
  }
}