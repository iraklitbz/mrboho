<script setup lang="ts">
import type {CartProduct} from "~/types/local-types"
import IconLoader from "assets/icons/loader.svg"
import IconPaypal from '~/assets/icons/visa/paypal.svg'
import IconBankGeo from '~/assets/icons/visa/bankgeo.svg'
import IconBankTBC from '~/assets/icons/visa/tbcbank.svg'
import Icon from "~/components/Icon.vue"
import { useCheckoutStore } from "~/store/checkout"

const props = defineProps<{
  products: CartProduct[],
  total: string
}>()

const checkoutStore = useCheckoutStore()

const handleSubmit = async () => {
  if (!checkoutStore.paymentMethod) {
    return
  }

  await checkoutStore.handleCheckoutForm(props.products, props.total, checkoutStore.paymentMethod)
}
</script>

<template>
  <FormKit
      v-model="checkoutStore.userOrderForm"
      id="checkoutForm"
      name="checkoutForm"
      type="form"
      :actions="false"
      form-class="flex flex-col mb-2"
      :incomplete-message="false"
      @submit="handleSubmit"
  >
    <div class="mb-10">
      <h3 class="flex justify-between items-center mb-4 text-xl font-bold">კონტაქტი <nuxt-link class="underline text-blue-950" to="/account/login">ავტორიზაცია</nuxt-link></h3>
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
    <div class="mb-10">
      <h3 class="flex justify-between items-center mb-4 text-xl font-bold">მისამართი</h3>
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
              outer: 'col-span-3',
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
              outer: 'col-span-3',
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
    <div class="flex flex-col gap-4">
      <FormKit
          type="submit"
          @click="checkoutStore.paymentMethod = 'bank'"
          :classes="{
          outer: 'w-full relative',
          input: 'w-full text-center flex items-center justify-center h-14 bg-black/80 hover:bg-black transition duration-200 ease-in-out'
        }"
      >

        <span class="text-white text-base flex items-center justify-center h-14 ">
           გადახდა
          <span class="flex items-center justify-center gap-2 ml-5">
            <Icon :icon="IconBankGeo" class="text-3xl" :auto-align="false" />
            <Icon :icon="IconBankTBC" class="text-3xl" :auto-align="false" />
          </span>
        </span>
      </FormKit>
      <div>
        <FormKit
            type="submit"
            @click="checkoutStore.paymentMethod = 'paypal'"
            :classes="{
                outer: 'w-full relative',
                input: 'w-full text-center flex items-center justify-center h-14 bg-yellow-500/80 hover:bg-yellow-500 transition duration-200 ease-in-out',
              }"
        >
          <span class="text-black flex items-center justify-center text-base h-14 ">
           გადახდა PayPal-ით
            <span class="flex items-center justify-center gap-2 ml-5">
            <Icon :icon="IconPaypal" class="text-3xl" :auto-align="false" />
          </span>
          </span>
        </FormKit>
        <p class="text-center text-sm">(თქვენ გადაიხდით <strong>EUR</strong>-ში PayPal-ით)</p>
      </div>
    </div>
    <div
        v-if="checkoutStore.error"
        class="text-red-500 text-center mt-7"
    >
      შეტყობინების გაგზავნისას მოხდა შეცდომა, გთხოვთ, სცადოთ მოგვიანებით
    </div>
    <div
        v-else-if="checkoutStore.errorPayment"
        class="text-red-500 text-center mt-7"
    >
      ბანკთან კავშირის პრობლემა იყო, გთხოვთ, სცადოთ შემდეგში.
    </div>
  </FormKit>
</template>
