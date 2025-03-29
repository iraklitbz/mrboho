<script setup lang="ts">
import type {Maybe, SunglassesContenfull, SunglassesTypesContenfull, OpticalTypesContenfull} from '~/types/contenfull-types'
import { sunglassesStore } from "~/store/sunglasses"
import { opticalStore } from "~/store/optical"
import FiltersColor from "~/components/Filters/FiltersColor.vue";
const route = useRoute()
const productData = ref<Maybe<SunglassesTypesContenfull | OpticalTypesContenfull>>(null)
const categoryType = ref({})
onMounted(async () => {
  if(route.params.collectionType === 'sunglasses') {
    await sunglassesStore().fetchSunglassesTypesBySlug(route.params.collections as string)
    productData.value = sunglassesStore().sunglassesTypesBySlug
    categoryType.value = {
      text: 'Sunglasses',
      to: '/sunglasses'
    }
  }
  else {
    await opticalStore().fetchOpticalTypesBySlug(route.params.collections as string)
    productData.value = opticalStore().opticalTypesBySlug
    categoryType.value = {
      text: 'Optical',
      to: '/optical'
    }
  }
  console.log(productData.value)
})

function getItems() {
  if (productData.value?.sunglassesCollection) {
    return sunglassesStore().filteredItems.length > 0 ? sunglassesStore().filteredItems : productData.value.sunglassesCollection.items
  } else if (productData.value?.glassesCollection) {
    return productData.value.glassesCollection.items
  }
  return []
}
const handleColorFilter = (color: string) => {
  sunglassesStore().handleColorFilter(color)
}
const resetFilters = () => {
  sunglassesStore().resetFilter()
}
</script>

<template>
  <main>
    <Headline
        v-if="productData"
        :title="productData?.name as string"
        :description="productData?.description as string"
        :category-type="categoryType"
        :hero-image="productData?.hero?.url as string"
    />
    <section class="relative mb-10">
      <div class="sunglasses-grid grid grid-cols-1 gap-5 px-5 md:grid-cols-3 lg:grid-cols-4">
        <Card
            v-for="(sunglasses, index) in getItems()"
            :key="sunglasses?.sys?.id"
            :product="sunglasses as SunglassesContenfull"
            class="card bg-gray-50"
            :slug="`${route.params.collectionType}/${sunglasses.familie?.slug}/${sunglasses?.slug}`"
        />
      </div>

      <div
          v-if="sunglassesStore().uniqueColors && sunglassesStore().uniqueColors.length > 3"
          class="px-5 sticky bottom-5 z-40 mt-10"
      >
        <FiltersColor
            :colors="sunglassesStore().uniqueColors"
            @handleFilter="handleColorFilter"
            @resetFilters="resetFilters"
            :filter-is-active="sunglassesStore().filteredItems.length > 0"
        />
      </div>
    </section>
  </main>
</template>

<style scoped>

</style>
