<script setup lang="ts">
  import Icon from '~/components/Icon.vue';
  import IconLogo from 'assets/icons/logo.svg';
  import IconInstagram from 'assets/icons/instagram.svg';
  import IconFacebook from 'assets/icons/facebook.svg';
  const socialMedia = [
    {
      name: 'Instagram',
      link: 'https://www.instagram.com/mrboho.geo',
      icon: IconInstagram,
      external: true
    },
    {
      name: 'Facebook',
      link: 'https://www.facebook.com/profile.php?id=61573262527849',
      icon: IconFacebook,
      external: true
    },
    {
      name: 'კონტაქტი',
      link: '/contact',
      external: false
    }
  ]
</script>

<template>
  <footer
    class="bg-gray-50 px-5 md:px-10 py-8"
  >
      <div>
        <Icon
            :icon="IconLogo"
            :auto-align="true"
            class="cursor-pointer text-9xl text-black"
        />
        <div>
          <ul class="flex flex-col md:flex-row text-base gap-7">
            <li
              v-for="(item, index) in socialMedia"
              :key="index"
              class="flex items-center"
            >
              <Icon
                  v-if="item.icon"
                  :icon="item.icon"
                  :auto-align="true"
                  class="cursor-pointer text-xl text-black mr-2"
              />
              <a
                  v-if="item.external"
                  :href="item.link"
                  target="_blank"
              >
                <span
                    class="text-base relative after:bg-black after:absolute after:h-[1px] after:w-0 after:bottom-0.5 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
                >
                {{ item.name }}
              </span>
              </a>
              <nuxt-link
                  v-else
                  :to="item.link"
              >
                <span
                    class="text-base relative after:bg-black after:absolute after:h-[1px] after:w-0 after:bottom-0.5 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
                >
                {{ item.name }}
              </span>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
  </footer>
</template>
