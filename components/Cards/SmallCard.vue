<script setup lang="ts">
import type {SunglassesContenfull, SunglassesTypesContenfull} from '~/types/contenfull-types';
import {currencyFormat} from "~/utils/currency-utils";
const props = defineProps<{
  product: SunglassesTypesContenfull;
  slug: string
}>();
console.log(props);
</script>

<template>
  <nuxt-link
      :to="`/${props.slug}`"
      class="group p-5 aspect-square relative"
  >
    <figure class="relative w-full aspect-square z-30">
      <nuxt-img
          v-if="props.product?.mainImage"
          class="absolute w-full h-full object-contain"
          :src="props.product.mainImage?.url as string"
          :alt="props.product?.name as string"
      />
    </figure>
    <footer
        class="flex flex-col justify-between text-base"
    >
      <h2 class="text-xl latin">
        {{ props.product.name }}
      </h2>
    </footer>
  </nuxt-link>
</template>

<style scoped>
</style>
