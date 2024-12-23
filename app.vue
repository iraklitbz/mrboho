<script setup>
import { toggleMenu } from '~/store/menu';
const router = useRouter()

router.afterEach(() => {
  if(toggleMenu().menuIsOpen) {
    toggleMenu().handleCloseMenu()
  }
})

</script>
<template>
  <div class="main ">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
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
<script setup lang="ts">
</script>