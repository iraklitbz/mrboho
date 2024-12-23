<script setup lang="ts">
import type {SunglassesContenfull} from '~/types/contenfull-types'
import { sunglassesStore } from "~/store/sunglasses"
await sunglassesStore().fetchNewIn()

</script>

<template>
  <main>
    <Headline
        :title="'New In'"
        :category="false"
    />
    <section
        class="sunglasses-grid grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-14"
    >
      <Card
          v-for="(sunglasses, index) in sunglassesStore().newIn"
          :key="index"
          :product="sunglasses as SunglassesContenfull"
          class="card border-l border-y border-solid border-black -mt-[1px]"
          :class="index === (sunglassesStore().newIn?.length - 1) ? 'border-r' : ''"
          :slug="`sunglasses/${sunglasses.familie?.slug}/${sunglasses.slug}`"
      />
    </section>
  </main>
</template>

<style scoped>

</style>