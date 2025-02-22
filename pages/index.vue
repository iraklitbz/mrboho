<script setup lang="ts">
import { heroStore } from '~/store/hero';
await heroStore().fetchHeroHome()
</script>

<template>
  <main>
    <section
        class="-mt-28 relative z-10"
    >
      <div class="absolute inset-0 z-0">
        <img
            src="https://images.ctfassets.net/4tddvybktz4p/4sYvu5S4wtSkp9LhHqCnhL/65f33cb8ff15924a8e54ba8a0a1a072d/mrboho.png"
            alt="Fallback video"
            class="w-full h-full object-cover hidden md:block"
        />
        <img
            src="https://images.ctfassets.net/4tddvybktz4p/4sYvu5S4wtSkp9LhHqCnhL/65f33cb8ff15924a8e54ba8a0a1a072d/mrboho.png"
            alt="Fallback video mobile"
            class="w-full h-full object-cover md:hidden"
        />
      </div>
      <div
          class="relative z-10 opacity-0 animate-fade-in"
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
      </div>
     <div
      class="flex flex-col items-center absolute left-1/2 -translate-x-1/2 bottom-10 w-full z-20"
     >
       <h3 class="text-3xl latin w-full sm:text-5xl text-white md:text-7xl font-bold uppercase lg:text-8xl  text-center md:px-10 px-5">
         ჩვენ ვართ <span class="latin">MR.BOHO</span>
       </h3>
       <p class="text-xl w-full sm:text-3xl text-white text-center mt-3 latin px-5">Official Partner & Exclusive Distributor in Georgia</p>
     </div>
    </section>
    <section
        class="px-10 py-20"
    >
      <p class="text-center text-2xl md:text-4xl !leading-[1.2]">
        <span class="latin">MR.BOHO</span> მოდის კონცეფციის სათვალეების ფორმით გამოხატულებაა. დაუღალავი სურვილი შევქმნათ მუდმივად განვითარებადი პროდუქტები და სისტემატურად მივაღწიოთ მაქსიმალურ ეფექტურობას, რაც საშუალებას გვაძლევს  ჩვენს მომხმარებლებს კონკურენტული ფასები მივაწოდოთ და ამავდროულად, დავიცვათ მკაცრი ხარისხის სტანდარტები.
      </p>
    </section>
  </main>
</template>

<style>
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.animate-fade-in {
  animation: fadeIn 1.5s ease-in-out 1.2s forwards;
}
</style>
