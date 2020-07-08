<template>
  <div class="part1-page">
    <div class="part1-img" :style="{ backgroundImage: `url(${img})` }" />
    <div class="part1-text">
      <div class="title">台灣教改</div>
      <div class="title">為什麼</div>
      <div class="title-bold">
        <div>總失敗？</div>
      </div>
      <p
        class="content"
      >台灣教育改革從1994年410大遊行至今已26年，許多立意良善的改革方向，都在手段錯誤、社會價值觀未翻轉、政府與民間溝通不足下變調，甚至失敗收場。《聯合報》帶讀者進入時間洪流，從政策推動過程中，反思：「為什麼台灣教改，總在失敗？」</p>
      <div class="arrow-wrapper">
        <NmdArrow />
      </div>
    </div>
  </div>
</template>

<script>
import NmdArrow from '@/components/pinhead/NmdArrow.vue'
import { autoResize_3, sendGaMethods } from '@/mixins/masterBuilder.js'

export default {
  name: 'PCPart1',
  props: { img: { type: String } },
  components: { NmdArrow },
  mixins: [autoResize_3, sendGaMethods],
}
</script>
<style lang="scss" scoped>
.part1-page {
  height: 100vh;
  width: 100vw;
  background: #000;
  display: flex;
  .part1-img {
    width: 57.8%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  .part1-text {
    width: 42.2%;
    height: 100%;
    padding: 11.3vh 0 0 36px;
    color: #eeeeee;
    .title {
      height: 62px;
      font-size: 45px;
      font-family: GenJyuuGothicX-Monospace-Normal;
      line-height: 1.44;
      text-align: left;
    }
    .title-bold {
      height: 118px;
      font-size: 85px;
      font-family: GenJyuuGothicX-Monospace-Heavy;
      font-weight: 900;
      line-height: 1.18;
      text-align: left;
      display: flex;
      & > div {
        align-self: center;
      }
    }

    .content {
      line-height: 1.7;
      font-family: 'Microsoft JhengHei', Roboto, sans-serif;
      font-size: 23px;
      text-align: left;
      color: #eeeeee;
      padding-right: 20%;
    }
    .arrow-wrapper {
      color: #eeeeee;
      display: flex;
      // justify-content: center;
      padding-top: 10%;
    }
  }
}
</style>
