import type {Maybe, OpticalGlassesContenfull, SunglassesContenfull} from "~/types/contenfull-types";

export const useWishList = defineStore('wishList', () => {
    const wishlist = ref<Maybe<(SunglassesContenfull | OpticalGlassesContenfull)[]>>([]);

    const toggleProduct = (product: Maybe<SunglassesContenfull | OpticalGlassesContenfull>) => {
        if (!wishlist.value || !product) return

        const index = wishlist.value.findIndex(item => item?.sys?.id === product.sys.id);
        if (index !== -1) {
            wishlist.value.splice(index, 1)
        } else {
            wishlist.value.push(product)
        }
    }

    const removeProduct = (productId: string) => {
        if (!wishlist.value) return;
        wishlist.value = wishlist.value.filter(item => item.sys.id !== productId);
    };

    const isInWishlist = computed(() => (productId: string) => {
        return wishlist.value?.some(item => item?.sys?.id === productId);
    });

    return {
        wishlist,
        isInWishlist,
        toggleProduct,
        removeProduct
    };
}, {
    persist: {
        storage: piniaPluginPersistedstate.localStorage()
    }
});
