<script setup lang="ts">
import type { Maybe, OpticalGlassesContenfull, SunglassesContenfull } from "~/types/contenfull-types";
import { useWishList } from "~/store/wishlist"
import IconHeart from "~/assets/icons/heart.svg"
import IconHeartFill from "~/assets/icons/heart-fill.svg"
import Icon from "~/components/Icon.vue";

const props = defineProps<{
  productDetail: Maybe<SunglassesContenfull | OpticalGlassesContenfull>
}>();

const activeIndex = ref(0);
const scrollContainer = ref<HTMLElement | null>(null);

const onScroll = () => {
  if (!scrollContainer.value) return;
  const container = scrollContainer.value;
  const children = Array.from(container.children);
  const index = children.findIndex(
      (child) => child.getBoundingClientRect().top >= container.getBoundingClientRect().top
  );
  if (index !== -1) activeIndex.value = index;
};

const scrollToIndex = (index: number) => {
  if (!scrollContainer.value) return;
  const container = scrollContainer.value;
  const children = Array.from(container.children);

  if ((index === 0 && activeIndex.value === children.length - 1) ||
      (index === children.length - 1 && activeIndex.value === 0)) {
    children[index].scrollIntoView({ behavior: "auto", block: "nearest" });
  } else {
    if (children[index]) {
      children[index].scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }
};

</script>

<template>
  <div class="flex">
    <ul class="flex flex-col w-full col-span-1 md:px-2">
      <li
          v-for="(image, index) in productDetail?.imagesCollection?.items"
          :key="index"
          :class="index === activeIndex ? 'opacity-100' : 'opacity-50'"
          class="p-2 lg:p-5 h-20 w-full md:h-28 lg:h-40 cursor-pointer transition-all duration-300 bg-gray-50"
          @click="scrollToIndex(index)"
      >
        <nuxt-img
            :src="image?.url as string"
            :alt="productDetail?.name as string"
            class="w-full m-auto h-full object-contain"
            format="webp"
            width="200"
            height="200"
        />
      </li>
    </ul>
<div class="relative w-full col-span-5">
  <client-only>
    <button class="cursor-pointer absolute right-5 top-5 z-50" @click="useWishList().toggleProduct(productDetail)">
      <Icon
          class="text-2xl"
          :class="productDetail?.sys?.id && useWishList().isInWishlist(productDetail.sys.id) ? 'text-red-500' : 'text-black'"
          :icon="productDetail?.sys?.id && useWishList().isInWishlist(productDetail.sys.id) ? IconHeartFill : IconHeart"
          :auto-align="false"
      />
    </button>
  </client-only>
    <ul
        ref="scrollContainer"
        class="w-full px-10 bg-gray-50 h-[21rem] md:h-[28rem] lg:h-[41.5rem] overflow-y-auto snap-y snap-mandatory scrollbar-hide relative"
        @scroll="onScroll"
    >

      <li
          v-for="(image, index) in productDetail?.imagesCollection?.items"
          :key="index"
          class="w-full h-full flex items-center justify-center snap-start"
      >
        <nuxt-img
            :src="image?.url as string"
            :alt="productDetail?.name as string"
            class="w-full max-w-4xl m-auto h-full object-contain"
            format="webp"
        />
      </li>
    </ul>
</div>
  </div>
</template>

<style>
.active {
  border: 2px solid #000;
}
.snap-y {
  scroll-snap-type: y mandatory;
}
.snap-start {
  scroll-snap-align: start;
}
.scrollbar-hide {
  scrollbar-width: none;
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>
