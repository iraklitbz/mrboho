<script setup lang="ts">
const props = defineProps<{
  title: string,
  description?: string,
  categoryType?: Object<{ text: string, to: string }>
  heroImage?: string
}>()
</script>

<template>
<div
    class="flex flex-col items-center justify-center"
>
  <h2 class="text-2xl sm:text-3xl md:text-7xl lg:text-8xl font-bold text-center uppercase">
    {{ props.title }}
  </h2>
  <nuxt-link
      v-if="props.categoryType"
      :to="props.categoryType.to"
      class="py-4"
  >
      <span
          class="text-base relative after:bg-black after:absolute after:h-[1px] after:w-0 after:bottom-0.5 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
      >
         {{ props.categoryType.text }}
      </span>
  </nuxt-link>
  <p class="text-center max-w-lg m-auto text-gray-600">
    {{ props.description }}
  </p>
</div>
</template>

<style scoped>

</style>