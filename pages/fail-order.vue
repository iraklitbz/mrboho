<template>
  <main>
    <Headline
        :title="'შეკვეთა ვერ დადასტურდა'"
    />
    <section class="max-w-5xl mx-auto my-14 md:my-20">
      <p class="text-center text-xl md:text-4xl !leading-[1.2] px-10">
        რაღაც ვერ წარიმართა, ჩვენ ვამოწმებთ რა მოხდა, მალე შეგატყობინებთ, დიდი მადლობა
      </p>
      <nuxt-link
          to="/"
          class="text-center w-full max-w-md m-auto block mt-10 bg-black/90 text-white py-3 md:py-3 px-8 relative font-bold after:bg-black after:absolute after:z-0 after:h-full after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer overflow-hidden"
      >
        <span class="relative z-20"> მთავარი გვერდი</span>
      </nuxt-link>
    </section>
  </main>
</template>
