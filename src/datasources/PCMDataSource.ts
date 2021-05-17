import {RESTDataSource} from "apollo-datasource-rest";

export class PCMDataSource extends RESTDataSource {
    willSendRequest(request) {
        request.headers.set('Authorization', this.context.req.headers.authorization)
        request.headers.set('Content-Type', 'application/json')
        request.headers.set('Accept', 'application/json')
    }

    constructor() {
        super()
        this.baseURL = `https://${process.env.ELASTICPATH_API_HOST}/catalog`
    }

    async getProducts(pageOffset, pageLimit) {
        const result = await this.get(`/products?page[offset]=`+pageOffset+`&page[limit]=`+pageLimit)
        return result
    }
    
    async getProduct(id) {
        const {data: result} = await this.get(`/products/${id}`)
        return result
    }

    async getNodes() {
        const {data: result} = await this.get(`/nodes`)
        return result
    }

    async getNode(id) {
        const {data: result} = await this.get(`/nodes/${id}`)
        return result
    }

    async getNodeChildren(id) {
        const {data: result} = await this.get(`/nodes/${id}/relationships/children`)
        return result
    }

    async getNodesProduct(id) {
        const {data: result} = await this.get(`/nodes/${id}/relationships/products`)
        return result
    }

    async getHierarchies() {
        const {data: result} = await this.get(`/hierarchies`)
        return result
    }

    async getHierarchy(id) {
        const {data: result} = await this.get(`/hierarchies/${id}`)
        return result
    }

}