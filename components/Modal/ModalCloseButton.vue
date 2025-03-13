
<script setup lang="ts">
import IconClose from '@/assets/icons/close.svg'
import Icon from '~/components/Icon.vue'
</script>
<template>
  <button class="absolute flex  size-8 items-center justify-center rounded-full border-2 border-white bg-primary p-0 text-xxs text-black">
    <Icon :icon="IconClose" :auto-align="false" />
  </button>
</template>

