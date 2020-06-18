<template lang="pug">
  div.voice-story-play
    button.voice-story-play__play-button(
      aria-label="play-button"
      name="play-button"
      @click="handleButtonClick"
    )
      img.voice-story-play__play-button__icon(
        v-if="isPlay"
        :src="require('~/img/story/play_button/stop.svg')"
      )
      img.voice-story-play__play-button__icon(
        v-else
        :src="require('~/img/story/play_button/play.svg')"
      )
    div.voice-story-play__wave
</template>

<script>
export default {
  name: 'VoiceStoryPlay',
  data() {
    return {
      isPlay: false
    }
  },
  methods: {
    handleButtonClick() {
      this.isPlay = !this.isPlay;
    }
  },
}
</script>

<style lang="scss" scoped>
button.voice-story-play__play-button {
  height: 56px;
  width: 56px;
  margin-bottom: 16px;
  cursor: pointer;
  @include pad {
    height: 67px;
    width: 67px;
  }
  @include pc {
    height: 67px;
    width: 67px;
  }
  @include clean-btn;
  img.voice-story-play__play-button__icon {
    width: 100%;
    height: 100%;
  }
}
</style>