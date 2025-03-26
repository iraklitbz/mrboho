<script setup lang="ts">
import type {SunglassesContenfull} from "~/types/contenfull-types"
const props = defineProps({
  products: {
    type: Array as PropType<SunglassesContenfull[]>,
    required: true
  }
})
</script>

<template>
  <ul
    class="grid grid-cols-3 md:grid-cols-5 gap-4"
  >
    <li
      v-for="product in products"
      :key="product?.sys?.id"
      class="flex"
    >
      <nuxt-link
        :to="`/sunglasses/${product.familie?.slug}/${product?.slug}`"
        class="w-28 h-10 flex items-center justify-center"
      >
        <nuxt-img
          :src="product?.imagesCollection?.items[0]?.url as string"
          :alt="product?.name as string"
          class="object-fit w-full"
          width="100"
          height="70"
        />
      </nuxt-link>
    </li>
  </ul>
</template>

<style scoped>

</style>
