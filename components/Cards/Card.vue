<script setup lang="ts">
import type { SunglassesContenfull } from '~/types/contenfull-types';
const props = defineProps<{
  product: SunglassesContenfull;
  slug: string
}>();
</script>

<template>
  <nuxt-link
      :to="`/${props.slug}`"
      class="group p-5 aspect-square relative"
  >
    <header
      class="absolute w-full top-0 left-0"
    >
      <div
          class="flex justify-between items-center py-2 px-4"
      >
        <span
            v-if="props.product?.soldOut"
            class="text-gray-400"
        >
        Sold out
      </span>
        <span
            v-if="props.product?.new"
            class="text-green-500 font-bold"
        >
        New in
      </span>
      </div>
    </header>
    <figure class="relative w-full aspect-square z-30">
      <nuxt-img
          v-if="props.product?.imagesCollection?.items[0]"
          class="absolute w-full h-full object-contain left-0 top-0 transition-opacity duration-500 group-hover:opacity-0"
          :src="props.product.imagesCollection.items[0]?.url as string"
          :alt="props.product?.name as string"
      />

      <nuxt-img
          v-if="props.product?.imagesCollection?.items[1]"
          class="absolute w-full h-full left-0 object-contain top-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100 "
          :src="props.product.imagesCollection.items[1]?.url as string"
          :alt="props.product?.name as string"
      />
    </figure>
    <footer
        class="flex justify-between text-base"
    >
      <h2>
        {{ props.product.name }}
      </h2>
      <p>EUR {{ props.product.price }}</p>
    </footer>
  </nuxt-link>
</template>

<style scoped>
</style>