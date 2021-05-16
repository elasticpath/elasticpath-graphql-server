import {RESTDataSource} from "apollo-datasource-rest";

export class LegacyCatalogDataSource extends RESTDataSource {
    willSendRequest(request) {
        request.headers.set('Authorization', this.context.req.headers.authorization)
        request.headers.set('Content-Type', 'application/json')
        request.headers.set('Accept', 'application/json')
    }

    constructor() {
        super()
        this.baseURL = `https://${process.env.ELASTICPATH_API_HOST}/v2`
    }

    async getProducts() {
        const {data: result} = await this.get(`/products`)
        return result
    }
    
    async getProduct(id) {
        const {data: result} = await this.get(`/products/${id}`)
        return result
    }

    async getBrands() {
        const {data: result} = await this.get(`/brands`)
        return result
    }

    async getBrand(id) {
        const {data: result} = await this.get(`/brands/${id}`)
        return result
    }

    async getCategories() {
        const {data: result} = await this.get(`/categories`)
        return result
    }

    async getCategory(id) {
        const {data: result} = await this.get(`/categories/${id}`)
        return result
    }

    async getCollections() {
        const {data: result} = await this.get(`/collections`)
        return result
    }

    async getCollection(id) {
        const {data: result} = await this.get(`/collections/${id}`)
        return result
    }

    async getFile(id) {
        const {data: result} = await this.get(`/files/${id}`)
        return result
    }

}