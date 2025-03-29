<script setup lang="ts">
import type { Breadcrumb } from '~/types/local-types'

import type {
  Maybe,
  SunglassesContenfull,
  OpticalGlassesContenfull, SunglassesTypesContenfull, OpticalTypesContenfull
} from '~/types/contenfull-types'
import { sunglassesStore } from "~/store/sunglasses"
import { opticalStore } from "~/store/optical"
import ProductDetailCarrusel from "~/components/ProductDetailCarrusel.vue";
import ProductAside from "~/components/ProductAside.vue";
import {currencyFormat} from "~/utils/currency-utils";
const route = useRoute()
const url = useRequestURL()
const productDetail = ref<Maybe<SunglassesContenfull | OpticalGlassesContenfull>>(null)
const productData = ref<Maybe<SunglassesTypesContenfull | OpticalTypesContenfull>>(null)
const productFamily = ref<Maybe<Array<SunglassesTypesContenfull | OpticalTypesContenfull>>>(null)
const breadcrumbsNav = ref<Breadcrumb[]>([])
if(route.params.collectionType === 'sunglasses') {
  await sunglassesStore().fetchSunglassesDetail(route.params.product as string)
  await sunglassesStore().fetchSunglassesTypesBySlug(route.params.collections as string)
  await sunglassesStore().fetchSunglassesTypes()
  productDetail.value = sunglassesStore().sunglassesDetail
  productData.value = sunglassesStore().sunglassesTypesBySlug
  productFamily.value = sunglassesStore().randomOpticalTypes
  breadcrumbsNav.value = [
    { text: 'Sunglasses', to: '/sunglasses' },
    { text: productData.value?.name as string, to: `/sunglasses/${productData.value?.slug}` },
    { text: productDetail.value?.name as string}
  ]
} else {
  await opticalStore().fetchOpticalDetail(route.params.product as string)
  await opticalStore().fetchOpticalTypesBySlug(route.params.collections as string)
  await opticalStore().fetchOpticalTypes()
  productDetail.value = opticalStore().opticalDetail
  productData.value = opticalStore().opticalTypesBySlug
  productFamily.value = opticalStore().randomOpticalTypes
  breadcrumbsNav.value = [
    { text: 'Optical', to: '/optical' },
    { text: productData.value?.name as string, to: `/optical/${productData.value?.slug}` },
    { text: productDetail.value?.name as string }
  ]
}
useSeoMeta(productDetail.value?.imagesCollection?.items[0]?.url as string, productDetail.value?.name as string, currencyFormat(productDetail.value?.price as number), url?.href as string)
</script>

<template>
  <main>
    <Breadcrumbs
        :breadcrumbs-nav="breadcrumbsNav"
    />
    <section
        class="mt-5 md:mt-14"
    >
      <div class="grid md:grid-cols-12 gap-10 md:px-10 max-w-7xl m-auto relative mb-10">
        <ProductDetailCarrusel
            class="grid grid-cols-6 md:col-span-8 gap-2"
            :product-detail="productDetail as SunglassesContenfull | OpticalGlassesContenfull"
        />
        <div class="flex flex-col md:col-span-4 relative z-50 px-5">
          <ProductAside
              :product-detail="productDetail as SunglassesContenfull | OpticalGlassesContenfull"
              :products="route.params.collectionType === 'sunglasses' ? productData?.sunglassesCollection?.items : productData?.glassesCollection?.items"
              :breadcrumbs-nav="breadcrumbsNav"
          />
        </div>
      </div>
    </section>
    <client-only>
      <MoreProducts
          class="mb-10"
          :collection-type="productData?.name as string"
          :product-more-data="productFamily"
      />
    </client-only>
  </main>
</template>

<style scoped>

</style>
