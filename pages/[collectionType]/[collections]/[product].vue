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
const route = useRoute()
const productDetail = ref<Maybe<SunglassesContenfull | OpticalGlassesContenfull>>(null)
const productData = ref<Maybe<SunglassesTypesContenfull | OpticalTypesContenfull>>(null)
const breadcrumbsNav = ref<Breadcrumb[]>([])
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
    <Breadcrumbs
        :breadcrumbs-nav="breadcrumbsNav"
    />
    <section
        class="mt-14"
    >
      <div class="flex flex-col-reverse md:grid md:grid-cols-12 gap-10 px-5 md:px-10 max-w-7xl m-auto relative mb-10">
        <ProductDetailCarrusel
            class="flex flex-col-reverse md:grid md:grid-cols-6 md:col-span-8 gap-2"
            :product-detail="productDetail as SunglassesContenfull | OpticalGlassesContenfull"
        />
        <div class="flex flex-col md:col-span-4 relative z-50">
          <ProductAside
              :product-detail="productDetail as SunglassesContenfull | OpticalGlassesContenfull"
              :products="route.params.collectionType === 'sunglasses' ? productData?.sunglassesCollection?.items : productData?.glassesCollection?.items"
              :breadcrumbs-nav="breadcrumbsNav"
          />
        </div>
      </div>
    </section>
    <div class="px-5 md:px-10">
      <SmallOverviewSwitcher
          :products="route.params.collectionType === 'sunglasses' ? productData?.sunglassesCollection?.items : productData?.glassesCollection?.items"
          class="mt-16 md:hidden"
      />
    </div>
    <MoreProducts
        class="mb-10"
        :collection-type="productData?.name as string"
        :product-more-data="route.params.collectionType === 'sunglasses' ? productData?.sunglassesCollection?.items : productData?.glassesCollection?.items"
    />
  </main>
</template>

<style scoped>

</style>
