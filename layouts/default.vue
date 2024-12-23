<script setup>
import Header from "~/components/Header.vue";
</script>
<template>
  <div
    class="pt-28"
  >
    <Header />
    <div>
      <slot />
    </div>
    <Footer />
  </div>
</template>
