<template lang="pug">
  article.voice-story-text
    p.enlarge.black-bg.white
      slot
</template>

<script>
export default {
  name: 'VoiceStoryText',
}
</script>

<style lang="scss" scoped>
p.enlarge.white.black-bg {
  display: inline;
  background-color: #181818;
  color: #ffffff;
  br {
    display: none;
    @include pad {
      display: block;
    }
    @include pc {
      display: block;
    }
  }
}
</style>