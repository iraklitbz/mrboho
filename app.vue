<script setup lang="ts">
  import { ModalsContainer } from 'vue-final-modal'
  import { toggleMenu } from '~/store/menu'
  const router = useRouter()

  router.afterEach(() => {
    if(toggleMenu().menuIsOpen) {
      toggleMenu().handleCloseMenu()
    }
})

</script>
<template>
  <div class="main">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <ModalsContainer />
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
