<script setup lang="ts">
definePageMeta({
  middleware: 'pre-auth'
})
const config = useRuntimeConfig()
const supabase = useSupabaseClient()
const userModel = ref({
  email: '',
  password: '',
  name: '',
  surname: ''
})
const router = useRouter()
const loading = ref(false)
const error = ref(false)
async function submitRegisterForm () {
  loading.value = true
  error.value = false
  const { data, error: signUpError } = await supabase.auth.signUp({
    email: userModel.value.email,
    password: userModel.value.password,
    options: {
      emailRedirectTo: `${config.public.NUXT_PUBLIC_BASE_URL}/account/me`,
      data: {
        full_name: userModel.value.name + ' ' + userModel.value.surname,
      }
    }
  })
  loading.value = false

  if (signUpError) {
    console.error(signUpError)
    error.value = true
    return
  }
  router.push('/account/confirm-email')
}
</script>

<template>
  <main>
    <Headline
        :title="'რეგისტრაცია'"
    />
    <section
        class=" mt-10 border-t border-b border-solid border-black"
    >
      <div
          class="px-5 py-10 md:p-10 w-full max-w-xl m-auto"
      >
          <FormKit
              v-model="userModel"
              id="registerForm"
              name="registerForm"
              type="form"
              :actions="false"
              form-class="flex flex-col gap-7 mb-2"
              @submit="submitRegisterForm"
          >
          <FormKit
              id="name"
              type="text"
              placeholder="Jon"
              label="სახელი"
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
              label="გვარი"
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
              validation="required|contains_numeric|contains_special|contains_uppercase|length:8"
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
            რეგისტრაცია
          </span>
          </FormKit>
          <div
              v-if="error"
              class="text-red-500 text-center -mt-5"
          >
            შეტყობინების გაგზავნისას მოხდა შეცდომა, გთხოვთ, სცადოთ მოგვიანებით
          </div>
        </FormKit>
        <div
            class="text-center"
        >
          <nuxt-link
              to="/account/login"
              class="relative font-bold after:bg-black after:absolute after:h-[1px] after:w-0 after:bottom-0.5 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
          >
            შესვლა
          </nuxt-link>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>

</style>
