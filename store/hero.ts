import type {Maybe,HeroCollectionContenfull, HeroContenfull} from "~/types/contenfull-types";
import {dataQueryHeroHome} from "~/graphql/queries/hero.query.gql";

export const heroStore = defineStore('heroData', {
    state: () => ({
        homeHero: {} as Maybe<HeroContenfull>,
    }),
    actions: {
        async fetchHeroHome() {
            const data = await apiCall(dataQueryHeroHome, 'hero', {}, false) as HeroContenfull
            this.homeHero = data
        }
    },
})
