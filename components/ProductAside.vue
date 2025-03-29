<script setup lang="ts">
import type {
  Maybe,
  SunglassesContenfull,
  OpticalGlassesContenfull
} from '~/types/contenfull-types'
import { cartStore } from "~/store/cart"

import { currencyFormat } from "~/utils/currency-utils";

const props = defineProps<{
  productDetail: Maybe<SunglassesContenfull | OpticalGlassesContenfull>
  breadcrumbsNav: any[]
  products: SunglassesContenfull[]
}>()
const route = useRoute()
const getUpdatedSlug = () => {
  if (props.breadcrumbsNav.length > 1 && props.productDetail) {
    const categorySlug = props.breadcrumbsNav[1]?.to || "";
    return `${categorySlug}/${props.productDetail.slug}`;
  }
  return props.productDetail?.slug || "";
}

const getUpdatedProductDetail = () => {
  if (!props.productDetail) return null;
  return {
    ...props.productDetail,
    slug: getUpdatedSlug()
  };
}

const addToCart = () => {
  const updatedProduct = getUpdatedProductDetail()
  if (updatedProduct) {
    cartStore().addToCart(updatedProduct)
  }
}

</script>

<template>
  <div
      class="sticky top-36"
  >
    <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-left uppercase latin mt-1 md:mt-5">
      {{ productDetail?.name }}
    </h2>
    <h5 class="text-xl md:text-2xl text-left uppercase mt-2">
      {{ currencyFormat(props.productDetail?.price as number) }}
    </h5>
    <SmallOverviewSwitcher
        v-if="products && products.length > 1 || products && products.length > 1"
        :products="products"
        class="mt-5"
    />
    <div class="fixed md:relative bottom-0 left-0 w-full">
      <div class="md:mt-10">
        <button
            @click="addToCart"
            class="text-xl  bg-black md:bg-black/90 text-white py-3 md:py-4 px-8 relative w-full font-bold after:bg-black after:absolute after:z-0 after:h-full after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer overflow-hidden"
        >
          <span class="relative z-10">
            კალათაში დამატება
          </span>
        </button>
      </div>
    </div>
  </div>
</template>
