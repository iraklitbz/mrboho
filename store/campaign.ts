import type {CampaignCollectionContenfull, Maybe, CampaignContenfull} from "~/types/contenfull-types";
import { dataQueryCampaign } from "~/graphql/queries/campaign.query.gql";

export const campaignStore = defineStore('campaignData', {
    state: () => ({
        campaign : {} as Maybe<CampaignContenfull>
    }),
    actions: {
        async fetchCampaign(slug: string) {
            const variables = {
                slug
            }
            const data = await apiCall(dataQueryCampaign, 'campaignCollection', variables, false) as CampaignCollectionContenfull
            this.campaign = data.items[0] as CampaignContenfull
        }
    },
})
