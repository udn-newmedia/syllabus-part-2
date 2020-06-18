<template lang="pug">
  span.mark-text
    span.mark-text__text
      slot
    div.mark-text__highlight-container
      mark.mark-text__highlight(:class="{'mark-text__highlight--active': markActive}")
</template>

<script>
export default {
  name: 'MarkText',
  data() {
    return {
      markActive: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.mark-text {
  position: relative;
  .mark-text__text {
    position: relative;
    z-index: 2;
  }
  .mark-text__highlight-container {
    z-index: 1;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    .mark-text__highlight {
      display: inline-block;
      width: 100%;
      height: 100%;
      background: #fff8d8;
      transform: translateX(-101%);
      transition: 1.5s;
      &.mark-text__highlight--active {
        transform: translateX(0);
      }
    }
  }
}
</style>