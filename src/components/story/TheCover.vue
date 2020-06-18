<template lang="pug">
  section.the-cover
    p.white 2019年，高三，我做了一個決定：
    h1.white 不上大學
    p.white by 小雅（化名）
    NmdArrow
</template>

<script>
import NmdArrow from '@/components/pinhead/NmdArrow.vue';

export default {
  name: 'TheCover',
  components: {
    NmdArrow
  },
}
</script>

<style lang="scss" scoped>
.the-cover {
  background-color: #181818;
}
</style>