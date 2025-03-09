export const dataQuerySunGlassesTypes = gql`
    query sunGlassesTypes {
        sunglassesTypesCollection(order: name_ASC) {
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

export const dataQueryAllSunGlasses = gql`
    query sunGlassesAll {
        sunglassesCollection(order: name_ASC) {
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

export const dataQuerySunGlassesTypesBySlug = gql`
    query sunGlassesTypesBySlug($slug: String) {
        sunglassesTypesCollection(order: name_ASC, where: {  slug: $slug }) {
            items {
                name,
                slug,
                description,
                hero {
                    url
                }
                sunglassesCollection(limit: 15) {
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

export const dataQuerySunglasses = gql`
    query sunglasses ($slug: String) {
        sunglassesCollection(order: name_ASC, limit: 1, where: { slug: $slug }) {
            items {
                name
                price
                slug
                soldOut
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

export const dataQueryIsSoldOut = gql`
    query isSoldOut ($slug: [String]) {
        sunglassesCollection (where: { slug_in: $slug }) {
            items {
                soldOut
                slug
                price
            }
        }
        opticalGlassesCollection (where: { slug_in: $slug }) {
            items {
                slug
                soldOut
                price
            }
        }
    }
`;



