<script setup lang="ts">
import { heroStore } from '~/store/hero';
await heroStore().fetchHeroHome()

</script>

<template>
  <main>
    <section
        class="-mt-28 relative z-10"
    >
      <nuxt-img
          :src="heroStore().homeHero?.image?.url"
          alt="MR.BOHO"
          class="w-full h-screen object-cover"
      />
      <h3 class="text-3xl w-full sm:text-5xl text-white md:text-7xl font-bold uppercase lg:text-8xl absolute left-1/2 text-center px-10 -translate-x-1/2 bottom-10">
        {{ heroStore().homeHero?.title }}
      </h3>
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