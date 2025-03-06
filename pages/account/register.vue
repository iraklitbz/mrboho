<script setup lang="ts">
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
      emailRedirectTo: 'https://example.com/welcome',
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
        :title="'ანგარიშის შექმნა'"
    />
    <section
        class=" mt-10 border-t border-b border-solid border-black"
    >
      <div
          class="px-5 py-10 md:p-10 w-full max-w-3xl m-auto"
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
            შექმნა
          </span>
          </FormKit>
          <div
              v-if="error"
              class="text-red-500 text-center -mt-5"
          >
            შეტყობინების გაგზავნისას მოხდა შეცდომა, გთხოვთ, სცადოთ მოგვიანებით
          </div>
        </FormKit>
      </div>
    </section>
  </main>
</template>

<style scoped>

</style>
