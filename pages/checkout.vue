<script setup lang="ts">
import CheckoutCart from "~/components/Cart/CheckoutCart.vue"
import {cartStore} from "~/store/cart"
import {useCheckoutStore} from "~/store/checkout"
import CheckoutForm from "~/components/Checkout/CheckoutForm.vue";

const arrayStrings = ref<string[]>(
    cartStore().cartProducts
        .map(item => item?.product?.sys?.id)
        .filter((id): id is string => !!id)
);
await cartStore().fetchIfExist(arrayStrings.value)
</script>

<template>
  <main class="border-t border-black mt-10">
    <div class="max-w-5xl mx-auto flex flex-col-reverse md:grid grid-cols-1 md:grid-cols-12 gap-10 my-10 md:my-20 w-full px-5 md:px-10">
      <section
        class="md:col-span-7"
      >
        <div>
          <CheckoutForm
              :products="cartStore().cartProducts"
              :total="currencyFormat(useCheckoutStore().finalPrice)"
          />
        </div>
      </section>
      <aside class="md:col-span-5 md:block">
        <CheckoutCart
            :products="cartStore().cartProducts"
            :total="currencyFormat(useCheckoutStore().finalPrice)"
        />
      </aside>
    </div>
  </main>
</template>

<style scoped>

</style>
