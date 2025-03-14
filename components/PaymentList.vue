<script setup async lang="ts">
import Icon from '~/components/Icon.vue'
import IconVisa from '~/assets/icons/visa/visa.svg'
import IconMasterCard from '~/assets/icons/visa/mastercard.svg'
import IconMastro from '~/assets/icons/visa/maestro.svg'
const options = [
    { icon: IconVisa, label: 'Visa' },
    { icon: IconMasterCard, label: 'Master card' },
    { icon: IconMastro, label: 'Maestro' },
]
</script>
<template>
  <ul class="flex flex-wrap gap-5 justify-center">
    <li
      v-for="(item, index) in options"
      :key="index"
    >
      <Icon :icon="item.icon" class="text-5xl" :auto-align="false" />
    </li>
  </ul>
</template>



