export const dataQueryOpticalTypes = gql`
    query {
        opticalTypesCollection(order: name_ASC) {
            items {
                name,
                slug,
                description,
                mainImage {
                    url
                }
            }
        }
    }
`

export const dataQueryAllOptical = gql`
    query opticalAll {
        opticalGlassesCollection(order: name_ASC) {
            items {
                name
                slug
                price
                soldOut
                new
                familie {
                    slug
                }
                imagesCollection(limit: 2) {
                    items {
                        url
                    }
                }
            }
        }
    }
`

export const dataQueryOpticalTypesBySlug = gql`
    query opticalTypesBySlug($slug: String) {
        opticalTypesCollection(order: name_ASC, where: {  slug: $slug }) {
            items {
                name,
                slug,
                description,
                hero {
                    url
                }
                glassesCollection(limit: 15) {
                    items {
                        sys {
                            id
                        }
                        name
                        familie {
                            slug
                        }
                        imagesCollection(limit: 5) {
                            items {
                                url
                            }
                        }
                        soldOut
                        categories
                        slug
                        color
                        price
                    }
                }
            }
        }
    }
`

export const dataQueryOptical = gql`
    query optical ( $slug: String ) {
        opticalGlassesCollection(order: name_ASC, limit: 1, where: { slug: $slug }) {
            items {
                name
                price
                familie {
                    slug
                }
                imagesCollection {
                    items {
                        url
                    }
                }
            }
        }
    }
`