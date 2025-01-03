<script setup lang="ts">
import Icon from '~/components/Icon.vue';
import IconLoader from 'assets/icons/loader.svg';
import {campaignStore} from "~/store/campaign";
const userModel = ref({})
const loading = ref(false)
const error = ref(false)
async function handleSendEmail() {
  loading.value = true;
  error.value = false;
  let msg = {
    from: 'web@mrboho.ge',
    to: 'mrbohoge@gmail.com',
    subject:  `Message from ${userModel.value.name} ${userModel.value.surname}`,
    html:  `<p>${userModel.value.name} ${userModel.value.surname} con el email: ${userModel.value.email}, ha mandado una pregunta mediante el formulario de la web:</p><br>
            <p>Mensaje: <b>${userModel.value.message}</b></p>
            `
  }
  const { data } = await useFetch("/api/send-message", {
    method: "POST",
    body: msg
  });
  if(data) {
    loading.value = false;
    navigateTo("/thankyou")
  } else {
    error.value = true;
    loading.value = false;
  }
}
</script>

<template>
<main>
  <Headline
      :title="'Contact us'"
  />
  <section
      class="grid mt-10 grid-cols-1 border-t border-b md:grid-cols-2 border-solid border-black"
  >
    <div
        class="p-10 w-full max-w-3xl m-auto"
    >
      <FormKit
          v-model="userModel"
          id="contactForm"
          name="contactForm"
          type="form"
          :actions="false"
          form-class="flex flex-col gap-7 mb-2"
          :on-submit-invalid="true"
          :incomplete-message="false"
      >
        <FormKit
            id="name"
            type="text"
            placeholder="Jon Snow"
            label="Name"
            name="name"
            validation="required"
            :validation-message="{
            required: 'Please enter your name'
          }"
        />
        <FormKit
            id="surname"
            type="text"
            placeholder="Snow"
            label="Surname"
            name="surname"
            validation="required"
            :validation-message="{
            required: 'Please enter your surname'
          }"
        />
        <FormKit
            id="email"
            type="email"
            placeholder="Jonsnow@winterfall.com"
            label="Email"
            name="email"
            validation="required|email"
            :validation-messages="{
            required: 'Please enter a valid email address',
            email: 'Please enter a valid email address'
          }"
        />
        <FormKit
            id="message"
            type="textarea"
            placeholder="I have a question"
            label="Your message"
            name="message"
            validation="required"
            :validation-message="{
            required: 'Please enter a message'
          }"
        />
        <FormKit
            id="submit"
            type="button"
            :classes="{
                 outer: 'w-full relative ',
                 input: 'w-full text-center flex items-center justify-center h-12'
            }"
            @click="handleSendEmail()"
        >
          <Icon
              v-if="loading"
              :icon="IconLoader"
              class="text-5xl text-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          />
          <span
              v-else
              class="text-white"
          >
            Send the message
          </span>
        </FormKit>
        <div
            v-if="error"
            class="text-red-500 text-center -mt-5"
        >
          There was an error sending the message, please try again later
        </div>
      </FormKit>
    </div>
    <figure
        class="max-h-[600px] h-full"
    >
      <nuxt-img
          src="https://images.ctfassets.net/4tddvybktz4p/62p67iLFduD3Vmevsc3buy/056429ae2bfb5df3fc19577234bc86ca/00-Lookbook-MRBOHO-FW24-08_web_c82b6bed-271b-4286-86bd-10a83cf1a46b.jpg"
          alt="contact picture"
          class="w-full h-full object-cover"
      />
    </figure>
  </section>
</main>
</template>

<style scoped>

</style>