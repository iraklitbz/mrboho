import type {
    Maybe,
    SunglassesTypesCollectionContenfull,
    SunglassesTypesContenfull,
    SunglassesContenfull,
    AssetLinkingCollectionsContenfull
} from '~/types/contenfull-types'
import { apiCall } from '~/composables/apiCall'
import {
    dataQueryAllSunGlasses,
    dataQueryNewIn,
    dataQuerySunglasses,
    dataQuerySunGlassesTypes,
    dataQuerySunGlassesTypesBySlug
} from '~/graphql/queries/sunglasses.query.gql'
export const sunglassesStore = defineStore('sunglassesData', {
    state: () => ({
        sunglassesTypes: [] as Array<Maybe<SunglassesTypesContenfull>>,
        sunglassesTypesBySlug: {} as Maybe<SunglassesTypesContenfull>,
        sunglassesDetail: {} as Maybe<SunglassesContenfull>,
        sunglassesMoreOptions: [] as Array<Maybe<SunglassesContenfull>>,
        newIn: [] as Array<Maybe<SunglassesContenfull>>,
        allGlasses: [] as Array<Maybe<SunglassesContenfull>>,
    }),
    actions: {
        async fetchSunglassesTypes() {
            const data = await apiCall(dataQuerySunGlassesTypes, 'sunglassesTypesCollection', {}, false) as SunglassesTypesCollectionContenfull
            this.sunglassesTypes = data.items
        },
        async fetchSunglassesTypesBySlug(slug: string) {
            this.sunglassesTypesBySlug = {} as Maybe<SunglassesTypesContenfull>
            const variables = {
                slug
            }
            const data = await apiCall(dataQuerySunGlassesTypesBySlug, 'sunglassesTypesCollection', variables, false) as SunglassesTypesCollectionContenfull
            this.sunglassesTypesBySlug = data.items[0]
        },
        async fetchAllSunglasses() {
            const data = await apiCall(dataQueryAllSunGlasses, 'sunglassesCollection', {}, false) as SunglassesTypesCollectionContenfull
            this.allGlasses = data.items
        },
        async fetchSunglassesDetail(slug: string) {
            this.sunglassesDetail = {} as Maybe<SunglassesContenfull>
            const variables = {
                slug
            }
            const data = await apiCall(dataQuerySunglasses, 'sunglassesCollection', variables, false) as SunglassesTypesCollectionContenfull
            this.sunglassesDetail = data.items[0] as SunglassesContenfull
        },
        async fetchNewIn() {
            const data = await apiCall(dataQueryNewIn, 'sunglassesCollection', {}, false) as AssetLinkingCollectionsContenfull
            this.newIn = data.items
        },
    },
})
