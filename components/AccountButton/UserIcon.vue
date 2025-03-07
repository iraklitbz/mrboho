<script setup lang="ts">
const props = defineProps({
  userName: {
    type: String,
    required: true
  }
})
const firstName = props.userName.split(' ')[0]
</script>

<template>
  <div
      class="relative font-bold after:bg-black after:absolute after:h-[1px] after:w-0 after:bottom-0.5 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
  >
    {{ firstName }}
  </div>
</template>

<style scoped>

</style>
