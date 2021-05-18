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

    async getProducts(listInput) {
        let path = '/products?'
        if (listInput.page_limit) {
            path = path + 'page[limit]='+listInput.page_limit+'&'
        }
        if (listInput.page_limit) {
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
    
    async getProduct(id) {
        const {data} = await this.get(`/products/${id}`)
        return data
    }

    async getNodes() {
        const {data} = await this.get(`/nodes`)
        return data
    }

    async getNode(id) {
        const {data} = await this.get(`/nodes/${id}`)
        return data
    }

    async getNodeChildren(id) {
        const {data} = await this.get(`/nodes/${id}/relationships/children`)
        return data
    }

    async getNodesProduct(id) {
        const {data} = await this.get(`/nodes/${id}/relationships/products`)
        return data
    }

    async getHierarchies() {
        const {data} = await this.get(`/hierarchies`)
        return data
    }

    async getHierarchy(id) {
        const {data} = await this.get(`/hierarchies/${id}`)
        return data
    }

}
