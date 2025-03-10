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
}>()

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
  console.log(updatedProduct)
  if (updatedProduct) {
    cartStore().addToCart(updatedProduct)
  }
}

</script>

<template>
  <div
      class="sticky bottom-0 left-0 right-0 bg-white z-40 w-full border-y border-solid border-black py-7 px-5 md:px-10 flex md:justify-end"
  >
    <div
        class="flex justify-between md:justify-start gap-10 items-center w-full md:w-auto"
    >
      <h2 class="text-3xl md:text-4xl text-center uppercase">
        {{ currencyFormat(props.productDetail?.price as number) }}
      </h2>
      <button
          @click="addToCart"
          class="text-xl md:text-2xl text-center bg-black/90 text-white py-3 md:py-4 px-8 rounded-full relative font-bold after:bg-black after:absolute after:z-0 after:h-full after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer overflow-hidden"
      >
        <span class="relative z-20">
          კონტაქტი
        </span>
      </button>
    </div>
  </div>
</template>
