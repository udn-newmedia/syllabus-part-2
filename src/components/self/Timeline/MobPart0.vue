<template>
  <div class="mob-part0">
    <div class="mob-part0-text">
      <div class="mob-part0-title">台灣教改</div>
      <div class="mob-part0-title">為什麼</div>
      <div class="mob-part0-title mob-part0-title-bold">總失敗？</div>
    </div>
    <img class="img-fluid" :src="windowSize.width >= 768 ? img.pad : img.mob" alt />
  </div>
</template>

<script>
export default {
  name: 'MobPart0',
  props: { windowSize: { type: Object }, img: { type: Object } },
}
</script>

<style lang="scss" scoped>
.mob-part0 {
  background-color: #000000;
  .mob-part0-text {
    padding-top: 36px;
    padding-left: 13.3%;
    @media screen and (max-width: 767.99px) {
      padding-top: 49px;
      padding-left: 4.1%;
    }
    @media screen and (max-width: 374.99px) {
      padding-top: 49px;
      padding-left: 5.3%;
    }
    font-family: GenJyuuGothicX-Monospace-Normal;
    font-size: 50px;
    line-height: 1.3;
    text-align: left;
    color: #eeeeee;
    .mob-part0-title-bold {
      font-family: GenJyuuGothicX-Monospace-Heavy;
      font-size: 75px;
      font-weight: 900;
      line-height: 1.33;
      @media screen and (max-width: 374.99px) {
        font-size: 70px;
      }
    }
  }
}
</style>
