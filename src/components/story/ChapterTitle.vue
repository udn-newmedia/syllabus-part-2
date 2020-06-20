<template lang="pug">
  header.chapter-title
    slot
</template>

<script>
export default {
  name: 'ChapterTitle'
}
</script>

<style lang="scss" scoped>
.chapter-title {
  position: relative;
  width: 100%;
  margin: 0 auto 16px auto;
  padding: 24px 16px 24px 16px;
  @include pad {
    width: 660px;
    padding: 0;
  }
  @include pc {
    width: 1040px;
    padding: 0;
  }
}
</style>