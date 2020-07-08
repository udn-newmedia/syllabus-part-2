<template lang="pug">
  div.black-line(:class="{'black-line--top': pos==='top', 'black-line--bottom': pos==='bottom' && !isLast}")
    div.black-line__line-container(:class="{'black-line__line-container--black-hole': pos==='blackhole'}")
      div.black-line__line(:class="{'black-line__line--active': observableActive}")
</template>

<script>
import { observableEvent } from '@/mixins/observableEvent.js';

export default {
  name: 'BlackLine',
  mixins: [observableEvent],
  props: {
    pos: {
      type: String,
      validator: function (value) {
        return ['top', 'bottom', 'blackhole'].indexOf(value) !== -1;
      }
    },
    isLast: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      observableActive: false
    }
  },
}
</script>

<style lang="scss" scoped>
.black-line {
  position: relative;
  z-index: 1;
  width: 100%;
  &.black-line--top {
    margin-top: 96px;
  }
  &.black-line--bottom {
    margin-bottom: 96px;
  }
}
.black-line__line-container {
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  width: 35%;
  height: 10px;
  border-radius: 16px;
  @include pc {
    width: 280px;
  }
  &.black-line__line-container--black-hole {
    width: 32%;
    transform: translateX(-100%) rotate(45deg);
    transform-origin: right bottom;
    @include pad {
      width: 220px;
      transform: translateX(-100%) rotate(55deg);
    }
    @include pc {
      width: 220px;
      transform: translateX(-100%) rotate(55deg);
    }
  }
}
.black-line__line {
  width: 100%;
  height: 100%;
  background-color: #000000;
  border-radius: 16px;
  transform: translateX(-101%);
  transition: 0;
  &.black-line__line--active {
    transform: translateX(0);
    transition: 0.6s;
  }
}
</style>