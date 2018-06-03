export default {
  authenticate: async (
    parent,
    {
      clientId: client_id,
      clientSecret: client_secret,
      grantType: grant_type = 'implicit',
    },
  ) => {
    const body = {
      client_id,
      client_secret,
      grant_type,
    }

    try {
      const data = await fetch(`https://api.moltin.com/oauth/access_token`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: Object.keys(body)
          .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(body[k])}`)
          .join('&'),
      })

      return data.json()
    } catch (e) {
      return { error: e.message }
    }
  },
}
