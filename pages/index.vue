<script setup lang="ts">
import { heroStore } from '~/store/hero';
await heroStore().fetchHeroHome()
</script>

<template>
  <main>
    <section
        class="-mt-28 relative z-10"
    >
      <iframe
          class="hidden md:block w-full aspect-video"
          src="https://player.vimeo.com/video/1010264738?autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1&background=1"
          title="we are mrboho video desktop"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
      ></iframe>
      <iframe
          class="md:hidden w-full aspect-[9/16]"
          src="https://player.vimeo.com/video/1010265946?autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1&background=1"
          title="we are mrboho video mobile"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
      ></iframe>
     <div
      class="flex flex-col items-center absolute left-1/2 -translate-x-1/2 bottom-10 w-full"
     >
       <h3 class="text-3xl latin w-full sm:text-5xl text-white md:text-7xl font-bold uppercase lg:text-8xl  text-center px-10 ">
         {{ heroStore().homeHero?.title }}
       </h3>
       <p class="text-xl w-full sm:text-3xl text-white text-center mt-3 latin">Official Partner & Exclusive Distributor in Georgia</p>
     </div>
    </section>
    <section
        class="px-10 py-20"
    >
      <p class="text-center text-2xl md:text-5xl !leading-[1.2]">
        <span class="latin">MR.BOHO</span> ჩვენი მოდის კონცეფციის სათვალეების ფორმით გამოხატულებაა. დაუღალავი სურვილი შევქმნათ მუდმივად განვითარებადი პროდუქტები და სისტემატურად მივაღწიოთ მაქსიმალურ ეფექტურობას, რაც საშუალებას გვაძლევს  ჩვენს მომხმარებლებს კონკურენტული ფასები მივაწოდოთ და ამავდროულად, დავიცვათ მკაცრი ხარისხის სტანდარტები.
      </p>
    </section>
  </main>
</template>