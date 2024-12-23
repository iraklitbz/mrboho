<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Player from '@vimeo/player';

const props = defineProps({
  videoId: {
    type: String,
    required: true
  },
  autoplay: {
    type: Boolean,
    default: false
  },
  controls: {
    type: Boolean,
    default: true
  },
  loop: {
    type: Boolean,
    default: false
  }
});

const vimeoContainer = ref<HTMLElement | null>(null);
let player: Player;

onMounted(() => {
  if (vimeoContainer.value) {
    player = new Player(vimeoContainer.value, {
      id: Number(props.videoId),
      autoplay: true,
      controls: false,
      loop: true,
      muted: true
    });

    // Puedes usar otros métodos de la API de Vimeo para interactuar con el video
    player.on('play', () => {
      console.log('Video is playing');
    });

    player.on('ended', () => {
      console.log('Video ended');
    });
  }
});

</script>
<template>
  <div ref="vimeoContainer" class="vimeo-container aspect-video"></div>
</template>



<style>
.vimeo-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.vimeo-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>