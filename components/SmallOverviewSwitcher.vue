<script setup lang="ts">
import type {SunglassesContenfull} from "~/types/contenfull-types"
const props = defineProps({
  products: {
    type: Array as PropType<SunglassesContenfull[]>,
    required: true
  }
})
const route = useRoute()
</script>

<template>
  <ul
    class="grid grid-cols-5 w-full"
  >
    <li
      v-for="product in products"
      :key="product?.sys?.id"
      class="flex px-3  bg-gray-50 mb-2"
    >
      <nuxt-link
        :to="`/${route.params.collectionType}/${product.familie?.slug}/${product?.slug}`"
        class="w-16 md:w-32 h-10 md:h-10 flex items-center justify-center"
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
