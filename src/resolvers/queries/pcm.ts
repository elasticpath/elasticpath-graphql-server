import {UserInputError} from "apollo-server";

const catalogUrl = `https://${process.env.ELASTICPATH_API_HOST}/catalog`

const pcmProducts = async (parent, args, {Moltin}) => {
    try {
        const authenticate = await Moltin.Authenticate()
        const data = await fetch(`${catalogUrl}/products`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authenticate.access_token}`
            },
        })
        console.log(JSON.stringify(data))
        const result = await data.json()
        return result.data
    } catch (e) {
        throw new UserInputError("API returned with errors.", e)
    }
}

const pcmProduct = async (parent, {id}, {Moltin}) => {
    try {
        const authenticate = await Moltin.Authenticate()
        const data = await fetch(`${catalogUrl}/products/${id}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authenticate.access_token}`
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
        const authenticate = await Moltin.Authenticate()
        const data = await fetch(`${catalogUrl}/nodes`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authenticate.access_token}`
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
        const authenticate = await Moltin.Authenticate()
        const data = await fetch(`${catalogUrl}/nodes/${id}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authenticate.access_token}`
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
        const authenticate = await Moltin.Authenticate()
        const data = await fetch(`${catalogUrl}/nodes/${id}/relationships/children`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authenticate.access_token}`
            },
        })
        const result = await data.json()
        return result.data
    } catch (e) {
        throw new UserInputError("API returned with errors.", e)
    }
}

const hierarchies = async (parent, args, {Moltin}) => {
    try {
        const authenticate = await Moltin.Authenticate()
        const data = await fetch(`${catalogUrl}/hierarchies`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authenticate.access_token}`
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
        const authenticate = await Moltin.Authenticate()
        const data = await fetch(`${catalogUrl}/hierarchies/${id}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authenticate.access_token}`
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
