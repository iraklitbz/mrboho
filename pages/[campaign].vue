<script setup lang="ts">
import { campaignStore } from "~/store/campaign"
const route = useRoute()
await campaignStore().fetchCampaign(route.params.campaign as string)
if(campaignStore().campaign === null || campaignStore().campaign === undefined) {
  navigateTo('/404')
}
</script>

<template>
  <main
      v-if="!campaignStore().campaign?.onlyImages"
      class="mt-10 md:mt-10"
  >
    <section
        v-for="(campaign, index) in campaignStore().campaign?.slidesCollection?.items"
        :key="index"
        class="relative"
        :class="[
            index === 0 ? 'border-t' : '',
            campaign?.onlyText && campaign?.privateName !== 'hero' ? 'md:grid-cols-1' : 'md:grid-cols-2',
            campaign?.privateName === 'hero' ? 'h-screen -mt-40' : 'grid grid-cols-1 border-b border-solid border-black'
          ]"
    >
      <figure
          v-if="campaign?.image?.url"
          class="h-full"
          :class="[
              index % 2 === 0 && campaign?.privateName !== 'hero' ? 'order-2 md:order-1' : 'order-2 md:order-2',
              campaign?.privateName === 'hero' ? 'absolute top-0 left-0' : 'max-h-[600px]'
            ]"
      >
        <nuxt-img
            :src="campaign?.image?.url as string"
            :alt="campaign?.headline as string"
            class="w-full h-full object-cover"
            :class="campaign?.privateName === 'hero' ? 'w-full h-full object-cover' : ''"
        />
      </figure>

      <div
          :class="[
              index % 2 === 0  && campaign?.privateName !== 'hero' ? 'order-1 md:order-2' : 'order-1 md:order-1',
              campaign?.privateName === 'hero' ? 'flex flex-col items-center absolute left-1/2 -translate-x-1/2 bottom-10 w-full z-20' : 'px-5 py-10 md:p-10 flex flex-col justify-between'
          ]"
      >
        <h2
            v-if="campaign?.onlyText"
            class="text-xl lg:text-4xl font-bold !leading-[1.2]">
          {{ campaign?.headline }}
        </h2>
        <h2
            v-else
            :class="campaign?.privateName === 'hero' ? 'text-3xl latin w-full sm:text-5xl text-white md:text-7xl font-bold uppercase lg:text-8xl  text-center md:px-10 px-5' : 'text-xl sm:text-3xl md:text-5xl lg:text-5xl font-bold uppercase'"
        >
          {{ campaign?.headline }}
        </h2>
        <p
            v-if="campaign?.text"
            :class="campaign?.privateName === 'hero' ? 'text-xl w-full sm:text-3xl text-white text-center mt-3 latin px-5' : 'text-xl md:text-2xl lg:text-3xl text-gray-600 mt-2 md:mt-0'"
        >
          {{ campaign?.text }}
        </p>
      </div>
    </section>
  </main>
  <main
      v-else
      class="md:mt-10"
  >
    <section
        v-for="(campaign, index) in campaignStore().campaign?.slidesCollection?.items"
        :key="index"
    >
      <figure
          v-if="campaign?.image?.url"
          class="aspect-video"
      >
        <nuxt-img
            :src="campaign?.image?.url as string"
            :alt="campaign?.headline as string"
            class="w-full h-full object-cover"
        />
      </figure>
    </section>
  </main>
</template>

<style scoped>
</style>