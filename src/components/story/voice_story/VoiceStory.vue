<template lang="pug">
  section.voice-story
    .voice-story__bg(:style="{backgroundImage}")
    .voice-story__content.article
      VoiceStoryPlay
      VoiceStoryText
        slot
</template>

<script>
import { autoResize_3, selectSrcMethod_3 } from '@/mixins/masterBuilder.js';

import VoiceStoryPlay from './VoiceStoryPlay.vue';
import VoiceStoryText from './VoiceStoryText.vue';

export default {
  name: 'VoiceStory',
  mixins: [autoResize_3, selectSrcMethod_3],
  components: {
    VoiceStoryPlay,
    VoiceStoryText
  },
  props: {
    bgMob: {
      type: String,
    },
    bgPad: {
      type: String,
    },
    bgPc: {
      type: String,
    },
    voiceSrc: {
      type: String,
    },
  },
  computed: {
    backgroundImage() {
      return `url(${this.selectSrc_3(this.bgMob, this.bgPad, this.bgPc)})`;
    }
  },
}
</script>

<style lang="scss" scoped>
.voice-story {
  position: relative;
  width: 100%;
}
.voice-story__bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-attachment: fixed;
}
.voice-story__content {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  min-height: 100vh;
}
</style>