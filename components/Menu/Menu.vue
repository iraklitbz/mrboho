<script setup lang="ts">
import Icon from "~/components/Icon.vue";
import { toggleMenu } from '~/store/menu';
import IconClose from 'assets/icons/close.svg'
const props = defineProps<{
  mainNavMenu: {
    name: string;
    slug: string;
    component?: string }[]
}>()
const activeSubmenu = ref(false)
const componentSelected = ref('')
function handleComponentSelected(component) {
  if (componentSelected.value === `Lazy${component}`) {
    activeSubmenu.value = false
    componentSelected.value = ''
  } else {
    componentSelected.value = `Lazy${component}`
    activeSubmenu.value = true
  }
}
</script>

<template>
  <div
      class="h-screen fixed left-0 top-0 w-full flex z-40"
  >
    <nav
        class="py-24 px-5 md:px-10 max-w-lg w-full overflow-y-auto relative z-40 bg-white"
    >
      <div class="flex justify-center relative -top-16">
        <nuxt-link
            href="/"
            class="font-bold uppercase text-3xl md:text-4xl"
        >
          <span class="latin">
            MR.BOHO
          </span>
        </nuxt-link>
      </div>
      <button
          class="absolute right-5 top-5 cursor-pointer"
          @click="toggleMenu().handleCloseMenu()"
      >
        <Icon
            :icon="IconClose"
            :auto-align="true"
            class="cursor-pointer text-2xl text-black"
        />
      </button>
      <ul
          class="flex flex-col justify-center gap-5 md:gap-7 text-base"
      >

        <li
            v-for="(item, index) in props.mainNavMenu"
            :key="index"

        >
          <span
              v-if="item.component"
              class="text-xl md:text-4xl flex justify-between items-center relative uppercase after:bg-black after:absolute after:h-[3px] after:w-0 after:bottom-0.5 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
              @click="handleComponentSelected(item.component)"
          >
             {{ item.name }}
          </span>
          <nuxt-link
              v-else
              :to="`/${item.slug}`"
              class="text-xl md:text-4xl relative uppercase after:bg-black after:absolute after:h-[3px] after:w-0 after:bottom-0.5 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
          >
            {{ item.name }}
          </nuxt-link>
        </li>
      </ul>
    </nav>
    <component
        v-if="activeSubmenu"
        class="bg-white relative z-40"
        :is="componentSelected"
    />
  </div>
</template>

<style scoped>

</style>