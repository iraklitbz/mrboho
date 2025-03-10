<script setup lang="ts">
import { VueFinalModal } from 'vue-final-modal'
import ModalCloseButton from './ModalCloseButton.vue'
import OrderDetail from "~/components/Me/OrderDetail.vue"
const emit = defineEmits<{
  (e: 'close'): void
}>()
const props = defineProps<{
  products: string,
  address: string,
  city: string
}>()
</script>
<template>
  <VueFinalModal
      content-transition="slide-up"
      content-class="h-full"
      :lock-scroll="false"
      :reserve-scroll-bar-gap="false">
      <div class="flex h-full w-screen cursor-pointer items-center justify-center overflow-hidden py-16" @click.self="() => emit('close')">
        <div class="relative m-auto h-auto min-h-0 w-11/12 max-w-2xl cursor-auto rounded bg-white lg:max-w-2xl">
          <div class="relative flex h-auto flex-col">
              <OrderDetail
                :products="props.products"
                :address="props.address"
                :city="props.city"
              />
              <ModalCloseButton class="right-4 top-4 z-50" @click="emit('close')" />
            </div>
          </div>
      </div>
  </VueFinalModal>
</template>

