<script setup lang="ts">
import type {SunglassesContenfull} from "~/types/contenfull-types"
const route = useRoute()
const props = defineProps({
  collectionType: {
    type: String,
    required: true
  },
  productMoreData: {
    type: Array as PropType<SunglassesContenfull[]>,
    required: true
  }
})
</script>

<template>
  <section>
    <h2 class="text-8xl uppercase py-14 px-10">More <span> {{props.collectionType}} </span> options</h2>
    <div
        class="sunglasses-grid grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4"
    >
      <Card
          v-for="(sunglasses, index) in props.productMoreData.slice(0, 4)"
          :key="sunglasses?.sys?.id"
          :product="sunglasses as SunglassesContenfull"
          class="card border-l border-y border-solid border-black -mt-[1px]"
          :class="index === (props.productMoreData.length - 1) ? 'border-r' : ''"
          :slug="`${route.params.collectionType}/${sunglasses.familie?.slug}/${sunglasses?.slug}`"
      />
    </div>
  </section>
</template>

<style scoped>

</style>