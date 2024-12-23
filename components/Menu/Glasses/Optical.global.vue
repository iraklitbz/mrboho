<script setup lang="ts">
import { opticalStore } from "~/store/optical"
await opticalStore().fetchOpticalTypes()
</script>

<template>
  <nav
      class="w-60 border-l border-solid border-gray-100 overflow-y-auto"
  >
    <nuxt-link
        to="/optical"
        class="text-center block py-8 border-b border-solid border-gray-100"
    >
      <span
          class="text-base relative after:bg-black after:absolute after:h-[1px] after:w-0 after:bottom-0.5 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
      >
         See all Optical
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
              class="flex flex-col items-center justify-center"
          >
          <nuxt-img
              :src="item?.mainImage?.url"
              :alt="item.name"
              class="w-28 h-20 object-cover"
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