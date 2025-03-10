<script setup lang="ts">
import { useVfm } from 'vue-final-modal'
const vfm = useVfm()
const { closeAll } = vfm
const props = defineProps<{
  products: string,
  address: string,
  city: string
}>()
const products = computed(() => JSON.parse(props.products))
</script>

<template>
  <div class="px-5 py-10">
    <div>
      <h2 class="text-lg mb-5">Your products detail:</h2>
      <ul>
        <li
            v-for="(product, index) in products"
            :key="index"
            class="p-2 odd:bg-gray-100/50"
        >
          <div class="flex items-center">
            <figure
                class="w-14 mr-2"
            >
              <nuxt-img
                  :src="product.imageUrl"
                  class="object-contain"
              ></nuxt-img>
            </figure>
            <div>
              <nuxt-link
                  :to="product?.slug"
                  @click="closeAll()"
                  class="text-blue-900 underline"
              >{{ product?.name }}</nuxt-link>
              <span class="ml-2">
              x {{ product.quantity  }}
            </span>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="mt-5">
      <h2 class="text-lg mb-1">Shipping address:</h2>
      <div>
        {{ props.address  }}, {{ props.city  }}
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
