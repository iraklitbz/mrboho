<script setup lang="ts">
import { getNode } from '@formkit/core'
import {cartStore} from "~/store/cart";
import type {CartProduct} from "~/types/local-types";
import {currencyFormat} from "~/utils/currency-utils";
const props = defineProps<{
  item: CartProduct,
  cartProductIndex: number
}>()
onMounted(() => {
  const currentNode = getNode(`${props.item.product?.sys?.id}-quantity`)
  if (currentNode) {
    currentNode.on('delete', () => {
      cartStore().removeFromCart(props.item.product?.sys?.id as string)
    })
  }
})
</script>

<template>
  <li
      class="bg-gray-50 p-2 rounded-lg border-solid border-gray-300 border"
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
          <h3 class="latin text-lg">
            <nuxt-link
                :to="item?.product?.slug"
                @click="cartStore().handleCartToggle()"
            >
              {{item?.product?.name}}
            </nuxt-link>
          </h3>
          <p class="latin text-lg"><strong>{{currencyFormat(item?.product?.price as number)}}</strong></p>
        </div>
      </div>
    </div>
    <div
        class="flex items-center justify-start w-full gap-5 mt-7"
    >
      <FormKit
          :id="`${item.product?.sys?.id}-quantity`"
          :key="`${item.product?.sys?.id}-quantity-${cartProductIndex}`"
          v-model="item.total"
          name="quantity"
          type="stepNumber"
          :small="true"
          :deletable="true"
          :min="1"
      />
    </div>
  </li>
</template>

<style scoped>

</style>
