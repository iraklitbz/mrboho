export const dataQueryModule = gql`
    query module($id: String!) {
    module(id:$id) {
        name
        productCollection {
        items {
            __typename
            ... on Sunglasses {
            name
            slug
            price
            imagesCollection {
                items {
                url
                }
                }
                familie {
            slug
           } 
            }
            ... on OpticalGlasses {
            name
            slug
            price
            imagesCollection {
                items {
                url
                }
                }
                familie {
            slug
           }  
            }
        }
    }
  }
}
`
