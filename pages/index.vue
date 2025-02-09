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
      <p class="text-center text-2xl md:text-5xl !leading-[1.2]">
        MR.BOHO ჩვენი მოდის კონცეფციის სათვალეების ფორმით გამოხატულებაა. დაუღალავი სურვილი შევქმნათ მუდმივად განვითარებადი პროდუქტები და სისტემატურად მივაღწიოთ მაქსიმალურ ეფექტურობას, რაც საშუალებას გვაძლევს  ჩვენს მომხმარებლებს კონკურენტული ფასები მივაწოდოთ და ამავდროულად, დავიცვათ მკაცრი ხარისხის სტანდარტები.
      </p>
    </section>
  </main>
</template>