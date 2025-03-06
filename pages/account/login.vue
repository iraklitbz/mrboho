<script setup lang="ts">
import IconLoader from "assets/icons/loader.svg";
import Icon from "~/components/Icon.vue";

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

  router.push('/')
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
            პაროლი დაგავიწყდა
          </nuxt-link>
        </div>
        <div
          class="text-center"
        >
          <nuxt-link
              to="/account/register"
              class="relative font-bold after:bg-black after:absolute after:h-[1px] after:w-0 after:bottom-0.5 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
          >
            ანგარიშის რეგისტრაცია
          </nuxt-link>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>

</style>
