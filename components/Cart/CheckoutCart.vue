<script setup lang="ts">
import type {CartProduct} from "~/types/local-types"
import { cartStore } from "~/store/cart"
import DiscountCode from "~/components/DiscountCode.vue";
const props = defineProps<{
  products: CartProduct[],
  total: string
}>()
import { useCheckoutStore } from "~/store/checkout"
const checkoutStore = useCheckoutStore()

const calculateDiscount = (price: number, discount: { amount: number; type: string }) => {
  if (discount.type === 'porcentage' || discount.type === 'percentage') {
    return price * (discount.amount / 100); // Calculamos el descuento y lo devolvemos como cantidad ahorrada
  } else if (discount.type === 'fix') {
    return discount.amount; // Descuento fijo
  }
  return 0;
};
</script>

<template>
  <div class="sticky top-40">
    <ul
        class="flex flex-col gap-2"
    >
      <li
          v-for="(item, index) in props.products"
          :key="index"
          class="flex items-center gap-4"
      >
        <figure
            v-if="item?.product && item?.product?.imagesCollection && item?.product?.imagesCollection?.items[0]?.url"
            class="aspect-square w-20 h-20 flex items-center rounded-lg border border-gray-300"
        >
          <nuxt-img
              :src="item?.product?.imagesCollection?.items[0]?.url as string"
              :alt="item?.product?.name as string"
              class="object-contain"
          />
        </figure>
        <div class="flex items-center justify-between w-full">
          <h3 class="latin"><nuxt-link :to="item?.product?.slug">{{item?.product?.name}}</nuxt-link></h3>
          <p class="latin"><strong>{{currencyFormat(item?.product?.price as number)}}</strong></p>
        </div>
      </li>
    </ul>
    <div class="mt-10">
      <ul>
        <li class="flex items-center justify-between">
          <span>
            Subtotal · {{ cartStore().cartTotalItems }} items
          </span>
          <span>
            {{currencyFormat(cartStore().cartTotalPrice as number)}}
          </span>
        </li>
        <li v-if="checkoutStore.discount && checkoutStore.discount.discount.length > 0">
          <div v-for="(discount, index) in checkoutStore.discount.discount" :key="index" class="mt-4">
            <div class="flex justify-between items-center">
                <span>
                  დისკონტო {{ discount.code }} ({{ discount.type === 'porcentage' || discount.type === 'percentage' ? discount.amount + '%' : currencyFormat(discount.amount) }})
                </span>
              <span>
                  - {{ currencyFormat(calculateDiscount(cartStore().cartTotalPrice as number, discount)) }}
                </span>
            </div>
          </div>
        </li>
        <li class="flex items-center justify-between mt-2">
          <span>
            Shipping
          </span>
          <span>
            0
          </span>
        </li>
        <li class="text-lg mt-4 flex items-center justify-between">
          <span>
            ჯამი:
          </span>
          <span>
            {{total}}
          </span>
        </li>
      </ul>
      <DiscountCode />
    </div>
  </div>
</template>
