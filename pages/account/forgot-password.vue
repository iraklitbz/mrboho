<script setup lang="ts">
const userModel = ref({
  email: ''
})
const supabase = useSupabaseClient();
const loading = ref(false);
const error = ref(false);
const errorMessage = ref("");
const successMessage = ref("");
let successOnSend = false
async function submitForgotPassword() {
  successOnSend = false
  loading.value = true;
  error.value = false;
  successMessage.value = "";

  const { data, error: supabaseError } = await supabase.auth.resetPasswordForEmail(userModel.value.email, {
    redirectTo: "http://localhost:3000/account/reset-password",
  })
  loading.value = false;
  if (supabaseError) {
    successOnSend = false
    error.value = true;
    errorMessage.value = supabaseError.message;
  }
  successOnSend = true
}
</script>

<template>
  <main>
    <Headline
        :title="'ანგარიშზე შესვლა'"
    />
    <section
        class=" mt-10 border-t border-b border-solid border-black"
    >
      <div
          class="px-5 py-10 md:p-10 w-full max-w-3xl m-auto"
      >
        <FormKit
            v-model="userModel"
            id="forgetForm"
            name="forgetForm"
            type="form"
            :actions="false"
            form-class="flex flex-col gap-7 mb-2"
            @submit="submitForgotPassword"
        >
          <FormKit
              id="email"
              type="email"
              placeholder="Jonsnow@winterfall.com"
              label="ელ. ფოსტა"
              name="email"
              validation="required|email"
              :validation-messages="{
                required: 'Please enter a valid email address',
                email: 'Please enter a valid email address'
              }"
          />
          <FormKit
              type="submit"
              :classes="{
                 outer: 'w-full relative ',
                 input: 'w-full text-center flex items-center justify-center h-12'
            }"
          >
            <span
                class="text-white"
            >
            შესვლა
          </span>
          </FormKit>
          <div
              v-if="error"
              class="text-red-500 text-center -mt-5"
          >
            {{ errorMessage }}
          </div>
          <div
              v-if="successOnSend"
              class="text-center"
          >
            <p class="text-green-800 text-center">
              ჩვენ გამოგიგზავნეთ ბმული თქვენი პაროლის აღსადგენად, დიდი მადლობა.
            </p>
            <nuxt-link
                class="mt-10 block"
                to="/"
            >
              მთავარი გვერდი
            </nuxt-link>
          </div>
        </FormKit>
      </div>
    </section>
  </main>
</template>

<style scoped>

</style>
