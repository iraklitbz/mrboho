import type {
    Maybe,
    SunglassesContenfull,
    SunglassesTypesCollectionContenfull,
    SunglassesTypesContenfull,
} from '~/types/contenfull-types'
import {apiCall} from '~/composables/apiCall'
import {
    dataQueryAllSunGlasses,
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
        allGlasses: [] as Array<Maybe<SunglassesContenfull>>,
        uniqueColors: [] as Array<string>,
        filteredItems: [] as Array<Maybe<SunglassesContenfull>>
    }),
    actions: {
        async fetchSunglassesTypes() {
            const data = await apiCall(dataQuerySunGlassesTypes, 'sunglassesTypesCollection', {}, false) as SunglassesTypesCollectionContenfull
            this.sunglassesTypes = data.items
        },
        async fetchSunglassesTypesBySlug(slug: string) {
            this.uniqueColors = [] as Array<string>
            this.sunglassesTypesBySlug = {} as Maybe<SunglassesTypesContenfull>
            const variables = {
                slug
            }
            const data = await apiCall(dataQuerySunGlassesTypesBySlug, 'sunglassesTypesCollection', variables, false) as SunglassesTypesCollectionContenfull
            this.getUniqueColors(data.items[0])
            this.sunglassesTypesBySlug = data.items[0]
        },
        async fetchAllSunglasses() {
            const data = await apiCall(dataQueryAllSunGlasses, 'sunglassesCollection', {}, false) as SunglassesTypesCollectionContenfull
            this.allGlasses = data.items as Array<Maybe<SunglassesContenfull>>
        },
        async fetchSunglassesDetail(slug: string) {
            this.sunglassesDetail = {} as Maybe<SunglassesContenfull>
            const variables = {
                slug
            }
            const data = await apiCall(dataQuerySunglasses, 'sunglassesCollection', variables, false) as SunglassesTypesCollectionContenfull
            this.sunglassesDetail = data.items[0] as SunglassesContenfull
        },
        getUniqueColors(sunglassesType: any) {
            const allColors = sunglassesType.sunglassesCollection.items.flatMap(
                (item: SunglassesContenfull) => item.color
            )
            this.uniqueColors = [...new Set(allColors)] as Array<string>
        },
        handleColorFilter(color: string) {
            if (this.sunglassesTypesBySlug?.sunglassesCollection?.items) {
                this.filteredItems = this.sunglassesTypesBySlug.sunglassesCollection.items.filter(item =>
                    item?.color?.includes(color)
                )
            }
        },
        resetFilter() {
            this.filteredItems = [] as Array<Maybe<SunglassesContenfull>>
        }
    },
})
