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
    class="grid grid-cols-4 gap-4 w-full"
  >
    <li
      v-for="product in products"
      :key="product?.sys?.id"
      class="flex px-2 md:px-0"
    >
      <nuxt-link
        :to="`/sunglasses/${product.familie?.slug}/${product?.slug}`"
        class="w-16 md:w-32 h-10 md:h-10 flex items-center justify-center"
      >
        <nuxt-img
          :src="product?.imagesCollection?.items[0]?.url as string"
          :alt="product?.name as string"
          class="object-fit w-full mix-blend-multiply"
          width="100"
          height="70"
        />
      </nuxt-link>
    </li>
  </ul>
</template>

<style scoped>

</style>
