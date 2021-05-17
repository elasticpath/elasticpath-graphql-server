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
        const {data} = await this.get(`/products`)
        return data
    }
    
    async getProduct(id) {
        const {data} = await this.get(`/products/${id}`)
        return data
    }

    async getBrands() {
        const {data} = await this.get(`/brands`)
        return data
    }

    async getBrand(id) {
        const {data} = await this.get(`/brands/${id}`)
        return data
    }

    async getCategories() {
        const {data} = await this.get(`/categories`)
        return data
    }

    async getCategory(id) {
        const {data} = await this.get(`/categories/${id}`)
        return data
    }

    async getCollections() {
        const {data} = await this.get(`/collections`)
        return data
    }

    async getCollection(id) {
        const {data} = await this.get(`/collections/${id}`)
        return data
    }

    async getFile(id) {
        const {data} = await this.get(`/files/${id}`)
        return data
    }

}