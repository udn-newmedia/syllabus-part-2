<template lang="pug">
  article.voice-story-text
    p.enlarge.white.black-bg
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