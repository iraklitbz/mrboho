<script setup lang="ts">
import { sunglassesStore } from '~/store/sunglasses';
await sunglassesStore().fetchSunglassesTypes()

</script>

<template>
  <main>
    <section
        class="-mt-40 relative z-10"
    >
      <client-only>
        <VimeoPlayer
            video-id="1040708796"
        />
      </client-only>
    </section>
    <section
        class="px-10 py-20"
    >
      <p class="text-5xl">
        MR.BOHO is the expression in the form of glasses of our conception of fashion. A tireless commitment to creating products in constant evolution and systematically trying to achieve maximum efficiency that allows us to reach our users with competitive prices while respecting demanding quality standards.
      </p>
    </section>
  </main>
</template>