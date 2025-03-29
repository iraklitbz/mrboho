import type {
    Maybe, OpticalGlassesContenfull,
    OpticalTypesCollectionContenfull,
    OpticalTypesContenfull, SunglassesTypesCollectionContenfull
} from '~/types/contenfull-types'
import { apiCall } from '~/composables/apiCall'
import {
    dataQueryOpticalTypesBySlug,
    dataQueryOpticalTypes,
    dataQueryOptical, dataQueryAllOptical
} from '~/graphql/queries/opticalglasses.query.gql'
export const opticalStore = defineStore('opticalData', {
    state: () => ({
        opticalTypes: [] as Array<Maybe<OpticalTypesContenfull>>,
        opticalTypesBySlug: {} as Maybe<OpticalTypesContenfull>,
        opticalDetail: {} as Maybe<OpticalGlassesContenfull>,
        allOptical: [] as Array<Maybe<OpticalTypesContenfull>>,
    }),
    getters: {
        randomOpticalTypes: (state) => {
            return [...state.opticalTypes]
                .sort(() => Math.random() - 0.5)
                .slice(0, 4)
        }
    },
    actions: {
        async fetchOpticalTypes() {
            const data = await apiCall(dataQueryOpticalTypes, 'opticalTypesCollection', {}, false) as OpticalTypesCollectionContenfull
            this.opticalTypes = data.items
        },
        async fetchAllOptical() {
            const data = await apiCall(dataQueryAllOptical, 'opticalGlassesCollection', {}, false) as OpticalTypesCollectionContenfull
            this.allOptical = data.items
        },
        async fetchOpticalTypesBySlug(slug: string) {
            this.opticalTypesBySlug = {} as Maybe<OpticalTypesContenfull>
            const variables = {
                slug
            }
            const data = await apiCall(dataQueryOpticalTypesBySlug, 'opticalTypesCollection', variables, false) as OpticalTypesCollectionContenfull
            this.opticalTypesBySlug = data.items[0]
        },
        async fetchOpticalDetail(slug: string) {
            this.opticalDetail = {} as Maybe<OpticalGlassesContenfull>
            const variables = {
                slug
            }
            const data = await apiCall(dataQueryOptical, 'opticalGlassesCollection', variables, false) as OpticalTypesCollectionContenfull
            this.opticalDetail = data.items[0] as OpticalGlassesContenfull
        },
    },
})
