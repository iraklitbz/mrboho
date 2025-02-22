<script setup lang="ts">
import type {
  Maybe,
  SunglassesContenfull,
  OpticalGlassesContenfull
} from '~/types/contenfull-types'
  const props = defineProps<{
    productDetail: Maybe<SunglassesContenfull | OpticalGlassesContenfull>
  }>()
import { selectedStore } from "~/store/selected"
</script>

<template>
  <div
    class="sticky bottom-0 left-0 right-0 bg-white z-50 w-full border-y border-solid border-black py-7 px-5 md:px-10 flex md:justify-end"
  >
    <div
      class="flex justify-between md:justify-start gap-10 items-center w-full md:w-auto"
    >
      <h2
          class="text-3xl md:text-4xl text-center uppercase"
      >
        {{ props.productDetail?.price }} ₾
      </h2>
      <nuxt-link
          to="/contact"
          @click="selectedStore().handleSelected(props.productDetail?.name)"
          class="text-2xl md:text-3xl text-center bg-black text-white py-3 md:py-4 px-8 rounded-full"
      >
        კონტაქტი
      </nuxt-link>
    </div>
  </div>
</template>

<style scoped>

</style>