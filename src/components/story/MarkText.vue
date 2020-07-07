<template lang="pug">
  mark.mark-text(:class="{'mark-text--active': observableActive}")
    slot
</template>

<script>
import { observableEvent } from '@/mixins/observableEvent.js';

export default {
  name: 'MarkText',
  mixins: [observableEvent],
  data() {
    return {
      observableActive: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.mark-text {
  background: linear-gradient(90deg, #fff8d8 50%, transparent 50%);
  background-position: right bottom;
  background-size: 200% 100%;
  transition: 0;
  &.mark-text--active {
    background-position: left bottom;
    transition: 1.5s ease-in-out;
  }
}
</style>