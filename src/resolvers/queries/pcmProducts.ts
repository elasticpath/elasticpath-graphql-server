const pcmProducts = async (parent, { token }, {Moltin}) => {
    try {
        const ELASTICPATH_API_HOST = process.env.ELASTICPATH_API_HOST
        const authHeader = "Bearer " + JSON.parse(Moltin.storage.get("moltinCredentials")).access_token
        
        const data = await fetch(`https://`+ELASTICPATH_API_HOST+`/catalog/products`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                "Authorization": authHeader
            },
        })
        const result = await data.json()
        return result.data
    } catch (e) {
        return e
    }
}

const pcmProduct = async (parent, {id , token}, {Moltin}) => {
    try {
        const {data: product} = await Moltin.Catalogs.Products.Get(id, token)
        return {...product }
    } catch (e) {
        return e
    }
}
export default {
    pcmProducts,
    pcmProduct
}
