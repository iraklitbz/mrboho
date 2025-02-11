<script setup lang="ts">
import IconChevronDown from "assets/icons/chevron-down.svg"
import Icon from "~/components/Icon.vue";

const props = defineProps<{
  breadcrumbsNav: Array<{ text: string, to: string }>
}>()
</script>

<template>
  <nav>
    <ul
        class="flex flex-col md:flex-row justify-center items-center text-base md:text-2xl mt-8"
    >
      <li
          v-for="(breadcrumb, index) in props.breadcrumbsNav"
          :key="index"
      >
        <span v-if="index !== 0" class="md:mr-2 hidden md:inline-block">/</span>
        <span v-if="index !== 0" class="flex md:hidden justify-center py-1">
           <Icon
               :icon="IconChevronDown"
               :auto-align="true"
               class="cursor-pointer text-xs text-black"
           />
        </span>
        <nuxt-link
            v-if="breadcrumb.to"
            :to="breadcrumb.to"
            class="md:mr-2 font-bold"
        >
            <span
                class="relative after:bg-black after:absolute after:h-[1px] after:w-0 after:bottom-0.5 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
            >
              {{ breadcrumb.text }}
            </span>
        </nuxt-link>
        <span
            v-else
        >
          {{ breadcrumb.text }}
        </span>
      </li>
    </ul>
  </nav>
</template>

<style scoped>

</style>