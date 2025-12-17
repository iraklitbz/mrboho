<script setup lang="ts">
// route params
const route = useRoute()
const slug = route.params.slug
</script>

<template>
  <main class="px-10 py-20">
    <h1 class="text-4xl font-bold mb-5">პროდუქტის გვერდი</h1>
    <p class="text-xl">ამ გვერდზე უნდა აჩვენო პროდუქტი: <strong>{{ slug }}</strong></p>
  </main>
</template>
