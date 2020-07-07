<template lang="pug">
  span.tilt-text(:class="{'tilt-text--reverse': reverse}" :style="{transform}")
    p.enlarge.tilt {{text}}
    div.tilt-text__mark-container
      div.tilt-text__mark(:class="{'tilt-text__mark--active': observableActive}")
</template>

<script>
import { observableEvent } from '@/mixins/observableEvent.js';

export default {
  name: "TiltText",
  mixins: [observableEvent],
  props: {
    text: {
      type: String,
      required: true
    },
    reverse: {
      type: Boolean,
      default: false
    },
    rotateDegree: {
      type: String,
      reguire: true,
      validator: function (value) {
        return value.indexOf('deg') !== -1;
      }
    }
  },
  data() {
    return {
      observableActive: false,
    };
  },
  computed: {
    transform() {
      return `rotate(${this.observableActive ? this.rotateDegree : 0})`;
    }
  },
};
</script>

<style lang="scss" scoped>
.tilt-text {
  position: relative;
  display: inline-block;
  transition: 0.333s;
  transform-origin: -1.25rem 2.5rem;
  &.tilt-text--reverse {
    transform-origin: 100% 2.5rem;
  }
  .tilt-text__mark-container {
    overflow: hidden;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    border-radius: 8px;
    .tilt-text__mark {
      width: 100%;
      height: 8px;
      background-color: #000000;
      border-radius: 8px;
      transform: translateX(-101%);
      transition: 0;
      &.tilt-text__mark--active{
        transform: translateX(0);
        transition: 0.6s 0.111s;
      }
    }
  }
}
p.enlarge.tilt {
  margin: 0;
}
</style>