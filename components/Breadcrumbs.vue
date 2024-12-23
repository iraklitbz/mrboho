<script setup lang="ts">
const props = defineProps<{
  breadcrumbsNav: Array<{ text: string, to: string }>
}>()
</script>

<template>
  <nav>
    <ul
        class="flex justify-center font-bold text-2xl mt-8"
    >
      <li
          v-for="(breadcrumb, index) in props.breadcrumbsNav"
          :key="index"
      >
        <span v-if="index !== 0" class="mr-2">/</span>
        <nuxt-link
            v-if="breadcrumb.to"
            :to="breadcrumb.to"
            class="mr-2"
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