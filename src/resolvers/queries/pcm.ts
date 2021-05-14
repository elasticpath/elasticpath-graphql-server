const host = process.env.ELASTICPATH_API_HOST

const pcmProducts = async (parent, args, {Moltin}) => {
    try {
        const authHeader = "Bearer " + JSON.parse(Moltin.storage.get("moltinCredentials")).access_token

        const data = await fetch(`https://` + host + `/catalog/products`, {
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

const pcmProduct = async (parent, {id}, {Moltin}) => {
    try {
        const authHeader = "Bearer " + JSON.parse(Moltin.storage.get("moltinCredentials")).access_token

        const data = await fetch(`https://` + host + `/catalog/products/` + id, {
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

const nodes = async (parent, args, {Moltin}) => {
    try {
        const authHeader = "Bearer " + JSON.parse(Moltin.storage.get("moltinCredentials")).access_token

        const data = await fetch(`https://` + host + `/catalog/nodes`, {
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

const node = async (parent, {id}, {Moltin}) => {
    try {
        const authHeader = "Bearer " + JSON.parse(Moltin.storage.get("moltinCredentials")).access_token

        const data = await fetch(`https://` + host + `/catalog/nodes/` + id, {
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

export default {
    pcmProducts,
    pcmProduct,
    nodes,
    node
}
