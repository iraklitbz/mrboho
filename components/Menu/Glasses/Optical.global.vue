<script setup lang="ts">
import { opticalStore } from "~/store/optical"
await opticalStore().fetchOpticalTypes()
</script>

<template>
  <nav
      class="w-1/2 md:w-60 border-l border-solid border-gray-100 overflow-y-auto"
  >
    <nuxt-link
        to="/optical"
        class="text-center block py-8 border-b border-solid border-gray-100 sticky top-0 bg-gray-50 hover:bg-gray-100 transition-all ease-in-out duration-300"
    >
      <span
          class="text-base block text-center relative px-5 cursor-pointer"
      >
         ყველა ოპტიკური სათვალე
      </span>
    </nuxt-link>
    <ul
        class="flex flex-col items-center justify-center gap-7 text-base pt-5"
    >
        <li
            v-for="(item, index) in opticalStore().opticalTypes"
            :key="index"
            class="py-2"
        >
          <nuxt-link
              :to="`/optical/${item.slug}`"
              class="flex flex-col latin items-center justify-center"
          >
          <nuxt-img
              :src="item?.mainImage?.url"
              :alt="item.name"
              class="w-28 h-20 object-contain"
          />
          <span
              class="text-base font-bold uppercase"
          >
           {{ item.name }}
        </span>
      </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>

</style>