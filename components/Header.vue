<script setup lang="ts">
import { cartStore } from "~/store/cart"
import Menu from '~/components/Menu/Menu.vue'
import Icon from '~/components/Icon.vue'
import IconHamburguer from '~/assets/icons/hamburguer.svg'
import { toggleMenu } from '~/store/menu'
import DropDown from "~/components/AccountButton/DropDown.vue"
const isMounted = ref(false)
const mainNavMenu = ref([
  {
    name: 'Products',
    menu: 'products',
    submenu: [
      {
        name: 'მზის სათვალეები',
        component: 'Sunglasses'
      },
      {
        name: 'ოპტიკური ჩარჩოები',
        component: 'Optical'
      },
      {
        name: 'ლუქბუქი',
        slug: 'lookbook'
      },
      {
        name: 'ჩვენ ვართ Mr.Boho',
        slug: 'we-are-mr-boho'
      }
    ]
  }
])
const headerRef = ref<HTMLElement | null>(null)
const route = useRoute()
const isHomepage = computed(() => route.path === '/')
const currentMenuNavbar = ref([])
const activeMenu = ref<string | null>(null)
const isScrolled = ref(false)
const user = useSupabaseUser()
function handleMenu(submenu = [], menuName: string) {
  if (activeMenu.value === menuName) {
    toggleMenu().handleToggleMenu();
  } else {
    currentMenuNavbar.value = submenu;
    activeMenu.value = menuName;
    if (!toggleMenu().menuIsOpen) {
      toggleMenu().handleToggleMenu();
    }
  }
}
function handleScroll() {
  isScrolled.value = window.scrollY > 5
}
onMounted(() => {
  isMounted.value = true
  window.addEventListener('scroll', handleScroll);
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
})
</script>

<template>
  <header
      ref="headerRef"
      class="px-5 md:px-10 py-6 z-[100] fixed top-0 left-0 w-full transition-all duration-300 ease-in-out "
      :class="isScrolled ? 'bg-white shadow-md' : 'bg-transparent'"
  >
    <div class="flex justify-between items-center">
      <ul
          class="flex gap-10 text-base relative w-1/3"
      >

        <li
            v-for="(item, index) in mainNavMenu"
            :key="index"
            class="flex items-center justify-center"
        >
        <button
            @click="handleMenu(item.submenu as [], item.menu as string)"
        >
           <Icon
               :icon="IconHamburguer"
               :auto-align="true"
               class="cursor-pointer text-2xl"
               :class="isHomepage && !isScrolled || route.path.includes('we-are-mr-boho') && !isScrolled ? 'text-white' : 'text-black'"
           />
        </button>
        </li>
      </ul>
      <h1
          class="flex flex-col items-center justify-center w-1/3"
      >
        <nuxt-link
            href="/"
            class="font-bold uppercase transition-all ease-in-out duration-300"
            :class="isScrolled && !isScrolled ? 'text-2xl sm:text-3xl md:text-5xl lg:text-6xl' : 'text-3xl sm:text-5xl md:text-7xl lg:text-8xl'"
        >
          <span
              class="latin"
              :class="isHomepage && !isScrolled || route.path.includes('we-are-mr-boho') && !isScrolled ? 'text-white' : 'text-black'"

          >
            MR.BOHO
          </span>
        </nuxt-link>
      </h1>
      <ul
          class="flex flex-row justify-end gap-5 text-base z-40 relative w-1/3"
      >

        <li
            class=" items-center justify-center hidden md:flex"
        >
          <span
              v-if="user"
              class="relative"
              :class="isHomepage && !isScrolled || route.path.includes('we-are-mr-boho') ? 'text-white' : 'text-black'"
          >
            <client-only>
              <DropDown />
            </client-only>
          </span>
          <nuxt-link
            v-else
            class="relative font-bold after:bg-black after:absolute after:h-[1px] after:w-0 after:bottom-0.5 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
            :class="isHomepage && !isScrolled || route.path.includes('we-are-mr-boho') ? 'text-white' : 'text-black'"
            to="/account/login"
          >
            ავტორიზაცია
          </nuxt-link>
        </li>
        <li
            class="flex items-center justify-center"
        >
          <button
              @click="cartStore().handleCartToggle()"
              class="relative font-bold after:bg-black after:absolute after:h-[1px] after:w-0 after:bottom-0.5 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
              :class="isHomepage && !isScrolled || route.path.includes('we-are-mr-boho') ? 'text-white' : 'text-black'"
          >
            კალათა
            <span
            v-if="isMounted"
            >
              ({{ cartStore().cartTotalItems }})
            </span>
          </button>
        </li>
      </ul>
    </div>
    <transition name="fade-left" mode="out-in">
      <Menu
        v-if="toggleMenu().menuIsOpen"
        :main-nav-menu="currentMenuNavbar"
      />
    </transition>
    <transition name="fade" mode="out-in">
      <div
          v-if="toggleMenu().menuIsOpen"
          class="absolute left-0 top-0 bg-black/20 w-full h-screen z-20"
          @click="toggleMenu().handleCloseMenu()"
      ></div>
    </transition>
    <transition name="fade" mode="out-in">
      <Cart
          v-if="cartStore().cartToggle"
      />
    </transition>
  </header>
</template>
