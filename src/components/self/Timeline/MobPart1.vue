<template>
  <div class="mob-part1" ref="mobPart1">
    <div class="mob-part1-text">
      <div
        class="mob-part1-intro"
      >台灣教育改革從1994年410大遊行至今已26年，許多立意良善的改革方向，都在手段錯誤、社會價值觀未翻轉、政府與民間溝通不足下變調，甚至失敗收場。《聯合報》帶讀者進入時間洪流，從政策推動過程中，反思：「為什麼台灣教改，總在失敗？」</div>
      <div class="mob-part1-quote" :class="{ active }">
        <div class="mob-part1-content">教改是全民的，與社會脫離不了關係，如果社會不改善，教育也沒有辦法改革。</div>
        <div class="mob-part1-writter">1994.10.29</div>
        <div class="mob-part1-writter">行政院教育改革審議委員會召集人李遠哲</div>
      </div>
    </div>
    <img
      class="img-fluid"
      :class="{ active }"
      :src="windowSize.width >= 768 ? img.pad : img.mob"
      alt
    />
  </div>
</template>

<script>
export default {
  name: 'MobPart1',
  props: {
    windowSize: { type: Object },
    img: { type: Object },
    active: { type: Boolean },
  },
}
</script>

<style lang="scss" scoped>
.mob-part1 {
  background-color: #000000;
  color: #eeeeee;
  .mob-part1-text {
    padding: 72px 12.5% 120px;
    line-height: 1.7;
    text-align: left;
    @media screen and (max-width: 767.99px) {
      padding: 60px 3.9% 120px;
    }
    @media screen and (max-width: 374.99px) {
      padding: 60px 4.4% 120px;
    }
    .mob-part1-intro {
      font-size: 20px;
    }
    .mob-part1-quote {
      transition: all 1s ease-out;
      transform: translateX(100%);
      opacity: 0;
      &.active {
        transform: translateX(0%);
        opacity: 1;
      }
      .mob-part1-content {
        font-size: 36.8px;
        font-weight: 500;
        margin: 120px 0 20px;
        @media screen and (max-width: 767.99px) {
          margin: 120px 0 0;
        }
        @media screen and (max-width: 374.99px) {
          margin: 90px 0 0;
        }
      }
      .mob-part1-writter {
        font-size: 20px;
        font-weight: 500;
        line-height: 1.5;
      }
    }
  }
  & > img {
    transition: all 1s ease-out;
    opacity: 0;
    &.active {
      opacity: 1;
    }
  }
}
</style>
