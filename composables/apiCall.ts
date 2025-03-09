export async function apiCallSsr (query: any, returnObject?: string, variables: object = {}, cache: boolean = true, isAuth: boolean = false) {
    // @ts-expect-error No overload matches this call.
    const { data }: object = await useAsyncQuery({
        query,
        variables,
        cache,
    })
    if (data?.value && returnObject) {
        return data?.value[returnObject]
    }
    return data?.value
}

export async function apiCallClient (query: any, returnObject?: string, variables: object = {}, cache: boolean = true, isAuth: boolean = false) {
    const { resolveClient } = useApolloClient()
    const client = resolveClient()
    const { data } = await client.query({
        query,
        variables,
        fetchPolicy: cache ? 'cache-first' : 'no-cache',
    })
    if (data && returnObject) {
        return data[returnObject]
    }
    return data
}

export async function apiCall (query: any, returnObject?: string, variables: object = {}, cache: boolean = true, isAuth: boolean = false) {
    if (import.meta.server) {
        return await apiCallSsr(query, returnObject, variables, cache, isAuth)
    }
    return await apiCallClient(query, returnObject, variables, cache, isAuth)
}
