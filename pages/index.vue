<script setup lang="ts">
import { heroStore } from '~/store/hero';
await heroStore().fetchHeroHome()
const mainImage = 'https://downloads.ctfassets.net/4tddvybktz4p/4zqJR6fHkJ1qZK8ulLSalM/7e494563c6955b3926eee4264a15781c/MRBOHO_02_LIVA-AMAND-JUL_0998.jpg'
useSeoMeta(mainImage as string, 'ჩვენ ვართ MR.BOHO', 'Official & Exclusive Partner in Georgia', 'https://mrboho.ge')

</script>

<template>
  <main>
    <section
        class="-mt-28 relative z-10"
    >
      <div class="relative w-full h-[80vh]">
        <div class="absolute inset-0 w-full h-full overflow-hidden">
          <video
              class="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 object-cover"
              src="https://videos.ctfassets.net/4tddvybktz4p/29yVhS3bcUu4EzYCRmjKp8/758438d815ec81220a1eefd30470e2eb/mrboho.mp4"
              title="we are mrboho video"
              autoplay
              loop
              muted
              playsinline
          ></video>
        </div>
      </div>
     <div
      class="flex flex-col items-center absolute left-1/2 -translate-x-1/2 bottom-10 w-full z-20"
     >
       <h3 class="text-3xl latin w-full sm:text-5xl text-white md:text-7xl font-bold uppercase lg:text-8xl  text-center md:px-10 px-5">
         ჩვენ ვართ <span class="latin">MR.BOHO</span>
       </h3>
       <p class="text-xl w-full sm:text-3xl text-white text-center mt-3 latin px-5">Official & Exclusive Partner in Georgia</p>
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
