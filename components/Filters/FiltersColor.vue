<script setup lang="ts">
import Icon from '~/components/Icon.vue'
import IconClose from '~/assets/icons/close.svg'
const props = defineProps<{
  colors: string[],
  filterIsActive : boolean
}>()
const emit = defineEmits<{
  (e: 'handleFilter', color: string): void
  (e: 'resetFilters'): void
}>()
const colorClasses: Record<string, string> = {
  red: "bg-red-500",
  blue: "bg-blue-700",
  orange: "bg-orange-500",
  yellow: "bg-yellow-400",
  black: "bg-black",
  white: "bg-white",
  green: "bg-green-700",
  purple: "bg-purple-500",
  pink: "bg-pink-700",
  gray: "bg-gray-700",
  brown: "bg-amber-900"
}
</script>

<template>
  <div class="flex  items-center justify-center ">
        <div class="flex items-center justify-between gap-3 bg-gray-100/50 rounded-full h-14 p-1 px-2">
          <div
              v-for="color in colors"
              :key="color"
              class="rounded-full cursor-pointer w-8 h-8 md:w-11 md:h-11"
              :class="colorClasses[color]"
              @click="emit('handleFilter', color)"
          ></div>
          <div
              v-if="filterIsActive"
              class="w-9 h-9 flex items-center justify-center cursor-pointer"
              @click="emit('resetFilters')"
          >
            <Icon :icon="IconClose" class="text-xl" :auto-align="false" />
          </div>
        </div>
  </div>
</template>

<style scoped>

</style>
