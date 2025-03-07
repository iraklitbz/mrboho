import type {Maybe, OpticalGlassesContenfull, SunglassesContenfull} from "~/types/contenfull-types"
import type {
    CartProduct
} from '~/types/local-types'

export const cartStore = defineStore('cartData', {
    state: () => ({
        cartToggle: false,
        cartProducts: [] as Array<CartProduct>,
    }),
    persist: {
        storage: piniaPluginPersistedstate.localStorage()
    },
    getters: {
        cartTotalPrice(state) {
            return state.cartProducts.reduce((acc, cartProduct) => {
                return acc + (cartProduct.product?.price || 0) * cartProduct.total
            }, 0)
        },
        cartTotalItems(state) {
            return state.cartProducts.reduce((acc, cartProduct) => {
                return acc + cartProduct.total
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
                this.cartProducts[existingProductIndex].total += 1
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
        }
    },
})
