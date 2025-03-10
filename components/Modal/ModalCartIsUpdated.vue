<script setup lang="ts">
import { VueFinalModal } from 'vue-final-modal'
import ModalCloseButton from './ModalCloseButton.vue'
import IconWarrning from '@/assets/icons/warrning.svg'
import Icon from '~/components/Icon.vue'
const emit = defineEmits<{
  (e: 'close'): void
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
              <div class="px-5 py-10 flex flex-col md:flex-row gap-5 items-center justify-center">
                <Icon :icon="IconWarrning" class="text-6xl" :auto-align="false" />
                <p>ჩვენ შევამჩნიეთ, რომ თქვენს კალათაში ერთი ან მეტი ნივთი განახლდა. ამიტომ, ჩვენ ისინი კალათიდან ამოვიღეთ. გთხოვთ, გადაამოწმეთ თქვენი კალათა ხელახლა.</p>
              </div>
            <ModalCloseButton class="right-4 top-4 z-50" @click="emit('close')" />
          </div>
        </div>
      </div>
  </VueFinalModal>
</template>

