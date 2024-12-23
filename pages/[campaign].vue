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
      class="md:mt-10"
  >
    <section
        v-for="(campaign, index) in campaignStore().campaign?.slidesCollection?.items"
        :key="index"
        class="grid grid-cols-1 border-b border-solid border-black"
        :class="[index === 0 ? 'border-t' : '', campaign?.onlyText ? 'md:grid-cols-1' : 'md:grid-cols-2']"
    >
      <figure
          v-if="campaign?.image?.url"
          class="max-h-[600px] h-full"
          :class="index % 2 === 0 ? 'order-2 md:order-1' : 'order-2 md:order-2'"
      >
        <nuxt-img
            :src="campaign?.image?.url as string"
            :alt="campaign?.headline as string"
            class="w-full h-full object-cover"
        />
      </figure>

      <div
          class="p-10 flex flex-col justify-between"
          :class="index % 2 === 0 ? 'order-1 md:order-2' : 'order-1 md:order-1'"
      >
        <h2
            v-if="campaign?.onlyText"
            class="text-2xl lg:text-4xl font-bold py-10"
        >
          {{ campaign?.headline }}
        </h2>
        <h2 v-else class="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold uppercase">
          {{ campaign?.headline }}
        </h2>
        <p
            v-if="campaign?.text"
            class="text-xl md:text-2xl lg:text-3xl text-gray-600"
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