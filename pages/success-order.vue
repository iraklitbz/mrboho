<script setup>
import OrderDetail from "~/components/Me/OrderDetail.vue";
import { useMeStore } from "~/store/me";
definePageMeta({
  middleware: 'order-check'
})
const meStore = useMeStore()
</script>

<template>
  <main
  >
      <Headline :title="'გმადლობთ შეკვეთისთვის'" />
      <section v-if="meStore.orderByReference" class="max-w-5xl mx-auto my-14 md:my-20">
        <p class="text-center text-xl md:text-3xl !leading-[1.2] px-10">
          თქვენი შეკვეთა წარმატებით გადაიგზავნება და ჩვენი გუნდი მალე შემდეგ კონტაქტის მეშვეობით გადაგიგზავნება შეკვეთის დეტალები.
        </p>
        <OrderDetail
            :products="meStore.orderByReference?.products"
            :address="meStore.orderByReference?.address"
            :city="meStore.orderByReference?.city"
        />

        <nuxt-link
            to="/"
            class="text-center w-full max-w-md m-auto block mt-10 bg-black/90 text-white py-3 md:py-3 px-8 relative font-bold after:bg-black after:absolute after:z-0 after:h-full after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer overflow-hidden"
        >
          <span class="relative z-20"> მთავარი გვერდი</span>
        </nuxt-link>
      </section>
  </main>
</template>
