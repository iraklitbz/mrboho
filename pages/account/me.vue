<script setup lang="ts">
import {useMeStore} from "~/store/me"
import { format } from "@formkit/tempo"
import IconEye from "~/assets/icons/eye.svg"
import ModalOrderDetail from "~/components/Modal/ModalOrderDetail.vue"
import Icon from "~/components/Icon.vue"
import { useModal } from 'vue-final-modal'
import type {
  ExtendedUserOrderForm
} from '~/types/local-types'
const meStore = useMeStore()
const user = useSupabaseUser()
definePageMeta({
  middleware: 'auth'
})
onMounted(async () => {
  await meStore.fetchProducts(user.value?.email || '')
})
function showOrderDetailModal (products: string, address: string, city: string, src: string) {
  const orderDetailModalInstance = useModal({
    component: ModalOrderDetail,
    attrs: {
      src,
      products,
      address,
      city,
      onBeforeOpen () {
        blockScroll(window.scrollY)
      },
      onBeforeClose () {
        unBlockScroll()
      },
      onClose () {
        orderDetailModalInstance.close()
      }
    }
  })
  orderDetailModalInstance.open()
}
console.log()
</script>

<template>
  <main>
    <Headline
        :title="user?.user_metadata?.full_name"
    />
    <section
        class="mt-10 border-t border-b border-solid border-black"
    >
      <div
          v-if="meStore.products && meStore.products.length > 0"
          class="max-w-5xl mx-auto px-5 md:px-10"
      >
       <div
        class="my-10"
       >
         <table class="w-full">
           <thead class="bg-black text-white rounded-lg">
            <tr>
              <th class="text-left px-5 py-2">Order</th>
              <th class="text-left px-5 py-2">Date</th>
              <th class="text-right px-5 py-2">Total</th>
              <th class="text-right py-2"></th>
            </tr>
           </thead>
           <tbody>
             <tr
                 v-for="item in meStore.products as ExtendedUserOrderForm[]"
                 :key="item.order_id"
             >
               <th class="text-left px-5 py-2">{{ item.order_id }}</th>
               <th class="text-left px-5 py-2">{{ format(item.created_at, 'DD/MM/YYYY') }}</th>
               <th class="text-right px-5 py-2">{{ item.total_price }}</th>
               <th class="text-right px-5 py-2">
                 <button
                     class="flex items-center justify-end w-full"
                     @click="showOrderDetailModal(item.products, item.address, item.city)"
                 >
                   <Icon
                       :icon="IconEye"
                       class="text-xl text-black"
                   />
                 </button>
               </th>
             </tr>
           </tbody>
         </table>
       </div>
      </div>
      <div
          v-else
          class="px-5 py-10 md:p-10 w-full max-w-xl m-auto"
      >
        <p class="text-center">No content yet</p>
      </div>
    </section>
  </main>
</template>

<style scoped>

</style>
