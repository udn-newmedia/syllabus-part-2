<template lang="pug">
  div.black-line(:class="{'black-line--top': pos==='top', 'black-line--bottom': pos==='bottom'}")
    div.black-line__line-container
      div.black-line__line(:class="{'black-line__line--active': blackLineActive}")
</template>

<script>
export default {
  name: 'BlackLine',
  props: {
    pos: {
      type: String,
      required: true,
      validator: function (value) {
        return ['top', 'bottom'].indexOf(value) !== -1;
      }
    }
  },
  data() {
    return {
      blackLineActive: true
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
  @include pc {
    width: 280px;
  }
}
.black-line__line {
  width: 100%;
  height: 100%;
  background-color: #000000;
  border-radius: 16px;
  transform: translateX(-101%);
  transition: 1.5s;
  &.black-line__line--active {
    transform: translateX(0);
  }
}
</style>