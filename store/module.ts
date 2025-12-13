import { dataQueryModule } from "~/graphql/queries/module.query.gql";

export const moduleStore = defineStore('moduleData', {
    state: () => ({
        module : {} 
    }),
    actions: {
        async fetchModule(id: string) {
            const variables = {
               id 
            }
            const data = await apiCall(dataQueryModule, 'module', variables, false)
            this.module = data
        }
    },
})