import {UserInputError} from "apollo-server";

const host = process.env.ELASTICPATH_API_HOST

const pcmProducts = async (parent, args, {Moltin}) => {
    try {
        await Moltin.Authenticate()
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
        throw new UserInputError("API returned with errors.", e)
    }
}

const pcmProduct = async (parent, {id}, {Moltin}) => {
    try {
        await Moltin.Authenticate()
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
        throw new UserInputError("API returned with errors.", e)
    }
}

const nodes = async (parent, args, {Moltin}) => {
    try {
        await Moltin.Authenticate()
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
        throw new UserInputError("API returned with errors.", e)
    }
}

const node = async (parent, {id}, {Moltin}) => {
    try {
        await Moltin.Authenticate()
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
        throw new UserInputError("API returned with errors.", e)
    }
}

const nodeChildren = async (parent, {id}, {Moltin}) => {
    try {
        await Moltin.Authenticate()
        const authHeader = "Bearer " + JSON.parse(Moltin.storage.get("moltinCredentials")).access_token

        const data = await fetch(`https://` + host + `/catalog/nodes/` + id + `/relationships/children`, {
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

const hierarchies = async (parent, args, {Moltin}) => {
    try {
        await Moltin.Authenticate()
        const authHeader = "Bearer " + JSON.parse(Moltin.storage.get("moltinCredentials")).access_token

        const data = await fetch(`https://` + host + `/catalog/hierarchies`, {
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
        throw new UserInputError("API returned with errors.", e)
    }
}

const hierarchy = async (parent, {id}, {Moltin}) => {
    try {
        await Moltin.Authenticate()
        const authHeader = "Bearer " + JSON.parse(Moltin.storage.get("moltinCredentials")).access_token

        const data = await fetch(`https://` + host + `/catalog/hierarchies/` + id, {
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
        throw new UserInputError("API returned with errors.", e)
    }
}

export default {
    pcmProducts,
    pcmProduct,
    nodes,
    node,
    nodeChildren,
    hierarchies,
    hierarchy
}
