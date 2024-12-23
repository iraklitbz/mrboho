
export async function apiCallSsr (query: any, returnObject?: string, variables: object = {}, cache: boolean = true) {
    const { data } = await useAsyncQuery({
        query,
        variables,
        cache
    })
    if (data?.value && returnObject) {
        // @ts-expect-error value is not a property of data
        return data?.value[returnObject]
    }
    return data?.value
}

export async function apiCallClient (query: any, returnObject?: string, variables: object = {}, cache: boolean = true) {
    const { resolveClient } = useApolloClient()
    const client = resolveClient()
    const { data } = await client.query({
        query,
        variables,
        fetchPolicy: cache ? 'cache-first' : 'no-cache'
    })
    if (data && returnObject) {
        return data[returnObject]
    }
    return data?.value
}

export async function apiCall (query: any, returnObject?: string, variables: object = {}, cache: boolean = true) {
    if (import.meta.server) {
        return await apiCallSsr(query, returnObject, variables, cache)
    }
    return await apiCallClient(query, returnObject, variables, cache)
}
