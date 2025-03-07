<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
})
const userModel = ref({
  password: '',
  passwordRepeat: ''
});
const supabase = useSupabaseClient();
const router = useRouter();
const errorMessage = ref('');
const error = ref(false);

async function submitResetPasswordForm() {
  if (userModel.value.password !== userModel.value.passwordRepeat) {
    errorMessage.value = "Las contraseñas no coinciden.";
    error.value = true;
    return;
  }

  const { data, error: supabaseError } = await supabase.auth.updateUser({
    password: userModel.value.password,
  });
  await supabase.auth.signOut()
  if (supabaseError) {
    console.error(supabaseError);
    errorMessage.value = "Hubo un error al restablecer la contraseña.";
    error.value = true;
    return
  }

  errorMessage.value = ""
  error.value = false
  router.push('/account/login')
}
</script>

<template>
  <main>
    <Headline
        :title="'პაროლის განახლება'"
    />
    <section
        class="mt-10 border-t border-b border-solid border-black"
    >
      <div
          class="px-5 py-10 md:p-10 w-full max-w-xl m-auto"
      >
        <FormKit
            v-model="userModel"
            id="resetPasswordForm"
            name="resetPasswordForm"
            type="form"
            :actions="false"
            form-class="flex flex-col gap-7 mb-2"
            @submit="submitResetPasswordForm"
        >
          <FormKit
              id="password"
              type="password"
              label="ახალი პაროლი"
              name="password"
              validation="required"
              :validation-message="{
                required: 'Por favor ingresa una contraseña'
              }"
          />
          <FormKit
              id="passwordRepeat"
              type="password"
              label="გაიმეორე პაროლი"
              name="passwordRepeat"
              validation="required"
              :validation-message="{
                required: 'Por favor repite la contraseña'
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
            პაროლის განახლება
          </span>
          </FormKit>
          <div
              v-if="error"
              class="text-red-500 text-center -mt-5"
          >
            {{ errorMessage }}
          </div>
        </FormKit>
      </div>
    </section>
  </main>
</template>
