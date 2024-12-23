<template>
  <!-- eslint-disable-next-line tailwindcss/no-custom-classname -->
  <span class="icon">
        <!-- eslint-disable-next-line tailwindcss/no-custom-classname -->
        <component :is="icon" :filled="filled" class="size-[1em] align-middle" :class="{ 'icon--filled': !filled, 'mb-[0.125em]': autoAlign }" />
    </span>
</template>

<script setup async lang="ts">
defineProps({
  filled: {
    type: Boolean,
    default: false
  },
  icon: {
    type: Object,
    required: true
  },
  autoAlign: {
    type: Boolean,
    default: true
  }
})
</script>

<style lang="scss">
.icon--filled * {
  @apply fill-current;
}
</style>
