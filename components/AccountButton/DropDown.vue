<script setup lang="ts">
import UserIcon from "~/components/AccountButton/UserIcon.vue"
import { vOnClickOutside } from '@vueuse/components'
const user = useSupabaseUser()
const supabase = useSupabaseClient()
const router = useRouter()
const dropdownToggle = ref(false)
function handleToggle() {
  dropdownToggle.value = !dropdownToggle.value
}
function handleCloseDropDown() {
  dropdownToggle.value = false
}
function handleLogout() {
  supabase.auth.signOut()
  handleCloseDropDown()
  router.push('/account/login')
}
</script>

<template>
  <nav>
    <ul
      v-on-click-outside="handleCloseDropDown"
    >
      <li class="relative">
        <nuxt-link
            v-if="!user"
            to="/account/login"
            class="relative font-bold after:bg-black after:absolute after:h-[1px] after:w-0 after:bottom-0.5 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
        >
          <span>Account</span>
        </nuxt-link>
        <UserIcon
          v-else
          @click="handleToggle()"
          :user-name="user?.user_metadata?.full_name"
        />
        <ul
          v-if="dropdownToggle"
          class="absolute"
        >
            <li
              class="mt-1"
            >
              <nuxt-link
                  to="/account/me"
                  class="relative font-bold after:bg-black after:absolute after:h-[1px] after:w-0 after:bottom-0.5 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
                  @click="handleCloseDropDown()"
              >
                <span>პროფილი</span>
              </nuxt-link>
            </li>
          <li
              class="mt-1"
          >
            <button
                class="relative text-red-600 font-bold after:bg-red-600 after:absolute after:h-[1px] after:w-0 after:bottom-0.5 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
                @click="handleLogout()"
            >
              გასვლა
            </button>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<style scoped>

</style>
