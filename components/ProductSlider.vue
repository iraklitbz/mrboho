<script setup lang="ts">
import type { SunglassesContenfull } from '~/types/contenfull-types';

const props = defineProps({
  module: {
    type: Object
  }
})
</script>

<template>
    <section class="relative mb-10">
      <div class="sunglasses-grid grid grid-cols-1 gap-5 px-5 md:grid-cols-3 lg:grid-cols-5">
       
        <Card
            v-for="item in module?.productCollection.items"
            :key="item.id"
            :product="item as SunglassesContenfull"
            class="card bg-gray-50"
            :slug="`${item.__typename === 'Sunglasses' ? 'sunglasses' : 'optical'}/${item.familie?.slug}/${item.slug}`"
        />
      </div>
    </section>
</template>

<style>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>