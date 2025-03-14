<script setup lang="ts">
import type {CartProduct} from "~/types/local-types"
import IconLoader from "assets/icons/loader.svg"
import Icon from "~/components/Icon.vue"
import { useCheckoutStore } from "~/store/checkout"
const props = defineProps<{
  products: CartProduct[],
  total: string
}>()

const checkoutStore = useCheckoutStore()
</script>
<template>
  <FormKit
      v-model="checkoutStore.userOrderForm"
      id="checkoutForm"
      name="checkoutForm"
      type="form"
      :actions="false"

      form-class="flex flex-col gap-7 mb-2"
      :on-submit-invalid="true"
      :incomplete-message="false"
      @submit="checkoutStore.handleCheckoutForm(products, total)"
  >
    <div>
      <h3 class="flex justify-between items-center mb-4">Contact <nuxt-link to="/account/login">Login</nuxt-link></h3>
      <FormKit
          id="email"
          type="email"
          placeholder="Jonsnow@winterfall.com"
          label="ელ. ფოსტა *"
          name="email"
          validation="required|email"
          :validation-messages="{
            required: 'Please enter a valid email address',
            email: 'Please enter a valid email address'
          }"
      />
    </div>
    <div>
      <h3 class="flex justify-between items-center mb-4">Delivery</h3>
      <div class="grid grid-cols-6 gap-4">
        <FormKit
            id="name"
            type="text"
            placeholder="Jon"
            label="სახელი *"
            name="name"
            :classes="{
              outer: 'col-span-3',
            }"
            validation="required"
            :validation-message="{
              required: 'Please enter your name'
            }"
        />
        <FormKit
            id="surname"
            type="text"
            placeholder="Snow"
            label="გვარი *"
            name="surname"
            :classes="{
              outer: 'col-span-3',
            }"
            validation="required"
            :validation-message="{
              required: 'Please enter your name'
            }"
        />
        <FormKit
            id="address"
            type="text"
            placeholder="Snow"
            label="ქუჩის სახელი და ნომერი *"
            name="address"
            :classes="{
              outer: 'col-span-6',
            }"
            validation="required"
            :validation-message="{
              required: 'Please enter your name'
            }"
        />
        <FormKit
            id="city"
            type="text"
            placeholder="Snow"
            label="ქალაქი *"
            name="city"
            :classes="{
              outer: 'col-span-2',
            }"
            validation="required"
            :validation-message="{
              required: 'Please enter your name'
            }"
        />
        <FormKit
            id="region"
            type="text"
            placeholder="Snow"
            label="regioni"
            name="region"
            :classes="{
              outer: 'col-span-2',
            }"
            validation="required"
            :validation-message="{
              required: 'Please enter your name'
            }"
        />
        <FormKit
            id="phone"
            type="text"
            placeholder="000 000 000"
            label="ტელეფონი"
            name="phone"
            :classes="{
              outer: 'col-span-2',
            }"
            validation="required"
            :validation-message="{
              required: 'Please enter your name'
            }"
        />
        <FormKit
            id="additional"
            type="text"
            placeholder=""
            label="დამატებითი ინფორმაცია"
            name="additional"
            :classes="{
              outer: 'col-span-6',
            }"
        />
      </div>
    </div>
    <FormKit
        type="submit"
        :classes="{
                 outer: 'w-full relative ',
                 input: 'w-full text-center flex items-center justify-center h-12'
            }"
    >
      <Icon
          v-if="checkoutStore.loading"
          :icon="IconLoader"
          class="text-5xl text-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      />
      <span
          v-else
          class="text-white"
      >
            გადახდა
          </span>
    </FormKit>
    <div
        v-if="checkoutStore.error"
        class="text-red-500 text-center -mt-5"
    >
      შეტყობინების გაგზავნისას მოხდა შეცდომა, გთხოვთ, სცადოთ მოგვიანებით
    </div>
    <div
        v-else-if="checkoutStore.errorPayment"
        class="text-red-500 text-center -mt-5"
    >
      ბანკთან კავშირის პრობლემა იყო, გთხოვთ, სცადოთ შემდეგში.
    </div>
  </FormKit>
</template>
