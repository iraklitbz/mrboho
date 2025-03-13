<script setup lang="ts">
import CheckoutCart from "~/components/Cart/CheckoutCart.vue"
import {cartStore} from "~/store/cart"
import ExpressCheckout from "~/components/Checkout/ExpressCheckout.vue";
import CheckoutForm from "~/components/Checkout/CheckoutForm.vue";
import {showModalCartIsUpdated} from "~/composables/useModalCartIsUpdated"
const arrayStrings = ref<string[]>(
    cartStore().cartProducts
        .map(item => item?.product?.sys?.id)
        .filter((id): id is string => !!id)
);
await cartStore().fetchIfExist(arrayStrings.value)
onMounted(async () => {
  if(cartStore().cartUpdated) {
    await showModalCartIsUpdated()
  }
})
</script>

<template>
  <main class="border-t border-black mt-10">
    <div class="max-w-5xl mx-auto grid grid-cols-12 gap-10 my-20 w-full px-5 md:px-10">
      <section
        class="col-span-12 md:col-span-7"
      >
<!--        <div>-->
<!--          <h2 class="text-center mb-2 text-sm"> Express Checkout</h2>-->
<!--          <ExpressCheckout />-->
<!--        </div>-->
<!--        <div class="py-3 flex items-center text-md text-gray-800 before:flex-1 before:border-t before:border-gray-300 before:Me-6 after:flex-1 after:border-t after:border-gray-300 after:ms-6 ">-->
<!--          ან-->
<!--        </div>-->
        <div>
          <CheckoutForm
              :products="cartStore().cartProducts"
              :total="currencyFormat(cartStore().cartTotalPrice as number)"
          />
        </div>
      </section>
      <aside class="hidden md:col-span-5 md:block">
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
