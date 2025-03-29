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
    :class="heroImage ? 'bg-cover bg-center bg-no-repeat h-screen -mt-28 relative flex flex-col justify-end' : ''"
    :style="heroImage ? { backgroundImage: `url(${heroImage})` } : ''"
>
  <div
      class="flex flex-col items-center justify-center"
      :class="heroImage ? 'pb-10' : ''"
  >
    <h2 class="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center uppercase latin mt-1 md:mt-5">
      {{ props.title }}
    </h2>
    <nuxt-link
        v-if="props.categoryType"
        :to="props.categoryType.to"
        class="py-4 text-gray-400"
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
</div>
</template>

<style scoped>

</style>
