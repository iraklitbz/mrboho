<script setup lang="ts">
import type {Maybe, SunglassesContenfull, SunglassesTypesContenfull, OpticalTypesContenfull} from '~/types/contenfull-types'
import { sunglassesStore } from "~/store/sunglasses"
import { opticalStore } from "~/store/optical"
const route = useRoute()
const productData = ref<Maybe<SunglassesTypesContenfull | OpticalTypesContenfull>>(null)
const categoryType = ref({})
const slugUrl = ref('')
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
})

function getItems() {
  if (productData.value?.sunglassesCollection) {
    return productData.value.sunglassesCollection.items
  } else if (productData.value?.glassesCollection) {
    return productData.value.glassesCollection.items
  }
  return []
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
    <section
        class="sunglasses-grid grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-14"
    >
      <Card
          v-for="(sunglasses, index) in getItems()"
          :key="sunglasses?.sys?.id"
          :product="sunglasses as SunglassesContenfull"
          class="card border-l border-y border-solid border-black -mt-[1px]"
          :class="index === (getItems()?.length - 1) ? 'border-r' : ''"
          :slug="`${route.params.collectionType}/${sunglasses.familie?.slug}/${sunglasses?.slug}`"
      />
    </section>
  </main>
</template>

<style scoped>

</style>