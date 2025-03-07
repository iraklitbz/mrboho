export default defineNuxtRouteMiddleware(async (to, from) => {
    const supabase = useSupabaseClient()

    const { data: { user }, error } = await supabase.auth.getUser()

    if (error || !user) {
        return navigateTo('/account/login')
    }
})
