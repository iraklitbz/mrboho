<script setup lang="ts">
import IconLoader from "~/assets/icons/loader.svg";
import IconGoogle from "~/assets/icons/google.svg";
import IconFacebook from "~/assets/icons/facebook.svg";
import Icon from "~/components/Icon.vue";
definePageMeta({
  middleware: 'pre-auth'
})
const supabase = useSupabaseClient()
const userModel = ref({
  email: '',
  password: ''
})
const router = useRouter()
const loading = ref(false)
const error = ref(false)
const errorMessage = ref('')
let emailNotConfirmed = false
async function submitLoginForm () {
  loading.value = true
  error.value = false
  const { data, error: signInError } = await supabase.auth.signInWithPassword({
    email: userModel.value.email,
    password: userModel.value.password
  })
  loading.value = false
  if (signInError) {
    error.value = true
    if (signInError.message.includes('Invalid login credentials')) {
      errorMessage.value = 'Invalid email or password.'
    } else if (signInError.message.includes('Email not confirmed')) {
      emailNotConfirmed = true
      errorMessage.value = 'Your email is not confirmed. Please check your inbox.'
    }
    return
  }

  router.push('/account/me')
}
async  function handleLoginWithGoogle() {
  loading.value = true
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: 'http://localhost:3000/account/me',
    }
  })
  loading.value = false
  if (error) {
    console.error('Error logging in with Google:', error.message)
    errorMessage.value = 'Failed to log in with Google. Please try again later.'
  }
  router.push('/account/me')
}
async  function handleLoginWithFacebook() {
  loading.value = true
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'facebook',
    options: {
      redirectTo: 'http://localhost:3000/account/me',
    }
  })
  loading.value = false
  if (error) {
    console.error('Error logging in with Facebook:', error.message)
    errorMessage.value = 'Failed to log in with Facebook. Please try again later.'
  }
  router.push('/account/me')
}
async function resendConfirmationEmail() {
  loading.value = true
  const { data, error } = await supabase.auth.resend({
    type: 'signup',
    email: userModel.value.email
  })
  emailNotConfirmed = false
  router.push('/account/confirm-email')
  if (error) {
    loading.value = false
    console.error('Error sending confirmation email:', error.message)
    errorMessage.value = 'Failed to resend the confirmation email. Please try again later.'
  }
}
</script>

<template>
  <main>
    <Headline
        :title="'ავტორიზაცია'"
    />
    <section
        class=" mt-10 border-t border-b border-solid border-black"
    >
      <div
          class="px-5 py-10 md:p-10 w-full max-w-xl m-auto"
      >
        <div
          class="mb-5"
        >
          <div>
            <button
                type="button"
                class="text-white w-full  bg-[#EA4336] hover:bg-[#EA4336]/90 focus:ring-4 focus:outline-none focus:ring-[#EA4336]/50 font-medium text-sm p-3 text-center inline-flex items-center justify-center mr-2"
                @click="handleLoginWithGoogle()"
            >
              <Icon
                  :icon="IconGoogle"
                  class="text-xl mr-4"
              />
              Google ავტორიზაცია
            </button>
            <button
                type="button"
                class="text-white w-full mt-3 bg-[#156AFE] hover:bg-[#156AFE]/90 focus:ring-4 focus:outline-none focus:ring-[#156AFE]/50 font-medium text-sm p-3 text-center inline-flex items-center justify-center mr-2"
                @click="handleLoginWithFacebook()"
            >
              <Icon
                  :icon="IconFacebook"
                  class="text-xl mr-4"
              />
              Facebook ავტორიზაცია
            </button>
          </div>
        </div>
        <div class="py-3 flex items-center text-md text-gray-800 before:flex-1 before:border-t before:border-gray-300 before:me-6 after:flex-1 after:border-t after:border-gray-300 after:ms-6 ">
          ან
        </div>
        <FormKit
            v-model="userModel"
            id="loginForm"
            name="loginForm"
            type="form"
            :actions="false"
            form-class="flex flex-col gap-7 mb-2"
            @submit="submitLoginForm"
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
              id="password"
              type="password"
              label="პაროლი"
              name="password"
              validation="required"
              :validation-message="{
                required: 'Please enter your password'
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
            <div v-if="emailNotConfirmed">
              <button
                  class="text-black"
                @click="resendConfirmationEmail()"
              >
                <span v-if="!loading">
                  Resend email confirmation
                </span>
                <Icon
                    v-else
                    :icon="IconLoader"
                    class="text-5xl text-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                />
              </button>
            </div>
          </div>
        </FormKit>
        <div
            class="text-center mb-5"
        >
          <nuxt-link
              to="/account/forgot-password"
              class="relative font-bold after:bg-black after:absolute after:h-[1px] after:w-0 after:bottom-0.5 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
          >
            დაგავიწყდათ პაროლი?
          </nuxt-link>
        </div>
        <div
          class="text-center"
        >
          <nuxt-link
              to="/account/register"
              class="relative font-bold after:bg-black after:absolute after:h-[1px] after:w-0 after:bottom-0.5 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
          >
            რეგისტრაცია
          </nuxt-link>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>

</style>
