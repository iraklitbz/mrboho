<script setup lang="ts">
  import {useCheckoutStore} from "~/store/checkout"
  import Icon from '~/components/Icon.vue'
  import IconClose from '~/assets/icons/close.svg'
  const checkoutStore = useCheckoutStore()

</script>

<template>
  <div class="mt-10">
    <FormKit
        id="discountForm"
        name="discountForm"
        type="form"
        :actions="false"
        form-class="relative"
        :on-submit-invalid="true"
        :incomplete-message="false"
        @submit="checkoutStore.handleValidateDiscount(checkoutStore.discountInput)"
    >
        <FormKit
            v-model="checkoutStore.discountInput"
            id="discount"
            type="text"
            label="Code"
            :classes="{
              wrapper: 'w-full',
            }"
            name="discount"
        />
      <FormKit
          type="submit"
          :classes="{
              outer: 'h-full absolute right-1 top-[29px]',
              input: 'w-full text-center flex items-center justify-center h-[47px] !mb-0'
            }"
      >
            <span
                class="text-white"
            >
            გამოყენება
          </span>
      </FormKit>
    </FormKit>
    <ul class="flex items-center gap-2 flex-wrap mt-4">
      <li v-for="(item, index) in checkoutStore.discount?.discount" :key="index">
        <span class="bg-green-300 rounded-full py-2 px-3 inline-flex items-center gap-2 justify-center">
          {{ item.code }}
           <button @click="checkoutStore.handleRemoveDiscount(index)">
             <Icon :icon="IconClose" class="text-sm text-black/80 hover:text-black transition-all ease-in-out duration-300" :auto-align="false" />
           </button>

        </span>

      </li>
    </ul>
    <h2
        class="mt-2"
      v-if="checkoutStore.discount?.message"
    >
      {{ checkoutStore.discount?.message }}
    </h2>
  </div>
</template>

<style scoped>

</style>
