<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
})
const user = useSupabaseUser()
</script>

<template>
  <main>
    <Headline
        :title="user?.user_metadata?.full_name"
    />
    <section
        class="mt-10 border-t border-b border-solid border-black"
    >
      <div
          class="px-5 py-10 md:p-10 w-full max-w-xl m-auto"
      >
        <p class="text-center">No content yet</p>
      </div>
    </section>
  </main>
</template>

<style scoped>

</style>
