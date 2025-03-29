<script setup lang="ts">
import type {SunglassesContenfull, SunglassesTypesContenfull} from "~/types/contenfull-types"
const route = useRoute()
const props = defineProps({
  collectionType: {
    type: String,
    required: true
  },
  productMoreData: {
    type: Array as PropType<SunglassesTypesContenfull[]>,
    required: true
  }
})
</script>

<template>
  <section class="relative z-20">
    <h2 class="text-3xl md:text-5xl uppercase pt-10 pb-7 px-5 md:px-10 text-center">More</h2>
    <div
        class="sunglasses-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2"
    >
      <SmallCard
          v-for="sunglasses in props.productMoreData"
          :key="sunglasses?.sys?.id"
          :product="sunglasses as SunglassesContenfull"
          class="bg-gray-50"
          :slug="`${route.params.collectionType}/${sunglasses?.slug}`"
      />
    </div>
  </section>
</template>

<style scoped>

</style>
