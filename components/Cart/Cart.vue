<script setup async lang="ts">
import { cartStore } from "~/store/cart"
import IconClose from "assets/icons/close.svg"
import IconTrash from "assets/icons/trash.svg"
import Icon from "~/components/Icon.vue"
import type {CartProduct} from "~/types/local-types"
import {currencyFormat} from "~/utils/currency-utils";
const isVisible = ref(false)
onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 2)
})
function updateTotal(slug: string, newTotal: string) {
  cartStore().updateProductTotal(slug, parseInt(newTotal, 10))
}
</script>
<template>
  <div
    class="fixed h-screen w-full top-0 left-0 z-50"
  >
    <div @click="cartStore().handleCloseCart()" class="bg-black/70 w-full h-full absolute"></div>
    <section
        :class="['max-w-md md:max-w-md absolute w-full p-6 bg-white shadow-lg top-0 h-full', { 'slide-in': isVisible }]"
    >
      <header>
        <h2 class="text-xl">კალათა</h2>
        <button
            class="absolute right-5 top-5 cursor-pointer"
            @click="cartStore().handleCartToggle()"
        >
          <Icon
              :icon="IconClose"
              :auto-align="true"
              class="cursor-pointer text-2xl text-black"
          />
        </button>
      </header>
      <div
          v-if="cartStore().cartProducts.length"
          class="mt-10"
      >
        <ul
          class="grid grid-cols-2 gap-4"
        >
          <li
            v-for="(item, index) in cartStore().cartProducts as CartProduct[]"
            :key="index"
            class="bg-gray-100 p-2 rounded-lg"
          >
            <div
              class="flex flex-col items-center justify-between w-full gap-5"
            >
              <figure
                v-if="item?.product && item?.product?.imagesCollection && item?.product?.imagesCollection?.items[0]?.url"
              >
                <nuxt-img
                    :src="item?.product?.imagesCollection?.items[0]?.url as string"
                    :alt="item?.product?.name as string"
                    class="object-contain"
                />
              </figure>
              <div class="w-full">
                <div>
                  <h3 class="latin">{{item?.product?.name}}</h3>
                  <p class="latin"><strong>{{currencyFormat(item?.product?.price as number)}}</strong></p>
                </div>
              </div>
            </div>
            <div
                class="flex items-center justify-between w-full gap-5 mt-7"
            >
              <input
                  type="number"
                  :value="item.total"
                  class="bg-transparent w-full"
                  @input="updateTotal(item.product?.slug as string, ($event.target as HTMLInputElement).value)"
              />
              <button
                @click="cartStore().removeFromCart(item?.product?.slug as string)"
                class="hover:motion-preset-compress"
              >
                <Icon
                    :icon="IconTrash"
                    :auto-align="true"
                    class="cursor-pointer text-2xl text-red-400"
                />
              </button>
            </div>
          </li>
        </ul>
      </div>
      <div
          v-else
          class="bg-gray-100 px-5 py-7 text-center mt-10"
      >
        თქვენ კალათში პროდუქტები არ არის
      </div>
      <footer class="mt-10">
        <div class="flex justify-between text-xl">
          <p>ჯამი:</p>
          <p class="text-xl">{{currencyFormat(cartStore().cartTotalPrice)}}</p>
        </div>
        <nuxt-link
            to="/checkout"
            class="text-center w-full block mt-4 bg-black/90 text-white py-3 md:py-3 px-8 relative font-bold after:bg-black after:absolute after:z-0 after:h-full after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer overflow-hidden"
        >
          <span class="relative z-20">ყიდვის გაგრძელება</span>
        </nuxt-link>
      </footer>
    </section>
  </div>
</template>


<style scoped>
@keyframes slideInFromLeft {
  0% {
    right: -350px;
    opacity: 0;
  }
  100% {
    right: 0;
    opacity: 1;
  }
}

.slide-in {
  animation: slideInFromLeft 0.3s ease-out 0.2s forwards;
  opacity: 0;
}
</style>
