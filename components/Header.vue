<script setup lang="ts">
import Menu from '~/components/Menu/Menu.vue';
import { toggleMenu } from '~/store/menu';
const mainNavMenu = ref([
  {
    name: 'Products',
    menu: 'products',
    submenu: [
      {
        name: 'New In',
        slug: 'new-in'
      },
      {
        name: 'Sunglasses',
        component: 'Sunglasses'
      },
      {
        name: 'Optical',
        component: 'Optical'
      }
    ]
  },
  {
    name: 'Everything else',
    menu: 'everythingElse',
    submenu: [
      {
        name: 'About Us',
        slug: 'about-us'
      }
    ]
  }
])
const currentMenuNavbar = ref([]);
const activeMenu = ref<string | null>(null); // Track the currently active menu

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
</script>

<template>
  <header
      class="px-10 pt-10 h-40 z-50 relative"
  >
    <div class="flex justify-between items-start">
      <ul
          class="flex gap-10 text-base z-50 relative w-1/3"
      >

        <li
            v-for="(item, index) in mainNavMenu"
            :key="index"
            class="flex items-center justify-center"
        >
        <span
            class="relative font-bold after:bg-black after:absolute after:h-[1px] after:w-0 after:bottom-0.5 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
            :class="activeMenu === item.menu ? ' after:bg-black after:absolute after:h-[1px] after:bottom-0.5 after:left-0 after:w-full cursor-pointer' : ''"
            @click="handleMenu(item.submenu as [], item.menu as string)"
        >
           {{ item.name }}
        </span>
        </li>
      </ul>
      <h1 class="flex justify-center w-1/3">
        <nuxt-link href="/" class="text-2xl sm:text-3xl md:text-7xl lg:text-8xl font-bold uppercase">
          <span>
            MR.BOHO
          </span>
        </nuxt-link>
      </h1>
      <ul
          class="flex flex-row justify-end gap-10 text-base z-50 relative w-1/3"
      >

        <li
            class="flex items-center justify-center"
        >
          <nuxt-link
              to="/contact"
              class="relative font-bold after:bg-black after:absolute after:h-[1px] after:w-0 after:bottom-0.5 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
          >
           Contact
        </nuxt-link>
        </li>
      </ul>
    </div>
    <Menu
      v-if="toggleMenu().menuIsOpen"
      :main-nav-menu="currentMenuNavbar"
    />
  </header>
</template>

<style scoped>

</style>