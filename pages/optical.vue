<script setup lang="ts">
import type {OpticalTypesContenfull} from '~/types/contenfull-types'
import { opticalStore } from "~/store/optical"
await opticalStore().fetchAllOptical()

</script>

<template>
  <main>
    <Headline
        :title="'Optical'"
    />
    <section
        class="sunglasses-grid grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-14"
    >
      <Card
          v-for="(optical, index) in opticalStore().allOptical"
          :key="index"
          :product="optical as OpticalTypesContenfull"
          class="card border-l border-y border-solid border-black -mt-[1px]"
          :class="index === (opticalStore().allOptical?.length - 1) ? 'border-r' : ''"
          :slug="`optical/${optical?.familie?.slug}/${optical?.slug}`"
      />
    </section>
  </main>
</template>

<style scoped>

</style>