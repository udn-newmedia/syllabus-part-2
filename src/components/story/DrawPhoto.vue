<template lang="pug">
  section.draw-photo
    div.draw-container
      slot(name='draw')
    div.photo-container
      slot(name='photo')
</template>

<script>
export default {
  name: 'DrawPhoto',
}
</script>

<style lang="scss" scoped>
.draw-photo {
  position: relative;
  width: 100%;
  height: 7rem;
  margin-bottom: 24px;
  @include pc {
    margin-bottom: 64px;
  }
}
.draw-container {
  position: absolute;
  left: 50%;
  top: 0;
  transform: translate(-100%, 0);  
}
.photo-container {
  position: absolute;
  left: 50%;
  transform: translate(0, 100%);  
}
</style>