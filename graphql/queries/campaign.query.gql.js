export const dataQueryCampaign = gql`
    query campaignCollection($slug: String) {
        campaignCollection(limit: 1, where: { slug: $slug }) {
            items {
                    title,
                    slug,
                    onlyImages,
                    slidesCollection {
                        items {
                            headline
                            onlyText
                            privateName
                            text
                            image {
                                url
                            }
                        }
                    }
                }
            }
        }
`