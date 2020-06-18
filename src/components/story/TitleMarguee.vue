<template lang="pug">
  article.title-marguee
    h1#title-marguee-1.title-marguee__text 升學而升學
    h1#title-marguee-2.title-marguee__text 升學而升學
</template>

<script>
export default {
  name: 'TitleMarguee'
}
</script>

<style lang="scss" scoped>
.title-marguee {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 50vw;
  margin-bottom: 96px;
  @include pc {
    margin-bottom: 192px;
  }
  .title-marguee__text {
    font-size: 20vw;
    white-space: nowrap;
  }
}

h1#title-marguee-1 {
  position: absolute;
  z-index: 2;
  top: 0;
  left: 100%;
  color: #000000;
  transform: translate(-60vw);
}

h1#title-marguee-2 {
  position: absolute;
  z-index: 1;
  top: 15vw;
  right: 100%;
  color: #eeeeee;
  transform: translate(60vw);
}
</style>