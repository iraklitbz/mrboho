import type {
    Maybe,
    OpticalGlassesContenfull,
    SunglassesContenfull
} from "~/types/contenfull-types"
import type {
    CartProduct
} from '~/types/local-types'
import {apiCall} from "~/composables/apiCall";
import {dataQueryIsSoldOut} from "~/graphql/queries/sunglasses.query.gql";

export const cartStore = defineStore('cartData', {
    state: () => ({
        cartToggle: false,
        cartProducts: [] as Array<CartProduct>,
        cartUpdated: false
    }),
    persist: {
        storage: piniaPluginPersistedstate.localStorage()
    },
    getters: {
        cartTotalPrice(state) {
            return state.cartProducts.reduce((acc, cartProduct) => {
                return acc + ((cartProduct.product?.price ?? 0) * (cartProduct.total ?? 0))
            }, 0)
        },
        cartTotalItems(state) {
            return state.cartProducts.reduce((acc, cartProduct) => {
                return acc + (cartProduct.total ?? 0)
            }, 0)
        }
    },
    actions: {
        handleCartToggle() {
            this.cartToggle = !this.cartToggle
            if (this.cartToggle) {
                document.documentElement.classList.add('cart-open')
            }
            else {
                document.documentElement.classList.remove('cart-open')
            }
        },
        handleCloseCart() {
            this.cartToggle = false
            document.documentElement.classList.remove('cart-open')
        },
        addToCart(product: Maybe<OpticalGlassesContenfull> | Maybe<SunglassesContenfull>) {
            this.handleCartToggle()
            const existingProductIndex = this.cartProducts.findIndex(cartProduct => cartProduct.product?.slug === product?.slug)

            if (existingProductIndex !== -1) {
                this.cartProducts[existingProductIndex]?.total && (this.cartProducts[existingProductIndex].total += 1)
            } else {
                this.cartProducts.push({ product, total: 1 })
            }
        },
        removeFromCart(slug: string) {
            this.cartProducts = this.cartProducts.filter(cartProduct => cartProduct.product?.slug !== slug)
        },
        updateProductTotal(slug: string, newTotal: number) {
            const productIndex = this.cartProducts.findIndex(cartProduct => cartProduct.product?.slug === slug)
            if (productIndex === -1) {
                console.warn(`Product with slug "${slug}" not found in cart.`);
                return
            }
            if (newTotal <= 0) {
                this.removeFromCart(slug)
            } else {
                this.cartProducts[productIndex].total = newTotal
            }
        },
        async fetchIfExist(slugs: string[]) {
            let cartChanged = false
            this.cartUpdated = false
            const variables = { slug: slugs }
            const data = await apiCall(dataQueryIsSoldOut, '', variables, false) as any

            const fetchedProducts = [
                ...(data?.opticalGlassesCollection?.items || []),
                ...(data?.sunglassesCollection?.items || [])
            ];

            const fetchedSlugs = new Set(fetchedProducts.map(item => item.slug))
            const soldOutProducts = fetchedProducts.filter(item => item.soldOut === true)
            const removedProducts = slugs.filter(slug => !fetchedSlugs.has(slug))
            soldOutProducts.forEach(product => {
                this.removeFromCart(product.slug)
                cartChanged = true
            });
            removedProducts.forEach(slug => {
                this.removeFromCart(slug)
                cartChanged = true
            })
            this.cartUpdated = cartChanged
        }
    },
})
