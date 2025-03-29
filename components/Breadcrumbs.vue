<script setup lang="ts">
import type { Breadcrumb } from '~/types/local-types'
import IconChevronDown from "assets/icons/chevron-down.svg"
import Icon from "~/components/Icon.vue";

const props = defineProps<{
  breadcrumbsNav: Breadcrumb[]
}>()
</script>

<template>
  <nav>
    <ul
        class="flex justify-center items-center text-base md:text-lg mt-8"
    >
      <li
          v-for="(breadcrumb, index) in props.breadcrumbsNav"
          :key="index"
      >
        <span v-if="index !== 0" class="mr-2 inline-block text-gray-400">/</span>
        <nuxt-link
            v-if="breadcrumb?.to"
            :to="breadcrumb?.to"
            class="mr-2 font-bold text-gray-400"
        >
            <span
                class="relative after:bg-gray-400 after:absolute after:h-[1px] after:w-0 after:bottom-0.5 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
            >
              {{ breadcrumb.text }}
            </span>
        </nuxt-link>
        <span
            v-else
            class="text-gray-400"
        >
          {{ breadcrumb.text }}
        </span>
      </li>
    </ul>
  </nav>
</template>

<style scoped>

</style>
