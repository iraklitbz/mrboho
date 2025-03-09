<script setup lang="ts">
import CheckoutCart from "~/components/Cart/CheckoutCart.vue"
import {cartStore} from "~/store/cart"
import ExpressCheckout from "~/components/checkout/ExpressCheckout.vue";
import CheckoutForm from "~/components/checkout/CheckoutForm.vue";
const arrayStrings = ref<string[]>(
    cartStore().cartProducts
        .map(item => item?.product?.slug)
        .filter((slug): slug is string => !!slug)
);
await cartStore().fetchIfExist(arrayStrings.value)
</script>

<template>
  <main class="border-t border-black mt-10">
    <div class="max-w-5xl mx-auto grid grid-cols-12 gap-10 my-20">
      <section
        class="col-span-7"
      >
        <div>
          <h2 class="text-center mb-2 text-sm"> Express checkout</h2>
          <ExpressCheckout />
        </div>
        <div class="py-3 flex items-center text-md text-gray-800 before:flex-1 before:border-t before:border-gray-300 before:me-6 after:flex-1 after:border-t after:border-gray-300 after:ms-6 ">
          ან
        </div>
        <div>
          <CheckoutForm
              :products="cartStore().cartProducts"
              :total="currencyFormat(cartStore().cartTotalPrice as number)"
          />
        </div>
      </section>
      <aside class="col-span-5">
        <CheckoutCart
            :products="cartStore().cartProducts"
            :total="currencyFormat(cartStore().cartTotalPrice as number)"
        />
      </aside>
    </div>
  </main>
</template>

<style scoped>

</style>
