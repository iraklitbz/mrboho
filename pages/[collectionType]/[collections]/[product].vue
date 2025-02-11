<script setup lang="ts">
import type {
  Maybe,
  SunglassesContenfull,
  OpticalGlassesContenfull, SunglassesTypesContenfull, OpticalTypesContenfull
} from '~/types/contenfull-types'
import { sunglassesStore } from "~/store/sunglasses"
import { opticalStore } from "~/store/optical"
const route = useRoute()
const productDetail = ref<Maybe<SunglassesContenfull | OpticalGlassesContenfull>>(null)
const productData = ref<Maybe<SunglassesTypesContenfull | OpticalTypesContenfull>>(null)
const breadcrumbsNav = ref([])
if(route.params.collectionType === 'sunglasses') {
  await sunglassesStore().fetchSunglassesDetail(route.params.product as string)
  await sunglassesStore().fetchSunglassesTypesBySlug(route.params.collections as string)
  productDetail.value = sunglassesStore().sunglassesDetail
  productData.value = sunglassesStore().sunglassesTypesBySlug
  breadcrumbsNav.value = [
    { text: 'Sunglasses', to: '/sunglasses' },
    { text: productData.value?.name as string, to: `/sunglasses/${productData.value?.slug}` },
    { text: productDetail.value?.name as string}
  ]
} else {
  await opticalStore().fetchOpticalDetail(route.params.product as string)
  await opticalStore().fetchOpticalTypesBySlug(route.params.collections as string)
  productDetail.value = opticalStore().opticalDetail
  productData.value = opticalStore().opticalTypesBySlug
  breadcrumbsNav.value = [
    { text: 'Optical', to: '/optical' },
    { text: productData.value?.name as string, to: `/optical/${productData.value?.slug}` },
    { text: productDetail.value?.name as string }
  ]
}


</script>

<template>
  <main>
    <Headline
        :title="productData?.name as string"
    />
    <Breadcrumbs
        :breadcrumbs-nav="breadcrumbsNav"
    />
    <section
        class="mt-14"
    >
      <ul
        class="w-full"
      >
        <li
          v-for="(images, index) in productDetail?.imagesCollection?.items"
          :key="index"
          class="border-b border-solid border-black p-5 md:p-0"
          :class="index === 0 ? 'border-t' : ''"
        >
          <nuxt-img
              :src="images?.url as string"
              :alt="productDetail?.name as string"
              class="w-full max-w-4xl m-auto h-full object-cover"
          />
        </li>
      </ul>
    </section>
    <MoreProducts
        :collection-type="productData?.name"
        :product-more-data="route.params.collectionType === 'sunglasses' ? productData?.sunglassesCollection?.items : productData?.glassesCollection?.items"
    />
  </main>
</template>

<style scoped>

</style>